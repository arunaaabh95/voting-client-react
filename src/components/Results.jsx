import React from 'react';
import createReactClass from 'create-react-class';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';
import {
  connect
} from 'react-redux';
import * as actionCreators from '../action_creators';
import {Button, Row, Col} from 'react-materialize';
import {Link, withRouter} from 'react-router-dom';

export const Results = createReactClass({
      mixins: [PureRenderMixin],
      getPair: function() {
        return this.props.pair || [];
      },
      getVotes: function(entry) {
        if (this.props.tally && this.props.tally.has(entry)) {
          return this.props.tally.get(entry);
        }
        return 0;
      },
      render: function() {
        return (
          this.props.winner ?
          <Winner ref = "winner" winner = {this.props.winner} /> :
          <div className = "results" >
            <div className = "tally" >
              {this.getPair().map(entry =>
              <Row>
              <div key = {entry} className = {`entry flow-text white-text`} >
                <span> {entry} : {this.getVotes(entry)} </span>
            </div>
            </Row>
          )};
          </div>
          <div className = "management" >
          <Row>
          <Col className="l6 m6 s6 padding-5">
          <Link to="/">
          <Button ref = "next" className = "next grey-text white"
              onClick = {this.props.next} >
              Next
          </Button>
          </Link>
          </Col>
          <Col className="l6 m6 s6 padding-5">
          <Link to="/">
          <Button ref = "restart" className = "restart grey-text white"
            onClick = {this.props.restart} >
            Restart
          </Button>
          </Link>
          </Col>
          </Row>
        </div>
      </div>);
    }
  });

    function mapStateToProps(state) {
      return ({
        pair: state.getIn(['vote', 'pair']),
        tally: state.getIn(['vote', 'tally']),
        winner: state.get('winner')
      });
    }

    export const ResultsContainer = withRouter(connect(mapStateToProps, actionCreators)(Results));
