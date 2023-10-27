import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { AuthProvider, useAuth } from './Auth';

function MyApp({ Component, pageProps }) {
    return(
        <ThemeProvider attribute="class">
            <AuthProvider>
            <Component {...pageProps} />
            </AuthProvider>
        </ThemeProvider>
    );
}

export default MyApp
