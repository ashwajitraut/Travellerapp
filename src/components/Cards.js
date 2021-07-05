import React from 'react'
import CardItem from './CardItem.js';
import './Cards.css';
import Images from '../assets/beaches.jpg';
import Images1 from '../assets/desert.jpg';
import Images2 from '../assets/nyc.jpg';
import Images3 from '../assets/kerala.jpg';
import Images4 from '../assets/switz.jpg';


function Cards() {
    return (
        <div>
            <h1>Check out these Epic Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={Images}
                        text='Explore the Beaches and Beach Resorts in the Goa, 
                        Maldives, Bali and More.. Make Holidays Awesome!'
                        label='Beaches' 
                        path='/services' 
                        />
                        <CardItem 
                        src={Images1}
                        text='Explore the Hot Places and Life Style of people in 
                        Rajesthan, Sahara, Atacma and more.. Make Holidays Awesome! ' 
                        label='Hot Places' 
                        path='/services' 
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                        src={Images2}
                        text='Explore the Cities and Life Style of people in NewYork, Venice, London and more.. Make Holidays Awesome!' 
                        label='Cities' 
                        path='/services' 
                        />
                        <CardItem 
                        src={Images3}
                        text='Explore the Hidden Waterfall and Resorts deep inside the Jungle.. Make Holidays Awesome!'
                        label='Forest' 
                        path='/services' 
                        />
                        <CardItem 
                        src={Images4}
                        text='Explore the Mountains and Scenic beauty of the world from top.. Make Holidays Awesome!' 
                        label='Mountains' 
                        path='/services' 
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
