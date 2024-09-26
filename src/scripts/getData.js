import { setCache , getCache } from "./cache.js";

//This fetches the Json file from the API server

//API Endpoint for the BackEnd server
export default async function fetchSolutionRange() {
    const url = "https://rails-project-whereisbackendtwo.fly.dev/characterCoordinates.json";

    try {
        const cache = await getCache();
        if (cache) {
            console.log("Using cached items");
            return cache;
        }

        const response = await fetch(url, {
            mode: "cors",
            method: "GET",
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const solutionRange = await response.json();
        await setCache( solutionRange );
        return solutionRange;
    } catch (error) {
        console.error(`Error fetching items: ${error.message}`);
        throw error;
    }
}
