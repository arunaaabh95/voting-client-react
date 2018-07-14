import React from 'react';
import createReactClass from 'create-react-class';
import {Contain} from './Container';

export default createReactClass ({

    render: function() {
      document.title = "Vote Movie";
      return (
        <div>
        <Contain>
          {this.props.children}
        </Contain>
        </div>
      );
  }
});
