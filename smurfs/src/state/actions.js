import axios from 'axios';

export const LOAD_SMURFS = "LOAD_SMURFS"
export const LOADING = "LOADING"
export const ERROR = "ERROR"

const loadSmurfs = (smurfData) => {
    return ({type: LOAD_SMURFS, payload: smurfData})
}

const loading = () => {
    return ({type: LOADING})
}

const error = (message) => {
    return ({type: ERROR, payload: message})
} 

export const fetchSmurfs = () => (dispatch) => {
    dispatch(loading())
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch(loadSmurfs(res.data))
        dispatch(loading());
        dispatch(error(""))
    })
    .catch(err => {
        dispatch(error(err.message))
        dispatch(loading());
    })
}

export const addSmurf = (newSmurf) => (dispatch) => {
    dispatch(loading())
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
        // dispatch(loadSmurfs(res.data))
        dispatch(loading());
        dispatch(error(""))
    })
    .catch(err => {
        dispatch(error(err.message))
        dispatch(loading());
    })
}