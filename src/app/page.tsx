"use client"
import { useEffect, useState } from 'react';
import andreyStats from '@/utils/76561198283174949.json';

import styles from '@/styles/player.module.css';
import Image from 'next/image';

export default function Player() {
  const [player, setPlayer] = useState<any>(null);
  const [loading, setLoading] = useState<any>(true);

  useEffect(() => {
    setLoading(true)
    async function getPlayerStats() {
      const { data } = await andreyStats;
      setPlayer(data);
    }
    getPlayerStats();
    setLoading(false)
  }, []);

  if (loading) {
    return false;
  }
  console.log(player)
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.cardTitle}>Stats do jogador</h1>
        <div className={styles.cardInfo}>
          <div className={styles.cardInfoItem}>
            <div className={styles.cardInfoLabel}>
              {player.platformInfo.platformUserHandle}
            </div>
            <div className={styles.cardInfoValue}>
              <img
                className="inline-block h-30 w-30 rounded-full ring-2 ring-white"
                src={player.platformInfo.avatarUrl}
                alt=""
              />
            </div>
          </div>
          <div className={styles.cardInfoItem}>
            <div className={styles.cardInfoLabel}>K/D</div>
            <div className={styles.cardInfoValue}>
              {player.segments[0].stats.kd.displayValue}
            </div>
          </div>
          <div className={styles.cardInfoItem}>
            <div className={styles.cardInfoLabel}>kills</div>
            <div className={styles.cardInfoValue}>
              {player.segments[0].stats.kills.displayValue}
            </div>
          </div>
          <div className={styles.cardInfoItem}>
            <div className={styles.cardInfoLabel}>Deaths</div>
            <div className={styles.cardInfoValue}>
              {player.segments[0].stats.deaths.displayValue}
            </div>
          </div>
          <div className={styles.cardInfoItem}>
            <div className={styles.cardInfoLabel}>Headshots</div>
            <div className={styles.cardInfoValue}>
              {player.segments[0].stats.headshots.displayValue} || {player.segments[0].stats.headshotPct.displayValue}
            </div>
          </div>
          <div className={styles.cardInfoItem}>
            <div className={styles.cardInfoLabel}>Tempo jogado</div>
            <div className={styles.cardInfoValue}>
              {player.segments[0].stats.timePlayed.displayValue}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
