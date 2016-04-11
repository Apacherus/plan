/**
 * Created by ozver on 09.04.2016.
 */
import React from 'react'
import Konva from 'konva'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionsStage} from '../reducers/stage'

let mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...actionsStage
    }, dispatch);

let mapStateToProps = state => ({ 
    stage: state.stage
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Stage extends React.Component {

    componentDidMount() {
        app.main = this;

        this.stage = new Konva.Stage({
            container: `${this.props.id}`,
            width: '500',
            height: '500'
        });
    }

    addLayer(){
        let layerId = `Layer_${this.props.stage.layers.length}`;
        let layer = new Konva.Layer({
            id: layerId
        });
        this.stage.add(layer);
        this.props.layerAdd(layer);
        var circle = new Konva.Circle({
            x: this.stage.getWidth() / 2,
            y: this.stage.getHeight() / 2,
            radius: 30,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4
        });
    }


    addCircle(){
        function rand() {
            return Math.floor(Math.random()*100);
        }
        var circle = new Konva.Circle({
            x: rand(),
            y: rand(),
            radius: rand(),
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
        });
        let layer = this.stage.find(`#${this.props.stage.layerSelected}`);
        if(layer){
            layer = layer[0];
            layer.add(circle);
            layer.draw();
        }
    }

    render() {
        return (
            <div className="stage" id={this.props.id}>
                test
            </div>
        );
    }

}