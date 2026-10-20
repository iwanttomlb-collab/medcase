// Ch 368 Systemic Lupus Erythematosus. Source notes: notes/368-sle.md

RPG.registerCards('368', [
  {
    id: 'sle-path',
    title: 'SLE 致病機轉',
    points: [
      '遺傳 + 環境 -> 失去 self-tolerance；**MZ 24% vs DZ 2%**；> 150 個 susceptibility loci',
      '遺傳：**MHC**；近半數 loci 與 **type 1 IFN** 相關（TLR7、IRF5、STAT4、TYK2）；**complement（C1q、C2、C4）缺乏 -> 清除不良 -> 嚴重 SLE**；DNASE1L3',
      '環境：**UV**（apoptosis、DNA methylation）、**EBV**、silica、吸菸、sex hormones、gut microbiome',
      '**Innate**：neutrophil turnover 與 **NETosis** 增加 + macrophage 清除 debris 不良 -> nucleic acid autoantigen 過量 -> **TLR** -> **plasmacytoid DC 大量 type 1 IFN**',
      '**Adaptive**：B cell 失去耐受（age-associated B cells 擴增）；Tfh、Tph 幫助產生高親和 **anti-dsDNA、anti-Sm**；**Treg 缺陷**',
      '**Immune complexes**（autoAb + nucleic acid）沉積組織 -> complement 消耗（**C3/C4 下降**）、monocyte 浸潤 -> 發炎；反覆 flare 後 fibrosis',
      'Anti-Ro 經胎盤 -> neonatal lupus、congenital heart block',
      '**Drug-induced lupus**：antihistone 抗體；停藥後緩解'
    ],
    refs: ['Harrison’s Ch 368（Pathogenesis）']
  },
  {
    id: 'sle-ab',
    title: 'SLE autoantibodies',
    table: {
      head: ['Antibody', '重點'],
      rows: [
        ['ANA', '**最佳篩檢**；>= 1:80 為陽性；sensitive 但不 specific'],
        ['Anti-dsDNA', '40-60%；titer 隨 **disease activity** 變化；與 **nephritis** 相關'],
        ['Anti-Sm', '~30%；**最 specific**'],
        ['Anti-Ro (SS-A)', 'SCLE、sicca、**neonatal lupus、congenital heart block**；ANA(-) SLE 常見'],
        ['Anti-RNP', '非 SLE-specific；overlap syndrome、PAH'],
        ['Antiribosomal P', '可能與 CNS involvement 相關'],
        ['Antihistone', '**Drug-induced lupus**（~75%）'],
        ['aPL（aCL、anti-beta2GP1、LA）', '~50%；thrombosis、thrombocytopenia、fetal loss']
      ]
    },
    note: 'EULAR/ACR 2019 只納入 anti-dsDNA 與 anti-Sm；anti-dsDNA 上升 + C3/C4 下降 = flare、nephritis 警訊'
  },
  {
    id: 'sle-skin',
    title: 'Cutaneous lupus',
    table: {
      head: ['類型', '特徵', 'Systemic disease'],
      rows: [
        ['ACLE', '**Malar rash**：butterfly、**避開鼻唇溝**、photosensitive', '隨 SLE activity 出現'],
        ['SCLE', 'Annular 或 psoriasiform、photosensitive；**anti-Ro**', '可單獨存在'],
        ['CCLE (discoid)', '圓形 scaly plaque，中央 atrophic、depigmented -> **scarring**', '可單獨存在']
      ]
    },
    points: [
      'Rosacea 會侵犯鼻唇溝，malar rash 不會',
      'Nonscarring alopecia；oral/nasal ulcers 常無痛',
      'Raynaud ~1/3：白 -> 藍 -> 紅'
    ]
  },
  {
    id: 'ln-class',
    title: 'Lupus nephritis：篩檢與分類',
    points: [
      '~35% SLE；可無症狀 -> **每 3 個月篩 UPCr**',
      '**Renal biopsy：UPCr > 0.5 和/或 腎功能下降**',
      '治療無效 -> repeat biopsy 看 class 是否改變'
    ],
    table: {
      head: ['Class', '病理', '處置'],
      rows: [
        ['I / II', 'Mesangial deposits（II 有 mesangial hypercellularity）', '通常不需積極 immunosuppression'],
        ['III', 'Focal proliferative；subendothelial deposits', '**積極治療**'],
        ['IV', 'Diffuse proliferative；subendothelial deposits', '**積極治療**；美國 ~20% 10 年內死亡或 ESRD'],
        ['V', 'Membranous；subepithelial deposits', '常 nephrotic；pure V 有明顯 proteinuria 才治療；III/IV + V 同 III/IV']
      ]
    }
  },
  {
    id: 'ln-tx',
    title: 'Lupus nephritis：治療',
    points: [
      '所有 class III/IV/V：**ACEi 或 ARB**；eGFR 下降考慮 SGLT2i',
      'Induction：GC（可 IV MP pulse）+ **MMF** 或 **CYC**',
      'Black、Hispanic：MMF 2-3 g/day 反應較好',
      'Euro-Lupus low-dose CYC：500 mg q2w x 6，效果等同 high-dose 且較耐受',
      'High-dose CYC：crescents、RPGN；**ovarian failure** -> 先給 GnRH agonist',
      'Triple therapy：加 **belimumab** 或 **voclosporin**',
      'Maintenance：MMF 優於 AZA；**懷孕用 AZA**；AZA 前驗 **TPMT**',
      'KDIGO：complete response 後總療程不少於 36 個月'
    ],
    table: {
      head: ['時間', 'UPCr 目標'],
      rows: [
        ['3 個月', '下降 >= 25%'],
        ['6 個月', '下降 >= 50%，且 < 3 g/day'],
        ['12-24 個月', '< 0.5-0.7 g/day（eGFR 與 baseline 差 10% 內）']
      ]
    }
  },
  {
    id: 'hcq',
    title: 'Hydroxychloroquine (HCQ)',
    points: [
      '**所有 SLE 病人都要用**，除非禁忌',
      '預防 flare、提升存活、降低 renal disease 與 atherosclerosis 風險',
      'Skin、arthritis first-line；改善 fatigue 最有效',
      '劑量 **<= 5 mg/kg/day（actual body weight）**',
      '**Baseline 與每年 retinal exam**（maculopathy）',
      '懷孕、哺乳安全；停 HCQ 是不良懷孕結果的危險因子',
      '吸菸降低療效；chloroquine 眼毒性更高'
    ]
  },
  {
    id: 'dil',
    title: 'Drug-induced lupus (DIL)',
    table: {
      head: ['', 'DIL', 'SLE'],
      rows: [
        ['表現', 'Fever、arthralgia、myalgia、rash、**serositis**', '多系統'],
        ['腎、腦', '**很少侵犯**', '常見'],
        ['Antibody', '**Antihistone ~75%**；anti-dsDNA 少', 'Anti-dsDNA、anti-Sm'],
        ['病程', '**停藥後數週緩解**', '慢性、flare']
      ]
    },
    points: [
      '第一個：**hydralazine (1954)**；發生率最高：**procainamide**（最高 30%）',
      '其他：isoniazid、minocycline、methyldopa、sulfasalazine、phenytoin、carbamazepine、PPI、HCTZ、**TNF inhibitors**',
      'ANA 可只陽性而無症狀，不需要治療'
    ]
  },
  {
    id: 'sle-preg',
    title: 'SLE 與懷孕',
    table: {
      head: ['可用', '避免'],
      rows: [
        ['**HCQ**（standard of care）', '**MMF、MTX**（致畸）'],
        ['AZA、tacrolimus', 'Belimumab、anifrolumab、voclosporin（資料不足）'],
        ['Prednisone（最低有效劑量）', '**Warfarin**（致畸）'],
        ['Low-dose aspirin（預防 preeclampsia）', 'ACEi/ARB'],
        ['LMWH（APS 或曾 pregnancy morbidity）', 'aPL(+) 者避免 estrogen 避孕藥']
      ]
    },
    points: [
      '受孕時 disease active -> 懷孕中 flare 較多',
      '**Anti-Ro** -> neonatal lupus、congenital heart block -> fetal echocardiography',
      '最高風險、應考慮避孕：PAH、曾 arterial thrombosis、嚴重 end-organ damage'
    ]
  }
]);

