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
                        <h2>Далеко-далеко за словесными горами в стране.</h2>
                        <p>Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Семь
                            запятых оксмокс обеспечивает все она грамматики, вопроса себя рекламных составитель коварный
                            его даже большой от всех? Обеспечивает, рот толку. Ему?</p>
                        <p className="author" >Автор: <span>{this.props.author}</span></p>
                        <div className="likes">
                            <div className={classesLike.join(' ')}><i className="fas fa-thumbs-up"></i>(6)</div>
                            <div className={classesDisLike.join(' ')}><i className="fas fa-thumbs-down"></i>(2)</div>
                        </div>
                    </div>
    );
  }
}

export default Card;