/**
 * Created by ozver on 09.04.2016.
 */
import React from 'react'

export default class LayerItem extends React.Component {

    constructor(){
        super();
        this.state = {
            isVisible: true
        };
    }

    hide(){
        this.props.layer.hide();
        this.setState({isVisible: false});
    }

    show(){
        this.props.layer.show();
        this.setState({isVisible: true});
    }

    visiblityToggle(e){
        if(this.state.isVisible){
            this.hide();
        } else {
            this.show();
        }
    }
    
    render(){
        let isLayerSelected = '';
        if(this.props.selected == this.props.layer.attrs.id){
            isLayerSelected = ' LayerItem_Selected';
        }
        return (
            <div
                className={`panelLayers_LayerItem${isLayerSelected}`}
            >
                <input
                    type="checkbox"
                    defaultChecked={this.state.isVisible?'1':''}
                    onChange={(e)=>this.visiblityToggle(e)}/>
                <div onClick={this.props.onSelect.bind(this, this.props.layer.attrs.id)}>
                    {this.props.layer.attrs.id}
                </div>
            </div>
        );
    }
    
}