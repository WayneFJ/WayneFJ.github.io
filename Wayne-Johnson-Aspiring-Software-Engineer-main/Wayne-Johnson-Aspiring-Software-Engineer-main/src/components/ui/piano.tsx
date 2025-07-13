
import React, { useState, useCallback } from "react";

// Correct piano frequencies (C4 octave)
const NOTE_FREQUENCIES: { [key: string]: number } = {
  'C': 261.63,
  'C#': 277.18,
  'D': 293.66,
  'D#': 311.13,
  'E': 329.63,
  'F': 349.23,
  'F#': 369.99,
  'G': 392.00,
  'G#': 415.30,
  'A': 440.00,
  'A#': 466.16,
  'B': 493.88
};

// White keys in order
const WHITE_KEYS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

// Black keys with their positions relative to white keys
const BLACK_KEYS = [
  { note: 'C#', position: 0 },
  { note: 'D#', position: 1 },
  { note: 'F#', position: 3 },
  { note: 'G#', position: 4 },
  { note: 'A#', position: 5 },
];

export const Piano = () => {
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());

  const playSound = useCallback((note: string) => {
    try {
      // Create AudioContext
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Resume context if suspended (required for some browsers)
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      
      // Create master gain node
      const masterGain = audioContext.createGain();
      masterGain.connect(audioContext.destination);
      
      // Base frequency
      const baseFreq = NOTE_FREQUENCIES[note];
      
      // Create multiple oscillators for rich piano sound
      const oscillators: OscillatorNode[] = [];
      const gains: GainNode[] = [];
      
      // Fundamental frequency (main tone)
      const fundamental = audioContext.createOscillator();
      const fundamentalGain = audioContext.createGain();
      fundamental.frequency.value = baseFreq;
      fundamental.type = 'triangle'; // Warmer than sine
      fundamental.connect(fundamentalGain);
      fundamentalGain.connect(masterGain);
      fundamentalGain.gain.value = 0.5;
      oscillators.push(fundamental);
      gains.push(fundamentalGain);
      
      // Second harmonic (octave)
      const harmonic2 = audioContext.createOscillator();
      const harmonic2Gain = audioContext.createGain();
      harmonic2.frequency.value = baseFreq * 2;
      harmonic2.type = 'sine';
      harmonic2.connect(harmonic2Gain);
      harmonic2Gain.connect(masterGain);
      harmonic2Gain.gain.value = 0.2;
      oscillators.push(harmonic2);
      gains.push(harmonic2Gain);
      
      // Third harmonic
      const harmonic3 = audioContext.createOscillator();
      const harmonic3Gain = audioContext.createGain();
      harmonic3.frequency.value = baseFreq * 3;
      harmonic3.type = 'sine';
      harmonic3.connect(harmonic3Gain);
      harmonic3Gain.connect(masterGain);
      harmonic3Gain.gain.value = 0.1;
      oscillators.push(harmonic3);
      gains.push(harmonic3Gain);
      
      // Sub-harmonic for depth
      const subHarmonic = audioContext.createOscillator();
      const subHarmonicGain = audioContext.createGain();
      subHarmonic.frequency.value = baseFreq * 0.5;
      subHarmonic.type = 'sawtooth';
      subHarmonic.connect(subHarmonicGain);
      subHarmonicGain.connect(masterGain);
      subHarmonicGain.gain.value = 0.15;
      oscillators.push(subHarmonic);
      gains.push(subHarmonicGain);
      
      // Piano-like ADSR envelope
      const now = audioContext.currentTime;
      const attackTime = 0.02;
      const decayTime = 0.3;
      const sustainLevel = 0.4;
      const releaseTime = 2.0;
      
      // Apply envelope to master gain
      masterGain.gain.setValueAtTime(0, now);
      masterGain.gain.linearRampToValueAtTime(1.0, now + attackTime);
      masterGain.gain.exponentialRampToValueAtTime(sustainLevel, now + attackTime + decayTime);
      masterGain.gain.exponentialRampToValueAtTime(0.001, now + attackTime + decayTime + releaseTime);
      
      // Start all oscillators
      oscillators.forEach(osc => osc.start(now));
      
      // Stop all oscillators
      const stopTime = now + attackTime + decayTime + releaseTime;
      oscillators.forEach(osc => osc.stop(stopTime));
      
      console.log(`Playing ${note} at ${baseFreq}Hz`);
    } catch (error) {
      console.error('Audio playback failed:', error);
      // Fallback beep using older method
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = NOTE_FREQUENCIES[note];
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 1);
      } catch (fallbackError) {
        console.error('Fallback audio also failed:', fallbackError);
      }
    }
  }, []);

  const handleKeyPress = useCallback((note: string) => {
    setActiveKeys(prev => new Set([...prev, note]));
    playSound(note);
    
    // Remove key from active set after animation
    setTimeout(() => {
      setActiveKeys(prev => {
        const newKeys = new Set(prev);
        newKeys.delete(note);
        return newKeys;
      });
    }, 150);
  }, [playSound]);

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-2xl border border-gray-200 glow-border-hover">
      <h3 className="text-3xl font-bold text-gray-800 mb-8 font-display">
        Interactive Piano
      </h3>
      
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl shadow-inner border border-gray-700">
        {/* White Keys Container */}
        <div className="flex relative">
          {WHITE_KEYS.map((note, index) => (
            <button
              key={note}
              onClick={() => handleKeyPress(note)}
              className={`
                relative w-14 h-40 mx-0.5 rounded-b-lg border-2 transition-all duration-100 shadow-lg
                ${activeKeys.has(note) 
                  ? 'bg-gray-200 shadow-inner transform translate-y-1 border-gray-400' 
                  : 'bg-white hover:bg-gray-50 active:bg-gray-100 border-gray-300 hover:shadow-xl'
                }
                focus:outline-none focus:ring-2 focus:ring-blue-500
              `}
              style={{ zIndex: 1 }}
            >
              <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 select-none">
                {note}
              </span>
            </button>
          ))}
        </div>
        
        {/* Black Keys Container */}
        <div className="absolute top-8 flex">
          {BLACK_KEYS.map(({ note, position }) => (
            <div 
              key={note} 
              className="absolute flex"
              style={{ 
                left: `${(position * 60) + 42}px`,
                zIndex: 2 
              }}
            >
              <button
                onClick={() => handleKeyPress(note)}
                className={`
                  w-9 h-24 rounded-b-lg border-2 transition-all duration-100 shadow-xl
                  ${activeKeys.has(note) 
                    ? 'bg-gray-700 shadow-inner transform translate-y-1 border-gray-600' 
                    : 'bg-gray-900 hover:bg-gray-800 active:bg-black border-gray-800 hover:shadow-2xl'
                  }
                  focus:outline-none focus:ring-2 focus:ring-blue-400
                `}
              >
                <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white select-none">
                  {note}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mt-6 text-center max-w-md leading-relaxed">
        Click the keys to play piano notes!
      </p>
    </div>
  );
};
