const increment = (number) => {
    return {
        type: 'INCREMENT',
        count: number
    };
};
export default increment;
