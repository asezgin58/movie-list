import {getAuthApiBaseUrl} from "../_helpers";

const urlBase = () => getAuthApiBaseUrl();

export const getMovies = async () => {

    const urlSuffix = '/';
    const url: string = String(new URL(`${urlBase()}${urlSuffix}`));
};
