import React from 'react';
import Note from './Note';
import NewNote from './NewNote';


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

  handleSubmitNew(event) {
    alert(` was created`);
    debugger;
    let data = {
        note: "event something"
    };
    let songData = JSON.stringify(data);

    // fetch(`/api/v1/artists/${this.props.noteId}/songs.json`,
    //   { method: 'post',
    //     body: songData,
    //     credentials: 'include'
    //   })
    //   .then(response => {
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       let errorMessage = `${response.status} ($response.statusText)`,
    //         error = new Error(errorMessage);
    //         throw(error);
    //     }
    //   })
    //   .then(data => {
    //   })
    // .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let notes = this.state.notes.map(note => {
      return(
        <div className="small-4 columns">
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
      <div className="animated fadeIn centered">
        <NewNote
          handleSubmitNew={this.handleSubmitNew}
        />
        <div className="row container">
          {notes}
        </div>
      </div>
    );
  }
}

export default App;
