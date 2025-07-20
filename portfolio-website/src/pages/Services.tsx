import React from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
    {
        title: 'Writing',
        description: 'Professional writing services including articles, blogs, and copywriting.'
    },
    {
        title: 'SEO',
        description: 'Search engine optimization services to improve your website’s visibility.'
    },
    {
        title: 'Transcription',
        description: 'Accurate transcription services for audio and video content.'
    },
    {
        title: 'AI Web Assistant',
        description: 'AI-driven web assistance to enhance user experience and engagement.'
    },
    {
        title: 'Data Entry',
        description: 'Efficient data entry services to manage and organize your information.'
    },
    {
        title: 'eCommerce Virtual Assistant',
        description: 'Support for eCommerce businesses including product listing and customer service.'
    }
];

const Services: React.FC = () => {
    return (
        <div className="services">
            <h1>My Services</h1>
            <div className="service-list">
                {services.map((service, index) => (
                    <ServiceCard key={index} title={service.title} description={service.description} />
                ))}
            </div>
        </div>
    );
};

export default Services;