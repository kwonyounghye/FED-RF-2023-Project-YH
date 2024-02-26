// 상단영역 공통 컴포넌트

/* <FontAwesomeIcon icon="fa-solid fa-bars" /> // menu
<FontAwesomeIcon icon="fa-solid fa-xmark" /> // x */

import { Logo } from "../modules/Logo";
import { Ham } from "../modules/Ham";

// GNB 데이터 가져오기
export function TopArea() {
//     let prot = 0;
// useEffect(()=>{
//     $('.ham').on('click',(e)=>{
//         if(prot)return;
//         prot = 1;
//         let sts = $(e.currentTarget).is('.on');
//         console.log(33333,sts);
//         setTimeout(()=>prot=0,1000);
//     })
// },[]);

  return (
    <>
      <div id="top_area">
        <header>
            {/* <Link to='about'> */}
            <Logo />
            {/* </Link> */}
          <div
            className="ham"
            // onClick={(e) => {
            //   setTimeout(()=>{
            //       $('.preview').attr("class", "preview");
            //   },1000);
            // }}
          >
            {/* after: 메뉴 나타나기 */}
            <span></span> <span></span> <span></span>
          </div>
          <Ham />
        </header>
      </div>
    </>
  );
}
/* 
            map()을 사용하여 태그를 생성할 때
            데이터의 유일키를 key속성으로 만들지 않으면
            아래와 같은 에러가 발생함!
            (이유: 구별되는 항목으로 나중에 업데이트 시 
                이용할 수 있도록 리액트에서 강제하고 있음!)
            Warning: Each child in a list should have a unique "key" prop.
            */
