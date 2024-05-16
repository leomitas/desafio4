import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { FaGithub } from 'react-icons/fa'

export default function Home() {
  return (
    <header className='w-full py-6 bg-zinc-900 flex justify-center items-center gap-8'>
      <h3 className='font-bold text-xl text-blue-700'>Leonardo Abreu</h3>
      <div className='bg-white w-max p-2 rounded-sm'>
        <a
          href='https://github.com/leomitas/desafio4'
          target='_blank'
          className='flex gap-2 items-center'
        >
          <FaGithub />
          Repositório
        </a>
      </div>
      <div className='border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2'>
        <DropdownMenu>
          <DropdownMenuTrigger>Contato</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Minhas redes sociais</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <a href='https://github.com/leomitas' target='_blank'>
              <DropdownMenuItem>Github</DropdownMenuItem>
            </a>
            <a
              href='https://www.linkedin.com/in/leonardo-abreu2402/'
              target='_blank'
            >
              <DropdownMenuItem>LinkedIn</DropdownMenuItem>
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=5512992412575'
              target='_blank'
            >
              <DropdownMenuItem>Whatsapp</DropdownMenuItem>
            </a>
            <a href='https://www.instagram.com/leomitas/' target='_blank'>
              <DropdownMenuItem>Instagram</DropdownMenuItem>
            </a>
            <a href='https://twitter.com/leomitas' target='_blank'>
              <DropdownMenuItem>Twitter</DropdownMenuItem>
            </a>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
