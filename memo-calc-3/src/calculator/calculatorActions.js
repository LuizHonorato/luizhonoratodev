export function key1(event) {
    return {
        type: 'KEY_1_PRESSED'
    }
}

export function key2(event) {
    return {
        type: 'KEY_2_PRESSED'
    }
}

export function key3(event) {
    return {
        type: 'KEY_3_PRESSED'
    }
}

export function key4(event) {
    return {
        type: 'KEY_4_PRESSED'
    }
}

export function key5(event) {
    return {
        type: 'KEY_5_PRESSED'
    }
}

export function key6(event) {
    return {
        type: 'KEY_6_PRESSED'
    }
}

export function key7(event) {
    return {
        type: 'KEY_7_PRESSED'
    }
}

export function key8(event) {
    return {
        type: 'KEY_8_PRESSED'
    }
}

export function key9(event) {
    return {
        type: 'KEY_9_PRESSED'
    }
}

export function key0(event) {
    return {
        type: 'KEY_0_PRESSED'
    }
}

export function changeDisplay() {
    
}

export function clear() {
    return [{type: 'DISPLAY_CLEAR'}, key0()]
}