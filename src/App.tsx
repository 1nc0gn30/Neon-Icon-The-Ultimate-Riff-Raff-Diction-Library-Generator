/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw, BookOpen, Wand2, Music, Sparkles, Car, SkipBack, SkipForward, Play, Pause, Volume2 } from 'lucide-react';
import YouTube from 'react-youtube';
import { 
  generateTrueAlliteration, 
  generateRapGame, 
  REAL_METAPHORS,
  THOUSAND_QUOTES,
  RIFF_SONGS,
  getRandom 
} from './data/riffraff';

export default function App() {
  const [activeTab, setActiveTab] = useState<'generator' | 'wiki'>('generator');
  
  // Generator State
  const [alliteration, setAlliteration] = useState<string>('');
  const [rapGame, setRapGame] = useState<string>('');
  const [randomMetaphor, setRandomMetaphor] = useState<string>('');

  // Music Player State
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState<any>(null);

  useEffect(() => {
    generateAll();
  }, []);

  const generateAll = () => {
    setAlliteration(generateTrueAlliteration());
    setRapGame(generateRapGame());
    setRandomMetaphor(getRandom(REAL_METAPHORS));
  };

  const onReady = (event: any) => {
    // react-youtube event object contains the player as event.target
    setPlayer(event.target);
  };

  const togglePlay = () => {
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % RIFF_SONGS.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
    if (player) {
      player.loadVideoById(RIFF_SONGS[nextIndex].id);
    }
  };

  const prevSong = () => {
    const prevIndex = (currentSongIndex - 1 + RIFF_SONGS.length) % RIFF_SONGS.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
    if (player) {
      player.loadVideoById(RIFF_SONGS[prevIndex].id);
    }
  };

  return (
    <>
      <div className="synth-grid"></div>
      
      <div className="w-full bg-[#ff007f] text-black font-bold font-mono py-1 border-y border-white marquee-container shadow-[0_0_15px_rgba(255,0,127,0.8)]">
        <div className="marquee-content text-sm tracking-widest uppercase">
          ✦ JODY HIGHROLLER ✦ THE NEON ICON ✦ AQUABERRY AQUARIUS ✦ RAP GAME JAMES FRANCO ✦ PEACH PANTHER ✦ BUTTERSCOTCH BOSS ✦
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8 pb-40 relative flex flex-col min-h-[90vh]">
        <header className="text-center mb-10 mt-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <h1 className="text-5xl md:text-7xl font-display uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#fffb00] to-[#ff007f] text-glow mb-2">
              Neon Icon
            </h1>
            <p className="text-[#00f3ff] font-mono tracking-widest text-lg uppercase text-glow-blue flex items-center justify-center gap-2">
              <Car size={18} className="text-[#00f3ff]" />
              Riff Raff Parody Generator
              <Car size={18} className="text-[#00f3ff]" />
            </p>
          </motion.div>
        </header>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('generator')}
            className={`px-6 py-3 font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'generator'
                ? 'bg-[#ff007f] text-white box-glow'
                : 'bg-transparent text-[#ff007f] border border-[#ff007f] hover:bg-[rgba(255,0,127,0.2)]'
            }`}
          >
            <Wand2 className="inline-block mr-2" size={18} />
            Generator
          </button>
          <button
            onClick={() => setActiveTab('wiki')}
            className={`px-6 py-3 font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'wiki'
                ? 'bg-[#00f3ff] text-black shadow-[0_0_15px_rgba(0,243,255,0.8)]'
                : 'bg-transparent text-[#00f3ff] border border-[#00f3ff] hover:bg-[rgba(0,243,255,0.2)]'
            }`}
          >
            <BookOpen className="inline-block mr-2" size={18} />
            The Wiki
          </button>
        </div>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            {activeTab === 'generator' ? (
              <motion.div
                key="generator"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Rap Game Generator */}
                <div className="glass-panel p-8 text-center relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent opacity-50"></div>
                  <h3 className="text-[#00f3ff] font-mono text-xs uppercase tracking-[0.2em] mb-4">You Are The...</h3>
                  <p className="text-4xl md:text-5xl font-display text-white text-glow-blue tracking-wide mb-6">
                    {rapGame}
                  </p>
                </div>

                {/* Alliteration Generator */}
                <div className="glass-panel p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff007f] to-transparent opacity-50"></div>
                  <h3 className="text-[#ff007f] font-mono text-xs uppercase tracking-[0.2em] mb-4">Dropping out the...</h3>
                  <p className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] to-[#9d00ff] text-glow mb-6">
                    {alliteration}
                  </p>
                </div>

                {/* Random Metaphor */}
                <div className="glass-panel p-8 text-center relative overflow-hidden border-[#fffb00] border-opacity-30">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#fffb00] to-transparent opacity-50"></div>
                  <h3 className="text-[#fffb00] font-mono text-xs uppercase tracking-[0.2em] mb-4">Spitting that fire...</h3>
                  <p className="text-2xl md:text-3xl font-sans italic text-white mb-6 leading-relaxed">
                    "{randomMetaphor}"
                  </p>
                </div>

                <div className="flex justify-center mt-8">
                  <button
                    onClick={generateAll}
                    className="group relative px-8 py-4 bg-[#9d00ff] text-white font-display text-xl uppercase tracking-widest hover:bg-[#ff007f] transition-colors duration-300 shadow-[0_0_20px_rgba(157,0,255,0.6)] hover:shadow-[0_0_30px_rgba(255,0,127,0.8)] border border-[#fffb00] overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                    <span className="relative flex items-center gap-3">
                      <RefreshCw size={24} className="group-hover:rotate-180 transition-transform duration-700" />
                      Generate More Heat
                    </span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="wiki"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="glass-panel p-6 md:p-10"
              >
                <div className="flex items-center gap-3 mb-8 border-b border-[rgba(255,0,127,0.3)] pb-4">
                  <Sparkles className="text-[#fffb00]" size={32} />
                  <h2 className="text-3xl font-display text-[#fffb00] tracking-widest uppercase">The Infamous Metaphors ({THOUSAND_QUOTES.length})</h2>
                </div>
                
                <div className="h-[60vh] overflow-y-auto pr-4 space-y-6 custom-scrollbar">
                  {THOUSAND_QUOTES.map((metaphor, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-4 p-4 hover:bg-[rgba(157,0,255,0.1)] rounded-lg transition-colors border border-transparent hover:border-[rgba(0,243,255,0.3)] animate-fade-in-up"
                    >
                      <Music className="text-[#00f3ff] mt-1 shrink-0" size={20} />
                      <span className="text-lg md:text-xl font-sans italic text-gray-200">
                        {metaphor}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Car Radio Floating Player */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <div className="max-w-4xl mx-auto glass-panel border-t-2 border-[#00f3ff] shadow-[0_-10px_30px_rgba(0,243,255,0.2)] p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="bg-[#1a0429] p-3 border border-[#ff007f] shadow-[0_0_10px_rgba(255,0,127,0.3)]">
              <Music className="text-[#ff007f] animate-pulse" size={24} />
            </div>
            <div>
              <div className="text-[10px] text-[#ff007f] uppercase tracking-widest font-mono mb-1">Now Playing on Neon FM</div>
              <div className="text-sm md:text-base font-display text-white tracking-wide truncate max-w-[200px]">
                {RIFF_SONGS[currentSongIndex].title}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={prevSong} className="text-[#00f3ff] hover:text-white transition-colors">
              <SkipBack size={32} />
            </button>
            <button 
              onClick={togglePlay}
              className="w-14 h-14 bg-[#00f3ff] rounded-full flex items-center justify-center text-[#0b0213] shadow-[0_0_20px_rgba(0,243,255,0.6)] hover:scale-110 transition-transform"
            >
              {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
            </button>
            <button onClick={nextSong} className="text-[#00f3ff] hover:text-white transition-colors">
              <SkipForward size={32} />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[#ff007f]">
            <Volume2 size={20} />
            <div className="w-24 h-1 bg-[#1a0429] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#ff007f] to-[#9d00ff] w-[80%]"></div>
            </div>
          </div>
        </div>

        {/* Hidden YouTube Player */}
        <div className="hidden">
          <YouTube
            videoId={RIFF_SONGS[currentSongIndex].id}
            opts={{
              height: '0',
              width: '0',
              playerVars: {
                autoplay: isPlaying ? 1 : 0,
                controls: 0,
              },
            }}
            onReady={onReady}
            onEnd={nextSong}
          />
        </div>
      </footer>
    </>
  );
}
