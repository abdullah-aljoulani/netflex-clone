import Movie from "./Movie";
import Row from 'react-bootstrap/Row';


function MovieList(props){



    return (
        <>
        <Row xs={1} md={4} className="g-4">
        {props.newArr.map((item)=>{
            return <Movie a={item}/>
        })}
        </Row>
        </>
    )
}

export default MovieList;


