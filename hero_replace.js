const fs = require('fs');
let code = fs.readFileSync('src/app/page.js', 'utf8');
let start = code.indexOf('function HeroShowcase() {');
let end = code.indexOf('/* ── Partners ── */');

if (start !== -1 && end !== -1) {
    let replacement = `function HeroShowcase() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "560px", perspective: "1400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <style>{\`
        @keyframes isoFloatMain { 0%, 100% { transform: translateY(0) rotateX(35deg) rotateZ(-20deg) rotateY(10deg); } 50% { transform: translateY(-15px) rotateX(36deg) rotateZ(-21deg) rotateY(12deg); } }
        @keyframes isoFloatBack { 0%, 100% { transform: translateY(0) rotateX(35deg) rotateZ(-20deg) rotateY(10deg) scale(0.85); } 50% { transform: translateY(12px) rotateX(34deg) rotateZ(-19deg) rotateY(8deg) scale(0.85); } }
        @keyframes isoFloatAccent { 0%, 100% { transform: translateY(0) rotateX(25deg) rotateZ(-15deg); } 50% { transform: translateY(-20px) rotateX(28deg) rotateZ(-12deg); } }
        .iso-main { animation: isoFloatMain 8s ease-in-out infinite; }
        .iso-back { animation: isoFloatBack 10s ease-in-out infinite; }
        .iso-accent { animation: isoFloatAccent 6s ease-in-out infinite; }
      \`}</style>
      
      {/* Volumetric Glowing Sphere */}
      <div style={{ position: "absolute", width: "450px", height: "450px", background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 60%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", filter: "blur(70px)", pointerEvents: "none", zIndex: 0 }} />

      {/* Main Top Hover Glass Plate */}
      <div className="iso-main" style={{ position: "absolute", left: "0%", top: "10%", width: "320px", height: "420px", borderRadius: "32px", overflow: "hidden", zIndex: 10, background: "#fff", padding: "8px", boxShadow: "-40px 60px 100px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.8)" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: "24px", overflow: "hidden", position: "relative" }}>
           <img src={HERO_IMAGES[0]} alt="Mentorship" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
           {/* Glass Shimmer Overlay */}
           <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 40%)", pointerEvents: "none" }} />
           <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)" }} />
        </div>
      </div>

      {/* Background Lower Glass Plate */}
      <div className="iso-back" style={{ position: "absolute", right: "5%", bottom: "0%", width: "260px", height: "300px", borderRadius: "28px", overflow: "hidden", zIndex: 5, background: "rgba(255,255,255,0.7)", padding: "6px", backdropFilter: "blur(12px)", boxShadow: "-20px 30px 80px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255,255,255,0.6)" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: "22px", overflow: "hidden", position: "relative" }}>
           <img src={HERO_IMAGES[1]} alt="Strategy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
           <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%)", pointerEvents: "none" }} />
        </div>
      </div>

      {/* Decorative Orbiting Circular Glass Plate */}
      <div className="iso-accent" style={{ position: "absolute", right: "0%", top: "15%", width: "160px", height: "160px", borderRadius: "50%", overflow: "hidden", zIndex: 15, background: "#fff", padding: "6px", boxShadow: "-20px 40px 60px rgba(168,85,247,0.3), inset 0 0 0 1px rgba(255,255,255,0.9)" }}>
         <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", position: "relative" }}>
           <img src={HERO_IMAGES[2]} alt="Network" style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.15)" }} />
           <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.3)" }} />
         </div>
      </div>
      
    </div>
  );
}

`;
    let newCode = code.substring(0, start) + replacement + code.substring(end);
    fs.writeFileSync('src/app/page.js', newCode, 'utf8');
    console.log('Successfully applied Isometric 3D Layer layout to HeroShowcase!');
} else {
    console.log('Failed to find start or end tokens.');
}
