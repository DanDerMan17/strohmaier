import React from "react";

export const Datenschutz: React.FC = () => {
    return (
        <div className={"background"} style={{padding: "2rem", margin: "auto"}}>
            <div style={{maxWidth: "800px"}}>
                <h1>Datenschutzerklärung</h1>
                <p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher
                    ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).</p>

                <h2>Kontakt mit uns</h2>
                <p>Wenn Sie per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der
                    Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
                    Ihre Einwilligung weiter.</p>

                <h2>Server-Logfiles</h2>
                <p>Beim Besuch dieser Website speichert der Webserver automatisch Informationen wie IP-Adresse,
                    verwendeter Browser, Uhrzeit des Zugriffs etc. Diese Daten werden nicht mit anderen Datenquellen
                    zusammengeführt und nur zur Fehleranalyse verwendet.</p>

                <h2>Cookies</h2>
                <p>Diese Website verwendet keine Cookies.</p>

                <h2>Ihre Rechte</h2>
                <p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
                    Datenübertragbarkeit und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen
                    das Datenschutzrecht verstößt, können Sie sich bei der Aufsichtsbehörde beschweren: <strong>Datenschutzbehörde
                        Österreich</strong>.</p>

                <h2>Kontakt</h2>
                <p>Bäckerei Strohmaier<br/>
                    Grazerstraße 3<br/>
                    8083 St. Stefan im Rosental<br/>
                    E-Mail: baeckerei@strohmaierkg.at<br/>
                    Telefon: 03116 8283</p>
            </div>
        </div>
    );
};
