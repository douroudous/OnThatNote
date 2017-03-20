import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };

  }

  componentWillMount() {
      fetch(`/api/v1/notes/${this.props.noteId}.json`,
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
          // let song = body.tab;
          // this.setState({ song: song});
                        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render() {

    return(
      <div className="animated fadeIn">
        TEST
      </div>
    );
  }
}

export default App;
