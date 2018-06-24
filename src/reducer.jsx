import {List, Map} from 'immutable';

function setConnectionState(state, connectionState, connected) {
  return state.set('connection', Map({
    state: connectionState,
    connected
  }));
}

function setState(state, newState) {
  return state.merge(newState);
}

function vote(state, entry, voter) {
  const currentRound = state.getIn(['vote', 'round']);
  const currentPair = state.getIn(['vote','pair'], 0);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('myVote', Map({
      round : currentRound,
      entry
    }));
  } else {
    return state;
  }
}

function resetVote(state) {
  const voteForRound = state.getIn(['myVote', 'round']);
  const currentRound = state.getIn(['vote', 'round']);
  if (voteForRound !== currentRound) {
    return state.remove('myVote');
  } else {
    return state;
  }
}

export default function(state = Map(), action) {
  //console.log(state, action.state);
  switch (action.type) {
    case 'SET_CLIENT_ID':
      return state.set('clientId', action.clientId);
    case 'SET_CONNECTION_STATE':
      return setConnectionState(state, action.state, action.connected);
    case 'SET_STATE':
      return resetVote(setState(state, action.state));
    case 'VOTE':
      return vote(state, action.entry, action.clientId);
    default:
      return state;
  }
}
