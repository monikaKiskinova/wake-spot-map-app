import { useState, useEffect, useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/data/wakeparks';

// export const wakeparkService = {

//     async getOne(parkId) {
//         return request.get(`${baseUrl}/${parkId}`);
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

export const useCreatePark = () => {
    const {accessToken} = useContext(UserContext); 

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    }

    const createPark = (parkData) => {
        return request.post(baseUrl, parkData, options);
    };

    return {
        createPark, 
    }
};