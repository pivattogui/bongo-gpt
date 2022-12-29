export enum MOODS {
    LOVED,
    RUDE,
    SMART,
    NEUTRAL,
}

export type MoodOption = {
    mood: keyof typeof MOODS;
    value: string;
}