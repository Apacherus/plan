/**
 * Created by ozver on 09.04.2016.
 */
import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionsStage} from '../reducers/stage'

import ButtonTool from './ButtonTool'

let mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...actionsStage
    }, dispatch);

let mapStateToProps = state => ({
    stage: state.stage
});

@connect(mapStateToProps, mapDispatchToProps)
export default class PanelTools extends React.Component {
    
    render(){
        return (
            <div className="panelTools">
                <ButtonTool onClick={()=>app.main.addLayer()}>Add Layer</ButtonTool>
                <ButtonTool onClick={()=>app.main.addCircle()}>Add Circle</ButtonTool>
            </div>
        );
    }
}