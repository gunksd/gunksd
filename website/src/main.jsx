import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowDown, Github, Pause, Play, X, Menu, ExternalLink } from 'lucide-react';
import Threads from './components/Threads';
import './style.css';

const articles = [
  { topic: 'Cross-chain infrastructure', title: 'Beyond a single chain.', description: 'An analysis of full-chain ecosystems and the role of Axelar.', name: 'Axelar', url: 'https://blushing-ptarmigan-80b.notion.site/Analysis-of-Full-Chain-Track-Projects-and-the-New-Leader-Axelar-740845e7864d4928b5a834594cc4ab14?pvs=4', className: 'axelar' },
  { topic: 'Bitcoin ecosystem', title: 'New layers. New possibilities.', description: 'Comparing Bitcoin Layer 2 projects and exploring the Rooch ecosystem.', name: 'Rooch', url: 'https://blushing-ptarmigan-80b.notion.site/Layer2-Rooch-6647d9f7fd9441239774296f27edf85f?pvs=4', className: 'rooch' },
  { topic: 'Zero-knowledge infrastructure', title: 'Connecting through proof.', description: 'A closer look at Polyhedra Network and its approach to cross-chain infrastructure.', name: 'Polyhedra', url: 'https://blushing-ptarmigan-80b.notion.site/Polyhedra-Network-96726a8cdc3540dba9f9077819ffd824?pvs=4', className: 'polyhedra' },
];
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
        <a href="#about" onClick={() => setMenu(false)}>About</a><a href="#writing" onClick={() => setMenu(false)}>Writing</a><a href="#exploring" onClick={() => setMenu(false)}>Exploring</a>
        <a className="nav-contact" href="#contact" onClick={() => setMenu(false)}>Let’s connect <ArrowUpRight size={16}/></a>
      </nav>
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-top"><span>Independent mind. Open-source spirit.</span><span className="location">Based in China <span className="location-line"/></span></div>
        <div className="hero-copy"><p className="intro">Hey, I’m Awan Smith.</p><h1 id="hero-title">Curiosity,<br/>written in <span>code.</span></h1><p className="hero-description">Exploring the space between AI and Web3.<br/>Building, researching, and learning in public.</p>
          <div className="hero-actions"><a className="primary-button" href="#writing">Explore my writing <ArrowUpRight size={19}/></a><a className="text-button" href="https://github.com/gunksd" target="_blank" rel="noreferrer"><Github size={19}/> GitHub <ArrowUpRight size={15}/></a></div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="orbital orbital-one"/><div className="orbital orbital-two"/><div className="orbital orbital-three"/><div className="art-core"/>{motion && <Threads color={[0.97, 0.73, 0.84]} amplitude={1.8} distance={0.2} enableMouseInteraction/>}</div>
        <div className="art-caption" aria-hidden="true"><span className="crosshair">+</span><span>Ideas in motion<br/><small>AI × Web3 × human curiosity</small></span></div>
        <div className="hero-bottom"><a href="#about"><ArrowDown size={17}/> A little more about me</a><button className="motion-toggle" aria-pressed={motion} onClick={() => setMotion(!motion)}>{motion ? <Pause size={14}/> : <Play size={14}/>} Motion {motion ? 'on' : 'off'}</button></div>
      </section>
      <div className="stack-strip" aria-label="Technologies"><span>My building blocks</span><div><b>Solidity</b><i>✦</i><b>Ethereum</b><i>✦</i><b>Python</b><i>✦</i><b>Move</b><i>✦</i><b>Vue.js</b><i>✦</i><b>Bitcoin</b></div></div>
      <section id="about" className="about section-wrap">
        <div><p className="section-label">A little context</p><h2>Always a student.<br/>Always <span>building.</span></h2></div>
        <div className="about-copy"><p>I’m an aspiring Web3 developer from China, drawn to smart contracts, on-chain ecosystems, and what happens when AI meets decentralized systems.</p><p>I turn questions into code and research into writing. Lately, that means exploring AI + Web3 integration and contributing to open-source blockchain ecosystems.</p><div className="education"><span>Education</span><a href="https://www.ujs.edu.cn/" target="_blank" rel="noreferrer">Jiangsu University <ArrowUpRight size={16}/></a><p>Intelligent Science & Technology · Since 2022</p></div></div>
      </section>
      <section id="writing" className="writing section-wrap">
        <div className="section-heading"><div><p className="section-label">Notes from the rabbit hole</p><h2>Thinking out loud.</h2></div><p>Research, ideas, and a closer look<br/>at the ecosystems I’m exploring.</p></div>
        <div className="article-grid">{articles.map((a, i) => <a className="article" href={a.url} target="_blank" rel="noreferrer" key={a.name}>
          <div className={`article-visual ${a.className}`} aria-hidden="true"><div className="visual-shape"><i/><i/><i/><i/></div><span className="visual-name">{a.name}</span><span className="article-launch"><ArrowUpRight size={22}/></span></div>
          <div className="article-meta"><span>{a.topic}</span><span>0{i+1}</span></div><h3>{a.title}</h3><p>{a.description}</p><span className="read-link">Read the research <ArrowUpRight size={15}/></span>
        </a>)}</div>
      </section>
      <section id="exploring" className="exploring section-wrap"><div><p className="section-label">Work in progress</p><h2>From “what if”<br/>to <span>what’s next.</span></h2><p>Different threads, one constant:<br/>learning by making things.</p></div><div className="work-list">
        <div><span className="work-status completed">Built</span><h3>Machine learning × markets</h3><p>A machine learning-based quantitative trading system.</p><span className="work-tech">Python / Deep learning / Quantitative research</span></div>
        <div><span className="work-status">Exploring</span><h3>AI meets Web3</h3><p>Finding useful connections between intelligent systems and decentralized infrastructure.</p><span className="work-tech">AI / Smart contracts / On-chain ecosystems</span></div>
        <a href="https://github.com/gunksd" target="_blank" rel="noreferrer">Follow what I’m building <ArrowUpRight size={18}/></a>
      </div></section>
      <section id="contact" className="contact section-wrap"><p className="section-label">Good things start with a conversation.</p><h2>Let’s connect<br/>the <span>dots.</span><span className="contact-star" aria-hidden="true">✳</span></h2><div className="contact-links"><a href="https://github.com/gunksd" target="_blank" rel="noreferrer">GitHub <ArrowUpRight/></a><a href="https://x.com/wnyn12075574" target="_blank" rel="noreferrer">X / Twitter <ArrowUpRight/></a><a href="https://github.com/gunksd/img/blob/main/wechat.jpg?raw=true" target="_blank" rel="noreferrer">WeChat <ArrowUpRight/></a></div></section>
    </main>
    <footer><a className="wordmark" href="#">awan<span>✳</span></a><p>“To thine own self be true.”<span>愿你不舍昼夜，忠于自己。</span></p><a href="https://www.awansmith.cn/" target="_blank" rel="noreferrer">Personal blog <ExternalLink size={14}/></a></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
