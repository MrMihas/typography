let out = document.querySelector(".out");
let checkingText = document.querySelector(".text");

let btn = document.querySelector(".btn");
let copy = document.querySelector(".copy");
let deleteText = document.querySelector(".deleteText");


checkingText.addEventListener('input', ()=>{
    
    btn.removeAttribute('disabled');
    checkingText.classList.remove('access');
    checkingText.classList.remove('access-copy');

});

checkingText.addEventListener('change', ()=>{
    
    btn.removeAttribute('disabled');
    checkingText.classList.remove('access');
    checkingText.classList.remove('access-copy');

});

function startText(){
    btn.removeAttribute('disabled');
    
}

btn.addEventListener("click", () => {
    germanLeft();
});


//german

function germanLeft(){
    const search = "„";
    const replaceWith = ' «';
    let str = " " + checkingText.value ;
    const result = str.replaceAll(search, replaceWith);
    germanRight(result);
}

function germanRight(text) {
    search = "“";
    replaceWith = '»';
    result = text.replaceAll(search, replaceWith);
    englandLeft(result);
}

//england
function englandLeft(text){
    const search = " "+"“";
    const replaceWith = ' «';
    let str = " " + text ;
    const result = str.replaceAll(search, replaceWith);
    englandRight(result);
}

function englandRight(text) {
    search = "”";
    replaceWith = '»';
    result = text.replaceAll(search, replaceWith);
    next(result);
}

function next(text) {
    search = '\"';
    replaceWith = '»';
    result = text.replaceAll(search, replaceWith);
    reverseSymbol(result);
}




function reverseSymbol(text) {
    var search = ['\n' + "»"];
    const replaceWith = ['\n' +'«'];
    const result = text.replaceAll(search, replaceWith);
    reverseSymbol2(result);
}

function reverseSymbol2(text) {
    var search = [' ' + "»"];
    const replaceWith = [' ' +'«'];
    const result = text.replaceAll(search, replaceWith);
    let checkingText = document.querySelector(".text");
    checkingText.value = result.trim();
    checkingText.classList.add('access');
    // germanLeft(result)
}

// function lastCheck(text){
//     germanLeft()
// }


copy.addEventListener('click', function () {
    let copyText = checkingText.value;
        if (copyText === '')        return;
        
navigator.clipboard.writeText(copyText);
    copy.setAttribute('value', 'Скопировано');
    copy.setAttribute('disabled', 'true');
    checkingText.classList.add('access-copy');
    setTimeout(() => {
        copy.setAttribute('value', 'Скопировать');
        copy.removeAttribute('disabled');
    }, 2000);
});

deleteText.addEventListener('click', ()=>{
    checkingText.value = '';
    if(checkingText.value === ''){
        checkingText.classList.remove('access');
        checkingText.classList.remove('access-copy');
        checkingText.setAttribute('placeholder', 'Введите текст');
    }
})




// hide on mobile

let hotkey = document.querySelector(".hotkey");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

    hotkey.classList.add('hidden');

} else {
 hotkey.classList.remove('hidden');

}


