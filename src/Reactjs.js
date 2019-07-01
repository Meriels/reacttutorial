import React from 'react';
import Table from './Table';
import Form from './Form';

class Work extends React.Component {
    state = {
        myCharacters: [],
    };

    removeCharacter = index => {
        let {myCharacters} = this.state;
        this.setState({
            myCharacters: myCharacters.filter((character, i) => {
                return i !== index
            }),
        })
    };

    handleSubmit = character => {
        this.setState({myCharacters:[...this.state.myCharacters, character]})
    };

        render(){
            const {myCharacters} =this.state;
            return (
                <div className="container">
                <Table
                    characterData={myCharacters}
                    removeCharacter={this.removeCharacter}/>
                    <Form handleSubmit={this.handleSubmit}/>
            </div> )
        }
    }

export default Work