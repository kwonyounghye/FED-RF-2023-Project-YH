import { useContext, useEffect } from "react";
import "../css/contact.css";
import $ from "jquery";
import { yhCon } from "../modules/yhContext";
import React from "react";
import { faYoutube} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function Contact() {
         // 컨텍스트 사용
//   const myCon = useContext(yhCon);
    useEffect(()=> {
        const content = $('.content');
        const layout = $('.layout');
        content.fadeIn(300).addClass('on');
        
        layout.fadeIn(500).addClass('on');

        // function() {
        //     let tgEle = $('.preview');
        //     $('.content').addClass.add("on");
            
        // }
        
    })
    return (
        <>
            <div className="contact">
                <div className="content">
                    {/* 설명 */}
                    ❕케이크 및 디저트 예약, 단체 주문, 대관 문의❕
                </div>
                <div className="layout">
                    <section>
                        {/* 지도 */}
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12648.089338825781!2d126.87973556602326!3d37.5780917583475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c998a863a3667%3A0x2e1242fdd06ab621!2z7Y-867Kg66W0!5e0!3m2!1sko!2skr!4v1701152626257!5m2!1sko!2skr"></iframe>
                        </div>
                    </section>
                    <section>
                        <address>
                            {/* 주소 */}
                            주소
                            <br />
                            381, World Cup buk-ro, Mapo-gu Seoul, Korea
                            <br />
                            서울 마포구 월드컵북로 381 지층
                            <br />
                            경의중앙수색역 1번 출구에서 840m
                        </address>
                        <br />

                        {/* 전화번호 */}
                        <span>
                            전화번호
                            <br />
                            02-306-3392
                        </span>
                        <br />
                        <br />

                        {/* 영업시간 */}
                        <span>
                            영업시간(테이블 마감 & 라스트 오더)
                            <br />
                            월 08:00 - 22:00(21:30)
                            <br />
                            화 08:00 - 22:00(21:30)
                            <br />
                            수 08:00 - 22:00(21:30)
                            <br />
                            목 08:00 - 22:00(21:30)
                            <br />
                            금 08:00 - 22:00(21:30)
                            <br />
                            토 08:00 - 21:00(20:30)
                            <br />일 & 공휴일 정기휴무
                        </span>
                        <br />
                        <br />

                        {/* 버튼1 */}
                        <div className="icon">
                            <a href="https://www.instagram.com/pommesvertess/">
                            {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
                            </a> 
                            <a href="https://www.instagram.com/pommesvertess/">
                            {/* <FontAwesomeIcon icon="fa-brands fa-youtube" />                                 */}
                            <FontAwesomeIcon icon={faYoutube} style={{
                                color:'#f00',
                                fontSize:'50px'}}/>
                            </a>
                        </div>
                        {/* 버튼2 */}
                    </section>
                </div>
            </div>
        </>
    );
}