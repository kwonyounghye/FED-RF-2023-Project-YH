import { menu } from "../data/menu.js";
// import { img } from "../data/img.js";
import $ from "jquery";
import React from "react";
import { MenuBox } from "./MenuBox.jsx";


export function MenuList() {
    // props.cat - 카테고리명 -> 데이터 선택 객체 속성명

    // 선택 데이터 : 카테고리에 해당하는 데이터를 가져옴!
    // 원본데이터가 객체이므로 map을 쓰기위해 
    // Object.keys()로 속성값 배열변환한다!
    const selData = Object.keys(menu);
    console.log('원본데이터:',menu);
    console.log('변환데이터:',selData);
    // 메뉴박스 보이기 함수
    const showBox = (Ename, Kname, img, txt) => {
        console.log("메뉴: ", Ename, Kname, img, txt);
        const menubox = $(".menubox");
        const close = $(".close");
        const menuEname = $(".menuEname");
        const menuKname = $(".menuKname");
        const menuimg = $(".menuimg");
        const menutxt = $(".menutxt");
        menubox.fadeIn(300);
        close.click(() => {
            menubox.fadeOut(300);
        }); //////////// click //////
        menuimg.html(`<img src="${img}" alt="${Ename}">`);
        menuEname.text(Ename);
        menuKname.text(Kname);
        menutxt.text(txt);
    }; /////////// showBox 함수 /////////////

    return (
        <>
            <div className="menu">
                {selData.map((v,i) => (
                    <div className={v}  key={i}>
                        <a href="#" onClick={(e)=>{e.preventDefault(); showBox(menu[v].Ename, menu[v].Kname, menu[v].img,menu[v].txt)}}>
                            <img src={menu[v].img} alt={menu[v].Ename} />
                        </a>
                    </div>
                
                ))}
            </div>

            <MenuBox />
        </>
    );
}
