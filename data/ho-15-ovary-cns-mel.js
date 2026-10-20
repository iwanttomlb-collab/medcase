// HO 15 Ovarian cancer, CNS tumors and brain metastases, cutaneous melanoma. Source: Pocket Medicine Ch 5, p53-55 of 書頁.txt

RPG.registerCards('HO15', [
  {
    id: 'ho-ovary',
    title: 'Ovarian cancer',
    points: [
      '**Epithelial（EOC，95%）**：**high-grade serous 最常見**，多晚期診斷、預後差；low-grade serous、endometrioid、clear cell、mucinous；nonepithelial（germ cell、sex cord-stromal）約 5%',
      '危險因子：未生育、初經早、停經晚（每多一年排卵風險 +2-7%）；一等親 5%、二等親 3.5%',
      '**所有病人做 germline testing**（約 25% 有遺傳突變，影響 PARPi）；**BRCA1 終身 44%、BRCA2 17%**；Lynch（非 serous）',
      '表現：非特異的腹脹、骨盆/腹痛、腸胃與泌尿症狀；骨盆腫塊、腹水',
      '**沒有篩檢工具證實有存活好處**',
      '懷疑時：pelvic U/S、CT A/P 或 pelvic MRI、**CA-125**；病理靠切片或腹水',
      '**Cytoreductive surgery**：連 stage IV 與復發都有存活好處；可先 neoadjuvant chemo 提高完整減積',
      '第一線：**carboplatin + paclitaxel**；**PARPi 維持（olaparib、niraparib、rucaparib；HRD/BRCA 尤佳）**；HR proficient 可 bevacizumab 維持',
      '**復發 > 6 個月 = platinum sensitive -> platinum doublet**；**< 6 個月 = platinum resistant -> 單藥（liposomal doxorubicin、gemcitabine）± bevacizumab**'
    ],
    refs: ['Nat Rev Dis Primers 2016;2:16061', 'JCO 2020;38:1222（germline testing）', 'Obstet Gynecol 1992;80:700', 'NEJM 2021;385:2123（secondary cytoreduction）', 'Gynecol Oncol 2013;130:493']
  },
  {
    id: 'ho-cns',
    title: 'Primary CNS tumors 與 brain metastases',
    points: [
      '懷疑：新的局部神經缺損、癲癇、記憶或平衡問題、ICP 上升（頭痛、嘔吐、視力改變）',
      '**Brain MRI**（CT 較不敏感）；懷疑 CNS lymphoma 考慮 LP',
      '**Meningioma**：grade 1 良性，小且無症狀 -> 觀察；大或有症狀 -> 切除，無法切除則 RT；grade 2-3 -> 切除 + 輔助 RT',
      '**Glioma**：grade 1-2 astrocytoma、oligodendroglioma；**grade 4 = glioblastoma**；grade 3-4 = high grade',
      '分子：**1p/19q**、**IDH**、**MGMT methylation（預測 temozolomide 敏感）**',
      '治療：**最大安全切除 -> RT + temozolomide** -> 追蹤；有神經症狀用類固醇（**懷疑 CNS lymphoma 時切片前先不給**）；癲癇用抗癲癇藥',
      'GBM 存活 12-15 個月，與切除程度相關',
      '**腦轉移比原發多**：肺、乳房、melanoma、RCC、胃食道',
      '寡轉移或有症狀可切除 -> 手術；有症狀用類固醇；多發或無法開刀 -> RT（很多時考慮 WBRT）；ICI 與 NSCLC targeted therapy 有 CNS 活性'
    ],
    refs: ['Neuro Oncol 2021;23:1231（WHO CNS 2021）', 'J Neurosurg 2014;120:31（GBM resection）']
  },
  {
    id: 'ho-melanoma',
    title: 'Cutaneous melanoma',
    points: [
      '可疑病灶 **ABCDE**（不對稱、邊緣、顏色、直徑 > 6 mm、變化）-> 切片',
      '分期：I-II 無區域或遠處轉移；III 區域 LN 或 in-transit/satellite；IV 遠處；**潰瘍與厚度**決定 I-III 的次分期',
      '局部且 <= 1 mm 預後極好；IIIA-IIID 5 年 OS 20-70%',
      '**BRAF V600E 約 50%**',
      '**Wide excision + sentinel node mapping**（原位或低風險除外）；SLN 陽性：清除 vs **觀察（存活無差）**',
      'ICI：pembro、nivo、**nivo/ipi**、nivo/relatlimab；**BRAF/MEK inhibitors**（BRAF V600E）',
      '高風險 LN 疾病輔助：ICI 或 dabrafenib/trametinib（BRAF）；可切除 stage III：**neoadjuvant nivo/ipi** 優於輔助 nivo',
      '轉移：ICI 單藥或雙藥（**ipi + nivo 對腦轉移反應較好**）；BRAF 可 targeted；第二線 **TIL（lifileucel）**'
    ],
    refs: ['NEJM 2021;384:2229（melanoma）', 'NEJM 2017;376:2211（MSLT-II）', 'NEJM 2024;391:1696（NADINA）', 'NEJM 2018;379:722（ipi/nivo brain mets）', 'NEJM 2024;391:1709（adjuvant dabrafenib/trametinib）']
  }
]);

