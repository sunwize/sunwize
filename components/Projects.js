import {
    GridContainer,
    Hr,
    ProjectCard, ProjectDescription,
    ProjectTitle,
    SectionTitle
} from "../assets/js/StyledComponents.js";
import {translate} from "../assets/js/utils.js";
import {AiFillQuestionCircle, AiFillGithub} from "react-icons/ai";
import {BiGlobe} from "react-icons/bi";
import {IoLogoGooglePlaystore} from "react-icons/io5";
import {IoIosAppstore} from "react-icons/io";

const projects = [
    {
        title: 'Food Force',
        description: translate([
            `Complete ecosystem for restaurants providing a food ordering application (web and mobile), a customized website for menu display, and an order management and table reservation system.`,
            `Ecosystème complet pour les restaurants fournissant à la fois une application de commande de nourriture (web et mobile), un site personnalisé pour l'affichage du menu ainsi qu'un système de gestion des commandes et de réservation des tables.`
        ]),
        image: 'https://lh3.googleusercontent.com/2-0_dFNSoJA1ikkPqoDeSsQEMho4o3N2YexZs0gcRan22ESeNR_u8th4ayIVaiXSmEA',
        tags: ['Vue', 'Capacitor', 'Node', 'Express'],
        links: [
            {
                name: 'website',
                url: 'https://thefoodforce.com/'
            },
            {
                name: 'play-store',
                url: 'https://play.google.com/store/apps/details?id=com.thefoodforce.app'
            },
            {
                name: 'app-store',
                url: 'https://apps.apple.com/us/app/thefoodforce/id1531530236'
            }
        ],
        type: 'pro'
    },
    {
        title: 'Reserve & Shop',
        description: `Une application web et mobile permettant d'éviter les files d'attente dans les supermarchés en réservant sa place à l'avance.`,
        image: 'https://lh3.googleusercontent.com/aKjONMXfEWITbIJK_WVhrPUpzaXQNtKkLOtM3zkPIhJrF3G2PvkMWwNpC_6ztn7UEsxJ',
        tags: ['Vue', 'Capacitor', 'Node', 'Express'],
        links: [
            {
                name: 'website',
                url: 'https://reserveandshop.com'
            },
            {
                name: 'play-store',
                url: 'https://play.google.com/store/apps/details?id=com.reserveandshop.app'
            }
        ],
        type: 'pro'
    },
    {
        title: 'Only One Generation',
        description: translate([
            `Easily send messages and photos to your family. Your messages will be delivered manually to residents of selected establishments.`,
            `Luttez contre l'isolement des personnes âgées, sans ajouter de contraintes technologiques. Envoyez facilement des messages et des photos à votre famille. Vos messages seront livrés manuellement aux résidents des établissements participants.`
        ]),
        image: 'https://lh3.googleusercontent.com/krfj-8ildI8yYB1txZHqSh3DFcDjSU5KV0Z9MKR28eG8OYWnmMdBqI_qtQQJY-6gkw',
        tags: ['Vue', 'Capacitor', 'Node', 'Express'],
        links: [
            {
                name: 'website',
                url: 'https://only1generation.com'
            }
        ],
        type: 'pro'
    },
    {
        title: translate('Loyalty Program|Programme de Loyauté'),
        description: translate([
            `Place Rosemère shopping mall loyalty program combining a points collection system based on receipts scan, daily contests/events to win different prizes and live rankings to scale customer loyalty.`,
            `Programme de loyauté du centre commercial de Place Rosemère alliant un système de collection de points basé sur le scan de reçus, des concours / évènements quotidiens pour remporter différents prix ainsi que des classements en direct pour échelonner la fidélité des clients.`
        ]),
        image: 'https://lh3.googleusercontent.com/OVbEdxMtY5N4pk4QFD1mEjA6jNunLoiVlv5gjmaFDJzWZpXAGbe6j4BTaTZC3Ew5TQ',
        tags: ['Vue', 'Capacitor', 'Node', 'Express'],
        links: [
            {
                name: 'website',
                url: 'https://confetti.placerosemere.com'
            },
            {
                name: 'play-store',
                url: 'https://play.google.com/store/apps/details?id=com.confetti.app'
            }
        ],
        type: 'pro'
    },
    {
        title: 'Flex',
        description: translate([
            `Personal Netflix, movie upload and information sync with TMDB API. Highlighting current trends and new releases on a wide range of content.`,
            `Netflix personnel, upload de films et synchronisation des informations avec l'API de TMDB. Mise en avant des tendances et nouveautés du moment sur un large choix de contenu.`
        ]),
        image: 'https://i.ibb.co/MZHbvPR/flex.png',
        tags: ['Vue', 'Node', 'Express'],
        links: [
            {
                name: 'website',
                url: 'https://flexplayer.herokuapp.com/'
            },
            {
                name: 'github',
                url: 'https://github.com/deteconan/deteconanv2'
            }
        ],
        type: 'perso'
    },
    {
        title: 'Zikmu',
        description: translate([
            `Mobile music listening application, music recommendations based on each user's tastes, Spotify to Zikmu playlist converter, offline listening and many more features coming soon.`,
            `Application mobile d'écoute de musique, recommandations musicales basées sur l'analyse des goûts de chaque utilisateur, convertisseur de playlists Spotify vers Zikmu, écoute hors-ligne et bien d'autres fonctionnalités à venir.`
        ]),
        image: 'https://i.ibb.co/ypvR6WV/protfolio.png',
        tags: ['React Native', 'Node', 'Express'],
        links: [
            {
                name: 'website',
                url: 'https://zikmu.herokuapp.com'
            }
        ],
        type: 'perso'
    }
];

