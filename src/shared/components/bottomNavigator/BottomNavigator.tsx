import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Login, Loyalty, Home, FavoriteOutlined, Search } from "@mui/icons-material";

export const BottomNavigator = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState('Home');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        // navigation.navigate();       arrumar isso aqui
    }

    const styleButtonNavigator = {
        borderRadius: '5rem',
    }

    return (
        <BottomNavigation value={value} onChange={handleChange} sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            <BottomNavigationAction label="Login" value="Login" icon={<Login />} sx={styleButtonNavigator} />
            <BottomNavigationAction label="Promoções" value="Promotions" icon={<Loyalty />} sx={styleButtonNavigator} />
            <BottomNavigationAction label="Início" value="Home" icon={<Home />} sx={styleButtonNavigator} />
            <BottomNavigationAction label="Favoritos" value="Favorites" icon={<FavoriteOutlined />} sx={styleButtonNavigator} />
            <BottomNavigationAction label="Pesquisar" value="Search" icon={<Search />} sx={styleButtonNavigator} />
        </BottomNavigation>
    )
};
