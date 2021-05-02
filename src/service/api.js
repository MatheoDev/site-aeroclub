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

    getCurrentMembre(id) {
        return http.get('/membres?uueract='+id)
    }

    getSeqvolUser(id) {
        return http.get('/seq_vols?numMembre='+id)
    }

}

export default new apiRequest()