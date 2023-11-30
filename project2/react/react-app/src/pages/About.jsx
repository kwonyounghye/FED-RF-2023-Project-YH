import { Layout } from "../layout/Layout";
import "../css/about.css";

export function About() {
    return (
        <>
                <div className="about">
                    <div className="layout1">
                        <div className="intro1">
                            {/* 이미지1 */}
                            <img src="../../images/intro1.jpg" />
                        </div>
                        <div className="contant1">
                            pomme
                            <br />
                            사과
                        </div>
                    </div>
                    {/* 위치 고정 설명 */}
                    <div className="introduce">
                        <ul className="introduce_ani">
                            <li>폼베르는 매일 아침 유기농밀가루, 천연발효종, 친환경 식재료로 건강하고 맛있는 빵을 만듭니다.       </li>
                    
                            <li>폼베르는 매일 아침 유기농밀가루, 천연발효종, 친환경 식재료로 건강하고 맛있는 빵을 만듭니다.       </li>
                            <li>폼베르는 매일 아침 유기농밀가루, 천연발효종, 친환경 식재료로 건강하고 맛있는 빵을 만듭니다.       </li>
                        </ul>
                    </div>
                    <div className="layout2">
                        <div className="contant2">
                            verte
                            <br />
                            녹색
                        </div>
                        <div className="intro2">
                            {/* 이미지2 */}
                            <img src="../../images/intro2.jpg" width='50%' />
                        </div>
                    </div>
                </div>

        </>
    );
}
