
// 메인 페이지를 위한 변수 선언
const mainPage = document.querySelector('.main-area');
// 메인 페이지 로고를 위한 변수 > 클릭 시 트랜지션 박스가 자연스럽게 이동
const mainLogo = document.querySelector('header > .logo > a');
// 메인 페이지에서 움직이는 원형을 위한 변수 선언
const circleWork = document.querySelectorAll('.main-area > .circle');
// 메인 페이지에 마스킹 되어있는 텍스트를 위한 변수 선언
const mainPageText = document.querySelector('.main-area > .root > .headline');
const mainPageRoot = document.querySelector('.main-area > .root');
const mainPageImg = document.querySelector('.main-area > .musical-img');

// 픽스된 원페이지기 때문에 메뉴를 누르면 페이지가 바뀌게 설정.
// 각 페이지 섹션을 위한 변수 선언
const senseMenuEls = document.querySelectorAll('.day6-area');
// 네비게이션을 위한 변수
let senseListEls = document.querySelectorAll('.sense-nav ul li');
// 메뉴를 눌렀을 때 박스의 이동을 위한 변수
const transitionBox = document.querySelector('.transitionbox');

// member area
// 멤버 영역을 위한 변수 선언
const memberWrapEls = document.querySelectorAll('.member-intro');
// 멤버 네비게이션을 위한 변수 선언
let memberListEls = document.querySelectorAll('.member-list li');
// 멤버 이미지 호버 시,  사운드 출력을 위한 변수 선언
let memberImgEls = document.querySelectorAll('.member-img > img');
// 호버 시 이미지 이동을 위한 변수 선언
let hoverImgEls = document.querySelectorAll('.member-hover');

let hoverTextEls = document.querySelectorAll('.hoverfollow');
// 멤버 이름을 클릭할 시 이동할 도형을 위한 변수 선언
const shapeTransition = document.querySelectorAll('div.shape > div');


// album area
// 앨범 영역을 위한 변수 선언
const albumListEls = document.querySelectorAll('.album-intro');
// 앨범 영역 안의 네비게이션을 위한 변수 선언
let albumListbtn = document.querySelectorAll('.album-list li > h2');
let albumImg = document.querySelectorAll('.another-img > img');
// track list
// 앨범 영역 안의 트랙리스트를 위한 변수 선언
let trackListEl = document.querySelector('.track-list');
// 트랙리스트 내용이 담긴 영역을 위한 변수 선언
const trackSlideEls = document.querySelectorAll('.track-slide');
// 트랙리스트의 list 네비게이션을 위한 변수 선언
let trackMusicEls = document.querySelectorAll('.track-list li');
// lyrics 버튼을 누르면 가사페이지가 열리게 하기 위한 변수 선언
let trackLyricsbtn = document.querySelectorAll('.button-area >.lyrics-btn'); // lyrics 버튼
const trackLyricsEls = document.querySelectorAll('.lyrics-page');// 가사페이지
let closeLyricsbtn = document.querySelectorAll('.lyrics-page >.lyrics-close'); // 가사창 닫기 버튼

// 뮤직 플레이를 위한 변수 선언
let playBtn = document.querySelectorAll('.button-area > .play-btn'); // 버튼
let playBtnEls = document.querySelectorAll('.button-area > .play-btn > p'); // 버튼 안의 텍스트
let equalizerEls = document.querySelectorAll('.equalizer > .bar'); // 이퀄라이저 애니메이션을 위한 오브젝트

// 뮤직 플레이를 위한 변수 선언
// 멤버 이미지에 호버하면 음악이 플레이 된다.
var memSoundEls = [
    new Audio('./img/media/memsound/WARNING.mp3'),
    new Audio('./img/media/memsound/OUCH.mp3'),
    new Audio('./img/media/memsound/BeLazy.mp3'),
    new Audio('./img/media/memsound/Illtry.mp3'),
    new Audio('./img/media/memsound/Congratulations.mp3')
]
// 뮤직 플레이를 위한 변수 선언
// 트랙리스트의 플레이 버튼을 누르면 음악이 플레이 된다.
var trackSoundEls = [
    new Audio('./img/media/forme.mp3'),
    new Audio('./img/media/Time of Our Life.mp3'),
    new Audio('./img/media/How to love.mp3'),
    new Audio('./img/media/Wanna Go Back.mp3'),
    new Audio('./img/media/Cover.mp3'),
    new Audio('./img/media/Best Part.mp3')
]
// 배열
senseListEls = Array.prototype.slice.call(senseListEls);
memberListEls = Array.prototype.slice.call(memberListEls);
memberImgEls = Array.prototype.slice.call(memberImgEls);
hoverImgEls = Array.prototype.slice.call(hoverImgEls);
hoverTextEls = Array.prototype.slice.call(hoverTextEls);
albumListbtn = Array.prototype.slice.call(albumListbtn);
albumImg = Array.prototype.slice.call(albumImg);
trackLyricsbtn = Array.prototype.slice.call(trackLyricsbtn);
closeLyricsbtn = Array.prototype.slice.call(closeLyricsbtn);
trackMusicEls = Array.prototype.slice.call(trackMusicEls);
playBtnEls = Array.prototype.slice.call(playBtnEls);
playBtn = Array.prototype.slice.call(playBtn);
equalizerEls = Array.prototype.slice.call(equalizerEls);

