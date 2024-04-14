function updatescreen () {
    basic.clearScreen()
    led.plot(ledX, ledY)
}
input.onButtonPressed(Button.A, function () {
    if (BitBot == 1) {
        BitBot = 2
    } else {
        BitBot = 1
    }
    basic.showString("" + (BitBot))
    if (BitBot == 1) {
        bitbot.BBBias(BBRobotDirection.Right, 10)
    } else {
        bitbot.BBBias(BBRobotDirection.Left, 18)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "acc") {
        if (value > 10) {
            bitbot.go(BBDirection.Reverse, value)
        } else if (value < -10) {
            bitbot.go(BBDirection.Forward, Math.abs(value))
        } else {
            bitbot.stop(BBStopMode.Brake)
        }
        ledY = Math.round((value + 102) / 50)
    }
    if (name == "dir") {
        if (value > 15) {
            bitbot.rotate(BBRobotDirection.Right, value)
        } else if (value < -15) {
            bitbot.rotate(BBRobotDirection.Left, Math.abs(value))
        } else {
        	
        }
        ledX = Math.round((value + 102) / 50)
    }
    updatescreen()
})
let ledX = 0
let ledY = 0
let BitBot = 0
radio.setGroup(69)
bitbot.select_model(BBModel.XL)
if (BitBot == 1) {
    bitbot.BBBias(BBRobotDirection.Right, 10)
} else {
    bitbot.BBBias(BBRobotDirection.Left, 18)
}
ledY = 2
ledX = 2
updatescreen()
