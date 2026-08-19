import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const setSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setSize();
        window.addEventListener('resize', setSize);

        let particlesArray = [];
        let mouse = { x: null, y: null };

        const handleMouseMove = (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
            // Generate fire particles on movement
            for (let i = 0; i < 4; i++) {
                particlesArray.push(new Particle(mouse.x, mouse.y));
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;

                const isLightMode = document.documentElement.classList.contains('light-mode');

                // Default fire colors for dark theme
                let colors = ['#fde047', '#fb923c', '#ea580c', '#dc2626'];

                if (isLightMode) {
                    // Blue / Surf like colors for light theme
                    colors = ['#38bdf8', '#0284c7', '#2563eb', '#0891b2', '#0ea5e9'];
                }

                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.size = Math.random() * 6 + 2;
                this.speedX = Math.random() * 2 - 1;
                // Fire goes mostly up
                this.speedY = Math.random() * -2 - 0.5;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.15;
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const animate = () => {
            // Optional: can use a faint fill for trails, but clearRect is cleaner for fire
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();

                if (particlesArray[i].size <= 0.3) {
                    particlesArray.splice(i, 1);
                    i--;
                }
            }
            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', setSize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
        />
    );
};

export default CustomCursor;
