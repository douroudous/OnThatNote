import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      newNote: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({newNote: event.target.value});
  }

  handleSubmit(event) {
    alert(`New note created`);
    let data = {
        note: this.state.newNote
    };
    let songData = JSON.stringify(data);
    debugger;

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
    return (
      <form onSubmit={this.handleSubmit}>
        <label className='link'>
          Enter new note</label>
          <input type="text" value={this.state.newNote} onChange={this.handleChange} />

        <input className='link' type="submit"/>
      </form>
    );
  }
}

export default Item;
