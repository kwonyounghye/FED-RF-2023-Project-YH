import "../css/about.css";
import { useEffect } from "react";
// DOM 함수 모듈

import $ from "jquery";
import {about} from '../data/about';

export function About() {
    let tgEle1;
    let tgEle2;
    let winW = window.innerWidth;
    const selData = Object.keys(about);


    const scrollFn = () => {
        let scTop = $(window).scrollTop();
        console.log(scTop);
        // 위치 * 크기비율 -> 움질일 범위
        if (scTop < winW / 0.35)
            // 속도
            tgEle1.css({ left: -scTop * 0.26 + "px" });

        if (scTop < (winW / 0.7) * 2.0) tgEle2.css({ left: -scTop * 0.5 + "px" });
        // if(scTop< winW/0.3)
        // // 속도
        // tgEle1.css({left:-scTop*0.2+'px'})

        // if(scTop<winW/0.7*2.0)
        // tgEle2.css({left:-scTop*0.5+'px'})
    };

    useEffect(() => {
        tgEle1 = $(".content1");
        tgEle2 = $(".content2");
        $(window).scroll(scrollFn);

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
            getBCR: (ele) => ele.getBoundingClientRect().top,

            // 옵셋탑값 반환 함수
            getOT: (ele) => ele.offsetTop,
        }; ////////////// domFn 객체 ///////////////////////////

        // 1. 대상선정 :
        // 스크롤 등장 대상: .scroll
        const scAct = domFn.qsa(".scroll");
        console.log("대상: ", scAct);

        // 2. 전체 window에 스크롤 이벤트 셋팅하기
        // 2-1. 스크롤 등장 액션 이벤트 설정
        domFn.addEvt(window, "scroll", showIt);

        // 각 요소 옵셋top값 구하기
        const posTop = [];

        scAct.forEach((ele, idx) => {
            posTop[idx] = domFn.getOT(ele);
        }); /////////// forEach //////////////

        console.log("각 위치 배열: ", posTop);

        // 3. 스크롤 등장 기준 설정 : 화면의 3/4
        const CRITERIA = (window.innerHeight / 4) * 3;

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
            for (let x of scAct) addOn(x);
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
        console.log("스크롤한계값: ", scLimit);
        // 비례식 => 스크롤한계값 : 윈도우 높이 = 스크롤 이동값 : 이미지 이동값
        // 이미지 이동값 = 윈도우 높이 * 스크롤 이동값 / 스크롤 한계값

        // 0-1. 스크롤 바 트랙을 잡고 마우스로 위치 이동시 위치값 반영
        //   domFn.addEvt(window,'mouseup',()=>{
        //       setPos(window.scrollY);
        //   });
        //   // 0-2. 키보드 방향키 이동시 위치값 반영
        //   domFn.addEvt(window,'keyup',()=>{
        //       setPos(window.scrollY);
        //   });
    }, []);

    // 리턴코드 ////////////////////////////
    return (
        <>
            <div className="about">
                <div className="layout1">
                    {/* <div className="about1">
                        <img src="./images/intro1.jpg" className="scroll" />
                    </div> */}
                    <div className="content1">pomme</div>
                </div>
                {/* 위치 고정 설명 */}
                <div className="introduce">
                    <ul className="introduce_ani">
                        <li>
                            폼베르는 매일 아침 유기농밀가루, 천연발효종, 친환경 식재료로 건강하고 맛있는 빵을 만듭니다.{" "}
                        </li>
                        <li>
                            폼베르는 매일 아침 유기농밀가루, 천연발효종, 친환경 식재료로 건강하고 맛있는 빵을 만듭니다.{" "}
                        </li>
                    </ul>
                </div>
                <div className="layout2">
                    <div className="content2">verte</div>
                    {/* <div className="intro4">
                            <img src="./images/main3.jpg" className="scroll" />
                            </div>
                            <div className="intro2">
                            <img src="./images/intro2.jpg" className="scroll" />
                            </div>
                        <div className="intro3">
                        <img src="./images/intro3.jpg" className="scroll" />
                        </div>
                        <div className="intro5">
                        <img src="./images/main5.jpg" className="scroll" />
                    </div> */}
                </div>
                    {selData.map((v, i) => (
                        <div className={selData[i]} key={i}>
                            <img src={about[v].img} alt={about[v]} className="scroll" />
                        </div>
                    ))}
            </div>
        </>
    );
}
