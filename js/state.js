/* ========================================
   Capitol Boxes — Game State
   ======================================== */

var GRID_ROWS = 4;
var GRID_COLS = 4;
var DOT_ROWS = GRID_ROWS + 1;  // 5
var DOT_COLS = GRID_COLS + 1;  // 5
var TOTAL_BOXES = GRID_ROWS * GRID_COLS;  // 16
var TIMER_DURATION = 15000;  // 15 seconds
var BONUS_QUESTION_INTERVAL = 30000;  // 30 seconds

var gameState = null;

function createInitialState(difficulty) {
  return {
    phase: 'playing',
    edges: {},
    boxes: {},
    currentTurn: 'player',
    lastEdge: null,
    score: { player: 0, ai: 0 },
    streak: 0,
    bestStreak: 0,
    questionQueue: [],
    currentQuestion: null,
    pendingBoxes: [],
    timerStart: null,
    timerInterval: null,
    questionsAsked: [],
    questionsCorrect: 0,
    questionsWrong: 0,
    totalQuestionsAsked: 0,
    aiDifficulty: difficulty || 'medium',
    aiName: 'Senator Square',
    timerDuration: TIMER_DURATION,
    bonusTimerInterval: null,
    bonusTimerLastTick: null,
    isBonusQuestion: false,
    savedTurnState: null,
    gameStartTime: Date.now(),
    gameEndTime: null
  };
}

function getTotalEdges() {
  // Horizontal: DOT_ROWS * GRID_COLS = 5 * 4 = 20
  // Vertical: GRID_ROWS * DOT_COLS = 4 * 5 = 20
  return (DOT_ROWS * GRID_COLS) + (GRID_ROWS * DOT_COLS);
}

function getEdgesForBox(r, c) {
  return {
    top: 'h_' + r + '_' + c,
    bottom: 'h_' + (r + 1) + '_' + c,
    left: 'v_' + r + '_' + c,
    right: 'v_' + r + '_' + (c + 1)
  };
}

function getBoxesAdjacentToEdge(edgeKey) {
  var parts = edgeKey.split('_');
  var type = parts[0];
  var row = parseInt(parts[1]);
  var col = parseInt(parts[2]);
  var adjacentBoxes = [];

  if (type === 'h') {
    // Horizontal edge: box above (row-1, col) and box below (row, col)
    if (row > 0) adjacentBoxes.push({ r: row - 1, c: col });
    if (row < GRID_ROWS) adjacentBoxes.push({ r: row, c: col });
  } else {
    // Vertical edge: box left (row, col-1) and box right (row, col)
    if (col > 0) adjacentBoxes.push({ r: row, c: col - 1 });
    if (col < GRID_COLS) adjacentBoxes.push({ r: row, c: col });
  }

  return adjacentBoxes;
}

function isBoxComplete(r, c, edges) {
  var e = getEdgesForBox(r, c);
  return edges[e.top] && edges[e.bottom] && edges[e.left] && edges[e.right];
}

function countBoxSides(r, c, edges) {
  var e = getEdgesForBox(r, c);
  var count = 0;
  if (edges[e.top]) count++;
  if (edges[e.bottom]) count++;
  if (edges[e.left]) count++;
  if (edges[e.right]) count++;
  return count;
}

function getAllEdgeKeys() {
  var keys = [];
  // Horizontal
  for (var r = 0; r < DOT_ROWS; r++) {
    for (var c = 0; c < GRID_COLS; c++) {
      keys.push('h_' + r + '_' + c);
    }
  }
  // Vertical
  for (var r = 0; r < GRID_ROWS; r++) {
    for (var c = 0; c < DOT_COLS; c++) {
      keys.push('v_' + r + '_' + c);
    }
  }
  return keys;
}

function getAvailableEdges() {
  var all = getAllEdgeKeys();
  return all.filter(function(key) {
    return !gameState.edges[key];
  });
}
