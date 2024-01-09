import { useCallback, useEffect } from "react";
import { Video } from "../modules/Video";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

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
      if (!$(".mbox").hasClass("on")) $(".preview").attr("class", "preview");
      $(".ham").addClass("on");
      $(".mbox").addClass("on");
    }, 11000);
    $(".mlist a").on("mouseenter", function () {
      // over
      const tgEle = $(".preview");
      let txt = $(this).text().toLowerCase();
      tgEle.attr("class", "preview");
      tgEle.addClass(txt + "-menu");
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




    $('html,body').css({overflow:'hidden'});
    
    // 소멸자
    return(()=>{
      $('html,body').attr('style','');

    })



  }, []);
  return (
    <>
      <Video vsrc="main" />
    </>
  );
}
