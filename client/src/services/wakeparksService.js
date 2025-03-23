const baseUrl = 'http://localhost:3030/jsonstore/wakeparks';

export const wakeparkService = {
    async getAll() {
        const response = await fetch(baseUrl);
        const result = await response.json();
        const parks = Object.values(result);        
        return parks;
    },
    async create(parkData) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(parkData),
        });

        const result = await response.json();
        return result;
    }, 
}