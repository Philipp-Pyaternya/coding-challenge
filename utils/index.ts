export const getColor = (
    category: string,
): { textColor: string; backgroundColor: string } => {
    switch (category) {
        case 'Reaction':
            return {
                textColor: 'hsl(0, 100%, 67%)',
                backgroundColor: 'hsl(0, 100%, 94%)',
            };
        case 'Memory':
            return {
                textColor: 'hsl(39, 100%, 56%)',
                backgroundColor: 'hsl(30, 100%, 90%)',
            };
        case 'Verbal':
            return {
                textColor: 'hsl(166, 100%, 37%)',
                backgroundColor: 'hsl(140, 100%, 86%)',
            };
        case 'Visual':
            return {
                textColor: 'hsl(234, 85%, 45%)',
                backgroundColor: 'hsl(210, 100%, 87%)',
            };
        default:
            return { textColor: 'black', backgroundColor: 'white' };
    }
};

export const calculateTotalScore = (data: ICard[]) => {
    if (!data?.length) return 0;
    const average =
        data.reduce((sum, item) => sum + item.score, 0) / data.length;
    return Math.round(average);
};
