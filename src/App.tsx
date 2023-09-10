import { FC } from 'react';
import './style.css';
import GST_Calculate from './component/GST_Calculate';
import { Provider } from 'react-redux';
import { store } from './redux/store';
export const App: FC<{ name: string }> = ({ name }) => {
  // the Provider component is used to wrap your entire React application and make the Redux store accessible to all components in the application.
  return (
    <>
      <Provider store={store}>
        <GST_Calculate />
      </Provider>
    </>
  );
};
