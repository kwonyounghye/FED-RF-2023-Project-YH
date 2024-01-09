import { useContext, useEffect } from "react";
import { yhCon } from "./yhContext";
import { hamMenu } from "../data/hamMenu";
import { img } from "../data/img";


import $ from "jquery";
import { useNavigate } from "react-router-dom";


export function Ham() {
     // 컨텍스트 사용
  const myCon = useContext(yhCon);
  // pCon에 Provider value 속성에 공개한 변수/함수를 사용함!
  const goNav = useNavigate();

  // 메뉴 이동 처리함수 ///
  const goPage = (txt) => {
    // console.log(txt.toLowerCase(),'333333');
    goNav(txt.toLowerCase());
    // // 전체박스 숨기기
    document.querySelector('.ham').click();
  }; //////// goPage 메서드 ///////////
    useEffect(()=>{
      // $('.ham').click((e)=>{
      //   $(e.target).is('.on');

      // })
     
      $(".ham").click(() => {
        $('.ham').toggleClass('on')
        if(!$('.mbox').hasClass('on'))$('.preview').attr('class','preview');
        console.log(!$('.mbox').hasClass('on'))
        $('.mbox').toggleClass('on');

        $(".menubox").fadeOut(100);
      
      $('.mlist a').on('mouseenter',
      function(){ // over
        const tgEle = $('.preview');
        let txt = $(this).text().toLowerCase();
        tgEle.attr('class','preview');
        tgEle.addClass(txt+'-menu');
        const selData = hamMenu[txt];

        console.log('원본data:',hamMenu);
        console.log('변환data:', selData);
        console.log('선택클래스:', `.${txt}-menu`);
        selData.map(()=>{
          $(`.${txt}-menu`).css({background:`url(${selData}) no-repeat center/cover`})
          console.log('이미지 링크: ', txt)
        })    
        
      })
      $('.mlist a').click((e)=>{
        // setTimeout(() => {
          $('.preview').addClass('off');
          // $('.mbox').toggleClass('on')
          // }, 1000);
          // $('.preview').removeClass('off')
          // $('.mlist').removeClass('off')
        });
        // $('.mlist a').on('mouseover',function(){$(this).fadeOut(100).fadeIn(500)} );
       
     })
  // 햄버거 버튼 클릭시 전체 메뉴 보이기/숨기기
 //  $(".ham").click((e) => {
 //    // 1. 전체메뉴 박스 : .mbox -> 보이기/숨기기
 //    if($(e.target).is('.on')){

 //     if($(".mbox").is('.off')) {
 //       $(".mbox").addClass('on');
 //      $(".mbox").removeClass('off');}
 //       else {
 //         $(".mbox").addClass('off');
         
 //       }
       
    
      
 //     }else{

     
 //       if($(".mbox").is('.off')) {
 //         $(".mbox").removeClass('off');
 //         $(".mbox").addClass('on');
 //       }
 //         else {
 //           $(".mbox").addClass('on');
           
 //           }


   //  }

         
    // 2. 햄버거버튼에 클래스 'on' 넣기/빼기
   //  $(e.currentTarget).toggleClass("on");
    
    
    
    // e.target과 e.currentTarget은 다르다!
    // 후자가 햄버거 버튼 자신임!
    // console.log(e.currentTarget)
   // }); ////////// click /////////////
   
       // 렌더링구역 한번만 실행 : 옵션 []


       // $('.ham on').click(
        // function() {
      //   mbox.addClass('off');
        
      // }
      // );


  //     // props.cat - 카테고리명(메뉴 데이터 선택용)
  //     const makeList = (data) => {
//       // i를 유일키로 셋팅
// return hamSub[data].map((v,i) => {
// <li key={i}>
// {/* 주소: ~~.html#{v} */}
// <a href={"#"+v}>{v}</a>
// </li>
// })
// }; /////////////// makeList /////////////


   
      // function(){ // out
      //   let txt = $(this).text().toLowerCase();
      //   tgEle.removeClass(txt+'-menu');
      // });
 
  },[]); /////////// useEffect //////////


  // 코드 리턴 //////////////////////
  return (
    <>

      <div className="mbox">
        <nav className="mlist">
             <div className="nav1"><a href="#" onClick={(e)=>{e.preventDefault();goPage('About')}}>About</a></div>     
             <div className="nav2"><a href="#" onClick={(e)=>{e.preventDefault();goPage('Menu')}}>Menu</a></div>     
             <div className="nav3"><a href="#" onClick={(e)=>{e.preventDefault();goPage('Contact')}}>Contact</a></div>     
        </nav>
        <div className="preview"></div>
      </div>
    </>
  );
}