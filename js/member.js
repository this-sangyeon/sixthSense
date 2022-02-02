let memberList = document.querySelectorAll('.member-area  >.member-list > .list > ul > li ');
const membersMainImage = document.querySelector('.members-imgs > img:first-of-type');
const membersSubImage = document.querySelector('.members-imgs > img:last-of-type');
const membersNickName = document.querySelector('.members-text > .text-area > h1');
const membersRealName = document.querySelector('.members-text > .text-area > p:first-of-type');
const membersBirth = document.querySelector('.members-text > .text-area > p:nth-of-type(2)');
const membersIinstrument = document.querySelector('.members-text > .text-area > p:last-of-type');
const IinstrumentImages = document.querySelector('.member-instrument > img');
const mouseHoverSign = document.querySelector('.members-imgs > p');

memberList = Array.prototype.slice.call(memberList);

let membersInfo = [
    {
        name:'JAE',
        realName:'Jae Park',
        mainImg:'img/member/Jae3.jpg',
        hoverImg:'img/member/Jae.jpg',
        birth:'1992 . 09 . 15',
        instrument:'img/member2/jae.png',
        instName:'LEAD guitar'
    },
    {
        name:'SUNG JIN',
        realName:'Park Sung Jin',
        mainImg:'img/member/sungjin3.jpg',
        hoverImg:'img/member/sungjin.jpg',
        birth:'1993 . 01 . 16',
        instrument:'img/member2/sungjin.png',
        instName:'Rhythmic<br>guitar'
    },
    {
        name:'YOUNG K',
        realName:'kang young hyun',
        mainImg:'img/member/Young K1.jpg',
        hoverImg:'img/member/Young K.jpg',
        birth:'1993 . 12 . 19',
        instrument:'img/member2/youngk.png',
        instName:'BASS'
    },
    {
        name:'WON PIL',
        realName:'kim won pil',
        mainImg:'img/member/wonpil1.jpg',
        hoverImg:'img/member/wonpil.jpg',
        birth:'1994 . 04 . 28',
        instrument:'img/member2/wonpil.png',
        instName:'keyboard'
    },
    {
        name:'DO WOON',
        realName:'Yoon Do woon',
        mainImg:'img/member/dowoon1.jpg',
        hoverImg:'img/member/dowoon.jpg',
        birth:'1995 . 08 . 25',
        instrument:'img/member2/dowoon.png',
        instName:'DRUM'
    }
]
var MemberMusicInst = [
    new Audio('./img/media/memsound/WARNING.mp3'),
    new Audio('./img/media/memsound/OUCH.mp3'),
    new Audio('./img/media/memsound/BeLazy.mp3'),
    new Audio('./img/media/memsound/Illtry.mp3'),
    new Audio('./img/media/memsound/Congratulations.mp3')
]

let membersIndex = 0;

for(let i = 0; i < memberList.length; i++){
    memberList[i].addEventListener('click', (e)=>{
        let targetEl = e.currentTarget;
        membersIndex = memberList.indexOf(targetEl);
        console.log('membersIndex',  membersIndex);
        console.log('cllick');
        for(let j = 0; j < memberList.length; j++){
            memberList[j].classList.remove('active');
            membersMainImage.setAttribute('src', membersInfo[membersIndex].mainImg);
            membersSubImage.setAttribute('src', membersInfo[membersIndex].hoverImg);
            IinstrumentImages.setAttribute('src', membersInfo[membersIndex].instrument);
            membersNickName.innerText = membersInfo[membersIndex].name;
            membersRealName.innerText = membersInfo[membersIndex].realName;
            membersBirth.innerText = membersInfo[membersIndex].birth;
            membersIinstrument.innerHTML = membersInfo[membersIndex].instName;
        }
        memberList[i].classList.add('active');
    })
}
membersMainImage.addEventListener('mouseenter',()=>{
    console.log('hover');
    membersMainImage.classList.add('active');
    membersSubImage.classList.add('active');
    mouseHoverSign.classList.add('active');
    MemberMusicInst[membersIndex].play();
})
membersMainImage.addEventListener('mouseleave',()=>{
    console.log('out');
    membersMainImage.classList.remove('active');
    membersSubImage.classList.remove('active');
    MemberMusicInst[membersIndex].currentTime = 0;
    MemberMusicInst[membersIndex].pause();
    setTimeout(()=>{
        mouseHoverSign.classList.remove('active'); 
    }, 300)
})

