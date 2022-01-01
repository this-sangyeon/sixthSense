let senseNavList = document.querySelectorAll('.sense-nav > ul > li > a');
const section = document.querySelectorAll('section');

senseNavList = Array.prototype.slice.call(senseNavList);

for(let i = 0; i < senseNavList.length; i++){
    senseNavList[i].addEventListener('click',()=>{
        console.log('click');
        for(let i = 0; i < section.length; i++){
            section[i].classList.remove('active');
        }
        section[i].classList.add('active');
    })
}