import { useContext, useEffect } from "react";
import "../css/contact.css";
import $ from "jquery";
import { yhCon } from "../modules/yhContext";
import React from "react";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function Contact() {
    // 컨텍스트 사용
    //   const myCon = useContext(yhCon);
    useEffect(() => {
        const content = $('.inform');
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
                <div className="inform">
                    {/* 설명 */}
                    ❕케이크 및 디저트 예약, 선물 포장, 단체 주문 &<br /> 대관 문의는 전화나 인스타 DM으로 연락바랍니다❕
                </div>
                <div className="layout">
                    <section>
                        {/* 지도 */}
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12648.089338825781!2d126.87973556602326!3d37.5780917583475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c998a863a3667%3A0x2e1242fdd06ab621!2z7Y-867Kg66W0!5e0!3m2!1sko!2skr!4v1701152626257!5m2!1sko!2skr"></iframe>
                        </div>
                    </section>
                    <section>
                    <br />

                            <span className="key">주소</span>
                            <br />

                        <address>
                            {/* 주소 */}
                            381, World Cup buk-ro, Mapo-gu Seoul, Korea
                            <br />
                            서울 마포구 월드컵북로 381 지층
                            <br />
                            경의중앙수색역 1번 출구에서 840m
                        </address>
                        <br />
                        <br />


                        {/* 전화번호 */}
                        <span>
                            <span className="key">전화번호</span>

                            <br />
                            02-306-3392
                        </span>
                        <br />
                        <br />

                        {/* 영업시간 */}
                        <span>
                            <span className="key">영업시간</span>
                            <br />
                            월 08:00 - 22:30
                            <br />
                            화 08:00 - 22:30
                            <br />
                            수 08:00 - 22:30
                            <br />
                            목 08:00 - 22:30
                            <br />
                            금 08:00 - 22:30
                            <br />
                            토 08:00 - 19:00
                            <br />일 & 공휴일 정기휴무
                        </span>
                        <br />
                        <br />

                        {/* 버튼1 */}
                        <div className="icon">
                            <a href="https://www.instagram.com/pommesvertess/">
                                <FontAwesomeIcon icon={faInstagram} className="insta" style={{ fontSize: "5vw", cursor: "pointer" }} />
                            </a>
                            <a href="https://www.youtube.com/watch?v=0_iSKCXU8cE">
                                <FontAwesomeIcon icon={faYoutube} style={{
                                    color: '#f00', cursor: "pointer",
                                    fontSize: '5vw'
                                }} />
                            </a>
                        </div>
                        {/* 버튼2 */}
                    </section>
                </div>

            </div>
        </>
    );
}