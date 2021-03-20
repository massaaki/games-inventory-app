import CartList from 'components/CartList'
import CartIcon from 'components/CartIcon'
import Dropdown from 'components/Dropdown'
import * as S from './styles'

const CartDropdown = () => (
  <S.Wrapper>
    <Dropdown title={<CartIcon />}>
      <CartList hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
