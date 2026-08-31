import { Head } from '@inertiajs/react';
import WelcomeCard from '../components/WelcomeCard';

type HomePageProps = {
    appName: string;
};

export default function HomePage({ appName }: HomePageProps) {
    return (
        <>
            <Head title="Início" />
            <WelcomeCard appName={appName} />
        </>
    );
}
