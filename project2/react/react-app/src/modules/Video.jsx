
import { video } from "../data/video"
export function Video(props) {
    return (
        <>
                <video
                autoPlay muted 
                // 반복재생
                loop 
                playsInline>
                    <source src={video[props.vsrc]} ></source>
                </video>
        </>
    )
}