import './Card.css';
import { useSelector } from 'react-redux';
import chipDark from '../../assets/chip-dark.svg';

import { placeholderCard, getVendor } from '../../reducers/cardsReducer';

function Card(props) {

    //const { card } = props; // kortare variant av nedan
    let card = props.card;
    if (!card) {
        card = placeholderCard; 
    }

    const vendor = getVendor(card.vendor);
    
    return (
        <article className={`card card__${vendor.dark? 'dark' : 'light'}`} style={{ backgroundColor: vendor.backgroundColor }} onClick={props.onClick}>
            <header className='card__header'>
                <img className='chipDark' src={chipDark} alt='bild' />
                <img className='vendorBitcoin' src={vendor.icon} alt='bild' />
            </header>
            <main className='card__main'>
                <section className='numberWrapper'>
                    <p className='cardNumber'>{card.cardNumber || placeholderCard.cardNumber}</p>
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
