// Ch 377 Inflammatory Myopathies. Source notes: notes/377-myopathies.md

RPG.registerCards('377', [
  {
    id: 'dm-path',
    title: 'Dermatomyositis 致病機轉',
    points: [
      '舊說：抗內皮抗體 + complement -> 微血管破壞 -> watershed ischemia；但內皮上 Ig 沉積少，complement 可能是次發',
      '**新證據：type I IFN（尤其 IFN-beta）毒性為主**',
      '**MxA**（IFN-regulated protein）於 perifascicular fibers 與微血管 -> 診斷敏感且特異',
      '病理：**perifascicular atrophy**、perimysial/perivascular 浸潤（macrophages、B cells、**pDC**）；capillary MAC',
      '皮膚：cell-poor **interface dermatitis**（basal keratinocytes 受損）',
      '**MSAs 可能直接致病**：anti-Mi-2 進入肌核抑制 **CHD4/NuRD** complex',
      'Paraneoplastic：TIF1-gamma、NXP-2、SAE 與癌症相關；成人 DM ~15% 合併癌症',
      'Anti-MDA5（RIG-I-like RNA sensor）-> rapidly progressive ILD、皮膚缺血潰瘍'
    ],
    refs: ['Harrison’s Ch 377（Pathogenesis）']
  },
  {
    id: 'im-path',
    title: 'PM、IMNM、ASyS、IBM 致病機轉',
    points: [
      '**PM**：endomysial **CD8+ T** 與 macrophages 包圍並侵入 **MHC-I 表現**的 nonnecrotic fibers（T cell cytotoxicity）',
      '**IMNM（HMGCR）**：statin 使 HMGCR 表現增加而打破耐受；抗體可能結合 sarcolemma -> acetyl-CoA、lipid 累積；**necrosis 多、發炎少**；complement inhibitor 試驗無效',
      '**Anti-SRP**：可能直接致病，亞急性、侵襲性',
      '**ASyS**：anti-aminoacyl-tRNA synthetase（Jo-1）可能影響蛋白合成；肌纖維 **HLA-DR 表現 -> IFN-gamma** 驅動（DM 則是 type I IFN）',
      '**IBM（autoimmune 面）**：highly differentiated **CD8+ CD57+ KLRG1+** T cells 侵入；anti-cN-1A',
      '**IBM（degenerative 面）**：rimmed vacuoles、**p62/LC3**、ER stress、**TDP-43 從核擠出** -> cryptic exons、異常蛋白',
      'IBM 對免疫治療無效：T cells 高度分化、或退化過程主導',
      'ICI myositis：PD-L1+ macrophages、PD-1+ CD8+ T，可合併 myocarditis、MG'
    ],
    refs: ['Harrison’s Ch 377（Pathogenesis）']
  },
  {
    id: 'im-types',
    title: 'Inflammatory myopathies 比較',
    table: {
      head: ['', 'CK', 'Biopsy', '重點'],
      rows: [
        ['**DM**', '正常-50x', '**Perifascicular atrophy**、**MxA**、perimysial', 'Rash；ILD；**cancer**'],
        ['**IMNM**', '**> 10x**', '**Necrotic fibers、少發炎**', '**HMGCR（statin）**、SRP；cancer'],
        ['**ASyS**', '> 10x', 'Perimysial fragmentation、perifascicular necrosis', '**Jo-1**、ILD、mechanic’s hands'],
        ['**IBM**', '**正常或 < 10x**', '**Rimmed vacuoles、p62**、CD8 endomysial', '**> 50 歲男**、finger flexors + quadriceps；**不反應治療**'],
        ['PM', '一定上升', 'Endomysial CD8、MHC-I', '罕見；CK 正常要想 IBM']
      ]
    },
    note: 'CK > 2000 幾乎都是 myopathy；肌力正常 + ESR 高 + CK 正常 -> PMR'
  },
  {
    id: 'dm-msa',
    title: 'DM myositis-specific antibodies',
    table: {
      head: ['Antibody', '特徵'],
      rows: [
        ['**Mi-2**', 'Florid rash；**治療反應好、預後佳**'],
        ['**MDA5**', '**Amyopathic**、palmar rash、**皮膚缺血潰瘍**、**rapidly progressive ILD**'],
        ['**TIF1-gamma**', '**成人 cancer-associated DM**（spec 89%）'],
        ['**NXP-2**', '**Calcinosis**、edema、dysphagia；cancer'],
        ['**SAE**', 'Cancer 14-57%；常只有皮疹']
      ]
    },
    points: [
      '**成人 DM cancer ~15%，前 2-3 年**',
      '皮疹：heliotrope、**Gottron papules**、V-sign、shawl、nailfold telangiectasia'
    ]
  },
  {
    id: 'im-tx',
    title: 'Myositis 治療',
    points: [
      '**Prednisone 0.75-1.5 mg/kg**（常 60 mg）；嚴重或 ILD/myocarditis：先 IV MP 1 g x 3',
      '維持 3-6 個月再慢慢減；**依客觀肌力，不依 CK**',
      'Second-line：**MTX**（最常用）、AZA（6-18 個月才見效）、**MMF（ILD 首選）**',
      '**IVIG**：DM 可 first-line（ProDERM）；**anti-HMGCR 單用有效**',
      'Refractory：rituximab；IMNM 常需 triple（GC + MTX + IVIG）',
      'Steroid myopathy：高劑量時變弱、**CK 正常**、EMG 無 irritability'
    ]
  },
  {
    id: 'imnm',
    title: 'Anti-HMGCR / SRP myopathy',
    points: [
      'Statin（> 50 歲）；也可無 statin（年輕、亞洲），模仿 limb girdle dystrophy',
      '**停 statin 不會改善**（不同於 toxic statin myopathy）',
      '**CK 明顯上升（> 10x）**；biopsy necrosis、少發炎',
      'HMGCR：**IVIG 單用常有效**；做 **malignancy workup**',
      'SRP：亞急性、侵襲性、難治'
    ]
  },
  {
    id: 'ibm',
    title: 'Inclusion body myositis',
    points: [
      '**> 50 歲最常見 myopathy**；男性較多',
      '**Finger/wrist flexors + quadriceps**；常**不對稱**；**dysphagia**',
      'CK 正常或 < 10x；**anti-cN-1A** 高度特異；LGL',
      'MRI：vastus medialis/lateralis 受侵犯、**rectus femoris 保留**',
      'Biopsy：**rimmed vacuoles**、**p62**、TDP-43、CD8+ 侵入；20-30% 看不到 vacuoles',
      '**對免疫治療無反應**；PT、OT、swallowing therapy、cricopharyngeal myotomy',
      '~15 年需代步；無 cancer 風險增加'
    ]
  }
]);

