$(document).ready(function() {
    const target = $('#fullscreen')[0]

    $('#testA').click(() => {
        if(screenfull.enabled){
            screenfull.request(target)
        }
    })

    if(screenfull.enabled){
        document.addEventListener(screenfull.raw.fullscreenchange , () => {
            console.log('Is screen bleed test mode ON?  ' + (screenfull.isFullscreen? 'Yes' : 'No'))
        })
    }

    document.addEventListener("keydown",function(e) {
        if (e.keyCode == 13){
            screenfull.toggle(target)
        }
    },false) 

})