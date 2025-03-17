import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SongLibraryItem ({ song, onEdit }) {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => onEdit(song)}>Edit</button>
            { song.title }
            <br/>
            { song.artist }
            <br/>
            <br/>
        </div>
    );
}

export default SongLibraryItem;