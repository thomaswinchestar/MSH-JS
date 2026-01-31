import { fetchUsers, createUser, updateUser, deleteUser } from "./api.js";
import { renderTable } from "./table.js";
import { filterUsers } from "./search.js";
import { paginate } from "./pagination.js";
import { openModal, closeModal, getModalState, getFormData, showConfirmDialog } from "./modal.js";
import { validateUserForm, showFieldError, clearAllErrors } from "./validator.js";
import { showSuccess, showError } from "./notification.js";

const tableBody = document.getElementById('userTableBody');
const searchInput = document.getElementById('searchInput');
const pageInfo = document.getElementById('pageInfo');
const addUserBtn = document.getElementById('addUserBtn');
const userForm = document.getElementById('userForm');
const loader = document.getElementById('loader');

let users = [];
let filteredUsers = [];
let currentPage = 1;
const perPage = 5;

// Initialize app
async function init() {
    showLoader();
    try {
        users = await fetchUsers();
        filteredUsers = users;
        updateTable();
        showSuccess('Users loaded successfully!');
    } catch (error) {
        showError('Failed to load users. Please try again.');
        console.error(error);
    } finally {
        hideLoader();
    }
}

// Update table display
function updateTable() {
    const pageData = paginate(filteredUsers, currentPage, perPage);
    renderTable(pageData, tableBody);

    const totalPages = Math.ceil(filteredUsers.length / perPage) || 1;
    pageInfo.textContent = `Page ${currentPage} / ${totalPages}`;

    // Update button states
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage >= totalPages;
}

// Show/hide loader
function showLoader() {
    loader.classList.add('show');
}

function hideLoader() {
    loader.classList.remove('show');
}

// Generate unique ID for new users
function generateId() {
    return users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
}

// Handle create user
async function handleCreate(formData) {
    showLoader();
    try {
        const newUser = {
            id: generateId(),
            name: formData.name,
            email: formData.email,
            address: { city: formData.city },
            city: formData.city
        };

        await createUser(newUser);

        // Add to local array (optimistic update)
        users.push(newUser);
        filteredUsers = filterUsers(users, searchInput.value);
        currentPage = Math.ceil(filteredUsers.length / perPage);
        updateTable();

        closeModal();
        showSuccess('User created successfully!');
    } catch (error) {
        showError('Failed to create user. Please try again.');
        console.error(error);
    } finally {
        hideLoader();
    }
}

// Handle update user
async function handleUpdate(userId, formData) {
    showLoader();
    try {
        const updatedUser = {
            id: userId,
            name: formData.name,
            email: formData.email,
            address: { city: formData.city },
            city: formData.city
        };

        await updateUser(userId, updatedUser);

        // Update local array
        const index = users.findIndex(u => u.id === userId);
        if (index !== -1) {
            users[index] = {...users[index], ...updatedUser };
        }

        filteredUsers = filterUsers(users, searchInput.value);
        updateTable();

        closeModal();
        showSuccess('User updated successfully!');
    } catch (error) {
        showError('Failed to update user. Please try again.');
        console.error(error);
    } finally {
        hideLoader();
    }
}

// Handle delete user
async function handleDelete(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) return;

    const confirmed = await showConfirmDialog(
        `Are you sure you want to delete ${user.name}?`
    );

    if (!confirmed) return;

    showLoader();
    try {
        await deleteUser(userId);

        // Remove from local array
        users = users.filter(u => u.id !== userId);
        filteredUsers = filterUsers(users, searchInput.value);

        // Adjust page if needed
        const totalPages = Math.ceil(filteredUsers.length / perPage);
        if (currentPage > totalPages && currentPage > 1) {
            currentPage = totalPages;
        }

        updateTable();
        showSuccess('User deleted successfully!');
    } catch (error) {
        showError('Failed to delete user. Please try again.');
        console.error(error);
    } finally {
        hideLoader();
    }
}

// Event: Add user button
addUserBtn.addEventListener('click', () => {
    openModal('create');
});

// Event: Form submit
userForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formData = getFormData();
    const validation = validateUserForm(formData);

    clearAllErrors();

    if (!validation.isValid) {
        // Show validation errors
        if (validation.errors.name) {
            showFieldError('userName', 'nameError', validation.errors.name);
        }
        if (validation.errors.email) {
            showFieldError('userEmail', 'emailError', validation.errors.email);
        }
        if (validation.errors.city) {
            showFieldError('userCity', 'cityError', validation.errors.city);
        }
        return;
    }

    const { mode, userId } = getModalState();

    if (mode === 'create') {
        await handleCreate(formData);
    } else {
        await handleUpdate(userId, formData);
    }
});

// Event: Search input
searchInput.addEventListener('input', () => {
    filteredUsers = filterUsers(users, searchInput.value);
    currentPage = 1;
    updateTable();
});

// Event: Pagination buttons
document.getElementById('nextBtn').addEventListener('click', () => {
    const totalPages = Math.ceil(filteredUsers.length / perPage);
    if (currentPage < totalPages) {
        currentPage++;
        updateTable();
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateTable();
    }
});

// Event delegation for table action buttons
tableBody.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('btn-edit')) {
        const userId = parseInt(target.dataset.id);
        const user = users.find(u => u.id === userId);
        if (user) {
            openModal('edit', user);
        }
    }

    if (target.classList.contains('btn-delete')) {
        const userId = parseInt(target.dataset.id);
        handleDelete(userId);
    }
});

// Initialize app
init();