import React from 'react'
import {connect} from 'react-redux'

import IconButton from '../template/iconButton'
import {markAsDone, markAsPending, remove, VisibilityFilters} from './todoActions'

const TodoList = ({todos, markAsDone, markAsPending, remove, dispatch, visibilityFilter}) => {

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo,index) => (
                    <tr key={index}>
                    <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                    <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => markAsDone(index)}></IconButton>

                    <IconButton style='warning' icon='undo' hide={!todo.done} 
                        onClick={() => markAsPending(index)}></IconButton>

                    <IconButton style='danger' icon='trash-o' hide={!todo.done} active={visibilityFilter == VisibilityFilters.SHOW_DONE}
                        onClick={() => remove(index)}></IconButton>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({visibilityFilter: state.visibilityFilter})

export default connect(mapStateToProps, null)(TodoList)