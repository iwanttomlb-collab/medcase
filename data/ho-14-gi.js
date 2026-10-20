// HO 14 GI cancers: colorectal, pancreas, HCC, gastric/esophageal. Source: Pocket Medicine Ch 5, p49-53 of 書頁.txt

RPG.registerCards('HO14', [
  {
    id: 'ho-crc-risk',
    title: 'Colorectal cancer：風險與篩檢',
    points: [
      '美國第三常見、癌症死因第二；90% > 50 歲；約 75% 散發性',
      'IBD 每年約 0.3% 風險，隨範圍與病程增加',
      'Primary prevention：50-59 歲且 10 年 CRC 風險 >= 10% 可用 **ASA**（至少 10 年）',
      '**篩檢：一般風險 45 歲開始**；家族史 40 歲或比最早病例早 10 年，每 5 年；IBD 診斷後 8-10 年開始，每 1-2 年；疑似遺傳症候群 20-25 歲，每年',
      '**Colonoscopy** 首選（> 1 cm 病灶 Se 90%）；有息肉 3-5 年後再做；adenoma > 2.5 cm、villous、sessile 惡性風險高',
      '其他：flex sig、CT colonography、**FIT-DNA**（Se/Sp 約 90%）、FOBT（每年）',
      '表現：**遠端** -> 排便習慣與粗細改變、阻塞、血便；**近端** -> **缺鐵性貧血**、悶痛'
    ],
    table: {
      head: ['遺傳症候群', 'CRC 終身風險', '重點'],
      rows: [
        ['**Lynch（HNPCC）**', '約 80%', '最常見（約 3%）；**MMR 基因（MSH2、MLH1）**；右側；子宮內膜、卵巢、胃、泌尿上皮、小腸、胰臟'],
        ['**FAP**', '100%', '**APC**；年輕時上千顆息肉；甲狀腺、胃、小腸'],
        ['MAP', '40-100%', 'MUTYH；**AR**；多發息肉但 FAP 陰性']
      ]
    },
    refs: ['CA Cancer J Clin 2023;73:17', 'JAMA 2021;325:1965（USPSTF）', 'NEJM 2022;387:1547（NordICC）', 'NEJM 2012;366:687（polypectomy）', 'NEJM 2024;390:984（FIT-DNA）']
  },
  {
    id: 'ho-crc-tx',
    title: 'Colorectal cancer：分期與治療',
    points: [
      '分子：**MSS vs MSI-H**（MMR 缺陷，約 15%，多為早期；轉移約 5%）；APC 80%、KRAS 40%、TP53、BRAF 約 15%、HER2 < 5%',
      '分期：CT 胸腹骨盆；直腸加 pelvic MRI；**CEA baseline**（追蹤用，不用篩檢）'
    ],
    table: {
      head: ['Stage', '定義', '治療'],
      rows: [
        ['I', '黏膜下、肌層', '**手術**（至少 12 顆 LN）'],
        ['II', '漿膜、腹膜、直接侵犯', '手術 ± 高風險（阻塞、穿孔、LN 取樣不足）化療'],
        ['**III**', '**LN 陽性**', '**手術 + FOLFOX 6 個月或 CAPOX 3-6 個月**；直腸癌術前 RT ± chemo'],
        ['IV', '遠處轉移', '化療（高風險 FOLFOXIRI）± anti-PD-1（MSI-H）；**oligomets 可切除仍有機會治癒**']
      ]
    },
    note: '轉移性用藥：FOLFOX、FOLFIRI ± bevacizumab；anti-EGFR（cetuximab、panitumumab）；BRAF V600E：encorafenib + binimetinib + cetuximab；HER2+：T-DXd 等；KRAS G12C：sotorasib/adagrasib + anti-EGFR；**MSI-H/dMMR 或 POLE：ICI**；局部晚期 dMMR 直腸癌：dostarlimab；後線 trifluridine-tipiracil。',
    refs: ['NEJM 2018;378:1177（IDEA）', 'NEJM 2006;355:1114（rectal）', 'NEJM 2004;350:2335（bevacizumab）', 'NEJM 2019;381:1632（BEACON）', 'NEJM 2024;390:1949 & 391:2014（ICI in MSI-H）', 'NEJM 2022;386:2362（dostarlimab rectal）']
  },
  {
    id: 'ho-pancreas',
    title: 'Pancreatic adenocarcinoma',
    points: [
      '美國癌症死因第四；60-80 歲；男 > 女',
      '危險因子：**抽菸（約 25%）**、肥胖、慢性胰臟炎、T2DM；遺傳 5-10%（**BRCA2**、PRSS1/SPINK1、CDKN2A、Peutz-Jeghers）',
      '約 60% 在頭部；**KRAS > 90%**、p16、p53、SMAD4、BRCA 10%',
      '表現：**無痛性黃疸**（頭部）、痛往背部放射、體重與食慾下降；**新發非典型 DM（25%）**；**Trousseau（遊走性血栓靜脈炎）**',
      'PE：**Courvoisier sign**（可觸及無壓痛膽囊）、肝腫大、腹水、**Virchow node**',
      'Dx：**pancreatic protocol CT**（動脈、靜脈期）或 MRI；看不到但懷疑 -> EUS、ERCP、MRCP；**EUS-FNA** 切片（手術候選首選）；有轉移則切轉移處',
      '**CA19-9**：術前 baseline、術後追蹤（良性膽道疾病也會上升）；**所有病人做 germline testing**'
    ],
    table: {
      head: ['分期', '血管關係', '治療'],
      rows: [
        ['**Resectable**', '無動脈接觸；靜脈接觸 <= 180 度且通暢', '**Whipple + 輔助 mFOLFIRINOX**（ECOG 0-1），否則 gem + cape'],
        ['Borderline', '有限的動脈或靜脈接觸', 'Neoadjuvant chemo ± RT -> 重新分期 -> 可能切除'],
        ['Locally advanced', 'SMA/CA > 180 度或靜脈無法重建', '多為緩和；少數 FOLFIRINOX + RT 後探查'],
        ['**Metastatic**', '遠處轉移', 'PS 好：**FOLFIRINOX** 或 **gem + nab-paclitaxel**；**gBRCA -> olaparib 維持**；MSI-H -> ICI；PS 差：gemcitabine']
      ]
    },
    note: '緩和：膽道或胃出口阻塞放 stent；疼痛 opioid、celiac plexus neurolysis；體重下降補胰酵素。預後：切除 + mFOLFIRINOX 約 50 個月；轉移約 1 年。',
    refs: ['Lancet 2016;388:73', 'NEJM 2018;379:2395（mFOLFIRINOX adjuvant）', 'NEJM 2011;364:1817（FOLFIRINOX）', 'NEJM 2013;369:1691（gem + nab-P）', 'NEJM 2019;381:317（olaparib POLO）']
  },
  {
    id: 'ho-panc-cyst',
    title: 'Pancreatic cystic lesions',
    points: [
      '**Serous cystadenoma**：通常良性；中央疤痕或蜂巢狀',
      '**MCN**：年輕女性；體尾部多房、ovarian-type stroma、黏液豐富、囊液 **CEA 高**；癌前',
      '**IPMN**：主胰管或分支；癌前'
    ],
    refs: ['Am J Gastroenterol 2018;113:464']
  },
  {
    id: 'ho-hcc',
    title: 'Hepatocellular carcinoma',
    points: [
      '全球癌症死因第三（非洲、亞洲）',
      '**肝硬化 70-90%**；**HBV、HCV（約 75%）**、HBV/HDV；**HBV 可在無肝硬化下致 HCC**；酒精、菸、aflatoxin；NASH、DM、AIH、hemochromatosis',
      '**篩檢（肝硬化、慢性 HBV）：U/S + AFP 每 6 個月**；發現病灶或 AFP 上升 -> **三相 CT 或 MRI**',
      '**高風險病人可靠典型影像診斷，不需切片**',
      '肝腫塊只有 15% 是 HCC，轉移更常見',
      '**局部（目標治癒）：切除（首選）**、ablation、TACE、SBRT；肝儲備不足 -> **肝移植**',
      '**全身：atezolizumab + bevacizumab（首選）**；後線 lenvatinib、sorafenib、PD-(L)1'
    ],
    refs: ['Lancet 2022;400:1345（HCC）', 'NEJM 1996;334:693（Milan）', 'NEJM 2020;382:1894（IMbrave150）']
  },
  {
    id: 'ho-gastric',
    title: 'Gastric 與 esophageal cancer',
    points: [
      '**食道**：美國以 adeno 為主（**GERD -> Barrett**）；全球 SCC 較多（菸、酒）',
      '**胃**：adeno；**H. pylori**、家族史、Lynch、HDGC（CDH1）、亞硝胺、菸酒',
      'Barrett 篩檢：多個危險因子（裂孔疝氣、>= 50 歲、男、慢性 GERD、肥胖、抽菸、家族史）-> EGD；Barrett 每 3-5 年',
      '胃癌篩檢在日、韓、智利等高盛行地區',
      '表現：**吞嚥困難**、體重下降、早飽、噁心、潛藏 GI 出血；**Leser-Trélat**（突然多發 seborrheic keratoses）',
      'Dx：內視鏡切片；CT -> 無轉移則 PET -> **EUS** 局部分期；**胃癌需要 staging laparoscopy**',
      '分子：**HER2、PD-L1、MSI/MMR**',
      '局部：手術；**stage IB 以上 perioperative/neoadjuvant chemo 或 chemoRT**；輔助 nivolumab',
      '晚期第一線：**platinum + fluoropyrimidine**；**HER2+ 加 trastuzumab**；**PD-L1+ 加 nivolumab**；兩者皆有 trastuzumab + pembro',
      '第二線：**ramucirumab + paclitaxel**、ICI；支持：G/G-J tube'
    ],
    refs: ['Lancet 2017;390:2383', 'NEJM 2012;366:2074（CROSS）', 'NEJM 2021;384:1191（adjuvant nivolumab）', 'Lancet 2010;376:687（ToGA）', 'Lancet 2021;398:27（CheckMate 649）', 'Lancet 2023;402:2197（KEYNOTE-811）', 'Lancet Oncol 2014;15:1224（RAINBOW）']
  }
]);

