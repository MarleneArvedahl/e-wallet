import Card from '../Card/Card';
import './CardStack.css';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCard } from '../../reducers/cardsReducer';

function CardStack() {
    // hämtar alla kort i store
    const cardStore = useSelector((state) => {
        return state.cardStore;
    });
    const dispatch = useDispatch();
    const cards = cardStore.cards;

    const onClickCard = (card) => {
        dispatch(setActiveCard(card.cardNumber));
    };

    // loopar igenom dom och skapar upp en Card-komponent per kort med unikt index-key.
    return (
        <div>
            <div>
                {cards.length === 0 ? (
                    <p>
                        You don't have any cards, please add a new card below.
                    </p>
                 ) : (
                    <p>
                        You have {cards.length}{' '}
                        {cards.length === 1 ? 'card' : 'cards'}
                    </p>
                )}
            </div>
            <section className='cardStack'>
                {/** Filtrera ut alla kort utom det aktiva kortet så inte det syns på två ställen */}
                {cards
                    .filter(
                        (card) => card.cardNumber !== cardStore.activeCardNumber
                    )
                    .map((card, index) => (
                        <Card
                            key={index}
                            card={card}
                            onClick={() => onClickCard(card)}
                        />
                    ))}
            </section>
        </div>
    );
}

export default CardStack;
