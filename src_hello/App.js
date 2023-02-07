import React,{Component} from 'react'

import Hello from './component/Hello/Hello'

import Welcom from './component/Welcom/Welcom'


export default class App extends Component{

    render(){
        return (
            <div>
                <Hello/>
                <Welcom/>
            </div>
        )
    }
}

