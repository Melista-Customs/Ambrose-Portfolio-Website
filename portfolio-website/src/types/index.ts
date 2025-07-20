export interface ServiceCardProps {
    title: string;
    description: string;
}

export interface ContactFormProps {
    name: string;
    email: string;
    message: string;
}

export interface Service {
    id: number;
    title: string;
    description: string;
}

export interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}