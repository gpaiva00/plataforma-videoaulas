export interface LessonProps {
  id: string;
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}