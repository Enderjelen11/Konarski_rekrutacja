import React from 'react'
import ReactDOM from 'react-dom/client'
import { SectionList } from './SectionList'
import input from './input.json'

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


ReactDOM.createRoot(document.getElementById('main') as HTMLElement).render(
  <React.StrictMode>
        <SectionList data={contents} />
  </React.StrictMode>,
)
