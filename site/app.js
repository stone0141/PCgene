const STORAGE_KEY = 'pcgene-build-v1';
const catalog = {
  cpu: [
    { id: 'r5-9600x', name: 'AMD Ryzen 5 9600X', price: 43000, brand: 'amd', socket: 'am5', tdp: 65, rank: 2 },
    { id: 'r7-9700x', name: 'AMD Ryzen 7 9700X', price: 58000, brand: 'amd', socket: 'am5', tdp: 65, rank: 4 },
    { id: 'r7-9800x3d', name: 'AMD Ryzen 7 9800X3D', price: 92000, brand: 'amd', socket: 'am5', tdp: 120, rank: 5 },
    { id: 'cu5-245k', name: 'Intel Core Ultra 5 245K', price: 52000, brand: 'intel', socket: 'lga1851', tdp: 125, rank: 2 },
    { id: 'cu7-265k', name: 'Intel Core Ultra 7 265K', price: 64000, brand: 'intel', socket: 'lga1851', tdp: 125, rank: 4 }
  ],
  gpu: [
    { id: 'rtx-4060', name: 'MSI GeForce RTX 4060 VENTUS 2X BLACK 8G OC', price: 52000, brand: 'nvidia', watt: 115, rank: 1 },
    { id: 'rtx-5070', name: 'ZOTAC GAMING GeForce RTX 5070 SOLID OC', price: 108000, brand: 'nvidia', watt: 250, rank: 3 },
    { id: 'rtx-5070-ti', name: 'MSI GeForce RTX 5070 Ti 16G VENTUS 3X OC', price: 148000, brand: 'nvidia', watt: 300, rank: 4 },
    { id: 'rx-9070', name: 'ASRock Radeon RX 9070 Steel Legend 16GB', price: 118000, brand: 'radeon', watt: 240, rank: 3 },
    { id: 'rx-9070-xt', name: 'SAPPHIRE PULSE Radeon RX 9070 XT 16GB', price: 138000, brand: 'radeon', watt: 304, rank: 4 }
  ],
  motherboard: [
    { id: 'b650', name: 'MSI PRO B650-S WIFI', price: 26000, socket: 'am5' },
    { id: 'x870', name: 'ASUS TUF GAMING X870-PLUS WIFI', price: 42000, socket: 'am5' },
    { id: 'b860', name: 'ASUS TUF GAMING B860-PLUS WIFI', price: 32000, socket: 'lga1851' },
    { id: 'z890', name: 'MSI PRO Z890-A WIFI', price: 46000, socket: 'lga1851' }
  ],
  cooler: [
    { id: 'ak400', name: 'DeepCool AK400', price: 5000, supports: ['am5', 'lga1851'] },
    { id: 'pa120', name: 'Thermalright Peerless Assassin 120 SE', price: 7000, supports: ['am5', 'lga1851'] },
    { id: 'ls720', name: 'DeepCool LS720 SE 360mm', price: 15000, supports: ['am5', 'lga1851'] }
  ],
  memory: [
    { id: 'ddr5-16x2-5600', name: 'Crucial Pro DDR5-5600 16GB×2', price: 13000 },
    { id: 'ddr5-16x2-6000', name: 'Corsair VENGEANCE DDR5-6000 16GB×2', price: 17000 },
    { id: 'ddr5-32x2-6000', name: 'Corsair VENGEANCE DDR5-6000 32GB×2', price: 33000 }
  ],
  storage: [
    { id: 'sn770-1tb', name: 'WD_BLACK SN770 1TB NVMe SSD', price: 11000 },
    { id: '990evo-1tb', name: 'Samsung 990 EVO Plus 1TB', price: 14000 },
    { id: 'sn850x-2tb', name: 'WD_BLACK SN850X 2TB', price: 22000 },
    { id: '990pro-2tb', name: 'Samsung 990 PRO 2TB', price: 28000 }
  ],
  psu: [
    { id: 'cx650', name: 'Corsair CX650 80+ Bronze', price: 9000, watt: 650 },
    { id: 'rm650e', name: 'Corsair RM650e 80+ Gold', price: 15000, watt: 650 },
    { id: 'rm750e', name: 'Corsair RM750e 80+ Gold', price: 17000, watt: 750 },
    { id: 'focus-gx-850', name: 'Seasonic FOCUS GX-850 80+ Gold', price: 22000, watt: 850 }
  ],
  case: [
    { id: 'cc560-v2', name: 'DeepCool CC560 V2', price: 8000, image: 'https://placehold.co/640x480/0f172a/e2e8f0?text=DeepCool+CC560+V2' },
    { id: 'h5-flow-rgb', name: 'NZXT H5 Flow RGB', price: 15000, image: 'https://placehold.co/640x480/0f172a/e2e8f0?text=NZXT+H5+Flow+RGB' },
    { id: 'lancool-216', name: 'Lian Li Lancool 216', price: 16000, image: 'https://placehold.co/640x480/0f172a/e2e8f0?text=Lancool+216' },
    { id: 'fractal-north', name: 'Fractal Design North', price: 24000, image: 'https://placehold.co/640x480/0f172a/e2e8f0?text=Fractal+North' }
  ],
  os: [
    { id: 'win11-home', name: 'Windows 11 Home', price: 19000 },
    { id: 'win11-pro', name: 'Windows 11 Pro', price: 28000 },
    { id: 'no-os', name: 'OSなし / Linux前提', price: 0 }
  ]
};

