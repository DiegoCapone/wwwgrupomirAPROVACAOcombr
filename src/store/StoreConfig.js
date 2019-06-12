import { createStore, combineReducers } from 'redux'
import getUser from './reducers/getUser'
import getUrl from './reducers/getUrl'

const reducers = combineReducers({
    user: getUser,
    url: getUrl

})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig