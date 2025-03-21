import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import SongLibraryItem from "../../components/SongLibraryItem/SongLibraryItem";

function SongLibraryPage ({ setSongToEdit }) {
    const [songs, setSongs] = useState([]);
    const [filters, setFilters] = useState(null);

    const navigate = useNavigate();

    useEffect ( () => {
        loadSongs();
    }, [filters]);

    const loadSongs = async () => {
        let url = '/songs';
        if (filters !== null) {
            url = `/songs?learned=${filters}`;
        }

        const res = await fetch(url);
        const data = await res.json();
  
        setSongs(data);
    }

    const onEdit = async (song) => {
        setSongToEdit(song);
        navigate('edit-song')
    }

    return (
        <div>
            <h2>Song Library</h2>

            <button onClick={e => { e.preventDefault(); setFilters('learned') }}>Learned</button>
            <button onClick={e => { e.preventDefault(); setFilters('not learned') }}>Not Learned</button>
            <button onClick={e => { e.preventDefault(); setFilters('in progress') }}>In progress</button>
            <button onClick={e => { e.preventDefault(); setFilters(null) }}>All Songs</button>

            
            <Link to="add-song">
                <button>Add Song</button>
            </Link>

            { songs.map((song, i) => (<SongLibraryItem onEdit={onEdit} song={song} key={i}/>)) }
        </div>
    );
}

export default SongLibraryPage;