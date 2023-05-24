import MovieList from './MovieList';
import { useState , useEffect } from "react";

function Home() {

    const [movieArr, setMovieArr] = useState([]);

    const sendReq = async () => {
        const serverURL = `${process.env.REACT_APP_LOCAL_SERVER}/trending`;
        const response = await fetch(serverURL);
        const data = await response.json(); 
        console.log(data);
        setMovieArr(data);
    }

    useEffect(()=>{
        sendReq();
    }, [])

    return (
        <>

            <MovieList newArr={movieArr}></MovieList>
        </>
    )
}

export default Home;