//css의 초기값 설정
senseMenuEls[0].style.visibility = 'visible';
senseMenuEls[0].style.opacity = 0;
memberWrapEls[0].style.visibility = 'visible';
memberWrapEls[0].style.opacity = 1;
// memberListEls[0].style.opacity = 1;
albumListbtn[0].style.color = '#1673ff';
albumListEls[0].style.visibility = 'hidden';
albumListEls[1].style.pointerEvents="none";
albumListEls[0].style.opacity = 1;
albumImg[0].style.transform = 'rotate(0deg)';
trackSlideEls[0].style.visibility = 'hidden';
trackSlideEls[0].style.opacity = 0;
trackLyricsEls[0].style.visibility = 'hidden';
mainPageRoot.style.display ="block";
mainPageImg.style.display ="block";


// 기능 구현 시작!

// 메인페이지에 있는 로고를 클릭했을 시 이벤트가 실행
mainLogo.addEventListener('click',function(){
    for(let i = 0 ; i < senseMenuEls.length; i++ ){
        senseMenuEls[i].style.visibility = "hidden";
        senseMenuEls[i].style.opacity = 0;
        senseMenuEls[i].style.pointerEvents = "none";
        senseMenuEls[i].style.transition ='0.3s ease';
    }
    mainPage.style.visibility = "visible";
    mainPage.style.opacity=1;
    mainPageRoot.style.display ="block";
    mainPageImg.style.display ="block";
    mainPageRoot.style.pointerEvents ="none";

    // 트랜지션 박스에 클래스가 추가되고 삭제된다.
    transitionBox.classList.add('active3');
    transitionBox.classList.remove('active');
    transitionBox.classList.remove('active1');
    transitionBox.classList.remove('active2');
    // 추가된 클래스의 스타일 값이 변경된다.
    transitionBox.style.width = '0vw';
    transitionBox.style.height = '0vh';
    transitionBox.style.bottom = '0%';
    transitionBox.style.right = '0%';

    // 멤버 버튼을 클릭하면 li의 컬러가 변경
    for(let i = 0; i <senseListEls.length; i++){
        // 색을 변경하는 이유는 각 버튼을 누를 때마다 트랜지션 박스의 컬러값이 바뀌기 때문이다.
        // 버튼과 트랜지션 박스의 컬러값이 동일한 영역이 있기에 버튼을 클릭하였을 때 컬러가 바뀌도록 하였다.
        senseListEls[i].style.color = "#FF971E"
    }
})

