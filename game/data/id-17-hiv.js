// ID 17 HIV: prevention (PrEP/PEP), diagnosis, baseline evaluation, ART, special populations.
// Source: Washington Manual Ch 16 (source/Washington ID.txt, lines 3150-3339).

RPG.registerCards('ID17', [
  {
    id: 'id-hiv-path',
    title: 'HIV 致病機轉',
    points: [
      'HIV 經 gp120 結合 **CD4** 與 coreceptor（**CCR5** 或 **CXCR4**）進入 CD4 T cell',
      '**Reverse transcriptase** 把 RNA 轉成 DNA -> **integrase** 嵌入宿主基因體 -> 宿主機制製造病毒蛋白 -> **protease** 切割成熟 -> 出芽感染其他細胞（每一步都是 ART 的標的）',
      '多數受感染細胞被 **CD8** 殺死；但**長壽的潛伏細胞**（memory T cells）持續存在 -> **ART 無法根除**，停藥就反彈',
      '未治療：8-10 年 CD4 逐漸耗竭、細胞免疫受損；**> 90% 進展到 AIDS**（伺機感染、消瘦、病毒相關腫瘤）',
      '**急性感染**：病毒量可達數百萬 copies/mL -> 傳染力最高；像單核球增多症',
      'Reverse transcriptase 錯誤率高、複製量大 -> **單藥或雙藥很快抗藥** -> 需要 3 個有效藥物、2 種以上類別',
      '**HIV-2**（西非）：進展較慢，**對 NNRTI 天然抗藥**',
      '病毒持續抑制 -> **U = U**（undetectable = untransmittable）'
    ],
    note: '致病機轉部分由一般教科書補充；Washington Manual 原文有簡述病毒生命週期。'
  },
  {
    id: 'id-hiv-prev',
    title: 'HIV 預防：PEP 與 PrEP',
    points: [
      '傳染風險：輸血極低（1/140 萬）；**共用針具或針扎 50/10,000**；**肛交接受方 138/10,000** 最高，之後肛交插入方、陰道接受方、陰道插入方；口交低',
      '預防方法：保險套、PEP、PrEP、針具交換計畫',
      '**PEP**：針扎或高風險性暴露後給 **2-3 種 ART，28 天**',
      '**所有性活躍的成人與青少年都要知道 PrEP**；**任何要求 PrEP 的人都應該提供**'
    ],
    table: {
      head: ['PrEP', '內容'],
      rows: [
        ['**適用**', '6 個月內有肛交或陰道性交，且：**HIV 陽性伴侶**、**6 個月內細菌性 STI**、**保險套使用不一致**；注射藥物且有 HIV 陽性注射伴侶或**共用針具**'],
        ['**藥物**', '**FTC/TDF**（第一個核准）；**FTC/TAF**（出生指派為男性者，腎臟與骨骼副作用較少）；**CAB-LA** 每 2 個月注射'],
        ['**開始前**', '**HIV 檢驗陰性**、**沒有急性 HIV 症狀**、**HBV 狀態**（HBV 陽性者停藥可能**猛爆性肝炎**）、**腎功能正常**'],
        ['**追蹤**', '**每 3 個月 HIV 檢驗** + STI 篩檢 + 風險諮詢；**每 6 個月腎功能**']
      ]
    },
    refs: ['CDC PrEP clinical practice guideline 2021', 'AIDS 2014;28:1509（per-act transmission risk）']
  },
  {
    id: 'id-hiv-dx',
    title: 'HIV 篩檢與診斷',
    points: [
      'CDC：**13-64 歲所有人**在醫療場所 **opt-out** 篩檢；高風險**至少每年**（部分每 3-6 個月）',
      '一定要驗：**孕婦**（opt-out）、**活動性 TB**、捐血捐精捐器官者、職業暴露者與來源病人',
      '**急性 retroviral syndrome**（最多 75%）：發燒、喉嚨痛、非特異皮疹、肌痛、頭痛、疲倦，像 EBV/CMV 單核球增多症',
      '很多人在 CD4 < 200 出現伺機感染時才被診斷 -> 靠常規篩檢避免'
    ],
    table: {
      head: ['步驟', '內容'],
      rows: [
        ['1. **第四代 Ag/Ab**', '偵測 **p24 抗原** + HIV-1/2 抗體；p24 在感染後 **4-10 天**可測到，比單純抗體早約 2 週；仍有最多 **7 天 eclipse phase**'],
        ['2. 陽性 -> **HIV-1/HIV-2 抗體分型**', '反射檢測'],
        ['3. 分型**兩者皆陰性** -> **HIV-1 RNA NAAT**', '**陽性 = 急性感染**；急性期病毒量通常數百萬，**< 1,000 copies/mL 要重驗確認**']
      ]
    },
    refs: ['MMWR 2017;66:830（HIV screening recommendations）']
  },
  {
    id: 'id-hiv-labs',
    title: '新診斷 HIV 的初始評估',
    points: [
      '病史：先前伺機感染、病毒合併感染、併發症；**精神與心理病史**（憂鬱、物質使用常見）；家庭與社會支持；對 HIV 的認知',
      '理學：**口腔**（thrush、hairy leukoplakia、aphthous ulcer）、全身淋巴結、皮膚（psoriasis、脂漏性皮膚炎、Kaposi、molluscum、crypto）、肝脾、生殖器、神經與認知'
    ],
    table: {
      head: ['檢驗', '目的'],
      rows: [
        ['CBC、CMP、UA', '肝腎功能、蛋白尿、糖尿'],
        ['**CD4**（正常 600-1,500）與 CD4%', '< 200 需要預防性抗生素'],
        ['**HIV RNA**', '預測進展速度'],
        ['Lipid、**HbA1c**', '代謝症候群、心血管風險；ART 影響'],
        ['**IGRA**', 'TB'],
        ['梅毒；**HAV、HBV（HBsAg、HBsAb、HBcAb）、HCV**', '合併感染'],
        ['**GC/CT NAAT**（依性行為加直腸、咽）', 'STI'],
        ['子宮頸抹片', 'HPV 相關病變'],
        ['**Genotype resistance**（RT、protease；INSTI 失敗加 integrase）', '基礎與治療失敗時'],
        ['**HLA-B*5701**', '要用 **abacavir** 時'],
        ['**CCR5 tropism**', '要用 **maraviroc** 時'],
        ['**G6PD**', '有好發族群背景、要用氧化性藥物（dapsone、primaquine）前']
      ]
    }
  },
  {
    id: 'id-art',
    title: 'Antiretroviral therapy',
    points: [
      '**所有 HIV 感染者都治療，不論 CD4**',
      '**TB、cryptococcal 腦膜炎**：ART 可稍延後以降低 **IRIS**',
      '目標：**最大且持久的病毒抑制**；3 個有效藥、至少 2 類；**INSTI-based 為首選**，很多是**一天一顆**的複方',
      '初始：**2 NRTI + INSTI**（或 NNRTI、boosted PI）；**TAF** 腎骨毒性較 TDF 少，但與**體重增加、血糖**相關（尤其合併 INSTI）',
      '監測：開始或換藥後 **4-6 週** HIV RNA（預期下降 10 倍），**24 週 < 50**；穩定測不到後每 3-6 個月',
      '**Blip**（單次 < 200）不代表失敗；**確認的反彈** -> 評估**順從性、交互作用、抗藥**',
      '**治療失敗**：4-6 週下降不到 1 log、6 個月未測不到、抑制後又測到、CD4 持續下降或臨床惡化 -> **genotype**，至少換 2 個無交叉抗藥的藥；轉介 HIV 專家',
      '**U = U**：病毒抑制後性傳染風險幾乎為零'
    ],
    table: {
      head: ['類別', '重點'],
      rows: [
        ['**NRTI**', '鏈終止；lactic acidosis（新藥少見）'],
        ['**NNRTI**', '皮疹、肝毒性、SJS（nevirapine）；efavirenz **CNS 副作用**；HIV-2 天然抗藥'],
        ['**INSTI**', '耐受性好、病毒量下降快；**體重增加**（DTG、BIC，女性與非洲裔明顯）；elvitegravir 需要 **cobicistat**（交互作用多）；**CAB 長效注射**'],
        ['**PI**', '腸胃不適；**血糖、血脂、脂肪重分布**；需 ritonavir 或 cobicistat boost；**CYP 交互作用多**'],
        ['Entry', 'Enfuvirtide（SC，注射處反應）、**maraviroc（CCR5，要驗 tropism）**、fostemsavir'],
        ['Capsid', '**Lenacapavir** SC 每 26 週']
      ]
    },
    note: '**Boosted PI、cobicistat 交互作用**：rifamycins（TB 改用 rifabutin）、azoles、macrolides、抗癲癇藥、statins（pitavastatin 最安全）、warfarin、長效 benzodiazepines、口服避孕藥、鼻內類固醇（beclomethasone 較安全）、sildenafil；methadone 濃度會下降。',
    refs: ['IAS-USA guidelines 2020', 'CID 2021;73:e3572（HIVMA primary care guidance 2020）']
  },
  {
    id: 'id-art-special',
    title: 'HIV 特殊族群與併發症',
    table: {
      head: ['族群', '重點'],
      rows: [
        ['**懷孕**', '想懷孕前先達到病毒抑制；未感染伴侶可用 PrEP；已抑制且耐受就**維持原處方**；新開始：**FTC/TDF 或 FTC/TAF + dolutegravir**（或 boosted darunavir **bid**）；**產程 IV zidovudine**（晚期穩定測不到可不給）；晚期 **VL > 1,000 -> 剖腹產**；產後繼續 ART；**新生兒 zidovudine 4 週**（母親未抑制 -> zidovudine + nevirapine ± lamivudine）'],
        ['**急性 HIV**', '立即 ART：壓低極高病毒量、減少傳染、可能縮小潛伏庫、保護免疫功能'],
        ['**HBV 合併感染**', '**Tenofovir、emtricitabine、lamivudine** 同時對 HBV 有效；處方要**同時完整涵蓋 HIV 與 HBV**；**停掉這些藥可能造成猛爆性 HBV 再活化**'],
        ['**HCV**', 'DAA 效果與非 HIV 相同；注意與 PI、efavirenz、cobicistat 的交互作用'],
        ['**老化**', '> 50 歲已過半；心血管、糖尿病、骨鬆、認知、衰弱提早；肛門癌、肺癌、HCC 增加']
      ]
    },
    points: [
      'ART 併發症：高血脂（PI，尤其 ritonavir）、胰島素阻抗、**骨鬆**（TDF；高風險用 TAF）、股骨頭壞死、脂肪重分布（舊藥）、lactic acidosis（舊 NRTI）、**INSTI 體重增加**'
    ],
    refs: ['DHHS perinatal guidelines 2020']
  }
]);

