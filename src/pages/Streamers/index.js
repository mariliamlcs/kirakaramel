import Streamer from "./Streamer";
import sunnyImg from "../../assets/sunny.png";
import gioImg from "../../assets/gio.png";

export default function Streamers(){
    return(
    <> 
        <h1>Page Streamers</h1>
        <Streamer 
            name="Sunny"
            about="Lorem ipsum"
            picture={sunnyImg}
        />
        <Streamer 
            name="Gio"
            about="Lorem ipsum Gio"
            picture={gioImg}
        />
        <Streamer 
            name="Sunny"
            about="Lorem ipsum"
            picture={sunnyImg}
        />
    </>
    )
}