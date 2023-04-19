console.log("welcome to tic tac toe")
let music=new Audio("music.mp3")
let turnmusic =new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn="X";
let isgameover=false;

const changeTurn= ()=>{
    return turn ==="X"?"0":"X";

}
const win=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    
    let wina=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wina.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!== '')){
            document.querySelector('.info').innerText= boxtext[e[0]].innerText + " "+"won";
             document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='200px';
             gameover.play(); 
            isgameover=true;
        }
    })


}
let flag=false;
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn=changeTurn();
            turnmusic.play();
            win();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText= "Turn for"+" "+ turn;
            }
            if(gameover&&flag){
                document.getElementsByClassName("info")[0].innerText= "Turn for"+" "+ turn;
            }
        
        }
    })
})
let reset=document.getElementById('reset');
reset.addEventListener('click' ,()=>{
    flag=true;
     Array.from(boxes).forEach(ele=>{
        let boxtext=ele.querySelector('.boxtext');
        boxtext.innerText='';
         
     })
     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px';

})

