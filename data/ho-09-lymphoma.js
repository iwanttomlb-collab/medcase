// HO 09 Lymphoma: Hodgkin and non-Hodgkin. Source: Pocket Medicine Ch 5, p19, 29-32 of 書頁.txt

RPG.registerCards('HO9', [
  {
    id: 'ho-ln',
    title: 'Lymphadenopathy：何時切片',
    points: [
      '感染：病毒（HIV、EBV、CMV、HSV、VZV、肝炎、麻疹、德國麻疹）；全身性細菌（brucellosis、leptospirosis、TB、梅毒）；局部（strep、staph、cat-scratch、tularemia）；histo、cocci、toxoplasmosis',
      '免疫：collagen vascular disease、藥物（phenytoin）、serum sickness、Castleman、Kawasaki',
      '腫瘤：lymphoma、leukemia、amyloidosis、轉移癌；其他：sarcoidosis、lipid storage',
      '**支持切片**：年齡 > 40、> 2 cm、**supraclavicular（一定異常）**、持續 > 1 個月',
      '硬度與壓痛**不可靠**',
      '**Excisional biopsy 優於 FNA**（lymphoma 需要結構）'
    ],
    refs: ['Pocket Medicine Ch 5, Lymphadenopathy']
  },
  {
    id: 'ho-lym-eval',
    title: 'Lymphoma 的評估與分期',
    points: [
      '表現：無痛淋巴結（頸部、鎖骨上）± 縱膈（HL，**SVC syndrome** 風險）；**B 症狀**：發燒 > 38 度（HL 的 Pel-Ebstein）、盜汗、6 個月體重減 > 10%',
      'PE：淋巴結、肝脾、**Waldeyer’s ring**、睪丸（NHL 約 1%）、皮膚',
      '病理：**excisional（首選）或 core biopsy**，不用 FNA；**切片前盡量避免類固醇**；immunophenotyping、cytogenetics',
      'Lab：CBC、BUN/Cr、LFT、ESR、**LDH**、UA、Ca、alb；**HBV、HCV（rituximab 前一定要 HBsAg、anti-HBc）**；**HIV**；G6PD（TLS）',
      '**PET-CT** 所有 lymphoma 都需要；頭部影像只在有神經症狀時'
    ],
    table: {
      head: ['Stage', 'Ann Arbor / Lugano'],
      rows: [
        ['I', '單一淋巴結區域'],
        ['II', '>= 2 個區域，**橫膈同側**'],
        ['III', '**橫膈兩側**'],
        ['IV', '瀰漫侵犯淋巴結外器官'],
        ['修飾', 'A/B（HL）：無/有 B 症狀；E：單一連續的淋巴結外侵犯']
      ]
    },
    refs: ['JCO 2014;32:3059（Lugano）']
  },
  {
    id: 'ho-hl',
    title: 'Hodgkin lymphoma',
    points: [
      '雙峰（15-35、> 50 歲）；男性較多；EBV 相關（尤其 HIV）',
      '**Reed-Sternberg cells**（< 1%）：雙葉核、明顯核仁（owl’s eyes）；**CD15+、CD30+、CD20-**',
      'Classic：**nodular sclerosis（60-80%，年輕女性、縱膈）**、mixed cellularity、lymphocyte rich（預後好）、lymphocyte depleted（HIV、最差）',
      'NLPHL（5%）：RS 細胞多為 **CD20+**，早期 RT 或 chemoRT，可加 rituximab',
      '**Stage I-II：PET-adapted ABVD ± RT**；unfavorable（> 50 歲、bulky 縱膈、B 症狀、ESR > 50、> 3 區）ABVD x 4-6 + RT',
      '**Stage III-IV：nivolumab-AVD**（優於 brentuximab-AVD）',
      'R/R：salvage + PD-1 blockade + **auto-HSCT**；brentuximab vedotin',
      '**晚期效應**：第二癌症（約 4.6 倍，至 40 年）；**胸部 RT 後乳癌**（40 歲或 RT 後 8-10 年開始每年篩檢）；心臟病（RT、anthracycline，**anthracycline 前用 statin**）；**bleomycin 肺毒性**；**頸部 RT -> hypothyroidism**（每年 TSH）',
      'IPS：albumin < 4、Hb < 10.5、男性、> 45 歲、stage IV、WBC >= 15k、淋巴球 < 600 或 < 8%'
    ],
    refs: ['Am J Hematol 2018;93:704', 'Lancet 2021;398:1518（HL）', 'NEJM 2024;391:1379（nivolumab-AVD）', 'NEJM 2015;373:2499（second cancers）', 'JAMA 2023;330:528（statin）', 'JCO 2012;30:3383（IPS）']
  },
  {
    id: 'ho-nhl',
    title: 'Non-Hodgkin lymphoma 分類',
    table: {
      head: ['類型', '代表疾病', '特徵異常'],
      rows: [
        ['B（侵襲）', '**Burkitt**', '**8q24 c-MYC**'],
        ['B（侵襲）', '**DLBCL**', 'BCL2、MYC 等'],
        ['B', 'Mantle cell', '**t(11;14) cyclin D1**'],
        ['B（惰性）', 'Marginal zone（nodal、MALT、splenic）', 'API2-MALT1'],
        ['B（惰性）', '**Hairy cell leukemia**（TRAP）', '**BRAF V600E**'],
        ['B（惰性）', '**Follicular**', '**t(14;18) IGH-BCL2**'],
        ['B（惰性）', 'CLL/SLL', 'IGHV、TP53'],
        ['T/NK', 'PTCL、mycosis fungoides/Sézary、ALCL（ALK）、AITL', 'TET2、DNMT3A']
      ]
    },
    points: [
      '中位 65 歲；男性；**85% B cell**',
      '**Rituximab（anti-CD20）**是 CD20+ 淋巴瘤的骨幹',
      '**Burkitt**：DA-EPOCH-R 或 CODOX-M/IVAC；**所有人 CNS（MTX）與 TLS 預防**',
      '**Double/triple-hit**（MYC + BCL2 ± BCL6）：預後差，常用 DA-EPOCH-R'
    ],
    refs: ['Leukemia 2022;36:1720（WHO 2022）', 'Lancet 2017;390:298（NHL）', 'NEJM 2013;369:1915（DA-EPOCH-R in Burkitt）']
  },
  {
    id: 'ho-dlbcl',
    title: 'DLBCL 與 mantle cell',
    points: [
      '**最常見的淋巴瘤**；目標是**治癒**',
      '**IPI**：年齡 > 60、stage III/IV、>= 2 結外部位、PS >= 2、**LDH 上升**；4 年 OS 55-94%',
      '第一線：**Pola-R-CHP**（polatuzumab anti-CD79b）或 **R-CHOP**；anthracycline 前 statin',
      '**早期復發或難治（< 12 個月）-> CAR-T**；晚期復發 -> salvage 化療，未緩解再 CAR-T',
      '第二次復發以上：**bispecific antibodies**',
      '**Mantle cell**：病程不一，**GI 侵犯常見**；年輕：誘導化療 ± BTKi -> rituximab 維持；年老：低強度化療或 BTKi + rituximab 維持'
    ],
    refs: ['Am J Hematol 2019;94:604', 'Blood 2007;109:1857（IPI）', 'NEJM 2022;386:351（Pola-R-CHP）', 'NEJM 2002;346:235（R-CHOP）', 'Am J Hematol 2022;97:638（MCL）']
  },
  {
    id: 'ho-indolent',
    title: 'Indolent lymphoma 與 HIV 相關淋巴瘤',
    points: [
      '局部疾病可用 RT 治癒；全身性以症狀控制為主',
      '**Follicular**：第二常見；**無症狀 -> active surveillance**；局部 RT；需治療時 anti-CD20 + 化療（bendamustine、CVP、lenalidomide）；之後 T-cell engager 或 CAR-T',
      '**MZL**：與慢性感染與自體免疫相關（**H. pylori -> gastric MALT**、HCV、Sjögren）；**治療 H. pylori 是治癒 gastric MALT 的關鍵**',
      '**Hairy cell leukemia**：**BRAF V600E > 95%**；**cladribine + rituximab**；早期復發（< 24 個月）vemurafenib + rituximab；晚期復發重複第一線',
      '**HIV**：NHL 風險 60-100 倍，AIDS-defining；HAART 與化療併用；DLBCL/immunoblastic（CD4 < 100、EBV）；Burkitt 可在 CD4 > 200；**CD4 < 50 避免 rituximab**',
      '**Primary CNS lymphoma**：CD4 < 50、EBV（非 HIV 也會）；**high-dose MTX** + steroid ± temozolomide ± RT，考慮 auto-HSCT'
    ],
    refs: ['NEJM 2017;377:1331（follicular）', 'NEJM 2022;386:568（MZL）', 'JCO 2020;38:1527（HCL）', 'NEJM 2021;384:1810（vemurafenib HCL）', 'Blood 2006;107:13（HIV NHL）']
  }
]);

