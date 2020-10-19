import Axios from 'axios';
import router from './router';

const configured = Axios.create({
    baseURL: 'localhost:8081',
    delayed: true,  // use this custom option to allow overrides
    crossDomain: true, 
    withCredentials: true
});

// A request interceptor
configured.interceptors.request.use(
    function (config) {
        if (config.delayed) {
            return new Promise(resolve => setTimeout(() => resolve(config), 1500));
        }
        return config;
    },
    function (error) {
        console.info(`❌ ${error}`);
        return Promise.reject(error);
    }
);

// A response interceptor
configured.interceptors.response.use(
    function (response) {
        let data = response.data ? getJson(response.data) : "";
        let reqData = response.config.data ? getJson(JSON.parse(response.config.data)) : "";
        let message = `👉 ${response.config.url} -> ${response.statusText}`;

        if(data || reqData){
            console.groupCollapsed(message + ":");
            if(reqData) console.info(reqData);
            if(data) console.log(data);
            console.groupEnd();
        } else {
            console.log(message);
        }

        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        let resp = error.response;
        let message = `❌ ${resp.config.url} ${resp.config.data} -> ${resp.statusText} :`;
        console.groupCollapsed(message);
        console.log(getJson(resp.data));
        console.groupEnd();

        if(error.response.status === 401){
            if(router.currentRoute.path !== '/'){
                router.push({ name : 'Home', params : {message : 'Похоже, слетела авторизация или вам недоступно это действие'}});
                // .then(()=> alert('Похоже, слетела авторизация или вам недоступно это действие.'));
            }
            return Promise.resolve(error);
        }
        return Promise.reject(error);
    }
);

const data = {
    contacts : [
        {id: "1", name:"Andro", surname: "Alsbo", phone: "5553535"},
        {id: "2", name:"Petro", surname: "Alsbo", phone: "6663636"},
    ]
}
export default {

    getContacts(){
        return data.contacts
    },
    addContact(contact){
        data.contacts.push(contact)
    },
    deleteContact(id){
        data.contacts = data.contacts.filter(x => x.id !== id)
    },
    updateContact(contact){
        const newContacts = data.contacts.filter(x => x.id !== contact.id)
        newContacts.push(contact)
        data.contacts = newContacts
    }

}

function getJson(data, inline) {
    if(!data) return "";
    return inline
        ? JSON.stringify(data)
        : JSON.stringify(data, undefined, 4);
}