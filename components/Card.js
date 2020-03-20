import styles from './Card.module.css'

export default ({ children, minHeight, height }) => (
  <div style={minHeight ? { minHeight , height} : {}} className={styles.card}>
    {children}
  </div>
)
