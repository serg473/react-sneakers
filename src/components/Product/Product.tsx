import { Box } from '@mui/material'
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
				'https://sneakerstore.by/image/cache/catalog/products/2023/11/271240/IMG_2633-auto_width_1000-auto_width_380.png',
			title: 'NIKE AIR JORDAN 4 CANYON PURPLE WINTER',
			price: '180.00 BYN',
		},
		{
			like: false,
			picture:
				'https://sneakerstore.by/image/cache/catalog/products/2023/11/212155/IMG_1316-auto_width_1000-auto_width_380.png',
			title: 'BALENCIAGA TRIPLE S BLACK',
			price: '210.00 BYN',
		},
		{
			like: false,
			picture:
				'https://sneakerstore.by/image/cache/catalog/products/2023/11/281519/IMG_3897-auto_width_1000-auto_width_380.png',
			title: 'NIKE TRAVIS SCOTT X JORDAN 1 LOW PHANTOM BLUE',
			price: '165.00 BYN',
		},
		{
			like: false,
			picture:
				'https://sneakerstore.by/image/cache/catalog/products/2023/11/281520/IMG_0983-auto_width_1000-auto_width_380.png',
			title: 'JORDAN 1 LOW SOFT BLUE',
			price: '165.00 BYN',
		},
		{
			like: false,
			picture:
				'https://sneakerstore.by/image/cache/catalog/products/2023/11/282113/IMG_1069-auto_width_1000-auto_width_380.png',
			title: 'NIKE AIR FORCE 1 LOW WHITE',
			price: '150.00 BYN',
		},
		{
			like: false,
			picture:
				'https://sneakerstore.by/image/cache/catalog/products/2023/11/271239/IMG_2607-auto_width_1000-auto_width_380.png',
			title: 'NIKE JORDAN 4 BRED WINTER',
			price: '180.00 BYN',
		},
		{
			like: false,
			picture:
				'https://sneakerstore.by/image/cache/catalog/products/2023/11/281521/IMG_0998-auto_width_1000-auto_width_380.png',
			title: 'NIKE SB DUNK LOW GRATEFUL DEAD BEARS ORANGE',
			price: '120.00 BYN',
		},
		{
			like: false,
			picture:
				'https://sneakerstore.by/image/cache/catalog/products/2023/11/281419/IMG_5075-auto_width_1000-auto_width_380.png',
			title: 'NIKE AIR JORDAN 4 TRAVIS SCOTT CACTUS JACK',
			price: '170.00 BYN',
		},
	]
	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
			{product.map((item, index) => (
				<ProductItem sneaker={item} key={index} />
			))}
		</Box>
	)
}

export default Product
