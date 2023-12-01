// 1. 대상선정 : 
// 스크롤 등장 대상: .hide-el
const scAct = domFn.qsa(".hide-el");
console.log('대상: ', scAct);

// 2. 전체 window에 스크롤 이벤트 셋팅하기
// 2-1. 스크롤 등장 액션 이벤트 설정
domFn.addEvt(window,'scroll',showIt);

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


    console.log("scTop: ", scTop);

    
    
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