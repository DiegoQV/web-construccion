"use client";

import { Pause, Play, RotateCcw } from "lucide-react";
import { useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import styles from "./Hero.module.css";

const videoQuery = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

function subscribe(callback: () => void) {
  const query = window.matchMedia(videoQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function HeroVideo() {
  const enabled = useSyncExternalStore(subscribe, () => window.matchMedia(videoQuery).matches, () => false);
  return enabled ? <DesktopVideo /> : null;
}

function DesktopVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [failed, setFailed] = useState(false);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      video.pause();
      return;
    }
    if (video.ended) video.currentTime = 0;
    try {
      await video.play();
    } catch {
      setPlaying(false);
    }
  }

  if (failed) return null;

  const label = playing ? "Pausar vídeo de fondo" : ended ? "Volver a reproducir vídeo de fondo" : "Reproducir vídeo de fondo";
  const Icon = playing ? Pause : ended ? RotateCcw : Play;

  return (
    <>
      <video
        ref={videoRef}
        src="/videos/hero-fachada.mp4"
        className={cn(styles.hero__video, ready && styles["hero__video--ready"])}
        autoPlay
        muted
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        onCanPlay={() => setReady(true)}
        onPlaying={() => { setPlaying(true); setEnded(false); }}
        onPause={() => setPlaying(false)}
        onEnded={() => { setPlaying(false); setEnded(true); }}
        onError={() => setFailed(true)}
      />
      {ready && (
        <button type="button" className={styles.hero__video_control} onClick={togglePlayback} aria-label={label} title={label}>
          <Icon size={16} aria-hidden="true" />
          <span>{playing ? "Pausar" : ended ? "Repetir" : "Reproducir"}</span>
        </button>
      )}
    </>
  );
}
