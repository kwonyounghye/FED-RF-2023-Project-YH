import { MenuList } from "../modules/MenuList";
import "../css/menu.css";
import $ from 'jquery';
export function Menu() {

    return (
    <>
    <h2>Best Menu</h2>
    {/* 이미지 나열 */}
    <MenuList menu="menu" />

    </>
    )
};