import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import ButtonContainer from './buttonContainer'
import {add, changeDescription, clear, VisibilityFilters} from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        const {add, search, description, clear} = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render(){
        const {add, search, description} = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                            onChange={this.props.changeDescription}
                            onKeyUp={this.keyHandler}
                            value={this.props.description}></input>
                </Grid>
            
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={this.props.add}></IconButton>
            
                    <IconButton style='default' icon='close'
                        onClick={this.props.clear}></IconButton>
                </Grid>

                <Grid cols='12 3 5'>
                    <ButtonContainer className='filter-area' style='primary' filter={VisibilityFilters.SHOW_ALL}>Todas</ButtonContainer>
                    <ButtonContainer className='filter-area' style='primary' filter={VisibilityFilters.SHOW_PENDING}>Pendentes</ButtonContainer>
                    <ButtonContainer className='filter-area' style='primary' filter={VisibilityFilters.SHOW_DONE}>Realizadas</ButtonContainer>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({add, changeDescription, clear, VisibilityFilters}, dispatch)
 
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)