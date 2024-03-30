import React, { useMemo } from 'react'
import { useParams , Navigate, useNavigate } from 'react-router-dom'

import { getHeroByid } from '../helpers';

export const HeroPage = () => {

    const  { id } = useParams ();
    const navigate = useNavigate();

    const hero = useMemo( ()=> getHeroByid(id) , [id]); 

    if( !hero ) return <Navigate to='/marvel/'/>

    const onNavigateBack = () => {
        navigate(-1)
    }


    return (
        <div className='row mt-5'>
            <div className="col-4">
                <img src={`./assets/heroes/${hero.id}.jpg`} 
                    alt={hero.superhero}
                    className='img-thumbnail' />
            </div>

            <div className="col">
                <h3>{hero.superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> <b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className='list-group-item'> <b>Publisher:</b> {hero.publisher}</li>
                    <li className='list-group-item'> <b>First appearence:</b> {hero.first_appearance}</li>
                </ul>

                <h5>{hero.characters}</h5>

                <button onClick={onNavigateBack} className='btn btn-primary'>Back</button>
            </div>
        </div>
    )
}
