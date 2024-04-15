import Top from "../components/Top/Top"
import Card from "../components/Card/Card"
import CardStack from "../components/CardStack/CardStack"
import './Home.css'
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Home() {
    const navigate = useNavigate()

    const cards = useSelector((state) => {
        return state.cards;
    });

    //det valda kortet blir selectedCard
    const selectedCard = cards.selectedCard < cards.cards.length ? cards.cards[cards.selectedCard] : null;


    function goToCardformular(){
        navigate('/nyttkort');
    }

    return (
        <div className="home-wrapper">
        <Top />
        <Card card={selectedCard} />
        <CardStack />
        <button className="home__button" onClick={ goToCardformular }>ADD A NEW CARD</button>
        </div>
    )
}

export default Home