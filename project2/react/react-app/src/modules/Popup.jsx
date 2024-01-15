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
            </div>
        </>
    )
}