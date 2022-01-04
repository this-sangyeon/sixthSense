const videoListEl = document.querySelector('.video-list > ul');
const videoListEls = document.querySelectorAll('.video-list > ul > li');
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');

// var opacityVideo;
var count = 0;
// opacityVideo.style.opacity = 0.5;
prevBtn.addEventListener('click', function(){
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
        // 카운트가 비디오 개수보다 크거나 같다면 
        //( count >= 5 )
        if(count >= videoListEls.length){
            // 개수는 5개니까 5를 0으로 만들어야하고 6을 2로 만들어야하고.. .. 10이 되었다면 0으로 만들어야 한다..
            // 때문에 카운트를 비디오 개수(5)로 나눈 나머지를 구하면 0 ~ 5 범위 내에서만 인덱스르 찾을 수 있음.
            // 여기서 나머지 연산자 % 사용!
            videoListEls[count % videoListEls.length].style.opacity = 1;
        } else { 
            // 카운트가 비디오 개수보다 작다면 
            //( count <  5 )
            // 인덱스가 0부터 5까지의 범위 내이기 때문에 나머지를 구할 필요가 없다~~
            videoListEls[count].style.opacity = 1;
        }
    } else if(count <= 0){ // 카운트가 음수일때
        // Math.abs란 음수를 양수로 만들어주는 메소드.
        // 인덱스값에 음수가 들어갈 수 없으므로 카운트를 모두 음수로 바꾸어준다.
        // 양수로 바꾼 카운트가 비디오 개수(5)보다 크거나 같다면 ( 5 ~ )
        if(Math.abs(count) >= videoListEls.length){
            // 양수로 바꾼 카운트를 비디오 개수로 나눈 나머지를 계산했을 때 0이라면
            if(Math.abs(count) % videoListEls.length == 0) {
                videoListEls[0].style.opacity = 1;
            }else{ 
                // Math.abs(count) % videoListEls.length !== 0 
                // 양수로 바꾼 카운트를 비디오 개수로 나눈 나머지를 계산했을 때 0이 아니라면.

                // 이렇게 이프문으로 나눠준 이유는 아래 식에서 
                // videoListEls[ 5 - 0] <- 5빼기 0이라는 연산이 성립이 안되길래 이프문을 써서 
                // 0을 빼야할 경우엔 인덱스 0번째 요소를 잡을 수 있도록 이프문으로 나눠준 것.
 
                // videoListEls [비디오 개수 - (양수로바꾼 카운트를 비디오개수로 나눈 나머지)].style.opacity ~~~
                // 위 식으로 계산하면 카운트가 마이너스가 되어도 인덱스 값을 제대로 받아올 수 있다ㅏ.
                videoListEls[videoListEls.length - Math.abs(count) % videoListEls.length].style.opacity = 1;
            }
        } else { // 양수로 바꾼 카운트가 비디오 개수보다 작다면 ( 0 ~ 4)
            Math.abs(count) === 0 ? videoListEls[0].style.opacity = 1 : 
            videoListEls[videoListEls.length - Math.abs(count)].style.opacity = 1;
        }
    }
})
// 동일한 방법으로 식 진행
nextBtn.addEventListener('click', function(){
    console.log('클릭 눌리는지요');
    count++;
    console.log(count);
    // transform = `rotate( ${-72 * count}deg)`;
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
})