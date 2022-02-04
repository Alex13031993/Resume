import axios from 'axios'

const API = {
    getUserData () {
        return axios('/resumeData.json', {
            method: 'GET'
        })
    }
}

export default API