const helpTexts = {
  cpu: 'CPUはPCの頭脳。ゲームはGPU優先でも、配信や編集ならCPUも強めが安心。',
  gpu: 'GPUはゲーム性能の中心。重いゲームを高画質で遊ぶなら最優先で予算を割く。',
  motherboard: 'マザーボードはCPUの規格一致が必須。AMD用とIntel用は基本的に互換性がない。',
  cooler: '最近のCPUはクーラー別売が多い。見落とすと予算も冷却も崩れる。',
  memory: '迷ったら32GBが無難。配信・編集・AIなら容量に余裕が欲しい。',
  psu: '電源は容量と品質が重要。ギリギリより少し余裕を持たせると安心。'
};

const presets = [
  { id: 'apex-144fps', title: 'Apex 144fps 構成', description: 'フルHD高fps寄りの王道ゲーミング。', picks: { cpu: 'r7-9700x', gpu: 'rtx-5070', motherboard: 'b650', cooler: 'pa120', memory: 'ddr5-16x2-6000', storage: 'sn850x-2tb', psu: 'rm750e', case: 'lancool-216', os: 'win11-home' } },
  { id: 'yt-edit', title: 'YouTube 編集構成', description: '編集・書き出しをバランス良くこなす。', picks: { cpu: 'cu7-265k', gpu: 'rtx-5070', motherboard: 'b860', cooler: 'ls720', memory: 'ddr5-32x2-6000', storage: '990pro-2tb', psu: 'rm750e', case: 'h5-flow-rgb', os: 'win11-home' } },
  { id: 'budget-100k', title: '予算10万円台構成', description: '価格を抑えつつ普段使いも安心。', picks: { cpu: 'r5-9600x', gpu: 'rtx-4060', motherboard: 'b650', cooler: 'ak400', memory: 'ddr5-16x2-5600', storage: 'sn770-1tb', psu: 'cx650', case: 'cc560-v2', os: 'no-os' } }
];

