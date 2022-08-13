const countEl = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

// declare initial state
const initialState = {
    value: 0,
};

// create reducer function
function reducer(state = initialState, action) {
    if (action.type === 'increase') {
        return {
            ...state,
            value: state.value + 1,
        };
    } else if (action.type === 'decrease') {
        return {
            ...state,
            value: state.value - 1,
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
    store.dispatch({
        type: 'increase',
    });
});

decreaseBtn.addEventListener('click', () => {
    store.dispatch({
        type: 'decrease',
    });
});
