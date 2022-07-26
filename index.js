
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

// форматирование по комбинации клавиш

function formatedText(func, ...codes) {
      let pressed = new Set();

      document.addEventListener('keydown', function(event) {
        pressed.add(event.code);
        

        for (let code of codes) { // все ли клавиши из набора нажаты?
          if (!pressed.has(code)) {
            return;
          }
        }

       pressed.clear();

        func();
      });

      document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
      });

    }

    formatedText(
      () => germanLeft(),
      "ControlLeft",
      "KeyX"
    );







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
    next2(result);
}

function next2(text) {
    search = '("';
    replaceWith = '«';
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
    lastCheck(result);
}

function lastCheck(text){
   let search = ['(' + "»"];
   const replaceWith = ['('+'«'];
   const result = text.replaceAll(search, replaceWith);
   let checkingText = document.querySelector(".text");
    checkingText.value = result.trim();
    checkingText.classList.add('access');
    copy.classList.remove("hidden");
}





copy.addEventListener('click', function () {
    let copyText = checkingText.value;
        if (copyText === '')        return;
        
navigator.clipboard.writeText(copyText);
    copy.setAttribute('value', 'Скопійовано');
    copy.setAttribute('disabled', 'true');
    checkingText.classList.add('access-copy');
    setTimeout(() => {
        copy.setAttribute('value', 'Копіювати');
        copy.removeAttribute('disabled');
    }, 2000);
});


//копирование по комбинации
function copiedFormatedText(func, ...codes) {
      let pressed = new Set();

      document.addEventListener('keydown', function(event) {
        pressed.add(event.code);
        
     

        for (let code of codes) { // все ли клавиши из набора нажаты?
          if (!pressed.has(code)) {
            return;
          }
        }

       pressed.clear();

        func();
      });

      document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
      });

    }

    copiedFormatedText(
      () => copiedText(),
      "ControlLeft",
      "KeyC"
    );



function copiedText(){
    let copyText = checkingText.value;
        if (copyText === '')        return;
    
        
    navigator.clipboard.writeText(copyText);
        copy.setAttribute('value', 'Скопійовано');
        copy.setAttribute('disabled', 'true');
        checkingText.classList.add('access-copy');
        setTimeout(() => {
            copy.setAttribute('value', 'Копіювати');
            copy.removeAttribute('disabled');
        }, 2000);
}




deleteText.addEventListener('click', ()=>{
    checkingText.style.minHeight = '';
    pasted.innerHTML = 0;
    checkingText.value = '';
    if(checkingText.value === ''){
        checkingText.classList.remove('access');
        checkingText.classList.remove('access-copy');
        checkingText.setAttribute('placeholder', 'Введіть текст');
        copy.classList.add("hidden");
    }
})


//удаление по комбинации клавиш

function clearArea(func, ...codes) {
      let pressed = new Set();

      document.addEventListener('keydown', function(event) {
        pressed.add(event.code);
        

        for (let code of codes) { // все ли клавиши из набора нажаты?
          if (!pressed.has(code)) {
            return;
          }
        }

       pressed.clear();

        func();
      });

      document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
      });

    }

    clearArea(
      () => deletedText(),
      "ControlLeft",
      "KeyQ"
    );





function deletedText(){
        checkingText.style.minHeight = '';
 checkingText.value = '';
     pasted.innerHTML = 0;
    if(checkingText.value === ''){
        checkingText.classList.remove('access');
        checkingText.classList.remove('access-copy');
        checkingText.setAttribute('placeholder', 'Введіть текст');
        copy.classList.add("hidden");
    }}


document.onblur = function(){
    document.title = "«😳» ЗАМІНА "
}


document.onfocus = function(){
    document.title = "Заміна лапок на ялинки онлайн || Замінити лапки|| замінити лапки на ялинки онлайн";
}

