// Modal management system

import { clearAllErrors } from './validator.js';

const userModal = document.getElementById('userModal');
const confirmModal = document.getElementById('confirmModal');
const modalTitle = document.getElementById('modalTitle');
const userForm = document.getElementById('userForm');
const closeModalBtn = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');

let currentMode = 'create'; // 'create' or 'edit'
let currentUserId = null;

// Open user form modal
export function openModal(mode = 'create', userData = null) {
    currentMode = mode;
    currentUserId = userData ? userData.id : null;

    if (mode === 'create') {
        modalTitle.textContent = 'Add User';
        resetForm();
    } else {
        modalTitle.textContent = 'Edit User';
        populateForm(userData);
    }

    clearAllErrors();
    userModal.classList.add('show');
}

// Close user form modal
export function closeModal() {
    userModal.classList.remove('show');
    resetForm();
    currentUserId = null;
}

// Get current modal mode and user ID
export function getModalState() {
    return {
        mode: currentMode,
        userId: currentUserId
    };
}

// Populate form with user data
function populateForm(userData) {
    if (!userData) return;

    document.getElementById('userName').value = userData.name || '';
    document.getElementById('userEmail').value = userData.email || '';
    document.getElementById('userCity').value = userData.address ?.city || userData.city || '';
}

// Reset form fields
function resetForm() {
    userForm.reset();
    clearAllErrors();
}

// Get form data
export function getFormData() {
    return {
        name: document.getElementById('userName').value.trim(),
        email: document.getElementById('userEmail').value.trim(),
        city: document.getElementById('userCity').value.trim()
    };
}

// Confirmation dialog
let confirmResolve = null;

export function showConfirmDialog(message) {
    return new Promise((resolve) => {
        confirmResolve = resolve;
        document.getElementById('confirmMessage').textContent = message;
        confirmModal.classList.add('show');
    });
}

function closeConfirmDialog(result) {
    confirmModal.classList.remove('show');
    if (confirmResolve) {
        confirmResolve(result);
        confirmResolve = null;
    }
}

// Event listeners
closeModalBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

document.getElementById('confirmYes').addEventListener('click', () => {
    closeConfirmDialog(true);
});

document.getElementById('confirmNo').addEventListener('click', () => {
    closeConfirmDialog(false);
});

// Close modal when clicking outside
userModal.addEventListener('click', (e) => {
    if (e.target === userModal) {
        closeModal();
    }
});

confirmModal.addEventListener('click', (e) => {
    if (e.target === confirmModal) {
        closeConfirmDialog(false);
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (userModal.classList.contains('show')) {
            closeModal();
        }
        if (confirmModal.classList.contains('show')) {
            closeConfirmDialog(false);
        }
    }
});