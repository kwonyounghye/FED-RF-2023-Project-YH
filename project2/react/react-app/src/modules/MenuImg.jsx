
export function MenuImg(props) {

    const selImg = img[props.cat];
    return (
        <>
            <div className="menu1"><img src={props.cat == "menu"+[0]} alt="menu1" /></div>
            {/* <div className="menu1"><img src={props.cat == "menu"+$[i]} alt="menu2" /></div>
            <div className="menu1"><img src={props.cat == "menu"+$[i]} alt="menu3" /></div>
            <div className="menu1"><img src={props.cat == "menu"+$[i]} alt="menu4" /></div>
            <div className="menu1"><img src={props.cat == "menu"+$[i]} alt="menu5" /></div> */}
        </>
    );
}
