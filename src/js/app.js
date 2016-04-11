/**
 * Created by ozver on 09.04.2016.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


import Store from './store'

import Stage from './components/Stage'
import PanelLayers from './components/PanelLayers'
import PanelTools from './components/PanelTools'

window.app = {};

ReactDOM.render(
    <Provider store={Store}>
        <div className="panelsWrapper">
            <PanelTools/>
            <Stage id="mainStage"/>
            <PanelLayers/>
        </div>
    </Provider>
    , document.getElementById('root_Wrapper'));