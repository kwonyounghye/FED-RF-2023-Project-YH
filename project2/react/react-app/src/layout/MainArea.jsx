// MainArea 공통 컴포넌트
// import { Video } from "../modules/Video"

import { Outlet } from "react-router-dom";

export function MainArea() {
    return (
        <main>
            <Outlet />
        </main>
    )
}