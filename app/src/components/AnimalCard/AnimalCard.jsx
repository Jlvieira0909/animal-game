import "./AnimalCard.css";

export default function AnimalCard(props) {
  return (
    <div className="AnimalCardContainer">
      <h1 className="AnimalName">{props.name}</h1>
      <div className="InfosContainer">
        <img
          className="AnimalPhoto"
          alt="Photo of the animal"
          src={props.photo.src}
        />
        <div className="AnimalNumbersContainer">
          <h1 className="AnimalNumber">{props.number01}</h1>
          <h1 className="AnimalNumber">{props.number02}</h1>
          <h1 className="AnimalNumber">{props.number03}</h1>
        </div>
      </div>
      <div className="FlavourTextContainer">
        <h1 className="AnimalTeam">{props.team}</h1>
        <img
          className="SizebichoLogo"
          alt="Cool Logo for a silly game"
          src={"ssss"}
        />
      </div>
    </div>
  );
}
