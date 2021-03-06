import React, {useState} from "react";
import "./Cards.scss"
import TinderCard from "react-tinder-card";

function Cards(){
    const [cards, setCards] = useState([{
            id: 1,
            name: "Name#1",
            age: 18,
            description: "Lorem Ipsum",
            img: "https://picsum.photos/1000/1500"
        },
        {
            id: 2,
            name: "Name#2",
            age: 18,
            description: "Lorem Ipsum",
            img: "https://picsum.photos/1000/1500"
        }]);

    return(
        <div className="card-container">
            {cards.map(card => (
                <div className="card" key={card.id}>
                    <TinderCard className="card__tinder-card" preventSwipe={['down']}>
                        <img src={card.img} alt=""/>
                        <div className="card__info">
                            <div className="card__headline">
                                <h3 className="card__name">{card.name}</h3>
                                <h4 className="card__age">{card.age}</h4>
                                <div className="card__info-icon">i</div>
                            </div>
                            <p className="card__description">{card.description}</p>
                        </div>
                    </TinderCard>
                </div>
            ))}
        </div>
    )
}

export default Cards

