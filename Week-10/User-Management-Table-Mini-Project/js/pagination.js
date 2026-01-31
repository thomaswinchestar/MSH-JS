export function paginate(data, page, perPage) {
    const start = (page - 1) * perPage;
    return data.slice(start, start + perPage);
}