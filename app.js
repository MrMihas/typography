// hide on mobile

let hotkey = document.querySelector(".hotkey");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

    hotkey.classList.add('hidden');

} else {
 hotkey.classList.remove('hidden');

}


let hotkeys = document.querySelector(".hotkey h3");

let keys = document.querySelector('.keys');


hotkeys.addEventListener('click', ()=>{

if (keys.getAttribute('class') !== "keys active") {
    keys.classList.remove('hide')
    keys.classList.add('active')    
} else{
    keys.classList.remove('active')
    keys.classList.add('hide')
}

})
