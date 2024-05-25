export const experiencesFixtures = [
  {
    image: '/experiences/paper.png',
    company: 'Paper Education',
    title: 'Software Engineer (Full Stack)',
    projects: [
      {
        title: '📚 Review center',
        description: 'A platform that lets students upload and submit essays for reviews, with the assistance of real tutors. The goal is to help students improve their writing skills thanks to valuable tutors feedback. The main challenges were to match suitable tutors to the essays (based on spoken languages, subjects, topics, etc.) and making sure reviews were made in less than 6 hours.',
        image: '/projects/review_center.png',
      },
      {
        title: '👩‍🏫 Practice center',
        description: 'A set of exercises that students can use to assess their skills on a variety of subjects. We did major updates on the interface to improve user experience based on feedback we got from user interviews/analytics. We also did an on-site event in schools to better understand how our product was being used.',
        image: '/projects/practice_center.png',
      },
      {
        title: '🌎 Content localization',
        description: 'A database architecture to enable server side content localization. We designed a system that would enable us to offer localized content to hundreds of thousands of students. The main challenges were the scalability of the system, its maintenance and the automation of translating content with the cost that comes with it.',
        image: '/projects/dashboard.png',
      },
      {
        title: '👩‍🔧 Content management system',
        description: 'A back office tool to let teachers build learning content for students on demand.',
        image: '/projects/practice_cms.png',
      },
      {
        title: '📐 Math missions',
        description: 'A set of small math problems for students to solve on a daily basis.',
        image: '/projects/paper_missions.png',
      },
    ],
    stack: ['vuejs', 'reactjs', 'javascript', 'typescript', 'postgresql', 'graphql', 'strapi'],
    date_start: 'JAN 2022',
    date_end: 'Present',
  },
  {
    image: '/experiences/eyeinmedia.png',
    company: 'Eyein Media',
    title: 'Software Engineer (Full Stack)',
    projects: [
      {
        title: '🦸‍♂️ Food Force',
        description: 'A comprehensive platform mixing a food ordering app (web and mobile), a social platform to share meal ideas, and an order management/reservation systems.',
        image: '/projects/thefoodforce_2.png',
      },
      {
        title: '🛍️ Confetti',
        description: 'A loyalty program for a shopping mall that lets clients get rewards while purchasing items. Levelling system, lottery, receipt information scan using AI. Both a web and mobile app, delivering loyalty services to thousands of customers.',
        image: '/projects/confetti_2.png',
      },
      {
        title: '👴 OneGeneration',
        description: 'A web/mobile application facilitating appointment scheduling between isolated individuals in long-term care homes and their families.',
        image: '/projects/onegeneration.png',
      },
    ],
    stack: ['vuejs', 'nuxtjs', 'javascript', 'capacitor', 'postgresql', 'mongodb'],
    date_start: 'JAN 2020',
    date_end: 'JAN 2022',
  },
];
