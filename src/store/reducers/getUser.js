import { GET_USER } from '../action/actionTypes'

const intialState = {
    user: null,
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload.user,
            }
        default:
            return state
    }
}

export default reducer