import { useEffect, useState } from "react";
import "../css/popup.css";
import { popup } from "../data/popup";

import $ from "jquery";

export function Popup() {
    
    // 처음에 noShow값이 true/false여부 결정하기
    // 기준: 로컬쓰값이 현재시간과 차가 24시간을 초과한 경우
    // 24시간을 초로 바꾸면 24 * 60 * 60 * 1000 = 86400000 
    // 로컬스(24시간후 설정시간초) - 현재시간초 = 24시간초보다 작으면 true
    // 크면 false
    
    // 팝업창 안보이기
    let setInitBool = false;
    const selData = popup;
    console.log('selData: ', selData.content);
    
    // 로컬스에 noPopup 저장된 값이 있다면 체크
    if(localStorage.getItem('noPopup')){
        const today = new Date();
        const today2 = new Date(); // 현재시간용
        
        
        // 현재시간초
        const time1 = today.getTime();
        // 하루전시간초
        const time2 = today.getTime() - 24 * 60 * 60 * 1000;
        // 하루후시간초
        const time3 = today.getTime() + 24 * 60 * 60 * 1000;
        // 24시간
        const time24 = 24 * 60 * 60 * 1000;
        // 로컬스(24시간후 설정시간초) - 현재시간초
        let setInit = Number(localStorage.getItem('noPopup')) - today.getTime();
        // 테스트 시 하루후 시간초로!
        // let setInit = Number(localStorage.getItem('noPopup')) - time3;
        
        console.log('현재시간초:',time1);
        console.log('하루전시간초:',time2);
        console.log('하루후시간초:',time3);
        console.log('로컬스초:',Number(localStorage.getItem('noPopup')));
        console.log('24시간초:',time24);
        console.log('빼기계산시간초:',setInit);
        
        // 24시간보다 작으면 다시 팝업을 띄우는 불린값을 true 로 변경함!
        // 로컬쓰에 남은 시간이 0보다 크면 팝업창이 안보이는 것이 true이다.
        if(setInit>0) setInitBool = true;
        
    } /// if ////////////
    
    
    const [check, setCheck] = useState(false); // 체크 안되게 기본값 설정
    const [noShow, setNoShow] = useState(setInitBool); // 노쇼가 아닌 게 기본값(처음엔 보임)
    
    console.log('체크여부:',check);
    // const today = new Date(); // 오늘 날짜
    // 24시간 더해서 변수 선언
    //
    // 만약 checked라면 하루동안 열지 않기
    // else면 fade.out(300)
    
    
    useEffect(() => {
        if(selData.content=='') {
            // console.log('왔니?')
            $('.popup').hide();
           }
        // const expires = () => {
    // // 추가되는 하루
    // const day = Number;
    // // 담을 날짜와 최종날짜
    const today = new Date();
    const today2 = new Date(); // 현재시간용
    const time2 = today.getTime() - 24 * 60 * 60 * 1000;
    const time3 = today.getTime() + 24 * 60 * 60 * 1000;

    // 위에서 만든 날짜 인스턴스를 업데이트하여 변경함!!!
    // today.setTime(time);
   
    console.log("로컬쓰에 저장된시간:", localStorage.getItem("noPopup"));
    console.log(
      "현재시간간: ",
      today2.getTime(),
      "\n하루전시간:",
      time2,
      "\n24시간초로:",
      24 * 60 * 60 * 1000,
      "\n하루후시간-현재시간:",
      time3 - today2.getTime(),

      "\n하루후시간:",
      time3
    );

    // }

    const checkExpire = () => {
      const expires = localStorage.getItem("noPopup");
      if (today.getTime() > expires) {
        return false;
      } else {
        return true;
      }
    };

   
    

   
  },[check]);

  const chgChecked = () => {
      setCheck(!check)
    //   console.log('변경',check);
  }

  const closePopup = () => {
    $('.popup').hide();
    const today = new Date();
    // 하루후 시간!
    const time3 = today.getTime() + 24 * 60 * 60 * 1000;
    if(check) localStorage.setItem("noPopup", time3);
  }
  return (
    <>
    {/* {조건식 && 코드 }*/}
      {!noShow && (
        <div className="popup">
          <h1 className="title">{selData.title}</h1>
          <div className="checkbox">
            <label>하루동안 열지 않기
            <input type="checkbox" onChange={chgChecked} />
            </label>
          <button className="pop-close" onClick={closePopup}>
                {/* <span></span>
                <span></span> */}
                Close
          </button>
          </div>
        <div className="img">
          <img src={selData.img} />
          <h4 className="content">{selData.content}</h4>
          </div>
        </div>
      )}
    </>
  );
}
