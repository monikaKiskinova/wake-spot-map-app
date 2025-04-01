import { useState, useEffect, useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";


const baseUrl = 'http://localhost:3030/data/comments';

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

export const useComments = (parkId) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `parkId="${parkId}"`
        })
        // request.get(`${baseUrl}/${parkId}`)
        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setComments)
    }, [parkId]);

    return {
        comments,
        setComments
    };
};

export const useCreateComment = () => {
    const {options} = useAuth();

    const createComment = (parkId, username, comment) => { 
        if(comment.length === 0) {
            return;
        }

        return request.post(baseUrl, {parkId, username, comment}, options);
    };

    return {
        createComment, 
    }
};
