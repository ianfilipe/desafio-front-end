stickercounter = document.querySelector('#stickercounter')
addsticker = document.querySelector('#addsticker')
removesticker = document.querySelector('#removesticker')

removesticker.addEventListener('click', removeSticker)
addsticker.addEventListener('click', addSticker)

stickercounter.valueAsNumber = 0

function addSticker() {
    stickercounter.valueAsNumber += 1
}

function removeSticker() {
    stickercounter.valueAsNumber -= 1
    if ( stickercounter.valueAsNumber == '-1' ) stickercounter.valueAsNumber += 1
}
