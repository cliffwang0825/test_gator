input.onPinPressed(TouchPin.P0, function () {
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
})
input.onPinPressed(TouchPin.P2, function () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
})
let Animate = neopixel.create(DigitalPin.P12, 5, NeoPixelMode.RGB)
basic.showIcon(IconNames.Giraffe)
basic.forever(function () {
    Animate.setBrightness(75)
    Animate.showRainbow(1, 360)
    Animate.show()
    basic.pause(1000)
    for (let index = 0; index <= 4; index++) {
        Animate.shift(1)
        Animate.show()
        basic.pause(200)
    }
    for (let index2 = 0; index2 <= 4; index2++) {
        Animate.setPixelColor(index2, neopixel.colors(NeoPixelColors.Blue))
        Animate.show()
        basic.pause(1000)
        Animate.setPixelColor(index2, neopixel.rgb(randint(0, 100), randint(0, 100), randint(0, 100)))
        Animate.show()
        basic.pause(200)
    }
    for (let index3 = 0; index3 <= 4; index3++) {
        Animate.shift(1)
        Animate.show()
        basic.pause(200)
    }
})
