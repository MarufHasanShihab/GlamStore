import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const CartItem = ({cart}) => {
    const {id, image, title, quantity} = cart || {}
  return (
    <div>
      <Link to={`/product/${id}`}><img src={image} width={80} height={80} /></Link>
    </div>
  )
}

CartItem.propTypes = {
    cart: PropTypes.object.isRequired
}

export default CartItem
