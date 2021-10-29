import axios from 'axios'
import {ABOUT_REQUEST,
        ABOUT_SUCCESS,
        ABOUT_FAIL,
} from '../constants/aboutConstants'

export const about = () => async(dispatch) => {
    try{
        dispatch({type: ABOUT_REQUEST})
        const {data} =await axios.get(`/api/about/`)
        dispatch({
            type:ABOUT_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type: ABOUT_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}