RPG.registerCase({
  id: 'id17-prep',
  chapter: 'ID17',
  title: '我想吃 PrEP',
  patient: '26 歲男性 · 軟體工程師',
  summary: '他主動來門診說想開始 PrEP。',
  cards: ['id-hiv-prev', 'id-hiv-dx', 'id-sti-hx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '感染科門診。小許說想開始 PrEP。你取得同意後問性史：男性伴侶，過去 6 個月有 5 位，**保險套不一定用**，**三個月前得過淋病**。',
        '這兩週沒有發燒、喉嚨痛或皮疹。'
      ],
      clue: ['26M；MSM、**保險套使用不一致**、**6 個月內細菌性 STI**', '無急性 HIV 症狀'],
      choices: [{ label: '開始前評估', next: 'base' }]
    },
    base: {
      text: '開 PrEP 之前要確認什麼？',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'hbv',
        options: [
          { id: 'hiv', group: '檢驗', label: '**第四代 HIV Ag/Ab**', key: true, reveal: true,
            result: '**陰性**', clue: 'HIV 陰性',
            miss: '開 PrEP 前**一定要確認 HIV 陰性**，否則等於只用兩種藥治療 HIV，會產生抗藥。' },
          { id: 'acute', group: '病史', label: '**問急性 HIV 症狀**', key: true, reveal: true,
            result: '沒有', clue: '無急性 HIV 症狀',
            miss: 'Eclipse phase 可能驗不到；有急性症狀要先驗 HIV RNA。' },
          { id: 'hbv', group: '檢驗', label: '**HBV 血清（HBsAg、anti-HBs、anti-HBc）**', key: true, reveal: true,
            result: '**HBsAg 陽性**、HBV DNA 2,400', clue: '**HBsAg (+)**',
            miss: 'HBV 狀態決定停藥風險。' },
          { id: 'cr', group: '檢驗', label: '**腎功能**', key: true, reveal: true,
            result: 'eGFR 102', clue: '腎功能正常',
            miss: 'TDF 會影響腎功能，要先有基礎值。' },
          { id: 'sti', group: '檢驗', label: '梅毒、GC/CT（尿、咽、直腸）', result: '全部陰性' }
        ]
      }
    },
    hbv: {
      text: 'HIV 陰性，但他有**慢性 B 型肝炎**。',
      choices: [
        { label: '可以開 **FTC/TDF 或 FTC/TAF**（同時抑制 HBV）；衛教**不可自行停藥**（HBV 可能猛爆性再活化）；轉介肝膽科追蹤；**每 3 個月驗 HIV 與 STI、每 6 個月腎功能**', next: 'end_good' },
        { label: '有 B 肝就不能吃 PrEP', next: 'h_no' },
        { label: '開 CAB-LA，就不用擔心 B 肝', next: 'h_cab' }
      ]
    },
    h_no: {
      text: '主治醫師搖頭。',
      feedback: 'B 肝不是 PrEP 的禁忌。Tenofovir、emtricitabine 本身對 HBV 有效。重點是**不能突然停藥**。',
      choices: [{ label: '重新決定', next: 'hbv' }]
    },
    h_cab: {
      text: '主治醫師搖頭。',
      feedback: 'Cabotegravir **對 HBV 沒有作用**。他的 B 肝仍需要評估與治療；FTC/TDF 或 FTC/TAF 可以同時處理。',
      choices: [{ label: '重新決定', next: 'hbv' }]
    },
    end_good: {
      text: '小許開始 FTC/TAF，每三個月回診篩檢，B 肝病毒量測不到。',
      ending: {
        grade: 'good',
        title: 'PrEP in a patient with chronic HBV',
        pearls: [
          '適應症：HIV 陽性伴侶、6 個月內細菌性 STI、保險套不一致、共用針具；任何要求者都提供',
          '開始前：HIV 陰性、無急性症狀、HBV 狀態、腎功能',
          'FTC/TDF、FTC/TAF、CAB-LA；HBV 陽性停藥可能猛爆性肝炎',
          '每 3 個月 HIV + STI；每 6 個月腎功能'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id17-acute',
  chapter: 'ID17',
  title: '像單核球增多症的發燒',
  patient: '22 歲男性 · 大學生',
  summary: '發燒、喉嚨痛、全身起紅疹一週。三週前有一次沒戴套的性行為。',
  cards: ['id-hiv-path', 'id-hiv-dx', 'id-hiv-labs', 'id-art'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診。阿宏一週來發燒、喉嚨痛、肌肉痠痛、極度疲倦，軀幹出現**不癢的斑丘疹**。三週前和一位剛認識的男性有一次**沒戴保險套的肛交**。',
        '咽部紅、口腔有兩個潰瘍、頸部淋巴結腫大。Monospot 陰性。'
      ],
      clue: ['22M；**三週前高風險暴露**', '發燒、咽炎、皮疹、口腔潰瘍、淋巴結', 'Monospot 陰性'],
      choices: [{ label: '檢驗', next: 'test' }]
    },
    test: {
      text: '你懷疑急性 HIV。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'interp',
        options: [
          { id: 'ag', group: '檢驗', label: '**第四代 HIV Ag/Ab**', key: true, reveal: true,
            result: '**反應性**', clue: '4th gen Ag/Ab **反應性**',
            miss: '第四代檢驗含 p24 抗原，感染後 4-10 天就可能陽性。' },
          { id: 'diff', group: '檢驗', label: '**HIV-1/HIV-2 抗體分型**', key: true, reveal: true,
            result: '**HIV-1、HIV-2 皆陰性**', clue: '抗體分型**陰性**',
            miss: '第四代陽性要反射做抗體分型。' },
          { id: 'rna', group: '檢驗', label: '**HIV-1 RNA**', key: true, reveal: true,
            result: '**4,200,000 copies/mL**', clue: '**HIV RNA 420 萬**',
            miss: '抗體分型陰性要驗 HIV RNA：陽性就是急性感染。' },
          { id: 'sti', group: '檢驗', label: '梅毒、GC/CT', result: '陰性' }
        ]
      }
    },
    interp: {
      text: 'Ag/Ab 反應性、抗體分型陰性、RNA 420 萬。',
      choices: [
        { label: '**急性 HIV-1 感染**（抗體還沒產生）', next: 'art' },
        { label: '偽陽性，抗體分型陰性', next: 'i_fp' }
      ]
    },
    i_fp: {
      text: '主治醫師搖頭。',
      feedback: '急性期抗體還沒出現，但 **p24 與 RNA 已經很高**。分型陰性 + RNA 陽性 = **急性感染**（RNA 通常數百萬；< 1,000 才需要重驗確認）。',
      choices: [{ label: '重新判斷', next: 'interp' }]
    },
    art: {
      text: '什麼時候開始 ART？',
      choices: [
        { label: '**立即開始**（例如 INSTI-based 一天一顆）；同時送 **genotype**、CD4、HBV、HCV；4-6 週追 HIV RNA', next: 'contact' },
        { label: '等 CD4 降到 350 以下再開始', next: 'a_wait' },
        { label: '等 genotype 結果出來再開始', next: 'a_geno' }
      ]
    },
    a_wait: {
      text: '主治醫師搖頭。',
      feedback: '**所有 HIV 感染者都治療，不論 CD4**。急性 HIV 立即治療還能壓低極高的病毒量（傳染力最高的時期）、可能縮小潛伏庫、保護免疫功能。',
      choices: [{ label: '重新決定', next: 'art' }]
    },
    a_geno: {
      text: '主治醫師搖頭。',
      feedback: 'Genotype 要送，但**不必等結果**才開始。INSTI-based 首選方案的抗藥屏障高，結果出來再調整。',
      choices: [{ label: '重新決定', next: 'art' }]
    },
    contact: {
      text: '他很擔心會傳染給別人。',
      choices: [
        { label: '病毒量**持續測不到後，性傳染風險幾乎為零（U = U）**；在那之前使用保險套；**伴侶通知**，伴侶可考慮 PEP 或 PrEP', next: 'end_good' },
        { label: '吃藥第一天就不會傳染了', next: 'c_now' }
      ]
    },
    c_now: {
      text: '主治醫師搖頭。',
      feedback: 'U = U 要在**病毒量已經持續抑制**後才成立。目前病毒量 420 萬，傳染力最高。',
      choices: [{ label: '重新回答', next: 'contact' }]
    },
    end_good: {
      text: '開始 ART 後 4 週病毒量下降 2.5 log，第 16 週測不到。',
      ending: {
        grade: 'good',
        title: 'Acute HIV-1 infection',
        pearls: [
          '急性 retroviral syndrome 像單核球增多症；問暴露史',
          '4th gen Ag/Ab -> 抗體分型 -> 分型陰性則驗 RNA（陽性 = 急性）',
          '所有人都治療，不等 CD4、不等 genotype；INSTI-based 首選',
          'U = U：持續抑制後才成立'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id17-pep',
  chapter: 'ID17',
  title: '被針扎了',
  patient: '25 歲女性 · 內科 PGY',
  summary: '幫病人抽動脈血時，空心針扎到自己的手指。病人有 HIV，最近沒有規則吃藥。',
  cards: ['id-hiv-prev', 'id-hiv-dx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '病房，晚上 10 點。你的 PGY 學妹抽動脈血時，**有血的空心針**刺進左手食指。',
        '來源病人有 HIV，三個月沒有吃 ART，上週 HIV RNA 86,000、有 B 型肝炎。學妹已經用肥皂水沖洗傷口。'
      ],
      clue: ['**空心針扎傷**、有可見血液', '來源：**HIV RNA 86,000**（未治療）、HBV'],
      choices: [{ label: '處置', next: 'pep' }]
    },
    pep: {
      text: '下一步？',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'later',
        options: [
          { id: 'start', group: '用藥', label: '**盡快開始 PEP**（2-3 種 ART，**28 天**），不等檢驗結果', key: true, reveal: true,
            result: '暴露後 1 小時內服下第一劑', clue: 'PEP 已開始（1 h 內）',
            miss: 'PEP 越早越好，不要等來源或自己的檢驗結果。' },
          { id: 'base', group: '檢驗', label: '**學妹的基礎 HIV、HBV（anti-HBs）、HCV 檢驗**', key: true, reveal: true,
            result: 'HIV 陰性；**anti-HBs 120（有保護力）**；HCV 陰性', clue: '基礎 HIV 陰性；HBV 已有免疫',
            miss: '要有基礎值，證明暴露時沒有感染（職業傷害）；同時評估 HBV、HCV 暴露。' },
          { id: 'report', group: '行政', label: '通報職業傷害、職安單位', result: '已通報' },
          { id: 'squeeze', group: '處置', label: '用力擠壓傷口、用漂白水消毒', result: '已撤回',
            waste: '肥皂水清洗即可，擠壓或用刺激性消毒劑沒有證據，反而傷組織。' }
        ]
      }
    },
    later: {
      text: '第二天學妹覺得噁心，想問可不可以吃一週就停。',
      choices: [
        { label: 'PEP 要完成 **28 天**；處理副作用（止吐、評估換藥）；之後依時程追蹤 HIV 檢驗', next: 'end_good' },
        { label: '來源病人只有一位，風險很低，可以停', next: 'l_stop' }
      ]
    },
    l_stop: {
      text: '主治醫師搖頭。',
      feedback: '空心針、有可見血液、來源病毒量高，是**高風險**暴露。PEP 要完成 **28 天**。',
      choices: [{ label: '重新回答', next: 'later' }]
    },
    end_good: {
      text: '學妹完成 28 天 PEP，追蹤 HIV 檢驗都陰性。',
      ending: {
        grade: 'good',
        title: 'Occupational HIV PEP',
        pearls: [
          '針扎 HIV 傳染約 50/10,000；空心針、可見血、高病毒量風險更高',
          'PEP：盡快開始，2-3 種 ART，28 天',
          '基礎 HIV、HBV、HCV；依時程追蹤',
          '來源病人也要評估'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id17-preg',
  chapter: 'ID17',
  title: '產檢驗出 HIV',
  patient: '29 歲女性 · 懷孕 16 週',
  summary: '第一次產檢 HIV 篩檢陽性，她從來不知道。',
  cards: ['id-art-special', 'id-art', 'id-hiv-labs'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '感染科門診。小方懷孕 16 週，產檢 opt-out 篩檢 **HIV 陽性**，確認是 HIV-1。從來沒有用過 ART。',
        'CD4 410、**HIV RNA 52,000**。HBsAg 陰性、Cr 正常。'
      ],
      clue: ['29F；**懷孕 16 週**', '新診斷 HIV-1；**ART-naive**', 'CD4 410、RNA 52,000'],
      choices: [{ label: '治療', next: 'art' }]
    },
    art: {
      text: '開始 ART。',
      choices: [
        { label: '**立即開始**：**FTC/TDF（或 FTC/TAF）+ dolutegravir**；送 genotype；4-6 週追病毒量', next: 'deliver' },
        { label: '懷孕初期藥物風險高，等生完再治療', next: 'a_wait' },
        { label: 'Boosted darunavir 一天一次', next: 'a_drv' }
      ]
    },
    a_wait: {
      text: '主治醫師搖頭。',
      feedback: '**孕期最大程度抑制病毒是預防垂直傳染的關鍵**。立即開始。',
      choices: [{ label: '重新決定', next: 'art' }]
    },
    a_drv: {
      text: '主治醫師搖頭。',
      feedback: 'Boosted darunavir 在懷孕時**濃度偏低**；要用的話是**一天兩次**。首選是 dolutegravir + FTC/TDF 或 FTC/TAF。',
      choices: [{ label: '重新決定', next: 'art' }]
    },
    deliver: {
      text: '36 週時 HIV RNA **測不到**。生產計畫？',
      choices: [
        { label: '可以**自然產**；病毒量持續測不到，**產程 IV zidovudine 不一定需要**；**新生兒 zidovudine 4 週**；**產後繼續 ART**', next: 'end_good' },
        { label: '一律剖腹產', next: 'd_cs' },
        { label: '生完就停 ART', next: 'd_stop' }
      ]
    },
    d_cs: {
      text: '主治醫師搖頭。',
      feedback: '剖腹產是給**晚期 VL > 1,000** 的人。她測不到，可以自然產。',
      choices: [{ label: '重新決定', next: 'deliver' }]
    },
    d_stop: {
      text: '主治醫師搖頭。',
      feedback: '產後要**繼續 ART**，預防疾病進展與傳染。',
      choices: [{ label: '重新決定', next: 'deliver' }]
    },
    end_good: {
      text: '寶寶足月出生，完成 4 週 zidovudine，之後追蹤 HIV 陰性。',
      ending: {
        grade: 'good',
        title: 'HIV in pregnancy',
        pearls: [
          '孕婦 opt-out 篩檢',
          'ART-naive：FTC/TDF 或 FTC/TAF + dolutegravir（boosted DRV 要 bid）',
          '晚期 VL > 1,000 -> 剖腹產；測不到可不給產程 zidovudine',
          '新生兒 zidovudine 4 週；產後繼續 ART'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id17-rebound',
  chapter: 'ID17',
  title: '測不到的病毒又回來了',
  patient: '47 歲男性 · HIV 治療 6 年',
  summary: 'ART 控制了六年，這次病毒量突然變成 9,800。',
  cards: ['id-art', 'id-art-special', 'id-tb-drugs'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '感染科門診。蘇先生 HIV 六年，用 **darunavir/cobicistat/FTC/TAF**，一直測不到。這次 **HIV RNA 9,800**，兩週後重驗 **11,200**。',
        '他說每天都有吃藥。兩個月前因為 IGRA 陽性，在另一家醫院開始 **rifampin 4 個月**治療潛伏結核。他也有**慢性 B 型肝炎**。'
      ],
      clue: ['47M；**DRV/c/FTC/TAF**，6 年測不到', '**確認的病毒反彈**（9,800 -> 11,200）', '兩個月前開始 **rifampin**（LTBI）', '**HBV 合併感染**'],
      choices: [{ label: '評估', next: 'why' }]
    },
    why: {
      text: '確認的病毒反彈要評估什麼？',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'fix',
        options: [
          { id: 'adh', group: '評估', label: '**順從性**（藥盒、藥局領藥紀錄）', key: true, reveal: true,
            result: '領藥規則，藥盒每天都有空', clue: '順從性良好',
            miss: '確認的反彈要先評估順從性。' },
          { id: 'ddi', group: '評估', label: '**藥物交互作用**（所有其他醫院的藥）', key: true, reveal: true,
            result: '**Rifampin 強力誘導 CYP3A**，大幅降低 darunavir 與 cobicistat 濃度', clue: '**Rifampin -> boosted PI 濃度大降**',
            miss: '一定要看所有藥：boosted PI 與 rifamycins 交互作用很大。' },
          { id: 'geno', group: '檢驗', label: '**Genotype 抗藥檢測**', key: true, reveal: true,
            result: '沒有主要抗藥突變', clue: '無抗藥突變',
            miss: '確認的病毒失敗要做 genotype。' }
        ]
      }
    },
    fix: {
      text: '問題是 rifampin 和 boosted PI 的交互作用，還沒有產生抗藥。他有 HBV。',
      choices: [
        { label: '和開 LTBI 的醫師討論，改用不與 ART 衝突的 LTBI 方案或調整 ART（例如 rifamycin 改 **rifabutin**、或換成可配合的 ART）；**新處方一定保留 tenofovir + FTC 涵蓋 HBV**；4-6 週後追病毒量', next: 'end_good' },
        { label: '換成 dolutegravir + lamivudine 雙藥，停掉 TAF', next: 'f_hbv' },
        { label: '病毒量不高，繼續觀察', next: 'f_wait' }
      ]
    },
    f_hbv: {
      text: '主治醫師搖頭。',
      feedback: '他有 HBV，**停掉 tenofovir** 可能造成 **HBV 猛爆性再活化**；而且沒處理 rifampin 交互作用，問題還在。處方要同時完整涵蓋 HIV 與 HBV。',
      choices: [{ label: '重新決定', next: 'fix' }]
    },
    f_wait: {
      text: '主治醫師搖頭。',
      feedback: '確認的反彈不處理，接下來就會**產生抗藥**。立刻處理交互作用。',
      choices: [{ label: '重新決定', next: 'fix' }]
    },
    end_good: {
      text: '改用 rifabutin 並調整劑量後，六週後病毒量再次測不到；B 肝維持抑制。',
      ending: {
        grade: 'good',
        title: 'Virologic rebound from a drug interaction',
        pearls: [
          'Blip（單次 < 200）不是失敗；確認的反彈 -> 順從性、交互作用、genotype',
          'Boosted PI、cobicistat 與 rifamycins 交互作用大；HIV + TB 常改用 rifabutin',
          'HBV 合併感染：處方保留 tenofovir、FTC/3TC；停藥可能猛爆性 HBV',
          '失敗時至少換 2 個無交叉抗藥的藥；轉介 HIV 專家'
        ]
      }
    }
  }
});
