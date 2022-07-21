import './index.css'

const PlanetItem = props => {
  const {eachPlanetDetails} = props
  const {name, imageUrl, description} = eachPlanetDetails

  return (
    <div className="planet-container">
      <div className="image-container">
        <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      </div>
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
