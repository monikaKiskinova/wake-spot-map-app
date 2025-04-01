import { useState, useEffect, useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";


const baseUrl = 'http://localhost:3030/data/wakeparks';
const PAGE_SIZE = 3;

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

export const useLatestParks = () => {
    const [latestParks, setLatestParks] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: "_createdOn desc",
            pageSize: PAGE_SIZE, 
            select: "name,country,mainImageUrl,_id",
        })

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setLatestParks)
    }, []);

    return {
        latestParks,
    };
};

export const useCreatePark = () => {
    const {options} = useAuth();

    // const createPark = (parkData) => {
    const createPark = ({name, continent, country, address, mainImageUrl, imageUrl1, imageUrl2, imageUrl3, website, info}) => {
        let imageUrls = [];
        if(imageUrl1 !== ''){
            imageUrls.push(imageUrl1);
        }
        if(imageUrl2 !== ''){
            imageUrls.push(imageUrl2);
        }
        if(imageUrl3 !== ''){
            imageUrls.push(imageUrl3);
        }

        return request.post(baseUrl, {name, continent, country, address, mainImageUrl, imageUrls, website, info}, options);
    };

    return {
        createPark, 
    }
};

export const useEditPark = () => {
    const {options} = useAuth();

    const editPark = (parkId, {imageUrl1, imageUrl2, imageUrl3, ...parkData}) => {
        let imageUrls = [];
        if(imageUrl1 !== ''){
            imageUrls.push(imageUrl1);
        }
        if(imageUrl2 !== ''){
            imageUrls.push(imageUrl2);
        }
        if(imageUrl3 !== ''){
            imageUrls.push(imageUrl3);
        }

        return request.put(`${baseUrl}/${parkId}`, {...parkData, imageUrls, _id: parkId}, options);
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