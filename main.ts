input.onButtonPressed(Button.A, function () {
    Steps += 1
    radio.sendString("Steppers")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("Mover Forwarder")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("Mover Lefter")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Mover Lefter") {
        basic.showArrow(ArrowNames.West)
    } else if (receivedString == "Mover Righter") {
        basic.showArrow(ArrowNames.East)
    } else if (receivedString == "Mover Forwarder") {
        basic.showArrow(ArrowNames.South)
    } else if (receivedString == "Mover Backwarder") {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showNumber(Steps)
    }
})
input.onButtonPressed(Button.B, function () {
    Steps += -1
    radio.sendString("Steppers")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("Mover Righter")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("Mover Backwarder")
})
let Steps = 0
radio.setGroup(2)
Steps = 0
basic.forever(function () {
    basic.showNumber(Steps)
})
