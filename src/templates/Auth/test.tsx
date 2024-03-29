import { render, screen } from 'utils/test-utils'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    render(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByRole('img', { name: /Won Games/i })).toHaveLength(2)
    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /WON is the best and most complete gaming platform./i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Auth title/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
