import {
LOGIN_SUCCESS,
LOGIN_FAIL,
USER_LOADED_SUCCESS,
USER_LOADED_FAIL,
AUTHENTICATED_SUCCESS,
AUTHENTICATED_FAIL,
LOGOUT,
SIGNUP_SUCCESS,
SIGNUP_FAIL,
} from '../actions/types'
import Login from '../containers/Login';

// creat auth reducer

// initialstate
const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
};

// reducer
export default function(state = initialState,action){
    const {type,payload} = action;

    switch(type){
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated:true
            }
        case LOGIN_SUCCESS:
            // set the access token in local storage
            localStorage.setItem('access',payload.access)
            return {
                // returning the state object
                ...state,
                isAuthenticated:true,
                access: payload.access,
                refresh:payload.refresh 
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated:false
            }
        case SIGNUP_FAIL:
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user : payload
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated:false
            }
        case USER_LOADED_FAIL:
            return {
                ...state,
                user : null
            }
        case LOGOUT:
            localStorage.removeItem('acsess')
            localStorage.removeItem('refresh')
            return{
                ...state,
                isAuthenticated:false,
                access:null,
                refresh:null,
                user:null
            }
        case LOGIN_FAIL:
            // remove tokens
            localStorage.removeItem('acsess')
            localStorage.removeItem('refresh')
            return{
                ...state,
                isAuthenticated:false,
                access:null,
                refresh:null,
                user:null
            }
        default:
            return state
    }
}