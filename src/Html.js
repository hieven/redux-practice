import React, { Component, PropTypes } from 'react';

export default class Html extends Component {

  static propTypes = {
    component: PropTypes.string,
    initialData: PropTypes.string
  };

  render() {
    const { component, initialData } = this.props;
    return (
      <html lang="en-us">
        <head>
          <meta charSet="utf-8"/>
          <link rel="shortcut icon" href="/favicon.ico" />
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{__html: component}}/>
          <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_DATA__=${initialData};`}} />
          <script src="./bundle.js"></script>
        </body>
      </html>
    );
  }
}
