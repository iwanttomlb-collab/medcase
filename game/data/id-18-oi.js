// ID 18 HIV opportunistic infections, IRIS, prophylaxis, associated neoplasms. Endemic mycoses (histo, cocci) omitted.
// Source: Washington Manual Ch 16 (source/Washington ID.txt, lines 3340-3646, Table 16-2).

RPG.registerCards('ID18', [
  {
    id: 'id-oi-path',
    title: '伺機性感染與 CD4 的關係',
    points: [
      'CD4 T cell 是**細胞免疫的指揮者**；CD4 越低，能被控制的病原越少',
      '**CD4 < 200**：**PJP**、（再活化）TB 表現不典型；**< 100**：**toxoplasmosis**（腦）、**cryptococcus**；**< 50**：**MAC**、**CMV retinitis**',
      'CD4 較高時 TB 表現典型（上葉空洞）；極低時像**原發性播散**（下葉浸潤、肺門淋巴結、肺外）',
      '**IRIS**：ART 讓免疫恢復後，對殘存病原抗原產生**過度發炎** -> 臨床惡化（不是治療失敗）',
      '**Unmasking IRIS**：開始 ART 後才浮現之前沒發現的 OI；**paradoxical IRIS**：已知、已治療的 OI 在 ART 後惡化',
      'HIV 相關腫瘤與病毒有關：**KS = HHV-8**、**淋巴瘤（含 PCNSL）= EBV**、子宮頸與肛門癌 = **HPV**'
    ],
    note: 'CD4 閾值見 Table 16-2 與各 OI 章節；其餘為一般教科書補充。'
  },
  {
    id: 'id-oi-proph',
    title: 'OI 預防（Table 16-2）',
    table: {
      head: ['OI', '適應症', '藥物'],
      rows: [
        ['**PJP**', '**CD4 < 200**', '**TMP-SMX DS 或 SS qd**（首選）或每週三次；替代 dapsone（先驗 **G6PD**）、atovaquone、吸入 pentamidine'],
        ['**Toxoplasmosis**', '**CD4 < 100** 且 **toxo IgG 陽性**', '**TMP-SMX DS qd**；替代 dapsone + pyrimethamine + leucovorin、atovaquone'],
        ['**MAC**', 'CD4 < 50', 'Azithromycin 1,200 mg 每週；**有效 ART 立即開始並達抑制時不建議**；只有**沒在 ART 且 CD4 < 50** 才給']
      ]
    },
    points: [
      '**初級預防**：OI 發生前依 CD4 給；**次級預防**：OI 治療完成後防復發',
      'ART 後 CD4 **持續 > 150-200** -> 多數初級與次級預防可停'
    ],
    refs: ['NIH Guidelines for OIs in Adults and Adolescents with HIV']
  },
  {
    id: 'id-iris',
    title: 'IRIS 與 ART 時機',
    points: [
      '強效 ART 改變了 OI 的表現與預後，但 OI 仍常是**未診斷 HIV 的第一個表現**',
      'IRIS 常表現為**局部發炎反應**：cryptococcal 腦膜炎症狀復發、TB 矛盾惡化、局部 MAC 淋巴結炎、肝炎惡化、CMV vitreitis',
      '**IRIS 時通常繼續 ART**，低劑量類固醇可能減輕發炎',
      '**只有 TB 與 cryptococcal 腦膜炎**建議**延後 ART** 以預防 IRIS',
      'Cryptococcal 腦膜炎：開始抗黴菌治療後 **2-10 週**再開始 ART；TB：開始抗結核治療後**數週**再開始 ART'
    ]
  },
  {
    id: 'id-pjp',
    title: 'Pneumocystis jirovecii pneumonia',
    points: [
      '**AIDS 最常見的 OI**；**亞急性進行性呼吸困難**',
      '診斷：誘發痰或 BAL **直接免疫螢光**；或組織病理',
      'CXR 典型：**兩側瀰漫性毛玻璃間質浸潤**；也可以很不典型',
      '**TMP-SMX** 首選：重症 **15-20 mg/kg/d（TMP）IV 分 q6-8h**，改善後改口服；**總共 21 天**'
    ],
    table: {
      head: ['嚴重度', '處置'],
      rows: [
        ['**重症**：**PaO2 < 70** 或 **A-a gradient >= 35**', '**加 prednisone**：40 mg bid day 1-5 -> 40 mg qd day 6-10 -> 20 mg qd day 11-21'],
        ['輕中度、不能用 TMP-SMX', 'TMP + **dapsone**（先驗 **G6PD**）；**clindamycin + primaquine**（先驗 G6PD）；**atovaquone**（隨餐）'],
        ['其他都不行', 'IV pentamidine（密切監測副作用）'],
        ['**次級預防**', 'ART 下 CD4 > 200 超過 3 個月可停']
      ]
    }
  },
  {
    id: 'id-hiv-cns',
    title: 'HIV 的 CNS 與視網膜疾病',
    table: {
      head: ['疾病', '表現與診斷', '治療'],
      rows: [
        ['**Cryptococcal 腦膜炎**', '頭痛、發燒、意識改變（可很輕微）；血清與 CSF **CrAg**；**一定量 opening pressure**', '**L-AmB 3-4 mg/kg + flucytosine 25 mg/kg q6h >= 2 週** -> fluconazole 400 x 8 週 -> 200；**反覆 LP** 降壓；**ART 延後 2-10 週**；CD4 >= 200 持續 6 個月可停 fluconazole'],
        ['**Toxoplasmosis**', '**多發 CNS 腫塊**、腦病變、focal sign；**再活化**（IgG 通常陽性）；**MRI**；常靠**經驗治療反應**診斷', '**Sulfadiazine 25 mg/kg q6h + pyrimethamine**（200 mg 一次，之後 50-75 mg qd）**+ leucovorin**；磺胺過敏用 **clindamycin**；6 週後減量；CD4 > 200 持續 6 個月可停次級預防'],
        ['**PML**（JC virus）', '意識改變、無力、步態異常；MRI **側腦室周圍與皮質下白質**病灶', '**ART**'],
        ['**VZV**', '皮節或播散、**視網膜壞死**、腦炎（眼神經分布較常見）', '**Acyclovir 10-15 mg/kg IV q8h x 7-14 天**；輕症口服 acyclovir 800 x5/d、valacyclovir 1 g tid'],
        ['**CMV retinitis**（CMV 疾病 85%）', '**CD4 < 50**；飛蚊、暗點、周邊視野缺損；**眼底鏡**診斷', '**Valganciclovir 900 mg bid x 14-21 天** -> 900 mg qd；或 IV ganciclovir（**neutropenia**）；替代 foscarnet、cidofovir（腎毒性）；CNS CMV 用 foscarnet'],
        ['**PCNSL**（EBV）', '常多發；**CSF EBV PCR** 陽性；排除其他 OI；腦切片', '化療 + 放療；類固醇可能有反應']
      ]
    }
  },
  {
    id: 'id-hiv-myco',
    title: 'HIV 合併 TB 與 MAC',
    points: [
      '**TB**：HIV 更常見；**CD4 高**時典型上葉空洞，**極低**時像播散性初次感染（瀰漫或局部浸潤、肺門淋巴結），**肺外更常見**',
      'HIV + TB：PI-based ART 時用 **rifabutin** 取代 rifampin（劑量要調整）；ART-naive 可在抗結核治療開始後**數週**再開始 ART',
      '**MAC**：最常見的分枝桿菌 OI，**CD4 < 50**；**播散性**：發燒、體重減輕、盜汗、腸胃症狀；可菌血症；**貧血、ALP 上升**',
      'MAC 診斷：**分枝桿菌血液培養**',
      'MAC 治療：**clarithromycin 500 mg bid + ethambutol 15 mg/kg qd**；重症或沒在 ART：加 rifabutin、aminoglycoside 或 FQ（依藥敏）',
      'MAC 次級預防：完成 12 個月、無症狀、ART 下 CD4 > 100 持續 >= 6 個月可停'
    ]
  },
  {
    id: 'id-hiv-gi',
    title: 'HIV 的食道炎與腹瀉',
    table: {
      head: ['疾病', '診斷', '治療'],
      rows: [
        ['**Candida 食道炎**（其他：HSV、CMV、Histoplasma）', '臨床；頑固者內視鏡取樣培養', '**Fluconazole 100-200 mg qd x 14-21 天**；口腔與陰道可局部治療；頑固 -> echinocandin、itraconazole 液、posaconazole、voriconazole'],
        ['**Cryptosporidium**', '慢性水瀉、吸收不良；糞便 **acid-fast stain** 或免疫螢光', '**ART 是關鍵**；nitazoxanide 500 mg bid 可能有效'],
        ['**Cyclospora**', '慢性腹瀉', 'TMP-SMX DS bid x 7-10 天'],
        ['**Cystoisospora**', '慢性腹瀉', 'TMP-SMX DS **qid x 10 天** -> DS qd 慢性抑制'],
        ['**Microsporidia**', '慢性腹瀉、膽道疾病', 'E. bieneusi：優化 ART；其他：albendazole 400 mg bid'],
        ['**Campylobacter**', '', 'Azithromycin 500 mg qd 或 cipro 500-750 mg bid x 5 天']
      ]
    }
  },
  {
    id: 'id-hiv-neo',
    title: 'HIV 相關腫瘤',
    points: [
      '**Kaposi sarcoma**（**HHV-8**）：皮膚紫色病灶，可播散到**腸胃、肺**；輕症**優化 ART**；重症 **化療（liposomal doxorubicin 第一線）+ ART**；cryotherapy、放療',
      '**淋巴瘤**（EBV）：NHL、**PCNSL**（多發、CSF EBV PCR）、B cell 來源；結外（骨髓、腸胃、肝）要切片；化療 + 放療',
      '**HPV**（16、18 致癌）：子宮頸與**肛門**癌風險高；**Pap smear 第一年每 6 個月，正常後每年**；部分專家建議 MSM、肛門尖圭病史、外陰或子宮頸病變者篩檢 anal intraepithelial neoplasia',
      '**HPV 疫苗**：9-26 歲未接種者；最多到 **45 歲**',
      '**生殖器疣**（HPV 6、11）：HIV 病人較難治、易復發；局部移除'
    ]
  }
]);

