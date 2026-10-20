// HO 10 Plasma cell dyscrasias: MGUS, smoldering MM, MM, Waldenström. Source: Pocket Medicine Ch 5, p33-36 of 書頁.txt

RPG.registerCards('HO10', [
  {
    id: 'ho-pcd',
    title: 'Plasma cell 疾病的光譜',
    table: {
      head: ['', 'BM plasma cells', 'M protein', 'Myeloma-defining event'],
      rows: [
        ['**MGUS**', '< 10%', '< 3 g/dL', '無'],
        ['**Smoldering MM**', '10-60%', '>= 3 g/dL 血清或 >= 500 mg/24h 尿', '無'],
        ['**MM**', '>= 10% 或切片證實 plasmacytoma', '', '**有**']
      ]
    },
    points: [
      '**MGUS**：驗 CBC、Ca、Cr、SPEP、serum FLC、UPEP + IFE 排除 MM；**6 個月後重驗 SPEP，穩定則每年**',
      'MGUS 每年約 1%（終身約 25%）進展為 MM、WM、amyloidosis 或 LPD；**FLC ratio 異常 + M protein >= 1.5 g/dL** 進展風險高',
      '**SMM**：無 CRAB，但要 **whole-body MRI、PET-CT 或 low-dose CT** 排除隱藏骨病灶；每年約 5% 進展；高風險：M protein > 2、BM PC > 20%、FLC ratio > 20；高風險 SMM 用 **daratumumab** 改善 OS',
      '**Solitary plasmacytoma**：骨或骨外；**RT**；骨內者較易進展為 MM'
    ],
    refs: ['NEJM 2018;378:241（MGUS）', 'Blood Cancer J 2018;8:59（SMM 20/2/20）', 'NEJM 2025;392:1777（daratumumab in SMM）', 'Br J Haematol 2004;124:717（plasmacytoma）']
  },
  {
    id: 'ho-mm',
    title: 'Multiple myeloma：表現與診斷',
    points: [
      '中位 69 歲；非裔較多',
      '**CRAB**：hyper**C**alcemia（osteoclast）；**R**enal（**cast nephropathy**、type II RTA、amyloid/LCDD -> nephrotic、高鈣、urate）；**A**nemia（normocytic）；lytic **B**one lesions（病理性骨折）',
      '其他：**反覆感染**（相對低丙種球蛋白）、脊髓壓迫、POEMS、**hyperviscosity**（IgM > 4、IgG > 5、IgA > 7 g/dL）、amyloid 結合 factor X 的凝血病變',
      '**Dx**：BM PC >= 10% 或切片證實 plasmacytoma + **>= 1 MDE**：(a) CRAB：溶骨病灶、Ca > 11、Cr > 2 或 CrCl < 40、Hb < 10；(b) biomarker：**BM PC >= 60%**、**FLC ratio >= 100**、**MRI > 1 個 focal lesion**',
      '線索：**rouleaux**、**低 anion gap**（IgG 是未測量陽離子）、globulin 上升、ESR 上升',
      '**SPEP**（> 80%）+ **IFE**（IgG 50%、IgA 20%、light chain only 20%）+ **serum FLC**（light chain 型很重要）；UPEP 找 Bence-Jones',
      '骨骼影像：X-ray、MRI、CT survey、PET-CT；beta2M 與 LDH 反映腫瘤負荷',
      'Cytogenetics：標準 = hyperdiploidy、t(11;14)；**高風險 = del(17p)、t(4;14)、t(14;16)**、hypodiploidy',
      '變異：plasma cell leukemia（周邊 PC > 2,000）；nonsecretory（約 2%）'
    ],
    table: {
      head: ['R-ISS', '標準', '5 年 OS'],
      rows: [
        ['I', 'beta2M < 3.5、albumin >= 3.5、標準風險 cytogenetics、LDH 正常', '82%'],
        ['II', '非 I 也非 III', '62%'],
        ['III', 'beta2M >= 5.5 **且**（高風險 cytogenetics 或 LDH 上升）', '40%']
      ]
    },
    refs: ['Lancet 2021;397:410（MM）', 'Lancet Oncol 2014;15:e538（IMWG criteria）', 'JCO 2015;33:2863（R-ISS）']
  },
  {
    id: 'ho-mm-tx',
    title: 'Multiple myeloma：治療方向',
    points: [
      '藥物類別：**proteasome inhibitor**（bortezomib V、carfilzomib K、ixazomib）；**IMiD**（lenalidomide R、thalidomide、pomalidomide）；**anti-CD38**（daratumumab、isatuximab）；anti-SLAMF7；**BCMA/GPRC5D CAR-T 或 bispecific**；dexamethasone',
      '**誘導：anti-CD38 + VRd 四藥（Dara/Isa-VRd）**；虛弱者三藥',
      '**可移植**：誘導後 **high-dose melphalan + auto-HSCT**（或先收集幹細胞延後移植）；不治癒但延長 PFS；**lenalidomide 維持**改善 PFS/OS',
      '不可移植：誘導 + 維持',
      '第一次復發：HSCT（反應好且未移植過）或換藥；**第二次以上：CAR-T 或 bispecific**',
      '支持：**bisphosphonate**（腎功能差用 **denosumab**）；急性腎衰竭可考慮 plasmapheresis；hyperviscosity -> plasmapheresis；反覆感染 -> IVIg',
      '毒性：melphalan 骨髓抑制；**lenalidomide/pomalidomide 血栓（ASA 預防）**、血小板低；**bortezomib 周邊神經病變**；carfilzomib 心肺'
    ],
    refs: ['NEJM 2024;390:301 & 391:1597（quad induction）', 'NEJM 2014;371:895（auto-HSCT）', 'NEJM 2014;371:10（lenalidomide maintenance）', 'NEJM 2022;387:495 & 2232（CAR-T、bispecific）', 'JCO 2007;25:2464（bisphosphonate）']
  },
  {
    id: 'ho-wm',
    title: 'Waldenström macroglobulinemia',
    points: [
      'Lymphoplasmacytic lymphoma 分泌**單株 IgM**；**MYD88 L265P > 90%**、CXCR4 30-40%',
      '**沒有溶骨病灶**（IgM + lytic = IgM myeloma）',
      '疲倦（貧血）最常見；B 症狀；BM、HSM、淋巴結浸潤',
      '**Hyperviscosity**（IgM >= 3,000 mg/dL 風險高）：視力模糊、**sausage retinal veins**、頭痛、頭暈、意識改變；CHF、肺浸潤',
      '其他：type I cryoglobulinemia（Raynaud）、**acquired VWD**、IgM 沉積、amyloid；IgM 自體抗體：AIHA（尤其 cold）、**anti-MAG neuropathy**',
      'Dx：SPEP + IFE 有 IgM spike；BM lymphoplasmacytoid 細胞；serum viscosity > 5-6 有症狀',
      '無症狀：觀察（存活接近同齡）',
      '**Hyperviscosity：plasmapheresis**；**盡量避免輸血**（會加重黏稠度）',
      '有症狀：chemoimmunotherapy、**BTK inhibitors**、BCL2 antagonists'
    ],
    refs: ['Blood 2009;114:2375', 'NEJM 2012;367:826（MYD88 L265P）']
  }
]);

