// HO 08 CML and CLL. Source: Pocket Medicine Ch 5, p28-29, 32-33 of 書頁.txt

RPG.registerCards('HO8', [
  {
    id: 'ho-cml',
    title: 'Chronic myelogenous leukemia',
    points: [
      'MPN；**Philadelphia chromosome t(9;22) -> BCR-ABL1**（abl kinase 活化）；**診斷必須有 BCR-ABL1**（karyotype、FISH、PCR）',
      '中位年齡約 64；成人白血病約 15%；與放射線有關',
      '**Chronic phase**：blasts < 10%；**accelerated**：10-19% blasts、basophils >= 20%、PLT < 100k；**blast phase**：>= 20% blasts 或髓外白血病',
      '多數無症狀或脾腫大相關症狀；全身症狀惡化、骨痛、脾臟快速變大 -> 疾病進展',
      'Smear：白血球增多、**各階段 myeloid 細胞**、血小板增多、**basophilia**；BM hypercellular、M:E 上升、micromegakaryocytes',
      'AP、BP 考慮 allo-HSCT；**懷孕禁用 hydroxyurea 與 TKI -> IFN 或 leukapheresis**',
      '適當治療下壽命接近正常',
      '**停 TKI**：深度分子反應（> 4.5 log）持續 > 2 年可考慮，約 50% 2 年無復發'
    ],
    refs: ['JAMA 2025;333:1618（CML）', 'Blood 2009;114:937', 'Lancet 2015;385:1447', 'JCO 2024;42:1875（TKI discontinuation）']
  },
  {
    id: 'ho-tki',
    title: 'CML 的 TKI',
    table: {
      head: ['TKI', '世代', '代表副作用'],
      rows: [
        ['Imatinib', '1st', '共同：N/V、腹瀉、肌肉抽筋、cytopenias、PO4 下降、QT 延長、罕見 CHF'],
        ['**Dasatinib**', '2nd', '**pericardial、pleural effusion**、**pulmonary HTN**'],
        ['**Nilotinib**', '2nd', '**bilirubin、lipase 上升**；**CV（HTN、心律不整）**'],
        ['**Bosutinib**', '2nd', '**腹瀉很常見**'],
        ['**Ponatinib**', '3rd', '**pancreatitis**、**arterial vascular events**（腦、心、PAD）'],
        ['**Asciminib**', 'Allosteric（STAMP）', '關節痛、LFT 與 lipase 上升（無 pancreatitis 風險）']
      ]
    },
    points: [
      '所有 TKI 都可第一線',
      '**T315I 突變：只有 ponatinib 與 asciminib 有效**',
      '抗藥性：BCR-ABL1 表現增加，多為 kinase domain 突變或擴增'
    ],
    refs: ['NEJM 2024;391:885（asciminib first line）', 'NEJM 2012;367:2075（ponatinib T315I）', 'Blood 2021;138:2031（asciminib）']
  },
  {
    id: 'ho-cll',
    title: 'CLL / SLL',
    points: [
      '單株、功能不全的成熟 B 細胞；**CLL 與 SLL 是同一疾病**',
      '**CLL：> 5,000/uL**；SLL：< 5,000 但有淋巴結或脾腫大；**MBL** 未達標準，觀察',
      '最常見的成人白血病；中位 71 歲；常因 CBC 意外發現；10-20% B 症狀；淋巴結 80%、HSM 50%',
      '**AIHA 約 10%**、ITP 1-2%；**hypogammaglobulinemia** -> 感染；BM failure 約 13%；**Richter transformation 約 5%**（高惡性淋巴瘤，預後差）',
      'Smear：小而成熟的淋巴球、**smudge cells**；**flow：CD5+、CD19+、CD20+、CD23+**、表面 Ig dim',
      '**del(17p)/TP53 突變 = 不良**；trisomy 12 中性；**del(13q14)、IGHV mutated = 良好**'
    ],
    table: {
      head: ['Rai stage', '描述', '中位存活'],
      rows: [
        ['0', '只有 lymphocytosis', '> 10 年'],
        ['I-II', '+ 淋巴結腫大或肝脾腫大', '7-10 年'],
        ['III-IV', '+ 貧血（非 AIHA）或血小板低（非 ITP）', '1-2 年']
      ]
    },
    refs: ['NEJM 2005;352:804', 'Blood 2008;111:5446（iwCLL）', 'NEJM 2011;365:2497（mutated genes）']
  },
  {
    id: 'ho-cll-tx',
    title: 'CLL 治療時機與選擇',
    points: [
      '**觀察**，除非 **active disease**：**Rai III/IV**、疾病相關症狀、快速進展、類固醇無效的 AIHA/ITP、反覆感染',
      '第一線：**BTK inhibitor（如 acalabrutinib，需長期服用）**或 **venetoclax + obinutuzumab（固定療程）**',
      '第二線：選擇**不同機轉**；BTKi（zanubrutinib、pirtobrutinib）、venetoclax；refractory 考慮 allo-HSCT',
      'HSCT 是唯一治癒，但要衡量病人狀況與目標',
      '反覆感染 + 低丙種球蛋白 -> 考慮 IVIg；anti-CD20 前驗 HBsAg、anti-HBc'
    ],
    refs: ['JAMA 2023;329:918（CLL）', 'NEJM 2023;388:1739（venetoclax-obinutuzumab）', 'NEJM 2023;388:319（zanubrutinib）', 'NEJM 2023;389:33（pirtobrutinib）']
  }
]);

