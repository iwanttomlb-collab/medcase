// HO 16 Oncologic emergencies and chemotherapy toxicities. Source: Pocket Medicine Ch 5, p42, 55-58 of 書頁.txt

RPG.registerCards('HO16', [
  {
    id: 'ho-fn',
    title: 'Fever and neutropenia',
    points: [
      '**Fever**：單次口溫 >= 38.3 度，或 >= 38.0 度持續 1 小時；**neutropenia**：ANC < 500，或 < 1,000 且預期降到 < 500',
      '來源：導管、皮膚破損、**GI mucositis**、阻塞；多為腸道菌入血（**GNR，尤其 P. aeruginosa**）；**G+ 現在佔 60-70%**；長期 neutropenia + 抗生素 -> fungi',
      '**Neutropenic enterocolitis（typhlitis）**：右下腹痛、水便或血便、盲腸壁增厚',
      'PE：皮膚、口咽、肺、肛周、手術與導管處；**避免肛門指診**',
      '檢查：UA、**血液培養（周邊 + 每個導管 lumen）**、尿、痰；有局部症狀再驗 C. diff、CSF 等；CXR；必要時 CT',
      '**Neutropenia 讓發炎反應變弱**：症狀與影像可能很輕微',
      '**低風險**：門診、ECOG 0-1、< 60 歲、實體腫瘤、無症狀、無重大共病、無黴菌史、體溫 < 39、無低血壓、ANC > 100、預期 neutropenia < 7 天 -> 可口服（cipro + amox-clav）',
      '**高風險：住院 IV 抗 Pseudomonas 單一藥物（cefepime、carbapenem、pip-tazo、ceftazidime）**',
      '**Vancomycin 只在**：低血壓、肺炎、明顯導管或軟組織感染、血液培養 G+、mucositis 合併 FQ 預防',
      '**抗生素 4 天仍發燒 -> 加抗黴菌**（echinocandin、L-AmB、voriconazole、posaconazole）',
      '療程：已知來源依標準療程；**未知來源持續到退燒且 ANC > 500**',
      '預防：FQ（中高風險）；血液腫瘤考慮抗黴菌、抗病毒；**G-CSF 原發預防（FN 機率 > 20%）或次發預防（曾 FN，為維持可治癒疾病的劑量強度）**；AML 不用；降低 FN 但未證實降低死亡'
    ],
    refs: ['JCO 2013;31:1149（outpatient FN）', 'Cochrane 2012;CD004386（FQ prophylaxis）', 'Cochrane 2014;CD003039（CSF）']
  },
  {
    id: 'ho-mscc',
    title: 'Metastatic spinal cord compression',
    points: [
      '椎體轉移延伸到硬膜外壓迫脊髓',
      '最常見：**攝護腺、乳房、肺**，其次 RCC、NHL、myeloma',
      '部位：**胸椎 60%**、腰椎 25%、頸椎 15%',
      '症狀：**疼痛（> 95%，先於神經症狀）**、無力、自律神經（尿滯留、肛門括約肌張力）、感覺喪失',
      '**癌症病人的背痛一定要認真看**；**緊急全脊椎 MRI**（不能做則 CT）',
      '**不要等神經症狀出現才評估**：治療前神經缺損的時間與嚴重度是最好的預後因子',
      '**背痛 + 神經缺損：立即 dexamethasone 10 mg IV，之後 4 mg q6h（不等影像）**',
      '確診壓迫或神經缺損 -> **緊急 RT 或手術減壓**；實體腫瘤 **手術 + RT 優於 RT 單用**；病理性骨折壓迫 -> 手術，不能開則 RT'
    ],
    refs: ['Lancet Neurol 2008;7:459', 'NEJM 2017;376:1358（MSCC）', 'Lancet 2005;366:643（Patchell）']
  },
  {
    id: 'ho-tls',
    title: 'Tumor lysis syndrome',
    points: [
      '大量或快速增殖的腫瘤（自發或治療後）釋放細胞內電解質與核酸',
      '**最常見：high-grade lymphoma（Burkitt）與 leukemias（ALL、AML、CML blast crisis）**；實體腫瘤很少',
      '**K 上升、uric acid 上升、PO4 上升 -> Ca 下降**；腎衰竭（urate nephropathy）',
      '**預防：allopurinol 300 mg qd-bid PO 或 200-400 mg/m2 IV（依腎功能調整）+ 積極水分**，在化療或 RT 前開始',
      '治療：**停 IV contrast 與 NSAIDs**；處理 hyperK、hyperPO4；**只治療有症狀的低血鈣**（補鈣會與 PO4 沉積）',
      'Allopurinol + 積極 IV hydration ± 利尿，**尿量目標 80-100 mL/h**',
      '**Rasburicase**（0.1-0.2 mg/kg 或 6 mg 固定劑量）用於高 uric acid、侵襲性腫瘤；**G6PD 缺乏禁用**（溶血、methemoglobinemia）',
      '可能需要透析；腎功能不全早期會診腎臟科'
    ],
    refs: ['NEJM 2011;364:1844（TLS）', 'JCO 2003;21:4402（rasburicase）']
  },
  {
    id: 'ho-tox1',
    title: '化療毒性（一）：心、肺、腎',
    table: {
      head: ['器官', '藥物', '重點'],
      rows: [
        ['心', '**Anthracyclines**', '劑量相關 cardiomyopathy；**治療前測 EF**'],
        ['心', '**5-FU**', '**冠狀動脈痙攣 -> 缺血**；CCB 可能預防'],
        ['心', '**Trastuzumab**', 'Cardiomyopathy（尤其合併 anthracycline）；追蹤 EF'],
        ['心', 'TKI', 'QTc 延長、CMP、心絞痛'],
        ['心', 'Cyclophosphamide', 'Myopericarditis（尤其移植高劑量）'],
        ['心', 'Cisplatin', 'AKI -> 低 Mg、高 K -> 心律不整'],
        ['肺', 'Busulfan', '約 8% 纖維化或 DAH；嚴重 -> steroids'],
        ['肺', '**Bleomycin**', '約 10% **肺纖維化**；**治療前 PFT**；steroids'],
        ['肺', 'TKI（尤其 **dasatinib**）', 'Pneumonitis、**pleural effusion**'],
        ['肺', 'Bevacizumab', '肺出血（尤其肺 SCC）'],
        ['肺', 'ADC（T-DXd）、ICI', 'ILD/pneumonitis -> 停藥 + steroids'],
        ['腎', '**Cisplatin**', '近端腎小管；**IV saline 預先水化**'],
        ['腎', '**Methotrexate**', '結晶沉積；**鹼化尿液 + IVF**'],
        ['泌尿', '**Cyclophosphamide/ifosfamide**', '**Hemorrhagic cystitis -> mesna**']
      ]
    },
    refs: ['NEJM 2016;375:1457（cardio-oncology）', 'Semin Oncol 2006;33:98（pulmonary）']
  },
  {
    id: 'ho-tox2',
    title: '化療毒性（二）：神經、肝、皮膚、腸胃',
    table: {
      head: ['器官', '藥物', '重點'],
      rows: [
        ['神經', '**Cisplatin**', '**Stocking-glove neuropathy**、**ototoxicity**'],
        ['神經', '**Cytarabine（高劑量）**', '**小腦毒性**（5-10% 不可逆）'],
        ['神經', '**Methotrexate（尤其 IT）**', '晚期白質腦病、腦膜炎；**glucarpidase、leucovorin**'],
        ['神經', '**Ifosfamide**', '**Encephalopathy -> methylene blue、thiamine**'],
        ['神經', 'Taxanes、vincristine', '感覺運動長纖維神經病變'],
        ['肝', 'TKI（imatinib、nilotinib）、gemcitabine、MTX', '轉氨酶上升；bili 高要減量；MTX 罕見纖維化'],
        ['皮膚', '**EGFR、MEK inhibitors**', '**痤瘡樣皮疹**：steroids + 抗生素'],
        ['皮膚', '**Capecitabine、5-FU、liposomal doxorubicin**', '**Hand-foot syndrome**'],
        ['皮膚', 'Imatinib', '皮膚炎，可嚴重（SJS）'],
        ['腸胃', '**Irinotecan**', '**24 小時內乙醯膽鹼激增型腹瀉**（atropine）；之後延遲型腹瀉'],
        ['腸胃', '5-FU、RAS/EGFR inhibitors', 'Mucositis、腹瀉'],
        ['腸胃', 'CDK4/6i（尤其 abemaciclib）', '腹瀉']
      ]
    },
    refs: ['Semin Oncol 2006;33:324（neurotoxicity）', 'Semin Oncol 2006;33:50（hepatotoxicity）', 'Clin Pharm 2018;57:1229（GI）', 'NEJM 2016;374:1356（CINV）']
  },
  {
    id: 'ho-svc',
    title: 'SVC syndrome',
    points: [
      '中央型腫瘤壓迫 SVC；肺癌最常見（NSCLC 數量多，SCLC 比例高），其次淋巴瘤（縱膈 T-ALL/LBL、HL）',
      '臉與手臂腫脹（> 80%）、頸胸靜脈怒張（約 60%）、喘咳（約 50%）、頭痛（約 10%）',
      '**穩定時先取得組織診斷**（化療敏感腫瘤如 SCLC、淋巴瘤治療方向不同；類固醇可能干擾淋巴瘤病理）',
      'Rx：steroids、利尿、**RT ± chemo**；**嚴重症狀（stridor、腦水腫）-> SVC stent**；有血栓則抗凝'
    ],
    refs: ['NEJM 2007;356:1862（SVC syndrome）']
  }
]);

