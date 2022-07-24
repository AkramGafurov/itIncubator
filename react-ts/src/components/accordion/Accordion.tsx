import React from "react";

type AccordionPropsType = {
    accordionTitle: string
    collapsed: boolean
}


function Accordion(props: AccordionPropsType) {
        if(props.collapsed === false){
            return ( <div>
                <AccordionTitle title={props.accordionTitle}/>
                <AccordionBody/>
            </div>)
        }
        return (
            <AccordionTitle title={props.accordionTitle}/>
        )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion