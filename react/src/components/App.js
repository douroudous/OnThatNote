import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={

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
            key={shoe.id}
            id={shoe.id}
            model={shoe.model}
            version={shoe.version}
            brand={shoe.brand}
            picture={shoe.picture}
            year={shoe.year}
            price={shoe.price}
            description={shoe.description}
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
