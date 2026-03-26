/* ========================================
   Capitol Boxes — Main Game Loop
   ======================================== */

function onEdgeClick(e) {
  if (gameState.phase !== 'playing' || gameState.currentTurn !== 'player') return;

  var edgeKey = e.currentTarget.dataset.edge;
  if (gameState.edges[edgeKey]) return; // Already drawn

  placeEdge(edgeKey, 'player');
}

function placeEdge(edgeKey, owner) {
  gameState.edges[edgeKey] = owner;
  gameState.lastEdge = edgeKey;
  drawEdge(edgeKey, owner);

  // Check for completed boxes
  var adjacentBoxes = getBoxesAdjacentToEdge(edgeKey);
  var completedBoxes = [];

  adjacentBoxes.forEach(function(box) {
    var boxKey = box.r + '_' + box.c;
    if (!gameState.boxes[boxKey] && isBoxComplete(box.r, box.c, gameState.edges)) {
      completedBoxes.push(box);
    }
  });

  if (completedBoxes.length > 0) {
    if (owner === 'player') {
      // Player must answer questions
      gameState.pendingBoxes = completedBoxes;
      var q = getNextQuestion();
      setTimeout(function() {
        showQuestion(q);
      }, 350);
    } else {
      // AI auto-claims all completed boxes
      completedBoxes.forEach(function(box) {
        var boxKey = box.r + '_' + box.c;
        gameState.boxes[boxKey] = 'ai';
        gameState.score.ai++;
        claimBox(box.r, box.c, 'ai');
      });
      updateScoreDisplay();

      if (isGameOver()) {
        endGame();
        return;
      }

      // AI gets another turn (chain reaction)
      setTimeout(function() {
        doAiTurn();
      }, 400);
    }
  } else {
    // No box completed — switch turns
    if (owner === 'player') {
      gameState.currentTurn = 'ai';
      setEdgesInteractive(false);
      showAiQuip('turnStart');
      setTimeout(doAiTurn, 600 + Math.random() * 400);
    } else {
      gameState.currentTurn = 'player';
      gameState.phase = 'playing';
      setEdgesInteractive(true);
      setStatusMessage("Your turn \u2014 pick a line!");
    }
  }
}

function doAiTurn() {
  if (gameState.phase !== 'playing') return;

  var available = getAvailableEdges();
  if (available.length === 0) {
    if (isGameOver()) endGame();
    return;
  }

  var edgeKey = aiSelectEdge(gameState.aiDifficulty);
  if (!edgeKey) return;

  setStatusMessage("Senator Square is thinking...", true);

  setTimeout(function() {
    placeEdge(edgeKey, 'ai');
  }, 300 + Math.random() * 300);
}

function startGame(difficulty) {
  gameState = createInitialState(difficulty);
  initQuestionQueue();

  showScreen('game-screen');
  syncDifficultyDropdown();
  updateScoreDisplay();
  setStatusMessage("Your turn \u2014 pick a line!");

  // Small delay to let layout settle before measuring board size
  setTimeout(function() {
    initBoard();
    setEdgesInteractive(true);
    showAiQuip('gameStart');
    startBonusTimer();
  }, 50);
}

function endGame() {
  gameState.phase = 'game-over';
  gameState.gameEndTime = Date.now();
  stopBonusTimer();
  setEdgesInteractive(false);

  // Show end quip
  if (gameState.score.player > gameState.score.ai) {
    showAiQuip('gameEndWin');
  } else if (gameState.score.player < gameState.score.ai) {
    showAiQuip('gameEndLose');
  } else {
    showAiQuip('gameEndTie');
  }

  // Transition to report after a short delay
  setTimeout(function() {
    renderReport();
    showScreen('report-screen');
  }, 1500);
}

/* ========================================
   Initialization
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Menu difficulty buttons
  var diffBtns = document.querySelectorAll('.diff-btn');
  diffBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      diffBtns.forEach(function(b) { b.classList.remove('selected'); });
      btn.classList.add('selected');
    });
  });

  // Start button
  document.getElementById('start-btn').addEventListener('click', function() {
    var selected = document.querySelector('.diff-btn.selected');
    var difficulty = selected ? selected.dataset.difficulty : 'medium';
    startGame(difficulty);
  });

  // In-game difficulty dropdown (restarts game)
  document.getElementById('difficulty-select').addEventListener('change', function() {
    var newDiff = this.value;
    startGame(newDiff);
  });

  // Help modal
  document.getElementById('help-btn').addEventListener('click', function() {
    document.getElementById('help-modal').classList.add('visible');
    document.getElementById('help-modal').setAttribute('aria-hidden', 'false');
  });

  document.getElementById('help-close-btn').addEventListener('click', function() {
    document.getElementById('help-modal').classList.remove('visible');
    document.getElementById('help-modal').setAttribute('aria-hidden', 'true');
  });

  // Close help modal on backdrop click
  document.getElementById('help-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('visible');
      this.setAttribute('aria-hidden', 'true');
    }
  });
});
