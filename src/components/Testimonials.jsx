import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Small Business Owner',
            content: 'SimplicIT has been a lifesaver for my business. Their MSP services are top-notch, and I never have to worry about downtime anymore.',
            rating: 5
        },
        {
            name: 'David Miller',
            role: 'Home Office User',
            content: 'My computer was running so slow I thought I needed a new one. They performed a deep cleanup and optimization, and now it runs like new! Saved me hundreds.',
            rating: 5
        },
        {
            name: 'Emily Davis',
            role: 'Local Resident',
            content: 'Fixed my laptop screen in less than 24 hours. Super friendly staff and reasonable prices. Highly recommend!',
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>What Our Clients Say</h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Don't just take our word for it. Here's what our community in Moore has to say.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`fade-in-up delay-${(index + 1) * 100}`} style={{
                            backgroundColor: 'var(--color-bg-secondary)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1.25rem', height: '1.25rem' }}>
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                ))}
                            </div>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                "{testimonial.content}"
                            </p>
                            <div>
                                <h4 style={{ fontWeight: '600', color: 'var(--color-text-primary)' }}>{testimonial.name}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
