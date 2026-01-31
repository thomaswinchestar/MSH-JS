export function renderWeather(data, container) {
    container.innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

export function renderError(message, container) {
    container.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <span>${message}</span>
        </div>
    `;
}