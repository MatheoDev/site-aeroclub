import {http} from '../config/http.js'

class apiRequest {

    getForfaits() {
        return http.get('/forfaits')
    }

    getAvions() {
        return http.get('/avions')
    }

    postLogin(config) {
        return http.post('/login_check', config)
    }

}

export default new apiRequest()