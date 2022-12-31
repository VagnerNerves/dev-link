import styles from './ToglleModeButtom.module.css'

export function ToglleModeButtom() {
  function handleToglleMode() {
    document.body.classList.toggle('light')
  }

  return (
    <div className={styles.switch} onClick={handleToglleMode}>
      <button></button>
      <span></span>
    </div>
  )
}
