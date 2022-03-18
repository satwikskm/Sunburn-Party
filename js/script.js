'use strict'

let closeWindow=document.getElementById('close')

let openWindow = document.getElementById('learn-more')



closeWindow.addEventListener('click',()=>{
    document.getElementById('active').style.display= "None"
    console.log("click")
})

openWindow.addEventListener('click',()=>{
    document.getElementById('active').style.display="flex"

})


