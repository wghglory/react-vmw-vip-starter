import logo from './logo.svg';
import './App.css';

import { l10n } from './i18n/i18n.utils';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p dangerouslySetInnerHTML={{ __html: l10n('EDIT', ['App.js']) }}></p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          {l10n('LEARN')}
        </a>
      </header>
    </div>
  );
}

export default App;
