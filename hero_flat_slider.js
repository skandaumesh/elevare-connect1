const fs = require('fs');
let code = fs.readFileSync('src/app/page.js', 'utf8');

let start = code.indexOf('function HeroShowcase() {');
let end = code.indexOf('/* ── Partners ── */');

if (start !== -1 && end !== -1) {
    let replacement = `function HeroShowcase() {
  const [active, setActive] = useState(4); // Start in middle of a padded array
  
  // We repeat images to create an 'infinite' track feeling without complex snapping logic
  const TRACK = [...HERO_IMAGES, ...HERO_IMAGES, ...HERO_IMAGES, ...HERO_IMAGES, ...HERO_IMAGES];

  useEffect(() => {
    const t = setInterval(() => {
       setActive(p => {
         // Seamlessly loop within the safe padded zone
         if (p > 10) return 4;
         return p + 1;
       });
    }, 3800);
    return () => clearInterval(t);
  }, []);

  const ITEM_WIDTH = 380;
  const ITEM_GAP = 28;

  return (
    <div style={{ position: "relative", width: "100%", height: "420px", display: "flex", alignItems: "center" }}>
      
      {/* Aesthetic Backdrop Glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "100%", height: "100%", background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />

      {/* The Sliding Filmstrip Track */}
      <div style={{
          position: "absolute",
          display: "flex", 
          gap: \`\${ITEM_GAP}px\`, 
          height: "360px",
          width: "max-content",
          transition: "transform 1.8s cubic-bezier(0.22, 1, 0.36, 1)",
          left: "50%",
          // Centers the 'active' item precisely on the 'left: 50%' origin
          transform: \`translateX(calc(-\${active * (ITEM_WIDTH + ITEM_GAP) + (ITEM_WIDTH / 2)}px))\`
      }}>
         {TRACK.map((src, i) => {
           let distance = Math.abs(active - i);
           let isCenter = active === i;

           return (
             <div key={i} style={{
                width: \`\${ITEM_WIDTH}px\`,
                height: "100%",
                borderRadius: "28px",
                overflow: "hidden",
                flexShrink: 0,
                boxShadow: isCenter ? "0 30px 60px rgba(0,0,0,0.18)" : "0 10px 30px rgba(0,0,0,0.08)",
                position: "relative",
                cursor: "pointer",
                transition: "all 1.8s cubic-bezier(0.22, 1, 0.36, 1)",
                transform: isCenter ? "scale(1)" : distance === 1 ? "scale(0.85)" : "scale(0.75)",
                opacity: isCenter ? 1 : distance === 1 ? 0.6 : 0.2,
                zIndex: isCenter ? 10 : 5 - distance
             }} onClick={() => setActive(i)}>
               
               <img src={src} alt="Elevare Feature" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
               
               {/* Ambient dimming over inactive images */}
               <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)", opacity: isCenter ? 0 : 1, transition: "opacity 1.8s" }} />
               
               {/* Crisp physical bezels */}
               <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,0.6)", borderRadius: "28px", pointerEvents: "none" }} />
             </div>
           );
         })}
      </div>
      
    </div>
  );
}

`;
    let newCode = code.substring(0, start) + replacement + code.substring(end);
    fs.writeFileSync('src/app/page.js', newCode, 'utf8');
    console.log('Successfully completed flat auto-sliding cover flow logic!');
} else {
    console.log('Failed to find replacement markers!');
}
