// ID 06 Bloodstream infections and catheter-related bloodstream infections.
// Source: Washington Manual Ch 14 (source/Washington ID.txt, lines 390-525, Table 14-4).

RPG.registerCards('ID6', [
  {
    id: 'id-bsi-path',
    title: '血流感染 致病機轉',
    points: [
      '細菌從一個**來源**進入血液：導管、皮膚軟組織、泌尿道、腹腔、肺、心內膜',
      '**Transient bacteremia**：刷牙、牙科處置、黏膜破損時短暫入血，通常無症狀、自行清除',
      '**S. aureus**：黏附血管內皮與人工物、可以躲進細胞內 -> 容易**轉移性感染**（脊椎、關節、心瓣膜、膿瘍）-> 所以要找來源、做心臟超音波、追蹤清除',
      '**導管**：放入後數天表面就有 fibrin sheath 與 **biofilm**；短期導管多由**皮膚沿外壁**進入，長期導管多由**接頭內腔**進入',
      'Biofilm 中的細菌與念珠菌對抗生素耐受 -> S. aureus、GNB、黴菌的 CRBSI **要拔管**',
      '**Candida**：廣效抗生素破壞菌叢 + TPN + 中心靜脈導管 + 腹部手術 -> 腸道或皮膚的念珠菌入血 -> 播種到眼睛、心臟、骨頭'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-bsi',
    title: 'BSI：何時抽、怎麼抽、怎麼開始',
    points: [
      '常見病原：**S. aureus、S. pneumoniae、GNB、Candida**',
      '**污染**：皮膚或環境菌（**CoNS**、Corynebacterium、Bacillus）-> 依臨床判斷是不是真的感染',
      '**應該抽血液培養**：sepsis、寒顫發燒、高機率菌血症的感染（**血管內感染、脊椎骨髓炎/椎間盤炎、硬膜外膿瘍、腦膜炎、化膿性關節炎**）',
      '**不建議常規抽**：單純 **cystitis、cellulitis、門診 CAP**',
      '**抗生素前**、**兩處不同的周邊靜脈**至少兩套；避免從導管抽（污染率高）；**導管尖端不建議培養**',
      '仔細找**來源**與**轉移性病灶**',
      '**療程從第一套陰性血液培養那天起算**；**感染源控制**非常重要'
    ],
    table: {
      head: ['經驗性', '用藥'],
      rows: [
        ['Gram-positive', '**Vancomycin 15-20 mg/kg IV q12h**'],
        ['GNB（依症候群）', 'β-lactam/BLI 或 **ceftriaxone 2 g qd**；依本地資料與嚴重度考慮抗 Pseudomonas：**cefepime、pip-tazo、carbapenem**'],
        ['Candidemia 危險因子或血中見到酵母菌', '**Echinocandin**（micafungin 100 mg IV qd）']
      ]
    },
    note: '知道菌種與藥敏後就調整；Gram stain 或分子診斷可以指導初期治療。'
  },
  {
    id: 'id-bsi-org',
    title: '依病原治療 BSI（Table 14-4）',
    table: {
      head: ['病原', '治療', '其他'],
      rows: [
        ['**S. aureus**', '**MSSA：oxacillin 2 g q4h 或 cefazolin 1-2 g q8h**；**MRSA：vancomycin**（trough 15-20）；替代 linezolid、daptomycin 6 mg/kg', '**會診感染科**；**所有人做 TTE**，懷疑 IE 做 TEE；**重複血液培養證明清除**；感染源控制（引流、拔管、移除硬體）'],
        ['**S. aureus 療程**', '一般 **4-6 週**；**uncomplicated MRSA 菌血症可 2 週**', 'Uncomplicated：**TEE 陰性**、**72 h 內退燒且培養轉陰**、**無人工物**、**無轉移性感染**'],
        ['**CoNS**', '**單一套**可能是污染，依臨床判斷；治療用 vancomycin，依 methicillin 敏感與否調整；**7-14 天**', '只在懷疑 IE 或持續菌血症時做 TTE；重複培養證明清除'],
        ['**Streptococcus**', 'PCN 敏感：**penicillin G 12-18 MU/d** 或 **ceftriaxone 2 g qd**；PCN 抗藥：vancomycin', '**S. gallolyticus 菌血症且無明顯來源 -> colonoscopy**'],
        ['**Enterococcus**', 'Ampicillin 敏感：**ampicillin 2 g q4h**；抗藥：vancomycin；**VRE + amp 抗藥：linezolid 或 daptomycin**，會診感染科；**7-14 天**', '懷疑 IE 或持續菌血症才做 TTE'],
        ['**GNB**', '依藥敏；**7-14 天**；抗藥 GNB 會診感染科', '**臨床改善時不需要重複血液培養**，除非有導管或硬體'],
        ['**Candida**', '中重度先 **micafungin 100 mg qd**；穩定且近期沒用 azole -> **fluconazole 400 mg qd**；**第一套陰性後 14 天**', '**會診感染科**；**所有人做 TTE**；**會診眼科**找 endophthalmitis']
      ]
    },
    refs: ['Open Forum Infect Dis 2018;5:ofy026（ID consultation）']
  },
  {
    id: 'id-crbsi',
    title: 'Catheter-related bloodstream infection',
    points: [
      'CVC 感染率：**subclavian < internal jugular < femoral**；femoral 要避免或 **72 h 內拔除**',
      '預防：抗菌塗層 CVC、無菌技術；**不建議用 guidewire 例行更換 CVC**',
      '有血管導管的發燒病人都要懷疑；線索：插入處發炎或靜脈炎、sepsis、endophthalmitis、**找不到其他來源**、**拔管後退燒**',
      '診斷同 BSI；兩套周邊血液培養，盡量不要從導管抽；**不送導管尖端培養**',
      '**拔管最好**；至少在以下情況要拔：**血行動力不穩**或適當治療 **> 72 h 仍菌血症**；**S. aureus、多數 GNB、黴菌、分枝桿菌**；**插入處或隧道感染**（膿、明顯發炎）；**心內膜炎或轉移性感染**',
      '療程從**第一套陰性培養或拔管日（取較晚者）**起算',
      '必須保留導管時：**antibiotic lock therapy** + 延長療程'
    ],
    refs: ['CID 2009;49:1（IDSA intravascular catheter infection 2009）']
  }
]);

RPG.registerCase({
  id: 'id6-sab',
  chapter: 'ID6',
  title: '背上的癰',
  patient: '56 歲男性 · 糖尿病',
  summary: '背上一個大膿包，今天發抖發燒，血液培養長了 Gram-positive cocci in clusters。',
  cards: ['id-bsi-path', 'id-bsi-org', 'id-bsi'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。孫先生糖尿病，背上長了一個 6 cm 的**癰（carbuncle）**一週，昨天寒顫發燒住院，已經開了 **vancomycin**。',
        '今天血液培養 2/2 套：**Gram-positive cocci in clusters**，後來鑑定 **MRSA**（vancomycin MIC 1）。',
        '他沒有人工關節、沒有心律調節器、沒有人工瓣膜。'
      ],
      clue: ['56M；DM；背部 **carbuncle 6 cm**', '**MRSA 菌血症**（2/2）', '無人工物'],
      choices: [{ label: '處置 S. aureus 菌血症', next: 'workup' }]
    },
    workup: {
      text: 'S. aureus 菌血症有標準的處置流程。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'course',
        options: [
          { id: 'id', group: '會診', label: '**會診感染科**', key: true, reveal: true,
            result: '感染科接手', clue: '已會診感染科',
            miss: 'S. aureus 菌血症會診感染科可以降低死亡率。' },
          { id: 'id_drain', group: '處置', label: '**癰切開引流**', key: true, reveal: true,
            result: '外科 I&D', clue: '來源已引流',
            miss: '感染源控制：膿要引流。' },
          { id: 'rbcx', group: '培養', label: '**重複血液培養**（直到陰性）', key: true, reveal: true,
            result: '開始治療 48 h 後：**陰性**', clue: '**48 h 血液培養陰性**',
            miss: 'S. aureus 一定要重複血液培養證明清除，這也決定療程。' },
          { id: 'tte', group: '影像', label: '**TTE**', key: true, reveal: true,
            result: '無 vegetation', clue: 'TTE 陰性',
            miss: 'S. aureus 菌血症**每個人都要做 TTE**。' },
          { id: 'tee', group: '影像', label: 'TEE', result: '無 vegetation、無膿瘍', clue: 'TEE 陰性' },
          { id: 'mri', group: '影像', label: '全脊椎 MRI', result: '已撤回',
            waste: '他沒有背痛或神經學症狀，不需要常規找脊椎感染；有症狀再做。' }
        ]
      }
    },
    course: {
      text: [
        '他在開始 vancomycin 後 **36 小時退燒**，48 h 血液培養陰性，TTE 與 TEE 都沒有 vegetation，沒有其他轉移性感染的症狀。'
      ],
      clue: ['72 h 內退燒、培養轉陰', 'TEE 陰性；無人工物、無轉移性感染'],
      choices: [
        { label: '符合 **uncomplicated MRSA bacteremia**：vancomycin 從**第一套陰性培養起算 2 週**', next: 'end_good' },
        { label: 'Vancomycin 7 天，退燒就好', next: 'c_short' },
        { label: '一律 6 週', next: 'end_long',
          why: '一般療程是 4-6 週，但他符合 uncomplicated 的所有條件（TEE 陰性、72 h 內退燒且培養轉陰、無人工物、無轉移性感染），2 週就足夠。' }
      ]
    },
    c_short: {
      text: '主治醫師搖頭。',
      feedback: 'S. aureus 菌血症最短也要 **2 週**（而且只限 uncomplicated），療程從第一套陰性培養起算。',
      choices: [{ label: '重新決定', next: 'course' }]
    },
    end_long: {
      text: '孫先生打了 6 週 vancomycin，第 5 週出現 AKI 與 neutropenia。',
      ending: {
        grade: 'ok',
        title: 'MRSA 菌血症治好了，但療程過長',
        pearls: ['符合 uncomplicated 條件可以 2 週']
      }
    },
    end_good: {
      text: '兩週後停藥，三個月追蹤沒有復發。',
      ending: {
        grade: 'good',
        title: 'Uncomplicated MRSA bacteremia',
        pearls: [
          'S. aureus 菌血症：會診感染科、TTE（必要時 TEE）、重複血培養、感染源控制',
          'MSSA：oxacillin 或 cefazolin；MRSA：vancomycin（替代 dapto、linezolid）',
          '一般 4-6 週；uncomplicated（TEE 陰性、72 h 內退燒轉陰、無人工物、無轉移）可 2 週',
          '療程從第一套陰性培養起算'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id6-cons',
  chapter: 'ID6',
  title: '一套陽性的血液培養',
  patient: '48 歲女性 · 腹腔鏡膽囊切除術後',
  summary: '術後第二天短暫發燒抽了血液培養，今天一套長了 CoNS。病人很好，正在辦出院。',
  cards: ['id-bsi', 'id-bsi-org'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般外科病房。簡小姐腹腔鏡膽囊切除術後第 3 天，第 2 天晚上燒到 38.1°C 一次，值班醫師抽了兩套血液培養（一套周邊、一套從周邊 IV 留置針抽）。',
        '今天：**從 IV 抽的那一套**長出 **coagulase-negative staphylococci**（48 h 才長）；周邊那套**無生長**。',
        '她已經不燒、傷口乾淨、正在辦出院。沒有人工瓣膜、沒有植入物，周邊 IV 已經拔了。'
      ],
      clue: ['48F；術後第 3 天，僅短暫發燒一次', '**1/2 套 CoNS**（從 IV 抽的那套）', '臨床很好；無人工物'],
      choices: [{ label: '怎麼處理', next: 'decide' }]
    },
    decide: {
      text: '外科住院醫師問要不要開 vancomycin。',
      choices: [
        { label: '**單一套 CoNS、臨床很好 -> 最可能是污染**，不治療，照常出院', next: 'teach' },
        { label: 'Vancomycin 14 天', next: 'end_tx',
          why: 'CoNS 只有一套、從導管抽、48 h 才長，臨床很好也沒有人工物，最可能是污染。治療只帶來副作用和抗藥。' },
        { label: '先留下來每天抽兩套血液培養，直到連續陰性', next: 'd_repeat' }
      ]
    },
    d_repeat: {
      text: '主治醫師搖頭。',
      feedback: '要依**臨床**判斷。她沒有感染徵象，另一套周邊培養陰性，不需要留院反覆抽血。',
      choices: [{ label: '重新決定', next: 'decide' }]
    },
    teach: {
      text: '你想跟值班的學弟說一下這次抽血培養的問題。',
      choices: [
        { label: '血液培養要從**兩處不同的周邊靜脈**抽，**不要從 IV 或導管抽**，污染率高', next: 'end_good' },
        { label: '下次多抽幾套就不會有問題', next: 't_more' }
      ]
    },
    t_more: {
      text: '主治醫師搖頭。',
      feedback: '重點是**抽的位置與無菌技術**：兩套都從不同的周邊靜脈穿刺抽，避免從導管或留置針抽。',
      choices: [{ label: '重新回答', next: 'teach' }]
    },
    end_tx: {
      text: '簡小姐多住了兩週打 vancomycin，出現 red man syndrome 和 C. difficile 腹瀉。',
      ending: {
        grade: 'bad',
        title: '治療了污染菌',
        pearls: ['單一套 CoNS 常是污染，依臨床判斷']
      }
    },
    end_good: {
      text: '簡小姐當天出院，門診追蹤一切正常。',
      ending: {
        grade: 'good',
        title: 'CoNS 污染',
        pearls: [
          '單一套 CoNS 可視為污染，依臨床判斷',
          '血液培養：抗生素前、兩處不同周邊靜脈、至少兩套',
          '避免從導管抽；不培養導管尖端'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id6-candida',
  chapter: 'ID6',
  title: 'TPN 的第三週',
  patient: '66 歲女性 · 短腸症候群',
  summary: '腸切除後靠 TPN 營養，打了很久的廣效抗生素，今天發燒，血液培養長出酵母菌。',
  cards: ['id-bsi-path', 'id-crbsi', 'id-bsi-org'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '外科 ICU 會診。蕭女士腸系膜缺血做了大範圍腸切除，經**右 subclavian CVC** 打 **TPN** 第 3 週，期間用過兩週 meropenem + vancomycin。',
        '今天 T 39.1°C，BP 98/60。血液培養 2/2 套：**yeast**。',
        '她三個月內沒有用過 azole。'
      ],
      clue: ['66F；**TPN + CVC** 3 週', '近期廣效抗生素', '**Candidemia**（2/2 yeast）', '近期無 azole'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: 'Candidemia 有幾件一定要做的事。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'report',
        options: [
          { id: 'echino', group: '用藥', label: '**Micafungin 100 mg IV qd**', key: true, reveal: true,
            result: '已開始', clue: 'Micafungin',
            miss: '中重度 candidemia 先用 echinocandin，等菌種鑑定。' },
          { id: 'cvc', group: '處置', label: '**移除 CVC**（需要的話另一處重新放）', key: true, reveal: true,
            result: '已拔除，改 PICC 於左臂（培養轉陰後）', clue: '已拔除 CVC',
            miss: '黴菌的 CRBSI 一定要拔管。' },
          { id: 'eye', group: '會診', label: '**會診眼科**（眼底檢查）', key: true, reveal: true,
            result: '無 endophthalmitis', clue: '無 Candida endophthalmitis',
            miss: 'Candidemia 要會診眼科找 endophthalmitis，會改變療程。' },
          { id: 'tte', group: '影像', label: '**TTE**', key: true, reveal: true,
            result: '無 vegetation', clue: 'TTE 陰性',
            miss: 'Candidemia 所有人都要做 TTE。' },
          { id: 'rbcx', group: '培養', label: '**重複血液培養**到陰性', key: true, reveal: true,
            result: '第 2 天起**陰性**', clue: '第 2 天起血培養陰性',
            miss: '要知道第一套陰性的日期，療程從那天算 14 天。' },
          { id: 'idc', group: '會診', label: '會診感染科', result: '已會診' },
          { id: 'tip', group: '培養', label: '送 CVC 尖端培養', result: '已撤回',
            waste: '不建議導管尖端培養。' }
        ]
      }
    },
    report: {
      text: '鑑定：**Candida albicans**，**fluconazole S**。她臨床穩定，退燒兩天，可以進食部分口服藥。',
      clue: ['**C. albicans**（fluconazole S）', '臨床穩定'],
      choices: [
        { label: '降階為 **fluconazole 400 mg qd**，完成**第一套陰性培養後 14 天**', next: 'end_good' },
        { label: '血液培養陰性了，可以停藥', next: 'r_stop' },
        { label: 'Micafungin 打滿 6 週', next: 'end_long',
          why: '穩定、fluconazole 敏感、近期沒用 azole -> 可以降階 fluconazole；沒有眼睛或心臟侵犯，療程是第一套陰性後 14 天。' }
      ]
    },
    r_stop: {
      text: '主治醫師搖頭。',
      feedback: 'Candidemia 要從**第一套陰性培養起算 14 天**。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    end_long: {
      text: '蕭女士多住了一個月等 IV 療程結束。',
      ending: {
        grade: 'ok',
        title: 'Candidemia 治好了，但沒有降階',
        pearls: ['敏感、穩定 -> fluconazole 降階；14 天']
      }
    },
    end_good: {
      text: '療程完成，沒有復發，之後改經 PICC 打 TPN 並逐步恢復腸道營養。',
      ending: {
        grade: 'good',
        title: 'Catheter-related candidemia',
        pearls: [
          '危險因子：廣效抗生素、TPN、CVC、腹部手術',
          '先 echinocandin；穩定、敏感、近期無 azole -> fluconazole',
          '拔 CVC；會診眼科、TTE、感染科',
          '第一套陰性後 14 天'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id6-gnb',
  chapter: 'ID6',
  title: '兩天就退燒的菌血症',
  patient: '72 歲女性 · 腎盂腎炎',
  summary: 'E. coli 菌血症，第二天就退燒了。要打多久、要不要追血液培養？',
  cards: ['id-bsi-org', 'id-deesc'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。鍾奶奶因右側腎盂腎炎住院，血液與尿液培養都是 **E. coli**（ceftriaxone S、**ciprofloxacin S**、TMP-SMX R）。用 **ceftriaxone** 後 **36 小時退燒**。',
        '超音波沒有阻塞。她沒有導管、沒有植入物，現在第 3 天，可以進食。'
      ],
      clue: ['72F；E. coli 菌血症（泌尿道來源）', '**36 h 退燒**；無阻塞', '無導管或硬體；cipro S'],
      choices: [{ label: '決定後續', next: 'decide' }]
    },
    decide: {
      text: '接下來？',
      choices: [
        { label: '**不需重複血液培養**；改**口服 ciprofloxacin**，總療程 **7 天**', next: 'end_good' },
        { label: '每天追血液培養到連續兩套陰性', next: 'd_rbcx' },
        { label: 'IV ceftriaxone 14 天', next: 'end_long',
          why: 'GNB 菌血症 7-14 天；快速改善、來源控制好的泌尿道來源，7 天就足夠，而且可以依藥敏改口服。' }
      ]
    },
    d_rbcx: {
      text: '主治醫師搖頭。',
      feedback: 'GNB 菌血症**臨床改善時不需要重複血液培養**，除非有血管導管或硬體。和 S. aureus 不一樣。',
      choices: [{ label: '重新決定', next: 'decide' }]
    },
    end_long: {
      text: '鍾奶奶多住了十天，出院時已經走不太動。',
      ending: {
        grade: 'ok',
        title: 'GNB 菌血症療程過長',
        pearls: ['GNB 菌血症 7-14 天；快速改善可 7 天；改口服']
      }
    },
    end_good: {
      text: '隔天出院，完成 7 天療程，門診追蹤良好。',
      ending: {
        grade: 'good',
        title: 'Uncomplicated E. coli bacteremia',
        pearls: [
          'GNB 菌血症：依藥敏，7-14 天',
          '臨床改善、無導管或硬體 -> 不需重複血液培養',
          '高生體可用率的口服藥降階'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id6-gallolyticus',
  chapter: 'ID6',
  title: '找不到來源的鏈球菌',
  patient: '69 歲男性 · 退休公務員',
  summary: '發燒三天，血液培養長了 Streptococcus gallolyticus，全身找不到感染源。',
  cards: ['id-bsi-org', 'id-bsi'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。何先生發燒三天住院，血液培養 3/3 套：**Streptococcus gallolyticus**（penicillin MIC 0.06）。',
        '沒有心雜音、沒有皮膚傷口、尿液正常、CXR 正常。最近三個月體重減輕 4 公斤，偶爾解黑便。Hb 10.2，MCV 74。'
      ],
      clue: ['69M；**S. gallolyticus 菌血症**（PCN MIC 0.06）', '**沒有明顯來源**', '體重減輕、偶爾黑便、**缺鐵性貧血**'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '勾選你要做的事。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'colon', group: '檢查', label: '**Colonoscopy**', key: true, reveal: true,
            result: '**乙狀結腸 3 cm 腫瘤**，切片 adenocarcinoma', clue: '**Sigmoid adenocarcinoma**',
            miss: 'S. gallolyticus 菌血症沒有明顯來源時一定要做大腸鏡：和大腸腫瘤高度相關。' },
          { id: 'echo', group: '影像', label: '心臟超音波', key: true, reveal: true,
            result: 'TTE 無 vegetation；TEE 也無', clue: '無心內膜炎',
            miss: 'S. gallolyticus 是心內膜炎的典型病原（Duke major criterion），要做心臟超音波。' },
          { id: 'rbcx', group: '培養', label: '重複血液培養', result: '治療後陰性' }
        ]
      }
    },
    tx: {
      text: '菌血症，PCN 敏感，沒有心內膜炎。用藥？',
      choices: [
        { label: '**Penicillin G** 或 **ceftriaxone 2 g qd**；轉介大腸直腸外科', next: 'end_good' },
        { label: 'Vancomycin', next: 't_vanco' }
      ]
    },
    t_vanco: {
      text: '主治醫師搖頭。',
      feedback: 'Vancomycin 只用在 **penicillin 抗藥**的鏈球菌。PCN 敏感就用 penicillin G 或 ceftriaxone。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '何先生完成抗生素療程後接受乙狀結腸切除，第二期大腸癌，接受輔助化療。',
      ending: {
        grade: 'good',
        title: 'S. gallolyticus bacteremia 與大腸癌',
        pearls: [
          'S. gallolyticus 菌血症無明顯來源 -> colonoscopy',
          '鏈球菌：PCN 敏感用 PCN G 或 ceftriaxone；抗藥用 vancomycin',
          '心臟超音波排除心內膜炎'
        ]
      }
    }
  }
});
