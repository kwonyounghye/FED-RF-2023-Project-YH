import { MenuList } from "../modules/MenuList";
import "../css/menu.css";
import { Popup } from "../modules/Popup";
export function Menu() {
    return (
    <>
    <h2>Best Menu</h2>
    {/* 이미지 나열 */}
    <MenuList menu="menu" />

    </>
    )
};