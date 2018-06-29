import React from 'react'
import {connect} from 'react-redux'
import If from './if'

const IconButton = props => {
    return (
        <If test={!props.hide }>
            <button type={props.type} className={'btn btn-' + props.style}
                onClick={props.onClick} disabled={props.active}>{props.children}
                <i className={'fa fa-'+ props.icon}></i>
            </button>
        </If>
    )
}

export default IconButton