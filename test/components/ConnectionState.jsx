import React from 'react';
import {expect} from 'chai';
import {ConnectionState} from '../../src/components/ConnectionState';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-dom/test-utils';
import ReactDOM from 'react-dom';

describe('ConnectionState', () => {

it('is not visible when connected', () => {
    const component = renderIntoDocument(<ConnectionState connected={true} />);
    const div = findRenderedDOMComponentWithTag(component, 'div');
    expect(ReactDOM.findDOMNode(div).style.display).to.equal('none');
  });

  it('is visible when not connected', () => {
    const component = renderIntoDocument(<ConnectionState connected={false} />);
    const div = findRenderedDOMComponentWithTag(component, 'div');
    expect(ReactDOM.findDOMNode(div).style.display).to.equal('block');
  });

  it('contains connection state message', () => {
    const component = renderIntoDocument(
      <ConnectionState connected={false} state="Fail" />
    );
    const div = findRenderedDOMComponentWithTag(component, 'div');
    expect(ReactDOM.findDOMNode(div).textContent).to.contain('Fail');
  });

});
