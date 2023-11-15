// 상단영역 공통 컴포넌트
{
    /* <FontAwesomeIcon icon="fa-solid fa-bars" /> // menu
<FontAwesomeIcon icon="fa-solid fa-xmark" /> // x */
}

// GNB 데이터 가져오기
export function TopArea() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Logo />
                        </li>
                        <li>
                            {/* after: 메뉴 나타나기 */}
                            <Menu />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
