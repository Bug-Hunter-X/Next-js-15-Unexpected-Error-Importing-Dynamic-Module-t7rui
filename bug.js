```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error in Next.js 15
  // if the import is not handled correctly.
  // import dynamic from 'next/dynamic';
  // const Component = dynamic(() => import('./my-component'), { ssr: false });

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```