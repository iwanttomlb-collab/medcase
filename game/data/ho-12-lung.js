// HO 12 Lung cancer. Source: Pocket Medicine Ch 5, p41-44 of 書頁.txt

RPG.registerCards('HO12', [
  {
    id: 'ho-lung-epi',
    title: 'Lung cancer：流行病學與篩檢',
    points: [
      '美國男女癌症死因第一',
      '**NSCLC 約 85%**（adeno 40%、SCC 20%、large cell 5%）；**SCLC 約 15%**',
      '抽菸：85% 肺癌發生在吸菸者；**SCC 與 SCLC 幾乎只見於吸菸者**；**adeno 是非吸菸者最常見**',
      'Asbestos 與抽菸有加乘；其他：RT、HIV、radon、二手菸、肺纖維化',
      '**篩檢：50-80 歲、>= 20 pack-years、仍在抽或戒菸 15 年內 -> 每年 low-dose CT**（肺癌死亡下降約 20%）',
      '篩檢結節多，需多專科處理'
    ],
    refs: ['JAMA 2021;325:962（USPSTF）', 'NEJM 2020;382:503（NELSON）', 'Int J Cancer 2012;131:1210']
  },
  {
    id: 'ho-lung-sx',
    title: 'Lung cancer：表現與副腫瘤症候群',
    points: [
      '約 10% 無症狀；只有 16% 診斷時為局部',
      '中央型（SCC、SCLC）：咳嗽、**咯血**、喘、喘鳴、阻塞後肺炎',
      '局部擴散：吞嚥困難、stridor、**聲音沙啞（RLN）**；**pleural effusion = stage IV**',
      '**Pancoast**：肺尖腫瘤侵犯 brachial plexus（C8、T1、T2）-> **Horner**、肩痛、肋骨破壞、手部肌肉萎縮',
      '**SVC syndrome**：顏面/手臂腫脹（> 80%）、頸胸靜脈怒張（約 60%）、喘咳、頭痛；steroids、利尿、RT ± chemo、嚴重時 stent、血栓則抗凝',
      '轉移：**腦（診斷時約 25%）**、骨、肝、腎上腺'
    ],
    table: {
      head: ['副腫瘤症候群', '關聯'],
      rows: [
        ['**SIADH**、**ACTH -> Cushing**', '**SCLC**'],
        ['**PTHrP -> hypercalcemia**', '**SCC**'],
        ['Clubbing；**HPOA**（對稱多關節炎 + 長骨骨膜增生）', 'NSCLC；adenocarcinoma'],
        ['**Lambert-Eaton**（anti-P/Q VGCC）、neuropathy（anti-Hu）、小腦退化（anti-Hu、Yo、Ri）、encephalomyelitis', '**SCLC**'],
        ['Hypercoagulable、DIC', 'Adenocarcinoma']
      ]
    },
    note: 'SVC syndrome 雖然 SCLC 比例較高，但因 NSCLC 總數多，統計上 NSCLC 引起的還是比較多。HPOA 與 PGE2、VEGF 過度表現有關。',
    refs: ['NEJM 2007;356:1862（SVC syndrome）']
  },
  {
    id: 'ho-lung-stage',
    title: 'Lung cancer：分期與檢查',
    points: [
      'TNM：N0 無；**N1 同側肺門**；**N2 同側縱膈**；**N3 對側或鎖骨上**',
      '5 年存活：stage I 70-90%、II 50-60%、III 15-35%、IV 0-10%（新療法持續改善）',
      '**CT 胸腹（含肝、腎上腺）**；**PET-CT** 對縱膈、骨、遠處轉移較敏感；**brain MRI（stage IA 以外都做）**',
      '病理：中央型 bronchoscopy；周邊型 CT-guided bx；**mediastinoscopy/EBUS** 評估縱膈；VATS；pleural effusion 做 thoracentesis cytology',
      '**基因（non-squamous 都驗，SCC 也建議）**：EGFR（stage IIA-IIIB 也要驗）、ALK、ROS1、MET、KRAS、RET、BRAF、ERBB2、NTRK；**PD-L1**',
      '要手術：**PFT + quantitative V/Q**，術後需保留 >= 30% 預測肺功能'
    ],
    refs: ['Chest 2017;151:193（staging）', 'J Thorac Oncol 2016;11:39', 'NEJM 2009;361:32（PET）']
  },
  {
    id: 'ho-nsclc-tx',
    title: 'NSCLC 治療方向',
    points: [
      '**局部：可切除 -> 手術**；不可手術 -> **SABR** 或 chemoRT',
      '可切除 stage II-III：**neoadjuvant/perioperative chemo + ICI**；術後 **EGFR+ -> adjuvant osimertinib**、**ALK+ -> alectinib**',
      '**不可切除 stage III：concurrent chemoRT -> durvalumab**（EGFR+ 則 osimertinib）',
      '**轉移：有 driver -> targeted therapy**；無 driver -> **ICI ± chemo**（pemetrexed + pembro 維持）',
      '**早期緩和照護延長存活**；局部症狀用 palliative RT；**單一腦轉移可切除 + 腦部放療**'
    ],
    table: {
      head: ['Driver（adeno 盛行率）', '第一線方向'],
      rows: [
        ['**EGFR L858R / ex19del**（約 15%）', '**Osimertinib** ± chemo，或 amivantamab-lazertinib'],
        ['EGFR ex20 insertion', '化療後 amivantamab'],
        ['**ALK**（約 4%）', '**Lorlatinib** 或 **alectinib**'],
        ['ROS1', 'Entrectinib、repotrectinib、crizotinib'],
        ['MET ex14', 'Capmatinib、tepotinib'],
        ['RET', 'Selpercatinib、pralsetinib'],
        ['BRAF V600E', 'Dabrafenib + trametinib'],
        ['NTRK', 'Larotrectinib、entrectinib'],
        ['KRAS G12C（約 13%）', '先 ICI ± chemo，後線 sotorasib、adagrasib'],
        ['ERBB2', '後線 trastuzumab deruxtecan'],
        ['**無 target、PD-L1 >= 50%**', '**Pembrolizumab** 或 chemo + pembro'],
        ['無 target、PD-L1 < 50%', 'Chemo（carbo/pemetrexed）+ pembro']
      ]
    },
    refs: ['Lancet 2021;398:535（NSCLC）', 'NEJM 2023;389:491 & 1672（perioperative ICI）', 'NEJM 2018;378:113（osimertinib）', 'NEJM 2024;391:1486（amivantamab-lazertinib）', 'NEJM 2020;383:2018（lorlatinib）', 'NEJM 2018;378:2078（pembro + chemo）', 'NEJM 2010;363:733（early palliative care）']
  },
  {
    id: 'ho-sclc',
    title: 'Small cell lung cancer',
    points: [
      '通常診斷時已擴散；對化療反應好但很快抗藥',
      '**全部有 Rb 與 p53 突變**；90% 有 neuroendocrine markers',
      '**Limited stage**：侷限同側半胸、單一放射野；**extensive stage**：超出單一放射野',
      '**LS-SCLC：concurrent chemoRT -> adjuvant durvalumab**（少數可手術）',
      '**ES-SCLC：platinum + etoposide + atezolizumab（或 durvalumab）**',
      'PCI：LS-SCLC 完全緩解者可延長存活（ES 角色研究中）',
      '第二線：**tarlatamab**（DLL3 x CD3 bispecific）、lurbinectedin、topotecan、再用 platinum doublet'
    ],
    refs: ['Nature 2015;524:47（SCLC genomics）', 'NEJM 2024;391:1313（ADRIATIC）', 'NEJM 2018;379:2220（atezolizumab ES-SCLC）', 'NEJM 1999;341:476（PCI）', 'NEJM 2023;389:2063（tarlatamab）']
  }
]);

