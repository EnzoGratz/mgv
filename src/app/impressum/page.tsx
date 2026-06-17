export default function ImpressumPage() {
  return (
    <div className="mgv-wrap py-32 min-h-screen">
      <h1 className="font-serif text-4xl mb-8" style={{ color: "var(--color-ink)" }}>Impressum</h1>
      
      <div className="mgv-card p-8 md:p-12 rounded-[var(--radius-card)]" style={{ background: "rgba(255,255,255,0.02)" }}>
        <p className="text-[15px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.7 }}>
          <strong>Platzhalter:</strong> Dies ist eine vorbereitete Seite für das finale Impressum.
        </p>

        <div className="p-4 rounded-xl mb-8 border-dashed" style={{ border: "1px solid rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.2)" }}>
          <p className="text-[13px] text-center" style={{ color: "var(--color-gold)" }}>
            Bitte vor Veröffentlichung rechtlich prüfen lassen und die echten Vereinsdaten hier einfügen.
          </p>
        </div>
        
        <h2 className="font-serif text-2xl mb-4" style={{ color: "var(--color-ink)" }}>Angaben gemäß § 5 TMG / Offenlegungspflicht laut § 25 Mediengesetz</h2>
        
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          <strong>MGV Seeboden</strong><br/>
          Treffling 266<br/>
          9871 Seeboden am Millstätter See<br/>
          Österreich
        </p>

        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          <strong>Vertreten durch:</strong><br/>
          [Name des Obmanns einfügen]<br/>
          (Obmann)
        </p>

        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          <strong>Kontakt:</strong><br/>
          Telefon: +43 664 2828082<br/>
          E-Mail: singen@mgv-seeboden.at
        </p>

        <h3 className="font-serif text-xl mb-2 mt-8" style={{ color: "var(--color-ink)" }}>Bildnachweise</h3>
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          Bildnachweise werden hier ergänzt.<br/>
          (Aktuell werden Platzhalter-Bilder von picsum.photos verwendet.)
        </p>

        <a href="/" className="mgv-btn mt-8">Zurück zur Startseite</a>
      </div>
    </div>
  );
}
