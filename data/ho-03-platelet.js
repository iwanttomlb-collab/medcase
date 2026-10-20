// HO 03 Platelet disorders: ITP, HIT, TMA, VWD and platelet function. Source: Pocket Medicine Ch 5, p8-15 of 書頁.txt

RPG.registerCards('HO3', [
  {
    id: 'ho-bleed-approach',
    title: '出血疾病的初步判斷',
    table: {
      head: ['', 'Platelet / vascular', 'Coagulation'],
      rows: [
        ['部位', '皮膚、**黏膜**', '**深部組織**（肌肉、關節）'],
        ['病灶', '**Petechiae**、ecchymoses', '**Hemarthroses**、hematomas'],
        ['小傷口出血', '會', '少見'],
        ['術後出血', '**立即**、較輕', '**延遲**、嚴重']
      ]
    },
    points: [
      'PT/PTT 正常 -> 看 PLT：數量低（thrombocytopenia）或功能異常（藥物、uremia、VWD）',
      'PT/PTT 異常 -> coagulopathy（家族史、抗凝劑、肝病、vitamin K、DIC）',
      'Vascular：scurvy、HHT、Ehlers-Danlos、osteogenesis imperfecta、Kasabach-Merritt'
    ],
    refs: ['NEJM 2014;370:847（approach to abnormal hemostasis）', 'NEJM 2008;359:938（coagulation cascade）']
  },
  {
    id: 'ho-tcp',
    title: 'Thrombocytopenia 的評估',
    table: {
      head: ['PLT（/uL）', '出血風險'],
      rows: [
        ['50,000-100,000', '大外傷時；可進行一般手術'],
        ['< 50,000', '小外傷或手術'],
        ['< 20,000', '自發性出血（ITP 較少）'],
        ['< 10,000', '嚴重、致命性出血']
      ]
    },
    points: [
      '生成下降：AA、MDS、藥物、酒精、肝硬化、病毒；骨髓浸潤',
      '破壞（immune）：**ITP**；secondary：HIV、HCV、SLE、APS、CLL、藥物（**heparin**、quinidine、sulfa、vanco）、輸血後、疫苗',
      '破壞（non-immune）：**MAHA（DIC、HUS、TTP）**、clopidogrel、preeclampsia/HELLP、CPB、IABP',
      '分布：splenic sequestration、稀釋、低體溫；重症多因素；ehrlichiosis、babesiosis、RMSF',
      '懷孕：gestational（第三孕期）或 ITP（第一孕期或大幅下降）；器官失能要想 HELLP、TMA、DIC',
      '**Smear 先排除 pseudothrombocytopenia（EDTA 凝集）**；破壞看大 PLT、schistocytes；生成不足看 blasts、hypersegmented PMN、leukoerythroblastic',
      '不明原因、尤其合併 splenomegaly -> BM bx'
    ],
    refs: ['Blood 2009;113:2386（primary vs secondary ITP）', 'Hematology Am Soc Hematol Educ Program 2017;1:660（critical illness）']
  },
  {
    id: 'ho-itp',
    title: 'Immune thrombocytopenia (ITP)',
    points: [
      '自體抗體破壞 PLT + 抑制 megakaryocyte；女:男 = 3:1；漸進黏膜皮膚出血',
      '**排除性診斷**：單獨 PLT < 100k、smear 大 PLT、排除 pseudo；10% 合併 AIHA = **Evans syndrome**',
      '輸 PLT 反應差（30 分鐘後上升 < 10k）；BM bx 非必要',
      '評估 secondary：**HIV、HCV**、lymphoproliferative、autoimmune',
      '**PLT > 50k 通常不需治療**，除非出血、外傷、手術、抗凝'
    ],
    table: {
      head: ['線別', '治療', '重點'],
      rows: [
        ['第一線', '**Prednisone 0.5-2 mg/kg** 約 4 週減量，或 **dexamethasone 40 mg x 4 d**', '70-90% 初始反應，約 20% 持續緩解'],
        ['第一線', '**IVIg 1 g/kg x 2-3 d**', '需要 24-48 h 快速提升；維持 2-6 週'],
        ['第一線', 'Anti-Rh(D) Ig（Rh+）', '有溶血史避免'],
        ['第二線', '**TPO-RA**（romiplostim、eltrombopag、avatrombopag）', '增加生成'],
        ['第二線', '**Rituximab** ± dex', '先驗 **HBsAg、anti-HBc**'],
        ['第二線', 'Splenectomy、fostamatinib（SYK）、AZA/CYC/MMF、danazol', 'Splenectomy 前打疫苗'],
        ['出血', 'Methylpred 1 g x 3 d + IVIg + **PLT 輸注**（與 IVIg 併用）+ aminocaproic acid', '']
      ]
    },
    note: 'HBV 血清要在 IVIg 前抽，IVIg 會干擾結果。',
    refs: ['NEJM 2019;381:945（ITP）', 'Blood 2011;117:4910（BM in ITP）', 'Blood Adv 2019;3:3829（ITP guideline）']
  },
  {
    id: 'ho-hit',
    title: 'Heparin-induced thrombocytopenia',
    table: {
      head: ['4T', '2 分', '1 分', '0 分'],
      rows: [
        ['Thrombocytopenia', '下降 > 50% 且最低 >= 20k', '下降 30-50% 或最低 10-19k', '< 30% 或 < 10k'],
        ['Timing', '**5-10 d**；或 <= 1 d（30 d 內用過 heparin）', '> 10 d 或不明；<= 1 d（30-100 d 內用過）', '< 4 d 且近期未用'],
        ['Thrombosis', '新血栓、皮膚壞死、IV UFH 後急性反應', '進展/復發、疑似、非壞死皮膚病灶', '無'],
        ['Other cause', '無', '可能', '明確']
      ]
    },
    points: [
      'Type II：IgG 抗 **PF4-heparin** -> PLT 活化 -> **血栓（HITT 30-50%）**；UFH 1-3%、LMWH 0-0.8%；術後最高',
      '**4T < 3 分：NPV 99%**；4-5 分 PPV 22%、6-8 分 PPV 64% -> 驗抗體並停 UFH',
      '檢驗：PF4-heparin ELISA；**SRA** 確認（> 95% Se/Sp）；ELISA 偽陽性多（心臟手術可達 50%）',
      '治療：**停所有 heparin（含 flush、LMWH）**；**非 heparin 抗凝（argatroban、bivalirudin、DOAC、fondaparinux）不論有無血栓**',
      '**避免輸 PLT**；已給 warfarin -> 給 vit K 逆轉；**PLT > 150k 才開 warfarin、重疊約 5 天**',
      '所有病人做下肢 U/S；HITT 抗凝 3-6 個月；無血栓至少 1 個月（多數 3 個月）'
    ],
    note: 'Warfarin 先讓半衰期短的 protein C 下降，抗凝的煞車先失靈，factor II、X 還在 -> venous limb gangrene、skin necrosis。',
    refs: ['Chest 2012;141:e495S', 'NEJM 2015;373:252（HIT）', 'Blood Adv 2018;2:3360（ASH HIT guideline）', 'Blood 2017;130:1104（DOAC in HIT）', 'Blood 2014;123:2485（re-exposure）']
  },
  {
    id: 'ho-tma',
    title: 'Thrombotic microangiopathies',
    points: [
      'Dx：不明原因 thrombocytopenia + **MAHA**（schistocytes > 2-3/hpf、**Coombs 陰性**、**PT/PTT、fibrinogen 正常**、LDH 很高、haptoglobin 低、Cr 上升）',
      'DDx：**DIC**（PT/PTT 延長、fibrinogen 低）、vasculitis、惡性高血壓、preeclampsia/HELLP'
    ],
    table: {
      head: ['類型', '機轉', '表現', '治療'],
      rows: [
        ['**TTP**', '**ADAMTS13** 缺乏（遺傳或自體抗體）-> 大型 vWF multimers', 'PLT 低 + MAHA（100%）± 意識改變 65%、腎衰竭 50%、發燒 25%', '**緊急 plasma exchange** ± steroids；延遲時先 FFP；caplacizumab；rituximab；**禁輸 PLT**'],
        ['**CM-TMA**', '補體基因變異或抗 CFH 抗體', 'MAHA + PLT 低 + AKI，**無前驅腹瀉**；誘因：懷孕、感染、手術', '排除其他 TMA；嚴重腎損傷可經驗性 eculizumab/ravulizumab'],
        ['**ST-HUS**', 'Shiga toxin 傷害腎內皮', 'MAHA + PLT 低 + AKI + **血便**', '支持治療'],
        ['**Drug-induced**', 'Immune（quinine、gemcitabine）或直接毒性（gemcitabine、mitomycin、tacrolimus、CsA、bevacizumab）', '類似 TTP', '停藥']
      ]
    },
    note: 'PLASMIC score 幫助區分 TTP 與其他 TMA。',
    refs: ['NEJM 2014;371:654（TMA）', 'Lancet 2017;390:681', 'Lancet Haematol 2017;4:e157（PLASMIC）', 'NEJM 2019;380:335（caplacizumab）', 'Blood Adv 2017;1:1159（rituximab）', 'Blood 2017;129:2857（drug-induced TMA）']
  },
  {
    id: 'ho-vwd',
    title: 'VWD 與血小板功能異常',
    points: [
      'vWF：PLT 黏附 + 攜帶 factor VIII；**最常見的遺傳性出血疾病**',
      'Type 1（約 85%）部分量缺乏；type 2（約 15%）質的異常；type 3（< 1%）幾乎完全缺乏',
      'Acquired：惡性腫瘤、**MPN 合併高 PLT**、自體免疫、hypothyroidism；**Heyde’s**：嚴重 AS 破壞 vWF + GI AVM 出血',
      'Dx：vWF:Ag 下降、vWF activity（ristocetin cofactor）下降、FVIII ± 下降、PTT ± 延長；multimer analysis',
      '輕微出血或預防：**DDAVP**（type 1，先做 challenge 確認有效）、TXA；嚴重出血 -> **vWF concentrate**',
      '功能異常：黏附 Bernard-Soulier、uremia；聚集 Glanzmann、P2Y12/GP IIb/IIIa 抑制劑、dysproteinemia；顆粒釋放 ASA、NSAIDs、肝病、MPN、CPB',
      '**Uremic bleeding**：DDAVP、cryo、矯正貧血（RBC 把 PLT 推向血管壁）、考慮停抗血小板'
    ],
    refs: ['NEJM 2016;375:2067（VWD）']
  }
]);

