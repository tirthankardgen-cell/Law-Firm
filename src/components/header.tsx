'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navigation } from '@/lib/content';
export function Header(){const [open,setOpen]=useState(false);const path=usePathname();return <><div className="demo">DESIGN DEMONSTRATION <span>Fictional identity & illustrative content · Not a practising law firm</span></div><header><Link href="/" className="wordmark" onClick={()=>setOpen(false)}><span className="monogram">M<span>C</span></span><span>THE MODERN<br/>INDIAN CHAMBERS<small>PRINCIPLE · PRECISION · PRACTICE</small></span></Link><button className="menu" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?'Close ×':'Menu +'}</button><nav id="navigation" className={open?'open':''} aria-label="Main navigation">{navigation.map(([label,slug])=><Link aria-current={path===`/${slug}`?'page':undefined} href={`/${slug}`} key={slug} onClick={()=>setOpen(false)}>{label}</Link>)}</nav></header></>}
