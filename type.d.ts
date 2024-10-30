enum ECategory {
    REACTION = 'reaction',
    MEMORY = 'memory',
    VERBAL = 'verbal',
    VISUAL = 'visual',
}
interface ICard {
    category: ECategory;
    score: number;
    icon: string;
}
