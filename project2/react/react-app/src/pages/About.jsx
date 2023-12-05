

import "../css/about.css";
import { useEffect } from "react";

import $ from 'jquery';

export function About() {

    let tgEle1;
    let tgEle2;
    let winW = window.innerWidth;

    const scrollFn = () => {
        let scTop = $(window).scrollTop();
        console.log(scTop);

        if(scTop< winW/1.4*2.8)
        tgEle1.css({left:-scTop*0.5+'px'})

        if(scTop<winW/1*2.4)
        tgEle2.css({left:-scTop*0.9+'px'})
    }

    useEffect(()=>{
        tgEle1 = $('.content1');
        tgEle2 = $('.content2');
        $(window).scroll(scrollFn);

    },[]);


    // 리턴코드 ////////////////////////////
    return (
        <>
                <div className="about">
                    <div className="layout1">
                        <div className="intro1">
                            {/* 이미지1 */}
                            <img src="../../images/intro1.jpg" />
                        </div>
                        <div className="content1">
                            pomme 
                            사과
                        </div>
                    </div>
                    {/* 위치 고정 설명 */}
                    <div className="introduce">
                        <ul className="introduce_ani">
                            <li>폼베르는 매일 아침 유기농밀가루, 천연발효종, 친환경 식재료로 건강하고 맛있는 빵을 만듭니다.       </li>
                            <li>폼베르는 매일 아침 유기농밀가루, 천연발효종, 친환경 식재료로 건강하고 맛있는 빵을 만듭니다.       </li>
                        </ul>
                    </div>
                    <div className="layout2">
                        <div className="content2">
                            verte
                            녹색
                        </div>
                        <div className="intro4">
                            {/* 이미지4 */}
                            <img src="../../images/main3.jpg" />
                        </div>
                        <div className="intro2">
                            {/* 이미지2 */}
                            <img src="../../images/intro2.jpg" />
                        </div>
                        <div className="intro3">
                            {/* 이미지3 */}
                            <img src="../../images/intro3.jpg" />
                        </div>
                        <div className="intro5">
                            {/* 이미지5 */}
                            <img src="../../images/main5.jpg" />
                        </div>
                    </div>
                </div>

        </>
    );
}
