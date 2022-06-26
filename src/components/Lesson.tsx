import { CheckCircle, Lock } from 'phosphor-react'
import { LessonProps } from '../interfaces/Lesson';
import { isPast } from '../utils/isPast';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE • dd 'de' MMMM • k'h'mm", { locale: ptBR });
  const availableDateText = capitalizeFirstLetter(availableDateFormatted)

  const isLessonActive = slug === props.slug;

  return (
    <Link 
      to={isLessonAvailable ? `/event/lesson/${props.slug}` : "#"} 
      className={`${isLessonAvailable ? "group opacity-100" : "opacity-60"}`}
    >
      <span>
        <span className="text-gray-300">
          {availableDateText}
        </span>

        <div className={isLessonActive ? "active-lesson" : "default-lesson"}> 
          <header className="flex items-center justify-between">
            {isLessonAvailable ? (
              <span 
                className={classNames('text-sm font-medium flex items-center gap-2', {
                  'text-white': isLessonActive,
                  'text-blue-500': !isLessonActive,
                })}
              >
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
              ) : (
              <span 
                className="text-sm text-orange-500 font-medium flex items-center gap-2"
              >
                <Lock size={20} />
                Em breve
              </span>
            )}
            <span 
              className={isLessonActive ? "active-lesson-type" : "default-lesson-type"}
            >
              {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
            </span>
          </header>

          <strong className={classNames('mt-5 block', {
            'text-white': isLessonActive,
            'text-gray-200': !isLessonActive
          })}>
            {props.title}
          </strong>
        </div>
      </span>
    </Link>
  );
}
