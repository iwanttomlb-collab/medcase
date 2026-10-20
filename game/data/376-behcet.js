// Ch 376 Behçet Syndrome. Source notes: notes/376-behcet.md

RPG.registerCards('376', [
  {
    id: 'behcet-path',
    title: 'Behçet 致病機轉',
    points: [
      '病因不明；有家族傾向；innate 與 adaptive immunity 皆參與',
      '**HLA-B*51** 50-60%（一般人 ~20%）',
      '**Neutrophil hyperreactivity**（原發或 cytokine 誘導仍不清楚）',
      '病理：**leukocytoclastic venulitis**；可侵犯任何大小動靜脈（variable-vessel）-> 靜脈血栓、動脈瘤',
      '**血栓源於血管壁發炎** -> 治療以 immunosuppression 為主，而非抗凝',
      '**不像典型 autoimmune**：無 autoantibodies、Raynaud、serositis、thrombocytopenia，也不增加其他 AD',
      '**不像典型 autoinflammatory**：會隨時間減弱、無基因突變、盛行率比 FMF 高',
      'Pathergy：皮膚對創傷的非特異過度反應；可能有不同表現 cluster（acne + arthritis + enthesitis）'
    ],
    refs: ['Harrison’s Ch 376（Pathogenesis）']
  },
  {
    id: 'behcet-dx',
    title: 'Behçet：ISG criteria',
    points: [
      '**Recurrent oral ulcers（12 個月內 >= 3 次）** + 以下 2 項：',
      'Recurrent **genital ulcers**（最特異、會留疤）',
      'Skin：erythema nodosum、pseudofolliculitis、acneiform',
      'Eye：uveitis、retinal vasculitis',
      '**Pathergy**：20-gauge 針刺 24-48 h 後 papule/pustule',
      'HLA-B*51 50-60%，但一般人 20% -> **不用於診斷**',
      '無 autoantibodies、Raynaud、serositis、photosensitivity'
    ],
    note: '絲路地區、土耳其最高；男女相同但**年輕男性較嚴重**'
  },
  {
    id: 'behcet-organ',
    title: 'Behçet 器官侵犯',
    points: [
      '**Eye ~50%（男性 ~70%）**：bilateral **panuveitis**、**hypopyon**；前 2 年出現',
      'Arthritis ~50%：下肢 mono/oligo，無 erosion',
      '**Vascular 最多 40%**：superficial/deep vein thrombosis、Budd-Chiari、IVC、**pulmonary artery aneurysm（5 年死亡 20-25%）**、cerebral venous sinus thrombosis',
      'Superficial thrombophlebitis（男性）-> 找 DVT 與 PA aneurysm',
      'Neuro ~5%：parenchymal（brainstem、diencephalon）或 venous sinus thrombosis',
      'GI：**ileocecal** 深圓潰瘍、易穿孔，似 Crohn’s；perianal 少見'
    ]
  },
  {
    id: 'behcet-tx',
    title: 'Behçet 治療',
    table: {
      head: ['侵犯', '治療'],
      rows: [
        ['Oral ulcers（輕）', 'Topical GC'],
        ['Mucocutaneous（resistant）', 'Colchicine、apremilast、AZA、TNFi'],
        ['**Eye**', '**早期積極**：短期 GC + **AZA**；TNFi（infliximab、adalimumab）；cyclosporine'],
        ['GI', 'GC + AZA ± infliximab'],
        ['**Venous thrombosis**', '**Immunosuppression（AZA、嚴重 CYC），不常規抗凝**'],
        ['CNS', '**AZA + TNFi**']
      ]
    },
    note: '抗凝只在出血風險低且**無 pulmonary artery aneurysm** 時；2-3 年後嘗試減藥'
  }
]);

