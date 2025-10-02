import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MinimalistCV = () => {
    return (
        <div className="min-h-screen bg-background p-6 font-sans">
            <div className="w-full mx-auto space-y-6">
                {/* En-tête */}
                <Card className="bg-muted/50">
                    <CardContent className="p-6">
                        <h1 className="text-3xl font-bold text-foreground mb-2">
                            Yanis Martinon
                        </h1>
                        <h2 className="text-xl text-muted-foreground mb-4">
                            Développeur Frontend
                        </h2>
                        <div className="flex flex-wrap gap-4 text-sm text-foreground">
                            <div className="flex items-center">
                                <span className="mr-2">📧</span>
                                <span>yanis.martinon2@gmail.com</span>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2">📱</span>
                                <span>+33 7 81 79 68 76</span>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2">📍</span>
                                <span>
                                    91700 Sainte-Geneviève-des-Bois, France
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2">🔗</span>
                                <a
                                    href="https://portfolio-seven-delta-85.vercel.app/"
                                    target="_blank"
                                >
                                    https://portfolio-seven-delta-85.vercel.app/
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Profil */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-primary">
                            Profil Professionnel
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground leading-relaxed max-w-4xl text-justify">
                            Développeur frontend passionné avec plus de 3 ans
                            d'expérience dans la création d'interfaces
                            utilisateur réactives et accessibles. Expertise en
                            React, TypeScript et architectures modernes.
                            Toujours à la recherche de défis techniques et de
                            nouvelles technologies pour améliorer l'expérience
                            utilisateur.
                        </p>
                    </CardContent>
                </Card>

                {/* Expérience Professionnelle */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-primary">
                            Expériences Professionnelles
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-foreground text-lg">
                                Développeur Full Stack
                            </h3>
                            <p className="text-muted-foreground">
                                Orientrek • Février 2025 - Février 2025
                            </p>
                            <ul className="mt-2 list-disc list-inside text-foreground space-y-1">
                                <li>
                                    Refonte complète de l’interface graphique du
                                    site web avec une approche moderne et
                                    responsive.
                                </li>
                                <li>
                                    Intégration et gestion d'une base de
                                    données.
                                </li>
                                <li>
                                    Création d'une interface d'administration
                                    pour gérer le contenu du site.
                                </li>
                                <li>Optimisation SEO avancée.</li>
                                <li>Intégration et déploiement du site.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-foreground text-lg">
                                Apprenti Développeur Full Stack
                            </h3>
                            <p className="text-muted-foreground">
                                Fédération Française de Tennis de Table • Mars
                                2022 - Mars 2024
                            </p>
                            <ul className="mt-2 list-disc list-inside text-foreground space-y-1">
                                <li>
                                    Développement du site des Championnats Pro
                                    de Tennis de Table (ReactJS)
                                </li>
                                <li>
                                    Conception et mise en place d’un système de
                                    livescoring pour les matchs en championnat
                                    professionnel (ReactJS, NodeJS)
                                </li>
                                <li>
                                    Maintenance et amélioration des applications
                                    web existantes
                                </li>
                                <li>
                                    Maintenance du progiciel de gestion de
                                    l’écosystème complet de la fédération
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Formation */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-primary">
                            Formation
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-foreground text-lg">
                                Master en développement BigData & IA
                            </h3>
                            <p className="text-muted-foreground">
                                IPSSI • 2022 - 2024
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-foreground text-lg">
                                Licence en Informatique
                            </h3>
                            <p className="text-muted-foreground">
                                IUT D'Orsay • 2020 - 2021
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground text-lg">
                                DUT en Informatique
                            </h3>
                            <p className="text-muted-foreground">
                                IUT D'Orsay • 2018 - 2020
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Compétences */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-primary">
                            Compétences Techniques
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-bold text-foreground mb-2">
                                    Langages & Frameworks
                                </h4>
                                <ul className="text-foreground space-y-1">
                                    <li>
                                        React • TypeScript • JavaScript ES6+
                                    </li>
                                    <li>Next.js • Node.js</li>
                                    <li>
                                        HTML5 • CSS3 • Tailwind CSS • Shadcn
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-foreground mb-2">
                                    Outils & Méthodologies
                                </h4>
                                <ul className="text-foreground space-y-1">
                                    <li>Git • Webpack • Vite</li>
                                    <li>Agile • Scrum • CI/CD</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Langues */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-primary">Langues</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <h4 className="font-medium text-foreground">
                                    Français
                                </h4>
                                <p className="text-muted-foreground">
                                    Langue maternelle
                                </p>
                            </div>
                            <div>
                                <h4 className="font-medium text-foreground">
                                    Anglais
                                </h4>
                                <p className="text-muted-foreground">
                                    Intermédiaire (B2)
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Centres d'intérêt */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-primary">
                            Centres d'intérêt
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                                Écriture de romans
                            </span>
                            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                                Lecture
                            </span>
                            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                                Course à pied
                            </span>
                            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                                Jeux Vidéo / Programmation
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default MinimalistCV;
