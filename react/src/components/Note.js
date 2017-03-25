import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {


      return (
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.body}</p>
        </div>
      );
  }
}

export default Note;
