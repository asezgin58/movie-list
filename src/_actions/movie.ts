import {getApiBaseUrl, getApiSearchUrl} from "../_helpers";

const urlBase = () => getApiBaseUrl();
const searchUrlBase = () => getApiSearchUrl();

console.log("searchUrlBase", searchUrlBase);

export const getAllMovie = async (page: number) => {

    const url: string = String(new URL(`${urlBase()}&page=${page}`));

    const fetchOpt: any = await fetch(url);
    const result: any = await fetchOpt.json();

    return await result;
};

export const getAllMovieByTitle = async (searchTitle: string) => {

    const url: string = String(new URL(`${searchUrlBase()}&query=${searchTitle}`));

    const fetchOpt: any = await fetch(url);
    const result: any = await fetchOpt.json();

    return await result;
};
