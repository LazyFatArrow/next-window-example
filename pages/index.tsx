import Link from 'next/link';

export default function Home() {
  return (
    <>
      Home page
      <br />
      <Link href="/dark">Go to dark page!</Link>
    </>
  )
}