RPG.registerCase({
  id: 'sle-01',
  chapter: '368',
  title: '海邊回來的蝴蝶',
  patient: '26 歲女性 · 研究生',
  summary: '暑假去墾丁玩回來後，臉上出現紅疹，手指關節越來越痛。',
  cards: ['sle-path', 'sle-ab', 'sle-skin', 'ln-class', 'ln-tx', 'hcq'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '週二下午門診。林小姐戴著口罩走進來，坐下時小心翼翼地彎著手指。',
        '「醫生，我三個月來一直很累，手指關節早上會僵硬、會痛。上個月去墾丁玩完，臉上就冒出這個紅紅的東西，一直沒退。」',
        '她拉下口罩，兩側臉頰各有一片微隆起的紅斑。'
      ],
      clue: '26F；fatigue 3 個月；手指關節痛 + morning stiffness；日曬後臉部紅疹',
      choices: [{ label: '繼續問診', next: 'hx_hub' }]
    },
    hx_hub: {
      text: '你翻開病歷，想再多問幾件事。',
      choices: [
        { label: '問紅疹的細節', next: 'hx_rash', once: true },
        { label: '問其他系統症狀（口腔、頭髮、尿液、胸痛）', next: 'hx_ros', once: true },
        { label: '問用藥史與家族史', next: 'hx_drug', once: true },
        { label: '問得差不多了，開始理學檢查', next: 'exam', pin: true }
      ]
    },
    hx_rash: {
      text: '「曬到太陽就會比較紅，不太癢。之前也有過一次，但沒這麼明顯。」',
      clue: 'Rash：**photosensitive**、不癢',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_ros: {
      text: [
        '「嘴巴破了好幾個禮拜，不太痛所以沒在意。最近洗頭掉很多頭髮。」',
        '她想了一下：「還有，最近尿尿泡泡很多，很久才消。腳踝傍晚會有點腫。」'
      ],
      clue: ['Painless oral ulcers；掉髮', '**Foamy urine** + 傍晚腳踝水腫'],
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_drug: {
      text: '沒有長期用藥，只偶爾吃 NSAID 止痛。媽媽有甲狀腺疾病。不抽菸。',
      clue: '無長期用藥；母親 thyroid disease',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    exam: {
      text: '林小姐坐上診療床。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'vitals', group: '一般', label: '生命徵象', key: true, reveal: true,
            result: 'BP **148/92** mmHg，HR 88，BT 37.6 度',
            clue: 'BP 148/92；low-grade fever',
            miss: '生命徵象一定要量。她的血壓偏高，這對判斷腎臟侵犯很重要。' },
          { id: 'face', group: '頭頸', label: '臉部皮膚', key: true, reveal: true,
            result: '雙頰蝴蝶狀紅斑，**避開鼻唇溝 (nasolabial folds)**',
            clue: 'Malar rash，**sparing nasolabial folds**',
            miss: '主訴就是臉上紅疹，皮膚當然要看。鼻唇溝有沒有被侵犯，可以和 rosacea 區分。' },
          { id: 'oral', group: '頭頸', label: '口腔', key: true, reveal: true,
            result: '上顎兩處**無痛性潰瘍**',
            clue: 'Painless **palatal ulcers**',
            miss: 'SLE 的口腔潰瘍常常不痛，病人不會主動講，要自己看。' },
          { id: 'scalp', group: '頭頸', label: '頭皮與頭髮',
            result: '頭髮瀰漫性變稀疏，頭皮無疤痕', clue: 'Nonscarring alopecia' },
          { id: 'eye', group: '頭頸', label: '眼睛', result: '結膜無充血，鞏膜無發炎' },
          { id: 'lymph', group: '頭頸', label: '頸部淋巴結', result: '數顆小於 1 cm、可移動的淋巴結' },
          { id: 'heart', group: '胸腹', label: '心臟聽診', result: 'Regular rhythm，無 murmur，無 friction rub' },
          { id: 'lung', group: '胸腹', label: '肺部聽診', result: '雙側呼吸音清晰' },
          { id: 'abd', group: '胸腹', label: '腹部觸診', result: '軟，無壓痛，無肝脾腫大' },
          { id: 'dre', group: '胸腹', label: '肛門指診',
            result: '無異常', waste: '這個主訴不需要肛門指診。' },
          { id: 'hand', group: '四肢與神經', label: '手部關節', key: true, reveal: true,
            result: '雙手 MCP、PIP 對稱性腫脹壓痛',
            clue: 'Symmetric synovitis MCP/PIP',
            miss: '病人主訴關節痛，要確認是 arthralgia 還是真的有 synovitis。' },
          { id: 'edema', group: '四肢與神經', label: '下肢水腫', key: true, reveal: true,
            result: '雙側腳踝 **1+ pitting edema**',
            clue: 'Bilateral ankle pitting edema',
            miss: '水腫要檢查。合併泡泡尿，要想到 nephrotic-range proteinuria。' },
          { id: 'neuro', group: '四肢與神經', label: '神經學檢查', result: '無 focal deficit' }
        ]
      }
    },
    labs: {
      text: '你打開檢查單。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'results_full',
        routes: [{ ifMissedAll: ['ua', 'upcr'], next: 'results' }],
        options: [
          { id: 'cbc', group: '血液', label: 'CBC with differential', key: true, reveal: true,
            result: 'WBC 3,200/uL（lymphocyte **900**）；Hb 10.8 g/dL；PLT 142,000/uL',
            clue: 'Leukopenia，以 **lymphopenia** 為主；mild anemia',
            miss: 'SLE 初診一定要驗 CBC，找 leukopenia、lymphopenia、anemia、thrombocytopenia。' },
          { id: 'cr', group: '血液', label: 'BUN、Cr', key: true, reveal: true,
            result: 'BUN 16、Cr 0.9 mg/dL', clue: 'Cr 0.9',
            miss: '腎功能是 SLE 的基本檢查。' },
          { id: 'lft', group: '血液', label: 'AST、ALT', result: '正常' },
          { id: 'esr', group: '血液', label: 'ESR、CRP', result: 'ESR **68** mm/h；CRP 0.6 mg/dL', clue: 'ESR 高，CRP 幾乎正常' },
          { id: 'tsh', group: '血液', label: 'TSH', result: '正常' },
          { id: 'ana', group: '免疫', label: 'ANA', key: true, reveal: true,
            result: '**1:640**，homogeneous', clue: 'ANA 1:640',
            miss: '懷疑 SLE，ANA 是最佳篩檢。' },
          { id: 'dsdna', group: '免疫', label: 'Anti-dsDNA', key: true, reveal: true,
            result: '**強陽性**', clue: 'Anti-dsDNA (+++)',
            miss: 'Anti-dsDNA 對診斷和追蹤活性都重要，也和 nephritis 有關。' },
          { id: 'sm', group: '免疫', label: 'Anti-Sm', result: '**陽性**', clue: '**Anti-Sm (+)**' },
          { id: 'comp', group: '免疫', label: 'C3、C4', key: true, reveal: true,
            result: 'C3 **52** mg/dL、C4 **6** mg/dL（皆下降）', clue: '**C3、C4 皆下降**',
            miss: '補體下降代表 immune complex 消耗，是活性指標。' },
          { id: 'rf', group: '免疫', label: 'RF、anti-CCP', result: 'RF 弱陽性；anti-CCP 陰性' },
          { id: 'ro', group: '免疫', label: 'Anti-Ro、anti-La', result: '皆陰性' },
          { id: 'apl', group: '免疫', label: 'aPL（aCL、anti-beta2GP1、LA）', result: '皆陰性', clue: 'aPL 陰性' },
          { id: 'igg4', group: '免疫', label: 'Serum IgG4', result: '正常',
            waste: 'IgG4 和這位病人的表現無關。' },
          { id: 'ua', group: '尿液', label: 'Urinalysis', key: true, reveal: true,
            result: 'Protein 3+；RBC 20-30/HPF（**dysmorphic**）；**RBC casts**',
            clue: 'Dysmorphic RBC + **RBC casts**',
            miss: '有驗 UPCr 很好，但尿沉渣看 RBC casts 也一樣重要。' },
          { id: 'upcr', group: '尿液', label: 'UPCr', key: true, reveal: true,
            result: '**1.6** g/g', clue: '**UPCr 1.6**',
            miss: '有驗 UA 很好，但要量化蛋白尿才能決定要不要切片。' },
          { id: 'handxr', group: '影像', label: 'Hand X-ray', result: '無 erosion' },
          { id: 'cxr', group: '影像', label: 'Chest X-ray', result: '正常' },
          { id: 'kidneyecho', group: '影像', label: 'Renal ultrasound', result: '雙腎大小正常' },
          { id: 'pet', group: '影像', label: 'PET-CT', result: '多處反應性淋巴結',
            waste: 'PET-CT 不是 SLE 的檢查，還會帶來不必要的追查。' }
        ]
      }
    },
    results: {
      text: [
        '報告陸續出來，SLE 的診斷看起來沒有太大疑問。',
        '你正要開 HCQ 讓她回家，主治醫師翻了翻你的檢查單。'
      ],
      feedback: '泡泡尿、水腫、血壓偏高，然後你沒驗尿？Lupus nephritis 可以完全沒症狀，所以每位 SLE 病人都要定期篩 UPCr。',
      choices: [
        { label: '補開 UA + UPCr', next: 'lab_ua_late' },
        { label: '先開 HCQ + 短期 prednisone，下次門診再驗', next: 'end_missed' }
      ]
    },
    lab_ua_late: {
      text: 'UA：protein 3+，dysmorphic RBC，**RBC casts**。UPCr **1.6** g/g。',
      clue: '**UPCr 1.6**；dysmorphic RBC + RBC casts',
      choices: [{ label: '重新整理所有結果', next: 'results_full' }]
    },
    results_full: {
      text: [
        '所有資料攤在桌上：皮疹、口腔潰瘍、關節炎、lymphopenia、高效價 ANA、anti-dsDNA、低補體，加上**蛋白尿與 RBC casts**。',
        '這是 SLE，而且腎臟已經被侵犯。下一步？'
      ],
      feedback: 'Anti-dsDNA 上升合併 C3/C4 下降，本來就要懷疑 nephritis。',
      choices: [
        { label: '安排 renal biopsy', next: 'biopsy' },
        { label: '臨床已經很典型，不用切片，直接給 prednisone 1 mg/kg', next: 'no_biopsy' }
      ]
    },
    no_biopsy: {
      text: '主治醫師搖頭。',
      feedback: 'UPCr > 0.5 就要切片。治療強度取決於 ISN/RPS class，class II 和 class IV 的治療完全不同；之後治療無效時，也需要基準切片來比較。',
      choices: [{ label: '好，安排切片', next: 'biopsy' }]
    },
    biopsy: {
      text: [
        '一週後病理報告：**ISN/RPS class IV** diffuse proliferative lupus nephritis，subendothelial immune deposits，有少量 active lesions，沒有 crescents。',
        '林小姐問：「醫生，這很嚴重嗎？我明年還想出國念書，以後也想生小孩。」'
      ],
      clue: 'Renal biopsy：**class IV LN**，無 crescents',
      choices: [{ label: '決定治療方案', next: 'tx' }]
    },
    tx: {
      text: '你要怎麼開始治療？',
      choices: [
        { label: 'IV methylprednisolone pulse 後口服 GC 快速 taper + **MMF** + **HCQ** + **ACEi/ARB**', next: 'end_good' },
        { label: 'Prednisone 1 mg/kg/day + HCQ，先看反應', next: 'tx_steroid_only' },
        { label: 'High-dose IV cyclophosphamide 每月一次 x 6 個月 + GC', next: 'tx_cyc' }
      ]
    },
    tx_steroid_only: {
      text: '主治醫師把處方單推回來。',
      feedback: 'Class IV 需要 immunosuppressant induction（MMF 或 CYC），只用類固醇不夠，而且會累積 steroid damage。另外，所有 class III/IV/V 都要加 ACEi 或 ARB 降低蛋白尿。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_cyc: {
      text: '主治醫師問：「她剛剛說了什麼？」',
      feedback: '她想生小孩。High-dose CYC 會造成 ovarian failure，通常留給 crescentic GN 或 RPGN。她沒有 crescents，MMF 或 low-dose (Euro-Lupus) CYC 就夠了。真的要用 high-dose CYC，打藥前要先給 GnRH agonist 保護卵巢。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: [
        '三個月後回診：UPCr 降到 0.9，C3 回升，關節不痛了，臉上的紅斑也退了。Prednisone 已經 taper 到 7.5 mg。',
        '你提醒她每天擦防曬、HCQ 每年要做一次眼科檢查，以及懷孕前一定要先回來討論換藥。'
      ],
      ending: {
        grade: 'good',
        title: 'Class IV lupus nephritis，induction 順利',
        pearls: [
          'Lupus nephritis 可無症狀：每 3 個月篩 UPCr；UPCr > 0.5 -> renal biopsy',
          'Class III/IV：GC + MMF 或 CYC；所有 class III/IV/V 加 ACEi/ARB',
          '3 個月 UPCr 下降 >= 25% 即達第一個目標'
        ]
      }
    },
    end_missed: {
      text: [
        '六週後，林小姐被送進急診：全身水腫、體重增加 6 公斤，Cr **2.4** mg/dL，UPCr 5.8。',
        '腎臟切片顯示 class IV lupus nephritis 合併 cellular crescents。'
      ],
      ending: {
        grade: 'bad',
        title: '漏掉 lupus nephritis',
        pearls: [
          '每位 SLE 病人初診都要驗 UA、UPCr、Cr',
          'Foamy urine、水腫、新發高血壓是 nephritis 的線索，但 nephritis 也可以完全無症狀',
          'Crescents 或 RPGN -> 考慮 high-dose CYC'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'sle-02',
  chapter: '368',
  title: '藥袋裡的嫌疑犯',
  patient: '67 歲男性 · 退休公務員',
  summary: '不明原因發燒、關節痛、胸口刺痛一個多月，ANA 陽性。',
  cards: ['sle-path', 'dil', 'sle-ab'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '病房會診單：「67 歲男性，fever、arthralgia、pleuritic chest pain 六週，ANA 1:320，r/o SLE，請協助。」',
        '陳先生坐在床上，手扶著右胸：「深呼吸就會痛。關節也痠，晚上會發燒到 38 度。」'
      ],
      clue: '67M；fever、arthralgia、**pleuritic chest pain** 6 週；ANA 1:320',
      feedback: '67 歲男性的新發 lupus，在流行病學上不太典型。看診前先想想還有什麼可能。',
      choices: [{ label: '開始問診', next: 'hx_hub' }]
    },
    hx_hub: {
      text: '你拉了張椅子坐下。',
      choices: [
        { label: '問皮膚、口腔、尿液等其他症狀', next: 'hx_ros', once: true },
        { label: '請家屬拿出藥袋，逐一核對用藥', next: 'hx_drug', once: true },
        { label: '開始理學檢查', next: 'exam', pin: true }
      ]
    },
    hx_ros: {
      text: '前臂曬到太陽的地方有些淡淡的紅疹。沒有口腔潰瘍、沒有掉髮，尿量和顏色正常，沒有泡泡尿。',
      clue: '輕微 photosensitive rash；無 oral ulcer、alopecia；尿液正常',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_drug: {
      text: [
        '女兒拿出一個大藥袋。高血壓吃了很多年，兩年前因為血壓控制不好，心臟科加了一顆藥：',
        '**Hydralazine** 50 mg tid，另外還有 amlodipine 和 atorvastatin。'
      ],
      clue: '**Hydralazine** 50 mg tid，已服用 2 年',
      feedback: '1954 年第一個被發現會引起 lupus 症狀的藥，就是 hydralazine。',
      choices: [
        { label: '回到問診', next: 'hx_hub', unless: 'labs' },
        { label: '回到討論', next: 'decide', requires: 'labs' }
      ]
    },
    exam: {
      text: '你請陳先生躺平。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'vitals', group: '一般', label: '生命徵象', key: true, reveal: true,
            result: 'BT **37.9** 度，BP 136/82，HR 96，SpO2 96%', clue: 'Low-grade fever',
            miss: '發燒的病人，生命徵象一定要量。' },
          { id: 'skin', group: '頭頸', label: '皮膚', key: true, reveal: true,
            result: '前臂日曬處淡紅色斑疹', clue: '前臂 photosensitive macules',
            miss: '懷疑 lupus，皮膚要看。' },
          { id: 'oral', group: '頭頸', label: '口腔', result: '無潰瘍' },
          { id: 'lymph', group: '頭頸', label: '頸部與鎖骨上淋巴結', result: '未觸及' },
          { id: 'heart', group: '胸腹', label: '心臟聽診', key: true, reveal: true,
            result: 'Regular，無 murmur，**無 friction rub**', clue: '無 pericardial friction rub',
            miss: 'Pleuritic chest pain 要聽有沒有 pericardial friction rub。' },
          { id: 'lung', group: '胸腹', label: '肺部聽診與叩診', key: true, reveal: true,
            result: '右下肺**呼吸音減弱、叩診濁音**', clue: '右下肺呼吸音減弱 + dullness（疑 effusion）',
            miss: '胸痛加上深呼吸會痛，肺部一定要聽、要叩。' },
          { id: 'abd', group: '胸腹', label: '腹部觸診', result: '軟，無壓痛，無肝脾腫大' },
          { id: 'dre', group: '胸腹', label: '肛門指診', result: '無異常',
            waste: '這個表現不需要肛門指診。' },
          { id: 'joint', group: '四肢與神經', label: '關節', key: true, reveal: true,
            result: '雙手腕、MCP 輕壓痛，**無腫脹**', clue: 'Arthralgia，無 synovitis',
            miss: '主訴關節痛，要確認有沒有 synovitis。' },
          { id: 'edema', group: '四肢與神經', label: '下肢水腫', result: '無' },
          { id: 'neuro', group: '四肢與神經', label: '神經學檢查', result: '無 focal deficit' }
        ]
      }
    },
    labs: {
      text: '會診單上已經有 ANA 1:320。你要加開哪些檢查？',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'decide',
        options: [
          { id: 'cbc', group: '血液', label: 'CBC with differential', key: true, reveal: true,
            result: 'WBC 4,800/uL；Hb 12.6 g/dL；PLT 210k', clue: 'CBC 正常',
            miss: '懷疑 lupus，CBC 是基本評估。' },
          { id: 'cr', group: '血液', label: 'BUN、Cr', result: 'Cr 1.0 mg/dL' },
          { id: 'esr', group: '血液', label: 'ESR、CRP', result: 'ESR 54 mm/h；CRP 1.8 mg/dL' },
          { id: 'bcx', group: '血液', label: 'Blood culture x 2', result: '無菌生長' },
          { id: 'pct', group: '血液', label: 'Procalcitonin', result: '0.08 ng/mL' },
          { id: 'ana', group: '免疫', label: 'ANA（重驗）', result: '1:320，**homogeneous**',
            waste: '會診單上已經有 ANA，重驗不會改變判斷。' },
          { id: 'dsdna', group: '免疫', label: 'Anti-dsDNA', key: true, reveal: true,
            result: '**陰性**', clue: 'Anti-dsDNA (-)',
            miss: '要區分 SLE 和其他原因，anti-dsDNA 是關鍵。' },
          { id: 'sm', group: '免疫', label: 'Anti-Sm', result: '陰性', clue: 'Anti-Sm (-)' },
          { id: 'histone', group: '免疫', label: 'Antihistone antibody', key: true, reveal: true,
            result: '**陽性**', clue: '**Antihistone (+)**',
            miss: 'Lupus-like 表現加上可疑藥物，要驗 antihistone。' },
          { id: 'comp', group: '免疫', label: 'C3、C4', key: true, reveal: true,
            result: '正常', clue: 'C3、C4 正常',
            miss: '補體是判斷 lupus 活性的基本指標。' },
          { id: 'anca', group: '免疫', label: 'ANCA', result: '陰性' },
          { id: 'ua', group: '尿液', label: 'Urinalysis + UPCr', key: true, reveal: true,
            result: '無 hematuria、無 casts；UPCr 0.08', clue: '尿液正常，無腎臟侵犯',
            miss: '懷疑 lupus 就要評估腎臟。' },
          { id: 'cxr', group: '影像', label: 'Chest X-ray', key: true, reveal: true,
            result: '右側少量 **pleural effusion**', clue: 'CXR：右側少量 pleural effusion',
            miss: '有 pleuritic chest pain 和肺部異常，至少要照 CXR。' },
          { id: 'echo', group: '影像', label: 'Echocardiography', result: '無 pericardial effusion，LVEF 正常' },
          { id: 'pet', group: '影像', label: 'PET-CT', result: '右側 pleura 輕度攝取',
            waste: 'PET-CT 在這裡幫助不大。' }
        ]
      }
    },
    decide: {
      text: '年長男性、serositis + arthralgia + fever，腎臟與血液都沒有侵犯。你的處置是？',
      choices: [
        { label: '回頭再問一次用藥史', next: 'hx_drug', unless: 'hx_drug', pin: true },
        { label: '診斷 **drug-induced lupus**：停 hydralazine，改用其他降壓藥，serositis 短期給 NSAID', next: 'end_good', requires: 'hx_drug' },
        { label: '診斷 SLE：開始 HCQ + prednisone 20 mg/day，降壓藥維持不變', next: 'end_ok' }
      ]
    },
    end_good: {
      text: [
        '你和心臟科討論，把 hydralazine 換成 ARB。陳先生服用 NSAID 一週後就退燒了。',
        '六週後回診：胸痛消失，關節不痛，effusion 吸收。ANA 仍然陽性，但你知道這不代表需要治療。'
      ],
      ending: {
        grade: 'good',
        title: 'Hydralazine-induced lupus',
        pearls: [
          'DIL：serositis、arthralgia、fever；很少侵犯腎與腦',
          'Antihistone 陽性、anti-dsDNA 陰性、補體正常',
          '停藥後數週內緩解，同時也確立診斷'
        ]
      }
    },
    end_ok: {
      text: [
        '症狀在 prednisone 下改善了，但每次 taper 到 10 mg 以下就又發燒、胸痛。三個月後他出現 steroid-induced hyperglycemia。',
        '新來的主治醫師看了藥袋，第一件事就是停掉 hydralazine。兩個月後，類固醇順利停藥。'
      ],
      ending: {
        grade: 'ok',
        title: '把 DIL 當 SLE 治療',
        pearls: [
          'Lupus-like 症狀先查用藥史，尤其是年長、男性、無腎腦侵犯的病人',
          'DIL 治療的核心是停藥，不是 immunosuppression',
          '即使 prednisone 5 mg 也與 damage accrual 相關'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'sle-03',
  chapter: '368',
  title: '她想要一個寶寶',
  patient: '31 歲女性 · SLE 第 4 年',
  summary: 'Lupus nephritis 緩解一年，想開始備孕。藥要怎麼調？',
  cards: ['sle-path', 'sle-preg', 'hcq'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '張小姐是你的老病人。四年前診斷 SLE 合併 class IV lupus nephritis，induction 後一路穩定。',
        '今天她和先生一起來，笑著說：「醫生，我們想要生小孩了。可以嗎？」'
      ],
      clue: '31F；SLE + class IV LN（4 年前）；計畫懷孕',
      choices: [{ label: '打開病歷看目前狀況', next: 'rv_meds' }]
    },
    rv_meds: {
      text: [
        '過去 12 個月 clinical SLEDAI = 0。',
        '目前用藥：**MMF** 1 g bid、**HCQ** 200 mg bid（體重 68 kg）、prednisone 5 mg qd、**losartan** 50 mg qd。'
      ],
      clue: ['Clinical SLEDAI 0 已 12 個月', '用藥：MMF、HCQ、prednisone 5 mg、losartan'],
      choices: [{ label: '安排孕前評估', next: 'prepreg' }]
    },
    prepreg: {
      text: '你要在懷孕前確認哪些事情？',
      checklist: {
        prompt: '孕前評估：勾選你要的項目',
        submit: '送出',
        next: 'meds',
        options: [
          { id: 'bp', group: '疾病活性', label: '血壓', key: true, reveal: true,
            result: '118/74 mmHg', clue: 'BP 118/74',
            miss: 'Lupus nephritis 病人懷孕前一定要確認血壓，高血壓是不良懷孕結果的危險因子。' },
          { id: 'renal', group: '疾病活性', label: 'UPCr、Cr', key: true, reveal: true,
            result: 'UPCr **0.2**；Cr 0.8 mg/dL', clue: 'UPCr 0.2；Cr 0.8',
            miss: '有 nephritis 病史，腎臟活性是孕前最重要的評估之一。' },
          { id: 'activity', group: '疾病活性', label: 'C3、C4、anti-dsDNA', key: true, reveal: true,
            result: 'C3、C4 正常；anti-dsDNA 低效價且穩定', clue: '補體正常；anti-dsDNA 穩定',
            miss: '受孕時 disease active，懷孕中會 flare 更多，所以要確認血清學活性。' },
          { id: 'cbc', group: '疾病活性', label: 'CBC', result: '正常' },
          { id: 'ua', group: '疾病活性', label: 'Urinalysis', result: 'Inactive sediment' },
          { id: 'ana', group: '抗體', label: 'ANA（重驗）', result: '1:320',
            waste: 'ANA titer 不反映疾病活性，不需要重驗。' },
          { id: 'ro', group: '抗體', label: 'Anti-Ro、anti-La', key: true, reveal: true,
            result: 'Anti-Ro **陽性（高效價）**；anti-La 陰性', clue: '**Anti-Ro (SS-A) (+) 高效價**',
            miss: 'Anti-Ro 決定要不要監測 congenital heart block，懷孕前一定要知道。' },
          { id: 'apl', group: '抗體', label: 'aPL（aCL、anti-beta2GP1、LA）', key: true, reveal: true,
            result: '皆陰性', clue: 'aPL 全陰性',
            miss: 'aPL 決定懷孕期間要不要用 LMWH，也影響避孕方式的選擇。' },
          { id: 'tpmt', group: '其他', label: 'TPMT activity', result: '正常', clue: 'TPMT 正常' },
          { id: 'a1c', group: '其他', label: 'HbA1c', result: '5.4%' },
          { id: 'tsh', group: '其他', label: 'TSH', result: '正常' },
          { id: 'rubella', group: '其他', label: 'Rubella IgG', result: '已有抗體' },
          { id: 'hsg', group: '其他', label: 'Hysterosalpingography', result: '雙側輸卵管通暢',
            waste: '她還沒開始嘗試懷孕，也沒有不孕的證據，不需要這項檢查。' }
        ]
      }
    },
    meds: {
      text: '病情穩定，可以開始準備。藥物要怎麼調？',
      choices: [
        { label: 'MMF 換成 **azathioprine**（先驗 TPMT）；停 losartan；HCQ 繼續；換藥後觀察一段時間確認穩定再受孕', next: 'meds_ok' },
        { label: '懷孕期間最好不要吃藥，全部停掉', next: 'meds_stopall' },
        { label: '目前很穩定，藥都不要動，直接開始嘗試懷孕', next: 'meds_keep' }
      ]
    },
    meds_stopall: {
      text: '主治醫師立刻打斷你。',
      feedback: '停 HCQ 是懷孕不良結果的危險因子。HCQ 在懷孕與哺乳都安全，而且是所有 SLE 孕婦的 standard of care，可以減少 flare。受孕時 disease active 的話，懷孕期間會 flare 更多次。',
      choices: [{ label: '重新決定', next: 'meds' }]
    },
    meds_keep: {
      text: '主治醫師皺眉。',
      feedback: 'MMF 和 MTX 都有致畸性，要避免。Losartan 這類 ACEi/ARB 懷孕也禁用。MMF 可以換成 azathioprine 或 tacrolimus。',
      choices: [{ label: '重新決定', next: 'meds' }]
    },
    meds_ok: {
      text: [
        'TPMT 正常。換成 azathioprine 後追蹤半年，病情持續緩解，UPCr 0.2。',
        '你們討論接下來的懷孕計畫。'
      ],
      clue: 'MMF -> AZA；停 ARB；HCQ 繼續；換藥後穩定 6 個月',
      choices: [{ label: '擬定懷孕期間的照護計畫', next: 'plan' }]
    },
    plan: {
      text: '懷孕期間除了繼續 HCQ、AZA、prednisone，你還要安排什麼？',
      choices: [
        { label: 'Low-dose aspirin 預防 preeclampsia；轉介 high-risk OB 安排 **fetal echocardiography**；定期追蹤 UPCr、BP、補體', next: 'end_good' },
        { label: '從懷孕初期就開始 warfarin 預防血栓', next: 'plan_warfarin' },
        { label: '照一般產檢即可', next: 'plan_routine' }
      ]
    },
    plan_warfarin: {
      text: '主治醫師搖頭。',
      feedback: 'Warfarin 有致畸性。她的 aPL 是陰性，不需要抗凝；有 APS 或曾發生 pregnancy morbidity 的孕婦才用 LMWH。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    plan_routine: {
      text: '主治醫師指著病歷上的 anti-Ro。',
      feedback: 'Anti-Ro 會穿過胎盤，可能造成 neonatal lupus，最嚴重的是子宮內發生的 congenital heart block。高效價 anti-Ro 要轉介 high-risk OB 做 fetal echo。另外，SLE 懷孕本身就是 high risk，low-dose aspirin 預防 preeclampsia 也是標準處置。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    end_good: {
      text: [
        '懷孕 20 週，fetal echo 顯示 PR interval 正常。整個孕期只有一次輕微關節 flare，短暫調高 prednisone 後就控制住了。',
        '38 週，張小姐自然產下一名健康的女嬰。'
      ],
      ending: {
        grade: 'good',
        title: '平安生產',
        pearls: [
          '先達到 remission 再懷孕；MMF 換 AZA，停 ACEi/ARB，HCQ 繼續',
          'Anti-Ro (+) -> fetal echocardiography 監測 congenital heart block',
          'Low-dose aspirin 預防 preeclampsia；aPL 陰性不需抗凝'
        ]
      }
    }
  }
});
