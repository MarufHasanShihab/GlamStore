import PropTypes from "prop-types"
import { FaMinus, FaPlus } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import { Link } from "react-router-dom"
import useCart from "../hooks/useCart"

const CartItem = ({product}) => {
    const {id, image, title, quantity,price} = product || {}
    const {removeProduct, incrementQuantity, decrementQuantity} = useCart()
  return (
    <div className="flex gap-x-3">
      <Link to={`/product/${id}`} className="flexCenter m-1 py-1 rounded-xl ring-1 ring-slate-900/50 h-[74px]"><img src={image} width={80} height={80} className="object-contain aspect-square p-1"  /></Link>
      <div>
        {/* title and remove icon */}
        <div className="flex flex-[4] flox-col gap-y-2 mr-3">
            <div className="flex justify-between gap-8 items-baseline">
            <div >{title}</div>
            <div onClick={()=>removeProduct(id)} className="cursor-pointer"><MdClose/></div>
            </div>
        </div>
        {/* cart btns and price */}
        <div className="flex justify-between">
            <div className="flex items-center gap-4">
                <FaMinus onClick={()=>decrementQuantity(id)} className="cursor-pointer" />
                <span>{quantity}</span>
                <FaPlus onClick={()=>incrementQuantity(product)} className="cursor-pointer" />
            </div>
            <p>${price}</p>
            {/* final price */}
            <div>
                <div className="medium-15">{`$${parseFloat(price * quantity).toFixed(2)}`}</div>
            </div>
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
    product: PropTypes.object.isRequired
}

export default CartItem
