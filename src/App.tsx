import './global.css'
import styles from './App.module.css'

import { LinkButtom } from './components/LinkButtom'
import { SocialLink } from './components/SocialLink'
import { ToglleModeButtom } from './components/ToglleModeButtom'

const links = [
  {
    id: 1,
    url: 'https://github.com/VagnerNerves',
    name: 'Veja meu Portfólio'
  },
  {
    id: 2,
    url: 'https://vagnernerves.notion.site/Estudando-a7b8dcae8f044dbf88d523878785d5a8',
    name: 'Minhas Anotações em Programação'
  },
  {
    id: 3,
    url: 'https://discord.gg/fbK5vb6PjB',
    name: 'Meu Servidor Discord'
  },
  {
    id: 4,
    url: 'https://www.rocketseat.com.br/',
    name: 'Conheça a Rocketseat'
  }
]

export function App() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img
          src="https://github.com/VagnerNerves.png"
          alt="Foto de Vagner Nerves"
        />
        <p>@VagnerNerves</p>
      </div>

      <ToglleModeButtom />

      <div className={styles.link}>
        <ul>
          {links.map(link => {
            return (
              <li key={link.id}>
                <LinkButtom url={link.url} name={link.name} />
              </li>
            )
          })}
        </ul>
      </div>

      <div className={styles.socialLinks}>
        <SocialLink url="https://github.com/VagnerNerves" typeLinks="Github" />
        <SocialLink
          url="https://www.linkedin.com/in/vagnernervessantos/"
          typeLinks="Linkedin"
        />
        <SocialLink
          url="https://www.instagram.com/vagnernerves/"
          typeLinks="Instragram"
        />
        <SocialLink
          url="https://www.youtube.com/@VagnerNerves"
          typeLinks="Youtube"
        />
        <SocialLink
          url="https://www.twitch.tv/vagnernerves"
          typeLinks="Twitch"
        />
        <SocialLink
          url="https://twitter.com/VagnerNerves"
          typeLinks="Twitter"
        />
      </div>

      <footer>
        Feito com ♥ pela{' '}
        <a href="https://rocketseat.com.br/" target="_blank">
          Rocketseat
        </a>
      </footer>
    </div>
  )
}
