import {http} from '../config/http.js'

class apiRequest {

    getForfaits() {
        return http.get('/forfaits')
    }

    getAvions() {
        return http.get('/avions')
    }

}

export default new apiRequest()