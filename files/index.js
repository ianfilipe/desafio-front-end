stickerCounterElement = document.querySelector('#stickercounter')
addStickerElement = document.querySelector('#addsticker')
removeStickerElement = document.querySelector('#removesticker')

stickerCounterElement.valueAsNumber = 0

addStickerElement.addEventListener('click', function(){
    stickerCounterElement.valueAsNumber++
})

removeStickerElement.addEventListener('click', function(){
    stickerCounterElement.valueAsNumber--
    if ( stickercounter.valueAsNumber == '-1' )
    stickercounter.valueAsNumber += 1
})
