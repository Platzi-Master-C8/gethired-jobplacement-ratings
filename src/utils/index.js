export const labelsToValueRaitings = (label) => {
    return label === "Good" ? 2 : label === "Regular" ? 1 : 0;
}

function add(accumulator, a) {
    return accumulator + a;
}

export const calculateAverage = (array) => {
    const sum = array.reduce(add, 0);

    return sum / array.length;
}

export const baseFive = (value, base) => {
    return parseFloat((value * 5 / base).toFixed(1));
}

export const sortName = (sortKey) => {
    return sortKey === 'created_at' ? 'Date' : sortKey === 'utility_counter' ? 'Helpfulness' : 'Rating';
};
