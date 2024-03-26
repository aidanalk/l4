import { types } from "./types"

function formOn() {
    return {
        type: types.FORM_ON
    }
}

function formOff() {
    return {
        type: types.FORM_OFF
    }
}

export function addFormDataAction(formData) {
    return async function (dispatch) {

        dispatch(formOn())

        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(formData)
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)
        
        if (response.status >= 200 || response.status <= 204) {
            dispatch(formOff())
        }
    }
}

