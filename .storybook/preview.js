import GlobalStyles from 'styles/global'
import { CartContext, CartContextDefaultValues } from 'hooks/use-cart'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'


// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white,
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg,
      },
    ],
  },
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={{
        ...CartContextDefaultValues,
        ...(context?.args?.cartContextValue ||{}),
        ...context.args
      }}
      >
        <GlobalStyles removeBg />
        <Story />
      </CartContext.Provider>
    </ThemeProvider>
  )
]
