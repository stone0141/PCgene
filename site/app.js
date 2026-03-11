const builds = {
  gaming: {
    100000: {
      title: '10万円前後の入門ゲーミング構成',
      description: 'フルHD中心で人気ゲームを快適に遊びやすい、初心者向けの現実的な入門構成です。',
      parts: {
        CPU: { name: 'AMD Ryzen 5 7500F', price: 24000 },
        GPU: { name: 'ASRock Radeon RX 7600 XT Challenger 16GB OC', price: 52000 },
        Memory: { name: 'Crucial Pro DDR5-5600 16GB×2', price: 13000 },
        Storage: { name: 'WD_BLACK SN770 1TB NVMe SSD', price: 11000 },
        PSU: { name: 'Corsair CX650 80+ Bronze', price: 9000 },
        Case: { name: 'DeepCool CC560 V2', price: 8000 }
      }
    },
    150000: {
      title: '15万円前後の王道ゲーミング構成',
      description: 'コスパを崩さず、フルHD高設定やWQHD入門も狙える王道構成です。',
      parts: {
        CPU: { name: 'AMD Ryzen 5 7600', price: 32000 },
        GPU: { name: 'MSI GeForce RTX 4060 VENTUS 2X BLACK 8G OC', price: 52000 },
        Memory: { name: 'Crucial Pro DDR5-5600 16GB×2', price: 13000 },
        Storage: { name: 'Samsung 990 EVO Plus 1TB', price: 14000 },
        PSU: { name: 'Corsair RM650e 80+ Gold', price: 15000 },
        Case: { name: 'NZXT H5 Flow RGB', price: 15000 }
      }
    },
    200000: {
      title: '20万円前後の高バランス構成',
      description: '性能・将来性・扱いやすさのバランスが良く、初心者でも満足度が高いラインです。',
      parts: {
        CPU: { name: 'AMD Ryzen 7 7700', price: 45000 },
        GPU: { name: 'ZOTAC GAMING GeForce RTX 4070 SUPER Twin Edge', price: 98000 },
        Memory: { name: 'G.Skill Flare X5 DDR5-6000 16GB×2', price: 16000 },
        Storage: { name: 'WD_BLACK SN850X 2TB', price: 22000 },
        PSU: { name: 'Corsair RM750e 80+ Gold', price: 17000 },
        Case: { name: 'Lian Li Lancool 216', price: 16000 }
      }
    },
    300000: {
      title: '30万円前後の上位ゲーミング構成',
      description: '4Kや重いゲームも狙える、妥協の少ない上位クラス構成です。',
      parts: {
        CPU: { name: 'AMD Ryzen 7 7800X3D', price: 62000 },
        GPU: { name: 'MSI GeForce RTX 4070 Ti SUPER 16G VENTUS 3X', price: 138000 },
        Memory: { name: 'Corsair VENGEANCE DDR5-6000 16GB×2', price: 17000 },
        Storage: { name: 'Samsung 990 PRO 2TB', price: 28000 },
        PSU: { name: 'Seasonic FOCUS GX-850 80+ Gold', price: 22000 },
        Case: { name: 'Fractal Design North', price: 24000 }
      }
    }
  },
  editing: {
    100000: {
      title: '軽め編集向け構成',
      description: 'フルHD編集や学習用途向けの控えめな編集構成。',
      parts: {
        CPU: { name: 'Intel Core i5-14400F', price: 29000 },
        GPU: { name: 'MSI GeForce RTX 4060 VENTUS 2X BLACK 8G OC', price: 52000 },
        Memory: { name: 'Crucial Pro DDR5-5600 8GB×2', price: 9000 },
        Storage: { name: 'WD Blue SN580 1TB', price: 9000 },
        PSU: { name: 'Corsair CX650', price: 9000 },
        Case: { name: 'ZALMAN T3 PLUS', price: 6000 }
      }
    },
    150000: {
      title: '動画編集の標準構成',
      description: 'PremiereやDaVinciで扱いやすい、初心者向け編集構成。',
      parts: {
        CPU: { name: 'Intel Core i5-14500', price: 38000 },
        GPU: { name: 'MSI GeForce RTX 4060 VENTUS 2X BLACK 8G OC', price: 52000 },
        Memory: { name: 'Crucial Pro DDR5-5600 16GB×2', price: 13000 },
        Storage: { name: 'Samsung 990 EVO Plus 1TB', price: 14000 },
        PSU: { name: 'Corsair RM650e 80+ Gold', price: 15000 },
        Case: { name: 'Fractal Design Pop Air', price: 14000 }
      }
    },
    200000: {
      title: '編集快適構成',
      description: '4K素材も扱いやすく、長く使いやすい編集向け。',
      parts: {
        CPU: { name: 'Intel Core Ultra 7 265K', price: 64000 },
        GPU: { name: 'ZOTAC GAMING GeForce RTX 4070 SUPER Twin Edge', price: 98000 },
        Memory: { name: 'Corsair VENGEANCE DDR5-6000 16GB×2', price: 17000 },
        Storage: { name: 'WD_BLACK SN850X 2TB', price: 22000 },
        PSU: { name: 'Corsair RM750e 80+ Gold', price: 17000 },
        Case: { name: 'NZXT H7 Flow', price: 19000 }
      }
    },
    300000: {
      title: '本格クリエイター構成',
      description: '重い書き出しや同時作業でも粘れる上位構成。',
      parts: {
        CPU: { name: 'Intel Core Ultra 7 265K', price: 64000 },
        GPU: { name: 'MSI GeForce RTX 4070 Ti SUPER 16G VENTUS 3X', price: 138000 },
        Memory: { name: 'Corsair VENGEANCE DDR5-6000 32GB×2', price: 33000 },
        Storage: { name: 'Samsung 990 PRO 2TB', price: 28000 },
        PSU: { name: 'Seasonic FOCUS GX-850 80+ Gold', price: 22000 },
        Case: { name: 'Fractal Design North XL', price: 29000 }
      }
    }
  },
  streaming: {
    100000: {
      title: '入門配信構成',
      description: '軽い配信やゲーム実況の入り口用。',
      parts: {
        CPU: { name: 'AMD Ryzen 5 7500F', price: 24000 },
        GPU: { name: 'MSI GeForce RTX 4060 VENTUS 2X BLACK 8G OC', price: 52000 },
        Memory: { name: 'Crucial Pro DDR5-5600 8GB×2', price: 9000 },
        Storage: { name: 'WD Blue SN580 1TB', price: 9000 },
        PSU: { name: 'Corsair CX650', price: 9000 },
        Case: { name: 'DeepCool CC560 V2', price: 8000 }
      }
    },
    150000: {
      title: '初心者向け配信構成',
      description: 'ゲームしながら配信しやすいバランス型。',
      parts: {
        CPU: { name: 'AMD Ryzen 7 7700', price: 45000 },
        GPU: { name: 'MSI GeForce RTX 4060 VENTUS 2X BLACK 8G OC', price: 52000 },
        Memory: { name: 'Crucial Pro DDR5-5600 16GB×2', price: 13000 },
        Storage: { name: 'Samsung 990 EVO Plus 1TB', price: 14000 },
        PSU: { name: 'Corsair RM650e 80+ Gold', price: 15000 },
        Case: { name: 'NZXT H5 Flow RGB', price: 15000 }
      }
    },
    200000: {
      title: '安定配信構成',
      description: '同時配信や録画を考えても安心感がある構成。',
      parts: {
        CPU: { name: 'AMD Ryzen 7 9700X', price: 58000 },
        GPU: { name: 'ZOTAC GAMING GeForce RTX 4070 SUPER Twin Edge', price: 98000 },
        Memory: { name: 'G.Skill Flare X5 DDR5-6000 16GB×2', price: 16000 },
        Storage: { name: 'WD_BLACK SN850X 2TB', price: 22000 },
        PSU: { name: 'Corsair RM750e 80+ Gold', price: 17000 },
        Case: { name: 'Lian Li Lancool 216', price: 16000 }
      }
    },
    300000: {
      title: '本格配信構成',
      description: '配信・録画・ゲームを高いレベルで両立。',
      parts: {
        CPU: { name: 'AMD Ryzen 9 9900X', price: 76000 },
        GPU: { name: 'MSI GeForce RTX 4070 Ti SUPER 16G VENTUS 3X', price: 138000 },
        Memory: { name: 'Corsair VENGEANCE DDR5-6000 32GB×2', price: 33000 },
        Storage: { name: 'Samsung 990 PRO 2TB', price: 28000 },
        PSU: { name: 'Seasonic FOCUS GX-850 80+ Gold', price: 22000 },
        Case: { name: 'Fractal Design North XL', price: 29000 }
      }
    }
  },
  ai: {
    100000: {
      title: '軽量開発向け構成',
      description: '学習・開発・普段使いを無理なくこなす最小ライン。',
      parts: {
        CPU: { name: 'AMD Ryzen 5 7500F', price: 24000 },
        GPU: { name: 'MSI GeForce RTX 4060 VENTUS 2X BLACK 8G OC', price: 52000 },
        Memory: { name: 'Crucial Pro DDR5-5600 16GB×2', price: 13000 },
        Storage: { name: 'WD Blue SN580 1TB', price: 9000 },
        PSU: { name: 'Corsair CX650', price: 9000 },
        Case: { name: 'DeepCool CC560 V2', price: 8000 }
      }
    },
    150000: {
      title: 'AI学習入門構成',
      description: 'ローカルLLMや画像生成を試しやすい現実的な構成。',
      parts: {
        CPU: { name: 'AMD Ryzen 5 9600X', price: 43000 },
        GPU: { name: 'MSI GeForce RTX 4060 Ti VENTUS 2X BLACK 16G OC', price: 76000 },
        Memory: { name: 'Crucial Pro DDR5-5600 16GB×2', price: 13000 },
        Storage: { name: 'Samsung 990 EVO Plus 1TB', price: 14000 },
        PSU: { name: 'Corsair RM750e 80+ Gold', price: 17000 },
        Case: { name: 'NZXT H5 Flow RGB', price: 15000 }
      }
    },
    200000: {
      title: '開発・生成AI快適構成',
      description: 'VRAMと全体性能のバランスを重視。',
      parts: {
        CPU: { name: 'AMD Ryzen 7 9700X', price: 58000 },
        GPU: { name: 'ZOTAC GAMING GeForce RTX 4070 SUPER Twin Edge', price: 98000 },
        Memory: { name: 'Corsair VENGEANCE DDR5-6000 32GB×2', price: 33000 },
        Storage: { name: 'WD_BLACK SN850X 2TB', price: 22000 },
        PSU: { name: 'Corsair RM750e 80+ Gold', price: 17000 },
        Case: { name: 'Lian Li Lancool 216', price: 16000 }
      }
    },
    300000: {
      title: 'ローカルAI強化構成',
      description: '開発・学習・生成をしっかり回したい人向け。',
      parts: {
        CPU: { name: 'AMD Ryzen 9 9900X', price: 76000 },
        GPU: { name: 'MSI GeForce RTX 4080 SUPER 16G VENTUS 3X OC', price: 178000 },
        Memory: { name: 'Corsair VENGEANCE DDR5-6000 32GB×2', price: 33000 },
        Storage: { name: 'Samsung 990 PRO 2TB', price: 28000 },
        PSU: { name: 'Seasonic FOCUS GX-850 80+ Gold', price: 22000 },
        Case: { name: 'Fractal Design North XL', price: 29000 }
      }
    }
  },
  daily: {
    100000: {
      title: '普段使い快適構成',
      description: 'ネット、Office、軽作業で長く困りにくい構成。',
      parts: {
        CPU: { name: 'Intel Core i5-14400', price: 33000 },
        GPU: { name: 'Intel UHD Graphics（内蔵GPU）', price: 0 },
        Memory: { name: 'Crucial Pro DDR5-5600 8GB×2', price: 9000 },
        Storage: { name: 'WD Blue SN580 1TB', price: 9000 },
        PSU: { name: 'Corsair CX550', price: 8000 },
        Case: { name: 'Thermaltake Versa H17', price: 6000 }
      }
    },
    150000: {
      title: '余裕のある普段使い構成',
      description: '軽い編集や複数作業にも対応しやすい。',
      parts: {
        CPU: { name: 'Intel Core Ultra 5 245K', price: 52000 },
        GPU: { name: 'MSI GeForce RTX 4060 VENTUS 2X BLACK 8G OC', price: 52000 },
        Memory: { name: 'Crucial Pro DDR5-5600 8GB×2', price: 9000 },
        Storage: { name: 'Samsung 990 EVO Plus 1TB', price: 14000 },
        PSU: { name: 'Corsair RM650e 80+ Gold', price: 15000 },
        Case: { name: 'Fractal Design Pop Silent', price: 15000 }
      }
    },
    200000: {
      title: '万能ホームPC構成',
      description: '長く使いたい人向けの万能型。',
      parts: {
        CPU: { name: 'Intel Core Ultra 7 265K', price: 64000 },
        GPU: { name: 'MSI GeForce RTX 4060 VENTUS 2X BLACK 8G OC', price: 52000 },
        Memory: { name: 'Crucial Pro DDR5-5600 16GB×2', price: 13000 },
        Storage: { name: 'WD_BLACK SN850X 2TB', price: 22000 },
        PSU: { name: 'Corsair RM650e 80+ Gold', price: 15000 },
        Case: { name: 'Fractal Design Pop Air', price: 14000 }
      }
    },
    300000: {
      title: '高級万能構成',
      description: '仕事も趣味も一台で済ませたい方向け。',
      parts: {
        CPU: { name: 'AMD Ryzen 7 9700X', price: 58000 },
        GPU: { name: 'ZOTAC GAMING GeForce RTX 4070 SUPER Twin Edge', price: 98000 },
        Memory: { name: 'Crucial Pro DDR5-5600 16GB×2', price: 13000 },
        Storage: { name: 'Samsung 990 PRO 2TB', price: 28000 },
        PSU: { name: 'Corsair RM750e 80+ Gold', price: 17000 },
        Case: { name: 'Fractal Design North', price: 24000 }
      }
    }
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

function formatYen(value) {
  return `約${Number(value).toLocaleString()}円`;
}

function getTotalPrice(parts) {
  return Object.values(parts).reduce((sum, part) => sum + (part.price || 0), 0);
}

function makeAmazonUrl(keyword) {
  return `https://www.amazon.co.jp/s?k=${encodeURIComponent(keyword)}`;
}

function makeRakutenUrl(keyword) {
  return `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(keyword)}/`;
}

function makePartLink(label, part) {
  const keyword = `${part.name} ${label}`;
  return `
    <div class="store-links">
      <a href="${makeAmazonUrl(keyword)}" target="_blank" rel="noopener noreferrer">Amazonで見る</a>
      <a href="${makeRakutenUrl(keyword)}" target="_blank" rel="noopener noreferrer">楽天で見る</a>
    </div>
  `;
}

function makeWholeBuildLinks(build) {
  const allKeywords = Object.values(build.parts).map((part) => part.name).join(' ');
  return `
    <div class="whole-links">
      <a href="${makeAmazonUrl(allKeywords)}" target="_blank" rel="noopener noreferrer">構成まとめをAmazonで探す</a>
      <a href="${makeRakutenUrl(allKeywords)}" target="_blank" rel="noopener noreferrer">構成まとめを楽天で探す</a>
    </div>
  `;
}

function renderResult(build, budget, usage, priority) {
  const result = document.getElementById('result');
  const totalPrice = getTotalPrice(build.parts);
  const partsHtml = Object.entries(build.parts).map(([label, part]) => `
    <div class="part">
      <div class="label">${label}</div>
      <div>
        <div class="name">${part.name}</div>
        <div class="price">目安価格: ${formatYen(part.price)}</div>
        ${makePartLink(label, part)}
      </div>
    </div>
  `).join('');

  result.innerHTML = `
    <h2>${build.title}</h2>
    <div class="summary">
      <span class="badge">予算: ${formatYen(budget)}</span>
      <span class="badge">用途: ${usageLabel[usage]}</span>
      <span class="badge">重視: ${priorityLabel[priority]}</span>
      <span class="badge highlight">構成合計目安: ${formatYen(totalPrice)}</span>
    </div>
    <p class="lead">${build.description}</p>
    <p class="muted">${reasonText(usage, priority)}</p>
    <div class="estimate-box">
      <strong>この構成のざっくり総額</strong>
      <p>${formatYen(totalPrice)} 前後</p>
      <span>※ 相場ベースの概算です。販売時期やセールで変動します。</span>
    </div>
    <div class="parts">${partsHtml}</div>
    <div class="cta">
      <strong>構成をまとめて探す</strong>
      <p class="muted">気になったら、まずは構成全体の価格感をAmazon / 楽天で確認できます。</p>
      ${makeWholeBuildLinks(build)}
    </div>
    <div class="adbox">
      <strong>初心者向けの見方</strong>
      <p class="muted">最初は CPU・GPU・メモリ・SSD・電源・ケース の6項目だけ見れば十分です。ケースも具体名を表示しているので、見た目やサイズ感も調べやすくしています。</p>
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
