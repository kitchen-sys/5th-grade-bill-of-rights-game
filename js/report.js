/* ========================================
   Capitol Boxes — End-Game Report
   ======================================== */

function renderReport() {
  var container = document.getElementById('report-container');
  var s = gameState;

  // Determine result
  var resultText, resultClass;
  if (s.score.player > s.score.ai) {
    resultText = '\u2605 \u2605 \u2605  VICTORY  \u2605 \u2605 \u2605';
    resultClass = 'victory';
  } else if (s.score.player < s.score.ai) {
    resultText = 'DEFEAT';
    resultClass = 'defeat';
  } else {
    resultText = 'TIE GAME';
    resultClass = 'tie';
  }

  // Calculate category stats
  var categoryStats = {};
  s.questionsAsked.forEach(function(qa) {
    if (!categoryStats[qa.category]) {
      categoryStats[qa.category] = { total: 0, correct: 0 };
    }
    categoryStats[qa.category].total++;
    if (qa.correct) categoryStats[qa.category].correct++;
  });

  // Build category bars HTML
  var categoryBarsHtml = '';
  var categoryOrder = ['branches', 'checks-and-balances', 'bill-of-rights', 'founding-docs', 'preamble', 'civic-virtue', 'civic-participation', 'civic-responsibility'];

  categoryOrder.forEach(function(cat) {
    var stat = categoryStats[cat];
    if (!stat) return;

    var pct = Math.round((stat.correct / stat.total) * 100);
    var level = pct === 100 ? 'perfect' : (pct > 0 ? 'partial' : 'none');
    var icon = pct === 100 ? '\u2713' : (pct > 0 ? '\u25CB' : '\u2717');
    var label = CATEGORY_LABELS[cat] || cat;

    categoryBarsHtml += '<div class="category-row">' +
      '<span class="category-icon ' + level + '">' + icon + '</span>' +
      '<span class="category-name">' + label + '</span>' +
      '<div class="category-bar-track"><div class="category-bar-fill ' + level + '" style="width:' + pct + '%"></div></div>' +
      '<span class="category-fraction">' + stat.correct + '/' + stat.total + '</span>' +
      '<span class="category-pct">' + pct + '%</span>' +
      '</div>';
  });

  // Build missed questions HTML
  var missedHtml = '';
  var letters = ['A', 'B', 'C', 'D'];
  s.questionsAsked.forEach(function(qa) {
    if (qa.correct) return;
    var q = qa.question;
    var yourAnswer = qa.selectedIndex >= 0 ? q.options[qa.selectedIndex] : '(Time expired)';
    var correctAnswer = q.options[q.answer];

    missedHtml += '<div class="missed-question">' +
      '<p class="missed-q-text">' + escapeHtml(q.question) + '</p>' +
      '<p class="missed-answer your-answer"><span class="label">Your answer: </span>' + escapeHtml(yourAnswer) + '</p>' +
      '<p class="missed-answer correct-answer"><span class="label">Correct: </span>' + escapeHtml(correctAnswer) + '</p>' +
      '<p class="missed-explanation">' + escapeHtml(q.explanation) + '</p>' +
      '</div>';
  });

  // Accuracy
  var accuracy = s.totalQuestionsAsked > 0 ? Math.round((s.questionsCorrect / s.totalQuestionsAsked) * 100) : 0;

  container.innerHTML =
    '<div class="report-header">' +
      '<h2 class="report-title">\u2696 GAME COMPLETE \u2696</h2>' +
      '<div class="report-scores">' +
        '<div class="report-score-card">' +
          '<div class="report-score-label" style="color:var(--player-color)">YOU</div>' +
          '<div class="report-score-number" style="color:var(--player-color)">' + s.score.player + '</div>' +
          '<div class="report-score-unit">boxes</div>' +
        '</div>' +
        '<div class="report-vs">vs</div>' +
        '<div class="report-score-card">' +
          '<div class="report-score-label" style="color:var(--ai-color)">SEN. SQUARE</div>' +
          '<div class="report-score-number" style="color:var(--ai-color)">' + s.score.ai + '</div>' +
          '<div class="report-score-unit">boxes</div>' +
        '</div>' +
      '</div>' +
      '<div class="report-result ' + resultClass + '">' + resultText + '</div>' +
    '</div>' +

    '<div class="report-section">' +
      '<div class="report-section-title">Civics Knowledge Report</div>' +
      '<div class="report-stats">' +
        '<div class="report-stat">' +
          '<div class="report-stat-number">' + s.totalQuestionsAsked + '</div>' +
          '<div class="report-stat-label">Questions</div>' +
        '</div>' +
        '<div class="report-stat">' +
          '<div class="report-stat-number" style="color:var(--correct)">' + s.questionsCorrect + '</div>' +
          '<div class="report-stat-label">Correct</div>' +
        '</div>' +
        '<div class="report-stat">' +
          '<div class="report-stat-number" style="color:var(--incorrect)">' + s.questionsWrong + '</div>' +
          '<div class="report-stat-label">Incorrect</div>' +
        '</div>' +
        '<div class="report-stat">' +
          '<div class="report-stat-number">' + accuracy + '%</div>' +
          '<div class="report-stat-label">Accuracy</div>' +
        '</div>' +
        '<div class="report-stat">' +
          '<div class="report-stat-number" style="color:var(--gold)">' + s.bestStreak + '</div>' +
          '<div class="report-stat-label">Best Streak</div>' +
        '</div>' +
      '</div>' +
    '</div>' +

    (categoryBarsHtml ? '<div class="report-section">' +
      '<div class="report-section-title">Performance by Category</div>' +
      '<div class="category-bars">' + categoryBarsHtml + '</div>' +
    '</div>' : '') +

    (missedHtml ? '<div class="report-section">' +
      '<div class="report-section-title">Review Missed Questions</div>' +
      missedHtml +
    '</div>' : '') +

    '<div class="report-buttons">' +
      '<button class="report-btn primary" id="play-again-btn">Play Again</button>' +
      '<button class="report-btn secondary" id="new-diff-btn">New Difficulty</button>' +
      '<button class="report-btn secondary" id="print-btn">Print Report</button>' +
    '</div>';

  // Button handlers
  document.getElementById('play-again-btn').addEventListener('click', function() {
    startGame(gameState.aiDifficulty);
  });

  document.getElementById('new-diff-btn').addEventListener('click', function() {
    showScreen('menu-screen');
  });

  document.getElementById('print-btn').addEventListener('click', function() {
    window.print();
  });
}

function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
