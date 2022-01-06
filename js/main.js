let senseNavList = document.querySelectorAll('.sense-nav > ul > li > a');
const section = document.querySelectorAll('section');
const transitionBox = document.querySelector('.transitionbox');

senseNavList = Array.prototype.slice.call(senseNavList);

for(let i = 0; i < senseNavList.length; i++){
    senseNavList[i].addEventListener('click',(e)=>{
        let target = e.currentTarget;
        naveListIndex = senseNavList.indexOf(target);
        let isClick = false;
        for(let i = 0; i < section.length; i++){
            section[i].classList.remove('active');
        }
        for(let i = 0; i < senseNavList.length; i++){
            senseNavList[i].classList.remove('active');
        }

        section[i].classList.add('active');
        senseNavList[i].classList.add('active');
        lyricsBtnClose();
        if(naveListIndex === 0){
            console.log('click1');
            transitionBox.style.width ="0%";
            transitionBox.style.height ="0%";
            transitionBox.style.background ="none";
            transitionBox.style.bottom ="20%";
            transitionBox.style.right ="20%";

            
            
        }
        else if(naveListIndex === 1){
            console.log('click2');
            transitionBox.style.width ="5%";
            transitionBox.style.height ="5%";
            transitionBox.style.background ="white";
            transitionBox.style.bottom ="20%";
            transitionBox.style.right ="20%";
            // transitionBox.style.transition ="ease-in 0.2s";

            if(isClick === false){
               console.log('dfdsfds');
               membersNickName.innerText ='JAE',
               membersRealName.innerText ='Jae Park',
               membersBirth.innerText ='1992 . 09 . 15',
               membersIinstrument.innerText ='LEAD guitar',
               membersMainImage.setAttribute('src','img/member/Jae3.jpg');
               membersSubImage.setAttribute('src','img/member/Jae.jpg');
               IinstrumentImages.setAttribute('src','img/member2/jae.png');

               for(let i = 0; i < memberList.length; i++){
                memberList[i].classList.remove('active');
               }
               memberList[0].classList.add('active');
            }

        }
        else if(naveListIndex === 2){
            console.log('click3');
            transitionBox.style.width ="70%";
            transitionBox.style.height ="100%";
            transitionBox.style.background ="#FF971E";
            transitionBox.style.bottom ="0%";
            transitionBox.style.right ="0%";
            transitionBox.style.transition ="ease-in 0.2s";

            
            if(isClick === false){
               
                trackTitle.innerText ='FOR ME',
                trackNumber.innerText ='1',
                trackNumText.innerText ='First',
                trackLyricist.innerText ='작사 : Young K',
                trackComposer.innerText = '작곡 : Jae, 성진, Young K, 원필, 홍지상',
                trackInfo.innerText = 'For me는 80년대 록 사운드에 90년대 모던 록 코드라인이 결합된 트랙.꿈과 다른 현실에 애써 외면하고 있던 자기 자신을 이제부터라도 좀 더 알아가고 사랑해야겠다는 내용을 "이젠 알아주고 싶어 여태 혼자 잘 해왔다고 말해 줄게 나에게"와 같은 가사로 노래한다. ',
                trackLyrics.innerHTML = '너는 누구니 그렇게 지친 눈빛을 한 채 왜 날 바라보며 깊은 한숨을 쉬고 있는 거니<br>누구보다도 오랜 시간을<br>함께했지만 나는 아직도 너를 몰라<br><br>지금까지 위로 한 마디<br>너에게 한 적 없었던 것 같아<br>너를 알아가고 싶어 다른 사람이 아닌 너를<br>거울 속에 갇힌 채 울상을 짓고 있는 나를<br>이젠 알아주고 싶어<br>여태 혼자 잘 해왔다고<br>말해 줄게 나에게<br>For me<br><br>어렸을 적 가졌었던 꿈은 대체 어디로 갔나<br>나는 아직도 너를 몰라<br>아마 난 네가 가진 약한 모습을<br>숨기고 싶어 외면한 것 같아<br>너를 알아가고 싶어 다른 사람이 아닌 너를<br>거울 속에 갇힌 채 울상을 짓고 있는 나를<br>이젠 알아주고 싶어<br>여태 혼자 잘 해왔다고<br>말해 줄게 나에게<br>For me<br><br>I wanna thank you<br>지쳐 쓰러지지 않고 계속<br>함께해 줘서 나를 끌어 줘서<br>오늘부터라도 <br>I will start to love you<br>I mean I will love me now<br>너를 알아가고 싶어 다른 사람이 아닌 너를<br>거울 속에 갇힌 채 울상을 짓고 있는 나를<br>이젠 알아주고 싶어<br>여태 혼자 잘해 왔다고<br>말해 줄게 나에게<br>For me'
                trackSoundEls[i].setAttribute('src','img/media/forme.mp3');
                for(let i = 0; i < trackList.length; i++){
                      trackList[i].classList.remove('active')
                      
                }
                trackList[0].classList.add('active')
            }
        }
        else if(naveListIndex === 3){
            console.log('click4');
            transitionBox.style.width ="100%";
            transitionBox.style.height ="100%";
            transitionBox.style.background ="#1673ff";
            transitionBox.style.bottom ="0%";
            transitionBox.style.right ="0%";
            transitionBox.style.transition ="ease-in 0.2s";

            
        }
    })
}