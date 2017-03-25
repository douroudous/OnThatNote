import React from 'react';
import Note from './Note';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      notes: []
    };

  }

  componentWillMount() {
    fetch(`/api/v1/notes.json`,
      { method: 'get',
        credentials: 'include'
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} ($response.statusText)`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ notes: body.notes});
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render() {
    let notes = this.state.notes.map(note => {
      return(
        <div>
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
          />
        </div>
      )
    })

    return(
      <div className="animated fadeIn">
        {notes}
      </div>
    );
  }
}

export default App;
