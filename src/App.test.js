import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/i was changed/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/i was changed/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render (<App/>, div);
//   ReactDOM.unmountComponentAtNode(div);
// })
