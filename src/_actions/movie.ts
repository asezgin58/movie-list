import {getAuthApiBaseUrl} from "../_helpers";

const urlBase = () => getAuthApiBaseUrl();

export const getAllMovie = async () => {

    let respResult: any = '';

    const url: string = String(new URL(`${urlBase()}`));

    await fetch(url)
        .then(res => res.json())
        .then(
            (result) => {

                respResult = result;
            },
            (error) => {
                console.log("Error : ", error);
            }
        );

    return await respResult;
};
