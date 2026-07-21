import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundEffects = () => {
    const init = async (engine) => {
        await loadSlim(engine);
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                detectsOn: "window",
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 80,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: ["#ffffff", "#e0e7ff", "#fca5a5", "#d8b4fe"],
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: true,
                    speed: 0.2, // very slow moving stars
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        width: 1000,
                        height: 1000,
                    },
                    value: 200,
                },
                opacity: {
                    value: { min: 0.1, max: 0.8 },
                    animation: {
                        enable: true,
                        speed: 1,
                        sync: false,
                    }
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 0.5, max: 2 },
                    animation: {
                        enable: true,
                        speed: 2,
                        sync: false,
                    }
                },
            },
            detectRetina: true,
        }),
        [],
    );

    return (
        <ParticlesProvider init={init}>
            <div className="fixed inset-0 z-[-1] overflow-hidden bg-gray-950 pointer-events-none">
                {/* Deep space radial gradient for a premium dark space feel */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-[#0a0a1a] to-[#04040a]"></div>

                {/* ===== PLANETS ===== */}

                {/* 1. Gas Giant (Saturn-like) */}
                <motion.div
                    animate={{ rotate: 360, y: [0, -20, 0] }}
                    transition={{ rotate: { duration: 200, repeat: Infinity, ease: 'linear' }, y: { duration: 15, repeat: Infinity, ease: 'easeInOut' } }}
                    className="absolute -top-32 -right-32 w-[600px] h-[600px] opacity-20 pointer-events-none"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-purple-800 via-orange-900 to-transparent shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.8),0_0_80px_rgba(168,85,247,0.3)]"></div>
                    {/* Ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[150px] rounded-[50%] border-t-8 border-b-2 border-orange-500/30 transform rotate-12 shadow-[0_0_30px_rgba(251,146,60,0.2)]"></div>
                </motion.div>

                {/* 2. Ice Moon */}
                <motion.div
                    animate={{ y: [0, 30, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/3 left-10 w-[150px] h-[150px] rounded-full bg-gradient-to-bl from-cyan-300 via-blue-800 to-gray-900 opacity-40 shadow-[inset_-10px_-10px_30px_rgba(0,0,0,0.9),0_0_40px_rgba(34,211,238,0.2)]"
                ></motion.div>

                {/* 3. Tiny Red Planet */}
                <motion.div
                    animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-20 right-1/4 w-[80px] h-[80px] rounded-full bg-gradient-to-tr from-red-900 via-rose-700 to-transparent opacity-30 shadow-[inset_-5px_-5px_20px_rgba(0,0,0,0.9)]"
                ></motion.div>

                {/* ===== SHOOTING STARS ===== */}
                <motion.div
                    animate={{
                        opacity: [0, 1, 0],
                        x: ['100vw', '-50vw'],
                        y: ['-50vh', '100vh']
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 5, ease: "linear" }}
                    className="absolute top-0 right-0 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transform -rotate-45 opacity-0"
                ></motion.div>
                <motion.div
                    animate={{
                        opacity: [0, 1, 0],
                        x: ['120vw', '-20vw'],
                        y: ['-20vh', '120vh']
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 12, ease: "linear" }}
                    className="absolute top-10 right-20 w-[150px] h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -rotate-45 opacity-0"
                ></motion.div>


                {/* TSParticles Stars layer */}
                <Particles
                    id="tsparticles"
                    options={options}
                    className="absolute inset-0 h-full w-full pointer-events-none"
                    style={{ position: 'absolute' }}
                />

                {/* Ambient floating Aurora/Nebula glow */}
                <motion.div
                    animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/4 w-[50rem] h-[50rem] bg-purple-600/10 rounded-full blur-[150px]"
                />

                {/* Keep a soft vignette overlay to give depth */}
                <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.9)] pointer-events-none z-[1]"></div>
            </div>
        </ParticlesProvider>
    );
};

export default BackgroundEffects;
