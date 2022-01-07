const albumContent = document.querySelectorAll('.album-content');
let albumList = document.querySelectorAll('.album-list ul > li > p');
const anotherImages  = document.querySelector('.album-images > .another-images > img:first-of-type');
const another_Images  = document.querySelector('.album-images > .another-images > img:last-of-type');
// track-area
const trackListWrap = document.querySelector('.track-list');
let trackList = document.querySelectorAll('.track-list > .track-music');
const trackNumber = document.querySelector('.track-image > p');
const trackTitle = document.querySelector('.track-text > .text-area > .text-wrap > h3');
const trackNumText = document.querySelector('.track-text > .text-area > .text-wrap > p:first-of-type');
const trackLyricist = document.querySelector('.track-text > .text-area > .text-wrap > p:nth-of-type(2)');
const trackComposer = document.querySelector('.track-text >  .text-area >.text-wrap > p:nth-of-type(3)');
const trackInfo = document.querySelector('.track-text > .text-area > .text-wrap > p:last-of-type');
const trackLyrics = document.querySelector('.lyrics-content > .lyrics-area > p');
const trackMusic = document.querySelector('.sub-btn-area > button:first-of-type > audio');
// play & stop
const playBtn = document.querySelector('.sub-btn-area > button:first-of-type ');
const stopBtn = document.querySelector('.sub-btn-area > button:nth-of-type(2)');
// lyrics
const lyricsBtn = document.querySelector('.sub-btn-area > button:last-of-type');
const lyricsCloseBtn = document.querySelector('.lyrics-close-btn');
const lyricsContainer = document.querySelector('.lyrics-container');
// track list sounds  = 트랙 안에 각각 배정될 audio들
var trackSoundEls = [
    new Audio('img/media/forme.mp3'),
    new Audio('img/media/TimeofOurLife.mp3'),
    new Audio('img/media/Howtolove.mp3'),
    new Audio('img/media/WannaGoBack.mp3'),
    new Audio('img/media/Cover.mp3'),
    new Audio('img/media/BestPart.mp3')
]
let trackIndex = 0;
// trackcontent infomation
let trackArrayInfo = [
    {
        title :'FOR ME',
        num : '1',
        trackNum :'First',
        lyricist : '작사 : Young K',
        composer : '작곡 : Jae, 성진, Young K, 원필, 홍지상',
        info : 'For me는 80년대 록 사운드에 90년대 모던 록 코드라인이 결합된 트랙.꿈과 다른 현실에 애써 외면하고 있던 자기 자신을 이제부터라도 좀 더 알아가고 사랑해야겠다는 내용을 "이젠 알아주고 싶어 여태 혼자 잘 해왔다고 말해 줄게 나에게"와 같은 가사로 노래한다. ',
        lyrics : '너는 누구니 그렇게 지친 눈빛을 한 채 왜 날 바라보며 깊은 한숨을 쉬고 있는 거니<br>누구보다도 오랜 시간을<br>함께했지만 나는 아직도 너를 몰라<br><br>지금까지 위로 한 마디<br>너에게 한 적 없었던 것 같아<br>너를 알아가고 싶어 다른 사람이 아닌 너를<br>거울 속에 갇힌 채 울상을 짓고 있는 나를<br>이젠 알아주고 싶어<br>여태 혼자 잘 해왔다고<br>말해 줄게 나에게<br>For me<br><br>어렸을 적 가졌었던 꿈은 대체 어디로 갔나<br>나는 아직도 너를 몰라<br>아마 난 네가 가진 약한 모습을<br>숨기고 싶어 외면한 것 같아<br>너를 알아가고 싶어 다른 사람이 아닌 너를<br>거울 속에 갇힌 채 울상을 짓고 있는 나를<br>이젠 알아주고 싶어<br>여태 혼자 잘 해왔다고<br>말해 줄게 나에게<br>For me<br><br>I wanna thank you<br>지쳐 쓰러지지 않고 계속<br>함께해 줘서 나를 끌어 줘서<br>오늘부터라도 <br>I will start to love you<br>I mean I will love me now<br>너를 알아가고 싶어 다른 사람이 아닌 너를<br>거울 속에 갇힌 채 울상을 짓고 있는 나를<br>이젠 알아주고 싶어<br>여태 혼자 잘해 왔다고<br>말해 줄게 나에게<br>For me',
    },
    {
        title :'한 페이지가 될 수 있게',
        num : '2',
        trackNum :'Title',
        lyricist : '작사 : Young K',
        composer : '작곡 : Jae, 성진, Young K, 원필, 홍지상',
        info : '"한 페이지가 될 수 있게" 는 인연의 시작점에서 상대에게 희망과 자신감을 표현해주고 싶은 마음을 담았다. 서로가 함께해 나갈 모든 시간을 한 권의 책에 비유해 "지금 이 순간도 아름다운 한 페이지가 될 수 있게 하자"는 메시지를 전한다. 친근한 코드진행과 멜로디에 강력한 록사운드를 더해 DAY6만의 새롭고 매력적인 곡을 완성했다.',
        lyrics : '솔직히 말할게 많이 기다려 왔어<br>너도 그랬을 거라 믿어 오늘이 오길<br>매일같이 달력을 보면서 솔직히 나에게도<br> 지금 이 순간은 꿈만 같아 너와 함께라<br>오늘을 위해 꽤 많은 걸 준비해 봤어<br>All about you and I  다른 건 다 제쳐 두고<br>Now come with me Take my hand<br><br>아름다운 청춘의 한 장 함께 써내려 가자<br>너와의 추억들로 가득 채울래<br>(Come on!)<br><br>아무 걱정도 하지는 마 나에게 다 맡겨 봐<br> 지금 이 순간이 다시 넘겨볼 수 있는<br>한 페이지가 될 수 있게<br>This is our page Our page<br>솔직히 말할게 지금이 오기까지<br>마냥 순탄하진 않았지 오늘이 오길<br>나도 목 빠져라 기다렸어 솔직히 나보다도<br> 네가 몇 배는 더 힘들었을 거라고 믿어<br>오늘을 위해 그저 견뎌줘서 고마워<br>All about you and I 다른 건 다 제쳐 두고<br>Now come with me Take my hand<br>아름다운 청춘의 한 장 함께 써내려 가자<br>너와의 추억들로가득 채울래<br>(Come on!)<br><br>아무 걱정도 하지는 마 나에게 다 맡겨 봐<br>지금 이 순간이 다시 넘겨볼 수 있는<br>한 페이지가 될 수 있게<br><br>Want you to Come on out and have fun<br>Want us to Have the time of our life<br><br> Oh<br><br>너와의 추억들로 가득 채울래<br>(Come on!)<br><br>아무 걱정도 하지는 마 나에게 다 맡겨 봐<br> 지금 이 순간이 다시 넘겨볼 수 있는<br>한 페이지가 될 수 있게<br><br>This is our page Our page',
    },
    {
        title :'how to love',
        num : '3',
        trackNum :'Third',
        lyricist : '작사 : Young K',
        composer : '작곡 : Jae, 성진, Young K, 원필, 홍지상',
        info : '"How to love"는 "너무나 어려워 그 사랑이란 거 나도 해보고 싶어"라는 가사처럼 진정한 사랑을 시작해보고 싶다는 마음을 표현한 DAY6의 사랑 희망 송.기존에 보여주던 록 사운드에서 벗어나 아기자기한 코드 진행, 모타운 사운드적인 악기 요소와 그루브의 차용이 특징이다. ',
        lyrics : '온 세상 사람들이 다 말하지<br>단 한번이라도 해 봤다면 알지<br> 사랑이란 게 얼마나 좋은지<br>아프고 또 상처 받고도 다시<br>찾아서 나설 정도로 너무나 달콤하단 걸<br>온 세상이 더 예뻐 보인다고<br>시간까지 멈춰 버리고 싶다 해<br>사랑이란 건 정말 신기하지<br>아무리 지쳐도 다시 일으킬 수 있는 마법 같지<br><br> 어 근데 사실 말야 (없잖아)<br>그런 건 머릿속에도 (없잖아)<br>안 해 본 걸 내가 어떻게 알겠어<br><br>Can you tell me <br>How to love<br><br>전혀 모르겠어 누가 좀 알려줘<br>그게 그렇게나 좋다던데<br>Tell me how to love<br>너무나 어려워<br>그 사랑이란 거 나도 해 보고 싶어<br>해 보자고 <br><br>Cuz I`m ready<br>(Ye I`m ready)<br>Cuz I`m ready<br>(Ye I`m ready)<br>Cuz I`m ready<br>(Ye I`m ready)<br><br>Oooooh<br>(Oooooh)<br><br>온 세상 사람들이 다 나 빼고<br>너무 행복하다는 듯이 거리에<br>팔짱 낀 채로 걷고 있으면<br>아 난 대체 언제쯤 <br>저런 따스한 날이 올까 싶어<br>근데 나도 알아 (알잖아)<br>시도도 안 해 봤잖아 (알잖아)<br>그러고 어떻게 사랑하겠어<br><br>Can you tell me <br>How to love<br><br>전혀 모르겠어 누가 좀 알려줘<br>그게 그렇게나 좋다던데 <br>Tell me how to love<br>너무나 어려워<br>그 사랑이란 거 나도 해 보고 싶어<br>해 보자고 <br><br>나도 하고파<br> 근데 너무 두려워<br>두려운 게 죄는 아니잖아<br><br>Can you tell me <br>How to love<br><br>전혀 모르겠어 누가 좀 알려줘<br>그게 그렇게나 좋다던데<br>Tell me how to love<br>너무나 어려워<br>그 사랑이란 거 나도 해 보고 싶어<br>해 보자고 <br><br>Cuz I`m ready<br>(Ye I`m ready)<br>Cuz I`m ready<br>(Ye I`m ready)<br>Cuz I`m ready<br>(Ye I`m ready)<br><br>Oooooh',
    },
    {
        title :'돌아갈래요',
        num : '4',
        trackNum :'Fourth',
        lyricist : '작사 : Young K',
        composer : '작곡 : Jae, Young K, 220',
        info : '"돌아갈래요"는 성진, Jae, Young K, 원필, 도운 멤버 전원이 보컬에 참여한 곡. 경쾌한 멜로디와 트랙이 어우러져 DAY6만의 청량함을 더욱 돋보이게 한다. 꿈과 희망으로 가득했던 겁 없는 어린아이 시절을 회상하며 그리워하는 마음을 건넨다. 곡을 듣는 모든 이들에게 있었던 어릴 적 추억들을 이끌어 내며 다시금 잊고 있던 꿈들을 떠올렸으면 하는 DAY6의 바람을 녹여냈다.',
        lyrics : '학교 종이 땡땡땡<br>울리는 순간 내 세상은 시작됐죠<br>mhm<br>친구들을 만나러 아니면 집에 가든<br>뭐 내 맘대로였죠<br>mhm<br><br>하지만 눈 감았다 떠보니 난 어른이 되었고<br>너무 커버린 내 자신이 난 너무 미워요<br>순수했던 미소는 대체 어디로 간 걸까요<br>할 수 있다면<br>Wanna go back<br><br>돌아갈래요<br>다시 그 때로<br>즐거웠던 어린 시절로<br>나도 알아요 어쩔 수 없죠<br>그럼 난 그냥 그리워 할래요<br><br>돌아갈래요<br>(I wanna go back)<br>돌아갈래요<br>무서울 게 없던 그 때로<br>돌아갈래요<br>(I wanna go back)<br>시간아 되돌아 가주라<br>한번만 되돌아 가주라<br><br>내게 꿈이 뭐예요 라고 물어보면<br>난 대답을 못했죠<br>mhm<br><br>하고 싶은 것들이<br>너무 많아서 사실 고르기 힘들었죠<br>mhm<br><br>하지만 눈 감았다 떠보니 <br>난 어른이 되었고 너무 커버린 <br>내 자신이 난 너무 미워요<br>순수하게 꾸었던<br>꿈들은 어디로 간 걸까요<br>할 수 있다면<br>Wanna go back<br><br>돌아갈래요<br>다시 그 때로<br>즐거웠던 어린 시절로<br>나도 알아요 어쩔 수 없죠<br>그럼 난 그냥 그리워 할래요<br><br>사진 속에서 해맑게 웃는<br>어린 나 부러워 죽겠어<br>잠깐이라도 좋을 테니까<br>한번만 mhm<br>한번만 돌아갈래요<br><br> 돌아갈래요 다시 그 때로<br>즐거웠던 어린 시절로<br>나도 알아요 어쩔 수 없죠<br>그럼 난 그냥 그리워 할래요<br><br>돌아갈래요<br>(I wanna go back)<br>돌아갈래요<br>무서울 게 없던 그 때로<br>돌아갈래요<br>(I wanna go back)<br>시간아 되돌아 가주라<br>한번만 되돌아 가주라',
    },
    {
        title :'포장',
        num : '5',
        trackNum :'Fifth',
        lyricist : '작사 : 성진, Young K',
        composer : '작곡 : 성진, Young K, 원필, 케빈오빠, 이민경',
        info : '"포장"은 DAY6의 감성 록 발라드 곡으로 들키고 싶지 않았던 연약한 감정이 들켜버린 순간에 대해 노래한다. 인트로부터 계속되는 일렉기타 연주와 후렴구에 터지는 보컬, 그리고 플랜져 이펙트가 더해져 강렬한 여운을 남기는 곡. DAY6의 진한 감성을 담은 목소리가 리스너의 마음속 깊이 자리 잡을 듯하다.',
        lyrics : '모든 건 너를 위한 거였어<br>네가 알아왔던 나는<br>들키는 게 너무 싫었어<br> 내 안에 숨겨온 나를<br>혹시나 알아챌까 봐<br>틈새로 비춰질까 봐<br>감추고 감춰 왔지만<br><br>나의 약하고 <br>멋지지 않은 모습에<br>너의 기대가 무너질까<br>포장해 왔지만 시간이 흘러<br>뜯겨져 버리고 겉이 허물어<br>결국엔 날 봐 버렸어<br><br>행복한 척으로 덮어 왔어<br>다들 부러워하더라<br>사랑했던 순간들마저도<br>진심이었던가 싶어<br>혹시나 알아챌까 봐<br>틈새로 비춰질까 봐<br>감추고 감춰 왔지만<br><br>나의 약하고 <br>멋지지 않은 모습에<br>너의 기대가 무너질까<br>포장해 왔지만 시간이 흘러<br>뜯겨져 버리고 겉이 허물어<br>결국엔 날 봐 버렸어 <br><br>장난 섞인 듯한 말투로<br>"잘 살아"<br>사실 속으론 나 울고 있었어<br>아름다워 보이고 싶어<br>이별의 순간까지도 말야<br><br>나는 약하고 <br>멋지지 않아서<br>너의 기대가 무너질까<br>포장해 왔지만 시간이 흘러<br>뜯겨져 버리고 겉이 허물어<br>결국엔 끝나 버렸어',
    },
    {
        title :'best part',
        num : '6',
        trackNum :'Sixth',
        lyricist : '작사 : 성진, Young K',
        composer : '작곡 : Jae, 성진, Young K, 원필, 홍지상',
        info : '"Best Part"는 모던 록과 하우스 장르가 결합된 신나는 트랙. 음악의 클라이맥스처럼 시간의 흐름 속 매번 바뀌는 순간들을 최선과 최고의 감동을 다해 살아가겠다는 메시지를 담았다.',
        lyrics : '매일 밤<br>눈을 감으면<br>점점 두려워져 내일이 없을까 봐<br>그렇게 난 살아가 하루하루를 아쉬워해<br>마지막 날 미소가 가득 담겨 있게<br>나에게 쥐어지는 매일이<br>Gonna be my Best part<br><br>한 순간도 나에게 있어서는<br>의미가 없지 않아<br>언제가 끝일지 모르는 지금이<br>Best part<br><br>두려움 그건 이제 날<br>움직이게 하는 이유가 된 걸거야<br>오늘의 난 살아가<br>내일의 내가 행복하게<br>마지막 날 미소가 가득 담겨 있게<br>나에게 쥐어지는 매일이<br>Gonna be my Best part<br><br>한 순간도 나에게 있어서는<br>의미가 없지 않아<br>언제가 끝일지 모르는 지금이<br>Best part<br><br>미래가 찾아온 날<br>그때가 더 아름답도록<br>Every moment’s gonna be my best part<br>한 순간도 나에게 있어서는<br>의미가 없지 않아<br>언제가 끝일지 모르는 지금이<br>Best part',
    }
]

