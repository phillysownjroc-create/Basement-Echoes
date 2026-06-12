import { useState, useEffect } from "react";

export function useCollectibles() {
  const [collected, setCollected] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("basement_echoes_collected");
    if (saved) {
      try {
        setCollected(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse collected items", e);
      }
    }
  }, []);

  const collect = (id: number) => {
    if (!collected.includes(id)) {
      const newCollected = [...collected, id];
      setCollected(newCollected);
      localStorage.setItem("basement_echoes_collected", JSON.stringify(newCollected));
    }
  };

  const hasCollected = (id: number) => collected.includes(id);

  return { collected, collect, hasCollected };
}
