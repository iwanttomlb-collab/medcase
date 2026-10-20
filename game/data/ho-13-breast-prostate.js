// HO 13 Breast and prostate cancer. Source: Pocket Medicine Ch 5, p44-48 of 書頁.txt

RPG.registerCards('HO13', [
  {
    id: 'ho-breast-risk',
    title: 'Breast cancer：風險與預防',
    points: [
      '美國女性最常見癌症、癌症死因第二',
      '家族史 15-20%（2 倍）；家族性約 45% 有 germline 突變；**BRCA1/2 終身 35-85%**；PALB2 70 歲前約 35%；CHEK2、BARD1 15-30%',
      'Estrogen：初經早、停經晚、晚生或未生、**長期 HRT**；OCP 風險極低或無',
      '良性病灶：**atypia**（ADH、ALH）或 proliferative 增加風險；囊腫、單純 fibroadenoma 不增加',
      '**Hodgkin 胸部放射治療史**',
      '預防（高風險）：**tamoxifen**（DVT、子宮內膜癌；懷孕禁用）；**raloxifene**（停經後，效果較 tamoxifen 差）；**aromatase inhibitor**（停經後，降 > 50%、骨鬆）',
      '**BRCA1/2：加強監測 vs 預防性雙側乳房切除（降約 90%）**；**BSO 降低卵巢與乳癌**'
    ],
    refs: ['NEJM 2021;384:428（moderate-risk genes）', 'JAMA 2003;289:3243（HRT）', 'NEJM 2017;377:2228（OCP）', 'NEJM 2006;355:125（raloxifene）', 'Lancet 2014;383:1041（AI prevention）', 'NEJM 2016;374:454']
  },
  {
    id: 'ho-breast-dx',
    title: 'Breast cancer：表現、篩檢與診斷',
    points: [
      '腫塊（硬、不規則、固定、無壓痛）；乳頭分泌（**單側、單一乳管、血性、合併腫塊**風險高）',
      '**Paget**：單側乳頭濕疹 + 分泌；**inflammatory**：皮膚紅腫（peau d’orange），預後很差',
      '**篩檢**：ACS 45 歲每年（54 後可兩年）；**USPSTF 50-75 每兩年**（可從 40 開始）；高風險提早（**BRCA 25 歲**、家族最早病例前 5-10 年、胸部 RT 後 8-10 年）',
      '**MRI**：高風險與年輕人優於 mammo；**終身風險 > 20%** 每年 MRI',
      '可觸摸腫塊：**< 30 歲**觀察 1-2 個月經週期 -> 不消則 U/S；**> 30 歲或實心 -> mammo + FNA 或 core bx**；不確定或 atypia -> excisional',
      'Mammo 可疑、PE 正常 -> stereotactic bx'
    ],
    refs: ['JAMA 2015;314:1599', 'Ann Intern Med 2019;170:547（screening）', 'Lancet 2011;378:1804（MRI）']
  },
  {
    id: 'ho-breast-stage',
    title: 'Breast cancer：分期與生物標記',
    points: [
      '**腋下淋巴結是最強預後因子**',
      '**DCIS**：同側侵襲癌約 30%/10 年；**LCIS**：良性，雙側侵襲癌風險標記（約 1%/年）',
      '侵襲癌：ductal 70-80%、lobular 5-10%、tubular/medullary/mucinous 10%（預後較好）',
      '**ER/PR、HER2** 決定治療',
      '**Oncotype DX**（21-gene）：ER+ HER2- 的 LN 陰性或 1-3 顆陽性，找出化療幫助很小的人'
    ],
    table: {
      head: ['Stage', '特徵', '5 年 DSS'],
      rows: [
        ['I', '< 2 cm', '99%'],
        ['IIA-IIB', '> 2 cm 或可動腋下 LN', '96-98%'],
        ['IIIA', '> 5 cm 或 2-5 cm + 腋下 LN；或固定腋下 LN', '95%'],
        ['IIIB/C', '胸壁、皮膚、鎖骨上下 LN', '80-85%'],
        ['IV', '遠處轉移', '27%']
      ]
    },
    refs: ['CA Cancer J Clin 2017;67:290', 'NEJM 2018;379:111 & 2021;385:2336（Oncotype DX）']
  },
  {
    id: 'ho-breast-tx',
    title: 'Breast cancer：治療方向',
    table: {
      head: ['情境', '方向'],
      rows: [
        ['DCIS', 'Lumpectomy + RT（降局部復發、不改變存活）或 mastectomy；ER+ 可化學預防'],
        ['**Stage I-II**', '**Lumpectomy + SLNB + RT**；腫瘤 > 2 cm、LN+、triple negative 或 Oncotype 高分 -> 化療；**ER/PR+ -> 內分泌**；**HER2+ 且 >= 1 cm 或 LN+ -> anti-HER2 + 化療**'],
        ['**Stage III**', '**Neoadjuvant 化療** -> 手術 + RT；HER2+ 用 **trastuzumab + pertuzumab**；ER+ 停經前加卵巢抑制'],
        ['Stage IV ER+', '**AI + CDK4/6 inhibitor**'],
        ['Stage IV HER2+', '化療 + anti-HER2'],
        ['Triple negative', '化療 ± ICI'],
        ['骨轉移', 'Bisphosphonate、denosumab 降骨折']
      ]
    },
    points: [
      '**Mastectomy**：腫瘤相對乳房大、多中心、曾胸部 RT、瀰漫微鈣化、切緣陽性；**PMRT**：>= 4 LN、> 5 cm、切緣陽性、胸壁或皮膚侵犯；可觸及腋下 LN 做 ALND',
      '**Tamoxifen**：停經前低風險；10 年優於 5 年；**AI**：停經後，OS 優於 tamoxifen',
      '高風險停經前：**LHRH agonist 或 oophorectomy** + tamoxifen/AI',
      '**CDK4/6i**（palbociclib、ribociclib）：早期加 AI 改善 iDFS，轉移改善 PFS/OS；PIK3CA/AKT/PTEN：alpelisib、inavolisib、capivasertib',
      'HER2：**trastuzumab + pertuzumab** 第一線；**T-DXd** 第二線（肺毒性）；**術前治療後殘存疾病 -> T-DM1**；tucatinib（CNS 轉移）',
      'Triple negative：**pembrolizumab + 化療**（早期與 PD-L1+ 轉移）；sacituzumab govitecan；**BRCA -> PARP inhibitor**（olaparib、talazoparib）'
    ],
    note: 'Trastuzumab 有心毒性，治療前與期間追蹤 LVEF。',
    refs: ['JAMA 2019;321:288 & 1716', 'NEJM 2023;388:585（RT in ER+）', 'NEJM 2018;379:122（ovarian suppression）', 'NEJM 2016;375:1925（CDK4/6i）', 'NEJM 2015;372:724（pertuzumab）', 'NEJM 2019;380:617（T-DM1 KATHERINE）', 'NEJM 2024;391:1981（pembro early TNBC）', 'NEJM 2017;377:523（olaparib）', 'Lancet 2011;378:771（tamoxifen 10 y）', 'Lancet 2015;386:1341（AI vs tamoxifen）']
  },
  {
    id: 'ho-prostate',
    title: 'Prostate cancer：篩檢與局部疾病',
    points: [
      '美國男性最常見癌症、癌症死因第二；終身診斷約 16%、死於攝護腺癌約 3%',
      '危險因子：年齡（< 45 罕見）、**非裔**、家族史、**BRCA**',
      '78% 診斷時無症狀、局部；轉移以**骨轉移**表現（骨痛、脊髓壓迫、cytopenias）',
      '**PSA 4 ng/mL 不夠敏感也不夠特異**；BPH、攝護腺炎、急性尿滯留、切片或 TURP 後、射精會上升（DRE 影響不大）',
      '**DRE 不再建議**（無死亡率好處）；ACS：50 歲（非裔或家族史 45 歲）共享決策；USPSTF：討論利弊',
      'TRUS bx（6-12 cores）；**multiparametric MRI** 提高偵測、減少不必要切片',
      '**Grade group**：1 = 3+3；2 = 3+4；3 = 4+3；4 = 4+4；5 = 更高'
    ],
    table: {
      head: ['風險', '條件', '治療方向'],
      rows: [
        ['Very low / low', 'T1-T2a、**GG1**、**PSA < 10**', '**Active surveillance**（very low 首選；low 也可）、EBRT 或 RP'],
        ['Intermediate', 'T2b-T2c、**GG2-3** 或 **PSA 10-20**', 'RP，或 **EBRT + ADT（4-6 個月）**'],
        ['High / very high', 'T3a 以上、**GG4-5** 或 **PSA > 20**', 'Bone scan、CT；**EBRT + ADT（18-36 個月）** ± abiraterone，或 RP']
      ]
    },
    note: '無症狀、餘命 < 5 年的 very low 到 intermediate risk：不檢查、不治療，直到出現症狀。RP 短期陽痿與尿失禁較多，長期與 RT 相似。',
    refs: ['JAMA 2025;333:1433', 'JAMA 2018;319:1901（USPSTF）', 'NEJM 2024;391:1083（MRI）', 'JAMA 2017;317:2532（localized risk）', 'NEJM 2016;375:1425（ProtecT）', 'NEJM 2004;350:2239（PSA < 4）']
  },
  {
    id: 'ho-mprostate',
    title: 'Metastatic prostate cancer',
    points: [
      '攝護腺癌靠 androgen 訊號：**ADT 是骨幹**（LHRH agonist ± 第一代 anti-androgen、LHRH antagonist degarelix、或雙側睪丸切除）',
      '**mHSPC**：所有人一開始都對 ADT 敏感；PE 與 PSA 每 3-6 個月',
      'mHSPC 治療：ADT 單用（僅極少量疾病）；**ADT + abiraterone/pred 或 enzalutamide/apalutamide**（OS 優於單用 ADT）；**high-volume -> docetaxel + ADT + abiraterone**',
      '**CRPC**：ADT 下仍進展（androgen 訊號重建或轉 neuroendocrine）；**ADT 永遠繼續**',
      'CRPC：新一代 anti-androgen；**BRCA1/2、ATM（約 20%）-> olaparib**；**MSI-H/Lynch -> pembrolizumab**；sipuleucel-T；docetaxel/cabazitaxel；**Lu-177 PSMA**',
      '骨：**denosumab 或 zoledronic acid 降低 SREs**；**radium-223**（只有骨轉移，改善 OS）',
      '根治性手術後 5 年無復發：侷限器官 > 90%、穿出包膜約 75%、精囊侵犯約 40%；**PSA q6mo x 5 年**'
    ],
    refs: ['Lancet 2022;399:1695（PEACE-1）', 'Lancet 2024;404:2065', 'JCO 2018;36:2492', 'NEJM 2021;385:1091（Lu-PSMA）', 'NEJM 2017;377:338 & 352（abiraterone mHSPC）', 'NEJM 2019;381:121 & 13（apalutamide、enzalutamide）']
  }
]);

