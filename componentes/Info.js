import { Link } from 'react-router-dom';
import React from 'react'

class Info extends React.Component{
    constructor(props){
        super(props);
        this.id = parseInt(props.match.params.id);

        this.state = {
            isLoaded: false,
            personagem: {}
        }
    }

    criarListaPersonagens() {
        return this.state.personagem.types.map((type) => {
            return <span className='type' key={type}>
                        {type}
                    </span>
        });
    }

    render(){
        const personagem = this.state.personagem;
        return(
            <section className='card-info'>
                
                <img src={personagem.image}></img>
                
    
                <div className='card-info__body'>
    
                    <h1><strong>{personagem.name}</strong></h1>
                    <p>{personagem.status}</p>
                    <p>{personagem.species}</p>
                    
    
                    <button><Link to='/'>Voltar</Link></button> 
    
                </div>
     
            </section>
        );
    } 
    componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/character/${this.id}`)
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            this.setState({
                isLoaded: true,
                personagem: resultadoJson
            });
        });
    }
    }

export default Info;