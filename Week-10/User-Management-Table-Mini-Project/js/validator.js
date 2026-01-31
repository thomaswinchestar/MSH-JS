// Form validation utilities

export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validateRequired(value) {
    return value && value.trim().length > 0;
}

export function validateUserForm(formData) {
    const errors = {};

    if (!validateRequired(formData.name)) {
        errors.name = 'Name is required';
    }

    if (!validateRequired(formData.email)) {
        errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
        errors.email = 'Invalid email format';
    }

    if (!validateRequired(formData.city)) {
        errors.city = 'City is required';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

export function showFieldError(fieldId, errorId, message) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);

    if (field) field.classList.add('error');
    if (error) {
        error.textContent = message;
        error.classList.add('show');
    }
}

export function clearFieldError(fieldId, errorId) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);

    if (field) field.classList.remove('error');
    if (error) error.classList.remove('show');
}

export function clearAllErrors() {
    clearFieldError('userName', 'nameError');
    clearFieldError('userEmail', 'emailError');
    clearFieldError('userCity', 'cityError');
}