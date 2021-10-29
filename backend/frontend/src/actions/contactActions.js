import axios from 'axios'
import {CONTACT_SEND_REQUEST,
        CONTACT_SEND_SUCCESS,
        CONTACT_SEND_FAIL,
} from '../constants/contactConstants'



export const send = (name, email, subject, msg) => async (dispatch) => {
    try {
        dispatch({
            type: CONTACT_SEND_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const { data } = await axios.post(
            (`/api/contact/`),
            {'name': name,
             'email': email,
             'subject': subject,
              'message':msg },
            config
        )

        dispatch({
            type: CONTACT_SEND_SUCCESS,
            payload: data
        })


        localStorage.setItem('contactInfo', JSON.stringify(data))


    } catch (error) {
        dispatch({
            type: CONTACT_SEND_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

