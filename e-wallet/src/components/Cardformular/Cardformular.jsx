import './Cardformular.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCard, placeholderCard, updateNewCard } from '../../reducers/cardsReducer';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

function Cardformular() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cards = useSelector((state) => {
        return state.cards;
    });

    let newCard = {...cards.newCard};


    function handleCardNumberInput(event) {
        newCard.cardNumber = event.target.value;
        dispatch(updateNewCard(newCard));
    }

    function handleCardHolderName(event) {
        newCard.cardHolderName = event.target.value;
        dispatch(updateNewCard(newCard));
    }

    function handleValidThruInput(event) {
        newCard.validThru = event.target.value;
        dispatch(updateNewCard(newCard));
    }

    function handleCCVInput(event) {
        newCard.CCV = event.target.value;
        dispatch(updateNewCard(newCard));
    }

    function handleVendorInput(event) {
        newCard.vendor = event.target.value;
        dispatch(updateNewCard(newCard));
    }

    function handleClick(){
        dispatch(addCard(newCard));
        goToHomePage();
    }


    function goToHomePage(){
        navigate('/hem');
      };
    
    return (
        <div>

            <Card card={newCard} />
            <article className='cardForm'>
                <section className='inputBox'>
                    <p className='form__text'>CARD NUMBER</p>
                    <input
                        className='form__input'
                        type='text'
                        onChange={ handleCardNumberInput }
                        value={newCard.cardNumber}
                        placeholder={placeholderCard.cardNumber}
                    />
                </section>
                <section className='inputBox'>
                    <p className='form__text'>CARDHOLDER NAME</p>
                    <input
                        className='form__input'
                        type='text'
                        placeholder={ placeholderCard.cardHolderName }
                        onChange={ handleCardHolderName }
                        value={newCard.cardHolderName}
                    />
                </section>
                <section className='twoInputBox'>
                    <div className='inputBox'>
                        <p className='form__text'>VALID THRU</p>
                        <input className='form__input' type='text'
                        onChange={ handleValidThruInput }
                        placeholder={ placeholderCard.validThru }
                        value={newCard.validThru}
                        />
                    </div>
                    <div className='inputBox'>
                        <p className='form__text'>CCV</p>
                        <input className='form__input' type='text'
                        onChange={ handleCCVInput }
                        placeholder={ placeholderCard.CCV }
                        value={newCard.CCV}
                        />
                    </div>
                </section>
                <section className='inputBox'>
                    <p className='form__text'>VENDOR</p>
                    <input className='form__input' type='text'
                    onChange={ handleVendorInput }
                    placeholder={ placeholderCard.vendor }
                    value={newCard.vendor}
                    />
                </section>
                <button onClick={handleClick} className='cardform__button'>ADD CARD</button>
            </article>
        </div>
    );
}

export default Cardformular;
