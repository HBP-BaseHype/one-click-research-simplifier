export interface Action {
    id: string;
    name: string;
    icon: string;
    colour: string;
}

export interface Language {
    code: string;
    name: string;
}

export type TabType = 'text' | 'url' | 'file';

export type ActionType = 'summarize' | 'simplify' | 'translate' | 'proofread' | 'questions';