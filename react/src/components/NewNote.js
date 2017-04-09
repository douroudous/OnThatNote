import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      title: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleSubmit(event) {
    let noteData = {
        title: this.state.title
    };
    let noteJson = JSON.stringify(noteData);

    fetch(`/api/v1/notes.json`,
      { method: 'post',
        body: noteJson,
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

    this.setState({ title: "empty"});
  }

  render() {
    return (
      <div className="input-form">
        <form onSubmit={this.handleSubmit}>
          <label className='link'>Title</label>
            <input type="text" value={this.state.title} onChange={this.handleChange} />

          <input className='link' type="submit"/>
        </form>
      </div>
    );
  }
}

export default Item;
