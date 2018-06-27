import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import IconButton from '../template/iconButton'
import {markAsDone, markAsPending, remove} from './todoActions'

const TodoList = props => {

    const renderRows = () => {
        const filter = props.filter || []
        return filter.map((todo,index) => (
            <tr key={index}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(index)}></IconButton>

                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPending(index)}></IconButton>

                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.remove(index)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({filter: state.todo.filter})
const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPending, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)