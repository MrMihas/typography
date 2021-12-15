 let out = document.querySelector(".out");
 let text = document.querySelector(".text");
  
 let btn = document.querySelector(".btn");
 let copy = document.querySelector(".copy");
 
 btn.addEventListener("click", ()=>{
     const search = " " + "\""; 
     const replaceWith = ' &laquo';
     let str = " " + '<pre>' + text.value + "</pre>";
     const result = str.replaceAll(search, replaceWith);
     next(result);
//  out.innerHTML = result;
 
 })


 
 function next(text){
     search = '\"';
     replaceWith = '&raquo';
     result = text.replaceAll(search, replaceWith);
     test(result);
 }
 
 
 function test(text){
    var search = ['\n' + "&raquo"];
    const replaceWith = '&laquo'
    const result = text.replaceAll(search, replaceWith);
    out.innerHTML = result;
   
 }


 copy.addEventListener('click', function() {
    let copyText = out.textContent.trim() || out.innerText.trim();
if(copyText == '')return
    navigator.clipboard.writeText(copyText);
    copy.setAttribute('value', 'Copied');
    copy.setAttribute('disabled', 'true')
    setTimeout(()=>{
        copy.setAttribute('value', 'Copy')
        copy.removeAttribute('disabled')
    },2000)
     })

 
