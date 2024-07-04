import { Grid, Slide } from "@mui/material";
import { CardEstablishment } from "./CardEstablishment";
import { useEffect, useState } from "react";
import { EstablishmentTypes } from "./EstablishmentTypes";

const data: EstablishmentTypes[] = [
    {
        id: 1,
        name: 'Nome estabelecimento',
        description: 'Descrição estabelecimento',
        profileImage: 'https://github.blog/wp-content/uploads/2023/10/Collaboration-DarkMode-2.png?fit=1200%2C630',
        logoImage: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w240-h480-rw',
        hasFavorite: true,
        hasPromotion: true,
        pricingRanking: 3,
        rating: '5.0',
    },
    {
        id: 2,
        name: 'Nome estabelecimento',
        description: 'Descrição estabelecimento',
        profileImage: 'https://github.blog/wp-content/uploads/2023/10/Collaboration-DarkMode-2.png?fit=1200%2C630',
        logoImage: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w240-h480-rw',
        hasFavorite: false,
        hasPromotion: true,
        pricingRanking: 3,
        rating: '3.2',
    },
    {
        id: 3,
        name: 'Nome estabelecimento',
        description: 'Descrição estabelecimento',
        profileImage: 'https://github.blog/wp-content/uploads/2023/10/Collaboration-DarkMode-2.png?fit=1200%2C630',
        logoImage: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w240-h480-rw',
        hasFavorite: true,
        hasPromotion: true,
        pricingRanking: 3,
        rating: '2.5',
    }
];

export const GridEstablishment = () => {
    const [establishment, setEstablishment] = useState<EstablishmentTypes[]>([]);

    useEffect(() => {
        setEstablishment(data);
    }, []);

    return (
        <Slide in>
            <Grid container spacing={2} mt={2}>
                {establishment.map((establishment: EstablishmentTypes) => (
                    <CardEstablishment
                        id={establishment.id}
                        name={establishment.name}
                        profileImage={establishment.profileImage}
                        description={establishment.description}
                        logoImage={establishment.logoImage}
                        rating={establishment.rating}
                        pricingRanking={establishment.pricingRanking}
                        hasPromotion={establishment.hasPromotion}
                        hasFavorite={establishment.hasFavorite}                        
                        key={establishment.id}
                    />
                ))}
            </Grid>
        </Slide>
    );
}