import React from 'react';

import Art from './elements/Art';
import Code from './elements/Code';

import './Januar.css';

const pages = [<Art/>, <Code />];

class Januar extends React.Component   
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            page:0,
            max:1
        };
    }

    NextPage = () =>   
    {
        if(this.state.page < this.state.max) this.setState({page: this.state.page + 1});
    }

    PreviousPage = () =>   
    {
        if(this.state.page > 0) this.setState({page: this.state.page - 1});
    }

    render()   
    {
    return(
        <>
            <img className="title" src="januar.gif" alt="Januar" height="100px"></img>
            <img src="dogsrun.GIF" alt="Løpende hunder"
            style={{
                position: "fixed",
                marginTop: "90vh",
                marginLeft: "-20vh"
            }}
            ></img>
            <img src="clubpenguin.gif" alt="Club penguin dans"
            style={{
                position: "fixed",
                marginTop: "85vh",
                marginLeft: "115vh",
                width: "10%"
            }}
            ></img>
            <div className="something">
            <button id="right-button" className='page-button' onClick={this.NextPage}>&#62;</button>
            <button id="left-button" className='page-button' onClick={this.PreviousPage}>&#60;</button>
                <h3>I et nøtteskall</h3>
                <p>Jobb - ?</p>
                {pages[this.state.page]}
            </div>
            
        </>
    );
    }
}

export default Januar;