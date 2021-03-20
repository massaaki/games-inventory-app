import Button from 'components/Button'
import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'
import { useCart } from 'hooks/use-cart'

type CartButtonProps = {
  id: string
}

const CartButton = ({ id }: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()

  return (
    <Button
      icon={
        !isInCart(id) ? (
          <AddShoppingCart aria-label="Add to cart" />
        ) : (
          <RemoveShoppingCart aria-label="Remove from cart" />
        )
      }
      size="small"
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    />
  )
}

export default CartButton