RPG.registerCase({
  id: 'ho14-crc',
  chapter: 'HO14',
  title: '大便變細了',
  patient: '61 歲男性 · 公車司機',
  summary: '三個月來大便變細、有時帶血，以為是痔瘡。',
  cards: ['ho-crc-risk', 'ho-crc-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '大腸直腸外科門診。郭先生三個月排便習慣改變、大便變細、偶爾鮮血附在表面，左下腹絞痛。從未做過大腸鏡或糞便潛血篩檢。',
        '他的弟弟 52 歲時大腸癌開刀。'
      ],
      clue: ['61M；**排便習慣與粗細改變**、血便、左下腹痛', '**從未篩檢**', '弟弟 52 歲大腸癌'],
      choices: [{ label: '安排檢查', next: 'scope' }]
    },
    scope: {
      text: 'Colonoscopy：**sigmoid colon 環狀潰瘍腫塊**，切片 adenocarcinoma。分期與術前評估：',
      clue: '**Sigmoid adenocarcinoma**',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出',
        next: 'path',
        options: [
          { id: 'ct', group: '分期', label: '**CT 胸腹骨盆（顯影）**', key: true, reveal: true,
            result: 'Sigmoid 腫塊，周圍數顆小淋巴結；**無肝肺轉移**', clue: '無遠處轉移',
            miss: 'CRC 分期需要 CT 胸腹骨盆。' },
          { id: 'cea', group: '分期', label: '**CEA（baseline）**', key: true, reveal: true,
            result: '8.4', clue: 'CEA 8.4（術後追蹤用）',
            miss: 'CEA 術前 baseline，術後追蹤復發。' },
          { id: 'mmr', group: '病理', label: '**MMR immunohistochemistry / MSI**', key: true, reveal: true,
            result: 'MMR proficient（MSS）', clue: 'pMMR / MSS',
            miss: '所有 CRC 都要驗 MMR/MSI：篩 Lynch、影響治療（ICI）。' },
          { id: 'full', group: '其他', label: '術前完整 colonoscopy（排除同時性病灶）', key: true, reveal: true,
            result: '升結腸 2 顆小 adenoma，已切除', clue: '無同時性癌',
            miss: '要看完整個大腸排除同時性腫瘤。' },
          { id: 'mri', group: '其他', label: 'Pelvic MRI', result: '（未執行）',
            waste: 'Pelvic MRI 是直腸癌局部分期用，sigmoid colon 不需要。' },
          { id: 'pet', group: '其他', label: 'PET-CT', result: '（未執行）',
            waste: 'CT 已足夠分期，PET 不是常規。' }
        ]
      }
    },
    path: {
      text: 'Sigmoidectomy：pT3 **N1b（3/18 LN 陽性）**，切緣陰性。**Stage III**。術後？',
      clue: '**pT3N1b**，stage III',
      choices: [
        { label: '**輔助化療：CAPOX 3-6 個月或 FOLFOX 6 個月**', next: 'family' },
        { label: '切乾淨了，觀察就好', next: 'p_obs' },
        { label: '術後放射治療', next: 'p_rt' }
      ]
    },
    p_obs: {
      text: '主治醫師搖頭。',
      feedback: 'LN 陽性（stage III）輔助化療可降低復發與死亡。觀察只適合 stage I 與多數低風險 stage II。',
      choices: [{ label: '重新決定', next: 'path' }]
    },
    p_rt: {
      text: '主治醫師搖頭。',
      feedback: 'RT 是局部晚期**直腸**癌術前的治療。結腸癌 stage III 用全身化療。',
      choices: [{ label: '重新決定', next: 'path' }]
    },
    family: {
      text: '他的女兒 34 歲，問：「我需要什麼時候開始做大腸鏡？」（腫瘤 MSS，無遺傳症候群證據）',
      choices: [
        { label: '一等親大腸癌：**40 歲或比最早病例早 10 年開始（取較早者），之後每 5 年**；她父親 61 歲、叔叔 52 歲 -> **42 歲前**開始，實務上 40 歲', next: 'end_good' },
        { label: '跟一般人一樣 45 歲就好', next: 'end_ok',
          why: '一等親有大腸癌屬高風險，要從 40 歲或比最早病例早 10 年開始，且每 5 年。' }
      ]
    },
    end_ok: {
      text: '女兒 45 歲第一次大腸鏡就發現一個 2 cm 的 villous adenoma 合併 high-grade dysplasia。',
      ending: {
        grade: 'ok',
        title: '高風險家屬篩檢延遲',
        pearls: [
          '家族史：40 歲或比最早病例早 10 年，每 5 年',
          '一般風險：45 歲開始'
        ]
      }
    },
    end_good: {
      text: '郭先生完成 CAPOX。女兒 40 歲做了第一次大腸鏡，切除兩顆小息肉。',
      ending: {
        grade: 'good',
        title: 'Stage III colon cancer',
        pearls: [
          '一般風險 45 歲開始篩檢；家族史 40 歲或早 10 年',
          '所有 CRC 驗 MMR/MSI；CEA 當追蹤',
          'Stage III：手術 + FOLFOX 6 個月或 CAPOX 3-6 個月',
          '直腸癌 T3/N+：術前 RT ± chemo'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho14-msi',
  chapter: 'HO14',
  title: '四十四歲的肝轉移',
  patient: '44 歲女性 · 補習班老師',
  summary: '右側大腸癌合併多發肝轉移。她媽媽五十歲時得過子宮內膜癌。',
  cards: ['ho-crc-tx', 'ho-crc-risk'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '腫瘤科門診。范小姐 44 歲，貧血與右下腹悶痛，診斷 **ascending colon adenocarcinoma**，CT：**多發性雙葉肝轉移**（無法切除）。',
        '媽媽 50 歲子宮內膜癌、舅舅 46 歲大腸癌。'
      ],
      clue: ['44F；**右側** CRC、**不可切除肝轉移**', '家族：母子宮內膜癌、舅舅大腸癌（**符合 Lynch 模式**）'],
      choices: [{ label: '治療前的分子檢測', next: 'mol' }]
    },
    mol: {
      text: '開始全身治療前要驗什麼？',
      checklist: {
        prompt: '勾選要送的檢測',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'mmr', group: '分子', label: '**MMR IHC / MSI**', key: true, reveal: true,
            result: '**MSH2/MSH6 表現缺失**；**MSI-H**', clue: '**dMMR / MSI-H**',
            miss: 'MSI-H 轉移性 CRC 第一線用 ICI，效果遠勝化療；也是 Lynch 線索。' },
          { id: 'ras', group: '分子', label: '**KRAS/NRAS、BRAF**', key: true, reveal: true,
            result: 'KRAS 野生型；BRAF 野生型', clue: 'RAS、BRAF 野生型',
            miss: 'RAS 決定 anti-EGFR 能不能用；BRAF V600E 有專屬組合。' },
          { id: 'her2', group: '分子', label: 'HER2', result: '陰性' },
          { id: 'germ', group: '遺傳', label: '**Germline testing（Lynch）**', key: true, reveal: true,
            result: '**MSH2 germline pathogenic variant**', clue: '**Lynch syndrome（MSH2）**',
            miss: 'dMMR 加上家族史，要做 germline testing，影響家人篩檢。' },
          { id: 'cea', group: '其他', label: 'CEA', result: '86' },
          { id: 'pet', group: '其他', label: 'PET-CT', result: '（已有 CT）',
            waste: 'CT 已確認不可切除的肝轉移。' }
        ]
      }
    },
    tx: {
      text: 'MSI-H 轉移性 CRC。第一線？',
      choices: [
        { label: '**Immune checkpoint inhibitor（如 pembrolizumab）**', next: 'fam' },
        { label: 'FOLFOX + bevacizumab', next: 't_chemo' },
        { label: 'FOLFIRI + cetuximab', next: 't_egfr' }
      ]
    },
    t_chemo: {
      text: '主治醫師搖頭。',
      feedback: 'MSI-H/dMMR 腫瘤突變負荷高，對 ICI 反應好且持久，第一線 ICI 的 PFS 優於化療。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_egfr: {
      text: '主治醫師搖頭。',
      feedback: 'Anti-EGFR 主要用在 RAS 野生型的左側腫瘤，右側效果較差；而且 MSI-H 首選 ICI。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    fam: {
      text: '開始 pembrolizumab。她問：「我還要注意什麼？我的家人呢？」',
      choices: [
        { label: '**Lynch 相關癌症監測**（子宮內膜、卵巢、胃、泌尿道等）；家人做 **cascade testing**，帶因者 20-25 歲開始每年大腸鏡', next: 'end_good' },
        { label: '大腸癌已經發生了，其他不用管', next: 'end_ok',
          why: 'Lynch 也增加子宮內膜、卵巢、胃、小腸、泌尿上皮、胰臟癌風險；家人帶因者要從 20-25 歲每年大腸鏡。' }
      ]
    },
    end_ok: {
      text: '三年後她因異常出血被診斷子宮內膜癌；她的妹妹也在 39 歲發現大腸癌。',
      ending: {
        grade: 'ok',
        title: 'Lynch syndrome 的家族漏網',
        pearls: [
          'Lynch：大腸、子宮內膜、卵巢、胃、小腸、泌尿上皮、胰臟',
          '帶因家屬：20-25 歲開始每年大腸鏡'
        ]
      }
    },
    end_good: {
      text: 'Pembrolizumab 一年後肝轉移大幅縮小。妹妹與表哥驗出同一變異，開始每年大腸鏡。',
      ending: {
        grade: 'good',
        title: 'MSI-H metastatic CRC 與 Lynch syndrome',
        pearls: [
          '轉移性 CRC 驗 MMR/MSI、RAS、BRAF、HER2',
          'MSI-H/dMMR：第一線 ICI',
          'RAS 野生型左側：可加 anti-EGFR；BRAF V600E：encorafenib + binimetinib + cetuximab',
          'Lynch：cascade testing'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho14-panc',
  chapter: 'HO14',
  title: '不痛的黃疸',
  patient: '66 歲男性 · 退休工程師',
  summary: '家人發現他眼睛很黃，尿像茶。一點都不痛，只是最近瘦了。',
  cards: ['ho-pancreas', 'ho-panc-cyst'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '腸胃科門診。蔡先生兩週來眼白變黃、尿色深、大便變淡、全身癢。不痛。三個月瘦了 6 公斤，半年前**新診斷糖尿病**。抽菸 40 年。',
        'PE：黃疸，右上腹摸到**無壓痛的膽囊**。',
        'Bilirubin 12.4（direct 為主）、ALP 680。'
      ],
      clue: ['66M；**無痛性黃疸**、體重減輕', '**新發 DM**；重度吸菸', '**Courvoisier sign**', '阻塞性黃疸（bili 12.4、ALP 680）'],
      choices: [{ label: '安排影像', next: 'img' }]
    },
    img: {
      text: '第一個影像？',
      choices: [
        { label: '**Pancreatic protocol CT**（動脈 + 靜脈期）', next: 'ct' },
        { label: '先 ERCP 放支架減黃，再說', next: 'i_ercp' }
      ]
    },
    i_ercp: {
      text: '主治醫師搖頭。',
      feedback: '先做 pancreatic protocol CT 評估可切除性。支架會造成發炎與影像干擾，也不一定需要（可直接手術時常不需術前減黃）。',
      choices: [{ label: '重新決定', next: 'img' }]
    },
    ct: {
      text: 'CT：胰頭 2.8 cm 低密度腫塊，總膽管與胰管擴張（double duct）；**與 SMA、celiac、CHA 無接觸**；SMV 接觸 < 180 度、通暢；無肝轉移。',
      clue: '胰頭 2.8 cm；**resectable**（無動脈接觸）',
      checklist: {
        prompt: '再補哪些檢查？',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'eus', group: '病理', label: '**EUS-guided FNA**', key: true, reveal: true,
            result: '**Adenocarcinoma**', clue: '**Pancreatic adenocarcinoma**',
            miss: '手術候選人首選 EUS-FNA 取得組織（CT-guided 有播種風險）。' },
          { id: 'ca199', group: '血液', label: '**CA19-9**', key: true, reveal: true,
            result: '640（黃疸會讓它偏高）', clue: 'CA19-9 640',
            miss: 'CA19-9 術前 baseline、術後追蹤；注意黃疸會讓它上升。' },
          { id: 'germ', group: '遺傳', label: '**Germline genetic testing**', key: true, reveal: true,
            result: '無致病變異', clue: 'Germline 陰性',
            miss: '所有胰臟癌病人都要做 germline testing（BRCA 等）。' },
          { id: 'ctc', group: '分期', label: 'CT chest', result: '無肺轉移' },
          { id: 'cea', group: '其他', label: 'Cyst fluid CEA', result: '（不適用）',
            waste: '這是實心腫塊，不是囊性病灶。' }
        ]
      }
    },
    tx: {
      text: 'Resectable pancreatic adenocarcinoma，ECOG 1。治療？',
      choices: [
        { label: '**Whipple** -> **輔助 mFOLFIRINOX**', next: 'end_good' },
        { label: '不能治癒，直接緩和照護', next: 't_pall' },
        { label: '只做 RT', next: 't_rt' }
      ]
    },
    t_pall: {
      text: '主治醫師搖頭。',
      feedback: 'Resectable 是少數有機會治癒的情況。手術 + 輔助 mFOLFIRINOX 中位存活約 50 個月以上。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_rt: {
      text: '主治醫師搖頭。',
      feedback: 'RT 在胰臟癌的角色有爭議。Resectable 的標準是手術加輔助化療。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '手術 R0 切除。完成六個月 mFOLFIRINOX，CA19-9 降到 18。兩年後仍無復發。',
      ending: {
        grade: 'good',
        title: 'Resectable pancreatic head adenocarcinoma',
        pearls: [
          '無痛黃疸 + 體重下降 + 新 DM + Courvoisier -> 胰頭癌',
          'Pancreatic protocol CT 判定可切除性',
          'EUS-FNA；CA19-9；所有人 germline testing',
          'Resectable：Whipple + mFOLFIRINOX；metastatic：FOLFIRINOX 或 gem + nab-P；gBRCA 用 olaparib 維持'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho14-hcc',
  chapter: 'HO14',
  title: '每半年一次的超音波',
  patient: '57 歲男性 · 慢性 B 型肝炎',
  summary: 'B 肝帶原二十年，一直有在追蹤。這次超音波看到一顆新的東西。',
  cards: ['ho-hcc'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '肝膽科門診。楊先生慢性 HBV，吃 entecavir 八年，HBV DNA 測不到。輕度肝硬化，Child-Pugh A。',
        '每 6 個月 U/S + AFP。這次 U/S：**S6 一顆 3.2 cm 新病灶**。AFP 從 6 升到 **142**。'
      ],
      clue: ['57M；**慢性 HBV**、Child-Pugh A 肝硬化', 'U/S **3.2 cm 新病灶**', '**AFP 6 -> 142**'],
      choices: [{ label: '下一步', next: 'img' }]
    },
    img: {
      text: '下一步？',
      choices: [
        { label: '**三相 contrast CT 或 dynamic MRI**', next: 'ct' },
        { label: '直接 U/S-guided 切片', next: 'i_bx' },
        { label: '三個月後再超音波', next: 'i_wait' }
      ]
    },
    i_bx: {
      text: '主治醫師搖頭。',
      feedback: '高風險病人的 HCC 可以靠典型的多期影像診斷，不一定要切片（切片有出血與播種風險）。先做三相 CT 或 MRI。',
      choices: [{ label: '重新決定', next: 'img' }]
    },
    i_wait: {
      text: '主治醫師搖頭。',
      feedback: '發現新病灶或 AFP 上升，就要做三相 CT 或 MRI，不是延後追蹤。',
      choices: [{ label: '重新決定', next: 'img' }]
    },
    ct: {
      text: 'Dynamic MRI：**動脈期明顯增強、門脈/延遲期 washout**、有 capsule。單一病灶，無血管侵犯，無轉移。',
      clue: '**典型 HCC 影像**（arterial enhancement + washout）；單一 3.2 cm',
      choices: [
        { label: '高風險 + 典型影像 = **HCC，不需切片**；肝功能好 -> **手術切除**（或 ablation）', next: 'end_good' },
        { label: '一定要切片才能確診', next: 'c_bx' },
        { label: 'Atezolizumab + bevacizumab', next: 'c_sys' }
      ]
    },
    c_bx: {
      text: '主治醫師搖頭。',
      feedback: '肝硬化或慢性 HBV 的病人，三相影像典型（動脈增強 + washout）即可診斷 HCC。',
      choices: [{ label: '重新決定', next: 'ct' }]
    },
    c_sys: {
      text: '主治醫師搖頭。',
      feedback: '全身治療是給晚期或無法局部治療的病人。單一病灶、Child A，目標是治癒：切除或 ablation。',
      choices: [{ label: '重新決定', next: 'ct' }]
    },
    end_good: {
      text: '腹腔鏡肝 S6 切除，病理證實 HCC，切緣陰性。AFP 降回 5。持續 entecavir 與每 3-6 個月影像追蹤。',
      ending: {
        grade: 'good',
        title: 'Early-stage HCC in chronic HBV',
        pearls: [
          '肝硬化、慢性 HBV：U/S + AFP 每 6 個月',
          'HBV 可在無肝硬化時致 HCC',
          '高風險 + 典型三相影像可不切片診斷',
          '局部：切除、ablation、TACE、SBRT、移植；晚期：atezolizumab + bevacizumab'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho14-gastric',
  chapter: 'HO14',
  title: '吃不下的胃',
  patient: '63 歲男性 · 小吃店老闆',
  summary: '早飽、體重下降、黑便。胃鏡看到大片潰瘍。',
  cards: ['ho-gastric'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '腸胃科。楊先生三個月早飽、體重下降 9 公斤，偶有黑便。過去 H. pylori 陽性但沒有治療。',
        'EGD：胃體大片潰瘍性腫塊；切片 **adenocarcinoma**。CT：**多發性肝轉移**、腹膜結節。'
      ],
      clue: ['63M；早飽、體重下降、黑便', '**Gastric adenocarcinoma**', '**肝轉移、腹膜轉移**（stage IV）'],
      choices: [{ label: '治療前', next: 'mol' }]
    },
    mol: {
      text: '開始第一線治療前要驗什麼？',
      choices: [
        { label: '**HER2、PD-L1（CPS）、MSI/MMR**', next: 'res' },
        { label: '不用驗，直接化療', next: 'm_none' }
      ]
    },
    m_none: {
      text: '主治醫師搖頭。',
      feedback: 'HER2、PD-L1、MSI 決定要不要加 trastuzumab、ICI，會改變存活。',
      choices: [{ label: '重新決定', next: 'mol' }]
    },
    res: {
      text: '結果：**HER2 3+**、**PD-L1 CPS 8**、pMMR。第一線？',
      clue: '**HER2+**、**PD-L1+**',
      choices: [
        { label: '**Platinum + fluoropyrimidine + trastuzumab + pembrolizumab**', next: 'end_good' },
        { label: 'Platinum + fluoropyrimidine 就好', next: 'r_chemo' },
        { label: '胃全切除', next: 'r_surg' }
      ]
    },
    r_chemo: {
      text: '主治醫師搖頭。',
      feedback: 'HER2+ 要加 trastuzumab；HER2+ 且 PD-L1+ 可同時加 pembrolizumab，反應率更高。',
      choices: [{ label: '重新決定', next: 'res' }]
    },
    r_surg: {
      text: '主治醫師搖頭。',
      feedback: '已有肝與腹膜轉移，手術不是治療主軸，除非為了出血或阻塞的緩和。',
      choices: [{ label: '重新決定', next: 'res' }]
    },
    end_good: {
      text: '四個 cycle 後腫瘤縮小，黑便消失，體重回升 3 公斤。營養師與緩和團隊一起照顧。',
      ending: {
        grade: 'good',
        title: 'HER2+ PD-L1+ metastatic gastric cancer',
        pearls: [
          '胃癌驗 HER2、PD-L1、MSI',
          '晚期：platinum + fluoropyrimidine；HER2+ 加 trastuzumab；PD-L1+ 加 nivo/pembro',
          '第二線：ramucirumab + paclitaxel',
          '局部胃癌：staging laparoscopy；IB 以上 periop chemo'
        ]
      }
    }
  }
});
