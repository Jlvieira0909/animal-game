import "./page.css";
import AnimalCard from "./src/components/AnimalCard/AnimalCard";
import modelPhoto from "./src/images/Model.png";

export default function Home() {
  return (
    <div className="App">
      <h1 className="AppTitle">Animal Game</h1>
      <div className="AnimalSelectorGrid">
        <AnimalCard
          name="Seu Madroga"
          photo={modelPhoto}
          number01="01"
          number02="02"
          number03="03"
          team="Revision"
        />
        <AnimalCard
          name="Seu Madroga"
          photo={modelPhoto}
          number01="01"
          number02="02"
          number03="03"
          team="Revision"
        />
        <AnimalCard
          name="Seu Madroga"
          photo={modelPhoto}
          number01="01"
          number02="02"
          number03="03"
          team="Revision"
        />
        <AnimalCard
          name="Seu Madroga"
          photo={modelPhoto}
          number01="01"
          number02="02"
          number03="03"
          team="Revision"
        />
        <AnimalCard
          name="Seu Madroga"
          photo={modelPhoto}
          number01="01"
          number02="02"
          number03="03"
          team="Revision"
        />
        <AnimalCard
          name="Seu Madroga"
          photo={modelPhoto}
          number01="01"
          number02="02"
          number03="03"
          team="Revision"
        />
        <AnimalCard
          name="Seu Madroga"
          photo={modelPhoto}
          number01="01"
          number02="02"
          number03="03"
          team="Revision"
        />
      </div>
    </div>
  );
}
