import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Home(){
  // TODO: try to use react-hook-form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate()

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();
    
    try {
      await createSubscriber({
        variables: {
          email, name,
        }
      })
  
      navigate('/event')
    } catch {
      // todo: add error handling
    }
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <img src="/src/assets/reactjs-icon.svg" className="absolute mt-2" alt="" />

      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded z-0">
          <h1 className="text-2xl mb-6 block">Inscreva-se gratuitamente</h1>

          <form action="" className="flex flex-col gap-2 w-full">
            <Input 
              placeholder="Seu nome completo"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <Input 
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <button
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              onClick={handleSubscribe}
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
    </div>
  );
}