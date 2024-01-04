import ProductItem from './ProductItem'
export interface IProduct {
	like: boolean
	picture: string
	title: string
	price: string
}
const Product = () => {
	const product = [
		{
			like: false,
			picture:
				'https://sneakers.by/image/cache/catalog/sneakers-pics/101764/krossovki-adidas-retropy-f90-ig9988-1-695x695.jpg',
			title: 'Кроссовки Adidas Retropy F90 (IG9988)',
			price: '354.00 BYN',
		},
		{
			like: false,
			picture:
				'https://sneakers.by/image/cache/catalog/sneakers-pics/101752/krossovki-adidas-adifom-ig7454-1-695x695.jpg',
			title: 'Кроссовки Adidas AdiFOM (IG7454)',
			price: '365.00 BYN',
		},
		{
			like: false,
			picture:
				'https://sneakers.by/image/cache/catalog/sneakers-pics/101755/krossovki-adidas-osade-ig7330-1-695x695.jpg',
			title: 'Кроссовки Adidas Osade (IG7330)',
			price: '298.00 BYN',
		},
		{
			like: false,
			picture:
				'https://sneakers.by/image/cache/catalog/sneakers-pics/101766/krossovki-adidas-avryn-ig2374-1-695x695.jpg',
			title: 'Кроссовки Adidas Avryn (IG2374)',
			price: '488.00 BYN',
		},
	]
	return (
		<>
			{product.map((item, index) => (
				<ProductItem sneaker={item} key={index} />
			))}
		</>
	)
}

export default Product
