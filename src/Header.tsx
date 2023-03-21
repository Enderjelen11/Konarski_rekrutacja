import React from 'react'

export const Header = (props : {children:string,discription:string}) => {
    return (
        <div>
            <header id="header">
                <h1>{props.children}</h1>
                <h3>{props.discription}</h3>
                <div className="bounce-1">
                    <img id="arrow" src="arrow.svg"/>
                </div>
            </header>
        </div>
    )
}
