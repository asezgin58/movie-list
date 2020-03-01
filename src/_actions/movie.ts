import {getApiBaseUrl, getApiSearchUrl} from "../_helpers";

const urlBase = () => getApiBaseUrl();
const searchUrlBase = () => getApiSearchUrl();

export const getAllMovie = async (page: number) => {

    const url: string = String(new URL(`${urlBase()}&page=${page}`));

    const fetchOpt: any = await fetch(url);
    const result: any = await fetchOpt.json();

    return await result;
};

export const getFilterMovie = async (searchTitle: string, year: number) => {

    let urlSuffix: string = `${searchTitle.length ? `&query=${searchTitle}` : ''}${year !== 0 ? `&year=${year}` : ''}`;

    const url: string = String(new URL(`${searchUrlBase()}${urlSuffix}`));

    const fetchOpt: any = await fetch(url);
    const result: any = await fetchOpt.json();

    return await result;
};
