import React, {Component} from 'react';
import NotesCreator from './NotesCreator';

class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    return (
    <div className='container'>
      <h1 id='header'>Daily Post-It Notes</h1>
      <h6>(Do not forget!)</h6>
      <NotesCreator/>
    </div>
    )
  }
}

export default MainContainer;