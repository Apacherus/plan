/**
 * Created by ozver on 09.04.2016.
 */
import React from 'react'

export default class ButtonTool extends React.Component {

    render(){
        return (
            <div className="Button_ToolItem" onClick={this.props.onClick}>
                {this.props.children}
            </div>
        )
    }

}