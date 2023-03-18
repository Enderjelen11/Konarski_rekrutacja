import React from 'react'
import Section from './section'

type dataEl = {title:string,text:string|string[]};

export const SectionList = (props : {data:dataEl[]}) => {
    function ListIfArray(props:{input:string|string[]}){
        if(Array.isArray(props.input)){
            //@ts-ignore
            const list = props.input.map((element:string[])=>{
                return(
                    <li>{element}</li>
                )
            })
            return <ul>{list}</ul>
        }else{
           return(<p>{props.input}</p>) 
        }
    }
    return (
       <React.Fragment> 
            {props.data.map((element:dataEl)=>{
                return(
                    <Section header={element.title}>
                        <ListIfArray input={element.text} />
                    </Section>
                    );
                })
            }
        </React.Fragment>
    )
}
