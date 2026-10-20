// ID 13 Fungi, Nocardia, Actinomyces (Table 14-13). Endemic mycoses (histo, blasto, cocci) omitted as US-specific.
// Source: Washington Manual Ch 14 (source/Washington ID.txt, lines 1391-1681) + Ch 15 antifungal agents.

RPG.registerCards('ID13', [
  {
    id: 'id-fungal-path',
    title: '黴菌感染 致病機轉',
    points: [
      '**酵母菌**（Candida、Cryptococcus）與**黴菌**（Aspergillus、Mucorales）防禦機轉不同',
      '**Candida**：腸道與生殖道正常菌叢；抗生素、黏膜破損、導管、TPN、腹部手術讓它入血；**黏膜**念珠菌靠 **cell-mediated immunity**（AIDS 的鵝口瘡、食道炎），**侵襲性**念珠菌靠 **neutrophils**',
      '**Cryptococcus**：吸入土壤、鴿糞中的菌；厚 **polysaccharide capsule** 抗吞噬，偏好 **CNS** -> 腦膜炎；capsule 阻塞蜘蛛網膜顆粒 -> **顱內壓上升**；**CrAg** 驗的就是這個 capsule',
      '**Aspergillus**：吸入孢子；靠 alveolar macrophage 與 **neutrophils** 清除 -> **長期嗜中性球低下、HSCT、高劑量類固醇**時侵入血管 -> **血栓、梗塞**（CT halo sign、空洞）；**galactomannan** 是細胞壁成分',
      '**Mucorales**：同樣**侵犯血管**、組織壞死極快（黑色 eschar）；**酮酸血症**時酸性環境釋放鐵、抑制 neutrophil -> **DKA、鐵過量、高劑量類固醇**好發；**voriconazole 無效**',
      '**Sporothrix**：玫瑰刺、土壤**直接植入**皮膚，沿淋巴管擴散（sporotrichoid）',
      '**Echinocandin** 抑制 β-(1,3)-glucan synthase（細胞壁）；**azoles** 抑制 ergosterol 合成；**amphotericin** 結合 ergosterol 破壞細胞膜'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-candida',
    title: 'Candidiasis（Table 14-13）',
    points: [
      '最常見的侵襲性黴菌感染；**C. albicans** 最多；**C. glabrata** 對 azole 敏感度低（要 MIC）；**C. krusei** fluconazole 天然抗藥',
      '**Candida auris**：多重抗藥（**約 90% fluconazole 抗藥**、約 30% amphotericin 抗藥、< 5% echinocandin 抗藥）；**容易被誤認為 C. haemulonii**；感染或帶菌要**接觸隔離**',
      '侵襲性的危險因子：**抗生素、neutropenia、近期腸胃手術、TPN、細胞毒性藥物、異物**；美國院內 BSI 第一名',
      '併發症：皮膚病灶、**眼睛**、心內膜炎、骨髓炎',
      '黏膜診斷多靠臨床，KOH 確認；頑固病例做培養'
    ],
    table: {
      head: ['類型', '治療'],
      rows: [
        ['**Thrush**', 'Clotrimazole troche、nystatin，或 **fluconazole 100-200 mg qd x 7-14 d**'],
        ['**Esophageal**', '**Fluconazole 200-400 mg qd x 14-21 d**'],
        ['**Vaginal**', '局部 azole 3-7 d 或 **fluconazole 150 mg 單次**；常復發 -> 150 mg/週 x 6 個月'],
        ['**侵襲性**', '經驗性 **echinocandin**；依菌種與藥敏標靶；**至少 14 天**；轉移病灶或持續 neutropenia 延長'],
        ['Candidemia', '**拔除 CVC**；會診感染科']
      ]
    },
    refs: ['CID 2016;62:e1（IDSA candidiasis 2016）']
  },
  {
    id: 'id-crypto',
    title: 'Cryptococcosis',
    points: [
      '**C. neoformans**（土壤、腐木、鴿糞）；C. gattii（尤加利樹）',
      '主要是**腦膜**（頭痛、意識改變）與**肺**；播散可到皮膚（像 molluscum 的臍凹病灶）、骨、前列腺',
      '**細胞免疫缺損**好發；**末期肝病**也會、死亡率更高',
      '診斷：培養與組織特殊染色是 gold standard；**CrAg**（血清、CSF）高敏感高特異',
      '**CNS 病灶、血液培養陽性、血清 CrAg 高、嚴重肺病** -> 視為**播散**，要 **LP**；**一定要量 opening pressure**'
    ],
    table: {
      head: ['情境', '治療'],
      rows: [
        ['非腦膜、局部、輕中度', '**Fluconazole 400 mg qd x 6-12 個月**'],
        ['**腦膜、播散、中重度** -> induction', '**Liposomal AmB 3-4 mg/kg/d + flucytosine 100 mg/kg/d，至少 2 週**'],
        ['Consolidation', '**Fluconazole 400 mg qd x 8 週**'],
        ['Continuation', '**Fluconazole 200 mg qd，至少 12 個月**'],
        ['**OP >= 25 cmH2O**', '每次放掉 50%（最多 30 mL）或到正常（<= 18）；**每天重複 LP** 直到正常；持續高壓 -> lumbar drain']
      ]
    },
    note: 'ICP 處理非常關鍵；會診感染科與降低 90 天死亡率相關。Flucytosine 要監測濃度（1 h 後 peak 50-100 μg/mL），腎功能差調整。',
    refs: ['CID 2010;50:291（IDSA cryptococcal disease 2010）']
  },
  {
    id: 'id-asperg',
    title: 'Aspergillosis',
    points: [
      '**慢性肺麴菌症**：原有**囊泡性肺病**；影像典型 + **Aspergillus IgG**；可有 **aspergilloma（fungus ball）**',
      '**侵襲性麴菌症（IA）**：血管侵犯、血栓、梗塞，可血行播散；嚴重免疫低下，尤其 **allogeneic HSCT**',
      '肺 IA：咳嗽、發燒、喘、**咳血**；鼻竇 IA：發燒、頭痛、鼻竇痛、**黑色壞死 eschar**',
      '懷疑就做**支氣管鏡**（或鼻竇內視鏡）；病理見 **septate hyphae、45° 分支**',
      '**血清與 BAL galactomannan** 準確，可在高風險病人前瞻追蹤',
      'CT：結節、**halo sign**（結節周圍毛玻璃）、空洞',
      '**ABPA**：慢性反覆的呼吸道症候群，**Aspergillus IgE** 上升'
    ],
    table: {
      head: ['類型', '治療'],
      rows: [
        ['Aspergilloma、慢性肺', '嚴重咳血 -> **手術切除或動脈栓塞**；進展性有症狀 -> voriconazole'],
        ['**侵襲性肺 IA**', '**Voriconazole**，至少 6-12 週，直到病灶與免疫抑制改善'],
        ['侵襲性鼻竇', 'AmB 或 voriconazole + **手術清創**（常需要）'],
        ['**ABPA**', 'Itraconazole 或間歇類固醇'],
        ['高風險預防', '**Posaconazole**'],
        ['尚未確診的黴菌肺炎或鼻竇炎', '先 **AmB**（同時涵蓋 Mucorales）']
      ]
    },
    note: '**Voriconazole** 要做 TDM（trough 1-5.5 μg/mL）；CYP2C19/2C9/3A4 交互作用多（**禁用 rifampin、rifabutin、carbamazepine、sirolimus**）；短暫**視覺異常**、幻覺、光敏感。',
    refs: ['CID 2016;63:e1（IDSA aspergillosis 2016）']
  },
  {
    id: 'id-mucor',
    title: 'Mucormycosis',
    points: [
      'Mucor、**Rhizopus**、Cunninghamella；**鼻竇（rhino-orbital-cerebral）**、肺、皮膚、腸胃、播散',
      '危險因子：免疫抑制、**鐵過量**、**高劑量類固醇**、穿刺外傷、**控制不良的糖尿病，尤其 DKA**',
      '**血管侵犯**與血栓 -> 組織壞死進展極快',
      '診斷：**組織培養**與銀染（小心不要破壞黴菌結構）；頭頸部做 CT 或 MRI；懷疑侵襲性鼻竇炎做內視鏡',
      '**積極手術清創（乾淨邊緣）+ 高劑量 AmB**直到改善；之後 **posaconazole 或 isavuconazole**',
      '**Voriconazole 對 Mucorales 無效**',
      '免疫抑制且播散者死亡率非常高'
    ]
  },
  {
    id: 'id-sporo',
    title: 'Sporotrichosis',
    points: [
      '**S. schenckii**：土壤或植物物質**外傷植入**（**玫瑰園藝**）；多為職業暴露；也可由**貓**或挖土動物傳染',
      '**Lymphocutaneous**：原發病灶後沿淋巴管往近端出現結節（**sporotrichoid**、nodular lymphangitis）',
      'DDx：S. aureus、**NTM（M. marinum）**、tularemia、**Nocardia**',
      '肺部與播散型罕見（吸入）',
      '診斷：培養，或組織、體液中看到酵母',
      '**皮膚/淋巴皮膚型：itraconazole 200 mg qd x 3-6 個月**；無反應 -> itraconazole 加量或加 SSKI',
      '嚴重全身型：先 AmB，之後 itraconazole 至少 12 個月'
    ],
    note: 'Itraconazole：膠囊需要胃酸（與食物或酸性飲料一起吃），液劑空腹吸收較好；要做 TDM（> 1 μg/mL）；可能造成或加重心衰竭。',
    refs: ['CID 2007;45:1255（IDSA sporotrichosis）']
  },
  {
    id: 'id-nocardia-path',
    title: 'Nocardia 與 Actinomyces 致病機轉',
    points: [
      '兩者都是 **Gram-positive branching bacilli**，常被誤認為黴菌',
      '**Nocardia**：土壤中的**需氧**菌，吸入 -> 肺；細胞壁含 **mycolic acid** -> **modified AFB 陽性**；靠 **cell-mediated immunity** 清除 -> 器官移植、長期類固醇、HIV 好發；容易**血行散播到腦**',
      '**Actinomyces**：**口腔、腸道正常菌叢**、**微需氧/厭氧**；黏膜破損（**拔牙**、外傷、手術、子宮內避孕器）後侵入；**不限免疫低下**',
      'Actinomyces 會**穿越組織平面**（不受筋膜限制）形成硬塊與廔管；膿中可見 **sulfur granules**（菌叢聚集）；AFB 陰性',
      '慢性、緻密、血流差的病灶 -> 需要**長療程**'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-nocardia',
    title: 'Nocardiosis 與 actinomycosis',
    table: {
      head: ['', 'Nocardia', 'Actinomyces'],
      rows: [
        ['宿主', '**細胞免疫缺損**', '**不限免疫低下**'],
        ['部位', '**肺**最常見；常散播到**腦（膿瘍）**；皮膚 nodular lymphangitis', '**口頸面**最常見（下顎附近）；肺、腸胃；罕見 CNS、骨'],
        ['表現', '急性、亞急性或慢性；肺浸潤、結節、積水、空洞；腦 ring-enhancing', '慢性硬塊 + **穿越組織平面的廔管**'],
        ['診斷', '痰或組織 Gram stain + 培養（含 **AFB**）；陽性率低常需多次', '病理 Gram-positive branching bacilli，或引流物中 **sulfur granules**'],
        ['染色', '**Modified AFB 陽性**、需氧生長', 'AFB 陰性'],
        ['治療', '皮膚：**TMP-SMX**；**嚴重（含 CNS）**：2-3 藥 induction（**TMP-SMX、amikacin、imipenem、ceftriaxone、linezolid**）**4-6 週**，再口服 **6-12 個月**；依藥敏', '**Penicillin G 18-24 MU/d IV x 4-6 週**，再 **penicillin VK 1 g tid x 6-12 個月**；替代 ceftriaxone、doxycycline；PCN 過敏 clindamycin 或 doxycycline'],
        ['其他', 'TMP-SMX 是首選，播散性要合併；可作為抑制或預防', '手術或引流可能有幫助']
      ]
    },
    refs: ['Infection 2010;38:89（nocardiosis）', 'Clin Microbiol Rev 2015;28:419（Actinomyces）']
  }
]);

RPG.registerCase({
  id: 'id13-crypto',
  chapter: 'ID13',
  title: '換腎後的頭痛',
  patient: '54 歲男性 · 腎臟移植 2 年',
  summary: '頭痛三週，越來越厲害，最近視力模糊、反應變慢。',
  cards: ['id-fungal-path', 'id-crypto', 'id-csf', 'id-antifungal'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '移植門診轉急診。高先生腎臟移植兩年，服用 tacrolimus、MMF、prednisone。**頭痛三週**、低燒，最近**視力模糊**、反應變慢。家裡頂樓養鴿子。',
        'T 37.9°C。輕度意識遲鈍，**雙側 papilledema**，頸部輕微僵硬。',
        '血清 **CrAg 陽性（1:1,024）**。Brain CT：無 mass effect。'
      ],
      clue: ['54M；腎移植，**tacrolimus + MMF + prednisone**', '頭痛 3 週、視力模糊、**papilledema**', '養**鴿子**', '**血清 CrAg 1:1,024**'],
      choices: [{ label: '評估', next: 'lp' }]
    },
    lp: {
      text: 'CT 沒有 mass effect。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'lp', group: '檢查', label: '**LP，量 opening pressure**；cell count、glucose、protein、CSF CrAg、fungal culture', key: true, reveal: true,
            result: '**OP 38 cmH2O**；WBC 60（lymph 85%）；glucose 28；protein 110；**CSF CrAg 1:512**；India ink (+)', clue: '**OP 38**；CSF CrAg (+) -> **cryptococcal meningitis**',
            miss: '血清 CrAg 陽性要做 LP 排除 CNS 侵犯，**一定要量 opening pressure**。' },
          { id: 'bcx', group: '培養', label: '血液培養（含 fungal）', key: true, reveal: true,
            result: '**Cryptococcus neoformans**', clue: '血液培養 Cryptococcus',
            miss: '血液培養陽性也代表播散性疾病。' },
          { id: 'cxr', group: '影像', label: 'Chest CT', result: '右下葉兩顆小結節' },
          { id: 'hiv', group: '檢驗', label: 'HIV', result: '陰性' }
        ]
      }
    },
    tx: {
      text: '播散性 cryptococcosis 合併腦膜炎，OP 38。',
      choices: [
        { label: '**Liposomal AmB 3-4 mg/kg/d + flucytosine 100 mg/kg/d（induction >= 2 週）**；**治療性 LP** 放到 OP 下降 50% 或正常，**每天重複**直到正常', next: 'later' },
        { label: 'Fluconazole 800 mg qd', next: 't_fluc' },
        { label: 'AmB + flucytosine；頭痛用止痛藥和 mannitol', next: 't_icp' }
      ]
    },
    t_fluc: {
      text: '主治醫師搖頭。',
      feedback: '腦膜或播散性、中重度要先用 **liposomal AmB + flucytosine** induction；fluconazole 是之後的 consolidation 與 continuation。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_icp: {
      text: '主治醫師搖頭。',
      feedback: 'Cryptococcal 腦膜炎的顱內壓上升要用**反覆 LP 放 CSF**處理（每次放到下降 50% 或 <= 18 cmH2O）；持續高壓放 lumbar drain。這是降低死亡率的關鍵。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    later: {
      text: '兩週後 CSF 培養轉陰，OP 正常，意識清楚。接下來？',
      choices: [
        { label: '**Fluconazole 400 mg qd x 8 週**（consolidation），之後 **200 mg qd 至少 12 個月**；**監測 tacrolimus 濃度**（fluconazole 會升高它）', next: 'end_good' },
        { label: '培養轉陰就停藥', next: 'l_stop' }
      ]
    },
    l_stop: {
      text: '主治醫師搖頭。',
      feedback: 'Induction 後要 **consolidation 8 週**，再 **continuation 至少 12 個月**，否則復發率很高。',
      choices: [{ label: '重新決定', next: 'later' }]
    },
    end_good: {
      text: '移植科調降 tacrolimus。高先生完成療程，腎功能穩定，沒有復發。',
      ending: {
        grade: 'good',
        title: 'Disseminated cryptococcosis in a transplant recipient',
        pearls: [
          '血清 CrAg 陽性、血培養陽性、CNS 症狀 -> 播散 -> LP 一定要量 OP',
          'Induction：L-AmB + flucytosine >= 2 週；consolidation fluconazole 400 x 8 週；continuation 200 >= 12 個月',
          'OP >= 25：每天治療性 LP；持續高壓放 lumbar drain',
          'Azoles 會升高 calcineurin inhibitor 濃度'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id13-asperg',
  chapter: 'ID13',
  title: '化療後一直退不了的燒',
  patient: '46 歲女性 · AML 誘導化療',
  summary: '嗜中性球低下第 14 天，廣效抗生素打了一週還在燒，開始咳血。',
  cards: ['id-fungal-path', 'id-asperg', 'id-antifungal'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '血液科病房。邵小姐 AML 誘導化療後 **ANC < 100 已經 14 天**。發燒用 cefepime，後來加 vancomycin，一週後仍每天燒到 39°C。',
        '今天咳嗽、胸膜性胸痛、**咳血**。',
        'Chest CT：左上葉 2.5 cm 結節，**周圍一圈毛玻璃（halo sign）**。'
      ],
      clue: ['46F；AML，**長期嚴重 neutropenia**', '廣效抗生素下**持續發燒**', '咳血；**結節 + halo sign**'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '你懷疑侵襲性麴菌症。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'gm', group: '檢驗', label: '**血清 galactomannan**', key: true, reveal: true,
            result: '**陽性**（index 1.8）', clue: '**Serum galactomannan (+)**',
            miss: 'Galactomannan 是 IA 的準確指標。' },
          { id: 'bronch', group: '檢查', label: '**支氣管鏡 BAL**（galactomannan、fungal culture）', key: true, reveal: true,
            result: 'BAL galactomannan 3.2；培養 **Aspergillus fumigatus**', clue: 'BAL：**A. fumigatus**',
            miss: '懷疑肺 IA 要做支氣管鏡取得微生物證據。' },
          { id: 'sinus', group: '理學', label: '鼻竇與上顎檢查', result: '無黑色 eschar' },
          { id: 'bdg', group: '檢驗', label: 'Beta-D-glucan', result: '陽性' }
        ]
      }
    },
    tx: {
      text: '侵襲性肺麴菌症。',
      choices: [
        { label: '**Voriconazole**（loading 6 mg/kg q12h x 2 劑，之後 4 mg/kg q12h）；**TDM**；檢查交互作用', next: 'tdm' },
        { label: 'Fluconazole', next: 't_fluc' },
        { label: 'Micafungin', next: 't_mica' }
      ]
    },
    t_fluc: {
      text: '主治醫師搖頭。',
      feedback: '**Fluconazole 對 Aspergillus 沒有活性**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_mica: {
      text: '主治醫師搖頭。',
      feedback: '侵襲性麴菌症首選 **voriconazole**（優於 amphotericin）；echinocandin 用於頑固或救援治療。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tdm: {
      text: [
        '第 5 天 voriconazole trough **0.6 μg/mL**，她說晚上看到窗外有人影、看東西有一圈光暈。',
        '藥師提醒：她的抗癲癇藥是 **carbamazepine**（之前顱內出血後開的）。'
      ],
      clue: ['Voriconazole trough **0.6**（低）', '視覺異常', '併用 **carbamazepine**'],
      choices: [
        { label: '**Carbamazepine 與 voriconazole 禁忌併用**（大幅降低 voriconazole 濃度）：換掉 carbamazepine（例如 levetiracetam），再依 TDM 調整到 1-5.5', next: 'end_good' },
        { label: '濃度太低就把 voriconazole 劑量加倍', next: 'd_double' },
        { label: '有視覺異常，換 fluconazole', next: 'd_fluc' }
      ]
    },
    d_double: {
      text: '主治醫師搖頭。',
      feedback: 'Carbamazepine 是強力誘導劑，和 voriconazole **禁忌併用**；加倍劑量也追不上。先處理交互作用。',
      choices: [{ label: '重新決定', next: 'tdm' }]
    },
    d_fluc: {
      text: '主治醫師搖頭。',
      feedback: 'Voriconazole 的**短暫視覺異常**很常見，不需要因此停藥；fluconazole 對 Aspergillus 無效。',
      choices: [{ label: '重新決定', next: 'tdm' }]
    },
    end_good: {
      text: '換藥後 voriconazole trough 2.4。嗜中性球恢復後，結節逐漸縮小。',
      ending: {
        grade: 'good',
        title: 'Invasive pulmonary aspergillosis',
        pearls: [
          '長期 neutropenia、HSCT -> IA；CT halo sign、空洞；galactomannan',
          'Voriconazole 首選；至少 6-12 週到病灶與免疫抑制改善',
          'Voriconazole TDM 1-5.5；禁用 rifampin、rifabutin、carbamazepine、sirolimus',
          'Fluconazole 對 Aspergillus 無效'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id13-mucor',
  chapter: 'ID13',
  title: '鼻子裡的黑色痂皮',
  patient: '49 歲男性 · 糖尿病酮酸中毒',
  summary: 'DKA 住院第二天，左臉腫、眼睛睜不開，鼻腔裡有黑色的痂。',
  cards: ['id-fungal-path', 'id-mucor', 'id-asperg'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        'ICU 會診。范先生糖尿病沒有規則治療，因 **DKA** 住院。第二天左臉頰腫痛、**左眼眼瞼腫到睜不開**、複視、左臉麻。',
        '鼻腔內鏡：左鼻甲有**黑色壞死痂皮（eschar）**；上顎也有一小塊黑色。',
        'MRI：左上頷竇、篩竇病變延伸到**眼眶**。'
      ],
      clue: ['49M；**DKA**', '**黑色 eschar**（鼻甲、上顎）', '眼眶侵犯（眼瞼腫、複視）'],
      choices: [{ label: '處置', next: 'tx' }]
    },
    tx: {
      text: 'Rhino-orbital mucormycosis，進展以小時計。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'later',
        options: [
          { id: 'surg', group: '處置', label: '**緊急耳鼻喉科（與眼科）手術清創**，清到乾淨邊緣', key: true, reveal: true,
            result: '清除左側鼻竇與部分上顎壞死組織', clue: '已手術清創',
            miss: 'Mucormycosis 一定要**積極手術清創**，光靠藥物不夠。' },
          { id: 'amb', group: '用藥', label: '**高劑量 liposomal AmB**', key: true, reveal: true,
            result: '已開始', clue: 'L-AmB 高劑量',
            miss: 'Mucormycosis 初始治療是 amphotericin B。' },
          { id: 'path', group: '檢驗', label: '**組織病理（銀染）與培養**，小心處理檢體', key: true, reveal: true,
            result: '寬、少分隔、**直角分支**的菌絲；培養 **Rhizopus**', clue: '**Rhizopus**（Mucorales）',
            miss: '組織培養與銀染確診，處理時不要破壞菌絲結構。' },
          { id: 'dka', group: '治療', label: '**矯正 DKA**', key: true, reveal: true,
            result: '胰島素與輸液', clue: 'DKA 矯正中',
            miss: '酮酸中毒是 Mucorales 生長的溫床，一定要矯正。' },
          { id: 'vori', group: '用藥', label: 'Voriconazole', result: '已撤回',
            waste: '**Voriconazole 對 Mucorales 無效**，甚至與 mucormycosis 突破感染相關。' }
        ]
      }
    },
    later: {
      text: '經過三次清創與四週 AmB，病灶穩定，腎功能開始變差。下一步？',
      choices: [
        { label: '改口服 **posaconazole 或 isavuconazole** 繼續治療', next: 'end_good' },
        { label: '改 voriconazole', next: 'l_vori' }
      ]
    },
    l_vori: {
      text: '主治醫師搖頭。',
      feedback: 'Voriconazole 對 Mucorales 無效。AmB induction 之後的替代是 **posaconazole 或 isavuconazole**。',
      choices: [{ label: '重新決定', next: 'later' }]
    },
    end_good: {
      text: '范先生失去了左眼視力，但存活下來，糖尿病規則控制。',
      ending: {
        grade: 'good',
        title: 'Rhino-orbital mucormycosis',
        pearls: [
          'DKA、鐵過量、高劑量類固醇、免疫抑制 -> mucormycosis',
          '黑色 eschar、快速壞死；組織銀染與培養',
          '積極清創（乾淨邊緣）+ 高劑量 AmB；之後 posaconazole 或 isavuconazole',
          'Voriconazole 無效'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id13-candida',
  chapter: 'ID13',
  title: '吞東西像刀割',
  patient: '71 歲女性 · COPD',
  summary: '肺炎住院用抗生素和類固醇，嘴巴長白斑，吞東西胸口痛。',
  cards: ['id-fungal-path', 'id-candida'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。洪奶奶 COPD 急性發作合併肺炎，用 **amox-clav** 與 **prednisone 40 mg** 第 8 天，平常也用吸入型類固醇。',
        '這兩天**嘴巴長白斑**、刮得掉；**吞東西時胸骨後痛**。'
      ],
      clue: ['71F；抗生素 + **全身與吸入型類固醇**', '**Thrush**（可刮除的白斑）', '**Odynophagia**'],
      choices: [{ label: '處置', next: 'tx' }]
    },
    tx: {
      text: 'Thrush 合併吞嚥痛，臨床診斷 esophageal candidiasis。',
      choices: [
        { label: '**Fluconazole 200-400 mg qd x 14-21 天**；評估免疫狀態（驗 **HIV**）；吸入類固醇後漱口', next: 'end_good' },
        { label: 'Nystatin 漱口', next: 't_nys' },
        { label: '先做胃鏡切片確認再治療', next: 't_egd' }
      ]
    },
    t_nys: {
      text: '主治醫師搖頭。',
      feedback: '局部治療只適合**單純 thrush**。有吞嚥痛、食道侵犯要用**全身性 fluconazole** 14-21 天。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_egd: {
      text: '主治醫師搖頭。',
      feedback: 'Thrush + odynophagia 可以先**經驗性 fluconazole**；治療無效（可能是非 albicans、HSV、CMV）再做內視鏡。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '三天後吞嚥痛改善。HIV 陰性。出院前衛教吸藥後漱口。',
      ending: {
        grade: 'good',
        title: 'Esophageal candidiasis',
        pearls: [
          'Thrush：局部 clotrimazole、nystatin 或 fluconazole 100-200 mg 7-14 d',
          'Esophageal：fluconazole 200-400 mg 14-21 d；無效再內視鏡',
          'C. glabrata 要 MIC；C. krusei fluconazole 天然抗藥；C. auris 多重抗藥',
          '不明原因的黏膜念珠菌 -> 想 HIV'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id13-nocardia',
  chapter: 'ID13',
  title: '肺結節加上腦部病灶',
  patient: '63 歲男性 · 長期類固醇',
  summary: '皮肌炎吃 prednisone 半年，咳嗽發燒兩週，今天開始講話不清楚。',
  cards: ['id-nocardia-path', 'id-nocardia', 'id-abscess'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '風濕科病房會診。邵先生因皮肌炎服用 **prednisone 30 mg qd 半年**。兩週來咳嗽、發燒，今天開始**講話不清楚**、右手無力。',
        'Chest CT：右上葉 3 cm 結節**合併空洞**。Brain MRI：**兩處 ring-enhancing lesions**。'
      ],
      clue: ['63M；**長期 prednisone**', '肺結節 + 空洞', '**多發腦部 ring-enhancing lesions**'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '細胞免疫缺損 + 肺 + 腦。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'sp', group: '檢驗', label: '**痰或 CT-guided 切片 Gram stain、modified AFB、培養（多次）**', key: true, reveal: true,
            result: 'Gram-positive **branching** beaded bacilli；**modified AFB 陽性**；培養 **Nocardia**', clue: '**Nocardia**（branching、modified AFB +）',
            miss: 'Nocardia 要 Gram stain + AFB 染色與培養，陽性率低常需多次。' },
          { id: 'tb', group: '檢驗', label: '痰 TB NAAT', result: '陰性' },
          { id: 'crag', group: '檢驗', label: '血清 CrAg、galactomannan', result: '陰性' },
          { id: 'hiv', group: '檢驗', label: 'HIV', result: '陰性' }
        ]
      }
    },
    tx: {
      text: '播散性 nocardiosis（肺 + CNS）。',
      choices: [
        { label: '**Induction：TMP-SMX + imipenem**（± amikacin）**4-6 週**，再口服 **TMP-SMX 6-12 個月**；依藥敏調整；盡量減少類固醇', next: 'end_good' },
        { label: 'TMP-SMX 單用 2 週', next: 't_short' },
        { label: 'Ceftriaxone + metronidazole + vancomycin，當一般腦膿瘍', next: 't_abscess' }
      ]
    },
    t_short: {
      text: '主治醫師搖頭。',
      feedback: '**嚴重或 CNS** nocardiosis 要 **2-3 藥 induction 4-6 週**，之後口服 **6-12 個月**。TMP-SMX 單用適合皮膚型。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_abscess: {
      text: '主治醫師搖頭。',
      feedback: '免疫低下的腦膿瘍要想到 **Nocardia**、黴菌、Listeria、TB。這裡已經培養出 Nocardia，用 TMP-SMX 為主的合併治療。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '六週後腦部病灶縮小，改口服 TMP-SMX 一年，之後作為預防。',
      ending: {
        grade: 'good',
        title: 'Disseminated nocardiosis（lung + brain）',
        pearls: [
          '細胞免疫缺損 + 肺 + 腦膿瘍 -> Nocardia',
          'Branching GPR、modified AFB 陽性、需氧',
          '嚴重或 CNS：2-3 藥 induction 4-6 週，口服 6-12 個月；TMP-SMX 首選'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id13-actino',
  chapter: 'ID13',
  title: '下巴的硬塊',
  patient: '42 歲男性 · 拔牙後',
  summary: '拔智齒兩個月後，下巴長了一塊硬塊，皮膚破了一個洞流出黃色顆粒。',
  cards: ['id-nocardia-path', 'id-nocardia'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '口腔外科轉介。賴先生兩個月前拔了左下智齒。之後左下顎**慢慢腫起一個很硬的塊**，不太痛。最近皮膚**破了一個洞**，流出帶**黃色小顆粒**的膿。',
        '沒有發燒。免疫正常。'
      ],
      clue: ['42M；**拔牙後** 2 個月', '下顎**木頭般硬塊** + **廔管**', '膿中**黃色顆粒**'],
      choices: [{ label: '評估', next: 'dx' }]
    },
    dx: {
      text: '黃色顆粒送病理：**Gram-positive branching bacilli**，形成 **sulfur granules**，AFB 陰性。',
      choices: [
        { label: '**Orocervicofacial actinomycosis**：**penicillin G IV 4-6 週**，再 **penicillin VK 口服 6-12 個月**；必要時引流', next: 'end_good' },
        { label: 'Amox-clav 10 天', next: 'd_short' },
        { label: 'Branching GPR，當 Nocardia 用 TMP-SMX', next: 'd_noc' }
      ]
    },
    d_short: {
      text: '主治醫師搖頭。',
      feedback: 'Actinomycosis 的病灶緻密、血流差，需要**長療程**：IV penicillin 4-6 週，再口服 6-12 個月。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    d_noc: {
      text: '主治醫師搖頭。',
      feedback: '**AFB 陰性、sulfur granules、口腔來源、免疫正常** -> Actinomyces。Nocardia 是 modified AFB 陽性、好發免疫低下。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '療程完成後硬塊消失，廔管癒合。',
      ending: {
        grade: 'good',
        title: 'Cervicofacial actinomycosis',
        pearls: [
          '口腔菌叢；拔牙、外傷後；不限免疫低下',
          '硬塊 + 穿越組織平面的廔管 + sulfur granules',
          'PCN G IV 4-6 週 -> PCN VK 6-12 個月；替代 ceftriaxone、doxycycline、clindamycin'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id13-sporo',
  chapter: 'ID13',
  title: '種玫瑰的手',
  patient: '58 歲女性 · 退休，熱愛園藝',
  summary: '手指被玫瑰刺刺到，一個月後沿著手臂長了一串結節。',
  cards: ['id-fungal-path', 'id-sporo', 'id-ntm'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '皮膚科轉介。羅女士喜歡種玫瑰。一個多月前右食指被刺到，之後長出一個紅色結節、潰瘍，接著**沿前臂往上**又長出三顆結節。',
        '不發燒、不太痛。cephalexin 吃了兩週沒效。'
      ],
      clue: ['58F；**玫瑰刺**刺傷', '沿淋巴管往近端的結節（**sporotrichoid**）', '對 cephalexin 無反應'],
      choices: [{ label: '評估', next: 'dx' }]
    },
    dx: {
      text: '鑑別：sporotrichosis、M. marinum、Nocardia、tularemia、S. aureus。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'bx', group: '檢查', label: '**切片：病理 + fungal culture + AFB culture**', key: true, reveal: true,
            result: '培養 **Sporothrix schenckii**；AFB 陰性', clue: '**S. schenckii**',
            miss: '診斷需要培養或在組織中看到酵母；同時排除 NTM。' },
          { id: 'hx', group: '病史', label: '問魚缸、動物（貓）、職業暴露', result: '沒有魚缸；家裡有貓' }
        ]
      }
    },
    tx: {
      text: 'Lymphocutaneous sporotrichosis。',
      choices: [
        { label: '**Itraconazole 200 mg qd x 3-6 個月**（膠囊和食物一起吃）；監測濃度與肝功能', next: 'end_good' },
        { label: 'Fluconazole 2 週', next: 't_fluc' },
        { label: 'Liposomal AmB', next: 't_amb' }
      ]
    },
    t_fluc: {
      text: '主治醫師搖頭。',
      feedback: '皮膚型首選 **itraconazole 3-6 個月**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_amb: {
      text: '主治醫師搖頭。',
      feedback: 'AmB 用在**嚴重全身型**（肺、播散、骨關節、腦膜）。皮膚淋巴型口服 itraconazole 就好。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '四個月後結節消退，停藥。',
      ending: {
        grade: 'good',
        title: 'Lymphocutaneous sporotrichosis',
        pearls: [
          '玫瑰刺、土壤、貓 -> Sporothrix',
          'Sporotrichoid DDx：M. marinum、Nocardia、tularemia、S. aureus',
          'Itraconazole 200 mg qd 3-6 個月；嚴重全身型先 AmB'
        ]
      }
    }
  }
});
