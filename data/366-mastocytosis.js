// Ch 366 Mastocytosis. Source notes: notes/366-mastocytosis.md

RPG.registerCards('366', [
  {
    id: 'mast-path',
    title: 'Mastocytosis 致病機轉',
    points: [
      '**KIT** = stem cell factor receptor；**SCF/KIT 是 mast cell 發育與存活所必需**',
      '**Somatic gain-of-function KIT 突變**（**D816V > 90%**）-> 不依賴配體持續活化 -> clonal mast cells 在皮膚、骨髓、肝、脾、腸累積',
      'Advanced SM 常有其他 myeloid 突變：**TET2、SRSF2、ASXL1、RUNX1**',
      '症狀來源一：**mediator 釋放**（histamine -> flushing、低血壓；胃酸分泌 -> PUD；腸蠕動增加 -> 腹瀉）',
      '症狀來源二：**組織浸潤**（骨髓 -> 骨痛、cytopenia；腸 -> malabsorption）',
      '症狀來源三：**組織反應**（肝、脾、骨髓 fibrosis -> portal HTN；osteoporosis、osteolysis）',
      '異常表現型：**CD25、CD2、CD30**；spindle-shaped morphology',
      '**D816V 位於 kinase activation loop -> imatinib 抗藥**；avapritinib、midostaurin 可抑制'
    ],
    refs: ['Harrison’s Ch 366（Pathogenesis）']
  },
  {
    id: 'masto-class',
    title: 'Mastocytosis 分類',
    points: [
      '**KIT D816V > 90%**；盛行率 ~1/10,000',
      '**兒童 CM**：1 歲內；MPCM、mastocytoma、diffuse CM；**多在青春期前緩解**；~10% 進展 ISM（monomorphic、DCM）',
      '**ISM > 70% 成人**：壽命正常；皮膚病灶 ~80%',
      '**SSM**：>= 2 **B findings**（**tryptase > 200**、骨髓 > 30%、organomegaly 無功能障礙）',
      '**ASM**：>= 1 **C findings**（cytopenias、肝功能異常+腹水、hypersplenism、malabsorption、osteolysis+骨折）',
      'SM-AHNMD（預後看血液病）；MCL 致命；MCS'
    ]
  },
  {
    id: 'masto-dx',
    title: 'Systemic mastocytosis 診斷',
    points: [
      '**1 major + 1 minor，或 3 minor**',
      'Major：骨髓等 **multifocal dense MC infiltrates（> 15/aggregate）**',
      'Minor：**> 25% spindle/atypical**、**CD25/CD2/CD30**、**KIT D816V**、**tryptase > 20 ng/mL**',
      '**Darier sign**：搓揉 MPCM 病灶 -> urtication',
      'DXA（osteoporosis 增加）；鑑別 carcinoid（5-HIAA）、pheo、**HAT**',
      'SM anaphylaxis 以**低血壓**為主；IgE anaphylaxis 才常見 urticaria、angioedema、bronchospasm'
    ]
  },
  {
    id: 'masto-tx',
    title: 'Mastocytosis 治療',
    points: [
      '誘發避免：**alcohol**、溫度、stress、opioids、**NSAIDs**',
      '**H1**（flushing、pruritus）、**H2 或 PPI**（胃酸）、**oral cromolyn**（腹瀉、腹痛）',
      'Aspirin（已知耐受者）減少 flushing（PGD2）；GC 緩解 malabsorption',
      '**Epinephrine autoinjector**；Hymenoptera 反應 + venom IgE -> **終身 VIT**',
      '**Avapritinib**：advanced SM 與 refractory ISM first-line；midostaurin、IFN-alpha、cladribine',
      '**Imatinib 對 D816V 無效**；SCT 用於少數 advanced'
    ]
  }
]);

