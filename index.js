'use strict';


const { createStore } = Redux;
console.log('Banking app for multiple accounts');

// Store


const defaultState = {
    checking: 100,
    savings: 100,

};


// Actions!
const ACTION_DEPOSIT = 'deposit';
const ACTION_WITHDRAWAL = 'withdrawal';

const actionDeposit = (account, amount) => {
    return {
        type: 'ACTION_DEPOSIT',
        payload: {
            account: account,
            amount: amount
        }
    };
}

const actionWithdrawal = (account, amount) => {
        return {
            type: 'ACTION_WITHDRAWAL',
            payload: {
                account,
                amount
            }
        };

    }
    // Reducer
const accounts = (state = defaultState, action) => {
    switch (action.type) {
        case 'ACTION_DEPOSIT':
            return {
                ...state,
                [action.payload.account]: state[action.payload.account] + action.payload.amount
            };

        case 'ACTION_WITHDRAWAL':
            return {
                ...state,
                [action.payload.account]: state[action.payload.account] - action.payload.amount
            };
    };
}

return state;


const store = createStore(account, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(() => {
    console.log('Subscribing to state changes...');
    const state = store.getState();
    console.log(state);
    const balance = document.querySelector('#Balance');
    balance.innerHTML = state.balance;
});

const checkingBalance = document.querySelector('#checkingBalance');
const savingsBalance = document.querySelector('#savingsBalance');
balance.innerHTML = defaultState.savings;
balance.innerHTML = defaultState.checking;
window.store = store;
window.createDeposit = createDeposit;
window.createWithdrawal = createWithdrawal;


const checkingDepositButton = document.querySelector('#savingsDeposit');
const checkingWithdrawalButton = document.querySelector('#savingsWithdrawal');
const savingsDepositButton = document.querySelector('#checkingDeposit');
const savingsWithdrawalButton = document.querySelector('#checkingWithdrawal');
const amount = document.querySelector('#amount');


checkingDepositButton.addEventListener('click', (e) => {
    e.prevent();
    const amountValue = parseInt(amountDeposit.value);
    store.dispatch(actionDeposit('checking', amountValue));
});
savingsDepositButton.addEventListener('click', (e) => {
    e.prevent();
    const amountValue = parseInt(amountDeposit.value);
    store.dispatch(actionWithdrawal('savings', amountValue));
});

checkingWithdrawalButton.addEventListener('click', (e) => {
    e.prevent();
    const amountValue = parseInt(amountWithdraw.value);
    store.dispatch(actionWithdrawal(amountValue));
    console.log(amountValue);
});
savingsWithdrawalButton.addEventListener('click', (e) => {
    e.prevent();
    const amountValue = parseInt(amountWithdraw.value);
    store.dispatch(actionWithdrawal(amountValue));
    console.log(amountValue);
});
// const store = createStore(accounts);