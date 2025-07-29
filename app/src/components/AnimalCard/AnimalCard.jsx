import "./AnimalCard.css";
import testIMG from "../../images/teste01.png";
import Image from "next/image"; // Corrigido para importar do Next.js

export default function AnimalCard(props) {
  return (
    <div className={`AnimalCardContainer ${props.isActive ? "" : "inactive"}`}>
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
        <Image
          className="SizebichoLogo"
          alt="Cool Logo for a silly game"
          src=""
          width={160} // Ajuste conforme necessário
          height={50} // Ajuste conforme necessário
        />
      </div>
    </div>
  );
}
