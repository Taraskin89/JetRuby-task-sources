import React from 'react';
import PropTypes from 'prop-types';

import { just } from '../utils/just.RandomColor';

import Tile from './tile';

export default class Board extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            size:'4',
            colors:[]
        }
    }

    getChildContext() {
        return { sizeBoard: "fdgh" };
    }

    handleInputChange(e){
        this.setState({
            size: e.target.value
        });
        this.createColorsArr(e.target.value);
    }
    componentWillMount(){
        this.getChildContext();
    }

    componentDidMount(){
        this.createColorsArr(this.state.size);
    }

    createColorsArr(s){
        const colorsArr = [];
        const size = Math.pow(Number(s),2)/4;

        for(let i = 0; i < size; i++){
            // let r=Math.floor(Math.random() * (256));
            // let g=Math.floor(Math.random() * (256));
            // let b=Math.floor(Math.random() * (256));
            // let c='#' + r.toString(16) + g.toString(16) + b.toString(16);
            const r_col = "#"+((1<<24)*Math.random()|0).toString(16);

            let color = new just.RandomColor();

            for(let j = 0; j < 2; j++){
                if(r_col!='#ffffff'){
                    colorsArr.push(color.toRGB().toCSS());
                }
            }
        }
        this.setState({
            colors: colorsArr
        });
    }



    render(){
        const countTile = this.state.size;
        const sizeTile = 400/this.state.size;
        const revArrCol = this.state.colors;
        console.log( this.state.colors);
        console.log(revArrCol.reverse());
        return(
            <div id="wrap">

                <div>
                    Set Board size: <span>  </span>
                    <input type="text" className="size" value={this.state.size}
                           onChange={ ::this.handleInputChange }/>
                    <span> x </span>{ this.state.size }
                </div>
                <h3>Board</h3>
                <h4>Round: { this.props.roundsCount }</h4>
                {
                    countTile % 2 == 0 ?
                    <div id="board" style={{width: 420 + 'px', height: 408 + 'px'}}>
                        {
                            this.state.colors.map((color, idx)=>{
                                return <Tile key={idx} bgColor={ color } tileSize ={ sizeTile }
                                             onTileClick = { this.props.onClickTile }/>
                            })
                        }
                        {
                            revArrCol.reverse().map((color, idx)=>{
                                return <Tile key={idx} bgColor={ color } tileSize ={ sizeTile }
                                             onTileClick = { this.props.onClickTile }/>
                            })
                        }
                    </div> : <h3> Please select a dual value </h3>
                }
            </div>
        );
    }
}

Board.childContextTypes = {
    sizeBoard: PropTypes.string
};

// e.target.getAttribute('data-color') {/*this.state.size % 2 == 0 ?*/} {/*</div> : <h3> Please select a dual value </h3>*/}