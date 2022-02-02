const videoListEl = document.querySelector('.video-list > ul');
const videoListEls = document.querySelectorAll('.video-list > ul > li');
const videoContainer = document.querySelector('.video-container')
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
const videoRespon = document.querySelector('.video-respon-wrap > video');
const videoText = document.querySelector('.video-respon-wrap > .video-text > p');
var count = 0;
let videoLength = videoListEls.length;
let currentIndex = 0;
let videoListIndex = 0;
let videoLink =[
    {
        video:'./img/media/video/TimeofOurLifeMV.mp4',
        text:'Time of Our Life MV'
    },
    {
        video:'./img/media/video/Forme.mp4',
        text:'For Me – Concert .ver'
    },
    {
        video:'./img/media/video/bestpart.mp4',
        text:'Best Part – Concert .ver'
    },
    {
        video:'./img/media/video/MVTeaser.mp4',
        text:'Time of Our Life MV teaser'
    },
    {
        video:'./img/media/video/AlbumSampler.mp4',
        text:'The Book of Us : Gravity Album Sampler'
    }
]
let videoListLength = videoLink.length;

prevBtn.addEventListener('click', ()=>{
    if(matchMedia("screen and (min-width : 1301px) and (max-width : 1920px)").matches){
        count--; 
        console.log(count);
        videoListEl.style.transform = `rotate( ${72 * count * -1}deg)`;
        videoListEl.style.transition="0.7s";     
    
        for(let i = 0; i < videoListEls.length; i++){
            videoListEls[i].style.opacity = 0;
        }
        if(count > 0){
            if(count >= videoListEls.length){
                videoListEls[count % videoListEls.length].style.opacity = 1;
            } else {
                videoListEls[count].style.opacity = 1;
            }
        } else if(count <= 0){ 
            if(Math.abs(count) >= videoListEls.length){
                if(Math.abs(count) % videoListEls.length == 0) {
                    videoListEls[0].style.opacity = 1;
                }else{ 
                    videoListEls[videoListEls.length - Math.abs(count) % videoListEls.length].style.opacity = 1;
                }
            } else {
                Math.abs(count) === 0 ? videoListEls[0].style.opacity = 1 : 
                videoListEls[videoListEls.length - Math.abs(count)].style.opacity = 1;
            }
        }
    }
    else if(matchMedia("screen and (max-width : 1300px)").matches){
        console.log('prevclick');
        videoListIndex = videoListIndex - 1;
        videoListIndex < 0 && (videoListIndex = videoListLength - 1);
        videoListEl.style.transition="0.7s";  
        console.log(videoListIndex);
        for(let i = 0; i < videoListEls.length; i++){
            videoListEls[i].classList.remove('active');
        }
        videoListEls[videoListIndex].classList.add('active');
        videoRespon.setAttribute('src', videoLink[videoListIndex].video);
        videoText.innerText = videoLink[videoListIndex].text;
    }
})
nextBtn.addEventListener('click', ()=>{
    if(matchMedia("screen and (min-width : 1301px) and (max-width : 1920px)").matches){
        count++;
        console.log(count);
        videoListEl.style.transform = `rotate( ${72 * count * -1}deg)`; 
        videoListEl.style.transition="0.7s";
        for(let i = 0; i < videoListEls.length; i++){
            videoListEls[i].style.opacity = 0;
        }
        if(count >= 0){
            if(count >= videoListEls.length){
                count % videoListEls.length === 0 ? videoListEls[0].style.opacity = 1 : 
                videoListEls[count % videoListEls.length].style.opacity = 1;
            }else {
                videoListEls[count].style.opacity = 1;
            }
        }else if(count < 0){
            if(Math.abs(count) > videoListEls.length){
                Math.abs(count) % videoListEls.length == 0 ? videoListEls[0].style.opacity = 1 : 
                videoListEls[videoListEls.length - Math.abs(count) % videoListEls.length].style.opacity = 1;
            } else {
                videoListEls[videoListEls.length - Math.abs(count)].style.opacity = 1;
            }
        } 
    }
    else if(matchMedia("screen and (max-width : 1300px)").matches){
        console.log('prevclick');
        videoListIndex = videoListIndex + 1;
        videoListIndex > videoListLength - 1 && (videoListIndex = 0);
        console.log(videoListIndex);
        for(let i = 0; i < videoListEls.length; i++){
            videoListEls[i].classList.remove('active');
        }
        videoRespon.setAttribute('src', videoLink[videoListIndex].video);
        videoText.innerText = videoLink[videoListIndex].text;
        videoListEls[videoListIndex].classList.add('active');
    }
})

    


