import {useEffect, useState } from 'react';
import '../css/popup.css'


export function Popup({props}) {
    const [check, setCheck] = useState(false); // 체크 여부

    // const today = new Date(); // 오늘 날짜
    // 24시간 더해서 변수 선언
    // 
    // 만약 checked라면 하루동안 열지 않기
    // else면 fade.out(300)
    
    useEffect(()=>{
        // const expires = () => {
        // // 추가되는 하루
        // const day = Number;
        // // 담을 날짜와 최종날짜
        const today = new Date();
        const setDate = today.getDate()+1;
        console.log('date: ',setDate);
        const time = today.getTime() - 24 * 60 * 60 * 1000;
        today.setTime(time);
        localStorage.setItem('noPopup', today.getTime());
        console.log('time: ', today.getTime(),time, 24 * 60 * 60 * 1000);

    // }
        const checkExpire = () => {
            const expires = localStorage.getItem('noPopup');
             if(today.getTime()>expires) {
                return false;
             }
             else {
                return true;
             }
        }

        const timeOut = () => {
            console.log('닫기: ', time(1));
            
        }

        // today.setDate(today.getDate()+day)
        // return setDay;
        // };
        // const closePopup = (props) => {
        //     props(false);
        // }
        // console.log('뭐야:', closePopup);
        // const popup = (props) => {
        //     today = today.setHours(today.getHours()+24);
        //     localStorage.setItem('oneDay', today);
        //     props(false);
        
    },[])
    return(
        <>
            <div className="popup" >
                <button className="close">
                    <span></span>
                    <span></span>
                </button>
                <div className="title"></div>
                <div className="content"></div>
                <div className="checkbox">하루 열지 않기
                <input type='checkbox' /></div>
            </div>
        </>
    )
}