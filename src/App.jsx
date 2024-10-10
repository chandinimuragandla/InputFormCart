
import './App.css';


import CartState from './CartState';
import CartToggle from './CartToogle';
import ControlledForm from './ControlledForm';
import FormWithYup from './FormWithYup';
import MaterialCart from './MaterialCart';





function App() {
  return (
    <div className="App">
    <h1>hi</h1>
    <ControlledForm />
    <FormWithYup />
    <CartState />
    <CartToggle />
    <MaterialCart />
    
    </div>
  );
}

export default App;
