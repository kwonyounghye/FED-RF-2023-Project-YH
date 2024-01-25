import { useEffect } from 'react';
import '../css/menu_box.css';
import $ from 'jquery';

export function MenuBox(props) {
    useEffect(()=> {
            $('.menuimg').mouseover(()=>{

                $('.menutxt').stop().fadeTo(300,1);
            });
            $('.menuimg').mouseout(()=>{

                $('.menutxt').stop().fadeTo(300,0);
            });

        //     $('.menuimg').hover(()=>{
        //         // console.log('여기야.');
        //     });

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