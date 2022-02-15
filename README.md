# Project 
## Day6 "THE BOOK OF US : GRAVITY" promotion website

Day6의 미니 5집 "The Book of us gravity"를 주제로 웹사이트를 제작하였습니다.

Day6만의 다양한 음악성과 감각을 잘 보여주는 color를 사용하였으며 fix된 원페이지 안에서 메뉴와 버튼을 통해 페이지가 이동합니다. 뮤직 플레이어, 비디오 원형 슬라이드 등 처음 시도해본 만큼 어려움을 많이 겪었지만 그 어려움을 통해 한껏 성장함이 엿보이는 웹사이트 입니다.

작업을 시작하기 앞서 가장 목표로 했던 부분들을 list화 하였습니다.

***1. 가독성***

***2. 디자인***

***3. 불필요한 html 및 css 사용 줄이기***

***4. 오디오와 비디오를 js에서 어떻게 제어할 것인가!***

***5. 일러스트의 적절한 활용***

***6. 반응형***


총 6가지의 목표를 잡고 직접 디자인을 한 시안을 토대로 제작단계에 돌입했습니다.




### Chapter 1 - Main page

------------------------------------------------


<img width="750" alt="6sense1" src="https://user-images.githubusercontent.com/92290951/154054866-5b517d4f-8ac9-4e17-90d5-2d4e413f179a.png">




메인페이지 입니다. 데이식스만의 다양한 음악성을 나타내고자 메인타이틀에 transparent효과를 주어 화려한 색감을 담은 그라데이션 이미지가 투영되게 했습니다. 또한 각 멤버들의 담당하는 악기를 직접 일러스트 작업하여 보는 재미를 주었습니다.




### Chapter 2 - Member page

------------------------------------------------


<img width="750" alt="6sense2" src="https://user-images.githubusercontent.com/92290951/154056678-b8de56ac-1b5d-48c3-8a14-0b1af93eb799.png">



멤버 페이지입니다. 텍스트 및 이미지 등 배열을 통해 교체되도록 작업하였고, 멤버 이미지에 마우스 커서 호버 시 또 다른 이미지와 함께 각 멤버가 맡고 있는 악기의 사운드가 플레이 됩니다. 





### Chapter 3 - Album page

------------------------------------------------


<img width="750" alt="6sense3" src="https://user-images.githubusercontent.com/92290951/154056920-b46c713d-5b19-4256-ad79-6dac92b15fce.png">


앨범 페이지입니다. 앨범 상세 설명을 볼 수 있습니다.


<img width="1680" alt="track" src="https://user-images.githubusercontent.com/92290951/154057077-ee4e83d0-35c7-4051-ad36-30498e934741.png">


트랙페이지 페이지입니다. The Book of us gravity 앨범에 수록되어있는 곡들을 플레이 버튼을 통해 직접 들어보실 수 있습니다. 



```Javascript
// 플레이버튼을 누를 시, 배열 안의 오디오가 재생되도록 한다
playBtn.addEventListener('click',()=>{
    for(let i = 0; i < trackIndex.length; i++){
        trackList[i].classList.remove('active')
  }
  trackList[trackIndex].classList.add('active')
  trackSoundEls[trackIndex].play();
})

// 스톱버튼을 누를 시, 재생되던 오디오가 멈추며 처음으로 초기화되도록 한다
stopBtn.addEventListener('click',()=>{
    trackSoundEls[trackIndex].currentTime = 0;
    trackSoundEls[trackIndex].pause();
})
```

