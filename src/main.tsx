import React from 'react'
import ReactDOM from 'react-dom/client'
import { SectionList } from './SectionList'
import input from './input.json'
import { Header } from './Header'

function chunks(array:any[],chunkSize:number){
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
}
    return result;
}

function parseContents(data:string[]):{title:string,text:string,imageSrc:string}[]{
    return chunks(data,3).map(e=>{
        const text = e[0][e[0].length-1]==':'?e[1].replace(/[#\s]/g,'').split(','):e[1];
        return {
            title:e[0],
            text,
            imageSrc:e[2]
        }
    })
}

function render(contents:{title:string,text:string,imageSrc:string}[]){
    const D = new Date;

    document.title = `${contents[0].title} w Konarze`; 

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        //@ts-ignore
        link.rel = 'icon';
        document.head.appendChild(link);
        //@ts-ignore
        link.type='image/png';
        //@ts-ignore
        link.href = contents[0].imageSrc;
    }
        
    function ConditionalRender(){
        if(D.getHours()==21&&D.getMinutes()==37){
            let src = "https://jp2w.pl/files/s/119/201398/Edytor/File/mp3/Habemus_Papam.mp3"
            //@ts-ignore
            document.getElementById('main').addEventListener('click',()=>{
                new Audio(src).play();
            })
            return <img id="papaj"></img>;
        }else{
            return <SectionList data={contents.slice(1)} />;
        }
    }

    ReactDOM.createRoot(document.getElementById('main') as HTMLElement).render(
        <React.StrictMode>
            <Header discription={contents[0].text} image={contents[0].imageSrc}>{contents[0].title}</Header>
            <ConditionalRender />
        </React.StrictMode>,
    )
}

function parseQueryStr(string:string){
    const arr = string.slice(1).split('&')
    return arr
}

(()=>{
    try{
        const profile = parseQueryStr(location.search)[0];
        console.log(profile);
        const data = input.filter(e=>e[0]==profile)[0];
        render(parseContents(data));
    }catch(e){
        console.error('no profile with this name');
        ReactDOM.createRoot(document.getElementById('main') as HTMLElement).render(
            <React.StrictMode>
                <p id='section'>nie ma pronie ma profilu o takiej nazwie</p>
            </React.StrictMode>
    )
    }
})()
