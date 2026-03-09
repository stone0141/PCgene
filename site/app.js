const builds = {
  gaming: {
    100000: {
      title: '10万円前後の入門ゲーミング構成',
      description: 'フルHD中心で人気ゲームを快適に遊びやすい、初心者向けの鉄板バランス構成です。',
      parts: {
        CPU: 'Ryzen 5 5600', GPU: 'Radeon RX 7600', Memory: '16GB DDR4', Storage: '1TB NVMe SSD', PSU: '650W 80+ Bronze', Case: 'エアフロー重視ミドルタワー'
      }
    },
    150000: {
      title: '15万円前後の王道ゲーミング構成',
      description: 'コスパを崩さず、1440pや高リフレッシュレートも視野に入る現実的な構成です。',
      parts: {
        CPU: 'Ryzen 5 7600', GPU: 'GeForce RTX 4060', Memory: '32GB DDR5', Storage: '1TB NVMe SSD', PSU: '650W 80+ Gold', Case: '冷却重視ミドルタワー'
      }
    },
    200000: {
      title: '20万円前後の高バランス構成',
      description: '性能・将来性・扱いやすさのバランスが良く、初心者でも満足度が高いラインです。',
      parts: {
        CPU: 'Ryzen 7 7700', GPU: 'GeForce RTX 4070', Memory: '32GB DDR5', Storage: '2TB NVMe SSD', PSU: '750W 80+ Gold', Case: '高冷却ミドルタワー'
      }
    },
    300000: {
      title: '30万円前後の上位ゲーミング構成',
      description: '4Kや重いゲームも狙える、妥協の少ない上位クラス構成です。',
      parts: {
        CPU: 'Ryzen 7 7800X3D', GPU: 'GeForce RTX 4070 Ti SUPER', Memory: '32GB DDR5', Storage: '2TB NVMe SSD', PSU: '850W 80+ Gold', Case: '静音・冷却両立ケース'
      }
    }
  },
  editing: {
    100000: { title: '軽め編集向け構成', description: 'フルHD編集や学習用途向けの控えめな編集構成。', parts: { CPU: 'Ryzen 5 5600', GPU: 'GeForce RTX 3060', Memory: '16GB DDR4', Storage: '1TB NVMe SSD', PSU: '650W Bronze', Case: '拡張しやすいケース' } },
    150000: { title: '動画編集の標準構成', description: 'PremiereやDaVinciで扱いやすい、初心者向け編集構成。', parts: { CPU: 'Core i5-14400F', GPU: 'GeForce RTX 4060', Memory: '32GB DDR4/DDR5', Storage: '1TB NVMe SSD + 2TB HDD', PSU: '650W Gold', Case: '静音寄りケース' } },
    200000: { title: '編集快適構成', description: '4K素材も扱いやすく、長く使いやすい編集向け。', parts: { CPU: 'Core i7-14700F', GPU: 'GeForce RTX 4070', Memory: '32GB DDR5', Storage: '2TB NVMe SSD', PSU: '750W Gold', Case: '冷却重視ケース' } },
    300000: { title: '本格クリエイター構成', description: '重い書き出しや同時作業でも粘れる上位構成。', parts: { CPU: 'Core i7-14700K', GPU: 'GeForce RTX 4070 Ti SUPER', Memory: '64GB DDR5', Storage: '2TB NVMe SSD + 4TB SSD', PSU: '850W Gold', Case: '大型高冷却ケース' } }
  },
  streaming: {
    100000: { title: '入門配信構成', description: '軽い配信やゲーム実況の入り口用。', parts: { CPU: 'Ryzen 5 5600', GPU: 'RTX 3060', Memory: '16GB', Storage: '1TB SSD', PSU: '650W', Case: 'エアフロー重視' } },
    150000: { title: '初心者向け配信構成', description: 'ゲームしながら配信しやすいバランス型。', parts: { CPU: 'Ryzen 7 5700X', GPU: 'RTX 4060', Memory: '32GB', Storage: '1TB SSD', PSU: '650W Gold', Case: '冷却重視' } },
    200000: { title: '安定配信構成', description: '同時配信や録画を考えても安心感がある構成。', parts: { CPU: 'Ryzen 7 7700', GPU: 'RTX 4070', Memory: '32GB DDR5', Storage: '2TB SSD', PSU: '750W Gold', Case: '静音冷却ケース' } },
    300000: { title: '本格配信構成', description: '配信・録画・ゲームを高いレベルで両立。', parts: { CPU: 'Ryzen 9 7900', GPU: 'RTX 4070 Ti SUPER', Memory: '64GB DDR5', Storage: '2TB SSD', PSU: '850W Gold', Case: '上位ケース' } }
  },
  ai: {
    100000: { title: '軽量開発向け構成', description: '学習・開発・普段使いを無理なくこなす最小ライン。', parts: { CPU: 'Ryzen 5 5600', GPU: 'RTX 3060 12GB', Memory: '32GB', Storage: '1TB SSD', PSU: '650W', Case: '拡張しやすいケース' } },
    150000: { title: 'AI学習入門構成', description: 'ローカルLLMや画像生成を試しやすい現実的な構成。', parts: { CPU: 'Ryzen 5 7600', GPU: 'RTX 4060 Ti 16GB', Memory: '32GB DDR5', Storage: '1TB SSD', PSU: '750W Gold', Case: '冷却重視' } },
    200000: { title: '開発・生成AI快適構成', description: 'VRAMと全体性能のバランスを重視。', parts: { CPU: 'Ryzen 7 7700', GPU: 'RTX 4070 SUPER', Memory: '64GB DDR5', Storage: '2TB SSD', PSU: '750W Gold', Case: '上位冷却ケース' } },
    300000: { title: 'ローカルAI強化構成', description: '開発・学習・生成をしっかり回したい人向け。', parts: { CPU: 'Ryzen 9 7900', GPU: 'RTX 4080 SUPER', Memory: '64GB DDR5', Storage: '2TB SSD', PSU: '850W Gold', Case: '高冷却ケース' } }
  },
  daily: {
    100000: { title: '普段使い快適構成', description: 'ネット、Office、軽作業で長く困りにくい構成。', parts: { CPU: 'Core i5-13400', GPU: '内蔵GPU', Memory: '16GB', Storage: '1TB SSD', PSU: '550W', Case: 'コンパクトケース' } },
    150000: { title: '余裕のある普段使い構成', description: '軽い編集や複数作業にも対応しやすい。', parts: { CPU: 'Core i5-14400', GPU: 'RTX 4060', Memory: '16GB', Storage: '1TB SSD', PSU: '650W', Case: '静音ケース' } },
    200000: { title: '万能ホームPC構成', description: '長く使いたい人向けの万能型。', parts: { CPU: 'Core i7-14700', GPU: 'RTX 4060', Memory: '32GB', Storage: '2TB SSD', PSU: '650W Gold', Case: '静音・拡張両立' } },
    300000: { title: '高級万能構成', description: '仕事も趣味も一台で済ませたい方向け。', parts: { CPU: 'Core i7-14700K', GPU: 'RTX 4070', Memory: '32GB DDR5', Storage: '2TB SSD', PSU: '750W Gold', Case: 'プレミアムケース' } }
  }
};

