import Image from 'next/image';
import styles from './Banner.module.css';

export default function Banner() {
  return (
    <header className={styles.banner}>
      <div className={styles.imageWrapper}>
        <Image
          src="/pubgCapa.avif"
          alt="Banner"
          fill
          priority
          style={{ objectFit: 'cover' }} // ou 'contain', dependendo do seu objetivo
        />
      </div>
    </header>
  );
}