// 멤버 버튼을 클릭하면 클래스 추가, 삭제
senseListEls[0].addEventListener('click', function(){
    transitionBox.classList.add('active');
    transitionBox.classList.remove('active1');
    transitionBox.classList.remove('active2');
    transitionBox.classList.remove('active3');
    transitionBox.style.width = '16.5vw';
    transitionBox.style.height = '22vh';
    transitionBox.style.bottom = '24%';
    transitionBox.style.right = '20%';

    // 멤버 버튼을 클릭하면 li의 컬러가 변경
        for(let i = 0; i <senseListEls.length; i++){
        // 색을 변경하는 이유는 각 버튼을 누를 때마다 트랜지션 박스의 컬러값이 바뀌기 때문이다.
        // 버튼과 트랜지션 박스의 컬러값이 동일한 영역이 있기에 버튼을 클릭하였을 때 컬러가 바뀌도록 하였다.
        senseListEls[i].style.color = "#FF971E"
    }
})
// 멤버 버튼을 클릭하면 클래스 추가, 삭제
senseListEls[1].addEventListener('click', function(){
    transitionBox.classList.add('active1');
    transitionBox.classList.remove('active');
    transitionBox.classList.remove('active2');
    transitionBox.classList.remove('active3');
    transitionBox.style.width = '75vw';
    transitionBox.style.height = '100vh';
    transitionBox.style.bottom = '0%';
    transitionBox.style.right = '0%';

    // 멤버 버튼을 클릭하면 li의 컬러가 변경
    for(let i = 0; i <senseListEls.length; i++){
        senseListEls[i].style.color = "#1673ff";
    }
})
// 멤버 버튼을 클릭하면 클래스 추가, 삭제
senseListEls[2].addEventListener('click', function(){
    transitionBox.classList.add('active2');
    transitionBox.classList.remove('active');
    transitionBox.classList.remove('active1');
    transitionBox.classList.remove('active3');
    transitionBox.style.width = '100vw';
    transitionBox.style.height = '100vh';
    transitionBox.style.bottom = '0%';
    transitionBox.style.right = '0%';
    
    // 멤버 버튼을 클릭하면 li의 컬러가 변경
    for(let i = 0; i <senseListEls.length; i++){
        senseListEls[i].style.color = "#FF971E"
    }
})


for (var i = 0; i < senseListEls.length; i++) {
    // 네비게이션 li를 클릭하면
    senseListEls[i].onclick = function (e) {
        let el = e.currentTarget, target =  senseListEls.indexOf(el);

        for(let j = 0; j < memberWrapEls.length; j++){
            // 멤버 소개를 담고 있는 영역을 사라지게 한다.
            // 이유는 페이지가 서로 겹쳐져서 호버 이벤트, 클릭 이벤트 등이 적용되지 않기 때문이다.
            memberWrapEls[j].style.display ='none';
        }
        // 첫번째 버튼(멤버버튼)을 클릭하면 멤버 소개를 담고 있는 영역을
        // display ='block'으로 바꿔준다.
        if(target === 0){
            for(let j = 0; j < memberWrapEls.length; j++){
                memberWrapEls[j].style.display ='block';
            }
        }
        //  클릭 시, 스타일 값 조정
        for (let i = 0; i < senseMenuEls.length; i++) {
            senseMenuEls[i].style.visibility = 'hidden';
            senseMenuEls[i].style.opacity = 0; 
            senseMenuEls[i].style.position = 'fixed';
            senseMenuEls[i].style.transition = '0.5s';

        }
        //  클릭 시, 스타일 값 조정
        if(target === 1){
            // 안에 배열이 두개이기 때문에 배열마다 값을 다르게 설정해준다.
            albumListEls[0].style.visibility = 'visible';
            albumListEls[0].style.opacity = 1; 
            albumListEls[0].style.opacity = 1;  
            albumListEls[1].style.visibility = 'hidden';
            albumListEls[1].style.opacity = 0; 
            albumListEls[1].style.opacity = 0; 
        }else {
            // 그게 아니라면....
            // 앨범 섹션의 값을 조정
            for(let j = 0; j < albumListEls.length; j++){
                albumListEls[j].style.visibility = 'hidden';
                albumListEls[j].style.opacity = 0; 
            }
        }
        // 트랙리스트 각 클릭할 때 비활성화를 위해 스타일값 조정
        for(let j = 0; j < trackMusicEls.length; j++){
            trackMusicEls[j].style.opacity = .5;
        }
        //두번째 버튼을 클릭했을 때...
        if(target === 1){
            // 트랙리스트의 첫번째 섹션을 활성화 시켜준다...
            trackSlideEls[0].style.visibility = 'visible';
            trackSlideEls[0].style.opacity = 1; 
            trackMusicEls[0].style.opacity = 1;  
            // 아니라면.... 비활성화 시켜버린다...
        }else {
            for(let j = 0; j < trackMusicEls.length; j++){
                trackSlideEls[j].style.visibility = 'hidden';
                trackSlideEls[j].style.opacity = 0; 
            }
        }
        // 각 버튼을 클릭했을 때 트랙리스트 안에 있는 사운드가 멈춰야 한다. 
        // 그래서 music.js에서 작성해준 stopAudio 함수를 적용 시켜준다.
        for(let j = 0; j < trackSoundEls.length; j++){
            stopAudio(j)
        }
        senseMenuEls[target].style.visibility = 'visible';
        senseMenuEls[target].style.opacity = 1;
        senseMenuEls[target].style.position = 'fixed';
        senseMenuEls[target].style.pointerEvents = 'auto';
        mainPageRoot.style.display="none";
        mainPageImg.style.display="none";
        // memberListEls[target].style.opacity=1;
    }
}
// 멤버 버튼을 클릭 했을 때
senseListEls[0].addEventListener('click', function(){
    console.log('클릭됨'); // 맞게 선택되었는지를 확인하는 디버그
    // 추가되었던 클래스를 삭제한다.
    albumImg[0].classList.remove('active');
    albumImg[1].classList.remove('active');
    
})
// 앨범 버튼을 클릭 했을 때
senseListEls[1].addEventListener('click', function(){
    console.log('클릭됨'); // 맞게 선택되었는지를 확인하는 디버그
    // 클래스를 추가해준다.
    albumImg[0].classList.add('active');
    albumImg[0].style.transition='1s';
    albumImg[0].style.transform='rotate(-30deg)';
    // albumImg[0].style.marginTop='-60%';

    albumImg[1].classList.add('active');
    albumImg[1].style.transition='1s';
    albumImg[1].style.transform='rotate(20deg)';
   
})

