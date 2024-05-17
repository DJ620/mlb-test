export type Division = {
    id: number;
    name: string;
}

export type League = {
    id: number;
    name: string;
}

export type Team = {
    division: Division;
    league: League;
    id: number;
    name: string;
}