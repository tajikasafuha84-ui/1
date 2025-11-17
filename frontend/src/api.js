// 简单封装后端 API 调用：可在需要时调整 host / baseUrl
const baseUrl = window.__BACKEND_URL__ || '';

export async function fetchPrefixes({ limit = 100, offset = 0 } = {}) {
  const url = `${baseUrl}/admin/prefixes?limit=${limit}&offset=${offset}`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(await resp.text());
  return resp.json();
}

export async function uploadCsv(file) {
  const fd = new FormData();
  fd.append('file', file);
  const resp = await fetch(`${baseUrl}/admin/import`, {
    method: 'POST',
    body: fd
  });
  if (!resp.ok) throw new Error(await resp.text());
  return resp.json();
}

export async function downloadOfflineJson() {
  const resp = await fetch(`${baseUrl}/sync/download`);
  if (!resp.ok) throw new Error(await resp.text());
  return resp.json();
}