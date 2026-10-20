// ID 10 Tuberculosis (active, latent) and nontuberculous mycobacteria.
// Source: Washington Manual Ch 14 (source/Washington ID.txt, lines 1020-1071, 1682-1690) + Ch 15 antimycobacterial agents.

RPG.registerCards('ID10', [
  {
    id: 'id-tb-path',
    title: 'Tuberculosis 致病機轉',
    points: [
      '吸入含菌的飛沫核 -> 肺泡巨噬細胞吞噬，但 M. tuberculosis 抑制 phagolysosome 融合，在細胞內存活',
      '**Cell-mediated immunity**（Th1、IFN-γ、TNF）形成 **granuloma** 把菌圍住 -> **潛伏感染（LTBI）**：沒有症狀、不傳染',
      '免疫下降（HIV、**TNF 抑制劑**、類固醇、移植、DM、ESRD、矽肺、營養不良）-> granuloma 瓦解 -> **再活化**，好發於氧氣多的**上葉**',
      '**Caseous necrosis** 液化、排入支氣管 -> **空洞**，菌量極高、傳染力強',
      '菌分裂很慢（~20 h）、有不同代謝狀態的族群 -> 需要**多藥**（防止抗藥突變株被選出）與**長療程**',
      'IGRA 與 TST 測的是 **T cell 對 TB 抗原的記憶**，不能區分潛伏與活動性；IGRA 用的抗原 BCG 沒有 -> 不受 BCG 影響',
      'NTM：環境菌（水、土壤）；**不人傳人**；好發於結構性肺病（bronchiectasis、COPD）'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-tb-dx',
    title: '活動性 TB：表現與診斷',
    points: [
      '全球約 17 億人感染，**< 15%** 進展到活動性；美國多為外國出生者的再活化',
      '**MDR-TB**（INH + RIF 抗藥）在東南亞、非洲、印度、東歐增加；XDR 在撒哈拉以南非洲',
      '高風險暴露：家人、受刑人、無家者、注射藥物、來自高盛行國家',
      '最常見肺 TB：咳嗽 **> 14 天**、咳血、喘、發燒、**盜汗、體重減輕**；**誤診成 CAP 而用 FQ** 會延誤診斷並造成 FQ 抗藥',
      '肺外：頸部淋巴結、泌尿生殖、骨髓炎、**粟粒性**、腦膜炎、腹膜炎、心包膜炎',
      'CXR：浸潤、結節、**空洞**、粟粒、肋膜積水、肺門淋巴結；**再活化好發上葉**',
      '**三套痰** AFB smear 與培養；**NAAT** 敏感度高於 smear，smear 陽性時接近 100%；**smear 陽性但 NAAT 陰性 -> NTM**',
      '所有 TB 都驗 **HIV**；臨床高度懷疑時即使 smear 陰性也可先治療',
      '所有初始菌株做**藥敏**；**Xpert MTB/RIF** 快速偵測 rifampin 抗藥（代表 MDR）'
    ],
    refs: ['CID 2016;63:e147（ATS/CDC/IDSA drug-susceptible TB）']
  },
  {
    id: 'id-tb-tx',
    title: '活動性 TB 治療',
    points: [
      '住院病人：**負壓隔離病房**，醫護戴 **N95** 或 PAPR',
      '**通報衛生單位**：接觸者追蹤；出院後 **DOT**（直接觀察治療）確保順從、預防抗藥',
      '一定要**多藥**：單藥會產生抗藥；分枝桿菌分裂慢，所以療程長',
      '每日給藥最有效，**HIV 病人建議每日**；continuation phase 可每週三次',
      '懷孕、MDR-TB：個別化，**會診 TB 專家**',
      '肺外與肺一樣 6 個月，**骨關節 9-12 個月**、**CNS 12 個月**',
      '**類固醇只建議用在 TB 腦膜炎**（prednisone 1 mg/kg 或 dexamethasone 12 mg，數週減量），**TB 心包膜炎不常規使用**'
    ],
    table: {
      head: ['階段', '處方'],
      rows: [
        ['**Intensive（8 週）**', '**RIPE**：RIF 10 mg/kg（max 600）、INH 5 mg/kg（max 300）、PZA 15-25 mg/kg（max 2 g）、EMB 15-25 mg/kg；**加 pyridoxine 25-50 mg**；INH、RIF 都敏感 -> **停 EMB**'],
        ['**Continuation（16 週）**', '**INH + RIF**，總共 **6 個月**'],
        ['**高復發風險**', '**空洞** + **2 個月時培養仍陽性** -> continuation 延長到 28 週，**總共 9 個月**'],
        ['**4 個月方案**（藥物敏感肺 TB）', 'Rifapentine 取代 RIF、**moxifloxacin** 取代 EMB，加 INH、PZA'],
        ['**HIV + PI**', '用 **rifabutin** 取代 rifampin（交互作用較少）']
      ]
    },
    note: '療效監測：smear 陽性者每 1-2 週驗痰到 smear 陰性，之後每月到連續兩次培養陰性。**培養轉陰是最可靠的指標**。3 個月仍有症狀或培養陽性 -> 懷疑抗藥或順從性差，轉介專家。',
    refs: ['CID 2016;63:e147', 'MMWR 2022;71:285（4-month HPMZ regimen）']
  },
  {
    id: 'id-tb-drugs',
    title: '抗結核藥副作用（Ch 15）',
    table: {
      head: ['藥物', '副作用', '處理'],
      rows: [
        ['**INH**', '**肝毒性**（約 20% LFT 上升；年紀大、肝病、酒精、併用 RIF 增加）；**周邊神經病變**（拮抗 B6）', '**AST/ALT > 3 倍正常值就停藥**；肝病者初期每週 LFT；**一律加 pyridoxine**'],
        ['**Rifampin**', '皮疹、腸胃、血液毒性、肝炎、間質性腎炎；**體液變橘紅色**（含隱形眼鏡）', '**CYP 強力誘導，交互作用極多**（抗凝、避孕藥、免疫抑制劑、ART、azoles）'],
        ['Rifabutin', '**uveitis**', 'HIV 病人併用 ART 時用'],
        ['**PZA**', '**高尿酸**、肝炎', '通常只用前 2 個月'],
        ['**EMB**', '**視神經炎**：紅綠色辨識下降、視力下降、視野缺損', '**基礎與每月視力檢查**；腎功能差要減量'],
        ['Streptomycin', 'Aminoglycoside 毒性', '**不進 CNS，不能用於 TB 腦膜炎**'],
        ['**Bedaquiline**', '**QTc 延長**', 'MDR-TB；不可併用 rifamycins'],
        ['Pretomanid', '', '與 bedaquiline + linezolid 用於 XDR 或難治 MDR-TB']
      ]
    }
  },
  {
    id: 'id-ltbi',
    title: 'Latent TB infection',
    points: [
      'LTBI 一生進展到活動性約 **10%**（2 年內 5%，之後 5%）；HIV 控制差或免疫抑制 **每年 10%**；治療降低風險可達 **90%**',
      '**只檢測會因治療受益的人**；>= 5 歲建議用 **IGRA** 而非 TST（**不受 BCG 影響**，特異度 > 95%、敏感度 80-90%）',
      '**治療前一定要用臨床評估與 CXR 排除活動性 TB**',
      '進展危險因子：**2 年內轉陽**、HIV、移植、化療、惡性腫瘤、**肺尖纖維結節**（未治療過）、DM、ESRD、營養不良、矽肺、**TNF-α 抑制劑等免疫抑制治療**、家中接觸者',
      '晚期 HIV 或嚴重免疫抑制者，**已知接觸活動性 TB 就治療**（不論檢測結果）'
    ],
    table: {
      head: ['方案', '重點'],
      rows: [
        ['**Rifampin 600 mg qd x 4 個月（4R）**', 'Rifamycin 方案**完成率較高、肝毒性較低**，但交互作用多'],
        ['**INH 900 mg + rifapentine 900 mg 每週一次 x 3 個月（3HP）**', '< 50 kg 調整劑量'],
        ['INH 300 mg qd x 6-9 個月', '研究最多，但 **< 60% 完成 9 個月**；要加 pyridoxine']
      ]
    },
    note: '沒有哪個方案明顯優於其他；rifamycin 方案通常較受青睞。',
    refs: ['MMWR Recomm Rep 2020;69(1):1（NTCA/CDC LTBI 2020）']
  },
  {
    id: 'id-ntm',
    title: 'Nontuberculous mycobacteria',
    points: [
      '環境中無所不在；**肺部 80%**，其次皮膚軟組織、淋巴結、播散性',
      '**AFB smear 陽性但 TB NAAT 陰性** -> 想 NTM',
      '需要**藥敏**與**會診感染科**',
      'M. leprae 另外分類：可人傳人；色素減少且**感覺喪失**的皮膚病灶'
    ],
    table: {
      head: ['表現', '常見菌'],
      rows: [
        ['**肺部**', '**M. avium complex（85%）**、M. kansasii、**M. abscessus**'],
        ['**皮膚、軟組織、骨**', 'M. fortuitum、M. chelonae、M. scrofulaceum、**M. marinum（魚缸肉芽腫）**、M. ulcerans'],
        ['淋巴結炎', 'MAC、M. scrofulaceum'],
        ['播散性', 'M. avium、M. kansasii、M. abscessus、M. chelonae、M. haemophilum']
      ]
    },
    refs: ['Microbiol Spectr 2017;5(1)（NTM overview）']
  }
]);

RPG.registerCase({
  id: 'id10-active',
  chapter: 'ID10',
  title: '吃了兩次抗生素的「肺炎」',
  patient: '49 歲男性 · 建築工人',
  summary: '咳嗽六週、咳血、盜汗，診所當肺炎治療兩次都沒好。',
  cards: ['id-tb-path', 'id-tb-dx', 'id-tb-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。章先生咳嗽**六週**，最近痰中帶血，**晚上盜汗**，**瘦了 7 公斤**。診所先後開過 amoxicillin 和 **levofloxacin**，都沒好。',
        '抽菸 30 年，每天喝酒。T 38.1°C，生命徵象穩定。',
        'CXR：**右上葉空洞**與周圍浸潤。'
      ],
      clue: ['49M；咳嗽 **6 週**、咳血、**盜汗**、**體重減輕 7 kg**', '曾用 **levofloxacin**', '**右上葉空洞**'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: '你高度懷疑肺結核。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'start',
        options: [
          { id: 'iso', group: '感控', label: '**負壓隔離**；醫護戴 **N95**', key: true, reveal: true,
            result: '已隔離', clue: '空氣隔離',
            miss: '疑似活動性 TB 一定要空氣隔離，保護其他病人和醫護。' },
          { id: 'afb', group: '檢驗', label: '**三套痰 AFB smear、culture、TB NAAT（Xpert MTB/RIF）**', key: true, reveal: true,
            result: '**AFB smear 3+**；**NAAT 陽性，rifampin 抗藥基因陰性**', clue: '**Smear 3+、NAAT (+)、RIF 抗藥陰性**',
            miss: '三套痰 AFB smear 與培養；NAAT 快速確認並偵測 rifampin 抗藥。' },
          { id: 'hiv', group: '檢驗', label: '**HIV 檢驗**', key: true, reveal: true,
            result: '陰性', clue: 'HIV 陰性',
            miss: '所有確診或疑似 TB 的病人都要驗 HIV。' },
          { id: 'lab', group: '檢驗', label: '肝功能、腎功能、尿酸、視力檢查（基礎值）', key: true, reveal: true,
            result: 'AST 48、ALT 42；Cr 0.8；尿酸 6.1；視力與紅綠色辨識正常', clue: '基礎 LFT 輕微上升（酒精）',
            miss: '開始 RIPE 前要有肝、腎、尿酸與視力的基礎值。' },
          { id: 'report', group: '公衛', label: '**通報衛生單位**', key: true, reveal: true,
            result: '已通報，安排 DOT 與接觸者追蹤', clue: '已通報；DOT',
            miss: '所有 TB 都要通報：接觸者追蹤、DOT。' },
          { id: 'fq', group: '用藥', label: '再給一個療程 levofloxacin 看看', result: '已撤回',
            waste: '把 TB 當 CAP 用 FQ 會延誤診斷並造成 FQ 抗藥。' }
        ]
      }
    },
    start: {
      text: '確診肺結核，rifampin 敏感。開始治療？',
      choices: [
        { label: '**RIPE**（RIF + INH + PZA + EMB）**+ pyridoxine**，DOT', next: 'two_mo' },
        { label: 'INH + RIF 兩種就好', next: 's_two' },
        { label: 'Levofloxacin 加 INH', next: 's_fq' }
      ]
    },
    s_two: {
      text: '主治醫師搖頭。',
      feedback: 'Intensive phase 要**四種藥（RIPE）8 週**，等藥敏確認 INH、RIF 都敏感才停 EMB。',
      choices: [{ label: '重新決定', next: 'start' }]
    },
    s_fq: {
      text: '主治醫師搖頭。',
      feedback: '藥物敏感 TB 的標準是 **RIPE**。他之前用過 levofloxacin，可能已經有 FQ 抗藥。',
      choices: [{ label: '重新決定', next: 'start' }]
    },
    two_mo: {
      text: [
        '藥敏：INH、RIF、PZA、EMB **全部敏感**，所以停了 EMB。',
        '**治療滿 2 個月**：症狀改善，但痰**培養仍然陽性**。CXR 空洞還在。'
      ],
      clue: ['全敏感；已停 EMB', '**2 個月培養仍陽性** + **空洞**'],
      choices: [
        { label: 'Continuation INH + RIF 延長到 **28 週**，**總共 9 個月**；確認 DOT 順從性', next: 'end_good' },
        { label: '照標準 continuation 16 週，總共 6 個月', next: 't_six' },
        { label: '培養還陽性，再加回 EMB 並加 moxifloxacin', next: 't_add' }
      ]
    },
    t_six: {
      text: '主治醫師搖頭。',
      feedback: '**空洞 + 2 個月培養仍陽性**是高復發風險，continuation 要延長到 28 週，**總共 9 個月**。',
      choices: [{ label: '重新決定', next: 'two_mo' }]
    },
    t_add: {
      text: '主治醫師搖頭。',
      feedback: '全敏感、DOT 下症狀改善，2 個月培養陽性的處理是**延長療程**，不是隨便加藥（失敗的方案加單一藥物會製造抗藥）。3 個月仍陽性才懷疑抗藥。',
      choices: [{ label: '重新決定', next: 'two_mo' }]
    },
    end_good: {
      text: '第 3 個月痰培養轉陰。完成 9 個月 DOT 治療，家中接觸者也完成篩檢。',
      ending: {
        grade: 'good',
        title: 'Cavitary pulmonary TB',
        pearls: [
          '咳 > 14 天、咳血、盜汗、體重減輕、上葉空洞 -> 想 TB；不要用 FQ 當 CAP 治',
          '隔離、三套痰 AFB + NAAT、HIV、通報、DOT',
          'RIPE 8 週 + INH/RIF 16 週 = 6 個月；全敏感停 EMB；加 pyridoxine',
          '空洞 + 2 個月培養仍陽性 -> 總共 9 個月'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id10-adr',
  chapter: 'ID10',
  title: 'TB 門診的抱怨清單',
  patient: '63 歲女性 · RIPE 第 5 週',
  summary: '結核治療第五週，她帶了一張寫滿不舒服的紙條來門診。',
  cards: ['id-tb-drugs', 'id-tb-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        'TB 門診。鄭女士肺結核 RIPE 第 5 週（還沒加 pyridoxine，之前漏開了）。她帶來一張紙條：',
        '1. 尿和汗變**橘紅色**，隱形眼鏡也被染色；2. 腳底**麻麻刺刺**；3. 最近看紅綠燈**紅色和綠色分不太清楚**；4. 右大拇趾關節腫痛。',
        '這兩天也有**噁心、食慾差、右上腹悶**。'
      ],
      clue: ['63F；RIPE 第 5 週，**未加 pyridoxine**', '橘紅色體液；腳麻；**紅綠色辨識下降**；大拇趾痛風', '噁心、食慾差、右上腹悶'],
      choices: [{ label: '檢查', next: 'workup' }]
    },
    workup: {
      text: '勾選你要做的檢查。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'liver',
        options: [
          { id: 'lft', group: '檢驗', label: '**肝功能**', key: true, reveal: true,
            result: '**ALT 186**（ULN 40，> 4 倍）、AST 150、bilirubin 1.1', clue: '**ALT > 3 倍正常值** + 症狀',
            miss: '噁心、食慾差、右上腹痛 -> 一定要驗肝功能（INH、RIF、PZA 都有肝毒性）。' },
          { id: 'eye', group: '檢查', label: '**視力與色覺檢查（眼科）**', key: true, reveal: true,
            result: '**紅綠色辨識下降**、視力 0.6（原本 1.0）', clue: '**EMB 視神經炎**',
            miss: 'Ethambutol 的視神經炎：紅綠色辨識下降、視力下降、視野缺損，要每月檢查。' },
          { id: 'ua', group: '檢驗', label: '尿酸', result: '9.8', clue: '尿酸 9.8（PZA）' },
          { id: 'cr', group: '檢驗', label: 'Cr', result: '0.8' },
          { id: 'urine', group: '檢驗', label: '橘紅色尿：UA、腎臟超音波', result: '已撤回',
            waste: 'Rifampin 本來就會讓體液變橘紅色，這是無害的，衛教即可。' }
        ]
      }
    },
    liver: {
      text: 'ALT > 3 倍正常值且有症狀，加上 EMB 視神經炎。',
      choices: [
        { label: '**暫停肝毒性藥物（INH、RIF、PZA）**並**停 EMB**；追蹤肝功能，恢復後**逐一重新加入**；加 **pyridoxine**；衛教橘色體液無害', next: 'end_good' },
        { label: '肝指數上升很常見，繼續 RIPE 觀察', next: 'l_cont' },
        { label: '只停 PZA，其他照舊', next: 'l_pza' }
      ]
    },
    l_cont: {
      text: '主治醫師搖頭。',
      feedback: '**AST/ALT > 3 倍正常值（有症狀）就要停藥**。繼續用可能演變成猛爆性肝炎。視神經炎也要立刻停 EMB。',
      choices: [{ label: '重新決定', next: 'liver' }]
    },
    l_pza: {
      text: '主治醫師搖頭。',
      feedback: 'INH、RIF、PZA 都可能造成肝毒性。先**全部暫停**，等肝功能恢復再逐一加回，看是哪一個。EMB 視神經炎也要停。',
      choices: [{ label: '重新決定', next: 'liver' }]
    },
    end_good: {
      text: '兩週後肝功能恢復，依序加回 RIF、INH，沒有再上升；改用其他藥物取代 PZA 和 EMB，延長療程。視力在停 EMB 後逐漸改善。',
      ending: {
        grade: 'good',
        title: '抗結核藥副作用',
        pearls: [
          'INH：肝毒性（> 3 倍停藥）、神經病變（一律加 pyridoxine）',
          'RIF：橘紅色體液（無害）、CYP 誘導交互作用',
          'PZA：高尿酸、肝炎',
          'EMB：視神經炎（紅綠色辨識），每月視力檢查'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id10-ltbi',
  chapter: 'ID10',
  title: '打生物製劑之前',
  patient: '44 歲女性 · 類風濕性關節炎',
  summary: 'MTX 控制不好，風濕科準備開 adalimumab，篩檢 IGRA 陽性。',
  cards: ['id-tb-path', 'id-ltbi', 'id-tb-drugs'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '風濕科轉介。黃小姐 RA 用 MTX 效果不好，準備開始 **adalimumab（TNF-α 抑制劑）**。篩檢：**IGRA 陽性**。',
        '她小時候打過 BCG。沒有咳嗽、發燒、盜汗、體重減輕。',
        '用藥：MTX、folic acid、**口服避孕藥**。'
      ],
      clue: ['44F；RA，準備 **TNF-α 抑制劑**', '**IGRA (+)**；有 BCG', '無 TB 症狀', '用**口服避孕藥**'],
      choices: [{ label: '評估', next: 'rule' }]
    },
    rule: {
      text: '第一步？',
      choices: [
        { label: '先**排除活動性 TB**：症狀詢問 + **CXR**', next: 'cxr' },
        { label: '有打 BCG，IGRA 陽性是偽陽性，直接開 adalimumab', next: 'r_bcg' }
      ]
    },
    r_bcg: {
      text: '主治醫師搖頭。',
      feedback: '**IGRA 不受 BCG 影響**（TST 才會）。IGRA 陽性加上要用 TNF-α 抑制劑，是 LTBI 治療的明確適應症。',
      choices: [{ label: '重新決定', next: 'rule' }]
    },
    cxr: {
      text: 'CXR 正常，沒有症狀。確定是 LTBI。治療？',
      choices: [
        { label: '**Rifampin 600 mg qd x 4 個月**（或 3HP）；**避孕藥會失效，改用其他避孕方式**；治療開始後可依風濕科安排啟動 adalimumab', next: 'end_good' },
        { label: 'INH 300 mg qd x 9 個月 + pyridoxine', next: 'end_inh',
          why: 'INH 9 個月是研究最多的方案，但完成率 < 60%、肝毒性較高（她還在用 MTX）。Rifamycin 方案完成率高、肝毒性低，通常較受青睞；只是要處理交互作用。' },
        { label: '直接用 RIPE 4 種藥', next: 'c_ripe' }
      ]
    },
    c_ripe: {
      text: '主治醫師搖頭。',
      feedback: 'RIPE 是**活動性 TB** 的治療。LTBI 用 rifampin 4 個月、3HP 或 INH 6-9 個月。',
      choices: [{ label: '重新決定', next: 'cxr' }]
    },
    end_inh: {
      text: '黃小姐吃到第 5 個月因為肝指數上升（MTX + INH）停藥，LTBI 治療沒有完成。',
      ending: {
        grade: 'ok',
        title: 'LTBI 治療未完成',
        pearls: ['Rifamycin 方案完成率較高、肝毒性較低']
      }
    },
    end_good: {
      text: '黃小姐完成 4 個月 rifampin，改用 IUD 避孕。開始 adalimumab 後 RA 控制良好，沒有 TB 再活化。',
      ending: {
        grade: 'good',
        title: 'LTBI before TNF-α inhibitor',
        pearls: [
          '只檢測會因治療受益的人；IGRA 不受 BCG 影響',
          '治療 LTBI 前一定要排除活動性 TB（症狀 + CXR）',
          '4R、3HP 完成率高、肝毒性低；INH 6-9 個月完成率 < 60%',
          'Rifampin 交互作用：避孕藥、抗凝、免疫抑制劑'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id10-ntm',
  chapter: 'ID10',
  title: 'Smear 陽性但不是結核',
  patient: '68 歲女性 · 支氣管擴張',
  summary: '慢性咳嗽多年，痰 AFB smear 陽性，結核 NAAT 卻是陰性。',
  cards: ['id-ntm', 'id-tb-dx', 'id-tb-path'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '胸腔門診。林老師 68 歲，瘦（BMI 18），**支氣管擴張**多年，慢性咳嗽有痰，最近一年體重慢慢減輕。',
        'CT：右中葉、左舌葉**支氣管擴張 + 小結節（tree-in-bud）**，沒有空洞。',
        '痰：**AFB smear 1+**，**TB NAAT 陰性**（三套都一樣）。'
      ],
      clue: ['68F；瘦、**bronchiectasis**', '中葉、舌葉結節 + 支氣管擴張', '**AFB smear (+)、TB NAAT (-)**'],
      choices: [{ label: '判讀', next: 'decide' }]
    },
    decide: {
      text: 'Smear 陽性但 NAAT 陰性。',
      choices: [
        { label: '最可能是 **NTM**（例如 MAC）：等**培養鑑定菌種與藥敏**，**會診感染科**決定要不要治療', next: 'twist' },
        { label: 'Smear 陽性就是結核，開始 RIPE 並通報', next: 'd_ripe' }
      ]
    },
    d_ripe: {
      text: '主治醫師搖頭。',
      feedback: 'TB NAAT 在 smear 陽性時敏感度接近 100%。**Smear 陽性、NAAT 陰性 -> NTM**。NTM 的藥物與 TB 不同，需要菌種與藥敏。',
      choices: [{ label: '重新決定', next: 'decide' }]
    },
    twist: {
      text: '培養：**M. avium complex**。同一週，她的鄰居（養熱帶魚）來看手：清魚缸時刮傷右手背，三週後長出紅色結節，沿著手臂往上又長了兩顆。',
      clue: ['痰：**MAC**', '鄰居：**魚缸**刮傷 -> 沿淋巴管的結節'],
      choices: [
        { label: '鄰居最可能是 **M. marinum（fish tank granuloma）**：切片做 AFB 與培養（低溫培養）', next: 'end_good' },
        { label: '鄰居是 S. aureus 蜂窩性組織炎，開 cephalexin', next: 't_ceph' }
      ]
    },
    t_ceph: {
      text: '主治醫師搖頭。',
      feedback: '魚缸暴露 + 數週後沿淋巴管排列的結節（sporotrichoid）-> **M. marinum**。鑑別還有 sporotrichosis、Nocardia、其他 NTM、tularemia。',
      choices: [{ label: '重新決定', next: 'twist' }]
    },
    end_good: {
      text: '林老師在感染科評估後開始 MAC 多藥治療；鄰居的切片培養證實 M. marinum。',
      ending: {
        grade: 'good',
        title: 'Pulmonary MAC 與 M. marinum',
        pearls: [
          'AFB smear 陽性 + TB NAAT 陰性 -> NTM',
          '肺 NTM：MAC（85%）、M. kansasii、M. abscessus；好發結構性肺病',
          'NTM 需要藥敏與會診感染科',
          '魚缸 -> M. marinum；sporotrichoid 病灶'
        ]
      }
    }
  }
});
