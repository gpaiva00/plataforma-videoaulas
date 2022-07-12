import { PlayCircle } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Placeholder } from "../components/Placeholder";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Event() {
  const { slug } = useParams<{ slug: string}>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { !slug && 
          <Placeholder 
            text="Escolha uma aula ao lado"
            icon={<PlayCircle size={40} />}
          />
        }

        { slug && <Video lessonSlug={slug} /> }
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}