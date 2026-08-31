import React from 'react';
import { X, BookOpen, Key, AlertCircle, Lightbulb, CheckCircle2 } from 'lucide-react';
import { ChapterMeta } from '../../types';

interface PresenterNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  chapter: ChapterMeta;
  chapterIndex: number;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  isOpen,
  onClose,
  chapter,
  chapterIndex,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      id="presenter-notes-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        id="presenter-notes-modal-content"
        className="w-full max-w-2xl bg-[#0b1120] border border-cyan-500/40 rounded-2xl p-6 shadow-2xl relative text-right text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100">
                بطاقة إرشادات المناقشة للمُقدّمة (شروق رفاعي)
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                المحطة {chapter.number}: {chapter.titleAr}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-4 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          {/* Key Message */}
          <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/60">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold mb-1">
              <Lightbulb className="w-4 h-4" />
              <span>الرسالة الأكاديمية الجوهرية للجنة التقييم:</span>
            </div>
            <p className="text-sm text-cyan-100 leading-relaxed">
              {chapter.keyTakeaway}
            </p>
          </div>

          {/* Bulleted Talking Points */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>محاور الحديث المقترحة أثناء الإلقاء:</span>
            </h4>
            <div className="space-y-2">
              {chapter.presenterNotes.map((note, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 text-xs text-slate-200 leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-cyan-400 font-mono shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Committee Inquiries */}
          <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200">
            <div className="flex items-center gap-1.5 font-bold mb-1 text-amber-400">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>نصيحة الدفاع الأكاديمي:</span>
            </div>
            <p className="text-slate-300">
              ركّز على ربط الجانب النظري لنظم المعلومات (MIS) بالتطبيقات العملية للخوارزميات الذكية؛ وضّح أن الذكاء الاصطناعي ليس بديلاً للنظام بل هو طبقة الارتقاء الإدراكي.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono text-[11px]">مقدم من الطالبة: شروق رفاعي | أكاديمية طيبة</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs transition-colors"
          >
            إغلاق الملاحظات ومتابعة العرض
          </button>
        </div>
      </div>
    </div>
  );
};
