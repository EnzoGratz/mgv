export default function AGBPage() {
  return (
    <div className="mgv-wrap py-32 min-h-screen">
      <h1 className="font-serif text-4xl mb-8" style={{ color: "var(--color-ink)" }}>AGB & Ticketbedingungen</h1>
      
      <div className="mgv-card p-8 md:p-12 rounded-[var(--radius-card)]" style={{ background: "rgba(255,255,255,0.02)" }}>
        <p className="text-[15px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.7 }}>
          <strong>Platzhalter:</strong> Dies ist eine vorbereitete Seite für die Allgemeinen Geschäftsbedingungen und Ticketbedingungen.
        </p>

        <div className="p-4 rounded-xl mb-8 border-dashed" style={{ border: "1px solid rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.2)" }}>
           <p className="text-[13px] text-center" style={{ color: "var(--color-gold)" }}>
             Hier müssen die finalen Rechtstexte, AGB und Stornobedingungen für den Ticketshop eingefügt werden, sobald ein Bezahlsystem angebunden wird.
          </p>
        </div>
        
        <h2 className="font-serif text-2xl mb-4" style={{ color: "var(--color-ink)" }}>1. Geltungsbereich</h2>
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          Hier muss der finale Rechtstext eingefügt werden...
        </p>

        <h2 className="font-serif text-2xl mb-4" style={{ color: "var(--color-ink)" }}>2. Ticketkauf und Stornierung</h2>
        <p className="text-[14px] mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>
          Es handelt sich hierbei um eine Demo-Umgebung. Es werden keine echten Zahlungen abgewickelt und es kommen keine gültigen Kaufverträge zustande.
        </p>

        <a href="/" className="mgv-btn mt-8">Zurück zur Startseite</a>
      </div>
    </div>
  );
}
