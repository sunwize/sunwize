import {translate} from "../assets/js/utils.js";
import {SectionTitle} from "../assets/js/StyledComponents.js";
import Image from 'next/image';

const technologies = [
    {
        name: 'Vue.js',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/vuejs-3-1175070.png',
        link: 'https://vuejs.org'
    },
    {
        name: 'React.js / React Native',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png',
        link: 'https://fr.reactjs.org'
    },
    {
        name: 'Capacitor',
        icon: 'https://seeklogo.com/images/C/capacitor-logo-DF3634DD70-seeklogo.com.png',
        link: 'https://capacitorjs.com'
    },
    {
        name: 'Node.js',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/nodejs-1-226034.png',
        link: 'https://nodejs.org'
    },
    {
        name: 'Postgresql',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/postgresql-3628991-3030216.png',
        link: 'https://www.postgresql.org'
    },
    {
        name: 'MySQL',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/mysql-3628940-3030165.png',
        link: 'https://www.mysql.com'
    },
    {
        name: 'MongoDB',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-3629020-3030245.png',
        link: 'https://www.mongodb.com'
    },
    {
        name: 'Java',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/java-3628857-3029997.png',
        link: 'https://www.java.com'
    }
]

export default function Technologies() {
    return (
        <div>
            <SectionTitle>{translate('Technologies|Technologies')}</SectionTitle>

            <div className="mt-5 opacity-50 text-lg leading-8 font-light tracking-wider">
                {translate([
                    `I've worked with a range of technologies in web development. From Backend To Design.`,
                    `J'ai eu l'opportunité de travailler avec une multitude de technologies dans le développement web, aussi bien en backend qu'en frontend.`
                ])}
            </div>

            <div className="technologies mt-10 lg:gap-8 gap-y-8">
                {technologies.map((technology, index) => (
                    <div onClick={() => window.open(technology.link)} key={index} className="flex flex-col justify-center shadow-light text-center cursor-pointer hover:underline rounded p-5" style={{width: 150, height: 150}}>
                        <div>
                            <Image src={technology.icon} width={50} height={50} objectFit="cover" alt={technology.name} />
                            <div className="mt-2">{technology.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
