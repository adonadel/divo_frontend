import { Container } from "@mui/material";
import { ScrollView, View } from "react-native";
import { GridEstablishment } from "../shared/components/establishment/GridEstablishment";


export const HomeScreen = () => {
    return (

        <ScrollView>
            <Container maxWidth="xl">
                <GridEstablishment />
            </Container>
        </ScrollView>

    );
}