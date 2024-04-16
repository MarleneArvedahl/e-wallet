import { createSlice } from '@reduxjs/toolkit';
import vendorBitcoin from '../assets/vendor-bitcoin.svg';
import vendorNinja from '../assets/vendor-ninja.svg';
import vendorBlockChain from '../assets/vendor-blockchain.svg';
import vendorEvil from '../assets/vendor-evil.svg';

export const placeholderCard = {
    CCV: "XXX",
    cardHolderName: "FIRSTNAME LASTNAME",
    cardNumber: "XXXX XXXX XXXX XXXX",
    validThru: "MM/YY",
    vendor: "bitcoin",
}

const emptyCard = {
    CCV: "",
    cardHolderName: "",
    cardNumber: "",
    validThru: "",
    vendor: "bitcoin",
}

export const vendors = [
    {
        id: "bitcoin",
        name: "Bitcoin Inc",
        icon: vendorBitcoin,
        backgroundColor: "#FFAE34",
        textColor: "#333333",
        dark: false,
    },
    {
        id: "ninja",
        name: "Ninja bank",
        icon: vendorNinja,
        backgroundColor: "#222222",
        textColor: "#eeeeee",
        dark: true,
    },
    {
        id: "blockchain",
        name: "Blockchain Inc",
        icon: vendorBlockChain,
        backgroundColor: "#8B58F9",
        textColor: "#eeeeee",
        dark: true,
    },
    {
        id: "evil",
        name: "Evil Corp",
        icon: vendorEvil,
        backgroundColor: "#F33355",
        textColor: "#eeeeee",
        dark: true,
    },
]

export function getVendor(vendorId) {
    // Hämta ut vendor-elementet vars id är vendorId
    const vendor = vendors.find(item => item.id === vendorId);
    if (vendor === undefined) {
        throw new Error(`Vendor id ${vendorId} does not exist.`);
    }
    return vendor;
}

export function getActiveCard(state) {
    return state.cards.find(card => card.cardNumber === state.activeCardNumber) ?? null;
}

const initialState = {
    cards: [],
    activeCardNumber: "",
    newCard: emptyCard,
};

const cardsSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCard(state, action) {
            console.log('State är: ', state);
            console.log('Action är: ', action);
            state.cards = [...state.cards, state.newCard];
            if (state.activeCardNumber === "") {
                state.activeCardNumber = state.newCard.cardNumber;
            }
            state.newCard = emptyCard;
            console.log("cards:", state.cards);
        },
        updateNewCard(state, action) {
            console.log('Update new card:', action)
            state.newCard = action.payload;
        },
        setActiveCard(state, action) {
            state.activeCardNumber = action.payload;
        }
    },
});

export const { addCard, updateNewCard, setActiveCard } = cardsSlice.actions;

export default cardsSlice.reducer;
