// ID 01 Principles of therapy: diagnosis, empiric choice, timing, route, failure, de-escalation, duration, special hosts.
// Source: Washington Manual Ch 14 Principles of Therapy (source/Washington ID.txt, lines 6-51) + Ch 15 Introduction.

RPG.registerCards('ID1', [
  {
    id: 'id-amr-path',
    title: '抗藥性如何產生',
    points: [
      '**Selection pressure**：抗生素殺死敏感菌，原本就存在的少數抗藥菌留下來擴增；用得越廣、越久，選出越多',
      '機轉：**β-lactamase** 水解（ESBL、AmpC、carbapenemase：KPC、OXA-48、MBL）；**改變標的**（PBP2a -> MRSA；D-Ala-D-Lac -> VRE）；**porin 減少**、**efflux pump**；改變 ribosome',
      '**Plasmid** 水平轉移讓抗藥性在菌種間傳播（例如 colistin 抗藥的 **mcr-1**）',
      '受影響的不只是被治療的感染：**腸道菌叢**被破壞 -> **C. difficile**、念珠菌、MDRO colonization',
      'Stewardship 的目的：減少抗藥、避免副作用、降低成本 -> 確認有感染才開、先培養、降階、最短療程'
    ],
    note: '機轉部分為一般教科書內容補充；ESKAPE、mcr-1 見 Ch 14 Table 14-14。'
  },
  {
    id: 'id-principles',
    title: '抗生素使用原則：診斷與選藥',
    points: [
      '**病史與理學檢查**最重要：暴露、性史、旅遊、休閒活動',
      '依需要做 bacterial（需氧/厭氧）、fungal、**AFB** 培養；懷疑**挑剔菌**要先通知微生物室',
      'Gram stain、fungal stain、AFB stain 幫助早期診斷與經驗性選藥；**PCR** 快速找病原與抗藥基因（如 **mecA**）；難培養的菌可做 **16S/18S rRNA** 定序',
      '**先確定真的是需要治療的感染**，再開抗生素',
      '經驗性用藥針對臨床症候群**最可能的病原**',
      '選藥要考慮：**過敏**、先前培養、先前抗生素、本地抗藥（**antibiogram**）、**藥物交互作用**、**感染部位的藥物濃度**',
      '**Infectious disease consultation** 能降低死亡率'
    ],
    table: {
      head: ['問題', '原則'],
      rows: [
        ['**何時開始**', '**重症**：抽完培養**立即**開始經驗性治療；**穩定**：可先不給，完成評估與檢查後再標靶治療'],
        ['**途徑**', '嚴重感染 **IV**；穩定且組織濃度足夠可口服；**菌血症、心內膜炎、骨髓炎**也可以考慮口服'],
        ['**劑量**', '依**腎、肝功能**；部分需要**血中濃度監測**與依體重給藥'],
        ['**交互作用**', '開始前一定要檢查 drug-drug interactions']
      ]
    },
    refs: ['Open Forum Infect Dis 2018;5:ofy026（ID consultation 降低死亡率）']
  },
  {
    id: 'id-failure',
    title: '治療失敗三問',
    points: [
      '病人沒有如預期改善時，依序問三個問題：',
      '**1. 診斷對嗎？** 有沒有其他病原（非典型菌、病毒、黴菌、寄生蟲）？是不是**非感染**（惡性腫瘤、自體免疫）？',
      '**2. 用藥對嗎？** 藥敏、抗藥性、**感染部位穿透**、藥物交互作用、口服吸收、**服藥順從性**',
      '**3. 感染源控制了嗎？** **膿瘍、感染性血栓、CVC、導尿管、人工植入物**',
      '多數「沒反應」不是因為抗生素不夠廣，而是沒有引流、沒有移除異物，或根本診斷錯誤'
    ]
  },
  {
    id: 'id-deesc',
    title: '降階與療程',
    points: [
      '**找到病原、有藥敏後**：降到**最窄效**的處方',
      '**培養陰性**：沒有 **MDRO** 感染、臨床改善 -> **48 小時**考慮降階',
      '**高生體可用率**、在感染組織濃度足夠的口服藥可以作為降階策略（FQ、TMP-SMX、linezolid、metronidazole、clindamycin、doxycycline）',
      '**最短有效療程**：至少到臨床穩定、**退燒 48 小時**',
      '呼吸道、腹腔內、泌尿道、軟組織、**血流感染**都有越來越多證據支持**短療程**',
      '本地、國內、全球的抗藥趨勢幫助選擇經驗性處方'
    ],
    refs: ['Ann Intern Med 2021;174:822（ACP short-course antibiotics）']
  },
  {
    id: 'id-special-host',
    title: '特殊族群：免疫低下、懷孕、哺乳',
    points: [
      '**免疫低下**（HIV/AIDS、器官或幹細胞移植、無脾、化療、類固醇、免疫調節藥）：常見感染表現不典型、要想**伺機性感染**',
      '免疫低下與**嗜中性球低下**：經驗性用藥要更廣，恢復也比一般人慢'
    ],
    table: {
      head: ['懷孕', '藥物'],
      rows: [
        ['**沒有 class A** 抗生素', ''],
        ['常用（class B）', '**Penicillins、cephalosporins**'],
        ['**禁忌**（除非沒有其他選擇）', '**Tetracyclines、fluoroquinolones**'],
        ['**盡量避免**（除非絕對必要）', '**Sulfonamides、aminoglycosides**']
      ]
    },
    note: '許多抗生素會分泌到母乳，哺乳婦女要謹慎使用。'
  }
]);

