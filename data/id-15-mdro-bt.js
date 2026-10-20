// ID 15 MDRO (ESKAPE, C. auris, novel β-lactams), emerging infections and bioterrorism (anthrax, plague, botulism, VHF).
// HAP/VAP, CAUTI and CRBSI are in ID9, ID12 and ID6.
// Source: Washington Manual Ch 14 (source/Washington ID.txt, lines 2013-2247, Table 14-14) + Ch 15 Table 15-1.

RPG.registerCards('ID15', [
  {
    id: 'id-eskape',
    title: 'ESKAPE 與 Candida auris（Table 14-14）',
    points: [
      '**ESKAPE**：**E**. faecium、**S**. aureus、**K**. pneumoniae、**A**. baumannii、**P**. aeruginosa、**E**nterobacter -> 全球院內感染主因',
      '由**不當抗生素使用**選出；多數經 **plasmid** 取得抗藥（例如 colistin 抗藥的 **mcr-1**）',
      '常見：院內 BSI、VAP、IAI、植入物感染',
      '診斷：培養 + 藥敏，**分子或生化檢測抗藥機轉**（β-lactamase、carbapenemase、PBP2a）',
      '依藥敏治療；**一律會診感染科**（降低死亡率）',
      '**C. auris**：多重抗藥念珠菌，**實驗室難鑑定**（常誤認為 **C. haemulonii**）；院內 BSI、傷口、耳朵感染；藥敏前用 **echinocandin**；**接觸隔離**；會診感染科'
    ],
    refs: ['Open Forum Infect Dis 2018;5:ofy026（ID consultation in MDRO）']
  },
  {
    id: 'id-novel-bl',
    title: '新一代抗 GNB 藥物（Table 15-1）',
    table: {
      head: ['藥物', 'ESBL', 'KPC', 'OXA-48', 'MBL', 'CRPA', 'CRAB'],
      rows: [
        ['Imipenem/relebactam', 'x', 'x', '', '', 'x', ''],
        ['Ceftolozane/tazobactam', 'x', '', '', '', 'x', ''],
        ['**Ceftazidime/avibactam**', 'x', 'x', 'x', '', 'x', ''],
        ['Meropenem/vaborbactam', 'x', 'x', '', '', '', ''],
        ['**Cefiderocol**', 'x', 'x', 'x', '**x**', 'x', 'x'],
        ['**Sulbactam-durlobactam**', '', '', '', '', '', '**x**'],
        ['Cefepime-enmetazobactam', 'x', '', '', '', '', '']
      ]
    },
    points: [
      '**MBL（NDM、VIM）**：ceftazidime-avibactam **單用無效**，可**合併 aztreonam**（aztreonam 對 MBL 穩定）；或 cefiderocol',
      '**Ceftolozane-tazobactam**：抗藥 PsA 的強項；對 ESBL/AmpC 不可靠；不涵蓋 MSSA、腸球菌、厭氧菌',
      '**Cefiderocol**：siderophore，經鐵離子通道進入；幾乎所有 β-lactamase 穩定；**不涵蓋 GP 與厭氧菌**',
      '**Sulbactam-durlobactam**：只針對 **A. baumannii-calcoaceticus** HABP/VABP；sulbactam 本身也是 Acinetobacter 的治療（amp-sulb 高劑量）',
      '**Colistin、polymyxin B**：**最後防線**，腎毒性約 30%、神經毒性約 10%；Proteus、Providencia、Burkholderia、Serratia 天然抗藥',
      '**Tigecycline**：可用於部分 MDR GNB，但**血中濃度低不用於菌血症**、全因死亡率上升'
    ]
  },
  {
    id: 'id-bt-path',
    title: '生物恐怖病原 致病機轉',
    points: [
      '**Anthrax**：孢子進入後在局部發芽；**lethal toxin**（PA + LF）與 **edema toxin**（PA + EF）-> 水腫、免疫癱瘓、休克；吸入型孢子被帶到**縱膈淋巴結**發芽 -> **出血性縱膈腔炎**（CXR 縱膈變寬、沒有肺浸潤）；孢子可以**潛伏數十天** -> 預防與療程要 **60 天**；**antitoxin** 中和 toxin',
      '**Plague（Y. pestis）**：跳蚤咬傷 -> 區域淋巴結 -> **bubo**；入血 -> septicemic（DIC、末梢壞死）；**肺炎型可人傳人**（飛沫）',
      '**Botulism**：**botulinum toxin** 切斷 SNARE 蛋白，阻斷神經肌肉接合處 **acetylcholine 釋放** -> **對稱、下行性、弛緩性麻痺**；感覺與意識正常、**不發燒**；toxin 結合後不可逆，**antitoxin 只能阻止進展**',
      '**VHF**：RNA 病毒造成內皮與凝血失調 -> 血管通透性增加、**DIC**、出血、休克'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文有簡述臨床表現。'
  },
  {
    id: 'id-anthrax',
    title: 'Anthrax',
    points: [
      '何時懷疑生物恐怖：**大量病人同時**出現呼吸道、腸胃或發燒皮疹症候群；健康人嚴重發病；**當地不常見的病原**',
      '**皮膚型**（woolsorter；死亡率 < 2%）：接觸受感染動物產品；**無痛黑色 eschar** + 周圍水腫',
      '**吸入型**（約 45%）：類流感或腸胃症狀 -> **猛爆性呼吸窘迫**、多重器官衰竭；**CXR 縱膈變寬、沒有浸潤**；血液培養與 PCR 確診',
      '腸胃型（>= 40%）：吃未煮熟的受感染肉；**腦膜炎**幾乎都致命',
      '**立即通報**感控與衛生單位'
    ],
    table: {
      head: ['情境', '處置'],
      rows: [
        ['**全身性**（± 腦膜炎）', '**Ciprofloxacin 400 mg IV q8h + meropenem 2 g IV q8h + minocycline 或 doxycycline**，2-3 週到臨床穩定；依藥敏改口服'],
        ['免疫低下 + 氣霧暴露', '療程後改 doxycycline 或 cipro 口服，**總共 60 天**（延遲發芽的孢子）'],
        ['**Antitoxin**', 'Raxibacumab、obiltoxaximab、AIGIV（向 CDC 申請）與抗生素併用'],
        ['皮膚型', 'Doxycycline 或 cipro **7-10 天**；合併氣霧暴露 **60 天**'],
        ['**暴露後預防**', '**Doxycycline 100 mg q12h 或 cipro 500 mg q12h x 60 天**']
      ]
    },
    refs: ['MMWR Recomm Rep 2023;72(6):1（CDC anthrax 2023）']
  },
  {
    id: 'id-plague-botu',
    title: 'Plague 與 botulism',
    table: {
      head: ['', 'Plague', 'Botulism'],
      rows: [
        ['病原', '**Yersinia pestis**（GNB）', '**C. botulinum** 的 toxin'],
        ['暴露', '受感染動物（抓咬、處理、吸入分泌物）、**鼠蚤**；氣霧釋放 -> 肺炎型', '**自製罐頭**、傷口污染土壤；氣霧（生物恐怖）'],
        ['表現', '**Bubonic**：疼痛的淋巴結（bubo）+ 發燒（14%）；**septicemic**：末梢壞死、DIC（30-50%）；**pneumonic**：咳血的重症肺炎（57%，延遲治療近 100%），**人傳人**', '**不發燒、意識清楚、對稱下行性弛緩性麻痺**：ptosis、複視、構音障礙 -> 失去 gag reflex、橫膈 -> 呼吸衰竭；**感覺正常**；可持續數週到數月'],
        ['診斷', '血液、痰、CSF 培養；**所有檢體視為高度傳染**；立即通報', '血清或檢體驗 **toxin**；立即通報'],
        ['治療', '**懷疑就治療**：**streptomycin 1 g IM q12h**、**gentamicin 5 mg/kg qd**（監測濃度）或 **doxycycline**；替代 cipro、chloramphenicol；改善後口服，共 **10-14 天**', '**支持治療**，常需**呼吸器**；傷口型要清創；**早期給 antitoxin**（向衛生單位或 CDC 申請）阻止進展'],
        ['接觸者', '**無防護面對面接觸肺炎型** -> doxycycline 或 cipro **7 天**', '**不常規給 antitoxin 預防**（10% 過敏、供應有限）']
      ]
    }
  },
  {
    id: 'id-emerging',
    title: '新興感染：VHF、人畜共通流感、疫苗可預防疾病（Table 14-14）',
    table: {
      head: ['', '表現與診斷', '處置'],
      rows: [
        ['**Viral hemorrhagic fever**（Ebola、Marburg、dengue、yellow fever、hantavirus、CCHF、RVF、Lassa）', '發燒、頭痛、關節肌肉痛、腹瀉嘔吐、**不明出血或瘀青**；血小板低、白血球低、肝炎、DIC；**旅遊史**；NAAT、免疫分析、血清', '**支持治療 + 感染控制**；立即通報；Ebola 有疫苗與單株抗體；接觸者**監測 3 週**；CCHF、Lassa、RVF 有症狀接觸者可給 ribavirin 預防'],
        ['**人畜共通流感**（禽、豬）', '活禽或豬隻市場暴露；輕微 URI 到快速 ARDS、休克；**鼻咽 PCR** 最敏感', '**Oseltamivir 至少 5 天**；感染控制；與衛生單位密切聯繫'],
        ['**Measles**', '高燒、鼻炎、咳嗽、結膜炎、**Koplik spots** -> 數天後**由上往下**的皮疹（含手掌腳掌）；血清或 PCR', '**呼吸道（空氣）隔離**；依 ACIP 接種'],
        ['**Pertussis**', '見 ID8', '接觸者 macrolide 預防']
      ]
    },
    refs: ['NEJM 2015;372:40（Ebola in Guinea）']
  }
]);

RPG.registerCase({
  id: 'id15-cre',
  chapter: 'ID15',
  title: '連 carbapenem 都抗藥',
  patient: '68 歲男性 · ICU 第 18 天',
  summary: 'ICU 住了快三週，用過 meropenem，今天血液培養長出 carbapenem-resistant Klebsiella。',
  cards: ['id-amr-path', 'id-eskape', 'id-novel-bl'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        'MICU 會診。葛先生胰臟炎合併感染性壞死，ICU 第 18 天，之前用過兩週 **meropenem**。今天新發燒、血壓下降。',
        '血液培養：**Klebsiella pneumoniae**，**meropenem R**、ceftriaxone R、cipro R、amikacin S、colistin S。'
      ],
      clue: ['68M；ICU 18 天，**近期 meropenem**', '**CRKP 菌血症**', 'Amikacin S、colistin S'],
      choices: [{ label: '下一步', next: 'workup' }]
    },
    workup: {
      text: 'Carbapenem-resistant Enterobacterales。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'carba', group: '檢驗', label: '**Carbapenemase 分子檢測**（KPC、OXA-48、NDM、VIM）', key: true, reveal: true,
            result: '**KPC 陽性**', clue: '**KPC-producing K. pneumoniae**',
            miss: '抗藥機轉決定能用哪個新藥：KPC、OXA-48、MBL 的選擇不同。' },
          { id: 'id', group: '會診', label: '**會診感染科**', key: true, reveal: true,
            result: '感染科接手', clue: '已會診感染科',
            miss: 'MDRO 感染一定要會診感染科，可降低死亡率。' },
          { id: 'iso', group: '感控', label: '**接觸隔離**、通知感控', key: true, reveal: true,
            result: '已隔離', clue: '接觸隔離',
            miss: 'CRE 要接觸隔離，防止院內傳播。' },
          { id: 'source', group: '處置', label: '找來源（CT 看壞死組織、導管）', key: true, reveal: true,
            result: '胰臟周圍感染性壞死有新的氣體；外科安排清創引流', clue: '來源：感染性胰臟壞死',
            miss: '感染源控制和選藥一樣重要。' }
        ]
      }
    },
    tx: {
      text: 'KPC 產生的 CRKP 菌血症。',
      choices: [
        { label: '**Ceftazidime-avibactam**（或 meropenem-vaborbactam、imipenem-relebactam）+ 感染源控制', next: 'twist' },
        { label: 'Colistin + 高劑量 meropenem', next: 't_colistin' },
        { label: 'Tigecycline', next: 't_tige' }
      ]
    },
    t_colistin: {
      text: '主治醫師搖頭。',
      feedback: 'Polymyxins 是**最後防線**，腎毒性約 30%、神經毒性約 10%，已被較安全的新 β-lactam 取代。KPC 用 **ceftazidime-avibactam**、meropenem-vaborbactam 或 imipenem-relebactam。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_tige: {
      text: '主治醫師搖頭。',
      feedback: 'Tigecycline **血中濃度低，不用於菌血症**，而且與全因死亡率上升相關。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    twist: {
      text: '三週後，同一病房另一位病人的 CRKP 檢出 **NDM（metallo-β-lactamase）**。感染科問你：同樣用 ceftazidime-avibactam 可以嗎？',
      clue: ['另一位：**NDM（MBL）**'],
      choices: [
        { label: '**不行**：avibactam 不抑制 MBL。用 **ceftazidime-avibactam + aztreonam** 或 **cefiderocol**', next: 'end_good' },
        { label: '可以，都是 CRE', next: 'w_same' }
      ]
    },
    w_same: {
      text: '主治醫師搖頭。',
      feedback: 'Ceftazidime-avibactam 對 **MBL 單用無效**。Aztreonam 對 MBL 穩定，和 avibactam 合併可以保護 aztreonam 不被同時存在的 ESBL 破壞；或用 cefiderocol。',
      choices: [{ label: '重新決定', next: 'twist' }]
    },
    end_good: {
      text: '葛先生清創後菌血症清除。感控在病房加強隔離與手部衛生，沒有再出現新個案。',
      ending: {
        grade: 'good',
        title: 'CRE：KPC 與 MBL',
        pearls: [
          'CRE：驗 carbapenemase 機轉；會診感染科；接觸隔離',
          'KPC：ceftazidime-avibactam、meropenem-vaborbactam、imipenem-relebactam',
          'MBL：ceftazidime-avibactam + aztreonam，或 cefiderocol',
          'Polymyxins 最後防線；tigecycline 不用於菌血症'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id15-crab',
  chapter: 'ID15',
  title: '呼吸器上的 Acinetobacter',
  patient: '74 歲女性 · 長期呼吸器',
  summary: '呼吸照護中心轉來的病人，VAP，痰培養是 carbapenem-resistant Acinetobacter baumannii。',
  cards: ['id-novel-bl', 'id-eskape', 'id-hap'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        'RCW 轉入 MICU。吳奶奶長期使用呼吸器，新發燒、膿痰、氧合變差，CXR 新浸潤。',
        '痰培養：**Acinetobacter baumannii**，**carbapenem R**、ampicillin-sulbactam I、colistin S、minocycline S。Cr 1.8。'
      ],
      clue: ['74F；長期呼吸器；**VAP**', '**CRAB**（carbapenem R）', 'Cr 1.8'],
      choices: [{ label: '治療', next: 'tx' }]
    },
    tx: {
      text: 'CRAB VAP。',
      choices: [
        { label: '**Sulbactam-durlobactam**（針對 A. baumannii HABP/VABP；或含高劑量 sulbactam 的合併治療、cefiderocol）；會診感染科', next: 'end_good' },
        { label: 'Ceftazidime-avibactam', next: 't_cza' },
        { label: 'Colistin 單用', next: 't_col' }
      ]
    },
    t_cza: {
      text: '主治醫師搖頭。',
      feedback: 'Ceftazidime-avibactam 對 **CRAB 無效**（Table 15-1）。CRAB 的選擇是 **sulbactam-durlobactam**、高劑量 sulbactam、cefiderocol。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_col: {
      text: '主治醫師搖頭。',
      feedback: '她 Cr 已經 1.8，colistin 腎毒性約 30%。有較安全、針對性的 **sulbactam-durlobactam** 就優先使用。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '用 sulbactam-durlobactam 後肺炎改善，腎功能沒有惡化。',
      ending: {
        grade: 'good',
        title: 'CRAB ventilator-associated pneumonia',
        pearls: [
          'Sulbactam-durlobactam：只針對 A. baumannii HABP/VABP',
          'Sulbactam 是 Acinetobacter 的治療（amp-sulb 高劑量）',
          'Cefiderocol 涵蓋 CRAB',
          'Ceftazidime-avibactam 對 CRAB 無效'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id15-cauris',
  chapter: 'ID15',
  title: '從海外醫院轉回來',
  patient: '61 歲男性 · 海外車禍',
  summary: '在國外車禍住院一個月後轉回台灣，傷口培養長出「C. haemulonii」。',
  cards: ['id-eskape', 'id-candida'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '外科病房。符先生在海外車禍，在當地醫院住了一個月（用過多種抗生素、有 CVC），今天轉回台灣。',
        '大腿傷口分泌物培養長出酵母菌，傳統鑑定系統報告「**Candida haemulonii**」，fluconazole MIC 很高。他目前不發燒。'
      ],
      clue: ['61M；**海外醫院**住院 1 個月，廣效抗生素、CVC', '傷口酵母菌，報告為 **C. haemulonii**；fluconazole 高 MIC'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: '你想到 Candida auris。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'id', group: '檢驗', label: '**送 MALDI-TOF 或分子方法重新鑑定**', key: true, reveal: true,
            result: '**Candida auris**', clue: '**C. auris**',
            miss: 'C. auris 常被傳統方法誤認為 C. haemulonii，要用正確方法鑑定。' },
          { id: 'iso', group: '感控', label: '**接觸隔離**、通知感控', key: true, reveal: true,
            result: '已隔離；同病房篩檢', clue: '接觸隔離',
            miss: 'C. auris 感染或帶菌都要**接觸隔離**，它在環境中存活很久、容易院內爆發。' },
          { id: 'bcx', group: '培養', label: '血液培養', key: true, reveal: true,
            result: '陰性', clue: '血液培養陰性',
            miss: '要知道有沒有侵襲性感染。' },
          { id: 'idc', group: '會診', label: '會診感染科', key: true, reveal: true,
            result: '已會診', clue: '已會診',
            miss: 'C. auris 強烈建議會診感染科。' }
        ]
      }
    },
    tx: {
      text: '傷口有發炎、局部感染，血液培養陰性。用藥？',
      choices: [
        { label: '傷口清創 + **echinocandin**（等藥敏）', next: 'end_good' },
        { label: 'Fluconazole 400 mg qd', next: 't_fluc' },
        { label: 'Liposomal AmB', next: 't_amb' }
      ]
    },
    t_fluc: {
      text: '主治醫師搖頭。',
      feedback: '**約 90% C. auris 對 fluconazole 抗藥**。藥敏前用 **echinocandin**（< 5% 抗藥）。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_amb: {
      text: '主治醫師搖頭。',
      feedback: '約 30% C. auris 對 amphotericin 抗藥；藥敏前首選 **echinocandin**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '傷口癒合。病房篩檢沒有發現其他帶菌者。',
      ending: {
        grade: 'good',
        title: 'Candida auris',
        pearls: [
          '常被誤認為 C. haemulonii；用 MALDI-TOF 或分子方法鑑定',
          '接觸隔離；院內爆發風險',
          'Fluconazole 約 90% 抗藥；藥敏前用 echinocandin',
          '會診感染科'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id15-anthrax',
  chapter: 'ID15',
  title: '郵件裡的白色粉末',
  patient: '44 歲男性 · 郵件處理中心',
  summary: '兩週前處理過一封撒出白色粉末的信。起初像感冒，今天喘不過氣。',
  cards: ['id-bt-path', 'id-anthrax'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。葉先生在郵件處理中心工作，**兩週前**處理一封破損的信，撒出**白色粉末**。五天前開始發燒、倦怠、肌痛、乾咳，像感冒。今天突然**嚴重呼吸困難**、胸痛、冒冷汗。',
        'BP 86/50、SpO2 86%。',
        'CXR：**縱膈腔明顯變寬**、兩側肋膜積水，**沒有肺實質浸潤**。'
      ],
      clue: ['44M；**郵件白色粉末**暴露', '類流感 -> **猛爆性呼吸窘迫**、休克', '**CXR 縱膈變寬、無浸潤**'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: '你懷疑**吸入型炭疽**，而且是生物恐怖事件。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'notify', group: '公衛', label: '**立即通報感控與衛生單位**', key: true, reveal: true,
            result: '已通報；郵件中心封鎖調查', clue: '已通報',
            miss: '疑似生物恐怖一定要立即通報。' },
          { id: 'bcx', group: '培養', label: '**血液培養、PCR**', key: true, reveal: true,
            result: '**Bacillus anthracis**', clue: '**B. anthracis** 菌血症',
            miss: '血液培養與 PCR 確診。' },
          { id: 'ct', group: '影像', label: 'Chest CT', result: '縱膈淋巴結出血性腫大' },
          { id: 'lp', group: '檢查', label: 'LP（排除腦膜炎）', result: 'CSF 正常' }
        ]
      }
    },
    tx: {
      text: '全身性吸入型炭疽。',
      choices: [
        { label: '**Ciprofloxacin 400 mg IV q8h + meropenem 2 g IV q8h + doxycycline（或 minocycline）**；向衛生單位申請 **antitoxin**', next: 'contacts' },
        { label: 'Ciprofloxacin 單用', next: 't_mono' },
        { label: 'Ceftriaxone + azithromycin（CAP）', next: 't_cap' }
      ]
    },
    t_mono: {
      text: '主治醫師搖頭。',
      feedback: '全身性炭疽（不論有無腦膜炎）用**三種藥**：cipro + meropenem + minocycline 或 doxycycline，並加上 **antitoxin**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_cap: {
      text: '主治醫師搖頭。',
      feedback: '縱膈變寬、沒有浸潤、白色粉末暴露：不是 CAP。B. anthracis 對 cephalosporins 天然抗藥。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    contacts: {
      text: '同一中心還有 14 位員工在同一區工作，目前都沒有症狀。',
      choices: [
        { label: '**暴露後預防：doxycycline 100 mg q12h 或 ciprofloxacin 500 mg q12h x 60 天**', next: 'end_good' },
        { label: '沒有症狀就不用', next: 'c_none' },
        { label: '預防 7 天', next: 'c_short' }
      ]
    },
    c_none: {
      text: '主治醫師搖頭。',
      feedback: '有吸入暴露風險的人都要**暴露後預防**；孢子可以潛伏很久再發芽。',
      choices: [{ label: '重新決定', next: 'contacts' }]
    },
    c_short: {
      text: '主治醫師搖頭。',
      feedback: '吸入的孢子可以**延遲發芽**，預防要 **60 天**。',
      choices: [{ label: '重新決定', next: 'contacts' }]
    },
    end_good: {
      text: '葉先生在 ICU 存活下來，完成 60 天療程。員工都完成預防，沒有新病例。',
      ending: {
        grade: 'good',
        title: 'Inhalational anthrax（bioterrorism）',
        pearls: [
          '大量同時發病、健康人重症、當地罕見病原 -> 想生物恐怖',
          '吸入型：類流感 -> 猛爆性；CXR 縱膈變寬、無浸潤',
          'Cipro + meropenem + doxy/minocycline + antitoxin；總共 60 天',
          '暴露後預防：doxy 或 cipro 60 天；立即通報'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id15-botulism',
  chapter: 'ID15',
  title: '自製罐頭之後',
  patient: '52 歲女性 · 家庭主婦',
  summary: '吃了自己做的油漬罐頭兩天後，眼皮垂下來、看東西兩個影子，講話越來越含糊。',
  cards: ['id-bt-path', 'id-plague-botu'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。范太太兩天前吃了自己做的**油漬蔬菜罐頭**（罐子有點鼓起來）。昨天開始**眼皮下垂、複視**，今天講話含糊、吞嚥困難，雙手開始無力。',
        '**不發燒**、**意識完全清楚**、**感覺正常**。瞳孔放大、反應慢。上肢近端肌力 4/5，下肢正常。**深部肌腱反射減弱**。',
        '她先生也吃了，目前沒有症狀。'
      ],
      clue: ['52F；**自製罐頭**（罐子鼓起）', '**Ptosis、複視、構音與吞嚥困難** -> 上肢無力（**下行性**）', '**不發燒、意識清楚、感覺正常**', '先生也吃了，無症狀'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: '對稱下行性弛緩性麻痺 + 腦神經 + 不發燒 + 意識清楚：botulism。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'resp', group: '監測', label: '**監測呼吸功能**（FVC、NIF）、評估插管', key: true, reveal: true,
            result: 'FVC 從 2.4 L 降到 1.6 L；轉 ICU', clue: '**FVC 下降** -> ICU',
            miss: '橫膈麻痺會造成呼吸衰竭，要密切監測、及早插管。' },
          { id: 'notify', group: '公衛', label: '**通報衛生單位**、申請 antitoxin', key: true, reveal: true,
            result: '已通報，antitoxin 送達中', clue: '已通報、申請 antitoxin',
            miss: 'Botulism 要通報；antitoxin 由衛生單位提供。' },
          { id: 'toxin', group: '檢驗', label: '**血清、糞便、剩餘食物送 toxin 檢測**', key: true, reveal: true,
            result: '（之後）血清與罐頭 **toxin type A 陽性**', clue: '**Botulinum toxin type A**',
            miss: '確診靠在血清或檢體中驗出 toxin。' },
          { id: 'lp', group: '檢查', label: 'LP', result: 'CSF 正常（GBS 會有蛋白上升）' },
          { id: 'ivig', group: '用藥', label: '當作 Guillain-Barré 給 IVIG', result: '已撤回',
            waste: '下行性、腦神經先受影響、瞳孔異常、感覺正常、有食物暴露 -> botulism，不是 GBS（GBS 通常上行、有感覺症狀）。' }
        ]
      }
    },
    tx: {
      text: 'Antitoxin 到了。',
      choices: [
        { label: '**盡早給 antitoxin**（阻止麻痺進展）+ 支持治療（需要時呼吸器）', next: 'husband' },
        { label: '已經麻痺了，antitoxin 沒用，只做支持治療', next: 't_late' },
        { label: 'Penicillin G 殺菌', next: 't_pcn' }
      ]
    },
    t_late: {
      text: '主治醫師搖頭。',
      feedback: 'Antitoxin 無法逆轉已經結合的 toxin，但能**阻止進一步的麻痺**，所以**越早給越好**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_pcn: {
      text: '主治醫師搖頭。',
      feedback: '食物型 botulism 是**吃進 toxin**，不是感染；治療是 antitoxin 與支持治療。傷口型才需要清創。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    husband: {
      text: '她先生也吃了同一罐，目前沒有症狀。要不要也給 antitoxin？',
      choices: [
        { label: '**不常規給**：antitoxin 約 10% 過敏、供應有限；**密切觀察症狀**，一出現就給', next: 'end_good' },
        { label: '也給，預防比較安全', next: 'h_give' }
      ]
    },
    h_give: {
      text: '主治醫師搖頭。',
      feedback: '**不建議常規用 antitoxin 做暴露後預防**：過敏反應約 10%，而且供應有限。高度懷疑（出現症狀）時才給。',
      choices: [{ label: '重新決定', next: 'husband' }]
    },
    end_good: {
      text: '范太太插管三週，三個月後肌力慢慢恢復。先生觀察期間沒有發病。',
      ending: {
        grade: 'good',
        title: 'Foodborne botulism',
        pearls: [
          '不發燒、意識清楚、對稱下行性弛緩性麻痺，從腦神經開始；感覺正常',
          '驗血清或檢體 toxin；立即通報',
          '支持治療（呼吸器）+ 早期 antitoxin',
          '不常規用 antitoxin 做暴露後預防'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id15-plague',
  chapter: 'ID15',
  title: '咳血的獵人',
  patient: '38 歲男性 · 野外導遊',
  summary: '野外帶團時剝過一隻死掉的野生動物，三天後腋下痛性腫塊，今天咳血。',
  cards: ['id-bt-path', 'id-plague-botu'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診（疫區旅遊回國）。耿先生在**鼠疫流行地區**帶團，一週前徒手處理一隻**死掉的野生囓齒動物**。三天前右腋下出現**極痛的腫塊**、高燒。今天開始咳嗽、**咳血**、呼吸困難。',
        'T 40.1°C、BP 92/58、SpO2 88%。右腋下 4 cm 腫大壓痛的淋巴結。CXR：右下葉實質化。'
      ],
      clue: ['38M；鼠疫流行區、**處理死亡囓齒動物**', '**痛性腋下 bubo** + 高燒', '進展為**咳血性肺炎**'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: 'Bubonic 進展成 pneumonic plague。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'iso', group: '感控', label: '**飛沫隔離**', key: true, reveal: true,
            result: '已隔離', clue: '飛沫隔離',
            miss: '肺炎型鼠疫可以**人傳人**。' },
          { id: 'cx', group: '培養', label: '**血液、痰、bubo 抽吸培養**（通知實驗室高度傳染）', key: true, reveal: true,
            result: '**Yersinia pestis**', clue: '**Y. pestis**',
            miss: '血液、痰培養確診；所有檢體視為高度傳染，先通知實驗室。' },
          { id: 'notify', group: '公衛', label: '**立即通報**', key: true, reveal: true,
            result: '已通報', clue: '已通報',
            miss: '鼠疫要立即通報。' }
        ]
      }
    },
    tx: {
      text: '開始治療（懷疑就給，不等培養）。',
      choices: [
        { label: '**Gentamicin 5 mg/kg IV qd**（監測濃度）或 streptomycin、doxycycline；改善後改口服，共 **10-14 天**', next: 'contacts' },
        { label: 'Ceftriaxone + azithromycin', next: 't_cap' }
      ]
    },
    t_cap: {
      text: '主治醫師搖頭。',
      feedback: '鼠疫的首選是 **streptomycin、gentamicin 或 doxycycline**（替代 cipro、chloramphenicol）。延遲有效治療的肺炎型死亡率接近 100%。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    contacts: {
      text: '救護車的 EMT 和急診檢傷護理師在他咳嗽時**沒戴口罩、面對面**照顧了他。',
      choices: [
        { label: '**暴露後預防：doxycycline 或 ciprofloxacin x 7 天**', next: 'end_good' },
        { label: '觀察就好', next: 'c_none' }
      ]
    },
    c_none: {
      text: '主治醫師搖頭。',
      feedback: '**無防護面對面接觸肺炎型鼠疫**的人要給暴露後預防 7 天。',
      choices: [{ label: '重新決定', next: 'contacts' }]
    },
    end_good: {
      text: '耿先生在 ICU 治療兩週後康復。暴露的醫護沒有發病。',
      ending: {
        grade: 'good',
        title: 'Bubonic -> pneumonic plague',
        pearls: [
          'Bubonic（痛性 bubo）、septicemic（DIC、壞死）、pneumonic（咳血，人傳人）',
          '懷疑就治療：streptomycin、gentamicin、doxycycline；10-14 天',
          '飛沫隔離；檢體高度傳染；立即通報',
          '無防護接觸肺炎型 -> doxy 或 cipro 7 天'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id15-triage',
  chapter: 'ID15',
  title: '急診檢傷的三個旅客',
  patient: '三位剛從國外回來的發燒病人',
  summary: '同一個晚上，三位剛回國的發燒旅客同時到急診檢傷。',
  cards: ['id-emerging', 'id-flu'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診檢傷。三位發燒旅客：',
        '**A**：28 歲，從**中非剛果疫區**回來 8 天，曾照顧過生病的親戚；發燒、嘔吐、腹瀉，**牙齦出血**、注射處瘀青。',
        '**B**：19 歲，未接種疫苗，從歐洲某國回來；高燒、鼻炎、咳嗽、結膜炎，**口腔頰黏膜有白色小點**，今天從臉部開始出現**往下擴散的紅疹**。',
        '**C**：55 歲，在東南亞**活禽市場**工作；高燒、咳嗽，快速變喘，SpO2 89%。'
      ],
      clue: ['A：剛果、照顧病人、**出血** -> **VHF（Ebola？）**', 'B：未接種、**Koplik spots**、下行皮疹 -> **measles**', 'C：**活禽市場**、快速呼吸衰竭 -> **zoonotic influenza**'],
      choices: [{ label: '安排處置', next: 'act' }]
    },
    act: {
      text: '勾選正確的處置。',
      checklist: {
        prompt: '勾選你要執行的項目',
        submit: '送出',
        next: 'end_check',
        options: [
          { id: 'a_iso', group: 'A（VHF）', label: 'A：**最高等級隔離與個人防護**、立即通報；支持治療', key: true, reveal: true,
            result: '轉負壓隔離；衛生單位啟動調查', clue: 'A：VHF 隔離與通報',
            miss: 'VHF 處置重點是感染控制與支持治療，並立即通報。' },
          { id: 'a_contact', group: 'A（VHF）', label: 'A 的接觸者**監測症狀 3 週**', key: true, reveal: true,
            result: '已列冊追蹤', clue: 'A 的接觸者監測 21 天',
            miss: 'Ebola 暴露者要監測 3 週。' },
          { id: 'b_iso', group: 'B（Measles）', label: 'B：**空氣隔離**（負壓）；驗麻疹 IgM/PCR', key: true, reveal: true,
            result: '麻疹 PCR 陽性', clue: 'B：**Measles**，空氣隔離',
            miss: '麻疹要**呼吸道（空氣）隔離**。' },
          { id: 'c_pcr', group: 'C（Influenza）', label: 'C：**鼻咽拭子 PCR**；**oseltamivir 至少 5 天**；感染控制、通知衛生單位', key: true, reveal: true,
            result: '**Influenza A（H5）**', clue: 'C：**Avian influenza A**',
            miss: '人畜共通流感：PCR 最敏感；oseltamivir 至少 5 天；感染控制並與衛生單位密切聯繫。' },
          { id: 'a_ribavirin', group: 'A（VHF）', label: 'A：ribavirin 治療 Ebola', result: '已撤回',
            waste: 'Ebola 沒有 ribavirin 的適應症。Ebola 有疫苗與單株抗體；ribavirin 預防用在 CCHF、Lassa、RVF 的有症狀接觸者。' },
          { id: 'b_abx', group: 'B（Measles）', label: 'B：ceftriaxone 治療發燒皮疹', result: '已撤回',
            waste: '典型麻疹是病毒感染，不需要抗生素。' }
        ]
      }
    },
    end_check: {
      text: 'A 最後確診 Ebola，轉送指定醫院。B、C 在隔離下治療康復，沒有院內傳播。',
      ending: {
        grade: 'good',
        title: '旅遊回國發燒的檢傷與隔離',
        pearls: [
          'VHF：旅遊史 + 出血；最高等級隔離、支持治療、通報；接觸者監測 3 週',
          'Measles：Koplik spots、下行皮疹；空氣隔離',
          'Zoonotic influenza：活禽或豬隻暴露；PCR；oseltamivir 至少 5 天',
          '疫苗是預防的關鍵'
        ]
      }
    }
  }
});
