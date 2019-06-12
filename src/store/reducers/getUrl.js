import { GET_URL } from '../action/actionTypes'

const intialState = {
    url: null,
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_URL:
            return {
                ...state,
                url: action.payload.url,
            }
        default:
            return state
    }
}

export default reducer