import Item from './Item';

export default function Country({
  children: country = null,
  onCountryClick = null,
  isVisited = false,
}) {
  if (!country) {
    return <div>Impossible to render country</div>;
  }

  function handleCountryClick() {
    if (onCountryClick) {
      onCountryClick(country.id);
    }
  }

  const demographicDensity = country.population / country.area;
  const { name, capital, region, population, area } = country;

  const isVisitedClassName = isVisited ? 'bg-green-100' : '';

  return (
    <div
      className={`border p-2 m-2 flex flex-row items-center space-x-2 cursor-pointer ${isVisitedClassName}`}
      onClick={handleCountryClick}
    >
      <ul>
        <li>
          <Item label="Name:">{name}</Item>
        </li>
        <li>
          <Item label="Capital:">{capital}</Item>
        </li>
        <li>
          <Item label="Region:">{region}</Item>
        </li>
        <li>
          <Item label="Population:">{population}</Item>
        </li>
        <li>
          <Item label="Area:">{area}</Item>
        </li>
        <li>
          <Item label="Demographic density:">{demographicDensity}</Item>
        </li>
      </ul>
    </div>
  );
}
