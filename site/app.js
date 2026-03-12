const catalog = {
  cpu: [
    { id: 'r5-9600x', name: 'AMD Ryzen 5 9600X', price: 43000, brand: 'amd', socket: 'am5', tdp: 65 },
    { id: 'r7-9700x', name: 'AMD Ryzen 7 9700X', price: 58000, brand: 'amd', socket: 'am5', tdp: 65 },
    { id: 'r7-9800x3d', name: 'AMD Ryzen 7 9800X3D', price: 92000, brand: 'amd', socket: 'am5', tdp: 120 },
    { id: 'cu5-245k', name: 'Intel Core Ultra 5 245K', price: 52000, brand: 'intel', socket: 'lga1851', tdp: 125 },
    { id: 'cu7-265k', name: 'Intel Core Ultra 7 265K', price: 64000, brand: 'intel', socket: 'lga1851', tdp: 125 }
  ],
  gpu: [
    { id: 'rtx-4060', name: 'MSI GeForce RTX 4060 VENTUS 2X BLACK 8G OC', price: 52000, watt: 115 },
    { id: 'rtx-5070', name: 'ZOTAC GAMING GeForce RTX 5070 SOLID OC', price: 108000, watt: 250 },
    { id: 'rtx-5070-ti', name: 'MSI GeForce RTX 5070 Ti 16G VENTUS 3X OC', price: 148000, watt: 300 },
    { id: 'rx-9070', name: 'ASRock Radeon RX 9070 Steel Legend 16GB', price: 118000, watt: 240 },
    { id: 'rx-9070-xt', name: 'SAPPHIRE PULSE Radeon RX 9070 XT 16GB', price: 138000, watt: 304 }
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
    { id: 'cc560-v2', name: 'DeepCool CC560 V2', price: 8000 },
    { id: 'h5-flow-rgb', name: 'NZXT H5 Flow RGB', price: 15000 },
    { id: 'lancool-216', name: 'Lian Li Lancool 216', price: 16000 },
    { id: 'fractal-north', name: 'Fractal Design North', price: 24000 }
  ],
  os: [
    { id: 'win11-home', name: 'Windows 11 Home', price: 19000 },
    { id: 'win11-pro', name: 'Windows 11 Pro', price: 28000 },
    { id: 'no-os', name: 'OSなし / Linux前提', price: 0 }
  ]
};

const helpTexts = {
  cpu: 'CPUはPCの頭脳。ゲームならGPU優先、編集や配信はCPUも強めだと快適。',
  gpu: 'GPUは映像やゲーム性能を左右する最重要パーツ。重いゲームほど優先度が高い。',
  motherboard: 'マザーボードはCPUとの規格一致が最重要。AMD用とIntel用は基本的に別物。',
  cooler: 'CPUクーラーは発熱を抑える。最近のCPUは付属しないことも多いので要注意。',
  memory: 'メモリは同時作業の快適さに効く。迷ったら32GBが無難。',
  psu: '電源は容量に余裕を持たせると安心。安すぎる電源は避けたい。'
};

const presets = [
  {
    id: 'apex-144fps',
    title: 'Apex 144fps 構成',
    description: 'フルHD高fps寄りの王道ゲーミング。',
    picks: { cpu: 'r7-9700x', gpu: 'rtx-5070', motherboard: 'b650', cooler: 'pa120', memory: 'ddr5-16x2-6000', storage: 'sn850x-2tb', psu: 'rm750e', case: 'lancool-216', os: 'win11-home' }
  },
  {
    id: 'yt-edit',
    title: 'YouTube 編集構成',
    description: '編集・書き出しをバランス良くこなす。',
    picks: { cpu: 'cu7-265k', gpu: 'rtx-5070', motherboard: 'b860', cooler: 'ls720', memory: 'ddr5-32x2-6000', storage: '990pro-2tb', psu: 'rm750e', case: 'h5-flow-rgb', os: 'win11-home' }
  },
  {
    id: 'budget-100k',
    title: '予算10万円台構成',
    description: '価格を抑えつつ普段使いも安心。',
    picks: { cpu: 'r5-9600x', gpu: 'rtx-4060', motherboard: 'b650', cooler: 'ak400', memory: 'ddr5-16x2-5600', storage: 'sn770-1tb', psu: 'cx650', case: 'cc560-v2', os: 'no-os' }
  }
];

function formatYen(value) { return `約${Number(value).toLocaleString()}円`; }
function makeAmazonUrl(keyword) { return `https://www.amazon.co.jp/s?k=${encodeURIComponent(keyword)}`; }
function makeRakutenUrl(keyword) { return `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(keyword)}/`; }
function findPart(category, id) { return catalog[category].find((item) => item.id === id); }

