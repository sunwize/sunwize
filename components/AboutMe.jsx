import {GridContainer, SectionTitle, Title} from "../assets/js/StyledComponents.js";
import {translate} from "../assets/js/utils.js";
import moment from "moment";

const age = moment().diff(moment('1998-01-06'), 'years');

export default function AboutMe() {
    return (
        <div>
            <SectionTitle>{translate('About me|Profil')}</SectionTitle>

            <div className="mt-5 opacity-50 text-lg leading-8 font-light tracking-wider">
                {
                    translate([
                        `${age} years old computer engineer and full stack web developer using the latest technologies. I learn and adapt quickly. I emphasize the rigor and the quality brought to my productions. I like teamwork above all because learning is a collective game.`,
                        `Ingénieur en informatique de ${age} ans et développeur web full stack usant des dernières technologies. J'apprends et je m'adapte rapidement. Je mets un point d'honneur sur la rigueur et la qualité apportées à mes productions. J'aime le travail en équipe par dessus tout car l'apprentissage est un jeu collectif.`
                    ])
                }
            </div>

            <div className="mt-10">
                <GridContainer width={120} noPadding>
                    <div>
                        <Title>2015</Title>
                        <div className="mt-2 opacity-70 text-sm leading-6 tracking-wider">
                            Baccalauréat Série S Spécialité mathématiques
                        </div>
                    </div>
                    <div>
                        <Title>2015-2017</Title>
                        <div className="mt-2 opacity-70 text-sm leading-6 tracking-wider">
                            Ecole Préparatoire (Peip) Spécialités mathématiques et informatique
                        </div>
                    </div>
                    <div>
                        <Title>2017-2020</Title>
                        <div className="mt-2 opacity-70 text-sm leading-6 tracking-wider">
                            Diplôme d’Ingénieur en informatique
                        </div>
                    </div>
                    <div>
                        <Title>2020-2021</Title>
                        <div className="mt-2 opacity-70 text-sm leading-6 tracking-wider">
                            Software Developer à Eye In Media
                        </div>
                    </div>
                </GridContainer>
            </div>
        </div>
    )
}
