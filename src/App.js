import './App.css';
import Profile from './views/Profile/Profile';
import { SWRConfig } from 'swr'
import { fetcher } from './services/common'
import { localStorageProvider } from './providers/localStorageProvider'

function App() {
  return (
    <div className="App">
      <SWRConfig
        value={{
          fetcher,
          provider: localStorageProvider
        }}
      >
        <Profile />
      </SWRConfig>
    </div>
  );
}

export default App;
