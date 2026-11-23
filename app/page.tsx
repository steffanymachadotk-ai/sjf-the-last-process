'use client';
import { useState } from 'react';
const heroes = [
 {name:'Antônio Carlos',title:'The Guardian',className:'Guardião do Sistema',symbol:'♜',color:'#7db8ff',mission:'Fundamentos: sistema operacional, processos e escalonamento.'},
 {name:'Arthur Fabrício',title:'The Algorithm Mage',className:'Mago da Lógica',symbol:'✦',color:'#a9a0ff',mission:'SJF: regra de seleção, não preemptivo e SRTF.'},
 {name:'Jael Lucas',title:'The Strategist',className:'Estrategista',symbol:'♞',color:'#9bd9ff',mission:'Vantagens, limitações, starvation e comparação de algoritmos.'},
 {name:'Luan Soares',title:'The Engineer',className:'Engenheiro de Processos',symbol:'⚙',color:'#70e4d1',mission:'Simulação, cálculos, diagrama de Gantt e desafios.'},
 {name:'Ronald Juan',title:'The Oracle',className:'Oráculo da Inteligência',symbol:'⌬',color:'#82f3b5',mission:'Machine Learning, pesquisas recentes e escalonamento inteligente.'},
 {name:'Steffany Machado',title:'The Archon',className:'ArquitetA da Jornada',symbol:'✧',color:'#f0baff',mission:'Direção criativa, integração, narrativa, experiência e conclusão.'}
];
const chapters=[
 ['01','THE AWAKENING','O reino digital entra em colapso. Processos acumulam-se e o núcleo central perde o controle.'],
 ['02','THE SYSTEM','Conheça CPU, processos, estados, fila de prontos e o papel do escalonador.'],
 ['03','THE ALGORITHM','Desvende o Shortest Job First e sua regra de escolha.'],
 ['04','THE STRATEGY','Explore vantagens, limites, starvation e fairness.'],
 ['05','THE SIMULATION','Execute processos, compare resultados e leia o diagrama de Gantt.'],
 ['06','THE AI AWAKENING','Investigue como modelos preditivos podem estimar tempos de execução.'],
 ['07','THE FINAL BATTLE','Decida: eficiência, justiça ou previsão inteligente?']
];
export default function Home(){
 const [started,setStarted]=useState(false); const [chapter,setChapter]=useState(0); const [hero,setHero]=useState<number|null>(null); const [showLore,setShowLore]=useState(false);
 return <main className="shell">
  <header className="topbar"><div className="brand"><span className="brandmark">✧</span><span>SJF <b>·</b> THE LAST PROCESS</span></div><div className="status"><span className="dot"/> SYSTEM ONLINE <span className="statusDivider">|</span> BUILD 0.1</div></header>
  <section className="hero"><div className="heroShade"/><div className="heroContent"><div className="eyebrow">INTERACTIVE LEARNING EXPERIENCE · PIT 2026</div><h1>SJF:<br/><span>THE LAST PROCESS</span></h1><p className="tagline">Six heroes. One system. A race against processing time.</p><div className="heroActions"><button className="primary" onClick={()=>setStarted(true)}>{started?'CONTINUE MISSION':'ENTER THE KINGDOM'} <span>↗</span></button><button className="ghost" onClick={()=>setShowLore(!showLore)}> {showLore?'HIDE LORE':'DISCOVER THE LORE'} </button></div>{showLore&&<div className="lore">Aethelcore está à beira de um colapso. Milhares de processos aguardam CPU. Reúna os heróis, aprenda a lógica do SJF e decida como salvar o sistema — sem esquecer o custo de cada decisão.</div>}</div><div className="heroFoot"><span>CHAPTER 00 — THE CALL</span><span>SCROLL TO EXPLORE ↓</span></div></section>
  {started&&<div className="missionToast">✦ MISSION UNLOCKED <span>Chapter 01 · The Awakening</span></div>}
  <section className="section"><div className="sectionHeading"><div><div className="eyebrow">THE PARTY</div><h2>Meet the six heroes</h2></div><p>Uma equipe. Seis especialidades.<br/>Um único objetivo.</p></div><div className="heroGrid">{heroes.map((h,i)=><button key={h.name} className={`heroCard ${hero===i?'selected':''}`} onClick={()=>setHero(hero===i?null:i)} style={{'--accent':h.color} as React.CSSProperties}><div className="cardTop"><span className="heroSigil">{h.symbol}</span><span className="cardNo">HERO 0{i+1}</span></div><div className="cardName">{h.name}</div><div className="cardTitle">{h.title}</div><div className="cardClass">{h.className}</div>{hero===i&&<div className="heroMission">{h.mission}</div>}<div className="cardBottom"><span>PROFILE</span><span>↗</span></div></button>)}</div></section>
  <section className="section chapterSection"><div className="sectionHeading"><div><div className="eyebrow">THE CAMPAIGN</div><h2>Choose your next chapter</h2></div><p>O conhecimento é a arma.<br/>A decisão é de vocês.</p></div><div className="chapterList">{chapters.map((c,i)=><button key={c[0]} onClick={()=>setChapter(i)} className={`chapter ${chapter===i?'active':''}`}><span className="chapterNum">{c[0]}</span><span className="chapterInfo"><b>{c[1]}</b><small>{c[2]}</small></span><span className="chapterArrow">↗</span></button>)}</div><div className="chapterDetail"><div className="detailLabel">SELECTED MISSION</div><h3>{chapters[chapter][1]}</h3><p>{chapters[chapter][2]}</p><div className="detailStatus"><span className="dot"/> MISSION BRIEFING · PREVIEW</div></div></section>
  <footer><span>© SJF: THE LAST PROCESS</span><span>MADE FOR LEARNING · POWERED BY CURIOSITY</span></footer>
 </main>
}
