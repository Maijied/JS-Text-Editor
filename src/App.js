import React, { Component } from 'react';
import './App.css';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class App extends Component {

  constructor(props) {
    super(props);

    

    //Customize toolbar
    this.readOnly = false;
    this.toolbar = {
      blockType: {
        inDropdown: false
      },
      colorPicker: {
        colors: ['rgb(0,0,0)', 'rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)', 'rgb(255,255,255)']
      }
    }
  }


 

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>পিপীলিকা টেক্সট এডিটর</h4>
        </div>
        <div className="container">
         
         <div className="card-panel">
          <Editor
            placeholder="এখানে লিখুন... "
            toolbar={this.toolbar}
            readOnly={this.readOnly}
            spellCheck={!this.readOnly} />
          </div>
          

         
          
        </div>
        <button type="button">Get Text</button>
      </div>

    );

  }
}

export default App;
