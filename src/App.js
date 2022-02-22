import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import menu from './data';
import Categories from './categories.component';
import Menu from './menu.component';
const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItems}/>
      </section>
    </main>
  );
};

export default App;
