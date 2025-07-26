import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Music, Plus } from 'lucide-react';

const TagsArea = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className='flex items-center text-lg font-semibold'>
          <Music className='mr-2 size-5' style={{ color: '#0de1db' }} />
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
  );
};

export default TagsArea;
