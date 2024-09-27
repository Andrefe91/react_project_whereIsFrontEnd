import { setCache , getCache } from "./cache.js";

//This fetches the Json file from the API server

//API Endpoint for the BackEnd server
export default async function fetchData(url, cacheName) {
    try {

        if (cacheName != undefined) { //If there is no cacheName, we dont want to use the cache
            const cache = await getCache(cacheName);
            if (cache) {
                console.log("Using cached items");
                return cache;
            }
        }

        const response = await fetch(url, {
            // mode: "cors",
            // method: "GET",
            // credentials: 'include',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseJason = await response.json();

        if (cacheName != undefined) { //If there is no cacheName, we dont want to use the cache
            await setCache( responseJason, cacheName );
        }
        return responseJason;
    } catch (error) {
        console.error(`Error fetching items: ${error.message}`);
        throw error;
    }
}
