import React from 'react'
import {connect} from 'react-redux'

import IconButton from '../template/iconButton'
import {edit, markAsDone, markAsPending, remove, VisibilityFilters} from './todoActions'

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
                {todos.map((todo) => (
                    <tr key={todo.id}>
                    <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                    <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => markAsDone(todo.id)}></IconButton>

                    <IconButton style='warning' icon='undo' hide={!todo.done} 
                        onClick={() => markAsPending(todo.id)}></IconButton>

                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => remove(todo.id)}></IconButton>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({visibilityFilter: state.visibilityFilter})

export default connect(mapStateToProps, null)(TodoList)