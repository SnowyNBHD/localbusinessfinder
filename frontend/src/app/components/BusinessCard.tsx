import Link from 'next/link';
import './BusinessCard.css'
import Rating from './Rating'

export default function BusinessCard(
    { url, name, type, description, rating }: 
    { url: string, name: string, type: string, description: string, rating: number}
) {
    return(
        <Link href={url} className='business-card'>
            <h1>{name}</h1>
            <p className='business-type'>{type}</p>
            <p className=''>{description}</p>
            <Rating rating={rating} />
        </Link>
)};