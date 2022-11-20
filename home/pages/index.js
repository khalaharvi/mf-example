import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css'

const Nav = dynamic(() => import('remote/nav'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Nav />
    </div>
  )
}
