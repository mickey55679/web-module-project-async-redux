import axios from "axios"

export const SET_JOKE = 'SET_JOKE'
export const SET_ERROR = 'SET_ERROR'


 export const getJokes = () => dispatch => {
axios.get("https://official-joke-api.appspot.com/random_joke")
.then(res => {
    // console.log(res)
    dispatch(setJoke(res.data))
    // throw new Error('test error')
}).catch(error => {
    console.error(error)
    dispatch(setError(error))
})
}

export const setJoke = (joke) => {
console.log(joke);
return {
    type: SET_JOKE,
    payload: joke
}
}

export const setError = (error) => {
    console.log(error)
    return {
        type: SET_ERROR,
        payload: error
    }
}