import React from 'react';


class Card extends React.Component {
  render(){
    let classesLike = ['like'];
    if(this.props.liked) {
        classesLike.push('liked');
    }
    let classesDisLike = ['dislike'];
    if(this.props.disliked) {
        classesDisLike.push('disliked');
    }
    return (
        <div className="idea-card">
                        <h2>{this.props.name}</h2>
                        <p>{this.props.description}</p>
                        <p className="author" >Автор: <span>{this.props.author}</span></p>
                        <div className="likes">
                            <div className={classesLike.join(' ')}><i className="fas fa-thumbs-up"></i>({this.props.like})</div>
                            <div className={classesDisLike.join(' ')}><i className="fas fa-thumbs-down"></i>({this.props.dislike})</div>
                        </div>
                    </div>
    );
  }
}

export default Card;