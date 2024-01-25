import { useCallback, useEffect } from "react";
import { Video } from "../modules/Video";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { hamMenu } from "../data/hamMenu";


import "../css/main.css";

export function Main() {
  //     const myCon = useContext(yhCon);
  const goNav = useNavigate();

  const chgPage = useCallback(() => {
    goNav();
  });
  // $('.ham').click((e)=>{
  //   $(e.target).is('.on');

  // })

  useEffect(() => {
    let autoSet;

    $(".ham").click(() => {
      console.log("햄클릭");
      clearTimeout(autoSet);
    });

    // if(chgPage('/')){
    autoSet = setTimeout(() => {
      if (!$(".mbox").hasClass("on")) $(".preview").attr("class", "preview").attr('style','');
      $(".ham").addClass("on");
      $(".mbox").addClass("on");
    }, 11000);
    $(".mlist a").on("mouseenter", function () {
      // over
      const tgEle = $(".preview");
      let txt = $(this).text().toLowerCase();
      tgEle.attr("class", "preview");
      tgEle.addClass(txt + "-menu");
      const selData = hamMenu[txt];

        console.log('원본data:',hamMenu);
        console.log('변환data:', selData);
        console.log('선택클래스:', `.${txt}-menu`);
        selData.map(()=>{
          $(`.${txt}-menu`).css({background:`url(${selData}) no-repeat center/cover`})
          console.log('이미지 링크: ', txt)
        })    

    });
    $(".mlist a").click((e) => {
      // setTimeout(() => {
      $(".preview").addClass("off");
      // $('.mbox').toggleClass('on')
      // }, 1000);
      // $('.preview').removeClass('off')
      // $('.mlist').removeClass('off')
    });
    // }
    const close = $('.close');
    const popup = $('.popup');
    // loadFn = {

    //   popup.fadeIn(600);
    // }
    close.click(() => {
      popup.fadeOut(300);
  }); //////////// click //////



    $('html,body').css({overflow:'hidden'});
    
    // 소멸자
    return(()=>{
      $('html,body').attr('style','');

    })



  }, []);
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg"  width="295" height="188" viewBox="0 0 295 188"></svg>
      <Video vsrc="main" />
    </>
  );
}
