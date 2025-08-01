import { useEffect, useRef, useState } from "react";
import img1 from '../assets/building/outside.jpg';
import img2 from '../assets/building/entry.jpg';
import img3 from '../assets/product_images/0,5 kg brot.jpg';
import img4 from '../assets/product_images/bauernbrot.jpg';
import img5 from '../assets/product_images/heidenbrot.jpg';

const images = [img1, img2, img3, img4, img5];
const INTERVAL = 4000; // ms

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
        resetTimer(); // Start autoplay on mount
        return () => {
            if (timerRef.current) clearInterval(timerRef.current); // Cleanup on unmount
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
                    alt={`Slide ${currentIndex}`}
                    style={{
                        width: '100%',
                        height: '600px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        transition: 'opacity 0.5s ease-in-out',
                    }}
                />

                <button onClick={goToPrev} style={arrowStyle('left')}>
                    ‹
                </button>

                <button onClick={goToNext} style={arrowStyle('right')}>
                    ›
                </button>

                {/* Progress bars */}
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
                Bei uns gibt’s täglich frisch Gebackenes – mit Liebe und Handwerk. ❤️ 🥐🍞🥖
            </div>
        </div>
    );
};

// Reusable inline arrow styles
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
