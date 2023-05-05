import { useState, useEffect } from "react";
import { Champion } from "../types/champion";

type ChampionSelectorProps = {
  champions: Champion[];
  onSelection: (selectedChampions: string[]) => void;
};

const ChampionSelector = ({ champions, onSelection }: ChampionSelectorProps) => {
  const [selectedChampions, setSelectedChampions] = useState<string[]>([]);

  const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedChampionName = event.target.value;
    if (selectedChampions.includes(selectedChampionName)) {
      // Remove o campeão se ele já estiver selecionado
      const updatedSelection = selectedChampions.filter(name => name !== selectedChampionName);
      setSelectedChampions(updatedSelection);
      onSelection(updatedSelection);
    } else {
      // Adiciona o campeão se ele não estiver selecionado
      const updatedSelection = [...selectedChampions, selectedChampionName];
      setSelectedChampions(updatedSelection);
      onSelection(updatedSelection);
    }
  };

  useEffect(() => {
    // Chama a função de callback sempre que a seleção mudar
    onSelection(selectedChampions);
  }, [selectedChampions]);

  return (
    <div>
      <label htmlFor="champion-select">Selecione um campeão:</label>
      <select name="champion-select" id="champion-select" onChange={handleSelectionChange} multiple>
        {champions && Array.isArray(champions) && champions.map((champion: Champion) => (
          <option key={champion.name} value={champion.name}>
            {champion.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChampionSelector;
