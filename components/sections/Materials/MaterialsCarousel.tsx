"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { materialsContent } from "@/data/materials";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./Materials.module.css";

const features = materialsContent.features;
const wrap = (index: number) => ((index % features.length) + features.length) % features.length;
const ease = [0.22, 1, 0.36, 1] as const;

export function MaterialsCarousel() {
  const [position, setPosition] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.25, once: false });
  const reduced = useReducedMotion();
  const lastMove = useRef(0);
  const suppressDragClick = useRef(false);
  const active = wrap(position);
  const feature = features[active];
  const playing = !paused && !hovered && !reduced && visible && pageVisible;

  const move = useCallback((delta: number) => {
    if (!reduced && Date.now() - lastMove.current < 900) return;
    lastMove.current = Date.now();
    setPosition((value) => value + delta);
  }, [reduced]);

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => move(1), 6500);
    return () => window.clearInterval(timer);
  }, [playing, move, position]);

  return (
    <div ref={ref} className={styles.carousel} role="region" aria-roledescription="carrusel"
      aria-label="Calidad y ejecución en obra" onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)} onFocusCapture={(event) => {
        if (!(event.target as HTMLElement).closest("[data-rotation-control]")) setPaused(true);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault(); setPaused(true); move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}>
      <div className={styles.viewport}>
        <motion.div className={styles.dragTrack}
          drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.35}
          dragMomentum={false} dragSnapToOrigin
          onPointerDownCapture={() => { suppressDragClick.current = false; }}
          onDragStart={() => { suppressDragClick.current = true; setPaused(true); }}
          onDragEnd={(_, info) => {
            if (Math.abs(info.offset.x) > 45 && Math.abs(info.offset.x) > Math.abs(info.offset.y)) {
              move(info.offset.x < 0 ? 1 : -1);
            }
          }}
          onClickCapture={(event) => {
            if (suppressDragClick.current) { event.preventDefault(); event.stopPropagation(); }
          }}>
        {[-2, -1, 0, 1, 2].map((offset) => {
          const index = position + offset;
          const item = features[wrap(index)];
          return (
            <motion.div key={index} className={styles.slide} initial={false}
              animate={{ x: `calc(${offset * 100}% + ${offset} * var(--slide-gap))`, opacity: offset === 0 ? 1 : 0.45 }}
              transition={{ duration: reduced ? 0 : 0.9, ease }}
              aria-hidden={offset !== 0} role="group" aria-roledescription="diapositiva"
              aria-label={`${wrap(index) + 1} de ${features.length}: ${item.label}`}>
              <Image src={item.image} alt={offset === 0 ? item.alt : ""} fill
                sizes="(max-width: 767px) 86vw, (max-width: 1600px) 78vw, 1248px"
                className={styles.photo} style={{ objectPosition: item.id === "acabados" ? "35% 65%" : item.id === "estructura" ? "center 55%" : "center 35%" }}
                draggable={false} />
            </motion.div>
          );
        })}
        <button className={`${styles.edge} ${styles.edgePrev}`} onClick={() => { setPaused(true); move(-1); }} aria-label="Ver fotografía anterior" tabIndex={-1} />
        <button className={`${styles.edge} ${styles.edgeNext}`} onClick={() => { setPaused(true); move(1); }} aria-label="Ver fotografía siguiente" tabIndex={-1} />
        </motion.div>
      </div>
      <div className={styles.captionArea}>
        <div className={styles.caption} aria-live={playing ? "off" : "polite"} aria-atomic="true">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={feature.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: reduced ? 0 : 12 }} transition={{ duration: reduced ? 0 : 0.18 }}>
              <h3 className={styles.slideTitle} aria-label={feature.label}>
                {feature.label.split(" ").map((word, i) => (
                  <span className={styles.wordMask} key={`${word}-${i}`} aria-hidden="true">
                    <motion.span initial={{ y: reduced ? 0 : "-110%" }} animate={{ y: 0 }}
                      transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.035 * i, ease }}>{word}</motion.span>
                  </span>
                ))}
              </h3>
              <motion.p className={styles.description} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : -10 }}
                animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.22 }}>{feature.caption}</motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className={styles.controls}>
          <button className={styles.arrow} aria-label="Fotografía anterior" onClick={() => { setPaused(true); move(-1); }}><ArrowLeft size={20} strokeWidth={1.4} /></button>
          <span className={styles.counter}><span>{String(active + 1).padStart(2, "0")}</span><span className={styles.counterLine} /><span>03</span></span>
          <button className={styles.arrow} aria-label="Fotografía siguiente" onClick={() => { setPaused(true); move(1); }}><ArrowRight size={20} strokeWidth={1.4} /></button>
          {!reduced && <button data-rotation-control className={styles.pause} aria-label={paused ? "Activar cambio automático" : "Pausar cambio automático"} onClick={() => setPaused((value) => !value)}>{paused ? <Play size={14} /> : <Pause size={14} />}</button>}
        </div>
      </div>
    </div>
  );
}
