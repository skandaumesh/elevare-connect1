const fs = require('fs');
let code = fs.readFileSync('src/app/page.js', 'utf8');

let start = code.indexOf('function HeroShowcase() {');
let end = code.indexOf('/* ── Partners ── */');

if (start !== -1 && end !== -1) {
    let replacement = `function HeroShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % HERO_IMAGES.length), 3400);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "560px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Aesthetic Backdrop Glow */}
      <div style={{ position: "absolute", width: "500px", height: "500px", background: "radial-gradient(ellipse at center, rgba(168,85,247,0.15) 0%, transparent 60%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />

      {/* Cover Flow Container */}
      <div style={{ position: "relative", width: "320px", height: "450px" }}>
        
        {HERO_IMAGES.map((src, i) => {
          let offset = (i - active + HERO_IMAGES.length) % HERO_IMAGES.length;
          
          let translateX = "0%";
          let scale = 1;
          let zIndex = 10;
          let opacity = 1;
          let shadow = "0 40px 100px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.7)";
          let filter = "none";
          
          if (offset === 1) { // Right Image
            translateX = "80%";
            scale = 0.8;
            zIndex = 5;
            opacity = 0.8;
            shadow = "0 15px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.4)";
            filter = "blur(1px)";
          } else if (offset === 2) { // Left Image
            translateX = "-80%";
            scale = 0.8;
            zIndex = 5;
            opacity = 0.8;
            shadow = "0 15px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.4)";
            filter = "blur(1px)";
          }

          return (
            <div key={i} style={{
              position: "absolute",
              top: 0, left: 0, width: "100%", height: "100%",
              borderRadius: "28px",
              overflow: "hidden",
              transition: "all 0.9s cubic-bezier(0.25, 1, 0.3, 1)",
              transform: \`translateX(\${translateX}) scale(\${scale})\`,
              zIndex: zIndex,
              opacity: opacity,
              filter: filter,
              boxShadow: shadow,
              background: "#fff",
              padding: "8px"
            }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "20px", overflow: "hidden", position: "relative", cursor: "pointer" }} onClick={() => setActive(i)}>
                 <img src={src} alt="Elevare Gallery" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                 <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.5)", borderRadius: "20px" }} />
                 {/* Internal shadowing for depth */}
                 <div style={{ position: "absolute", inset: 0, background: offset === 0 ? "linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 20%)" : "rgba(255,255,255,0.15)", transition: "all 0.8s ease" }} />
              </div>
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
    console.log('Successfully completed cover flow slider script.');
} else {
    console.log('Failed to find replace markers!');
}
