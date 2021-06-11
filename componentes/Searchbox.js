import React from 'react'

class SearchBox extends React.Component{
    render(){    // render é uma função nescessária dentro da class
        return (   //toda renderização retorna algo
            <div className='caixa-procura'>
                
                <input type='text' className='caixa-procura__input'
                placeholder={this.props.placeholder}
                onChange={this.props.funcaoBuscar} 
                />
                
            </div>
        );
    }

}

export default SearchBox;