RPG.registerCase({
  id: 'ho3-itp',
  chapter: 'HO3',
  title: '刷牙流不停的血',
  patient: '27 歲女性 · 幼教老師',
  summary: '小腿出現一片紅點，刷牙流血止不住，嘴裡還有血泡。',
  cards: ['ho-tcp', 'ho-itp'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。鍾小姐三天前發現小腿滿是針尖大的紅點，今天刷牙流血流了半小時，口腔頰黏膜有幾個**血泡**。',
        '兩週前有感冒。沒有吃新藥，月經正常。',
        'CBC：**PLT 6,000**；Hb 13.0、WBC 6,900，分類正常。'
      ],
      clue: ['27F；petechiae、牙齦出血、**口腔血泡（wet purpura）**', '**PLT 6k**；Hb、WBC 正常', '兩週前上呼吸道感染'],
      choices: [{ label: '開始評估', next: 'exam' }]
    },
    exam: {
      text: '你先檢查病人，同時想清楚要排除什麼。',
      checklist: {
        prompt: '理學檢查與檢驗：勾選你要的項目',
        submit: '送出',
        next: 'dx',
        options: [
          { id: 'smear', group: '血液', label: 'Peripheral smear', key: true, reveal: true,
            result: 'PLT 稀少、**體積大**；無凝集、**無 schistocytes**、無 blasts', clue: 'Smear：large PLT、無 clumping、無 schistocytes',
            miss: '血小板低第一步：smear 排除 pseudothrombocytopenia，並看 schistocytes 與 blasts。' },
          { id: 'neuro', group: '理學', label: '神經學檢查、眼底', key: true, reveal: true,
            result: '意識清楚，無 focal deficit；眼底無出血', clue: '無顱內出血徵象',
            miss: 'PLT < 10k 要評估有沒有顱內出血。' },
          { id: 'spleen', group: '理學', label: '腹部（脾臟）、淋巴結', key: true, reveal: true,
            result: '**無 splenomegaly**、無淋巴結腫大', clue: '無 splenomegaly、無淋巴結',
            miss: 'Splenomegaly 或淋巴結腫大會讓你往 sequestration、lymphoma 方向想。' },
          { id: 'coag', group: '血液', label: 'PT、aPTT、fibrinogen', key: true, reveal: true,
            result: '正常', clue: 'PT/aPTT/fibrinogen 正常',
            miss: '要排除 DIC。' },
          { id: 'hiv', group: '感染', label: 'HIV、HCV', key: true, reveal: true,
            result: '陰性', clue: 'HIV、HCV 陰性',
            miss: 'ITP 是排除性診斷，HIV、HCV 是 secondary ITP 的重要原因。' },
          { id: 'hbv', group: '感染', label: 'HBsAg、anti-HBc（**IVIg 前**）', key: true, reveal: true,
            result: 'HBsAg 陰性；anti-HBc 陰性', clue: 'HBV 陰性',
            miss: 'HBV 血清要在 IVIg 前抽（IVIg 會干擾），之後若用 rituximab 也需要。' },
          { id: 'hcg', group: '其他', label: 'Urine hCG', result: '陰性' },
          { id: 'ana', group: '其他', label: 'ANA', result: '陰性' },
          { id: 'dat', group: '其他', label: 'DAT、retic', result: '陰性；retic 正常', clue: '無 Evans syndrome' },
          { id: 'bm', group: '其他', label: 'Bone marrow biopsy', result: '（未執行）',
            waste: '單獨 thrombocytopenia、其他系正常、smear 典型，年輕 ITP 不需要骨髓。' },
          { id: 'ct', group: '其他', label: 'Brain CT', result: '正常',
            waste: '沒有神經學症狀，不需要常規 brain CT。' }
        ]
      }
    },
    dx: {
      text: '單獨 PLT 6k、大型 PLT、無 schistocytes、無 splenomegaly，其他檢查陰性。',
      clue: '**ITP**（排除性診斷）',
      choices: [{ label: '決定治療', next: 'tx' }]
    },
    tx: {
      text: 'PLT 6k、口腔血泡。治療？',
      choices: [
        { label: '**Dexamethasone 40 mg x 4 天**（或 prednisone）**+ IVIg 1 g/kg**；住院觀察', next: 'tx_ok' },
        { label: '先輸 2 單位血小板，把 PLT 拉起來', next: 'tx_plt' },
        { label: '沒有大出血，門診追蹤就好', next: 'tx_obs' },
        { label: '直接安排 splenectomy', next: 'tx_spl' }
      ]
    },
    tx_plt: {
      text: '主治醫師搖頭。',
      feedback: 'ITP 的抗體會很快清除輸入的血小板，上升 < 10k。PLT 輸注只用於危及生命的出血，而且要和 IVIg、高劑量類固醇一起給。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_obs: {
      text: '主治醫師搖頭。',
      feedback: '「PLT > 50k 通常不需治療」不適用這裡。她 PLT 6k 加上口腔血泡（wet purpura），是嚴重出血的警訊，要治療。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_spl: {
      text: '主治醫師搖頭。',
      feedback: 'Splenectomy 是第二線，而且新診斷的 ITP 有些會自行緩解。第一線是類固醇 ± IVIg。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_ok: {
      text: [
        'IVIg 後兩天 PLT 升到 68k，血泡消失。出院，prednisone 慢慢減量。',
        '四個月後停藥一個月，PLT 掉到 **18k**，又出現瘀青。'
      ],
      clue: '停類固醇後復發（PLT 18k）',
      choices: [
        { label: '第二線：**TPO-RA**（eltrombopag 或 romiplostim）或 **rituximab**（HBV 已陰性）', next: 'end_good' },
        { label: '長期 prednisone 20 mg 維持', next: 'end_ster',
          why: '長期類固醇副作用（骨鬆、糖尿病、感染、體重）大於好處。ITP 復發要換第二線：TPO-RA、rituximab、fostamatinib，或 splenectomy。' }
      ]
    },
    end_ster: {
      text: '一年後鍾小姐體重增加 12 公斤、出現 steroid-induced diabetes，PLT 還是在 30k 上下。',
      ending: {
        grade: 'ok',
        title: 'ITP 依賴類固醇',
        pearls: [
          '類固醇只有約 20% 持續緩解',
          '復發：TPO-RA、rituximab（先驗 HBV）、fostamatinib、splenectomy'
        ]
      }
    },
    end_good: {
      text: '開始 eltrombopag 後 PLT 穩定在 80k 以上，鍾小姐回到幼兒園上班。',
      ending: {
        grade: 'good',
        title: 'Newly diagnosed ITP，復發後第二線治療',
        pearls: [
          'ITP 是排除性診斷：smear、HIV、HCV、無 splenomegaly',
          'PLT < 20-30k 或出血 -> steroids（dex 40 mg x 4 d 或 prednisone）± IVIg',
          'PLT 輸注只用於危及生命的出血，與 IVIg 併用',
          'HBV 血清在 IVIg、rituximab 前抽'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho3-hit',
  chapter: 'HO3',
  title: '換膝蓋後第七天',
  patient: '69 歲女性 · 右膝 TKA 術後',
  summary: '術後一直打 heparin 預防血栓，血小板突然掉了一半，左腿也腫起來。',
  cards: ['ho-hit', 'ho-tcp'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '骨科病房會診。鄭女士七天前右膝置換，術後每天兩次 **UFH 5,000 U SC** 預防血栓。之前三個月內沒用過 heparin。',
        'PLT：術前 **265k** -> 術後第 3 天 240k -> 今天（第 7 天）**98k**。',
        '今天她說左小腿（非手術側）腫痛。'
      ],
      clue: ['69F；TKA 術後第 7 天；**UFH SC** 預防', '**PLT 265k -> 98k**（第 7 天，下降 63%）', '**左小腿腫痛**（非手術側）'],
      choices: [{ label: '算 4T score', next: 'fourT' }]
    },
    fourT: {
      text: '沒有其他明顯原因（無感染、無新藥、DIC 篩檢正常）。4T score 是多少？',
      choices: [
        { label: '下降 > 50% 且最低 >= 20k（2）+ 第 5-10 天（2）+ 疑似新血栓（左腿腫，至少 1，確診則 2）+ 無其他原因（2）= **7-8 分，高機率**', next: 'act' },
        { label: '4 分，中機率，先觀察', next: 'f_low' },
        { label: 'PLT 還有 98k，不算 thrombocytopenia，不用算', next: 'f_none' }
      ]
    },
    f_low: {
      text: '主治醫師一項一項重算。',
      feedback: '下降 63% 且最低 98k 是 2 分；第 7 天是 2 分；沒有其他原因是 2 分；新的腿部腫痛至少 1 分。這是高機率。',
      choices: [{ label: '重新計算', next: 'fourT' }]
    },
    f_none: {
      text: '主治醫師搖頭。',
      feedback: 'HIT 看的是**相對下降**。從 265k 掉到 98k（> 50%）即使仍 > 100k，也要懷疑 HIT。',
      choices: [{ label: '重新計算', next: 'fourT' }]
    },
    act: {
      text: '4T 高分。現在要做什麼？',
      checklist: {
        prompt: '醫囑：勾選你要開的項目',
        submit: '送出醫囑',
        revealLabel: '主治醫師補開',
        next: 'ac',
        options: [
          { id: 'stop', group: '停藥', label: '**停所有 heparin**（含 heparin flush、heparin-coated catheter）', key: true, reveal: true,
            result: '已停 UFH SC，並改 saline flush', clue: '已停所有 heparin',
            miss: '高機率 HIT 一定要立即停所有 heparin，包括 flush。' },
          { id: 'pf4', group: '檢驗', label: 'PF4-heparin antibody（ELISA）', key: true, reveal: true,
            result: '**OD 2.1（強陽性）**', clue: '**PF4-heparin Ab 強陽性**',
            miss: '高分要送 HIT 抗體確認。' },
          { id: 'sra', group: '檢驗', label: 'Serotonin release assay', result: '外送，**陽性**', clue: '**SRA (+)**' },
          { id: 'duplex', group: '影像', label: '雙下肢 venous duplex', key: true, reveal: true,
            result: '**左 popliteal-femoral DVT**；右側無', clue: '**Left popliteal-femoral DVT** -> HITT',
            miss: 'HIT 的病人都要做下肢超音波找血栓，這決定抗凝療程。' },
          { id: 'lmwh', group: '治療', label: '改用 enoxaparin 治療劑量', result: '已撤回',
            waste: 'LMWH 和 UFH 會交叉反應，HIT 禁用。' },
          { id: 'plt', group: '治療', label: '輸 1 單位 apheresis 血小板', result: '已撤回',
            waste: 'HIT 的出血少見，輸 PLT 可能加重血栓，避免。' },
          { id: 'warf', group: '治療', label: '開始 warfarin', result: '已撤回',
            waste: 'PLT 還沒恢復前開 warfarin，protein C 先下降，會造成 venous limb gangrene 或 skin necrosis。' },
          { id: 'cbc', group: '檢驗', label: '每日 CBC', result: '已排' }
        ]
      }
    },
    ac: {
      text: 'HITT 確定。要用什麼抗凝？',
      choices: [
        { label: '**Argatroban IV**（或 fondaparinux、DOAC）', next: 'warf' },
        { label: '因為 PLT 低怕出血，先不要抗凝', next: 'ac_none' },
        { label: '換成 LMWH', next: 'ac_lmwh' }
      ]
    },
    ac_none: {
      text: '主治醫師搖頭。',
      feedback: 'HIT 是**血栓**疾病，不是出血疾病。就算沒有血栓都要用非 heparin 抗凝；她已經有 DVT，更要抗凝。',
      choices: [{ label: '重新決定', next: 'ac' }]
    },
    ac_lmwh: {
      text: '主治醫師搖頭。',
      feedback: 'LMWH 與 UFH 有交叉反應，HIT 不能用。選 argatroban、bivalirudin、fondaparinux 或 DOAC。',
      choices: [{ label: '重新決定', next: 'ac' }]
    },
    warf: {
      text: [
        'Argatroban 開始後腿腫漸消。第 5 天 PLT 回到 **172k**。',
        '骨科問：「可以換成口服了嗎？要吃多久？」'
      ],
      choices: [
        { label: 'PLT > 150k，可換 **DOAC**（或 warfarin 與 argatroban **重疊至少 5 天**）；HITT 抗凝 **3-6 個月**；病歷註記 heparin 過敏', next: 'end_good' },
        { label: '開 warfarin，INR 一到 2 就停 argatroban；吃 1 個月', next: 'end_short',
          why: 'Warfarin 要與非 heparin 抗凝重疊約 5 天（argatroban 本身會拉高 INR）；有血栓的 HITT 要抗凝 3-6 個月，1 個月是無血栓 HIT 的最低療程。' }
      ]
    },
    end_short: {
      text: '停 argatroban 隔天她左腿又腫起來，duplex 顯示血栓延伸到 iliac vein。',
      ending: {
        grade: 'bad',
        title: 'HITT 過早停藥',
        pearls: [
          'PLT > 150k 才開 warfarin，與非 heparin 抗凝重疊約 5 天',
          'HITT 抗凝 3-6 個月；無血栓 HIT 至少 1 個月'
        ]
      }
    },
    end_good: {
      text: '她改吃 apixaban 三個月。出院病歷首頁寫著：**HIT (2026)，避免 heparin**。',
      ending: {
        grade: 'good',
        title: 'Heparin-induced thrombocytopenia with thrombosis',
        pearls: [
          '看相對下降：> 50%、第 5-10 天 -> 算 4T',
          '高分：停所有 heparin、送 PF4 Ab（± SRA）、做下肢 U/S',
          '非 heparin 抗凝（argatroban、bivalirudin、fondaparinux、DOAC），不論有無血栓',
          '避免 PLT 輸注；PLT > 150k 才開 warfarin'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho3-ttp',
  chapter: 'HO3',
  title: '講話突然不清楚',
  patient: '38 歲女性 · 會計',
  summary: '發燒、疲倦三天，今天早上講話含糊、右手無力，半小時後又好了。',
  cards: ['ho-tma'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。蕭小姐三天來疲倦、低燒 37.9 度。今天早上講話含糊、右手無力約 30 分鐘後恢復。',
        '急診 brain CT 正常。CBC：**PLT 11,000**、**Hb 7.4**。皮膚有散在 petechiae。'
      ],
      clue: ['38F；**暫時性 aphasia + 右手無力**', '低燒；petechiae', '**PLT 11k、Hb 7.4**'],
      choices: [{ label: '開檢查', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'smear', group: '血液', label: 'Peripheral smear', key: true, reveal: true,
            result: '**Schistocytes 6-8/hpf**；PLT 稀少', clue: '**Schistocytes 6-8/hpf**',
            miss: '貧血 + 血小板低，一定要看 smear 找 schistocytes。' },
          { id: 'hemo', group: '溶血', label: 'LDH、haptoglobin、bilirubin、retic', key: true, reveal: true,
            result: '**LDH 1,850**；haptoglobin 測不到；indirect bilirubin 2.6；retic 6%', clue: 'Hemolysis（LDH 1,850）',
            miss: '要確認溶血。' },
          { id: 'dat', group: '溶血', label: 'DAT', key: true, reveal: true,
            result: '陰性', clue: '**DAT (-)**（非 immune）',
            miss: 'DAT 陰性才是 MAHA。' },
          { id: 'coag', group: '凝血', label: 'PT、aPTT、fibrinogen、D-dimer', key: true, reveal: true,
            result: '**PT、aPTT、fibrinogen 正常**；D-dimer 輕度上升', clue: '**PT/aPTT、fibrinogen 正常**（不像 DIC）',
            miss: '凝血功能是區分 TTP 與 DIC 的關鍵。' },
          { id: 'cr', group: '其他', label: 'BUN、Cr、UA', key: true, reveal: true,
            result: 'Cr **1.3**；UA 微量蛋白尿', clue: 'Cr 1.3（輕度）',
            miss: '腎功能決定 TTP 與 HUS/CM-TMA 的方向。' },
          { id: 'adam', group: '其他', label: '**ADAMTS13 activity 與 inhibitor**（治療前採檢）', key: true, reveal: true,
            result: '外送，3 天後報告', clue: 'ADAMTS13 已送（治療前）',
            miss: '血漿置換前一定要先採 ADAMTS13 檢體，不然之後就驗不準。' },
          { id: 'hcg', group: '其他', label: 'Urine hCG', result: '陰性', clue: '未懷孕' },
          { id: 'trop', group: '其他', label: 'Troponin', result: '0.08（輕度上升）', clue: 'Troponin 輕度上升' },
          { id: 'hiv', group: '其他', label: 'HIV', result: '陰性' },
          { id: 'stool', group: '其他', label: '糞便 Shiga toxin', result: '（無腹瀉，未送）',
            waste: '沒有腹瀉，ST-HUS 可能性很低。' },
          { id: 'bm', group: '其他', label: 'Bone marrow', result: '（未執行）',
            waste: '診斷方向明確，骨髓會延誤治療。' }
        ]
      }
    },
    dx: {
      text: 'PLT 11k、MAHA、DAT 陰性、凝血正常、神經症狀、腎功能輕度異常。PLASMIC score 高分。這是？',
      choices: [
        { label: '**TTP**（高度懷疑，不等 ADAMTS13）', next: 'tx' },
        { label: 'DIC', next: 'dx_dic' },
        { label: 'Evans syndrome', next: 'dx_evans' }
      ]
    },
    dx_dic: {
      text: '主治醫師搖頭。',
      feedback: 'DIC 會消耗凝血因子：PT/aPTT 延長、fibrinogen 下降。她的凝血正常，這是 TMA，TTP 最可能。',
      choices: [{ label: '重新判讀', next: 'dx' }]
    },
    dx_evans: {
      text: '主治醫師搖頭。',
      feedback: 'Evans 是 AIHA + ITP，DAT 陽性、smear 是 spherocytes。她 DAT 陰性、有 schistocytes。',
      choices: [{ label: '重新判讀', next: 'dx' }]
    },
    tx: {
      text: '要怎麼處理？',
      choices: [
        { label: '**緊急 plasma exchange** + **glucocorticoids**；PEX 安排前先輸 **FFP**；考慮 **caplacizumab**、rituximab', next: 'plt' },
        { label: '等 ADAMTS13 報告確診再開始治療', next: 'tx_wait' },
        { label: 'PLT 太低先輸血小板，再做 PEX', next: 'tx_plt' },
        { label: '給 cryoprecipitate 與 FFP 支持就好', next: 'tx_dic' }
      ]
    },
    tx_wait: {
      text: '主治醫師立刻打斷。',
      feedback: '未治療的 TTP 死亡率很高。臨床（PLASMIC 高分）懷疑就要開始 PEX，ADAMTS13 檢體在治療前採好即可。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_plt: {
      text: '主治醫師搖頭。',
      feedback: 'TTP **禁止輸血小板**（除非危及生命出血），會加重微血管血栓。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_dic: {
      text: '主治醫師搖頭。',
      feedback: 'Cryo 是補 fibrinogen 的，她 fibrinogen 正常。TTP 需要 **plasma exchange** 移除抗體並補充 ADAMTS13；FFP 只是 PEX 延遲時的過渡。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    plt: {
      text: [
        '連續 PEX 加上 methylprednisolone 與 caplacizumab。三天後 ADAMTS13 報告：**activity < 5%**，**inhibitor 陽性**。',
        '第 6 天 PLT **165k**，LDH 正常化。'
      ],
      clue: '**ADAMTS13 < 5%、inhibitor (+)** -> immune TTP',
      choices: [
        { label: '加 **rituximab** 預防復發，PEX 逐步停止，門診追蹤 ADAMTS13', next: 'end_good' },
        { label: '既然好了，全部停藥', next: 'end_relapse',
          why: 'Immune TTP 的自體抗體還在，復發率高；rituximab 用於降低復發，並要追蹤 ADAMTS13 activity。' }
      ]
    },
    end_relapse: {
      text: '兩個月後蕭小姐又因為頭痛、PLT 20k 回到急診。',
      ending: {
        grade: 'ok',
        title: 'Immune TTP 復發',
        pearls: [
          'Rituximab 用於 TTP 二次預防',
          '追蹤 ADAMTS13 activity 預測復發'
        ]
      }
    },
    end_good: {
      text: '三個月後 ADAMTS13 activity 回到 62%。蕭小姐回去上班。',
      ending: {
        grade: 'good',
        title: 'Immune-mediated TTP',
        pearls: [
          'PLT 低 + MAHA + 凝血正常 -> TMA；五聯症不需全有',
          '先採 ADAMTS13 再治療；臨床懷疑就做 PEX',
          'PEX + steroids ± caplacizumab；rituximab 預防復發',
          '禁輸血小板'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho3-vwd',
  chapter: 'HO3',
  title: '拔智齒前的抽血',
  patient: '19 歲女性 · 大學生',
  summary: '要拔四顆智齒。牙醫看了病史，先轉來血液科。',
  cards: ['ho-bleed-approach', 'ho-vwd'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '血液科門診。許同學下個月要拔四顆智齒。',
        '牙醫問病史時，她說：「我月經量很多，每次都要用夜用加長，一天換 8 片，常常要兩週才乾淨。小時候流鼻血要壓很久。」',
        '媽媽說：「我生她的時候大出血，有輸血。」'
      ],
      clue: ['19F；**經血過多**、反覆鼻血', '**母親產後大出血**'],
      choices: [{ label: '問更多', next: 'hx' }]
    },
    hx: {
      text: '你想知道出血的型態。',
      choices: [
        { label: '問出血部位與時間（黏膜？關節？術後立即還是延遲？）', next: 'hx_pattern', once: true },
        { label: '問用藥', next: 'hx_drug', once: true },
        { label: '安排檢驗', next: 'labs', pin: true }
      ]
    },
    hx_pattern: {
      text: '「都是流鼻血、牙齦、月經，很容易瘀青。沒有關節腫過。小時候拔牙，當下就流很久。」',
      clue: '**黏膜**出血；**立即**出血；無 hemarthrosis',
      feedback: '黏膜出血、立即出血 -> primary hemostasis（血小板或 vWF）問題，不像 hemophilia。',
      choices: [{ label: '回到問診', next: 'hx' }]
    },
    hx_drug: {
      text: '經痛時會吃 ibuprofen。沒有其他藥。',
      clue: '經痛時用 **NSAID**',
      choices: [{ label: '回到問診', next: 'hx' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'cbc', group: '基本', label: 'CBC、ferritin', key: true, reveal: true,
            result: 'Hb 10.8，MCV 74；PLT 245k；**ferritin 9**', clue: 'PLT 正常；**缺鐵性貧血**（ferritin 9）',
            miss: '經血過多常合併缺鐵，PLT 數也要知道。' },
          { id: 'pt', group: '凝血', label: 'PT、aPTT', key: true, reveal: true,
            result: 'PT 正常；**aPTT 38 秒（輕度延長）**', clue: 'aPTT 輕度延長',
            miss: 'PT/aPTT 是出血評估的基本。' },
          { id: 'vwf', group: '凝血', label: '**vWF:Ag、vWF activity（ristocetin cofactor）、FVIII**', key: true, reveal: true,
            result: '**vWF:Ag 28%**；**vWF activity 25%**；FVIII 34%', clue: '**vWF:Ag 28%、activity 25%**（比值正常）；FVIII 34%',
            miss: '年輕女性黏膜出血 + 經血過多 + 家族史，一定要驗 vWF panel。' },
          { id: 'abo', group: '凝血', label: 'ABO blood type', result: 'O 型', clue: 'O 型（vWF 本來就較低）' },
          { id: 'multi', group: '凝血', label: 'vWF multimer analysis', result: '所有 multimers 存在，量下降', clue: 'Multimers 分布正常（量少）' },
          { id: 'f9', group: '凝血', label: 'Factor IX', result: '正常',
            waste: '女性、黏膜出血，不像 hemophilia B。' },
          { id: 'tsh', group: '其他', label: 'TSH', result: '正常', clue: '甲狀腺功能正常（排除 acquired VWD）' },
          { id: 'bm', group: '其他', label: 'Bone marrow', result: '（未執行）',
            waste: '出血疾病的評估不需要骨髓。' }
        ]
      }
    },
    dx: {
      text: 'vWF:Ag 與 activity 都下降（比值正常），multimers 分布正常，FVIII 輕度下降。',
      choices: [
        { label: '**Type 1 VWD**（部分量缺乏）', next: 'plan' },
        { label: 'Type 2 VWD', next: 'dx_2' },
        { label: 'Hemophilia A carrier', next: 'dx_hemo' }
      ]
    },
    dx_2: {
      text: '主治醫師搖頭。',
      feedback: 'Type 2 是質的異常：activity/Ag 比值下降或 multimers 異常（例如缺大 multimer）。她兩者等比例下降、multimers 正常，是 type 1。',
      choices: [{ label: '重新判讀', next: 'dx' }]
    },
    dx_hemo: {
      text: '主治醫師搖頭。',
      feedback: 'Hemophilia carrier 是 FVIII 下降但 vWF 正常。她 vWF 本身下降，FVIII 低是因為 vWF 是 FVIII 的載體。',
      choices: [{ label: '重新判讀', next: 'dx' }]
    },
    plan: {
      text: '拔四顆智齒要怎麼準備？',
      choices: [
        { label: '先做 **DDAVP challenge** 確認有效；術前給 **DDAVP** + 術後 **TXA**；停 NSAID；補鐵', next: 'end_good' },
        { label: '直接術前輸血小板', next: 'p_plt' },
        { label: '術前預防性輸 vWF concentrate', next: 'p_conc' },
        { label: '用 ibuprofen 止痛就好，VWD 不影響拔牙', next: 'p_nsaid' }
      ]
    },
    p_plt: {
      text: '主治醫師搖頭。',
      feedback: '她的血小板數量和功能正常，問題在 vWF。Type 1 首選 DDAVP 釋放內皮儲存的 vWF。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    p_conc: {
      text: '主治醫師搖頭。',
      feedback: 'vWF concentrate 是嚴重出血、type 3 或 DDAVP 無效時用。Type 1 做小手術，DDAVP（先確認有效）加 TXA 就足夠。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    p_nsaid: {
      text: '主治醫師搖頭。',
      feedback: 'NSAID 抑制血小板功能，會讓 VWD 出血更嚴重，術後改用 acetaminophen。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    end_good: {
      text: 'DDAVP challenge 後 vWF activity 上升到 92%。拔牙順利，術後漱 TXA，沒有出血。婦產科之後用 hormonal therapy 控制經血量。',
      ending: {
        grade: 'good',
        title: 'Type 1 von Willebrand disease',
        pearls: [
          '黏膜出血、立即出血 -> primary hemostasis',
          'VWD 是最常見的遺傳性出血疾病；type 1 約 85%',
          'Dx：vWF:Ag、activity、FVIII、multimers',
          'Type 1：DDAVP（先做 challenge）、TXA；嚴重出血用 vWF concentrate；避免 NSAID'
        ]
      }
    }
  }
});