```Javascript

// 트랙 < 네비게이션을 클릭했을 시 초기화작업 (텍스트 및 오디오 초기화)
 if(isClick === false){
    const zero = 0;
    trackTitle.innerText =trackArrayInfo[zero].title;
    trackNumber.innerText = trackArrayInfo[zero].num;
    trackNumText.innerText = trackArrayInfo[zero].trackNum;
    trackLyricist.innerText = trackArrayInfo[zero].lyricist;
    trackComposer.innerText = trackArrayInfo[zero].composer;
    trackInfo.innerText = trackArrayInfo[zero].info;
    trackLyrics.innerHTML = trackArrayInfo[zero].lyrics;
    trackIndex = zero;
    trackSoundEls[trackIndex].currentTime = 0;
    for(let i = 0; i < trackList.length; i++){
        trackList[i].classList.remove('active')  
    }
    trackList[zero].classList.add('active')
}

```

### Chapter 4 - Video page

------------------------------------------------


<img width="750" alt="6sense4" src="https://user-images.githubusercontent.com/92290951/154057157-3a6dd9fe-6e6c-4e64-8440-22a3cad4fe86.png">



비디오 페이지입니다. 원형 슬라이드를 통해 데이식스의 뮤직비디오와 무대 영상 등을 살펴볼 수 있습니다.



```Javascript
prevBtn.addEventListener('click', ()=>{
    count--; 
    console.log(count);
    videoListEl.style.transform = `rotate( ${72 * count * -1}deg)`;
    videoListEl.style.transition="0.7s";     

    for(let i = 0; i < videoListEls.length; i++){
        videoListEls[i].style.opacity = 0;
    }
    if(count > 0){ 
    // 카운트가 비디오 개수보다 크거나 같다면 
    // 인덱스가 0부터 5까지의 범위 내이기 때문에 나머지를 구할 필요가 없다.
        if(count >= videoListEls.length){
            videoListEls[count % videoListEls.length].style.opacity = 1;
        } else {
            videoListEls[count].style.opacity = 1;
        }
    } else if(count <= 0){  // 카운트가 0보다 작을 때
            // 인덱스값에 음수가 들어갈 수 없으므로 카운트를 모두 음수로 바꾸어준다.
            // Math.abs =  음수를 양수로 만들어주는 메소드.
        if(Math.abs(count) >= videoListEls.length){
            if(Math.abs(count) % videoListEls.length == 0) {
                videoListEls[0].style.opacity = 1;
            }else{ 
                videoListEls[videoListEls.length - Math.abs(count) % videoListEls.length].style.opacity = 1;
            }
        } else {
            // 양수로 바꾼 카운트를 비디오 개수로 나눈 나머지를 계산했을 때 0이 아니라면.
            // videoListEls[ 5 - 0] <- 5빼기 0이라는 연산이 성립이 안되길래 이프문을 써서 
            // 0을 빼야할 경우엔 인덱스 0번째 요소를 잡을 수 있도록 이프문으로 나눠준 것.

            // videoListEls [비디오 개수 - (양수로 바꾼 카운트를 비디오개수로 나눈 나머지)].style.opacity
            // 위 식으로 계산하면 카운트가 마이너스가 되어도 인덱스 값을 제대로 받아올 수 있다ㅏ.
            Math.abs(count) === 0 ? videoListEls[0].style.opacity = 1 : 
            videoListEls[videoListEls.length - Math.abs(count)].style.opacity = 1;
        }
    }
})
```


## 작업 후기
-------------------------------

이 작업물을 진행하기 전에 번아웃이 세게 와서 내가 갈 길이 이게 맞나 싶을 정도로 아무것도 하고 싶지 않을 때가 있었습니다. 
그때 평소에 데이식스의 팬이었던 제는 이 앨범을 곱씹어듣게 됐고, 자존감과 자신감이 많이 회복되었던 것 같습니다.

가장 좋아하는 가사가 "한 순간도 나에게 있어서는 의미가 없지 않아 언제가 끝일지 모르는 지금이 Best part" 인데 이 가사를 곱씹으며 작업하며 매일매일을 긍정적으로, 의미있게 보내려 노력한 것 같습니다. 

여러모로 작업할 때 즐겁고, 나도 해낼 수 있다는 자신감을 키워준 작업물입니다! 