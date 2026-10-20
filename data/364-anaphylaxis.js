// Ch 364 Anaphylaxis. Source notes: notes/364-anaphylaxis.md

RPG.registerCards('364', [
  {
    id: 'ana-path',
    title: 'Anaphylaxis 致病機轉',
    points: [
      '多數為 **IgE 交聯 FcεRI**（mast cells、basophils）；需先致敏，**重複暴露**是危險因子（carboplatin、CF 反覆 beta-lactam）；藥物可作 **hapten**',
      '**Histamine**：flushing、urticaria、低血壓、心搏過速',
      '**Cysteinyl LTs、PGD2**：支氣管收縮、血管通透；PGD2 吸引 eosinophils、basophils',
      '**PAF**：血中濃度與嚴重度相關；PAF acetylhydrolase 低者較嚴重',
      '**Tryptase、chymase** 活化 complement（**C3a、C5a**）、凝血、**kallikrein-kinin**；效應相加或協同',
      '死因：喉頭/會厭水腫機械阻塞、難治支氣管痙攣（肺 hyperinflation）、血管內容積流失',
      '**Non-IgE**（首次暴露即可）：**MRGPRX2**（NMBD、quinolones、icatibant）、**complement**（Cremophor paclitaxel、OSCS 污染 heparin）、外源 histamine（scombroid）',
      '**Alpha-gal**：Lone Star tick -> anti-alpha-gal IgE -> 紅肉後 3-6 h、cetuximab（Fab 上有 alpha-gal）'
    ],
    refs: ['Harrison’s Ch 364（Pathogenesis）']
  },
  {
    id: 'ana-tx',
    title: 'Anaphylaxis 急救',
    points: [
      '**IM epinephrine 0.3-0.5 mg（1 mg/mL）**，大腿；嚴重者 **5-20 分鐘重複**',
      '**20 分鐘內未給 epinephrine = 預後不良**',
      '頑固低血壓：IV fluids、vasopressors；進行性缺氧 -> intubation/tracheostomy',
      '**Beta blocker 減弱 epinephrine 反應** -> 高風險者換降壓藥',
      'Antihistamine、GC、bronchodilator 是**輔助**，穩定後才給',
      '**10-20% biphasic**（緩解 >= 1 h 後復發）',
      'Skin > 90%；asthma 病人下呼吸道嚴重、死亡率高'
    ]
  },
  {
    id: 'tryptase',
    title: 'Tryptase 與鑑別',
    points: [
      'Histamine 半衰期極短（< 1 h）',
      '**Tryptase peak 60-90 min，約 5 h 內仍可測**；穩定後測 **baseline**',
      '**20% + 2 rule**：急性值 > baseline x 1.2 + 2 ng/mL',
      '**HAT**（TPSAB1 多一個 allele，~6%）baseline 偏高',
      '**Hymenoptera anaphylaxis + 低血壓 -> 驗 baseline tryptase**（systemic mastocytosis 常見首發）',
      '鑑別：mastocytosis、pheo（metanephrines）、carcinoid（5-HIAA）、HAE（C4）、**capillary leak**（epinephrine 無效）、**scombroid（tryptase 不高）**'
    ]
  },
  {
    id: 'ana-special',
    title: '特殊 anaphylaxis',
    points: [
      '**Alpha-gal syndrome**：**Lone Star tick** 叮咬後；**紅肉後 3-6 h** delayed；**cetuximab** anaphylaxis',
      '**Non-IgE（MRGPRX2）**：NMBDs、quinolones、icatibant；**首次暴露即可發生**',
      'Cremophor paclitaxel（complement）；nab-paclitaxel 少很多',
      '**Scombroid**：mahi-mahi、mackerel、tuna 保存不當 -> histamine；tryptase 不高',
      '**VIT**：Hymenoptera anaphylaxis + IgE 證實 -> **3-5 年**；嚴重或 mastocytosis 可終身',
      '**LEAP**：高風險嬰兒 4-11 個月早期吃花生 -> 預防 >= 80%'
    ]
  }
]);

