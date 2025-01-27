import React from 'react';

const About = () => {
    return (
    <section className="py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="mt-2">We are dedicated to providing the best solutions to our clients and making a positive impact on the industry.</p>
            </div>
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Our Values</h3>
                <p className="mt-2">Integrity, Innovation, and Excellence drive us in everything we do. We believe in creating long-term relationships with our customers.</p>
            </div>
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Our Vision</h3>
                <p className="mt-2">To be the industry leader in providing cutting-edge solutions that meet the evolving needs of our customers.</p>
            </div>
        </div>
    </section>
    );
};

export default About;