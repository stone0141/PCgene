const catalog = {
  cpu: [
    { id: 'r5-9600x', name: 'AMD Ryzen 5 9600X', price: 43000 },
    { id: 'r7-9700x', name: 'AMD Ryzen 7 9700X', price: 58000 },
    { id: 'r7-9800x3d', name: 'AMD Ryzen 7 9800X3D', price: 92000 },
    { id: 'cu5-245k', name: 'Intel Core Ultra 5 245K', price: 52000 },
    { id: 'cu7-265k', name: 'Intel Core Ultra 7 265K', price: 64000 }
  ],
  gpu: [
    { id: 'rtx-4060', name: 'MSI GeForce RTX 4060 VENTUS 2X BLACK 8G OC', price: 52000 },
    { id: 'rtx-5070', name: 'ZOTAC GAMING GeForce RTX 5070 SOLID OC', price: 108000 },
    { id: 'rtx-5070-ti', name: 'MSI GeForce RTX 5070 Ti 16G VENTUS 3X OC', price: 148000 },
    { id: 'rx-9070', name: 'ASRock Radeon RX 9070 Steel Legend 16GB', price: 118000 },
    { id: 'rx-9070-xt', name: 'SAPPHIRE PULSE Radeon RX 9070 XT 16GB', price: 138000 }
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
    { id: 'cx650', name: 'Corsair CX650 80+ Bronze', price: 9000 },
    { id: 'rm650e', name: 'Corsair RM650e 80+ Gold', price: 15000 },
    { id: 'rm750e', name: 'Corsair RM750e 80+ Gold', price: 17000 },
    { id: 'focus-gx-850', name: 'Seasonic FOCUS GX-850 80+ Gold', price: 22000 }
  ],
  case: [
    { id: 'cc560-v2', name: 'DeepCool CC560 V2', price: 8000 },
    { id: 'h5-flow-rgb', name: 'NZXT H5 Flow RGB', price: 15000 },
    { id: 'lancool-216', name: 'Lian Li Lancool 216', price: 16000 },
    { id: 'fractal-north', name: 'Fractal Design North', price: 24000 }
  ]
};

const presets = [
  {
    id: 'gaming-mainstream',
    title: 'ゲーム向け王道',
    description: 'フルHD〜WQHDを狙いやすいバランス型。',
    picks: {
      cpu: 'r7-9700x', gpu: 'rtx-5070', memory: 'ddr5-16x2-6000', storage: 'sn850x-2tb', psu: 'rm750e', case: 'lancool-216'
    }
  },
  {
    id: 'editing-starter',
    title: '動画編集スターター',
    description: '書き出しや素材整理を快適にしたい人向け。',
    picks: {
      cpu: 'cu7-265k', gpu: 'rtx-5070', memory: 'ddr5-32x2-6000', storage: '990pro-2tb', psu: 'rm750e', case: 'h5-flow-rgb'
    }
  },
  {
    id: 'daily-lite',
    title: '普段使いしっかり型',
    description: '普段使い＋軽い作業を長く快適に。',
    picks: {
      cpu: 'cu5-245k', gpu: 'rtx-4060', memory: 'ddr5-16x2-5600', storage: '990evo-1tb', psu: 'rm650e', case: 'cc560-v2'
    }
  }
];

function formatYen(value) {
  return `約${Number(value).toLocaleString()}円`;
}

function makeAmazonUrl(keyword) {
  return `https://www.amazon.co.jp/s?k=${encodeURIComponent(keyword)}`;
}
function makeRakutenUrl(keyword) {
  return `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(keyword)}/`;
}

function findPart(category, id) {
  return catalog[category].find((item) => item.id === id);
}

function populateSelect(category, selectId) {
  const select = document.getElementById(selectId);
  select.innerHTML = catalog[category].map((item) => `<option value="${item.id}">${item.name} / ${formatYen(item.price)}</option>`).join('');
}

function getCurrentBuild() {
  return {
    CPU: findPart('cpu', document.getElementById('cpu-select').value),
    GPU: findPart('gpu', document.getElementById('gpu-select').value),
    Memory: findPart('memory', document.getElementById('memory-select').value),
    Storage: findPart('storage', document.getElementById('storage-select').value),
    PSU: findPart('psu', document.getElementById('psu-select').value),
    Case: findPart('case', document.getElementById('case-select').value)
  };
}

function totalPrice(parts) {
  return Object.values(parts).reduce((sum, part) => sum + part.price, 0);
}

function renderPresets() {
  const grid = document.getElementById('preset-grid');
  grid.innerHTML = presets.map((preset) => `
    <article class="preset-card">
      <h3>${preset.title}</h3>
      <p>${preset.description}</p>
      <button type="button" class="preset-button" data-preset="${preset.id}">このたたき台を使う</button>
    </article>
  `).join('');

  grid.querySelectorAll('[data-preset]').forEach((button) => {
    button.addEventListener('click', () => {
      const preset = presets.find((item) => item.id === button.dataset.preset);
      if (!preset) return;
      document.getElementById('cpu-select').value = preset.picks.cpu;
      document.getElementById('gpu-select').value = preset.picks.gpu;
      document.getElementById('memory-select').value = preset.picks.memory;
      document.getElementById('storage-select').value = preset.picks.storage;
      document.getElementById('psu-select').value = preset.picks.psu;
      document.getElementById('case-select').value = preset.picks.case;
      renderEstimate();
      document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function partLinks(label, part) {
  return `
    <div class="store-links">
      <a href="${makeAmazonUrl(part.name + ' ' + label)}" target="_blank" rel="noopener noreferrer">Amazonで見る</a>
      <a href="${makeRakutenUrl(part.name + ' ' + label)}" target="_blank" rel="noopener noreferrer">楽天で見る</a>
    </div>
  `;
}

function renderEstimate() {
  const result = document.getElementById('result');
  const parts = getCurrentBuild();
  const total = totalPrice(parts);
  const partsHtml = Object.entries(parts).map(([label, part]) => `
    <div class="part">
      <div class="label">${label}</div>
      <div>
        <div class="name">${part.name}</div>
        <div class="price">目安価格: ${formatYen(part.price)}</div>
        ${partLinks(label, part)}
      </div>
    </div>
  `).join('');

  result.innerHTML = `
    <h2>現在の見積もり</h2>
    <div class="summary">
      <span class="badge highlight">構成合計目安: ${formatYen(total)}</span>
      <span class="badge">最新寄りパーツベース</span>
      <span class="badge">ケース込み</span>
    </div>
    <p class="lead">自分で選んだパーツ構成の概算金額です。気になるパーツだけ商品ページを開いて比較できます。</p>
    <div class="estimate-box">
      <strong>ざっくり総額</strong>
      <p>${formatYen(total)} 前後</p>
      <span>※ 価格は相場ベースの目安。セールや在庫で変動します。</span>
    </div>
    <div class="parts">${partsHtml}</div>
    <div class="adbox">
      <strong>見積もりの見方</strong>
      <p class="muted">まずは GPU・CPU・メモリ・SSD の4つを優先して見れば十分。ケースは見た目とサイズ、電源は余裕を持たせると失敗しにくい。</p>
    </div>
  `;
}

populateSelect('cpu', 'cpu-select');
populateSelect('gpu', 'gpu-select');
populateSelect('memory', 'memory-select');
populateSelect('storage', 'storage-select');
populateSelect('psu', 'psu-select');
populateSelect('case', 'case-select');
renderPresets();

document.getElementById('pc-form').addEventListener('submit', (event) => {
  event.preventDefault();
  renderEstimate();
});

renderEstimate();
