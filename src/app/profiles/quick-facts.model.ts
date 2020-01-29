export enum Tier {
    Bronce = 'bronce',
    Silver = 'silver',
    Gold = 'gold'
}

interface RFMScore {
    score: number;
        r: number; 
        f: number;
        m: number;
}

export interface QuickFactsModel{
    id: string;
    tier: Tier;
    points: number;
    room_type: string;
    bed_type: string;
    floor: string;
    rfm_score: RFMScore;
    total_stays: number;
    nights: number;
    average_stay: number;
    last_visit: string;
    lifetime_value: number;
}