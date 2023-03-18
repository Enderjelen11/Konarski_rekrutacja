import React from 'react'
import { JsxElement } from 'typescript'
import './section.css'

export default function Section(props : {header:string,children:JSX.Element|JSX.Element[]}){
    return (
        <div id='section'>
			<h2>{props.header}</h2>
			{props.children}		
        </div>
    )
 }
