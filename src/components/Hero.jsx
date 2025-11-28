import React from 'react';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(15, 23, 42, 0) 70%)',
                borderRadius: '50%',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, rgba(15, 23, 42, 0) 70%)',
                borderRadius: '50%',
                zIndex: -1
            }} />

            <div className="container fade-in-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Expert Tech Support <br />
                        <span className="text-gradient">Simplified.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginBottom: '2.5rem', maxWidth: '500px' }}>
                        Your local partner for expert computer repair, system optimization, and MSP solutions in Moore, OK. We make IT simple so you can focus on what matters.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#contact" className="btn btn-primary">Get Started</a>
                        <a href="#services" className="btn" style={{ border: '1px solid var(--color-text-secondary)', color: 'var(--color-text-primary)' }}>Our Services</a>
                    </div>
                </div>

                {/* Hero Image/Graphic Placeholder */}
                <div style={{ position: 'relative' }}>
                    <div style={{
                        width: '100%',
                        height: '400px',
                        background: 'linear-gradient(135deg, var(--color-bg-secondary), var(--color-bg-tertiary))',
                        borderRadius: '1rem',
                        border: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                    }}>
                        <span style={{ color: 'var(--color-text-muted)', fontSize: '1.5rem' }}>Tech Illustration / 3D Element</span>
                    </div>

                    {/* Floating Elements */}
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        right: '-20px',
                        padding: '1rem',
                        background: 'var(--color-bg-secondary)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '0.5rem',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                    }}>
                        <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>24/7 Support</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