RPG.registerCase({
  id: 'id18-pjp',
  chapter: 'ID18',
  title: '喘了一個月',
  patient: '38 歲男性 · 廚師',
  summary: '乾咳、越來越喘一個月，嘴巴長白斑。今天走幾步路就喘不過氣。',
  cards: ['id-oi-path', 'id-pjp', 'id-oi-proph', 'id-iris'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。羅先生一個月來**乾咳、漸進性呼吸困難**、低燒、體重減輕 6 kg。今天走幾步路就喘。',
        'RR 28、SpO2 87%。**口腔 thrush**。**運動時血氧明顯下降**。',
        'CXR：**兩側瀰漫性毛玻璃浸潤**。ABG：**PaO2 62**、A-a gradient 42。',
        'HIV 篩檢陽性（確認中）。'
      ],
      clue: ['38M；**亞急性**乾咳、呼吸困難 1 個月', '**Thrush**；體重減輕', '**兩側毛玻璃**；**PaO2 62、A-a 42**', '**新診斷 HIV**'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '你懷疑 PJP。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'ifa', group: '檢驗', label: '**誘發痰（或 BAL）直接免疫螢光**', key: true, reveal: true,
            result: '**P. jirovecii 陽性**', clue: '**PJP**',
            miss: '誘發痰或 BAL 的 DFA 確診。' },
          { id: 'cd4', group: '檢驗', label: '**CD4、HIV RNA、genotype**', key: true, reveal: true,
            result: '**CD4 34**；RNA 380,000', clue: '**CD4 34**',
            miss: 'CD4 決定還需要哪些預防，也是 ART 的基礎值。' },
          { id: 'g6pd', group: '檢驗', label: '**G6PD**', key: true, reveal: true,
            result: '正常', clue: 'G6PD 正常',
            miss: '萬一要換 dapsone 或 primaquine，先要知道 G6PD。' },
          { id: 'toxo', group: '檢驗', label: '**Toxoplasma IgG**、CrAg、TB 評估', key: true, reveal: true,
            result: '**Toxo IgG 陽性**；CrAg 陰性；痰 AFB/NAAT 陰性', clue: 'Toxo IgG (+)；CrAg (-)、TB (-)',
            miss: 'CD4 < 100 要篩 toxo（決定預防）、crypto 與 TB。' }
        ]
      }
    },
    tx: {
      text: '重症 PJP（PaO2 < 70、A-a >= 35）。',
      choices: [
        { label: '**TMP-SMX 15-20 mg/kg/d IV** + **prednisone 40 mg bid**（21 天減量），共 **21 天**', next: 'art' },
        { label: 'TMP-SMX，類固醇會讓免疫更差所以不給', next: 't_noster' },
        { label: 'Atovaquone 口服', next: 't_ato' }
      ]
    },
    t_noster: {
      text: '主治醫師搖頭。',
      feedback: '**PaO2 < 70 或 A-a gradient >= 35** 要**加 prednisone**，降低呼吸衰竭與死亡。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_ato: {
      text: '主治醫師搖頭。',
      feedback: 'Atovaquone 是**輕中度**且不能用 TMP-SMX 時的替代。重症首選 **IV TMP-SMX + prednisone**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    art: {
      text: 'PJP 改善中。什麼時候開始 ART？要給哪些預防？',
      choices: [
        { label: '**PJP 不需要延後**：盡快（約 2 週內）開始 ART；療程結束後 **TMP-SMX DS qd**（同時預防 PJP 與 toxo）；開始有效 ART 就**不需 MAC 預防**', next: 'end_good' },
        { label: '等 CD4 回升再開始 ART', next: 'a_wait' },
        { label: '延後 ART 8 週預防 IRIS，同時加 azithromycin 每週預防 MAC', next: 'a_delay' }
      ]
    },
    a_wait: {
      text: '主治醫師搖頭。',
      feedback: '所有 HIV 都治療，不論 CD4；CD4 要靠 ART 才會回升。',
      choices: [{ label: '重新決定', next: 'art' }]
    },
    a_delay: {
      text: '主治醫師搖頭。',
      feedback: '只有 **TB 與 cryptococcal 腦膜炎**建議延後 ART。PJP 早期開始 ART 有好處。**立即開始有效 ART 就不建議 MAC 初級預防**。',
      choices: [{ label: '重新決定', next: 'art' }]
    },
    end_good: {
      text: '羅先生第 10 天開始 ART，三個月後 CD4 升到 180，持續 TMP-SMX 預防。',
      ending: {
        grade: 'good',
        title: 'Severe PJP with new HIV diagnosis',
        pearls: [
          '亞急性呼吸困難、毛玻璃、運動時血氧下降 -> PJP；DFA 確診',
          'TMP-SMX 21 天；PaO2 < 70 或 A-a >= 35 加 prednisone',
          'G6PD 先驗（dapsone、primaquine）',
          'TMP-SMX DS qd 同時預防 PJP 與 toxo；有效 ART 就不需 MAC 預防'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id18-toxo',
  chapter: 'ID18',
  title: '腦中的多個環狀病灶',
  patient: '42 歲男性 · HIV，未治療',
  summary: '知道自己有 HIV 但沒有治療。這週頭痛、左手無力、講話變慢。',
  cards: ['id-oi-path', 'id-hiv-cns', 'id-oi-proph'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。蔡先生五年前診斷 HIV，沒有治療。這週頭痛、**左手無力**、反應變慢，昨天抽搐一次。沒有發燒。',
        'CD4 **38**。**Toxoplasma IgG 陽性**。',
        'MRI：**基底核與皮髓質交界多處 ring-enhancing lesions**，周圍水腫。'
      ],
      clue: ['42M；HIV 未治療，**CD4 38**', '頭痛、**focal deficit**、seizure', '**Toxo IgG (+)**', 'MRI：**多發 ring-enhancing**'],
      choices: [{ label: '治療', next: 'tx' }]
    },
    tx: {
      text: '最可能 toxoplasmosis（CD4 < 100、IgG 陽性、多發病灶）。',
      choices: [
        { label: '**經驗性 sulfadiazine + pyrimethamine + leucovorin**；**2 週後追蹤影像**看反應', next: 'follow' },
        { label: '先做腦切片確診再治療', next: 't_bx' },
        { label: 'Pyrimethamine + sulfadiazine，不用 leucovorin', next: 't_leu' }
      ]
    },
    t_bx: {
      text: '主治醫師搖頭。',
      feedback: 'CD4 < 100、toxo IgG 陽性、多發病灶，診斷**常靠經驗治療的反應**（病灶縮小）。沒反應再考慮切片（例如 lymphoma）。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_leu: {
      text: '主治醫師搖頭。',
      feedback: 'Pyrimethamine 是葉酸拮抗劑，要加 **leucovorin** 預防血液毒性。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    follow: {
      text: '兩週後 MRI 病灶明顯縮小，無力改善。但第 10 天他全身出現**皮疹**，評估是 sulfadiazine 過敏。',
      clue: ['**病灶縮小**（確認 toxo）', 'Sulfadiazine **過敏**'],
      choices: [
        { label: 'Sulfadiazine 換成 **clindamycin 600 mg q8h**（+ pyrimethamine + leucovorin）；6 週後減量；之後次級預防；**開始 ART**', next: 'end_good' },
        { label: '停所有抗 toxo 藥', next: 'f_stop' }
      ]
    },
    f_stop: {
      text: '主治醫師搖頭。',
      feedback: '磺胺過敏用 **clindamycin** 取代 sulfadiazine，療程要完成。',
      choices: [{ label: '重新決定', next: 'follow' }]
    },
    end_good: {
      text: '完成 6 週治療後改維持劑量，開始 ART。CD4 > 200 持續半年後停次級預防。',
      ending: {
        grade: 'good',
        title: 'CNS toxoplasmosis',
        pearls: [
          'CD4 < 100 + toxo IgG + 多發 ring-enhancing -> 經驗治療，看反應',
          'Sulfadiazine + pyrimethamine + leucovorin；磺胺過敏用 clindamycin',
          '沒反應 -> 想 PCNSL（CSF EBV PCR）',
          '預防：CD4 < 100 且 IgG 陽性 -> TMP-SMX DS qd'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id18-crypto',
  chapter: 'ID18',
  title: '頭痛兩週的 HIV 新診斷',
  patient: '33 歲女性 · 夜市攤販',
  summary: '頭痛兩週、發燒，今天才知道有 HIV。CD4 只有 18。',
  cards: ['id-hiv-cns', 'id-iris', 'id-crypto'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。小莊頭痛兩週，越來越痛，發燒、噁心。今天篩檢 **HIV 陽性**，CD4 **18**。',
        '意識清楚，頸部輕微僵硬，沒有 focal deficit。血清 **CrAg 陽性**。'
      ],
      clue: ['33F；新診斷 HIV，**CD4 18**', '頭痛 2 週、發燒', '**血清 CrAg (+)**'],
      choices: [{ label: '評估', next: 'lp' }]
    },
    lp: {
      text: '下一步？',
      choices: [
        { label: '**LP，量 opening pressure**', next: 'tx' },
        { label: '血清 CrAg 陽性就夠了，直接治療', next: 'l_skip' }
      ]
    },
    l_skip: {
      text: '主治醫師搖頭。',
      feedback: '一定要 **LP**：確認 CNS 侵犯，而且**一定要量 opening pressure**，顱內壓處理是降低死亡率的關鍵。',
      choices: [{ label: '重新決定', next: 'lp' }]
    },
    tx: {
      text: '**OP 34 cmH2O**；CSF CrAg 1:1,024。開始治療。',
      clue: ['**OP 34**；CSF CrAg (+)'],
      choices: [
        { label: '**L-AmB 3-4 mg/kg + flucytosine** >= 2 週；**每天治療性 LP** 到 OP 正常；**ART 延後到抗黴菌治療開始後 2-10 週**', next: 'iris' },
        { label: 'L-AmB + flucytosine，同時**立刻開始 ART**', next: 't_art' }
      ]
    },
    t_art: {
      text: '主治醫師搖頭。',
      feedback: 'Cryptococcal 腦膜炎是少數**要延後 ART**（2-10 週）的 OI，太早開始 IRIS 風險與死亡率上升。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    iris: {
      text: [
        '完成 induction 後改 fluconazole，第 5 週開始 ART。',
        'ART 第 4 週，她又出現**劇烈頭痛**、發燒。HIV RNA 已經下降 2 log，CD4 升到 96。LP：OP 30，**CSF 培養陰性**，WBC 比之前**更高**。'
      ],
      clue: ['ART 4 週後症狀復發', 'RNA 下降、CD4 上升', '**CSF 培養陰性**、WBC 上升 -> **paradoxical IRIS**'],
      choices: [
        { label: '**Paradoxical IRIS**：**繼續 ART**，治療性 LP 降壓，可考慮類固醇；持續 fluconazole', next: 'end_good' },
        { label: '治療失敗，停 ART 並重新 induction', next: 'i_stop' }
      ]
    },
    i_stop: {
      text: '主治醫師搖頭。',
      feedback: '病毒量下降、CD4 上升、CSF **培養陰性**：這是免疫恢復造成的 **IRIS**，不是黴菌復發。**IRIS 通常繼續 ART**。',
      choices: [{ label: '重新決定', next: 'iris' }]
    },
    end_good: {
      text: '幾次 LP 後症狀緩解。一年後 CD4 260，持續半年 >= 200 後停 fluconazole。',
      ending: {
        grade: 'good',
        title: 'Cryptococcal meningitis and paradoxical IRIS',
        pearls: [
          '血清 CrAg 陽性 -> LP，一定量 OP',
          'L-AmB + 5-FC >= 2 週 -> fluconazole 400 x 8 週 -> 200',
          'ART 延後 2-10 週（TB 與 crypto 才延後）',
          'IRIS：培養陰性、CD4 上升；繼續 ART，處理發炎'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id18-cmv',
  chapter: 'ID18',
  title: '眼前的飛蚊',
  patient: '45 歲男性 · HIV，剛開始 ART',
  summary: 'CD4 只有 22，最近右眼一直看到黑點，視野右邊一塊看不清楚。',
  cards: ['id-hiv-cns', 'id-oi-path', 'id-antiviral'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '感染科門診。邵先生兩個月前診斷 HIV，CD4 **22**，三週前開始 ART。這週右眼**飛蚊變多**，右側**周邊視野**有一塊看不清楚。不痛、不紅。'
      ],
      clue: ['45M；**CD4 22**', '右眼**飛蚊**、**周邊視野缺損**；不痛不紅'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: '勾選檢查。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'eye', group: '會診', label: '**緊急眼科：散瞳眼底鏡**', key: true, reveal: true,
            result: '右眼周邊**黃白色壞死病灶伴出血**（pizza-pie）', clue: '**CMV retinitis**（眼底）',
            miss: 'CMV retinitis 靠**眼底鏡**診斷，CD4 < 50 有視覺症狀要緊急會診眼科。' },
          { id: 'cmvpcr', group: '檢驗', label: '血液 CMV PCR', result: '陽性（但沒有末端器官疾病時也可能陽性）' },
          { id: 'cbc', group: '檢驗', label: '**CBC（基礎值）**', key: true, reveal: true,
            result: 'WBC 3,200、ANC 1,600', clue: 'ANC 1,600',
            miss: 'Ganciclovir/valganciclovir 的主要毒性是 **neutropenia**，要有基礎值並追蹤。' },
          { id: 'cr', group: '檢驗', label: 'Cr', result: '0.9' }
        ]
      }
    },
    tx: {
      text: 'CMV retinitis。',
      choices: [
        { label: '**Valganciclovir 900 mg bid x 14-21 天**（induction），之後 **900 mg qd** 維持到免疫恢復；**每週 CBC**', next: 'end_good' },
        { label: 'Acyclovir IV', next: 't_acv' },
        { label: '先用 foscarnet', next: 't_fos' }
      ]
    },
    t_acv: {
      text: '主治醫師搖頭。',
      feedback: 'Acyclovir 對 CMV 效果不足。用 **ganciclovir 或 valganciclovir**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_fos: {
      text: '主治醫師搖頭。',
      feedback: 'Foscarnet、cidofovir 是**替代藥**（腎毒性高），用在 ganciclovir 抗藥或無法耐受。首選 valganciclovir（或 IV ganciclovir）。Foscarnet 是 CMV **腦炎、脊髓病變**的首選。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '三週後病灶不再擴大。ART 讓 CD4 升到 160，持續一段時間後停維持治療。',
      ending: {
        grade: 'good',
        title: 'CMV retinitis',
        pearls: [
          'CD4 < 50；飛蚊、暗點、周邊視野缺損；眼底鏡診斷',
          'Valganciclovir 900 bid x 14-21 天 -> 900 qd；或 IV ganciclovir',
          '主要毒性 neutropenia（可用 G-CSF）；每週 CBC',
          'Foscarnet、cidofovir 腎毒性；CNS CMV 用 foscarnet'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id18-tb',
  chapter: 'ID18',
  title: 'HIV 合併肺結核',
  patient: '36 歲男性 · HIV 新診斷',
  summary: '咳嗽發燒一個月，HIV 篩檢陽性，痰 AFB 也陽性。',
  cards: ['id-hiv-myco', 'id-iris', 'id-tb-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房（負壓隔離）。吳先生咳嗽、發燒、盜汗一個月。**HIV 新診斷**，CD4 **140**，RNA 210,000。',
        '痰 **AFB smear 2+、TB NAAT 陽性**（rifampin 抗藥陰性）。CXR：右下葉浸潤、**肺門淋巴結腫大**，沒有空洞。'
      ],
      clue: ['36M；新診斷 HIV，**CD4 140**', '**肺結核**（RIF 敏感）', '下葉浸潤 + 肺門淋巴結（CD4 低的不典型表現）'],
      choices: [{ label: '治療順序', next: 'order' }]
    },
    order: {
      text: 'TB 與 HIV 都要治療。',
      choices: [
        { label: '**先開始 RIPE**，**數週後**再開始 ART（降低 IRIS）', next: 'regimen' },
        { label: 'RIPE 和 ART 同一天開始', next: 'o_same' },
        { label: '先 ART，TB 等 CD4 回升再治', next: 'o_art' }
      ]
    },
    o_same: {
      text: '主治醫師搖頭。',
      feedback: 'TB 是少數**建議延後 ART** 的 OI：先開始抗結核治療，**數週後**再開始 ART，降低 IRIS 風險。',
      choices: [{ label: '重新決定', next: 'order' }]
    },
    o_art: {
      text: '主治醫師搖頭。',
      feedback: '活動性 TB 要**立刻治療**；ART 在數週後加入。',
      choices: [{ label: '重新決定', next: 'order' }]
    },
    regimen: {
      text: '三週後要開始 ART。他的 genotype 有 NNRTI 抗藥，感染科考慮用 **boosted PI** 的方案。',
      choices: [
        { label: '和 PI 併用時，**rifampin 改 rifabutin**（調整劑量）', next: 'iris' },
        { label: '照用 rifampin，PI 劑量加倍', next: 'r_rif' }
      ]
    },
    r_rif: {
      text: '主治醫師搖頭。',
      feedback: 'Rifampin 會大幅降低 PI 濃度。和 ART（尤其 PI）併用時**用 rifabutin 取代 rifampin**，並調整劑量。',
      choices: [{ label: '重新決定', next: 'regimen' }]
    },
    iris: {
      text: 'ART 第 3 週，原本改善的他又高燒，頸部淋巴結腫大化膿。病毒量下降、CD4 升到 260；痰培養已經轉陰，藥敏全敏感。',
      clue: ['ART 後 TB 症狀惡化，**CD4 上升、培養轉陰** -> **paradoxical TB IRIS**'],
      choices: [
        { label: '**Paradoxical IRIS**：**繼續 ART 與抗結核**；可加低劑量類固醇；必要時引流淋巴結', next: 'end_good' },
        { label: '停 ART', next: 'i_stop' }
      ]
    },
    i_stop: {
      text: '主治醫師搖頭。',
      feedback: 'IRIS 時**通常繼續 ART**，低劑量類固醇可以減輕發炎。',
      choices: [{ label: '重新決定', next: 'iris' }]
    },
    end_good: {
      text: '兩週類固醇後退燒。完成 6 個月抗結核治療，病毒量測不到。',
      ending: {
        grade: 'good',
        title: 'HIV-associated TB',
        pearls: [
          'CD4 低時 TB 表現不典型、肺外多',
          '先抗結核，數週後 ART',
          'PI 併用時 rifampin 改 rifabutin',
          'Paradoxical TB IRIS：繼續 ART，可用類固醇'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id18-mac',
  chapter: 'ID18',
  title: '燒了一個月、瘦了十公斤',
  patient: '40 歲男性 · HIV，ART 中斷',
  summary: '一年前停了 ART。這個月每天發燒、盜汗、拉肚子，瘦了十公斤。',
  cards: ['id-hiv-myco', 'id-oi-proph'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。龔先生 HIV，一年前自行停 ART。一個月來每天發燒、**盜汗**、腹瀉、**體重減輕 10 kg**。',
        'CD4 **12**。Hb **7.8**、**ALP 410**。CT：腹腔內淋巴結腫大、肝脾腫大。CXR 正常。'
      ],
      clue: ['40M；HIV，**ART 中斷**，**CD4 12**', '發燒、盜汗、腹瀉、消瘦', '**貧血、ALP 上升**、腹腔淋巴結'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '你懷疑播散性 MAC。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'mbcx', group: '培養', label: '**分枝桿菌血液培養**', key: true, reveal: true,
            result: '第 12 天：**M. avium complex**', clue: '**MAC 菌血症**',
            miss: '播散性 MAC 的診斷靠**分枝桿菌血液培養**（一般血液培養不會長）。' },
          { id: 'tb', group: '檢驗', label: '痰 AFB、TB NAAT', result: '陰性' },
          { id: 'crag', group: '檢驗', label: 'CrAg', result: '陰性' },
          { id: 'cmv', group: '檢驗', label: 'CMV PCR、眼底', result: '眼底正常' }
        ]
      }
    },
    tx: {
      text: '播散性 MAC，目前沒有 ART。',
      choices: [
        { label: '**Clarithromycin 500 mg bid + ethambutol 15 mg/kg qd**；沒在 ART 或重症可加 **rifabutin**；之後重新開始 ART', next: 'end_good' },
        { label: 'RIPE', next: 't_ripe' },
        { label: 'Azithromycin 1,200 mg 每週一次', next: 't_proph' }
      ]
    },
    t_ripe: {
      text: '主治醫師搖頭。',
      feedback: 'MAC 不是 TB。治療核心是 **macrolide + ethambutol**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_proph: {
      text: '主治醫師搖頭。',
      feedback: '每週 azithromycin 是**預防**劑量。播散性 MAC 要 **clarithromycin + ethambutol**（± rifabutin）。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '治療兩週後退燒，重新開始 ART。12 個月後 CD4 > 100 持續半年，停 MAC 治療。',
      ending: {
        grade: 'good',
        title: 'Disseminated MAC',
        pearls: [
          'CD4 < 50；發燒、消瘦、盜汗、腹瀉；貧血、ALP 上升',
          '分枝桿菌血液培養',
          'Clarithromycin + ethambutol ± rifabutin、aminoglycoside、FQ',
          '有效 ART 立即開始就不需 MAC 初級預防'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id18-gi-ks',
  chapter: 'ID18',
  title: '水瀉和紫色的斑',
  patient: '35 歲男性 · HIV，從未治療',
  summary: '水瀉兩個月、瘦了很多，腿上和上顎長了幾塊紫色的斑。',
  cards: ['id-hiv-gi', 'id-hiv-neo', 'id-oi-path'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '感染科病房。林先生 HIV 從未治療，CD4 **45**。**大量水瀉**兩個月，一天十幾次，體重減輕 12 kg。',
        '雙小腿與**上顎**有數塊**紫紅色、不痛的斑塊**。'
      ],
      clue: ['35M；HIV 未治療，**CD4 45**', '慢性大量水瀉、消瘦', '**皮膚與上顎紫色斑塊**'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '勾選檢查。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'afb', group: '檢驗', label: '**糞便 acid-fast stain**（或免疫螢光）', key: true, reveal: true,
            result: '**Cryptosporidium oocysts**', clue: '**Cryptosporidium**',
            miss: 'Cryptosporidium 用糞便 **acid-fast stain** 或免疫螢光，一般蟲卵檢查常漏掉。' },
          { id: 'bx', group: '檢查', label: '**皮膚病灶切片**', key: true, reveal: true,
            result: '**Kaposi sarcoma**（HHV-8 陽性）', clue: '**Kaposi sarcoma**',
            miss: '紫色病灶要切片確診。' },
          { id: 'cdiff', group: '檢驗', label: 'C. difficile、糞便培養', result: '陰性' },
          { id: 'cxr', group: '影像', label: 'CXR（KS 肺侵犯？）', result: '正常' }
        ]
      }
    },
    tx: {
      text: 'Cryptosporidiosis + 皮膚與口腔 KS（無內臟侵犯）。',
      choices: [
        { label: '**開始 ART**（兩者的關鍵）；cryptosporidium 加 **nitazoxanide**、補充水分；KS 先**優化 ART**觀察', next: 'end_good' },
        { label: 'Nitazoxanide 治好腹瀉後再開始 ART', next: 't_wait' },
        { label: 'KS 立刻全身化療，ART 之後再說', next: 't_chemo' }
      ]
    },
    t_wait: {
      text: '主治醫師搖頭。',
      feedback: 'Cryptosporidium **沒有有效的特定治療，ART 才是關鍵**。Nitazoxanide 只是可能有幫助。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_chemo: {
      text: '主治醫師搖頭。',
      feedback: '輕症 KS 先**優化 ART**；重症（廣泛或內臟侵犯）才 liposomal doxorubicin + ART。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: 'ART 三個月後腹瀉停止，KS 病灶逐漸變淡縮小。',
      ending: {
        grade: 'good',
        title: 'Cryptosporidiosis and Kaposi sarcoma',
        pearls: [
          'Cryptosporidium：糞便 acid-fast stain；ART 是關鍵，nitazoxanide 可能有效',
          'Cystoisospora、Cyclospora：TMP-SMX；microsporidia：ART 或 albendazole',
          'KS（HHV-8）：輕症優化 ART；重症 liposomal doxorubicin + ART',
          'HIV 的 HPV 篩檢與疫苗（到 45 歲）'
        ]
      }
    }
  }
});
