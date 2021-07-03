
import axios from "axios";
import config from '../config';

class StatesService {
    fetchEstados(){
        return axios.get(config.apiUrl + '/api/v1/states');
    }
    findEstadoById(id){}
    createEstado(options){}
    deleteEstado(id){}
}

export default StatesService;
