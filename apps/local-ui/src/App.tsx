import React from 'react';
import ExampleComponent from './components/ExampleComponent';
import { BasicButtons } from '@cgi-learning-hub/ui';


const App = () => {
  return (
    <div>
      <h1>Hello, Try your components!</h1>
      <ExampleComponent text="This is an example component test." />
      {/* component from ui  */}
      <BasicButtons/>
    </div>
  );
};

export default App;