const usageLabel = {
  gaming: 'ゲーム', editing: '動画編集', streaming: '配信', ai: 'AI / 開発', daily: '普段使い'
};
const priorityLabel = {
  value: 'コスパ', performance: '性能', silent: '静音', future: '将来性'
};

function reasonText(usage, priority) {
  const base = {
    gaming: 'ゲーム用途ではGPU性能と全体のバランスが満足度に直結します。',
    editing: '動画編集ではCPU・メモリ・ストレージ速度のバランスが重要です。',
    streaming: '配信はゲーム性能だけでなく、同時処理の安定性も大事です。',
    ai: 'AI / 開発用途ではメモリ容量とGPUの余力が使いやすさに効きます。',
    daily: '普段使いではオーバースペックを避けつつ快適さを確保するのが大切です。'
  };
  const plus = {
    value: '今回はコスパ重視なので、性能に対して価格効率の良い構成を優先しました。',
    performance: '今回は性能重視なので、予算内で体感差が出やすい部分に強めに振っています。',
    silent: '今回は静音重視なので、発熱と騒音が極端に増えにくい方向でまとめています。',
    future: '今回は将来性重視なので、メモリや電源、プラットフォームの余裕を意識しています。'
  };
  return `${base[usage]} ${plus[priority]}`;
}

function renderResult(build, budget, usage, priority) {
  const result = document.getElementById('result');
  const partsHtml = Object.entries(build.parts).map(([label, name]) => `
    <div class="part">
      <div class="label">${label}</div>
      <div class="name">${name}</div>
    </div>
  `).join('');

  result.innerHTML = `
    <h2>${build.title}</h2>
    <div class="summary">
      <span class="badge">予算: 約${Number(budget).toLocaleString()}円</span>
      <span class="badge">用途: ${usageLabel[usage]}</span>
      <span class="badge">重視: ${priorityLabel[priority]}</span>
    </div>
    <p class="lead">${build.description}</p>
    <p class="muted">${reasonText(usage, priority)}</p>
    <div class="parts">${partsHtml}</div>
    <div class="cta">
      <strong>購入導線（今後実装）</strong>
      <p class="muted">このエリアに、価格比較・アフィリエイトリンク・購入先候補を表示予定。</p>
    </div>
    <div class="adbox">
      <strong>広告枠（今後実装）</strong>
      <p class="muted">初心者向けの比較記事や周辺機器紹介、広告ユニット配置を想定。</p>
    </div>
  `;
}

const form = document.getElementById('pc-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const budget = data.get('budget');
  const usage = data.get('usage');
  const priority = data.get('priority');
  const build = builds[usage]?.[budget];
  if (!build) return;
  renderResult(build, budget, usage, priority);
});

renderResult(builds.gaming[150000], 150000, 'gaming', 'value');