RPG.registerCase({
  id: 'ho13-er',
  chapter: 'HO13',
  title: '洗澡時摸到的硬塊',
  patient: '46 歲女性 · 停經前 · 公務員',
  summary: '洗澡時在左乳外上方摸到一顆硬硬的東西，已經一個月了。',
  cards: ['ho-breast-dx', 'ho-breast-stage', 'ho-breast-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '乳房外科門診。胡小姐一個月前洗澡時摸到左乳外上方約 2 cm 硬塊，不痛。月經規則。',
        '理學檢查：**2.2 cm、硬、不規則、不太能推動**；腋下沒有摸到淋巴結。',
        '她說：「我才 46 歲，會不會只是纖維囊腫？可以觀察看看嗎？」'
      ],
      clue: ['46F；停經前', '左乳 **2.2 cm 硬、不規則、固定** 腫塊', '腋下 LN 未觸及'],
      choices: [
        { label: '**> 30 歲的可觸摸腫塊 -> diagnostic mammo + U/S，並做 core-needle biopsy**', next: 'bx' },
        { label: '觀察 1-2 個月經週期再說', next: 'i_obs' },
        { label: '直接做乳房 MRI', next: 'i_mri' }
      ]
    },
    i_obs: {
      text: '主治醫師搖頭。',
      feedback: '觀察 1-2 個月經週期只適用 < 30 歲。她 46 歲、腫塊硬而不規則，要直接影像與組織診斷。',
      choices: [{ label: '重新決定', next: 'intro' }]
    },
    i_mri: {
      text: '主治醫師搖頭。',
      feedback: 'MRI 不是可觸摸腫塊的第一步，也不能取代切片。先 diagnostic mammo + U/S，再 core biopsy。',
      choices: [{ label: '重新決定', next: 'intro' }]
    },
    bx: {
      text: 'Mammo：spiculated mass 2.3 cm。Core bx：**invasive ductal carcinoma**，grade 2；**ER 95%、PR 80%、HER2 1+（陰性）**。腋下 U/S 正常。',
      clue: ['**IDC**，**ER+/PR+/HER2-**', 'T2（2.3 cm）、cN0'],
      choices: [{ label: '局部治療', next: 'local' }]
    },
    local: {
      text: '單一病灶、乳房大小適中、她希望保留乳房。手術？',
      choices: [
        { label: '**Lumpectomy + sentinel lymph node biopsy**，術後 **whole-breast RT**', next: 'onco' },
        { label: 'Lumpectomy，不用 RT', next: 'l_nort' },
        { label: '直接 axillary lymph node dissection', next: 'l_alnd' }
      ]
    },
    l_nort: {
      text: '主治醫師搖頭。',
      feedback: 'Breast-conserving therapy = lumpectomy + RT，少了 RT 局部復發明顯上升。',
      choices: [{ label: '重新決定', next: 'local' }]
    },
    l_alnd: {
      text: '主治醫師搖頭。',
      feedback: '臨床 LN 陰性先做 SLNB；可觸及腋下淋巴結才直接 ALND。ALND 淋巴水腫風險高。',
      choices: [{ label: '重新決定', next: 'local' }]
    },
    onco: {
      text: '病理：2.3 cm，**SLNB 0/3**。要不要化療？',
      clue: 'pT2 N0',
      choices: [
        { label: 'ER+ HER2- LN 陰性 -> **Oncotype DX** 決定化療是否有益', next: 'onco_res' },
        { label: '> 2 cm 一律化療', next: 'o_chemo' },
        { label: 'ER+ 不需要化療，也不用驗', next: 'o_none' }
      ]
    },
    o_chemo: {
      text: '主治醫師搖頭。',
      feedback: 'ER+ HER2- LN 陰性或 1-3 顆的病人，Oncotype DX 可以找出化療幫助很小的人，避免不必要的化療毒性。',
      choices: [{ label: '重新決定', next: 'onco' }]
    },
    o_none: {
      text: '主治醫師搖頭。',
      feedback: 'ER+ 也有一部分高復發風險、能從化療獲益的人，用 Oncotype DX 篩出來。',
      choices: [{ label: '重新決定', next: 'onco' }]
    },
    onco_res: {
      text: 'Recurrence score **12**（低）。內分泌治療？',
      clue: 'Oncotype RS 12',
      choices: [
        { label: '停經前、低風險：**tamoxifen**（考慮 10 年）', next: 'end_good' },
        { label: 'Aromatase inhibitor 單用', next: 'e_ai' },
        { label: 'RS 低，不需要任何全身治療', next: 'e_none' }
      ]
    },
    e_ai: {
      text: '主治醫師搖頭。',
      feedback: '停經前卵巢仍在製造 estrogen，AI 單用無效（甚至刺激卵巢）。停經前用 tamoxifen；高風險才合併卵巢抑制 + AI 或 tamoxifen。',
      choices: [{ label: '重新決定', next: 'onco_res' }]
    },
    e_none: {
      text: '主治醫師搖頭。',
      feedback: 'RS 低代表**化療**幫助小，不是不需要內分泌治療。ER+ 一定要內分泌治療，可降低復發與死亡。',
      choices: [{ label: '重新決定', next: 'onco_res' }]
    },
    end_good: {
      text: '胡小姐完成放射治療，開始 tamoxifen。婦科追蹤異常陰道出血（tamoxifen 增加子宮內膜癌）。',
      ending: {
        grade: 'good',
        title: 'Early ER+ HER2- breast cancer',
        pearls: [
          '> 30 歲可觸摸腫塊：mammo + U/S + core biopsy',
          'Stage I-II：lumpectomy + SLNB + RT',
          'ER+ HER2- LN 0-3：Oncotype DX 決定化療',
          '停經前 tamoxifen；停經後 AI；高風險停經前加卵巢抑制'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho13-her2',
  chapter: 'HO13',
  title: '腋下也有一顆',
  patient: '52 歲女性 · 停經後 · 美髮師',
  summary: '右乳 4 cm 腫塊，腋下摸得到淋巴結。切片 HER2 3+。',
  cards: ['ho-breast-stage', 'ho-breast-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '腫瘤科門診。黃女士右乳 **4.2 cm** 腫塊，右腋下可觸及 2 cm 淋巴結。',
        'Core bx：IDC grade 3，**ER 10%、PR 陰性、HER2 3+**。腋下 LN FNA 陽性。分期 CT 與 bone scan 無遠處轉移。'
      ],
      clue: ['52F；**4.2 cm**、**cN1**', '**HER2 3+**；ER 弱陽性', '無遠處轉移（stage IIB-IIIA）'],
      choices: [{ label: '開始治療前', next: 'pre' }]
    },
    pre: {
      text: '治療前要確認什麼？',
      checklist: {
        prompt: '勾選治療前必要的項目',
        submit: '送出',
        next: 'neo',
        options: [
          { id: 'echo', group: '心臟', label: '**Echocardiography（LVEF）**', key: true, reveal: true,
            result: 'LVEF 64%', clue: 'LVEF 64%',
            miss: 'Trastuzumab（與 anthracycline）有心毒性，治療前要 baseline LVEF，治療中定期追蹤。' },
          { id: 'clip', group: '腫瘤', label: '腫瘤與陽性 LN **放置 clip**', key: true, reveal: true,
            result: '已放置', clue: '已放 clip',
            miss: '術前治療後腫瘤可能消失，事先放 clip 才知道要切哪裡。' },
          { id: 'gen', group: '其他', label: 'Germline genetic testing（依家族史）', result: '姊姊 45 歲乳癌 -> 送檢，BRCA 陰性' },
          { id: 'onco', group: '其他', label: 'Oncotype DX', result: '（不適用）',
            waste: 'Oncotype DX 用於 ER+ HER2- 決定化療；她是 HER2+，本來就需要化療 + anti-HER2。' },
          { id: 'pet', group: '其他', label: 'PET-CT', result: '（已有 CT + bone scan）',
            waste: '已完成分期。' }
        ]
      }
    },
    neo: {
      text: 'HER2+、T2 N1。治療順序？',
      choices: [
        { label: '**Neoadjuvant 化療 + trastuzumab + pertuzumab** -> 手術 -> RT；依殘存疾病決定輔助治療', next: 'surg' },
        { label: '先開刀，術後再說', next: 'n_surg' },
        { label: '只用 trastuzumab 單藥', next: 'n_mono' }
      ]
    },
    n_surg: {
      text: '主治醫師搖頭。',
      feedback: 'HER2+ 且 LN 陽性，術前治療可以縮小腫瘤、提高保乳機會，並用病理反應決定術後治療（存活與先開刀相當）。',
      choices: [{ label: '重新決定', next: 'neo' }]
    },
    n_mono: {
      text: '主治醫師搖頭。',
      feedback: 'Anti-HER2 要搭配化療，雙重阻斷（trastuzumab + pertuzumab）效果更好。',
      choices: [{ label: '重新決定', next: 'neo' }]
    },
    surg: {
      text: '六個 cycle 後手術：乳房仍有 **0.8 cm 殘存侵襲癌**，1 顆 LN 陽性。術後輔助？',
      clue: '術前治療後 **residual disease**',
      choices: [
        { label: '**換成 T-DM1（trastuzumab emtansine）** 完成一年 anti-HER2；RT；ER+ 加內分泌（AI）', next: 'end_good' },
        { label: '繼續原本 trastuzumab + pertuzumab 就好', next: 'end_ok',
          why: '術前治療後仍有殘存疾病，換 T-DM1 可降低復發與死亡（KATHERINE）。' }
      ]
    },
    end_ok: {
      text: '三年後她出現肝轉移。',
      ending: {
        grade: 'ok',
        title: 'HER2+ 殘存疾病未升級治療',
        pearls: [
          'Neoadjuvant 後 residual disease -> T-DM1',
          '轉移 HER2+：第二線 T-DXd'
        ]
      }
    },
    end_good: {
      text: '完成 T-DM1、放射治療，開始 letrozole。LVEF 一直維持 > 55%。',
      ending: {
        grade: 'good',
        title: 'Locally advanced HER2+ breast cancer',
        pearls: [
          'HER2+ 且 >= 1 cm 或 LN+：化療 + anti-HER2',
          'Stage II-III HER2+：neoadjuvant + trastuzumab + pertuzumab',
          '殘存疾病 -> T-DM1',
          'Trastuzumab 追蹤 LVEF'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho13-brca',
  chapter: 'HO13',
  title: '媽媽和阿姨都是乳癌',
  patient: '29 歲女性 · BRCA1 帶因者',
  summary: '媽媽 42 歲乳癌、阿姨卵巢癌。她驗出 BRCA1 致病變異，想知道接下來該怎麼辦。',
  cards: ['ho-breast-risk', 'ho-breast-dx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '遺傳諮詢門診。秦小姐 29 歲，**BRCA1 pathogenic variant**。媽媽 42 歲乳癌，阿姨 50 歲卵巢癌。',
        '目前未婚，希望以後生小孩。'
      ],
      clue: ['29F；**BRCA1** 帶因', '母：42 歲乳癌；阿姨：卵巢癌', '未來想生育'],
      choices: [{ label: '討論篩檢', next: 'screen' }]
    },
    screen: {
      text: '乳癌篩檢怎麼安排？',
      choices: [
        { label: '**每年 breast MRI**（終身風險 > 20%），加上 mammography 與臨床乳房檢查', next: 'risk' },
        { label: '40 歲開始 mammography 就好', next: 's_40' },
        { label: '50 歲開始每兩年 mammo', next: 's_50' }
      ]
    },
    s_40: {
      text: '主治醫師搖頭。',
      feedback: 'BRCA 帶因者從 25 歲就要篩檢，而且年輕緻密乳房 mammo 敏感度低，MRI 才是主力。',
      choices: [{ label: '重新決定', next: 'screen' }]
    },
    s_50: {
      text: '主治醫師搖頭。',
      feedback: '這是一般風險女性的 USPSTF 建議。高風險要提早並加 MRI。',
      choices: [{ label: '重新決定', next: 'screen' }]
    },
    risk: {
      text: '她問：「除了篩檢，還有什麼可以降低風險？」',
      choices: [
        { label: '可考慮**預防性雙側乳房切除（降約 90%）**；**完成生育後做 risk-reducing BSO**（降卵巢與乳癌風險）；化學預防可討論', next: 'end_good' },
        { label: '現在就做 BSO 最安全', next: 'r_bso' },
        { label: '吃 OCP 會讓風險大增，絕對不能用', next: 'r_ocp' }
      ]
    },
    r_bso: {
      text: '主治醫師搖頭。',
      feedback: 'BSO 會讓她立即停經、失去生育能力。她想生小孩，通常在完成生育後（BRCA1 約 35-40 歲）再做。',
      choices: [{ label: '重新決定', next: 'risk' }]
    },
    r_ocp: {
      text: '主治醫師搖頭。',
      feedback: 'OCP 對乳癌風險的影響極低或沒有，而且可降低卵巢癌風險。',
      choices: [{ label: '重新決定', next: 'risk' }]
    },
    end_good: {
      text: '她選擇每年 MRI + mammo，並計畫生完小孩後做 BSO 與預防性乳房切除。妹妹也去做了基因檢測。',
      ending: {
        grade: 'good',
        title: 'BRCA1 帶因者的風險管理',
        pearls: [
          'BRCA1/2 乳癌終身風險 35-85%',
          '25 歲開始篩檢；終身風險 > 20% 每年 MRI',
          '預防性乳房切除降約 90%；完成生育後 BSO',
          '家人 cascade testing'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho13-psa',
  chapter: 'HO13',
  title: 'PSA 6.2',
  patient: '68 歲男性 · 退休公務員',
  summary: '健檢 PSA 6.2，朋友說要趕快開刀切掉攝護腺。',
  cards: ['ho-prostate'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '泌尿科門診。何先生健檢 **PSA 6.2**，一年前 5.8。沒有排尿症狀。身體很好，打算明年去環島騎車。',
        '朋友說 PSA 高就要開刀，他很擔心。'
      ],
      clue: ['68M；**PSA 6.2**（一年前 5.8）', '無症狀；健康狀況好'],
      choices: [
        { label: '先排除短暫上升原因（感染、射精、器械）後重驗；仍高 -> **multiparametric MRI**，必要時 targeted bx', next: 'bx' },
        { label: '直接根除性攝護腺切除', next: 'p_rp' },
        { label: 'PSA < 10 都正常，不用管', next: 'p_ignore' }
      ]
    },
    p_rp: {
      text: '主治醫師搖頭。',
      feedback: 'PSA 不是診斷。BPH、攝護腺炎、射精等都會讓 PSA 上升，要先重驗、MRI、切片確認。',
      choices: [{ label: '重新決定', next: 'intro' }]
    },
    p_ignore: {
      text: '主治醫師搖頭。',
      feedback: 'PSA 4 這個切點既不夠敏感也不夠特異，沒有所謂「< 10 就正常」。持續上升要評估。',
      choices: [{ label: '重新決定', next: 'intro' }]
    },
    bx: {
      text: '重驗 PSA 6.0。MRI：PI-RADS 4 病灶。Targeted + systematic bx：**12 cores 中 2 cores Gleason 3+3（grade group 1）**，每 core < 50%。PSA density 0.12。',
      clue: '**GG1**（3+3）、2/12 cores、**PSA < 10**、T1c',
      choices: [
        { label: '**Low risk -> active surveillance**（定期 PSA、MRI、重複切片）', next: 'end_good' },
        { label: '根除性手術最保險', next: 'b_rp' },
        { label: 'EBRT + ADT 18-36 個月', next: 'b_adt' }
      ]
    },
    b_rp: {
      text: '主治醫師搖頭。',
      feedback: 'GG1、PSA < 10 是 low risk，死於攝護腺癌的風險很低。Active surveillance 可避免手術的陽痿與尿失禁，有進展再治療。',
      choices: [{ label: '重新決定', next: 'bx' }]
    },
    b_adt: {
      text: '主治醫師搖頭。',
      feedback: '長期 ADT 是 high-risk 的治療。Low risk 不需要 ADT，副作用（骨鬆、代謝症候群、心血管）大於好處。',
      choices: [{ label: '重新決定', next: 'bx' }]
    },
    end_good: {
      text: '何先生進入 active surveillance。三年來 PSA 穩定，重複切片仍是 GG1。他完成了環島。',
      ending: {
        grade: 'good',
        title: 'Low-risk prostate cancer',
        pearls: [
          'PSA 上升先重驗、排除干擾，再 MRI 與切片',
          'Grade group：1 = 3+3、2 = 3+4、3 = 4+3',
          'Low risk（GG1、PSA < 10）-> active surveillance',
          'Intermediate：RP 或 EBRT + 4-6 個月 ADT；high：EBRT + 18-36 個月 ADT'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho13-mpc',
  chapter: 'HO13',
  title: '腰痛的老伯',
  patient: '72 歲男性 · 果農',
  summary: '腰背痛三個月，夜裡痛醒。PSA 286。',
  cards: ['ho-mprostate'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '病房。賴伯伯三個月腰背痛，夜間更痛。下肢力氣正常、沒有大小便失禁。',
        '**PSA 286**。Bone scan：脊椎、骨盆、肋骨**超過 10 處**骨轉移；CT：無內臟轉移。攝護腺切片：**GG5**。',
        '從未接受任何攝護腺治療。'
      ],
      clue: ['72M；**PSA 286**', '**> 10 處骨轉移**（high-volume）', 'GG5；未曾 ADT -> **mHSPC**', '無神經學缺損'],
      choices: [{ label: '擬定治療', next: 'tx' }]
    },
    tx: {
      text: 'High-volume mHSPC，體能 ECOG 1。治療？',
      choices: [
        { label: '**ADT + abiraterone/prednisone（或 enzalutamide/apalutamide）**；體能好的 high-volume 可加 **docetaxel**（triplet）', next: 'germ' },
        { label: 'ADT 單用', next: 't_adt' },
        { label: '根除性攝護腺切除', next: 't_rp' }
      ]
    },
    t_adt: {
      text: '主治醫師搖頭。',
      feedback: 'ADT 單用只適合極少量疾病（例如只有 PSA 上升）。加上新一代 anti-androgen 能延長 OS；high-volume 加 docetaxel 再更好。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_rp: {
      text: '主治醫師搖頭。',
      feedback: '已經廣泛骨轉移，局部手術不是治療主軸，ADT 為骨幹的全身治療才是。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    germ: {
      text: [
        '兩年後 PSA 在 ADT + abiraterone 下持續上升，新骨轉移：**CRPC**。',
        '他問：「ADT 沒效了，可以停打針嗎？」'
      ],
      clue: '**Castration-resistant**',
      choices: [
        { label: '**繼續 ADT**；驗 **germline/somatic BRCA1/2、ATM**（olaparib）與 **MSI**；其他：docetaxel、Lu-177 PSMA；**denosumab 或 zoledronic acid** 降骨骼事件', next: 'end_good' },
        { label: '停 ADT，換化療', next: 'end_stop',
          why: 'CRPC 仍依賴 androgen 訊號，ADT 必須持續，在此基礎上加新治療；停 ADT 會讓睪固酮回升、疾病加速。' }
      ]
    },
    end_stop: {
      text: '停 ADT 後兩個月 PSA 翻倍，出現脊髓壓迫。',
      ending: {
        grade: 'bad',
        title: 'CRPC 停 ADT',
        pearls: [
          'CRPC：ADT 永遠繼續',
          '骨轉移：denosumab/zoledronic acid；radium-223'
        ]
      }
    },
    end_good: {
      text: '基因檢測：**BRCA2 突變**。改用 olaparib，PSA 下降。家人也接受了 BRCA 檢測。',
      ending: {
        grade: 'good',
        title: 'Metastatic prostate cancer：mHSPC 到 CRPC',
        pearls: [
          'ADT 是骨幹；mHSPC 加 abiraterone/enzalutamide/apalutamide ± docetaxel',
          'CRPC：繼續 ADT；BRCA/ATM -> olaparib；MSI-H -> pembrolizumab；Lu-PSMA',
          '骨轉移：denosumab/zoledronic acid 降 SREs'
        ]
      }
    }
  }
});
