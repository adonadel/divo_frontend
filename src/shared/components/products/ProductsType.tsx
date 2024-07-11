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
    medias?: mediasType[]
}

interface mediasType {
    fileName: string,
    filename_id: number,
    width: number,
    height: number,
    display_name: string,
}

