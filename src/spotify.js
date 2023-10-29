import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "d10ee6137d9d4803b189f1638621472a";
const redirectUri = "http://localhost:3000"; 
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

const clinetAPI = axios.create({
   baseURL: "https://api.spotify.com/v1/",
});

const setClientTokenCode = (tokenCode) => {
    clinetAPI.interceptors.request.use(async function (config) {
        config.headers.Authorization = "Bearer " + tokenCode;
        return config;
    });
};

export {clinetAPI, setClientTokenCode} ;