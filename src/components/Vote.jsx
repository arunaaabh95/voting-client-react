import React from 'react';
import createReactClass from 'create-react-class';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Button, Row, Col} from 'react-materialize';
import {Link} from 'react-router-dom';

export default createReactClass({
  mixins: [PureRenderMixin],
  getPair: function() {
    return this.props.pair || [];
  },
  hasVotedFor: function(entry) {
    return this.props.hasVoted === entry;
  },
  vote: function(entry) {
    return this.props.vote(entry);
  },
  render: function() {
    return (<div className = "voting">
      <Row>
      {this.getPair().map(entry =>
        <Col className="l6 m6 s12">
        <Button key={entry}
          className = {`${ this.hasVotedFor(entry)?'clicked':''} white grey-text option`}
          disabled = {this.hasVotedFor(entry)}
          onClick = {() => this.vote(entry)}>
          <span className="padding-5">{entry}</span>
        </Button>
        </Col>
      )}
      </Row>
      <div className="section">
      <Row>
        <Col className="s12 m12 l12">
          <Link to="/results">
            <Button className="white grey-text">
              Result of round
            </Button>
          </Link>
        </Col>
      </Row>
      </div>
    </div>
  );
}
});
