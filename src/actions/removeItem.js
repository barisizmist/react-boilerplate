const removeItem = (idx) => {
    return {
        type: 'REMOVE',
        idx
    };
};
export default removeItem;
