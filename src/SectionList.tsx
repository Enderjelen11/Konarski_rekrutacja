import React from 'react'
import Section from './section'

type dataEl = {title:string,text:string|string[]};

export const SectionList = (props : {data:dataEl[]}) => {
    function ListIfArray(props:{input:string|string[]}){
        if(Array.isArray(props.input)){
            //@ts-ignore
            const list = props.input.map((element:string[],i:number)=>{
                const key = `li${i}`;
                return(
                    <li key={key}>{element}</li>
                )
            })
            return <ul>{list}</ul>
        }else{
           return(<p id='slide_discrpion'>{props.input}</p>) 
        }
    }
    return (
       <> 
            {props.data.map((element:dataEl, i:number)=>{
                const key = `sec${i}`;
                return(
                    <Section header={element.title} key={key}>
                        <ListIfArray input={element.text} />
                    </Section>
                    );
                })
            }

        </>
    )
}
