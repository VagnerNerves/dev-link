import './global.css'
import styles from './App.module.css'
import { LinkButtom } from './components/LinkButtom'
import { SocialLink } from './components/SocialLink'

const links = [
  {
    id: 1,
    url: '#',
    name: 'Inscrever-se no NLW'
  },
  {
    id: 2,
    url: '#',
    name: 'Baixar meu e-book'
  },
  {
    id: 3,
    url: '#',
    name: 'Veja meu portfólio'
  },
  {
    id: 4,
    url: '#',
    name: 'Conheça o Explorer'
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
        <SocialLink url="#" typeLinks="github" />
        <SocialLink url="#" typeLinks="instragram" />
        <SocialLink url="#" typeLinks="youtube" />
        <SocialLink url="#" typeLinks="linkedin" />
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
