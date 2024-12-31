import { useEffect, useState } from 'react';
import './App.css'
import { Observer } from './tasks/1';
import { ComponentApp } from './tasks/4';


function App() {
  const MAX_ITEMS = 105;
  const [items, setItems] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreItems = async () => {
    if (!hasMore) return;
    setIsLoading(true);

    // Loading imitation
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Adding new items into state
    setItems((prevItems) => {
      const newItems = Array.from(
        { length: 10 },
        (_, i) => `Item ${prevItems.length + i + 1}`
      );

      const updatedItems = [...prevItems, ...newItems];

      // Check limit
      if (updatedItems.length >= MAX_ITEMS) {
        setHasMore(false); // Set up "Nothing to load"
        return updatedItems.slice(0, MAX_ITEMS); // limit showed items
      }

      return updatedItems;
    });

    setIsLoading(false);
  };

  useEffect(() => {
    fetchMoreItems();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>TypeScript with React</h1>
      <h2>Menu select</h2>
      <ComponentApp />

      <h2>Lazy loading content</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {isLoading && <p>LOADING...</p>}
      {!hasMore && <p>That's it!</p>}


      <Observer onContentEndVisible={fetchMoreItems}>
        <div style={{ height: '50px', backgroundColor: 'lightgray' }}>
          End of the content
        </div>
      </Observer>
    </div>
  );
}

export default App
