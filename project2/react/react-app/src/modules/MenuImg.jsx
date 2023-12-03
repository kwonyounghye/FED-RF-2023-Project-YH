
import { img } from "../data/img";
import { Menu } from "./../css/menu.css";
export function MenuImg() {

    // const selImg = img.menu[props.cat];
    return (
        <>
            <div className="menu">
                <a href="#" target="_blank" className="menu1"><img src={img.menu[0]} alt="menu1" /></a>
                <a href="#" target="_blank" className="menu2"><img src={img.menu[1]} alt="menu2" /></a>
                <a href="#" target="_blank" className="menu3"><img src={img.menu[2]} alt="menu3" /></a>
                <a href="#" target="_blank" className="menu4"><img src={img.menu[3]} alt="menu4" /></a>
                <a href="#" target="_blank" className="menu5"><img src={img.menu[4]} alt="menu5" /></a>
            </div>
            
        </>
    );
}
