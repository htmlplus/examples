import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/sticky.js';

function App() {
  return (
    <div className="container">
      <header>Header</header>
      <main>
        <plus-faker api="lorem.paragraphs" arguments={[10, '\n\n']}></plus-faker>
      </main>
      <aside>
        <plus-sticky>A Sticky Sidebar</plus-sticky>
      </aside>
    </div>
  );
}
export default App;
