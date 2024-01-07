// 로고 컴포넌트
import React from "react";

import { img } from "../data/img";
import { yhCon } from "./yhContext";
import { useContext } from "react";
export const Logo = () => {
     // 컨텍스트 API 사용하기
     const myCon = useContext(yhCon);

     // 라우터 이동메서드 셋팅하기 : useNavigate()
     // 일반 메서드와 달리 변수에 전달값을 안써도 되고 이동시킬 주소를 쓰면 해당주소를 이동
     // const goNav = useNavigate();
     // 사용법: 반드시 useNavigate() 메서드를 변수에 담아
     // 이동할 라우터 주소를 쓰면 이동한다
     // 예) goNav('/news') -> 뉴스페이지 이동
     // 예) goNav('/') -> 첫페이지 이동
     // 이동 주소는 대소문자 구분없음!
 

    return (
        <div className="logo"
        onClick={() =>  
        // 컨텍스트 API 함수 호출
        myCon.chgPage('/')}>
            <img src={img.logo} className="logo_img" alt="logo" />
 
        </div>
    );
}; //////////// Logo ///////////