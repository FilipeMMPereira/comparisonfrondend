import React from 'react'
import BaseTemplate from './BaseTemplate'

function ConfigTemplate(props){
    const template=true
    return(
        template?<BaseTemplate>{props.children}</BaseTemplate>:props.children
    )
}

export default ConfigTemplate