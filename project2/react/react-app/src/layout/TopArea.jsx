// 상단영역 공통 컴포넌트
{
    /* <FontAwesomeIcon icon="fa-solid fa-bars" /> // menu
<FontAwesomeIcon icon="fa-solid fa-xmark" /> // x */
}
import { hamData } from "../data/hamburger";

// GNB 데이터 가져오기
export function TopArea() {
    // props.cat - 카테고리명(메뉴 데이터 선택용)
    const makeList = (data) => {
                            // i를 유일키로 셋팅
        return hamData[data].map((v,i) => {
            <li key={i}>
                {/* 주소: ~~.html#{v} */}
                <a href={"#"+v}>{v}</a>
            </li>
        })
    }; /////////////// makeList /////////////
    return (
        <>
        <div id="top_area">
            <header className="top_area head">
                    <ul>
                        <li>
                            <Logo />
                        </li>
                        <li>
                            {/* after: 메뉴 나타나기 */}
                            <Hamburger />
                        </li>
                    </ul>
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
