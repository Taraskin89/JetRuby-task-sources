import React from 'react';
import PropTypes from 'prop-types';

import Board from './board';

export default class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            colors:[],
            firstCol: '',
            isSameCol: false,
            round: 1,
            score: 0
        }
    }

    handleTileClick(e){
        let len = document.querySelectorAll('.tile').length;

        if(!e.target.classList.contains('clicked')) {

            if (isSc) {
                currentElem = e.target;
                fcol = e.target.getAttribute('data-color'); //window.addEventListener ? e.target.attributes[e.target.attributes.length-1].value: e.target.attributes[0].value ;
                e.target.className += ' clicked';
                currentElem.style.backgroundColor = fcol;
            }

            else {
                if (e.target.getAttribute('data-color') == fcol) {
                    e.target.style.backgroundColor = fcol;
                    e.target.className += ' clicked';
                    this.setState({
                        score: ++this.state.score
                    })

                    if(this.state.score==len/2) {
                        this.setState({
                            score: 0,
                            round: 1
                        })
                        alert("Congratulations!!! You won!");
                    }
                }
                else {
                    currentElem.style.backgroundColor = "white";
                    currentElem.className = 'tile';
                    e.target.className = 'tile';
                    this.setState({
                        round: ++this.state.round
                    })
                }
            }
            isSc = !isSc;
        } else alert("Please choose another tile!");
    }

    render(){

        return(
            <div className="board">
                <Board onClickTile = { this.handleTileClick.bind(this) }
                       roundsCount={ this.state.round } score={this.state.score}/>
            </div>
        );
    }
}
App.contextTypes = {
    sizeBoard: PropTypes.string
};
let currentElem;
let fcol = '';
let isSc = true;