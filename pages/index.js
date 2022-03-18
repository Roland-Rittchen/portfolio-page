import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className="page">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl font-bold">Professional page</h1>
      <button
        className="p-2 ring-1 ring-gray-500"
        onClick={() => router.push('/passion')}
      >
        Go Passion page
      </button>
      <Image
        src="/images/title/profession_header.png"
        alt="Header pic profession"
        width="2500"
        height="1668"
      />
    </div>
  );
}