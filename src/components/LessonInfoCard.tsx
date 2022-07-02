import { FileArrowDown, CaretRight, Image } from "phosphor-react";

interface LessonInfoCardProps {
  type: "file" | "media";
  title: string;
  description: string;
}

export function LessonInfoCard(props: LessonInfoCardProps) {
  const { title, description, type } = props;

  const cardTypes = {
    file: <FileArrowDown size={40} />,
    media: <Image size={40} />,
  };

  return (
    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
      <div className="bg-green-700 h-full p-6 flex items-center">
        {cardTypes[type]}
      </div>
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">
          {title}
        </strong>
        <p className="text-sm text-gray-200 mt-2">
          {description}
        </p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight size={24}/>
      </div>
    </a>
  )
}