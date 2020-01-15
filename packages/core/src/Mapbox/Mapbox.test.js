import React from 'react';
import ReactDOM from 'react-dom';
import Mapbox from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Mapbox
      mapStyle="mapbox://styles/mzdk/ck34cntqj05z91cmjvsjyfw4s"
      mapboxApiAccessToken="pk.eyJ1IjoibXpkayIsImEiOiJjazJuZTlobWkwcGc5M21sbml2cWd0Njl5In0.BasnEPdX95SqEnvv2AOjoQ"
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
