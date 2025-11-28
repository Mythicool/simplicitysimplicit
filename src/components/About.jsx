import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container fade-in-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div style={{ order: 2 }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                        About <span className="text-gradient">SimplicIT</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Founded in Moore, OK, SimplicIT was born from a desire to make technology accessible and stress-free for everyone. We understand that when your computer breaks or your network goes down, it's more than just an inconvenience—it's a disruption to your life or business.
                    </p>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                        Our mission is simple: provide expert, transparent, and friendly IT support. Whether you're a student needing a laptop repair, a gamer looking for a custom rig, or a small business owner needing a reliable MSP partner, we're here to help.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <h4 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>10+</h4>
                            <p style={{ color: 'var(--color-text-muted)' }}>Years Experience</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>500+</h4>
                            <p style={{ color: 'var(--color-text-muted)' }}>Satisfied Clients</p>
                        </div>
                    </div>
                </div>

                <div style={{ order: 1, position: 'relative' }}>
                    <div style={{
                        width: '100%',
                        height: '500px',
                        background: 'var(--color-bg-secondary)',
                        borderRadius: '1rem',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* Placeholder for About Image */}
                        <span style={{ color: 'var(--color-text-muted)' }}>Team / Shop Photo</span>
                    </div>
                    {/* Decorative element */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-20px',
                        left: '-20px',
                        width: '200px',
                        height: '200px',
                        background: 'var(--color-accent)',
                        opacity: 0.1,
                        borderRadius: '50%',
                        zIndex: -1
                    }} />
                </div>
            </div>
        </section>
    );
};

export default About;
