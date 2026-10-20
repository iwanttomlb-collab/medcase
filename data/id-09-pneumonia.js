// ID 09 Pneumonia: CAP (Table 14-9), lung abscess, HAP/VAP.
// Source: Washington Manual Ch 14 (source/Washington ID.txt, lines 929-1019, 2018-2038).

RPG.registerCards('ID9', [
  {
    id: 'id-pna-path',
    title: '肺炎與肺膿瘍 致病機轉',
    points: [
      '多數肺炎來自**吸入**口咽的少量細菌（microaspiration）；咳嗽、纖毛、肺泡巨噬細胞清除不了時就感染',
      '**S. pneumoniae**：polysaccharide capsule 抗吞噬 -> 肺泡內大量 PMN 與滲出 -> **lobar consolidation**；無脾者特別危險',
      '**非典型菌**（Legionella、Mycoplasma、C. pneumoniae）在**細胞內**或沒有 cell wall -> **β-lactam 無效**，要 macrolide、doxycycline 或 FQ',
      '**CA-MRSA**（PVL）與流感後 S. aureus -> **壞死性肺炎**',
      '**HAP/VAP**：住院後口咽被 **GNB、S. aureus** 取代；氣管內管繞過聲門屏障、表面 biofilm -> 抗藥菌',
      '**肺膿瘍**：大量吸入**口腔厭氧菌**（意識障礙、酒精、癲癇、中風 + 牙周病）-> 吸入的肺段（躺著時**下葉上段、上葉後段**）壞死液化 -> 空洞 + 氣液面',
      'Metronidazole 單用治肺膿瘍失敗，因為裡面有**微需氧鏈球菌**（S. anginosus group）'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-cap',
    title: 'CAP：診斷與評估',
    points: [
      '病原：**S. pneumoniae** 為主；H. influenzae、M. catarrhalis；**非典型**（L. pneumophila、C. pneumoniae、M. pneumoniae）**臨床無法區分**；influenza、SARS-CoV-2；**CA-MRSA** 造成嚴重壞死性肺炎',
      '急性（數小時到數天）；症狀 **> 2-3 週**、體重減輕、盜汗 -> 想 **TB、黴菌**',
      '**所有疑似 CAP 照 CXR**',
      '**門診**：不需要進一步微生物檢查（流行時可驗病毒）',
      '**住院**：**抗生素前血液培養**、痰 Gram stain 與培養、**pneumococcal 與 Legionella 尿液抗原**；**HIV 篩檢**',
      '懷疑 TB：痰 AFB、**空氣隔離**；嚴重或治療無效可考慮支氣管鏡',
      '用 **PSI 或 CURB-65** 評估住院與嚴重度',
      '**抗生素越早越好**（到院 4 h 內）；找到病原就**縮窄**',
      '肋膜積水要**抽**（pH、細胞、Gram stain、培養、protein、LDH）；**膿胸要引流**',
      '>= 65 歲與特定疾病者打肺炎鏈球菌疫苗'
    ],
    refs: ['AJRCCM 2019;200:e45（ATS/IDSA CAP 2019）']
  },
  {
    id: 'id-cap-tx',
    title: 'CAP 經驗性治療（Table 14-9）',
    table: {
      head: ['族群', '處方'],
      rows: [
        ['**門診、無共病**、無 MRSA/PsA 危險因子', '**Amoxicillin 1 g PO q8h** 或 **doxycycline 100 mg q12h**（至少 5 天）；或 azithromycin 單用'],
        ['**門診、有共病**', '**Amox-clav、cefpodoxime 或 cefuroxime + doxycycline 或 azithromycin**；或**呼吸道 FQ 單用**（levofloxacin 750 mg、moxifloxacin 400 mg）'],
        ['**住院、非重症**', '**β-lactam**（amp-sulb、**ceftriaxone 1-2 g qd**、cefotaxime、ceftaroline）**+ macrolide**；或呼吸道 FQ 單用'],
        ['**住院、重症**', 'β-lactam + macrolide，或 β-lactam + FQ'],
        ['**呼吸道曾培養出 MRSA**', '**不論嚴重度**加 vancomycin 或 linezolid'],
        ['**呼吸道曾培養出 PsA**', '**不論嚴重度**改 pip-tazo、cefepime、ceftazidime、imipenem、meropenem 或 aztreonam'],
        ['**近期住院 + 90 天內 IV 抗生素**（或本地驗證的危險因子）', '**非重症**：送培養（± MRSA nasal PCR），**先不擴大**；**重症**：擴大涵蓋 MRSA/PsA 並送培養']
      ]
    },
    note: '共病：慢性心、肺、肝、腎病、DM、酒精、惡性腫瘤、無脾。MRSA nasal PCR 與培養用來調整處方。',
    refs: ['AJRCCM 2019;200:e45（ATS/IDSA CAP 2019）']
  },
  {
    id: 'id-lung-abscess',
    title: 'Lung abscess',
    points: [
      '通常來自**吸入口腔菌**：多菌，口腔厭氧菌（Prevotella、Peptostreptococcus、Fusobacterium、Bacteroides、Actinomyces）；S. anginosus、K. pneumoniae、S. aureus（含 CA-MRSA）較少',
      '危險因子：**牙周病**、容易吸入（酒醉、鎮靜藥、癲癇、中風、神經肌肉疾病）',
      '**亞急性**，像 TB：發燒、盜汗、體重減輕、**惡臭或帶血的痰**數週',
      'CXR：空洞 + **氣液面**，位在下葉或上葉後段；CT 看細節',
      '**所有空洞性病灶**都要**呼吸道隔離**並驗 **TB**',
      '治療：**clindamycin**、**β-lactam/BLI**（amp-sulb、pip-tazo、amox-clav）或 **ertapenem**；MRSA 空洞用 linezolid 或 vancomycin',
      '**Metronidazole 單用無效**（微需氧菌），要合併 penicillin',
      '經皮引流或手術**很少需要**：抗生素無效、大膿瘍（> 6 cm）、抗藥菌'
    ]
  },
  {
    id: 'id-hap',
    title: 'HAP 與 VAP',
    points: [
      '**HAP**：入院 **>= 48 h** 後發生、入院時不在潛伏期；**VAP**：插管 **> 48-72 h** 後',
      '最常見：**GNB** 與 **S. aureus**',
      '新的或惡化的肺浸潤 + 發燒、膿性分泌物、呼吸急促、低血氧',
      'HAP：**非侵入性**取樣（咳痰、誘發痰、鼻氣管抽吸）做培養或分子檢驗',
      'VAP：**endotracheal aspirate 半定量培養**為第一步，優先於支氣管鏡取樣',
      '經驗性要涵蓋 **S. aureus（含 MRSA）與 P. aeruginosa**；依培養與藥敏標靶治療',
      '**膿胸要引流**'
    ],
    refs: ['CID 2016;63:e61（IDSA/ATS HAP/VAP 2016）']
  }
]);

RPG.registerCase({
  id: 'id9-cap-op',
  chapter: 'ID9',
  title: '健康的工程師與他的爸爸',
  patient: '42 歲男性；70 歲男性',
  summary: '父子同一週都得了肺炎，都能走進診間。',
  cards: ['id-pna-path', 'id-cap', 'id-cap-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診。陸先生 42 歲，沒有慢性病，三天發燒、咳嗽、右胸痛。T 38.6°C、RR 20、BP 128/80、SpO2 96%，意識清楚。',
        'CXR：**右下葉 consolidation**。BUN 正常。最近沒有住院或用抗生素。'
      ],
      clue: ['42M；**無共病**', 'CAP 右下葉；**CURB-65 0**', '無 MRSA/PsA 危險因子'],
      choices: [{ label: '處置', next: 'son' }]
    },
    son: {
      text: '門診、無共病的 CAP。',
      choices: [
        { label: '**Amoxicillin 1 g PO q8h**（或 doxycycline），至少 5 天；**不需要**痰培養或血液培養', next: 'dad' },
        { label: 'Levofloxacin 750 mg qd', next: 's_fq' },
        { label: '先送痰培養、血液培養、尿液抗原再開藥', next: 's_test' }
      ]
    },
    s_fq: {
      text: '主治醫師搖頭。',
      feedback: '呼吸道 FQ 用在**有共病**的門診病人。健康的人用 **amoxicillin 或 doxycycline** 就好，保留 FQ。',
      choices: [{ label: '重新決定', next: 'son' }]
    },
    s_test: {
      text: '主治醫師搖頭。',
      feedback: '**門診 CAP 不需要進一步微生物檢查**。住院病人才做血液培養、痰培養、尿液抗原。',
      choices: [{ label: '重新決定', next: 'son' }]
    },
    dad: {
      text: '一週後他陪爸爸來：70 歲，**COPD 和糖尿病**，同樣症狀三天。T 38.2°C、RR 22、BP 136/78、SpO2 94%、意識清楚、BUN 18。CXR 左下葉浸潤。最近沒住院、沒用抗生素。',
      clue: ['爸爸：70M，**COPD + DM**；CURB-65 1（年齡）'],
      choices: [
        { label: '門診：**amox-clav + doxycycline（或 azithromycin）**，或**呼吸道 FQ 單用**', next: 'end_good' },
        { label: '跟兒子一樣 amoxicillin', next: 'd_amox' },
        { label: '住院打 vancomycin + pip-tazo', next: 'd_broad' }
      ]
    },
    d_amox: {
      text: '主治醫師搖頭。',
      feedback: '**有共病**（COPD、DM）要用合併療法（amox-clav 或 cephalosporin + doxycycline/macrolide），或呼吸道 FQ 單用。',
      choices: [{ label: '重新決定', next: 'dad' }]
    },
    d_broad: {
      text: '主治醫師搖頭。',
      feedback: 'CURB-65 1、能吃藥，可以門診。他沒有 MRSA 或 PsA 的危險因子，不需要擴大涵蓋。',
      choices: [{ label: '重新決定', next: 'dad' }]
    },
    end_good: {
      text: '父子都在門診痊癒。爸爸補打了肺炎鏈球菌疫苗。',
      ending: {
        grade: 'good',
        title: 'Outpatient CAP',
        pearls: [
          '無共病：amoxicillin 1 g q8h 或 doxycycline，至少 5 天',
          '有共病：β-lactam + doxy/macrolide，或呼吸道 FQ',
          '門診不需要微生物檢查',
          '用 CURB-65 或 PSI 決定住院'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id9-legionella',
  chapter: 'ID9',
  title: '溫泉旅館回來的肺炎',
  patient: '66 歲女性 · 退休護理師',
  summary: '溫泉旅行回來發燒、腹瀉、意識有點混亂，CXR 兩邊都有浸潤。',
  cards: ['id-pna-path', 'id-cap', 'id-cap-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。白女士和朋友去溫泉旅館住了三天，回來第四天高燒 39.6°C、乾咳、**水瀉**、頭痛，今天有點**混亂**。',
        'RR 26、BP 112/70、SpO2 91%。Na **128**、AST 92。CXR：兩側下葉浸潤。'
      ],
      clue: ['66F；**溫泉旅館**', '高燒、乾咳、**腹瀉**、**意識混亂**', '**低血鈉**、轉胺酶上升', '兩側下葉浸潤'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: '住院、非重症 CAP（不需要升壓劑或呼吸器）。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'empiric',
        options: [
          { id: 'bcx', group: '培養', label: '血液培養（抗生素前）', key: true, reveal: true,
            result: '陰性', clue: '血液培養陰性',
            miss: '住院 CAP 抗生素前要抽血液培養。' },
          { id: 'sputum', group: '培養', label: '痰 Gram stain 與培養', key: true, reveal: true,
            result: '少量 PMN，未見優勢菌', clue: '痰 Gram stain 無優勢菌',
            miss: '住院 CAP 要做痰檢查。' },
          { id: 'uag', group: '檢驗', label: '**Pneumococcal、Legionella 尿液抗原**', key: true, reveal: true,
            result: 'Pneumococcal 陰性；**Legionella 陽性**', clue: '**Legionella 尿液抗原 (+)**',
            miss: '住院 CAP 建議驗兩種尿液抗原。' },
          { id: 'hiv', group: '檢驗', label: 'HIV 篩檢', key: true, reveal: true,
            result: '陰性', clue: 'HIV 陰性',
            miss: '住院 CAP 建議 HIV 篩檢。' },
          { id: 'flu', group: '檢驗', label: 'Influenza、SARS-CoV-2 PCR', result: '陰性' }
        ]
      }
    },
    empiric: {
      text: '抗生素（尿液抗原結果出來前）？',
      choices: [
        { label: '**Ceftriaxone 1-2 g qd + azithromycin**', next: 'report' },
        { label: 'Ceftriaxone 單用', next: 'e_mono' }
      ]
    },
    e_mono: {
      text: '主治醫師搖頭。',
      feedback: '住院 CAP 要 **β-lactam + macrolide**（或呼吸道 FQ）涵蓋非典型菌。Legionella 在細胞內，**β-lactam 無效**。',
      choices: [{ label: '重新決定', next: 'empiric' }]
    },
    report: {
      text: 'Legionella 尿液抗原陽性；肺炎鏈球菌陰性、血液培養陰性。第 3 天退燒，意識清楚。',
      choices: [
        { label: '**停 ceftriaxone**，針對 Legionella 用 **azithromycin**（或 levofloxacin）', next: 'end_good' },
        { label: '兩種都繼續', next: 'end_both',
          why: '找到病原就縮窄。Legionella 用 macrolide 或 FQ，ceftriaxone 對它沒有作用。' }
      ]
    },
    end_both: {
      text: '白女士痊癒，但多用了一週不必要的 ceftriaxone。',
      ending: { grade: 'ok', title: 'Legionella 治好了，但沒有縮窄', pearls: ['找到病原就縮窄'] }
    },
    end_good: {
      text: '白女士痊癒出院。衛生局追查溫泉旅館的水塔。',
      ending: {
        grade: 'good',
        title: "Legionnaires’ disease",
        pearls: [
          '住院 CAP：血培養、痰、pneumococcal 與 Legionella 尿液抗原、HIV',
          '住院非重症：β-lactam + macrolide，或呼吸道 FQ',
          'Legionella：macrolide 或 FQ；β-lactam 無效',
          '線索：水源暴露、腹瀉、意識改變、低血鈉'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id9-risk',
  chapter: 'ID9',
  title: '兩個月前住過院',
  patient: '71 歲男性 · 心衰竭',
  summary: '兩個月前住院打過 IV 抗生素，這次又肺炎。急診學弟開了 vancomycin + meropenem。',
  cards: ['id-cap-tx', 'id-cap'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。龔先生有心衰竭，**兩個月前**因為心衰竭住院、期間打過 **IV ceftriaxone**。這次肺炎住院，RR 22、BP 124/70、SpO2 93%（鼻導管 2 L），不需要 ICU。',
        '呼吸道**從來沒有培養出 MRSA 或 Pseudomonas**。急診學弟開了 **vancomycin + meropenem**。'
      ],
      clue: ['71M；**近期住院 + 90 天內 IV 抗生素**', '**非重症** CAP', '從未培養出 MRSA 或 PsA', '急診開 vanco + meropenem'],
      choices: [{ label: '重新評估處方', next: 'decide' }]
    },
    decide: {
      text: '近期住院 + IV 抗生素、非重症。',
      choices: [
        { label: '送**痰培養 + MRSA nasal PCR**，但**先不擴大涵蓋**：改 **ceftriaxone + azithromycin**；培養出 MRSA/PsA 再調整', next: 'report' },
        { label: '有危險因子就要擴大，維持 vanco + meropenem', next: 'd_keep' }
      ]
    },
    d_keep: {
      text: '主治醫師搖頭。',
      feedback: '近期住院 + 90 天內 IV 抗生素的**非重症** CAP：送培養與 MRSA nasal PCR，**不擴大**，除非培養出 MRSA 或 PsA。重症才經驗性擴大。',
      choices: [{ label: '重新決定', next: 'decide' }]
    },
    report: {
      text: 'MRSA nasal PCR **陰性**；痰培養：**S. pneumoniae**（ceftriaxone S）。第 3 天退燒。',
      choices: [
        { label: '續 ceftriaxone（可改口服 amoxicillin），**至少 5 天**、退燒 48 h 後停', next: 'end_good' },
        { label: '改回 vanco + meropenem 以防萬一', next: 'r_back' }
      ]
    },
    r_back: {
      text: '主治醫師搖頭。',
      feedback: '培養已經是 ceftriaxone 敏感的 S. pneumoniae，MRSA nasal PCR 陰性。沒有理由擴大。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    end_good: {
      text: '龔先生第 5 天出院，沒有用到 vancomycin 和 meropenem。',
      ending: {
        grade: 'good',
        title: 'CAP with healthcare exposure, nonsevere',
        pearls: [
          '曾培養出 MRSA/PsA -> 不論嚴重度擴大',
          '近期住院 + 90 天內 IV 抗生素：非重症送培養不擴大；重症擴大',
          'MRSA nasal PCR 幫助決定'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id9-abscess',
  chapter: 'ID9',
  title: '臭痰三週',
  patient: '52 歲男性 · 酒精使用',
  summary: '咳嗽三週，痰很臭，晚上流汗、瘦了好幾公斤。',
  cards: ['id-pna-path', 'id-lung-abscess'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。廖先生每天喝一瓶米酒，常常醉倒。三週來咳嗽，痰**很臭**、偶爾帶血，晚上盜汗，**體重減輕 4 kg**。',
        'T 38.3°C，生命徵象穩定。**牙齒很差**，多顆蛀牙與牙周病。',
        'CXR：**右上葉後段 4 cm 空洞，有氣液面**。'
      ],
      clue: ['52M；**酗酒、常醉倒**', '**惡臭痰** 3 週、盜汗、體重減輕', '**牙周病**', 'RUL 後段**空洞 + 氣液面**'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '空洞性病灶。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'iso', group: '感控', label: '**空氣隔離**', key: true, reveal: true,
            result: '已隔離', clue: '空氣隔離',
            miss: '**所有空洞性肺病灶**都要先呼吸道隔離，直到排除 TB。' },
          { id: 'afb', group: '檢驗', label: '**痰 AFB smear、culture x 3、TB NAAT**', key: true, reveal: true,
            result: 'AFB smear x3 陰性；**NAAT 陰性**', clue: 'TB 排除（AFB、NAAT 陰性）',
            miss: '肺膿瘍與 TB 表現很像，一定要驗。' },
          { id: 'ct', group: '影像', label: 'Chest CT', result: '單一厚壁空洞 4 cm，周圍浸潤，無腫塊' },
          { id: 'hiv', group: '檢驗', label: 'HIV', result: '陰性' },
          { id: 'drain', group: '處置', label: '經皮引流', result: '已撤回',
            waste: '肺膿瘍很少需要引流；抗生素無效、> 6 cm 或抗藥菌才考慮。' }
        ]
      }
    },
    tx: {
      text: 'TB 排除。吸入性肺膿瘍，治療？',
      choices: [
        { label: '**Ampicillin-sulbactam**（或 clindamycin），之後改口服 **amox-clav**；治療牙齒', next: 'end_good' },
        { label: 'Metronidazole 單用（厭氧菌）', next: 't_metro' },
        { label: 'Ceftriaxone 單用', next: 't_cro' }
      ]
    },
    t_metro: {
      text: '主治醫師搖頭。',
      feedback: '**Metronidazole 單用無效**：口腔菌叢裡有微需氧鏈球菌，metronidazole 不涵蓋，要合併 penicillin。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_cro: {
      text: '主治醫師搖頭。',
      feedback: 'Ceftriaxone 對口腔**厭氧菌**涵蓋不足。用 clindamycin、β-lactam/BLI 或 ertapenem。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '數週治療後空洞縮小，廖先生開始戒酒門診並治療牙齒。',
      ending: {
        grade: 'good',
        title: 'Aspiration lung abscess',
        pearls: [
          '吸入 + 牙周病 -> 口腔厭氧菌多菌感染',
          '空洞性病灶 -> 空氣隔離、驗 TB',
          'Clindamycin、BL/BLI、ertapenem；metronidazole 單用無效',
          '很少需要引流（> 6 cm、無效、抗藥菌）'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id9-vap',
  chapter: 'ID9',
  title: '插管第六天的黃痰',
  patient: '64 歲男性 · 腦出血術後',
  summary: '插管第六天，痰變多變黃，發燒，CXR 右下葉新的浸潤。',
  cards: ['id-pna-path', 'id-hap'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '神經外科 ICU。周先生腦出血術後**插管第 6 天**。今天 T 38.7°C，**痰變多、黃稠**，FiO2 從 30% 升到 50%。',
        'CXR：**右下葉新浸潤**。WBC 16,400。'
      ],
      clue: ['64M；**插管第 6 天**', '發燒、膿痰、氧合變差', 'CXR **新浸潤** -> **VAP**'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: 'VAP。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'empiric',
        options: [
          { id: 'eta', group: '培養', label: '**Endotracheal aspirate 半定量培養**', key: true, reveal: true,
            result: '（之後）**P. aeruginosa** 大量（cefepime S、pip-tazo S、cipro S）；**無 S. aureus**', clue: 'ETA：**P. aeruginosa**；無 S. aureus',
            miss: 'VAP 第一步是非侵入性的 endotracheal aspirate 半定量培養。' },
          { id: 'bcx', group: '培養', label: '血液培養', key: true, reveal: true,
            result: '陰性', clue: '血液培養陰性',
            miss: '新發燒要抽血液培養。' },
          { id: 'bal', group: '檢查', label: '先安排支氣管鏡 BAL', result: '已撤回',
            waste: 'Endotracheal aspirate 半定量培養可作為第一步，優先於支氣管鏡取樣。' },
          { id: 'us', group: '影像', label: '胸部超音波看肋膜積水', result: '少量積液，不需穿刺' }
        ]
      }
    },
    empiric: {
      text: '經驗性治療？',
      choices: [
        { label: '涵蓋 **MRSA 與 P. aeruginosa**：**vancomycin + cefepime**（或 pip-tazo）', next: 'report' },
        { label: 'Ceftriaxone + azithromycin', next: 'e_cap' },
        { label: 'Vancomycin 單用', next: 'e_vanco' }
      ]
    },
    e_cap: {
      text: '主治醫師搖頭。',
      feedback: '那是 CAP 的處方。HAP/VAP 最常見 **GNB 與 S. aureus**，經驗性要涵蓋 **MRSA 與 P. aeruginosa**。',
      choices: [{ label: '重新決定', next: 'empiric' }]
    },
    e_vanco: {
      text: '主治醫師搖頭。',
      feedback: 'VAP 經驗性要同時涵蓋 **P. aeruginosa**。',
      choices: [{ label: '重新決定', next: 'empiric' }]
    },
    report: {
      text: '培養：P. aeruginosa（cefepime S），沒有 S. aureus。第 3 天退燒、FiO2 降回 35%。',
      choices: [
        { label: '**停 vancomycin**，續 **cefepime**（依藥敏）', next: 'end_good' },
        { label: '兩種都打完全程', next: 'end_both',
          why: '培養沒有 S. aureus，依培養與藥敏標靶治療，停 vancomycin。' },
        { label: '換成 meropenem，Pseudomonas 要用最強的', next: 'r_mero' }
      ]
    },
    r_mero: {
      text: '主治醫師搖頭。',
      feedback: '這株對 cefepime 敏感，臨床也在改善。沒有理由升級到 carbapenem。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    end_both: {
      text: '肺炎好了，但周先生出現 vancomycin 相關 AKI。',
      ending: { grade: 'ok', title: 'VAP 治好了，但沒有縮窄', pearls: ['依培養停 MRSA 涵蓋'] }
    },
    end_good: {
      text: '周先生順利脫離呼吸器，轉到普通病房。',
      ending: {
        grade: 'good',
        title: 'Pseudomonas VAP',
        pearls: [
          'HAP：入院 >= 48 h；VAP：插管 > 48-72 h',
          'VAP：endotracheal aspirate 半定量培養優先於支氣管鏡',
          '經驗性涵蓋 MRSA + P. aeruginosa；依培養縮窄',
          '膿胸要引流'
        ]
      }
    }
  }
});
