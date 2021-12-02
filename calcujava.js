let input = document.getElementById("c")
let button = document.querySelectorAll('button')
let screen=""
for(item of button ){
  item. addEventListener('click',(e)=>{
    text= e.target.innerText
    console.log("button text is:",text)
    if(text =="x"){
        text='*'
        screen+=text
        input.value=screen

    }
    else if(text=="C"){
        screen="";
        input.value= screen
    }
    else if ( text=="="){
        input.value= eval(screen)
    }
    else{
        screen+=text
        input.value=screen

    }
    })
}