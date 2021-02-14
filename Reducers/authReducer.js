import { AUTH_UPDATE } from "../Constants";

const initialState = {
    login:false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_UPDATE:
            return {...state,...action.payload}
    
        default:
            return state
    }
  }