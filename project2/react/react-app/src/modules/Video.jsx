
import { video } from "../data/video"
export function Video(props) {
    return (
        <>
                <video src={video[props.vsrc]} 
                autoPlay muted
                // 반복재생
                loop 
                playsInline></video>
        </>
    )
}