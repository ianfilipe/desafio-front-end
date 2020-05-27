stickerCounterElement = document.querySelector('#stickercounter')
addStickerElement = document.querySelector('#addsticker')
removeStickerElement = document.querySelector('#removesticker')

stickerCounterElement.valueAsNumber = 0

addStickerElement.addEventListener('click', function(){
    stickerCounterElement.valueAsNumber++
})

removeStickerElement.addEventListener('click', function(){
    if (stickerCounterElement.valueAsNumber >- 0 ) {
        stickerCounterElement.valueAsNumber--
    }
})
