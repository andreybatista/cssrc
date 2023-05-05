import axios from 'axios';

export default function Player() {
  async function getPlayerStats() {
    const response = await axios.get('https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?appid=730&key=804083C7A9AB515A4E32C4C472E62B12&steamid=<steamid-do-jogador>');
    console.log(response.data);
  }

  getPlayerStats();

  return (
    <div>
      <h1>Stats do jogador</h1>
    </div>
  );
}
