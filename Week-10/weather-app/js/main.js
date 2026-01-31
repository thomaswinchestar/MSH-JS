import { getWeather } from './api.js';
import { renderWeather, renderError} from "./ui.js";

const input = document.getElementById('cityInput');
const button = document.getElementById('loadBtn');
const result = document.getElementById('result');

async function fetchWeather() {
    const city = input.value.trim();

    if (!city) {
        renderError('Please enter a city name', result);
        return;
    }

    result.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Loading weather data...</div>';

    try {
        const data = await getWeather(city);
        renderWeather(data, result);
    } catch (error) {
        renderError(error.message, result);
    }
}

button.addEventListener('click', fetchWeather);

// Add Enter key support
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchWeather();
    }
});