const countEl = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

// action identifier
const INCREASE = 'increase';
const DECREASE = 'decrease'

// action creators
const increase = (value) => {
    return {
        type: INCREASE,
        payload: value
    }
}

const decrease = (value) => {
    return {
        type: DECREASE,
        payload: value
    }
}

// declare initial state
const initialState = {
    value: 0,
};

// create reducer function
function reducer(state = initialState, action) {
    if (action.type === INCREASE) {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === DECREASE) {
        return {
            ...state,
            value: state.value - action.payload,
        };
    } else {
        return state;
    }
}

// create store
const store = Redux.createStore(reducer);

const render = () => {
    const state = store.getState();
    countEl.innerText = state.value;
};

// update UI initially
render();

store.subscribe(render);

// button handler
increaseBtn.addEventListener('click', () => {
    store.dispatch(increase(10));
});

decreaseBtn.addEventListener('click', () => {
    store.dispatch(decrease(5));
});
