import './global.css'
import styles from './App.module.css'

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
    </div>
  )
}