function populateSelect(category, selectId) {
  const select = document.getElementById(selectId);
  select.innerHTML = catalog[category].map((item) => `<option value="${item.id}">${item.name} / ${formatYen(item.price)}</option>`).join('');
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
  if (parts.CPU.socket !== parts.Motherboard.socket) {
    warnings.push(`CPUとマザーボードの規格が不一致です（${parts.CPU.socket} / ${parts.Motherboard.socket}）。`);
  }
  if (!parts.Cooler.supports.includes(parts.CPU.socket)) {
    warnings.push('CPUクーラーがCPUソケットに対応していません。');
  }
  const rec = recommendedWattage(parts.CPU, parts.GPU);
  if (parts.PSU.watt < rec) {
    warnings.push(`電源容量が少なめです。推奨は ${rec}W 以上です。`);
  }
  return warnings;
}

function partLinks(label, part) {
  return `<div class="store-links"><a href="${makeAmazonUrl(part.name + ' ' + label)}" target="_blank" rel="noopener noreferrer">Amazonで見る</a><a href="${makeRakutenUrl(part.name + ' ' + label)}" target="_blank" rel="noopener noreferrer">楽天で見る</a></div>`;
}

function applyPreset(id) {
  const preset = presets.find((item) => item.id === id);
  if (!preset) return;
  for (const [key, value] of Object.entries(preset.picks)) {
    document.getElementById(`${key}-select`).value = value;
  }
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
  params.set('cpu', parts.CPU.id);
  params.set('gpu', parts.GPU.id);
  params.set('motherboard', parts.Motherboard.id);
  params.set('cooler', parts.Cooler.id);
  params.set('memory', parts.Memory.id);
  params.set('storage', parts.Storage.id);
  params.set('psu', parts.PSU.id);
  params.set('case', parts.Case.id);
  params.set('os', parts.OS.id);
  const url = `${location.origin}${location.pathname}?${params.toString()}`;
  history.replaceState({}, '', url);
  return url;
}

function loadFromUrl() {
  const params = new URLSearchParams(location.search);
  ['cpu','gpu','motherboard','cooler','memory','storage','psu','case','os'].forEach((key) => {
    const value = params.get(key);
    if (value && document.getElementById(`${key}-select`).querySelector(`option[value="${value}"]`)) {
      document.getElementById(`${key}-select`).value = value;
    }
  });
}

function renderEstimate() {
  const parts = getSelections();
  const total = totalPrice(parts);
  const recWatt = recommendedWattage(parts.CPU, parts.GPU);
  const warnings = compatibilityWarnings(parts);
  const shareUrl = updateShareUrl(parts);
  document.getElementById('floating-total').textContent = `現在の合計: ${formatYen(total)}`;

  const partsHtml = Object.entries(parts).map(([label, part]) => `<div class="part"><div class="label">${label}</div><div><div class="name">${part.name}</div><div class="price">目安価格: ${formatYen(part.price)}</div>${partLinks(label, part)}</div></div>`).join('');
  const warningsHtml = warnings.length
    ? `<div class="warning-box"><strong>互換性 / 注意点</strong><ul>${warnings.map((w) => `<li>${w}</li>`).join('')}</ul></div>`
    : `<div class="ok-box"><strong>互換性チェック</strong><p>大きな不一致は見つかっていません。</p></div>`;

  document.getElementById('result').innerHTML = `
    <h2>現在の見積もり</h2>
    <div class="summary">
      <span class="badge highlight">構成合計目安: ${formatYen(total)}</span>
      <span class="badge">推奨電源: ${recWatt}W以上</span>
      <span class="badge">OS込み</span>
    </div>
    <p class="lead">自分で選んだパーツ構成の概算金額です。足りないパーツも含めて、ちゃんと1台分の見積もりになるようにしています。</p>
    ${warningsHtml}
    <div class="estimate-box"><strong>ざっくり総額</strong><p>${formatYen(total)} 前後</p><span>※ 価格は相場ベースの目安。セールや在庫で変動します。</span></div>
    <div class="share-box"><strong>この構成を共有する</strong><p class="muted">URLをコピーして「この構成どう？」と相談できます。</p><div class="share-actions"><input type="text" readonly value="${shareUrl}" id="share-url" /><button type="button" id="copy-share">URLをコピー</button></div></div>
    <div class="parts">${partsHtml}</div>
    <div class="adbox"><strong>見積もりの見方</strong><p class="muted">まずは CPU・GPU・マザーボード・クーラー・電源の整合性を見ると失敗しにくい。Windows代も含めて総額を見るのが初心者には重要です。</p></div>
  `;

  document.getElementById('copy-share').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      document.getElementById('copy-share').textContent = 'コピー済み';
      setTimeout(() => { document.getElementById('copy-share').textContent = 'URLをコピー'; }, 1500);
    } catch {
      const input = document.getElementById('share-url');
      input.select();
      document.execCommand('copy');
    }
  });
}

Object.keys(helpTexts).forEach((key) => {
  document.addEventListener('click', (event) => {
    const button = event.target.closest(`[data-help="${key}"]`);
    if (!button) return;
    document.getElementById('help-text').textContent = helpTexts[key];
  });
});

['cpu','gpu','motherboard','cooler','memory','storage','psu','case','os'].forEach((key) => populateSelect(key, `${key}-select`));
renderPresets();
loadFromUrl();
document.getElementById('pc-form').addEventListener('submit', (event) => { event.preventDefault(); renderEstimate(); });
renderEstimate();
