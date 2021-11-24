document.addEventListener('DOMContentLoaded', function(){
	//커서 변수를 설정하고 createElement를 통해 ('div')를 추가하였습니다.
	var cursor = document.createElement('div');
	var cursorRound = document.createElement('div');
	// classList.add를 활용하여 class를 추가하였습니다.
	cursor.classList.add('cursor');
	cursorRound.classList.add('cursor-round');

	cursor.appendChild(cursorRound);
	document.body.appendChild(cursor);

	// 새롭게 생성된 변수에 classList.add를 통해 생성한 class 값을 할당합니다.
	var cursorRound = document.querySelector('.cursor-round');
	// .setAttribute()는 선택한 요소(element)의 속성(attribute) 값을 정합니다.
	// client는 브라우저 페이지에서의 좌표 위치를 반환하나 스크롤은 무시하고 해당 페이지의 상단을 0으로 측정합니다.
	document.addEventListener('mousemove', function(e){
		cursorRound.setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px");
	});
});