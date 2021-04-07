module.exports = {
    sum: (a, b) => a + b,
    sortTable: (col, sort) => {
        const types = {
            default: 'desc',
            desc: 'asc',
            asc: 'desc'
        }

        const icons = {
            default: 'fa-sort',
            asc: 'fa-sort-amount-up',
            desc: 'fa-sort-amount-down'
        }

        let type = (col === sort.collumn) ? sort.type : 'default';

        return `<a href="?_sort&collumn=${col}&type=${types[type]}">
            <i class="fas ${icons[type]}"></i>
            </a>`;
    }
}