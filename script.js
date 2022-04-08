// full screen
// zoom btn
var html = document.querySelector('html')


// ============================
// range input styling
document.querySelectorAll("input[type=range]").forEach(function(item){
    item.addEventListener("input",function() {
            var value = (this.value-this.min)/(this.max-this.min)*100
            // this.style.background = 'linear-gradient(to right, #f3a952 0%, #f3a952 ' + value + '%, transparent ' + value + '%, transparent 100%)'
            this.style.background = value + '%, transparent ' + value + '%, transparent 100%)'
    })
})


// ============================================
// MODAL

//=================== Volume========================
// main volume
let mainVolume = document.querySelector('#volume-bar')
mainVolume.addEventListener('input', function(){
    mainAudio.volume = this.value/100
})
// effect volume
// traffic
document.querySelector('#traffic-volume').addEventListener('input', function(){
    document.querySelector('#traffic-audio').play()
    document.querySelector('#traffic-audio').volume = this.value/100
})
// rain
document.querySelector('#rain-volume').addEventListener('input', function(){
    document.querySelector('#rain-audio').play()
    document.querySelector('#rain-audio').volume = this.value/100
})

// fireplace
document.querySelector('#fireplace-volume').addEventListener('input', function(){
    document.querySelector('#fireplace-audio').play()
    document.querySelector('#fireplace-audio').volume = this.value/100
})
// campfire
document.querySelector('#campfire-volume').addEventListener('input', function(){
    document.querySelector('#campfire-audio').play()
    document.querySelector('#campfire-audio').volume = this.value/100
})
// forest
document.querySelector('#forest-volume').addEventListener('input', function(){
    document.querySelector('#forest-audio').play()
    document.querySelector('#forest-audio').volume = this.value/100
})
// forest-rain
document.querySelector('#forest-rain-volume').addEventListener('input', function(){
    document.querySelector('#forest-rain-audio').play()
    document.querySelector('#forest-rain-audio').volume = this.value/100
})
// waves
document.querySelector('#waves-volume').addEventListener('input', function(){
    document.querySelector('#waves-audio').play()
    document.querySelector('#waves-audio').volume = this.value/100
})
// fan
document.querySelector('#fan-volume').addEventListener('input', function(){
    document.querySelector('#fan-audio').play()
    document.querySelector('#fan-audio').volume = this.value/100
})
// storm
document.querySelector('#storm-volume').addEventListener('input', function(){
    document.querySelector('#storm-audio').play()
    document.querySelector('#storm-audio').volume = this.value/100
})
// river
document.querySelector('#river-volume').addEventListener('input', function(){
    document.querySelector('#river-audio').play()
    document.querySelector('#river-audio').volume = this.value/100
})
// bird
document.querySelector('#bird-volume').addEventListener('input', function(){
    document.querySelector('#bird-audio').play()
    document.querySelector('#bird-audio').volume = this.value/100
})
// people
document.querySelector('#people-volume').addEventListener('input', function(){
    document.querySelector('#people-audio').play()
    document.querySelector('#people-audio').volume = this.value/100
})
// wind
document.querySelector('#wind-volume').addEventListener('input', function(){
    document.querySelector('#wind-audio').play()
    document.querySelector('#wind-audio').volume = this.value/100
})
// ocean
document.querySelector('#ocean-volume').addEventListener('input', function(){
    document.querySelector('#ocean-audio').play()
    document.querySelector('#ocean-audio').volume = this.value/100
})
// blizzard
document.querySelector('#blizzard-volume').addEventListener('input', function(){
    document.querySelector('#blizzard-audio').play()
    document.querySelector('#blizzard-audio').volume = this.value/100
})




// ====================== modifier modifier icons modifier event
// display none when click outside
document.querySelector('html').onclick = function(){
    if(!document.querySelector('#settings-board').classList.contains('display-none')){
        document.querySelector('#settings-board').classList.add('display-none')
        document.querySelector('#settings').classList.remove('modifier-icon--active')
    }
 
}
// settings board
document.querySelector('#nav3').addEventListener("click", function(e){
    e.stopPropagation()
    document.querySelector('#nav3').classList.toggle('modifier-icon--active')
    document.querySelector('#settings-board').classList.toggle('display-none')

})




//focus mode 



// share link drag function


