import { useState, useEffect, useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";


const baseUrl = 'http://localhost:3030/data/wakeparks';

const useAuth = () => {
    const {accessToken} = useContext(UserContext); 

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    }

    return {
        options,
    }
}

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

export const usePark = (parkId) => {
    const [park, setPark] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${parkId}`)
            .then(setPark)
    }, [parkId]);

    return {
        park,
    };
};

export const useCreatePark = () => {
    const {options} = useAuth();

    const createPark = (parkData) => {
        return request.post(baseUrl, parkData, options);
    };

    return {
        createPark, 
    }
};

export const useEditPark = () => {
    const {options} = useAuth();

    const editPark = (parkId, parkData) => {
        return request.put(`${baseUrl}/${parkId}`, {...parkData, _id: parkId}, options);
    };

    return {
        editPark, 
    }
};

export const useDeletePark = () => {
    const {options} = useAuth(); 

    const deletePark = (parkId) => {
        return request.delete(`${baseUrl}/${parkId}`, null, options);
    };

    return {
        deletePark, 
    }
};