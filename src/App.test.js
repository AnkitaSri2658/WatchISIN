import { render, screen } from '@testing-library/react';
import App from './App';


test('displays App', () => {
   //Arrange
  render(<App />);
  //Act


  //Assert
  const outputElement = screen.getByText("Add ISIN to your WatchList",{exact:false})
  expect(outputElement).toBeInTheDocument
});


test('displays Form', () => {
  //Arrange
 render(<App />);
 //Act

 
 //Assert
 const input = screen.getAllByRole('input');
 expect(input).toHaveLength(2);
});

