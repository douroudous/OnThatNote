import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {

      return (
        <div>
          {this.props.body}
        </div>
      );
  }
}

export default Item;
