import React from 'react'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components/'


export const SearchHeroes = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const { q = ''} = queryString.parse( location.search )
    const  heroes = ( q.length > 0 ? getHeroesByName(q) : [] );

    const { searchText, onInputChange}  = useForm({
        searchText:q
    });

    const handleOnSearchSubmit = (e) => {
        e.preventDefault()
        if( searchText.trim() === "") return  navigate(``);
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form action="" onSubmit={handleOnSearchSubmit}>
                        <input onChange={onInputChange} value={searchText} className='form-control mb-2' type="text" name="searchText" id="searchText" placeholder='Search a hero' autoComplete='off'/>
                        <button type="submit" className='btn btn-primary col-12'>Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        ( q === "") ?
                            <div className="alert alert-primary">
                                Search Hero
                            </div>
                        : (heroes.length === 0) && 
                        
                        <div className="alert alert-danger">
                            No hero with <b>{ q }</b>
                        </div>
                    }
                  

              


                    {
                        heroes.map( hero => {
                            return <HeroCard key={hero.id} hero={hero}/>
                        })
                    }

                </div>
            </div>
        </>
    )
}
