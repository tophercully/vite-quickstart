import Page from "./components/Page";

function App() {
  return (
    <Page>
      <div className="flex max-w-[80ch] flex-col gap-4">
        <h1 className="text-7xl">Vite Quickstart</h1>
        <h3 className="text-3xl">This quickstart web template includes:</h3>
        <ul className="w-fit list-inside list-disc text-base-700">
          <li>TypeScript</li>
          <li>Prettier</li>
          <li>ESLint</li>
          <li>React</li>
          <li>React-Router</li>
          <li>Tailwind</li>
          <li>Vercel</li>
          <li>Vercel Analytics</li>
          <li>"Overused Grotesk" typeface</li>
          <li>
            "npm run dev" will start Vite and run Tailwind's watch command
            concurrently
          </li>
        </ul>
      </div>
    </Page>
  );
}

export default App;
