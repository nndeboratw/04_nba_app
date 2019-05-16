import React from 'react';
import CardTemplate from './Card'

const ListTemplates = (props) => {
    
    let template = null;
    switch (props.type) {
        case 'card':
            template = props.items.map((item,i) => (
                <div key = {i}>
                    <CardTemplate item={item}/>
                </div>
            ))
            break;
    
        default:
        template = null;
            break;
    }
    return (
        <div>
            {template}
        </div>
    )
  
}

export default ListTemplates;