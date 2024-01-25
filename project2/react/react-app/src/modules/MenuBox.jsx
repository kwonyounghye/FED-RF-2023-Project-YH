import { useEffect } from 'react';
import '../css/menu_box.css';
import $ from 'jquery';

export function MenuBox(props) {
    useEffect(()=> {
        if($('.menuimg')){
            $('.menuimg').mouseover(()=>{

                $('.menutxt').stop().fadeTo(300,1);
                $(".menuimg").css({opacity:'.5'})
            });
        }
        else {}
            // $('.menuimg').mouseout(()=>{

            //     $('.menutxt').stop().fadeTo(300,0);
            // });

       

    }); ///////// useEffect /////////////
    return (
        <>
        <div className="menubox" menu={props.menu}>
            {/* 닫기버튼 */}
            <button className="close">
                <span></span>
                <span></span>
            </button>
            <div className="style">
                <div className="menuname"></div>
            </div>
                <div className="menuimg"></div>
                <div className="menutxt"></div>
        </div>
        </>
    )
}