//비디오 버튼을 눌렀을 때 
senseListEls[2].addEventListener('click', function(){
    console.log('클릭됨'); // 맞게 선택되었는지를 확인하는 디버그
    // 추가되었던 클래스를 삭제한다.
    albumImg[0].classList.remove('active');
    albumImg[1].classList.remove('active');
   
})
//  메뉴 - 앨범 안에서 두번째 버튼을 눌렀다가 다시 첫버튼을 눌렀을 때 인터렉션이 재실행 될 수 있도록...
albumListbtn[0].addEventListener('click', function(){
    console.log('클릭됨'); // 맞게 선택되었는지를 확인하는 디버그
    // 클래스를 추가해준다.
    albumImg[0].classList.add('active');
    albumImg[0].style.transition='1s';
    albumImg[0].style.transform='rotate(-30deg)';
    // albumImg[0].style.marginTop='-60%';

    albumImg[1].classList.add('active');
    albumImg[1].style.transition='1s';
    albumImg[1].style.transform='rotate(20deg)';
   
})
albumListbtn[1].addEventListener('click', function(){
    console.log('클릭됨'); // 맞게 선택되었는지를 확인하는 디버그
    // 추가되었던 클래스를 삭제한다.
    albumImg[0].classList.remove('active');
    albumImg[1].classList.remove('active');
   
})