RPG.registerCase({
  id: 'mast-01',
  chapter: '366',
  title: '喝酒就臉紅的業務',
  patient: '36 歲女性 · 業務經理',
  summary: '一喝酒或洗熱水澡就全身潮紅、心跳快，腿上有很多褐色斑點，最近還骨折。',
  cards: ['mast-path', 'masto-class', 'masto-dx', 'masto-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '蔡小姐應酬時喝一點酒，就全身發紅、心悸、頭暈，有一次在餐廳昏倒。',
        '常常拉肚子、肚子絞痛，胃潰瘍治療過兩次。最近搬箱子時腰椎壓迫性骨折，才 36 歲。',
        '「大腿和肚子上有很多褐色小斑點，十幾年了，皮膚科說是色素痣。」'
      ],
      clue: ['36F；**alcohol、熱水澡** 誘發 flushing、心悸、昏倒', '**Diarrhea**、腹痛；反覆 **peptic ulcer**', '**36 歲 vertebral compression fracture**', '多發褐色斑點十幾年'],
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你檢查她的皮膚。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'skin', group: '皮膚', label: '褐色斑點的型態與分布', key: true, reveal: true,
            result: '大腿、軀幹多發**紅褐色 macules/papules**，大小均一（< 1 cm）', clue: '**Maculopapular cutaneous lesions**（monomorphic）',
            miss: '要親眼看這些斑點。' },
          { id: 'darier', group: '皮膚', label: '搓揉病灶（Darier sign）', key: true, reveal: true,
            result: '數分鐘內**變紅、隆起成 wheal**', clue: '**Darier sign (+)**',
            miss: '搓揉病灶是 mastocytosis 皮膚的經典床邊檢查。' },
          { id: 'abd', group: '腹部', label: '肝脾、淋巴結', result: '肝脾未觸及；無 LAP' },
          { id: 'spine', group: '骨骼', label: '脊椎', result: 'L2 叩痛' },
          { id: 'vitals', group: '一般', label: '生命徵象', result: '正常' }
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
          { id: 'tryp', group: '血液', label: 'Baseline serum tryptase', key: true, reveal: true,
            result: '**48** ng/mL', clue: '**Tryptase 48**（> 20）',
            miss: 'Basal tryptase 是骨髓切片前的非侵入性評估，也是 minor criterion。' },
          { id: 'kit', group: '血液', label: 'KIT D816V（peripheral blood）', key: true, reveal: true,
            result: '**陽性**', clue: '**KIT D816V (+)**',
            miss: 'KIT D816V 是 minor criterion，也決定治療選擇。' },
          { id: 'bm', group: '骨髓', label: 'Bone marrow biopsy + flow', key: true, reveal: true,
            result: '**Multifocal aggregates（> 15 MC）**；> 25% spindle-shaped；**CD25+、CD2+**；骨髓浸潤 10%', clue: '**BM：major criterion + spindle + CD25/CD2**',
            miss: 'SM 需要組織診斷，通常是骨髓。' },
          { id: 'cbc', group: '血液', label: 'CBC、LFT、albumin', result: '正常', clue: '無 cytopenia、肝功能正常' },
          { id: 'dxa', group: '骨骼', label: 'DXA', key: true, reveal: true,
            result: 'L-spine T-score **-3.0**', clue: '**Osteoporosis**',
            miss: 'Mastocytosis osteoporosis 增加，她已經骨折。' },
          { id: 'hiaa', group: '鑑別', label: '24-h urine 5-HIAA、metanephrines', result: '正常', clue: '排除 carcinoid、pheo' },
          { id: 'ige', group: '過敏', label: 'Food IgE panel', result: '陰性', waste: '症狀與特定食物無關，由 alcohol、熱誘發。' }
        ]
      }
    },
    dx: {
      text: 'Major + 3 minor；tryptase 48（< 200）、無 C findings。分類與治療？',
      choices: [
        { label: '**Indolent SM**：避免誘因（alcohol、熱、NSAIDs、opioids）；**H1 + H2/PPI + oral cromolyn**；**epinephrine autoinjector**；osteoporosis 治療', next: 'refractory' },
        { label: 'Aggressive SM：馬上 cladribine', next: 'dx_asm' },
        { label: 'Imatinib', next: 'dx_ima' }
      ]
    },
    dx_asm: {
      text: '主治醫師搖頭。',
      feedback: '她沒有任何 C finding（cytopenia、肝功能異常、malabsorption、大範圍 osteolysis；單純 osteoporosis 不算），是 ISM，壽命正常。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    dx_ima: {
      text: '主治醫師搖頭。',
      feedback: 'KIT D816V 會造成 imatinib 抗藥，大多數 SM 無效。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    refractory: {
      text: '一年後，雖然規律用藥並避免誘因，她仍每週嚴重 flushing、腹瀉，生活大受影響。',
      choices: [
        { label: '考慮 **avapritinib**（ISM refractory symptoms 的 first-line TKI）', next: 'end_good' },
        { label: '長期高劑量 prednisone', next: 'ref_gc' }
      ]
    },
    ref_gc: {
      text: '主治醫師搖頭。',
      feedback: '她已經骨質疏鬆骨折，長期 GC 只會更糟。Avapritinib 能減少骨髓 mast cell burden 並改善 ISM 症狀。',
      choices: [{ label: '重新決定', next: 'refractory' }]
    },
    end_good: {
      text: 'Avapritinib 半年後 tryptase 降到 12，flushing 與腹瀉明顯減少。她也開始 bisphosphonate 治療骨質疏鬆。',
      ending: {
        grade: 'good',
        title: 'Indolent systemic mastocytosis',
        pearls: [
          'Flushing、腹瀉、peptic ulcer、早發 osteoporosis + Darier sign',
          'SM：major + minor（spindle、CD25/CD2、D816V、tryptase > 20）',
          '沒有 C findings = ISM，壽命正常',
          'H1、H2/PPI、cromolyn、epinephrine；refractory -> avapritinib；imatinib 無效'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'mast-02',
  chapter: '366',
  title: '越來越大的肚子',
  patient: '67 歲男性 · 退休公務員',
  summary: '半年瘦了 10 公斤、肚子越來越大，血球越來越低。',
  cards: ['mast-path', 'masto-class', 'masto-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '血液科會診。劉先生半年來體重減輕 10 公斤、一直腹瀉，肚子越來越脹。',
        '兩年前因潮紅、腹瀉被診斷 indolent SM，用 antihistamines 控制。',
        '這次 CBC：Hb **8.6**、PLT **62,000**、ANC 900。'
      ],
      clue: ['67M；已知 ISM', '**Weight loss 10 kg**、diarrhea、腹脹', '**Hb 8.6、PLT 62k、ANC 900**'],
      choices: [{ label: '評估', next: 'labs' }]
    },
    labs: {
      text: '要做哪些評估？',
      checklist: {
        prompt: '勾選你要的項目',
        submit: '送出',
        next: 'dx',
        options: [
          { id: 'tryp', group: '血液', label: 'Serum tryptase', key: true, reveal: true,
            result: '**410** ng/mL', clue: '**Tryptase 410**',
            miss: 'Tryptase 反映 mast cell burden。' },
          { id: 'abd', group: '影像', label: 'Abdominal ultrasound/CT', key: true, reveal: true,
            result: '**Hepatosplenomegaly**、**ascites**；portal vein 擴張', clue: '**Hepatosplenomegaly + ascites**',
            miss: '腹脹要評估肝脾與腹水。' },
          { id: 'lft', group: '血液', label: 'LFT、albumin', key: true, reveal: true,
            result: 'ALP 上升、bilirubin 輕度上升；**albumin 2.6**', clue: '**Impaired liver function**、**hypoalbuminemia**',
            miss: '要知道是否有肝功能受損與吸收不良（C findings）。' },
          { id: 'bm', group: '骨髓', label: 'Bone marrow biopsy', key: true, reveal: true,
            result: 'Mast cell 浸潤 **60%**；無其他血液腫瘤', clue: 'BM MC 浸潤 60%；無 AHNMD',
            miss: '血球下降要重新評估骨髓，也要排除 AHNMD。' },
          { id: 'skel', group: '影像', label: 'Skeletal survey', result: '瀰漫 osteosclerosis；無大範圍 osteolysis' },
          { id: 'hiaa', group: '鑑別', label: '5-HIAA', result: '正常', waste: '已知 SM，這次的問題是 mast cell 浸潤造成器官功能障礙。' }
        ]
      }
    },
    dx: {
      text: 'C findings：cytopenias、hepatomegaly + ascites + 肝功能受損、malabsorption + hypoalbuminemia + 體重減輕。診斷與治療？',
      choices: [
        { label: '**Aggressive SM**：**cytoreductive therapy（avapritinib 或 midostaurin）**；評估 SCT；支持治療', next: 'end_good' },
        { label: '仍是 ISM，加強 antihistamines', next: 'dx_ism' },
        { label: 'Imatinib', next: 'dx_ima' }
      ]
    },
    dx_ism: {
      text: '主治醫師搖頭。',
      feedback: '一個以上 C finding 就是 ASM，預後差，需要 cytoreductive therapy。ISM 進展到 advanced 型雖不常見（~5%），但要持續監測。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    dx_ima: {
      text: '主治醫師搖頭。',
      feedback: 'KIT D816V 讓 imatinib 無效。Avapritinib 或 midostaurin 才是 advanced SM 的選擇。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: 'Avapritinib 三個月後腹水減少、血小板回升到 110k、tryptase 降到 95。血液科同時評估 stem cell transplantation。',
      ending: {
        grade: 'good',
        title: 'Aggressive systemic mastocytosis',
        pearls: [
          'C findings：cytopenias、肝功能異常 + 腹水、hypersplenism、malabsorption、osteolysis + 骨折',
          '>= 1 C finding = ASM，預後差',
          'Avapritinib、midostaurin、cladribine、IFN-alpha；imatinib 無效',
          'ISM 進展少（~5%），但要監測'
        ]
      }
    }
  }
});
