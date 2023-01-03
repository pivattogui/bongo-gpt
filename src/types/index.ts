export enum MOODS {
    LOVED,
    RUDE,
    PHILOSOPHICAL,
    NEUTRAL,
}

export type MoodOption = {
    type: keyof typeof MOODS;
    value: string;
}