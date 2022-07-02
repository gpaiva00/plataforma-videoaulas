import { DefaultUi, Player, Youtube } from '@vime/react'

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from '../graphql/generated';
import { LessonInfo } from './LessonInfo';

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    }
  });

  if (!data || !data.lesson) {
    return <div className='flex-1'>Carregando...</div>;
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data?.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <LessonInfo data={data} />
    </div>
  );
}