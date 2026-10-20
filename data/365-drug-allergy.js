// Ch 365 Drug Allergy and Desensitization. Source notes: notes/365-drug-allergy.md

RPG.registerCards('365', [
  {
    id: 'drug-path',
    title: 'Drug hypersensitivity 致病機轉',
    points: [
      '**Type I IgE-dependent**：需多次暴露（carboplatin 常 >= 6 次）；藥物或代謝物作 hapten',
      '**Type I IgE-independent**（首次暴露）：**complement** 活化、**COX-1 inhibition**（NSAIDs、AERD）、**MRGPRX2**（quinolones、vancomycin、icatibant、THIQ 麻醉藥）',
      '**Cytokine release reaction**：T、NK、monocyte 活化 -> **IL-6**、TNF、IL-1beta -> 發燒、寒顫、疼痛',
      '**Type II**：抗體介導細胞毒（cytopenias）；**type III**：immune complex（serum sickness、vasculitis）',
      '**Type IV**：drug-specific T cells；SCARs 與 **HLA** 相關（abacavir、allopurinol、anticonvulsants）',
      'DRESS：IL-5、eotaxin -> eosinophils；SJS/TEN：**granulysin、granzyme B、perforin** -> keratinocyte death；AGEP：**CXCL8** -> neutrophils',
      '**Desensitization**：低劑量抗原啟動 mast cell **inhibitory pathways**；逐步加量招募 **phosphatases（SHIP-1）** 到 IgE receptor，阻斷訊號 -> 暫時耐受、ST 暫時轉陰',
      'Hereditary alpha-tryptasemia（TPSAB1 重複）會影響反應嚴重度'
    ],
    refs: ['Harrison’s Ch 365（Pathogenesis）']
  },
  {
    id: 'drug-pheno',
    title: 'Drug allergy phenotypes',
    table: {
      head: ['Phenotype', 'Biomarker', 'Desensitization'],
      rows: [
        ['**Type I**（IgE / non-IgE）', '**Tryptase**', '**可**'],
        ['**Cytokine release**（fever、chills、背痛）', '**IL-6**', '**可**'],
        ['**Mixed**', 'Tryptase + IL-6', '**可**'],
        ['Type IV benign（MPE 無全身症狀）', '', '**可**'],
        ['**SCARs**（DRESS、SJS/TEN、AGEP）', '', '**禁止**'],
        ['Type II（cytopenias）、III（serum sickness、vasculitis）', '', '**禁止**']
      ]
    },
    note: 'Immediate：1-6 h 內；delayed：> 6 h。Tryptase > 11.4 或 > baseline x 1.6（30 min-4 h）'
  },
  {
    id: 'dd',
    title: 'Drug desensitization',
    points: [
      '**暫時性**耐受；**每次療程都要重做**；中斷 >= 2 個半衰期要重做',
      '**3-bag 12-step**：1/100、1/10、原液；**每 15 分鐘加倍**；5.7 h',
      '嚴重反應或共病 -> **4-bag 16-step**（從 1/1000）',
      '**Steroid premedication 不能預防 anaphylaxis**；omalizumab 可輔助',
      'BTR 10-30%，多輕微；99% 可完成；無死亡報告',
      '風險：懷孕、心肺疾病、**beta blocker、ACEi**、先前嚴重反應',
      '**禁忌：SCARs、type II/III、Kounis、Takotsubo**'
    ]
  },
  {
    id: 'drug-specific',
    title: '特定藥物過敏',
    points: [
      '**Carboplatin**：**>= 6 次**暴露後 IgE；**ST 陽性 > 85%**；ST 陽性再暴露 -> anaphylaxis -> 需 DD',
      '**Oxaliplatin**：phenotype switching（type I -> CRR/mixed）；**OIIT 禁止再 DD**',
      '**Taxanes**：Cremophor/polysorbate 80；**首次或第二次**；premed 降到 1%',
      'mAbs：chimeric 較多；**cetuximab = alpha-gal**',
      '**AERD**：COX-1 全部不耐、**COX-2 可耐**；aspirin DD + **每日 aspirin** 維持',
      '**10-20% 自稱 penicillin allergy**；低風險 -> **單劑 oral challenge** delabel；ST 陰性者未報告 anaphylaxis',
      'HLA genotyping：abacavir、**allopurinol**、anticonvulsants'
    ]
  }
]);

