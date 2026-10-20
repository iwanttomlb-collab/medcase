// ID 04 Osteomyelitis: hematogenous, vertebral, contiguous, prosthetic device, chronic.
// Source: Washington Manual Ch 14 (source/Washington ID.txt, lines 211-293, Table 14-2).

RPG.registerCards('ID4', [
  {
    id: 'id-osteo-path',
    title: 'Osteomyelitis 致病機轉',
    points: [
      '三條路徑：**血行**（兒童長骨幹骺端、成人**脊椎**）、**鄰近感染**（褥瘡、糖尿病足、術後）、**直接植入**（開放性骨折、手術）',
      'S. aureus 有黏附骨基質的 **adhesins**（collagen、fibronectin binding），可以躲進 osteoblast 細胞內',
      '發炎與骨內壓上升 -> 血流中斷 -> **死骨（sequestrum）**；骨膜反應新生骨包圍 -> **involucrum**',
      '死骨沒有血流、抗生素到不了，表面形成 **biofilm** -> 慢性骨髓炎需要**手術移除死骨**',
      '**人工植入物**上的 biofilm 讓細菌處於休眠、對抗生素耐受 -> 很少只靠藥物根除；**rifampin** 能穿透 biofilm（但必須合併其他藥，單用馬上抗藥）',
      '糖尿病、周邊血管病：血流差、傷口不癒 -> 常需要血管重建、清創或截肢',
      '血紅素病變（sickle cell）：骨梗塞 + 腸道缺血讓 **Salmonella** 入血'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-osteo',
    title: 'Osteomyelitis：診斷與治療',
    points: [
      '想到它：骨頭上方的皮膚軟組織感染；**局部骨痛 + 發燒或 sepsis**',
      '診斷：潰瘍見到**外露骨頭**；影像（X 光、骨掃描、**MRI**）',
      '**骨切片與培養**，可能的話在**抗生素前**做 -> 病原導向治療',
      '**ESR、CRP** 通常明顯上升，可追蹤治療反應'
    ],
    table: {
      head: ['病原', '治療'],
      rows: [
        ['**MSSA**', 'IV β-lactam：**oxacillin、cefazolin**'],
        ['**MRSA**', '**Vancomycin、daptomycin、linezolid**'],
        ['口服骨頭濃度好', '**TMP-SMX、clindamycin、doxycycline**'],
        ['**GNB**', '**FQ**（IV 或 PO，骨穿透與生體可用率都好）或 3 代 cephalosporin']
      ]
    },
    note: '最佳療程不確定；通常**至少 4-6 週高劑量**。先 IV，病原敏感且能達到殺菌濃度時可**提早轉口服**。'
  },
  {
    id: 'id-osteo-types',
    title: 'Osteomyelitis 的類型（Table 14-2）',
    table: {
      head: ['類型', '病原', '處置重點'],
      rows: [
        ['**急性血行性**', 'S. aureus', '沒有異物時可只用抗生素'],
        ['**脊椎**', 'S. aureus、GNB、**M. tuberculosis**', '**停抗生素下切片**（優先）指導治療；可只用抗生素'],
        ['**鄰近感染**', 'S. aureus、GNB、**CoNS**（術後）、**厭氧/多菌**（薦骨褥瘡、糖尿病）', 'DM、PAD 很少只靠抗生素治好 -> **血管重建、清創、截肢**；不能手術 -> 長期抑制治療；高壓氧可能輔助'],
        ['**人工植入物**', 'S. aureus、CoNS', '很少只靠抗生素根除，通常要**移除植入物**；無法移除 -> **加 rifampin 300 mg PO q8-12h** + 長期抑制'],
        ['**血紅素病變**', 'S. aureus、**Salmonella**', ''],
        ['**慢性**', 'GNB（死骨）、S. aureus', '**手術移除死骨** + 抗生素'],
        ['**培養陰性**', '回顧上述病原', '經驗性涵蓋 S. aureus 與其他可能病原']
      ]
    }
  }
]);

RPG.registerCase({
  id: 'id4-vertebral',
  chapter: 'ID4',
  title: '越來越痛的腰',
  patient: '61 歲男性 · 洗腎病人',
  summary: '腰痛一個月，晚上痛到睡不著，偶爾發燒。',
  cards: ['id-osteo-path', 'id-osteo', 'id-osteo-types'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '腎臟科病房會診。曾先生洗腎五年，用 AV fistula。腰痛一個月，**夜間痛**、躺著也痛，最近兩週偶爾低燒 38°C。',
        'T 37.9°C，生命徵象穩定。L3-L4 棘突**叩擊痛**，下肢肌力正常。',
        'ESR 98、CRP 12.4。MRI：**L3-L4 椎體骨髓炎 + 椎間盤炎**，沒有硬膜外膿瘍。'
      ],
      clue: ['61M；洗腎', '腰痛 1 個月、**夜間痛**、低燒', '**MRI：L3-L4 vertebral osteomyelitis/discitis**；無 epidural abscess', 'ESR 98、CRP 12.4；**生命徵象穩定、神經學正常**'],
      choices: [{ label: '決定下一步', next: 'workup' }]
    },
    workup: {
      text: '他穩定、神經學正常。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'plan',
        options: [
          { id: 'bcx', group: '培養', label: '血液培養 x 2', key: true, reveal: true,
            result: '**陰性**', clue: '血液培養陰性',
            miss: '脊椎骨髓炎多由菌血症而來，先抽血液培養；陽性的話可能就不需要切片。' },
          { id: 'tb', group: '檢驗', label: 'IGRA、胸部 X 光', key: true, reveal: true,
            result: 'IGRA 陰性；CXR 正常', clue: 'IGRA (-)',
            miss: '脊椎骨髓炎的鑑別一定包括 **M. tuberculosis**。' },
          { id: 'neuro', group: '理學', label: '詳細神經學檢查', key: true, reveal: true,
            result: '正常', clue: '神經學正常',
            miss: '要排除脊髓壓迫，有神經學缺損是急症。' },
          { id: 'empiric', group: '用藥', label: '馬上開始 vancomycin + cefepime', result: '已撤回',
            waste: '他穩定、神經學正常。先抗生素會讓骨頭切片培養陰性；應該**停抗生素下切片**。' }
        ]
      }
    },
    plan: {
      text: '血液培養陰性，病人穩定。',
      choices: [
        { label: '**先不給抗生素**，安排 **CT-guided 椎間盤/骨頭切片**送培養（含 AFB、fungal）與病理', next: 'report' },
        { label: '經驗性 vancomycin + ceftriaxone 6 週，不切片', next: 'p_blind' }
      ]
    },
    p_blind: {
      text: '主治醫師搖頭。',
      feedback: '脊椎骨髓炎**優先在沒有抗生素下切片**。病原可能是 S. aureus、GNB 或 TB，治療完全不同，盲目治療六週風險很大。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    report: {
      text: '切片培養：**MSSA**（oxacillin S、cefazolin S）。病理：急性骨髓炎，沒有肉芽腫。TTE 沒有 vegetation。',
      clue: ['切片：**MSSA**', 'TTE 無 vegetation'],
      choices: [
        { label: '**Cefazolin IV**（洗腎後給藥），**至少 6 週**；追蹤 CRP', next: 'end_good' },
        { label: 'Vancomycin 6 週，洗腎時給比較方便', next: 'r_vanco' },
        { label: 'Cefazolin 2 週後停藥', next: 'r_short' }
      ]
    },
    r_vanco: {
      text: '主治醫師搖頭。',
      feedback: '**MSSA 用 β-lactam**（oxacillin、cefazolin），效果比 vancomycin 好。Cefazolin 一樣可以在洗腎後給。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    r_short: {
      text: '主治醫師搖頭。',
      feedback: '骨髓炎通常要**至少 4-6 週**高劑量治療。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    end_good: {
      text: '六週後 CRP 回到 0.6，腰痛明顯改善，可以正常走路。',
      ending: {
        grade: 'good',
        title: 'MSSA vertebral osteomyelitis',
        pearls: [
          '穩定、無神經缺損：先不給抗生素，停藥下切片',
          '鑑別：S. aureus、GNB、TB',
          'MSSA：cefazolin 或 oxacillin，至少 4-6 週',
          'ESR、CRP 追蹤治療反應'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id4-pji',
  chapter: 'ID4',
  title: '換膝蓋兩年後的傷口',
  patient: '78 歲女性 · 右膝人工關節',
  summary: '右膝換人工關節兩年，最近膝蓋一直痛，傷口旁邊開了個小洞在流水。',
  cards: ['id-osteo-path', 'id-osteo-types', 'id-osteo'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '骨科門診會診。王奶奶兩年前右膝 TKA。半年來膝蓋持續痛，最近三週傷口旁出現一個**小洞（sinus tract）**，一直流黃色液體。',
        '沒有發燒。CRP 6.8。X 光：假體周圍**透亮帶**。',
        '她有嚴重心衰竭（EF 25%），麻醉科評估**大手術風險非常高**。'
      ],
      clue: ['78F；TKA 2 年', '慢性疼痛 + **sinus tract**', 'X 光假體周圍透亮帶；CRP 6.8', '**手術風險高**（EF 25%）'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '有 sinus tract 就可以診斷人工關節感染。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'plan',
        options: [
          { id: 'tap', group: '培養', label: '**關節穿刺**：細胞數、培養', key: true, reveal: true,
            result: 'WBC 42,000（PMN 90%）；培養 **MSSA**（rifampin S）', clue: '關節液：**MSSA**（rifampin S）',
            miss: '關節液培養是確定病原的關鍵。' },
          { id: 'sinus', group: '培養', label: 'Sinus tract 分泌物拭子培養', result: '已撤回',
            waste: 'Sinus tract 表面會長出定植菌，結果不可靠。' },
          { id: 'bcx', group: '培養', label: '血液培養', result: '陰性' }
        ]
      }
    },
    plan: {
      text: 'MSSA 人工關節感染。理想的處理是什麼？她的情況又怎麼調整？',
      choices: [
        { label: '理想上要**移除假體**；她無法承受，所以**清創保留假體** + IV β-lactam **加 rifampin**，之後**長期口服抑制**', next: 'end_good' },
        { label: '不用開刀，打 6 週 cefazolin 就可以根除', next: 'p_abx' },
        { label: 'Rifampin 單用 3 個月', next: 'p_rif' }
      ]
    },
    p_abx: {
      text: '主治醫師搖頭。',
      feedback: '人工植入物上的 biofilm 讓感染**很少只靠抗生素根除**，通常要移除植入物；不能移除時要**加 rifampin** 並長期抑制。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    p_rif: {
      text: '主治醫師搖頭。',
      feedback: '**Rifampin 不能單用**，細菌很快就會抗藥。要合併 β-lactam（或其他有效藥）。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    end_good: {
      text: '關節鏡清創後，cefazolin + rifampin 六週，之後改口服 cephalexin 長期抑制。一年後膝蓋可以走路，sinus tract 癒合。',
      ending: {
        grade: 'good',
        title: 'Prosthetic joint infection（MSSA）',
        pearls: [
          'Sinus tract 可診斷人工關節感染；關節液培養，不要用 sinus 拭子',
          'Biofilm -> 很少只靠抗生素根除，通常要移除植入物',
          '無法移除：加 rifampin（300 mg q8-12h，不能單用）+ 長期抑制治療'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id4-chronic',
  chapter: 'ID4',
  title: '十年前的車禍',
  patient: '45 歲男性 · 貨車司機',
  summary: '十年前小腿開放性骨折，傷口反覆流膿，這次又紅又腫。',
  cards: ['id-osteo-path', 'id-osteo-types', 'id-osteo'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '骨科病房會診。許先生十年前車禍**左脛骨開放性骨折**，內固定後拆除。這幾年傷口一處**反覆流膿**，每次吃抗生素好一陣子又復發。',
        '沒有發燒。X 光與 CT：脛骨中段**死骨（sequestrum）**，周圍硬化。'
      ],
      clue: ['45M；**開放性骨折**史', '反覆流膿，抗生素後復發', '**CT：sequestrum**'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '慢性骨髓炎。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'plan',
        options: [
          { id: 'bone', group: '培養', label: '**手術取骨頭**培養與病理', key: true, reveal: true,
            result: '**Pseudomonas aeruginosa**（cipro S、ceftazidime S）', clue: '骨頭：**P. aeruginosa**（cipro S）',
            miss: '骨頭培養（停藥下）才能指導長期治療。' },
          { id: 'swab', group: '培養', label: '瘻管分泌物拭子', result: '已撤回',
            waste: '瘻管拭子長出的常是定植菌，和骨頭裡的病原不一致。' },
          { id: 'esr', group: '檢驗', label: 'ESR、CRP', result: 'ESR 62、CRP 3.1' }
        ]
      }
    },
    plan: {
      text: 'P. aeruginosa 慢性骨髓炎合併死骨。治療？',
      choices: [
        { label: '**手術移除死骨**、清創 + 依藥敏用藥（例如 **ciprofloxacin**，骨穿透與口服生體可用率好）', next: 'end_good' },
        { label: '不開刀，IV ceftazidime 12 週', next: 'p_noop' },
        { label: '清創 + TMP-SMX', next: 'p_sxt' }
      ]
    },
    p_noop: {
      text: '主治醫師搖頭。',
      feedback: '死骨沒有血流、抗生素到不了，這就是他每次停藥就復發的原因。**慢性骨髓炎要手術移除死骨**。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    p_sxt: {
      text: '主治醫師搖頭。',
      feedback: 'TMP-SMX 不涵蓋 Pseudomonas。GNB 骨髓炎可用 **FQ**（骨穿透、生體可用率好）或依藥敏的 β-lactam。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    end_good: {
      text: '清除死骨並用抗生素骨水泥填補，接著 ciprofloxacin 治療。兩年追蹤沒有再流膿。',
      ending: {
        grade: 'good',
        title: 'Chronic osteomyelitis with sequestrum',
        pearls: [
          '慢性骨髓炎：手術移除死骨 + 抗生素',
          '骨頭培養，不用瘻管拭子',
          'GNB 骨髓炎：FQ（骨穿透、生體可用率佳）或 3 代 cephalosporin'
        ]
      }
    }
  }
});
