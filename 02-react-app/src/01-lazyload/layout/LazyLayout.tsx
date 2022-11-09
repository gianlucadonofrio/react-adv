import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { ShoppingPage } from '../../02-component-patterns/pages/ShoppingPage';
import { LazyPage2, LazyPage3 } from '../pages';

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout</h1>
      <ul>
        <li>
          <NavLink
            to="lazy1"
            style={{
              color: 'white',
            }}
          >
            Shopping
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{
              color: 'white',
            }}
            to="lazy2"
          >
            Lazy2
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{
              color: 'white',
            }}
            to="lazy3"
          >
            Lazy3
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<ShoppingPage />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
