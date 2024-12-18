```javascript
// pages/about.js
import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('./my-component'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
  error: () => <p>Error loading component</p>,
});

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <MyComponent />
    </div>
  );
}
```
```javascript
// pages/my-component.js
export default function MyComponent() {
  return (
    <div>
      <h2>This is my dynamic component</h2>
    </div>
  );
}
```