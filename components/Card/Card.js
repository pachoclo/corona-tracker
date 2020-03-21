import styles from './Card.module.css'

export default ({ children, height }) => (
  <div style={height ? { height } : {}} className={styles.card}>
    {children}
  </div>
)
