import { useContext } from "react";
import { yhCon } from "./yhContext";
import { hamSub } from "../data/hamSub";
import { img } from "../data/img";


export function Ham() {
     // 컨텍스트 사용
  const myCon = useContext(yhCon);
  // pCon에 Provider value 속성에 공개한 변수/함수를 사용함!

  // 메뉴 이동 처리함수 ///
  const goPage = (txt) => {
    myCon.chgPage(txt);
    // 전체박스 숨기기
    document.querySelector('.ham').click();
  }; //////// goPage 메서드 ///////////


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
  // 코드 리턴 //////////////////////
  return (
    <>

      <div className="mbox">
        <nav className="mlist">
             <div className="nav1"><a href="#" onClick={()=>{goPage('About')}}>About</a></div>     
             <div className="nav2"><a href="#" onClick={()=>{goPage('Menu')}}>Menu</a></div>     
             <div className="nav3"><a href="#" onClick={()=>{goPage('Contact')}}>Contact</a></div>     
        </nav>
        <div className="preview"></div>
      </div>
    </>
  );
}