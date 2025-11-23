import { Link } from 'react-router-dom'
import './productsCard.css'
import BasketIcon from '@ui/assets/productsCLIcons/basket.svg?react'
import LikeIcon from '@ui/assets/productsCLIcons/like.svg?react'
import SearchIcon from '@ui/assets/productsCLIcons/search.svg?react'

interface IProductsCardProps {
    id: number;
    preview: string; 
    name: string; 
    price: string; 
    priceWithoutDiscont?: string;
    discontSize?: number;
}

function ProductsCard(props: IProductsCardProps) {

    const domain = 'http://127.0.0.1:5173';

    const { preview, name, price, id, priceWithoutDiscont, discontSize } = props;

    return (
        <li className='productsCard'>
            <div className='productsCard__inner'>
                <div className='productsCard__preview'>
                    <Link className='productsCard__link' to={`/product/${0}`}>
                        <img className='productsCard__img' src={preview} alt={name} />
                    </Link>
                    {priceWithoutDiscont || discontSize
                        ? (
                            <div className="productsCard__discont">
                                <p className='productsCard__discont-text'>
                                    {discontSize}% OFF
                                </p>
                            </div>
                        ) :
                        null
                    }
                    <div className='productsCard__manage'>

                        <button className='productsCard__manage-btn'>
                            <BasketIcon className="productsCard__manage-default-icon" />
                        </button>

                        <button className='productsCard__manage-btn'>
                            <LikeIcon className="productsCard__manage-default-icon" />
                        </button>

                        <button className='productsCard__manage-btn'>
                            <SearchIcon className="productsCard__manage-default-icon" />
                        </button>

                    </div>
                </div>
                <div className='productsCard__content'>
                    <a className='productsCard__link' href={`${domain}/products/${id}`}>
                        <h2 className='productsCard__name'>{name}</h2>
                    </a>
                    {priceWithoutDiscont || discontSize ?
                        (
                            <div className='productsCard__discont-price-container'>
                                <p className='productsCard__price'>${price}</p>
                                <p className='productsCard__price productsCard__discont-price'>${priceWithoutDiscont}</p>
                            </div>
                        )
                        :
                        (<p className='productsCard__price'>${price}</p>)
                    }

                </div>
            </div>
        </li>
    )
}

export default ProductsCard