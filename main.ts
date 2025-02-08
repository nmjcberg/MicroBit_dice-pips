input.onButtonPressed(Button.B, function () {
    brightLevel = 255
    diceRoll = randint(1, 6)
    if (diceRoll == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (diceRoll == 2) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (diceRoll == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (diceRoll == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (diceRoll == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (diceRoll == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # # # # .
            # . . # .
            . . # # .
            . . . . .
            . . # . .
            `)
    }
})
let diceRoll = 0
let brightLevel = 0
basic.showString("PRESS")
basic.showString("B")
basic.forever(function () {
    led.setBrightness(brightLevel)
    brightLevel += -1
    if (brightLevel < 0) {
        brightLevel = 0
    }
})
