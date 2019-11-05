import React from 'react';
import Card from './card/Card'

class Allidea extends React.Component {

  render(){
    
    return (
        <div className="all-ideas">
                <div className="wrap">
                    <Card liked={true} disliked={false} author='Катя'/>
                    <Card liked={false} disliked={true} author='Роман'/>
                    <Card liked={false} disliked={false} author='Коля'/>
                </div>
            </div>
    );
  }
}

export default Allidea;