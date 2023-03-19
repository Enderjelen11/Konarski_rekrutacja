import React from 'react'
import { JsxElement } from 'typescript'

export default function Section(props : {header:string,children:JSX.Element|JSX.Element[]}){
    return (
        //@ts-ignore
        <div class="full_page_slide">
            <div id='section'>
                <h2>{props.header}</h2>
                {props.children}		
            </div>
        </div>
    )
 }
