import styles from './Card.module.css'

export interface CardProps {
  children: any
  height?: string
}
const Card: React.FC<CardProps> = ({ children, height }) => (
  <div style={{ height }} className={styles.card}>
    {children}
  </div>
)

export default Card