export interface Paste {
    id?: number;
    title: string;
    body: string;
    language?: string,
    created?: Date,
    updated?: Date,
    views?: number
}