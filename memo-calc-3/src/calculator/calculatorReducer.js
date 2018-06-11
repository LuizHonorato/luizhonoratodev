const INITIAL_STATE = {number: 0}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'KEY_1_PRESSED':
            return {...state, number: 1}
        case 'KEY_2_PRESSED':
            return {...state, number: 2}
        case 'KEY_3_PRESSED':
            return {...state, number: 3}
        case 'KEY_4_PRESSED':
            return {...state, number: 4}
        case 'KEY_5_PRESSED':
            return {...state, number: 5}
        case 'KEY_6_PRESSED':
            return {...state, number: 6}
        case 'KEY_7_PRESSED':
            return {...state, number: 7}
        case 'KEY_8_PRESSED':
            return {...state, number: 8}
        case 'KEY_9_PRESSED':
            return {...state, number: 1}
        case 'KEY_0_PRESSED':
            return {...state, number: 0}
        default:
            return state
    }
}