RPG.registerCase({
  id: 'id1-two-fevers',
  chapter: 'ID1',
  title: '急診的兩床發燒',
  patient: '67 歲男性與 21 歲女性',
  summary: '同一時間兩床發燒：一位血壓掉到 78，一位燒了五天但精神不錯。',
  cards: ['id-amr-path', 'id-principles', 'id-deesc'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診夜班。**A 床**：67 歲男性，糖尿病，畏寒發抖兩小時，**BP 78/44**、HR 126、RR 28，意識有點混亂，右腰痛。',
        '**B 床**：21 歲女大學生，發燒五天、喉嚨痛、很累。BP 112/70、HR 96，精神還可以。診所醫師說「先開抗生素比較保險」，叫她來急診打針。'
      ],
      clue: ['A：67M，**septic shock**（BP 78/44），右腰痛', 'B：21F，發燒 5 天、喉嚨痛，**生命徵象穩定**'],
      choices: [{ label: '先處理 A 床', next: 'a_work' }]
    },
    a_work: {
      text: 'A 床看起來是 urosepsis 合併休克。',
      checklist: {
        prompt: 'A 床醫囑：勾選你要的項目',
        submit: '送出醫囑',
        next: 'a_abx',
        options: [
          { id: 'bcx', group: '培養', label: '血液培養 x 2（兩處周邊）', key: true, reveal: true,
            result: '已抽', clue: 'A：血液培養已送',
            miss: '抗生素前先抽血液培養，但不要因此拖延。' },
          { id: 'ucx', group: '培養', label: 'UA、尿液培養', key: true, reveal: true,
            result: 'Pyuria、nitrite (+)', clue: 'A：UA pyuria、nitrite (+)',
            miss: '懷疑泌尿道來源，抗生素前送尿液培養。' },
          { id: 'fluid', group: '治療', label: '輸液 30 mL/kg、lactate', key: true, reveal: true,
            result: 'Lactate 4.6；輸液中', clue: 'A：lactate 4.6',
            miss: 'Septic shock 要同步復甦。' },
          { id: 'us', group: '影像', label: '床邊腎臟超音波', result: '右側 mild hydronephrosis', clue: 'A：右 mild hydronephrosis' },
          { id: 'wait', group: '其他', label: '等 CT 確定來源再開抗生素', result: '已撤回',
            waste: '重症病人抽完培養就要立刻給經驗性抗生素，不能等影像。' }
        ]
      }
    },
    a_abx: {
      text: 'A 床培養抽完了。抗生素？',
      choices: [
        { label: '**現在**給經驗性 IV 抗生素（例如 pip-tazo），依病史與 antibiogram 選', next: 'b_intro' },
        { label: '等尿液 Gram stain 結果再決定', next: 'a_wait' }
      ]
    },
    a_wait: {
      text: '主治醫師搖頭。',
      feedback: '**重症病人抽完培養就立即開始經驗性治療**。延遲每一小時都增加死亡率。',
      choices: [{ label: '重新決定', next: 'a_abx' }]
    },
    b_intro: {
      text: 'A 床抗生素打上了，泌尿科也來看了。現在去看 B 床。她生命徵象穩定。',
      checklist: {
        prompt: 'B 床：勾選你要做的項目',
        submit: '送出',
        next: 'b_dx',
        options: [
          { id: 'hx', group: '病史', label: '暴露史：旅遊、性史、接觸、動物、藥物', key: true, reveal: true,
            result: '沒有出國；男友上個月也有類似症狀；沒有新藥', clue: 'B：男友上個月類似症狀',
            miss: '病史與暴露史是診斷最重要的一步。' },
          { id: 'pe', group: '理學', label: '咽喉、淋巴結、脾臟、皮膚', key: true, reveal: true,
            result: '扁桃腺腫大有白苔；**後頸部淋巴結**腫大；**脾臟可觸及**；無皮疹', clue: 'B：扁桃腺白苔、**後頸淋巴結**、**脾腫大**',
            miss: '仔細的理學檢查常常就給答案。' },
          { id: 'cbc', group: '檢驗', label: 'CBC/DC、肝功能', key: true, reveal: true,
            result: 'WBC 12,400，**lymphocyte 62%、atypical lymphocytes 18%**；ALT 96', clue: 'B：**atypical lymphocytosis**；ALT 96',
            miss: 'CBC 分類常能區分細菌與病毒。' },
          { id: 'mono', group: '檢驗', label: 'Heterophile antibody（monospot）', result: '**陽性**', clue: 'B：**Monospot (+)**' },
          { id: 'hiv', group: '檢驗', label: 'HIV Ag/Ab', result: '陰性' },
          { id: 'radt', group: '檢驗', label: 'GAS rapid antigen test', result: '陰性' },
          { id: 'bcx', group: '檢驗', label: '血液培養', result: '已撤回',
            waste: '她生命徵象穩定、沒有菌血症的線索，不需要常規血液培養。' }
        ]
      }
    },
    b_dx: {
      text: 'B 床：infectious mononucleosis。診所醫師說的抗生素要打嗎？',
      choices: [
        { label: '**不給抗生素**；支持治療，避免接觸性運動（脾腫大）', next: 'end_good' },
        { label: 'Amoxicillin 10 天，預防細菌感染', next: 'end_amox',
          why: 'EBV 是病毒，抗生素沒有幫助。EBV 患者用 amoxicillin 常出現全身皮疹，之後還被誤標成「penicillin 過敏」。' },
        { label: 'Ceftriaxone 1 g IM 一劑，安撫病人', next: 'end_amox',
          why: '沒有需要治療的細菌感染就不開抗生素。先確定有感染需要治療，是 stewardship 的第一步。' }
      ]
    },
    end_amox: {
      text: 'B 床隔天全身起紅疹，被標記成「penicillin 過敏」。這個標記跟了她很多年。',
      ending: {
        grade: 'bad',
        title: '開了不需要的抗生素',
        pearls: [
          '先確定有需要治療的感染，再開抗生素',
          'EBV + aminopenicillin -> 皮疹，常被誤當過敏'
        ]
      }
    },
    end_good: {
      text: 'A 床尿液與血液培養長出 E. coli，放 stent 後改窄效藥，一週後出院。B 床兩週後恢復，回學校上課。',
      ending: {
        grade: 'good',
        title: '重症立即治療，穩定先評估',
        pearls: [
          '重症：抽完培養立即經驗性治療',
          '穩定：可以先不給抗生素，完成評估後標靶治療',
          '病史（暴露、性史、旅遊）與理學檢查最重要',
          '先確定是需要治療的感染'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id1-failure',
  chapter: 'ID1',
  title: '第四天還在燒的肺炎',
  patient: '63 歲男性 · 餐廳老闆',
  summary: '社區型肺炎住院打了四天抗生素，還是每天燒到 39 度。家屬問要不要換更強的藥。',
  cards: ['id-failure', 'id-principles'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。邱先生因為右下肺炎住院，入院時血液培養長出 **S. pneumoniae**（penicillin、ceftriaxone 都敏感），用 **ceftriaxone + azithromycin**。',
        '今天第 4 天，仍然每天燒到 **39°C**，右胸悶痛，呼吸較喘。家屬問：「是不是要換更強的抗生素？」'
      ],
      clue: ['63M；CAP，**S. pneumoniae 菌血症**（ceftriaxone S）', 'Ceftriaxone + azithromycin **第 4 天仍發燒**', '右胸悶痛、較喘'],
      choices: [{ label: '想想為什麼沒有好', next: 'workup' }]
    },
    workup: {
      text: '治療失敗要問三個問題：診斷對嗎？用藥對嗎？感染源控制了嗎？',
      checklist: {
        prompt: '勾選你要做的評估',
        submit: '送出',
        next: 'act',
        options: [
          { id: 'abx', group: '用藥', label: '確認藥物、劑量、藥敏、有沒有漏給', key: true, reveal: true,
            result: '劑量正確、每劑都有給；菌株對 ceftriaxone 敏感', clue: '用藥正確、菌株敏感',
            miss: '先確認用藥本身：藥敏、劑量、有沒有真的給到。' },
          { id: 'img', group: '影像', label: 'Chest CT 或胸部超音波', key: true, reveal: true,
            result: '右側**大量 loculated pleural effusion**，胸膜增厚（split pleura sign）', clue: '**右側 loculated effusion**',
            miss: '感染源控制了嗎？肺炎沒改善要找 empyema、膿瘍。' },
          { id: 'tap', group: '檢查', label: '胸水穿刺：pH、cell count、Gram stain、culture、protein、LDH', key: true, reveal: true,
            result: '**混濁膿液**；**pH 6.9**；glucose 22；LDH 2,800；Gram stain：GPDC', clue: '**Empyema**（pus、pH 6.9）',
            miss: '肋膜積水一定要抽，分析 pH、細胞、Gram stain、培養。' },
          { id: 'rbcx', group: '培養', label: '重複血液培養', result: '陰性' },
          { id: 'mero', group: '用藥', label: '先改 meropenem + vancomycin', result: '已撤回',
            waste: '菌株對 ceftriaxone 敏感，換更廣的藥不會解決膿胸。' }
        ]
      }
    },
    act: {
      text: '用藥正確，但有膿胸。現在怎麼做？',
      choices: [
        { label: '**放胸管引流**（必要時會診胸腔外科），抗生素維持 ceftriaxone', next: 'end_good' },
        { label: '升級成 meropenem + vancomycin，再觀察三天', next: 'a_broad' },
        { label: '加 IV metronidazole 蓋厭氧菌', next: 'a_metro' }
      ]
    },
    a_broad: {
      text: '主治醫師搖頭。',
      feedback: '用藥本來就對。問題是**感染源沒有控制**：膿胸要引流。換更廣的藥只會增加副作用和抗藥壓力。',
      choices: [{ label: '重新決定', next: 'act' }]
    },
    a_metro: {
      text: '主治醫師搖頭。',
      feedback: '胸水 Gram stain 是 GPDC，與血液培養一致。關鍵是**引流**。',
      choices: [{ label: '重新決定', next: 'act' }]
    },
    end_good: {
      text: '放胸管後流出 900 mL 膿液，兩天內退燒。完成療程後出院。',
      ending: {
        grade: 'good',
        title: 'Pneumococcal pneumonia 合併 empyema',
        pearls: [
          '治療失敗三問：診斷？用藥？感染源控制？',
          'Empyema 要引流',
          '「沒反應」通常不是抗生素不夠廣'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id1-deesc',
  chapter: 'ID1',
  title: '48 小時的抉擇',
  patient: '74 歲男性 · 退休國小校長',
  summary: '肺炎住院開了 vancomycin + cefepime，48 小時後培養都陰性，人也好多了。',
  cards: ['id-deesc', 'id-amr-path'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。劉校長兩天前因為發燒、咳嗽、喘住院，CXR 右下肺浸潤。前一個月因為髖關節手術住院打過 IV 抗生素，所以急診開了 **vancomycin + cefepime**。',
        '現在 **48 小時**：已經退燒 24 小時，SpO2 室內空氣 95%，可以吃東西。'
      ],
      clue: ['74M；肺炎；**近期住院 + IV 抗生素**', 'Vancomycin + cefepime', '48 h：**退燒、改善、能進食**'],
      choices: [{ label: '看結果', next: 'results' }]
    },
    results: {
      text: '你整理 48 小時的資料。',
      checklist: {
        prompt: '勾選你要看的結果',
        submit: '送出',
        next: 'plan',
        options: [
          { id: 'bcx', group: '培養', label: '血液培養', key: true, reveal: true,
            result: '48 h **無生長**', clue: '血液培養陰性',
            miss: '降階前一定要看培養。' },
          { id: 'sp', group: '培養', label: '痰培養（入院時，品質合格）', key: true, reveal: true,
            result: '正常菌叢，**無 S. aureus、無 Pseudomonas**', clue: '痰：無 S. aureus、無 Pseudomonas',
            miss: '痰培養幫助決定能不能停 MRSA 與 Pseudomonas 涵蓋。' },
          { id: 'mrsa', group: '檢驗', label: 'MRSA nasal PCR', key: true, reveal: true,
            result: '**陰性**', clue: '**MRSA nasal PCR (-)**',
            miss: 'MRSA nasal PCR 陰性的陰性預測值高，可以幫助停 vancomycin。' },
          { id: 'cr', group: '檢驗', label: 'Cr', result: '0.9 -> 1.3', clue: 'Cr 0.9 -> 1.3' },
          { id: 'pct', group: '檢驗', label: '重複 CXR', result: '已撤回',
            waste: '臨床改善時影像吸收比臨床慢，重照不會改變降階決定。' }
        ]
      }
    },
    plan: {
      text: '培養陰性、沒有 MDRO、臨床改善、Cr 開始上升。下一步？',
      choices: [
        { label: '**停 vancomycin**，改**口服** amoxicillin-clavulanate；以**最短療程**（臨床穩定、退燒 48 h 後，總共約 5-7 天）', next: 'end_good' },
        { label: '維持原處方，打滿 14 天', next: 'end_full',
          why: '培養陰性、沒有 MDRO、臨床改善，**48 小時**就該考慮降階。Vancomycin 已經讓 Cr 上升。' },
        { label: '停 vancomycin，cefepime 繼續打滿 10 天', next: 'end_half',
          why: '降了一半。他已經能進食、穩定，可以改高生體可用率的口服藥，並用最短有效療程。' }
      ]
    },
    end_full: {
      text: '第 10 天 Cr 升到 2.4，接著出現 **C. difficile** 腹瀉，多住了兩週。',
      ending: {
        grade: 'bad',
        title: '沒有降階',
        pearls: [
          '培養陰性、無 MDRO、改善 -> 48 h 考慮降階',
          '抗生素的代價：AKI、C. difficile、抗藥菌'
        ]
      }
    },
    end_half: {
      text: '劉校長好轉出院，但多住了一週打 IV。',
      ending: {
        grade: 'ok',
        title: '降階不夠徹底',
        pearls: [
          '能吃、穩定 -> 改口服',
          '最短有效療程'
        ]
      }
    },
    end_good: {
      text: '隔天出院，Cr 回到 1.0。完成口服療程，門診追蹤良好。',
      ending: {
        grade: 'good',
        title: '培養陰性的 48 小時降階',
        pearls: [
          '培養陰性、沒有 MDRO 感染、臨床改善 -> 48 h 降階',
          'MRSA nasal PCR 陰性幫助停 vancomycin',
          '高生體可用率的口服藥是降階策略',
          '最短療程：至少到臨床穩定、退燒 48 h'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id1-preg',
  chapter: 'ID1',
  title: '懷孕 12 週的咳嗽',
  patient: '31 歲女性 · 懷孕 12 週',
  summary: '發燒咳嗽三天，X 光是肺炎。之前診所開的藥她不敢吃。',
  cards: ['id-special-host', 'id-principles'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診。蘇小姐懷孕 12 週，第一胎，沒有慢性病。發燒、咳嗽有痰三天。',
        'T 38.4°C、RR 20、SpO2 97%。右下肺有 crackles。CXR：**右下葉 consolidation**。CURB-65 = 0。',
        '前一家診所開了 **doxycycline**，她查了網路不敢吃。'
      ],
      clue: ['31F；**懷孕 12 週**', '門診 CAP，CURB-65 0；無共病', '前診所開 doxycycline'],
      choices: [{ label: '選藥', next: 'tx' }]
    },
    tx: {
      text: '門診、沒有共病的 CAP，而且懷孕。選什麼？',
      choices: [
        { label: '**Amoxicillin 1 g PO q8h**（penicillin，懷孕常用），至少 5 天', next: 'bf' },
        { label: '照原本的 doxycycline 100 mg q12h', next: 't_doxy' },
        { label: 'Levofloxacin 750 mg qd x 5 天', next: 't_fq' },
        { label: '住院打 ceftriaxone + azithromycin', next: 't_admit' }
      ]
    },
    t_doxy: {
      text: '主治醫師搖頭。',
      feedback: '**Tetracyclines** 在懷孕是禁忌（除非沒有其他選擇），會造成胎兒牙齒變色、骨骼影響。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_fq: {
      text: '主治醫師搖頭。',
      feedback: '**Fluoroquinolones** 在懷孕是禁忌（除非沒有其他選擇）。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_admit: {
      text: '主治醫師搖頭。',
      feedback: 'CURB-65 0、SpO2 97%、能吃藥，可以門診治療。懷孕不等於要住院打針。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    bf: {
      text: '她好轉了。她問：「我有個朋友在哺乳，感冒時醫師開了 TMP-SMX 和 gentamicin，這樣可以嗎？」你想到她自己之後也會哺乳。',
      choices: [
        { label: '很多抗生素會分泌到**母乳**，哺乳期用藥都要和醫師確認，sulfonamides、aminoglycosides 在懷孕要盡量避免', next: 'end_good' },
        { label: '生完就沒有限制了', next: 'b_no' }
      ]
    },
    b_no: {
      text: '主治醫師搖頭。',
      feedback: '許多抗生素會分泌到母乳，哺乳婦女要謹慎使用。',
      choices: [{ label: '重新回答', next: 'bf' }]
    },
    end_good: {
      text: '蘇小姐吃完 amoxicillin 痊癒，之後足月生產。',
      ending: {
        grade: 'good',
        title: '懷孕的 CAP',
        pearls: [
          '懷孕沒有 class A 抗生素；penicillins、cephalosporins 常用',
          'Tetracyclines、FQ 禁忌（除非沒有其他選擇）',
          'Sulfonamides、aminoglycosides 盡量避免',
          '許多抗生素會進入母乳'
        ]
      }
    }
  }
});
