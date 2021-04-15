// #### 1. Updater

const determiner = 1;

if (determiner < 0) {
    let x = `less than 0`;
    console.log(x);
} else if (determiner >= 0) {
    let x = `Greater or equal to 0`;
    console.log(x);
}

// #### 2. New Variables

if (determiner >= 0) {
  let updater = `Greater or equal to 0`
  let message = `Positive Integer`
  // console.log(updater)
  console.log(message)
}

// * **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

    // returns: ReferenceError, 'message is not defined'

// #### 3. Ternary v.s. If statement 
// * When do you use a ternary v.s. an if statement? Give an example.

    // the ?: operator provides a shortcut to write more compact code than if statement. 