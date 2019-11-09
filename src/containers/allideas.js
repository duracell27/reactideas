import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Card from '../components/main/allIdeas/card/Card';

class AllIdeas extends Component {
    showCards() {
        return this.props.ideas.map((idea) => {
            return(
                <Card 
                key={idea.id} 
                name={idea.name} 
                description={idea.description}
                like={idea.like} 
                dislike={idea.dislike}  
                liked={idea.liked} 
                disliked={idea.disliked} 
                author={idea.author}/>
            );
        });
    }
    render(){
        return(
            <div className="all-ideas">
                <div className="wrap">
                    {this.showCards()}
                    {/* <Card liked={true} disliked={false} author='Катя'/>
                    <Card liked={false} disliked={true} author='Роман'/>
                    <Card liked={false} disliked={false} author='Коля'/> */}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        ideas: state.idea
    }       
}

export default connect(mapStateToProps)(AllIdeas);