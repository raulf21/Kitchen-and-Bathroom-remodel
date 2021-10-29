import {ABOUT_REQUEST,
        ABOUT_SUCCESS,
        ABOUT_FAIL,
} from '../constants/aboutConstants'

export const aboutReducer = (state = { info: []},action) =>{
    switch(action.type){
        case ABOUT_REQUEST:
            return{loading:true,...state}

        case ABOUT_SUCCESS:
            return{loading:false, info: action.payload}
        case ABOUT_FAIL:
            return{loading:false, error: action.payload}

        default:
            return state
    }
}