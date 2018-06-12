import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Grid from '../template/grid'
import {key1, key2, key3, key4, key5, key6, key7, key8, key9, key0, clear, changeDisplay} from './calculatorActions'

const btns = ["±", "%", "Back", "C", "7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "/", "0", ".", "=", "*"]

const Calculator = (props) => (
    <div className='container'>
        <div className='row text-center'>
            <h2 className='title-page'>MemoCalc3</h2>
        </div>
        <div className='box-calculator'>
            <div className='row'>
                <Grid cols='12 9 7'>
                    <input type="text" className="calc-area" value={props.calculator.number} onChange={props.changeDisplay} />
                </Grid>
                <Grid cols='12 9 5'>
                    <p>Memória</p>
                </Grid>
            </div>
            <div className='row'>
                <Grid cols='12 9 7'>
                    <span className='calc-button'>±</span>
                    <span className='calc-button'>%</span>
                    <span className='calc-button'>Back</span>
                    <span className='calc-button clear-button' onClick={props.clear}>C</span>

                    <span className='calc-button' onClick={props.key7}>7</span>
                    <span className='calc-button' onClick={props.key8}>8</span>
                    <span className='calc-button' onClick={props.key9}>9</span>
                    <span className='calc-button'>+</span>

                    <span className='calc-button' onClick={props.key4}>4</span>
                    <span className='calc-button' onClick={props.key5}>5</span>
                    <span className='calc-button' onClick={props.key6}>6</span>
                    <span className='calc-button'>-</span>

                    <span className='calc-button' onClick={props.key1}>1</span>
                    <span className='calc-button' onClick={props.key2}>2</span>
                    <span className='calc-button' onClick={props.key3}>3</span>
                    <span className='calc-button'>/</span>

                    <span className='calc-button' onClick={props.key0}>0</span>
                    <span className='calc-button'>.</span>
                    <span className='calc-button'>=</span>
                    <span className='calc-button'>*</span>
                </Grid>
            </div>
        </div>
    </div>
)

const mapStateToProps = state => ({calculator: state.calculator})
const mapDispatchToProps = dispatch => bindActionCreators({key1, key2, key3, key4, key5, key6, key7, key8, key9, key0, clear, changeDisplay}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Calculator)