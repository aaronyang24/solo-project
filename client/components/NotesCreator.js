import React, {Component} from 'react';
import Notes from './Notes';
import fetch from 'isomorphic-fetch';

class NotesCreator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      currentNote: {
        text:'',
        key:''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }
  
  // componentDidMount() {
  //   if(this.state.currentNote.text === ''){
  //   fetch('/api')
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  //   }
  // }

  handleChange(event) {
    this.setState({
      currentNote: {
        text: event.target.value,
        key: Date.now()
      }
    })
  }

  addNote(event) {
    event.preventDefault();
    const newNote = this.state.currentNote;
    if (newNote.text !== '') {
      const newNotes = [...this.state.notes, newNote];
      this.setState({
        notes: newNotes,
        currentNote: {
          text:''
        }
      })
    }
  }

  deleteNote(key) {
    const filteredNotes = this.state.notes.filter(note => note.key !== key)
      this.setState({
        notes: filteredNotes
      })
  }

  render(){
    return (
    <div>
      <label>Create New Note: </label>
      <br />
      <div className='input'>
      <form onSubmit={this.addNote}>
        <input 
          type='text' 
          value={this.state.currentNote.text} 
          onChange={this.handleChange}>
        </input>
        <button 
          className='button' 
          type='submit' 
        >Add Note</button>
        <div>
        </div>
      </form>
      </div>
      <div>
        <Notes notes={this.state.notes} deleteNote={this.deleteNote}></Notes>
      </div>
    </div>
    )
  }
}

export default NotesCreator;