
import axios from "axios";

class ContentLoaderService {
    constructor(initialPage) {
        this.content = document.getElementById('content');
        this.getPage(initialPage);
    }
    getPage(page) {
        axios.get(`/pages/${page}`).then((response) => {
            this.content.innerHTML = response.data;
            const scripts = this.content.querySelectorAll('script');
            scripts.forEach((script) => {
                try {
                    eval(script.innerHTML);
                } catch (e){
                    console.error(`Erro ao executar o script da página "${page}": ${e}`)
                }
            });
        });
    }
}

export default ContentLoaderService;
