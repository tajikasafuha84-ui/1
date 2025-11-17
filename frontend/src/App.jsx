import React, { useState } from 'react';
import PrefixList from './components/PrefixList';
import ImportCsv from './components/ImportCsv';
import ExportJson from './components/ExportJson';

export default function App() {
  const [view, setView] = useState('list'); // list | import | export

  return (
    <div className="container">
      <header>
        <h1>Phone Prefix Admin</h1>
        <nav>
          <button onClick={() => setView('list')}>前缀列表</button>
          <button onClick={() => setView('import')}>导入 CSV</button>
          <button onClick={() => setView('export')}>导出 JSON</button>
        </nav>
      </header>

      <main>
        {view === 'list' && <PrefixList />}
        {view === 'import' && <ImportCsv />}
        {view === 'export' && <ExportJson />}
      </main>

      <footer>
        <small>后端 API: /admin/prefixes, /admin/import, /sync/download, /lookup, /filter</small>
      </footer>
    </div>
  );
}