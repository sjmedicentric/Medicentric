// NEED THIS import { Provider } from "next-auth/client"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import theme from "./theme"
import BaseLayout from "../components/Layout/BaseLayout"
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  return (
    // <Provider
    // session={pageProps.session}
    // options={{
    //   clientMaxAge: 60, //re-fetch cache if cache is older than 60 secs
    //   keepAlive: 5 * 60 //Send keepAlive message every 5 minutes
    // }}
    // >
    <BaseLayout>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
      </ThemeProvider>
      <Component {...pageProps} />
    </BaseLayout>
    // </Provider>
  )
}
