import React from 'react'
import { Link } from 'react-router-dom'

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            personagem: {}
        }
    }
    render(){
        const { isLoaded, personagem } = this.state

        if(!isLoaded){
            return(
                <div className='card'>
                    Carregando...
                </div>
            );

        }else {

        return(
            <Link to={`/sobre/${personagem.id}`}>
                
                <div className='card'>
                    <img src={personagem.image} alt={personagem.name}/>
                    <div className='card-info'>
                        <p className='card-info__id'>{personagem.name}</p>
                        <h5>{personagem.status}</h5>
                        <h5>{personagem.species}</h5>
                        
                    </div>
                </div>
      
            </Link>
       

        );
        }
    }  
    
    componentDidMount(){
        console.log(this.props.key)
        fetch('https://rickandmortyapi.com/api/character/' + this.props.personagem.id)
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            this.setState({
                isLoaded:true,
                personagem: resultadoJson

            }); 
       
        })
    }

    
    
}

export default Card;