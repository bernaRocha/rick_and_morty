import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './componentes/App.scss';
import Cardlist from './componentes/Cardlist';
import Info from './componentes/Info';
import React from 'react';



class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="app">
       <BrowserRouter>
          <Switch>
            <Route path='/' exact={true} component={Cardlist} />
            <Route path='/sobre/:id' component={Info} /> 
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
