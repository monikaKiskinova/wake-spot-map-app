import { useState, useEffect, useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/data/wakeparks';

// export const wakeparkService = {

//     async getOne(parkId) {
//         return request.get(`${baseUrl}/${parkId}`);
//     },
//     create (parkData) {
//         return request.post(baseUrl, parkData);
//     },
//     edit (parkId, parkData) {
//         return request.put(`${baseUrl}/${parkId}`, {...parkData, _id: parkId});
//     },
//     delete(parkId) {
//         return request.delete(`${baseUrl}/${parkId}`);
//     }
// }

export const useParks = () => {
    const [parks, setParks] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(setParks)
    }, []);

    return {
        parks,
    };
};
