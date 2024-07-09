interface PromotionType {
    percent: number;    
    description: string;
    dateStart: Date;    
    dateFinish: Date;
}

interface EstablishmentType {
    name: string;
    profileSrc: string;
    ratting: number;
}

export interface ProductsType {
    name: string;
    value: number;    
    description: string;
    imageSrc: string;
    valueWithPromotion?: number;    
    promotion?: PromotionType;    
    establishment?: EstablishmentType;
}

