import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      color: string;
    }

    const nodeCount = Math.min(Math.floor((width * height) / 22000), 65);
    const nodes: Node[] = [];
    const colors = ['#38bdf8', '#818cf8', '#34d399', '#a78bfa', '#06b6d4'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Data packets streaming across nodes
    interface Packet {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
      color: string;
    }

    const packets: Packet[] = [];

    const createPacket = () => {
      if (nodes.length < 2) return;
      const from = Math.floor(Math.random() * nodes.length);
      let to = Math.floor(Math.random() * nodes.length);
      while (to === from) {
        to = Math.floor(Math.random() * nodes.length);
      }
      packets.push({
        fromIndex: from,
        toIndex: to,
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
        color: Math.random() > 0.5 ? '#38bdf8' : '#34d399',
      });
    };

    // Keep active stream packets
    let packetTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle grid overlay
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 64;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = node.baseAlpha;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = '#38bdf8';
            ctx.globalAlpha = (1 - dist / 150) * 0.15;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Spawn packets occasionally
      packetTimer++;
      if (packetTimer % 45 === 0 && packets.length < 12) {
        createPacket();
      }

      // Update and draw data stream packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }

        const from = nodes[p.fromIndex];
        const to = nodes[p.toIndex];
        if (!from || !to) {
          packets.splice(i, 1);
          continue;
        }

        const currentX = from.x + (to.x - from.x) * p.progress;
        const currentY = from.y + (to.y - from.y) * p.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.85;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Dynamic Theme Mesh Gradient */}
      <div className="mesh-gradient" />

      {/* 40px Grid Pattern Overlay */}
      <div className="grid-overlay" />

      {/* Subtle Background Node Glows & Lines */}
      <div className="fixed inset-0 z-2 pointer-events-none overflow-hidden">
        <div className="node" style={{ top: '20%', left: '15%', opacity: 0.6 }} />
        <div className="node" style={{ top: '65%', left: '85%', opacity: 0.4, background: '#8b5cf6', boxShadow: '0 0 10px #8b5cf6' }} />
        <div className="node" style={{ top: '82%', left: '12%', opacity: 0.5 }} />
        <div className="node" style={{ top: '35%', left: '75%', opacity: 0.35 }} />
        <div className="line w-full top-[28%] left-0 opacity-40" />
        <div className="line w-full top-[72%] left-0 rotate-12 opacity-30" />
      </div>

      {/* Interactive Flow Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-1"
        style={{ opacity: 0.75 }}
      />
    </>
  );
};
