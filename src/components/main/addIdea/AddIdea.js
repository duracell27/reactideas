import React from 'react';


class Addidea extends React.Component {
  render(){
    return (
        <div className="add-idea">
            <div className="idea-text">
                <h1>Додай свою ідею</h1>
            </div>
            <div className="idea-form">
                    <form action="index.html">
                        <input type="text" placeholder="Назва ідеї"/>
                        <textarea name="description" id="description" cols="30" rows="10"
                            placeholder="Опис ідеї"></textarea>
                        <button>Запропонувати</button>
                    </form>
                
                </div>
        </div>
    );
  }
}

export default Addidea;