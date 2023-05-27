import styles from './main.module.css';
import Services from '@/components/services';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.mainPageHeader}>
        <div className={styles.headerContent}>
          <h2>Welcome to Devanics</h2>
          <h1>World-class software solutions</h1>
          <p>
            Together we build inspiring software that achieves your business
            results.
          </p>

          <a
            href="#"
            className="headerButton headerButton-white headerButton-animate"
          >
            Book a Consultant - its free
          </a>
        </div>
      </header>

      <Services />
    </main>
  );
}
