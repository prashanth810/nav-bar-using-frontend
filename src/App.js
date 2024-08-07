import Forms from './Component/Forms';
import Navigation from './Component/Navigation';
import Stepars from './Component/Stepars';

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div><Forms /></div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div> Your order has ready to delivered.</div>,
  },
];

function App() {
  return (
    <div>
      <div>
        <h2> Checkout</h2>
      </div>
      <Stepars stepers={CHECKOUT_STEPS} />
      {/* <Navigation steper={CHECKOUT_STEPS} /> */}

    </div>
  );
}

export default App;