RPG.registerCase({
  id: 'ho9-hl',
  chapter: 'HO9',
  title: '喝酒後脖子痛',
  patient: '23 歲女性 · 研究生',
  summary: '左鎖骨上一顆淋巴結，喝酒後會痛。最近晚上盜汗到要換衣服。',
  cards: ['ho-ln', 'ho-lym-eval', 'ho-hl'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診。蘇同學兩個月前發現左鎖骨上一顆 **3 cm** 淋巴結，喝酒後會痛。三週來晚上盜汗、反覆發燒 38.5 度，體重少了 6 公斤（原本 52 公斤）。',
        '全身搔癢。咳嗽一個月。',
        '診所醫師開了一週 prednisolone「消腫」，她還沒吃。'
      ],
      clue: ['23F；**左 supraclavicular LN 3 cm**，2 個月', '**B 症狀**：發燒、盜汗、體重減 > 10%', '搔癢；**喝酒後淋巴結痛**；咳嗽'],
      choices: [{ label: '下一步', next: 'bx' }]
    },
    bx: {
      text: '要怎麼取得診斷？',
      choices: [
        { label: '**Excisional biopsy**，**先不要吃類固醇**', next: 'staging' },
        { label: 'FNA 就好，比較不痛', next: 'bx_fna' },
        { label: '先吃 prednisolone 看會不會消，再決定', next: 'bx_ster' },
        { label: '先給兩週抗生素，可能是感染', next: 'bx_abx' }
      ]
    },
    bx_fna: {
      text: '主治醫師搖頭。',
      feedback: 'Lymphoma 需要淋巴結的整體結構與周圍細胞來分類，FNA 不夠。Excisional 是首選，至少要 core biopsy。',
      choices: [{ label: '重新決定', next: 'bx' }]
    },
    bx_ster: {
      text: '主治醫師搖頭。',
      feedback: '類固醇會讓淋巴瘤縮小並破壞病理判讀，切片前盡量避免。',
      choices: [{ label: '重新決定', next: 'bx' }]
    },
    bx_abx: {
      text: '主治醫師搖頭。',
      feedback: 'Supraclavicular 淋巴結一律異常；> 2 cm、持續 > 1 個月、加上 B 症狀，都支持立即切片。',
      choices: [{ label: '重新決定', next: 'bx' }]
    },
    staging: {
      text: '病理：**Reed-Sternberg cells**，**CD15+、CD30+、CD20-**，背景為發炎細胞與膠原帶。**Classic HL，nodular sclerosis**。分期與治療前評估：',
      clue: '**cHL，nodular sclerosis**',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'pet', group: '分期', label: '**PET-CT**', key: true, reveal: true,
            result: '頸部、**縱膈（bulky，11 cm）**、**脾臟**、**多處骨骼**FDG 攝取', clue: '**Bulky 縱膈**、脾、**骨骼** -> **stage IVB**',
            miss: '所有 lymphoma 都要 PET-CT 分期。' },
          { id: 'lab', group: '血液', label: 'CBC、ESR、LDH、albumin、LFT、Cr', key: true, reveal: true,
            result: 'Hb 10.2；WBC 16,400；淋巴球 7%；**ESR 82**；albumin 3.4', clue: 'IPS 危險因子：Hb < 10.5、WBC >= 15k、淋巴球 < 8%、albumin < 4、stage IV',
            miss: '這些數值組成 IPS 預後分數。' },
          { id: 'virus', group: '血液', label: 'HIV、HBV、HCV', key: true, reveal: true,
            result: '皆陰性', clue: 'HIV、HBV、HCV 陰性',
            miss: '治療前要驗 HIV 與肝炎。' },
          { id: 'echo', group: '治療前', label: 'Echocardiography', key: true, reveal: true,
            result: 'EF 63%', clue: 'EF 63%',
            miss: 'Doxorubicin 前要評估心臟。' },
          { id: 'pft', group: '治療前', label: 'PFT（含 DLCO）', result: 'DLCO 88%', clue: 'Baseline DLCO 88%' },
          { id: 'fert', group: '治療前', label: '**生育保存諮詢**', key: true, reveal: true,
            result: '已轉介，安排卵子凍存', clue: '已做生育保存',
            miss: '年輕女性化療前要提供生育保存。' },
          { id: 'hcg', group: '治療前', label: 'β-hCG', result: '陰性' },
          { id: 'mri', group: '其他', label: 'Brain MRI', result: '（未執行）',
            waste: '沒有神經症狀，不需要頭部影像。' },
          { id: 'bm', group: '其他', label: 'Bone marrow biopsy', result: '（未執行）',
            waste: 'PET-CT 已能評估骨髓侵犯，HL 不常規做 BM。' }
        ]
      }
    },
    tx: {
      text: 'Stage IVB cHL。治療？',
      choices: [
        { label: '**Nivolumab-AVD**（stage III-IV）', next: 'late' },
        { label: 'ABVD x 2 + RT', next: 't_early' },
        { label: '只做縱膈放射治療', next: 't_rt' },
        { label: 'R-CHOP', next: 't_rchop' }
      ]
    },
    t_early: {
      text: '主治醫師搖頭。',
      feedback: 'ABVD x 2-4 ± RT 是 stage I-II favorable 的治療。Stage III-IV 用 nivolumab-AVD，PFS 與副作用都優於 brentuximab-AVD。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_rt: {
      text: '主治醫師搖頭。',
      feedback: '她是全身性的 stage IV，只做 RT 無法控制。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_rchop: {
      text: '主治醫師搖頭。',
      feedback: 'Classic HL 的 RS cells 是 **CD20 陰性**，rituximab 沒有角色（NLPHL 才會 CD20+）。R-CHOP 是 DLBCL 的治療。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    late: {
      text: [
        '六個 cycle 後 PET 完全緩解。',
        '五年後她回診問：「我已經好了，還需要注意什麼嗎？」'
      ],
      choices: [
        { label: '**長期追蹤晚期效應**：第二癌症篩檢、心血管風險控制（anthracycline）、每年 TSH（若曾頸部 RT）；若曾胸部 RT，40 歲或 RT 後 8-10 年開始每年乳癌篩檢', next: 'end_good' },
        { label: '五年沒復發就完全不用追蹤了', next: 'end_ok',
          why: 'HL 存活者的第二癌症風險高達 4.6 倍、持續到 40 年，另有心臟、肺、甲狀腺晚期毒性，需要長期存活者照護。' }
      ]
    },
    end_ok: {
      text: '十五年後她因胸痛就醫，才發現早發性冠心病。',
      ending: {
        grade: 'ok',
        title: 'HL 存活者缺乏長期追蹤',
        pearls: [
          'HL 晚期效應：第二癌症、心臟病、肺毒性、hypothyroidism',
          '胸部 RT 後 8-10 年開始乳癌篩檢'
        ]
      }
    },
    end_good: {
      text: '她把存活者照護計畫存進手機。十年後，她帶著凍存卵子懷孕的寶寶回診。',
      ending: {
        grade: 'good',
        title: 'Advanced-stage classic Hodgkin lymphoma',
        pearls: [
          'Supraclavicular LN 一律異常；excisional biopsy、切片前避免類固醇',
          'RS cells：CD15+、CD30+、CD20-',
          'Stage I-II：ABVD ± RT；III-IV：nivolumab-AVD',
          '長期追蹤晚期效應'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho9-dlbcl',
  chapter: 'HO9',
  title: '一個月長大的肚子',
  patient: '66 歲男性 · 退休消防員',
  summary: '一個月內腹部越來越脹，摸得到一大塊，晚上盜汗。',
  cards: ['ho-lym-eval', 'ho-dlbcl', 'ho-nhl'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '病房。陳先生一個月內腹脹、摸到腹部腫塊，盜汗、體重減 5 公斤。',
        'CT：**12 cm 腹腔後淋巴結團塊**、雙側腋下淋巴結、肝臟兩處病灶。**LDH 820**。ECOG 2。'
      ],
      clue: ['66M；快速長大的**腹部 bulky 腫塊**', '腋下 LN、肝臟病灶', '**LDH 820**；ECOG 2'],
      choices: [{ label: '安排切片', next: 'bx' }]
    },
    bx: {
      text: 'CT-guided core biopsy：**DLBCL**，CD20+，germinal center type；FISH：**無 MYC 重排**。',
      clue: '**DLBCL**（非 double-hit）',
      checklist: {
        prompt: '治療前評估：勾選你要的項目',
        submit: '送出',
        next: 'ipi',
        options: [
          { id: 'pet', group: '分期', label: 'PET-CT', key: true, reveal: true,
            result: '橫膈兩側淋巴結、肝臟、**骨骼一處**', clue: '**Stage IV**；結外：肝、骨（2 處）',
            miss: 'PET-CT 分期。' },
          { id: 'hbv', group: '感染', label: '**HBsAg、anti-HBc**', key: true, reveal: true,
            result: 'HBsAg 陰性；**anti-HBc 陽性**；HBV DNA 測不到', clue: '**anti-HBc (+)**',
            miss: 'Rituximab 會讓 HBV 再活化（可致猛爆性肝炎），一定要先驗 HBsAg 與 anti-HBc。' },
          { id: 'hiv', group: '感染', label: 'HIV、HCV', key: true, reveal: true,
            result: '陰性', clue: 'HIV、HCV 陰性',
            miss: '所有 lymphoma 都要驗 HIV。' },
          { id: 'echo', group: '治療前', label: 'Echocardiography', key: true, reveal: true,
            result: 'EF 58%', clue: 'EF 58%',
            miss: 'Anthracycline 前要做 echo。' },
          { id: 'tls', group: '治療前', label: 'TLS labs、G6PD', key: true, reveal: true,
            result: 'Uric acid 9.1、Cr 1.2；G6PD 正常', clue: 'Uric acid 9.1（TLS 風險）',
            miss: 'Bulky 高 LDH 淋巴瘤是 TLS 中高風險。' },
          { id: 'lp', group: '其他', label: 'Lumbar puncture', result: '（未執行）',
            waste: '沒有神經症狀，也不是高 CNS 風險組合，不需常規 LP。' },
          { id: 'bm', group: '其他', label: 'Bone marrow biopsy', result: '（未執行）',
            waste: 'PET 已評估骨髓，DLBCL 不常規做 BM。' }
        ]
      }
    },
    ipi: {
      text: 'IPI：年齡 > 60、stage IV、結外 >= 2、PS 2、LDH 上升 = **5 分（高風險）**。治療？',
      choices: [
        { label: '**Pola-R-CHP**（或 R-CHOP）；**HBV 預防（entecavir）**；TLS 預防；anthracycline 前 statin', next: 'relapse' },
        { label: 'R-CHOP，HBV DNA 測不到就不用預防', next: 'i_hbv' },
        { label: '高風險，直接 CAR-T', next: 'i_cart' },
        { label: 'ABVD', next: 'i_abvd' }
      ]
    },
    i_hbv: {
      text: '主治醫師搖頭。',
      feedback: 'Anti-HBc 陽性（即使 HBsAg 陰性、DNA 測不到）在 rituximab 下仍有再活化風險，要給抗病毒預防或密切監測 HBV DNA。',
      choices: [{ label: '重新決定', next: 'ipi' }]
    },
    i_cart: {
      text: '主治醫師搖頭。',
      feedback: 'DLBCL 第一線目標是治癒，用 Pola-R-CHP 或 R-CHOP。CAR-T 是早期復發或難治（< 12 個月）的治療。',
      choices: [{ label: '重新決定', next: 'ipi' }]
    },
    i_abvd: {
      text: '主治醫師搖頭。',
      feedback: 'ABVD 是 Hodgkin lymphoma 的治療。DLBCL 是 CD20+，要用含 rituximab 的方案。',
      choices: [{ label: '重新決定', next: 'ipi' }]
    },
    relapse: {
      text: [
        '六個 cycle 後 PET 完全緩解。',
        '**7 個月後**，腹部又出現腫塊，切片證實 DLBCL 復發。'
      ],
      clue: '**治療結束 7 個月復發**（< 12 個月）',
      choices: [
        { label: '**早期復發（< 12 個月）-> CAR-T**', next: 'end_good' },
        { label: '重複 R-CHOP', next: 'end_rchop',
          why: '一年內復發代表對第一線化療抗性，重複 R-CHOP 效果差；早期復發或難治 DLBCL 應轉 CAR-T。' }
      ]
    },
    end_rchop: {
      text: '第二輪 R-CHOP 兩個 cycle 後腫塊仍在長。',
      ending: {
        grade: 'bad',
        title: '早期復發 DLBCL 治療不當',
        pearls: [
          '< 12 個月復發或難治 -> CAR-T',
          '晚期復發：salvage 化療；第二次復發後：bispecific antibodies'
        ]
      }
    },
    end_good: {
      text: '接受 CD19 CAR-T 後第 7 天發燒、低血壓（CRS grade 2），用 tocilizumab 改善。三個月後 PET 完全緩解。',
      ending: {
        grade: 'good',
        title: 'High-IPI DLBCL',
        pearls: [
          'IPI：年齡 > 60、stage III/IV、>= 2 結外、PS >= 2、LDH 上升',
          'Pola-R-CHP 或 R-CHOP；rituximab 前驗 HBsAg、anti-HBc，必要時預防',
          '< 12 個月復發 -> CAR-T'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho9-malt',
  chapter: 'HO9',
  title: '胃鏡切片的意外',
  patient: '57 歲女性 · 餐廳老闆',
  summary: '長期胃悶，胃鏡下看起來像胃炎，切片報告卻寫著 lymphoma。',
  cards: ['ho-indolent', 'ho-nhl'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '腸胃科轉介。陳女士半年胃悶、偶爾上腹痛，沒有體重減輕或出血。',
        'EGD：胃體結節狀黏膜。切片：**extranodal marginal zone lymphoma of MALT**；**H. pylori 陽性**。',
        'EUS：侷限於黏膜與黏膜下層。PET-CT：無其他病灶。'
      ],
      clue: ['57F；**gastric MALT lymphoma**', '**H. pylori (+)**', '侷限於胃（早期）'],
      choices: [{ label: '決定治療', next: 'tx' }]
    },
    tx: {
      text: '第一步治療？',
      choices: [
        { label: '**H. pylori eradication**，之後重複 EGD 確認淋巴瘤與 H. pylori 狀態', next: 'end_good' },
        { label: 'R-CHOP 化學免疫治療', next: 't_chemo' },
        { label: '胃全切除', next: 't_surg' }
      ]
    },
    t_chemo: {
      text: '主治醫師搖頭。',
      feedback: '早期 H. pylori 陽性的 gastric MALT 是由抗原驅動的，**治療 H. pylori 是治癒的關鍵**，多數會緩解，不需要化療。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_surg: {
      text: '主治醫師搖頭。',
      feedback: '手術破壞性大且不必要。早期 gastric MALT 先根除 H. pylori；無效或 H. pylori 陰性再考慮 RT。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '三合一療法後 H. pylori 轉陰。六個月與一年後的 EGD 切片：淋巴瘤完全緩解。',
      ending: {
        grade: 'good',
        title: 'H. pylori 相關 gastric MALT lymphoma',
        pearls: [
          'MZL 與慢性感染、自體免疫相關（H. pylori、HCV、Sjögren）',
          'H. pylori 治療是治癒 gastric MALT 的關鍵',
          '局部惰性淋巴瘤可用 RT 治癒'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho9-hcl',
  chapter: 'HO9',
  title: '抽不出骨髓',
  patient: '52 歲男性 · 農藥行老闆',
  summary: '反覆感染、脾臟很大，三系都低。骨髓穿刺抽不出東西。',
  cards: ['ho-indolent', 'ho-nhl'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '病房。邱先生半年內肺炎兩次，這次又發燒。脾臟到肚臍，**沒有淋巴結腫大**。',
        'CBC：WBC 1,800（ANC 600、**monocyte 0**）、Hb 9.2、PLT 62k。',
        '骨髓穿刺：**dry tap**。'
      ],
      clue: ['52M；反覆感染', '**Pancytopenia + monocytopenia**', '**巨脾**、無淋巴結', 'BM **dry tap**'],
      choices: [{ label: '安排檢查', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'tx',
        options: [
          { id: 'smear', group: '血液', label: 'Peripheral smear', key: true, reveal: true,
            result: '少量淋巴球，細胞質有**毛髮狀突起**', clue: '**Hairy cells**',
            miss: 'Smear 可以直接看到 hairy cells。' },
          { id: 'flow', group: '確診', label: 'Flow cytometry', key: true, reveal: true,
            result: 'CD19+、CD20+、**CD11c+、CD25+、CD103+**、**CD123+**', clue: 'CD11c、CD25、CD103、CD123 (+)',
            miss: 'Flow 確認 HCL 的典型 immunophenotype。' },
          { id: 'braf', group: '確診', label: '**BRAF V600E**', key: true, reveal: true,
            result: '**陽性**', clue: '**BRAF V600E (+)**',
            miss: 'HCL 超過 95% 有 BRAF V600E，是診斷與復發治療的依據。' },
          { id: 'bmbx', group: '確診', label: 'BM core biopsy', key: true, reveal: true,
            result: '瀰漫浸潤、**reticulin 纖維化**（fried-egg 外觀）', clue: 'BM 浸潤 + reticulin 纖維化',
            miss: 'Dry tap 時要做 core biopsy。' },
          { id: 'jak2', group: '其他', label: 'JAK2、BCR-ABL', result: '陰性' },
          { id: 'cx', group: '感染', label: '血液培養、CXR', result: '右下肺炎', clue: '目前肺炎' },
          { id: 'ct', group: '其他', label: 'PET-CT', result: '脾臟腫大，無淋巴結' }
        ]
      }
    },
    tx: {
      text: 'Hairy cell leukemia。先控制肺炎。之後的治療？',
      choices: [
        { label: '**Cladribine + rituximab**', next: 'relapse' },
        { label: 'Watch and wait', next: 't_watch' },
        { label: 'Splenectomy', next: 't_spl' }
      ]
    },
    t_watch: {
      text: '主治醫師搖頭。',
      feedback: '他有 cytopenias 合併反覆感染、巨脾，有治療適應症。Cladribine + rituximab 能帶來長期緩解。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_spl: {
      text: '主治醫師搖頭。',
      feedback: 'Splenectomy 是舊式治療，不能處理骨髓浸潤。現在第一線是 cladribine + rituximab。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    relapse: {
      text: '完全緩解。**18 個月後**血球又下降，確認 HCL 復發。',
      clue: '**18 個月**復發（< 24 個月）',
      choices: [
        { label: '**早期復發（< 24 個月）-> vemurafenib（BRAF inhibitor）+ rituximab**', next: 'end_good' },
        { label: '重複 cladribine + rituximab', next: 'end_ok',
          why: '< 24 個月的早期復發，重複第一線效果較差，用 vemurafenib + rituximab；> 24 個月的晚期復發才重複第一線。' }
      ]
    },
    end_ok: {
      text: '第二次 cladribine 後緩解只維持了九個月，骨髓抑制還拖了很久。',
      ending: {
        grade: 'ok',
        title: 'HCL 早期復發',
        pearls: [
          '< 24 個月復發：vemurafenib + rituximab',
          '> 24 個月：重複第一線'
        ]
      }
    },
    end_good: {
      text: 'Vemurafenib + rituximab 八週後血球恢復，MRD 陰性。',
      ending: {
        grade: 'good',
        title: 'Hairy cell leukemia',
        pearls: [
          'Pancytopenia + monocytopenia + 巨脾 + dry tap -> HCL',
          'BRAF V600E > 95%',
          '第一線：cladribine + rituximab',
          '早期復發（< 24 個月）：vemurafenib + rituximab'
        ]
      }
    }
  }
});
