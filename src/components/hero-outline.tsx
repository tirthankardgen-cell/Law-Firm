/** Decorative pen study of a stone arch; intentionally irregular double strokes. */
export function HeroOutline() {
  return (
    <div className="hero-outline" aria-hidden="true">
      {['left', 'right'].map((side) => (
        <svg key={side} className={`hero-outline-${side}`} viewBox="0 0 240 600" fill="none" focusable="false">
          <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path className="outline-primary" d="M29 558 31 210C30 113 99 49 205 42M52 553 53 212C53 128 113 72 210 67M34 208 55 209M24 557l36-1 1 17-40 1 3-17ZM21 579l47-1 1 12-54 1 6-12ZM25 191l37-1 2 17-42 1 3-17Z"/>
            <path className="outline-secondary" d="M25 552 27 212C27 109 97 45 203 38M57 547 58 214C59 132 117 78 211 72M39 220l-2 327M47 220l-2 327M21 196l43-1M23 565l35-1M14 594l58-1"/>
            <path className="outline-primary" d="M103 557 104 259C104 195 145 150 211 145M121 555 123 261C123 206 157 171 214 167M99 246l28-1 1 15-32 1 3-15ZM96 556l34-1 2 16-39 1 3-16ZM90 577l47-1 2 13-52 1 3-13Z"/>
            <path className="outline-secondary" d="m111 270-2 278m9-276-2 276M99 239c5-56 49-96 111-99M30 112l18 11m12-49 14 17m26-39 9 19m31-32 5 20m36-24 2 18M106 205l14 7m7-36 12 13m15-31 8 15m19-26 4 18"/>
            <path className="outline-guide" d="M8 597h217M15 18v575M207 25l9 554M7 209h67M84 260h61M199 42h28M202 66h27"/>
          </g>
        </svg>
      ))}
    </div>
  );
}
