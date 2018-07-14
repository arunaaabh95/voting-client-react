import React from 'react';
import createReactClass from 'create-react-class';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default createReactClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (<div className= "winner white-text flow-text">
    Winner is {this.props.winner}!
    </div>);
  }
});
