import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      entry_box: "",
    };
  }


  render() {
    //onSubmit={this.props.handleSubmitNew} goes in form
    return (
      <div>
        <form >
          <label>Enter new note:</label>
          <input type="text" value={this.state.entry_box}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Item;
