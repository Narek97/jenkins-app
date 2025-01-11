import Link from 'next/link';

import Index from '@/app/_components';

export default function Page() {
  return (
    <div>
      <Index />
      <Link href="/login">Login</Link>
    </div>
  );
}
