import React, { useState } from 'react';
import { downloadOfflineJson } from '../api';

export default function ExportJson() {
  const [status, setStatus] = useState('');

  async function handleDownload() {
    setStatus('请求中...');
    try {
      const pkg = await downloadOfflineJson();
      const blob = new Blob([JSON.stringify(pkg, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `prefixes-offline-${pkg.version || 'v'}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setStatus('已下载');
    } catch (e) {
      setStatus('导出失败: ' + e.message);
    }
  }

  return (
    <div>
      <h2>导出离线包 (JSON)</h2>
      <p>下载后可将 JSON 打包到移动端或供客户端同步使用。</p>
      <button onClick={handleDownload}>下载离线包</button>
      <div style={{ marginTop: 12 }}>{status}</div>
    </div>
  );
}