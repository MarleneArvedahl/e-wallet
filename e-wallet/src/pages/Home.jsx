import Top from "../components/Top/Top"
import Card from "../components/Card/Card"
import CardStack from "../components/CardStack/CardStack"
import './Home.css'
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getActiveCard } from "../reducers/cardsReducer";

function Home() {
    const navigate = useNavigate()

    const cardStore = useSelector((state) => {
        return state.cardStore;
    });

    const activeCard = getActiveCard(cardStore);


    function goToCardformular(){
        navigate('/nyttkort');
    }

    return (
        <div className="home-wrapper">
        <Top />
        <Card card={activeCard} />
        <CardStack />
        <button className="home__button" onClick={ goToCardformular }>ADD A NEW CARD</button>
        </div>
    )
}

export default Home