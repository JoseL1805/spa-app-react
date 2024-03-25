import React, { useReducer } from 'react'
import { AuthContext, AuthReducer } from './'
import { types } from '../types/types';
export const AuthProvider = ({ children }) => {

    const initialState = {
        logged: false
    }



    const init = () => {
        const user = JSON.parse( localStorage.getItem('user') ) ?? '' ;
        const newState =  {
            logged: !!user,
            name: user.name
        }
        return newState;
    }

    const [state, dispatch] = useReducer( AuthReducer, initialState, init );

    const login = (name = '') => {
        const user_ =  { name }
        const action = {
            type: types.login,
            payload: user_
        }
        localStorage.setItem('user', JSON.stringify( user_ ))
        dispatch(action)
    }


    const logout = () => {
        const action = {type: types.logout}
        localStorage.removeItem('user')
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{state,login, logout}}>
            { children }
        </AuthContext.Provider>
    )

}
