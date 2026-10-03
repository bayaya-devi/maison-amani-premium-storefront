import {useEffect,useState} from 'react'
import {AnimatePresence,motion,useReducedMotion} from 'framer-motion'
import {ChevronRight,Maximize2,X} from 'lucide-react'
import {Link,useLocation} from 'react-router-dom'
import {brands,products} from '../data/mock'
import {useI18n} from '../i18n/useI18n'
import type {Product} from '../types'

const heroImages=[
  'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1900&q=90',
  'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1900&q=90',
  'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1900&q=90',
]

export function HeroCarousel(){
  const {locale,t}=useI18n();const reduced=useReducedMotion();const [active,setActive]=useState(0)
  const copy=locale==='ar'
    ? [['اختيارات للمطبخ اليومي','تفاصيل عملية وأنيقة تمنح منزلك إيقاعاً أجمل.'],['مساحة منزل تشبهك','قطع مختارة بعناية للحياة اليومية.'],['أناقة تبدأ من الأساسيات','اكتشف أجهزة وأدوات تثق بها كل يوم.']]
    : [['Des choix pour le quotidien','Des pièces fiables et élégantes pour chaque geste à la maison.'],['Un intérieur qui vous ressemble','Des essentiels choisis avec exigence pour votre quotidien.'],['L’élégance commence ici','Découvrez des appareils et accessoires que vous garderez longtemps.']]
  useEffect(()=>{if(reduced)return;const id=window.setInterval(()=>setActive(v=>(v+1)%heroImages.length),5200);return()=>window.clearInterval(id)},[reduced])
  return <section className="hero hero-carousel" aria-label={t('hero')}>
    <AnimatePresence mode="wait"><motion.div key={active} className="hero-slide" style={{backgroundImage:`linear-gradient(90deg,#102f29e8,#102f2970),url('${heroImages[active]}')`}} initial={reduced?false:{opacity:0,scale:1.02}} animate={{opacity:1,scale:1}} exit={reduced?{}:{opacity:0}} transition={{duration:.55}} /></AnimatePresence>
    <div className="shell hero-content"><p className="kicker">ELECTRO RACHID · 2026</p><h1>{copy[active][0]}</h1><p>{copy[active][1]}</p><Link className="button light" to="/catalog">{t('discover')}</Link><div className="hero-dots" role="tablist">{heroImages.map((_,index)=><button key={index} aria-label={`${index+1}`} aria-selected={active===index} onClick={()=>setActive(index)} />)}</div></div>
  </section>
}

export function BrandCarousel(){
  const {t}=useI18n();const loop=[...brands,...brands]
  return <section className="brand-strip" aria-label={t('brands')}><div className="brand-track">{loop.map((brand,index)=><span key={`${brand.id}-${index}`}>{brand.name}</span>)}</div></section>
}

export function ProductGallery({product}:{product:Product}){
  const {pick}=useI18n();const [active,setActive]=useState(0);const [open,setOpen]=useState(false);const image=product.images[active]??product.images[0]
  return <><div className="gallery"><button className="gallery-main" onClick={()=>setOpen(true)} aria-label="Agrandir l’image"><img src={image.src} alt={pick(image.alt)}/><Maximize2 size={18}/></button><div className="gallery-thumbs">{product.images.map((item,index)=><button key={`${item.src}-${index}`} className={index===active?'active':''} onClick={()=>setActive(index)}><img src={item.src} alt={pick(item.alt)}/></button>)}</div></div><AnimatePresence>{open&&<motion.div className="image-lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} role="dialog" aria-modal="true"><button className="close" onClick={()=>setOpen(false)} aria-label="Fermer"><X/></button><img src={image.src} alt={pick(image.alt)}/></motion.div>}</AnimatePresence></>
}

export function ProductSuggestions({product,add}:{product:Product;add:(product:Product)=>void}){
  const {pick,t}=useI18n();const items=products.filter(item=>item.id!==product.id&&(item.category===product.category||item.popular)).slice(0,4)
  return <section className="related shell"><h2>{t('trending')}</h2><div className="related-grid">{items.map(item=><article key={item.id}><Link to={`/product/${item.slug}`}><img src={item.images[0].src} alt={pick(item.images[0].alt)}/><b>{pick(item.name)}</b></Link><button className="text-btn" onClick={()=>add(item)}>{t('add')}</button></article>)}</div></section>
}

export function SiteEnhancements(){
  const {pathname}=useLocation();const [online,setOnline]=useState(navigator.onLine);const [visible,setVisible]=useState(false)
  useEffect(()=>{const update=()=>setOnline(navigator.onLine);const scroll=()=>setVisible(window.scrollY>360);window.addEventListener('online',update);window.addEventListener('offline',update);window.addEventListener('scroll',scroll,{passive:true});scroll();return()=>{window.removeEventListener('online',update);window.removeEventListener('offline',update);window.removeEventListener('scroll',scroll)}},[])
  return <>{!online&&<div className="offline-banner" role="status">Connexion indisponible · les données enregistrées restent accessibles.</div>}{(pathname==='/'||pathname.startsWith('/catalog'))&&visible&&<button className="back-to-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Retour en haut"><ChevronRight size={18}/></button>}</>
}
