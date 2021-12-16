import {GET_OTHER_USERS, LOGIN_SUCCESS} from '../types'

const initialState = {
    users:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case LOGIN_SUCCESS:
            return {
                ...state,
                user:action.payload,
                loading:false

            }
        case GET_OTHER_USERS:
            return {
                ...state,
                others:action.payload,
                loading:false

            }
        default: return state
    }

}
