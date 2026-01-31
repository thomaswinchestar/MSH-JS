const API_KEY = '5b41d26463490bfe1bceb2e67caff229'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export async function getWeather(city) {
    const response = await fetch(
        `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`
    );

    if(!response.ok) {
        throw new Error('City not found');
    }

    return await response.json();
}