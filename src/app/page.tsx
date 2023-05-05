"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '@/styles/player.module.css';

export default function Player() {
  const [player, setPlayer] = useState<any>(null);

  useEffect(() => {
    // async function getPlayerStats() {
    //   const response = await axios.get('https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?appid=730&key=687C5AB798DD80B0CC85FAF456592B73&steamid=76561198283174949');
    //   setPlayer(response);
    // }
    async function getPlayerStats() {
      const response = await axios.get('https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?appid=730&key=687C5AB798DD80B0CC85FAF456592B73&steamid=76561198283174949');
      setPlayer(response.data.playerstats);
    }

    getPlayerStats();
  }, []);
  console.log(player)

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.cardTitle}>Stats do jogador</h1>
        <div className={styles.cardInfo}>
          <div className={styles.cardInfoItem}>
            <div className={styles.cardInfoLabel}>Kills</div>
            {/* <div className={styles.cardInfoValue}>{player?.stats.find(stat => stat.name === 'total_kills').value}</div> */}
            <div className={styles.cardInfoValue}>100</div>
          </div>
          <div className={styles.cardInfoItem}>
            <div className={styles.cardInfoLabel}>Deaths</div>
            <div className={styles.cardInfoValue}>50</div>
          </div>
          <div className={styles.cardInfoItem}>
            <div className={styles.cardInfoLabel}>Assists</div>
            <div className={styles.cardInfoValue}>20</div>
          </div>
          <div className={styles.cardInfoItem}>
            <div className={styles.cardInfoLabel}>Headshots</div>
            <div className={styles.cardInfoValue}>60</div>
          </div>
          <div className={styles.cardInfoItem}>
            <div className={styles.cardInfoLabel}>Tempo jogado</div>
            <div className={styles.cardInfoValue}>10 horas</div>
          </div>
        </div>
      </div>
    </div>
  );
}
