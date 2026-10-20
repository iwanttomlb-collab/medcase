// Ch 363 Urticaria, Angioedema, and Allergic Rhinitis. Source notes: notes/363-urticaria-rhinitis.md

RPG.registerCards('363', [
  {
    id: 'urt-path',
    title: 'Urticaria 與 angioedema 致病機轉',
    points: [
      '兩條路徑：**mast cell（histamine）** vs **bradykinin**',
      'Allergen 交聯 **IgE-FcεRI** -> degranulation：**histamine**、tryptase、chymase；新合成 **LTC4/D4/E4、PGD2、PAF**；TNF、IL-4/5/13 -> venule 通透性上升 -> wheal',
      '非 IgE 活化：**C3a/C5a**、**MRGPRX2**（ciprofloxacin、rocuronium）、TSLP、IL-33',
      '**Chronic spontaneous urticaria 最多 45% autoimmune**：**anti-IgE** 或 **anti-FcεRI alpha** 自體抗體直接活化 mast cell；與 anti-TPO 相關',
      '**Cold urticaria** 是 IgE/mast cell 角色的最佳證據（ice cube -> degranulation、histamine 上升）',
      'Urticarial vasculitis、serum sickness：**immune complex**',
      '**Bradykinin 路徑**：C1INH 抑制 **factor XIIa、kallikrein、C1r/C1s**；缺乏 -> bradykinin 累積；C1 過度活化消耗 **C4、C2**',
      '**ACEi**：ACE 負責降解 bradykinin -> 降解延遲 -> angioedema（沒有 histamine，所以 H1 無效）'
    ],
    refs: ['Harrison’s Ch 363（Pathogenesis）']
  },
  {
    id: 'rhinitis-path',
    title: 'Allergic rhinitis 致病機轉',
    points: [
      '**Sensitization**：DC 呈現 allergen -> **IL-4 驅動 TH2** -> IL-4、IL-13 使 B cell **class switch 成 IgE** -> IgE 結合 mast cell、basophil 的 FcεRI',
      'Epithelial **alarmins（IL-25、TSLP、IL-33）** -> **ILC2** 產生大量 IL-5、IL-13',
      '5q23-31 基因群（IL-4、IL-13、IL-5、IL-3、IL-9、GM-CSF）、HLA 與 IgE 反應相關',
      '再暴露：花粉在鼻黏液中被酵素消化釋出 allergen -> 上皮內與 perivenular mast cells 活化',
      '**Immediate phase**：histamine、PGD2、leukotrienes -> 噴嚏、癢、水樣分泌、鼻塞',
      '**Late phase（6-8 h）**：TH2、**eosinophils**、basophils 浸潤 -> 持續鼻塞',
      '季節中黏膜腫脹充血 -> 對花粉與 irritants 反應增強',
      'Dust mite、cockroach allergen 是糞便中的 **cysteine proteases**',
      'Immunotherapy：T cell cytokine 改變、allergen-specific **IgG4** 增加'
    ],
    refs: ['Harrison’s Ch 363（Pathogenesis）']
  },
  {
    id: 'urt-basics',
    title: 'Urticaria vs angioedema',
    table: {
      head: ['', 'Urticaria', 'Angioedema'],
      rows: [
        ['深度', 'Superficial dermis', 'Deep dermis、subcutaneous'],
        ['症狀', '**劇癢**、wheal、中央蒼白', '**痛多於癢**、腫'],
        ['時間', '**< 24 h**（inducible < 2 h）', '數小時到數天'],
        ['疤', '不留（除非 vasculitis）', '不留']
      ]
    },
    points: [
      '**Acute < 6 週**：food、drug、infection；**chronic > 6 週**：多 spontaneous；最多 45% autoimmune（anti-IgE、anti-FcεRI）',
      'Chronic urticaria：**不驗或只驗 CBC、ESR/CRP**；絕大多數無異常',
      'Lesion **> 36 h、留疤、痛不癢 -> biopsy**（urticarial vasculitis）',
      'Flushing + 搓揉會起 wheal 的色素丘疹 -> mastocytosis'
    ]
  },
  {
    id: 'urt-tx',
    title: 'Chronic urticaria 治療',
    points: [
      '**2nd-gen H1**（loratadine、fexofenadine、cetirizine），可加到 **4 倍劑量**',
      '可加 H2 antagonist、montelukast',
      '仍無效 -> **omalizumab**',
      '嚴重 refractory CSU -> **cyclosporine**；remibrutinib（BTK）研究中',
      '**Topical GC 無效**；**systemic GC 一般避免**（例外：pressure urticaria、vasculitic urticaria、嚴重失能）',
      'Urticarial vasculitis：HCQ、dapsone、colchicine'
    ]
  },
  {
    id: 'inducible',
    title: 'Inducible urticarias',
    points: [
      '**Dermatographism**：2-5%；劃過出現線狀 wheal',
      '**Cholinergic**：**1-2 mm 小 wheals + 大紅斑**；熱水澡、運動、發燒',
      '**Cold**：**ice cube test**；**冷水游泳可休克**；cryoglobulins 最多 5%',
      'Pressure：肩帶、腰帶；常伴 CSU',
      '**Food-dependent exercise-induced anaphylaxis**：omega-5 gliadin（小麥）',
      'Aquagenic（polycythemia vera）、solar、vibratory；NLRP3（familial cold）'
    ]
  },
  {
    id: 'hae',
    title: 'Bradykinin angioedema（HAE、ACEi）',
    points: [
      '**無 urticaria、無癢、常侵犯 GI（colic）、> 24 h、H1 無效**；laryngeal edema 可致命',
      '**HAE**：SERPING1 AD；童年/青春期 + 家族史；**C4 慢性低**',
      'Type 1（85%）**C1INH 量低**；type 2 **功能低**；type 3 C1INH 正常（如 factor XII 突變）',
      '**Acquired**：無家族史、**C1q 低**；lymphoproliferative、autoimmune -> 治療原病',
      '**ACEi**：0.2-0.7%；可在用藥多年後；Black、移植、女性、吸菸、年長',
      'HAE 急性：**C1INH、icatibant、ecallantide**（FFP 備用）',
      'HAE 預防：**C1INH、lanadelumab、berotralstat**；attenuated androgens'
    ]
  },
  {
    id: 'rhinitis',
    title: 'Allergic rhinitis',
    points: [
      '診斷：症狀與暴露時間相關 + **specific IgE**（skin prick 或 serum）',
      '鑑別：**NARES**（eosinophils、anosmia、無致敏）、vasomotor、**rhinitis medicamentosa**、藥物（ACEi、beta blocker、PDE5i）、懷孕',
      '**Intranasal GC 最有效**（含鼻塞與眼症狀）',
      'Oral H1 對鼻塞差；topical decongestant **7-14 天 -> rebound**',
      'Montelukast 較差且有 neuropsychiatric precaution',
      '**SCIT 3-5 年**；2-3% systemic reaction -> **留觀 30 分**；**beta blocker 謹慎**；SLIT（dust mite、grass、ragweed）'
    ]
  }
]);

