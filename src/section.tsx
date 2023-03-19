import React from 'react'
import { JsxElement } from 'typescript'

export default function Section(props : {header:string,children:JSX.Element|JSX.Element[]}){
    return (
        <div className="full_page_slide">
            <div id='section'>
                <h2>{props.header}</h2>
                {props.children}		
            </div>
        </div>
    )
 }
