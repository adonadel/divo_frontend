import { EstablishmentType } from "../establishment/EstablishmentType";

interface PromotionType {
    percent: number;    
    description: string;
    dateStart: Date;    
    dateFinish: Date;
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

