import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Event() {
  const { slug } = useParams<{ slug: string}>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {/* TODO: create placeholder when theres no slug
            something like "click aside to select a lesson"
            or load first lesson automatically
        */}

        { slug 
          ? <Video lessonSlug={slug} /> 
          : <div className="flex-1" /> 
        }
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}