RPG.registerCase({
  id: 'ho15-ovary',
  chapter: 'HO15',
  title: '褲頭越來越緊',
  patient: '58 歲女性 · 退休會計',
  summary: '三個月來腹脹、吃一點就飽，以為是胃不好，吃了胃藥也沒用。',
  cards: ['ho-ovary'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '婦科門診。簡女士停經 8 年，三個月腹脹、早飽、頻尿，褲頭越來越緊。胃鏡正常。',
        'PE：腹部膨脹、shifting dullness；骨盆腔觸及固定腫塊。',
        '她的姊姊 52 歲時乳癌。'
      ],
      clue: ['58F；停經後；**腹脹、早飽**、頻尿', '**腹水**、**骨盆腫塊**', '姊姊乳癌'],
      choices: [{ label: '安排檢查', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出',
        next: 'plan',
        options: [
          { id: 'img', group: '影像', label: '**Pelvic U/S + CT A/P**', key: true, reveal: true,
            result: '雙側複雜性附屬器腫塊；大量腹水；**omental caking**；腹膜結節', clue: '雙側附屬器腫塊、omental caking、腹膜轉移',
            miss: '疑似卵巢癌要用 pelvic U/S、CT A/P 或 MRI 評估。' },
          { id: 'ca125', group: '血液', label: '**CA-125**', key: true, reveal: true,
            result: '**1,840**', clue: 'CA-125 1,840',
            miss: 'CA-125 支持診斷並作為治療追蹤。' },
          { id: 'para', group: '病理', label: '**Paracentesis cytology**（或切片）', key: true, reveal: true,
            result: 'Adenocarcinoma，**WT1+、PAX8+**，符合 **high-grade serous**', clue: '**High-grade serous carcinoma**',
            miss: '病理診斷靠病灶切片或腹水。' },
          { id: 'germ', group: '遺傳', label: '**Germline genetic testing**', key: true, reveal: true,
            result: '**BRCA1 pathogenic variant**', clue: '**gBRCA1 (+)**',
            miss: '所有卵巢癌都做 germline testing，影響 PARPi 與家族篩檢。' },
          { id: 'cea', group: '其他', label: 'CEA、CA19-9', result: '正常', clue: '不像 GI 原發' },
          { id: 'bx', group: '其他', label: 'Brain MRI', result: '（未執行）',
            waste: '沒有神經症狀。' }
        ]
      }
    },
    plan: {
      text: 'Stage IIIC high-grade serous，gBRCA1。大量腫瘤負荷，婦癌外科評估一次完整減積困難。計畫？',
      choices: [
        { label: '**Neoadjuvant carboplatin + paclitaxel -> interval cytoreductive surgery -> 完成化療 -> PARPi（olaparib）維持**', next: 'rec' },
        { label: '只用化療，晚期開刀沒意義', next: 'p_nosurg' },
        { label: '用 CA-125 篩檢家人', next: 'p_screen' }
      ]
    },
    p_nosurg: {
      text: '主治醫師搖頭。',
      feedback: 'Cytoreductive surgery 即使在 stage IV 都有存活好處；無法一次完整減積時先 neoadjuvant chemo 再手術。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    p_screen: {
      text: '主治醫師搖頭。',
      feedback: '卵巢癌沒有被證實有存活好處的篩檢工具。家人應做 BRCA cascade testing，帶因者考慮 risk-reducing BSO。',
      choices: [{ label: '重新決定', next: 'plan' }]
    },
    rec: {
      text: 'Olaparib 維持兩年半後，CA-125 上升，CT 見腹膜復發。**距離最後一次 platinum 已 30 個月**。',
      clue: '最後一次 platinum 後 **30 個月**復發',
      choices: [
        { label: '**Platinum sensitive（> 6 個月）-> 再用 platinum doublet**；可評估二次減積', next: 'end_good' },
        { label: 'Platinum resistant -> liposomal doxorubicin 單藥', next: 'end_ok',
          why: '復發距最後一次 platinum > 6 個月屬 platinum sensitive，再用 platinum doublet 反應最好；< 6 個月才用非 platinum 單藥。' }
      ]
    },
    end_ok: {
      text: '單藥化療反應有限，四個月後再次進展。',
      ending: {
        grade: 'ok',
        title: 'Platinum-sensitive 復發未用 platinum',
        pearls: [
          '> 6 個月：platinum sensitive -> platinum doublet',
          '< 6 個月：platinum resistant -> 單藥 ± bevacizumab'
        ]
      }
    },
    end_good: {
      text: '二次減積後再用 carboplatin + paclitaxel，又維持了兩年。妹妹驗出同一 BRCA1 變異，接受了 risk-reducing BSO。',
      ending: {
        grade: 'good',
        title: 'Advanced high-grade serous ovarian cancer',
        pearls: [
          '所有卵巢癌做 germline testing',
          'Cytoreduction + carboplatin/paclitaxel；可 neoadjuvant',
          'PARPi 維持（BRCA/HRD）；HR proficient 可 bevacizumab',
          '復發依 platinum-free interval 分 sensitive/resistant'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho15-gbm',
  chapter: 'HO15',
  title: '第一次抽搐',
  patient: '55 歲男性 · 業務經理',
  summary: '開會時突然右手抽動、倒地抽搐。家人說他最近脾氣變差、常頭痛。',
  cards: ['ho-cns'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。林先生開會時右手開始抽動，接著全身強直陣攣約 2 分鐘。家人說一個月來頭痛、早上會吐、個性改變。',
        '現在意識恢復，右手輕度無力。'
      ],
      clue: ['55M；**新發癲癇**（focal -> generalized）', '頭痛、晨吐（ICP 上升）、個性改變', '右手無力'],
      choices: [{ label: '影像', next: 'img' }]
    },
    img: {
      text: '急診 CT 看到左額頂區低密度病灶。下一步？',
      choices: [
        { label: '**Brain MRI（含 contrast）**；開始抗癲癇藥', next: 'mri' },
        { label: 'CT 已經看到了，不用 MRI', next: 'i_ct' }
      ]
    },
    i_ct: {
      text: '主治醫師搖頭。',
      feedback: 'CT 敏感度較低，要用 MRI 評估腫瘤特徵、範圍與手術計畫，並找其他病灶。',
      choices: [{ label: '重新決定', next: 'img' }]
    },
    mri: {
      text: 'MRI：左額頂 5 cm **環狀顯影**病灶，中央壞死，周圍大片水腫，跨越 corpus callosum。CT 胸腹骨盆：無其他腫瘤。',
      clue: '5 cm ring-enhancing、中央壞死、跨 corpus callosum（butterfly）；無原發腫瘤',
      choices: [
        { label: '影像像 GBM 但無法排除 **primary CNS lymphoma** -> **切片前先不給類固醇**（除非腦疝風險）；神經外科評估', next: 'surg' },
        { label: '立即高劑量 dexamethasone，再安排切片', next: 'i_ster' }
      ]
    },
    i_ster: {
      text: '主治醫師提醒你。',
      feedback: '跨 corpus callosum 的病灶也可能是 CNS lymphoma。類固醇會讓淋巴瘤消退、讓切片無法診斷；除非有腦疝風險，切片前先不給。',
      choices: [{ label: '重新決定', next: 'mri' }]
    },
    surg: {
      text: '最大安全切除。病理：**glioblastoma, IDH-wildtype, grade 4**；**MGMT promoter methylated**。術後？',
      clue: '**GBM, IDH-wt**；**MGMT methylated**',
      choices: [
        { label: '**RT + concurrent temozolomide -> adjuvant temozolomide**；MGMT methylated 預期對 TMZ 反應較好', next: 'end_good' },
        { label: '切乾淨了，觀察', next: 'end_obs',
          why: 'High-grade glioma 一定會復發，術後標準是 RT + temozolomide；MGMT methylation 預測 TMZ 效果。' }
      ]
    },
    end_obs: {
      text: '三個月後 MRI 腫瘤在切除邊緣快速復發。',
      ending: {
        grade: 'bad',
        title: 'GBM 術後未輔助治療',
        pearls: [
          'GBM：最大切除 -> RT + temozolomide',
          '存活 12-15 個月，與切除程度相關'
        ]
      }
    },
    end_good: {
      text: '完成 RT + TMZ。一年後 MRI 穩定，林先生帶家人出國旅行。家人也開始和緩和團隊討論之後的照護。',
      ending: {
        grade: 'good',
        title: 'Glioblastoma, IDH-wildtype',
        pearls: [
          '新癲癇 + ICP 上升 -> brain MRI',
          '懷疑 CNS lymphoma：切片前避免類固醇',
          '1p/19q、IDH、MGMT；MGMT methylated 預測 TMZ 敏感',
          '最大安全切除 -> RT + TMZ'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho15-mel',
  chapter: 'HO15',
  title: '背上的那顆痣',
  patient: '48 歲男性 · 工地主任',
  summary: '太太發現他背上的痣這半年變大變黑，邊緣不規則。',
  cards: ['ho-melanoma', 'ho-cns'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '皮膚科門診。周先生背上一顆痣半年內從 4 mm 長到 **9 mm**，**不對稱、邊緣不規則、黑褐雜色**，最近會流血。',
        '他長年戶外工作，常曬傷。'
      ],
      clue: ['48M；背部病灶 **9 mm、不對稱、邊緣不規則、多色、變大、出血**（ABCDE 全符合）'],
      choices: [{ label: '處理病灶', next: 'bx' }]
    },
    bx: {
      text: '怎麼處理？',
      choices: [
        { label: '**全層切片（excisional biopsy，窄邊緣）**取得 Breslow thickness', next: 'path' },
        { label: '液態氮冷凍掉', next: 'b_cryo' },
        { label: 'Shave biopsy 表層就好', next: 'b_shave' }
      ]
    },
    b_cryo: {
      text: '主治醫師搖頭。',
      feedback: '可疑病灶冷凍會破壞組織，無法診斷也無法分期。',
      choices: [{ label: '重新決定', next: 'bx' }]
    },
    b_shave: {
      text: '主治醫師搖頭。',
      feedback: '淺層 shave 可能切斷腫瘤底部，無法測量 Breslow thickness，而厚度是分期關鍵。',
      choices: [{ label: '重新決定', next: 'bx' }]
    },
    path: {
      text: '病理：**melanoma，Breslow 2.4 mm、有潰瘍**。下一步？',
      clue: '**Melanoma 2.4 mm、ulcerated**（T3b）',
      choices: [
        { label: '**Wide local excision + sentinel lymph node biopsy**；驗 **BRAF**', next: 'sln' },
        { label: '切片已經切掉了，觀察', next: 'p_obs' }
      ]
    },
    p_obs: {
      text: '主治醫師搖頭。',
      feedback: '侵襲性 melanoma 要 wide excision（足夠邊緣）並做 sentinel node mapping 分期。',
      choices: [{ label: '重新決定', next: 'path' }]
    },
    sln: {
      text: 'SLNB：**1/2 陽性**（micrometastasis）。**BRAF V600E 陽性**。PET-CT、brain MRI 無遠處轉移。**Stage IIIC**。',
      clue: ['**SLN (+)** -> stage III', '**BRAF V600E**'],
      choices: [
        { label: '**SLN 陽性可觀察（不必立即完整淋巴結清除，存活無差）+ 輔助全身治療（anti-PD-1 或 dabrafenib/trametinib）**', next: 'met' },
        { label: '一定要做完整腋下淋巴結清除，術後觀察', next: 'n_cld' }
      ]
    },
    n_cld: {
      text: '主治醫師搖頭。',
      feedback: 'SLN 陽性後立即完整清除不改善存活（MSLT-II），還增加淋巴水腫；重點是高風險 LN 疾病要給輔助 ICI 或 BRAF/MEK。',
      choices: [{ label: '重新決定', next: 'sln' }]
    },
    met: {
      text: '輔助 nivolumab 一年後停藥。兩年後他頭痛，MRI：**3 處無症狀小腦轉移**，另有肺轉移。',
      clue: '**腦轉移**（無症狀）+ 肺轉移',
      choices: [
        { label: '**Ipilimumab + nivolumab**（對腦轉移反應率較高）；腦部可配合 SRS；BRAF/MEK 是另一選項', next: 'end_good' },
        { label: '全腦放射治療就好', next: 'm_wbrt' }
      ]
    },
    m_wbrt: {
      text: '主治醫師搖頭。',
      feedback: 'Melanoma 腦轉移無症狀時，ipi + nivo 顱內反應率高；局部治療優先 SRS。WBRT 留給很多轉移或無其他選擇時。',
      choices: [{ label: '重新決定', next: 'met' }]
    },
    end_good: {
      text: 'Ipi + nivo 後腦轉移與肺轉移都縮小。治療中他出現 colitis，用類固醇控制後繼續追蹤。',
      ending: {
        grade: 'good',
        title: 'Melanoma：從 stage III 到腦轉移',
        pearls: [
          'ABCDE -> 全層切片；Breslow 厚度與潰瘍決定分期',
          'Wide excision + SLNB；SLN (+) 可觀察 + 輔助全身治療',
          'BRAF V600E 約 50%：BRAF/MEK inhibitors',
          'Ipi + nivo 對腦轉移反應較好；第二線 TIL'
        ]
      }
    }
  }
});
