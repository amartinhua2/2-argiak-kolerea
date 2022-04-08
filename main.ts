input.onButtonPressed(Button.A, function () {
    while (true) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.PINK)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.CYAN)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
        basic.pause(1000)
    }
})
DFRobotMaqueenPlus.I2CInit()
