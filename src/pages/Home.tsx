import { useEffect, useRef, useState } from "react";
import img1 from '../assets/building/outside.webp';
import img2 from '../assets/building/entry.webp';
import img3 from '../assets/product_images_webp/0,5 kg brot.webp';
import img4 from '../assets/product_images_webp/bauernbrot.webp';
import img5 from '../assets/product_images_webp/heidenbrot.webp';

const images = [img1, img2, img3, img4, img5];
const altTexts = [
    "Bäckerei Strohmaier von außen",
    "Eingang der Bäckerei Strohmaier",
    "Frisches Brot von der Bäckerei Strohmaier",
    "Bauernbrot von der Bäckerei Strohmaier",
    "Heidenbrot von der Bäckerei Strohmaier",
];
const INTERVAL = 4000;

export const Home = () => {
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
            <h1>Willkommen bei der Bäckerei Strohmaier</h1>

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
                    loading={currentIndex === 0 ? "eager" : "lazy"}
                    fetchPriority={currentIndex === 0 ? "high" : "auto"}
                    width={800}
                    height={600}
                    className={"home-slider"}
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

            <div className={"usp"}>
                <br/><br/>
                Bei uns gibt's täglich frisch Gebackenes – mit Liebe und Handwerk. ❤️ 🥐🍞🥖
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