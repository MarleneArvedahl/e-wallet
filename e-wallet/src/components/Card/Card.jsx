import './Card.css';
import { useSelector } from 'react-redux';

import chipDark from '../../assets/chip-dark.svg';
import vendorBitcoin from '../../assets/vendor-bitcoin.svg';
import vendorNinja from '../../assets/vendor-ninja.svg';
import vendorEvil from '../../assets/vendor-evil.svg';
import vendorBlockChain from '../../assets/vendor-blockchain.svg';
import { placeholderCard } from '../../reducers/cardsReducer';

function Card(props) {

    //const { card } = props; // kortare variant av nedan
    let card = props.card;
    if (!card) {
        card = placeholderCard;
    }
    
    console.log("Card:", card)

    return (
        <article className='card'>
            <header className='card__header'>
                <img className='chipDark' src={chipDark} alt='bild' />
                <img className='vendorBitcoin' src={vendorBitcoin} alt='bild' />
            </header>
            <main className='card__main'>
                <section className='numberWrapper'>
                    <p className='cardNumber'>{card.cardNumber || placeholderCard.cardNumber}</p>
                    {/* <p className='cardNumber'></p>
                    <p className='cardNumber'></p>
                    <p className='cardNumber'></p> */}
                </section>
            </main>
            <footer className='card__footer'>
                <section className='staticText'>
                    <p className='staticText__paragraph'>CARDHOLDER NAME</p>
                    <p className='staticText__paragraph'>VALID THRU</p>
                </section>
                <section className='nameAndDate'>
                    <p className='name'>{card.cardHolderName || placeholderCard.cardHolderName}</p>
                    <p className='date'>{card.validThru || placeholderCard.validThru}</p>
                </section>
            </footer>
        </article>
    );
}

export default Card;
