// ID 12 Urinary tract & male genital infections: ASB, cystitis, pyelonephritis, prostatitis, epididymitis, CAUTI.
// Source: Washington Manual Ch 14 (source/Washington ID.txt, lines 1191-1390, 2039-2058).

RPG.registerCards('ID12', [
  {
    id: 'id-uti-path',
    title: 'UTI 致病機轉',
    points: [
      '**上行性感染**為主：腸道菌 -> 會陰、尿道口 colonization -> 進入膀胱（女性尿道短）-> 上行到腎臟',
      '**Uropathogenic E. coli**：**type 1 fimbriae** 黏附膀胱上皮（cystitis）、**P fimbriae** 黏附腎臟上皮（pyelonephritis）；可侵入上皮形成細胞內菌落，是復發原因之一',
      '宿主防禦：排尿沖刷、尿液酸鹼與滲透壓、上皮脫落；**阻塞、殘尿、結石、導管**讓防禦失效 -> complicated UTI',
      '**導尿管**：表面形成 **biofilm**，細菌在其中不受抗生素與免疫影響 -> 長期導尿幾乎都有菌尿；治療 CAUTI 要**拔除或更換導管**',
      '性交把會陰菌推入尿道、spermicide 破壞 lactobacilli 正常菌叢；停經後 estrogen 下降同樣改變陰道菌叢 -> 反覆 cystitis',
      '**血行性**少見：S. aureus 菌尿要想到菌血症（腎臟是被播種的）',
      '**ASB**：細菌住在膀胱但沒有侵犯組織、沒有發炎症狀；治療不改善預後，反而選出抗藥菌'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-uti-dx',
    title: 'UTI 的分類與尿液判讀',
    points: [
      '**Complicated UTI**：泌尿道解剖異常、免疫低下、控制不良糖尿病、**懷孕**、**導管**、特殊病原；或感染超出膀胱（不論病人特性）',
      '病原：**Enterobacterales**（E. coli、P. mirabilis、K. pneumoniae）、S. saprophyticus；其他 Pseudomonas、enterococci',
      '**Pyuria**：LE (+) 或 >= 8 WBC/hpf；**bacteriuria**：nitrite (+) 或 >= 1 organism/oil field；**有症狀才代表感染**',
      '上皮細胞多 -> 檢體不合格',
      '培養 > **10^5 CFU/mL** 有意義；急性 dysuria 的女性 **10^2-10^4** 也可能是感染',
      '**Sterile pyuria**：最近用過抗生素、慢性間質性腎炎或膀胱炎、**C. trachomatis、Ureaplasma、N. gonorrhoeae**、罕見 TB -> 培養與特定 PCR',
      '性活躍者有 dysuria 但**沒有 pyuria** -> 評估 STI'
    ],
    refs: ['CID 2011;52:e103（IDSA/ESCMID cystitis & pyelonephritis）']
  },
  {
    id: 'id-asb',
    title: 'Asymptomatic bacteriuria',
    points: [
      '定義：沒有泌尿道症狀，尿液單一菌種 > **10^5 CFU/mL**；男性與導尿者一次檢體，**女性需連續兩次**',
      '**只在兩種情況治療**：**懷孕**、**泌尿道手術前**',
      '**不治療**：老人、糖尿病、機構住民、脊髓損傷、**導尿管**病人',
      '導尿管病人一定有 pyuria、bacteriuria，沒有症狀就不要驗、不要治',
      '常見陷阱：只因為 UA 異常或「意識不太好」就開抗生素 -> 先找其他原因'
    ],
    refs: ['CID 2011;52:e103']
  },
  {
    id: 'id-cystitis',
    title: 'Cystitis 與反覆 cystitis（Table 14-11）',
    table: {
      head: ['族群', '治療', '重點'],
      rows: [
        ['**非懷孕女性**', '**Nitrofurantoin 100 mg q12h x 5 d**、**TMP-SMX DS q12h x 3 d**、**fosfomycin 3 g 單次**；FQ x 3 d 只在沒有其他選擇時', '**本地抗藥 > 20% 就避免 TMP-SMX**；口服 β-lactam 效果較差，疑似早期 pyelo 不要用'],
        ['糖尿病、免疫低下', '同上，延長到 **7 天**', ''],
        ['**懷孕**', 'Nitrofurantoin、cephalexin、cefuroxime axetil x 7 d', '**懷孕的 ASB 也要治療**'],
        ['**男性**', 'TMP-SMX 或 FQ x **7 d**', '懷疑 prostatitis 時避免 nitrofurantoin、β-lactam（組織濃度低）']
      ]
    },
    points: [
      '健康非懷孕女性的單純 cystitis 可**依症狀治療，不需尿液培養**；有抗藥或嚴重感染風險才培養',
      '**治療後不需要追蹤培養**，除非症狀持續 > 48 h',
      '反覆 cystitis（6 個月內 > 2 次）：多數是 **reinfection**（不同菌）；危險因子：性交頻率、**spermicide**；年長者尿失禁、cystocele',
      '**Relapse**（同一菌、停藥 2 週內）-> 進一步泌尿科評估',
      '預防：**性交後單次**（TMP-SMX SS、nitrofurantoin 100 mg、cephalexin 250 mg）或**連續**（TMP-SMX 0.5 SS qd/qod、nitrofurantoin 50-100 mg qhs x 6 mo）',
      '非抗生素：methenamine hippurate 1 g q12h（± vitamin C）、cranberry；停經後**陰道 estrogen**',
      '導管、支架等異物要移除，至少更換'
    ],
    refs: ['CID 2011;52:e103']
  },
  {
    id: 'id-pyelo',
    title: 'Pyelonephritis 與 complicated UTI',
    points: [
      '發燒、寒顫、**腰痛**、噁心嘔吐、**CVA tenderness**，常合併 cystitis 症狀；阻塞、近期器械、老人、糖尿病易 sepsis',
      'UA：pyuria、RBC、偶見 **WBC casts**；**抗生素前送尿液培養**；住院者抽**血液培養**（15-20% 菌血症）',
      '**影像**：抗生素治療 **48-72 h 仍未改善**才做（US 或 CT）-> 找阻塞、腎或腎周膿瘍、結石',
      '病原：E. coli > Klebsiella、Proteus、Pseudomonas、enterococci；近期廣效抗生素、醫療暴露、旅遊 -> **MDRO**',
      '重症與**懷孕**先 IV；輕中度能吃藥可門診'
    ],
    table: {
      head: ['情境', '治療'],
      rows: [
        ['門診 輕-中度', '**Ciprofloxacin 500 mg q12h x 7 d** 或 **levofloxacin 750 mg qd x 5 d**；敏感時 **TMP-SMX DS q12h x 14 d**；或 IV/IM 3 代 cephalosporin 一劑後接 FQ/TMP-SMX'],
        ['住院 重症', '3/4 代 cephalosporin（ceftriaxone 1-2 g qd、cefepime）、β-lactam/BLI（pip-tazo）、FQ、carbapenem'],
        ['FQ 抗藥 > 10%', 'FQ 前先給一劑 IV ceftriaxone 或 ertapenem'],
        ['**懷孕**', '**不用 FQ**；β-lactam 優先（ceftriaxone、cefepime、pip-tazo）'],
        ['**ESBL**', '**Carbapenem**（meropenem、ertapenem）']
      ]
    },
    note: '**退燒 48 h 後改口服**；依藥敏選口服藥。Nitrofurantoin、fosfomycin 只用於單純 cystitis，不能治 pyelonephritis。',
    refs: ['CID 2011;52:e103']
  },
  {
    id: 'id-uti-dose',
    title: 'UTI 劑量範例（Table 14-12）',
    table: {
      head: ['類別', '口服（較輕）', '靜脈（較重）'],
      rows: [
        ['Folate inhibitors', 'TMP-SMX DS 160/800 mg q12h；trimethoprim 100 mg q12h', ''],
        ['FQ', 'Ciprofloxacin 250-500 mg q12h；levofloxacin 250-750 mg qd', 'Ciprofloxacin 400 mg q12h；levofloxacin 250-750 mg qd'],
        ['β-lactam/BLI', 'Amoxicillin-clavulanate 500/125 mg q12h 或 q8h', 'Ampicillin-sulbactam 1.5-3 g q6h；pip-tazo 3.375-4.5 g q6h'],
        ['Cephalosporins', 'Cephalexin 200-500 mg q6h；cefpodoxime 100 mg q12h', 'Cefazolin 1 g q8h；ceftriaxone 1 g qd；cefepime 1 g q8h'],
        ['Carbapenems', '', 'Ertapenem 1 g；imipenem 500 mg q6h；meropenem 1 g q8h'],
        ['Aminoglycoside', '', 'Gentamicin 5 mg/kg qd'],
        ['只用於 cystitis', 'Fosfomycin 3 g 單次；nitrofurantoin 100 mg q12h', '']
      ]
    },
    note: 'Nitrofurantoin 在 **CrCl < 30** 避免使用（Ch 15）。'
  },
  {
    id: 'id-male-gu-path',
    title: 'Prostatitis 與 epididymitis 致病機轉',
    points: [
      '**Acute bacterial prostatitis**：感染尿液經 prostatic ducts **逆流**進入前列腺（器械、阻塞、殘尿是誘因）-> 腺體急性化膿發炎、腫脹 -> 排尿阻塞',
      '前列腺上皮與脂質屏障讓多數抗生素不易進入；**FQ、TMP-SMX** 為脂溶性、能穿透 -> 首選；nitrofurantoin、β-lactam 組織濃度低',
      '**Chronic bacterial prostatitis**：腺體內結石或 biofilm 中殘留的細菌反覆把尿液重新感染 -> 同一菌的反覆 UTI',
      '**Prostatic massage** 把發炎腺體內的細菌擠入血液 -> 急性期禁忌',
      '**Epididymitis**：病原經**輸精管逆行**而來；年輕性活躍男性 -> 尿道的 **N. gonorrhoeae、C. trachomatis**；年長或泌尿器械後 -> 膀胱的**腸道 GNB**'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-male-gu',
    title: '男性泌尿生殖道感染',
    points: [
      '**男性 cystitis** 少見：反覆發作要想 **prostatitis**；危險因子：泌尿道異常、肛交、未割包皮；STI 也會 pyuria；**治療前一定要送 UA 與培養**',
      '**Acute bacterial prostatitis**：發燒、寒顫、dysuria、骨盆痛、阻塞症狀、**DRE 前列腺壓痛**；臨床診斷，尿液培養找病原；**禁止 prostatic massage**',
      '治療：**ciprofloxacin 500 mg q12h** 或 **TMP-SMX DS q12h，共 6 週**',
      '**Chronic bacterial prostatitis**：症狀 > 3 個月 + 細菌感染證據；FQ 或 TMP-SMX **至少 6 週**；多數慢性前列腺炎與 chronic pelvic pain syndrome 不是感染',
      '懷疑 **prostatic abscess** -> transrectal US',
      '**Epididymitis**：單側陰囊痛、副睪腫脹壓痛；送尿液培養 + **GC/CT NAAT**',
      '年輕性活躍：**ceftriaxone + doxycycline**；年長或泌尿器械後：**levofloxacin**'
    ],
    refs: ['Eur Urol 2001;40:576（EAU UTI & male genital infections）']
  },
  {
    id: 'id-cauti',
    title: 'Catheter-associated UTI',
    points: [
      '**最常見的醫療照護相關感染**；預防：放置時無菌技術、**不需要就拔**',
      '病原：E. coli 與其他 Enterobacterales、**P. aeruginosa**、staphylococci、enterococci、**yeast**',
      '最常見症狀是**發燒**；恥骨上或腰痛有定位價值，但常不典型',
      '**抗生素前**送 UA 與尿液培養；診斷：單一尿路病原 >= **10^5 CFU/mL**，且培養不超過兩種菌',
      '長期導尿一定有 pyuria、bacteriuria -> **沒有症狀就不治療**',
      '治療：**移除或更換導管** + 抗生素 **7-10 天**',
      '**Candiduria**：拔導管，**不給抗黴菌藥**，除非免疫低下且有 candidemia 高風險'
    ]
  }
]);

RPG.registerCase({
  id: 'id12-asb',
  chapter: 'ID12',
  title: '開刀前的尿液報告',
  patient: '84 歲女性 · 護理之家住民',
  summary: '跌倒髖部骨折，骨科說術前尿液檢查「有感染」，問要不要先打抗生素。',
  cards: ['id-uti-path', 'id-asb', 'id-uti-dx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '骨科病房會診。吳奶奶住護理之家，有失智症，昨天跌倒右髖骨折，預計明天開 hemiarthroplasty。',
        '入院常規 UA：**LE (+)、nitrite (+)、WBC 30/hpf**。尿液培養：**E. coli > 10^5 CFU/mL**。',
        '骨科住院醫師問：「尿道感染要不要先治療再開刀？」'
      ],
      clue: ['84F；失智；右髖骨折待手術', '**UA：pyuria、nitrite (+)**', '**E. coli > 10^5**'],
      choices: [{ label: '先確認她有沒有 UTI 症狀', next: 'assess' }]
    },
    assess: {
      text: '你到病房看吳奶奶，也打電話問護理之家。',
      checklist: {
        prompt: '評估：勾選你要確認的項目',
        submit: '送出',
        next: 'decide',
        options: [
          { id: 'fever', group: '病史', label: '有沒有發燒、寒顫', key: true, reveal: true,
            result: '入院以來 T 36.6-37.2°C', clue: '**無發燒**',
            miss: '發燒是判斷有沒有症狀的第一步。' },
          { id: 'mental', group: '病史', label: '意識和平常比有沒有改變（問照顧者）', key: true, reveal: true,
            result: '護理之家說「跟平常一樣」', clue: '意識在 baseline',
            miss: '失智病人沒辦法說 dysuria，要問照顧者意識和行為有沒有變化。' },
          { id: 'pe', group: '理學', label: '恥骨上壓痛、CVA tenderness', key: true, reveal: true,
            result: '無', clue: '無恥骨上壓痛、無 CVA tenderness',
            miss: '要找局部症狀。' },
          { id: 'foley', group: '病史', label: '有沒有導尿管', result: '沒有，包尿布' },
          { id: 'bcx', group: '檢驗', label: '血液培養', result: '已撤回',
            waste: '沒有發燒、沒有 sepsis，不需要血液培養。' },
          { id: 'rpt', group: '檢驗', label: '重複一次尿液培養', result: '已撤回',
            waste: '她沒有症狀，再驗一次也不會改變處置；不該治療的病人不需要追蹤培養。' }
        ]
      }
    },
    decide: {
      text: '沒有發燒、意識在 baseline、沒有局部症狀。你怎麼回覆骨科？',
      choices: [
        { label: '這是 **asymptomatic bacteriuria**，**不需要治療**，照常開刀', next: 'twist' },
        { label: '術前給 3 天 ceftriaxone，比較安全', next: 'end_tx',
          why: '老人與機構住民的 ASB 不治療。髖關節手術不是泌尿道手術；抗生素只會增加 C. difficile 和抗藥菌的風險。' },
        { label: 'Ciprofloxacin 3 天，口服就好', next: 'end_tx',
          why: 'ASB 不需要治療。FQ 是 C. difficile 的常見誘因，老人還有肌腱斷裂、QT 延長、譫妄的風險。' }
      ]
    },
    twist: {
      text: '骨科住院醫師再問：「那如果是泌尿科要幫一位 80 歲阿伯做 TURP，術前尿液培養也長 E. coli，也不用治療嗎？」',
      choices: [
        { label: '**泌尿道手術前的 ASB 要依藥敏治療**', next: 'end_good' },
        { label: '一樣，無症狀就不治療', next: 't_no' }
      ]
    },
    t_no: {
      text: '主治醫師搖頭。',
      feedback: 'ASB 只在兩種情況治療：**懷孕**、**泌尿道手術前**（黏膜出血會讓細菌入血）。',
      choices: [{ label: '重新回答', next: 'twist' }]
    },
    end_tx: {
      text: '吳奶奶手術順利，但術後第五天開始水瀉，**C. difficile toxin 陽性**。',
      ending: {
        grade: 'bad',
        title: '治療了不該治療的 ASB',
        pearls: [
          '老人、糖尿病、機構住民、脊髓損傷、導管病人的 ASB 不治療',
          '抗生素的代價：C. difficile、抗藥菌、藥物副作用'
        ]
      }
    },
    end_good: {
      text: '吳奶奶沒有用抗生素，手術順利，兩週後回到護理之家。',
      ending: {
        grade: 'good',
        title: 'Asymptomatic bacteriuria',
        pearls: [
          'UA 異常 + 培養陽性不等於 UTI，要有症狀',
          'ASB 只在懷孕、泌尿道手術前治療',
          '失智病人要問照顧者意識和行為有沒有改變'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id12-cystitis',
  chapter: 'ID12',
  title: '期中考週的頻尿',
  patient: '24 歲女性 · 研究生',
  summary: '兩天來小便刺痛、一直想上廁所。不發燒。',
  cards: ['id-uti-path', 'id-cystitis', 'id-uti-dx', 'id-uti-dose'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診。楊小姐兩天來**小便刺痛、頻尿、急尿**，下腹悶悶的。沒有發燒，沒有腰痛，沒有陰道分泌物增加。',
        '有固定男友，避孕方式是保險套加 **spermicide**。月經兩週前來。最近三個月沒有用過抗生素。',
        '本院 antibiogram：門診 E. coli 對 **TMP-SMX 抗藥 25%**。'
      ],
      clue: ['24F；dysuria、頻尿、急尿 2 天', '無發燒、無腰痛、無分泌物', '使用 **spermicide**', '本地 E. coli **TMP-SMX 抗藥 25%**'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '看起來像單純 cystitis。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'hcg', group: '檢驗', label: 'Urine hCG', key: true, reveal: true,
            result: '陰性', clue: '未懷孕',
            miss: '懷孕會改變用藥（FQ、TMP-SMX 要避免）和療程，也讓這變成 complicated UTI。' },
          { id: 'pyelo', group: '理學', label: '體溫、CVA tenderness', key: true, reveal: true,
            result: 'T 36.9°C；**無 CVA tenderness**', clue: '無 pyelonephritis 徵象',
            miss: '要排除 pyelonephritis：發燒、腰痛、CVA tenderness。' },
          { id: 'ua', group: '檢驗', label: 'UA dipstick',
            result: '**LE (+)、nitrite (+)**', clue: 'UA：LE (+)、nitrite (+)' },
          { id: 'ucx', group: '檢驗', label: '尿液培養', result: '已撤回',
            waste: '健康、非懷孕女性的單純 cystitis 可以依症狀治療，不需要常規培養。' },
          { id: 'us', group: '影像', label: '腎臟超音波', result: '已撤回',
            waste: '單純 cystitis 不需要影像。' }
        ]
      }
    },
    tx: {
      text: '單純 cystitis。開藥？',
      choices: [
        { label: '**Nitrofurantoin 100 mg q12h x 5 天**（或 fosfomycin 3 g 單次）', next: 'recur' },
        { label: 'TMP-SMX DS q12h x 3 天', next: 't_sxt' },
        { label: 'Ciprofloxacin 250 mg q12h x 3 天', next: 't_fq' },
        { label: 'Amoxicillin-clavulanate x 5 天', next: 't_bl' }
      ]
    },
    t_sxt: {
      text: '主治醫師搖頭。',
      feedback: '本地抗藥 25%，**> 20% 就避免 TMP-SMX** 當經驗性用藥。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_fq: {
      text: '主治醫師搖頭。',
      feedback: 'FQ 在單純 cystitis 是「**沒有其他選擇時**」的替代藥。留給更需要它的感染，也避免副作用。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_bl: {
      text: '主治醫師搖頭。',
      feedback: '口服 β-lactam 治療 cystitis 效果較差，不是第一線。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    recur: {
      text: [
        '三天後症狀消失。她問要不要回來驗尿確認治好了。',
        '接下來六個月，她又發作了三次，每次都在性交後一兩天出現，前兩次的培養菌種不同。'
      ],
      clue: ['6 個月內 3 次，皆在**性交後**', '菌種不同（reinfection）'],
      choices: [
        { label: '**性交後單次預防**（nitrofurantoin 100 mg、TMP-SMX SS 或 cephalexin 250 mg）；建議**停用 spermicide**', next: 'end_good' },
        { label: '每次治療後都驗尿液培養，確認根除', next: 'r_toc' },
        { label: '安排膀胱鏡和 CT urography 找結構異常', next: 'r_uro' }
      ]
    },
    r_toc: {
      text: '主治醫師搖頭。',
      feedback: '**治療後不需要追蹤培養**，除非症狀持續超過 48 h。',
      choices: [{ label: '重新決定', next: 'recur' }]
    },
    r_uro: {
      text: '主治醫師搖頭。',
      feedback: '年輕女性的反覆 cystitis 多半是 **reinfection**（不同菌），危險因子是性交和 spermicide。**Relapse**（同一菌、停藥 2 週內再發）才需要泌尿科評估。',
      choices: [{ label: '重新決定', next: 'recur' }]
    },
    end_good: {
      text: '改用其他避孕方式並開始性交後預防，之後半年只發作一次。',
      ending: {
        grade: 'good',
        title: 'Uncomplicated cystitis，反覆發作',
        pearls: [
          '單純 cystitis 依症狀治療，不需常規培養，治療後不需追蹤培養',
          '第一線：nitrofurantoin 5 d、TMP-SMX 3 d（本地抗藥 < 20%）、fosfomycin 單次',
          'FQ 是沒有其他選擇時才用；口服 β-lactam 效果較差',
          'Reinfection（不同菌）-> 性交後或連續預防、停 spermicide；relapse（同菌、2 週內）-> 泌尿科評估'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id12-pyelo-preg',
  chapter: 'ID12',
  title: '懷孕 26 週的腰痛',
  patient: '30 歲女性 · 第一胎 26 週',
  summary: '發燒到 39 度、右腰痛、一直吐。',
  cards: ['id-uti-path', 'id-pyelo', 'id-cystitis', 'id-asb'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。黃小姐懷第一胎 26 週，昨天開始畏寒發燒 39.2°C、**右腰痛**、吐了四次。前幾天有頻尿，以為是懷孕正常的。',
        'BP 104/66、HR 112。**右側 CVA tenderness**。'
      ],
      clue: ['30F；**懷孕 26 週**', '發燒 39.2°C、右腰痛、嘔吐', '**右 CVA tenderness**'],
      choices: [{ label: '開始處置', next: 'workup' }]
    },
    workup: {
      text: '懷孕的 pyelonephritis。',
      checklist: {
        prompt: '醫囑：勾選你要的項目',
        submit: '送出醫囑',
        next: 'tx',
        options: [
          { id: 'ucx', group: '檢驗', label: '尿液培養（抗生素前）', key: true, reveal: true,
            result: '送驗中', clue: '尿液培養已送',
            miss: 'Pyelonephritis 一定要在抗生素前送尿液培養，懷孕更要依藥敏調整。' },
          { id: 'bcx', group: '檢驗', label: '血液培養 x 2', key: true, reveal: true,
            result: '送驗中', clue: '血液培養已送',
            miss: '住院的 pyelonephritis 要抽血液培養，15-20% 有菌血症。' },
          { id: 'ua', group: '檢驗', label: 'UA', key: true, reveal: true,
            result: 'Pyuria、hematuria、**WBC casts**', clue: 'UA：pyuria、**WBC casts**',
            miss: 'UA 支持診斷。' },
          { id: 'ob', group: '會診', label: '會診產科、胎心監測', key: true, reveal: true,
            result: '胎心 150 bpm，無子宮收縮', clue: '胎兒穩定',
            miss: '懷孕病人要一起評估胎兒與早產徵兆。' },
          { id: 'lab', group: '檢驗', label: 'CBC、Cr', result: 'WBC 16,800；Cr 0.6' },
          { id: 'us', group: '影像', label: '腎臟超音波（今天）', result: '已撤回',
            waste: '影像在治療 48-72 h 仍未改善時才需要，用來找阻塞或膿瘍。' }
        ]
      }
    },
    tx: {
      text: '經驗性治療？',
      choices: [
        { label: '**住院，IV ceftriaxone 1-2 g qd**', next: 'report' },
        { label: 'Levofloxacin 750 mg qd x 5 天，門診追蹤', next: 't_fq' },
        { label: 'Nitrofurantoin，懷孕可以用', next: 't_nf' },
        { label: 'Meropenem，懷孕要最保險', next: 't_mero' }
      ]
    },
    t_fq: {
      text: '主治醫師搖頭。',
      feedback: '**懷孕不用 FQ**；而且懷孕的 pyelonephritis 一開始要**住院打 IV**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_nf: {
      text: '主治醫師搖頭。',
      feedback: 'Nitrofurantoin 只在尿中有濃度，血中和腎組織濃度很低，**不能治 pyelonephritis**。懷孕的 cystitis 才用。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_mero: {
      text: '主治醫師搖頭。',
      feedback: '沒有 MDRO 風險（沒有近期抗生素、住院、旅遊），也沒有休克。β-lactam 如 ceftriaxone 就夠，carbapenem 留給 ESBL。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    report: {
      text: [
        '尿液與血液培養：**E. coli**。藥敏：ceftriaxone、cefazolin、**cephalexin S**；ampicillin R、**TMP-SMX R**。',
        '入院後 36 小時退燒，現在已經**退燒 48 小時**，可以進食。'
      ],
      clue: ['E. coli：**cephalexin S**；TMP-SMX R', '**退燒 48 h**，可進食'],
      choices: [
        { label: '改**口服 cephalexin**（依藥敏）完成療程；之後產檢**定期篩檢 bacteriuria**', next: 'end_good' },
        { label: '繼續 IV ceftriaxone 打滿 14 天', next: 'end_iv',
          why: '退燒 48 h、能進食，就可以依藥敏改口服。繼續住院打 IV 沒有好處。' },
        { label: '改口服 TMP-SMX', next: 'r_sxt' }
      ]
    },
    r_sxt: {
      text: '主治醫師搖頭。',
      feedback: '這株 **TMP-SMX 抗藥**。口服藥要照藥敏選。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    end_iv: {
      text: '黃小姐多住了十天醫院，第 9 天 IV 處發生 phlebitis。',
      ending: {
        grade: 'ok',
        title: 'Pyelonephritis 治好了，但沒有及早改口服',
        pearls: [
          '退燒 48 h 改口服，依藥敏選藥'
        ]
      }
    },
    end_good: {
      text: '黃小姐出院完成口服療程，之後每次產檢篩檢尿液培養都陰性，足月自然產。',
      ending: {
        grade: 'good',
        title: 'Pyelonephritis in pregnancy',
        pearls: [
          '懷孕的 pyelonephritis：住院、IV β-lactam；不用 FQ',
          'Nitrofurantoin、fosfomycin 不能治 pyelonephritis',
          '退燒 48 h 改口服，依藥敏',
          '懷孕的 ASB 要治療，所以要篩檢'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id12-obstruct',
  chapter: 'ID12',
  title: '第三天還在燒',
  patient: '66 歲男性 · 糖尿病',
  summary: 'Pyelonephritis 住院打了三天 ceftriaxone，還是 39 度。',
  cards: ['id-uti-path', 'id-pyelo', 'id-uti-dose'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。李先生糖尿病十年，三個月前因為肺炎住院打過 pip-tazo。這次因為左腰痛、發燒住院，抽完尿液和血液培養後開始 **ceftriaxone 2 g qd**。',
        '今天第 3 天，仍然 **39.1°C**，BP 102/60，左腰痛更厲害。'
      ],
      clue: ['66M；DM；**三個月前用過 pip-tazo**', '左側 pyelonephritis，ceftriaxone **第 3 天仍發燒**'],
      choices: [{ label: '想想為什麼沒有好', next: 'why' }]
    },
    why: {
      text: '治療不如預期時要問三件事：診斷對嗎？藥物對嗎？感染源控制了嗎？',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'act',
        options: [
          { id: 'cx', group: '檢驗', label: '追入院時的尿液、血液培養與藥敏', key: true, reveal: true,
            result: '尿液與血液：**E. coli，ESBL**。Ceftriaxone **R**、cipro **R**、**ertapenem S**、**TMP-SMX S**', clue: '**ESBL E. coli**：ceftriaxone R、cipro R、ertapenem S、TMP-SMX S',
            miss: '藥物對嗎？先看培養和藥敏。' },
          { id: 'ct', group: '影像', label: '腹部 CT（或腎臟超音波）', key: true, reveal: true,
            result: '**左側輸尿管 8 mm 結石**，**hydronephrosis**，腎周 stranding，無膿瘍', clue: '**左輸尿管結石 + hydronephrosis**',
            miss: '治療 48-72 h 沒改善就要影像找阻塞、膿瘍：感染源控制了嗎？' },
          { id: 'bcx', group: '檢驗', label: '重複血液培養', result: '送驗中' },
          { id: 'mrsa', group: '治療', label: '加上 vancomycin', result: '已撤回',
            waste: '沒有 Gram-positive 感染證據。問題是 ESBL 與阻塞，不是 MRSA。' }
        ]
      }
    },
    act: {
      text: 'ESBL E. coli + 阻塞性 pyelonephritis。現在？',
      choices: [
        { label: '改 **ertapenem**，泌尿科**緊急減壓**（ureteral stent 或 nephrostomy）', next: 'step' },
        { label: '改 meropenem + vancomycin，再觀察兩天', next: 'a_nodrain' },
        { label: '請泌尿科放 stent，抗生素維持 ceftriaxone', next: 'a_cro' }
      ]
    },
    a_nodrain: {
      text: '主治醫師搖頭。',
      feedback: '阻塞沒解除，抗生素再強也很難控制。**感染性阻塞要緊急減壓。** Vancomycin 也不需要。',
      choices: [{ label: '重新決定', next: 'act' }]
    },
    a_cro: {
      text: '主治醫師搖頭。',
      feedback: 'ESBL 對 ceftriaxone 抗藥，要換 **carbapenem**。減壓和換藥兩件事都要做。',
      choices: [{ label: '重新決定', next: 'act' }]
    },
    step: {
      text: [
        '當晚放了 ureteral stent，流出混濁尿液。隔天退燒。',
        '第 6 天，**已退燒 48 小時以上**，血壓正常，可以進食。重複血液培養陰性。'
      ],
      clue: ['Stent 減壓後退燒', '退燒 > 48 h；重複血培養陰性'],
      choices: [
        { label: '改**口服 TMP-SMX DS q12h**（藥敏 S）完成 **14 天**；之後安排處理結石', next: 'end_good' },
        { label: 'Ertapenem 繼續打完 14 天', next: 'end_iv',
          why: '退燒 48 h 就可以依藥敏改口服。TMP-SMX 敏感，不需要整個療程都用 carbapenem。' },
        { label: '改口服 ciprofloxacin', next: 's_fq' },
        { label: '改口服 nitrofurantoin', next: 's_nf' }
      ]
    },
    s_fq: {
      text: '主治醫師搖頭。',
      feedback: '這株 **ciprofloxacin 抗藥**。',
      choices: [{ label: '重新決定', next: 'step' }]
    },
    s_nf: {
      text: '主治醫師搖頭。',
      feedback: 'Nitrofurantoin 沒有組織和血中濃度，不能治 pyelonephritis 或菌血症。',
      choices: [{ label: '重新決定', next: 'step' }]
    },
    end_iv: {
      text: '李先生多住了一週打 ertapenem，出院後三個月，痰培養長出 **carbapenem-resistant Klebsiella**。',
      ending: {
        grade: 'ok',
        title: '感染控制了，但 carbapenem 用太久',
        pearls: [
          '有敏感的口服藥就改口服；carbapenem 的使用會選出 CRE'
        ]
      }
    },
    end_good: {
      text: '李先生口服 TMP-SMX 完成療程，一個月後泌尿科做 ureteroscopy 取石、移除 stent。',
      ending: {
        grade: 'good',
        title: 'Obstructive pyelonephritis，ESBL E. coli',
        pearls: [
          '治療 48-72 h 沒改善 -> 影像找阻塞、膿瘍；同時看藥敏',
          '近期廣效抗生素、醫療暴露 -> MDRO 風險',
          'ESBL -> carbapenem；感染性阻塞 -> 緊急減壓',
          '退燒 48 h 依藥敏改口服；TMP-SMX 14 天'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id12-prost',
  chapter: 'ID12',
  title: '坐不下去的發燒',
  patient: '61 歲男性 · 會計師',
  summary: '發燒、寒顫、小便痛，會陰部痛到坐不下去，尿也解不太出來。',
  cards: ['id-male-gu-path', 'id-male-gu', 'id-cystitis'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。周先生兩天來發燒 38.8°C、寒顫、**小便刺痛**、頻尿，**會陰部痛**到坐不下去，尿流很細。',
        'BP 130/78、HR 98。'
      ],
      clue: ['61M；發燒、寒顫、dysuria', '**會陰痛**、尿流細'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '你懷疑 acute bacterial prostatitis。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'dre', group: '理學', label: '輕柔的 DRE', key: true, reveal: true,
            result: '前列腺**腫大、溫熱、明顯壓痛**', clue: '**DRE：前列腺壓痛**',
            miss: 'Acute bacterial prostatitis 是臨床診斷，DRE 的前列腺壓痛是關鍵。' },
          { id: 'ucx', group: '檢驗', label: 'UA、尿液培養', key: true, reveal: true,
            result: 'Pyuria；培養 **E. coli**（cipro S、TMP-SMX S）', clue: 'Urine：**E. coli**（cipro S、TMP-SMX S）',
            miss: '尿液培養找病原；男性 UTI 治療前一定要送培養。' },
          { id: 'pvr', group: '檢查', label: '膀胱超音波測殘尿', result: '殘尿 180 mL', clue: '殘尿 180 mL' },
          { id: 'bcx', group: '檢驗', label: '血液培養', result: '陰性' },
          { id: 'massage', group: '檢查', label: 'Prostatic massage 取前列腺液', result: '已撤回',
            waste: '急性前列腺炎**禁止按摩**，會把細菌擠進血液造成菌血症。' },
          { id: 'psa', group: '檢驗', label: 'PSA', result: '已撤回',
            waste: '急性前列腺炎會讓 PSA 假性升高，現在驗沒有意義。' },
          { id: 'trus', group: '影像', label: 'Transrectal ultrasound', result: '已撤回',
            waste: '先治療。治療反應不好、懷疑 prostatic abscess 時再做。' }
        ]
      }
    },
    tx: {
      text: 'Acute bacterial prostatitis，E. coli。治療？',
      choices: [
        { label: '**Ciprofloxacin 500 mg q12h**（或 TMP-SMX DS q12h），**共 6 週**', next: 'end_good' },
        { label: 'Nitrofurantoin 100 mg q12h x 7 天', next: 't_nf' },
        { label: 'Cephalexin 500 mg q6h x 7 天', next: 't_ceph' },
        { label: 'Ciprofloxacin 500 mg q12h x 7 天，和一般男性 cystitis 一樣', next: 'end_short',
          why: '前列腺組織的細菌難根除，治療要 **6 週**。療程太短會復發，變成 chronic bacterial prostatitis。' }
      ]
    },
    t_nf: {
      text: '主治醫師搖頭。',
      feedback: 'Nitrofurantoin 在前列腺組織的濃度很低；懷疑 prostatitis 就避免 nitrofurantoin 和 β-lactam。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_ceph: {
      text: '主治醫師搖頭。',
      feedback: 'β-lactam 在前列腺組織的濃度低。用 **FQ 或 TMP-SMX**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_short: {
      text: '周先生一週後症狀消失。停藥三週後又發燒、會陰痛，尿液培養又是同一株 E. coli。',
      ending: {
        grade: 'ok',
        title: 'Prostatitis 療程太短，復發',
        pearls: [
          'Acute bacterial prostatitis：FQ 或 TMP-SMX，共 6 週'
        ]
      }
    },
    end_good: {
      text: '周先生 48 小時內退燒，排尿改善。完成六週 ciprofloxacin，沒有復發。',
      ending: {
        grade: 'good',
        title: 'Acute bacterial prostatitis',
        pearls: [
          '發燒 + dysuria + 會陰痛 + 前列腺壓痛 -> 臨床診斷',
          '禁止 prostatic massage；急性期不驗 PSA',
          'Ciprofloxacin 或 TMP-SMX x 6 週；避免 nitrofurantoin、β-lactam',
          '反應不好 -> TRUS 找 prostatic abscess'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id12-epid',
  chapter: 'ID12',
  title: '單側的陰囊痛',
  patient: '23 歲男性 · 外送員',
  summary: '左邊陰囊腫痛兩天，小便也有點刺痛。',
  cards: ['id-male-gu-path', 'id-male-gu', 'id-uti-dx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。小廖兩天來**左側陰囊漸進性腫痛**，小便有點刺痛。一個月前有新的性伴侶，沒有固定用保險套。',
        'T 37.8°C。左側**副睪腫脹壓痛**，睪丸位置正常，**cremasteric reflex 存在**。'
      ],
      clue: ['23M；左陰囊漸進腫痛 2 天、dysuria', '新性伴侶、未固定用保險套', '**副睪壓痛**；睪丸位置正常、cremasteric reflex (+)'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '臨床像 epididymitis。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'naat', group: '檢驗', label: '尿液 **GC/CT NAAT**', key: true, reveal: true,
            result: '**C. trachomatis (+)**；N. gonorrhoeae (-)', clue: '**C. trachomatis (+)**',
            miss: '年輕性活躍男性的 epididymitis，最常見是 GC、CT。' },
          { id: 'ucx', group: '檢驗', label: 'UA、尿液培養', key: true, reveal: true,
            result: 'Pyuria；培養無生長', clue: 'Pyuria，尿液培養陰性',
            miss: 'Epididymitis 要送尿液培養，排除腸道菌。' },
          { id: 'doppler', group: '影像', label: '陰囊 Doppler 超音波',
            result: '副睪血流增加；睪丸血流正常', clue: '睪丸血流正常（非 torsion）' },
          { id: 'sti', group: '檢驗', label: 'HIV、梅毒篩檢', result: '陰性' }
        ]
      }
    },
    tx: {
      text: '治療？',
      choices: [
        { label: '**Ceftriaxone IM 單次 + doxycycline 100 mg q12h**', next: 'partner' },
        { label: 'Levofloxacin 單用', next: 't_lev' },
        { label: 'Cephalexin', next: 't_ceph' }
      ]
    },
    t_lev: {
      text: '主治醫師搖頭。',
      feedback: 'Levofloxacin 是給**年長或泌尿器械後**的 epididymitis（腸道 GNB）。年輕性活躍男性要涵蓋 GC 和 CT：ceftriaxone + doxycycline。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_ceph: {
      text: '主治醫師搖頭。',
      feedback: 'Cephalexin 不涵蓋 C. trachomatis，對淋病也不夠。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    partner: {
      text: '小廖問：「我吃藥就好了吧？」',
      choices: [
        { label: '**性伴侶也要檢查和治療**；治療完成前避免性行為', next: 'end_good' },
        { label: '你吃完藥就好，不必告訴對方', next: 'p_no' }
      ]
    },
    p_no: {
      text: '主治醫師搖頭。',
      feedback: '伴侶不治療，他很快會再被感染，伴侶也可能出現 PID 等併發症。',
      choices: [{ label: '重新回答', next: 'partner' }]
    },
    end_good: {
      text: '一週後小廖腫痛消退。伴侶也驗出 chlamydia，一起治療。',
      ending: {
        grade: 'good',
        title: 'Epididymitis（C. trachomatis）',
        pearls: [
          '單側陰囊痛 + 副睪壓痛；排除 torsion',
          '尿液培養 + GC/CT NAAT',
          '年輕性活躍：ceftriaxone + doxycycline；年長或器械後：levofloxacin',
          '性伴侶要一起評估治療'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id12-cauti',
  chapter: 'ID12',
  title: '加護病房的 Foley',
  patient: '78 歲男性 · 腦中風 ICU 第 9 天',
  summary: '一直放著導尿管，今天新的發燒，找不到其他來源。',
  cards: ['id-uti-path', 'id-cauti', 'id-asb'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '神經 ICU 會診。陳伯伯腦幹中風住 ICU 第 9 天，入院就放了 Foley，一直沒拔。今天新的發燒 **38.6°C**，HR 108，血壓穩定。',
        '中心靜脈導管第 3 天已經拔掉，現在只有周邊 IV。沒有腹瀉。'
      ],
      clue: ['78M；中風 ICU 第 9 天', '**Foley 9 天**', '新發燒 38.6°C'],
      choices: [{ label: '找發燒來源', next: 'workup' }]
    },
    workup: {
      text: '找發燒的來源。',
      checklist: {
        prompt: '醫囑：勾選你要的項目',
        submit: '送出醫囑',
        next: 'tx',
        options: [
          { id: 'ucx', group: '檢驗', label: 'UA + 尿液培養（抗生素前，從採檢口或新導管）', key: true, reveal: true,
            result: 'Pyuria；培養 **P. aeruginosa > 10^5**，單一菌種（cefepime S、cipro S）', clue: '**P. aeruginosa > 10^5**，單一菌',
            miss: '抗生素前一定要送 UA 與尿液培養。' },
          { id: 'bcx', group: '檢驗', label: '血液培養 x 2', key: true, reveal: true,
            result: '陰性', clue: '血液培養陰性',
            miss: '新發燒要抽血液培養。' },
          { id: 'cxr', group: '影像', label: 'CXR', key: true, reveal: true,
            result: '無新浸潤', clue: 'CXR 無肺炎',
            miss: '要排除其他來源：肺炎是 ICU 發燒的常見原因。' },
          { id: 'iv', group: '理學', label: '檢查 IV 位置、褥瘡', key: true, reveal: true,
            result: 'IV 位置乾淨；無褥瘡', clue: '無其他明顯來源',
            miss: '要排除其他來源。' },
          { id: 'cdiff', group: '檢驗', label: 'C. difficile toxin', result: '已撤回',
            waste: '沒有腹瀉，不要驗 C. difficile。' }
        ]
      }
    },
    tx: {
      text: '發燒、沒有其他來源、尿液單一 P. aeruginosa > 10^5。處置？',
      choices: [
        { label: '**拔除 Foley**（評估是否還需要，需要就更換）+ 依藥敏 **cefepime**，共 **7-10 天**', next: 'candida' },
        { label: '依藥敏給 cefepime，Foley 繼續留著', next: 't_keep' },
        { label: '長期導尿本來就有菌尿，不用治療', next: 't_none' }
      ]
    },
    t_keep: {
      text: '主治醫師搖頭。',
      feedback: '細菌躲在導管的 biofilm 裡。CAUTI 要**拔除或更換導管**加抗生素。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_none: {
      text: '主治醫師搖頭。',
      feedback: '沒有症狀的菌尿不治療。他有**發燒**、沒有其他來源、單一尿路病原 > 10^5，這是有症狀的 CAUTI。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    candida: {
      text: [
        'Foley 拔除，陳伯伯可以自解，兩天後退燒。',
        '同一天，隔壁床的 70 歲阿嬤也有 Foley，**沒有發燒**、不是免疫低下。例行尿液培養長出 **Candida albicans > 10^5**。護理師問要不要開 fluconazole。'
      ],
      clue: ['隔壁床：Foley、無症狀、非免疫低下，**Candiduria**'],
      choices: [
        { label: '**拔除導管**，不給抗黴菌藥', next: 'end_good' },
        { label: 'Fluconazole 400 mg qd x 14 天', next: 'c_fluc' },
        { label: 'Micafungin，避免 fluconazole 抗藥', next: 'c_mica' }
      ]
    },
    c_fluc: {
      text: '主治醫師搖頭。',
      feedback: 'Candiduria 的處理是**拔導管**；只有**免疫低下且有 candidemia 高風險**才給抗黴菌藥。',
      choices: [{ label: '重新決定', next: 'candida' }]
    },
    c_mica: {
      text: '主治醫師搖頭。',
      feedback: '不需要抗黴菌藥。而且 echinocandin 在尿中的濃度很低。',
      choices: [{ label: '重新決定', next: 'candida' }]
    },
    end_good: {
      text: '陳伯伯完成 7 天 cefepime 後轉普通病房。隔壁阿嬤拔管後追蹤，沒有發燒。',
      ending: {
        grade: 'good',
        title: 'CAUTI 與 candiduria',
        pearls: [
          'CAUTI：發燒 + 無其他來源 + 單一尿路病原 >= 10^5',
          '抗生素前送 UA 與培養；拔除或更換導管 + 7-10 天',
          '長期導尿無症狀的菌尿不治療',
          'Candiduria：拔導管，不給抗黴菌藥（除非免疫低下、candidemia 高風險）',
          '不需要就拔導管是最好的預防'
        ]
      }
    }
  }
});
