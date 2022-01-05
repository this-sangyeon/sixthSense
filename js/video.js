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
// function deskTopResize(){
//     prevBtn.addEventListener('click', ()=>{
//         if(matchMedia("screen and (max-width : 1920px) and (max-height: 1080px)").matches){
//             console.log('클릭 눌리는지요');
//             count--; 
//             console.log(count);
//             // transform = `rotate( ${-72 * count}deg)`;
//             videoListEl.style.transform = `rotate( ${72 * count * -1}deg)`;
//             videoListEl.style.transition="0.7s";     
        
//             for(let i = 0; i < videoListEls.length; i++){
//                 videoListEls[i].style.opacity = 0;
//             }
//             if(count > 0){
//                 if(count >= videoListEls.length){
//                     videoListEls[count % videoListEls.length].style.opacity = 1;
//                 } else {
//                     videoListEls[count].style.opacity = 1;
//                 }
//             } else if(count <= 0){ 
//                 if(Math.abs(count) >= videoListEls.length){
//                     if(Math.abs(count) % videoListEls.length == 0) {
//                         videoListEls[0].style.opacity = 1;
//                     }else{ 
//                         videoListEls[videoListEls.length - Math.abs(count) % videoListEls.length].style.opacity = 1;
//                     }
//                 } else {
//                     Math.abs(count) === 0 ? videoListEls[0].style.opacity = 1 : 
//                     videoListEls[videoListEls.length - Math.abs(count)].style.opacity = 1;
//                 }
//             }
//         }
//     })
//     nextBtn.addEventListener('click',()=>{
//         console.log('클릭 눌리는지요');
//         count++;
//         console.log(count);
//         videoListEl.style.transform = `rotate( ${72 * count * -1}deg)`; 
//         videoListEl.style.transition="0.7s";
    
//         for(let i = 0; i < videoListEls.length; i++){
//             videoListEls[i].style.opacity = 0;
//         }
//         if(count >= 0){
//             if(count >= videoListEls.length){
//                 count % videoListEls.length === 0 ? videoListEls[0].style.opacity = 1 : 
//                 videoListEls[count % videoListEls.length].style.opacity = 1;
//             }else {
//                 videoListEls[count].style.opacity = 1;
//             }
//         } else if(count < 0){
//             if(Math.abs(count) > videoListEls.length){
//                 Math.abs(count) % videoListEls.length == 0 ? videoListEls[0].style.opacity = 1 : 
//                 videoListEls[videoListEls.length - Math.abs(count) % videoListEls.length].style.opacity = 1;
//             } else {
//                 videoListEls[videoListEls.length - Math.abs(count)].style.opacity = 1;
//             }
//         } 
//     })
// }
    
// function tabletResize(){
//     prevBtn.addEventListener('click',()=>{
//         if(matchMedia("screen and (max-width : 1024px) and (max-height: 1366px)").matches){
//             console.log('prevclick');
//             currentIndex = currentIndex - 1;
//             currentIndex < 0 && (currentIndex = videoLength - 1);
//             console.log(currentIndex);
//             for(let i = 0; i < videoListEls.length; i++){
//                 videoListEls[i].classList.remove('active');
//             }
//             videoListEls[currentIndex].classList.add('active');
//         }
//     })
//     nextBtn.addEventListener('click', ()=>{
//         if(matchMedia("screen and (max-width : 1024px) and (max-height: 1366px)").matches){
//             currentIndex = currentIndex + 1;
//             currentIndex > videoLength - 1 && (currentIndex = 0);
//             console.log(currentIndex);
//             for(let i = 0; i < videoListEls.length; i++){
//                 videoListEls[i].classList.remove('active');
//             }
//             videoListEls[currentIndex].classList.add('active');
//         }
//     })
// }

// window.addEventListener('resize',()=>{
//     tabletResize();
//     deskTopResize();
// })


