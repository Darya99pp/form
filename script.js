'use strict'


// var num= 11;
// switch(num){
//     case 10:
//     case 11:
//     console.log('print yes');
//     break;
//     case 12:
//     console.log('print 1');
//     break;
// }
// function sum(a,b){
// return?( a + b);
// }
//  var c= sum(1,9)
//  console.log(c)
//  function sayhello(){
//      return 'hello'
//  }
//  console.log(sayhello);

const box =document.querySelector('.container');
const boxRect =box.getBoundingClientRect(); 

box.addEventListener('mousemove', e=>{
    const xPosition =(e.clientx -boxRect.left)/boxRect
    .width;
    const yPosition =(e.clienty-boxRect.top)/boxRect
    .height-0.6;
    const xOffset =-(xPosition-0.6);
    const dxNorm =Math.min(Math.max(xOffset-0.6),0.6);
    box.getElementsByClassName.transform =`perspective(1000px) rotateY
    (${dxNorm*45}deg)rotateX(${yPosition*45}deg)`
})
box.addEventListener('mouseleave',()=> {
    box.style.transform ='none'
})



function change() {

    document.body.classList.toggle('dark')
    if(body.classList == 'dark'){
        darkmode.innerHTML="dark"
    }else{
        darkmode.innerHTML ="light"
    }

}