albumList = Array.prototype.slice.call(albumList);
trackList = Array.prototype.slice.call(trackList);


let isClick = false; 
senseNavList[2].addEventListener('click',()=>{
    console.log('ccccc');
    setTimeout(()=>{
        anotherImages.classList.add('active');
        another_Images.classList.add('active');
    },300)
})

for(let i = 0; i < albumList.length; i++){
    albumList[i].addEventListener('click',(e)=>{
        let listTarget = e.currentTarget;
        albumListIndex = albumList.indexOf(listTarget);

       for(let j = 0; j < albumList.length; j++){
        albumList[j].classList.remove('active');
       }
       for(let i = 0; i < albumList.length; i++){
        albumContent[i].classList.remove('active');
       }
       albumList[i].classList.add('active');
       albumContent[i].classList.add('active');

        if(albumListIndex === 0){
            console.log('확인');
            trackListWrap.classList.remove('active');
            setTimeout(()=>{
                anotherImages.classList.add('active');
                another_Images.classList.add('active');
            },300)
        }
        if(albumListIndex === 1){
            console.log('확인~');
            trackListWrap.classList.add('active');
            anotherImages.classList.remove('active');
            another_Images.classList.remove('active');
        }
    })
}
for(let i = 0; i < trackList.length; i++){
    trackList[i].addEventListener('click',(e)=>{
        let targetTrack = e.currentTarget;
        trackIndex = trackList.indexOf(targetTrack);
        for(let j = 0; j < trackList.length; j++){
            trackList[j].classList.remove('active');
            trackTitle.innerText = trackArrayInfo[trackIndex].title;
            trackNumber.innerText = trackArrayInfo[trackIndex].num;
            trackNumText.innerText = trackArrayInfo[trackIndex].trackNum;
            trackLyricist.innerText = trackArrayInfo[trackIndex].lyricist;
            trackComposer.innerText = trackArrayInfo[trackIndex].composer;
            trackInfo.innerText = trackArrayInfo[trackIndex].info;
            trackLyrics.innerHTML = trackArrayInfo[trackIndex].lyrics;
        }
        trackList[i].classList.add('active');
    })
}
playBtn.addEventListener('click',()=>{
    for(let i = 0; i < trackIndex.length; i++){
        trackList[i].classList.remove('active')
  }
  trackList[trackIndex].classList.add('active')
  trackSoundEls[trackIndex].play();
})
stopBtn.addEventListener('click',()=>{
    trackSoundEls[trackIndex].currentTime = 0;
    trackSoundEls[trackIndex].pause();
})

function lyricsBtnClose(){
    lyricsContainer.classList.remove('active');
    lyricsCloseBtn.classList.remove('active');
}
lyricsBtn.addEventListener('click',()=>{
    lyricsContainer.classList.add('active');
    lyricsCloseBtn.classList.add('active');
})
lyricsCloseBtn.addEventListener('click',()=>{
    lyricsBtnClose();
})

