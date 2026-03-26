/* ========================================
   Capitol Boxes — AI Engine
   ======================================== */

function aiSelectEdge(difficulty) {
  var available = getAvailableEdges();
  if (available.length === 0) return null;

  if (difficulty === 'easy') {
    return available[Math.floor(Math.random() * available.length)];
  }

  // GREEDY: Look for edges that complete a box (3-sided box)
  var completable = findCompletableEdges(available);
  if (completable.length > 0) {
    return completable[Math.floor(Math.random() * completable.length)];
  }

  // SAFE: Avoid edges that would give opponent a 3-sided box
  var safeEdges = findSafeEdges(available);

  if (difficulty === 'medium') {
    if (safeEdges.length > 0) {
      return safeEdges[Math.floor(Math.random() * safeEdges.length)];
    }
    return available[Math.floor(Math.random() * available.length)];
  }

  // HARD: Same safe preference, but when forced, sacrifice shortest chain
  if (safeEdges.length > 0) {
    return safeEdges[Math.floor(Math.random() * safeEdges.length)];
  }
  return findShortestChainSacrifice(available);
}

function findCompletableEdges(available) {
  var result = [];
  for (var i = 0; i < available.length; i++) {
    var edgeKey = available[i];
    var adjacentBoxes = getBoxesAdjacentToEdge(edgeKey);
    for (var j = 0; j < adjacentBoxes.length; j++) {
      var box = adjacentBoxes[j];
      if (!gameState.boxes[box.r + '_' + box.c] && countBoxSides(box.r, box.c, gameState.edges) === 3) {
        result.push(edgeKey);
        break;
      }
    }
  }
  return result;
}

function findSafeEdges(available) {
  var result = [];
  for (var i = 0; i < available.length; i++) {
    if (!wouldCreateThreeSidedBox(available[i])) {
      result.push(available[i]);
    }
  }
  return result;
}

function wouldCreateThreeSidedBox(edgeKey) {
  var adjacentBoxes = getBoxesAdjacentToEdge(edgeKey);
  for (var i = 0; i < adjacentBoxes.length; i++) {
    var box = adjacentBoxes[i];
    if (!gameState.boxes[box.r + '_' + box.c] && countBoxSides(box.r, box.c, gameState.edges) === 2) {
      return true;
    }
  }
  return false;
}

function findShortestChainSacrifice(available) {
  var bestEdge = available[0];
  var shortestChain = Infinity;

  for (var i = 0; i < available.length; i++) {
    var edgeKey = available[i];
    var chainLength = calculateChainLength(edgeKey);
    if (chainLength < shortestChain) {
      shortestChain = chainLength;
      bestEdge = edgeKey;
    }
  }

  return bestEdge;
}

function calculateChainLength(edgeKey) {
  // Simulate placing this edge and count how many boxes become completable in chain
  var simEdges = Object.assign({}, gameState.edges);
  simEdges[edgeKey] = 'sim';

  var adjacentBoxes = getBoxesAdjacentToEdge(edgeKey);
  var totalChain = 0;

  for (var i = 0; i < adjacentBoxes.length; i++) {
    var box = adjacentBoxes[i];
    var boxKey = box.r + '_' + box.c;
    if (!gameState.boxes[boxKey] && countBoxSides(box.r, box.c, simEdges) === 3) {
      totalChain += followChain(box.r, box.c, simEdges, {});
    }
  }

  return totalChain;
}

function followChain(r, c, simEdges, visited) {
  var boxKey = r + '_' + c;
  if (visited[boxKey]) return 0;
  visited[boxKey] = true;

  var count = 1;

  // Find the missing edge for this box and simulate completing it
  var edges = getEdgesForBox(r, c);
  var missingEdge = null;
  var edgeKeys = [edges.top, edges.bottom, edges.left, edges.right];

  for (var i = 0; i < edgeKeys.length; i++) {
    if (!simEdges[edgeKeys[i]]) {
      missingEdge = edgeKeys[i];
      break;
    }
  }

  if (missingEdge) {
    simEdges[missingEdge] = 'sim';

    // Check if completing this box opens up another 3-sided box
    var adjacentBoxes = getBoxesAdjacentToEdge(missingEdge);
    for (var j = 0; j < adjacentBoxes.length; j++) {
      var adjBox = adjacentBoxes[j];
      var adjKey = adjBox.r + '_' + adjBox.c;
      if (!gameState.boxes[adjKey] && !visited[adjKey] && countBoxSides(adjBox.r, adjBox.c, simEdges) === 3) {
        count += followChain(adjBox.r, adjBox.c, simEdges, visited);
      }
    }
  }

  return count;
}
