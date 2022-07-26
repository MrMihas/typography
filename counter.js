let date = new Date();
let registDate = `${date.getDate()}.${date.getMonth()+1}.${date.getUTCFullYear()} `;
let calc;
let string =  document.querySelector(".text");
let countOut =  document.querySelector(".amount");
let pasted = document.querySelector(".pasted");



if(localStorage.getItem('date-typograph') !== registDate){
    localStorage.clear();
}



    string.addEventListener('input', ()=>{

   function countWordsString(string){

            let counter = 1;


            // Change multiple spaces for one space
            string=string.replace(/[\s]+/gim, ' ');

            // Lets loop through the string and count the words
            string.replace(/(\s)[^/n\._\-\/\*\(\)]/g, function (a) {
               // For each word found increase the counter value by 1
                  counter++;
            });

           return  calc = +counter;
        }

    if(string.value.trim() == ''){
         pasted.innerHTML = 0;
      }

      var numberWords = countWordsString(string.value.trim());
      outEntrier(calc)
      heightControl(calc)

});
 

function heightControl(calc){
  if(calc < 100){
    string.style.minHeight = '';
   } else{
    string.style.minHeight = '';
    string.style.minHeight = calc + 300 + 'px';
   }
}



btn.addEventListener("click", () => {
calcFomat(calc);

});

function calcFomat(calc){
        if(string.value.trim() != "") {
        calculate(calc)
    }
}
    
function outEntrier(calc) {

   console.log(calc)
   if(string.value.trim() != "" || calc > 1) {
         pasted.innerHTML = calc;
    } 
  
}



function calculateText(func, ...codes) {
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


    calculateText(
      () => calcFomat(calc),
      "ControlLeft",
      "KeyX"
    );






function calculate(value){


   if(localStorage.getItem('counter-typograph') == undefined || localStorage.getItem('date-typograph') == undefined){
         localStorage.setItem('date-typograph', registDate);

         if( value > 1){
            localStorage.setItem('counter-typograph', value);

}

   } else if(localStorage.getItem('counter-typograph')){

       let total = +localStorage.getItem('counter-typograph') + +value;
      localStorage.setItem('counter-typograph', total);

   }

    countOut.innerHTML = '';

    countOut.append(localStorage.getItem('counter-typograph') + countOut.textContent)
 
}


if(localStorage.getItem('counter-typograph')){

    countOut.innerHTML = '';

    countOut.append(localStorage.getItem('counter-typograph') + countOut.textContent)
    
    if(countOut.textContent == null || countOut.textContent == NaN){
        document.location.reload();
    }
}
