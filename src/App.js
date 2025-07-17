export default function App() {
  // index.js (iframe 내부 진입점)
  const query = new URLSearchParams(window.location.search);
  const color = query.get("color"); // red
  const userId = query.get("userId"); // 123

  return (
    <div>
      <h1>Hello from CDN!</h1>
      <p>This is a paragraph</p>
      <p>color: {color}</p>
      <p>userId: {userId}</p>
    </div>
  );
}
