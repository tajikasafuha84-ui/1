import React, { useState } from 'react';
import { uploadCsv } from '../api';

export default function ImportCsv() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  async function handleUpload() {
    if (!file) return alert('请选择 CSV 文件');
    setStatus('上传中...');
    try {
      const result = await uploadCsv(file);
      setStatus(`导入成功: ${JSON.stringify(result)}`);
    } catch (e) {
      setStatus('导入失败: ' + e.message);
    }
  }

  return (
    <div>
      <h2>导入 CSV</h2>
      <div>
        <input type="file" accept=".csv" onChange={e => setFile(e.target.files?.[0] || null)} />
        <button onClick={handleUpload}>上传并导入</button>
      </div>
      <div style={{ marginTop: 12 }}>
        <strong>说明：</strong>CSV 列名请使用: prefix,country,province,city,carrier,note
      </div>
      <div style={{ marginTop: 12 }}>{status}</div>
    </div>
  );
}