# Notes:

## Reading User Input

  ### - Use `process.argv` to read console input from the user through the terminal.

  ### - When using process.argv, you will read all console input including `node` and the `fileName.js`. you will need to slice out the unnessessary arguments using `args.slice(2, x)` where `x = args.length`.
  
   * `args = process.argv`
   * Assigns user input to an array called args.

