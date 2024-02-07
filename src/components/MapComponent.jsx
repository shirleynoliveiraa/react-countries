import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

export default function MapComponent({ visitedCountries, toggleVisitedCountry }) {

  function handleCountryClick(countryId) {
    toggleVisitedCountry(countryId);
  }

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ComposableMap>
        <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
          {({ geographies }) =>
            geographies.map(geo => {
              const isVisited = visitedCountries.includes(geo.id);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleCountryClick(geo.id)} 
                  style={{
                    default: {
                      fill: isVisited ? '#ff5722' : '#e0e0e0', 
                      outline: 'none',
                    },
                    hover: {
                      fill: isVisited ? '#ff7043' : '#f5f5f5', 
                      outline: 'none',
                    },
                    pressed: {
                      fill: isVisited ? '#bf360c' : '#bdbdbd',
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
