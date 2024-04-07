radio.onReceivedValue(function (name, value) {
    if (name == "acc") {
        if (value > 5) {
            bitbot.go(BBDirection.Forward, value)
        } else if (value < -5) {
            bitbot.go(BBDirection.Reverse, Math.abs(value))
        } else {
            bitbot.stop(BBStopMode.Brake)
        }
    }
    if (name == "dir") {
        if (value > 5) {
            bitbot.rotate(BBRobotDirection.Left, value)
        } else if (value < -5) {
            bitbot.rotate(BBRobotDirection.Right, Math.abs(value))
        } else {
        	
        }
    }
})
radio.setGroup(69)
bitbot.select_model(BBModel.XL)
