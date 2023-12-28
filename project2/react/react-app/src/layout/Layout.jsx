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


      
  // 랜더링 후 실행구역 /////////////////////
  useLayoutEffect(()=>{
    // 페이지 이동 시 스크롤 위치 상단이동
    window.scrollTo(0,0);
  }); ////////// useEffect ///////////

  // 라우터 이동객체 설정 -> 컨텍스트 API 사용!
  const goNav = useNavigate();
  // 라우터 이동함수 : pgName - 페이지이름 / param - 전달값
  const chgPage = useCallback((pgName) =>{ goNav(pgName)
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