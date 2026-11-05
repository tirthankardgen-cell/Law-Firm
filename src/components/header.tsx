'use client';
import Link from 'next/link';
import { Emblem } from './emblem';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navigation } from '@/lib/content';
export function Header(){const [open,setOpen]=useState(false);const path=usePathname();const overlay=path==='/'||path==='/chambers';return <><div className="demo">DESIGN DEMONSTRATION <span>Fictional identity & illustrative content · Not a practising law firm</span></div><header className={`${overlay?'header-overlay':''} ${path==='/'?'header-home':''} ${open?'menu-is-open':''}`}><Link href="/" className="wordmark" onClick={()=>setOpen(false)}><Emblem className="brand-emblem"/><span>THE MODERN<br/>INDIAN CHAMBERS<small>न्याय · विवेक · मर्यादा</small></span></Link><button className="menu" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?'Close ×':'Menu +'}</button><nav id="navigation" className={open?'open':''} aria-label="Main navigation">{navigation.map(([label,slug])=><Link aria-current={path===`/${slug}`?'page':undefined} href={`/${slug}`} key={slug} onClick={()=>setOpen(false)}>{label}</Link>)}</nav></header></>}
