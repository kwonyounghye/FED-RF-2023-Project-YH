import { menu } from "../data/menu.js";
// import { img } from "../data/img.js";
import $ from "jquery";
import React from "react";
import { MenuBox } from "./MenuBox.jsx";


export function MenuList(props) {
    // props.cat - 카테고리명 -> 데이터 선택 객체 속성명

    // 선택 데이터 : 카테고리에 해당하는 데이터를 가져옴!
    const selData = menu[props.menu];
    // 메뉴박스 보이기 함수
    const showBox = (name, img) => {
        console.log("메뉴: ", name, img);
        const menubox = $(".menubox");
        const close = $(".close");
        const menutxt = $(".menutxt");
        const menuimg = $(".menuimg");
        menubox.fadeIn(300);
        close.click(() => {
            menubox.fadeOut(300);
        }); //////////// click /////////////
    }; /////////// showBox 함수 /////////////
    // const selImg = img.menu[props.cat];
    return (
        <>
            {selData.map((v,i) => (
                <div className="menulist" key={i}>
                    <a href="#" className={v}>
                        <img src={v.img} alt={v.name} />
                    </a>
                </div>
            ))}
        </>
    );
}
