import React from 'react';
import createReactClass from 'create-react-class';
import Winner from './Winner';
import Vote from './Vote';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreator from '../action_creators';

export const Voting = createReactClass({
  mixins: [PureRenderMixin],
  render : function() {
    return (
      <div>
      {this.props.winner ?
      <Winner ref = "winner" winner = {this.props.winner} />:
      <Vote {...this.props}/>
    }
  </div>);
  }
});

function mapStateToProps(state) {
  return ({
    pair: state.getIn(['vote', 'pair'], 0),
    hasVoted: state.getIn(['myVote', 'entry']),
    winner: state.get('winner')
  });
}

export const VotingContainer = connect(
  mapStateToProps,
  actionCreator
)(Voting);
