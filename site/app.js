const STORAGE_KEY = 'pcgene-build-v1';
const DEFAULT_BUILD = { cpu: 'r7-5700x', gpu: 'rtx-4060', motherboard: 'b550', cooler: 'ak400', memory: 'ddr4-16x2', storage: 'sn770-1tb', psu: 'rm650e', case: 'cc560-v2', os: 'win11-home' };
const catalog = {
  cpu: [
    { id: 'r5-5600', name: 'AMD Ryzen 5 5600', price: 18000, brand: 'amd', socket: 'am4', tdp: 65, rank: 1, tier: 'entry' },
    { id: 'r7-5700x', name: 'AMD Ryzen 7 5700X', price: 26000, brand: 'amd', socket: 'am4', tdp: 65, rank: 2, tier: 'mid' },
    { id: 'r7-9700x', name: 'AMD Ryzen 7 9700X', price: 58000, brand: 'amd', socket: 'am5', tdp: 65, rank: 4, tier: 'high' },
    { id: 'cu7-265k', name: 'Intel Core Ultra 7 265K', price: 64000, brand: 'intel', socket: 'lga1851', tdp: 125, rank: 4, tier: 'high' }
  ],
  gpu: [
    { id: 'rtx-3060', name: 'GeForce RTX 3060 12GB', price: 42000, brand: 'nvidia', watt: 170, rank: 1, tier: 'entry' },
    { id: 'rtx-4060', name: 'GeForce RTX 4060 8GB', price: 52000, brand: 'nvidia', watt: 115, rank: 2, tier: 'mid' },
    { id: 'rtx-5070', name: 'GeForce RTX 5070 12GB', price: 108000, brand: 'nvidia', watt: 250, rank: 4, tier: 'high' },
    { id: 'rx-9070', name: 'Radeon RX 9070 16GB', price: 118000, brand: 'radeon', watt: 240, rank: 4, tier: 'high' }
  ],
  motherboard: [
    { id: 'b550', name: 'MSI B550M PRO-VDH WIFI', price: 16000, socket: 'am4' },
    { id: 'b650', name: 'MSI PRO B650-S WIFI', price: 26000, socket: 'am5' },
    { id: 'b860', name: 'ASUS TUF GAMING B860-PLUS WIFI', price: 32000, socket: 'lga1851' }
  ],
  cooler: [
    { id: 'ak400', name: 'DeepCool AK400', price: 5000, supports: ['am4', 'am5', 'lga1851'] },
    { id: 'pa120', name: 'Thermalright Peerless Assassin 120 SE', price: 7000, supports: ['am4', 'am5', 'lga1851'] },
    { id: 'ls720', name: 'DeepCool LS720 SE 360mm', price: 15000, supports: ['am4', 'am5', 'lga1851'] }
  ],
  memory: [
    { id: 'ddr4-16x2', name: 'DDR4-3200 16GB×2', price: 9000 },
    { id: 'ddr5-16x2-5600', name: 'DDR5-5600 16GB×2', price: 13000 },
    { id: 'ddr5-32x2-6000', name: 'DDR5-6000 32GB×2', price: 33000 }
  ],
  storage: [
    { id: 'sn770-1tb', name: 'WD_BLACK SN770 1TB NVMe SSD', price: 11000 },
    { id: '990evo-1tb', name: 'Samsung 990 EVO Plus 1TB', price: 14000 },
    { id: 'sn850x-2tb', name: 'WD_BLACK SN850X 2TB', price: 22000 }
  ],
  psu: [
    { id: 'cx650', name: 'Corsair CX650 80+ Bronze', price: 9000, watt: 650 },
    { id: 'rm650e', name: 'Corsair RM650e 80+ Gold', price: 15000, watt: 650 },
    { id: 'rm750e', name: 'Corsair RM750e 80+ Gold', price: 17000, watt: 750 }
  ],
  case: [
    { id: 'cc560-v2', name: 'DeepCool CC560 V2', price: 8000, image: 'https://placehold.co/640x480/0f172a/e2e8f0?text=DeepCool+CC560+V2' },
    { id: 'h5-flow-rgb', name: 'NZXT H5 Flow RGB', price: 15000, image: 'https://placehold.co/640x480/0f172a/e2e8f0?text=NZXT+H5+Flow+RGB' },
    { id: 'fractal-north', name: 'Fractal Design North', price: 24000, image: 'https://placehold.co/640x480/0f172a/e2e8f0?text=Fractal+North' }
  ],
  os: [
    { id: 'win11-home', name: 'Windows 11 Home', price: 19000 },
    { id: 'no-os', name: 'OSなし / Linux前提', price: 0 }
  ]
};
const usedPcOffers = [
  {
    id: 'used-popular',
    title: '人気No.1 中古ゲーミングPC',
    subtitle: 'RTX 3060 / Ryzen 7クラス / すぐ遊べる完成品',
    price: 89800,
    badges: ['清掃・動作確認済み', '30日保証', 'OSセットアップ済み'],
    cta: '中古PCショップを見る',
    url: 'https://example.com/used-pc-popular'
  },
  {
    id: 'used-cospa',
    title: 'コスパ重視 中古PC',
    subtitle: '新品より大きく安く、フルHDゲーム向け',
    price: 79800,
    badges: ['面倒な初期設定不要', '保証付き', '届いてすぐ使える'],
    cta: 'コスパ重視モデルを見る',
    url: 'https://example.com/used-pc-cospa'
  }
];
const helpTexts = {
  cpu: 'CPUはPCの頭脳。中古誘導も考えるなら、必要十分なラインを選ぶのがコツ。',
  gpu: 'GPUはゲーム性能の中心。新品は高いので、中古完成品との比較材料にもなる。',
  motherboard: 'マザーボードはCPU規格一致が必須。ここがズレると組めない。',
  cooler: '最近はクーラー別売が多い。見落とすと予算漏れになる。',
  memory: '迷ったら32GB寄りが安心。中古完成品なら最初から積まれている場合も多い。',
  psu: '電源は容量と品質が重要。初心者は完成品中古の安心感も比較ポイント。'
};
const presets = [
  { id: 'apex-144fps', title: 'Apex 144fps 構成', description: '新品でしっかり組むならこの辺。', picks: { cpu: 'r7-5700x', gpu: 'rtx-4060', motherboard: 'b550', cooler: 'ak400', memory: 'ddr4-16x2', storage: 'sn770-1tb', psu: 'rm650e', case: 'cc560-v2', os: 'win11-home' } },
  { id: 'used-popular-preset', title: '人気No.1 中古PC構成', description: '安く・早く・すぐ遊びたい人向け。', picks: { cpu: 'r7-5700x', gpu: 'rtx-3060', motherboard: 'b550', cooler: 'ak400', memory: 'ddr4-16x2', storage: 'sn770-1tb', psu: 'cx650', case: 'cc560-v2', os: 'win11-home' }, usedOfferId: 'used-popular' },
  { id: 'budget-100k', title: '予算10万円台構成', description: '価格を抑えつつ普段使いも安心。', picks: { cpu: 'r5-5600', gpu: 'rtx-3060', motherboard: 'b550', cooler: 'ak400', memory: 'ddr4-16x2', storage: 'sn770-1tb', psu: 'cx650', case: 'cc560-v2', os: 'no-os' } }
];
function formatYen(value) { return `約${Number(value).toLocaleString()}円`; }
function makeAmazonUrl(keyword) { return `https://www.amazon.co.jp/s?k=${encodeURIComponent(keyword)}`; }
function makeRakutenUrl(keyword) { return `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(keyword)}/`; }
function findPart(category, id) { return catalog[category].find((item) => item.id === id); }
function brandAllowed(item, filter) { return filter === 'all' ? true : item.brand === filter; }
function sortItems(items, order) { if (order === 'price-asc') return [...items].sort((a,b)=>a.price-b.price); if (order === 'price-desc') return [...items].sort((a,b)=>b.price-a.price); return items; }
function showToast(message) { const toast = document.getElementById('toast'); toast.textContent = message; toast.hidden = false; clearTimeout(showToast.timer); showToast.timer = setTimeout(()=>toast.hidden=true, 2500); }
function populateSelect(category, selectId, preserveValue = true) {
  const select = document.getElementById(selectId);
  const previous = preserveValue ? select.value : '';
  const brandFilter = document.getElementById('brand-filter')?.value || 'all';
  const sortOrder = document.getElementById('sort-order')?.value || 'default';
  let items = catalog[category];
  if (category === 'cpu' || category === 'gpu') items = items.filter((i) => brandAllowed(i, brandFilter));
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
function estimatedUsage(cpu, gpu) { return cpu.tdp + gpu.watt + 120; }
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
function partLinks(label, part) { return `<div class="store-links"><a href="${makeAmazonUrl(part.name + ' ' + label)}" target="_blank" rel="noopener noreferrer">Amazonで見る</a><a href="${makeRakutenUrl(part.name + ' ' + label)}" target="_blank" rel="noopener noreferrer">楽天で見る</a></div>`; }
function applyState(state) { Object.entries(state).forEach(([key, value]) => { const select = document.getElementById(`${key}-select`); if (select && select.querySelector(`option[value="${value}"]`)) select.value = value; }); }
function applyPreset(id) { const preset = presets.find((item) => item.id === id); if (!preset) return; applyState(preset.picks); renderEstimate(); document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
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
function currentState(parts) { return { cpu: parts.CPU.id, gpu: parts.GPU.id, motherboard: parts.Motherboard.id, cooler: parts.Cooler.id, memory: parts.Memory.id, storage: parts.Storage.id, psu: parts.PSU.id, case: parts.Case.id, os: parts.OS.id }; }
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState(getSelections()))); }
function loadFromUrl() {
  const params = new URLSearchParams(location.search);
  const state = {};
  ['cpu','gpu','motherboard','cooler','memory','storage','psu','case','os'].forEach((key) => { const value = params.get(key); if (value) state[key] = value; });
  if (Object.keys(state).length) { applyState(state); showToast('共有された構成を読み込みました！'); return true; }
  return false;
}
function setupResume() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  const button = document.getElementById('resume-button');
  button.hidden = false;
  button.addEventListener('click', () => { applyState(JSON.parse(saved)); renderEstimate(); button.hidden = true; showToast('前回の構成を復元しました。'); });
}
function resetBuild() { applyState(DEFAULT_BUILD); history.replaceState({}, '', location.pathname); localStorage.removeItem(STORAGE_KEY); renderEstimate(); showToast('構成を初期状態に戻しました。'); }
function renderUsedPcCTA(total, parts) {
  const offer = total >= 120000 ? usedPcOffers[0] : usedPcOffers[1];
  return `
    <div class="used-cta card-like">
      <strong>予算オーバーですか？ 組み立てる自信がありませんか？</strong>
      <p class="muted">同等用途の中古完成品なら <span class="accent-price">${formatYen(offer.price)}</span> から。新品で悩むより、すぐ遊べて安心な選択肢もあります。</p>
      <div class="used-badges">${offer.badges.map((b) => `<span>${b}</span>`).join('')}</div>
      <a class="used-button" href="${offer.url}" target="_blank" rel="noopener noreferrer">${offer.cta}</a>
    </div>
  `;
}
function renderComparison(total) {
  return `
    <div class="comparison-box">
      <strong>新品 vs 中古 の目安</strong>
      <div class="comparison-grid">
        <div>
          <h4>新品構成</h4>
          <p>${formatYen(total)} 前後</p>
          <span>好きなパーツを選べるが、費用と相性確認の手間がかかる。</span>
        </div>
        <div>
          <h4>中古完成品</h4>
          <p>${formatYen(usedPcOffers[1].price)}〜${formatYen(usedPcOffers[0].price)}</p>
          <span>安く始めやすく、OS設定済み・保証付きで手間が少ない。</span>
        </div>
      </div>
    </div>
  `;
}
function renderEstimate() {
  const parts = getSelections();
  const total = totalPrice(parts);
  const usage = estimatedUsage(parts.CPU, parts.GPU);
  const recWatt = recommendedWattage(parts.CPU, parts.GPU);
  const warnings = compatibilityWarnings(parts);
  const bottleneck = bottleneckWarning(parts);
  const shareUrl = updateShareUrl(parts);
  saveState();
  document.getElementById('floating-total').innerHTML = `<span>現在の合計: ${formatYen(total)}</span><button type="button" id="copy-share-inline">URLをコピー</button>`;
  const partsHtml = Object.entries(parts).map(([label, part]) => `<div class="part"><div class="label">${label}</div><div><div class="name">${part.name}</div><div class="price">目安価格: ${formatYen(part.price)}</div>${partLinks(label, part)}</div></div>`).join('');
  const warningsHtml = warnings.length ? `<div class="warning-box"><strong>互換性 / 注意点</strong><ul>${warnings.map((w) => `<li>${w}</li>`).join('')}</ul></div>` : `<div class="ok-box"><strong>互換性チェック</strong><p>大きな不一致は見つかっていません。</p></div>`;
  const bottleneckHtml = bottleneck ? `<div class="warning-box subtle"><strong>簡易ボトルネック判定</strong><p>${bottleneck}</p></div>` : '';
  const powerMeter = `<div class="power-box"><strong>消費電力メーター</strong><div class="power-stats"><span>推定消費電力: ${usage}W</span><span>推奨電源: ${recWatt}W以上</span><span>選択電源: ${parts.PSU.watt}W</span></div><div class="meter"><div class="meter-fill" style="width:${Math.min(100, Math.round((usage / parts.PSU.watt) * 100))}%"></div></div><p class="muted">選択電源に対して、どのくらい余裕があるかの目安です。</p></div>`;
  const casePreview = `<div class="case-preview"><strong>ケースのイメージ</strong><img src="${parts.Case.image}" alt="${parts.Case.name}" /></div>`;
  document.getElementById('result').innerHTML = `
    <h2>現在の見積もり</h2>
    <div class="summary">
      <span class="badge highlight">構成合計目安: ${formatYen(total)}</span>
      <button type="button" class="ghost-button" id="copy-share-main">この構成のURLをコピー</button>
      <span class="badge">OS込み</span>
    </div>
    <p class="lead">自分で選んだパーツ構成の概算金額です。足りないパーツも含めて、ちゃんと1台分の見積もりになるようにしています。</p>
    ${renderUsedPcCTA(total, parts)}
    ${warningsHtml}
    ${bottleneckHtml}
    ${powerMeter}
    <div class="estimate-box"><strong>ざっくり総額</strong><p>${formatYen(total)} 前後</p><span>※ 価格は相場ベースの目安。セールや在庫で変動します。</span></div>
    <div class="share-box"><strong>この構成を共有する</strong><p class="muted">URLをコピーして「この構成どう？」と相談できます。</p><div class="share-actions"><input type="text" readonly value="${shareUrl}" id="share-url" /><button type="button" id="copy-share">URLをコピー</button></div></div>
    ${casePreview}
    ${renderComparison(total)}
    <div class="parts">${partsHtml}</div>
    <div class="adbox"><strong>見積もりの見方</strong><p class="muted">まずは CPU・GPU・マザーボード・クーラー・電源の整合性を見ると失敗しにくい。Windows代も含めて総額を見るのが初心者には重要です。</p></div>
  `;
  ['copy-share','copy-share-main','copy-share-inline'].forEach((id) => {
    const el = document.getElementById(id); if (!el) return;
    el.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(shareUrl); showToast('共有URLをコピーしました。'); }
      catch { const input = document.getElementById('share-url'); if (input) { input.select(); document.execCommand('copy'); } }
    });
  });
}
function bindHelpButtons() { document.querySelectorAll('[data-help]').forEach((button) => button.addEventListener('click', () => { document.getElementById('help-text').textContent = helpTexts[button.dataset.help] || '説明は準備中です。'; })); }
function refreshSelects() { ['cpu','gpu','motherboard','cooler','memory','storage','psu','case','os'].forEach((key) => populateSelect(key, `${key}-select`)); }
document.getElementById('brand-filter').addEventListener('change', () => { refreshSelects(); renderEstimate(); });
document.getElementById('sort-order').addEventListener('change', () => { refreshSelects(); renderEstimate(); });
document.getElementById('reset-button').addEventListener('click', resetBuild);
refreshSelects();
renderPresets();
const loadedFromUrl = loadFromUrl();
setupResume();
bindHelpButtons();
document.getElementById('pc-form').addEventListener('submit', (event) => { event.preventDefault(); renderEstimate(); });
if (!loadedFromUrl) applyState(DEFAULT_BUILD);
renderEstimate();
