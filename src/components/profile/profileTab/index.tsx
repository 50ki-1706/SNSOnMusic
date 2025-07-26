'use client';

import { UserProfile } from '@/lib/types/profile';
import { useState } from 'react';
import BioArea from './BioArea';
import JoinedEvent from './JoinedEvent';
import TagsArea from './TagsArea';

type ProfileTabProps = {
  profileData: UserProfile;
  isEditing: boolean;
};

export const ProfileTab = ({ profileData, isEditing }: ProfileTabProps) => {
  const { bio, UserFavoriteGenre, UserFavoriteArtist } = profileData;
  const [genres, setGenres] = useState(UserFavoriteGenre.map((g) => g.name) || []);
  const [artists, setArtists] = useState(UserFavoriteArtist.map((a) => a.name) || []);
  const [newTag, setNewTag] = useState('');
  const [profileText, setProfileText] = useState(bio || 'よろしくお願いします');

  const addTag = (type: 'genre' | 'artist') => {
    if (newTag.trim()) {
      if (type === 'genre') {
        setGenres([...genres, newTag.trim()]);
      } else {
        setArtists([...artists, newTag.trim()]);
      }
      setNewTag('');
    }
  };

  const removeTag = (type: 'genre' | 'artist', index: number) => {
    if (type === 'genre') {
      setGenres(genres.filter((_, i) => i !== index));
    } else {
      setArtists(artists.filter((_, i) => i !== index));
    }
  };

  const pastEvents = [
    {
      id: 1,
      name: 'Summer Music Festival 2024',
      date: '2024-07-15',
      location: '東京ドーム',
      participants: 120,
    },
    {
      id: 2,
      name: 'Jazz Night Session',
      date: '2024-06-20',
      location: 'Blue Note Tokyo',
      participants: 45,
    },
    {
      id: 3,
      name: 'Acoustic Live',
      date: '2024-05-10',
      location: '渋谷クラブクアトロ',
      participants: 80,
    },
  ];

  return (
    <div className='space-y-6'>
      <BioArea />
      <TagsArea />
      <JoinedEvent pastEvents={pastEvents} />
    </div>
  );
};
