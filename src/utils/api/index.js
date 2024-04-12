import axios from "axios";

const proxyUrl = import.meta.env.VITE_PROXY_URL; 

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const nytBaseUrl = import.meta.env.VITE_NYT_URL;
const nytApiKey = import.meta.env.VITE_NYT_API_KEY;

const gnBaseUrl = import.meta.env.VITE_GN_URL;
const gnApiKey = import.meta.env.VITE_GN_API_KEY;

export async function getLatestNews () {
    let reqOptions = {
        url: `${proxyUrl}/latest`,
        method: "GET",
    }
    try {
        const response = await axios.request(reqOptions)
        return response.data
    } catch (e) {
        return {error: "internal server error"}
    }
}

export async function getNewsByCategory (category) {
    let reqOptions = {
        url: `${proxyUrl}/categories?category=${category}`,
        method: "GET",
      }
    try {
        const response = await axios.request(reqOptions)
        return response.data;
    } catch (e) {
        return {error: "internal server error"}
    }  
}

export async function getSearchResults (params) {
    params.apiKey = apiKey

    let reqOptions = {
        url: `${proxyUrl}/search-results`,
        method: "GET",
        params,
    }

    try {
        const response = await axios.request(reqOptions)
        return {...response.data, params}
    } catch (e) {
        return {error: "internal server error"}
    }
}

export async function getMostPopularNews () {
    let reqOptions = {
        url: `${nytBaseUrl}/mostpopular/v2/viewed/1.json?api-key=${nytApiKey}`,
        method: "GET",
    }
    const response = await axios.request(reqOptions);
    return response.data.results;
}

export async function getTopStories () {
    let reqOptions = {
        url: `${nytBaseUrl}/topstories/v2/world.json?api-key=${nytApiKey}`,
        method: "GET",
    }
    const response = await axios.request(reqOptions);
    return response.data;
}

export async function getFeedSection (section) {
    let reqOptions = {
        url: `${gnBaseUrl}/${section}?api-key=${gnApiKey}&show-elements=image`,
        method: "GET",
    }
    const response = await axios.request(reqOptions);
    return response.data;
}

export async function getSections () {
    console.log("in the sections");
    let reqOptions = {
        url: `${gnBaseUrl}/sections?api-key=${gnApiKey}&show-elements=image`,
        method: "GET",
    }
    const response = await axios.request(reqOptions);
    return response.data.response.results.map((result => {
        return {
            title: result.webTitle,
            id: result.id
        }
    }));
}