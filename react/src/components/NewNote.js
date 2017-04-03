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
      <form>
        <label className='link'>Enter new note:</label>
        <input type="text"/>
        <input className='link'type="submit"/>
      </form>
    );
  }
}

export default Item;
