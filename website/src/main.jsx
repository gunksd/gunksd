import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowDown, Github, Pause, Play, X, Menu, ExternalLink } from 'lucide-react';
import Threads from './components/Threads';
import './style.css';

function App() {
  const [motion, setMotion] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setMotion(!media.matches);
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);
  useEffect(() => { document.documentElement.dataset.motion = motion ? 'on' : 'off'; }, [motion]);
  useEffect(() => {
    const close = e => { if(e.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header">
      <a className="wordmark" href="#" aria-label="Awan Smith home">awan<span>✳</span></a>
      <button className="menu-toggle" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} aria-controls="navigation" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
      <nav id="navigation" className={menu ? 'nav open' : 'nav'} aria-label="Main navigation">
        <a href="#about" onClick={() => setMenu(false)}>About</a><a href="#exploring" onClick={() => setMenu(false)}>Exploring</a>
        <a className="nav-contact" href="#contact" onClick={() => setMenu(false)}>Let’s connect <ArrowUpRight size={16}/></a>
      </nav>
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-top"><span>Independent mind. Open-source spirit.</span><span className="location">Based in China <span className="location-line"/></span></div>
        <div className="hero-copy"><p className="intro">Hey, I’m Awan Smith.</p><h1 id="hero-title">Curiosity,<br/>written in <span>code.</span></h1><p className="hero-description">Exploring the space between AI and Web3.<br/>Building, researching, and learning in public.</p>
          <div className="hero-actions"><a className="primary-button" href="#exploring">Explore my work <ArrowUpRight size={19}/></a><a className="text-button" href="https://github.com/gunksd" target="_blank" rel="noreferrer"><Github size={19}/> GitHub <ArrowUpRight size={15}/></a></div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="orbital orbital-one"/><div className="orbital orbital-two"/><div className="orbital orbital-three"/><div className="art-core"/>{motion && <Threads color={[0.97, 0.73, 0.84]} amplitude={1.8} distance={0.2} enableMouseInteraction/>}</div>
        <div className="art-caption" aria-hidden="true"><span className="crosshair">+</span><span>Ideas in motion<br/><small>AI × Web3 × human curiosity</small></span></div>
        <div className="hero-bottom"><a href="#about"><ArrowDown size={17}/> A little more about me</a><button className="motion-toggle" aria-pressed={motion} onClick={() => setMotion(!motion)}>{motion ? <Pause size={14}/> : <Play size={14}/>} Motion {motion ? 'on' : 'off'}</button></div>
      </section>
      <div className="stack-strip" aria-label="Technologies"><span>My building blocks</span><div><b>Solidity</b><i>✦</i><b>Ethereum</b><i>✦</i><b>Python</b><i>✦</i><b>Move</b><i>✦</i><b>Vue.js</b><i>✦</i><b>Bitcoin</b></div></div>
      <div className="personal-motto" role="img" aria-label="“To thine own self be true.” 愿你不舍昼夜，忠于自己。">
        <p className="motto-english" aria-hidden="true">“To thine own self be true.”</p>
        <p className="motto-chinese" lang="zh-CN" aria-hidden="true">愿你不舍昼夜，忠于自己。</p>
      </div>
      <section id="about" className="about section-wrap">
        <div><p className="section-label">A little context</p><h2>Always curious.<br/>Always <span>building.</span></h2></div>
        <div className="about-copy"><p>I’m an aspiring Web3 developer from China, drawn to smart contracts, on-chain ecosystems, and what happens when AI meets decentralized systems.</p><p>I turn questions into code and research into writing. Lately, that means exploring AI + Web3 integration and contributing to open-source blockchain ecosystems.</p><div className="education"><span>Education</span><a href="https://www.ujs.edu.cn/" target="_blank" rel="noreferrer">Jiangsu University <ArrowUpRight size={16}/></a><p>Intelligent Science & Technology<br/>September 2022 – July 2026 · Graduated</p></div></div>
      </section>
      <section id="exploring" className="exploring section-wrap"><div><p className="section-label">Work in progress</p><h2>From “what if”<br/>to <span>what’s next.</span></h2><p>Different threads, one constant:<br/>learning by making things.</p></div><div className="work-list">
        <div><span className="work-status completed">Built</span><h3>Machine learning × markets</h3><p>A machine learning-based quantitative trading system.</p><span className="work-tech">Python / Deep learning / Quantitative research</span></div>
        <div><span className="work-status">Exploring</span><h3>AI meets Web3</h3><p>Finding useful connections between intelligent systems and decentralized infrastructure.</p><span className="work-tech">AI / Smart contracts / On-chain ecosystems</span></div>
        <a href="https://github.com/gunksd" target="_blank" rel="noreferrer">Follow what I’m building <ArrowUpRight size={18}/></a>
      </div></section>
      <section id="contact" className="contact section-wrap"><p className="section-label">Good things start with a conversation.</p><h2>Let’s connect<br/>the <span>dots.</span><span className="contact-star" aria-hidden="true">✳</span></h2><div className="contact-links"><a href="https://github.com/gunksd" target="_blank" rel="noreferrer">GitHub <ArrowUpRight/></a><a href="https://x.com/wnyn12075574" target="_blank" rel="noreferrer">X / Twitter <ArrowUpRight/></a></div></section>
    </main>
    <footer><a className="wordmark" href="#">awan<span>✳</span></a><p>Jiangsu University · Class of 2026</p><a href="https://www.awansmith.cn/" target="_blank" rel="noreferrer">Personal blog <ExternalLink size={14}/></a></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
