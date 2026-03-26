/* ========================================
   Capitol Boxes — AI Engine
   Balanced so students can win!
   ======================================== */

function aiSelectEdge(difficulty) {
  var available = getAvailableEdges();
  if (available.length === 0) return null;

  var completable = findCompletableEdges(available);
  var nonCompletable = available.filter(function(e) {
    return completable.indexOf(e) === -1;
  });

  if (difficulty === 'easy') {
    return aiEasySelect(available, completable, nonCompletable);
  }

  if (difficulty === 'medium') {
    return aiMediumSelect(available, completable, nonCompletable);
  }

  // hard
  return aiHardSelect(available, completable, nonCompletable);
}

/* ------------------------------------------
   EASY: Student-friendly AI
   - Never completes a box unless forced
   - Actively gives away 3-sided boxes to
     the player (sets up freebies)
   - 40% chance to blunder into giving away
     a box even when safe moves exist
   ------------------------------------------ */
function aiEasySelect(available, completable, nonCompletable) {
  // If every remaining edge completes a box, forced to take one
  if (nonCompletable.length === 0) {
    return completable[Math.floor(Math.random() * completable.length)];
  }

  // 40% chance: deliberately pick an edge that creates a 3-sided box
  // (sets up the player to complete it next turn)
  if (Math.random() < 0.4) {
    var generous = nonCompletable.filter(function(e) {
      return wouldCreateThreeSidedBox(e);
    });
    if (generous.length > 0) {
      return generous[Math.floor(Math.random() * generous.length)];
    }
  }

  // Otherwise pick randomly among non-completable edges (no strategy)
  return nonCompletable[Math.floor(Math.random() * nonCompletable.length)];
}

/* ------------------------------------------
   MEDIUM: Casual AI
   - Completes boxes if obvious (3-sided)
   - Doesn't avoid giving away boxes — plays
     randomly otherwise
   - No chain awareness
   ------------------------------------------ */
function aiMediumSelect(available, completable, nonCompletable) {
  // Take a freebie if one exists
  if (completable.length > 0) {
    return completable[Math.floor(Math.random() * completable.length)];
  }

  // 50% chance to play safe, 50% totally random
  if (Math.random() < 0.5) {
    var safe = findSafeEdges(available);
    if (safe.length > 0) {
      return safe[Math.floor(Math.random() * safe.length)];
    }
  }

  return available[Math.floor(Math.random() * available.length)];
}

/* ------------------------------------------
   HARD: Strategic AI
   - Greedy: always completes 3-sided boxes
   - Avoids giving away 3-sided boxes
   - When forced, sacrifices shortest chain
   ------------------------------------------ */
function aiHardSelect(available, completable, nonCompletable) {
  if (completable.length > 0) {
    return completable[Math.floor(Math.random() * completable.length)];
  }

  var safeEdges = findSafeEdges(available);
  if (safeEdges.length > 0) {
    return safeEdges[Math.floor(Math.random() * safeEdges.length)];
  }

  return findShortestChainSacrifice(available);
}

/* ------------------------------------------
   Helper functions
   ------------------------------------------ */

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
