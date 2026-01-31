export function filterUsers(users, keyword) {
    return users.filter(user => user.name.toLowerCase().includes(keyword.toLowerCase()));
}