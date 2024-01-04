import { IProduct } from './Product'
import styles from './ProductItem.module.scss'

const ProductItem = ({ sneaker }: { sneaker: IProduct }) => {
	return (
		<div className={styles.item}>
			<img width='133' height='112' src={sneaker.picture} alt={sneaker.title} />
			<h2 className={styles.item__title}>{sneaker.title}</h2>
		</div>
	)
}

export default ProductItem
