import { TbStar, TbStarHalfFilled, TbStarFilled } from "react-icons/tb"

const stars = Array(5).fill(0)

export default function Rating({ rating }: { rating: number }) {
    return(
    <div>
        {stars.map((_, index) => {
            return (
             (rating) > index ? ((rating) > (index + 0.5) ? <TbStarFilled key={index} /> : <TbStarHalfFilled key={index} />) : <TbStar key={index}/>
             // Code adapted from https://dev.to/annaqharder/how-to-make-star-rating-in-react-2e6f
            )
        })}
   </div>
    )
};