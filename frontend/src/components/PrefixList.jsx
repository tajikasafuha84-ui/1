import React, { useEffect, useState } from 'react';
import { fetchPrefixes } from '../api';

export default function PrefixList() {
  const [prefixes, setPrefixes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(200);

  useEffect(() => {
    load();
  }, [limit]);

  async function load() {
    setLoading(true);
    try {
      const rows = await fetchPrefixes({ limit, offset: 0 });
      setPrefixes(rows);
    } catch (e) {
      alert('加载失败: ' + e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>号段列表</h2>
      <div style={{ marginBottom: 12 }}>
        <label>每页条数: </label>
        <input type="number" value={limit} onChange={e => setLimit(Number(e.target.value))} />
        <button onClick={load} disabled={loading}>刷新</button>
      </div>

      {loading ? <div>加载中...</div> : (
        <table className="table">
          <thead>
            <tr>
              <th>号段</th>
              <th>省</th>
              <th>市</th>
              <th>运营商</th>
              <th>备注</th>
            </tr>
          </thead>
          <tbody>
            {prefixes.map((p) => (
              <tr key={p.prefix}>
                <td>{p.prefix}</td>
                <td>{p.province}</td>
                <td>{p.city}</td>
                <td>{p.carrier}</td>
                <td>{p.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}