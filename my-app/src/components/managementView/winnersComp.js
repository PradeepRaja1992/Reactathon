import React,{Component } from 'react';

const WinnerMod =(props) =>{
    return(
        <div class="ui card">
            <div class="image">               
            </div>
            <div class="content">
                <a class="header">{props.team}</a>
                <div class="meta">
                <span class="date">Joined in 2013</span>
                </div>
                <div class="description">
                    Kristy is an art director living in New York.
                </div>
            </div>
            <div class="extra content">
                <a>
                    <i class="gift icon"></i>
                    {props.place}
                </a>
            </div>
        </div>     
    )
}


export default WinnerMod;