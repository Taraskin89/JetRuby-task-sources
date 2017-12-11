import React from 'react';

export default class Tile extends React.Component{

    render(){
        return(
            <div data-color = { this.props.bgColor }
                 style={{ width: this.props.tileSize, height:this.props.tileSize }}
                 className='tile' onClick={ this.props.onTileClick }>
            </div>
        );
    }
}