
import { video } from "../data/video"
export function Video(props) {
    return (
        <>
            <div className="banner">
                <video src={video[props.vsrc]} 
                autoPlay muted
                // 반복재생
                loop 
                playsInline></video>
            </div>
        </>
    )
}