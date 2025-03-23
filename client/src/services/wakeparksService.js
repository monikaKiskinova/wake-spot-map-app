const baseUrl = 'http://localhost:3030/jsonstore/wakeparks';

export const wakeparkService = {
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