"use client";

import React, { useState } from "react";
import "./page.css";
import AnimalCard from "./src/components/AnimalCard/AnimalCard";

const modelPhoto = "/images/modelPhoto.png";
const loadingImage1 = "/images/TestAnimation01.png";
const loadingImage2 = "/images/TestAnimation02.png";
const loadingImage3 = "/images/TestAnimation03.png";
const PhotoAna = "/images/animals/Ana.jpg";
const PhotoEducavera = "/images/animals/EduCavera.jpg";
const PhotoJando = "/images/animals/Jando.jpg";
const PhotoMariaPaula = "/images/animals/MariaPaula.jpg";
const PhotoVictor = "/images/animals/Victor.jpg";
const PhotoAllan = "/images/animals/Allan.png";
const PhotoDaniel = "/images/animals/Daniel.png";
const PhotoLuci = "/images/animals/Luci.png";
const PhotoMarcela = "/images/animals/Marcella.png";
const PhotoPedro = "/images/animals/Pedro.png";
const PhotoEduardo = "/images/animals/Eduardo.png";
const PhotoLud = "/images/animals/Lud.png";

export default function Home() {
  type Animal = {
    name: string;
    photo: string;
    team: string;
    isActive: boolean;
  };

  const [animals, setAnimals] = useState<Animal[]>([
    { name: "Pedro", photo: PhotoPedro, team: "Diretoria", isActive: true },
    { name: "Marcelo", photo: modelPhoto, team: "Diretoria", isActive: true },
    { name: "Janderson", photo: PhotoJando, team: "Diretoria", isActive: true },
    { name: "Daniel", photo: PhotoDaniel, team: "CS", isActive: true },
    { name: "Eduardo", photo: PhotoEducavera, team: "Produto", isActive: true },
    { name: "Lucas", photo: modelPhoto, team: "Produto", isActive: true },
    {
      name: "Victor",
      photo: PhotoVictor,
      team: "Produto/Integração",
      isActive: true,
    },
    { name: "Ana", photo: PhotoAna, team: "Revisão", isActive: true },
    { name: "Luciani", photo: PhotoLuci, team: "Modelagem", isActive: true },
    {
      name: "Eduardo",
      photo: PhotoEduardo,
      team: "Implantação",
      isActive: true,
    },
    { name: "Ludimila", photo: PhotoLud, team: "Marketing", isActive: true },
    { name: "Allan", photo: PhotoAllan, team: "Integração", isActive: true },
    { name: "Matheus", photo: modelPhoto, team: "Comercial", isActive: true },
    { name: "Karina", photo: modelPhoto, team: "Comercial", isActive: true },
    {
      name: "Marcela",
      photo: PhotoMarcela,
      team: "Outbound/Comercial",
      isActive: true,
    },
  ]);

  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [selectedAnimalIndex, setSelectedAnimalIndex] = useState<number | null>(
    null
  );
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [lastSelectedAnimalName, setLastSelectedAnimalName] =
    useState("placeholder");
  const [isLoading, setIsLoading] = useState(false);
  const [currentLoadingImage, setCurrentLoadingImage] = useState(loadingImage1);

  const loadingImages = [loadingImage1, loadingImage2, loadingImage3];

  const toggleAnimalActiveState = (index: number) => {
    setAnimals((prevAnimals) =>
      prevAnimals.map((animal, i) =>
        i === index ? { ...animal, isActive: !animal.isActive } : animal
      )
    );
  };

  const startLoadingAnimation = () => {
    let index = 0;
    return setInterval(() => {
      setCurrentLoadingImage(loadingImages[index]);
      index = (index + 1) % loadingImages.length;
    }, 250);
  };

  const selectRandomAnimal = async () => {
    const activeAnimals = animals.filter((animal) => animal.isActive);
    if (activeAnimals.length === 0) {
      alert("Nenhum animal foi selecionado!");
      return;
    }

    setIsLoading(true);
    const intervalId = startLoadingAnimation();

    // Add a delay of 5 seconds
    await new Promise((resolve) => setTimeout(resolve, 5000));

    clearInterval(intervalId);
    setIsLoading(false);

    const randomIndex = Math.floor(Math.random() * activeAnimals.length);
    const selected = activeAnimals[randomIndex];
    setSelectedAnimal(selected);
    setSelectedAnimalIndex(animals.indexOf(selected));
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    if (selectedAnimal) {
      setLastSelectedAnimalName(selectedAnimal?.name || "placeholder");
    }
    setSelectedAnimal(null);
    setSelectedAnimalIndex(null);
  };

  return (
    <div className="App">
      <h1 className="AppTitle">Sizebicho</h1>
      {isLoading ? (
        <div className="LoadingContainer">
          <img
            className="LoadingImage"
            src={currentLoadingImage}
            alt="Loading animation"
          />
        </div>
      ) : (
        <div
          className="NumberSelectorContainer"
          onClick={selectRandomAnimal}
          style={{ cursor: "pointer" }}
        >
          <h1 className="NumberSelectorTitle">O animal sortudo foi:</h1>
          <h1 className="SelectedAnimalName">
            {isPopupVisible ? selectedAnimal?.name : lastSelectedAnimalName}
          </h1>
        </div>
      )}
      <div className="AnimalSelectorGrid">
        {animals.map((animal, index) => (
          <div
            key={index}
            onClick={() => toggleAnimalActiveState(index)}
            style={{ cursor: "pointer" }}
          >
            <AnimalCard
              name={animal.name}
              photo={animal.photo}
              number01={String(index * 3 + 1).padStart(2, "0")}
              number02={String(index * 3 + 2).padStart(2, "0")}
              number03={String(index * 3 + 3).padStart(2, "0")}
              team={animal.team}
              isActive={animal.isActive}
            />
          </div>
        ))}
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="PopupOverlay" onClick={closePopup}>
          <div className="PopupContent" onClick={(e) => e.stopPropagation()}>
            <button className="CloseButton" onClick={closePopup}>
              X
            </button>
            {selectedAnimal && selectedAnimalIndex !== null && (
              <AnimalCard
                name={selectedAnimal.name}
                photo={selectedAnimal.photo}
                number01={String(selectedAnimalIndex * 3 + 1).padStart(2, "0")}
                number02={String(selectedAnimalIndex * 3 + 2).padStart(2, "0")}
                number03={String(selectedAnimalIndex * 3 + 3).padStart(2, "0")}
                team={selectedAnimal.team}
                isActive={true}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
