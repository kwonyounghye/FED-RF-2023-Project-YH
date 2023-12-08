// DC.com 레이아웃 컴포넌트 : 실제적인 최상위 컴포넌트임!
import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";


// Context API 불러오기
import { yhCon } from "../modules/yhContext";
import { useNavigate } from "react-router-dom";
import React, {  useCallback,useState, useEffect, useLayoutEffect } from "react";
// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
export function Layout() {
//  // 후크상태변수 설정 : 페이지 변경
//  const [pgName, setPgName] = useState("main");

//  // 페이지변경 상태 변수 업데이트 함수
//  const chgPgName = (txt) => {
//      setPgName(txt);
//  }; ////////// chgPgName 함수 //////////////

 // 랜더링 후 실행구역 ////////////
 useEffect(() => {
     // 햄버거 버튼 클릭시 전체 메뉴 보이기/숨기기
     $(".ham").click((e) => {
         // 1. 전체메뉴 박스 : .mbox -> 보이기/숨기기
         $(".mbox").toggleClass('on');

         // 2. 햄버거버튼에 클래스 'on' 넣기/빼기
         $(e.currentTarget).toggleClass("on");
         // e.target과 e.currentTarget은 다르다!
         // 후자가 햄버거 버튼 자신임!
         // console.log(e.currentTarget)
        }); ////////// click /////////////
        // 렌더링구역 한번만 실행 : 옵션 []
    }, []); //////////// useEffect //////////

  // 랜더링 후 실행구역 /////////////////////
  useLayoutEffect(()=>{
    // 페이지 이동 시 스크롤 위치 상단이동
    window.scrollTo(0,0);
  }); ////////// useEffect ///////////

  // 라우터 이동객체 설정 -> 컨텍스트 API 사용!
  const goNav = useNavigate();
  // 라우터 이동함수 : pgName - 페이지이름 / param - 전달값
  const chgPage = useCallback((pgName) =>{ goNav(pgName)
    console.log(5555);
  },[]);
   /****************************************
     [ 컨텍스트 API 공유값 설정 ]
     1. chgPage함수 : 라우터 이동 기능
   ****************************************/
  //  리턴 코드 //////////////////////////
    return (
      // 담은 것이 여러개일지라도 다 전달됨
      <yhCon.Provider value={{chgPage}}> 
        <TopArea cat={chgPage} />
        <MainArea />
        <FooterArea />  
      </yhCon.Provider>
    );
} ////////// Layout 컴포넌트 ///////////////////