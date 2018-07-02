import React from 'react';
import '../App.css';

const detailsList = (props) =>{    
    return (             
            <div className="item">
                <i className="large github middle aligned icon"></i>
                <div className="content">
                    <a className="header">{props.header}</a>
                    <div className="description">{props.desc}</div>
                </div>
            </div>      
    )
}

export default detailsList;