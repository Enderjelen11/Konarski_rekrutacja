import React from 'react'
import { JsxElement } from 'typescript'

export default function Section(props : {header:string,image:string,children:JSX.Element|JSX.Element[]}){
    return (
        <div className="full_page_slide">
            <div id='section'>
                <div className='slide_text'>
                    <h2>{props.header}</h2>
                    {props.children}
                </div>
                <div className='img_container'>
                    <div className="slide_image" style={{backgroundImage:`url(${props.image})`}}>
                    </div>
                </div>
            </div>
        </div>
    )
 }
