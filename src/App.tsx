/**
 * Academic interactive presentation orchestrator
 * "الذكاء الاصطناعي ونظم المعلومات: من البيانات إلى القرار الذكي"
 * Presenter: شروق رفاعي (Shorouk Refaie)
 * Academic Evaluation: أكاديمية طيبة - المعادي (Teba Academy, Maadi, Egypt)
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CHAPTERS } from './data/chaptersData';
import { CyberBackground } from './components/common/CyberBackground';
import { CustomCursor } from './components/common/CustomCursor';
import { HeaderNav } from './components/common/HeaderNav';
import { PresentationControls } from './components/common/PresentationControls';

// Chapter components in continuous narrative flow
import { IntroCinematic } from './components/chapters/IntroCinematic';
import { Chapter01DataDeluge } from './components/chapters/Chapter01DataDeluge';
import { Chapter02InfoSystemCore } from './components/chapters/Chapter02InfoSystemCore';
import { Chapter04DataJourney } from './components/chapters/Chapter04DataJourney';
import { Chapter06AiIntegrationModalities } from './components/chapters/Chapter06AiIntegrationModalities';
import { Chapter07DecisionLab } from './components/chapters/Chapter07DecisionLab';
import { Chapter08DssSimulation } from './components/chapters/Chapter08DssSimulation';
import { OutroCinematic } from './components/chapters/OutroCinematic';

const CHAPTER_ELEMENT_IDS = [
  'chapter-intro',
  'chapter-01',
  'chapter-02',
  'chapter-04',
  'chapter-06',
  'chapter-07',
  'chapter-08',
];

export default function App() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const [isChapterMenuOpen, setIsChapterMenuOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [laserActive, setLaserActive] = useState<boolean>(false);
  const [laserPos, setLaserPos] = useState({ x: -100, y: -100 });
  const [isOutroActive, setIsOutroActive] = useState<boolean>(false);

  const isNavigatingRef = useRef(false);
  const suppressOutroObserverRef = useRef(false);

  const currentChapter = CHAPTERS[currentChapterIndex] || CHAPTERS[0];

  // Scroll to a specific chapter smoothly
  const scrollToChapter = useCallback((index: number) => {
    if (index >= 0 && index < CHAPTER_ELEMENT_IDS.length) {
      isNavigatingRef.current = true;
      setCurrentChapterIndex(index);
      setIsChapterMenuOpen(false);

      const targetId = CHAPTER_ELEMENT_IDS[index];
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 800);
    }
  }, []);

  // Centralized closing-screen trigger
  const startOutro = useCallback(() => {
    setIsOutroActive(true);
  }, []);

  // Complete restart handler: Closes Outro and smoothly returns to Intro (Chapter 00)
  const handleRestartExperience = useCallback(() => {
    suppressOutroObserverRef.current = true;
    setIsOutroActive(false);
    setCurrentChapterIndex(0);
    window.scrollTo({ top: 0, behavior: 'auto' });
    setIsChapterMenuOpen(false);
    setLaserActive(false);

    // Prevent the closing-screen observer from immediately reopening the outro
    // while the viewport is being reset to the beginning.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        suppressOutroObserverRef.current = false;
      });
    });
  }, []);

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (currentChapterIndex === CHAPTER_ELEMENT_IDS.length - 1) {
      // Reached the final chapter; open the closing screen
      startOutro();
    } else if (currentChapterIndex < CHAPTER_ELEMENT_IDS.length - 1) {
      scrollToChapter(currentChapterIndex + 1);
    }
  }, [currentChapterIndex, scrollToChapter, startOutro]);

  const handlePrev = useCallback(() => {
    if (currentChapterIndex > 0) {
      scrollToChapter(currentChapterIndex - 1);
    }
  }, [currentChapterIndex, scrollToChapter]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  }, []);

  // Track active chapter as user scrolls naturally through continuous space
  useEffect(() => {
    const handleScroll = () => {
      if (isNavigatingRef.current || isOutroActive) return;

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = CHAPTER_ELEMENT_IDS.length - 1; i >= 0; i--) {
        const id = CHAPTER_ELEMENT_IDS[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setCurrentChapterIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOutroActive]);

  // Keyboard navigation & Shortcuts for live committee presentation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea', 'select'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setIsPresentationMode((prev) => !prev);
      } else if (e.key === 'c' || e.key === 'C') {
        e.preventDefault();
        setIsChapterMenuOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
            setIsChapterMenuOpen(false);
        setLaserActive(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, toggleFullscreen]);

  // Track laser position when active
  useEffect(() => {
    if (!laserActive) return;
    const onMouseMove = (e: MouseEvent) => {
      setLaserPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [laserActive]);

  return (
    <div className="relative min-h-screen bg-[#02050e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden font-sans">
      {/* Interactive Custom Cursor Tracker */}
      <CustomCursor />

      {/* Presenter Laser Pointer Mode Overlay */}
      {laserActive && (
        <div
          id="presenter-laser-beam"
          className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
          style={{ top: `${laserPos.y}px`, left: `${laserPos.x}px` }}
        >
          <div className="w-5 h-5 rounded-full bg-rose-500 shadow-[0_0_25px_#f43f5e] animate-ping" />
          <div className="w-2.5 h-2.5 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#fff]" />
        </div>
      )}

      {/* Interactive Dynamic Cyber Background */}
      <CyberBackground 
        accentColor={currentChapter.accentColor} 
        intensity={isPresentationMode ? 'low' : 'medium'}
      />

      {/* Top Academic HUD Navigation */}
      <HeaderNav
        currentChapter={currentChapter}
        allChapters={CHAPTERS}
        currentIndex={currentChapterIndex}
        totalChapters={CHAPTERS.length}
        onSelectChapter={scrollToChapter}
        onToggleChapterMenu={() => setIsChapterMenuOpen((prev) => !prev)}
        isChapterMenuOpen={isChapterMenuOpen}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Continuous presentation flow: introduction + six chapters */}
      <main 
        id="main-experience-stage"
        className={`relative z-10 transition-all duration-300 ${
          isPresentationMode ? 'px-2 sm:px-6' : 'px-4'
        }`}
      >
        {/* Intro Section */}
        <div id="chapter-intro" className="min-h-screen">
          <IntroCinematic onStartExperience={() => scrollToChapter(1)} />
        </div>

        {/* Continuous Flow of Chapters 01 through 11 */}
        <Chapter01DataDeluge />
        <Chapter02InfoSystemCore />
        <Chapter04DataJourney />
        <Chapter06AiIntegrationModalities />
        <Chapter07DecisionLab />
        <Chapter08DssSimulation />
      </main>

      {/* TEMPORARY FULLSCREEN CINEMATIC OUTRO OVERLAY */}
      {isOutroActive && (
        <OutroCinematic onRestart={handleRestartExperience} />
      )}

      {/* Bottom Presentation Controller HUD */}
      {!isOutroActive && (
        <PresentationControls
          currentIndex={currentChapterIndex}
          totalChapters={CHAPTERS.length}
          currentChapter={currentChapter}
          onNext={handleNext}
          onPrev={handlePrev}
          isPresentationMode={isPresentationMode}
          laserActive={laserActive}
          onToggleLaser={() => setLaserActive((prev) => !prev)}
        />
      )}

    </div>
  );
}
