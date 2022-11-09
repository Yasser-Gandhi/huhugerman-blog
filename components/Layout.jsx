import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'HuhuGerman';

export default function Layout({children, title, description, home}) {
  console.log(home)

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/1.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/img/1.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <nav>
        <Link href="/">
          <a>Inicio | </a>
        </Link>
        <Link href="/blog">
          <a>Blog | </a>
        </Link>
        <Link href="/about">
          <a>Sobre mi | </a>
        </Link>
      </nav>

      <main>{children}</main>
      
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Züruck</a>
          </Link>
        </div>
      )}

      <footer>Footer</footer>
    </div>
  );
}

Layout.defaultProps = {
  title: "HuhuGerman",
  description: "Alemán para curiosos",
};
