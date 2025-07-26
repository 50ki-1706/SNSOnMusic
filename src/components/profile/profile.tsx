'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { UserProfile } from '@/lib/types';
import { Calendar, Edit2, Heart, MapPin, MessageCircle, Music, Plus, Users } from 'lucide-react';
import { useState } from 'react';

const ProfilePage = ({ profileData }: { profileData: UserProfile }) => {
  console.log(profileData);
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [genres, setGenres] = useState(['ロック', 'ポップス', 'ジャズ', 'クラシック']);
  const [artists, setArtists] = useState(['The Beatles', '米津玄師', 'Queen', 'あいみょん']);
  const [newTag, setNewTag] = useState('');
  const [oneLineDescription, setOneLineDescription] =
    useState('音楽で人生を彩る、イベント好きのミュージシャン');
  const [profileText, setProfileText] = useState(
    '音楽を通じて多くの人とつながりたいと思っています。ライブハウスでの演奏経験もあり、様々なジャンルの音楽を愛しています。一緒に音楽を楽しめる仲間を探しています！',
  );
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

  const recruitingEvents = [
    {
      id: 1,
      name: 'Autumn Rock Festival',
      date: '2024-10-15',
      location: '幕張メッセ',
      needed: 5,
      current: 3,
    },
    {
      id: 2,
      name: 'Christmas Jazz Concert',
      date: '2024-12-24',
      location: 'サントリーホール',
      needed: 8,
      current: 6,
    },
  ];

  const participatingEvents = [
    { id: 1, name: 'New Year Live', date: '2024-12-31', location: '武道館', organizer: '田中太郎' },
    {
      id: 2,
      name: 'Spring Concert',
      date: '2025-03-20',
      location: 'オーチャードホール',
      organizer: '佐藤花子',
    },
  ];

  const blogPosts = [
    {
      id: 1,
      content:
        '今日は新しい楽器を購入しました！ギターの音色が素晴らしくて、早く皆さんに聞いてもらいたいです。',
      timestamp: '2時間前',
      likes: 12,
      comments: [
        { user: '田中太郎', content: 'どんなギターですか？', timestamp: '1時間前' },
        { user: '佐藤花子', content: '素敵ですね！今度聞かせてください', timestamp: '30分前' },
      ],
    },
    {
      id: 2,
      content:
        '昨日のライブは最高でした！観客の皆さんとの一体感が忘れられません。次回のイベントも楽しみです。',
      timestamp: '1日前',
      likes: 28,
      comments: [{ user: '山田次郎', content: '素晴らしい演奏でした！', timestamp: '1日前' }],
    },
  ];

  return (
    <div className='min-h-screen' style={{ backgroundColor: '#fcfcff' }}>
      {/* Header */}
      <div className='relative'>
        <div
          className='h-48 bg-gradient-to-r from-blue-400 to-purple-500 bg-cover bg-center md:h-64'
          style={{
            backgroundImage:
              'url(/placeholder.svg?height=256&width=1200&query=music concert stage lights)',
          }}
        />
        <div className='absolute -bottom-16 left-4 md:left-8'>
          <Avatar className='h-24 w-24 border-4 border-white md:h-32 md:w-32'>
            <AvatarImage src='/placeholder.svg?height=128&width=128' />
            <AvatarFallback>YT</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className='px-4 pt-20 md:px-8'>
        <div className='mb-6 flex flex-col md:flex-row md:items-center md:justify-between'>
          <div>
            <h1 className='text-2xl font-bold text-gray-900 md:text-3xl'>山田太郎</h1>
            <p className='text-gray-600'>@yamada_taro</p>
            <p className='mt-1 text-sm text-gray-500'>フォロワー 234人 • フォロー中 156人</p>
          </div>
          <Button
            variant='outline'
            onClick={() => setIsEditing(!isEditing)}
            className='mt-4 md:mt-0'
          >
            <Edit2 className='mr-2 h-4 w-4' />
            プロフィール編集
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
          <TabsList className='mb-8 grid w-full grid-cols-3'>
            <TabsTrigger value='profile'>プロフィール</TabsTrigger>
            <TabsTrigger value='events'>イベント</TabsTrigger>
            <TabsTrigger value='blog'>ブログ</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value='profile' className='space-y-6'>
            {/* Music Genres and Artists */}
            <Card>
              <CardHeader>
                <h3 className='flex items-center text-lg font-semibold'>
                  <Music className='mr-2 h-5 w-5' style={{ color: '#0de1db' }} />
                  好きな音楽ジャンル・アーティスト
                </h3>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h4 className='mb-2 font-medium'>ジャンル</h4>
                  <div className='mb-2 flex flex-wrap gap-2'>
                    {genres.map((genre, index) => (
                      <Badge
                        key={index}
                        variant='secondary'
                        className='cursor-pointer'
                        style={{ backgroundColor: '#0de1db', color: 'white' }}
                        onClick={() => isEditing && removeTag('genre', index)}
                      >
                        {genre} {isEditing && '×'}
                      </Badge>
                    ))}
                  </div>
                  {isEditing && (
                    <div className='flex gap-2'>
                      <Input
                        placeholder='新しいジャンルを追加'
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addTag('genre')}
                      />
                      <Button onClick={() => addTag('genre')} size='sm'>
                        <Plus className='h-4 w-4' />
                      </Button>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className='mb-2 font-medium'>アーティスト</h4>
                  <div className='mb-2 flex flex-wrap gap-2'>
                    {artists.map((artist, index) => (
                      <Badge
                        key={index}
                        variant='outline'
                        className='cursor-pointer'
                        onClick={() => isEditing && removeTag('artist', index)}
                      >
                        {artist} {isEditing && '×'}
                      </Badge>
                    ))}
                  </div>
                  {isEditing && (
                    <div className='flex gap-2'>
                      <Input
                        placeholder='新しいアーティストを追加'
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addTag('artist')}
                      />
                      <Button onClick={() => addTag('artist')} size='sm'>
                        <Plus className='h-4 w-4' />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* One-line Description */}
            <Card>
              <CardContent className='pt-6'>
                {isEditing ? (
                  <Input
                    value={oneLineDescription}
                    onChange={(e) => setOneLineDescription(e.target.value)}
                    className='text-lg font-medium'
                  />
                ) : (
                  <h2 className='text-lg font-medium text-gray-900'>{oneLineDescription}</h2>
                )}
              </CardContent>
            </Card>

            {/* Profile Description */}
            <Card>
              <CardContent className='pt-6'>
                {isEditing ? (
                  <Textarea
                    value={profileText}
                    onChange={(e) => setProfileText(e.target.value)}
                    rows={4}
                  />
                ) : (
                  <p className='leading-relaxed text-gray-700'>{profileText}</p>
                )}
              </CardContent>
            </Card>

            {/* Past Events */}
            <Card>
              <CardHeader>
                <h3 className='text-lg font-semibold'>参加したイベント</h3>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {pastEvents.map((event) => (
                    <div
                      key={event.id}
                      className='flex items-center justify-between rounded-lg border p-4'
                    >
                      <div>
                        <h4 className='font-medium'>{event.name}</h4>
                        <div className='mt-1 flex items-center gap-4 text-sm text-gray-600'>
                          <span className='flex items-center'>
                            <Calendar className='mr-1 h-4 w-4' />
                            {event.date}
                          </span>
                          <span className='flex items-center'>
                            <MapPin className='mr-1 h-4 w-4' />
                            {event.location}
                          </span>
                          <span className='flex items-center'>
                            <Users className='mr-1 h-4 w-4' />
                            {event.participants}人参加
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value='events' className='space-y-6'>
            {/* Recruiting Events */}
            <Card>
              <CardHeader>
                <h3 className='text-lg font-semibold' style={{ color: '#0de1db' }}>
                  募集中のイベント
                </h3>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {recruitingEvents.map((event) => (
                    <div key={event.id} className='rounded-lg border p-4'>
                      <h4 className='font-medium'>{event.name}</h4>
                      <div className='mt-2 flex items-center gap-4 text-sm text-gray-600'>
                        <span className='flex items-center'>
                          <Calendar className='mr-1 h-4 w-4' />
                          {event.date}
                        </span>
                        <span className='flex items-center'>
                          <MapPin className='mr-1 h-4 w-4' />
                          {event.location}
                        </span>
                      </div>
                      <div className='mt-2'>
                        <span className='text-sm' style={{ color: '#ff9900' }}>
                          募集: {event.needed}人中{event.current}人参加済み
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Participating Events */}
            <Card>
              <CardHeader>
                <h3 className='text-lg font-semibold'>参加予定のイベント</h3>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {participatingEvents.map((event) => (
                    <div key={event.id} className='rounded-lg border p-4'>
                      <h4 className='font-medium'>{event.name}</h4>
                      <div className='mt-2 flex items-center gap-4 text-sm text-gray-600'>
                        <span className='flex items-center'>
                          <Calendar className='mr-1 h-4 w-4' />
                          {event.date}
                        </span>
                        <span className='flex items-center'>
                          <MapPin className='mr-1 h-4 w-4' />
                          {event.location}
                        </span>
                      </div>
                      <p className='mt-1 text-sm text-gray-600'>主催者: {event.organizer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blog Tab */}
          <TabsContent value='blog' className='space-y-6'>
            {/* New Post */}
            <Card>
              <CardContent className='pt-6'>
                <Textarea placeholder='今何をしていますか？' rows={3} className='mb-4' />
                <Button style={{ backgroundColor: '#0de1db', color: 'white' }}>投稿する</Button>
              </CardContent>
            </Card>

            {/* Blog Posts */}
            {blogPosts.map((post) => (
              <Card key={post.id}>
                <CardContent className='pt-6'>
                  <div className='flex items-start gap-3'>
                    <Avatar className='h-10 w-10'>
                      <AvatarImage src='/placeholder.svg?height=40&width=40' />
                      <AvatarFallback>YT</AvatarFallback>
                    </Avatar>
                    <div className='flex-1'>
                      <div className='mb-2 flex items-center gap-2'>
                        <span className='font-medium'>山田太郎</span>
                        <span className='text-sm text-gray-500'>{post.timestamp}</span>
                      </div>
                      <p className='mb-4 text-gray-700'>{post.content}</p>

                      {/* Actions */}
                      <div className='mb-4 flex items-center gap-4'>
                        <Button variant='ghost' size='sm' className='text-gray-600'>
                          <Heart className='mr-1 h-4 w-4' />
                          {post.likes}
                        </Button>
                        <Button variant='ghost' size='sm' className='text-gray-600'>
                          <MessageCircle className='mr-1 h-4 w-4' />
                          {post.comments.length}
                        </Button>
                      </div>

                      {/* Comments */}
                      <div className='space-y-3'>
                        {post.comments.map((comment, index) => (
                          <div key={index} className='flex items-start gap-2'>
                            <Avatar className='h-8 w-8'>
                              <AvatarImage src='/placeholder.svg?height=32&width=32' />
                              <AvatarFallback>{comment.user[0]}</AvatarFallback>
                            </Avatar>
                            <div className='flex-1 rounded-lg bg-gray-50 p-3'>
                              <div className='mb-1 flex items-center gap-2'>
                                <span className='text-sm font-medium'>{comment.user}</span>
                                <span className='text-xs text-gray-500'>{comment.timestamp}</span>
                              </div>
                              <p className='text-sm'>{comment.content}</p>
                            </div>
                          </div>
                        ))}

                        {/* Add Comment */}
                        <div className='mt-3 flex items-center gap-2'>
                          <Avatar className='h-8 w-8'>
                            <AvatarImage src='/placeholder.svg?height=32&width=32' />
                            <AvatarFallback>YT</AvatarFallback>
                          </Avatar>
                          <Input placeholder='コメントを書く...' className='flex-1' />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
