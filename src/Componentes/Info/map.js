import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={19}
      
      defaultCenter={{ lat: -0.2731099321930964, lng: -79.4624677570037 }}
    >
      <Marker
        position={{ lat: -0.2731099321930964, lng: -79.4624677570037 }}
      />
    </GoogleMap>
  ));
  
  export default MapWithAMarker;