import {startSS,setPos} from './smoothScroll20.js'; 
// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    // qs/qsa을 길게 안쓰려고 사용
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),

    // 이벤트 셋팅 함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),

    // 바운딩 위치값 함수
    getBCR: ele => ele.getBoundingClientRect().top,
    
    // 옵셋탑값 반환 함수
    getOT: ele => ele.offsetTop,
}; ////////////// domFn 객체 ///////////////////////////

window.addEventListener('DOMContentLoaded', loadFn);

function loadFn() {
    console.log('로딩중');
    
    const intro_ani = qs('.intro1');
    let ani_txt = intro_ani.innerText;
    // 글자 담기 변수
    let ani_text = '';
    // for of문으로 한 글자씩 순회하기
    let num = 0;
    console.log(ani_txt.length);
    for(let x of ani_txt) {
        if(x=='1') ani_text += '<br>';

        if(num===11)
            ani_text += `<b>${x}</b>`;
        else
            ani_text += `<span style="animation-delay:${0.1*num}s">${x}</span>`;

        console.log('x:', x);   
        num++;    
    }

    intro_ani.innerHTML = ani_text;

    // 얼마후 마지막 b태그(+글자)에 클래스"on"주기
    setTimeout(() => {
        qs('.intro1 b').classList.add('on');
    }, 2000);
}



/**************************************************
    [ 스크롤 이벤트를 활용한 요소 등장 액션 기능 구현하기 ]
    1. 사용 이벤트 : scroll
    -> 스크롤바가 있는 페이지에서 또는 부분 박스
    스크롤바가 이동할 때 발생하는 이벤트
    -> 주의 : wheel이벤트와는 다르다! 무엇이?
    스크롤바가 이동하지 않아도 마우스휠이 작동될 때 발생한다!
    (휠이벤트는 모바일에서 사용불가!)

    2. 스크롤 위치값 알아내기
    (1) window.scrollY(IE6~11 지원 안함)
    (2) document.scrollingElement.scrollTop
    (3) document.documentElement.scrollTop
    (4) document.querySelector('html').scrollTop
    -> 가로방향 스크롤바는 Y대신 X라는 문자를 사용함!

    3. 스크롤 등장 대상 요소의 보이는 화면에서의 top값
    getBoundClientRect().top
    -> 보이는 화면 상단을 기준으로 이것보다 위로 갈 경우
    마이너스 값을 리턴한다!
    -> 기준: 보이는 화면 크기를 기준하면 된다!
    -> 윈도우화면 전체: window.innerHeight
    예) 화면의 3/2는 window.innerHeight/3*2
    예) 화면의 4/3은 window.innerHeight/4*3

**************************************************/ 












window.addEventListener('scroll', () => {
  document.querySelectorAll('.hide-el').forEach(el => {
    const rect = el.getBoundingClientRect();
    console.log('rect.top:', rect.top);
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('on');
    } else {
      el.classList.remove('on');
    }
  });
});









// 1. 대상선정 : 
// 스크롤 등장 대상: .hide-el
const scAct = domFn.qsa(".hide-el");
console.log('대상: ', scAct);
// 2. 전체 window에 스크롤 이벤트 셋팅하기
// 2-1. 스크롤 등장 액션 이벤트 설정
domFn.addEvt(window,'scroll',showIt);

// const targets = document.querySelectorAll('.hide-el');

function handleScroll() {
  scAct.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.top > windowHeight * 0.75) {
      if (el.classList.contains('.index_img2') ||
      el.classList.contains('.index_img3') ||
      el.classList.contains('.index_img4') ||
      el.classList.contains('.index_img5')) {
        el.classList.add('on');
      } else {
        el.classList.add('bounce-once');
      }
    } else {
      // 화면 밖으로 나가면 애니메이션 클래스 제거 → 다시 들어올 때 실행되게 함
      el.classList.remove('on', 'bounce-once');
    }
  });
}
console.log('rect.top:', rect.top);
console.log('window.innerHeight - 100:', window.innerHeight - 100);
// window.addEventListener('scroll', handleScroll);
// handleScroll();



// 각 요소 옵셋top값 구하기
const posTop = [];

scAct.forEach((ele,idx)=>{
    posTop[idx] = domFn.getOT(ele);
}); /////////// forEach //////////////

console.log('각 위치 배열: ', posTop);

// 3. 스크롤 등장 기준 설정 : 화면의 3/4
const CRITERIA = (window.innerHeight/4) * 3;

// 4. 스크롤 등장 액션 함수 만들기
function showIt() {
    // 스크롤바 위치값(Y축) 읽어오기
    let scTop = window.scrollY;

    // let scTop = window.document.scrollingElement.scrollTop;
    // let scTop = window.document.documentElement.scrollTop;
    // let scTop = window.document.querySelector('html').scrollTop;
    console.log("scTop: ", scTop);

    // 스크롤 등장 요소 위치값 찍기
    // console.log(pos1, '/', scTop);

    // 정해진 위치의 요소를 스크롤 위치값으로 등장시키기
    // if(scTop>pos1-500) scAct[0].classList.add('on');
    // if(scTop>pos2-500) scAct[1].classList.add('on');
    // if(scTop>pos3-500) scAct[2].classList.add('on');
    
    
    // 요소의 바운딩 위치값 찍기
    for(let x of scAct) addOn(x);
    
} //////////// showIt 함수 //////////////////

// 기준값을 검사후 클래스 넣는 함수 ///
function addOn(ele) {
    // ele-대상요소
    let bTop = domFn.getBCR(ele);
    // console.log('바운딩값:',bTop);
  
    // 기준값 보다 작을때 등장
    if (bTop < CRITERIA) ele.classList.add("on");
    // 기준값보다 크면 원상복귀(숨김)
    else ele.classList.remove("on");
  } /////////// addOn 함수 ////////////
  
// 윈도우 높이값
let winH = window.innerHeight;
// 문서 전체 높이값
let docH = document.body.clientHeight;

// 스크롤 한계값 : 전체 document 높이 - 화면 높이
let scLimit = docH - winH;
console.log('스크롤한계값: ',scLimit);
// 비례식 => 스크롤한계값 : 윈도우 높이 = 스크롤 이동값 : 이미지 이동값
// 이미지 이동값 = 윈도우 높이 * 스크롤 이동값 / 스크롤 한계값

// 떨어지는 여자 요소
const woman = domFn.qs('.content5_2');

function moveWoman() {
    // console.log('난 떨녀');

    // 1. 스크롤 위치값
    let scTop = window.scrollY;

    // 2. 떨녀 top값
    // 이미지 이동값 = 윈도우 높이 * 스크롤 이동값 / 스크롤 한계값
    let wTop = (winH*scTop)/scLimit;

    // // 3. 떨어지는 여자에 적용하기
    woman.style.top = wTop + 'px';

    
    // // 4. 맨 위일 때 윗쪽으로 숨기기
    if(scTop==0) woman.style.top = '-20%';
    
} ////////// moveWoman /////////////




  // 0-1. 스크롤 바 트랙을 잡고 마우스로 위치 이동시 위치값 반영
  domFn.addEvt(window,'mouseup',()=>{
      setPos(window.scrollY);
  });
  // 0-2. 키보드 방향키 이동시 위치값 반영
  domFn.addEvt(window,'keyup',()=>{
      setPos(window.scrollY);
  });