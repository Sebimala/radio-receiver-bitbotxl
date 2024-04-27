function updatescreen () {
    basic.clearScreen()
    led.plot(ledX, ledY)
}
radio.onReceivedValue(function (name, value) {
    if (name == "acc") {
        if (value > 10) {
            bitbot.go(BBDirection.Reverse, value)
            bitbot.ledRotate()
        } else if (value < -10) {
            bitbot.go(BBDirection.Forward, Math.abs(value))
            bitbot.ledRotate()
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
radio.setGroup(69)
bitbot.select_model(BBModel.XL)
ledY = 2
ledX = 2
updatescreen()
bitbot.ledRainbow()
