import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import { ContainerMap } from './styles';

function Map(){
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2Fpa29saXZlaXJhYSIsImEiOiJja2c3ZTA2dmwwMnppMnltazF6ZmdqYWdlIn0._iY-Z4s183eyeVFOfb59aA';
  
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-79.38, 43.65],
      zoom: 12.5
    });

    map.on('mouseenter', e => {
      if (e.features.length) {
        map.getCanvas().style.cursor = 'pointer';
      }
    });


    map.on('mouseleave', () => {
      map.getCanvas().style.cursor = '';
    });

    return () => map.remove();
  }, []); 

  return (
    <ContainerMap>
      <div className='map-container' ref={mapContainerRef} />
    </ContainerMap>
  );
}

export default Map;