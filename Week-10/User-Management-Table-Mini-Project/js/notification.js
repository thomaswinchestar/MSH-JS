// Notification system for user feedback

const notification = document.getElementById('notification');

export function showNotification(message, type = 'info') {
    if (!notification) return;

    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

export function showSuccess(message) {
    showNotification(message, 'success');
}

export function showError(message) {
    showNotification(message, 'error');
}

export function showInfo(message) {
    showNotification(message, 'info');
}