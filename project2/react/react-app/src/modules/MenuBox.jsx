import '../css/menu_box.css';

export function MenuBox(props) {
    
    return (
        <>
        <div className="menubox" menu={props.menu}>
            {/* 닫기버튼 */}
            <button className="close">×</button>
            <div className="menutxt"></div>
            <div className="menuimg"></div>
        </div>
        </>
    )
}