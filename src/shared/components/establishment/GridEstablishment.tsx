import { ScrollView, View } from "react-native";
import CardEstablishment from "./CardEstablishment";


export const GridEstablishment = () => {

    const data = [
        {
            id: 1,
            name: 'Burger King',
            mediaSrc: 'https://www.burgerking.com.br/imagens/produtos/whopper.png',
            profileSrc: 'https://www.subway.com/subway-maint/images/w2-sandwiches_v1.jpg',
            rating: 4.5,
            openHours: '08:00 - 22:00',
            favorite: false
        },
        {
            id: 2,
            name: 'McDonalds',
            mediaSrc: 'https://www.mcdonalds.com.br/content/dam/br/mcdonalds-com-br/items/hero/desktop/hero-big-mac.png',
            profileSrc: 'https://www.subway.com/subway-maint/images/w2-sandwiches_v1.jpg',
            rating: 4.5,
            openHours: '08:00 - 22:00',
            favorite: false
        },
        {
            id: 3,
            name: 'Pizza Hut',
            mediaSrc: 'https://www.pizzahut.com.br/wp-content/uploads/2020/08/PH_Banner_1920x1080_01.jpg',
            profileSrc: 'https://www.subway.com/subway-maint/images/w2-sandwiches_v1.jpg',
            rating: 4.5,
            openHours: '08:00 - 22:00',
            favorite: false 
        },
        {
            id: 4,
            name: 'Subway',
            mediaSrc: 'https://www.subway.com/subway-maint/images/w2-sandwiches_v1.jpg',
            profileSrc: 'https://www.subway.com/subway-maint/images/w2-sandwiches_v1.jpg',
            rating: 4.5,
            openHours: '08:00 - 22:00',
            favorite: false
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
                data && data.map((item, index) =>                     
                    <CardEstablishment id={item.id} favorite={item.favorite} name={item.name} mediaSrc={item.mediaSrc} openHours={item.openHours} rating={item.rating} profileSrc={item.profileSrc} key={index}/>
                )
            }    

            </View>
        </ScrollView>
    )

};