let isPlay = true;
// 버튼 안의 텍스트가 stop으로 바뀌도록 설정  
for(let i=0; i < equalizerEls.length; i++){
  equalizerEls[i].style.animationPlayState = "paused";
}
for(let i = 0; i < playBtn.length; i++ ){
  playBtn[i].addEventListener("click",function(){
      if(isPlay === true){
          playBtnEls[i].innerHTML = "Stop";
          for(let i=0; i < equalizerEls.length; i++){
            equalizerEls[i].style.animationPlayState = "running";
          }
          trackSoundEls[i].play();
          //console.log('재생');
          isPlay = false;
          //console.log('플레이!!');
      }
      else if(isPlay === false){
        stopAudio(i);
    }
  })
}

function stopAudio(i) {
  playBtnEls[i].innerHTML = "Play";
  for(let i=0; i < equalizerEls.length; i++){
    equalizerEls[i].style.animationPlayState = "paused";
  }
  trackSoundEls[i].pause();
  isPlay = true;
  // 버튼을 눌렀을 때 일시정지가 되는데 아래의 식을 적어주면
  // 다시 처음부터 돌아가 플레이가 된다.
  trackSoundEls[i].currentTime = 0;
  //console.log('멈춘다!');
  // equalizerEls[i].stop();
  //console.log('멈춤!!!!!');
}


for(let i = 0; i < memberImgEls.length; i++){
  memberImgEls[i].addEventListener('mouseenter',function(){
      console.log('플레이 됨');
      memSoundEls[i].play();
  })
}
for(let i = 0; i < memberImgEls.length; i++){
  memberImgEls[i].addEventListener('mouseleave',function(){
      console.log('스톱 됨');
      memSoundEls[i].currentTime = 0;
      memSoundEls[i].pause();
  })
}

// 시도들
// isHover = true;
// for(let i = 0; i < memberImgEls.length; i++ ){
//   memberImgEls[i].addEventListener('mouseenter',function(){
//       if(isHover === true){
//           memSoundEls[i].play();
//           console.log('된다!!!');
//           // equalizerEls[i].play();
//           isHover = false;
//           console.log('플레이!!');
//       }
//       else if(isHover === false){
//         stopHoverAudio(i);
//     }
//   })
// }

// function stopHoverAudio(i) {
//   memSoundEls[i].pause();
//   // 버튼을 눌렀을 때 일시정지가 되는데 아래의 식을 적어주면
//   // 다시 처음부터 돌아가 플레이가 된다.
//   // trackSoundEls[i].currentTime = 0;
//   console.log('제발 제발');
//   isHover = true;
//   console.log('오예~~~');
// }

// for(let i = 0; i < playBtn.length; i++ ){
//   playBtn[i].addEventListener("click",function(){
//       if(isPlay === true){
//         for(let i = 0; i < equalizerEls.length; i++){
//           equalizerEls[i].play();
//           isPlay = false;
//           console.log('움직이등가');
//         }
//       }else if(isPlay === false){
//         for(let i = 0; i < equalizerEls.length; i++){
//           equalizerEls[i].stop();
//           isPlay = true;
//           console.log('되라되라');
//         }
//       }
//     })
//   }
// for(let i = 0; i < playBtn.length; i++ ){
//   playBtn[i].addEventListener("click",function(){
//       if(isPlay === true){
//           equalizerEls[i].play();
//           isPlay = false;
//           console.log('움직이등가');

//       }else if(isPlay === false){
//         for(let i = 0; i < equalizerEls.length; i++){
//           equalizerEls[i].stop();
//           isPlay = true;
//           console.log('되라되라');
//         }
//       }
//     })
//   }
// equalizerEls[i].addEventListener('click', function(){
//   if(equalizerEls[i].style.animationPlayState ==="paused"){
//     equalizerEls[i].style.animationPlayState = "running";
//     console.log('안되냐');
//   }else{
//     for(let i=0; i < equalizerEls.length; i++){
//       equalizerEls[i].style.animationPlayState = "paused";
//       console.log('어림없죠...');
//     }
//   }
// })