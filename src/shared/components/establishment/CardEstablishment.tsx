import { AccessTime, Favorite, FavoriteBorderOutlined, GpsFixed, Star } from "@mui/icons-material";
import { Avatar, Box, Chip, Typography, IconButton, Grid } from "@mui/material";
import { EstablishmentTypes } from "./EstablishmentTypes";
import { Tag } from "../utils/tag/Tag";

export const CardEstablishment = (props: EstablishmentTypes) => {

    const handleFavorite = () => {
        console.log('Favoritar');
    };

    return (
        <Grid item xs={12}>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                borderRadius: '1rem'
            }}>
                <Box sx={{
                    backgroundImage: `url(${props.profileImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '12rem',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: '1rem 1rem 0 0',
                    position: 'relative',
                }}>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '1rem',
                    }}>
                        <Avatar alt="Logo do estabelecimento" src={props.logoImage} sx={{
                            width: '6rem',
                            height: '6rem',
                            border: '2px solid white',
                            borderRadius: '20%',
                        }} />

                        <Chip size="small" icon={<Star sx={{ color: "yellow" }} />} label={props.rating} color="secondary" sx={{
                            marginTop: '-0.5rem',
                            zIndex: 1,
                        }} />
                    </Box>

                    <IconButton color="secondary" aria-label="favoritar estabelecimento" onClick={handleFavorite} sx={{
                        position: 'absolute',
                        right: '0.5rem',
                        top: '0.5rem',
                    }}>
                        {
                            props.hasFavorite ? <Favorite color="secondary" /> : <FavoriteBorderOutlined color="secondary" />
                        }
                    </IconButton>
                </Box>

                <Box sx={{
                    padding: '1rem',
                }}>
                    <Box sx={{
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Typography variant="h4" color="initial" sx={{
                                fontWeight: 'bold',
                                fontSize: '1.2rem',
                            }}>
                                {props.name}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        gap: '1rem',
                        marginTop: '0.5rem',
                    }}>
                        <Tag 
                            icon={<GpsFixed color="secondary" />} 
                            text="3Km de você"
                            backgroundColor="white" 
                        />
                        <Tag 
                            icon={<AccessTime color="success" />}
                            text="Aberto até as 23h"
                            backgroundColor="white"
                        />
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
}