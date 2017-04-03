import React from 'react';
import Item from './Item';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      items: []
    };
  }

  componentWillMount() {
    fetch(`/api/v1/notes/${this.props.id}.json`,
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
        this.setState({ items: body.items});
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }


  handleSubmitNew(event) {
    fetch(`/api/v1/artists/${this.props.artistId}/songs.json`,
      { method: 'post',
        body: songData,
        credentials: 'include'
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          let errorMessage = `${response.status} ($response.statusText)`,
            error = new Error(errorMessage);
            throw(error);
        }
      })
      .then(data => {
      })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    let items = this.state.items.map(item => {
      return(
        <div>
          <Item
            key={item.id}
            id={item.id}
            body={item.body}
          />
        </div>
      )
    })

      return (
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.body}</p>
          <ul>{items}</ul>
          <p id={this.props.id}>Edit Note</p>
        </div>
      );
  }
}

export default Note;
