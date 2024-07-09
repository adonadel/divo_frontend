import { View } from "react-native"
import { CardProducts } from "./CardProducts"


export const GridProducts: React.FC = () => {

    const data = [
        {
            name: 'Product 1',
            value: 100,
            description: 'Description 1',
            imageSrc: 'https://picsum.photos/700',           
        },
        {
            name: 'Product 2',
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
            name: 'Product 3',
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
            name: 'Product 4',
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
        {
            name: 'Product 5',
            value: 500,
            description: 'Description 5',
            imageSrc: 'https://picsum.photos/700',
            promotion: {
                percent: 10,
                description: 'Promotion 5',
                dateStart: new Date(),
                dateFinish: new Date(),
            }
        },
        {
            name: 'Product 6',
            value: 600,
            description: 'Description 6',
            imageSrc: 'https://picsum.photos/700',
            promotion: {
                percent: 10,
                description: 'Promotion 6',
                dateStart: new Date(),
                dateFinish: new Date(),
            }
        },      
    ]

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
            padding: 10,
        
        }}>

            {
                data.map((product, index) => {
                    return (
                        <CardProducts
                            key={index}
                            name={product.name}
                            value={product.value}
                            description={product.description}
                            imageSrc={product.imageSrc}
                            promotion={product.promotion}
                        />
                    )
                })
            }
   
        </View>
    )
}