RPG.registerCase({
  id: 'ho12-screen',
  chapter: 'HO12',
  title: '戒菸八年的篩檢',
  patient: '63 歲男性 · 前建築工人',
  summary: '抽了三十年菸，八年前戒掉。女兒拉他來做肺癌篩檢。',
  cards: ['ho-lung-epi', 'ho-lung-stage', 'ho-nsclc-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '家醫科門診。王伯伯 63 歲，一天一包抽了 35 年，**八年前戒菸**。年輕時做過拆除工程。沒有咳嗽、咯血或體重減輕。',
        '女兒問：「爸爸需要做肺癌篩檢嗎？」'
      ],
      clue: ['63M；**35 pack-years**、**戒菸 8 年**', '石綿暴露史', '無症狀'],
      choices: [
        { label: '**符合篩檢**：50-80 歲、>= 20 pack-years、戒菸 15 年內 -> **每年 low-dose CT**', next: 'ldct' },
        { label: '已經戒菸了，不需要篩檢', next: 's_quit' },
        { label: '每年胸部 X 光就好', next: 's_cxr' }
      ]
    },
    s_quit: {
      text: '主治醫師搖頭。',
      feedback: '戒菸後風險下降但不會回到 baseline。戒菸 15 年內仍符合篩檢條件。',
      choices: [{ label: '重新決定', next: 'intro' }]
    },
    s_cxr: {
      text: '主治醫師搖頭。',
      feedback: '胸部 X 光篩檢不降低肺癌死亡。有證據的是每年 low-dose chest CT。',
      choices: [{ label: '重新決定', next: 'intro' }]
    },
    ldct: {
      text: 'LDCT：**右上葉 2.8 cm spiculated nodule**。下一步要做哪些檢查？',
      clue: '**RUL 2.8 cm spiculated nodule**',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出',
        next: 'stage',
        options: [
          { id: 'pet', group: '分期', label: '**PET-CT**', key: true, reveal: true,
            result: 'RUL 腫瘤 SUV 9；**右肺門淋巴結 SUV 4**；縱膈與遠處無攝取', clue: 'PET：RUL + **同側肺門 LN**',
            miss: 'PET-CT 對縱膈與遠處轉移比 CT 敏感。' },
          { id: 'mri', group: '分期', label: '**Brain MRI**', key: true, reveal: true,
            result: '正常', clue: 'Brain MRI 正常',
            miss: 'Stage IA 以外都要做 brain MRI。' },
          { id: 'ebus', group: '病理', label: '**EBUS-TBNA**（腫瘤與縱膈/肺門 LN）', key: true, reveal: true,
            result: '腫瘤：**adenocarcinoma**；**N1（肺門）陽性**；N2 陰性', clue: '**Adenocarcinoma**；**N1 (+)、N2 (-)**',
            miss: '要同時取得組織與縱膈分期，N2 有沒有侵犯決定能不能直接開刀。' },
          { id: 'ngs', group: '病理', label: '**EGFR、ALK** 與 **PD-L1**', key: true, reveal: true,
            result: '**EGFR exon 19 deletion**；ALK 陰性；PD-L1 10%', clue: '**EGFR ex19del**',
            miss: 'Stage II-III 可切除也要驗 EGFR 與 ALK，會改變術後治療。' },
          { id: 'pft', group: '術前', label: '**PFT + quantitative V/Q**', key: true, reveal: true,
            result: 'FEV1 82%；DLCO 76%；預測術後 FEV1 66%', clue: '預測術後肺功能足夠',
            miss: '手術前要確定術後至少保留 30% 預測肺功能。' },
          { id: 'cea', group: '其他', label: 'CEA', result: '6.2',
            waste: 'CEA 不影響分期與治療決策。' },
          { id: 'bs', group: '其他', label: 'Bone scan', result: '（未執行）',
            waste: 'PET-CT 已經評估骨骼。' }
        ]
      }
    },
    stage: {
      text: 'T2 N1 M0 adenocarcinoma（**stage II**），EGFR ex19del，可切除。治療計畫？',
      choices: [
        { label: '**Lobectomy + 縱膈淋巴結廓清** -> 輔助化療 -> **adjuvant osimertinib**', next: 'end_good' },
        { label: '直接開始 osimertinib，不用開刀', next: 'st_tki' },
        { label: '手術後觀察就好', next: 'end_obs',
          why: 'EGFR+ 可切除 NSCLC 術後 osimertinib 能明顯降低復發（ADAURA）；stage II 也需要輔助化療。' }
      ]
    },
    st_tki: {
      text: '主治醫師搖頭。',
      feedback: 'Stage II 可切除且肺功能足夠，手術是治癒的機會。Osimertinib 是術後輔助或轉移時用。',
      choices: [{ label: '重新決定', next: 'stage' }]
    },
    end_obs: {
      text: '兩年後追蹤 CT 發現多發性肺轉移與腦轉移。',
      ending: {
        grade: 'ok',
        title: 'EGFR+ stage II NSCLC 術後未輔助治療',
        pearls: [
          '可切除 EGFR+ NSCLC 術後 osimertinib 明顯降低復發',
          'Stage II-III 也要驗 EGFR、ALK'
        ]
      }
    },
    end_good: {
      text: '手術順利。完成輔助化療與 osimertinib，三年後 CT 沒有復發。王伯伯每年回來追蹤。',
      ending: {
        grade: 'good',
        title: '篩檢發現的 EGFR+ stage II NSCLC',
        pearls: [
          'LDCT 篩檢：50-80 歲、>= 20 pack-years、戒菸 15 年內',
          '分期：PET-CT、brain MRI、EBUS 縱膈評估',
          '可切除 -> 手術；PFT 確認術後肺功能',
          'EGFR+ 術後 osimertinib；ALK+ 術後 alectinib'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho12-egfr',
  chapter: 'HO12',
  title: '不抽菸的老師',
  patient: '54 歲女性 · 國小老師',
  summary: '從來沒抽過菸，咳嗽兩個月，最近右手拿粉筆會抖、頭痛。',
  cards: ['ho-lung-stage', 'ho-nsclc-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '胸腔科轉來。林老師從不抽菸，乾咳兩個月，這週頭痛、右手不太靈活。',
        'CT：左下葉 4 cm 腫塊、**多發性雙側肺小結節**、**左側肋膜積水**。Brain MRI：**3 處腦轉移**（最大 1.4 cm），無中線位移。',
        '肋膜液 cytology：**adenocarcinoma**。'
      ],
      clue: ['54F；**never smoker**', 'LLL 腫塊、雙側肺結節、**malignant pleural effusion**', '**3 處腦轉移**', '**Adenocarcinoma**'],
      choices: [{ label: '下一步', next: 'ngs' }]
    },
    ngs: {
      text: 'Stage IV adenocarcinoma。腫瘤科門診下週一，家屬希望「趕快開始治療」。',
      choices: [
        { label: '**送完整 NGS（EGFR、ALK、ROS1、MET、KRAS、RET、BRAF、ERBB2、NTRK）+ PD-L1**，等結果再決定第一線', next: 'res' },
        { label: '先開始 chemo + pembrolizumab，基因結果之後再說', next: 'n_io' },
        { label: '只驗 PD-L1 就好', next: 'n_pdl1' }
      ]
    },
    n_io: {
      text: '主治醫師搖頭。',
      feedback: 'Never smoker 的 adenocarcinoma 很可能有 targetable driver。先給 ICI 再換 TKI（尤其 osimertinib）會大幅增加 pneumonitis 等毒性；targeted therapy 效果與耐受性都更好，應先等 driver 結果。',
      choices: [{ label: '重新決定', next: 'ngs' }]
    },
    n_pdl1: {
      text: '主治醫師搖頭。',
      feedback: 'Non-squamous NSCLC 都要驗完整 driver panel。只看 PD-L1 會錯過 targeted therapy 的機會。',
      choices: [{ label: '重新決定', next: 'ngs' }]
    },
    res: {
      text: 'NGS：**EGFR L858R**；其他陰性。PD-L1 60%。',
      clue: '**EGFR L858R**；PD-L1 60%',
      choices: [
        { label: '**Osimertinib**（± chemo）；腦轉移小且症狀輕可先觀察 TKI 反應（osimertinib 入腦好）', next: 'end_good' },
        { label: 'PD-L1 60%，用 pembrolizumab 單藥', next: 'r_pembro' },
        { label: '先全腦放射治療，再考慮全身治療', next: 'r_wbrt' }
      ]
    },
    r_pembro: {
      text: '主治醫師搖頭。',
      feedback: 'PD-L1 高不代表 EGFR+ 腫瘤對 ICI 有反應，EGFR+ NSCLC 對 ICI 反應差。有 driver 時優先 targeted therapy。',
      choices: [{ label: '重新決定', next: 'res' }]
    },
    r_wbrt: {
      text: '主治醫師搖頭。',
      feedback: 'Osimertinib 有良好的中樞神經滲透，小型、症狀輕的腦轉移可先用 TKI 並密切追蹤；需要局部治療時優先 SRS，避免全腦放療的認知副作用。',
      choices: [{ label: '重新決定', next: 'res' }]
    },
    end_good: {
      text: '開始 osimertinib 三個月，肺部腫塊縮小一半，腦轉移幾乎消失，右手恢復靈活。緩和醫療團隊同時協助她處理咳嗽與焦慮。',
      ending: {
        grade: 'good',
        title: 'EGFR+ stage IV NSCLC with brain metastases',
        pearls: [
          'Non-squamous 都驗完整 driver panel + PD-L1',
          '有 driver 時不先給 ICI',
          'EGFR：osimertinib ± chemo；ALK：lorlatinib 或 alectinib',
          '早期緩和照護'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho12-sclc',
  chapter: 'HO12',
  title: '鈉離子一百一十八',
  patient: '69 歲男性 · 現役吸菸者',
  summary: '倦怠、噁心、有點混亂，鈉離子很低。胸部 X 光縱膈腔變寬。',
  cards: ['ho-sclc', 'ho-lung-sx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。邱先生一天兩包菸抽了 50 年。兩週來倦怠、噁心，今天有點混亂。',
        '**Na 118**、serum osm 248、**urine osm 520**、**urine Na 62**；臨床 euvolemic；TSH、cortisol 正常。',
        'CXR：右肺門腫塊、縱膈腔變寬。'
      ],
      clue: ['69M；100 pack-years，仍抽', '**Na 118**、低血漿滲透壓、尿濃縮、尿 Na 高、euvolemic -> **SIADH**', '**中央型肺門腫塊**'],
      choices: [{ label: '處理低血鈉', next: 'na' }]
    },
    na: {
      text: 'Na 118，輕度混亂，沒有抽搐。處置？',
      choices: [
        { label: '**限水**；症狀明顯時小量 hypertonic saline；**24 小時 Na 上升不超過 8-10**', next: 'stage' },
        { label: '大量 normal saline 補鈉', next: 'na_ns' },
        { label: '3% saline 快速把 Na 拉到 135', next: 'na_fast' }
      ]
    },
    na_ns: {
      text: '主治醫師搖頭。',
      feedback: 'SIADH 尿液滲透壓高（520），給 NS 時鈉被排掉、水被留下，Na 可能更低。基本處置是限水。',
      choices: [{ label: '重新決定', next: 'na' }]
    },
    na_fast: {
      text: '主治醫師搖頭。',
      feedback: '慢性低血鈉矯正太快會造成 osmotic demyelination syndrome。24 小時上升不超過 8-10 mEq/L。',
      choices: [{ label: '重新決定', next: 'na' }]
    },
    stage: {
      text: 'CT：右肺門腫塊包住主支氣管、縱膈淋巴結、**多發性肝轉移**。肝切片：**small cell carcinoma**（synaptophysin、chromogranin +）。',
      clue: ['**SCLC**', '**肝轉移** -> **extensive stage**'],
      choices: [
        { label: '**Extensive-stage SCLC：platinum + etoposide + atezolizumab**', next: 'tx' },
        { label: 'Limited stage，concurrent chemoRT', next: 's_ls' },
        { label: '驗 EGFR 後用 osimertinib', next: 's_egfr' },
        { label: '右肺全切除', next: 's_surg' }
      ]
    },
    s_ls: {
      text: '主治醫師搖頭。',
      feedback: '有肝轉移已超出單一放射野，是 extensive stage。ES-SCLC 主要靠化療 + ICI。',
      choices: [{ label: '重新決定', next: 'stage' }]
    },
    s_egfr: {
      text: '主治醫師搖頭。',
      feedback: 'SCLC 的特徵是 Rb、p53 失活，不是 EGFR 驅動。標準是 platinum + etoposide + ICI。',
      choices: [{ label: '重新決定', next: 'stage' }]
    },
    s_surg: {
      text: '主治醫師搖頭。',
      feedback: 'SCLC 通常診斷時已擴散，只有極少數 limited stage 小腫瘤適合手術；有肝轉移絕對不是手術對象。',
      choices: [{ label: '重新決定', next: 'stage' }]
    },
    tx: {
      text: [
        '四個 cycle 後腫瘤明顯縮小，Na 正常。之後 atezolizumab 維持。',
        '八個月後疾病進展。他問：「還有什麼辦法嗎？」'
      ],
      choices: [
        { label: '第二線選項：**tarlatamab**（DLL3 bispecific）、lurbinectedin、topotecan；同時討論緩和照護與目標', next: 'end_good' },
        { label: '沒有任何選擇了', next: 'end_ok',
          why: 'SCLC 第二線反應率較低，但仍有 tarlatamab、lurbinectedin、topotecan、再用 platinum 等選擇；應與病人討論並整合緩和照護。' }
      ]
    },
    end_ok: {
      text: '他轉往安寧病房，家人後來才知道還有其他治療選擇。',
      ending: {
        grade: 'ok',
        title: 'ES-SCLC 進展後未討論選項',
        pearls: [
          '第二線：tarlatamab、lurbinectedin、topotecan',
          '治療選擇與緩和照護應同時討論'
        ]
      }
    },
    end_good: {
      text: '他選擇 tarlatamab，同時接受緩和團隊照顧。之後半年他和家人去了一趟花蓮。',
      ending: {
        grade: 'good',
        title: 'Extensive-stage SCLC with SIADH',
        pearls: [
          'SCLC：中央型、重度吸菸、SIADH、ACTH、Lambert-Eaton',
          'SIADH：限水；慢性低血鈉矯正 <= 8-10/24h',
          'ES：platinum + etoposide + atezolizumab；LS：chemoRT -> durvalumab',
          '第二線：tarlatamab'
        ]
      }
    }
  }
});
