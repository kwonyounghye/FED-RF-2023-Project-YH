import '../css/popup.css'

export function Popup(props) {
    return(
        <>
            <div className="popup" popup={props.popup}>
                <button className="close">
                    <span></span>
                    <span></span>
                </button>
                <div className="title"></div>
                <div className="content"></div>
                <div className="checkbox">24시간 열지 않음<input type='checkbox'  /></div>
            </div>
        </>
    )
}