// 각 멤버의 이름을 클릭 했을 때 도형이 1초의 시간동안 이동.
for(let i = 0; i < shapeTransition.length; i++){
    shapeTransition[i].style.transition = '1s';
}
// 각 멤버의 이름을 클릭 했을 때 도형의 위치값이 바뀐다.
for (var i = 0; i < memberListEls.length; i++) {
    memberListEls[i].onclick = function (e) {
        let el = e.currentTarget, target =  memberListEls.indexOf(el);
        // console.log('클릭 됩니다~'); // 클릭 확인을 위한 콘솔로그
        // 첫번째 버튼을 클릭했을 떄
        if(target === 0){
            // 첫번째 도형
            shapeTransition[0].style.top = '30%';
            shapeTransition[0].style.left = '25%';
            shapeTransition[0].style.background = '#FF971E';
             // 두번째 도형
            shapeTransition[1].style.top = '10%';
            shapeTransition[1].style.left = '30%';
            shapeTransition[1].style.transform = 'scale(1)';
             // 세번째 도형
            shapeTransition[2].style.top = '80%';
            shapeTransition[2].style.left = '80%';
        }
        // 두번째 버튼을 클릭했을 떄
        else if(target === 1){
            shapeTransition[0].style.top = '50%';
            shapeTransition[0].style.left = '10%';
            shapeTransition[0].style.background = '#FF971E';
            shapeTransition[0].style.border = 'none';

            shapeTransition[1].style.top = '40%';
            shapeTransition[1].style.left = '80%';
            shapeTransition[1].style.transform = 'scale(2)';
            
            shapeTransition[2].style.top = '20%';
            shapeTransition[2].style.left = '50%';
        }
        // 세번째 버튼을 클릭했을 떄
        else if(target === 2){
            shapeTransition[0].style.top = '20%';
            shapeTransition[0].style.left = '25%';
            shapeTransition[0].style.background = '#1673ff';
            shapeTransition[0].style.border = 'none';

            shapeTransition[1].style.top = '50%';
            shapeTransition[1].style.left = '70%';
            shapeTransition[1].style.transform = 'scale(1)';
            
            shapeTransition[2].style.top = '50%';
            shapeTransition[2].style.left = '90%';
        }
        // 네번째 버튼을 클릭했을 떄
        else if(target === 3){
            shapeTransition[0].style.top = '50%';
            shapeTransition[0].style.left = '70%';

            shapeTransition[1].style.top = '30%';
            shapeTransition[1].style.left = '40%';
            
            shapeTransition[2].style.top = '90%';
            shapeTransition[2].style.left = '20%';
        }
        // 다섯번째 버튼을 클릭했을 떄
        else if(target === 4){
            shapeTransition[0].style.top = '60%';
            shapeTransition[0].style.left = '80%';
            shapeTransition[0].style.background = '#00A2A0';
            shapeTransition[0].style.border='none';

            shapeTransition[1].style.top = '50%';
            shapeTransition[1].style.left = '30%';
            
            shapeTransition[2].style.top = '20%';
            shapeTransition[2].style.left = '80%';
        }
        for(let i = 0; i < memberListEls.length; i++){
            memberListEls[i].style.opacity = .5;
        } 
        //멤버의 내용이 담겨 있는 영역의 오퍼시티와 비지블리티 조절
        for (let j = 0; j < memberWrapEls.length; j++) {
            memberWrapEls[j].style.visibility = 'hidden';
            memberWrapEls[j].style.opacity = 0;
            memberWrapEls[j].style.position = 'fixed';
        } 

        memberWrapEls[target].style.visibility = 'visible';
        memberWrapEls[target].style.opacity = 1;
        memberWrapEls[target].style.position = 'fixed';
        memberListEls[target].style.opacity = 1;
    }
}
// 멤버의 내용이 담겨 있는 영역을 디스플레이 논으로 가려버린다.
for(let j = 0; j < memberWrapEls.length; j++){
    memberWrapEls[j].style.display ='none';
}
// 이미지에 마우스 호버 시, 숨어있던 이미지가 나오며, 호버 도형이 이동한다.
for(let i = 0; i < memberImgEls.length; i++){
    memberImgEls[i].addEventListener('mouseover',function(){
        for(let i = 0; i < memberImgEls.length; i++){
            hoverImgEls[i].classList.add('active');
        }
        for(let i = 0; i < memberImgEls.length; i++){
            memberImgEls[i].style.pointerEvent ='none';
        }
        // 클래스를 추가해준다.
        // 멤버 이미지와 함꼐 이동하게 해준다.
        for(let i = 0; i < memberImgEls.length; i++){
            hoverTextEls[i].classList.add('active');
        }
    })
}
// 이미지에서 마우스가 벗어나면 이미지와 도형이 원래 위치로 이동한다.
for(let i = 0; i < memberImgEls.length; i++){
    memberImgEls[i].addEventListener('mouseleave',function(){
        for(let i = 0; i < memberImgEls.length; i++){
            hoverImgEls[i].classList.remove('active');
        }
        for(let i = 0; i < memberImgEls.length; i++){
            memberImgEls[i].style.pointerEvent ='auto';
        }
        // 클래스를 삭제해준다.
        // 멤버 이미지와 함꼐 원래 위치로 돌아온다.
        for(let i = 0; i < memberImgEls.length; i++){
            hoverTextEls[i].classList.remove('active');
        }
    })
}

for(let i = 0; i < memberImgEls.length; i++){
    memberImgEls[i].addEventListener('mouseleave',function(){
        for(let i = 0; i < memberImgEls.length; i++){
            memberImgEls[i].style.pointerEvent ='auto';
        }
    })
}

// 버튼을 눌렀을 시 트랙리스트의 화면이 바뀜
for(let i = 0; i < albumListbtn.length; i++){
    albumListbtn[i].style.opacity = '1';
}

