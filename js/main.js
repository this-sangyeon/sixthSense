let senseNavList = document.querySelectorAll('.sense-nav > ul > li > a');
const section = document.querySelectorAll('section');
const transitionBox = document.querySelector('.transitionbox');
senseNavList = Array.prototype.slice.call(senseNavList);
const footer = document.querySelector('footer');

for(let i = 0; i < senseNavList.length; i++){
    senseNavList[i].addEventListener('click',(e)=>{
        let target = e.currentTarget;
        naveListIndex = senseNavList.indexOf(target);
        let isClick = false;
        for(let i = 0; i < section.length; i++){
            section[i].classList.remove('active');
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
            footer.style.display ='block';
        }
        else if(naveListIndex === 1){
            console.log('click2');
            footer.style.display ='block';
            transitionBox.style.width ="5%";
            transitionBox.style.height ="5%";
            transitionBox.style.background ="white";
            transitionBox.style.bottom ="20%";
            transitionBox.style.right ="20%";
            if(isClick === false){
                console.log('click!!');
                let first = 0;
                membersNickName.innerText = membersInfo[first].name;
                membersRealName.innerText = membersInfo[first].realName;
                membersBirth.innerText = membersInfo[first].birth;
                membersIinstrument.innerHTML = membersInfo[first].instName;
                membersMainImage.setAttribute('src','img/member/Jae3.jpg');
                membersSubImage.setAttribute('src','img/member/Jae.jpg');
                IinstrumentImages.setAttribute('src','img/member2/jae.png');
                membersIndex = first;
                MemberMusicInst[membersIndex].currentTime = 0;
                for(let i = 0; i < memberList.length; i++){
                    memberList[i].classList.remove('active');
                }
                    memberList[first].classList.add('active');
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

            footer.style.display ='none';

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
           if(matchMedia("screen and (max-width : 650px)").matches){
                transitionBox.style.width ="100%";
                transitionBox.style.height ="70%";
                transitionBox.style.background ="#FF971E";
                transitionBox.style.bottom ="0%";
                transitionBox.style.right ="0%";
                transitionBox.style.transition ="ease-in 0.2s";
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
            footer.style.display ='none';
        }
    })
    window.addEventListener('resize',()=>{
        if(matchMedia("screen and (min-width : 651px)").matches){
            if(naveListIndex === 2){
                transitionBox.style.width ="70%";
                transitionBox.style.height ="100%";
                transitionBox.style.background ="#FF971E";
                transitionBox.style.bottom ="0%";
                transitionBox.style.right ="0%";
                transitionBox.style.transition ="ease-in 0.2s";
            }
        }
        else if(matchMedia("screen and (max-width : 650px)").matches){
            if(naveListIndex === 2){
                transitionBox.style.width ="100%";
                transitionBox.style.height ="70%";
                transitionBox.style.background ="#FF971E";
                transitionBox.style.bottom ="0%";
                transitionBox.style.right ="0%";
                transitionBox.style.transition ="ease-in 0.2s";
            }
        }
    })
}






       





