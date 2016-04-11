/**
 * Created by ozver on 09.04.2016.
 */
import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionsStage} from '../reducers/stage'

import LayerItem from './LayerItem'

let mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...actionsStage
    }, dispatch);

let mapStateToProps = state => ({
    stage: state.stage
});

@connect(mapStateToProps, mapDispatchToProps)
export default class PanelLayers extends React.Component {
    
    onLayerSelect(layerId){
        this.props.layerSelect(layerId);
    }
    
    render(){
        return (
            <div className="panelLayers">
                {this.props.stage.layers.map((layer, key) => 
                    <LayerItem 
                        key={key} 
                        layer={layer}
                        selected={this.props.stage.layerSelected}
                        onSelect={(id)=>this.onLayerSelect(id)}
                    />)}
            </div>
        );
    }
}