RPG.registerCase({
  id: 'myo-01',
  chapter: '377',
  title: '紫色的眼皮',
  patient: '58 歲女性 · 花店老闆',
  summary: '眼皮紫紫的、手指關節長紅疹，最近梳頭髮手舉不起來。',
  cards: ['dm-path', 'dm-msa', 'im-types', 'im-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '陳老闆娘兩個月前開始眼皮浮腫、紫紫的，以為是花粉過敏。',
        '「現在梳頭髮手舉不起來，從椅子站起來要扶東西。吞東西偶爾會嗆到。」',
        '她說背後也一直癢。'
      ],
      clue: ['58F；眼皮紫色浮腫', '**Proximal weakness**（梳頭、起身困難）', '**Dysphagia**', '背部搔癢'],
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你仔細檢查皮膚與肌力。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'eye', group: '皮膚', label: '眼瞼', key: true, reveal: true,
            result: '**Heliotrope rash** + periorbital edema', clue: '**Heliotrope rash**',
            miss: 'DM 的特徵皮疹要找。' },
          { id: 'hand', group: '皮膚', label: '手背指節、甲床', key: true, reveal: true,
            result: '**Gottron papules**；甲床 **dilated capillaries**', clue: '**Gottron papules** + nailfold capillaries',
            miss: 'Gottron papules + heliotrope + nailfold 擴張 = DM 診斷。' },
          { id: 'trunk', group: '皮膚', label: '前胸、後頸肩', result: '**V-sign** 與 **shawl sign**', clue: 'V-sign、shawl sign' },
          { id: 'power', group: '肌力', label: '近端與遠端肌力', key: true, reveal: true,
            result: '肩外展、髖屈曲 **4-/5**；遠端 5/5；對稱', clue: '**Symmetric proximal weakness**',
            miss: '一定要客觀測量肌力分布，這是後續調藥的依據。' },
          { id: 'neck', group: '肌力', label: '頸屈肌', result: '4/5' },
          { id: 'swallow', group: '其他', label: '吞嚥評估', result: '水試驗輕度嗆咳' },
          { id: 'lung', group: '其他', label: '肺部聽診', result: '清晰' },
          { id: 'breast', group: '其他', label: '乳房與淋巴結', result: '無腫塊' },
          { id: 'sensory', group: '神經', label: '感覺、反射', result: '正常' }
        ]
      }
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'cancer',
        options: [
          { id: 'ck', group: '血液', label: 'CK、aldolase', key: true, reveal: true,
            result: 'CK **3,800** U/L；aldolase 上升', clue: '**CK 3,800**',
            miss: 'CK 是肌肉破壞最敏感的指標。' },
          { id: 'msa', group: '抗體', label: 'Myositis-specific antibody panel', key: true, reveal: true,
            result: '**Anti-TIF1-gamma 陽性**', clue: '**Anti-TIF1-gamma (+)**',
            miss: 'MSA 決定亞型與風險（cancer、ILD），一定要驗。' },
          { id: 'ana', group: '抗體', label: 'ANA', result: '1:160 speckled' },
          { id: 'pft', group: '肺', label: 'PFT + chest CT', key: true, reveal: true,
            result: '無 ILD', clue: '無 ILD',
            miss: 'DM 要評估 ILD。' },
          { id: 'ecg', group: '心臟', label: 'ECG、troponin', result: '正常' },
          { id: 'emg', group: '電生理', label: 'EMG', result: 'Fibrillations、positive sharp waves；small polyphasic MUPs' },
          { id: 'mri', group: '影像', label: 'Thigh MRI (STIR)', result: '雙側大腿肌肉 edema' },
          { id: 'bx', group: '病理', label: 'Muscle biopsy', result: '**Perifascicular atrophy**；**MxA** 陽性', clue: 'Perifascicular atrophy、MxA (+)' },
          { id: 'tsh', group: '血液', label: 'TSH', result: '正常' }
        ]
      }
    },
    cancer: {
      text: 'DM 合併 anti-TIF1-gamma。接下來？',
      choices: [
        { label: '**完整惡性腫瘤篩檢**：CT chest/abdomen/pelvis、乳房攝影、婦科超音波 + CA-125、大腸鏡；前 2-3 年持續警覺', next: 'cancer_res' },
        { label: '年齡相符的常規篩檢就好（做過的就不用）', next: 'cancer_basic' }
      ]
    },
    cancer_basic: {
      text: '主治醫師搖頭。',
      feedback: 'Anti-TIF1-gamma 是成人 cancer-associated DM 的標記（specificity 89%）。成人 DM 約 15% 有惡性腫瘤，多在前 2-3 年。要加強篩檢。',
      choices: [{ label: '重新決定', next: 'cancer' }]
    },
    cancer_res: {
      text: '婦科超音波：左側卵巢 6 cm 複雜性腫瘤，CA-125 **412**。',
      clue: '**Ovarian mass + CA-125 412**',
      choices: [{ label: '決定治療', next: 'tx' }]
    },
    tx: {
      text: '婦癌科安排手術。肌炎怎麼治療？',
      choices: [
        { label: '**治療癌症**（手術 + 化療）；同時 prednisone ~60 mg/day；因 dysphagia 加 **IVIG**（或 MTX）', next: 'end_good' },
        { label: '先治肌炎，癌症等肌力恢復再處理', next: 'tx_delay' },
        { label: 'Prednisone 依 CK 下降速度調整', next: 'tx_ck' }
      ]
    },
    tx_delay: {
      text: '主治醫師搖頭。',
      feedback: 'Paraneoplastic DM 治療腫瘤本身是核心，常能改善肌炎。不應延誤癌症治療。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_ck: {
      text: '主治醫師提醒：',
      feedback: '調藥要依客觀的肌力檢查，不是 CK 或病人的主觀感受。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '手術證實 high-grade serous ovarian carcinoma，完成化療。肌力四個月內恢復到 5-/5，吞嚥正常。Prednisone 逐步減到 7.5 mg。',
      ending: {
        grade: 'good',
        title: 'Paraneoplastic dermatomyositis (anti-TIF1-gamma)',
        pearls: [
          'Heliotrope + Gottron papules + nailfold capillaries = DM',
          'Anti-TIF1-gamma、NXP-2、SAE -> 加強癌症篩檢；成人 DM ~15% cancer',
          'Prednisone 0.75-1.5 mg/kg；dysphagia 等嚴重表現加 second-line 或 IVIG',
          '依肌力調藥，不依 CK'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'myo-02',
  chapter: '377',
  title: '停了 statin 還是沒力',
  patient: '63 歲女性 · 退休公務員',
  summary: '吃降膽固醇藥兩年，三個月前開始蹲下站不起來。藥停了一個多月還是一樣。',
  cards: ['im-path', 'imnm', 'im-types', 'im-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '林女士服用 atorvastatin 40 mg 兩年。三個月前開始蹲下站不起來、上樓梯困難。',
        '診所驗了 CK **9,200**，說是 statin 副作用，叫她停藥。',
        '「停藥六週了，還是一樣沒力，甚至更差。」'
      ],
      clue: ['63F；**Atorvastatin** 2 年', '3 個月 **proximal weakness**', 'CK 9,200；**停 statin 6 週無改善**'],
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你開始檢查。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'power', group: '肌力', label: '近端與遠端肌力', key: true, reveal: true,
            result: '髖屈曲 **3+/5**、肩外展 4/5；遠端正常；對稱', clue: '**Symmetric proximal weakness**（下肢為主）',
            miss: '要客觀測量肌力分布。' },
          { id: 'skin', group: '皮膚', label: '皮膚（DM 皮疹）', key: true, reveal: true,
            result: '無 heliotrope、Gottron', clue: '無 DM 皮疹',
            miss: '要排除 DM。' },
          { id: 'hand', group: '皮膚', label: '手（mechanic’s hands）', result: '正常' },
          { id: 'atrophy', group: '肌力', label: '肌肉萎縮、fasciculations', result: '大腿輕度萎縮；無 fasciculations' },
          { id: 'fatigue', group: '神經', label: 'Fatigability、眼外肌', result: '無' },
          { id: 'reflex', group: '神經', label: '反射、感覺', result: '正常' }
        ]
      }
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'ck', group: '血液', label: 'CK（重驗）', key: true, reveal: true,
            result: '**11,400** U/L', clue: '**CK 11,400**（停 statin 後更高）',
            miss: '停藥後 CK 的變化很關鍵。' },
          { id: 'hmgcr', group: '抗體', label: 'Anti-HMGCR、anti-SRP', key: true, reveal: true,
            result: '**Anti-HMGCR 強陽性**；anti-SRP 陰性', clue: '**Anti-HMGCR (+)**',
            miss: '停 statin 仍持續惡化，要驗 anti-HMGCR。' },
          { id: 'msa', group: '抗體', label: 'Other MSA（Jo-1、Mi-2 等）', result: '陰性' },
          { id: 'tsh', group: '血液', label: 'TSH', key: true, reveal: true,
            result: '正常', clue: 'TSH 正常',
            miss: 'Hypothyroidism 也會造成近端無力與 CK 上升。' },
          { id: 'mri', group: '影像', label: 'Thigh MRI', result: '多處肌肉 edema' },
          { id: 'bx', group: '病理', label: 'Muscle biopsy', result: '**Scattered necrotic + regenerating fibers**，發炎細胞極少；MAC 於 sarcolemma', clue: 'Biopsy：**necrotizing myopathy**' },
          { id: 'ct', group: '其他', label: 'Malignancy workup（CT 等）', key: true, reveal: true,
            result: '無惡性腫瘤', clue: 'Cancer workup 陰性',
            miss: 'Anti-HMGCR myopathy 可能增加癌症風險，要做 malignancy workup。' },
          { id: 'genetic', group: '其他', label: 'Muscular dystrophy gene panel', result: '（送驗中）', waste: '臨床、抗體、病理已經很清楚。' }
        ]
      }
    },
    dx: {
      text: 'Anti-HMGCR immune-mediated necrotizing myopathy。治療？',
      choices: [
        { label: '**IVIG**（2 g/kg，每月）為主，必要時加 prednisone/MTX；**永遠不再用 statin**', next: 'end_good' },
        { label: '再停 statin 三個月觀察', next: 'dx_wait' },
        { label: 'Prednisone 10 mg 就好', next: 'dx_low' }
      ]
    },
    dx_wait: {
      text: '主治醫師搖頭。',
      feedback: '這不是 toxic statin myopathy。Anti-HMGCR IMNM 停 statin 不會改善，需要免疫治療。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    dx_low: {
      text: '主治醫師搖頭。',
      feedback: 'IMNM 常常難治，需要積極治療。Anti-HMGCR 對 IVIG 單用常有好反應，可能是首選。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: 'IVIG 三個療程後，林女士可以自己從椅子站起來，CK 降到 900。半年後肌力 5-/5。膽固醇改用非 statin 藥物控制。',
      ending: {
        grade: 'good',
        title: 'Anti-HMGCR necrotizing myopathy',
        pearls: [
          'Statin 後近端無力，停藥後仍惡化 -> anti-HMGCR',
          'CK > 10x；biopsy necrosis、少發炎',
          'IVIG 單用常有效；做 malignancy workup',
          '不同於 toxic statin myopathy'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'myo-03',
  chapter: '377',
  title: '握不住的高爾夫球桿',
  patient: '71 歲男性 · 退休建築師',
  summary: '三年來握力越來越差，最近膝蓋會突然軟掉跌倒。之前吃過一年類固醇沒效。',
  cards: ['im-path', 'ibm', 'im-types'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '陳先生三年前發現高爾夫球桿握不緊，接著開瓶蓋、扣扣子都變困難。去年開始膝蓋偶爾突然軟掉，跌了好幾次。',
        '兩年前外院診斷「polymyositis」，吃了一年 prednisone，「完全沒有變好，還胖了十公斤。」',
        '最近吃東西也容易卡住。'
      ],
      clue: ['71M；**3 年緩慢進展**', '**握力下降**（finger flexors）', '**膝蓋軟掉、跌倒**（quadriceps）', '**Prednisone 1 年無效**', 'Dysphagia'],
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你仔細檢查肌力分布。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'finger', group: '肌力', label: '手指屈肌（FDP、FDS）、手腕屈肌', key: true, reveal: true,
            result: '右 FDP **2/5**、左 3/5；腕屈肌 4/5；**不對稱**', clue: '**Asymmetric finger flexor weakness**',
            miss: '握力差要測手指屈肌，IBM 的特徵就在這裡。' },
          { id: 'quad', group: '肌力', label: 'Quadriceps', key: true, reveal: true,
            result: '右 **3/5**、左 4/5', clue: '**Quadriceps weakness**',
            miss: '膝蓋軟掉要測 quadriceps。' },
          { id: 'hip', group: '肌力', label: '髖屈肌、肩外展', result: '4+/5' },
          { id: 'atrophy', group: '肌力', label: '前臂與大腿萎縮', result: '前臂掌側與大腿內側萎縮', clue: 'Forearm + medial thigh atrophy' },
          { id: 'skin', group: '皮膚', label: '皮膚', result: '無皮疹；Cushingoid 外觀' },
          { id: 'fasc', group: '神經', label: 'Fasciculations、反射', result: '無 fasciculations；膝反射減弱' },
          { id: 'sicca', group: '其他', label: '口眼乾燥', result: '輕度口乾' }
        ]
      }
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'ck', group: '血液', label: 'CK', key: true, reveal: true,
            result: '**620** U/L（約 3x）', clue: 'CK 620（< 10x）',
            miss: 'CK 的高低幫助區分 IBM 與其他 IM。' },
          { id: 'cn1a', group: '抗體', label: 'Anti-cN-1A', key: true, reveal: true,
            result: '**陽性**', clue: '**Anti-cN-1A (+)**',
            miss: 'Anti-cN-1A 是 IBM 高度特異的血液標記。' },
          { id: 'msa', group: '抗體', label: 'MSA panel、anti-HMGCR', result: '陰性' },
          { id: 'mri', group: '影像', label: 'Thigh MRI', key: true, reveal: true,
            result: 'Vastus medialis/lateralis 脂肪化，**rectus femoris 保留**', clue: 'MRI：**rectus femoris sparing**',
            miss: 'MRI 的肌肉分布是 IBM 的重要線索。' },
          { id: 'bx', group: '病理', label: 'Muscle biopsy（重新判讀 + 特殊染色）', key: true, reveal: true,
            result: 'Endomysial CD8+ T 侵入 nonnecrotic fibers；**rimmed vacuoles**；**p62 inclusions**；COX-negative fibers', clue: '**Rimmed vacuoles、p62**',
            miss: '先前的 PM 診斷可能是錯的，需要重新看病理、做 p62 等染色。' },
          { id: 'flow', group: '血液', label: 'Flow cytometry（LGL）', result: 'Large granular lymphocytes 增加' },
          { id: 'emg', group: '電生理', label: 'EMG', result: '混合 short 與 large long-duration MUPs' },
          { id: 'ct', group: '其他', label: 'Whole-body CT 找腫瘤', result: '正常', waste: 'IBM 沒有增加惡性腫瘤風險。' }
        ]
      }
    },
    dx: {
      text: '診斷 inclusion body myositis。陳先生問：「那要換更強的藥嗎？」',
      choices: [
        { label: '說明 IBM **對免疫治療通常無反應**；逐步停 prednisone；**PT、OT、跌倒預防**、**swallowing therapy**（必要時 cricopharyngeal myotomy）', next: 'end_good' },
        { label: '加 methotrexate 和 IVIG 積極治療', next: 'dx_immuno' },
        { label: 'Prednisone 加到 1 mg/kg 再試一次', next: 'dx_gc' }
      ]
    },
    dx_immuno: {
      text: '主治醫師搖頭。',
      feedback: 'IBM 對已知的 immunotherapy 通常沒有反應，只會增加副作用。重點是復健、吞嚥治療與預防跌倒。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    dx_gc: {
      text: '主治醫師搖頭。',
      feedback: '他已經用了一年 prednisone 沒效，只得到副作用。高劑量 GC 無效時要想 IBM，而不是再加藥。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: 'Prednisone 逐步停掉，體重回落。物理治療師幫他配了膝支架與助行器，半年內沒有再跌倒。吞嚥治療後進食順利多了。',
      ending: {
        grade: 'good',
        title: 'Inclusion body myositis',
        pearls: [
          '> 50 歲男性；finger flexors + quadriceps、不對稱、dysphagia',
          'CK < 10x；anti-cN-1A；rimmed vacuoles、p62',
          '高劑量 GC 無效的「PM」要想 IBM',
          '免疫治療無效；PT、OT、swallowing therapy'
        ]
      }
    }
  }
});
