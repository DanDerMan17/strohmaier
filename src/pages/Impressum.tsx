import React from "react";

export const Impressum: React.FC = () => {
    return (
        <div className={"background"} style={{padding: "2rem", margin: "auto"}}>
            <div style={{maxWidth: "800px"}}>
                <h1>Impressum</h1>
                <p><strong>Bäckerei Strohmaier</strong></p>
                <p>Grazerstraße 3<br/>
                    8083 St. Stefan im Rosental<br/>
                    Österreich</p>

                <p>Telefon: 03116 8283<br/>
                    E-Mail: baeckerei@strohmaierkg.at</p>

                <p><strong>Unternehmensform:</strong> Kommanditgesellschaft (KG)</p>
                <p><strong>Vertretungsberechtigt:</strong> Kurt Strohmaier</p>
                <p><strong>Firmenbuchnummer:</strong> BITTE EINGEBEN <br/>
                    <strong>UID-Nummer:</strong> BITTE EINGEBEN </p>

                <p><strong>Aufsichtsbehörde:</strong> Bezirkshauptmannschaft Südoststeiermark</p>
                <p><strong>Berufsrechtliche Vorschriften:</strong> Gewerbeordnung (www.ris.bka.gv.at)</p>

                <p><strong>Haftungsausschluss:</strong> Alle Inhalte wurden sorgfältig geprüft. Dennoch kann keine
                    Garantie für die Richtigkeit, Vollständigkeit und Aktualität übernommen werden.</p>
            </div>
        </div>
    );
};
