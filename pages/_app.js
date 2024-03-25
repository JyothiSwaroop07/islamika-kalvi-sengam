import Home from './Home/index'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  
  return (
   <div>
    <Component {...pageProps} />
   </div>
  )
}
