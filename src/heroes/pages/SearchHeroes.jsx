import React from 'react'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { useNavigate, useLocation } from 'react-router-dom';

export const SearchHeroes = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const { q = ''} = queryString.parse( location.search )


    const { searchText, onInputChange}  = useForm({
        searchText:''
    });

    const handleOnSearchSubmit = (e) => {
        e.preventDefault()
        if( searchText.trim() === "") return  navigate(``);

        navigate(`?q=${searchText}`);

        console.log(q)
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

                    <div className="alert alert-primary">
                        Search Hero
                    </div>


                    <div className="alert alert-danger">
                        No hero with <b>{ q }</b>
                    </div>

                </div>
            </div>
        </>
    )
}
