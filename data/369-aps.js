// Ch 369 Antiphospholipid Syndrome. Source notes: notes/369-aps.md

RPG.registerCards('369', [
  {
    id: 'aps-path',
    title: 'APS 致病機轉',
    points: [
      '主要抗原：**beta2-glycoprotein I**（5 個 domains；**anti-domain I IgG** 血栓風險較高）與 prothrombin',
      '起始：**endothelial injury**（感染、oxidative stress、手術、外傷）+ HLA 遺傳背景 -> endothelial apoptosis -> autoantigen 呈現',
      'aPL 結合受損內皮 -> **prothrombotic + proinflammatory**：monocyte、platelet 活化，adhesion molecules、cytokines',
      '**Complement 活化**、neutrophil 活化、**NETs** -> thrombus 形成',
      '**Type I IFN** 活化、type I/III IFN 失衡 -> 血栓與產科併發症',
      'Beta2GPI 的抗血栓功能依賴 **domain V**',
      '一般人 1-5% 有 aPL（隨年齡增加），只有少數發病 -> 需要「second hit」',
      '**LA** 在體外延長凝血時間，但在體內是**促血栓**的'
    ],
    refs: ['Harrison’s Ch 369（Pathogenesis）']
  },
  {
    id: 'aps-lab',
    title: 'aPL 檢驗',
    points: [
      '**aCL**、**anti-beta2GPI** IgG/IgM：ELISA；中效價 40-79、高效價 >= 80 units',
      '**Lupus anticoagulant**：aPTT、dRVVT screening -> **mixing study（不矯正）** -> confirmation',
      '**接受抗凝治療時 LA 解讀要謹慎**',
      '需 **間隔 >= 12 週兩次陽性**（persistent）',
      '高風險 profile：**IgG**、**double/triple positive**、中高效價、persistent',
      'Classical aPL 陰性但高度懷疑：anti-phosphatidylserine/prothrombin'
    ],
    note: '何時驗：不明原因血栓、< 55 歲 stroke、pregnancy morbidity，尤其合併 livedo reticularis 或 thrombocytopenia'
  },
  {
    id: 'aps-criteria',
    title: '2023 ACR/EULAR APS criteria',
    points: ['需 **clinical >= 3 分** 且 **laboratory >= 3 分**；有其他更可能解釋者不計分'],
    table: {
      head: ['Domain', '分數'],
      rows: [
        ['VTE：有 / 無 high-risk VTE profile', '1 / 3'],
        ['Arterial：有 / 無 high-risk CVD profile', '2 / 4'],
        ['Microvascular：suspected / established', '2 / 5'],
        ['PEC 或 PI with severe features (< 34w)', '3（兩者皆有 4）'],
        ['Valve thickening / vegetation', '2 / 4'],
        ['Thrombocytopenia 20-130 x 10^9/L', '2'],
        ['LA：單次 / **persistent**', '1 / 5'],
        ['aCL/anti-beta2GPI：IgM / 中效價 IgG', '1 / 4'],
        ['高效價 IgG aCL **或** anti-beta2GPI / **兩者皆有**', '5 / 7']
      ]
    }
  },
  {
    id: 'aps-anticoag',
    title: 'APS 抗凝',
    points: [
      '第一次血栓後：**VKA (warfarin) 終身**',
      'Unprovoked venous：**INR 2.0-3.0**',
      'Arterial：INR **3.0-4.0**，或 2.0-3.0 + **LDA 75-100 mg**',
      '**DOAC 增加 arterial events**，尤其 **triple positive** 或曾 arterial thrombosis',
      'Primary prophylaxis：high-risk aPL profile 但無事件（含 SLE）-> **LDA**'
    ]
  },
  {
    id: 'aps-preg',
    title: 'APS 與懷孕',
    table: {
      head: ['情境', '處置'],
      rows: [
        ['**Obstetric APS**', 'LDA + **prophylactic** LMWH'],
        ['**Thrombotic APS**', 'LDA + **therapeutic** LMWH'],
        ['標準治療下仍反覆併發症', 'LMWH 調到 therapeutic，或第一孕期加 HCQ 400 mg/day 或 low-dose prednisolone'],
        ['產後、非懷孕且曾 obstetric APS', 'LDA 可降低之後血栓風險']
      ]
    },
    note: 'Warfarin 有致畸性；aPL 陽性避免 estrogen 避孕藥'
  },
  {
    id: 'caps',
    title: 'Catastrophic APS (CAPS)',
    points: [
      'Definite 需四項：**>= 3 器官**、**< 1 週**、至少一器官 **small-vessel thrombosis** 病理、**aPL 陽性**',
      '常見 TMA：MAHA + severe thrombocytopenia',
      '鑑別：**TTP、HUS、DIC、HIT**',
      '常見誘因：**infection**、手術、停抗凝',
      '治療：**GC + heparin + plasma exchange 或 IVIG** + 處理誘因',
      'Refractory：**rituximab** 或 **eculizumab**'
    ]
  }
]);

