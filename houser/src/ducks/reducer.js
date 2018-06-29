let initalState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

const WIZARD_STEP_ONE = 'WIZARD_STEP_ONE';
const WIZARD_STEP_TWO = 'WIZARD_STEP_TWO';
const WIZARD_STEP_THREE = 'WIZARD_STEP_THREE';
const CLEAR_WIZARD = 'CLEAR_WIZARD';

export default function (state = initalState, action) {
    switch (action.type) {
        case WIZARD_STEP_ONE:
            let { name, address, city, zip } = action.payload;
            return Object.assign({}, state, { name: name, address: address, city: city, state: action.payload.state, zip: zip })
        case WIZARD_STEP_TWO:
            let { img } = action.payload;
            return Object.assign({}, state, { img: img })
        case WIZARD_STEP_THREE:
            let { mortgage, rent } = action.payload;
            return Object.assign({}, state, { mortgage: mortgage, rent: rent })
        case CLEAR_WIZARD:
            return action.payload
        default:
            return state;
    }
}


export function wizardStepOne(name, address, city, state, zip) {
    return {
        type: WIZARD_STEP_ONE,
        payload: {
            name,
            address,
            city,
            state,
            zip
        }
    }
}

export function wizardStepTwo(img) {
    return {
        type: WIZARD_STEP_TWO,
        payload: {
            img
        }
    }
}

export function wizardStepThree(mortgage, rent) {
    return {
        type: WIZARD_STEP_THREE,
        payload: {
            mortgage,
            rent
        }
    }
}

export function clearWizard() {
    return {
        type: CLEAR_WIZARD,
        payload: initalState
    }
}