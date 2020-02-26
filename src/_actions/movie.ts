import {getApiBaseUrl} from "../_helpers";
const urlBase = () => getApiBaseUrl();

export const getAllMovie = async () => {

    const url: string = String(new URL(`${urlBase()}`));

    const fetchOpt:any = await fetch(url);
    const result:any = await fetchOpt.json();

    return await result;
};
