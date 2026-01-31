export function renderTable(users, tableBody) {
    tableBody.innerHTML = ''; // Clear existing table data

    if (users.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 40px; color: #999;">
                    No users found
                </td>
            </tr>
        `;
        return;
    }

    users.forEach(user => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address?.city || user.city || 'N/A'}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" data-id="${user.id}">Edit</button>
                    <button class="btn-delete" data-id="${user.id}">Delete</button>
                </div>
            </td>
        `;
        tableBody.appendChild(tr);
    })
}