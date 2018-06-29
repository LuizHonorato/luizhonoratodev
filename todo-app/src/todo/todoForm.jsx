import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/grid'
import ButtonContainer from './buttonContainer'
import {add, VisibilityFilters} from './todoActions'

const AddTodo = ({dispatch}) => {
    
        let input
        return (
            <div role='form' className='todoForm'>
                <form onSubmit={e => {
                    e.preventDefault()
                    if(!input.value.trim()) {
                        return
                    }
                    dispatch(add(input.value))
                    input.value = ''
                }}>
                <Grid cols='12 9 10'>
                    <input ref={node => input = node} className='form-control'
                        placeholder='Adicione uma tarefa'></input>
                </Grid>
            
                <Grid cols='12 3 2'>
                    <button type='submit' className='btn btn-primary'><i className='fa fa-plus'></i></button>
                </Grid>
                </form>
                <Grid cols='12 3 5'>
                    <div className='filter-area'>
                        <ButtonContainer style='primary' filter={VisibilityFilters.SHOW_ALL}>Todas</ButtonContainer>
                        <ButtonContainer style='primary' filter={VisibilityFilters.SHOW_PENDING}>Pendentes</ButtonContainer>
                        <ButtonContainer style='primary' filter={VisibilityFilters.SHOW_DONE}>Realizadas</ButtonContainer>
                    </div>
                </Grid>
            </div>
        )
}

 
export default connect()(AddTodo)