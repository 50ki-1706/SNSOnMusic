import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, MapPin, Users } from 'lucide-react';

const JoinedEvent = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className='text-lg font-semibold'>参加したイベント</h3>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {pastEvents.map((event) => (
            <div key={event.id} className='flex items-center justify-between rounded-lg border p-4'>
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
  );
};

export default JoinedEvent;
