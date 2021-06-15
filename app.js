const game = {
    title: 'Guess the Number!',
    biggestNum: 10,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function () {
        //GENERATE RANDOM NUMBER WITHIN RANGE
        this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        let currentGuess // initialize this variable currentGuess, we just need ready to accept a value
        while(this.secretNum !== currentGuess){ //as long as the currentGuess does not equal the secretNum...
            //... we continue running this code
            currentGuess = this.getGuesses() //we update the value of current guess, with what getGuesses, RETURNS
            this.prevGuesses.push(currentGuess) //we push current guess, into the prevGuesses array!
            this.render(currentGuess) //we call the render function, and we want to pass in current guess, so it can make use it
        }
    },
    getGuesses: function () {
        let guess
        while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
            //this is taking what the user typed and assigning to this variable called guess
            guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
        }
        //once we exit the while loop, we return guess
        return guess
    },
    render: function (currentGuess) {
        //here we use a ternary, to see if the current guess, is lower than the secret num,
        const highOrLow = currentGuess < this.secretNum ? 'Low' : 'High'
                    //  |-----------CONDITION----------| |true|  |false|
        //if else statement to display whether the user is RIGHT or WRONG
        if (currentGuess === parseInt(this.secretNum)) {
            alert(`Congrats! You guessed the number in ${this.prevGuesses.length} attempts`)
        } else {
            alert(`Your guess is too ${highOrLow} Previous guesses: ${this.prevGuesses.join(', ')}`)
        }
    },
}
game.play()