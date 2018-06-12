import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Grid from '../template/grid'
import {addNum, clear, equal, back, convertSign, delItemMemory} from './calculatorActions'

const Calculator = (props) => {
    const btns = props.btns || []
    const operations = props.operations || []

    return(
    <div className='container'>
        <div className='row text-center'>
            <h2 className='title-page'>MemoCalc3</h2>
        </div>
        <div className='box-calculator'>
            <div className='row'>
                <Grid cols='12 9 7'>
                    <input type="text" className="calc-area" value={props.calculator.number} readOnly={true}/>
                </Grid>
                <Grid cols='12 9 5'>
                    <h3>Memória</h3>
                    {operations.map((item,key) => {
                        return (
                            <div key={key}>
                                <b>{item}</b>
                                <i className={'fa fa-trash-o btnDelete'} onClick={props.delItemMemory}></i>
                            </div>
                        )
                    })}

                </Grid>
            </div>
            <div className='row'>
                <Grid cols='12 9 7'>
                    {btns.map((item, key) => {
                        if(item == "C"){
                            return(
                                <span className='calc-button clear-button' key={key} onClick={props.clear}>{item}</span>
                            )
                        } else if(item == "±"){
                            return(
                                <span className='calc-button' key={key} onClick={() => props.convertSign(props.calculator.number)}>{item}</span>
                            )
                        } else if(item == "Back"){
                            return (
                                <span className='calc-button' key={key} onClick={() => props.back(props.calculator.number)}>{item}</span>
                            )
                        } else if(item == "="){
                            return (
                                <span className='calc-button' key={key} onClick={() => props.equal(props.calculator.number)}>{item}</span>
                            )
                        } else {
                            return (
                                <span className='calc-button' key={key} onClick={() => props.addNum(item)}>{item}</span>
                            )
                        }
                    })}
                </Grid>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = state => ({calculator: state.calculator, btns: state.calculator.btns, operations: state.calculator.operations})
const mapDispatchToProps = dispatch => bindActionCreators({addNum, clear, equal, back, convertSign, delItemMemory}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Calculator)