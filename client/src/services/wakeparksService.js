import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/wakeparks';

export const wakeparkService = {
    async getAll() {
        const result = await request.get(baseUrl);
        const parks = Object.values(result);        
        return parks;
    },
    async getOne(parkId) {
        return request.get(`${baseUrl}/${parkId}`);
    },
    create (parkData) {
        return request.post(baseUrl, parkData);
    },
}