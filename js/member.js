let memberList = document.querySelectorAll('.member-area  >.member-list > .list > ul > li ');
const membersMainImage = document.querySelector('.members-imgs > img:first-of-type');
const membersSubImage = document.querySelector('.members-imgs > img:last-of-type');
const membersNickName = document.querySelector('.members-text > .text-area > h1');
const membersRealName = document.querySelector('.members-text > .text-area > p:first-of-type');
const membersBirth = document.querySelector('.members-text > .text-area > p:nth-of-type(2)');
const membersIinstrument = document.querySelector('.members-text > .text-area > last-of-type');
const IinstrumentImages = document.querySelector('.member-instrument > img');

memberList = Array.prototype.slice.call(memberList);

for(let i = 0; i < memberList.length; i++){
    memberList[i].addEventListener('click', ()=>{
        console.log('cllick');
        for(let j = 0; j < memberList.length; j++){
            memberList[j].classList.remove('active');
        }
        memberList[i].classList.add('active');
    })
}