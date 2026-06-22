export default function ImpressumPage() {
  return (
    <div className="wrap py-32 min-h-screen">
      <h1 className="font-serif text-4xl mb-8" style={{ color: "var(--color-ink)" }}>Impressum</h1>
      
      <div className="p-8 md:p-12 rounded-2xl" style={{ background: "var(--color-bg-soft)" }}>
        
        <h2 className="font-serif text-2xl mb-4" style={{ color: "var(--color-ink)" }}>Angaben gemäß § 25 Mediengesetz</h2>
        
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          <strong>Männergesangsverein Seeboden (MGV Seeboden)</strong><br/>
          ZVR-Nummer: 151639246<br/>
          Treffling 266<br/>
          9871 Seeboden am Millstätter See<br/>
          Österreich
        </p>

        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          <strong>Vertreten durch:</strong><br/>
          Andreas Gruntnig<br/>
          (Obmann, seit 2019)
        </p>

        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          <strong>Chorleiter:</strong><br/>
          Robert Lücking (seit 2009)
        </p>

        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          <strong>Kontakt:</strong><br/>
          Telefon Obmann: <a href="tel:+436642828082" className="hover:text-[var(--color-accent)] transition-colors">+43 664 2828082</a><br/>
          Telefon Chorleiter: <a href="tel:+4366473485201" className="hover:text-[var(--color-accent)] transition-colors">+43 664 73485201</a><br/>
          E-Mail: <a href="mailto:singen@mgv-seeboden.at" className="hover:text-[var(--color-accent)] transition-colors">singen@mgv-seeboden.at</a>
        </p>

        <h3 className="font-serif text-xl mb-2 mt-8" style={{ color: "var(--color-ink)" }}>Proben</h3>
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          Jeden Donnerstag um 19:30 Uhr<br/>
          MGV-Probelokal im Kulturhaus Seeboden
        </p>

        <h3 className="font-serif text-xl mb-2 mt-8" style={{ color: "var(--color-ink)" }}>Mitglied im</h3>
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          Kärntner Sängerbund (seit 11. Dezember 1894)
        </p>

        <h3 className="font-serif text-xl mb-2 mt-8" style={{ color: "var(--color-ink)" }}>Bildnachweise</h3>
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          Alle Fotos © MGV Seeboden, sofern nicht anders angegeben.
        </p>

        <a href="/" className="btn mt-8 inline-block">Zurück zur Startseite</a>
      </div>
    </div>
  );
}