RPG.registerCase({
  id: 'beh-01',
  chapter: '376',
  title: '交換學生的紅眼睛',
  patient: '24 歲男性 · 土耳其交換學生',
  summary: '嘴巴破了又破，現在右眼又紅又痛、看東西霧霧的。',
  cards: ['behcet-path', 'behcet-dx', 'behcet-organ', 'behcet-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        'Emre 是從伊斯坦堡來的交換學生。「這兩天右眼很痛、怕光、看東西霧霧的。」',
        '你注意到他嘴唇內側有兩個潰瘍。'
      ],
      clue: ['24M；土耳其', '右眼痛、畏光、視力模糊', '口腔潰瘍'],
      choices: [{ label: '詳細問診', next: 'hx_hub' }]
    },
    hx_hub: {
      text: '你想知道更多。',
      choices: [
        { label: '問口腔潰瘍的頻率', next: 'hx_oral', once: true },
        { label: '問生殖器潰瘍', next: 'hx_genital', once: true },
        { label: '問皮膚、關節、腳', next: 'hx_skin', once: true },
        { label: '理學檢查', next: 'exam', pin: true }
      ]
    },
    hx_oral: {
      text: '「從高中就一直破，一年至少五、六次，每次十天左右，好了又破。」',
      clue: '**Recurrent oral ulcers**（> 3 次/年）',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_genital: {
      text: '他有點尷尬：「去年陰囊也破過一個比較大、比較深的傷口，好了之後留了一個疤。沒有不安全的性行為。」',
      clue: '**Scrotal ulcer，留疤**',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_skin: {
      text: '「背和腿上常長像青春痘的東西。打針或抽血的地方隔天會腫一個小膿包。」膝蓋偶爾腫。',
      clue: ['**Acneiform lesions**（含下肢）', '針扎處長膿包（疑 **pathergy**）', '偶發膝關節腫'],
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    exam: {
      text: '你開始檢查。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'workup',
        options: [
          { id: 'eye', group: '眼', label: '眼科會診：slit lamp + 眼底', key: true, reveal: true,
            result: '右眼前房 **hypopyon**；**vitreous cells**；雙眼 **retinal vasculitis**（左眼較輕）', clue: '**Bilateral panuveitis + hypopyon**',
            miss: '眼痛畏光視力模糊，一定要眼科 slit lamp 和眼底檢查。' },
          { id: 'oral', group: '口腔', label: '口腔', result: '兩個 5 mm 圓形潰瘍，紅色邊緣' },
          { id: 'genital', group: '皮膚', label: '生殖器', result: '陰囊舊疤' },
          { id: 'skin', group: '皮膚', label: '軀幹與下肢皮膚', result: '背部、大腿 papulopustular lesions' },
          { id: 'path', group: '皮膚', label: 'Pathergy test（20-gauge 針刺，48 h 判讀）', key: true, reveal: true,
            result: '48 小時後針刺處 **pustule**', clue: '**Pathergy (+)**',
            miss: 'Pathergy 是 ISG criteria 之一，也相當獨特。' },
          { id: 'joint', group: '關節', label: '關節', result: '左膝少量 effusion' },
          { id: 'vein', group: '血管', label: '下肢靜脈', result: '無 thrombophlebitis' },
          { id: 'neuro', group: '神經', label: '神經學檢查', result: '正常' }
        ]
      }
    },
    workup: {
      text: '要做哪些檢查？',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出',
        next: 'dx',
        options: [
          { id: 'hsv', group: '排除', label: 'Oral ulcer HSV PCR、syphilis serology', key: true, reveal: true,
            result: '陰性', clue: 'HSV、syphilis 陰性',
            miss: '口腔與生殖器潰瘍要排除 HSV 和梅毒。' },
          { id: 'hiv', group: '排除', label: 'HIV', result: '陰性' },
          { id: 'tb', group: '排除', label: 'IGRA、CXR', key: true, reveal: true,
            result: '陰性', clue: 'IGRA、CXR 陰性',
            miss: 'Uveitis 要排除 TB，而且之後可能用 TNFi，需要先篩。' },
          { id: 'hbv', group: '排除', label: 'HBV、HCV', result: '陰性' },
          { id: 'b51', group: '其他', label: 'HLA-B*51', result: '陽性',
            waste: 'HLA-B*51 一般人也有 ~20%，不用於診斷。' },
          { id: 'ana', group: '其他', label: 'ANA、ANCA', result: '陰性' },
          { id: 'tpmt', group: '其他', label: 'TPMT', result: '正常', clue: 'TPMT 正常（AZA 前）' },
          { id: 'crp', group: '其他', label: 'CRP、CBC', result: 'CRP 2.2；CBC 正常' }
        ]
      }
    },
    dx: {
      text: 'Recurrent oral ulcers + genital ulcer + skin lesions + eye lesions + pathergy：符合 ISG。年輕男性、posterior segment 侵犯。治療？',
      choices: [
        { label: '**早期積極**：短期 systemic GC + **AZA**，並加 **TNFi（infliximab 或 adalimumab）**；眼科密切追蹤', next: 'end_good' },
        { label: 'Topical steroid 眼藥水就好', next: 'tx_topical' },
        { label: 'Colchicine 單用', next: 'tx_colch' }
      ]
    },
    tx_topical: {
      text: '眼科醫師搖頭。',
      feedback: '他是 bilateral panuveitis + retinal vasculitis，而且是年輕男性（預後差因子）。眼部 Behçet 要早期積極：短期 GC + 長期 immunosuppressant（AZA 首選），常合併 TNFi。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    tx_colch: {
      text: '主治醫師搖頭。',
      feedback: 'Colchicine 可用於 mucocutaneous 表現，但對 posterior uveitis 不夠，會失明。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '三個月後 Emre 雙眼視力回到 0.9，hypopyon 消失。AZA + adalimumab 持續中，口腔潰瘍也少很多。',
      ending: {
        grade: 'good',
        title: 'Behçet syndrome with panuveitis',
        pearls: [
          'ISG：recurrent oral ulcers + 2 項（genital、skin、eye、pathergy）',
          'Hypopyon、bilateral panuveitis；年輕男性預後差',
          'Eye：早期積極，GC + AZA ± TNFi',
          'HLA-B*51 不用於診斷'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'beh-02',
  chapter: '376',
  title: '咳出來的血',
  patient: '31 歲男性 · Behçet 第 5 年',
  summary: '小腿靜脈腫痛一個月，今天咳了一口鮮血。',
  cards: ['behcet-path', 'behcet-organ', 'behcet-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '阿里是你追蹤五年的 Behçet 病人，原本只有口腔潰瘍和皮膚表現，靠 colchicine 控制。',
        '一個月前左小腿表淺靜脈紅腫，診所說是靜脈炎。前天開始左小腿整個腫起來，今天早上咳了一口鮮血。'
      ],
      clue: ['31M；Behçet 5 年（mucocutaneous）', '**Superficial thrombophlebitis** -> 左小腿腫脹', '**Hemoptysis**'],
      choices: [{ label: '安排檢查', next: 'labs' }]
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'duplex', group: '影像', label: '左下肢 venous duplex', key: true, reveal: true,
            result: '左 **popliteal 至 femoral DVT**', clue: '**Left DVT**',
            miss: '小腿整個腫，要確認 DVT。' },
          { id: 'ctpa', group: '影像', label: 'CT pulmonary angiography', key: true, reveal: true,
            result: '右下葉肺動脈 **2.5 cm 動脈瘤**，周圍有出血；**沒有典型 PE**', clue: '**Pulmonary artery aneurysm**',
            miss: 'Behçet 病人咳血，要想 pulmonary artery aneurysm，CTPA 是關鍵。' },
          { id: 'echo', group: '影像', label: 'Echocardiography', result: '無 intracardiac thrombus' },
          { id: 'cbc', group: '血液', label: 'CBC、coagulation', result: 'Hb 12.8；PT、aPTT 正常' },
          { id: 'apl', group: '血液', label: 'aPL panel', result: '陰性', clue: 'aPL 陰性' },
          { id: 'crp', group: '血液', label: 'CRP', result: '5.6 mg/dL' },
          { id: 'thrombo', group: '血液', label: 'Protein C/S、antithrombin', result: '輕度下降', waste: '急性血栓期驗這些會被消耗，數值不準。' }
        ]
      }
    },
    dx: {
      text: 'DVT + pulmonary artery aneurysm（hemoptysis）。治療？',
      choices: [
        { label: '**Immunosuppression**：高劑量 GC + **cyclophosphamide**（之後 AZA 維持）；**不抗凝**；與介入放射/胸外討論 aneurysm', next: 'end_good' },
        { label: 'DVT 要抗凝：enoxaparin 銜接 warfarin', next: 'tx_ac' },
        { label: 'Colchicine 加量就好', next: 'tx_colch' }
      ]
    },
    tx_ac: {
      text: '主治醫師立刻阻止。',
      feedback: '有 pulmonary artery aneurysm 而且已經在出血，抗凝可能致命。Behçet 的靜脈血栓靠控制血管發炎治療（AZA，嚴重用 CYC）；只有出血風險低且沒有 PA aneurysm 時才考慮抗凝。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    tx_colch: {
      text: '主治醫師搖頭。',
      feedback: 'PA aneurysm 的 5 年死亡率 20-25%，需要強力 immunosuppression。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '經過六個月 CYC + GC，再以 AZA 維持，動脈瘤縮小到 1.2 cm，沒有再咳血。DVT 也逐漸再通。',
      ending: {
        grade: 'good',
        title: 'Behçet with pulmonary artery aneurysm',
        pearls: [
          'Superficial thrombophlebitis（男性）-> DVT -> 找 PA aneurysm',
          'PA aneurysm 5 年死亡率 20-25%',
          'Venous thrombosis：immunosuppression 而非抗凝',
          'PA aneurysm 存在時禁抗凝'
        ]
      }
    }
  }
});
