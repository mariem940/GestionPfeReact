import axios from 'axios'

const setAuthUser = user_id=> {
    if (user_id) {
        axios.defaults.user_id = user_id;
    } 
}

export default setAuthUser;