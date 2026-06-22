export default function DatenschutzPage() {
  return (
    <div className="wrap py-32 min-h-screen">
      <h1 className="font-serif text-4xl mb-8" style={{ color: "var(--color-ink)" }}>Datenschutzerklärung</h1>
      
      <div className="p-8 md:p-12 rounded-2xl" style={{ background: "var(--color-bg-soft)" }}>

        <h2 className="font-serif text-2xl mb-4" style={{ color: "var(--color-ink)" }}>1. Datenschutz auf einen Blick</h2>
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
        </p>

        <h2 className="font-serif text-2xl mb-4" style={{ color: "var(--color-ink)" }}>2. Verantwortliche Stelle</h2>
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          <strong>Männergesangsverein Seeboden (MGV Seeboden)</strong><br/>
          ZVR-Nummer: 151639246<br/>
          Treffling 266<br/>
          9871 Seeboden am Millstätter See<br/>
          Österreich<br/><br/>
          E-Mail: <a href="mailto:singen@mgv-seeboden.at" className="hover:text-[var(--color-accent)] transition-colors">singen@mgv-seeboden.at</a><br/>
          Telefon: <a href="tel:+436642828082" className="hover:text-[var(--color-accent)] transition-colors">+43 664 2828082</a>
        </p>

        <h2 className="font-serif text-2xl mb-4" style={{ color: "var(--color-ink)" }}>3. Datenerfassung auf unserer Website</h2>
        
        <h3 className="font-serif text-xl mb-2 mt-4" style={{ color: "var(--color-ink)" }}>Cookies</h3>
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          Unsere Website verwendet Cookies. Die detaillierten Einstellungen können jederzeit über die Cookie-Einstellungen im Footer aufgerufen und geändert werden. Notwendige Cookies werden verwendet, um die Grundfunktionen der Website zu gewährleisten (z.B. Speicherung der Cookie-Auswahl und der Besucher-Ansicht). Darüber hinaus setzen wir keine Tracking- oder Marketing-Cookies ein.
        </p>

        <h3 className="font-serif text-xl mb-2 mt-4" style={{ color: "var(--color-ink)" }}>Server-Log-Dateien</h3>
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
        </p>

        <h3 className="font-serif text-xl mb-2 mt-4" style={{ color: "var(--color-ink)" }}>Kontaktaufnahme</h3>
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          Wenn Sie uns per E-Mail kontaktieren, werden Ihre angegebenen Daten (E-Mail-Adresse, ggf. Name und Telefonnummer) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>

        <h2 className="font-serif text-2xl mb-4 mt-8" style={{ color: "var(--color-ink)" }}>4. Ihre Rechte</h2>
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde (Datenschutzbehörde, <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">www.dsb.gv.at</a>) beschweren.
        </p>

        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          Sie erreichen uns unter: <a href="mailto:singen@mgv-seeboden.at" className="hover:text-[var(--color-accent)] transition-colors">singen@mgv-seeboden.at</a>
        </p>
        
        <a href="/" className="btn mt-8 inline-block">Zurück zur Startseite</a>
      </div>
    </div>
  );
}
