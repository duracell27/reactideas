import React from 'react';
import Addidea from './addIdea/AddIdea';
import Allideas from '../../containers/allideas';

class Main extends React.Component {
  render(){
    return (
        <section className="main">
            <Addidea />
            <Allideas />
        </section>
    );
  }
}

export default Main;
