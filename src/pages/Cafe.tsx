import { useEffect, useRef, useState } from "react";
import img1 from '../assets/building/cafe_shop.webp';
import img2 from '../assets/building/cafeteria.webp';
import img3 from '../assets/building/snacks.webp';

const images = [img1, img2, img3];
const altTexts = [
    "Café Strohmaier von außen",
    "Cafeteria der Bäckerei Strohmaier",
    "Snacks und Gebäck im Café Strohmaier",
];
const INTERVAL = 4000;

export const Cafe = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, INTERVAL);
    };

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        resetTimer();
    };

    const goToNext = () => goToSlide((currentIndex + 1) % images.length);
    const goToPrev = () => goToSlide(currentIndex === 0 ? images.length - 1 : currentIndex - 1);

    return (
        <div className="background">
            <h1>Café</h1>

            <div
                style={{
                    position: 'relative',
                    maxWidth: '800px',
                    margin: '20px auto',
                }}
            >
                <img
                    src={images[currentIndex]}
                    alt={altTexts[currentIndex]}
                    loading="lazy"
                    width={800}
                    height={600}
                    style={{
                        width: '100%',
                        height: '600px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        transition: 'opacity 0.5s ease-in-out',
                    }}
                />

                <button onClick={goToPrev} style={arrowStyle('left')} aria-label="Vorheriges Bild">
                    ‹
                </button>

                <button onClick={goToNext} style={arrowStyle('right')} aria-label="Nächstes Bild">
                    ›
                </button>

                <div
                    style={{
                        display: 'flex',
                        gap: '4px',
                        justifyContent: 'center',
                        marginTop: '10px',
                    }}
                >
                    {images.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => goToSlide(i)}
                            role="button"
                            aria-label={`Bild ${i + 1}`}
                            style={{
                                flex: 1,
                                height: '6px',
                                borderRadius: '4px',
                                backgroundColor: i === currentIndex ? '#febd27' : '#555',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="usp" style={{ textAlign: "center", maxWidth: "800px", margin: "40px auto", fontSize: "1.2rem", lineHeight: "1.6" }}>
                <p>Genießen Sie Ihren Kaffee ☕ in gemütlicher Atmosphäre – direkt neben unserer Bäckerei.</p>
                <p>Ob ein herzhaftes Frühstück 🥐, süßes Gebäck oder ein kleiner Snack zwischendurch – bei uns finden Sie immer das Richtige.</p>
                <p>Frisch gebrühter Kaffee, regionale Zutaten und ein Ort zum Wohlfühlen. ☕🍪</p>
            </div>

        </div>
    );
};

const arrowStyle = (side: 'left' | 'right') => ({
    position: 'absolute',
    top: '50%',
    [side]: '10px',
    transform: 'translateY(-50%)',
    background: 'white',
    border: '1px solid #ccc',
    borderRadius: '50%',
    padding: '5px 10px',
    cursor: 'pointer',
    zIndex: 1,
} as const);