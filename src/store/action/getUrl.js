import { GET_URL } from './actionTypes'

export const getURL = url => {
    return {
        type: GET_URL,
        payload: url

    }
}