/* ========================================
   Capitol Boxes — Senator Square Personality Lines
   ======================================== */

const AI_LINES = {
  easy: {
    turnStart: [
      "Hmm, I'll put my line... here!",
      "Let me try this spot!",
      "My turn! Here goes nothing!",
      "Eeny, meeny, miny... this one!",
      "A fine place for a line, I think!",
      "Senator Square makes a move!"
    ],
    playerCorrect: [
      "Not bad, citizen!",
      "You're doing great \u2014 the Founders would be proud!",
      "Well done! You know your civics!",
      "Impressive! You earned that one!",
      "Look at you go! A true patriot!",
      "Correct! I'm learning from you!"
    ],
    playerIncorrect: [
      "Don't worry, you'll get the next one!",
      "That's a tricky one. Keep trying!",
      "Even the Founders made mistakes!",
      "So close! You've got this!",
      "Not quite, but don't give up!",
      "Learning is part of the process!"
    ],
    gameStart: [
      "Welcome, citizen! Let's have some fun!",
      "Ready to test your civics knowledge?",
      "Senator Square at your service!"
    ],
    gameEndWin: [
      "Great game! You beat me fair and square!",
      "You're a civics champion! Well played!",
      "I've been out-governed! Congratulations!"
    ],
    gameEndLose: [
      "Good game! You'll beat me next time!",
      "That was fun! Want a rematch?",
      "Don't worry \u2014 practice makes perfect!"
    ],
    gameEndTie: [
      "A tie! That was a close one!",
      "We're evenly matched, citizen!",
      "A perfect balance of power!"
    ]
  },

  medium: {
    turnStart: [
      "A worthy opponent appears!",
      "Interesting strategy, citizen...",
      "Let me think about this one...",
      "I see an opportunity here!",
      "A calculated move, if I may!",
      "Senator Square considers the options..."
    ],
    playerCorrect: [
      "Well played, citizen!",
      "You know your stuff!",
      "I'll have to step up my game!",
      "Correct! But can you keep it up?",
      "Impressive knowledge!",
      "The Constitution would be proud!"
    ],
    playerIncorrect: [
      "I won that one \u2014 but you'll bounce back.",
      "My turn to shine!",
      "A tough question, I'll admit.",
      "Better luck on the next one!",
      "That one stumps a lot of citizens.",
      "Don't worry \u2014 even senators get things wrong!"
    ],
    gameStart: [
      "Let's see what you've got, citizen!",
      "May the best mind win!",
      "Senator Square is ready for a challenge!"
    ],
    gameEndWin: [
      "Outstanding! You've earned my respect!",
      "A decisive victory! Well played!",
      "You'd make a fine senator yourself!"
    ],
    gameEndLose: [
      "A hard-fought battle! Well played!",
      "You gave me a real challenge!",
      "That was closer than it looks!"
    ],
    gameEndTie: [
      "A tie! Just like a balanced government!",
      "Neither side could claim victory!",
      "Checks and balances at work!"
    ]
  },

  hard: {
    turnStart: [
      "I expected nothing less.",
      "A strategic move is in order.",
      "Let me show you how it's done.",
      "The Senator makes a decisive play.",
      "Every edge matters now...",
      "Time for some political maneuvering."
    ],
    playerCorrect: [
      "You earned that one \u2014 well played.",
      "Impressive. I won't underestimate you.",
      "A scholar of the Constitution, I see.",
      "Well done. But the game isn't over.",
      "You know your rights. Respect.",
      "The Founders would approve."
    ],
    playerIncorrect: [
      "The Constitution protects your right to try again.",
      "A misstep. It happens to the best.",
      "Knowledge is power \u2014 keep studying.",
      "Even great leaders stumble sometimes.",
      "That one was tough. No shame in that.",
      "The pursuit of knowledge continues."
    ],
    gameStart: [
      "Prepare yourself, citizen. I play to win.",
      "Senator Square accepts your challenge.",
      "Let's make this a game to remember."
    ],
    gameEndWin: [
      "Remarkable! You bested me at my best!",
      "A true champion of democracy!",
      "I tip my hat to you, citizen!"
    ],
    gameEndLose: [
      "A valiant effort! The Senator prevails!",
      "You fought well. The republic endures!",
      "A challenging match! Well fought!"
    ],
    gameEndTie: [
      "A tie at the highest level!",
      "We are truly equals, citizen.",
      "A stalemate worthy of the Senate floor!"
    ]
  }
};

function getAiLine(difficulty, trigger) {
  var lines = AI_LINES[difficulty] && AI_LINES[difficulty][trigger];
  if (!lines || lines.length === 0) return '';
  return lines[Math.floor(Math.random() * lines.length)];
}
