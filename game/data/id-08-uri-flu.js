// ID 08 Upper respiratory tract infections, acute bronchitis, influenza, COVID-19.
// Source: Washington Manual Ch 14 (source/Washington ID.txt, lines 778-928) + Ch 15 anti-influenza / anti-COVID agents.

RPG.registerCards('ID8', [
  {
    id: 'id-uri-path',
    title: '上呼吸道感染與支氣管炎 致病機轉',
    points: [
      '絕大多數是**病毒**（rhinovirus、adenovirus、coronavirus、influenza）：黏膜發炎、分泌物增加；**膿痰或膿鼻涕不代表細菌**（顏色來自 neutrophil 的 myeloperoxidase）',
      '**GAS 咽炎**：M protein 抗吞噬；不治療會有化膿性併發症（扁桃腺周圍膿瘍），以及 M protein 與心臟、關節組織的**分子相似性** -> **急性風濕熱**；治療目的是預防這些併發症',
      '**Epiglottitis**：會厭與聲門上組織蜂窩性組織炎、快速腫脹 -> **上呼吸道阻塞**；Hib 疫苗普及後成人比兒童多',
      '**Bacterial sinusitis**：病毒感染讓竇口水腫阻塞、纖毛清除變差 -> 分泌物滯留 -> 少數（< 2%）繼發細菌感染；所以要等 **> 10 天**',
      '**Pertussis**：B. pertussis 的 pertussis toxin、tracheal cytotoxin 破壞纖毛上皮 -> 數週的**陣發性咳嗽**；黏膜傷害是 toxin 造成，晚期抗生素無法縮短病程，主要是**減少傳染**'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-pharyngitis',
    title: 'Pharyngitis',
    points: [
      '**病毒最常見**；成人 **GAS 只佔 5-15%**，但 60% 的成人咽炎拿到抗生素',
      '臨床很難區分病毒與細菌；**發燒、頸部淋巴結腫大、扁桃腺滲出、喉嚨痛**',
      '想到：**急性 HIV**（發燒、疲倦、皮疹、咽炎 + 危險因子）；**化膿性併發症**（單側劇痛、**含糊聲音**、**牙關緊閉**、吞嚥困難 -> 扁桃腺周圍或咽後膿瘍）',
      '**檢驗對象**：接觸 strep 咽炎者、明顯感染徵象（發燒、滲出、淋巴結）、症狀持續、**風濕熱病史**',
      '**RADT** 敏感度與特異度 > 90%；**陰性不能完全排除**，高度懷疑時做咽喉培養',
      '依情境：SARS-CoV-2、EBV（monospot）、HIV、咽部 **GC NAAT**',
      '**大部分自限，不需要抗生素**'
    ],
    table: {
      head: ['GAS 治療', ''],
      rows: [
        ['適應症', 'RADT 或培養陽性；風濕熱高風險；高度懷疑等培養時'],
        ['第一線', '**Penicillin V 500 mg PO q12h x 10 d**、**amoxicillin 500 mg q12h x 10 d**，或 **benzathine PCN G 1.2 MU IM 一次**'],
        ['PCN 過敏', 'Clindamycin 300 mg q8h x 10 d、azithromycin 500 mg day 1 + 250 mg day 2-5，或 cephalosporins'],
        ['注意', '部分社區 GAS 對 **macrolide 抗藥可達 15%**']
      ]
    },
    refs: ['CID 2012;55:1279（IDSA GAS pharyngitis 2012）']
  },
  {
    id: 'id-epiglottitis',
    title: 'Epiglottitis',
    points: [
      '**呼吸道急症**：發炎可導致呼吸道阻塞',
      '病原：**H. influenzae type b**、S. pneumoniae、S. aureus、GABHS；也可能是病毒或黴菌',
      '**發燒、喉嚨痛、吞嚥痛、流口水、含糊聲音、吞嚥困難**，但**口咽檢查正常** -> 臨床診斷；**吸氣性喘鳴（stridor）= 即將阻塞**',
      '檢查：咽喉與血液培養；頸部側面 X 光 **thumb print sign**；床邊超音波 **alphabet P sign**；確診靠**直接喉鏡**看到會厭',
      '**呼吸道穩定優先**；所有疑似病例**會診耳鼻喉科**',
      '抗生素要涵蓋 H. influenzae：**ceftriaxone 2 g IV qd** 或 cefotaxime；擔心 MRSA 加 **vancomycin 或 clindamycin**；常一起給類固醇'
    ]
  },
  {
    id: 'id-sinusitis',
    title: 'Rhinosinusitis',
    points: [
      '急性：多為**上呼吸道病毒**；細菌（S. pneumoniae、H. influenzae、M. catarrhalis、厭氧菌）**< 2%**，症狀 **> 10 天**才考慮',
      '免疫低下要想 **Mucor、Rhizopus、Aspergillus**',
      '急性（< 4 週）：膿性鼻涕、鼻塞、臉部或牙齒痛、鼻竇壓痛 ± 發燒；**慢性 > 12 週**：膿性分泌物、鼻塞、臉部壓迫、嗅覺下降 + 發炎證據',
      '診斷要有黏膜病變的客觀證據（鼻鏡、內視鏡）；需要影像用 **limited sinus CT**，**不建議 X 光**；**鼻腔拭子培養沒有幫助**',
      '急性：**症狀治療為主**（口服去充血劑、止痛，± 短期局部去充血劑或鼻內類固醇）',
      '抗生素只在**嚴重持續 >= 10 天**或症狀治療失敗：**amoxicillin-clavulanate 875/125 mg q12h x 5-7 天**；β-lactam 過敏或失敗 -> doxycycline 或呼吸道 FQ；**TMP-SMX、macrolides 抗藥高，不建議**',
      '慢性：局部或全身類固醇；抗生素角色不明，用的話首選 amox-clav（PCN 過敏 clindamycin）；部分需要內視鏡手術'
    ],
    refs: ['Otolaryngol Head Neck Surg 2015;152:598（adult sinusitis）']
  },
  {
    id: 'id-bronchitis',
    title: 'Acute bronchitis 與 pertussis',
    points: [
      '**多為病毒**；少數 M. pneumoniae、C. pneumoniae、**B. pertussis**；**超過三分之二**的病人拿到抗生素',
      '咳嗽 > 5 天 ± 痰、喘鳴、rhonchi；**一半病人有膿痰**；發燒少見',
      '**臨床診斷**；**不建議痰培養**，**胸部 X 光不太會改變處置**；應驗 SARS-CoV-2，高風險者驗 influenza',
      '**治療是症狀治療**；健康人的非 pertussis 支氣管炎，**抗生素沒有好處**',
      '**Pertussis**：咳嗽 > 2 週合併**陣發性咳嗽、吸氣哮聲（whoop）、咳後嘔吐** -> **鼻咽拭子 PCR 或培養**',
      '咳嗽 **3 週內**、臨床懷疑就治療：**azithromycin 500 mg day 1，250 mg day 2-5**，或 clarithromycin 500 mg q12h x 7 天',
      '**通報衛生單位**做接觸者追蹤，接觸者用 **azithromycin 預防**'
    ],
    refs: ['JAMA 2014;311:2020（antibiotic prescribing for bronchitis）']
  },
  {
    id: 'id-flu-path',
    title: 'Influenza 與 COVID-19 致病機轉',
    points: [
      '**Influenza**：HA 結合呼吸道上皮的 sialic acid 進入細胞；**neuraminidase** 切斷 sialic acid 讓新病毒釋出 -> **neuraminidase inhibitor** 阻止擴散，所以**越早給越有效**',
      '**Antigenic drift**（點突變）-> 每年要打新疫苗；**antigenic shift**（不同宿主病毒基因重組）-> **大流行**',
      '上皮受損與免疫改變 -> **繼發細菌肺炎**，典型是 **S. aureus**（含 MRSA，壞死性）',
      '**COVID-19**：spike 蛋白經 **ACE2** 進入細胞；**早期**（5-7 天內）以**病毒複製**為主 -> 抗病毒藥；**後期**以**過度發炎**為主 -> **dexamethasone**、IL-6 或 JAK 抑制劑',
      '這就是為什麼 COVID-19 的治療依「病程時間」與「需不需要氧氣」分層'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文有簡述 COVID-19 的兩階段治療。'
  },
  {
    id: 'id-flu',
    title: 'Influenza',
    points: [
      '冬季流行；發燒、頭痛、肌痛、咳嗽、流鼻水、倦怠，可持續 2 週',
      '流行季可臨床診斷；確認用鼻咽 **PCR**（最敏感）、rapid antigen、DFA；**antigen 陰性不能排除**',
      '抗病毒藥要在症狀 **24-48 h 內**才對免疫正常者有效；但**住院或高風險併發症**的人 **> 48 h 仍要給**',
      '**高風險**：> 65 歲、長照機構、**懷孕與產後 2 週**、慢性病（肺、心、癌症、DM、CKD、肝病、免疫低下、HIV、移植、病態肥胖）',
      '併發症：influenza 肺炎、**繼發細菌肺炎（典型 S. aureus）**',
      '**每年疫苗**：所有 >= 6 個月的人，效果 50-90%'
    ],
    table: {
      head: ['藥物', '劑量與重點'],
      rows: [
        ['**Oseltamivir**', '**75 mg PO q12h x 5 d**；依腎功能調整；副作用：頭暈、頭痛、神經精神症狀'],
        ['Zanamivir', '10 mg 吸入 q12h x 5 d；**呼吸道疾病者可能支氣管痙攣**'],
        ['Peramivir', '600 mg IV 單次；無法口服時'],
        ['Baloxavir', '單次口服（< 80 kg 40 mg，>= 80 kg 80 mg）；endonuclease inhibitor；治療中可能出現抗藥'],
        ['M2 inhibitors', 'Amantadine、rimantadine：**抗藥高，不建議**']
      ]
    },
    note: '各季流行株的抗藥性不同，依 CDC 每年資料選藥。',
    refs: ['MMWR Recomm Rep 2011;60(1):1（ACIP antivirals for influenza）']
  },
  {
    id: 'id-covid',
    title: 'COVID-19',
    points: [
      '潛伏期平均 5 天（2-7 天）；輕中度：鼻塞、咳嗽、發燒、喉嚨痛、頭痛、肌痛、腸胃症狀；重症：**急性低氧性呼吸衰竭**、器官衰竭、休克',
      '**Long COVID**：症狀持續 3 個月（疲倦、喘、肌痛胸痛、咳嗽、嗅覺喪失）',
      '診斷：鼻拭子 **RT-PCR**（最敏感，有症狀者陰性可排除）或 antigen',
      '高風險：> 65 歲、免疫低下、慢性病（肺、心、DM、CKD、肝病、病態肥胖）',
      '**繼發細菌肺炎不常見**',
      '**疫苗**是最可靠的預防'
    ],
    table: {
      head: ['情境', '治療'],
      rows: [
        ['**門診高風險**（症狀 5 天內）', '**Nirmatrelvir-ritonavir 300/100 mg q12h x 5 d**；**交互作用很多**一定要逐一檢查；CrCl 30-59 nirmatrelvir 減半；CrCl < 30 或重度肝損避免'],
        ['**住院**', '**Remdesivir**（200 mg 一次，之後 100 mg qd x 3-10 天）縮短恢復時間；GFR < 30 避免（賦形劑蓄積）；會造成過敏反應、轉胺酶上升'],
        ['**需要氧氣**', '**Dexamethasone 6 mg qd x 10 天**或到出院；沒有時用等效類固醇'],
        ['dexamethasone 下仍惡化、住院 **96 h 內**', '加 **baricitinib**（JAK）或 **tocilizumab**（IL-6）'],
        ['不建議', '住院病人用單株抗體、恢復期血漿：沒有明確好處']
      ]
    },
    refs: ['CID 2024;78:e250（IDSA COVID-19 guideline）']
  }
]);

RPG.registerCase({
  id: 'id8-pharyngitis',
  chapter: 'ID8',
  title: '吞口水像刀割',
  patient: '32 歲女性 · 幼兒園老師',
  summary: '發燒、喉嚨痛到吞不下，班上好幾個小孩剛得了鏈球菌咽炎。',
  cards: ['id-uri-path', 'id-pharyngitis'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診。何老師昨天開始發燒 38.9°C、**喉嚨劇痛**。**沒有咳嗽、沒有流鼻水**。班上上週有三個小孩確診 strep 咽炎。',
        '扁桃腺紅腫有**白色滲出物**，**前頸部淋巴結**腫大壓痛。聲音正常，可以張口，懸壅垂居中。'
      ],
      clue: ['32F；**接觸 strep 咽炎**', '發燒、扁桃腺滲出、前頸淋巴結', '**無咳嗽、無流鼻水**', '無牙關緊閉、聲音正常'],
      choices: [{ label: '評估', next: 'test' }]
    },
    test: {
      text: '要怎麼確定？',
      choices: [
        { label: '做 **RADT**（陰性但仍高度懷疑就做咽喉培養）', next: 'radt' },
        { label: '這麼典型，不用驗直接開抗生素', next: 't_notest' },
        { label: '喉嚨痛多數是病毒，症狀治療就好', next: 't_none' }
      ]
    },
    t_notest: {
      text: '主治醫師搖頭。',
      feedback: '臨床上很難區分病毒與細菌。她符合檢驗的條件（接觸、明顯感染徵象），**先驗**再決定，RADT 幾分鐘就有結果。',
      choices: [{ label: '重新決定', next: 'test' }]
    },
    t_none: {
      text: '主治醫師搖頭。',
      feedback: '她有接觸史和明顯的感染徵象，符合檢驗 GAS 的條件。GAS 要治療以預防化膿性併發症和風濕熱。',
      choices: [{ label: '重新決定', next: 'test' }]
    },
    radt: {
      text: 'RADT：**陽性**。治療？',
      clue: ['**RADT (+)**'],
      choices: [
        { label: '**Penicillin V 500 mg q12h** 或 **amoxicillin 500 mg q12h x 10 天**（或 benzathine PCN G 1.2 MU IM 一次）', next: 'cowork' },
        { label: 'Azithromycin 5 天，比較方便', next: 't_azi' },
        { label: 'Amoxicillin 3 天', next: 't_short' }
      ]
    },
    t_azi: {
      text: '主治醫師搖頭。',
      feedback: 'Macrolide 是 **PCN 過敏**時的替代，而且部分社區 GAS 對 macrolide 抗藥可達 15%。她沒有過敏，用 penicillin 或 amoxicillin。',
      choices: [{ label: '重新決定', next: 'radt' }]
    },
    t_short: {
      text: '主治醫師搖頭。',
      feedback: 'GAS 咽炎口服 penicillin 或 amoxicillin 是 **10 天**。',
      choices: [{ label: '重新決定', next: 'radt' }]
    },
    cowork: {
      text: '同一天，她的同事也來看診：喉嚨痛兩天、**流鼻水、咳嗽**、聲音沙啞，沒有發燒，扁桃腺沒有滲出。同事說：「我也要抗生素。」',
      clue: ['同事：流鼻水、咳嗽、沙啞，無發燒、無滲出'],
      choices: [
        { label: '典型**病毒性**上呼吸道感染：**不需要檢驗、不給抗生素**，症狀治療', next: 'end_good' },
        { label: '同一間學校，也開 amoxicillin', next: 'end_abx',
          why: '流鼻水、咳嗽、沙啞、沒有發燒是病毒的表現。大部分咽炎自限，不需要抗生素。' }
      ]
    },
    end_abx: {
      text: '同事吃了 amoxicillin，三天後起了全身紅疹，之後被標為 penicillin 過敏。',
      ending: {
        grade: 'ok',
        title: '病毒性咽炎開了抗生素',
        pearls: ['病毒性 URI 不給抗生素']
      }
    },
    end_good: {
      text: '何老師兩天後退燒。同事一週內自行痊癒。',
      ending: {
        grade: 'good',
        title: 'GAS pharyngitis',
        pearls: [
          '成人咽炎 GAS 只佔 5-15%；多數不需抗生素',
          '符合條件才驗 RADT；陰性但高度懷疑做培養',
          'PCN V 或 amoxicillin 10 天，或 benzathine PCN G 單次',
          '注意：急性 HIV、扁桃腺周圍膿瘍（單側劇痛、含糊聲、牙關緊閉）'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id8-epiglottitis',
  chapter: 'ID8',
  title: '流口水的成年人',
  patient: '46 歲男性 · 計程車司機',
  summary: '喉嚨痛到口水都吞不下，說話像含著東西，但喉嚨看起來沒什麼。',
  cards: ['id-uri-path', 'id-epiglottitis'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。邱先生今天早上開始喉嚨痛，下午痛到**口水都吞不下**、一直**流口水**，說話**像含著熱馬鈴薯**。',
        'T 39.2°C。他**坐著往前傾**，不肯躺下。剛剛開始出現輕微的**吸氣性喘鳴**。',
        '張口看口咽：**沒什麼異常**，扁桃腺不大。'
      ],
      clue: ['46M；劇烈喉嚨痛、**流口水**、**含糊聲音**', '**口咽檢查正常**', '前傾坐姿；**輕微 stridor**'],
      choices: [{ label: '處置', next: 'airway' }]
    },
    airway: {
      text: '你高度懷疑 epiglottitis，而且已經有 stridor。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'abx',
        options: [
          { id: 'ent', group: '會診', label: '**立即會診耳鼻喉科與麻醉科**，準備困難呼吸道', key: true, reveal: true,
            result: '在手術室以 fiberoptic 喉鏡看到**會厭櫻桃紅色腫脹**，清醒下插管', clue: '**喉鏡：會厭紅腫**；已插管',
            miss: 'Stridor 代表即將阻塞，**呼吸道穩定優先**，所有疑似病例都要會診耳鼻喉科。' },
          { id: 'bcx', group: '培養', label: '血液培養（呼吸道安全後的咽喉培養）', key: true, reveal: true,
            result: '血液培養：**H. influenzae**', clue: '血培養：**H. influenzae**',
            miss: '咽喉與血液培養幫助確定病原。' },
          { id: 'xr', group: '影像', label: '頸部側面 X 光', result: '**Thumb print sign**', clue: 'Thumb print sign' },
          { id: 'depress', group: '理學', label: '用壓舌板仔細檢查下咽部', result: '已撤回',
            waste: '可能誘發喉痙攣與完全阻塞。在可以立即建立呼吸道的地方用喉鏡看。' },
          { id: 'ct', group: '影像', label: '送 CT 檢查頸部', result: '已撤回',
            waste: '有 stridor 的病人躺平送 CT 可能完全阻塞。先確保呼吸道。' }
        ]
      }
    },
    abx: {
      text: '呼吸道安全了。抗生素？',
      choices: [
        { label: '**Ceftriaxone 2 g IV qd**（涵蓋 H. influenzae）；常合併類固醇', next: 'end_good' },
        { label: 'Amoxicillin PO', next: 'a_amox' },
        { label: 'Clindamycin 單用', next: 'a_clinda' }
      ]
    },
    a_amox: {
      text: '主治醫師搖頭。',
      feedback: '插管中的重症要 IV，而且 H. influenzae 可能產生 β-lactamase。用 **ceftriaxone** 或 cefotaxime。',
      choices: [{ label: '重新決定', next: 'abx' }]
    },
    a_clinda: {
      text: '主治醫師搖頭。',
      feedback: 'Clindamycin 不涵蓋 H. influenzae。它和 vancomycin 是**擔心 MRSA 時加上去**的。',
      choices: [{ label: '重新決定', next: 'abx' }]
    },
    end_good: {
      text: '三天後會厭消腫，順利拔管。',
      ending: {
        grade: 'good',
        title: 'Adult epiglottitis（H. influenzae）',
        pearls: [
          '劇痛、流口水、含糊聲、吞嚥困難，但口咽正常 -> epiglottitis',
          'Stridor = 即將阻塞；呼吸道優先，會診耳鼻喉科',
          'Ceftriaxone 或 cefotaxime；擔心 MRSA 加 vanco 或 clindamycin；常給類固醇',
          'X 光 thumb print；超音波 alphabet P；喉鏡確診'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id8-sinusitis',
  chapter: 'ID8',
  title: '鼻塞第四天',
  patient: '38 歲女性 · 銀行行員',
  summary: '鼻塞、黃鼻涕、臉頰脹痛四天，想要抗生素。',
  cards: ['id-uri-path', 'id-sinusitis'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診。許小姐四天前感冒後開始**鼻塞、黃綠色鼻涕**、兩側臉頰脹痛，低頭更痛。沒有發燒。',
        '她說：「每次都要吃抗生素才會好，可以先開嗎？」'
      ],
      clue: ['38F；感冒後鼻塞、膿鼻涕、臉頰痛 **4 天**', '無發燒'],
      choices: [{ label: '處置', next: 'early' }]
    },
    early: {
      text: '急性 rhinosinusitis，第 4 天。',
      choices: [
        { label: '多數是病毒：**症狀治療**（口服去充血劑、止痛、鼻內類固醇）；**> 10 天**仍嚴重再回診', next: 'later' },
        { label: '膿鼻涕代表細菌感染，開 amoxicillin-clavulanate', next: 'e_abx' },
        { label: '先照鼻竇 X 光確認', next: 'e_xray' },
        { label: '鼻腔拭子培養', next: 'e_swab' }
      ]
    },
    e_abx: {
      text: '主治醫師搖頭。',
      feedback: '急性鼻竇炎多數是病毒，細菌 **< 2%**，**症狀 > 10 天**才考慮。膿鼻涕不代表細菌。',
      choices: [{ label: '重新決定', next: 'early' }]
    },
    e_xray: {
      text: '主治醫師搖頭。',
      feedback: '**不建議 X 光**。需要影像時用 limited sinus CT，而且單純急性鼻竇炎通常不需要。',
      choices: [{ label: '重新決定', next: 'early' }]
    },
    e_swab: {
      text: '主治醫師搖頭。',
      feedback: '**鼻腔拭子培養沒有幫助**，長出的是鼻腔定植菌。真的需要時要經內視鏡或鼻竇穿刺取檢體。',
      choices: [{ label: '重新決定', next: 'early' }]
    },
    later: {
      text: '第 12 天她回診：症狀沒有改善，臉頰痛更厲害，昨天開始燒到 38.4°C。她沒有藥物過敏。',
      clue: ['**第 12 天**仍嚴重、新發燒'],
      choices: [
        { label: '**Amoxicillin-clavulanate 875/125 mg q12h x 5-7 天**', next: 'end_good' },
        { label: 'Azithromycin 3 天', next: 'l_azi' },
        { label: 'TMP-SMX', next: 'l_sxt' }
      ]
    },
    l_azi: {
      text: '主治醫師搖頭。',
      feedback: '**Macrolides 抗藥率高**，不建議作為經驗性治療。',
      choices: [{ label: '重新決定', next: 'later' }]
    },
    l_sxt: {
      text: '主治醫師搖頭。',
      feedback: '**TMP-SMX 抗藥率高**，不建議作為經驗性治療。β-lactam 過敏的替代是 doxycycline 或呼吸道 FQ。',
      choices: [{ label: '重新決定', next: 'later' }]
    },
    end_good: {
      text: '吃藥三天後退燒，一週後症狀消失。',
      ending: {
        grade: 'good',
        title: 'Acute bacterial rhinosinusitis',
        pearls: [
          '急性鼻竇炎多為病毒；細菌 < 2%',
          '先症狀治療；嚴重持續 >= 10 天或治療失敗才給抗生素',
          'Amox-clav 5-7 天；替代 doxycycline 或呼吸道 FQ；不用 TMP-SMX、macrolides',
          '不照 X 光、不做鼻腔拭子；免疫低下要想黴菌'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id8-pertussis',
  chapter: 'ID8',
  title: '咳到吐的第三週',
  patient: '41 歲男性 · 業務',
  summary: '咳嗽一週來要抗生素，三週後咳到吐、喘不過氣。',
  cards: ['id-uri-path', 'id-bronchitis'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診。賴先生咳嗽 6 天，有黃痰，輕微喉嚨痛，沒有發燒。肺部聽診有少許 rhonchi，生命徵象正常。',
        '他說：「下週要去大陸出差，開個抗生素讓我快點好。」'
      ],
      clue: ['41M；咳嗽 6 天、黃痰', '無發燒、生命徵象正常'],
      choices: [{ label: '處置', next: 'week1' }]
    },
    week1: {
      text: 'Acute bronchitis。',
      choices: [
        { label: '**症狀治療**，不給抗生素；驗 SARS-CoV-2', next: 'week3' },
        { label: '黃痰，開 azithromycin', next: 'w_abx' },
        { label: '照 CXR、送痰培養', next: 'w_cxr' }
      ]
    },
    w_abx: {
      text: '主治醫師搖頭。',
      feedback: 'Acute bronchitis 多為病毒，**一半病人有膿痰**；健康人的非 pertussis 支氣管炎**抗生素沒有好處**。',
      choices: [{ label: '重新決定', next: 'week1' }]
    },
    w_cxr: {
      text: '主治醫師搖頭。',
      feedback: '生命徵象正常、沒有肺炎徵象，**CXR 不太會改變處置**；**不建議痰培養**。',
      choices: [{ label: '重新決定', next: 'week1' }]
    },
    week3: {
      text: [
        '第 18 天他又來了：咳嗽沒好，反而變成**一陣一陣停不下來的咳**，咳完**吸氣時有「咻」的聲音**，好幾次**咳到吐**。咳完之間人看起來還好。',
        '家裡有一個 2 個月大的嬰兒，還沒打疫苗。'
      ],
      clue: ['咳嗽 **> 2 週**：**陣發性咳嗽、whoop、咳後嘔吐**', '家中 **2 個月大未接種嬰兒**'],
      choices: [{ label: '評估', next: 'pert' }]
    },
    pert: {
      text: '你懷疑 pertussis。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'end_check',
        options: [
          { id: 'pcr', group: '檢驗', label: '**鼻咽拭子 B. pertussis PCR**', key: true, reveal: true,
            result: '**陽性**', clue: '**B. pertussis PCR (+)**',
            miss: '鼻咽拭子 PCR 或培養確診。' },
          { id: 'azi', group: '用藥', label: '**Azithromycin 500 mg day 1，250 mg day 2-5**', key: true, reveal: true,
            result: '已開', clue: 'Azithromycin 5 天',
            miss: '咳嗽 3 週內、臨床懷疑就要治療，主要是減少傳染。' },
          { id: 'report', group: '公衛', label: '**通報衛生單位**', key: true, reveal: true,
            result: '已通報，衛生局追蹤接觸者', clue: '已通報',
            miss: 'Pertussis 要通報，做接觸者追蹤與預防。' },
          { id: 'contact', group: '公衛', label: '**家中接觸者（含嬰兒）azithromycin 預防**', key: true, reveal: true,
            result: '嬰兒與太太已給予預防', clue: '家人已預防',
            miss: '接觸者要用 azithromycin 預防，**嬰兒是 pertussis 致死的高風險族群**。' },
          { id: 'cxr', group: '影像', label: 'CXR', result: '正常' }
        ]
      }
    },
    end_check: {
      text: '一個月後他的咳嗽漸漸減少。嬰兒沒有發病。',
      ending: {
        grade: 'good',
        title: 'Pertussis',
        pearls: [
          'Acute bronchitis：病毒為主；膿痰不代表細菌；不給抗生素、不做痰培養',
          '> 2 週 + 陣發咳、whoop、咳後嘔吐 -> pertussis，鼻咽 PCR',
          '3 週內懷疑就治療：azithromycin 5 天或 clarithromycin 7 天',
          '通報衛生單位；接觸者 azithromycin 預防'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id8-flu',
  chapter: 'ID8',
  title: '流感第四天',
  patient: '73 歲男性 · COPD',
  summary: '流感季，發燒全身痠痛第四天，越來越喘，被送來住院。',
  cards: ['id-flu-path', 'id-flu'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。葉伯伯有 COPD，今年**沒打流感疫苗**。四天前突然高燒、頭痛、全身痠痛、咳嗽，今天越來越喘。',
        'T 38.9°C、RR 26、SpO2 89%。CXR 無明顯浸潤。**Influenza A rapid antigen：陰性**。',
        '社區正在流感高峰。'
      ],
      clue: ['73M；COPD、**未接種**', '典型流感症狀 **第 4 天**（> 48 h）', '需要氧氣、住院', '**Rapid antigen 陰性**；流感高峰'],
      choices: [{ label: '處置', next: 'dx' }]
    },
    dx: {
      text: 'Rapid antigen 陰性。',
      choices: [
        { label: '**Antigen 陰性不能排除**：送**鼻咽 PCR**，同時開始 **oseltamivir 75 mg q12h**', next: 'late' },
        { label: '不是流感，找別的原因', next: 'd_neg' }
      ]
    },
    d_neg: {
      text: '主治醫師搖頭。',
      feedback: '**Rapid antigen 陰性不能排除流感**。流感季的典型症狀要送 **PCR**（最敏感）。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    late: {
      text: '藥局問：症狀已經第 4 天，超過 48 小時了，還要給 oseltamivir 嗎？',
      choices: [
        { label: '**要**：住院、高風險（> 65 歲、COPD）的病人，**> 48 h 仍不應停**', next: 'twist' },
        { label: '超過 48 小時就沒效了，停掉', next: 'l_stop' }
      ]
    },
    l_stop: {
      text: '主治醫師搖頭。',
      feedback: '48 h 的時間限制是對**免疫正常的門診病人**。**住院或高風險**的病人超過 48 h 也不應該不給。',
      choices: [{ label: '重新決定', next: 'late' }]
    },
    twist: {
      text: [
        'PCR 證實 **influenza A**。第 3 天他原本退燒，今天又燒到 39.5°C，咳出**血痰**，血壓下降。',
        'CT：右上葉**壞死性肺炎、空洞**。痰 Gram stain：**GPC in clusters**。'
      ],
      clue: ['**Influenza A PCR (+)**', '改善後再惡化：**壞死性肺炎**，GPC clusters'],
      choices: [
        { label: '流感後**繼發 S. aureus 肺炎**：加 **vancomycin（或 linezolid）**涵蓋 MRSA + β-lactam，等培養', next: 'end_good' },
        { label: '流感惡化，換成 IV peramivir', next: 'w_pera' }
      ]
    },
    w_pera: {
      text: '主治醫師搖頭。',
      feedback: '改善後又惡化、壞死性肺炎、GPC clusters：這是**繼發細菌性肺炎**，典型是 **S. aureus**（含 MRSA）。',
      choices: [{ label: '重新決定', next: 'twist' }]
    },
    end_good: {
      text: '痰培養 MSSA，改 cefazolin。兩週後出院，衛教每年接種流感疫苗。',
      ending: {
        grade: 'good',
        title: 'Influenza A 合併繼發 S. aureus 肺炎',
        pearls: [
          'Rapid antigen 陰性不能排除，送 PCR',
          'Oseltamivir 75 mg q12h x 5 d；住院或高風險 > 48 h 仍要給',
          '改善後再惡化 -> 繼發細菌肺炎，典型 S. aureus',
          '每年疫苗（>= 6 個月）'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id8-covid-op',
  chapter: 'ID8',
  title: '確診第二天的阿嬤',
  patient: '76 歲女性 · 高血壓、心房顫動',
  summary: '快篩陽性兩天，症狀輕微，女兒問要不要吃抗病毒藥。',
  cards: ['id-flu-path', 'id-covid'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診（視訊）。陳阿嬤喉嚨痛、咳嗽、低燒，**症狀第 2 天**，家用快篩陽性。SpO2 97%。',
        '共病：高血壓、心房顫動。用藥：**amlodipine、simvastatin 40 mg、rivaroxaban**。',
        'Cr 1.3，**eGFR 42**。沒有打過追加劑。'
      ],
      clue: ['76F；COVID-19 **第 2 天**，輕症、不需氧氣', '**高風險**（年齡、未追加）', '用藥：**simvastatin、rivaroxaban**、amlodipine', '**eGFR 42**'],
      choices: [{ label: '決定治療', next: 'tx' }]
    },
    tx: {
      text: '門診、高風險、症狀 5 天內。',
      choices: [
        { label: '**Nirmatrelvir-ritonavir**：**eGFR 30-59 nirmatrelvir 減半**（150/100 mg q12h x 5 d）；**先處理交互作用**', next: 'ddi' },
        { label: '症狀輕微，不用治療', next: 't_none' },
        { label: 'Dexamethasone 6 mg 10 天', next: 't_dex' }
      ]
    },
    t_none: {
      text: '主治醫師搖頭。',
      feedback: '高風險的門診病人在**症狀 5 天內**用 nirmatrelvir-ritonavir 可以減少住院和死亡。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_dex: {
      text: '主治醫師搖頭。',
      feedback: 'Dexamethasone 只給**需要氧氣**的病人。早期輕症以病毒複製為主，用抗病毒藥；早期給類固醇可能有害。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    ddi: {
      text: 'Ritonavir 是強力 CYP3A 抑制劑。她的藥要怎麼調整？',
      choices: [
        { label: '**Simvastatin 暫停**（治療期間與停藥後數天）；**rivaroxaban 濃度會大增**，與心臟科討論暫時改用其他抗凝或換抗病毒藥；amlodipine 監測血壓', next: 'end_good' },
        { label: '只有五天，交互作用不重要', next: 'd_ignore' }
      ]
    },
    d_ignore: {
      text: '主治醫師搖頭。',
      feedback: 'Nirmatrelvir-ritonavir 的交互作用**很多、有些是禁忌**。Simvastatin 會造成 rhabdomyolysis，rivaroxaban 濃度大增可能大出血。**開藥前一定要逐一檢查**。',
      choices: [{ label: '重新決定', next: 'ddi' }]
    },
    end_good: {
      text: '暫停 simvastatin，抗凝藥經心臟科調整。五天療程後症狀緩解，沒有住院。',
      ending: {
        grade: 'good',
        title: 'Outpatient COVID-19 in a high-risk patient',
        pearls: [
          '高風險門診、症狀 5 天內 -> nirmatrelvir-ritonavir 5 天',
          'CrCl 30-59 nirmatrelvir 減半；< 30 避免',
          'Ritonavir 交互作用多：statin、DOAC、免疫抑制劑等一定要檢查',
          'Dexamethasone 只給需要氧氣的人'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id8-covid-ip',
  chapter: 'ID8',
  title: '需要氧氣的第八天',
  patient: '58 歲男性 · 肥胖、糖尿病',
  summary: 'COVID-19 第八天，血氧掉到 88%，住院用氧氣。',
  cards: ['id-flu-path', 'id-covid'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。呂先生 BMI 36、糖尿病，COVID-19 **第 8 天**越來越喘，SpO2 室內空氣 **88%**，鼻導管 3 L 後 94%。',
        'CXR 兩側周邊浸潤。**eGFR 78**。'
      ],
      clue: ['58M；肥胖、DM', 'COVID-19 第 8 天；**需要氧氣**', 'eGFR 78'],
      choices: [{ label: '治療', next: 'tx' }]
    },
    tx: {
      text: '住院、需要氧氣。',
      choices: [
        { label: '**Remdesivir** + **dexamethasone 6 mg qd x 10 天**（或到出院）', next: 'worse' },
        { label: 'Nirmatrelvir-ritonavir', next: 't_nr' },
        { label: '加 ceftriaxone + azithromycin 預防細菌感染', next: 't_abx' },
        { label: '恢復期血漿', next: 't_plasma' }
      ]
    },
    t_nr: {
      text: '主治醫師搖頭。',
      feedback: 'Nirmatrelvir-ritonavir 是給**門診**高風險、症狀 5 天內的病人。住院用 **remdesivir**，需要氧氣加 **dexamethasone**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_abx: {
      text: '主治醫師搖頭。',
      feedback: 'COVID-19 **繼發細菌肺炎不常見**，沒有證據不要常規給抗生素。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_plasma: {
      text: '主治醫師搖頭。',
      feedback: '單株抗體與恢復期血漿在住院病人**沒有明確好處**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    worse: {
      text: '住院第 2 天（約 48 小時），他氧氣需求升到 high-flow 40 L、FiO2 60%，CRP 持續上升。',
      clue: ['Dexamethasone 下仍惡化，**住院 48 h**'],
      choices: [
        { label: '**加 baricitinib**（或 tocilizumab）', next: 'end_good' },
        { label: '把 dexamethasone 加到 20 mg', next: 'w_dex' }
      ]
    },
    w_dex: {
      text: '主治醫師搖頭。',
      feedback: 'Dexamethasone 下仍惡化、住院 **96 h 內**，證據支持的是加**免疫調節劑**：baricitinib（JAK）或 tocilizumab（IL-6）。',
      choices: [{ label: '重新決定', next: 'worse' }]
    },
    end_good: {
      text: '加 baricitinib 後氧氣需求逐漸下降，第 9 天出院。',
      ending: {
        grade: 'good',
        title: 'Hospitalized COVID-19 requiring oxygen',
        pearls: [
          '住院：remdesivir（GFR < 30 避免）',
          '需要氧氣：dexamethasone 6 mg qd x 10 天',
          '仍惡化且住院 96 h 內：baricitinib 或 tocilizumab',
          '不常規給抗生素；住院不用單株抗體、恢復期血漿'
        ]
      }
    }
  }
});
