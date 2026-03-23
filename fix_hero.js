const fs = require('fs');
let code = fs.readFileSync('src/app/page.js', 'utf8');
let start = code.indexOf('function HeroShowcase() {');
let end = code.indexOf('/* ── Partners ── */');
if (start !== -1 && end !== -1) {
  let replacement = `function HeroShowcase() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "580px", margin: "0 auto", padding: "10px" }}>
      <style>{\`
        @keyframes customFloat1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes customFloat2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(8px); } }
        .grid-f1 { animation: customFloat1 7s ease-in-out infinite; }
        .grid-f2 { animation: customFloat2 8s ease-in-out infinite; }
      \`}</style>

      {/* Aesthetic Backdrop Glow */}
      <div style={{ position: "absolute", inset: "-10%", background: "radial-gradient(ellipse at center, rgba(168,85,247,0.18) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none", zIndex: 0 }} />

      {/* Fluid CSS Grid Bento */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: "16px", position: "relative", zIndex: 10 }}>
        
        {/* Tall Feature Block */}
        <div className="grid-f1" style={{ gridColumn: "1 / 2", gridRow: "1 / 3", background: "#fff", padding: "8px", borderRadius: "24px", boxShadow: "0 30px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.03)" }}>
           <div style={{ width: "100%", height: "100%", borderRadius: "16px", overflow: "hidden", position: "relative" }}>
             <img src={HERO_IMAGES[0]} alt="Mentorship" style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "360px" }} />
             <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)", borderRadius: "16px" }} />
             <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 30%)", pointerEvents: "none" }} />
           </div>
        </div>

        {/* Top Right Block */}
        <div className="grid-f2" style={{ gridColumn: "2 / 3", gridRow: "1 / 2", background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", padding: "6px", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.8)" }}>
           <div style={{ width: "100%", height: "100%", borderRadius: "14px", overflow: "hidden", position: "relative" }}>
             <img src={HERO_IMAGES[1]} alt="Workshop" style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "180px" }} />
             <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)", borderRadius: "14px" }} />
           </div>
        </div>

        {/* Bottom Right Block */}
        <div className="grid-f1" style={{ gridColumn: "2 / 3", gridRow: "2 / 3", background: "#fff", padding: "6px", borderRadius: "20px", boxShadow: "0 15px 30px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)" }}>
           <div style={{ width: "100%", height: "100%", borderRadius: "14px", overflow: "hidden", position: "relative" }}>
             <img src={HERO_IMAGES[2]} alt="Community" style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "160px" }} />
             <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)", borderRadius: "14px" }} />
           </div>
        </div>
      </div>

      {/* Decorative Floating Accent */}
      <div style={{ position: "absolute", right: "-12px", top: "-12px", width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg, #C084FC, #9333EA)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(168,85,247,0.3)", zIndex: 20 }}>
        <Star size={20} fill="#fff" color="#fff" />
      </div>
    </div>
  );
}

`;
  let newCode = code.substring(0, start) + replacement + code.substring(end);
  fs.writeFileSync('src/app/page.js', newCode, 'utf8');
  console.log('Successfully replaced HeroShowcase');
} else {
  console.log('Could not find markers');
}
