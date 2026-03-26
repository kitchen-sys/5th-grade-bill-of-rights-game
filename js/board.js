/* ========================================
   Capitol Boxes — Board Rendering
   ======================================== */

var BOARD_SIZE = 500;
var DOT_SPACING;
var EDGE_THICKNESS = 8;

function initBoard() {
  var container = document.getElementById('board-container');
  container.innerHTML = '';

  // Calculate responsive board size
  var area = document.querySelector('.board-area');
  var areaRect = area.getBoundingClientRect();
  var maxSize = Math.min(areaRect.width - 40, areaRect.height - 40, 560);
  BOARD_SIZE = Math.max(360, maxSize);
  DOT_SPACING = BOARD_SIZE / GRID_COLS;

  container.style.width = BOARD_SIZE + 'px';
  container.style.height = BOARD_SIZE + 'px';

  renderBoxes(container);
  renderEdges(container);
  renderDots(container);
}

function renderDots(container) {
  for (var r = 0; r < DOT_ROWS; r++) {
    for (var c = 0; c < DOT_COLS; c++) {
      var dot = document.createElement('div');
      dot.className = 'dot';
      dot.style.left = (c * DOT_SPACING) + 'px';
      dot.style.top = (r * DOT_SPACING) + 'px';
      container.appendChild(dot);
    }
  }
}

function renderEdges(container) {
  // Horizontal edges
  for (var r = 0; r < DOT_ROWS; r++) {
    for (var c = 0; c < GRID_COLS; c++) {
      var key = 'h_' + r + '_' + c;
      var edge = document.createElement('div');
      edge.className = 'edge horizontal undrawn';
      edge.dataset.edge = key;
      edge.style.left = (c * DOT_SPACING + 7) + 'px';
      edge.style.top = (r * DOT_SPACING) + 'px';
      edge.style.width = (DOT_SPACING - 14) + 'px';
      edge.addEventListener('click', onEdgeClick);
      container.appendChild(edge);
    }
  }

  // Vertical edges
  for (var r = 0; r < GRID_ROWS; r++) {
    for (var c = 0; c < DOT_COLS; c++) {
      var key = 'v_' + r + '_' + c;
      var edge = document.createElement('div');
      edge.className = 'edge vertical undrawn';
      edge.dataset.edge = key;
      edge.style.left = (c * DOT_SPACING) + 'px';
      edge.style.top = (r * DOT_SPACING + 7) + 'px';
      edge.style.height = (DOT_SPACING - 14) + 'px';
      edge.addEventListener('click', onEdgeClick);
      container.appendChild(edge);
    }
  }
}

function renderBoxes(container) {
  for (var r = 0; r < GRID_ROWS; r++) {
    for (var c = 0; c < GRID_COLS; c++) {
      var box = document.createElement('div');
      box.className = 'box';
      box.id = 'box_' + r + '_' + c;
      var padding = 10;
      box.style.left = (c * DOT_SPACING + padding) + 'px';
      box.style.top = (r * DOT_SPACING + padding) + 'px';
      box.style.width = (DOT_SPACING - padding * 2) + 'px';
      box.style.height = (DOT_SPACING - padding * 2) + 'px';
      container.appendChild(box);
    }
  }
}

function drawEdge(edgeKey, owner) {
  var el = document.querySelector('[data-edge="' + edgeKey + '"]');
  if (!el) return;

  el.classList.remove('undrawn');
  el.classList.add('drawn');
  el.classList.add(owner === 'player' ? 'player-edge' : 'ai-edge');
  el.classList.add('last-placed');

  // Remove animation class after it plays
  setTimeout(function() {
    el.classList.remove('last-placed');
  }, 300);
}

function claimBox(r, c, owner) {
  var el = document.getElementById('box_' + r + '_' + c);
  if (!el) return;

  el.classList.add('claimed');
  el.classList.add(owner === 'player' ? 'player-box' : 'ai-box');

  var marker = document.createElement('span');
  marker.className = 'box-marker';
  marker.textContent = owner === 'player' ? '\u2605' : '\u2B21';
  el.appendChild(marker);
}

function setEdgesInteractive(interactive) {
  var edges = document.querySelectorAll('.edge.undrawn');
  edges.forEach(function(edge) {
    if (interactive) {
      edge.classList.remove('disabled');
    } else {
      edge.classList.add('disabled');
    }
  });
}