const iconOf = name => {
    if (name === 'website')
        return BiGlobe;
    else if (name === 'play-store')
        return IoLogoGooglePlaystore;
    else if (name === 'app-store')
        return IoIosAppstore;
    else if (name === 'github')
        return AiFillGithub;
    else
        return AiFillQuestionCircle;
}

const titleOf = name => {
    if (name === 'website')
        return translate('Website|Site web');
    else if (name === 'play-store')
        return 'Play Store';
    else if (name === 'app-store')
        return 'App Store';
    else if (name === 'github')
        return 'Github';
    else
        return null;
}

const LinkIcon = ({ Icon, url }) => {
    return (
        <Icon onClick={() => window.open(url)} className="text-2xl opacity-80 cursor-pointer transition" />
    )
}

export default function Projects() {
    return (
        <div>
            <SectionTitle>{translate('Projects|Projets')}</SectionTitle>

            <div className="mt-14">
                <GridContainer width={320} noPadding>
                    {projects.map((project, index) => (
                        <ProjectCard key={index}>
                            <img src={project.image} alt={project.title} style={{objectFit: 'cover', width: '100%', height: 200, zIndex: 0}} />
                            <ProjectTitle>{project.title}</ProjectTitle>

                            <Hr />

                            <div className="flex items-center mb-1" style={{paddingLeft: '1.5rem', paddingRight: '1.5rem'}}>
                                <div className="rounded-full bg-gray-200 text-black font-bold tracking-wider uppercase px-2 py-1">{project.type}</div>

                                <div className="flex items-center gap-2 mt-auto ml-auto"
                                     style={{borderBottomLeftRadius: 'inherit', borderBottomRightRadius: 'inherit', borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
                                    {project.links.map((link, index) => (
                                        <button key={index} title={titleOf(link.name)} className="bg-gray-800 px-3 py-2 shadow-sm rounded-full transition hover:bg-yellow-500">
                                            <LinkIcon Icon={iconOf(link.name)} url={link.url} />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <ProjectDescription>{project.description}</ProjectDescription>

                            <div className="text-center uppercase tracking-widest text-sm mt-auto mb-3">Stack</div>

                            <div className="flex items-center justify-around flex-wrap gap-x-5 gap-y-1 px-5 pt-2 pb-3">
                                {project.tags.map((tag, index) => (
                                    <div className="opacity-70 font-light" key={index}>{tag}</div>
                                ))}
                            </div>
                        </ProjectCard>
                    ))}
                </GridContainer>
            </div>
        </div>
    )
}
