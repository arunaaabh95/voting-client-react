import React from 'react';
import createReactClass from 'create-react-class';
import {ConnectionStateContainer} from './ConnectionState';

export default createReactClass ({

    render: function() {
      return (
        <div>
        <ConnectionStateContainer />
          {this.props.children}
        </div>
      );
  }
});
