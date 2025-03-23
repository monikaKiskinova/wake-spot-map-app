const baseUrl = 'http://localhost:3030/jsonstore/wakeparks';

export const wakeparkService = {
    async create(wakeparkData) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(wakeparkData),
        });

        const result = await response.json();
        return result;
    }, 
}