RPG.registerCase({
  id: 'urt-01',
  chapter: '363',
  title: '肚子痛到開刀的家族',
  patient: '19 歲女性 · 大學生',
  summary: '從國中開始反覆劇烈腹痛、臉腫，抗組織胺和類固醇都沒用。',
  cards: ['urt-path', 'hae', 'urt-basics'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。小慧這次是嘴唇和右手腫起來，腫得很硬、不癢，已經兩天了。',
        '「國中開始就這樣，有時候是肚子絞痛到吐，去年還差點被切闌尾。打抗組織胺、類固醇都沒用，三四天自己會消。」',
        '她媽媽補充：「她外婆也這樣，舅舅年輕時喉嚨腫起來過世了。」'
      ],
      clue: ['19F；反覆 **angioedema**（唇、手）', '**不癢、無 urticaria**；持續 **> 24 h**', '反覆 **abdominal colic**', '**H1、GC 無效**', '**家族史**（外婆、舅舅喉嚨腫死亡）'],
      choices: [{ label: '先評估', next: 'exam' }]
    },
    exam: {
      text: '你先做什麼？',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'airway', group: '呼吸道', label: '呼吸道評估（聲音、stridor、舌、口咽）', key: true, reveal: true,
            result: '聲音正常、無 stridor；口咽無腫', clue: '**目前呼吸道安全**',
            miss: 'Angioedema 第一件事永遠是呼吸道，HAE 的 laryngeal edema 會致命。' },
          { id: 'skin', group: '皮膚', label: '皮膚', key: true, reveal: true,
            result: '唇與右手非凹陷性腫脹；**無 wheals**、無紅斑', clue: '**無 urticaria**',
            miss: '有沒有 urticaria 是區分 histamine 與 bradykinin 機轉的關鍵。' },
          { id: 'abd', group: '腹部', label: '腹部', result: '軟、無壓痛（今天無腹痛）' },
          { id: 'vitals', group: '一般', label: '生命徵象', result: '正常' },
          { id: 'thyroid', group: '頸部', label: '甲狀腺', result: '正常' }
        ]
      }
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'c4', group: '補體', label: 'C4', key: true, reveal: true,
            result: '**低**', clue: '**C4 低**',
            miss: 'C4 是 HAE 最好的篩檢，HAE 病人 C4 慢性偏低、發作時更低。' },
          { id: 'c1inh', group: '補體', label: 'C1INH antigen 與 function', key: true, reveal: true,
            result: 'C1INH **antigen 低**、function 低', clue: '**C1INH 量與功能皆低**（type 1）',
            miss: 'C1INH 量與功能決定是 type 1 還是 type 2。' },
          { id: 'c1q', group: '補體', label: 'C1q', result: '**正常**', clue: 'C1q 正常（不像 acquired）' },
          { id: 'tryptase', group: '其他', label: 'Serum tryptase', result: '正常' },
          { id: 'ige', group: '其他', label: 'Food allergy IgE panel', result: '陰性', waste: '沒有 urticaria、跟食物無關、H1 無效，food panel 幫助不大。' },
          { id: 'ct', group: '影像', label: 'Abdominal CT（下次腹痛時）', result: '（發作時曾做：小腸壁水腫、少量腹水）', clue: '腹痛發作時：腸壁水腫' }
        ]
      }
    },
    dx: {
      text: 'HAE type 1。現在唇和手腫兩天。急性處置與長期計畫？',
      choices: [
        { label: '急性：**C1INH concentrate 或 icatibant**；長期：**預防治療**（lanadelumab、berotralstat 或 C1INH），隨身帶急救藥；**篩檢家人**', next: 'end_good' },
        { label: 'Epinephrine + 高劑量 antihistamine + methylprednisolone', next: 'tx_hist' },
        { label: '等它自己消，不用特別處理', next: 'tx_wait' }
      ]
    },
    tx_hist: {
      text: '主治醫師搖頭。',
      feedback: 'HAE 是 bradykinin 介導，不是 histamine。Antihistamine 和 GC 都沒效（她自己已經試過了）。要用 C1INH、icatibant 或 ecallantide。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    tx_wait: {
      text: '主治醫師搖頭。',
      feedback: '她舅舅就是死於 laryngeal edema。急性發作應該治療，而且她發作頻繁、影響生活，需要長期預防。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: 'Icatibant 皮下注射後六小時腫脹明顯消退。開始 lanadelumab 預防後，一年只發作一次。她的表弟也被驗出 HAE。',
      ending: {
        grade: 'good',
        title: 'Hereditary angioedema type 1',
        pearls: [
          '無 urticaria、無癢、GI colic、> 24 h、H1/GC 無效 + 家族史',
          'C4 低；type 1 C1INH 量低、type 2 功能低；C1q 正常（vs acquired）',
          '急性：C1INH、icatibant、ecallantide',
          '預防：C1INH、lanadelumab、berotralstat'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'urt-02',
  chapter: '363',
  title: '舌頭腫起來的老司機',
  patient: '62 歲男性 · 公車司機',
  summary: '降血壓藥吃了四年都沒事，今天早上舌頭腫到說不清楚話。',
  cards: ['urt-path', 'hae', 'urt-basics'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。羅先生早上起床舌頭和下唇腫起來，說話含糊。',
        '高血壓吃 **lisinopril** 四年，「從來沒事，怎麼會突然這樣？」',
        '沒有吃新的東西或新藥，沒有被蟲咬，身上沒有起疹子。'
      ],
      clue: ['62M；**舌頭、下唇 angioedema**；構音不清', '**Lisinopril 4 年**', '無 urticaria、無新暴露'],
      choices: [{ label: '立即評估', next: 'airway' }]
    },
    airway: {
      text: '你最先要做什麼？',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'dx',
        options: [
          { id: 'airway', group: '呼吸道', label: '呼吸道評估；通知麻醉/ENT 準備困難插管（fiberoptic）', key: true, reveal: true,
            result: '舌頭明顯腫大、口底腫；目前 SpO2 97%、無 stridor', clue: '**Tongue + floor of mouth swelling**',
            miss: '舌頭腫是高風險呼吸道，第一件事就是評估並準備困難呼吸道處置。' },
          { id: 'stop', group: '藥物', label: '**停用 ACE inhibitor**', key: true, reveal: true,
            result: '已停', clue: 'ACEi 停用',
            miss: 'ACEi angioedema 最重要的是停藥，而且終身不再用 ACEi。' },
          { id: 'skin', group: '皮膚', label: '全身皮膚', result: '無 wheals' },
          { id: 'c4', group: '檢驗', label: 'C4', result: '正常', clue: 'C4 正常（不像 HAE）' },
          { id: 'tryptase', group: '檢驗', label: 'Serum tryptase', result: '正常' },
          { id: 'ige', group: '檢驗', label: 'Food IgE panel', result: '陰性', waste: '沒有新食物暴露、沒有 urticaria，對 ACEi angioedema 沒幫助。' }
        ]
      }
    },
    dx: {
      text: 'ACE inhibitor-associated angioedema。後續？',
      choices: [
        { label: '密切觀察呼吸道（必要時插管）；**終身避免 ACEi**；改用其他降壓藥並在病歷標註', next: 'end_good' },
        { label: '用了四年都沒事，不可能是 ACEi，繼續吃', next: 'dx_keep' },
        { label: '換成另一種 ACEi（enalapril）', next: 'dx_switch' }
      ]
    },
    dx_keep: {
      text: '主治醫師語氣嚴肅。',
      feedback: 'ACEi angioedema 可在用藥多年後才發生（bradykinin 降解延遲）。繼續吃可能下次會致命。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    dx_switch: {
      text: '主治醫師搖頭。',
      feedback: '這是整個 ACEi 類別的機轉（bradykinin），換另一種 ACEi 一樣危險。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '經過 36 小時觀察，腫脹逐漸消退，不需要插管。羅先生改用 amlodipine，病歷與健保卡都註記「ACEi angioedema」。',
      ending: {
        grade: 'good',
        title: 'ACE inhibitor-associated angioedema',
        pearls: [
          'ACEi 使用者 0.2-0.7%；可在用藥多年後發生',
          '危險因子：Black、organ transplant、女性、吸菸、年長',
          'Bradykinin 介導：無 urticaria、H1/GC 效果有限',
          '先顧呼吸道；終身停用 ACEi；icatibant、C1INH 的證據矛盾'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'urt-03',
  chapter: '363',
  title: '三個月的蕁麻疹',
  patient: '34 歲女性 · 行銷企劃',
  summary: '幾乎每天身上冒出癢癢的膨疹，已經三個月了。她帶了一大疊過敏原檢查想做。',
  cards: ['urt-path', 'urt-basics', 'urt-tx', 'inducible'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '林小姐把手機照片給你看：手臂、背上一塊塊紅色膨疹，中間白、邊緣紅。',
        '「三個月了，幾乎每天都有，晚上癢到睡不著。每一塊大概半天就消，然後別處又長。」',
        '「我想做全套過敏原檢查、找出是什麼食物害的。」'
      ],
      clue: ['34F；**wheals 幾乎每天 x 3 個月**（chronic）', '每塊 **< 24 h**、游走', '劇癢'],
      choices: [{ label: '問診', next: 'hx' }]
    },
    hx: {
      text: '沒有固定的食物或藥物關聯，沒有吃 NSAID。洗熱水澡或運動不特別誘發。皮膚不會留疤或瘀青，不會痛。偶爾眼皮腫。沒有發燒或關節痛。媽媽有甲狀腺低下。',
      clue: ['無明確誘因；非 cholinergic', '不留疤、不痛；偶有眼瞼 angioedema', '無全身症狀'],
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你檢查她的皮膚。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'skin', group: '皮膚', label: '皮膚病灶', key: true, reveal: true,
            result: '軀幹數個 wheals，界線清楚；無瘀青、無色素沉著', clue: 'Typical wheals；無 purpura',
            miss: '要親眼確認病灶型態。' },
          { id: 'derm', group: '皮膚', label: 'Dermatographism test（壓舌板劃前臂）', key: true, reveal: true,
            result: '陰性', clue: 'Dermatographism (-)',
            miss: 'Chronic urticaria 要評估 inducible 成分，劃皮試驗很簡單。' },
          { id: 'darier', group: '皮膚', label: '有無色素丘疹、搓揉起 wheal（Darier sign）', result: '無', clue: '無 mastocytosis 線索' },
          { id: 'thyroid', group: '頸部', label: '甲狀腺', result: '輕度腫大、無結節' },
          { id: 'joint', group: '其他', label: '關節、淋巴結', result: '正常' }
        ]
      }
    },
    labs: {
      text: '她遞上清單：「全套食物、吸入性過敏原 IgE、ANA、腫瘤標記、糞便寄生蟲⋯⋯」你要開哪些？',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'tx',
        options: [
          { id: 'cbc', group: '基本', label: 'CBC with differential', key: true, reveal: true,
            result: '正常，無 eosinophilia', clue: 'CBC 正常',
            miss: 'Chronic urticaria 的有限檢查包括 CBC（看 eosinophilia）。' },
          { id: 'crp', group: '基本', label: 'ESR 或 CRP', key: true, reveal: true,
            result: '正常', clue: 'ESR/CRP 正常',
            miss: 'ESR 或 CRP 是 chronic urticaria 的有限檢查之一。' },
          { id: 'tpo', group: '其他', label: 'TSH、anti-TPO', result: 'TSH 正常；**anti-TPO 陽性**', clue: 'Anti-TPO (+)（autoimmune 關聯）' },
          { id: 'food', group: '過敏', label: '全套 food IgE panel', result: '多項低度陽性',
            waste: '沒有病史線索時，chronic urticaria 做大量 IgE panel 只會得到無臨床意義的陽性，讓人亂忌口。' },
          { id: 'ana', group: '其他', label: 'ANA', result: '1:80', waste: '沒有全身症狀，ANA 無助於 chronic spontaneous urticaria。' },
          { id: 'tm', group: '其他', label: 'Tumor markers', result: '正常', waste: 'Chronic urticaria 不需要找腫瘤。' },
          { id: 'bx', group: '其他', label: 'Skin biopsy', result: '（未執行）', waste: '病灶 < 24 h、不痛、不留疤，不需要切片。' }
        ]
      }
    },
    tx: {
      text: 'Chronic spontaneous urticaria（可能 autoimmune 成分）。治療？',
      choices: [
        { label: '**2nd-gen H1（cetirizine）**，不夠可加到 **4 倍劑量**；仍無效 -> **omalizumab**', next: 'step' },
        { label: 'Prednisone 30 mg 長期控制', next: 'tx_gc' },
        { label: 'Topical steroid 擦全身', next: 'tx_topical' }
      ]
    },
    tx_gc: {
      text: '主治醫師搖頭。',
      feedback: 'Chronic spontaneous urticaria 應避免長期 systemic GC（毒性）。從 H1 升階。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_topical: {
      text: '主治醫師搖頭。',
      feedback: 'Topical glucocorticoids 對 urticaria 沒有效。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    step: {
      text: 'Cetirizine 加到每天 4 顆兩個月，還是每天起疹，睡不好。',
      choices: [
        { label: '加 **omalizumab**', next: 'end_good' },
        { label: '加 hydroxyzine 睡前', next: 'step_hydrox' }
      ]
    },
    step_hydrox: {
      text: '主治醫師說：',
      feedback: 'Hydroxyzine、doxepin 有一定效果，但比 omalizumab 差而且鎮靜。H1 4 倍劑量無效時，下一步是 omalizumab。',
      choices: [{ label: '重新決定', next: 'step' }]
    },
    end_good: {
      text: 'Omalizumab 第二針之後，膨疹幾乎消失，林小姐終於可以睡過夜。她也不再忌口了。',
      ending: {
        grade: 'good',
        title: 'Chronic spontaneous urticaria',
        pearls: [
          'Chronic > 6 週；多 spontaneous，最多 45% autoimmune（anti-TPO 相關）',
          '檢查：不驗或只驗 CBC、ESR/CRP；避免無意義的 IgE panel',
          '2nd-gen H1（最多 4x）-> omalizumab -> cyclosporine',
          'Topical GC 無效；systemic GC 一般避免'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'urt-04',
  chapter: '363',
  title: '噴鼻劑停不下來',
  patient: '28 歲男性 · 軟體測試員',
  summary: '每年春天打噴嚏流鼻水，這次自己買了噴鼻劑噴了一個月，現在不噴就塞住。',
  cards: ['rhinitis-path', 'rhinitis'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '張先生每年三到五月打噴嚏、清水鼻涕、眼睛癢。',
        '「今年特別嚴重，我在藥局買了 **oxymetazoline 噴鼻劑**，噴了一個多月。現在不噴就完全塞住，噴了也只能撐兩三個小時。」',
        '他因為上台報告會緊張，最近心臟科開了 **propranolol**。他問：「有沒有可以根治的方法？聽說可以打減敏針。」'
      ],
      clue: ['28M；**每年 3-5 月**噴嚏、水樣鼻漏、眼癢（seasonal）', '**Oxymetazoline > 1 個月**，rebound 鼻塞', '服用 **propranolol**'],
      choices: [{ label: '安排檢查', next: 'workup' }]
    },
    workup: {
      text: '要做哪些？',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'nose', group: '檢查', label: '鼻腔檢查', key: true, reveal: true,
            result: '鼻黏膜 **pale、boggy**，下鼻甲腫大；無息肉、無異物', clue: 'Pale boggy mucosa；無 polyps',
            miss: '要看鼻腔，排除息肉、結構異常。' },
          { id: 'spt', group: '過敏', label: 'Skin prick test（樹、草、塵蟎、貓狗、蟑螂、黴菌）', key: true, reveal: true,
            result: '**樹花粉強陽性**；其他陰性', clue: '**Tree pollen sensitization**（與 3-5 月相符）',
            miss: '診斷 allergic rhinitis 需要證明 specific IgE，而且決定 immunotherapy 的過敏原。' },
          { id: 'ige', group: '過敏', label: 'Total IgE', result: '中度上升', waste: 'Total IgE 不具特異性，重點是 specific IgE。' },
          { id: 'ct', group: '影像', label: 'Sinus CT', result: '黏膜輕度增厚', waste: '沒有 chronic sinusitis 或結構問題的線索，不需要 CT。' }
        ]
      }
    },
    tx: {
      text: 'Seasonal allergic rhinitis（tree pollen）+ rhinitis medicamentosa。治療？',
      choices: [
        { label: '**停 oxymetazoline**；**intranasal glucocorticoid** 為主（可加 intranasal antihistamine）；減敏前先與心臟科討論把 **propranolol 換成非 beta blocker**', next: 'end_good' },
        { label: '繼續 oxymetazoline，加口服 antihistamine', next: 'tx_oxy' },
        { label: '馬上開始皮下減敏針', next: 'tx_scit' }
      ]
    },
    tx_oxy: {
      text: '主治醫師搖頭。',
      feedback: 'Topical alpha-adrenergic decongestant 用 7-14 天以上就會造成 rhinitis medicamentosa。要停掉。口服 antihistamine 對鼻塞效果也差，intranasal GC 才是最有效的藥。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_scit: {
      text: '主治醫師搖頭。',
      feedback: 'SCIT 有 2-3% systemic reaction，beta blocker 使用者曾發生嚴重 anaphylaxis（也讓 epinephrine 效果變差）。要先處理 propranolol；而且先試最大藥物治療。注射後要留觀至少 30 分鐘。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '停 oxymetazoline 一週後鼻塞慢慢改善。Intranasal steroid 控制住這一季的症狀。隔年換掉 propranolol 後開始 SCIT，計畫打 3-5 年。',
      ending: {
        grade: 'good',
        title: 'Allergic rhinitis with rhinitis medicamentosa',
        pearls: [
          'Seasonal：症狀與授粉期一致 + specific IgE（skin prick）',
          'Intranasal GC 最有效；topical decongestant > 7-14 天 -> rebound',
          'SCIT 3-5 年；注射後留觀 30 分鐘',
          'Beta blocker 使用者做 immunotherapy 要謹慎'
        ]
      }
    }
  }
});
