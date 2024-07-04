import { FavoriteOutlined, Home, Login, Loyalty, Search } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";


export const BottomNavigator = () => {
    const [value, setValue] = useState('home');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }

    const styleButtonNavigator = {
        borderRadius: '5rem'
    }

    return (
        <BottomNavigation value={value} onChange={handleChange} sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            <BottomNavigationAction label="Login" value="login" icon={<Login />} sx={styleButtonNavigator}/>
            <BottomNavigationAction label="Promoções" value="sales" icon={<Loyalty />} sx={styleButtonNavigator} />
            <BottomNavigationAction label="Início" value="home" icon={<Home />} sx={styleButtonNavigator} />
            <BottomNavigationAction label="Favoritos" value="favorites" icon={<FavoriteOutlined />} sx={styleButtonNavigator} />
            <BottomNavigationAction label="Pesquisar" value="search" icon={<Search />} sx={styleButtonNavigator} />

        </BottomNavigation>
    )
};