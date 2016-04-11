/**
 * Created by ozver on 09.04.2016.
 */
export const TYPE = {
    LAYER_ADD : 'LAYER_ADD',
    LAYER_SELECT : 'LAYER_SELECT'
};

export const actionsStage = {

    layerAdd: layer => ({
        type: TYPE.LAYER_ADD,
        layer
    }),
    
    layerSelect: layer => ({
        type: TYPE.LAYER_SELECT,
        layer
    })
    
};

export default (_state = {
    layers: [],
    layerSelected: null
}, action) => {
    let state = {..._state};
    switch(action.type){

        default: return _state;

        case TYPE.LAYER_ADD:{
            state.layers.push(action.layer);
            return state;
        }
            
        case TYPE.LAYER_SELECT:{
            state.layerSelected = action.layer;
            return state;
        }    
    }
}