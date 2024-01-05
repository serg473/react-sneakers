import { PropsWithChildren } from 'react'
import styles from './ButtonCard.module.scss'
type ReactChildren = {
	children: string | JSX.Element
}
const ButtonCard = ({ children }: PropsWithChildren<ReactChildren>) => {
	return <button className={styles.cardButton}>{children}</button>
}

export default ButtonCard
