import Head from 'next/head';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import NavbarMobile from './NavbarMobile';

function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
            </Head>
            <NavbarMobile />
            <Navbar />
            <Header />
            <main className="flex flex-col min-h-screen overflow-hidden">{children}</main>
            <Footer />            
        </div>
    )
}

Layout.defaultProps = {
    title: 'Elemes.id',
    keywords: 'food, drink, cupcake',
    description: 'The best food for sale'
}

export default Layout
