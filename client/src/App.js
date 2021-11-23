import { useState } from 'react';
import AdressBar from './components/AddressBar';
import Browser from './components/Browser';

function App() {
  const [url, setUrl] = useState('example.com');

  return (
    <div className="App">
      <AdressBar onSubmit={address => setUrl(address)} />
      <Browser url={url} />
    </div>
  );
}



export default App;
