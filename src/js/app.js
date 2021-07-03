
import axios from "axios";
import StatesService from "./services/states.service";
import ContentLoaderService from "./services/content-loader-service";
import config from './config';

class App {
    constructor() {
        this.config = config;
        this.axios = axios;
        try {
            this.statesService = new StatesService;
        } catch (e){
            console.log('Erro ao executar o StatesService: ', e);
        }

        try {
            this.contentLoaderService = new ContentLoaderService('estados.html');
        } catch (e){
            console.log('Erro ao executar o ConteContentLoaderServicentLoader: ', e);
        }
    }
}

try {
    window.app = new App();
} catch (e){
    console.log('Erro ao executar o App: ', e);
}