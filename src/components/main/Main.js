import React from 'react';
import Addidea from './addIdea/AddIdea'
import Allidea from './allIdeas/AllIdeas'

class Main extends React.Component {
  render(){
    return (
        <section className="main">
            <Addidea />
            <Allidea />
        </section>
    );
  }
}

export default Main;
