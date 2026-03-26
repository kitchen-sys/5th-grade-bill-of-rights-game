/* ========================================
   Capitol Boxes — UI Updates & DOM Helpers
   ======================================== */

function updateScoreDisplay() {
  document.getElementById('player-score').textContent = gameState.score.player;
  document.getElementById('ai-score').textContent = gameState.score.ai;

  // Score bars (percentage of 16 boxes)
  var playerPct = (gameState.score.player / TOTAL_BOXES) * 100;
  var aiPct = (gameState.score.ai / TOTAL_BOXES) * 100;
  document.getElementById('player-bar').style.width = playerPct + '%';
  document.getElementById('ai-bar').style.width = aiPct + '%';

  // Streak
  document.getElementById('streak-value').textContent = gameState.streak;

  // Questions counter
  document.getElementById('questions-value').textContent =
    gameState.questionsCorrect + '/' + gameState.totalQuestionsAsked;
}

function setStatusMessage(text, isAi) {
  var el = document.getElementById('status-message');
  el.textContent = text;
  if (isAi) {
    el.classList.add('ai-speaking');
  } else {
    el.classList.remove('ai-speaking');
  }
}

function showAiQuip(trigger) {
  var line = getAiLine(gameState.aiDifficulty, trigger);
  if (line) {
    setStatusMessage('"' + line + '"', true);
  }
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(function(s) {
    s.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

function syncDifficultyDropdown() {
  var dropdown = document.getElementById('difficulty-select');
  dropdown.value = gameState.aiDifficulty;
}
