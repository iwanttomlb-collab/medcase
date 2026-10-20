// ID 11 GI & intra-abdominal infections: gastroenteritis, chronic diarrhea, IAI (Table 14-10), peritonitis, hepatobiliary.
// Source: Washington Manual Ch 14 (source/Washington ID.txt, lines 1072-1190).

RPG.registerCards('ID11', [
  {
    id: 'id-gi-path',
    title: '感染性腹瀉 致病機轉',
    points: [
      '**分泌性**（toxin 刺激腸細胞分泌，例如 ETEC、cholera、多數病毒）-> 大量水瀉、通常不發燒',
      '**侵襲性**（Shigella、Campylobacter、Salmonella、Entamoeba）-> 黏膜發炎潰瘍 -> **血便、發燒、腹痛**',
      '**EHEC（O157:H7）**：**Shiga toxin** 吸收入血，傷害**腎臟與腸道血管內皮** -> 血便，5-10 天後部分病人 **HUS**（MAHA、血小板低、AKI）',
      '**抗生素**讓 EHEC 溶解或誘導 phage 釋放更多 toxin -> **HUS 風險上升**；止瀉藥讓 toxin 滯留',
      '**Giardia**：trophozoite 附著小腸絨毛 -> 吸收不良、油便、腹脹；水源傳染、**cysts 耐氯**',
      '**Entamoeba histolytica**：侵犯大腸黏膜（燒瓶狀潰瘍），可經門靜脈到肝 -> 肝膿瘍；trophozoite 殺掉後腸腔內仍有 **cysts** -> 要加 **luminal agent**'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-gastro',
    title: '感染性腸胃炎與慢性腹瀉',
    points: [
      '**補充水分與電解質**是主要治療；**血便時避免止瀉藥**',
      '**多數急性腹瀉是病毒**；抗生素只給**嚴重**、**血便**、**高風險**病人',
      '常用：**azithromycin 1 g 單次或 500 mg qd x 3 天**、ciprofloxacin 750 mg 單次或 500 mg q12h x 3 天、levofloxacin 500 mg 單次或 qd x 3 天',
      '**EHEC 禁用抗生素**：增加 **HUS** 風險',
      '**旅行者腹瀉**通常自癒；嚴重、**發燒、血便** -> **azithromycin**',
      '懷疑 CDI -> 經驗性 fidaxomicin 或 oral vancomycin'
    ],
    table: {
      head: ['慢性腹瀉', '診斷', '治療'],
      rows: [
        ['**Giardiasis**', '糞便抗原或顯微鏡', '**Tinidazole 2 g PO 單次**、nitazoxanide 500 mg q12h x 3 d、或 metronidazole 500 mg q12h x 7 d'],
        ['**Amebiasis**', '糞便顯微鏡、抗原、PCR', '**Metronidazole 500 mg q8h x 7-10 d** 或 tinidazole 2 g qd x 3 d，**之後 paromomycin 或 iodoquinol 清除 cysts**']
      ]
    },
    refs: ['Am J Gastroenterol 2016;111:602（ACG acute diarrheal infections）']
  },
  {
    id: 'id-iai-path',
    title: '腹腔內感染 致病機轉',
    points: [
      '腸道破損（穿孔、闌尾炎、憩室炎）-> 糞便菌進入無菌的腹腔 -> **多菌**：腸道 **GNB**（E. coli、Klebsiella）+ **厭氧菌**（**B. fragilis**）',
      '需氧菌與厭氧菌**協同**：需氧菌消耗氧氣創造厭氧環境、厭氧菌形成膿瘍',
      '膿瘍 = 抗生素進不去、低 pH 讓 aminoglycoside 失效 -> **感染源控制（引流、切除）是關鍵**',
      '**SBP**：肝硬化腹水，腸道菌**移行**到腹水（沒有穿孔）-> 通常**單一菌**；**secondary peritonitis** 是穿孔 -> **多菌**、腹水 protein 高、glucose 低、LDH 高',
      '**Cholangitis**：膽道**阻塞**（結石、狹窄、支架阻塞）+ 膽汁感染 -> 膽道壓力上升把細菌推入血液 -> 很快 sepsis -> 需要**引流**'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-iai',
    title: '腹腔內感染經驗性治療（Table 14-10）',
    points: [
      '**低風險社區型**：急性憩室炎、colitis、闌尾膿瘍',
      '**高風險（complicated）社區型**：> 70 歲、共病、免疫低下、感染源控制延遲',
      '**醫療相關**：本地 ESBL 或 carbapenemase 多時要再加藥',
      '**及早開始經驗性抗生素**；**膿瘍引流或手術切除**等感染源控制最重要'
    ],
    table: {
      head: ['情境', '處方'],
      rows: [
        ['**口服**', '**Amox-clav 875/125 mg q12h**；**cipro 500-750 mg q12h + metronidazole 500 mg q8h**；moxifloxacin（**B. fragilis 抗藥增加**）'],
        ['**低風險，不擔心 PsA**', '**Ceftriaxone 1-2 g qd + metronidazole 500 mg q8h**；ertapenem 1 g qd；pip-tazo 3.375 g q6h'],
        ['**高風險，擔心 PsA**', 'Pip-tazo 4.5 g q6h；**cefepime + metronidazole**；cipro + metronidazole；meropenem 或 imipenem'],
        ['**擔心 ESBL**', '**Meropenem** 或 imipenem'],
        ['**擔心 VRE**', '加 linezolid 或 daptomycin'],
        ['**擔心 Candida**', '加 echinocandin 或 fluconazole']
      ]
    },
    note: 'VRE、Candida 只在無菌部位培養出來或高風險（免疫低下、術後、肝移植、VRE colonization、腸穿孔、長期廣效抗生素）時加。',
    refs: ['Surg Infect 2017;18:1（SIS IAI guideline）']
  },
  {
    id: 'id-peritonitis',
    title: 'Peritonitis',
    points: [
      '**Primary（SBP）**：肝硬化腹水的常見併發症；E. coli、K. pneumoniae、streptococci（含 S. pneumoniae）；偶有 TB、**N. gonorrhoeae**（Fitz-Hugh-Curtis）',
      '**Secondary**：**穿孔**或鄰近臟器感染 -> 急性外科腹部',
      '表現：發燒、腹痛、**意識改變**、腹部壓痛與腹膜徵象',
      '懷疑就**抽血液培養並做診斷性腹水穿刺，在抗生素前**：需氧與厭氧培養（**床邊直接打進血液培養瓶**）、細胞數與分類、Gram stain、total protein、albumin、glucose、LDH',
      '**SBP：腹水 PMN > 250/mm3** 或培養陽性',
      '**Secondary**：臨床 + 影像找 **free air** 與穿孔；腹水 **protein 高、glucose 低、LDH 高**',
      'Secondary：穿孔或膿瘍可能需要手術；**及早經驗性抗生素**（Table 14-10 的 IV 方案，含厭氧菌涵蓋）；持續到影像顯示膿瘍消失'
    ]
  },
  {
    id: 'id-biliary',
    title: '膽道感染：cholecystitis 與 cholangitis',
    points: [
      '**Acute cholecystitis**：多與膽結石相關；腸道菌（E. coli、Klebsiella、Enterobacter）；**acalculous** 佔 5-10%，多在住院重症',
      '發燒、RUQ 痛、**Murphy sign**；白血球上升；單純者肝酵素不常上升',
      '診斷：**超音波**（膽囊壁增厚水腫、超音波 Murphy）；HIDA scan 不顯影；CT 或 **MRCP** 看併發症或膽管結石',
      '**Ascending cholangitis**：膽管阻塞（結石、狹窄、支架阻塞）的猛爆性感染；**Charcot triad**（發燒、RUQ 痛、黃疸）；加上**意識改變、低血壓 = Reynolds pentad** -> 要快',
      'Cholangitis 檢驗：白血球、**cholestatic** 肝酵素；影像見膽管擴張；**所有人抽血液培養**'
    ],
    table: {
      head: ['情境', '處置'],
      rows: [
        ['社區型、低風險 cholecystitis', '**Ceftriaxone 或 ciprofloxacin + metronidazole**'],
        ['**高風險**（高齡、重症、免疫低下、有併發症）與 **cholangitis**', '**Cefepime + metronidazole**、pip-tazo、ertapenem 或 meropenem'],
        ['Cholecystitis 手術', '**早期腹腔鏡膽囊切除**預後較好；**術後可以停 perioperative 抗生素**'],
        ['不能手術（差的手術候選人、septic shock）', '**經皮膽囊造口**或內視鏡引流'],
        ['**Cholangitis**', '積極支持治療 + 廣效抗生素 + **ERCP**（診斷與治療：取石、放支架）；失敗則經皮引流']
      ]
    },
    refs: ['J Hepatobiliary Pancreat Sci 2018;25:3（Tokyo Guidelines 2018）']
  }
]);

RPG.registerCase({
  id: 'id11-ehec',
  chapter: 'ID11',
  title: '烤肉後的血便',
  patient: '24 歲女性 · 研究生',
  summary: '中秋烤肉吃了半生的漢堡肉，三天後肚子絞痛、拉血便。',
  cards: ['id-gi-path', 'id-gastro', 'ho-tma'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。小方中秋節烤肉吃了**半生的漢堡肉**，三天後開始劇烈腹絞痛、水瀉，今天變成**血便**，一天十多次。',
        '**沒有發燒**。BP 112/70、HR 102。腹部壓痛，無腹膜徵象。',
        'CBC：WBC 14,200、Hb 13.4、PLT 220k；Cr 0.7。'
      ],
      clue: ['24F；**半生絞肉**', '**血便**、劇烈絞痛', '**無發燒**', 'PLT、Cr 目前正常'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: '血便、不發燒、吃了絞肉：你懷疑 EHEC。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'stool', group: '檢驗', label: '**糞便培養 + Shiga toxin 檢測**', key: true, reveal: true,
            result: '**E. coli O157:H7，Shiga toxin (+)**', clue: '**STEC O157:H7**',
            miss: '血便要送糞便培養與 Shiga toxin。' },
          { id: 'fluid', group: '治療', label: '**IV 輸液**', key: true, reveal: true,
            result: '已補充', clue: '輸液',
            miss: '補充水分是主要治療，也可能降低 HUS 時的腎損傷。' },
          { id: 'cdiff', group: '檢驗', label: 'C. difficile', result: '陰性' },
          { id: 'lop', group: '用藥', label: 'Loperamide', result: '已撤回',
            waste: '**血便時避免止瀉藥**。' }
        ]
      }
    },
    tx: {
      text: 'STEC O157:H7。要不要給抗生素？',
      choices: [
        { label: '**不給抗生素**；支持治療，**追蹤 CBC、Cr、LDH** 監測 HUS', next: 'hus' },
        { label: 'Ciprofloxacin 3 天，血便要治療', next: 't_abx' },
        { label: 'Azithromycin 1 g 單次', next: 't_abx' }
      ]
    },
    t_abx: {
      text: '主治醫師搖頭。',
      feedback: '**EHEC 禁用抗生素**：會增加 Shiga toxin 釋放，提高 **HUS** 的風險。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    hus: {
      text: '第 7 天：腹瀉減少，但尿量變少。PLT **58k**、Hb **9.1**、**schistocytes**、LDH 1,200、**Cr 2.6**。',
      clue: ['第 7 天：**MAHA + PLT 下降 + AKI** -> **HUS**'],
      choices: [
        { label: '**ST-HUS**：**支持治療**（輸液與電解質、必要時透析），避免輸血小板、仍不給抗生素', next: 'end_good' },
        { label: '當作 TTP 緊急 plasma exchange', next: 'h_pex' }
      ]
    },
    h_pex: {
      text: '主治醫師搖頭。',
      feedback: '血便後的 MAHA + PLT 低 + AKI，Shiga toxin 陽性，是 **ST-HUS**，治療是**支持治療**。TTP 才需要緊急 plasma exchange。',
      choices: [{ label: '重新決定', next: 'hus' }]
    },
    end_good: {
      text: '小方洗了三次腎，兩週後腎功能逐漸恢復，PLT 回到正常。',
      ending: {
        grade: 'good',
        title: 'STEC O157:H7 與 HUS',
        pearls: [
          '血便、不發燒、絞肉 -> EHEC；送培養與 Shiga toxin',
          'EHEC 禁用抗生素；血便避免止瀉藥',
          '5-10 天後監測 HUS（CBC、smear、LDH、Cr）',
          'ST-HUS：支持治療'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id11-travel',
  chapter: 'ID11',
  title: '背包旅行回來',
  patient: '29 歲男性 · 自由攝影師',
  summary: '東南亞背包旅行，第三天開始拉肚子；回國三週後換成油油的軟便和脹氣。',
  cards: ['id-gi-path', 'id-gastro'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '旅遊醫學門診。阿哲在東南亞背包旅行一個月。第一週曾經水瀉兩天，自己吃電解質水好了。',
        '回國後三週，這次是**油油的、很臭的軟便**、**脹氣**、打嗝有硫磺味，體重減輕 3 kg。沒有血便、沒有發燒。',
        '他說旅途中常喝山區民宿的井水。'
      ],
      clue: ['29M；東南亞旅行，**喝井水**', '回國後 **3 週油便、脹氣**、體重減輕', '無血便、無發燒'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '慢性腹瀉、油便、脹氣、水源暴露。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'giardia', group: '檢驗', label: '**糞便 Giardia 抗原**（或顯微鏡）', key: true, reveal: true,
            result: '**陽性**', clue: '**Giardia antigen (+)**',
            miss: 'Giardia 用糞便抗原或顯微鏡診斷。' },
          { id: 'ova', group: '檢驗', label: '糞便蟲卵與 E. histolytica 抗原', result: '陰性' },
          { id: 'stool', group: '檢驗', label: '糞便細菌培養', result: '正常菌叢' },
          { id: 'colon', group: '檢查', label: '大腸鏡', result: '已撤回',
            waste: '典型的 giardiasis 表現，糞便抗原就能診斷，不需要侵入性檢查。' }
        ]
      }
    },
    tx: {
      text: 'Giardiasis。治療？',
      choices: [
        { label: '**Tinidazole 2 g PO 單次**（或 nitazoxanide 3 天、metronidazole 7 天）', next: 'q' },
        { label: 'Ciprofloxacin 3 天', next: 't_fq' },
        { label: 'Metronidazole 後接 paromomycin', next: 't_amoeba' }
      ]
    },
    t_fq: {
      text: '主治醫師搖頭。',
      feedback: 'Giardia 是原蟲，FQ 無效。用 tinidazole、nitazoxanide 或 metronidazole。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_amoeba: {
      text: '主治醫師搖頭。',
      feedback: '先 metronidazole 再 paromomycin（luminal agent 清除 cysts）是 **amebiasis** 的治療。Giardia 用 tinidazole 單次即可。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    q: {
      text: '他問：「下次出國又拉肚子要不要先準備抗生素？」',
      choices: [
        { label: '旅行者腹瀉**多半自癒**，補充水分；**嚴重、發燒或血便**時用 **azithromycin**（1 g 單次）', next: 'end_good' },
        { label: '一拉肚子就吃 ciprofloxacin', next: 'q_fq' }
      ]
    },
    q_fq: {
      text: '主治醫師搖頭。',
      feedback: '旅行者腹瀉通常自癒。嚴重、發燒、血便才治療，首選 **azithromycin**（東南亞 Campylobacter 對 FQ 抗藥率高）。',
      choices: [{ label: '重新回答', next: 'q' }]
    },
    end_good: {
      text: '吃完 tinidazole 一週後症狀消失。',
      ending: {
        grade: 'good',
        title: 'Giardiasis 與旅行者腹瀉',
        pearls: [
          '慢性油便、脹氣、水源暴露 -> Giardia；糞便抗原',
          'Tinidazole 2 g 單次、nitazoxanide 3 天、metronidazole 7 天',
          'Amebiasis：metronidazole 或 tinidazole 後接 paromomycin/iodoquinol',
          '旅行者腹瀉多自癒；嚴重、發燒、血便用 azithromycin'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id11-iai',
  chapter: 'ID11',
  title: '痛了五天的右下腹',
  patient: '52 歲男性 · 貨運司機',
  summary: '右下腹痛五天才來，CT 是闌尾破裂合併膿瘍。',
  cards: ['id-iai-path', 'id-iai'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。洪先生右下腹痛五天，忍到今天發燒 38.6°C 才來。沒有慢性病，最近沒住院或用抗生素。',
        'BP 126/78、HR 104。右下腹壓痛、局部反彈痛。',
        'CT：**闌尾穿孔合併 5 cm 膿瘍**。'
      ],
      clue: ['52M；無共病、無醫療暴露', '**Perforated appendicitis + 5 cm abscess**', '血行動力穩定'],
      choices: [{ label: '處置', next: 'tx' }]
    },
    tx: {
      text: '社區型、低風險 IAI。',
      choices: [
        { label: '**Ceftriaxone + metronidazole**（或 ertapenem）+ **CT-guided 膿瘍引流**，膿液送培養', next: 'report' },
        { label: 'Moxifloxacin 單用，不用引流', next: 't_moxi' },
        { label: 'Meropenem + vancomycin', next: 't_broad' },
        { label: 'Ceftriaxone 單用 + 引流', next: 't_cro' }
      ]
    },
    t_moxi: {
      text: '主治醫師搖頭。',
      feedback: '兩個問題：moxifloxacin 對 **B. fragilis 抗藥增加**；而且 5 cm 膿瘍要**引流**，感染源控制最關鍵。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_broad: {
      text: '主治醫師搖頭。',
      feedback: '低風險社區型、沒有 ESBL 或 PsA 疑慮，不需要 carbapenem，更不需要 vancomycin。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_cro: {
      text: '主治醫師搖頭。',
      feedback: 'Ceftriaxone 不涵蓋 **B. fragilis**，要合併 **metronidazole**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    report: {
      text: '膿液培養：E. coli（amox-clav S）、B. fragilis。引流後第 2 天退燒、可以進食。',
      choices: [
        { label: '改口服 **amoxicillin-clavulanate**，感染源已控制、臨床改善就短療程', next: 'end_good' },
        { label: 'IV 打滿 14 天', next: 'end_long',
          why: '感染源已經控制、臨床改善、可以進食，就改口服。拖長 IV 療程只增加副作用。' }
      ]
    },
    end_long: {
      text: '洪先生多住了 10 天，出院前出現 IV 部位靜脈炎。',
      ending: { grade: 'ok', title: '感染源控制後療程過長', pearls: ['感染源控制、改善 -> 改口服、短療程'] }
    },
    end_good: {
      text: '洪先生第 4 天出院，八週後接受 interval appendectomy。',
      ending: {
        grade: 'good',
        title: 'Perforated appendicitis with abscess',
        pearls: [
          'IAI：腸道 GNB + 厭氧菌（B. fragilis）',
          '低風險：ceftriaxone + metronidazole、ertapenem、pip-tazo',
          '感染源控制（引流、切除）是關鍵',
          'Moxifloxacin：B. fragilis 抗藥增加'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id11-peritonitis',
  chapter: 'ID11',
  title: '肝硬化的腹水',
  patient: '61 歲男性 · 酒精性肝硬化',
  summary: '肝硬化腹水，發燒、肚子痛、有點混亂。腹水抽出來很混濁。',
  cards: ['id-iai-path', 'id-peritonitis', 'id-iai'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。駱先生酒精性肝硬化，有大量腹水。兩天來發燒 38.8°C、全腹痛，今天有點**混亂**。',
        'BP 98/60。全腹壓痛，有反彈痛。'
      ],
      clue: ['61M；肝硬化腹水', '發燒、腹痛、**意識改變**', '全腹壓痛、反彈痛'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: '懷疑 peritonitis。',
      checklist: {
        prompt: '勾選你要做的項目（抗生素之前）',
        submit: '送出',
        next: 'think',
        options: [
          { id: 'tap', group: '檢查', label: '**診斷性腹水穿刺**：細胞數、protein、albumin、glucose、LDH、Gram stain', key: true, reveal: true,
            result: '**PMN 4,800**；protein **2.6 g/dL**；**glucose 18**；**LDH 980**（血清 220）；**Gram stain：多種 GNR、GPC、GPR**', clue: '腹水：PMN 4,800、**protein 高、glucose 低、LDH 高**、**多菌**',
            miss: '懷疑 peritonitis 一定要在抗生素前做診斷性穿刺。' },
          { id: 'bottle', group: '培養', label: '**床邊直接把腹水打進血液培養瓶**（需氧與厭氧）', key: true, reveal: true,
            result: '已送', clue: '腹水培養已送',
            miss: '腹水要床邊直接接種到血液培養瓶，陽性率高很多。' },
          { id: 'bcx', group: '培養', label: '**血液培養**', key: true, reveal: true,
            result: '已送', clue: '血液培養已送',
            miss: '抗生素前抽血液培養。' }
        ]
      }
    },
    think: {
      text: 'PMN > 250，但 protein 高、glucose 很低、LDH 高於血清、Gram stain 多種菌。',
      choices: [
        { label: '這不像 SBP，像 **secondary peritonitis**：**CT 找 free air 或穿孔**，會診外科；經驗性 IV 涵蓋 GNB + 厭氧菌', next: 'ct' },
        { label: 'PMN > 250 就是 SBP，給 ceftriaxone', next: 'k_sbp' }
      ]
    },
    k_sbp: {
      text: '主治醫師搖頭。',
      feedback: 'SBP 通常是**單一菌**。腹水 protein 高、glucose 低、LDH 高、Gram stain **多菌**，要懷疑 **secondary peritonitis**（穿孔），需要影像與外科。',
      choices: [{ label: '重新決定', next: 'think' }]
    },
    ct: {
      text: 'CT：**free air**，十二指腸潰瘍穿孔。',
      choices: [
        { label: '**緊急手術** + **pip-tazo**（或 cefepime + metronidazole）', next: 'end_good' },
        { label: '先用抗生素保守治療', next: 'c_cons' }
      ]
    },
    c_cons: {
      text: '主治醫師搖頭。',
      feedback: 'Secondary peritonitis 有**穿孔**就需要手術，感染源控制才是關鍵。',
      choices: [{ label: '重新決定', next: 'ct' }]
    },
    end_good: {
      text: '手術修補穿孔，術後在 ICU 待了一週，存活出院。',
      ending: {
        grade: 'good',
        title: 'Secondary peritonitis in a cirrhotic patient',
        pearls: [
          '抗生素前：血液培養 + 診斷性穿刺，腹水床邊打進培養瓶',
          'SBP：PMN > 250 或培養陽性，通常單一菌',
          'Secondary：protein 高、glucose 低、LDH 高、多菌 -> CT 找穿孔、手術',
          'IV 方案要涵蓋厭氧菌'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id11-chole',
  chapter: 'ID11',
  title: '吃完炸雞的右上腹痛',
  patient: '45 歲女性 · 餐廳會計',
  summary: '右上腹痛一天，發燒，深呼吸時按壓右上腹會痛到停住。',
  cards: ['id-iai-path', 'id-biliary'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。莊小姐昨晚吃炸雞後右上腹持續痛，今天發燒 38.3°C。以前飯後偶爾右上腹痛。',
        '**Murphy sign 陽性**。沒有黃疸。WBC 13,800；bilirubin 0.9、ALP 正常。',
        '超音波：膽結石、**膽囊壁增厚、膽囊周圍積液**，超音波 Murphy sign 陽性；膽管不擴張。'
      ],
      clue: ['45F；**Acute calculous cholecystitis**', '無黃疸、膽管不擴張', '社區型、低風險'],
      choices: [{ label: '處置', next: 'tx' }]
    },
    tx: {
      text: '社區型、低風險 acute cholecystitis。',
      choices: [
        { label: '**Ceftriaxone + metronidazole**；**早期腹腔鏡膽囊切除**', next: 'post' },
        { label: 'Meropenem，先保守治療 6 週後再開刀', next: 't_late' },
        { label: '急診 ERCP', next: 't_ercp' }
      ]
    },
    t_late: {
      text: '主治醫師搖頭。',
      feedback: '**早期腹腔鏡手術**預後較好；低風險社區型用 ceftriaxone（或 cipro）+ metronidazole 就夠。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_ercp: {
      text: '主治醫師搖頭。',
      feedback: 'ERCP 用在**膽管**的問題（cholangitis、膽管結石）。她膽管不擴張、膽紅素正常。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    post: {
      text: '隔天做了腹腔鏡膽囊切除，順利。術後抗生素？',
      choices: [
        { label: '**術後停 perioperative 抗生素**', next: 'end_good' },
        { label: '術後再口服 amox-clav 7 天', next: 'end_extra',
          why: '單純 cholecystitis 在膽囊切除後就可以停抗生素。' }
      ]
    },
    end_extra: {
      text: '莊小姐出院後吃了一週抗生素，出現腹瀉。',
      ending: { grade: 'ok', title: '術後多用了抗生素', pearls: ['膽囊切除後可以停抗生素'] }
    },
    end_good: {
      text: '莊小姐術後第一天出院。',
      ending: {
        grade: 'good',
        title: 'Acute calculous cholecystitis',
        pearls: [
          '發燒、RUQ 痛、Murphy sign；超音波診斷',
          '低風險：ceftriaxone 或 cipro + metronidazole',
          '早期腹腔鏡膽囊切除；術後停抗生素',
          '不能開刀：經皮膽囊造口或內視鏡引流'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id11-cholangitis',
  chapter: 'ID11',
  title: '黃了、燒了、又糊塗了',
  patient: '78 歲女性 · 膽管支架',
  summary: '一年前因為膽管狹窄放了支架。今天高燒、皮膚變黃、右上腹痛、說話顛三倒四。',
  cards: ['id-iai-path', 'id-biliary'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。邱奶奶一年前放了**膽管塑膠支架**，一直沒回診更換。今天寒顫高燒 39.6°C、**黃疸**、右上腹痛，**意識混亂**。',
        '**BP 84/48**、HR 124。Bilirubin 6.8、ALP 520、GGT 410。超音波：**肝內外膽管擴張**。'
      ],
      clue: ['78F；**膽管支架一年未換**', '**發燒 + RUQ 痛 + 黃疸 + 意識混亂 + 低血壓**（Reynolds pentad）', 'Cholestatic LFT、**膽管擴張**'],
      choices: [{ label: '處置', next: 'tx' }]
    },
    tx: {
      text: '嚴重 ascending cholangitis。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'end_check',
        options: [
          { id: 'bcx', group: '培養', label: '**血液培養**', key: true, reveal: true,
            result: '（之後）**E. coli + Enterococcus faecalis**', clue: '血培養：E. coli + E. faecalis',
            miss: 'Cholangitis 所有人都要抽血液培養。' },
          { id: 'abx', group: '用藥', label: '**廣效抗生素**：pip-tazo（或 cefepime + metronidazole、meropenem）', key: true, reveal: true,
            result: '已給', clue: 'Pip-tazo',
            miss: 'Cholangitis 要用高風險方案的廣效抗生素。' },
          { id: 'ercp', group: '處置', label: '**緊急 ERCP**（更換支架、引流）', key: true, reveal: true,
            result: '舊支架完全阻塞，取出後流出膿性膽汁，放新支架', clue: 'ERCP 引流',
            miss: 'Cholangitis 的根本治療是**引流**；Reynolds pentad 要盡快。' },
          { id: 'fluid', group: '治療', label: '輸液、升壓劑', key: true, reveal: true,
            result: '進行中', clue: '休克處理中',
            miss: '積極支持治療。' },
          { id: 'cro', group: '用藥', label: 'Ceftriaxone + metronidazole', result: '已撤回',
            waste: '那是低風險 cholecystitis 的方案。重症 cholangitis、有支架，要用更廣的方案。' }
        ]
      }
    },
    end_check: {
      text: 'ERCP 後隔天血壓穩定，三天後黃疸改善。依血液培養改為 ampicillin（E. coli 也敏感）。',
      ending: {
        grade: 'good',
        title: 'Severe ascending cholangitis（stent occlusion）',
        pearls: [
          'Charcot triad：發燒、RUQ 痛、黃疸；+ 意識改變、低血壓 = Reynolds pentad',
          '血液培養、廣效抗生素（cefepime + metro、pip-tazo、ertapenem、meropenem）',
          'ERCP 引流；失敗則經皮引流',
          '依培養縮窄'
        ]
      }
    }
  }
});