RPG.registerCase({
  id: 'ho16-fn',
  chapter: 'HO16',
  title: '化療第十天的發燒',
  patient: '47 歲女性 · 乳癌輔助化療中',
  summary: '第二個 cycle 的第十天，半夜發燒 38.7 度，打電話到急診。',
  cards: ['ho-fn'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。邵小姐乳癌術後輔助化療（docetaxel + cyclophosphamide）第 2 cycle 第 10 天。有 port-A。',
        '發燒 **38.7 度**、寒顫。BP **88/52**、HR 118。口腔有 mucositis，port 周圍皮膚微紅。',
        'CBC：WBC 400，**ANC 120**。'
      ],
      clue: ['47F；化療 day 10；**port-A**', '**發燒 38.7、BP 88/52、HR 118**', 'Mucositis；**port 周圍紅**', '**ANC 120**'],
      choices: [{ label: '風險分層', next: 'risk' }]
    },
    risk: {
      text: '這是低風險還是高風險 FN？',
      choices: [
        { label: '**高風險**：低血壓、ANC < 100 左右、mucositis、疑似導管感染 -> **住院 IV 抗生素**', next: 'workup' },
        { label: '低風險：門診口服 cipro + amox-clav', next: 'r_low' }
      ]
    },
    r_low: {
      text: '主治醫師搖頭。',
      feedback: '低風險要無低血壓、體溫 < 39、無症狀、ANC > 100、預期 neutropenia < 7 天等。她低血壓、心跳快、可能導管感染，是高風險。',
      choices: [{ label: '重新判讀', next: 'risk' }]
    },
    workup: {
      text: '評估與開立醫囑。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'abx',
        options: [
          { id: 'bcx', group: '培養', label: '**血液培養：周邊 + port 每個 lumen**', key: true, reveal: true,
            result: '已送（兩套）', clue: '血液培養（周邊 + port）已送',
            miss: '一定要同時從周邊與每個導管 lumen 抽血液培養，才能判斷導管感染。' },
          { id: 'ua', group: '培養', label: 'UA、尿液培養', key: true, reveal: true,
            result: 'UA 正常', clue: 'UA 正常',
            miss: '尿路是常見來源，neutropenia 時膿尿可能不明顯。' },
          { id: 'cxr', group: '影像', label: 'CXR', key: true, reveal: true,
            result: '無浸潤', clue: 'CXR 無浸潤',
            miss: '要找肺部來源（neutropenia 時浸潤可能很淡）。' },
          { id: 'lac', group: '血液', label: 'Lactate、CMP', result: 'Lactate 3.1；Cr 1.2', clue: 'Lactate 3.1' },
          { id: 'skin', group: '理學', label: '仔細看皮膚、口咽、肛周、port 處', key: true, reveal: true,
            result: 'Port 皮膚紅腫 2 cm、壓痛，無膿', clue: '**Port 出口感染**',
            miss: 'Neutropenia 病人要逐一檢查可能的感染部位。' },
          { id: 'dre', group: '理學', label: '肛門指診', result: '（取消）',
            waste: 'Neutropenia 病人避免肛門指診（菌血症、出血）；肛周用看的。' }
        ]
      }
    },
    abx: {
      text: '經驗性抗生素？（同時給 IV fluids）',
      choices: [
        { label: '**Cefepime（抗 Pseudomonas）+ vancomycin**（低血壓、疑似導管/軟組織感染）', next: 'day4' },
        { label: 'Ceftriaxone', next: 'a_cro' },
        { label: '只用 vancomycin，port 感染是 G+', next: 'a_vanc' }
      ]
    },
    a_cro: {
      text: '主治醫師搖頭。',
      feedback: 'FN 的經驗性抗生素一定要有**抗 Pseudomonas** 活性（cefepime、carbapenem、pip-tazo、ceftazidime），ceftriaxone 沒有。',
      choices: [{ label: '重新決定', next: 'abx' }]
    },
    a_vanc: {
      text: '主治醫師搖頭。',
      feedback: '就算懷疑 port 感染，GNR（尤其 Pseudomonas）仍可能致命。Vancomycin 是加在抗 Pseudomonas 藥物上，不是取代。',
      choices: [{ label: '重新決定', next: 'abx' }]
    },
    day4: {
      text: [
        '血液培養：**MSSA**（周邊與 port 皆陽性），改用 cefazolin 並移除 port。血壓穩定了。',
        '但**第 5 天**仍每天發燒 38.5，ANC 還是 200。重複血液培養陰性，TEE 無贅生物。'
      ],
      clue: ['MSSA 菌血症（port 已移除）', '**抗生素第 5 天仍發燒**、ANC 200'],
      choices: [
        { label: '**加經驗性抗黴菌**（echinocandin 或 voriconazole 等），並做 chest CT 找黴菌', next: 'next' },
        { label: '繼續等，抗生素總會有效', next: 'd_wait' }
      ]
    },
    d_wait: {
      text: '主治醫師搖頭。',
      feedback: 'Neutropenic fever 在適當抗生素下 >= 4 天仍發燒，要加經驗性抗黴菌治療。',
      choices: [{ label: '重新決定', next: 'day4' }]
    },
    next: {
      text: [
        'Chest CT 無結節。第 8 天 ANC 1,200 後退燒。',
        '腫瘤科問：「下個 cycle 怎麼辦？她的乳癌是可治癒的。」'
      ],
      choices: [
        { label: '**次發預防：G-CSF**（曾 FN，維持可治癒疾病的劑量強度）', next: 'end_good' },
        { label: '直接把化療劑量減半', next: 'end_ok',
          why: '治癒性治療要盡量維持劑量強度；曾發生 FN 時，G-CSF 次發預防可降低 FN，避免不必要的減量。' }
      ]
    },
    end_ok: {
      text: '減量後沒有再發燒，但治療強度下降。',
      ending: {
        grade: 'ok',
        title: 'FN 後不必要的減量',
        pearls: [
          'G-CSF：FN 機率 > 20% 原發預防，曾 FN 次發預防',
          '可治癒疾病優先維持劑量強度'
        ]
      }
    },
    end_good: {
      text: '之後每個 cycle 配合 pegfilgrastim，順利完成四個 cycle。',
      ending: {
        grade: 'good',
        title: 'High-risk febrile neutropenia',
        pearls: [
          '高風險：住院 IV 抗 Pseudomonas 單藥',
          'Vancomycin：低血壓、導管/軟組織感染、G+ 菌血、mucositis + FQ',
          '>= 4 天仍發燒 -> 加抗黴菌',
          '未知來源：到退燒且 ANC > 500；G-CSF 次發預防'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho16-mscc',
  chapter: 'HO16',
  title: '背痛兩週，今天腳軟',
  patient: '71 歲男性 · 攝護腺癌骨轉移',
  summary: '已知攝護腺癌，兩週來中背痛，躺著更痛。今天早上兩腳發軟、尿不太出來。',
  cards: ['ho-mscc'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。彭伯伯攝護腺癌骨轉移，ADT 中。兩週中背痛，**平躺時更痛**，止痛藥沒效。',
        '今天早上兩腳無力、走路要扶，**四小時沒有小便**，膀胱超音波 650 mL。',
        'PE：下肢肌力 3/5，**T8 以下感覺下降**，肛門張力下降。'
      ],
      clue: ['71M；**攝護腺癌骨轉移**', '背痛 2 週（平躺加重）', '**雙下肢無力 3/5、T8 感覺平面**', '**尿滯留 650 mL**、肛門張力下降'],
      choices: [{ label: '立即處置', next: 'now' }]
    },
    now: {
      text: '高度懷疑 MSCC。第一件事？',
      choices: [
        { label: '**立即 dexamethasone 10 mg IV**（不等影像），然後 **緊急全脊椎 MRI**；放導尿管', next: 'mri' },
        { label: '先做 MRI 確診再給類固醇', next: 'n_wait' },
        { label: '安排明天門診 MRI', next: 'n_tmr' }
      ]
    },
    n_wait: {
      text: '主治醫師搖頭。',
      feedback: '背痛 + 神經缺損時，dexamethasone 要立即給，不等影像。神經功能是時間依賴的。',
      choices: [{ label: '重新決定', next: 'now' }]
    },
    n_tmr: {
      text: '主治醫師立刻打斷。',
      feedback: 'MSCC 是急症，治療前神經缺損的時間與嚴重度是最好的預後因子，要緊急全脊椎 MRI。',
      choices: [{ label: '重新決定', next: 'now' }]
    },
    mri: {
      text: '全脊椎 MRI：**T8 椎體轉移合併後凸、硬膜外腫瘤嚴重壓迫脊髓**；L2 另一處椎體轉移無壓迫。他平常可以騎腳踏車，預期餘命 > 3 個月。',
      clue: '**T8 epidural compression**',
      choices: [
        { label: '**緊急手術減壓 + 穩定**，術後 **RT**', next: 'end_good' },
        { label: '只用類固醇，觀察', next: 'm_ster' },
        { label: 'RT 單用', next: 'm_rt' }
      ]
    },
    m_ster: {
      text: '主治醫師搖頭。',
      feedback: '確診壓迫合併神經缺損，需要緊急 RT 或手術減壓；類固醇只是過渡。',
      choices: [{ label: '重新決定', next: 'mri' }]
    },
    m_rt: {
      text: '主治醫師搖頭。',
      feedback: '實體腫瘤合併脊髓壓迫，適合手術者 **手術 + RT 優於 RT 單用**（行走能力恢復較好），且他有後凸不穩定。不適合手術才用 RT 單用。',
      choices: [{ label: '重新決定', next: 'mri' }]
    },
    end_good: {
      text: '當晚手術減壓與固定，之後接受 RT。兩週後他可以扶著助行器走路，導尿管拔除。',
      ending: {
        grade: 'good',
        title: 'Metastatic spinal cord compression',
        pearls: [
          '癌症病人背痛要認真看；疼痛先於神經症狀',
          '神經缺損 -> 立即 dexamethasone 10 mg IV，再緊急全脊椎 MRI',
          '適合者手術 + RT 優於 RT 單用'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho16-tls',
  chapter: 'HO16',
  title: '化療第一天的鉀',
  patient: '26 歲男性 · Burkitt lymphoma',
  summary: '腹部腫塊快速長大、LDH 三千多，明天要開始化療。',
  cards: ['ho-tls'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '血液科病房。小魏 26 歲，腹部 15 cm 腫塊兩週內明顯變大，確診 **Burkitt lymphoma**。**LDH 3,400**。',
        '今天（化療前）：Cr 1.4（baseline 0.8）、**uric acid 11.8**、K 5.4、PO4 5.6、Ca 8.6。尿量 40 mL/h。'
      ],
      clue: ['26M；**Burkitt**、bulky、**LDH 3,400**', '**化療前已 uric acid 11.8、Cr 1.4**', 'K 5.4、PO4 5.6'],
      choices: [{ label: '化療前準備', next: 'prep' }]
    },
    prep: {
      text: '已經有 laboratory TLS 跡象。化療前的處置？',
      checklist: {
        prompt: '勾選你要開的醫囑',
        submit: '送出醫囑',
        revealLabel: '主治醫師補開',
        next: 'day2',
        options: [
          { id: 'ivf', group: '水分', label: '**積極 IV hydration**，尿量目標 80-100 mL/h', key: true, reveal: true,
            result: 'NS 200 mL/h', clue: '積極水化',
            miss: '積極水化是 TLS 預防與治療的基礎。' },
          { id: 'g6pd', group: '藥物', label: '**G6PD**', key: true, reveal: true,
            result: '正常', clue: 'G6PD 正常',
            miss: 'Rasburicase 在 G6PD 缺乏會造成溶血與 methemoglobinemia，用藥前要知道。' },
          { id: 'ras', group: '藥物', label: '**Rasburicase**', key: true, reveal: true,
            result: '0.2 mg/kg IV', clue: 'Rasburicase 已給',
            miss: '高 uric acid + 侵襲性淋巴瘤 + 腎功能已受損，rasburicase 比 allopurinol 快且有效。' },
          { id: 'nephro', group: '會診', label: '**腎臟科早期會診**', key: true, reveal: true,
            result: '已會診，透析備用', clue: '腎臟科已知會',
            miss: '已有腎功能不全，早期會診腎臟科以備透析。' },
          { id: 'ct', group: '其他', label: '今天加做 contrast CT 評估腫瘤', result: '已取消',
            waste: 'TLS 風險高且腎功能變差時避免 IV contrast。' },
          { id: 'nsaid', group: '其他', label: 'Ketorolac 止痛', result: '已取消',
            waste: 'TLS 時避免 NSAIDs（腎毒性）。' },
          { id: 'bicarb', group: '其他', label: '大量 sodium bicarbonate 鹼化尿液', result: '已取消',
            waste: '鹼化尿液已不建議：會讓 calcium phosphate 沉積在腎臟。' }
        ]
      }
    },
    day2: {
      text: [
        '化療開始後 24 小時：**K 6.6**、**PO4 9.8**、**Ca 6.8**（無症狀，無 tetany，QTc 正常）、Cr 2.6、尿量 25 mL/h（已用 furosemide）。ECG：peaked T。'
      ],
      clue: ['**K 6.6**（peaked T）', '**PO4 9.8**、**Ca 6.8（無症狀）**', 'Cr 2.6、**少尿**'],
      choices: [
        { label: '治療 hyperK（calcium gluconate 穩定心肌、insulin/glucose 等）；**無症狀低血鈣不補鈣**；**少尿合併嚴重電解質異常 -> 緊急透析**', next: 'end_good' },
        { label: '補大量 IV calcium 矯正低血鈣', next: 'd_ca' },
        { label: '繼續加大 furosemide 劑量，等尿出來', next: 'd_lasix' }
      ]
    },
    d_ca: {
      text: '主治醫師搖頭。',
      feedback: '只治療**有症狀**的低血鈣。PO4 很高時補鈣會讓 calcium phosphate 沉積在腎臟與組織。（為了 hyperK 的心肌保護給一次 calcium gluconate 是另一回事。）',
      choices: [{ label: '重新決定', next: 'day2' }]
    },
    d_lasix: {
      text: '主治醫師搖頭。',
      feedback: '對利尿劑沒反應的少尿 + K 6.6 + PO4 很高，是透析的適應症，不要拖延。',
      choices: [{ label: '重新決定', next: 'day2' }]
    },
    end_good: {
      text: '緊急 CRRT 三天後電解質穩定，腎功能逐漸恢復。化療繼續，腫塊在一週內明顯縮小。',
      ending: {
        grade: 'good',
        title: 'Burkitt lymphoma 的 TLS',
        pearls: [
          'TLS：K、uric acid、PO4 上升，Ca 下降，AKI',
          '最常見：Burkitt、ALL、AML、CML blast crisis',
          '預防：allopurinol + 積極水化；高風險 rasburicase（先驗 G6PD）',
          '只治療有症狀的低血鈣；避免 contrast 與 NSAIDs；早期找腎臟科'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho16-svc',
  chapter: 'HO16',
  title: '早上起床臉腫',
  patient: '59 歲男性 · 吸菸者',
  summary: '兩週來早上起床臉和脖子腫，襯衫釦子扣不上，彎腰會頭暈。',
  cards: ['ho-svc', 'ho-lung-sx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。卓先生抽菸 40 年。兩週來早上臉、脖子、右手腫，襯衫領口扣不上，彎腰時頭脹。',
        'PE：臉部浮腫、**頸部與前胸靜脈怒張**。呼吸平順，**沒有 stridor**，意識清楚。',
        'CT：右上縱膈 7 cm 腫塊**壓迫 SVC**，無血栓。'
      ],
      clue: ['59M；臉頸、右手腫脹；**頸胸靜脈怒張**', '**縱膈腫塊壓迫 SVC**', '**無 stridor、無腦水腫**（穩定）'],
      choices: [{ label: '處置', next: 'tx' }]
    },
    tx: {
      text: '他目前穩定。下一步？',
      choices: [
        { label: '抬高床頭；**先取得組織診斷**（EBUS 或 CT-guided bx），再依病理決定 RT/chemo；**惡化（stridor、腦水腫）就放 SVC stent**', next: 'path' },
        { label: '立即高劑量類固醇 + 緊急放射治療，切片之後再說', next: 't_rt' },
        { label: '直接全身抗凝', next: 't_ac' }
      ]
    },
    t_rt: {
      text: '主治醫師搖頭。',
      feedback: 'SVC syndrome 很少立即危及生命。穩定時先取得病理：SCLC、淋巴瘤的治療方向完全不同，而且類固醇與放療可能讓淋巴瘤病理無法判讀。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_ac: {
      text: '主治醫師搖頭。',
      feedback: 'CT 沒有血栓，是腫瘤外壓。抗凝只在有血栓時使用。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    path: {
      text: 'EBUS：**small cell lung cancer**。分期：limited stage。',
      clue: '**SCLC，limited stage**',
      choices: [
        { label: 'SCLC 對化療很敏感：**platinum + etoposide + concurrent RT**（之後 durvalumab），症狀通常很快改善', next: 'end_good' },
        { label: '先放 SVC stent 再說', next: 'p_stent' }
      ]
    },
    p_stent: {
      text: '主治醫師搖頭。',
      feedback: 'Stent 是給嚴重症狀（stridor、腦水腫）或治療無效時。他穩定，而且 SCLC 對化療反應快，先治療腫瘤。',
      choices: [{ label: '重新決定', next: 'path' }]
    },
    end_good: {
      text: '化療第一個 cycle 一週後，臉部腫脹就消了。卓先生完成 chemoRT 後終於戒菸。',
      ending: {
        grade: 'good',
        title: 'SCLC 造成的 SVC syndrome',
        pearls: [
          'SVC syndrome：臉/手臂腫、頸胸靜脈怒張',
          '穩定時先取得病理',
          'Steroids、利尿、RT ± chemo；嚴重症狀放 stent；有血栓才抗凝'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho16-tox',
  chapter: 'HO16',
  title: '化療病房查房',
  patient: '腫瘤科病房 · 早上查房',
  summary: '今天早上有五位病人的問題都跟化療藥物有關。',
  cards: ['ho-tox1', 'ho-tox2'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '早上七點半，主治醫師帶你查房。',
        '第一床：35 歲男性，sarcoma，今天是 **ifosfamide** 第 3 天。護理師說他從凌晨開始**混亂、嗜睡、胡言亂語**。血糖、電解質正常，沒有發燒。'
      ],
      clue: ['Bed 1：**ifosfamide** day 3 -> **急性混亂、嗜睡**'],
      choices: [
        { label: '**Ifosfamide encephalopathy**：停 ifosfamide，給 **methylene blue**（± thiamine）', next: 'b2' },
        { label: '腦轉移，做 brain MRI 就好', next: 'b1_wrong' },
        { label: '給 haloperidol 鎮靜，繼續化療', next: 'b1_halo' }
      ]
    },
    b1_wrong: {
      text: '主治醫師搖頭。',
      feedback: '可以做影像排除其他原因，但 ifosfamide 治療中突發的意識改變，第一個要想的是 ifosfamide encephalopathy，要停藥並用 methylene blue。',
      choices: [{ label: '重新決定', next: 'intro' }]
    },
    b1_halo: {
      text: '主治醫師搖頭。',
      feedback: '鎮靜不處理原因。Ifosfamide encephalopathy 要停藥，可用 methylene blue、thiamine。',
      choices: [{ label: '重新決定', next: 'intro' }]
    },
    b2: {
      text: '第二床：62 歲男性，**cisplatin** 化療一週後，Cr 1.0 -> 1.9，**Mg 1.1**，K 3.0，主訴耳鳴、手腳麻。下一個 cycle 前要注意什麼？',
      clue: 'Bed 2：**cisplatin** 後 AKI、**低 Mg**、耳鳴、手腳麻',
      choices: [
        { label: 'Cisplatin **近端腎小管毒性**（低 Mg、低 K）、**耳毒性**、stocking-glove neuropathy -> 補 Mg、**治療前 IV saline 水化**、聽力評估、考慮換 carboplatin', next: 'b3' },
        { label: '只是脫水，多喝水就好', next: 'b2_wrong' }
      ]
    },
    b2_wrong: {
      text: '主治醫師搖頭。',
      feedback: 'Cisplatin 傷害近端腎小管，造成腎功能下降與 Mg wasting；低 Mg 會加重低 K 與心律不整。耳鳴與手腳麻也是 cisplatin 毒性。',
      choices: [{ label: '重新決定', next: 'b2' }]
    },
    b3: {
      text: '第三床：28 歲女性，osteosarcoma，**high-dose methotrexate** 後 24 小時，Cr 0.7 -> **2.8**，MTX 濃度遠高於預期。',
      clue: 'Bed 3：**HD-MTX** 後 **AKI**、MTX 濃度高',
      choices: [
        { label: '**Glucarpidase**（分解 MTX）+ 加量 **leucovorin rescue**；IVF、**鹼化尿液**；停用干擾 MTX 排除的藥（NSAIDs、PPI 等）', next: 'b4' },
        { label: '給 furosemide 增加尿量就好', next: 'b3_wrong' }
      ]
    },
    b3_wrong: {
      text: '主治醫師搖頭。',
      feedback: 'MTX 在酸性尿中結晶沉積造成 AKI，而 AKI 又讓 MTX 排不掉。要鹼化尿液 + IVF + leucovorin，濃度很高時用 glucarpidase。',
      choices: [{ label: '重新決定', next: 'b3' }]
    },
    b4: {
      text: '第四床：55 歲女性，colon cancer，**irinotecan** 開始輸注後 **一小時內**：大量水瀉、腹部絞痛、流汗、流口水、瞳孔縮小。',
      clue: 'Bed 4：**irinotecan** 輸注 1 小時內腹瀉 + 膽鹼症狀',
      choices: [
        { label: '**急性 cholinergic 腹瀉**（AChE 抑制）-> **atropine**；延遲型腹瀉才用 loperamide', next: 'b5' },
        { label: 'C. difficile，送糞便檢查並給 vancomycin', next: 'b4_wrong' }
      ]
    },
    b4_wrong: {
      text: '主治醫師搖頭。',
      feedback: 'Irinotecan 給藥 24 小時內（尤其輸注中）的腹瀉合併流汗、流涎、縮瞳，是乙醯膽鹼激增，用 atropine。',
      choices: [{ label: '重新決定', next: 'b4' }]
    },
    b5: {
      text: '第五床：40 歲男性，lymphoma，**cyclophosphamide** 高劑量後出現**肉眼血尿**、頻尿、解尿痛。他要接受下一個 cycle。',
      clue: 'Bed 5：**cyclophosphamide** 後**出血性膀胱炎**',
      choices: [
        { label: '**Hemorrhagic cystitis（acrolein）**：水化、膀胱灌洗；下次給藥合併 **mesna**', next: 'end_good' },
        { label: '細菌性膀胱炎，給抗生素即可', next: 'end_ok',
          why: 'Cyclophosphamide/ifosfamide 的代謝物 acrolein 傷害膀胱上皮造成出血性膀胱炎，預防要靠水化與 mesna，不是抗生素。' }
      ]
    },
    end_ok: {
      text: '下一個 cycle 沒有給 mesna，他的血尿嚴重到需要膀胱灌洗與輸血。',
      ending: {
        grade: 'ok',
        title: '查房漏掉 mesna',
        pearls: [
          'Cyclophosphamide/ifosfamide -> hemorrhagic cystitis -> mesna',
          'Ifosfamide -> encephalopathy -> methylene blue'
        ]
      }
    },
    end_good: {
      text: '查房結束。主治醫師說：「認得藥物的招牌毒性，很多問題一眼就看出來。」',
      ending: {
        grade: 'good',
        title: '化療招牌毒性',
        pearls: [
          'Ifosfamide：encephalopathy（methylene blue）、出血性膀胱炎（mesna）',
          'Cisplatin：近端腎小管（低 Mg）、耳毒性、neuropathy',
          'HD-MTX：AKI -> 鹼化、leucovorin、glucarpidase',
          'Irinotecan：急性 cholinergic 腹瀉 -> atropine',
          'Anthracycline、trastuzumab：EF；bleomycin：PFT；5-FU：冠狀動脈痙攣'
        ]
      }
    }
  }
});
