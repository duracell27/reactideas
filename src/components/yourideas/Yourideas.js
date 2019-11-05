import React from 'react';
import Allidea from '../main/allIdeas/AllIdeas'

class Yourideas extends React.Component {
  render(){
    return (
        <section className="all-ideas">
            <h1 className="your-ideas">Ваші ідеї</h1>
                <div className="wrap">
            <Allidea />
            </div>
        </section>
    );
  }
}

export default Yourideas;
