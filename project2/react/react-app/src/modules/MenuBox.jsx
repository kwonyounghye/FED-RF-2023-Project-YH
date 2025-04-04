import { useEffect } from 'react';
import '../css/menu_box.css';
import $ from 'jquery';

export function MenuBox(props) {
    useEffect(()=> {
        // if($('.menuimg')){
        // }
        // else {}
        const imgover = $('.menuimg').mouseover(()=>{

            $('.menutxt').stop().fadeTo(600,1);
            $(".menuimg").css({opacity:'.6'})
            // $('.menuKname').css({opacity:'1'});
            // $('.name').css({opacity:'0'});
            // $('.menuKname').css({mixBlendMode:'overlay'})
            $('.menuEname').css({opacity:'1'});
            
        });
        const txtover = $('.menutxt').mouseover(()=>{
            
            $('.menutxt').stop().fadeTo(600,1);
            $(".menuimg").css({opacity:'.6'})
            // $('.menuKname').css({opacity:'1'});
            // $('.menuKname').css({mixBlendMode:'overlay'})

            // $('.name').css({opacity:'0'});
            $('.menuEname').css({opacity:'1'});
        });
        // 오버시 Ename 숨기기 / 아웃시 Kname 숨기고 Ename보이기
        $('.menuimg').mouseout(()=>{
            
            $('.menutxt').stop().fadeTo(300,0);
            $(".menuimg").css({opacity:'1'})
            // $('.menuKname').css({opacity:'0'});
            // $('.name').css({opacity:'1'});

            $('.menuEname').css({opacity:'1'});
            
        });
        $('.menutxt').mouseout(()=>{
            
            $('.menutxt').stop().fadeTo(300,0);
            $(".menuimg").css({opacity:'1'})
            // $('.menuKname').css({opacity:'0'});
            $('.menuEname').css({opacity:'1'});

            });

       

    }); ///////// useEffect /////////////
    return (
        <>
        <div className="menubox" menu={props.menu}>
            {/* 닫기버튼 */}
            <button className="close">
                <span></span>
                <span></span>
            </button>
                {/* <div className="menuKname"></div> */}
            <div className="name">
                <div className="menuEname"></div>
            </div>
                <div className="menucontent">
                    <div className="menuimg"></div>
                    <div className="menutxt"></div>
                </div>
        </div>
        </>
    )
}