prevBtn.addEventListener('click', ()=>{
    if(matchMedia("screen and (max-width : 1920px) and (max-height: 1080px)").matches){
        console.log('클릭 눌리는지요');
        count--; 
        console.log(count);
        // transform = `rotate( ${-72 * count}deg)`;
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
    else if(matchMedia("screen and (max-width : 1024px) and (max-height: 1366px)").matches){
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
// const videoRespon = document.querySelector('.video-respon-wrap > video');
// const videoText = document.querySelector('.video-respon-wrap > p');
nextBtn.addEventListener('click', ()=>{
    if(matchMedia("screen and (max-width : 1920px) and (max-height: 1080px)").matches){
        console.log('클릭 눌리는지요');
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
        } else if(count < 0){
            if(Math.abs(count) > videoListEls.length){
                Math.abs(count) % videoListEls.length == 0 ? videoListEls[0].style.opacity = 1 : 
                videoListEls[videoListEls.length - Math.abs(count) % videoListEls.length].style.opacity = 1;
            } else {
                videoListEls[videoListEls.length - Math.abs(count)].style.opacity = 1;
            }
        } 
    }
    else if(matchMedia("screen and (max-width : 1024px) and (max-height: 1366px)").matches){
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





// if(matchMedia("screen and (max-width : 1920px) and (max-height: 1080px)").matches){
//     prevBtn.addEventListener('click', function(){
//         console.log('클릭 눌리는지요');
//         count--; 
//         console.log(count);
//         // transform = `rotate( ${-72 * count}deg)`;
//         videoListEl.style.transform = `rotate( ${72 * count * -1}deg)`;
//         videoListEl.style.transition="0.7s";     
    
//         for(let i = 0; i < videoListEls.length; i++){
//             videoListEls[i].style.opacity = 0;
//         }
//         if(count > 0){
//             // 카운트가 비디오 개수보다 크거나 같다면 
//             //( count >= 5 )
//             if(count >= videoListEls.length){
//                 videoListEls[count % videoListEls.length].style.opacity = 1;
//             } else {
//                 videoListEls[count].style.opacity = 1;
//             }
//         } else if(count <= 0){ 
//             if(Math.abs(count) >= videoListEls.length){
//                 if(Math.abs(count) % videoListEls.length == 0) {
//                     videoListEls[0].style.opacity = 1;
//                 }else{ 
//                     videoListEls[videoListEls.length - Math.abs(count) % videoListEls.length].style.opacity = 1;
//                 }
//             } else {
//                 Math.abs(count) === 0 ? videoListEls[0].style.opacity = 1 : 
//                 videoListEls[videoListEls.length - Math.abs(count)].style.opacity = 1;
//             }
//         }
//     })
//     // 동일한 방법으로 식 진행
//     nextBtn.addEventListener('click', function(){
//         console.log('클릭 눌리는지요');
//         count++;
//         console.log(count);
//         videoListEl.style.transform = `rotate( ${72 * count * -1}deg)`; 
//         videoListEl.style.transition="0.7s";
    
//         for(let i = 0; i < videoListEls.length; i++){
//             videoListEls[i].style.opacity = 0;
//         }
//         if(count >= 0){
//             if(count >= videoListEls.length){
//                 count % videoListEls.length === 0 ? videoListEls[0].style.opacity = 1 : 
//                 videoListEls[count % videoListEls.length].style.opacity = 1;
//             }else {
//                 videoListEls[count].style.opacity = 1;
//             }
//         } else if(count < 0){
//             if(Math.abs(count) > videoListEls.length){
//                 Math.abs(count) % videoListEls.length == 0 ? videoListEls[0].style.opacity = 1 : 
//                 videoListEls[videoListEls.length - Math.abs(count) % videoListEls.length].style.opacity = 1;
//             } else {
//                 videoListEls[videoListEls.length - Math.abs(count)].style.opacity = 1;
//             }
//         }       
//     })
// }
// nextBtn.addEventListener('click',()=>{

// })
// else if(matchMedia("screen and (max-width : 1024px) and (max-height: 1366px)").matches){
//     prevBtn.addEventListener('click',()=>{
//         console.log('prevclick');
//         currentIndex = currentIndex - 1;
//         currentIndex < 0 && (currentIndex = videoLength - 1);
//         console.log(currentIndex);
//         for(let i = 0; i < videoListEls.length; i++){
//             videoListEls[i].classList.remove('active');
//         }
//         videoListEls[currentIndex].classList.add('active');
//     })
//     nextBtn.addEventListener('click',()=>{
        
//         console.log('prevclick');
//         currentIndex = currentIndex + 1;
//         currentIndex > videoLength - 1 && (currentIndex = 0);
//         console.log(currentIndex);
//         for(let i = 0; i < videoListEls.length; i++){
//             videoListEls[i].classList.remove('active');
//         }
//         videoListEls[currentIndex].classList.add('active');
//     })
// }

// window.onresize = function(){ 
//     window.location.reload(); 
// };

// section[3].addEventListener('resize',()=>{
//     console.log('ddd');
// })

    