RPG.registerCase({
  id: 'drg-01',
  chapter: '365',
  title: '第八次化療',
  patient: '59 歲女性 · 卵巢癌復發',
  summary: 'Carboplatin 打到第八次時突然臉紅、喘、血壓掉。腫瘤科問：還能繼續打嗎？',
  cards: ['drug-path', 'drug-pheno', 'dd', 'drug-specific'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '腫瘤科會診。周女士卵巢癌兩年前用 carboplatin + paclitaxel 六次後緩解。這次 CA-125 上升、腹腔復發，重新開始 carboplatin。',
        '這是她**人生第八次** carboplatin：打了十分鐘後手掌癢、全身潮紅、胸悶喘、**BP 78/40**、SpO2 89%，暈過去。給了 IM epinephrine、輸液後恢復。',
        '腫瘤科：「carboplatin 對她效果很好，換二線藥效果差很多。還能打嗎？」'
      ],
      clue: ['59F；ovarian cancer；**第 8 次 carboplatin**', '輸注 10 分鐘：**pruritus、flushing、dyspnea、hypotension、desaturation**', '需 epinephrine', 'Carboplatin 是最佳治療'],
      choices: [{ label: '評估', next: 'labs' }]
    },
    labs: {
      text: '要做哪些評估？',
      checklist: {
        prompt: '勾選你要的項目',
        submit: '送出',
        next: 'pheno',
        options: [
          { id: 'tryp', group: '檢驗', label: '反應後 1 小時 tryptase', key: true, reveal: true,
            result: '**52** ng/mL（正常 < 11.4）', clue: '**Acute tryptase 52**',
            miss: 'Tryptase 在 30 min-4 h 內抽，可確立 type I/mixed 反應。' },
          { id: 'base', group: '檢驗', label: 'Baseline tryptase（數週後）', result: '6.1 ng/mL', clue: 'Baseline tryptase 6.1' },
          { id: 'il6', group: '檢驗', label: 'IL-6', result: '正常', clue: 'IL-6 正常（非 CRR）' },
          { id: 'st', group: '過敏', label: 'Carboplatin skin test（2-6 週後）', key: true, reveal: true,
            result: '**陽性**', clue: '**Carboplatin ST (+)**',
            miss: 'Carboplatin skin test 陽性率 > 85%，ST 陽性代表再暴露幾乎一定 anaphylaxis。' },
          { id: 'ecg', group: '心臟', label: 'ECG、troponin', result: '正常', clue: '無 Kounis/Takotsubo' },
          { id: 'patch', group: '過敏', label: 'Patch test', result: '陰性', waste: 'Patch test 用於 delayed type IV，這是 immediate type I。' }
        ]
      }
    },
    pheno: {
      text: 'Type I（IgE-mediated）carboplatin 過敏，grade 3，ST 陽性、tryptase 52。處置？',
      choices: [
        { label: '**Desensitization**：嚴重初始反應 -> **4-bag 16-step**（或 3-bag 12-step）；依症狀 premedication；準備 epinephrine', next: 'dd' },
        { label: 'Premedication（steroid + antihistamine）後照常輸注', next: 'pheno_premed' },
        { label: '永遠不能再打 carboplatin，換二線', next: 'pheno_avoid' }
      ]
    },
    pheno_premed: {
      text: '主治醫師搖頭。',
      feedback: 'Steroids 不能預防 anaphylaxis。ST 陽性病人照常再暴露幾乎都會 anaphylaxis（研究中 7 位 ST 陽性再暴露者全部發生）。',
      choices: [{ label: '重新決定', next: 'pheno' }]
    },
    pheno_avoid: {
      text: '主治醫師說：',
      feedback: '如果 carboplatin 是最佳治療，desensitization 可以安全再使用，而且 DD 病人的存活不劣於非過敏者。不用放棄 first-line。',
      choices: [{ label: '重新決定', next: 'pheno' }]
    },
    dd: {
      text: '第一次 desensitization 進行到 step 11，她出現臉潮紅、手癢。',
      clue: 'DD 中 **breakthrough reaction**（輕微）',
      choices: [
        { label: '暫停輸注、依症狀處理（antihistamine；需要時 epinephrine），緩解後**從該步驟繼續完成**', next: 'next_cycle' },
        { label: '立刻終止，宣告 desensitization 失敗', next: 'dd_stop' }
      ]
    },
    dd_stop: {
      text: '主治醫師搖頭。',
      feedback: 'BTR 在 10-30% 的 protocol 會出現，多半輕微、類似初始反應。依症狀處理後 99% 都能完成。',
      choices: [{ label: '重新決定', next: 'dd' }]
    },
    next_cycle: {
      text: '順利完成。三週後下一次化療，護理師問：「上次已經減敏成功了，這次可以照一般速度打吧？」',
      choices: [
        { label: '**不行**：DD 是暫時的，**每次療程都要重新 desensitize**', next: 'end_good' },
        { label: '可以，已經耐受了', next: 'end_bad' }
      ]
    },
    end_good: {
      text: '周女士完成六次 desensitization 下的 carboplatin，只有一次輕微潮紅。CA-125 回到正常。',
      ending: {
        grade: 'good',
        title: 'Carboplatin hypersensitivity with desensitization',
        pearls: [
          'Carboplatin IgE 過敏常在 >= 6 次後；ST 陽性 > 85%',
          'Tryptase 30 min-4 h 抽；type I vs CRR（IL-6）',
          'Steroids 不防 anaphylaxis；ST 陽性需 DD',
          'DD 暫時性：每次療程都要重做；BTR 多輕微可完成'
        ]
      }
    },
    end_bad: {
      text: '標準速度輸注五分鐘後，周女士再次休克，送 ICU。',
      ending: {
        grade: 'bad',
        title: '以為減敏是永久的',
        pearls: [
          'Desensitization 只產生暫時耐受，不會持久',
          '每次療程、或中斷 >= 2 個半衰期，都要重新 desensitize'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'drg-02',
  chapter: '365',
  title: '懷孕與梅毒',
  patient: '26 歲女性 · 懷孕 18 週',
  summary: '產檢發現梅毒，但她說小時候打盤尼西林差點死掉。',
  cards: ['drug-path', 'dd', 'drug-specific'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '產科會診。阮小姐懷孕 18 週，RPR 與 TPPA 陽性，診斷 latent syphilis。',
        '「我十歲打盤尼西林，幾分鐘後喉嚨腫起來、全身起疹、昏倒，媽媽說差點死掉。」',
        '產科醫師：「懷孕梅毒只有 penicillin 能有效保護胎兒。」'
      ],
      clue: ['26F；懷孕 18 週；**syphilis**', '童年 **penicillin anaphylaxis**（數分鐘、喉腫、昏倒）', 'Penicillin 是唯一有效治療'],
      choices: [{ label: '評估過敏', next: 'eval' }]
    },
    eval: {
      text: '要怎麼評估？',
      checklist: {
        prompt: '勾選你要的項目',
        submit: '送出',
        next: 'plan',
        options: [
          { id: 'hx', group: '病史', label: '詳細反應病史（時間、症狀、處置）', key: true, reveal: true,
            result: '數分鐘內喉腫、urticaria、昏倒；**高風險 type I**', clue: '**High-risk** history',
            miss: '病史決定風險分層：高風險不能直接 challenge。' },
          { id: 'st', group: '過敏', label: 'Penicillin skin test', key: true, reveal: true,
            result: '**陽性**', clue: '**Penicillin ST (+)**',
            miss: 'Penicillin ST 決定是否仍 IgE 致敏；陰性者未報告過 anaphylaxis。' },
          { id: 'sige', group: '過敏', label: 'Serum penicillin-specific IgE', result: '陰性', clue: 'Serum IgE 陰性（敏感度低）' },
          { id: 'challenge', group: '過敏', label: '直接單劑 amoxicillin oral challenge', result: '（未執行）', waste: '單劑 oral challenge 只適用於低風險病史。她有 anaphylaxis 史且 ST 陽性。' }
        ]
      }
    },
    plan: {
      text: '高風險病史 + ST 陽性 + 懷孕梅毒需要 penicillin。處置？',
      choices: [
        { label: '**Penicillin desensitization**（監測環境、準備 epinephrine），完成後給 penicillin 治療', next: 'end_good' },
        { label: 'Serum IgE 陰性，所以直接打 benzathine penicillin', next: 'plan_ige' },
        { label: '改用其他抗生素', next: 'plan_alt' }
      ]
    },
    plan_ige: {
      text: '主治醫師搖頭。',
      feedback: 'Serum specific IgE 敏感度低，陰性不能排除。她 ST 陽性，再暴露 anaphylaxis 風險很高。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    plan_alt: {
      text: '產科醫師搖頭。',
      feedback: '懷孕梅毒需要 penicillin 才能可靠預防先天性梅毒。Penicillin desensitization 正是為這種病人發展出來的（懷孕梅毒、endocarditis）。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    end_good: {
      text: '在產房監測下完成口服 penicillin desensitization，接著給予 benzathine penicillin。過程中只有手臂輕微癢。寶寶出生時沒有先天性梅毒。',
      ending: {
        grade: 'good',
        title: 'Penicillin desensitization in pregnancy',
        pearls: [
          '高風險病史 + ST 陽性 -> desensitization，不是 challenge',
          'Serum penicillin IgE 敏感度低',
          '懷孕梅毒、endocarditis 是 penicillin DD 經典適應症',
          '低風險 penicillin 標籤 -> 單劑 oral challenge delabel'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'drg-03',
  chapter: '365',
  title: '退燒藥後的皮疹',
  patient: '42 歲男性 · 痛風',
  summary: '開始 allopurinol 第五週，發燒、臉腫、全身紅疹，他問能不能「減敏」繼續吃。',
  cards: ['drug-path', 'drug-pheno', 'dd'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '黃先生痛風反覆發作，五週前開始 **allopurinol**。',
        '一週來發燒 39 度、**臉腫**、全身紅疹、頸部淋巴結腫。',
        '他上網查到「藥物減敏」：「我痛風很痛，可不可以減敏後繼續吃 allopurinol？」'
      ],
      clue: ['42M；**allopurinol** 第 5 週', 'Fever、**facial edema**、diffuse rash、LAP'],
      choices: [{ label: '檢查', next: 'labs' }]
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '勾選你要的項目',
        submit: '送出',
        next: 'dx',
        options: [
          { id: 'cbc', group: '血液', label: 'CBC with differential', key: true, reveal: true,
            result: 'Eosinophil **2,400/uL**；**atypical lymphocytes**', clue: '**Eosinophilia + atypical lymphocytes**',
            miss: 'DRESS 的關鍵是 eosinophilia 與 atypical lymphocytosis。' },
          { id: 'lft', group: '器官', label: 'LFT、Cr', key: true, reveal: true,
            result: 'ALT **480**；Cr 1.8', clue: '**Hepatitis + AKI**（內臟侵犯）',
            miss: '要評估內臟侵犯（肝、腎）。' },
          { id: 'skin', group: '皮膚', label: '皮膚與黏膜檢查', result: '瀰漫 morbilliform rash；**無黏膜侵蝕**、無水泡', clue: '無黏膜侵犯（不像 SJS/TEN）' },
          { id: 'hla', group: '基因', label: 'HLA-B*58:01', result: '**陽性**', clue: 'HLA-B*58:01 (+)' },
          { id: 'st', group: '過敏', label: 'Allopurinol skin prick test', result: '（未執行）', waste: 'SCARs 不做 skin prick 診斷；這是 T-cell 介導的延遲反應。' }
        ]
      }
    },
    dx: {
      text: 'Allopurinol-induced **DRESS**（2-8 週延遲、fever、facial edema、eosinophilia、atypical lymphocytes、肝腎侵犯）。他問能不能減敏？',
      choices: [
        { label: '**不行**：SCARs 是 desensitization 的**禁忌**，微量都可能致命；**永久避免 allopurinol**，病歷標註；痛風改用其他降尿酸藥', next: 'end_good' },
        { label: '可以，用多天多劑的 delayed protocol', next: 'dx_dd' }
      ]
    },
    dx_dd: {
      text: '主治醫師語氣嚴肅。',
      feedback: 'Delayed protocol 只適用於輕微、無全身症狀的 type IV（例如單純 maculopapular rash）。DRESS、SJS/TEN、AGEP 這些 SCARs 是絕對禁忌。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '停藥並給予系統性治療後，黃先生的皮疹與肝腎功能在數週內恢復。你建議他的一等親在用 allopurinol 前也先驗 HLA-B*58:01。',
      ending: {
        grade: 'good',
        title: 'Allopurinol DRESS',
        pearls: [
          'DRESS：2-8 週延遲；fever、facial edema、LAP、eosinophilia、atypical lymphocytes、內臟侵犯',
          'SJS/TEN 4-28 天；AGEP 24-48 小時',
          'SCARs 禁止 desensitization；永久避免',
          'HLA genotyping：allopurinol、abacavir、anticonvulsants'
        ]
      }
    }
  }
});
