const fs = require('fs');
let code = fs.readFileSync('src/app/page.js', 'utf8');

// The marker for where our component starts and ends
let start = code.indexOf('function HeroShowcase() {');
let end = code.indexOf('/* ── Partners ── */');

if (start !== -1 && end !== -1) {
    let replacement = `function HeroShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % HERO_IMAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "480px", margin: "0 auto", aspectRatio: "4/5", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Aesthetic Backdrop Glow */}
      <div style={{ position: "absolute", inset: "-10%", background: "radial-gradient(ellipse at center, rgba(168,85,247,0.18) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />

      {/* Main Container Frame */}
      <div style={{ position: "relative", width: "100%", height: "100%", background: "#fff", padding: "10px", borderRadius: "32px", boxShadow: "0 40px 100px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.02)", zIndex: 10 }}>
        
        {/* Inner Mask (The actual screen) */}
        <div style={{ width: "100%", height: "100%", borderRadius: "24px", overflow: "hidden", position: "relative", background: "#f8f8f8" }}>
          
          {HERO_IMAGES.map((src, i) => {
            const isActive = i === active;
            return (
              <div key={i} style={{
                position: "absolute",
                inset: 0,
                transition: "opacity 1.5s ease-in-out, transform 2.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
                opacity: isActive ? 1 : 0,
                transform: isActive ? "scale(1)" : "scale(1.08)",
                zIndex: isActive ? 5 : 1
              }}>
                <img src={src} alt="Elevare Platform" style={{ width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
                {/* Soft gradient bottom for contrast with progress bars */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 30%)", pointerEvents: "none" }} />
              </div>
            );
          })}
          
          {/* Edge Bezel Glare */}
          <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)", borderRadius: "24px", zIndex: 10, pointerEvents: "none" }} />
          
          {/* Elegant Progress Indicators */}
          <div style={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "10px", zIndex: 20 }}>
            {HERO_IMAGES.map((_, i) => (
              <div key={i} style={{ 
                width: i === active ? "26px" : "8px", 
                height: "8px", 
                borderRadius: "8px", 
                background: i === active ? "#fff" : "rgba(255,255,255,0.3)", 
                backdropFilter: "blur(4px)",
                transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)" 
              }} />
            ))}
          </div>

        </div>
      </div>
      
      {/* Decorative Star Accent */}
      <div style={{ position: "absolute", right: "-16px", top: "-16px", width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg, #C084FC, #9333EA)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 30px rgba(168,85,247,0.3)", zIndex: 20 }}>
        <Star size={24} fill="#fff" color="#fff" />
      </div>

    </div>
  );
}

`;
    let newCode = code.substring(0, start) + replacement + code.substring(end);
    fs.writeFileSync('src/app/page.js', newCode, 'utf8');
    console.log('Successfully completed hero sliding frame script.');
} else {
    console.log('Failed to find replace markers!', start, end);
}
