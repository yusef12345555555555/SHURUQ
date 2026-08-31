import React, { useEffect, useRef } from 'react';

interface CyberBackgroundProps {
  accentColor?: 'cyan' | 'blue' | 'violet' | 'magenta' | 'amber' | 'emerald';
  intensity?: 'low' | 'medium' | 'high';
}

export const CyberBackground: React.FC<CyberBackgroundProps> = ({ 
  accentColor = 'cyan',
  intensity = 'medium' 
}) => {
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

    const particleCount = intensity === 'high' ? 70 : intensity === 'medium' ? 45 : 25;
    
    // Color mapping
    const colorMap: Record<string, { r: number; g: number; b: number }> = {
      cyan: { r: 6, g: 182, b: 212 },
      blue: { r: 59, g: 130, b: 246 },
      violet: { r: 139, g: 92, b: 246 },
      magenta: { r: 236, g: 72, b: 153 },
      amber: { r: 245, g: 158, b: 11 },
      emerald: { r: 16, g: 185, b: 129 },
    };

    const targetColor = colorMap[accentColor] || colorMap.cyan;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      char?: string;
    }

    const binaryChars = ['0', '1', 'Σ', 'λ', 'Δ', '94.7%', '101', 'μ', '8.4k', '∞'];

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      baseAlpha: Math.random() * 0.4 + 0.1,
      char: Math.random() > 0.6 ? binaryChars[Math.floor(Math.random() * binaryChars.length)] : undefined,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle ambient radial glow around center / cursor
      const gradient = ctx.createRadialGradient(
        mouseX, mouseY, 10,
        mouseX, mouseY, 400
      );
      gradient.addColorStop(0, `rgba(${targetColor.r}, ${targetColor.g}, ${targetColor.b}, 0.04)`);
      gradient.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw connections to nearby particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.15;
            ctx.strokeStyle = `rgba(${targetColor.r}, ${targetColor.g}, ${targetColor.b}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw particle node or floating telemetry char
        if (p.char) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = `rgba(${targetColor.r}, ${targetColor.g}, ${targetColor.b}, ${p.baseAlpha * 0.7})`;
          ctx.fillText(p.char, p.x, p.y);
        } else {
          ctx.fillStyle = `rgba(${targetColor.r}, ${targetColor.g}, ${targetColor.b}, ${p.baseAlpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor, intensity]);

  return (
    <canvas
      ref={canvasRef}
      id="cyber-background-canvas"
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
