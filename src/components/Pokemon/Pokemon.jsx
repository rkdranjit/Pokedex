import { Link } from 'react-router-dom';
import './Pokemon.css';

function Pokemon({name,url,id}){
    return(
        <Link to={`/pokemon/${id}`} className='pokemonn-wrapper'>
            <div className="pokemon">
                <div className='pokemon-name'>{name}</div>
                <img className='pokemon-img' src={url} />
            </div>
        </Link>
    )
}
export default Pokemon;