RPG.registerCase({
  id: 'aps-01',
  chapter: '369',
  title: '左腳腫起來的設計師',
  patient: '29 歲女性 · 平面設計師',
  summary: '沒有長途飛行、沒有手術，左小腿卻突然腫痛。',
  cards: ['aps-path', 'aps-lab', 'aps-criteria', 'aps-anticoag'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診會診。吳小姐三天前開始左小腿腫痛，走路時更痛。',
        '「我沒有出國、沒有開刀，也沒有吃避孕藥。怎麼會這樣？」'
      ],
      clue: '29F；左小腿腫痛 3 天',
      choices: [{ label: '詳細問診', next: 'hx_hub' }]
    },
    hx_hub: {
      text: '你想了解她的背景。',
      choices: [
        { label: '問血栓危險因子（久坐、外傷、荷爾蒙、癌症）', next: 'hx_risk', once: true },
        { label: '問懷孕史', next: 'hx_ob', once: true },
        { label: '問皮膚、關節、口腔等自體免疫症狀', next: 'hx_ai', once: true },
        { label: '開始理學檢查', next: 'exam', pin: true }
      ]
    },
    hx_risk: {
      text: '沒有長途旅行、沒有外傷、沒有住院、不抽菸、沒用荷爾蒙。家族沒有人有血栓。體重正常，最近沒有感覺特別累或變瘦。',
      clue: '**無明顯 VTE 誘發因子**（unprovoked）',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_ob: {
      text: '去年懷孕 8 週時自然流產一次，之後還沒再懷孕。',
      clue: '一次 < 10 週流產',
      feedback: '單次早期流產很常見，本身不具特異性。2023 criteria 要 >= 3 次連續 < 10 週或 early fetal death 才給 1 分。',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_ai: {
      text: '沒有關節痛、沒有口腔潰瘍、沒有光敏感。她提到：「冬天腿上會出現紫色網狀的花紋，一直以為是血液循環不好。」',
      clue: '冬天下肢**紫色網狀花紋**',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    exam: {
      text: '你掀開被單。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'vitals', group: '一般', label: '生命徵象', key: true, reveal: true,
            result: 'BP 122/76，HR 92，RR 16，SpO2 98%，BT 36.9 度', clue: 'SpO2 98%，無呼吸窘迫',
            miss: '懷疑 DVT 要量生命徵象，看有沒有 PE 的跡象。' },
          { id: 'leg', group: '四肢', label: '雙下肢比較（周徑、壓痛、水腫）', key: true, reveal: true,
            result: '左小腿周徑比右側大 **3.5 cm**，pitting edema，沿深靜脈壓痛', clue: '左小腿腫脹 3.5 cm + 深靜脈壓痛',
            miss: 'DVT 的理學檢查重點是兩腳比較。' },
          { id: 'skin', group: '四肢', label: '皮膚', key: true, reveal: true,
            result: '雙側大腿與小腿 **livedo reticularis**', clue: '**Livedo reticularis**',
            miss: '她提過腿上的紫色花紋，要親眼看。Livedo 是 APS 的重要線索。' },
          { id: 'joint', group: '四肢', label: '關節', result: '無腫脹壓痛' },
          { id: 'heart', group: '胸腹', label: '心臟聽診', result: 'Regular，無 murmur' },
          { id: 'lung', group: '胸腹', label: '肺部聽診', result: '清晰' },
          { id: 'abd', group: '胸腹', label: '腹部觸診', result: '軟，無腫塊' },
          { id: 'oral', group: '頭頸', label: '口腔', result: '無潰瘍' },
          { id: 'breast', group: '胸腹', label: '乳房觸診', result: '無腫塊',
            waste: '年輕、無症狀，沒有理由懷疑 occult malignancy。' },
          { id: 'neuro', group: '頭頸', label: '神經學檢查', result: '無 focal deficit' }
        ]
      }
    },
    labs: {
      text: '要開哪些檢查？',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'results',
        options: [
          { id: 'duplex', group: '影像', label: '左下肢 venous duplex', key: true, reveal: true,
            result: '左 **popliteal 至 femoral vein DVT**', clue: '**Left popliteal-femoral DVT**',
            miss: 'DVT 要用 duplex 確診。' },
          { id: 'ctpa', group: '影像', label: 'CT pulmonary angiography', result: '無 PE' },
          { id: 'pet', group: '影像', label: 'PET-CT 找腫瘤', result: '無異常攝取',
            waste: '沒有任何癌症線索，不需要 PET-CT。' },
          { id: 'cbc', group: '血液', label: 'CBC', key: true, reveal: true,
            result: 'Hb 13.1；WBC 6,200；PLT **98,000**/uL', clue: '**PLT 98k**',
            miss: '開始抗凝前一定要知道血小板。' },
          { id: 'coag', group: '血液', label: 'PT、aPTT', key: true, reveal: true,
            result: 'PT 正常；**aPTT 延長**（48 秒）', clue: '**aPTT 延長**（未用抗凝）',
            miss: '抗凝前的 baseline coagulation 要驗。' },
          { id: 'dd', group: '血液', label: 'D-dimer', result: '上升',
            waste: '已經要做 duplex，D-dimer 不會改變處置。' },
          { id: 'la', group: '抗體', label: 'Lupus anticoagulant（**抗凝前**採血）', key: true, reveal: true,
            result: '**陽性**（mixing study 不矯正）', clue: '**LA (+)**',
            miss: '年輕人 unprovoked DVT + aPTT 延長 + livedo，要驗 LA。而且最好在抗凝前採血，開始抗凝後 LA 就很難解讀。' },
          { id: 'acl', group: '抗體', label: 'Anticardiolipin IgG/IgM', key: true, reveal: true,
            result: 'IgG **> 80** units；IgM 陰性', clue: '**aCL IgG > 80**',
            miss: 'aPL panel 要三項一起驗。' },
          { id: 'b2', group: '抗體', label: 'Anti-beta2GPI IgG/IgM', key: true, reveal: true,
            result: 'IgG **> 80** units；IgM 陰性', clue: '**Anti-beta2GPI IgG > 80**',
            miss: 'aPL panel 要三項一起驗。' },
          { id: 'ana', group: '抗體', label: 'ANA', result: '1:80，speckled', clue: 'ANA 1:80（低效價）' },
          { id: 'pcs', group: '其他', label: 'Protein C、protein S、antithrombin', result: 'Protein S 輕度下降',
            waste: '急性血栓期 protein C/S、antithrombin 會被消耗，數值不準，現在驗容易誤判。' },
          { id: 'fvl', group: '其他', label: 'Factor V Leiden、prothrombin G20210A', result: '陰性' },
          { id: 'tm', group: '其他', label: 'Tumor markers', result: '正常',
            waste: 'Tumor markers 不是癌症篩檢工具。' }
        ]
      }
    },
    results: {
      text: [
        '年輕女性、**unprovoked DVT**、livedo reticularis、血小板低，**LA、aCL IgG、anti-beta2GPI IgG 三項皆陽性且高效價**。',
        '吳小姐問：「所以我是抗磷脂質症候群嗎？」'
      ],
      feedback: '這是 triple positive，風險最高的 profile。但是要符合 APS，抗體必須 persistent。',
      choices: [
        { label: '先開始抗凝（heparin 銜接 warfarin，INR 2-3），**12 週後重驗 aPL**', next: 'week12' },
        { label: '確定是 APS，直接開 rivaroxaban，比較方便', next: 'doac' },
        { label: '先不抗凝，等 12 週重驗確認 APS 再說', next: 'wait' }
      ]
    },
    doac: {
      text: '主治醫師把醫囑撤回。',
      feedback: 'Triple positive 的 APS 用 DOAC，arterial events 風險比 warfarin 高。APS 的長期抗凝首選是 VKA。',
      choices: [{ label: '重新決定', next: 'results' }]
    },
    wait: {
      text: '主治醫師搖頭。',
      feedback: '不管是不是 APS，近端 DVT 本身就要抗凝。確認 persistence 是為了決定療程長短，不是決定現在要不要治療。',
      choices: [{ label: '重新決定', next: 'results' }]
    },
    week12: {
      text: [
        '14 週後回診。aCL IgG 與 anti-beta2GPI IgG 仍然高效價陽性。LA 也重驗了，報告陽性，但她正在吃 warfarin。',
        '她說：「醫生，每個月都要驗 INR 好麻煩。可以換成新的口服抗凝劑嗎？還是這次吃 6 個月就可以停？」'
      ],
      clue: '**aCL、anti-beta2GPI 間隔 14 週仍陽性**（persistent）',
      feedback: '她在 warfarin 下 LA 陽性要謹慎解讀，好在抗凝前的 LA 已經陽性。依 2023 criteria：VTE 無 high-risk profile 3 分、thrombocytopenia 2 分；高效價 IgG aCL 且 anti-beta2GPI 7 分。確定 APS。',
      choices: [
        { label: '**Warfarin 終身**，INR 2.0-3.0；說明 DOAC 在 triple positive 的風險', next: 'end_good' },
        { label: '換成 apixaban，提高順從性', next: 'end_doac' },
        { label: '6 個月後停藥', next: 'end_stop' }
      ]
    },
    end_good: {
      text: '你畫了一張圖，解釋她的抗體組合為什麼屬於最高風險。她決定繼續 warfarin，並申請居家 INR 監測。兩年來沒有再發生血栓。',
      ending: {
        grade: 'good',
        title: 'Triple-positive thrombotic APS',
        pearls: [
          '年輕人 unprovoked VTE + livedo + thrombocytopenia -> 驗 aPL',
          'LA 要在抗凝前採血；抗凝中的 LA 結果需謹慎解讀',
          'aPL 需間隔 >= 12 週持續陽性',
          'Venous APS：warfarin 終身，INR 2-3；避免 DOAC'
        ]
      }
    },
    end_doac: {
      text: '八個月後，吳小姐突然右手無力、講話不清楚，二十分鐘後恢復。MRI 顯示左側小範圍梗塞。她換回 warfarin。',
      ending: {
        grade: 'ok',
        title: 'DOAC 下的 arterial event',
        pearls: [
          'DOAC 在 APS 會增加 arterial events，尤其 triple positive',
          '不論先前血栓是 arterial 或 venous，DOAC 的 arterial 風險都較 VKA 高',
          '發生 arterial thrombosis 後：INR 3-4，或 INR 2-3 + LDA'
        ]
      }
    },
    end_stop: {
      text: '停藥四個月後，吳小姐因胸痛、喘被送進急診：雙側 PE。',
      ending: {
        grade: 'bad',
        title: 'APS 停抗凝後復發',
        pearls: [
          'APS 第一次血栓後就要 VKA **終身**，不是 3-6 個月',
          'Triple positive、IgG、高效價、persistent 是復發高風險'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'aps-02',
  chapter: '369',
  title: '再試一次',
  patient: '33 歲女性 · 懷孕 6 週',
  summary: '上一胎在 31 週因嚴重子癲前症失去寶寶，這次又懷孕了。',
  cards: ['aps-path', 'aps-preg', 'aps-criteria'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '高危險妊娠聯合門診。何小姐和先生緊握著手。',
        '「上一胎 30 週時血壓突然很高，說是嚴重的子癲前症，胎盤功能也不好。31 週寶寶就沒了心跳。」',
        '產科醫師補充：「那時候驗了 aPL。」'
      ],
      clue: '33F；前胎 **severe preeclampsia + placental insufficiency**，31 週 fetal death',
      choices: [{ label: '查閱過去的檢驗與病史', next: 'record' }]
    },
    record: {
      text: '你調出她過去的資料。',
      checklist: {
        prompt: '要確認哪些紀錄？',
        submit: '確認',
        next: 'classify',
        options: [
          { id: 'apl1', group: 'aPL', label: '產後第一次 aPL', key: true, reveal: true,
            result: 'LA **陽性**；aCL IgG **55** units；anti-beta2GPI 陰性', clue: '第一次：LA (+)、aCL IgG 55',
            miss: '這就是她被轉來的原因，一定要看。' },
          { id: 'apl2', group: 'aPL', label: '16 週後重驗 aPL', key: true, reveal: true,
            result: 'LA **陽性**；aCL IgG **52** units', clue: '16 週後：LA (+)、aCL IgG 52 -> **persistent**',
            miss: 'aPL 需間隔 >= 12 週兩次陽性，第二次報告不能漏。' },
          { id: 'clot', group: '病史', label: '過去血栓病史', key: true, reveal: true,
            result: '從未有 DVT、PE、stroke', clue: '**無血栓病史**',
            miss: '有沒有血栓，決定 LMWH 用 prophylactic 還是 therapeutic dose。' },
          { id: 'sle', group: '病史', label: 'SLE 相關評估（ANA、anti-dsDNA、補體）', result: 'ANA 1:80；anti-dsDNA 陰性；補體正常', clue: '無 SLE 證據' },
          { id: 'bp', group: '病史', label: '目前血壓與 UPCr', result: 'BP 116/72；UPCr 0.1', clue: '目前 BP、UPCr 正常（baseline）' },
          { id: 'karyo', group: '其他', label: '夫妻 karyotype', result: '正常',
            waste: '她的問題是晚期 placental insufficiency，不是反覆早期流產，karyotype 幫助不大。' },
          { id: 'hsg', group: '其他', label: 'Hysterosalpingography', result: '正常',
            waste: '她已經懷孕了，而且也沒有子宮結構問題的線索。' }
        ]
      }
    },
    classify: {
      text: '整理一下：持續陽性的 LA 與中效價 IgG aCL，前胎 < 34 週 severe preeclampsia 合併 placental insufficiency，沒有血栓。',
      feedback: 'Clinical：PEC with severe features 且 PI with severe features (< 34w) 4 分。Lab：persistent LA 5 分、中效價 IgG aCL 4 分。這是 obstetric APS。',
      choices: [{ label: '擬定這次懷孕的治療', next: 'tx' }]
    },
    tx: {
      text: '這次懷孕要怎麼治療？',
      choices: [
        { label: '**Low-dose aspirin + prophylactic-dose LMWH**', next: 'tx_ok' },
        { label: 'Low-dose aspirin + **therapeutic-dose** LMWH', next: 'tx_therapeutic' },
        { label: '改用 warfarin，效果比較確定', next: 'tx_warfarin' },
        { label: '只用 low-dose aspirin', next: 'tx_lda' }
      ]
    },
    tx_therapeutic: {
      text: '主治醫師想了一下。',
      feedback: 'Therapeutic-dose LMWH 是給 thrombotic APS 的孕婦，或標準治療下仍反覆併發症時才升級。她沒有血栓史，從 prophylactic dose 開始。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_warfarin: {
      text: '產科醫師立刻搖頭。',
      feedback: 'Warfarin 有致畸性，懷孕要用 LMWH。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_lda: {
      text: '主治醫師搖頭。',
      feedback: 'Obstetric APS 的標準是 LDA 加 prophylactic LMWH，只用 aspirin 不夠。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_ok: {
      text: [
        '何小姐開始每天打 enoxaparin、吃 aspirin。產科每月追蹤血壓、尿蛋白與 umbilical artery Doppler。',
        '37 週，她剖腹產下一名 2,800 公克的男嬰。',
        '產後回診，她問：「之後我還需要吃什麼藥嗎？避孕可以吃避孕藥嗎？」'
      ],
      choices: [
        { label: '長期 **low-dose aspirin**；避孕用 progestin-only 方式（如 levonorgestrel IUD），避免含 estrogen 的避孕藥', next: 'end_good' },
        { label: '懷孕結束就不用吃藥了；避孕藥可以照常使用', next: 'post_wrong' },
        { label: '改成終身 warfarin', next: 'post_warfarin' }
      ]
    },
    post_wrong: {
      text: '主治醫師補充。',
      feedback: '曾有 APS-related obstetric complications 的非懷孕女性，LDA 可以降低之後的血栓風險。aPL 陽性也要避免 estrogen，會增加血栓。',
      choices: [{ label: '重新回答', next: 'tx_ok' }]
    },
    post_warfarin: {
      text: '主治醫師搖頭。',
      feedback: '她從未發生血栓。終身 VKA 是 thrombotic APS 在第一次血栓後的處置，不是 obstetric APS。',
      choices: [{ label: '重新回答', next: 'tx_ok' }]
    },
    end_good: {
      text: '何小姐抱著寶寶離開診間。你在病歷上註明：aPL 陽性，避免 estrogen；下次懷孕再用 LDA + LMWH。',
      ending: {
        grade: 'good',
        title: 'Obstetric APS，順利生產',
        pearls: [
          'PEC with severe features + PI (< 34w) 是 obstetric APS 的高分項目',
          'Obstetric APS：LDA + prophylactic LMWH；thrombotic APS：LDA + therapeutic LMWH',
          '仍反覆併發症：LMWH 調到 therapeutic，或第一孕期加 HCQ 400 mg/day 或 low-dose prednisolone',
          '產後長期 LDA；避免 estrogen'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'aps-03',
  chapter: '369',
  title: '術後第五天',
  patient: '41 歲女性 · 已知 APS',
  summary: '膽囊切除術後，腎功能、意識、呼吸接連惡化。',
  cards: ['aps-path', 'caps', 'aps-anticoag'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '外科 ICU 緊急會診。',
        '鄭小姐有 primary APS，六年前 DVT 後長期服用 warfarin。一週前因急性膽囊炎開刀，術前停了 warfarin，術後只打了預防劑量的 heparin。',
        '術後第三天傷口紅腫流膿。之後兩天內：尿量減少、呼吸急促、意識混亂，腳上出現大片紫色網狀斑。'
      ],
      clue: ['41F；primary APS（DVT 史，warfarin）', '術前停 warfarin；術後**傷口感染**', '2 天內：少尿、呼吸窘迫、意識混亂、livedo'],
      choices: [{ label: '開始評估', next: 'labs' }]
    },
    labs: {
      text: '你要釐清這是什麼。開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'ddx',
        options: [
          { id: 'cbc', group: '血液', label: 'CBC', key: true, reveal: true,
            result: 'Hb 8.9；PLT **35,000**/uL', clue: '**PLT 35k**；anemia',
            miss: '多器官衰竭一定要看 CBC。' },
          { id: 'smear', group: '血液', label: 'Peripheral blood smear', key: true, reveal: true,
            result: '少量 **schistocytes**', clue: 'Schistocytes (+)',
            miss: '血小板低 + 器官衰竭，要找 schistocytes 判斷是否 TMA。' },
          { id: 'hemo', group: '血液', label: 'LDH、haptoglobin', result: 'LDH 上升；haptoglobin 下降', clue: 'Hemolysis（LDH 上升、haptoglobin 下降）' },
          { id: 'adamts', group: '血液', label: 'ADAMTS13 activity', key: true, reveal: true,
            result: '**45%**（無嚴重缺乏）', clue: 'ADAMTS13 45%（不支持 TTP）',
            miss: 'TMA 鑑別第一個就是 TTP，ADAMTS13 一定要送。' },
          { id: 'dic', group: '血液', label: 'PT、aPTT、fibrinogen、D-dimer', key: true, reveal: true,
            result: 'PT 輕度延長；aPTT 延長；**fibrinogen 正常**；D-dimer 上升', clue: 'Fibrinogen 正常（不像典型 DIC）',
            miss: '要排除 DIC。' },
          { id: 'hit', group: '血液', label: 'HIT antibody', key: true, reveal: true,
            result: '**陰性**', clue: 'HIT antibody (-)',
            miss: '她術後用了 heparin，血小板又掉，HIT 一定要排除。' },
          { id: 'renal', group: '器官', label: 'Cr、UA', key: true, reveal: true,
            result: 'Cr **3.1** mg/dL（術前 0.8）；UA 蛋白 2+', clue: '**AKI**：Cr 0.8 -> 3.1',
            miss: '少尿要看腎功能。' },
          { id: 'trop', group: '器官', label: 'Troponin', result: '輕度上升', clue: 'Troponin 上升' },
          { id: 'bcx', group: '器官', label: 'Blood culture、傷口培養', key: true, reveal: true,
            result: '**MSSA**', clue: '**MSSA 感染**（誘因）',
            miss: '傷口流膿，感染是最可能的誘因，要培養。' },
          { id: 'mri', group: '影像', label: 'Brain MRI', result: '雙側多處**小梗塞**', clue: 'Brain：多處小梗塞' },
          { id: 'ct', group: '影像', label: 'CT abdomen', result: '**腎臟與脾臟梗塞**', clue: 'Renal + splenic infarcts' },
          { id: 'bm', group: '其他', label: 'Bone marrow biopsy', result: 'Hypercellular',
            waste: '血小板低的原因在周邊消耗，現在做骨髓切片沒有幫助。' },
          { id: 'apl', group: '其他', label: '重驗 aPL', result: 'LA 陽性；aCL IgG 高效價',
            waste: '她已經確診 APS，重驗不會改變今天的處置。' }
        ]
      }
    },
    ddx: {
      text: '腦、腎、脾、心臟（可能還有肺）在一週內接連出事，加上 TMA。你的判斷是？',
      choices: [
        { label: '**Catastrophic APS**，誘因是停抗凝與感染', next: 'tx' },
        { label: 'TTP', next: 'ddx_ttp' },
        { label: 'Heparin-induced thrombocytopenia', next: 'ddx_hit' },
        { label: 'Sepsis 合併 DIC', next: 'ddx_dic' }
      ]
    },
    ddx_ttp: {
      text: '主治醫師指著報告。',
      feedback: 'TTP 是 ADAMTS13 嚴重缺乏（通常 < 10%），她是 45%。',
      choices: [{ label: '重新判斷', next: 'ddx' }]
    },
    ddx_hit: {
      text: '主治醫師指著報告。',
      feedback: 'HIT antibody 陰性。',
      choices: [{ label: '重新判斷', next: 'ddx' }]
    },
    ddx_dic: {
      text: '主治醫師說：「感染確實存在，但是⋯⋯」',
      feedback: '典型 DIC 會消耗 fibrinogen，她的 fibrinogen 正常。而且已知 APS、停抗凝後一週內 >= 3 個器官 small-vessel thrombosis，這是 CAPS。感染是誘因。',
      choices: [{ label: '重新判斷', next: 'ddx' }]
    },
    tx: {
      text: '確定是 CAPS。治療？',
      choices: [
        { label: '**Glucocorticoids + 全劑量 heparin + plasma exchange（或 IVIG）**，同時用抗生素治療 MSSA', next: 'end_good' },
        { label: '血小板太低，先停所有抗凝，輸血小板', next: 'tx_plt' },
        { label: '只用抗生素控制感染，其他先觀察', next: 'tx_abx' }
      ]
    },
    tx_plt: {
      text: '主治醫師語氣很重。',
      feedback: 'CAPS 是血栓問題，停抗凝會讓血栓更多。Heparin 是治療的核心之一。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_abx: {
      text: '主治醫師搖頭。',
      feedback: '處理誘因很重要，但 CAPS 需要 GC + heparin + PLEX 或 IVIG 合併治療，只治感染不夠。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: [
        '第一週她仍需要洗腎，你們討論 refractory 時可加 rituximab 或 eculizumab。',
        '第十天起血小板回升，意識恢復，腎功能逐漸改善。一個月後她轉回一般病房，重新銜接 warfarin。'
      ],
      ending: {
        grade: 'good',
        title: 'Catastrophic APS',
        pearls: [
          'CAPS：>= 3 器官、< 1 週、small-vessel thrombosis、aPL',
          '鑑別：TTP（ADAMTS13）、HIT（抗體）、DIC（fibrinogen 消耗）',
          '誘因：感染、手術、停抗凝',
          'GC + heparin + PLEX 或 IVIG；refractory：rituximab、eculizumab'
        ]
      }
    }
  }
});
