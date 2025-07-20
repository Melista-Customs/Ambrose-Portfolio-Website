import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="intro">
                    <h1>Welcome to My Portfolio</h1>
                    <p>
                        I am a freelance professional offering a range of services including Writing, SEO, Transcription, AI Web Assistant, Data Entry, and eCommerce Virtual Assistance.
                    </p>
                    <Link to="/services" className="btn">Explore My Services</Link>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;