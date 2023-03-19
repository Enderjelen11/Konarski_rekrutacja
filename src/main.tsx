import React from 'react'
import ReactDOM from 'react-dom/client'
import { SectionList } from './SectionList'
import input from './input.json'
import './style.css'

function chunks(array:any[],chunkSize:number){
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
}
    return result;
}

const contents = chunks(input,2).map(e=>{
    const text = e[0][e[0].length-1]==':'?e[1].replace(/[#\s]/g,'').split(','):e[1];
    return {
        title:e[0],
        text
    }
})

function render(){
    const D = new Date;
    
    function ConditionalRender(){
        if(D.getHours()==21&&D.getMinutes()==37){
            let src = "https://jp2w.pl/files/s/119/201398/Edytor/File/mp3/Habemus_Papam.mp3"
            //@ts-ignore
            document.getElementById('main').addEventListener('click',()=>{
                new Audio(src).play();
            })
            return <img id="papaj"></img>;
        }else{
            return <SectionList data={contents} />;
        }
    }

    ReactDOM.createRoot(document.getElementById('main') as HTMLElement).render(
        <React.StrictMode>
            <ConditionalRender />
        </React.StrictMode>,
    )
}

render();