RPG.registerCase({
  id: 'ana-01',
  chapter: '364',
  title: '被虎頭蜂叮的園丁',
  patient: '57 歲男性 · 園藝工人',
  summary: '修剪樹籬時被蜂叮了一下，五分鐘後昏倒在地。',
  cards: ['ana-path', 'ana-tx', 'tryptase', 'ana-special'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '救護車送來急診。古先生 20 分鐘前修樹時右手被蜂叮，五分鐘後全身發紅、頭暈，接著倒地。',
        'BP **72/40**，HR 118，SpO2 93%，全身潮紅，嘴唇稍腫，聽得到輕微 wheezing。',
        '藥袋裡有 **propranolol**（高血壓）。到院前還沒有人給藥。'
      ],
      clue: ['57M；**Hymenoptera sting** 後 5 分鐘', '**BP 72/40**、flushing、wheezing、唇腫', '**Propranolol**', '已 20 分鐘未給 epinephrine'],
      choices: [{ label: '立即處置', next: 'acute' }]
    },
    acute: {
      text: '第一步？',
      choices: [
        { label: '**IM epinephrine 0.5 mg（1 mg/mL）大腿外側**；平躺抬腿、O2、大口徑 IV 輸液', next: 'acute2' },
        { label: 'IV diphenhydramine + methylprednisolone', next: 'acute_ah' },
        { label: '先抽 tryptase 再說', next: 'acute_lab' }
      ]
    },
    acute_ah: {
      text: '主治醫師厲聲說：',
      feedback: 'Antihistamine 和 GC 是輔助，不能救低血壓與呼吸道。首選是 IM epinephrine，而且已經延遲 20 分鐘了。',
      choices: [{ label: '重新決定', next: 'acute' }]
    },
    acute_lab: {
      text: '主治醫師搖頭。',
      feedback: '先救命。Tryptase 在 60-90 分鐘才到高峰、5 小時內都還測得到，給完 epinephrine 再抽。',
      choices: [{ label: '重新決定', next: 'acute' }]
    },
    acute2: {
      text: '給了 epinephrine 和 2 L 輸液，十分鐘後 BP 仍只有 80/45。',
      clue: '第一劑 epinephrine 反應差',
      choices: [
        { label: '**重複 IM epinephrine**；持續輸液；仍無效考慮 epinephrine infusion 或其他升壓劑（beta blocker 可能讓反應變差）', next: 'stable' },
        { label: '一劑沒效代表不是 anaphylaxis', next: 'acute2_wrong' }
      ]
    },
    acute2_wrong: {
      text: '主治醫師搖頭。',
      feedback: '嚴重者 5-20 分鐘重複 epinephrine。他吃 propranolol，beta blocker 會減弱 epinephrine 的效果。',
      choices: [{ label: '重新決定', next: 'acute2' }]
    },
    stable: {
      text: '第二劑後 BP 回到 108/66，wheezing 改善。接下來要做什麼？',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'followup',
        options: [
          { id: 'tryp', group: '檢驗', label: '急性 serum tryptase（發作後 1-2 小時）', key: true, reveal: true,
            result: '**38** ng/mL', clue: '急性 tryptase 38',
            miss: 'Tryptase 在 5 小時內抽，可以佐證 mast cell activation。' },
          { id: 'obs', group: '處置', label: '留院觀察（biphasic）', key: true, reveal: true,
            result: '觀察 24 小時，無復發', clue: '觀察中無 biphasic',
            miss: '10-20% 會 biphasic，嚴重病例要留觀。' },
          { id: 'adj', group: '處置', label: 'Antihistamine、GC 輔助', result: '已給（穩定後）' },
          { id: 'ecg', group: '檢驗', label: 'ECG、troponin', result: '竇性心搏過速；troponin 正常' },
          { id: 'cath', group: '檢驗', label: 'Coronary angiography', result: '（未執行）', waste: '沒有 ACS 證據。' }
        ]
      }
    },
    followup: {
      text: '出院前與兩週後門診，你要安排什麼？',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'plan',
        options: [
          { id: 'base', group: '檢驗', label: '**Baseline tryptase**（穩定後）', key: true, reveal: true,
            result: '**26** ng/mL（偏高）', clue: '**Baseline tryptase 26**（偏高）',
            miss: 'Hymenoptera anaphylaxis 合併低血壓，一定要驗 baseline tryptase 篩 systemic mastocytosis。' },
          { id: 'venom', group: '檢驗', label: 'Venom skin test 或 specific IgE', key: true, reveal: true,
            result: '**Vespid（黃蜂/虎頭蜂）venom IgE 陽性**', clue: 'Vespid venom IgE (+)',
            miss: 'VIT 之前要用 skin test 或 serum IgE 證實。' },
          { id: 'kit', group: '檢驗', label: 'KIT D816V（peripheral blood）', result: '**陽性**', clue: 'KIT D816V (+)' },
          { id: 'epi', group: '處置', label: 'Epinephrine autoinjector 處方與衛教', key: true, reveal: true,
            result: '已教導', clue: 'Epinephrine autoinjector',
            miss: '所有 anaphylaxis 病人都要隨身攜帶 epinephrine 並學會使用。' },
          { id: 'food', group: '檢驗', label: 'Food IgE panel', result: '陰性', waste: '誘因很明確，與食物無關。' }
        ]
      }
    },
    plan: {
      text: 'Vespid venom anaphylaxis，baseline tryptase 偏高、KIT D816V 陽性（疑 systemic mastocytosis）。長期計畫？',
      choices: [
        { label: '**Venom immunotherapy**（mastocytosis 可能需**終身**）；**propranolol 換成其他降壓藥**；epinephrine 隨身；轉介血液科評估 mastocytosis（骨髓）', next: 'end_good' },
        { label: '避免蜂就好，不需要 VIT', next: 'plan_avoid' },
        { label: 'VIT 一年就停', next: 'plan_short' }
      ]
    },
    plan_avoid: {
      text: '主治醫師搖頭。',
      feedback: '他是園藝工人，職業暴露很難避免。Hymenoptera anaphylaxis + IgE 證實就應開始 VIT。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    plan_short: {
      text: '主治醫師搖頭。',
      feedback: 'VIT 一般 3-5 年；嚴重心血管 anaphylaxis 或 mastocytosis 病人可能需要終身。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    end_good: {
      text: '骨髓切片證實 indolent systemic mastocytosis。古先生開始 VIT，降壓藥換成 amlodipine。兩年後他又被叮了一次，只有局部腫。',
      ending: {
        grade: 'good',
        title: 'Hymenoptera anaphylaxis with systemic mastocytosis',
        pearls: [
          'IM epinephrine 首選，5-20 分鐘重複；beta blocker 減弱反應',
          'Tryptase：急性 5 h 內 + 穩定後 baseline（20% + 2）',
          'Sting anaphylaxis + 低血壓 -> 篩 systemic mastocytosis',
          'VIT 3-5 年；mastocytosis 可能終身'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ana-02',
  chapter: '364',
  title: '半夜的牛排',
  patient: '48 歲男性 · 外商工程師',
  summary: '晚餐吃牛排，半夜兩點全身蕁麻疹、喘、昏倒。這已經是第三次了。',
  cards: ['ana-path', 'ana-special', 'tryptase'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '過敏科門診。賴先生去年在美國北卡羅來納州工作，常去健行。',
        '「這半年發生三次：半夜睡到一半全身起疹子、很癢、喘，有一次還昏倒送急診。都是晚上吃了牛排或漢堡之後。可是我吃牛肉吃了四十幾年都沒事。」',
        '他說健行時常被很小的蜱咬，「腿上一堆紅點」。'
      ],
      clue: ['48M；**半夜** anaphylaxis x 3', '**晚餐吃牛肉 3-6 小時後**', '曾在北卡州，**多次 tick bites**'],
      choices: [{ label: '安排檢查', next: 'labs' }]
    },
    labs: {
      text: '要驗什麼？',
      checklist: {
        prompt: '勾選你要的項目',
        submit: '送出',
        next: 'dx',
        options: [
          { id: 'ag', group: '過敏', label: '**Alpha-gal specific IgE**', key: true, reveal: true,
            result: '**陽性（高）**', clue: '**Anti-alpha-gal IgE (+)**',
            miss: '紅肉後延遲數小時的 anaphylaxis + tick 史，要驗 alpha-gal IgE。' },
          { id: 'beef', group: '過敏', label: 'Beef、pork specific IgE', result: '陽性', clue: 'Beef、pork IgE (+)' },
          { id: 'tryp', group: '檢驗', label: 'Baseline tryptase', result: '正常', clue: 'Baseline tryptase 正常' },
          { id: 'skin', group: '過敏', label: '傳統 beef extract skin prick test', result: '弱陽性' },
          { id: 'fish', group: '過敏', label: 'Fish IgE', result: '陰性', waste: '病史跟魚無關。' },
          { id: 'c4', group: '檢驗', label: 'C4', result: '正常' }
        ]
      }
    },
    dx: {
      text: 'Alpha-gal syndrome。處置與衛教？',
      choices: [
        { label: '**避免哺乳類肉**（牛、豬、羊）；**避免再被蜱咬**；epinephrine autoinjector；病歷註記：**未來若需 cetuximab 要特別注意**', next: 'end_good' },
        { label: '應該是 scombroid，下次不要吃不新鮮的魚', next: 'dx_scomb' },
        { label: '這不是過敏，發作時間差太久', next: 'dx_delay' }
      ]
    },
    dx_scomb: {
      text: '主治醫師搖頭。',
      feedback: 'Scombroid 是吃了保存不當的魚（mahi-mahi、tuna、mackerel）之後很快出現。他是紅肉後延遲 3-6 小時，alpha-gal IgE 陽性。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    dx_delay: {
      text: '主治醫師搖頭。',
      feedback: 'Anaphylaxis 通常在數秒到數分鐘內發生，但 alpha-gal syndrome 是重要例外：吃哺乳類肉 3-6 小時後才發作。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '賴先生改吃雞肉和海鮮，健行時穿長褲、用防蚊液。一年內沒有再發作。',
      ending: {
        grade: 'good',
        title: 'Alpha-gal syndrome',
        pearls: [
          'Lone Star tick 叮咬 -> anti-alpha-gal IgE',
          '哺乳類肉後 3-6 小時 delayed anaphylaxis（常在半夜）',
          'Cetuximab anaphylaxis 與 alpha-gal 相關',
          '避免紅肉與再被叮咬；攜帶 epinephrine'
        ]
      }
    }
  }
});