//앨범 안의 리스트 버튼을 클릭했을 때 
for (var i = 0; i < albumListbtn.length; i++) {
    albumListbtn[i].onclick = function (e) {
        let el = e.currentTarget, target =  albumListbtn.indexOf(el);
        
        // 앨범의 스타일 값 조정
        for (let i = 0; i < albumListEls.length; i++) {
            albumListEls[i].style.visibility = 'hidden';
            albumListEls[i].style.opacity = 0;
            albumListEls[i].style.position = 'fixed';
        }
        // 버튼 눌렀을 시 버튼의 색이 바뀐다
        for (let i = 0; i < albumListbtn.length; i++) {
            albumListbtn[i].style.color = '#FF971E'; //주황색           
            trackMusicEls[0].style.opacity = 1;
        }

        albumListbtn[target].style.color = ' #1673ff';//파란색
        albumListEls[target].style.visibility = 'visible';
        albumListEls[target].style.opacity = 1;
        albumListEls[target].style.position = 'fixed';
    }
}
// 앨범의 첫번째 버튼을 클릭 했을 때
albumListbtn[0].addEventListener('click', function(){
    // 클래스를 삭제해준다.
    trackListEl.classList.remove('active');
    // 각 섹션의 포인트이벤트 값을 바꿔준다.
    // 각 세션의 서로 겹쳐져서 눌리지 않는 것을 방지하기 위함
    albumListEls[0].style.pointerEvents="auto";
    albumListEls[1].style.pointerEvents="none";
})
// 위의 식과 동일하게 작성.(각 배열의 값은 다르게 설정)
albumListbtn[1].addEventListener('click', function(){
    // 클래스를 추가해준다.
    trackListEl.classList.add('active');
    albumListEls[0].style.pointerEvents="none";
    albumListEls[1].style.pointerEvents="auto";
})

// 트랙리스트를 클릭했을 때의 이벤트
for (var i = 0; i < trackMusicEls.length; i++) {
    trackMusicEls[i].onclick = function (e) {
        let el = e.currentTarget, target =  trackMusicEls.indexOf(el);

        // 우선... 가사지가 보이지 않아야 하기 때문에 가려준다.
        for(let j = 0; j < trackLyricsEls.length; j++){
            trackLyricsEls[j].style.visibility = 'hidden';
           
        }
        // 버튼 눌렀을 시, 스타일 값 변경...
        // x 축으로 이동하게 하고 싶었다.
        for (let i = 0; i < trackSlideEls.length; i++) {
            trackSlideEls[i].style.visibility = 'hidden';
            trackSlideEls[i].style.opacity = 0; 
            trackSlideEls[i].style.position = 'fixed';
            trackSlideEls[i].style.transition ='1s';
            trackSlideEls[i].style.transform = 'translateX(-20px)';
        }
        // 비활성화된 버튼은 오퍼시티 0.5 배당
        for(let i = 0; i < trackMusicEls.length; i++){
            trackMusicEls[i].style.opacity = '.5';
        }
        // 스타일 변경 값.
        trackSlideEls[target].style.visibility = 'visible';
        trackSlideEls[target].style.opacity = 1;
        trackSlideEls[target].style.position = 'fixed';
        trackSlideEls[target].style.transition ='1s';
        trackSlideEls[target].style.transform = 'translateX(0px)';
        trackMusicEls[target].style.opacity = 1;

        // 스탑버튼을 눌렀을 때 실행되는 클릭 이벤트
        // 다른 트랙리스트를 눌렀을 때 리셋되어야 하기 때문에.
        for(let j = 0; j < trackSoundEls.length; j++){
            stopAudio(j)
        }
    }
}

// 가사 버튼을 눌렀을 때 실행되는 클릭 이벤트
// 클릭하면 가사 페이지가 나온다.
for(let i = 0; i < trackLyricsbtn.length; i++){
    trackLyricsbtn[i].addEventListener('click',function(){
        for(let j = 0; j < trackLyricsEls.length; j++){
            trackLyricsEls[j].style.visibility ='hidden';
            trackLyricsEls[j].style.width='0vw';
            trackLyricsEls[j].style.transition ='0.5s ease-in-out';
        }
        trackLyricsEls[i].style.visibility = 'visible';
        trackLyricsEls[i].style.transition ='0.5s ease-in-out';
        trackLyricsEls[i].style.width='40vw';
    })
    // 가사버튼을 누르면, 클로즈 버튼도 함께 나온다. 
    // 클로즈 버튼을 누를 시, 아래 식의 기능과 함께 가사페이지가 닫힌다.
    closeLyricsbtn[i].addEventListener('click', function(){
        trackLyricsEls[i].style.visibility = 'hidden';
        trackLyricsEls[i].style.width='0vw';
        trackLyricsEls[i].style.transition ='0.5s ease-in-out';
    })
}


