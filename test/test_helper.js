import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const dom = new jsdom.JSDOM('<!DOCTYPE html><html><body></body></html>');
const win = dom.window;

global.doucment = win.document;
global.window = win;

Object.keys(window).forEach((key) => {
  if(!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);
