import { RocketseatLogo } from "./RocketseatLogo";

export function Footer() {

  return (
    <footer className="w-full bg-gray-900 text-gray-300 p-6 border-t border-gray-600 flex items-center">
      <RocketseatLogo />
      <span className="text-sm text-gray-300 ml-6 flex-1">
        Rocketseat - Todos os direitos reservados
      </span>
      <span className="text-sm text-gray-300">
        Políticas de privacidade
      </span>
      </footer>
    )
}
