// src/hooks/useEdgeSwipeBack.js
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function swipeBack({ edge = 24, threshold = 80, fallback = "/" } = {}) {
  const start = useRef(null);
  const nav = useNavigate();

  useEffect(() => {
    const onStart = (e) => {
      const t = e.touches?.[0];
      if (!t) return;
      // Ignore if started away from left edge
      if (t.clientX > edge) return;
      // Ignore if started inside an exempt element (e.g., carousel)
      let el = e.target;
      while (el) {
        if (el.dataset?.edgeSwipeExempt === "true") return;
        el = el.parentElement;
      }
      start.current = { x: t.clientX, y: t.clientY, time: Date.now() };
    };

    const onMove = (e) => {
      if (!start.current) return;
      const t = e.touches?.[0];
      if (!t) return;
      const dx = t.clientX - start.current.x;
      const dy = Math.abs(t.clientY - start.current.y);
      // if vertical movement dominates, cancel
      if (dy > 24 && dy > Math.abs(dx)) start.current = null;
    };

    const onEnd = (e) => {
      if (!start.current) return;
      const t = e.changedTouches?.[0];
      const dx = t.clientX - start.current.x;
      const dy = Math.abs(t.clientY - start.current.y);
      start.current = null;

      if (dx > threshold && dx > dy) {
        // Prefer history back; if no history, go home
        if (window.history.length > 1) nav(-1);
        else nav(fallback);
      }
    };

    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [edge, threshold, fallback, nav]);
}
