import { DiscordLogo, Lightning } from "phosphor-react";
import { GetLessonBySlugQuery } from "../graphql/generated";
import { Button } from "./Button";
import { LessonInfoCard } from "./LessonInfoCard";

interface LessonInfoProps {
  data: GetLessonBySlugQuery;
}

export function LessonInfo(props: LessonInfoProps) {
  const { data } = props;

  if (!data || !data.lesson) return <div className="flex-1">Carregando...</div>;
  
  return (
    <div className="p-8 max-w-[1100px] mx-auto">
      <div className="flex items-start gap-16">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">
            {data?.lesson.title}
          </h1>
          <p className="mt-4 text-gray-300 leading-relaxed">
            {data?.lesson.description}
          </p>

          <div className="flex items-center gap-4 mt-6">
            <img 
              className="h-16 w-16 rounded-full border-2 border-green-500"
              src={data?.lesson.teacher?.avatarURL} 
              alt="" />

            <div className="leading-relaxed">
              <strong className="font-bold text-2xl block">
                {data?.lesson.teacher?.name}
              </strong>
              <span className="text-gray-300 text-sm block">
                {data?.lesson.teacher?.bio}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Button 
            href="#"  
            variant="primary"
            text="Comunidade do Discord"
            icon={<DiscordLogo size={24}/>}
          />

          <Button 
            href="#"
            variant="tertiary"
            text="Acesse o desafio"
            icon={<Lightning size={24}/>}
          />
        </div>
      </div>

      <div className="gap-8 mt-20 grid grid-cols-2 mb-20">
        <LessonInfoCard
          type="file"
          title="Material complementar"
          description="Acesse o material complementar para acelerar o seu desenvolvimento"
        />
      
        <LessonInfoCard 
          type="media"
          title="Wallpapers exclusivos"
          description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
        />
      </div>
    </div>
  )
}