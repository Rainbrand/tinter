import React, {useState} from "react";
import "./Cards.scss"
import TinderCard from "react-tinder-card";

function Cards(){
    const [cards, setCards] = useState([{
            id: 1,
            name: "Name#1",
            age: 18,
            img: "https://picsum.photos/1000/1500"
        },
        {
            id: 2,
            name: "Name#2",
            age: 18,
            img: "https://picsum.photos/1000/1500"
        }]);

    return(
        <div className="card-container">
            {cards.map(card => (
                <div className="card">
                    <TinderCard className="card__tinder-card" key={card.id} preventSwipe={['down']}>
                        <img src={card.img} alt=""/>
                        <div className="card__headline">
                            <h3 className="card__name">{card.name}</h3>
                            <h4 className="card__age">{card.age}</h4>
                        </div>
                    </TinderCard>
                </div>
            ))}
        </div>
    )
}

export default Cards

