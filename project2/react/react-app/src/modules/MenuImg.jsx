
import { img } from "../data/img";
import { Menu } from "./../css/menu.css";
export function MenuImg() {

    // const selImg = img.menu[props.cat];
    return (
        <>
            <div className="menu">
                <div className="menu1"><img src={img.menu[0]} alt="menu1" /></div>
                <div className="menu2"><img src={img.menu[1]} alt="menu2" /></div>
                <div className="menu3"><img src={img.menu[2]} alt="menu3" /></div>
                <div className="menu4"><img src={img.menu[3]} alt="menu4" /></div>
                <div className="menu5"><img src={img.menu[4]} alt="menu5" /></div>
            </div>
            
        </>
    );
}
