let senseNavList = document.querySelectorAll('.sense-nav > ul > li > a');
const section = document.querySelectorAll('section');
const transitionBox = document.querySelector('.transitionbox');

senseNavList = Array.prototype.slice.call(senseNavList);

for(let i = 0; i < senseNavList.length; i++){
    senseNavList[i].addEventListener('click',(e)=>{
        let target = e.currentTarget;
        naveListIndex = senseNavList.indexOf(target);
        for(let i = 0; i < section.length; i++){
            section[i].classList.remove('active');
        }
        for(let i = 0; i < senseNavList.length; i++){
            senseNavList[i].classList.remove('active');
        }
        section[i].classList.add('active');
        senseNavList[i].classList.add('active');
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
        }
        else if(naveListIndex === 2){
            console.log('click3');
            transitionBox.style.width ="80%";
            transitionBox.style.height ="100%";
            transitionBox.style.background ="#FF971E";
            transitionBox.style.bottom ="0%";
            transitionBox.style.right ="0%";
            transitionBox.style.transition ="ease-in 0.2s";
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