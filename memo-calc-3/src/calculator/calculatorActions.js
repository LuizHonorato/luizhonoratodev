export const addNum = (text) => {
    return { type: 'NUMBER_ADDED',
             payload: text
    }
}

export const clear = () => {
    return { type: 'DISPLAY_CLEAR'}
}

export const back = (number) => {
    return { type: 'BACK_PRESSED',
             payload: number
    }
}

export const convertSign = (number) => {
    return { type: 'SIGN_CONVERTED',
             payload: number
    }
}

export const equal = (number) => {
    return { type: 'IS_EQUAL',
             payload: number 
    }
}