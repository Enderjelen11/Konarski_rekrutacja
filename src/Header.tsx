import React from 'react'

export const Header = (props : {children:string,discription:string,image:string}) => {
    return (
        <div id="header">
            <div id="header_media">
                <div className='header_image'>
                <img src={props.image} />
                </div>
            </div>
            <div className='header_text'>
                <h1>{props.children}</h1>
                <h3>{props.discription}</h3>
            </div>
            <div className="bounce-1">
                <img id="arrow" src="arrow.svg"/>
            </div>
        </div>
    )
}
