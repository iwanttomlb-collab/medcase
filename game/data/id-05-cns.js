// ID 05 CNS infections: meningitis, encephalitis, brain abscess, neurocysticercosis.
// Source: Washington Manual Ch 14 (source/Washington ID.txt, lines 295-389).

RPG.registerCards('ID5', [
  {
    id: 'id-mening-path',
    title: '細菌性腦膜炎 致病機轉',
    points: [
      '鼻咽部 **colonization** -> 穿過黏膜入血（capsule 抵抗補體與吞噬）-> 菌血症 -> 經脈絡叢與腦微血管穿過 **blood-brain barrier**',
      'CSF 缺乏補體與抗體，細菌可快速增生；細菌溶解釋出 cell wall、LPS -> **IL-1、TNF** -> 大量 neutrophil 進入蜘蛛網膜下腔',
      '後果：**vasogenic + cytotoxic + interstitial edema**、ICP 上升、腦血流自主調節失常、血管炎與梗塞 -> 意識改變、seizure、聽力喪失',
      'CSF 典型變化：PMN 增多、**glucose 下降**（運輸受阻 + 消耗）、protein 上升（BBB 破壞）',
      '**Dexamethasone** 在第一劑抗生素同時給：抗生素殺菌時會釋出大量發炎物質，類固醇壓抑這波反應；只在 **S. pneumoniae** 證實改善神經學預後',
      '**Listeria**：細胞內寄生、靠 cell-mediated immunity 清除 -> 老人、孕婦、免疫低下好發；**cephalosporins 無效**',
      '**N. meningitidis**：**terminal complement（C5-C9）** 形成 MAC 是清除關鍵 -> 缺乏者反覆感染',
      '醫療相關（神經外科術後、外傷、shunt）：皮膚菌（S. aureus、CoNS）與 GNB（P. aeruginosa）直接進入'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-csf',
    title: 'CSF 判讀（Table 14-3）',
    table: {
      head: ['', 'Opening pressure', 'WBC（/uL）', 'Glucose', 'Protein', '診斷'],
      rows: [
        ['正常', '< 18 cmH2O', '0-5', '50-75', '15-40', ''],
        ['**細菌性**', '上升', '100-5,000 **PMN**', '**< 40**', '100-500', 'Gram stain、culture'],
        ['**結核性**', '上升', '50-300 **lymph**', '**< 45**', '50-300', 'AFB smear、culture、TB PCR'],
        ['**Cryptococcal**', '**明顯上升**', '20-500 **lymph**', '**< 40**', '> 45', 'CrAg、India ink、fungal culture'],
        ['**病毒性**', '上升', '10-1,000 **lymph**', '**正常**', '50-100', 'PCR（HSV、VZV、enterovirus）']
      ]
    },
    points: [
      '臨床表現**無法**區分細菌性、病毒性、非感染性 -> 一定要 LP',
      '病毒性早期可以 PMN 為主',
      '**Lymphocytosis + 低 glucose** -> 想 TB 或 fungal，送 AFB、fungal culture',
      'Aseptic meningitis：最常見 **enterovirus**；也有 T. pallidum、HSV、arbovirus、藥物（**NSAIDs、TMP-SMX**）',
      '依情境加驗 CSF **VDRL**（neurosyphilis）'
    ],
    refs: ['CID 2004;39:1267（IDSA bacterial meningitis）']
  },
  {
    id: 'id-mening-emp',
    title: '細菌性腦膜炎：經驗性治療',
    points: [
      '**急症**：不要為了檢查延誤抗生素；先抽**血液培養**，LP 後立即給高劑量 IV 抗生素',
      '**LP 前 CT** 只在：免疫低下、**focal deficit、seizure、意識改變** -> 這時先血培養 + 抗生素，再 CT、再 LP',
      '**Dexamethasone 0.15 mg/kg IV q6h**，與**第一劑抗生素同時**開始；證實是 S. pneumoniae 才繼續'
    ],
    table: {
      head: ['族群', '經驗性用藥'],
      rows: [
        ['**2-50 歲**', '**Ceftriaxone 2 g IV q12h**（或 cefotaxime 2 g q4-6h）+ **vancomycin 15-20 mg/kg IV q8-12h**'],
        ['**> 50 歲**', '上述 + **ampicillin 2 g IV q4h**（Listeria）'],
        ['**免疫低下**', 'Vancomycin + ampicillin + **cefepime 2 g q8h** 或 **meropenem 2 g q8h**'],
        ['**神經外科術後、外傷**', 'Vancomycin + **ceftazidime 2 g q8h** 或 cefepime']
      ]
    },
    note: '注意腦膜炎劑量：ceftriaxone 是 2 g **q12h**，不是一般感染的 1-2 g q24h。',
    refs: ['CID 2004;39:1267（IDSA bacterial meningitis）']
  },
  {
    id: 'id-mening-tx',
    title: '細菌性腦膜炎：依病原治療',
    table: {
      head: ['病原', '治療', '重點'],
      rows: [
        ['**S. pneumoniae**', 'Dexamethasone + ceftriaxone + vancomycin', '**Ceftriaxone MIC < 1 -> 停 vanco**；**PCN MIC < 0.06** -> penicillin G 4 MU IV q4h'],
        ['**N. meningitidis**', 'Ceftriaxone 或 cefotaxime', 'MIC < 0.1 可用 penicillin；替代 meropenem、chloramphenicol；**droplet 隔離 24 h**'],
        ['**L. monocytogenes**', '**Ampicillin 2 g IV q4h，至少 3 週**', '加 gentamicin 有爭議；PCN 過敏 -> **TMP-SMX** 或 meropenem'],
        ['**GNB**（外傷、術後）', 'P. aeruginosa：ceftazidime 或 cefepime 2 g q8h', '敏感菌可用 ceftriaxone；替代 meropenem、ciprofloxacin'],
        ['**S. aureus**', 'MSSA：**oxacillin/nafcillin 2 g IV q4h**；MRSA 或 PCN 過敏：vancomycin', '**1、2 代 cephalosporin 不進 CSF**'],
        ['**HSV**', 'Acyclovir 10 mg/kg IV q8h', 'Enterovirus：支持治療']
      ]
    },
    points: [
      '培養長出病原就**縮窄**經驗性處方',
      '**腦膜炎雙球菌接觸者預防**：household contacts、接觸分泌物的醫護（例如**插管**）-> **ciprofloxacin 500 mg PO 一次**、rifampin 600 mg q12h x 2 d、或 ceftriaxone 250 mg IM 一次',
      '反覆 Neisseria 全身感染 -> 排除 **terminal complement（C5-C9）缺乏**'
    ],
    refs: ['CID 2004;39:1267（IDSA bacterial meningitis）']
  },
  {
    id: 'id-enceph-path',
    title: 'HSV 腦炎 致病機轉',
    points: [
      'Encephalitis 是**腦實質**發炎；腦膜炎是腦膜發炎。前者以意識、行為改變與 seizure 為主，常**沒有**腦膜刺激徵象',
      '**HSV-1** 潛伏於 trigeminal ganglion 或嗅覺路徑；再活化或初次感染沿神經進入 **temporal lobe 內側、orbitofrontal、insula**',
      '病毒直接殺死神經元 + 發炎 -> **出血性壞死**（CSF 可見 RBC）；MRI temporal lobe 訊號',
      '不治療死亡率很高；**延遲 acyclovir 預後變差**',
      '部分病人在 HSV 腦炎後產生 **anti-NMDA receptor 抗體**，出現自體免疫腦炎',
      '其他：VZV（皮節水泡）、enterovirus、狂犬病；非感染：**ADEM**、anti-NMDAR、paraneoplastic、vasculitis'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-enceph',
    title: 'Encephalitis',
    points: [
      '發燒 + **意識或行為改變** ± seizure、focal deficit，通常無腦膜刺激徵象',
      'CSF：WBC **< 250**（lymph 為主）、protein < 150、**glucose 正常**；送 **HSV、enterovirus PCR**',
      'MRI：HSV -> **temporal lobe**；ADEM -> demyelination',
      '**所有疑似 encephalitis 立即開始 acyclovir 10 mg/kg IV q8h**，不要等 PCR；HSV 確診 **14-21 天**',
      'VZV 腦炎也用 acyclovir；其他病毒以支持治療為主',
      '想到就先治：細菌性腦膜炎、TB、Listeria'
    ],
    table: {
      head: ['Acyclovir 注意事項', ''],
      rows: [
        ['肥胖', 'IV 劑量用 **ideal body weight**'],
        ['腎毒性', '**Crystalline nephropathy**：脫水、腎功能差、IV bolus 風險高 -> 充分水分、依 CrCl 調整'],
        ['神經毒性', '腎衰竭、老人高劑量 -> delirium、tremor、seizure']
      ]
    },
    refs: ['CID 2008;47:303（IDSA encephalitis）']
  },
  {
    id: 'id-abscess-path',
    title: '腦膿瘍 致病機轉',
    points: [
      '三條路徑：**鄰近感染**（mastoiditis、sinusitis、**牙齒**）、**血行**（endocarditis septic emboli、菌血症；常多發、位於灰白質交界）、**直接植入**（外傷、手術）',
      '演變：**cerebritis**（局部發炎水腫）-> 中心壞死 -> 形成**膠原包膜** -> CT/MRI **ring-enhancing lesion**',
      '包膜讓抗生素不易進入、膿液酸性低氧 -> 需要**引流**與長療程',
      '病原依來源：口腔/鼻竇 -> **S. anginosus group**、viridans strep、**厭氧菌**（Bacteroides、Fusobacterium）；術後外傷 -> staphylococci、GNB',
      '免疫低下：fungi、**Nocardia**、Listeria、TB；**HIV -> toxoplasmosis**'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-abscess',
    title: 'Brain abscess',
    points: [
      '診斷靠影像：**ring-enhancing lesion**（MRI 或 CT）；病原靠 **aspiration、biopsy 或手術**取得',
      '經驗性（免疫正常）：**ceftriaxone + metronidazole + vancomycin**；培養後縮窄',
      '神經外科術後或頭部外傷：ceftriaxone 改 **cefepime 或 ceftazidime**',
      '**一定要會診神經外科引流**；培養決定用藥，療程通常很長',
      '**療程依追蹤影像**決定'
    ],
    refs: ['Neurology 2014;82:806（brain abscess meta-analysis）']
  },
  {
    id: 'id-ncc-path',
    title: 'Neurocysticercosis 致病機轉',
    points: [
      '人吃到**人類帶原者糞便中的 T. solium 卵**（不是吃豬肉；吃生豬肉得到的是腸道絛蟲）',
      '卵在腸道孵化 -> 幼蟲穿過腸壁血行散播 -> 腦、肌肉、眼睛形成 **cysticerci**',
      '存活的囊蟲能逃避免疫，常無症狀；囊蟲**死亡退化**時引發發炎 -> 水腫、**seizure**；最後**鈣化**',
      '抗寄生蟲藥殺死囊蟲同樣會引發發炎，所以要**合併類固醇**'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-ncc',
    title: 'Neurocysticercosis',
    points: [
      '來自 **Mexico、中南美洲、India** 的病人新發 seizure 要想到',
      '影像：unilocular cysts，最後鈣化；**囊內見到 scolex 即可診斷**；serology、PCR 輔助',
      '**Viable cysts** 才需要治療：**抗癲癇藥 + albendazole 或 praziquantel + 類固醇**，必要時手術',
      '只有鈣化病灶：控制 seizure 即可'
    ],
    refs: ['Am J Trop Med Hyg 2018;98:945（IDSA/ASTMH neurocysticercosis）']
  }
]);

RPG.registerCase({
  id: 'id5-pneumo',
  chapter: 'ID5',
  title: '耳朵痛完之後的頭痛',
  patient: '34 歲男性 · 軟體工程師',
  summary: '發燒、劇烈頭痛、嘔吐，脖子硬到低不下頭。一週前右耳痛。',
  cards: ['id-mening-path', 'id-csf', 'id-mening-emp', 'id-mening-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。蔡先生從昨天開始發燒 39.4°C、頭痛到要撞牆，吐了三次，怕光。一週前右耳痛，自己買成藥吃。',
        'BP 118/72、HR 112。意識清楚，**GCS 15**，對答切題。**頸部僵硬**，沒有皮疹。',
        '沒有慢性病，沒有在吃類固醇或免疫抑制劑。'
      ],
      clue: ['34M；發燒、劇烈頭痛、嘔吐、畏光', '**頸部僵硬**；GCS 15', '一週前右耳痛；免疫正常'],
      choices: [{ label: '開始處置', next: 'workup' }]
    },
    workup: {
      text: '你懷疑細菌性腦膜炎。動作要快。',
      checklist: {
        prompt: '急診醫囑：勾選你要的項目',
        submit: '送出醫囑',
        next: 'empiric',
        options: [
          { id: 'bcx', group: '培養', label: '血液培養 x 2 套', key: true, reveal: true,
            result: '已抽，培養中', clue: '血液培養已送',
            miss: '腦膜炎一定要抽血液培養，而且要在抗生素之前。' },
          { id: 'neuro', group: '理學', label: '神經學檢查（意識、focal sign）、眼底', key: true, reveal: true,
            result: 'GCS 15；**無 focal deficit**；無 papilledema；無 seizure', clue: '無 focal deficit、無 seizure、意識清楚',
            miss: '決定 LP 前需不需要 CT，看的就是意識、focal deficit、seizure、免疫狀態。' },
          { id: 'lp', group: '檢查', label: 'LP：opening pressure、cell count/DC、glucose、protein、Gram stain、culture', key: true, reveal: true,
            result: 'OP **32 cmH2O**；WBC **2,400**（PMN 92%）；glucose **18**；protein **310**；**Gram stain：Gram-positive diplococci**',
            clue: 'CSF：PMN 2,400、glucose 18、protein 310；**GPDC**',
            miss: '腦膜炎的診斷要靠 LP。' },
          { id: 'lab', group: '檢驗', label: 'CBC、Cr、血糖', key: true, reveal: true,
            result: 'WBC 18,900；Cr 0.9；**血糖 110**', clue: '血糖 110（CSF/serum glucose 0.16）',
            miss: 'CSF glucose 要對照同時的血糖；Cr 決定 vancomycin 劑量。' },
          { id: 'oto', group: '理學', label: '耳鏡檢查',
            result: '右耳鼓膜膨出、混濁', clue: '右側 acute otitis media（可能來源）' },
          { id: 'ct', group: '影像', label: 'LP 前先做 head CT', result: '已撤回',
            waste: '免疫正常、意識清楚、沒有 focal deficit 或 seizure，LP 前不需要 CT。多排一個 CT 只會延誤 LP 和抗生素。' },
          { id: 'mri', group: '影像', label: 'Brain MRI', result: '已撤回',
            waste: '急診不需要 MRI 來診斷腦膜炎，會延誤治療。' }
        ]
      }
    },
    empiric: {
      text: 'CSF 是典型的細菌性腦膜炎。34 歲、免疫正常。LP 做完了，現在開藥。',
      choices: [
        { label: '**Dexamethasone 0.15 mg/kg IV q6h**（與第一劑抗生素同時）+ **ceftriaxone 2 g IV q12h + vancomycin 15-20 mg/kg IV q8-12h**', next: 'report' },
        { label: 'Ceftriaxone 2 g IV q12h 單用', next: 'e_cro' },
        { label: 'Ceftriaxone + vancomycin + **ampicillin 2 g q4h**', next: 'e_amp' },
        { label: 'Ceftriaxone + vancomycin；dexamethasone 等培養確認 S. pneumoniae 再加', next: 'e_dex' },
        { label: 'Dexamethasone + vancomycin + **ceftriaxone 2 g IV q24h**', next: 'e_dose' }
      ]
    },
    e_cro: {
      text: '主治醫師搖頭。',
      feedback: 'S. pneumoniae 可能對 ceftriaxone 不敏感。藥敏出來前要加 vancomycin。',
      choices: [{ label: '重新決定', next: 'empiric' }]
    },
    e_amp: {
      text: '主治醫師搖頭。',
      feedback: 'Ampicillin 是為了 Listeria，用在 > 50 歲或免疫低下。他 34 歲、免疫正常，不需要。',
      choices: [{ label: '重新決定', next: 'empiric' }]
    },
    e_dex: {
      text: '主治醫師搖頭。',
      feedback: 'Dexamethasone 要在**第一劑抗生素同時**開始才有效；等培養出來再給就錯過時機。Gram stain 已經是 GPDC。',
      choices: [{ label: '重新決定', next: 'empiric' }]
    },
    e_dose: {
      text: '主治醫師搖頭。',
      feedback: '腦膜炎要高劑量才能在 CSF 達到足夠濃度：ceftriaxone **2 g q12h**。',
      choices: [{ label: '重新決定', next: 'empiric' }]
    },
    report: {
      text: [
        '第 2 天，CSF 與血液培養都長出 **Streptococcus pneumoniae**。',
        '藥敏：**ceftriaxone MIC 0.25**（< 1，敏感）；**penicillin MIC 0.5**（> 0.06）。',
        '第 3 天退燒，頭痛改善，聽力正常。'
      ],
      clue: ['**S. pneumoniae**（CSF、血液）', 'Ceftriaxone MIC 0.25；PCN MIC 0.5', '第 3 天退燒'],
      choices: [
        { label: '**停 vancomycin**；續 ceftriaxone 2 g q12h 與 dexamethasone', next: 'end_good' },
        { label: '換 penicillin G 4 MU IV q4h，比較窄效', next: 'r_pcn' },
        { label: 'Vancomycin + ceftriaxone 都打完全程，比較保險', next: 'end_vanco',
          why: 'Ceftriaxone MIC < 1 就停 vancomycin。多一個藥沒有好處，只多了腎毒性和抗藥壓力。' },
        { label: '既然確定是細菌感染，停 dexamethasone', next: 'r_dex' }
      ]
    },
    r_pcn: {
      text: '主治醫師搖頭。',
      feedback: 'Penicillin 要 MIC **< 0.06** 才能用。這株 0.5，不敏感。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    r_dex: {
      text: '主治醫師搖頭。',
      feedback: 'Dexamethasone 正是對 **S. pneumoniae** 腦膜炎證實能減少神經學後遺症。其他病原才停。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    end_vanco: {
      text: '蔡先生痊癒出院，但第 8 天 Cr 從 0.9 升到 1.7，多住了四天。',
      ending: {
        grade: 'ok',
        title: '治好了，但沒有降階',
        pearls: [
          'Ceftriaxone MIC < 1 -> 停 vancomycin',
          '培養長出病原就縮窄經驗性處方'
        ]
      }
    },
    end_good: {
      text: '蔡先生完成 ceftriaxone 療程，沒有聽力或神經學後遺症，回去上班。耳鼻喉科追蹤中耳炎。',
      ending: {
        grade: 'good',
        title: 'Pneumococcal meningitis',
        pearls: [
          '免疫正常、意識清楚、無 focal deficit、無 seizure -> LP 前不需要 CT',
          '2-50 歲：ceftriaxone 2 g q12h + vancomycin；dexamethasone 與第一劑抗生素同時',
          'Ceftriaxone MIC < 1 停 vanco；PCN MIC < 0.06 才能用 penicillin',
          'Dexamethasone 只在 S. pneumoniae 繼續'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id5-listeria',
  chapter: 'ID5',
  title: '糊塗了兩天的阿公',
  patient: '71 歲男性 · 退休公車司機',
  summary: '家人說他兩天來發燒、講話顛三倒四，今天叫不太醒。',
  cards: ['id-mening-path', 'id-mening-emp', 'id-mening-tx', 'id-csf'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。林阿公有糖尿病、高血壓，兩天前開始發燒，昨天講話顛三倒四，今天叫不太醒。',
        'T 39.0°C、BP 134/80、HR 104。**GCS 13**（E3V4M6），**頸部僵硬**，四肢都會動，沒有明顯 focal deficit。'
      ],
      clue: ['71M；DM、HTN', '發燒 + **意識改變（GCS 13）**', '頸部僵硬'],
      choices: [{ label: '安排處置順序', next: 'order' }]
    },
    order: {
      text: '意識改變，LP 前要先做 CT。CT 排在一個小時後。',
      choices: [
        { label: '立刻抽**血液培養 x 2**，馬上給 dexamethasone + 經驗性抗生素，再去 CT，之後 LP', next: 'empiric' },
        { label: '等 CT、LP 做完拿到 CSF，再決定抗生素', next: 'o_wait' },
        { label: '沒有 focal deficit，跳過 CT 直接 LP', next: 'o_skip' }
      ]
    },
    o_wait: {
      text: '主治醫師搖頭。',
      feedback: '細菌性腦膜炎是急症，**不要為了檢查延誤抗生素**。先抽血液培養，馬上給藥，再去 CT 和 LP。',
      choices: [{ label: '重新決定', next: 'order' }]
    },
    o_skip: {
      text: '主治醫師搖頭。',
      feedback: '**意識改變**本身就是 LP 前做 CT 的適應症，和 focal deficit、seizure、免疫低下一樣。',
      choices: [{ label: '重新決定', next: 'order' }]
    },
    empiric: {
      text: '血液培養抽好了。71 歲、沒有免疫抑制。經驗性治療？',
      choices: [
        { label: 'Dexamethasone + **ceftriaxone 2 g q12h + vancomycin + ampicillin 2 g IV q4h**', next: 'ctlp' },
        { label: 'Dexamethasone + ceftriaxone 2 g q12h + vancomycin', next: 'e_noamp' },
        { label: 'Dexamethasone + vancomycin + ampicillin + **meropenem 2 g q8h**', next: 'e_mero' }
      ]
    },
    e_noamp: {
      text: '主治醫師搖頭。',
      feedback: '**> 50 歲要加 ampicillin** 蓋 Listeria。Cephalosporins 對 Listeria 無效，vancomycin 也不可靠。',
      choices: [{ label: '重新決定', next: 'empiric' }]
    },
    e_mero: {
      text: '主治醫師搖頭。',
      feedback: 'Cefepime 或 meropenem 的組合用在**免疫低下**；神經外科術後才需要抗 Pseudomonas。他用 ceftriaxone + vancomycin + ampicillin 就夠了。',
      choices: [{ label: '重新決定', next: 'empiric' }]
    },
    ctlp: {
      text: '抗生素開始後，送 CT 再做 LP。',
      checklist: {
        prompt: '檢查：勾選你要的項目',
        submit: '送出',
        next: 'report',
        options: [
          { id: 'ct', group: '影像', label: 'Head CT（non-contrast）', key: true, reveal: true,
            result: '無 mass effect、無出血', clue: 'CT 無禁忌',
            miss: '意識改變的病人 LP 前要做 CT。' },
          { id: 'lp', group: '檢查', label: 'LP：OP、cell count/DC、glucose、protein、Gram stain、culture', key: true, reveal: true,
            result: 'OP 26；WBC **650**（PMN 60%、lymph 40%）；glucose **38**（血糖 160）；protein 180；**Gram stain：少量 Gram-positive rods**',
            clue: 'CSF：WBC 650、glucose 38；**Gram-positive rods**',
            miss: '還是要 LP 確認診斷與病原。' },
          { id: 'hsv', group: 'CSF', label: 'CSF HSV PCR',
            result: '陰性' },
          { id: 'crag', group: 'CSF', label: 'CSF cryptococcal antigen',
            result: '陰性' },
          { id: 'mri', group: '影像', label: 'Brain MRI（今天）', result: '已撤回',
            waste: 'CT 已排除禁忌，MRI 不會改變今天的處置。' }
        ]
      }
    },
    report: {
      text: [
        '第 2 天，CSF 與血液培養都長出 **Listeria monocytogenes**。',
        '阿公燒退了一些，GCS 進步到 14。'
      ],
      clue: ['**L. monocytogenes**（CSF、血液）'],
      choices: [
        { label: '**Ampicillin 2 g IV q4h 單用**；停 ceftriaxone、vancomycin、dexamethasone；療程**至少 3 週**', next: 'end_good' },
        { label: '降階成 ceftriaxone 2 g q12h 單用', next: 'r_cro' },
        { label: 'Ampicillin 單用，**10-14 天**', next: 'r_short' },
        { label: '四種藥都繼續到出院', next: 'end_all',
          why: 'Cephalosporins 對 Listeria 無效，vancomycin 不需要，dexamethasone 只對 S. pneumoniae 有益。留著只增加副作用。' }
      ]
    },
    r_cro: {
      text: '主治醫師搖頭。',
      feedback: '**所有 cephalosporins 對 Listeria 都無效。** Listeria 用 ampicillin。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    r_short: {
      text: '主治醫師搖頭。',
      feedback: 'Listeria 腦膜炎要**至少 3 週**。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    end_all: {
      text: '阿公三週後出院，但住院中發生 vancomycin 相關 AKI 和 C. difficile 腹瀉。',
      ending: {
        grade: 'ok',
        title: 'Listeria 治好了，但處方沒有縮窄',
        pearls: [
          '確定 Listeria -> ampicillin 單用至少 3 週',
          'Dexamethasone 只在 S. pneumoniae 繼續'
        ]
      }
    },
    end_good: {
      text: '阿公完成三週 ampicillin，意識恢復，回家由家人照顧。',
      ending: {
        grade: 'good',
        title: 'Listeria meningitis',
        pearls: [
          '意識改變 -> LP 前 CT；但先血培養 + 抗生素，不要等',
          '> 50 歲經驗性加 ampicillin；cephalosporins 對 Listeria 無效',
          'Listeria：ampicillin 至少 3 週（± gentamicin 有爭議）；PCN 過敏用 TMP-SMX 或 meropenem',
          '老人、孕婦、免疫低下是 Listeria 高風險族群'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id5-nm',
  chapter: 'ID5',
  title: '宿舍裡的紫斑',
  patient: '19 歲男性 · 大一新生',
  summary: '早上還在打球，下午發燒、頭痛，小腿冒出一片紫紅色的斑。',
  cards: ['id-mening-path', 'id-mening-emp', 'id-mening-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。小陳住學校宿舍，早上還在打球，中午開始發燒 39.8°C、頭痛、嘔吐。室友送他來。',
        'BP **92/58**、HR 128。意識清楚，GCS 15，頸部僵硬。雙小腿與軀幹有 **petechiae 和 purpura**，按壓不褪色。',
        '剛到院時他吐了，急診學長沒戴口罩就幫他抽痰。'
      ],
      clue: ['19M；住宿舍', '發燒、頭痛、頸部僵硬', '**Petechiae、purpura**；BP 92/58'],
      choices: [{ label: '開始處置', next: 'workup' }]
    },
    workup: {
      text: '你高度懷疑腦膜炎雙球菌感染。',
      checklist: {
        prompt: '醫囑：勾選你要的項目',
        submit: '送出醫囑',
        next: 'empiric',
        options: [
          { id: 'bcx', group: '培養', label: '血液培養 x 2 套', key: true, reveal: true,
            result: '已抽', clue: '血液培養已送',
            miss: '抗生素前先抽血液培養。' },
          { id: 'iso', group: '感控', label: '**Droplet isolation**', key: true, reveal: true,
            result: '已隔離', clue: 'Droplet 隔離',
            miss: '疑似 N. meningitidis 要 droplet 隔離，開始治療後 24 小時才解除。' },
          { id: 'lp', group: '檢查', label: 'LP：OP、cell count/DC、glucose、protein、Gram stain、culture', key: true, reveal: true,
            result: 'WBC **3,800**（PMN 95%）；glucose **22**；protein 260；Gram stain 處理中', clue: 'CSF：PMN 3,800、glucose 22',
            miss: '他意識清楚、沒有 focal deficit，可以直接 LP。' },
          { id: 'fluid', group: '治療', label: '輸液復甦', key: true, reveal: true,
            result: '1 L 後 BP 108/66', clue: '輸液後 BP 108/66',
            miss: '血壓偏低，要積極輸液。' },
          { id: 'coag', group: '檢驗', label: 'PT/aPTT、fibrinogen、PLT',
            result: 'PLT 88k；PT 稍延長；fibrinogen 180', clue: '輕度凝血異常（早期 DIC？）' },
          { id: 'ct', group: '影像', label: 'LP 前 head CT', result: '已撤回',
            waste: '意識清楚、無 focal deficit、無 seizure、免疫正常，不需要 CT。' }
        ]
      }
    },
    empiric: {
      text: '經驗性治療？',
      choices: [
        { label: 'Dexamethasone + **ceftriaxone 2 g IV q12h + vancomycin**', next: 'report' },
        { label: '看到紫斑就是腦膜炎雙球菌，ceftriaxone 單用就好', next: 'e_mono' },
        { label: 'Penicillin G 4 MU IV q4h', next: 'e_pcn' }
      ]
    },
    e_mono: {
      text: '主治醫師搖頭。',
      feedback: '臨床表現再像，病原還沒確定。S. pneumoniae 也可以有紫斑。藥敏出來前照 2-50 歲的經驗性處方：ceftriaxone + vancomycin + dexamethasone。',
      choices: [{ label: '重新決定', next: 'empiric' }]
    },
    e_pcn: {
      text: '主治醫師搖頭。',
      feedback: 'Penicillin 要等確定 MIC < 0.1 才能用。經驗性治療用 ceftriaxone + vancomycin。',
      choices: [{ label: '重新決定', next: 'empiric' }]
    },
    report: {
      text: [
        'CSF Gram stain：**Gram-negative diplococci**。隔天培養確認 **Neisseria meningitidis**，**penicillin MIC 0.06**。',
        '小陳血壓穩定，紫斑沒有擴大。'
      ],
      clue: ['**N. meningitidis**；PCN MIC 0.06（< 0.1）'],
      choices: [
        { label: '停 vancomycin 和 dexamethasone；改 **penicillin G**（或續 ceftriaxone）', next: 'contacts' },
        { label: '三種藥都繼續', next: 'r_all' }
      ]
    },
    r_all: {
      text: '主治醫師搖頭。',
      feedback: 'N. meningitidis 不需要 vancomycin；dexamethasone 對 S. pneumoniae 以外的病原不建議。MIC < 0.1 可以用 penicillin。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    contacts: {
      text: '感控組問你：誰需要預防性投藥？',
      checklist: {
        prompt: '勾選需要預防性投藥的人',
        submit: '送出',
        next: 'later',
        options: [
          { id: 'room', group: '接觸者', label: '同寢室的室友', key: true, reveal: true,
            result: 'Ciprofloxacin 500 mg PO 一次', clue: '室友已預防',
            miss: '同住的人是 close contact（household），要預防。' },
          { id: 'intub', group: '接觸者', label: '幫他抽痰、沒戴口罩的急診學長', key: true, reveal: true,
            result: 'Ciprofloxacin 500 mg PO 一次', clue: '暴露分泌物的醫護已預防',
            miss: '直接接觸呼吸道分泌物（插管、抽痰）的醫護人員要預防。' },
          { id: 'class', group: '接觸者', label: '同一堂通識課的 80 位同學', result: '不需要',
            waste: '同教室上課不是 close contact。預防只給 household contacts 和接觸分泌物的醫護。' },
          { id: 'nurse', group: '接觸者', label: '幫他給藥、量血壓的護理師（有戴口罩）', result: '不需要',
            waste: '沒有接觸分泌物的醫護不需要預防。' }
        ]
      }
    },
    later: {
      text: '小陳痊癒出院。兩年後，他又因為 **meningococcemia** 住進加護病房。',
      clue: ['兩年後**再次** N. meningitidis 感染'],
      choices: [
        { label: '這次痊癒後，檢查 **terminal complement（C5-C9）缺乏**', next: 'end_good' },
        { label: '機率問題，治好就好，不必再查', next: 'l_none' }
      ]
    },
    l_none: {
      text: '主治醫師搖頭。',
      feedback: '**反覆 Neisseria 全身感染**要排除 terminal complement（C5-C9）缺乏。',
      choices: [{ label: '重新決定', next: 'later' }]
    },
    end_good: {
      text: '檢查發現 **C6 缺乏**。小陳接種了腦膜炎雙球菌疫苗，衛教發燒要立即就醫。',
      ending: {
        grade: 'good',
        title: 'Meningococcal meningitis 與 terminal complement 缺乏',
        pearls: [
          '病原確定前，照年齡給經驗性處方',
          'N. meningitidis：ceftriaxone；MIC < 0.1 可用 penicillin；停 vanco、dex',
          'Droplet 隔離到治療後 24 h',
          '預防：household contacts、接觸分泌物的醫護；cipro 500 mg 一次、rifampin、或 ceftriaxone 250 mg IM',
          '反覆 Neisseria 感染 -> 查 C5-C9'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id5-hsv',
  chapter: 'ID5',
  title: '找不到詞的老師',
  patient: '38 歲女性 · 國中國文老師',
  summary: '發燒三天後開始講話怪怪的、說不出字，今天在家抽搐。',
  cards: ['id-enceph-path', 'id-enceph', 'id-csf', 'id-antiviral'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。許老師三天前發燒、頭痛，昨天開始講話找不到詞，問她東西叫什麼名字答不出來，還說聞到奇怪的燒焦味。今天在家**全身抽搐**一次。',
        'T 38.6°C、BP 128/76。GCS 14，**expressive aphasia**，頸部不太硬，沒有皮疹。體重 **92 kg**，身高 160 cm（**IBW 約 52 kg**）。'
      ],
      clue: ['38F；發燒 3 天', '**行為、語言改變**（aphasia）、嗅幻覺', '**Seizure** x 1', '92 kg（IBW 52 kg）'],
      choices: [{ label: '開始評估', next: 'workup' }]
    },
    workup: {
      text: '有 seizure，LP 前先做 CT。',
      checklist: {
        prompt: '醫囑：勾選你要的項目',
        submit: '送出醫囑',
        next: 'empiric',
        options: [
          { id: 'ct', group: '影像', label: 'Head CT', key: true, reveal: true,
            result: '無 mass effect', clue: 'CT 無 mass effect',
            miss: 'Seizure、意識改變 -> LP 前 CT。' },
          { id: 'lp', group: '檢查', label: 'LP：OP、cell count/DC、glucose、protein、Gram stain', key: true, reveal: true,
            result: 'OP 22；WBC **120**（lymph 85%）；**RBC 400**；glucose **62**（血糖 105）；protein 95；Gram stain 陰性',
            clue: 'CSF：lymph 120、**glucose 正常**、RBC 400',
            miss: '一定要 LP。' },
          { id: 'pcr', group: 'CSF', label: 'CSF **HSV PCR**、enterovirus PCR', key: true, reveal: true,
            result: '已送，結果 2-3 天', clue: 'HSV PCR 送驗中',
            miss: '疑似腦炎一定要送 HSV PCR。' },
          { id: 'mri', group: '影像', label: 'Brain MRI', key: true, reveal: true,
            result: '**左側 temporal lobe** 與 insula T2/FLAIR 高訊號', clue: '**MRI：left temporal lobe** 病灶',
            miss: 'MRI 看 temporal lobe（HSV）或 demyelination（ADEM）。' },
          { id: 'bcx', group: '培養', label: '血液培養', result: '陰性' },
          { id: 'eeg', group: '檢查', label: 'EEG', result: '左側 temporal periodic discharges', clue: 'EEG：left temporal discharges' },
          { id: 'nmda', group: 'CSF', label: 'CSF anti-NMDA receptor Ab', result: '送驗中（之後陰性）' }
        ]
      }
    },
    empiric: {
      text: 'CSF lymphocytic、glucose 正常，MRI 左側 temporal lobe。HSV PCR 還要兩三天。',
      choices: [
        { label: '**現在就開始 acyclovir 10 mg/kg IV q8h**', next: 'dose' },
        { label: '等 HSV PCR 確認再開 acyclovir，避免腎毒性', next: 'e_wait' },
        { label: '先給高劑量類固醇，比較像 autoimmune encephalitis', next: 'e_ster' }
      ]
    },
    e_wait: {
      text: '主治醫師搖頭。',
      feedback: '**所有疑似 encephalitis 都要立刻開始 acyclovir**，直到排除 HSV。延遲治療神經學預後明顯變差。',
      choices: [{ label: '重新決定', next: 'empiric' }]
    },
    e_ster: {
      text: '主治醫師搖頭。',
      feedback: '發燒 + temporal lobe 病灶 + CSF RBC，第一優先是 HSV。先給 acyclovir；anti-NMDAR 結果出來再說。',
      choices: [{ label: '重新決定', next: 'empiric' }]
    },
    dose: {
      text: '藥局打電話問：10 mg/kg 要用哪個體重算？',
      choices: [
        { label: '**Ideal body weight**（52 kg）', next: 'kidney' },
        { label: '實際體重（92 kg），劑量不足比較危險', next: 'd_abw' }
      ]
    },
    d_abw: {
      text: '主治醫師搖頭。',
      feedback: '肥胖病人的 IV acyclovir 用 **ideal body weight** 算。用實際體重會過量，crystalline nephropathy 與神經毒性的風險上升。',
      choices: [{ label: '重新決定', next: 'dose' }]
    },
    kidney: {
      text: [
        '第 3 天 **CSF HSV-1 PCR 陽性**。',
        '第 4 天 Cr 從 0.7 升到 **1.6**，尿量偏少。她這幾天吃得很少。'
      ],
      clue: ['**HSV-1 PCR (+)**', '第 4 天 Cr 0.7 -> 1.6'],
      choices: [
        { label: '**加強水分**，依 CrCl 調整 acyclovir 劑量，繼續治療', next: 'duration' },
        { label: '停 acyclovir，改 foscarnet', next: 'k_fos' },
        { label: '停 acyclovir，PCR 已經確診，抗病毒夠了', next: 'k_stop' }
      ]
    },
    k_fos: {
      text: '主治醫師搖頭。',
      feedback: 'Foscarnet 是給 acyclovir **抗藥**的 HSV，而且腎毒性更強。這是 acyclovir crystalline nephropathy：補水、調整劑量。',
      choices: [{ label: '重新決定', next: 'kidney' }]
    },
    k_stop: {
      text: '主治醫師搖頭。',
      feedback: 'HSV 腦炎要完整治療 **14-21 天**。腎功能變差就補水、依 CrCl 調整劑量。',
      choices: [{ label: '重新決定', next: 'kidney' }]
    },
    duration: {
      text: '補水後 Cr 回到 0.9。總療程？',
      choices: [
        { label: '**14-21 天** IV acyclovir', next: 'end_good' },
        { label: '7 天，退燒就停', next: 'du_short' }
      ]
    },
    du_short: {
      text: '主治醫師搖頭。',
      feedback: 'HSV encephalitis 要 **14-21 天**。',
      choices: [{ label: '重新決定', next: 'duration' }]
    },
    end_good: {
      text: '許老師完成 21 天 acyclovir。出院時還有輕微找字困難，在復健科做語言治療，半年後回到講台。',
      ending: {
        grade: 'good',
        title: 'HSV-1 encephalitis',
        pearls: [
          '發燒 + 行為改變、aphasia、seizure -> encephalitis',
          'CSF lymphocytic、glucose 正常；MRI temporal lobe',
          '疑似就立即 acyclovir 10 mg/kg q8h，不等 PCR；14-21 天',
          '肥胖用 IBW；補水預防 crystalline nephropathy，依 CrCl 調整'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id5-abscess',
  chapter: 'ID5',
  title: '拔牙三週後的右手無力',
  patient: '48 歲男性 · 計程車司機',
  summary: '頭痛越來越嚴重十天，今天右手拿不住杯子。三週前拔了一顆爛牙。',
  cards: ['id-abscess-path', 'id-abscess', 'id-ncc'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。張先生頭痛十天，越來越痛，今天早上右手拿不住杯子。三週前在診所拔掉一顆蛀到根的臼齒。',
        'T 37.9°C。意識清楚，**右手肌力 3/5**，其他正常，頸部不硬。',
        'Contrast CT：**左額葉 3 cm ring-enhancing lesion**，周圍水腫，輕微 midline shift。'
      ],
      clue: ['48M；三週前拔牙', '頭痛 10 天；**右手無力**；低燒', '**Left frontal ring-enhancing lesion 3 cm** + 水腫'],
      choices: [{ label: '進一步評估', next: 'workup' }]
    },
    workup: {
      text: 'Ring-enhancing lesion 的鑑別包括膿瘍、腫瘤、toxoplasmosis、neurocysticercosis。',
      checklist: {
        prompt: '醫囑：勾選你要的項目',
        submit: '送出醫囑',
        next: 'plan',
        options: [
          { id: 'mri', group: '影像', label: 'Brain MRI with contrast（含 DWI）', key: true, reveal: true,
            result: '單一 ring-enhancing lesion，**中心 DWI 高訊號**（膿液），無 scolex', clue: 'MRI：DWI 中心高訊號，符合膿瘍',
            miss: 'MRI 幫助區分膿瘍與腫瘤，也看有沒有多發病灶。' },
          { id: 'bcx', group: '培養', label: '血液培養 x 2', key: true, reveal: true,
            result: '陰性', clue: '血液培養陰性',
            miss: '腦膿瘍可能由菌血症或心內膜炎而來，抗生素前要抽血液培養。' },
          { id: 'dent', group: '理學', label: '口腔檢查、牙科 panorex', key: true, reveal: true,
            result: '拔牙處癒合不良，另有兩顆根尖膿瘍', clue: '**牙源性感染灶**',
            miss: '找原發灶：牙齒、鼻竇、中耳、乳突。原發灶決定經驗性用藥。' },
          { id: 'hiv', group: '檢驗', label: 'HIV 篩檢', result: '陰性', clue: 'HIV 陰性' },
          { id: 'echo', group: '影像', label: 'TTE', result: '無 vegetation' },
          { id: 'lp', group: '檢查', label: 'LP', result: '已撤回',
            waste: '有 mass effect 時 LP 有腦疝風險，而且 CSF 很少找到病原。腦膿瘍的病原要靠抽膿。' }
        ]
      }
    },
    plan: {
      text: 'MRI 符合腦膿瘍，原發灶是牙齒。下一步？',
      choices: [
        { label: '**Ceftriaxone + metronidazole + vancomycin**，會診神經外科做 **stereotactic aspiration**', next: 'report' },
        { label: '先打四週抗生素，沒改善再考慮引流', next: 'p_noasp' },
        { label: '**Cefepime** + metronidazole + vancomycin', next: 'p_fep' },
        { label: '先給 dexamethasone 消水腫，抗生素等抽膿結果', next: 'p_ster' }
      ]
    },
    p_noasp: {
      text: '主治醫師搖頭。',
      feedback: '腦膿瘍**一定要會診神經外科引流**：3 cm 加上 mass effect，而且要靠膿液培養決定長療程的用藥。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    p_fep: {
      text: '主治醫師搖頭。',
      feedback: 'Cefepime 或 ceftazidime 用在**神經外科術後或頭部外傷**（GNB、Pseudomonas）。牙源性用 ceftriaxone + metronidazole + vancomycin。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    p_ster: {
      text: '主治醫師搖頭。',
      feedback: '經驗性抗生素要馬上開始。抽膿可以在開始抗生素後盡快進行。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    report: {
      text: [
        '當天做 stereotactic aspiration，抽出 8 mL 臭膿。',
        '培養：**Streptococcus anginosus group** + **Fusobacterium nucleatum**，沒有 S. aureus。',
        '一週後右手肌力回到 4+/5，不再發燒。牙科處理了根尖膿瘍。'
      ],
      clue: ['膿液：**S. anginosus group + Fusobacterium**；無 S. aureus', '一週後神經學改善'],
      choices: [
        { label: '**停 vancomycin**，續 ceftriaxone + metronidazole；**療程依追蹤影像**決定', next: 'end_good' },
        { label: '續 ceftriaxone + metronidazole，固定 2 週後停藥', next: 'r_two' },
        { label: '三種藥都繼續到療程結束', next: 'end_vanco',
          why: '培養沒有 S. aureus 就停 vancomycin。ceftriaxone + metronidazole 已涵蓋 S. anginosus 和厭氧菌。' }
      ]
    },
    r_two: {
      text: '主治醫師搖頭。',
      feedback: '腦膿瘍通常需要長療程，**由追蹤影像**決定停藥時機，不是固定兩週。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    end_vanco: {
      text: '膿瘍消失，但 vancomycin 讓張先生出現 AKI，延後出院。',
      ending: {
        grade: 'ok',
        title: '膿瘍治好了，但沒有降階',
        pearls: [
          '培養結果出來就縮窄：沒有 S. aureus -> 停 vancomycin'
        ]
      }
    },
    end_good: {
      text: '六週後 MRI 膿瘍幾乎消失，停藥。張先生右手恢復，回去開車，之後固定看牙。',
      ending: {
        grade: 'good',
        title: 'Odontogenic brain abscess',
        pearls: [
          'Ring-enhancing lesion -> 找原發灶（牙、鼻竇、耳、心內膜炎）',
          '經驗性：ceftriaxone + metronidazole + vancomycin；術後或外傷改 cefepime/ceftazidime',
          '一定要會診神經外科引流，膿液培養決定用藥',
          '療程依追蹤影像'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id5-ncc',
  chapter: 'ID5',
  title: '工廠宿舍的第一次抽搐',
  patient: '31 歲男性 · 印度籍移工',
  summary: '在工廠宿舍突然全身抽搐，從來沒有這樣過。沒有發燒。',
  cards: ['id-ncc-path', 'id-ncc', 'id-abscess'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。Raj 先生來台灣兩年，在工廠工作。今天在宿舍突然**全身抽搐**約兩分鐘，醒來後頭痛。過去沒有癲癇，沒有發燒。',
        '神經學檢查正常。',
        'CT：左頂葉一個 1.5 cm 囊狀病灶，周圍輕微水腫；另有兩處小**鈣化點**。'
      ],
      clue: ['31M；來自 **India**', '**新發 seizure**，無發燒', 'CT：囊狀病灶 + 兩處鈣化'],
      choices: [{ label: '進一步評估', next: 'workup' }]
    },
    workup: {
      text: '你想到 neurocysticercosis。',
      checklist: {
        prompt: '醫囑：勾選你要的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'mri', group: '影像', label: 'Brain MRI with contrast', key: true, reveal: true,
            result: '囊狀病灶內可見**偏心小點（scolex）**，囊壁輕微 enhancement；鈣化點兩處', clue: '**MRI：cyst with scolex**',
            miss: 'MRI 看 scolex；看到 scolex 即可診斷。' },
          { id: 'sero', group: '檢驗', label: 'Cysticercosis serology', key: true, reveal: true,
            result: '陽性', clue: 'Serology (+)',
            miss: 'Serology、PCR 可以輔助診斷。' },
          { id: 'eye', group: '理學', label: '眼底檢查',
            result: '無眼內囊蟲' },
          { id: 'stool', group: '檢驗', label: '糞便蟲卵', result: '陰性' },
          { id: 'lp', group: '檢查', label: 'LP + CSF culture', result: '已撤回',
            waste: '沒有發燒、沒有腦膜刺激徵象，影像已經有診斷性發現。' }
        ]
      }
    },
    tx: {
      text: '影像有 scolex，有一個存活中的囊蟲加上兩處鈣化。治療？',
      choices: [
        { label: '**抗癲癇藥 + albendazole + 類固醇**', next: 'end_good' },
        { label: '抗癲癇藥 + albendazole', next: 't_noster' },
        { label: '只給抗癲癇藥', next: 't_aed' },
        { label: 'Ceftriaxone + metronidazole + vancomycin，當腦膿瘍治療', next: 't_abx' }
      ]
    },
    t_noster: {
      text: '主治醫師搖頭。',
      feedback: '抗寄生蟲藥殺死囊蟲時會引發發炎反應，可能加重水腫和 seizure。要**合併類固醇**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_aed: {
      text: '主治醫師搖頭。',
      feedback: '只有鈣化病灶才只控制 seizure。他有**存活的囊蟲（viable cyst）**，要給 albendazole 或 praziquantel。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_abx: {
      text: '主治醫師搖頭。',
      feedback: '囊內看到 **scolex** 就可以診斷 neurocysticercosis。沒有發燒，不是膿瘍。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '療程結束後三個月，MRI 囊狀病灶縮小。Raj 先生持續服用抗癲癇藥，沒有再發作。',
      ending: {
        grade: 'good',
        title: 'Neurocysticercosis',
        pearls: [
          '來自 Mexico、中南美、India 的新發 seizure -> 想 neurocysticercosis',
          '囊內 scolex 可診斷；serology、PCR 輔助',
          'Viable cyst：抗癲癇藥 + albendazole/praziquantel + 類固醇',
          '只有鈣化病灶：控制 seizure'
        ]
      }
    }
  }
});
