export const apiUrl = 'http://localhost:4000';

export const sideBarData = {
  User: [
    {
      icon: 'BiSolidDashboard',
      path: '/profile/client/books',
      title: 'books',
      isActive: false,
    },

    {
      icon: 'BiPen',
      path: '/profile/client/write',
      title: 'Write',
      isActive: false,
    },
    {
      icon: 'SlSettings',
      path: '/profile/client/settings',
      title: 'Account settings',
      isActive: false,
    },
  ],
};

import { nanoid } from '@reduxjs/toolkit';
import React from 'react';

export const AppData = {
  books: [
    {
      title: 'The Enchanted Forest',
      id: nanoid(32),
      authorId: nanoid(32),
      author: 'Alice Johnson',
      publicationDate: 'January 15, 2021',
      genre: 'Fantasy',
      description:
        "A captivating tale of a young girl's adventures in a magical forest.",
    },
    {
      id: nanoid(32),
      authorId: nanoid(32),

      title: 'Mystery at the Manor',
      author: 'John Smith',
      publicationDate: 'March 22, 2019',
      genre: 'Mystery',
      description: 'A gripping mystery set in an old, secluded manor house.',
    },
    {
      id: nanoid(32),
      authorId: nanoid(32),
      title: 'Love in the Time of Algorithms',
      author: 'Emma Brown',
      publicationDate: 'June 10, 2020',
      genre: 'Romance',
      description:
        'A modern love story exploring relationships in the digital age.',
    },
    {
      id: nanoid(32),
      authorId: nanoid(32),
      title: 'The Last Frontier',
      author: 'Michael Davis',
      publicationDate: 'August 5, 2022',
      genre: 'Science Fiction',
      description:
        'An epic journey through space to find a new home for humanity.',
    },
    {
      id: nanoid(32),
      authorId: nanoid(32),
      title: 'Echoes of the Past',
      author: 'Linda Roberts',
      publicationDate: 'November 12, 2018',
      genre: 'Historical Fiction',
      description:
        'A poignant story set during World War II, following the lives of two families.',
    },
  ],
  authors: [
    {
      name: 'Alice Johnson',
      bio: 'Alice Johnson is a fantasy writer who draws inspiration from nature and folklore. She has been writing for over a decade and has published several best-selling novels.',
      notableWorks: [
        'The Enchanted Forest',
        'Whispers in the Wind',
        'The Hidden Realm',
      ],
    },
    {
      name: 'John Smith',
      bio: 'John Smith is known for his thrilling mystery novels. He enjoys crafting intricate plots and has a background in criminology, which adds authenticity to his work.',
      notableWorks: [
        'Mystery at the Manor',
        'The Silent Witness',
        'The Secret Code',
      ],
    },
    {
      name: 'Emma Brown',
      bio: 'Emma Brown writes contemporary romance novels that often explore the complexities of modern relationships. Her relatable characters and engaging storylines have earned her a loyal following.',
      notableWorks: [
        'Love in the Time of Algorithms',
        'Hearts Entwined',
        'Digital Love',
      ],
    },
    {
      name: 'Michael Davis',
      bio: 'Michael Davis is a science fiction author with a passion for space exploration and futuristic technology. His novels often feature detailed world-building and adventurous plots.',
      notableWorks: [
        'The Last Frontier',
        'Stellar Odyssey',
        'Beyond the Stars',
      ],
    },
    {
      name: 'Linda Roberts',
      bio: 'Linda Roberts specializes in historical fiction, bringing past eras to life with her vivid storytelling. She has a deep interest in history and enjoys researching different time periods for her books.',
      notableWorks: [
        'Echoes of the Past',
        'War and Peace',
        'The Forgotten Village',
      ],
    },
  ],
};
