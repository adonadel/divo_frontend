export interface EstablishmentType {
    id: number,
    name: string,
    description: string,
    cnpj: string,
    opening_start: string,
    opening_close: string,
    address_id: number,
    category_id: number,
    user_id: number,
    overall_rating: number,
    is_favorited: boolean,
    address: {
        id: number,
        street: string,
        number: string,
        neighborhood: string,
        city: string,
        complement: string,
        state: string,
        zip: string,
        longitude: number,
        latitude: number,
        created_at: string,
        updated_at: string
    },
    category: {
        id: number,
        name: string,
        description: string,
        created_at: string,
        updated_at: string,
    },
    user: {
        id: number,
        name: string,
        email: string,
        cpf_cnpj: string,
        phone: string,
        status: string,
        type: string,
        address_id: number,
        created_at: string,
        updated_at: string
    }
    medias?: mediasType[],
    
};


interface mediasType {
    fileName: string,
    filename_id: number,
    width: number,
    height: number,
    display_name: string,
}