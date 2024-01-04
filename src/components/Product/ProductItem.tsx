import { IoAdd } from 'react-icons/io5'
import { IProduct } from './Product'
import styles from './ProductItem.module.scss'

const ProductItem = ({ sneaker }: { sneaker: IProduct }) => {
	return (
		<div className={styles.item}>
			<div>
				<img
					width='133'
					height='112'
					src={sneaker.picture}
					alt={sneaker.title}
				/>
			</div>
			<h2 className={styles.item__title}>{sneaker.title}</h2>
			<div className={styles.item__info}>
				<div className={styles.item__price}>
					<span>Цена:</span>
					<strong>{sneaker.price}</strong>
				</div>
				<div className={styles.item__add}>
					<button>
						<IoAdd color='#d3d3d3' size='20px' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
