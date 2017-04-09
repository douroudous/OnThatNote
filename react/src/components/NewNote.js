import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      title: '',
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.dataset.form]: event.target.value});
  }

  handleSubmit(event) {
    let noteData = {
        title: this.state.title,
        body: this.state.body
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
    this.setState({ title: '',
                    body: ''  });
  }

  render() {
    return (
      <div className="input-form">
        <form onSubmit={this.handleSubmit}>
          <label className='link'>Title
            <input type="text" data-form="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label className='link'>Body
            <input type="text" data-form="body" value={this.state.body} onChange={this.handleChange} />
          </label>
          <input className='link' type="submit"/>
        </form>
      </div>
    );
  }
}

export default Item;
