/* ========================================
   Capitol Boxes — Question System
   ======================================== */

function shuffleArray(arr) {
  var shuffled = arr.slice();
  for (var i = shuffled.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
}

function initQuestionQueue() {
  gameState.questionQueue = shuffleArray(QUESTION_BANK.map(function(q) { return q.id; }));
}

function getNextQuestion() {
  if (gameState.questionQueue.length === 0) {
    // Re-add incorrectly answered questions
    var wrongIds = gameState.questionsAsked
      .filter(function(q) { return !q.correct; })
      .map(function(q) { return q.id; });

    if (wrongIds.length > 0) {
      gameState.questionQueue = shuffleArray(wrongIds);
    } else {
      // Fallback: reshuffle all
      gameState.questionQueue = shuffleArray(QUESTION_BANK.map(function(q) { return q.id; }));
    }
  }

  var qId = gameState.questionQueue.shift();
  return QUESTION_BANK.find(function(q) { return q.id === qId; });
}

function showQuestion(question) {
  gameState.currentQuestion = question;
  gameState.phase = 'question';
  setEdgesInteractive(false);

  var modal = document.getElementById('question-modal');
  var categoryEl = document.getElementById('modal-category');
  var questionText = document.getElementById('question-text');
  var optionsContainer = document.getElementById('options-container');
  var explanationBox = document.getElementById('explanation-box');
  var timerBar = document.getElementById('timer-bar');

  // Reset
  explanationBox.classList.remove('visible');
  timerBar.style.width = '100%';
  timerBar.className = 'timer-bar';

  categoryEl.textContent = CATEGORY_LABELS[question.category] || question.category;
  questionText.textContent = question.question;

  // Build options
  optionsContainer.innerHTML = '';
  var letters = ['A', 'B', 'C', 'D'];

  question.options.forEach(function(opt, idx) {
    var btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.index = idx;

    var letterSpan = document.createElement('span');
    letterSpan.className = 'option-letter';
    letterSpan.textContent = letters[idx];

    var textSpan = document.createElement('span');
    textSpan.className = 'option-text';
    textSpan.textContent = opt;

    btn.appendChild(letterSpan);
    btn.appendChild(textSpan);
    btn.addEventListener('click', function() {
      handleAnswer(idx);
    });

    optionsContainer.appendChild(btn);
  });

  // Show modal
  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');

  // Start timer
  gameState.timerStart = Date.now();
  startTimer();
}

function startTimer() {
  if (gameState.timerInterval) clearInterval(gameState.timerInterval);

  gameState.timerInterval = setInterval(function() {
    var elapsed = Date.now() - gameState.timerStart;
    var remaining = Math.max(0, gameState.timerDuration - elapsed);
    var pct = (remaining / gameState.timerDuration) * 100;

    var timerBar = document.getElementById('timer-bar');
    timerBar.style.width = pct + '%';

    if (pct < 20) {
      timerBar.className = 'timer-bar danger';
    } else if (pct < 50) {
      timerBar.className = 'timer-bar warning';
    }

    if (remaining <= 0) {
      clearInterval(gameState.timerInterval);
      handleAnswer(-1); // Time's up = wrong
    }
  }, 50);
}

function handleAnswer(selectedIndex) {
  if (gameState.phase !== 'question' || !gameState.currentQuestion) return;

  // Prevent double-answer
  var optionBtns = document.querySelectorAll('.option-btn');
  optionBtns.forEach(function(btn) { btn.classList.add('answered'); });

  clearInterval(gameState.timerInterval);

  var question = gameState.currentQuestion;
  var correct = selectedIndex === question.answer;
  var elapsed = Date.now() - gameState.timerStart;

  // Record
  gameState.questionsAsked.push({
    id: question.id,
    standard: question.standard,
    category: question.category,
    correct: correct,
    timeMs: elapsed,
    selectedIndex: selectedIndex,
    question: question
  });
  gameState.totalQuestionsAsked++;

  if (correct) {
    gameState.questionsCorrect++;
    gameState.streak++;
    if (gameState.streak > gameState.bestStreak) {
      gameState.bestStreak = gameState.streak;
    }
  } else {
    gameState.questionsWrong++;
    gameState.streak = 0;
  }

  // Visual feedback
  showAnswerFeedback(selectedIndex, question.answer, correct, question.explanation);

  // Resolve the pending box
  var pendingBox = gameState.pendingBoxes.shift();

  var delay = correct ? 2000 : 2500;

  setTimeout(function() {
    var boxOwner = correct ? 'player' : 'ai';
    var boxKey = pendingBox.r + '_' + pendingBox.c;
    gameState.boxes[boxKey] = boxOwner;
    gameState.score[boxOwner]++;
    claimBox(pendingBox.r, pendingBox.c, boxOwner);
    updateScoreDisplay();

    // Close modal
    var modal = document.getElementById('question-modal');
    modal.classList.remove('visible');
    modal.setAttribute('aria-hidden', 'true');

    // Check if more pending boxes
    if (gameState.pendingBoxes.length > 0) {
      setTimeout(function() {
        var nextQ = getNextQuestion();
        showQuestion(nextQ);
      }, 400);
      return;
    }

    // Check game over
    if (isGameOver()) {
      endGame();
      return;
    }

    // Determine next turn
    if (correct) {
      // Player gets another turn
      gameState.phase = 'playing';
      gameState.currentTurn = 'player';
      setEdgesInteractive(true);
      setStatusMessage("Correct! Go again \u2014 pick a line!");
      showAiQuip('playerCorrect');
    } else {
      // Turn passes to AI
      gameState.phase = 'playing';
      gameState.currentTurn = 'ai';
      showAiQuip('playerIncorrect');
      setTimeout(doAiTurn, 600);
    }
  }, delay);
}

function showAnswerFeedback(selected, correctIdx, isCorrect, explanation) {
  var optionBtns = document.querySelectorAll('.option-btn');

  optionBtns.forEach(function(btn, idx) {
    if (idx === correctIdx) {
      btn.classList.add('correct-answer');
    } else if (idx === selected && !isCorrect) {
      btn.classList.add('wrong-answer');
    } else {
      btn.classList.add('dimmed');
    }
  });

  // Show explanation
  var explanationBox = document.getElementById('explanation-box');
  var explanationText = document.getElementById('explanation-text');
  explanationText.textContent = explanation;
  explanationBox.classList.add('visible');
}

function isGameOver() {
  return Object.keys(gameState.boxes).length >= TOTAL_BOXES;
}