RPG.registerCase({
  id: 'ho10-mm',
  chapter: 'HO10',
  title: '腰痛了三個月',
  patient: '64 歲男性 · 計程車司機',
  summary: '以為是久坐的腰痛，復健三個月沒效。最近很累、口渴、便秘。',
  cards: ['ho-mm', 'ho-mm-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。許先生三個月腰痛，復健科做了牽引沒有改善。一週來很累、口渴、便秘，今天有點混亂。',
        'Lab：**Ca 12.6**、**Cr 2.4**（半年前 1.0）、**Hb 8.7**、total protein 9.8、albumin 3.1。',
        'Lumbar X-ray：L2 compression fracture，頭骨側面有多處**打洞樣病灶**。'
      ],
      clue: ['64M；背痛 3 個月；意識混亂', '**Ca 12.6、Cr 2.4、Hb 8.7**', '**Total protein 9.8**（globulin gap 6.7）', 'L2 壓迫性骨折、**punched-out lesions**'],
      choices: [{ label: '先處理高血鈣', next: 'ca' }]
    },
    ca: {
      text: 'Ca 12.6 合併意識改變與 AKI。處置？',
      choices: [
        { label: '**積極 IV NS**；**denosumab**（腎功能不好時優先）或減量 bisphosphonate；calcitonin 可短期；避免 NSAID', next: 'workup' },
        { label: '先給 furosemide 排鈣', next: 'ca_lasix' },
        { label: '給標準劑量 zoledronic acid 就好', next: 'ca_zol' }
      ]
    },
    ca_lasix: {
      text: '主治醫師搖頭。',
      feedback: '高血鈣病人多半脫水，先 furosemide 只會讓脫水與 AKI 更糟。第一步是積極補水。',
      choices: [{ label: '重新決定', next: 'ca' }]
    },
    ca_zol: {
      text: '主治醫師搖頭。',
      feedback: 'Bisphosphonate 本身有腎毒性，Cr 2.4 時要減量或改用 denosumab；而且一定要先補水。',
      choices: [{ label: '重新決定', next: 'ca' }]
    },
    workup: {
      text: '高血鈣在改善。安排診斷檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'spep', group: 'M protein', label: '**SPEP + immunofixation**', key: true, reveal: true,
            result: 'M spike **5.1 g/dL**；**IgG kappa**', clue: '**IgG kappa，M spike 5.1**',
            miss: 'SPEP 與 IFE 是確認並定性 M protein 的基礎。' },
          { id: 'flc', group: 'M protein', label: '**Serum free light chains**', key: true, reveal: true,
            result: 'Kappa 1,280 mg/L；lambda 9；**ratio 142**', clue: '**FLC ratio 142**（>= 100）',
            miss: 'FLC 對診斷（尤其 light-chain only）與之後追蹤都很重要；kappa 高也解釋 cast nephropathy。' },
          { id: 'upep', group: 'M protein', label: 'UPEP、24h urine protein', result: 'Bence-Jones kappa 1.8 g/24h', clue: 'Bence-Jones proteinuria' },
          { id: 'bm', group: '骨髓', label: '**BM biopsy + FISH**', key: true, reveal: true,
            result: '**Clonal plasma cells 55%**；FISH：**t(11;14)**，無 del(17p)、t(4;14)', clue: '**BM PC 55%**；t(11;14)（標準風險）',
            miss: '診斷需要 BM plasma cell 比例，FISH 決定風險。' },
          { id: 'b2m', group: '分期', label: '**beta2-microglobulin、LDH、albumin**', key: true, reveal: true,
            result: '**beta2M 6.2**；LDH 正常；albumin 3.1', clue: 'beta2M 6.2；LDH 正常',
            miss: 'R-ISS 需要 beta2M、albumin、LDH 與 cytogenetics。' },
          { id: 'img', group: '影像', label: '**Whole-body low-dose CT 或 PET-CT**', key: true, reveal: true,
            result: '頭骨、肋骨、骨盆多處溶骨；L2 骨折；**T10 椎體病灶無脊髓壓迫**', clue: '多處溶骨病灶',
            miss: '全身骨骼影像找溶骨病灶與骨折風險。' },
          { id: 'smear', group: '其他', label: 'Smear', result: '**Rouleaux**' },
          { id: 'ag', group: '其他', label: 'Anion gap', result: '**4**（低）', clue: 'Anion gap 低' },
          { id: 'bone', group: '其他', label: 'Bone scan', result: '幾乎正常',
            waste: 'Myeloma 是純溶骨，沒有 osteoblastic 反應，bone scan 常偽陰性。' }
        ]
      }
    },
    dx: {
      text: 'BM PC 55% + CRAB 全部 + FLC ratio 142。R-ISS？',
      choices: [
        { label: '**R-ISS II**（beta2M >= 5.5，但 cytogenetics 標準、LDH 正常，所以不是 III）', next: 'tx' },
        { label: 'R-ISS III（beta2M > 5.5）', next: 'd_iii' }
      ]
    },
    d_iii: {
      text: '主治醫師搖頭。',
      feedback: 'R-ISS III 要 beta2M >= 5.5 **且**（高風險 cytogenetics 或 LDH 上升）。他 t(11;14) 是標準風險、LDH 正常，所以是 II。',
      choices: [{ label: '重新判讀', next: 'dx' }]
    },
    tx: {
      text: '64 歲、體能好（ECOG 1），腎功能在改善。治療計畫？',
      choices: [
        { label: '**Dara-VRd 誘導** -> **high-dose melphalan + auto-HSCT** -> **lenalidomide 維持**；骨骼保護', next: 'tox' },
        { label: '只用 melphalan + prednisone', next: 't_mp' },
        { label: 'MM 可以治癒，移植後就不用維持', next: 't_cure' }
      ]
    },
    t_mp: {
      text: '主治醫師搖頭。',
      feedback: 'MP 是舊式方案。現在誘導用 anti-CD38 + VRd 四藥，反應率更高。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_cure: {
      text: '主治醫師搖頭。',
      feedback: 'MM 一般無法治癒。Auto-HSCT 延長 PFS，lenalidomide 維持改善 PFS 與 OS。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tox: {
      text: '開始 Dara-VRd。他問：「這些藥有什麼要特別注意的？」',
      choices: [
        { label: 'Lenalidomide -> **血栓（ASA 預防）**；bortezomib -> **周邊神經病變**；定期追蹤', next: 'end_good' },
        { label: '沒什麼特別的副作用', next: 'end_dvt',
          why: 'Lenalidomide（尤其合併 dexamethasone）血栓風險高，需要 ASA 等預防；bortezomib 常見周邊神經病變，需要調整劑量或皮下給藥。' }
      ]
    },
    end_dvt: {
      text: '誘導第 6 週，他左腿腫起來：DVT。',
      ending: {
        grade: 'ok',
        title: 'IMiD 相關血栓',
        pearls: [
          'Lenalidomide/pomalidomide：血栓 -> ASA 預防',
          'Bortezomib：周邊神經病變'
        ]
      }
    },
    end_good: {
      text: '四個 cycle 後 VGPR，Cr 回到 1.3。完成 auto-HSCT 後 complete response，lenalidomide 維持，他又開始開計程車。',
      ending: {
        grade: 'good',
        title: 'Transplant-eligible multiple myeloma',
        pearls: [
          'CRAB + 高 globulin gap + 低 anion gap + rouleaux -> 想 MM',
          'SPEP + IFE + FLC + BM + 全身骨骼影像',
          'R-ISS：beta2M、albumin、LDH、cytogenetics',
          'Quad 誘導 -> auto-HSCT -> lenalidomide 維持；腎功能差用 denosumab'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho10-mgus',
  chapter: 'HO10',
  title: '健檢的一條帶子',
  patient: '61 歲女性 · 會計師',
  summary: '健檢做了蛋白電泳，報告說有一條 M band，她嚇壞了。',
  cards: ['ho-pcd'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '血液科門診。蔡女士自費健檢，SPEP：**M spike 0.8 g/dL**。完全沒有症狀。',
        '「是不是骨髓癌？我需要抽骨髓嗎？」'
      ],
      clue: ['61F；**M spike 0.8 g/dL**', '無症狀'],
      choices: [{ label: '開檢查', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'ife', group: 'M protein', label: 'Immunofixation', key: true, reveal: true,
            result: '**IgG lambda**', clue: 'IgG lambda',
            miss: '要知道 M protein 的型別（IgM 要往 WM 方向想）。' },
          { id: 'flc', group: 'M protein', label: 'Serum FLC', key: true, reveal: true,
            result: 'Ratio **0.6**（正常）', clue: 'FLC ratio 正常',
            miss: 'FLC ratio 是 MGUS 進展風險的關鍵因子。' },
          { id: 'cbc', group: 'CRAB', label: 'CBC、Ca、Cr', key: true, reveal: true,
            result: 'Hb 13.4；Ca 9.3；Cr 0.7', clue: '**無 CRAB**',
            miss: '要排除 myeloma-defining events。' },
          { id: 'upep', group: 'M protein', label: 'UPEP + IFE', key: true, reveal: true,
            result: '無 Bence-Jones', clue: '尿液無 M protein',
            miss: 'MGUS 評估要包含 UPEP。' },
          { id: 'bm', group: '其他', label: 'Bone marrow biopsy', result: '（未執行）',
            waste: 'IgG < 1.5 g/dL、FLC 正常、無 CRAB 的低風險 MGUS，BM 通常不需要。' },
          { id: 'pet', group: '其他', label: 'PET-CT', result: '（未執行）',
            waste: '低風險 MGUS、無骨痛，不需要影像。' }
        ]
      }
    },
    dx: {
      text: 'IgG lambda 0.8 g/dL、FLC 正常、無 CRAB：**低風險 MGUS**。怎麼跟她說？',
      choices: [
        { label: '**不是癌症、不需治療**；每年約 1% 會進展；**6 個月後重驗 SPEP，穩定則每年追蹤**；出現骨痛、貧血等要回診', next: 'end_good' },
        { label: '開始 lenalidomide 預防進展', next: 'd_tx' },
        { label: '這是良性的，不需要任何追蹤', next: 'd_none' }
      ]
    },
    d_tx: {
      text: '主治醫師搖頭。',
      feedback: 'MGUS 不治療，只追蹤。治療只用於高風險 smoldering MM（daratumumab）或真正的 MM。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    d_none: {
      text: '主治醫師搖頭。',
      feedback: 'MGUS 終身約 25% 會進展到 MM、WM、amyloidosis 或 LPD，需要定期追蹤。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '六個月後 M spike 0.8，之後每年回診。五年來數值都沒有變化。',
      ending: {
        grade: 'good',
        title: 'Low-risk MGUS',
        pearls: [
          'MGUS：BM PC < 10%、M < 3 g/dL、無 MDE',
          '評估：CBC、Ca、Cr、SPEP、FLC、UPEP + IFE',
          '6 個月重驗，穩定則每年',
          'FLC ratio 異常 + M >= 1.5 -> 進展風險高'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho10-wm',
  chapter: 'HO10',
  title: '看東西霧霧的',
  patient: '71 歲男性 · 退休校長',
  summary: '兩週來視力模糊、頭痛、流鼻血，今天講話有點慢。',
  cards: ['ho-wm', 'ho-pcd'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。劉校長兩週來視力模糊、頭痛、頭暈，反覆流鼻血。今天家人覺得他反應變慢。',
        '眼底：視網膜靜脈**擴張扭曲像香腸**，有出血點。',
        'Lab：Hb 8.4、total protein 11.2、albumin 3.0；檢驗科說「血清很黏，機器不好跑」。'
      ],
      clue: ['71M；視力模糊、頭痛、鼻血、**意識變慢**', '**Sausage retinal veins**', 'Total protein 11.2；血清黏稠'],
      choices: [{ label: '開檢查', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'tx',
        options: [
          { id: 'spep', group: 'M protein', label: 'SPEP + IFE、quantitative IgM', key: true, reveal: true,
            result: '**IgM kappa**；IgM **6,800 mg/dL**', clue: '**IgM kappa 6,800 mg/dL**',
            miss: '要確認單株 IgM 的量。' },
          { id: 'visc', group: 'M protein', label: '**Serum viscosity**', key: true, reveal: true,
            result: '**7.2**（正常 < 1.8）', clue: '**Serum viscosity 7.2**',
            miss: '有症狀的 hyperviscosity 通常 > 5-6。' },
          { id: 'bm', group: '確診', label: 'BM biopsy、**MYD88 L265P**', key: true, reveal: true,
            result: 'Lymphoplasmacytic 浸潤 60%；**MYD88 L265P 陽性**', clue: 'LPL；**MYD88 L265P (+)**',
            miss: 'WM 確診要 BM，MYD88 L265P 超過 90%。' },
          { id: 'img', group: '影像', label: 'CT', result: '輕度脾腫大、腹腔淋巴結；**無溶骨病灶**', clue: '無溶骨病灶' },
          { id: 'cryo', group: '其他', label: 'Cryoglobulin', result: '陰性' },
          { id: 'vwf', group: '其他', label: 'vWF panel', result: 'vWF activity 下降', clue: 'Acquired VWD（鼻血）' },
          { id: 'mri', group: '其他', label: 'Brain MRI', result: '無中風',
            waste: '神經症狀可以用 hyperviscosity 解釋；先治療再評估。' }
        ]
      }
    },
    tx: {
      text: 'WM 合併**症狀性 hyperviscosity**（神經、視網膜、出血）。Hb 8.4。現在？',
      choices: [
        { label: '**緊急 plasmapheresis**；**暫不輸 PRBC**；之後開始 WM 治療（如 BTK inhibitor 或 chemoimmunotherapy）', next: 'end_good' },
        { label: '先輸 2 袋 PRBC 改善貧血', next: 't_prbc' },
        { label: '直接開始 rituximab 單藥', next: 't_ritux' },
        { label: '觀察，WM 是惰性疾病', next: 't_watch' }
      ]
    },
    t_prbc: {
      text: '主治醫師搖頭。',
      feedback: '輸 PRBC 會進一步增加血液黏稠度，讓 hyperviscosity 惡化。先 plasmapheresis 降 IgM。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_ritux: {
      text: '主治醫師搖頭。',
      feedback: 'Rituximab 起效慢，而且單用時可能造成 IgM flare（暫時上升），在 hyperviscosity 時很危險。先 plasmapheresis。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_watch: {
      text: '主治醫師搖頭。',
      feedback: '無症狀 WM 才觀察。他有神經症狀與出血的 hyperviscosity，是急症。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '兩次 plasmapheresis 後 IgM 降到 3,400，視力與意識恢復。之後開始 zanubrutinib。',
      ending: {
        grade: 'good',
        title: 'WM 合併 hyperviscosity syndrome',
        pearls: [
          '單株 IgM、MYD88 L265P、無溶骨病灶',
          'Hyperviscosity：視力模糊、sausage veins、頭痛、意識改變、出血',
          'Plasmapheresis；避免輸血',
          '有症狀：BTKi、chemoimmunotherapy'
        ]
      }
    }
  }
});
