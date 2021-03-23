import React from "react";
import PropsExample from '../src/components/PropsExample'
import PropsMapping from '../src/components/PropsMapping'

function App() {
  const visitedPlaces = ['Wales', 'Croatia', 'Mexico', 'Germany', 'Austria', 'Scotland']
  return <div>
    <PropsExample name="Tom" business="MySpace"/>
    <PropsMapping visited={visitedPlaces}/>
  </div>;
}

export default App;
