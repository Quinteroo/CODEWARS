//! https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, 
// wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", 
// or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
  let zero
  let winner
  let a = board[0][0]
  let b = board[0][1]
  let c = board[0][2]
  let d = board[1][0]
  let e = board[1][1]
  let f = board[1][2]
  let g = board[2][0]
  let h = board[2][1]
  let i = board[2][2]

  for (let i = 0; i < board.length; i++) {
    if (board[i].some((e) => e === 0)) {
      zero = true
    }

  }


  if (a === b && a === c && a === 1) {
    winner = true
    return 1
  } else if (d === e && d === f && d === 1) {
    winner = true
    return 1
  } else if (g === h && g === i && d === 1) {
    winner = true
    return 1
  } else if (a === d && a === g && a === 1) {
    winner = true
    return 1
  } else if (b === e && b === h && b === 1) {
    winner = true
    return 1
  } else if (c === f && c === i && c === 1) {
    winner = true
    return 1
  } else if (a === e && a === 1 && a === 1) {
    winner = true
    return 1
  } else if (d === e && d === f && d === 1) {
    winner = true
    return 1
  } else if (g === e && g === c && g === 1) {
    winner = true
    return 1
  }

  if (a === b && a === c && a === 2) {
    winner = true
    return 2
  } else if (d === e && d === f && d === 2) {
    winner = true
    return 2
  } else if (g === h && g === i && g === 2) {
    winner = true
    return 2
  } else if (a === d && a === g && a === 2) {
    winner = true
    return 2
  } else if (b === e && b === h && b === 2) {
    winner = true
    return 2
  } else if (c === f && c === i && c === 2) {
    winner = true
    return 2
  } else if (a === e && a === 2 && a === 2) {
    winner = true
    return 2
  } else if (d === e && d === f && d === 2) {
    winner = true
    return 2
  } else if (g === e && g === c && g === 2) {
    winner = true
    return 2
  }

  if (!winner && zero) {
    return -1
  }


}