import React from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';

class App extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <button onClick={handlePrint}>Print this out!</button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}


export default App;
