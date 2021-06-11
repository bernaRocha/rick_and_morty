import Card from './Card';
import React from 'react';
import SearchBox from './Searchbox'

class Cardlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            personagens: []
        }
    }

    criarCardsRickandMorty(){
            return this.state.personagens.map((personagem) =>{
            return <Card personagem={personagem} key={personagem.id} />
        }); 
        
    }

    buscarPersonagem(evento){
        const nomePersonagem = evento.target.value.toLowerCase();
        fetch(`https://rickandmortyapi.com/api/character/?name=${nomePersonagem}`)
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            this.setState({
                personagens: resultadoJson.results
            })
        })
        
    }

    render() {
        const isLoaded = this.state.isLoaded;

        if(!isLoaded){
            return(
                <div>
                    carregando...
                </div>
            )  
        } else {

             
            return(
                <div>
                    <SearchBox placeholder='Buscar personagem...' funcaoBuscar={(evento) => this.buscarPersonagem(evento)} />
                    <div className='card-list'>
                            {this.criarCardsRickandMorty()}
                    </div>
                </div>
            )
        }
    }
            
    componentDidMount(){
        
            // http get
            fetch('https://rickandmortyapi.com/api/character') 
            .then(resultado => resultado.json())
            .then(resultadoJson => {
                this.setState({
                    isLoaded: true,
                    loadedPersonagens: resultadoJson.results,
                    personagens: resultadoJson.results
                })
            })
        }
    }


export default Cardlist;