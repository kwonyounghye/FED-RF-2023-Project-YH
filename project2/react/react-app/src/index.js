import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import { TopArea } from './layout/TopArea';
import "./css/main.css";
import { Layout } from "./layout/Layout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Main } from "./pages/Main";
import { Menu } from './pages/Menu';

/********************************************* 
    [ 리액트 라우터 ]
    -> 컴포넌트를 연결하여 특정 이벤트에 모듈을
    변경해주는 중계역할을 함
    1. <BrowserRouter> - 라우터 Root
    2. <Routes> - 개별 라우터를 묶어주는 역할
    3. <Route> - 개별 라우터
        (속성)
            (1) path : 경로를 지정함
                    (Link의 to속성 경로와 일치함!)
            (2) element : 연결할 컴포넌트 지정

        (하위 라우트 만들기)
            <Route path="/">
                <Route />
                <Route />
                <Route />
            </Route>
    4. 라우터를 구성하는 컴포넌트는 자체적으로
    내보내기 셋팅을 해야한다!
    -> export default 라우터 컴포넌트

    [ 리액트 라우터 흐름 ]
    1. index.js 에 라우터 중앙 셋팅
    2. Layout.jsx 레이아웃 컴포넌트를 루트로 선택
    3. 상단영역 GNB에 <Link to> 셋팅
    4. 메인영역에 <Outlet /> 셋팅
    
*********************************************/

// 라우터구성 컴포넌트 : 스스로 내보내기 셋팅 필수!
// 레이아웃 컴포넌트를 라우터에 입혀서 화면에
// 출력해야하기 때문에 스스로 내보내기를 셋팅해야하는 것!
export default function App() {
    // 랜더링 후 실행구역 ////////////
    useEffect(()=>{
      // 햄버거 버튼 클릭시 전체 메뉴 보이기/숨기기
      $('.ham').click(e=>{
        // 1. 전체메뉴 박스 : .mbox -> 보이기/숨기기
        $('.mbox').fadeToggle(400);
  
        // 2. 햄버거버튼에 클래스 'on' 넣기/빼기
        $(e.currentTarget).toggleClass('on');
        // e.target과 e.currentTarget은 다르다!
        // 후자가 햄버거 버튼 자신임!
        // console.log(e.currentTarget)
  
        // 3. 비디오 재생/멈춤 : 대상 - .bgm
        // get(0)은 비디오컬렉션임! -> 제이쿼리용
        const vid = $('.bgm').get(0);
        vid.paused ? vid.play() : vid.pause();
        // console.log(vid.paused);
        // paused 속성 : 동영상 멈춤일때 true 리턴
        // play() 메서드 : 동영상 재생 메서드
        // pause() 메서드 : 동영상 정지 메서드
  
      }); //////// click ////////
      
      // 랜더링구역 한번만 실행 : 옵션 []
    },[]); ////////// useEffect //////////////
  
  return (
    <BrowserRouter>
      <Routes>
        {/* 중요!!! 레이아웃 컴포넌트를 루트로 설정! */}
        <Route path="/" element={<Layout />}>
          {/* 하위 라우트 셋팅 
          - path대신 index만 쓰면 첫페이지로 로딩함! 
          -> path는 Layout의 Link to="/" 에 해당하는 셋팅*/}
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
} ///////////// App 컴포넌트 ///////////////////

// 최상위 컴포넌트 출력
// 먼저 root 객체 만들고
const root = ReactDOM.createRoot(document.querySelector('#root'));
// render 메서드로 출력
root.render(<App />);