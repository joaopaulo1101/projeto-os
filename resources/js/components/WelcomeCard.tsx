type WelcomeCardProps = {
    appName: string;
};

export default function WelcomeCard({ appName }: WelcomeCardProps) {
    return (
        <main className="welcome-page">
            <section className="welcome-card">
                <p className="welcome-card__eyebrow">Projeto OS</p>
                <h1>{appName}</h1>
                <p>
                    Estrutura inicial pronta para Laravel + React + TypeScript + Inertia.js com PostgreSQL e Docker.
                </p>
            </section>
        </main>
    );
}
