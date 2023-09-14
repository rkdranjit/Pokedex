import { Link, useParams } from 'react-router-dom';
import './PokemonDetails.css';
import usePokemonDetails from '../../hooks/usePokemonDetails';


function PokemonDetails(){
    
    const {id}=useParams();
    const [pokemon] =usePokemonDetails(id);
    return(
        <>
        <h3 className='pokedex-redirect'>
            <Link to="/">
                Pokedex
            </Link>
        </h3>
       {pokemon && <div className='pokemon-details-wrapper'>
            <div className='pokemon-detail-name'>
                {pokemon.name}
            </div>
            <div className='pokemon-image'>
                <img src={pokemon.image} />
            </div>
            <div className='pokemon-attributes'>
               <div>
                  height : {pokemon.height}
               </div>
                <div>
                  weight : {pokemon.weight}
                </div>
            </div>
            <div className='pokemon-types'>
                <h1>Type :</h1> {pokemon.types.map(t => <span className='type' key={t.type.name}>{t.type.name}</span>)}
            </div>
        </div>}
        </>
    )
}
export default PokemonDetails;