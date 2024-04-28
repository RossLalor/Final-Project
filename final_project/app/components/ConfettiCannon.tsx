"use client";
import React, { useEffect, useRef } from 'react';
import { Button } from '@nextui-org/react';
import confetti from 'canvas-confetti';

const CustomButton = () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio('/bond.mp3');
    }, []);

    const handleConfetti = () => {
        if (buttonRef.current && audioRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            console.log("Button coordinates:", rect);
            confetti({
                origin: {
                    x: (rect.left + rect.width / 2) / window.innerWidth,
                    y: (rect.top + rect.height / 2) / window.innerHeight,
                },
            });
            audioRef.current.play();  // Play sound when the button is clicked
        } else {
            console.log("Ref not attached to the button or Audio not loaded");
        }
    };

    return (
        <Button
            ref={buttonRef}
            disableRipple
            className="relative text-red-300 overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
            size="lg"
            onClick={handleConfetti}
        >
            Press me to see why I spent an hour figuring this out on the final day
        </Button>
    );
};

export default CustomButton;