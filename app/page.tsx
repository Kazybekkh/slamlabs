export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden bg-background text-foreground">
      <div className="scanlines pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative w-full max-w-[560px] px-6">
        <svg
          viewBox="0 0 480 320"
          className="block h-auto w-full text-white"
          aria-hidden
        >
          <defs>
            <pattern id="floorPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5" />
            </pattern>
          </defs>

          {/* ── ceiling rail ─────────────────────────────── */}
          <line x1="0" y1="24" x2="480" y2="24" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.5" />
          <line x1="0" y1="20" x2="480" y2="20" stroke="currentColor" strokeOpacity="0.2" />
          <line x1="0" y1="28" x2="480" y2="28" stroke="currentColor" strokeOpacity="0.15" strokeDasharray="3 5" />

          {/* ── floor / platform ─────────────────────────── */}
          <rect x="40" y="290" width="400" height="20" fill="url(#floorPattern)" />
          <line x1="40" y1="288" x2="440" y2="288" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.5" />
          <line x1="40" y1="292" x2="440" y2="292" stroke="currentColor" strokeOpacity="0.15" strokeDasharray="3 4" />

          {/* ── LEFT mount tube (rail → shoulder) ────────── */}
          <rect x="126" y="14" width="28" height="10" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
          <circle cx="133" cy="19" r="1" fill="currentColor" />
          <circle cx="140" cy="19" r="1" fill="currentColor" />
          <circle cx="147" cy="19" r="1" fill="currentColor" />
          <rect x="137" y="24" width="6" height="76" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.8" />
          <line x1="138" y1="38" x2="142" y2="38" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.6" />
          <line x1="138" y1="58" x2="142" y2="58" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.6" />
          <line x1="138" y1="78" x2="142" y2="78" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.6" />

          {/* ── RIGHT mount tube ─────────────────────────── */}
          <rect x="326" y="14" width="28" height="10" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
          <circle cx="333" cy="19" r="1" fill="currentColor" />
          <circle cx="340" cy="19" r="1" fill="currentColor" />
          <circle cx="347" cy="19" r="1" fill="currentColor" />
          <rect x="337" y="24" width="6" height="76" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.8" />
          <line x1="338" y1="38" x2="342" y2="38" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.6" />
          <line x1="338" y1="58" x2="342" y2="58" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.6" />
          <line x1="338" y1="78" x2="342" y2="78" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.6" />

          {/* ── HUMANOID DROID — body always present ─────── */}
          <g stroke="currentColor" strokeWidth="1.6" fill="none">
            <rect x="222" y="244" width="11" height="42" />
            <rect x="247" y="244" width="11" height="42" />
            <rect x="218" y="284" width="19" height="4" fill="currentColor" />
            <rect x="243" y="284" width="19" height="4" fill="currentColor" />
            <line x1="227.5" y1="252" x2="227.5" y2="280" strokeOpacity="0.4" />
            <line x1="252.5" y1="252" x2="252.5" y2="280" strokeOpacity="0.4" />

            <rect x="208" y="184" width="64" height="60" rx="2" />
            <line x1="240" y1="184" x2="240" y2="244" strokeOpacity="0.35" />
            <line x1="208" y1="200" x2="272" y2="200" strokeOpacity="0.35" />
            <rect x="226" y="206" width="28" height="14" rx="1" />
            <circle cx="240" cy="213" r="1.5" fill="currentColor" />

            {/* shoulder sockets — the slot the arm attaches to */}
            <rect x="200" y="188" width="8" height="6" fill="currentColor" fillOpacity="0.3" />
            <rect x="272" y="188" width="8" height="6" fill="currentColor" fillOpacity="0.3" />
            <line x1="200" y1="191" x2="208" y2="191" strokeOpacity="0.4" />
            <line x1="272" y1="191" x2="280" y2="191" strokeOpacity="0.4" />

            <rect x="218" y="148" width="44" height="32" rx="3" />
            <line x1="218" y1="160" x2="262" y2="160" strokeOpacity="0.35" />
            <circle cx="230" cy="170" r="2.4" fill="currentColor" stroke="none" className="droid-eye" />
            <circle cx="250" cy="170" r="2.4" fill="currentColor" stroke="none" className="droid-eye" />
            <line x1="240" y1="180" x2="240" y2="184" />
            <rect x="234" y="180" width="12" height="4" fill="currentColor" fillOpacity="0.4" />
            <line x1="240" y1="148" x2="240" y2="138" />
            <circle cx="240" cy="136" r="1.6" fill="currentColor" stroke="none" />
          </g>

          {/* ── ATTACHED droid arms (final position) ─────── */}
          <g className="droid-arm-left-attached" stroke="currentColor" strokeWidth="1.6" fill="none">
            <rect x="192" y="194" width="14" height="38" rx="2" />
            <rect x="194" y="232" width="10" height="22" rx="1.5" />
            <circle cx="199" cy="256" r="3" fill="currentColor" />
            <line x1="199" y1="200" x2="199" y2="226" strokeOpacity="0.4" />
          </g>
          <g className="droid-arm-right-attached" stroke="currentColor" strokeWidth="1.6" fill="none">
            <rect x="274" y="194" width="14" height="38" rx="2" />
            <rect x="276" y="232" width="10" height="22" rx="1.5" />
            <circle cx="281" cy="256" r="3" fill="currentColor" />
            <line x1="281" y1="200" x2="281" y2="226" strokeOpacity="0.4" />
          </g>

          {/* ── LEFT ARTICULATED ARM ─────────────────────── */}
          <g className="arm-left" style={{ transformOrigin: "140px 100px", transformBox: "view-box" }}>
            <circle cx="140" cy="100" r="9" fill="currentColor" />
            <circle cx="140" cy="100" r="6" fill="#09090b" />
            <circle cx="140" cy="100" r="2" fill="currentColor" />

            <rect x="133" y="100" width="14" height="64" rx="3" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" />
            <line x1="136" y1="106" x2="136" y2="158" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.8" />
            <line x1="144" y1="106" x2="144" y2="158" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.8" />
            <line x1="133" y1="118" x2="147" y2="118" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.6" />
            <line x1="133" y1="146" x2="147" y2="146" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.6" />

            <circle cx="140" cy="166" r="8" fill="currentColor" />
            <circle cx="140" cy="166" r="5" fill="#09090b" />
            <circle cx="140" cy="166" r="1.5" fill="currentColor" />

            <g className="arm-left-fore" style={{ transformOrigin: "140px 166px", transformBox: "view-box" }}>
              <rect x="134" y="166" width="12" height="58" rx="2.5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" />
              <line x1="137" y1="172" x2="137" y2="218" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.7" />
              <line x1="143" y1="172" x2="143" y2="218" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.7" />
              <line x1="134" y1="188" x2="146" y2="188" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.6" />
              <line x1="134" y1="208" x2="146" y2="208" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.6" />

              <circle cx="140" cy="226" r="6" fill="currentColor" />
              <circle cx="140" cy="226" r="3.5" fill="#09090b" />
              <circle cx="140" cy="226" r="1" fill="currentColor" />

              <g className="gripper-left">
                <g className="gripper-claws-left" style={{ transformOrigin: "140px 226px", transformBox: "view-box" }}>
                  <rect x="130" y="230" width="20" height="4" fill="currentColor" />
                  <rect x="132" y="234" width="16" height="3" fill="currentColor" fillOpacity="0.6" />

                  <path d="M 133 237 L 130 244 L 132 252 L 136 256" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="135" y1="240" x2="135" y2="250" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />

                  <path d="M 147 237 L 150 244 L 148 252 L 144 256" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="145" y1="240" x2="145" y2="250" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />

                  <circle cx="140" cy="240" r="2" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="0.6" />
                </g>

                {/* CARRIED arm — sibling of claws (still inside gripper),
                    so it follows the gripper's arc but isn't squished by claw pinch */}
                <g className="carried-arm-left" stroke="currentColor" strokeWidth="1.6" fill="none">
                  <rect x="133" y="232" width="14" height="38" rx="2" />
                  <rect x="135" y="270" width="10" height="22" rx="1.5" />
                  <circle cx="140" cy="294" r="3" fill="currentColor" />
                  <line x1="140" y1="238" x2="140" y2="264" strokeOpacity="0.4" />
                </g>
              </g>
            </g>
          </g>

          {/* ── RIGHT ARTICULATED ARM (mirror) ───────────── */}
          <g className="arm-right" style={{ transformOrigin: "340px 100px", transformBox: "view-box" }}>
            <circle cx="340" cy="100" r="9" fill="currentColor" />
            <circle cx="340" cy="100" r="6" fill="#09090b" />
            <circle cx="340" cy="100" r="2" fill="currentColor" />

            <rect x="333" y="100" width="14" height="64" rx="3" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" />
            <line x1="336" y1="106" x2="336" y2="158" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.8" />
            <line x1="344" y1="106" x2="344" y2="158" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.8" />
            <line x1="333" y1="118" x2="347" y2="118" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.6" />
            <line x1="333" y1="146" x2="347" y2="146" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.6" />

            <circle cx="340" cy="166" r="8" fill="currentColor" />
            <circle cx="340" cy="166" r="5" fill="#09090b" />
            <circle cx="340" cy="166" r="1.5" fill="currentColor" />

            <g className="arm-right-fore" style={{ transformOrigin: "340px 166px", transformBox: "view-box" }}>
              <rect x="334" y="166" width="12" height="58" rx="2.5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" />
              <line x1="337" y1="172" x2="337" y2="218" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.7" />
              <line x1="343" y1="172" x2="343" y2="218" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.7" />
              <line x1="334" y1="188" x2="346" y2="188" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.6" />
              <line x1="334" y1="208" x2="346" y2="208" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.6" />

              <circle cx="340" cy="226" r="6" fill="currentColor" />
              <circle cx="340" cy="226" r="3.5" fill="#09090b" />
              <circle cx="340" cy="226" r="1" fill="currentColor" />

              <g className="gripper-right">
                <g className="gripper-claws-right" style={{ transformOrigin: "340px 226px", transformBox: "view-box" }}>
                  <rect x="330" y="230" width="20" height="4" fill="currentColor" />
                  <rect x="332" y="234" width="16" height="3" fill="currentColor" fillOpacity="0.6" />

                  <path d="M 333 237 L 330 244 L 332 252 L 336 256" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="335" y1="240" x2="335" y2="250" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />

                  <path d="M 347 237 L 350 244 L 348 252 L 344 256" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="345" y1="240" x2="345" y2="250" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />

                  <circle cx="340" cy="240" r="2" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="0.6" />
                </g>

                {/* CARRIED arm — sibling of claws (still inside gripper) */}
                <g className="carried-arm-right" stroke="currentColor" strokeWidth="1.6" fill="none">
                  <rect x="333" y="232" width="14" height="38" rx="2" />
                  <rect x="335" y="270" width="10" height="22" rx="1.5" />
                  <circle cx="340" cy="294" r="3" fill="currentColor" />
                  <line x1="340" y1="238" x2="340" y2="264" strokeOpacity="0.4" />
                </g>
              </g>
            </g>
          </g>

          {/* ── welding sparks at attachment points ──────── */}
          <g fill="currentColor">
            <circle cx="200" cy="194" r="1.6" className="spark spark-1" />
            <circle cx="208" cy="198" r="1.4" className="spark spark-2" />
            <circle cx="195" cy="200" r="1.2" className="spark spark-3" />
            <circle cx="280" cy="194" r="1.6" className="spark spark-4" />
            <circle cx="272" cy="198" r="1.4" className="spark spark-5" />
            <circle cx="285" cy="200" r="1.2" className="spark spark-6" />
          </g>
        </svg>
      </div>

      <p className="relative font-mono text-sm uppercase tracking-[0.3em] text-white/60">
        slamlabs.ai building<span className="cursor">_</span>
      </p>
    </main>
  );
}