RPG.registerCase({
  id: 'ho8-cml',
  chapter: 'HO8',
  title: '健檢報告上的白血球',
  patient: '44 歲女性 · 銀行行員',
  summary: '公司健檢 WBC 98,000。她說除了最近吃比較少，沒有不舒服。',
  cards: ['ho-cml', 'ho-tki'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '血液科門診。曾小姐公司健檢：**WBC 98,000**、Hb 11.6、**PLT 620k**。',
        '最近吃一點就飽，左上腹悶悶的。脾臟在肋下 6 cm。'
      ],
      clue: ['44F；**WBC 98k**、**PLT 620k**', '早飽；**splenomegaly** 6 cm'],
      choices: [{ label: '開檢查', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'phase',
        options: [
          { id: 'smear', group: '血液', label: 'Peripheral smear', key: true, reveal: true,
            result: '從 myeloblast 到 neutrophil **各階段都有**（myelocyte 最多）；**basophils 6%**；blasts 2%', clue: '**各階段 myeloid**、**basophilia 6%**、blasts 2%',
            miss: 'Smear 上的 myeloid 全階段 + basophilia 是 CML 的特徵。' },
          { id: 'bcr', group: '確診', label: '**BCR-ABL1**（FISH + quantitative PCR）', key: true, reveal: true,
            result: '**BCR-ABL1 陽性**（p210），IS 68%', clue: '**BCR-ABL1 (+)**',
            miss: 'CML 的診斷必須有 BCR-ABL1，而且 baseline PCR 是之後追蹤反應的依據。' },
          { id: 'bm', group: '確診', label: 'BM + karyotype', key: true, reveal: true,
            result: 'Hypercellular、M:E 上升、micromegakaryocytes；BM blasts 3%；**t(9;22)**，無額外異常', clue: 'BM blasts 3%；t(9;22)',
            miss: 'BM 用來確認 phase（blasts %）與額外的染色體異常。' },
          { id: 'lap', group: '其他', label: 'LAP score', result: '低', clue: 'LAP 低（不像 leukemoid reaction）' },
          { id: 'hcg', group: '其他', label: 'β-hCG', key: true, reveal: true,
            result: '陰性', clue: 'hCG (-)',
            miss: 'TKI 有致畸性，育齡女性開藥前要確認沒有懷孕。' },
          { id: 'jak2', group: '其他', label: 'JAK2 V617F', result: '陰性',
            waste: 'BCR-ABL1 陽性已經確診 CML。' },
          { id: 'ct', group: '其他', label: 'PET-CT', result: '（未執行）',
            waste: 'CML 分期靠 blasts 與 basophils，不靠影像。' }
        ]
      }
    },
    phase: {
      text: 'Blasts 3%、basophils 6%、PLT 620k。哪一期？治療？',
      choices: [
        { label: '**Chronic phase**：第一線 **TKI**（imatinib 或 2nd gen）', next: 'tki' },
        { label: 'Accelerated phase，直接安排 allo-HSCT', next: 'p_ap' },
        { label: 'Hydroxyurea 控制白血球就好', next: 'p_hu' }
      ]
    },
    p_ap: {
      text: '主治醫師搖頭。',
      feedback: 'AP 是 blasts 10-19%、basophils >= 20% 或 PLT < 100k。她 blasts < 10%，是 chronic phase，TKI 就能讓壽命接近正常。',
      choices: [{ label: '重新判讀', next: 'phase' }]
    },
    p_hu: {
      text: '主治醫師搖頭。',
      feedback: 'Hydroxyurea 只能暫時降白血球，不影響 BCR-ABL1。CML 的治療是 TKI。',
      choices: [{ label: '重新判讀', next: 'phase' }]
    },
    tki: {
      text: [
        '她開始 **dasatinib**。三個月 BCR-ABL1 IS 2.1%，十二個月 0.05%（MMR）。',
        '第 14 個月，她說爬樓梯會喘。CXR：**右側肋膜積水**。'
      ],
      clue: 'Dasatinib 第 14 個月：**pleural effusion**',
      choices: [
        { label: '**Dasatinib 的副作用**（pleural effusion）：暫停或減量，必要時換 **imatinib、nilotinib 或 bosutinib**', next: 'preg' },
        { label: 'CML 惡化，換 ponatinib', next: 't_pon' },
        { label: '肋膜積水與 TKI 無關，繼續吃，找感染', next: 't_ignore' }
      ]
    },
    t_pon: {
      text: '主治醫師搖頭。',
      feedback: '她 BCR-ABL1 持續下降，沒有進展。Pleural effusion 是 dasatinib 特有副作用。Ponatinib 留給 T315I 或多線失敗，且有動脈血栓與胰臟炎風險。',
      choices: [{ label: '重新決定', next: 'tki' }]
    },
    t_ignore: {
      text: '主治醫師搖頭。',
      feedback: 'Dasatinib 的代表副作用就是 pleural/pericardial effusion 與 pulmonary HTN，要處理藥物。',
      choices: [{ label: '重新決定', next: 'tki' }]
    },
    preg: {
      text: [
        '換成 bosutinib 後積水消失，只是偶爾腹瀉。BCR-ABL1 持續 **MR4.5（> 4.5 log reduction）已經 3 年**。',
        '曾小姐問：「我想生小孩，可以停藥嗎？」'
      ],
      clue: '**MR4.5 持續 3 年**',
      choices: [
        { label: '符合 **TKI discontinuation** 條件（深度分子反應 > 2 年）：停藥、**密集監測 PCR**，復發就恢復 TKI；**懷孕期間 TKI 與 hydroxyurea 禁用**，需要時用 **IFN 或 leukapheresis**', next: 'end_good' },
        { label: '一輩子都不能停 TKI，懷孕時繼續吃', next: 'end_preg',
          why: '深度分子反應持續 > 2 年可以嘗試停藥（約一半 2 年無復發）。TKI 與 hydroxyurea 在懷孕禁用，需要控制時用 IFN 或 leukapheresis。' }
      ]
    },
    end_preg: {
      text: '她在懷孕初期仍吃 bosutinib，產檢發現胎兒異常，經歷了艱難的決定。',
      ending: {
        grade: 'bad',
        title: 'CML 與懷孕',
        pearls: [
          'TKI、hydroxyurea 懷孕禁用 -> IFN、leukapheresis',
          '深度分子反應 > 2 年可考慮停藥'
        ]
      }
    },
    end_good: {
      text: '停藥後每月 PCR，一年來維持 MR4。曾小姐懷孕了，產科與血液科一起追蹤。',
      ending: {
        grade: 'good',
        title: 'Chronic-phase CML',
        pearls: [
          'CML 必須有 BCR-ABL1；chronic phase blasts < 10%',
          '所有 TKI 可第一線；認識各 TKI 的代表副作用',
          'T315I：ponatinib 或 asciminib',
          'MR4.5 > 2 年可嘗試停藥；懷孕用 IFN 或 leukapheresis'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho8-cll',
  chapter: 'HO8',
  title: '淋巴球兩萬八',
  patient: '67 歲男性 · 退休公務員',
  summary: '健檢發現淋巴球偏高，他很緊張，聽說是「血癌」。',
  cards: ['ho-cll', 'ho-cll-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '血液科門診。廖先生健檢：WBC 32,000，**淋巴球 28,000/uL**；Hb 14.1、PLT 210k。',
        '沒有發燒、盜汗、體重減輕。理學檢查：頸部有幾顆 1 cm 的淋巴結，無肝脾腫大。',
        '他說：「網路說這是血癌，我是不是要馬上化療？」'
      ],
      clue: ['67M；**ALC 28k**；Hb、PLT 正常', '頸部小淋巴結；無 B 症狀、無 HSM'],
      choices: [{ label: '開檢查', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'stage',
        options: [
          { id: 'smear', group: '血液', label: 'Peripheral smear', key: true, reveal: true,
            result: '小而成熟的淋巴球；大量 **smudge cells**', clue: '**Smudge cells**',
            miss: 'Smear 看細胞型態，排除其他淋巴增生疾病。' },
          { id: 'flow', group: '確診', label: '**Peripheral blood flow cytometry**', key: true, reveal: true,
            result: '**CD5+、CD19+、CD20 dim、CD23+**；kappa restricted、表面 Ig dim', clue: '**CD5+ CD19+ CD23+**、clonal',
            miss: 'CLL 的診斷靠周邊血 flow cytometry，不需要骨髓。' },
          { id: 'fish', group: '預後', label: 'FISH（del17p、del11q、+12、del13q）、TP53、IGHV', key: true, reveal: true,
            result: '**del(13q14)** 單獨；TP53 野生型；**IGHV mutated**', clue: '**del(13q)、IGHV mutated**（良好）',
            miss: '基因預後因子影響之後的治療選擇，尤其 del(17p)/TP53。' },
          { id: 'dat', group: '其他', label: 'DAT、retic', result: '陰性' },
          { id: 'igg', group: '其他', label: 'Immunoglobulins', result: 'IgG 680（輕度下降）', clue: 'IgG 輕度下降' },
          { id: 'hbv', group: '其他', label: 'HBsAg、anti-HBc', result: 'HBsAg (-)、**anti-HBc (+)**', clue: '**anti-HBc (+)**（之後用 anti-CD20 要注意 HBV 再活化）' },
          { id: 'bm', group: '其他', label: 'Bone marrow biopsy', result: '（未執行）',
            waste: 'CLL 不需要骨髓即可診斷；只有 cytopenias 原因不明時才做。' },
          { id: 'pet', group: '其他', label: 'PET-CT', result: '（未執行）',
            waste: '無症狀 CLL 不需要影像分期；懷疑 Richter 時才做 PET。' }
        ]
      }
    },
    stage: {
      text: 'CLL，Rai stage I（淋巴結腫大），無症狀、Hb 與 PLT 正常。治療？',
      choices: [
        { label: '**Watch and wait**：沒有 active disease，早期治療不延長存活', next: 'later' },
        { label: '馬上開始 BTK inhibitor', next: 's_btk' },
        { label: 'FCR 化療', next: 's_fcr' }
      ]
    },
    s_btk: {
      text: '主治醫師搖頭。',
      feedback: 'CLL 只有 active disease（Rai III/IV、症狀、快速進展、類固醇無效的 AIHA/ITP、反覆感染）才治療。無症狀早期治療不改善存活，只增加副作用。',
      choices: [{ label: '重新決定', next: 'stage' }]
    },
    s_fcr: {
      text: '主治醫師搖頭。',
      feedback: '他沒有治療適應症。而且現在第一線已經是 BTK inhibitor 或 venetoclax + obinutuzumab。',
      choices: [{ label: '重新決定', next: 'stage' }]
    },
    later: {
      text: [
        '四年後，廖先生越來越累。**Hb 9.4**（DAT 陰性）、**PLT 88k**，脾臟在肋下 4 cm。ALC 倍增時間 8 個月。',
        '重做 FISH：**del(17p)** 出現。'
      ],
      clue: ['4 年後：**Hb 9.4（非 AIHA）、PLT 88k** -> **Rai IV**', '**新出現 del(17p)**'],
      choices: [
        { label: '**Active disease**：開始 **BTK inhibitor**（如 acalabrutinib，長期服用；del(17p) 對化療反應差）', next: 'end_good' },
        { label: '用 FCR（fludarabine、cyclophosphamide、rituximab）', next: 'l_fcr' },
        { label: '繼續觀察', next: 'l_watch' }
      ]
    },
    l_fcr: {
      text: '主治醫師搖頭。',
      feedback: 'del(17p)/TP53 突變對化學免疫治療反應很差，要用 BTK inhibitor（或 venetoclax 類）。他 anti-HBc 陽性，若用 anti-CD20 也要 HBV 預防。',
      choices: [{ label: '重新決定', next: 'later' }]
    },
    l_watch: {
      text: '主治醫師搖頭。',
      feedback: 'Hb < 10、PLT < 100k（非免疫性）是 Rai III/IV，已經是 active disease，需要治療。',
      choices: [{ label: '重新決定', next: 'later' }]
    },
    end_good: {
      text: '開始 acalabrutinib 三個月後 Hb 12.2、PLT 140k，脾臟縮小。他每天散步一小時。',
      ending: {
        grade: 'good',
        title: 'CLL：從觀察到治療',
        pearls: [
          'CLL 靠 flow：CD5+、CD19+、CD20+、CD23+；smudge cells',
          '只治療 active disease：Rai III/IV、症狀、快速進展、難治 AIHA/ITP、反覆感染',
          '第一線：BTKi 或 venetoclax + obinutuzumab',
          'del(17p)/TP53 不良，避免化學免疫治療'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho8-richter',
  chapter: 'HO8',
  title: '突然長大的淋巴結',
  patient: '72 歲女性 · CLL 第六年',
  summary: 'CLL 吃 BTK inhibitor 一直很穩定，這個月左頸一顆淋巴結突然長得很快。',
  cards: ['ho-cll', 'ho-cll-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診。蔣女士 CLL 第六年，吃 BTK inhibitor 三年，ALC 正常。',
        '這個月左頸一顆淋巴結從 1 cm 長到 **5 cm**，發燒 38.2、盜汗、體重少 4 公斤。**LDH 640**（以前正常）。'
      ],
      clue: ['72F；CLL on BTKi', '左頸淋巴結 **1 -> 5 cm（1 個月）**', '**B 症狀**；**LDH 640**'],
      choices: [{ label: '下一步', next: 'w' }]
    },
    w: {
      text: '懷疑什麼？怎麼確認？',
      choices: [
        { label: '**Richter transformation**：**PET-CT** 找最高 SUV 的淋巴結 -> **excisional/core biopsy**', next: 'bx' },
        { label: 'CLL 對 BTKi 抗藥，換 venetoclax 就好', next: 'w_switch' },
        { label: 'FNA 細胞學就夠了', next: 'w_fna' }
      ]
    },
    w_switch: {
      text: '主治醫師搖頭。',
      feedback: '單一淋巴結快速長大 + B 症狀 + LDH 上升，要先排除 Richter transformation（約 5%），它是高惡性淋巴瘤，治療完全不同。',
      choices: [{ label: '重新決定', next: 'w' }]
    },
    w_fna: {
      text: '主治醫師搖頭。',
      feedback: 'Lymphoma 的診斷需要組織結構，要做 excisional（首選）或 core biopsy，不能只靠 FNA。',
      choices: [{ label: '重新決定', next: 'w' }]
    },
    bx: {
      text: 'PET：左頸淋巴結 **SUVmax 18**，其他 < 4。Excisional biopsy：**diffuse large B-cell lymphoma**，與 CLL 同一 clone。',
      clue: '**Richter transformation**（clonally related DLBCL）',
      choices: [
        { label: 'DLBCL 型 Richter：**R-CHOP 類化學免疫治療**，體能可行時考慮 **allo-HSCT 或 CAR-T**；預後差，討論治療目標', next: 'end_good' },
        { label: '繼續原本的 BTKi', next: 'end_bad',
          why: 'Richter 是侵襲性淋巴瘤，CLL 的治療控制不了，需要 DLBCL 的治療方向；預後差，要早點討論治療目標。' }
      ]
    },
    end_bad: {
      text: '兩個月後淋巴結壓迫氣道，蔣女士在加護病房過世。',
      ending: {
        grade: 'bad',
        title: '未治療的 Richter transformation',
        pearls: [
          'CLL 單一淋巴結快速長大、B 症狀、LDH 上升 -> 想 Richter',
          'PET 找最高 SUV 處切片'
        ]
      }
    },
    end_good: {
      text: 'R-CHOP 四個 cycle 後 PET 完全反應。家人和她一起討論了後續的計畫與心願。',
      ending: {
        grade: 'good',
        title: 'Richter transformation',
        pearls: [
          'Richter 約 5%，轉成高惡性淋巴瘤，預後差',
          'PET 找最高 SUV 淋巴結，excisional biopsy',
          'DLBCL 型：化學免疫治療 ± 細胞治療'
        ]
      }
    }
  }
});
