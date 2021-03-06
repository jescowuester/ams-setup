import React from 'react';
import Head from 'next/head';

import {
  Article,
  ClientCases,
  Contact,
  HiringEasy,
  Home,
  InGreatCompany,
  LargeCards,
  TextSection,
  WantToKnowMore,
  WeAreSpecialists,
  WhatWeDo,
  Jobs,
  OurTeam
} from 'containers';

const content = {
  home: {
    leftCol: {
      tagLine: 'You are a',
      title: 'Candidate',
      text:
        'Don’t check for job opportunities yourself. We do that work for you, matching you with the best scale-ups worldwide. Are you ready?',
      button: 'Find opportunities here'
    },
    rightCol: {
      tagLine: 'You are a',
      title: 'Scale-up',
      text:
        'We have an extremely large network. Built up from more than 20 years of experience. Let us find your next best leaders today.',
      button: 'Find me the one '
    }
  },
  hiringEasy: {
    img: '/static/placeholder.jpg',
    title: 'Want to make hiring easy?',
    text:
      'We have an extremely large network. Built up from more than 20 years of experience. Let us find your next best new talents today.',
    button: 'Book a call'
  },
  hiringEasyAlt: {
    images: [
      { img: '/static/placeholder.jpg', _id: 1 },
      { img: '/static/placeholder.jpg', _id: 2 },
      { img: '/static/placeholder.jpg', _id: 3 }
    ],
    title: 'Want to make hiring easy?',
    text:
      'We have an extremely large network. Built up from more than 20 years of experience. Let us find your next best new talents today.',
    button: 'Book a call'
  },
  whatWeDo: {
    title: 'What we do.',
    card1: {
      img: '/static/placeholder.jpg',
      title: 'Recruitment',
      text:
        'From a single key hire to multiple key hires. At One we can help you to allocate and attract these ‘had to find’ people. We’ve done it over a thousand times.'
    },
    card2: {
      img: '/static/placeholder.jpg',
      title: 'Recruitment',
      text:
        'From a single key hire to multiple key hires. At One we can help you to allocate and attract these ‘had to find’ people. We’ve done it over a thousand times.'
    },
    card3: {
      img: '/static/placeholder.jpg',
      title: 'Recruitment',
      text:
        'From a single key hire to multiple key hires. At One we can help you to allocate and attract these ‘had to find’ people. We’ve done it over a thousand times.'
    },
    card4: {
      img: '/static/placeholder.jpg',
      title: 'Recruitment',
      text:
        'From a single key hire to multiple key hires. At One we can help you to allocate and attract these ‘had to find’ people. We’ve done it over a thousand times.'
    }
  },
  clientCases: {
    title: 'Client Cases.',
    card1: {
      img: '/static/placeholder.jpg',
      title: 'Impraise',
      text: 'Kudos from Impraise!'
    },
    card2: {
      img: '/static/placeholder.jpg',
      title: 'Impraise',
      text: 'Kudos from Impraise!'
    },
    card3: {
      img: '/static/placeholder.jpg',
      title: 'Impraise',
      text: 'Kudos from Impraise!'
    },
    card4: {
      img: '/static/placeholder.jpg',
      title: 'Impraise',
      text: 'Kudos from Impraise!'
    },
    button: 'Read more'
  },
  inGreatCompany: {
    title: " You're in great company",
    text:
      'We know it takes time, money and resource to find the right talent. While you focus on growing your business, we can take care of finding you your dream team.',
    companies: [
      {
        name: 'vanmoof',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/placeholder-logo.png',
        _id: 1
      },
      {
        name: 'vanmoof',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/placeholder-logo.png',
        _id: 2
      },
      {
        name: 'vanmoof',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/placeholder-logo.png',
        _id: 3
      },
      {
        name: 'vanmoof',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/placeholder-logo.png',
        _id: 4
      },
      {
        name: 'vanmoof',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/placeholder-logo.png',
        _id: 5
      },
      {
        name: 'vanmoof',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/placeholder-logo.png',
        _id: 6
      }
    ]
  },
  wantToKnowMore: {
    img: '/static/placeholder-background.jpg',
    title: 'Want to know more?',
    text: 'Download our Scale-up pitch.',
    button: 'Download'
  },
  weAreSpecialists: {
    img: '/static/placeholder-background-2.png',
    title: 'We are your remote recruitment specialist',
    text:
      'We are specialized in helping scale-ups build stronger and bigger teams across a range of tech industries. Crazy about recruitment, even more about people.',
    button: 'Download our pitch'
  },
  fixRecruitmentGame: {
    title: 'Fixing the recruitment game.',
    col1:
      'We have the recruitment knowledge, man power, experience, tools and the network to place the perfect candidates in the right roles and support you on your additional a needs along the way. We’re on a mission.',
    tagline: 'We’re on a mission. As One. Are you in?'
  },
  makingHiringEasy: {
    title: 'Making hiring easy.',
    col1:
      'This is our goal. To help businesses get the talent they need to succeed. And to help people find a job they love. \n Everyone is incredibly frustrated by how hard it is to find amazing talent. We share that frustration. Recruiting is a fragmented, opaque process undermined by outdated technology that turns off candidates and hiring managers.',
    col2:
      'Now, imagine a world where it’s easy to find great candidates, it’s easy for people to show interest in jobs, it’s easy for hiring teams to collaborate, and your recruiting vendors are just a click away.',
    tagline: 'We imagined it. And then we delivered it.'
  },
  contact: {
    location: { lat: 52.3644254, lng: 4.8878303 },
    text: {
      title: 'Want to chat?',
      subTitle: 'We’d love to hear about your scale-up.',
      disclaimer: {
        txt:
          '*By submitting the above form you are giving us permission to use your details to contact you. Under EU General Data Protection Regulations compliance we will not share these details with any other party. See our <%- link %> here.',
        link: 'privacy statement',
        to: '/privacy-statement'
      }
    },
    form: {
      name: {
        name: 'name',
        type: 'text',
        placeholder: 'Your name',
        id: 'eb4a5b0f-b3b2-4782-8a90-2c896a4bbc2c'
      },
      email: {
        name: 'email',
        type: 'email',
        placeholder: 'Your email',
        id: 'dd754897-da20-4cb9-8bed-0ebbedd1e497'
      },
      phone: {
        name: 'tel',
        type: 'tel',
        placeholder: 'Your phone number',
        id: '49b90960-e3c1-402b-9803-0a34a61ea1d5'
      }
    },
    address: {
      title: 'Our Office',
      location: {
        title: 'Address ',
        street: 'Keizersgracht',
        number: '620',
        zipcode: '1017 ER',
        city: 'Amsterdam'
      },
      hours: {
        title: 'hours',
        week: { start: '8 AM', end: '6 PM' },
        weekend: '🎉 Celebrating the weekend'
      }
    }
  },
  largeCards: [
    {
      img: '/static/placeholder.jpg',
      title: 'We do recruitment',
      text:
        '<p>From a single to multiple key hires, from your next international hire to filling in one of your leadership roles… Done it, been there. Building entire teams?</p>  <p>Yep, done that too. Nearly 20 years of recruitment experience,</p> <p>combined with a large network and all the gear needed, we are here to help you.</p> '
    },
    {
      img: '/static/placeholder.jpg',
      title: 'We do recruitment',
      text:
        '<p>From a single to multiple key hires, from your next international hire to filling in one of your leadership roles… Done it, been there. Building entire teams?</p>  <p>Yep, done that too. Nearly 20 years of recruitment experience,</p> <p>combined with a large network and all the gear needed, we are here to help you.</p> '
    }
  ],
  article: {
    text:
      '<p> Al 6 jaar verbindt Ageras klanten met accountants en boekhouders in Denemarken, Zweden, Noorwegen, Nederland, Duitsland en het Verenigd Koninkrijk. </p> <p> Het succesverhaal begon in Kopenhagen, maar nu is het tijd voor een spannend nieuw hoofdstuk: de opening van een kantoor in Amsterdam! Ageras en One. zitten op dezelfde verdieping en een partnership was dan ook snel gesloten. Voor het opzetten van het eerste buitenlandse team helpt One. met o.a. employer branding en het vinden van de juiste mensen om van Ageras Nederland een groot succes te maken. Het Nederlandse team onder leiding van Nick bestaat nu uit Customer Success Managers Romy en Hans, en als Account Manager Sophie. Ageras is een slim platform dat boekhouders en accountants aan klanten koppelt. In het team zorgen de accountmanagers er voor dat er nieuwe accountants </p> <img src="/static/placeholder.jpg" /> <p> aan het platform worden aangesloten, en de customer success managers zijn verantwoordelijk voor de B2C zijde van de ‘marktplaats’. </p> ',
    shareText: 'Share this story',
    title: 'Setting up a team from scratch in The Netherlands',
    backButton: 'Back to blog overview'
  },
  jobs: {
    title: 'Jobs at One.',
    buttonText: 'View all vacancies',
    jobs: [
      {
        _id: 1,
        jobTitle: 'Designer',
        jobTitlePrefix: 'Senior User Experience',
        location: 'Amsterdam, the Netherlands',
        company: 'Oneworks',
        liked: true
      },
      {
        _id: 2,
        jobTitle: 'Designer',
        jobTitlePrefix: 'Senior User Experience',
        location: 'Amsterdam, the Netherlands',
        company: 'Oneworks',
        liked: false
      },
      {
        _id: 3,
        jobTitle: 'Designer',
        jobTitlePrefix: 'Senior User Experience',
        location: 'Amsterdam, the Netherlands',
        company: 'Oneworks',
        liked: false
      }
    ]
  },
  ourTeam: {
    title: 'This is our team.',
    text:
      'We’re crazy about recruitment, more about people. We’re a team of innovators, scale-up enthusiasts, 360 recruiters, sourcers, growth hackers, and content specialists. We work together to help Scale-Up’s grow & prosper, by working with them to find the perfect people to make it happen. We have the network, experience and tools, to make the recruitment process easy for you, simply, because we take care of it.',
    teamMembers: [
      {
        img: '/static/placeholder.jpg',
        name: 'Justin Swart',
        text:
          'Meet Tim. Tim was the first One team player and is one heck of a guy...',
        buttonText: 'Learn more',
        _id: 1
      },
      {
        img: '/static/placeholder.jpg',
        name: 'Justin Swart',
        text:
          'Meet Tim. Tim was the first One team player and is one heck of a guy...',
        buttonText: 'Learn more',
        _id: 2
      },
      {
        img: '/static/placeholder.jpg',
        name: 'Justin Swart',
        text:
          'Meet Tim. Tim was the first One team player and is one heck of a guy...',
        buttonText: 'Learn more',
        _id: 3
      },
      {
        img: '/static/placeholder.jpg',
        name: 'Justin Swart',
        text:
          'Meet Tim. Tim was the first One team player and is one heck of a guy...',
        buttonText: 'Learn more',
        _id: 4
      }
    ]
  }
};

function Index() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <title>
          ONE. - We are one, your solution to talent, growth and recruitment.
        </title>
        <meta
          name="description"
          content="Welcome to One. Whether you&#039;re a candidate for a Scale Up we can help you with finding the right job, or finding the right talent."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="ONE. - We are one, your solution to talent, growth and recruitment."
        />
        <meta
          property="og:description"
          content="Welcome to One. Whether you&#039;re a candidate for a Scale Up we can help you with finding the right job, or finding the right talent."
        />
        <meta property="og:url" content="https://oneworks.co/" />
        <meta property="og:site_name" content="ONE." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Welcome to One. Whether you&#039;re a candidate for a Scale Up we can help you with finding the right job, or finding the right talent."
        />
        <meta
          name="twitter:title"
          content="ONE. - We are one, your solution to talent, growth and recruitment."
        />
      </Head>
      <Home content={content.home} />
    </>
  );
}

export default Index;
