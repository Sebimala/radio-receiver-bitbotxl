radio.onReceivedValue(function (name, value) {
    if (name == "acc") {
        if (value > 10) {
            bitbot.go(BBDirection.Reverse, value)
        } else if (value < -10) {
            bitbot.go(BBDirection.Forward, Math.abs(value))
        } else {
            bitbot.stop(BBStopMode.Brake)
        }
    }
    if (name == "dir") {
        if (value > 15) {
            bitbot.rotate(BBRobotDirection.Left, value)
        } else if (value < -15) {
            bitbot.rotate(BBRobotDirection.Right, Math.abs(value))
        } else {
        	
        }
    }
})
radio.setGroup(69)
bitbot.select_model(BBModel.XL)
