import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Passion() {
  const router = useRouter();
  return (
    <div className="page">
      <h1 className="text-2xl font-bold">Sport page</h1>
      <button
        className="p-2 ring-1 ring-gray-500"
        onClick={() => router.push('/')}
      >
        Go to Profession
      </button>
      <Image
        src="/images/title/sport_header.png"
        alt="Header pic passion"
        width="2500"
        height="1668"
      />
    </div>
  );
}
