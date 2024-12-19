// Ce composant affiche la liste des participants
// Il prend en props le tableau de participants : participants
// Il prend en props une fonction pour ajouter un participant : onAddParticipant
// Il prend en props une fonction pour supprimer un participant : onRemoveParticipant

import { useState } from "react";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    // On ajoute le participant seulement si le currentName n'est pas vide
    if (currentName !== "") {
      // Appel de la fonction onAddParticipant avec le nom courant
      onAddParticipant(currentName);
      // Reset du currentName
      setCurrentName("");
    }
  };

  return (
    <div className="absolute top-0 h-screen w-screen p-4">
      <img src="cadeau_gauche.png" alt="cadeau" className="absolute bottom-[12%] left-[5%]" />
      <img src="cadeau_droite.png" alt="cadeau" className="absolute bottom-[5%] -right-[20%]" />
      <h2 className="text-3xl font-nextcustom uppercase text-red-700 mb-8 mt-4 text-center">Participants</h2>
      
      <ul className="space-y-5 h-[50%] overflow-scroll">
        {participants.map((name, index) => (
          <li key={index} className="flex gap-4 items-center">
            <p className="font-nextcustom uppercase text-red-700 text-3xl w-15 text-end">{index + 1}</p>
            <p className="bg-[url('/texture/carton.jpg')] font-pinkend w-full text-4xl p-2 px-4">{name}</p>
            <div className="space-x-2">
              <button
                className="font-nextcustom uppercase text-red-700 text-3xl hover:text-red-900"
                onClick={() => onRemoveParticipant(index)}
              >
                x
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 mt-5">
        <input
          type="text"
          className="input flex-grow bg-[url('/texture/carton.jpg')] text-3xl p-2 font-pinkend"
          placeholder="Entrez un nom"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addParticipant()}
        />
        <button className="button bg-[url('/texture/carton.jpg')] text-5xl px-3 font-pinkend z-50 hover:scale-105" onClick={addParticipant}>
          +
        </button>
      </div>
    </div>
  );
}
