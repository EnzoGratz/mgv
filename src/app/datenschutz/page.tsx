export default function DatenschutzPage() {
  return (
    <div className="mgv-wrap py-32 min-h-screen">
      <h1 className="font-serif text-4xl mb-8" style={{ color: "var(--color-ink)" }}>Datenschutzerklärung</h1>
      
      <div className="mgv-card p-8 md:p-12 rounded-[var(--radius-card)]" style={{ background: "rgba(255,255,255,0.02)" }}>
        <p className="text-[15px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.7 }}>
          <strong>Platzhalter:</strong> Dies ist eine vorbereitete Seite für die finale Datenschutzerklärung.
        </p>
        
        <div className="p-4 rounded-xl mb-8 border-dashed" style={{ border: "1px solid rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.2)" }}>
          <p className="text-[13px] text-center" style={{ color: "var(--color-gold)" }}>
            Bitte vor Veröffentlichung rechtlich prüfen lassen und den echten Rechtstext hier einfügen.
          </p>
        </div>

        <h2 className="font-serif text-2xl mb-4" style={{ color: "var(--color-ink)" }}>1. Datenschutz auf einen Blick</h2>
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          Hier muss der finale Rechtstext eingefügt werden...
        </p>

        <h2 className="font-serif text-2xl mb-4" style={{ color: "var(--color-ink)" }}>2. Datenerfassung auf unserer Website</h2>
        <h3 className="font-serif text-xl mb-2 mt-4" style={{ color: "var(--color-ink)" }}>Cookies</h3>
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          Unsere Website verwendet Cookies. Die detaillierten Einstellungen können jederzeit über die Cookie-Einstellungen im Footer aufgerufen und geändert werden. Notwendige Cookies werden verwendet, um die Grundfunktionen der Website zu gewährleisten (z.B. Speicherung der Cookie-Auswahl und der Besucher-Ansicht).
        </p>

        <h3 className="font-serif text-xl mb-2 mt-4" style={{ color: "var(--color-ink)" }}>Newsletter</h3>
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
           Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.
        </p>
        
        <a href="/" className="mgv-btn mt-8">Zurück zur Startseite</a>
      </div>
    </div>
  );
}