function formatYen(value) { return `約${Number(value).toLocaleString()}円`; }
function makeAmazonUrl(keyword) { return `https://www.amazon.co.jp/s?k=${encodeURIComponent(keyword)}`; }
function makeRakutenUrl(keyword) { return `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(keyword)}/`; }
function findPart(category, id) { return catalog[category].find((item) => item.id === id); }
function brandAllowed(item, filter) {
  if (filter === 'all') return true;
  return item.brand === filter;
}
function sortItems(items, order) {
  if (order === 'price-asc') return [...items].sort((a, b) => a.price - b.price);
  if (order === 'price-desc') return [...items].sort((a, b) => b.price - a.price);
  return items;
}
function populateSelect(category, selectId, preserveValue = true) {
  const select = document.getElementById(selectId);
  const previous = preserveValue ? select.value : '';
  const brandFilter = document.getElementById('brand-filter')?.value || 'all';
  const sortOrder = document.getElementById('sort-order')?.value || 'default';
  let items = catalog[category];
  if (category === 'cpu') items = items.filter((i) => brandAllowed(i, brandFilter));
  if (category === 'gpu') items = items.filter((i) => brandAllowed(i, brandFilter));
  items = sortItems(items, sortOrder);
  select.innerHTML = items.map((item) => `<option value="${item.id}">${item.name} / ${formatYen(item.price)}</option>`).join('');
  if (previous && items.some((i) => i.id === previous)) select.value = previous;
}
function getSelections() {
  return {
    CPU: findPart('cpu', document.getElementById('cpu-select').value),
    GPU: findPart('gpu', document.getElementById('gpu-select').value),
    Motherboard: findPart('motherboard', document.getElementById('motherboard-select').value),
    Cooler: findPart('cooler', document.getElementById('cooler-select').value),
    Memory: findPart('memory', document.getElementById('memory-select').value),
    Storage: findPart('storage', document.getElementById('storage-select').value),
    PSU: findPart('psu', document.getElementById('psu-select').value),
    Case: findPart('case', document.getElementById('case-select').value),
    OS: findPart('os', document.getElementById('os-select').value)
  };
}
function totalPrice(parts) { return Object.values(parts).reduce((sum, part) => sum + part.price, 0); }
function recommendedWattage(cpu, gpu) { return Math.max(650, Math.ceil((cpu.tdp + gpu.watt + 250) / 50) * 50); }
function compatibilityWarnings(parts) {
  const warnings = [];
  if (parts.CPU.socket !== parts.Motherboard.socket) warnings.push(`CPUとマザーボードの規格が不一致です（${parts.CPU.socket} / ${parts.Motherboard.socket}）。`);
  if (!parts.Cooler.supports.includes(parts.CPU.socket)) warnings.push('CPUクーラーがCPUソケットに対応していません。');
  const rec = recommendedWattage(parts.CPU, parts.GPU);
  if (parts.PSU.watt < rec) warnings.push(`電源容量が少なめです。推奨は ${rec}W 以上です。`);
  return warnings;
}
function bottleneckWarning(parts) {
  const cpuRank = parts.CPU.rank || 0;
  const gpuRank = parts.GPU.rank || 0;
  if (gpuRank - cpuRank >= 2) return 'GPUに対してCPUが少し弱めです。用途によってはボトルネックになる可能性があります。';
  if (cpuRank - gpuRank >= 3) return 'CPUに対してGPUが控えめです。ゲーム中心ならGPUを上げた方が満足度が高いかもしれません。';
  return null;
}
function partLinks(label, part) {
  return `<div class="store-links"><a href="${makeAmazonUrl(part.name + ' ' + label)}" target="_blank" rel="noopener noreferrer">Amazonで見る</a><a href="${makeRakutenUrl(part.name + ' ' + label)}" target="_blank" rel="noopener noreferrer">楽天で見る</a></div>`;
}
function applyPreset(id) {
  const preset = presets.find((item) => item.id === id);
  if (!preset) return;
  Object.entries(preset.picks).forEach(([key, value]) => { document.getElementById(`${key}-select`).value = value; });
  renderEstimate();
  document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function renderPresets() {
  const grid = document.getElementById('preset-grid');
  grid.innerHTML = presets.map((preset) => `<article class="preset-card"><h3>${preset.title}</h3><p>${preset.description}</p><button type="button" class="preset-button" data-preset="${preset.id}">このたたき台を使う</button></article>`).join('');
  grid.querySelectorAll('[data-preset]').forEach((button) => button.addEventListener('click', () => applyPreset(button.dataset.preset)));
}
function updateShareUrl(parts) {
  const params = new URLSearchParams();
  Object.entries({ cpu: parts.CPU.id, gpu: parts.GPU.id, motherboard: parts.Motherboard.id, cooler: parts.Cooler.id, memory: parts.Memory.id, storage: parts.Storage.id, psu: parts.PSU.id, case: parts.Case.id, os: parts.OS.id }).forEach(([k, v]) => params.set(k, v));
  const url = `${location.origin}${location.pathname}?${params.toString()}`;
  history.replaceState({}, '', url);
  return url;
}
function saveState() {
  const parts = getSelections();
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ cpu: parts.CPU.id, gpu: parts.GPU.id, motherboard: parts.Motherboard.id, cooler: parts.Cooler.id, memory: parts.Memory.id, storage: parts.Storage.id, psu: parts.PSU.id, case: parts.Case.id, os: parts.OS.id }));
}
function applySavedState(saved) {
  Object.entries(saved).forEach(([key, value]) => {
    const select = document.getElementById(`${key}-select`);
    if (select && select.querySelector(`option[value="${value}"]`)) select.value = value;
  });
}
function loadFromUrl() {
  const params = new URLSearchParams(location.search);
  const state = {};
  ['cpu','gpu','motherboard','cooler','memory','storage','psu','case','os'].forEach((key) => { const value = params.get(key); if (value) state[key] = value; });
  if (Object.keys(state).length) applySavedState(state);
}
function setupResume() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  const button = document.getElementById('resume-button');
  button.hidden = false;
  button.addEventListener('click', () => {
    applySavedState(JSON.parse(saved));
    renderEstimate();
    button.hidden = true;
  });
}
function renderEstimate() {
  const parts = getSelections();
  const total = totalPrice(parts);
  const recWatt = recommendedWattage(parts.CPU, parts.GPU);
  const warnings = compatibilityWarnings(parts);
  const bottleneck = bottleneckWarning(parts);
  const shareUrl = updateShareUrl(parts);
  saveState();
  document.getElementById('floating-total').textContent = `現在の合計: ${formatYen(total)}`;
  const partsHtml = Object.entries(parts).map(([label, part]) => `<div class="part"><div class="label">${label}</div><div><div class="name">${part.name}</div><div class="price">目安価格: ${formatYen(part.price)}</div>${partLinks(label, part)}</div></div>`).join('');
  const warningsHtml = warnings.length ? `<div class="warning-box"><strong>互換性 / 注意点</strong><ul>${warnings.map((w) => `<li>${w}</li>`).join('')}</ul></div>` : `<div class="ok-box"><strong>互換性チェック</strong><p>大きな不一致は見つかっていません。</p></div>`;
  const bottleneckHtml = bottleneck ? `<div class="warning-box subtle"><strong>簡易ボトルネック判定</strong><p>${bottleneck}</p></div>` : '';
  const casePreview = `<div class="case-preview"><strong>ケースのイメージ</strong><img src="${parts.Case.image}" alt="${parts.Case.name}" /></div>`;
  document.getElementById('result').innerHTML = `
    <h2>現在の見積もり</h2>
    <div class="summary">
      <span class="badge highlight">構成合計目安: ${formatYen(total)}</span>
      <span class="badge">推奨電源: ${recWatt}W以上</span>
      <span class="badge">OS込み</span>
    </div>
    <p class="lead">自分で選んだパーツ構成の概算金額です。足りないパーツも含めて、ちゃんと1台分の見積もりになるようにしています。</p>
    ${warningsHtml}
    ${bottleneckHtml}
    <div class="estimate-box"><strong>ざっくり総額</strong><p>${formatYen(total)} 前後</p><span>※ 価格は相場ベースの目安。セールや在庫で変動します。</span></div>
    <div class="share-box"><strong>この構成を共有する</strong><p class="muted">URLをコピーして「この構成どう？」と相談できます。</p><div class="share-actions"><input type="text" readonly value="${shareUrl}" id="share-url" /><button type="button" id="copy-share">URLをコピー</button></div></div>
    ${casePreview}
    <div class="parts">${partsHtml}</div>
    <div class="adbox"><strong>見積もりの見方</strong><p class="muted">まずは CPU・GPU・マザーボード・クーラー・電源の整合性を見ると失敗しにくい。Windows代も含めて総額を見るのが初心者には重要です。</p></div>
  `;
  document.getElementById('copy-share').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(shareUrl); document.getElementById('copy-share').textContent = 'コピー済み'; setTimeout(() => { document.getElementById('copy-share').textContent = 'URLをコピー'; }, 1500); }
    catch { const input = document.getElementById('share-url'); input.select(); document.execCommand('copy'); }
  });
}

function bindHelpButtons() {
  document.querySelectorAll('[data-help]').forEach((button) => {
    button.addEventListener('click', () => { document.getElementById('help-text').textContent = helpTexts[button.dataset.help] || '説明は準備中です。'; });
  });
}
function refreshSelects() {
  ['cpu','gpu','motherboard','cooler','memory','storage','psu','case','os'].forEach((key) => populateSelect(key, `${key}-select`));
}

document.getElementById('brand-filter').addEventListener('change', () => { refreshSelects(); renderEstimate(); });
document.getElementById('sort-order').addEventListener('change', () => { refreshSelects(); renderEstimate(); });
refreshSelects();
renderPresets();
loadFromUrl();
setupResume();
bindHelpButtons();
document.getElementById('pc-form').addEventListener('submit', (event) => { event.preventDefault(); renderEstimate(); });
renderEstimate();
