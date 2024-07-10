import { ScrollView, View } from "react-native";
import { CardPromotions } from "./CardPromotions";

export const GridPromotions = () => {

    const data = [
        {
            name: 'Promotion 1',
            value: 100,
            description: 'Description 1',
            imageSrc: 'https://picsum.photos/700',           
        },
        {
            name: 'Promotion 2',
            value: 200,
            description: 'Description 2',
            imageSrc: 'https://picsum.photos/700',
            promotion: {
                percent: 10,
                description: 'Promotion 2',
                dateStart: new Date(),
                dateFinish: new Date(),
            }
        },
        {
            name: 'Promotion 3',
            value: 300,
            description: 'Description 3',
            imageSrc: 'https://picsum.photos/700',
            promotion: {
                percent: 10,
                description: 'Promotion 3',
                dateStart: new Date(),
                dateFinish: new Date(),
            }
        },
        {
            name: 'Promotion 4',
            value: 400,
            description: 'Description 4',
            imageSrc: 'https://picsum.photos/700',
            promotion: {
                percent: 10,
                description: 'Promotion 4',
                dateStart: new Date(),
                dateFinish: new Date(),
            }
        },               
    ]

    return (
        <ScrollView>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 20,
                padding: 20
            }}>           
                {
                    data.map((item, index) => (
                        <CardPromotions key={index} {...item} />
                    ))
                }

            </View>
        </ScrollView>
    )

};