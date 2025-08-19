import "./AnimalCard.css";
import Image from "next/image"; // Corrigido para importar do Next.js

export default function AnimalCard(props) {
  return (
    <div className={`AnimalCardContainer ${props.isActive ? "" : "inactive"}`}>
      <h1 className="AnimalName">{props.name}</h1>
      <div className="InfosContainer">
        <img className="AnimalPhoto" alt="aaaaa" src={props.photo} />
        <div className="AnimalNumbersContainer">
          <h1 className="AnimalNumber">{props.number01}</h1>
          <h1 className="AnimalNumber">{props.number02}</h1>
          <h1 className="AnimalNumber">{props.number03}</h1>
        </div>
      </div>
      <div className="FlavourTextContainer">
        <h1 className="AnimalTeam">{props.team}</h1>
      </div>
    </div>
  );
}
