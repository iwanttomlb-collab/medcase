// HO 07 Acute leukemia: AML, APL, ALL. Source: Pocket Medicine Ch 5, p25-28 of 書頁.txt

RPG.registerCards('HO7', [
  {
    id: 'ho-al',
    title: 'Acute leukemia 總論',
    points: [
      'AML：中位年齡 68；ALL：中位 15 歲，50 歲第二高峰',
      '危險因子：放射線、化療（alkylating、topo II）、benzene、抽菸；MDS、MPN、AA、PNH；Down、Fanconi、Li-Fraumeni、DDX41 等',
      '表現：cytopenias（疲倦、感染、出血）；**leukostasis**（多為 AML，blasts > 50k：低血氧、頭痛、視力模糊、意識改變、TIA/CVA）；**TLS**；**DIC（尤其 APL）**',
      '其他：皮膚與**牙齦浸潤**（monocytic）、chloroma、**前縱膈腫塊與 SVC syndrome（T-ALL）**、HSM、CNS（ALL 約 10%）',
      'Dx：smear blasts（> 95%）、**Auer rods 只見於 AML**；**BM > 20% blasts** 或 defining mutation；cytogenetics、flow',
      '併發症評估：TLS（uric acid、LDH、K、PO4、Ca）、DIC（PT、PTT、fibrinogen、D-dimer）、**rasburicase 前驗 G6PD**',
      '**所有 ALL 做 LP + IT chemo**（CNS sanctuary）；AML 有 CNS 症狀才做',
      '**Anthracycline 前做 echo**；**HLA typing**（兄弟姊妹優先）；**hCG**、生育保存；可用 leuprolide 抑制月經'
    ],
    note: 'DIC 在非 APL 的 AML 約 21-53%，APL 超過 95% 有凝血病變。',
    refs: ['Blood 2009;114:937（diagnosis）', 'NEJM 2014;371:2477（clonal hematopoiesis）']
  },
  {
    id: 'ho-aml',
    title: 'AML 分類與 ELN 2022 風險',
    points: [
      'Myeloid 證據：granules、**Auer rods**；CD13、CD33、CD117（monocytic：CD11b、CD64、CD14）；**MPO**',
      '不良預後：年齡、先前 MDS/MPN、genetics'
    ],
    table: {
      head: ['風險', 'Genetics'],
      rows: [
        ['**Favorable**', '**t(8;21)** RUNX1-RUNX1T1；**inv(16)** CBFB-MYH11；**NPM1 突變且無 FLT3-ITD**；bZIP CEBPA'],
        ['Intermediate', 'NPM1 突變 + FLT3-ITD；野生型 NPM1 + FLT3-ITD；t(9;11)；其他未分類 cytogenetics'],
        ['**Adverse**', '-5/del(5q)、-7、-17/abn(17p)；t(6;9)；t(9;22)；inv(3)；KMT2A 重排；complex/monosomal karyotype；**TP53**、RUNX1、ASXL1 等突變']
      ]
    },
    refs: ['Blood 2022;140:1345（ELN 2022）', 'Blood 2016;127:2391（WHO）']
  },
  {
    id: 'ho-aml-tx',
    title: 'AML 治療',
    table: {
      head: ['情境', '治療方向'],
      rows: [
        ['Blasts > 50k', '**Hydroxyurea** cytoreduction（降低 TLS、DIC）'],
        ['Fit（多為 < 75 歲）', '**7+3**（cytarabine 7 d + anthracycline 3 d）；FLAG-Ida'],
        ['**FLT3-ITD/TKD**', '7+3 + **midostaurin**（ITD/TKD）或 **quizartinib**（ITD）'],
        ['**Core-binding factor**', '7+3 ± **gemtuzumab ozogamicin**（anti-CD33）'],
        ['**Secondary / MDS-related**', '**CPX-351**（liposomal dauno + cytarabine）'],
        ['**Unfit**（>= 75、ECOG >= 3、重大共病）', '**HMA ± venetoclax**（TLS 風險）；**IDH1/2 -> ivosidenib、enasidenib**'],
        ['反應評估', '誘導後 **14-21 天** BM；**MRD** 高度預後'],
        ['**CR**', 'ANC > 1,000、PLT > 100k、不需輸血、BM blasts < 5%；**CR 不等於治癒**'],
        ['Consolidation', '**Favorable -> HiDAC**；**intermediate/adverse -> allo-HSCT**；無法完成則口服 azacitidine 維持'],
        ['R/R', '**重驗突變**（clonal evolution）；FLT3 -> **gilteritinib**；IDH1/2 -> ivosidenib/enasidenib；MEC、FLAG-Ida；臨床試驗']
      ]
    },
    note: 'CR：< 60 歲 70-80%、> 60 歲 40-50%。',
    refs: ['NEJM 2017;377:454（midostaurin）', 'Lancet 2023;401:1571（quizartinib）', 'JCO 2018;36:2684（CPX-351）', 'NEJM 2020;383:617（venetoclax + aza）', 'Blood 2018;131:1275（MRD）', 'NEJM 2020;383:2526（oral aza）']
  },
  {
    id: 'ho-apl',
    title: 'Acute promyelocytic leukemia',
    points: [
      '約 AML 的 8%；**治癒率 > 90%**',
      'Atypical promyelocytes（大、多顆粒、雙葉核）；**t(15;17) PML-RARA**（> 95%）',
      '**醫療急症：DIC 與出血常見**',
      '**懷疑 APL 就立即開始 ATRA**（不等基因確認）',
      '**Non-high-risk（WBC <= 10k）：ATRA + ATO** -> CR 約 100%，2 年 OS 99%',
      'High-risk（WBC > 10k）：ATRA + ATO 加化療（anthracycline 或 gemtuzumab）',
      '**ATO**：**QT prolongation**、encephalopathy',
      '**Differentiation syndrome**（約 25%）：發燒、肺浸潤、喘、水腫、低血壓、AKI -> **dexamethasone 10 mg bid** + 支持（利尿）'
    ],
    refs: ['Blood 2009;113:1875（APL）', 'NEJM 2013;369:111（ATRA + ATO）', 'Blood 2008;113:775（differentiation syndrome）']
  },
  {
    id: 'ho-all',
    title: 'Acute lymphoblastic leukemia',
    points: [
      'ALL（BM blasts > 25%）或 lymphoblastic lymphoma（腫塊，T-cell 較多）；**無 granules**',
      '**TdT（95%）**、MPO 陰性；B：CD19、CD10、CD22、CD79a；T：CD1a、CD2、cCD3、CD5、CD7',
      '**Ph+ t(9;22)（B-ALL 約 25%）：TKI + steroids + blinatumomab**',
      'Ph-：AYA（< 40）pediatric-inspired（PEG-asparaginase）；40-60 多藥化療；> 60 減量',
      'Ph-like：類似 Ph+ 的基因表現，預後差，治療比照 Ph+',
      '目標 **MRD 陰性（< 0.01%）**；MRD 陽性加 **blinatumomab**；Ph- MRD 陰性也可從鞏固 blinatumomab 獲益',
      '**CNS prophylaxis**：IT MTX ± cytarabine ± cranial RT',
      '緩解後：一般風險 consolidation（約 7 個月）-> maintenance（2-3 年）；**高風險（Ph+、Ph-like、t(4;11)、complex、hypodiploid、ETP）-> CR1 allo-HSCT**',
      'R/R B-ALL：**blinatumomab**（CD19 BiTE）、**inotuzumab**（CD22 ADC）、**CD19 CAR-T**；T-ALL：nelarabine'
    ],
    note: '淋巴球有明顯的 target（CD19、CD22），所以可以用 BiTE、ADC、CAR-T。',
    refs: ['Lancet 2020;395:1146（ALL）', 'JCO 2024;42:881（Ph+ ALL）', 'NEJM 2024;391:320（consolidation blinatumomab）', 'NEJM 2017;376:836（blinatumomab）', 'NEJM 2016;375:740（inotuzumab）', 'NEJM 2018;378:449（CAR-T）']
  }
]);

RPG.registerCase({
  id: 'ho7-apl',
  chapter: 'HO7',
  title: '牙齦流血的工程師',
  patient: '34 歲男性 · 軟體工程師',
  summary: '一週來牙齦出血、身上瘀青，今天流鼻血止不住。',
  cards: ['ho-apl', 'ho-al'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。羅先生一週來刷牙流血、手腳出現大片瘀青，今天流鼻血一小時止不住。',
        'CBC：WBC **2,800**、Hb 8.9、**PLT 22k**。檢驗科打電話：「smear 上有很多異常的細胞，請你來看。」'
      ],
      clue: ['34M；牙齦出血、ecchymoses、鼻血不止', '**WBC 2,800**、Hb 8.9、**PLT 22k**'],
      choices: [{ label: '看 smear 與凝血', next: 'labs' }]
    },
    labs: {
      text: '開立 STAT 檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'atra',
        options: [
          { id: 'smear', group: '血液', label: 'Peripheral smear（親自看）', key: true, reveal: true,
            result: '大型、**多顆粒**、**雙葉核**的 promyelocytes；有細胞含**成束的 Auer rods（faggot cells）**', clue: '**Abnormal promyelocytes、faggot cells**',
            miss: 'Smear 是最快懷疑 APL 的方法，幾分鐘內就能決定是否開始 ATRA。' },
          { id: 'coag', group: '凝血', label: 'PT、aPTT、**fibrinogen**、D-dimer', key: true, reveal: true,
            result: 'INR 1.6；aPTT 正常；**fibrinogen 92**；**D-dimer > 20**', clue: '**DIC**（fibrinogen 92、D-dimer > 20）',
            miss: 'APL 超過 95% 有凝血病變，fibrinogen 是最重要的追蹤指標。' },
          { id: 'tls', group: '代謝', label: 'Uric acid、K、PO4、Ca、Cr、LDH', key: true, reveal: true,
            result: '正常範圍', clue: 'TLS labs 正常',
            miss: '急性白血病要評估 TLS。' },
          { id: 'pml', group: '確診', label: 'PML-RARA（FISH/PCR）、BM', key: true, reveal: true,
            result: 'FISH 送出（4-6 小時）；BM 待安排', clue: 'PML-RARA FISH 已送',
            miss: '要做基因確認，但不能等它才治療。' },
          { id: 'ecg', group: '其他', label: 'ECG（QTc）、K、Mg', key: true, reveal: true,
            result: 'QTc 438 ms；K 3.6；Mg 1.9', clue: 'Baseline QTc 438',
            miss: 'ATO 會延長 QT，要 baseline ECG 並維持 K、Mg。' },
          { id: 'echo', group: '其他', label: 'Echocardiography', result: 'EF 62%' },
          { id: 'hcg', group: '其他', label: 'HLA typing', result: '已送' },
          { id: 'lp', group: '其他', label: 'Lumbar puncture', result: '（取消）',
            waste: '凝血病變加血小板低，LP 有硬膜外血腫風險；APL 沒有 CNS 症狀不需要 LP。' }
        ]
      }
    },
    atra: {
      text: 'Smear 高度懷疑 APL，合併 DIC。FISH 還要四小時。現在？',
      choices: [
        { label: '**立即開始 ATRA**；**cryo 補 fibrinogen > 150**、**PLT > 30-50k**', next: 'risk' },
        { label: '等 PML-RARA 確認再開始 ATRA', next: 'a_wait' },
        { label: '先做骨髓切片確診', next: 'a_bm' },
        { label: '給 heparin 處理 DIC', next: 'a_hep' }
      ]
    },
    a_wait: {
      text: '主治醫師立刻打斷。',
      feedback: 'APL 早期死亡多來自出血（顱內出血），**懷疑就立即給 ATRA**，ATRA 會快速改善凝血病變。如果最後不是 APL，停藥即可。',
      choices: [{ label: '重新決定', next: 'atra' }]
    },
    a_bm: {
      text: '主治醫師搖頭。',
      feedback: '骨髓可以之後做，但不能延誤 ATRA。現在最重要的是治療 DIC、預防致命出血。',
      choices: [{ label: '重新決定', next: 'atra' }]
    },
    a_hep: {
      text: '主治醫師搖頭。',
      feedback: 'APL 的凝血病變以出血與纖溶亢進為主，heparin 會加重出血。要靠 ATRA 治本，cryo 與 PLT 支持。',
      choices: [{ label: '重新決定', next: 'atra' }]
    },
    risk: {
      text: 'FISH：**PML-RARA 陽性**。WBC 2,800。風險與誘導治療？',
      clue: '**APL**，PML-RARA (+)',
      choices: [
        { label: 'WBC <= 10k = **non-high-risk**：**ATRA + ATO**', next: 'ds' },
        { label: '7+3 化療', next: 'r_73' },
        { label: '高風險，ATRA + ATO 加 idarubicin', next: 'r_high' }
      ]
    },
    r_73: {
      text: '主治醫師搖頭。',
      feedback: 'APL 是唯一靠分化治療就能治癒的 AML。Non-high-risk 用 ATRA + ATO，CR 接近 100%，不需要傳統化療。',
      choices: [{ label: '重新決定', next: 'risk' }]
    },
    r_high: {
      text: '主治醫師搖頭。',
      feedback: '高風險是 **WBC > 10k**。他 2,800，是 non-high-risk，ATRA + ATO 即可。',
      choices: [{ label: '重新決定', next: 'risk' }]
    },
    ds: {
      text: [
        '誘導第 9 天，他發燒 38.6 度、喘，SpO2 89%，兩側肺浸潤，體重增加 4 公斤，Cr 從 0.9 升到 1.6。',
        'WBC 從 2,800 上升到 **18,000**。'
      ],
      clue: ['Day 9：發燒、低氧、**肺浸潤**、水腫、AKI', 'WBC 上升到 18k'],
      choices: [
        { label: '**Differentiation syndrome**：**dexamethasone 10 mg bid**、利尿、支持；嚴重時暫停 ATRA/ATO', next: 'end_good' },
        { label: '肺炎，加強抗生素就好', next: 'd_pna' },
        { label: '白血病惡化，換成 7+3', next: 'd_prog' }
      ]
    },
    d_pna: {
      text: '主治醫師搖頭。',
      feedback: 'ATRA/ATO 誘導中出現發燒、肺浸潤、水腫、低血壓、AKI，要先想 differentiation syndrome，延誤 dexamethasone 可致命。抗生素可以一起給，但不能取代。',
      choices: [{ label: '重新決定', next: 'ds' }]
    },
    d_prog: {
      text: '主治醫師搖頭。',
      feedback: 'WBC 上升是分化中的白血病細胞，是 differentiation syndrome 的一部分，不是治療失敗。',
      choices: [{ label: '重新決定', next: 'ds' }]
    },
    end_good: {
      text: 'Dexamethasone 三天後退燒、氧氣脫離。第 32 天 BM：complete remission，PML-RARA 之後轉陰。羅先生完成鞏固後回到工作。',
      ending: {
        grade: 'good',
        title: 'Non-high-risk APL',
        pearls: [
          '懷疑 APL 就立即 ATRA；同時用 cryo、PLT 處理 DIC',
          'WBC <= 10k：ATRA + ATO；> 10k 加化療',
          'ATO：追蹤 QTc、K、Mg',
          'Differentiation syndrome（約 25%）：dexamethasone 10 mg bid'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho7-aml',
  chapter: 'HO7',
  title: '白血球八萬五',
  patient: '52 歲女性 · 國中老師',
  summary: '發燒、喘、頭痛，講話有點顛三倒四。白血球八萬五，幾乎都是 blasts。',
  cards: ['ho-al', 'ho-aml', 'ho-aml-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。蔡老師兩週來疲倦、低燒，今天頭痛、喘、講話不太連貫。SpO2 90%。',
        'CBC：**WBC 85,000（blasts 80%）**、Hb 7.9、PLT 31k。Smear：blasts 有 **Auer rods**。'
      ],
      clue: ['52F；頭痛、意識混亂、**低血氧**', '**WBC 85k、blasts 80%**、**Auer rods**', 'Hb 7.9、PLT 31k'],
      choices: [{ label: '處理急症', next: 'emerg' }]
    },
    emerg: {
      text: '高白血球 + 神經與呼吸症狀。第一步？',
      choices: [
        { label: '**Leukostasis**：開始 **hydroxyurea** cytoreduction、IVF、**allopurinol**；避免不必要的 PRBC', next: 'workup' },
        { label: '立刻輸 2 袋 PRBC 改善缺氧', next: 'e_prbc' },
        { label: '等骨髓與基因報告再決定治療', next: 'e_wait' }
      ]
    },
    e_prbc: {
      text: '主治醫師搖頭。',
      feedback: 'Leukostasis 時輸 PRBC 會增加血液黏稠度，讓症狀更糟。除非必要，等 WBC 降下來再輸。',
      choices: [{ label: '重新決定', next: 'emerg' }]
    },
    e_wait: {
      text: '主治醫師搖頭。',
      feedback: 'Blasts > 50k 合併 leukostasis 是急症，要先用 hydroxyurea 降 blasts，並預防 TLS 與 DIC。基因報告可以之後再看。',
      choices: [{ label: '重新決定', next: 'emerg' }]
    },
    workup: {
      text: '開始化療前的評估。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出',
        next: 'induction',
        options: [
          { id: 'bm', group: '診斷', label: 'BM：morphology、flow、cytogenetics、**NGS（FLT3、NPM1、TP53 等）**', key: true, reveal: true,
            result: 'Blasts 82%，MPO (+)，CD13、CD33、CD117 (+)；karyotype 正常；**FLT3-ITD 陽性**、NPM1 野生型', clue: ['**AML**、karyotype 正常', '**FLT3-ITD (+)**、NPM1 野生型'],
            miss: 'AML 的治療選擇取決於 genetics，FLT3 要在誘導前幾天內知道。' },
          { id: 'tls', group: '併發症', label: 'TLS labs、DIC panel', key: true, reveal: true,
            result: 'Uric acid 9.8、K 4.6、PO4 5.0、Cr 1.1；fibrinogen 260', clue: 'Uric acid 9.8（TLS 風險高）',
            miss: '高 WBC 是 TLS 高風險，誘導前要知道 baseline。' },
          { id: 'g6pd', group: '併發症', label: '**G6PD**（rasburicase 前）', key: true, reveal: true,
            result: '正常', clue: 'G6PD 正常（可用 rasburicase）',
            miss: 'Rasburicase 在 G6PD 缺乏會造成溶血與變性血紅素症。' },
          { id: 'echo', group: '化療前', label: '**Echocardiography**', key: true, reveal: true,
            result: 'EF 60%', clue: 'EF 60%',
            miss: '7+3 含 anthracycline，用藥前要確認心臟功能。' },
          { id: 'hla', group: '化療前', label: '**HLA typing**（本人與兄弟姊妹）', key: true, reveal: true,
            result: '哥哥半相合；骨髓庫搜尋中', clue: 'HLA typing 已送',
            miss: '若之後需要 allo-HSCT，要盡早找 donor。' },
          { id: 'hcg', group: '化療前', label: 'β-hCG', result: '陰性' },
          { id: 'lp', group: '其他', label: 'Lumbar puncture', result: '（未執行）',
            waste: 'AML 沒有 CNS 症狀不常規做 LP；她的意識改變是 leukostasis，而且 blasts 很高時 LP 可能把 blasts 帶進 CSF。' }
        ]
      }
    },
    induction: {
      text: 'FLT3-ITD 陽性 AML，52 歲、體能良好。誘導治療？',
      choices: [
        { label: '**7+3 + midostaurin**（或 quizartinib）', next: 'cr' },
        { label: 'Azacitidine + venetoclax', next: 'i_ven' },
        { label: '7+3 + gemtuzumab ozogamicin', next: 'i_go' },
        { label: 'Gilteritinib 單藥', next: 'i_gilt' }
      ]
    },
    i_ven: {
      text: '主治醫師搖頭。',
      feedback: 'HMA + venetoclax 是給 unfit（>= 75 歲或重大共病）的病人。她 52 歲、體能好，要給強度誘導。',
      choices: [{ label: '重新決定', next: 'induction' }]
    },
    i_go: {
      text: '主治醫師搖頭。',
      feedback: 'Gemtuzumab 主要用在 core-binding factor AML（t(8;21)、inv(16)）。FLT3 突變要加 FLT3 inhibitor。',
      choices: [{ label: '重新決定', next: 'induction' }]
    },
    i_gilt: {
      text: '主治醫師搖頭。',
      feedback: 'Gilteritinib 單藥是 relapsed/refractory FLT3 AML 的選項。初次誘導用 7+3 + midostaurin 或 quizartinib。',
      choices: [{ label: '重新決定', next: 'induction' }]
    },
    cr: {
      text: [
        '第 14 天 BM：hypocellular，無殘餘 blasts。第 30 天 **CR**，但 flow **MRD 陽性（0.3%）**。',
        '她 ELN 2022 屬 **intermediate risk**（NPM1 野生型 + FLT3-ITD）。鞏固治療？'
      ],
      clue: ['**CR**，但 **MRD (+)**', 'ELN intermediate'],
      choices: [
        { label: '**CR1 allogeneic HSCT**（unrelated donor 或 haplo）', next: 'end_good' },
        { label: 'HiDAC 鞏固 4 個 cycle 就好，CR 了', next: 'end_hidac',
          why: 'HiDAC 是 favorable risk 的鞏固。Intermediate/adverse risk，加上 MRD 陽性，復發風險高，應在 CR1 做 allo-HSCT；CR 不等於治癒。' }
      ]
    },
    end_hidac: {
      text: '鞏固完成後八個月，蔡老師的 CBC 又出現 blasts。',
      ending: {
        grade: 'bad',
        title: 'Intermediate-risk AML 復發',
        pearls: [
          'CR 不等於治癒；MRD 是強力預後因子',
          'Favorable -> HiDAC；intermediate/adverse -> allo-HSCT'
        ]
      }
    },
    end_good: {
      text: '找到 10/10 相合的非親屬 donor。移植後一年，她仍然 MRD 陰性，回到學校兼課。',
      ending: {
        grade: 'good',
        title: 'FLT3-ITD AML',
        pearls: [
          'Leukostasis：hydroxyurea、避免 PRBC；TLS 預防（rasburicase 前驗 G6PD）',
          '誘導前：echo、HLA typing、NGS（FLT3）',
          'FLT3：7+3 + midostaurin/quizartinib；CBF：+ gemtuzumab；secondary：CPX-351；unfit：HMA + venetoclax',
          '鞏固：favorable HiDAC；intermediate/adverse allo-HSCT'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho7-unfit',
  chapter: 'HO7',
  title: '八十歲的選擇',
  patient: '81 歲男性 · 退休農夫',
  summary: '慢性腎病、心衰竭，新診斷 AML。家人問：能治療嗎？',
  cards: ['ho-aml-tx', 'ho-aml'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '病房。翁伯伯 81 歲，HFrEF（EF 35%）、CKD stage 3b，因為疲倦與反覆感染入院。',
        'BM：**AML**，blasts 38%；karyotype 正常；**IDH1 R132H 突變**，FLT3 陰性，TP53 野生型。ECOG 2。',
        '家人說：「爸爸想要治療，但不想一直住院。」'
      ],
      clue: ['81M；HFrEF EF 35%、CKD 3b', '**AML**，**IDH1 突變**；ECOG 2', '病人希望治療但不想長期住院'],
      choices: [{ label: '討論治療', next: 'tx' }]
    },
    tx: {
      text: '治療選擇？',
      choices: [
        { label: '**Azacitidine + venetoclax**（unfit 的標準）；或 **ivosidenib ± azacitidine**（IDH1）；注意 **TLS**', next: 'tls' },
        { label: '7+3 誘導化療', next: 't_73' },
        { label: '年紀大了，只能安寧照護', next: 't_hosp' }
      ]
    },
    t_73: {
      text: '主治醫師搖頭。',
      feedback: '>= 75 歲、EF 35%（anthracycline 心毒性）、CKD，屬 unfit，強度化療的治療相關死亡率很高。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_hosp: {
      text: '主治醫師搖頭。',
      feedback: 'Unfit 不等於不能治療。HMA + venetoclax 可以門診給予，延長存活並維持生活品質；病人也希望治療。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tls: {
      text: '決定 azacitidine + venetoclax。開始 venetoclax 時要特別注意什麼？',
      choices: [
        { label: '**TLS 預防**：ramp-up 劑量、水分、allopurinol、密集監測電解質；開始前 WBC 降到 < 25k', next: 'end_good' },
        { label: '不用特別注意，門診直接全劑量', next: 'end_tls',
          why: 'Venetoclax（BCL2 inhibitor）快速殺死 blasts，TLS 風險高，需要劑量遞增、預防與監測；他還有 CKD。' }
      ]
    },
    end_tls: {
      text: '第一天全劑量後隔天，K 6.8、Cr 3.4，翁伯伯進 ICU 洗腎。',
      ending: {
        grade: 'bad',
        title: 'Venetoclax 相關 TLS',
        pearls: [
          'Venetoclax 要 ramp-up、TLS 預防與監測',
          'Unfit AML：HMA ± venetoclax；IDH1/2 -> ivosidenib/enasidenib'
        ]
      }
    },
    end_good: {
      text: '第一個 cycle 住院開始，之後門診治療。四個 cycle 後 CR with incomplete count recovery，翁伯伯可以去田裡走走。',
      ending: {
        grade: 'good',
        title: 'Unfit AML',
        pearls: [
          'Unfit：>= 75 歲、ECOG >= 3、重大共病',
          'HMA + venetoclax；IDH1/2 突變 -> ivosidenib/enasidenib ± azacitidine',
          'Venetoclax 注意 TLS'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho7-all',
  chapter: 'HO7',
  title: '費城染色體',
  patient: '46 歲男性 · 貨運司機',
  summary: '骨頭痛、發燒、牙齦出血。骨髓滿是 lymphoblasts。',
  cards: ['ho-all', 'ho-al'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '病房。黃先生三週來下背與腿骨痠痛、發燒、牙齦出血。',
        'CBC：WBC 42,000（blasts 70%）、Hb 8.2、PLT 19k。'
      ],
      clue: ['46M；骨痛、發燒、出血', 'WBC 42k（blasts 70%）'],
      choices: [{ label: '骨髓與分類', next: 'bm' }]
    },
    bm: {
      text: [
        'BM：blasts 88%，**無 granules**；**TdT (+)、CD19 (+)、CD10 (+)**、MPO (-)。',
        'Cytogenetics：**t(9;22)**；PCR：**BCR-ABL1 p190**。'
      ],
      clue: ['**B-ALL**（TdT+、CD19+、MPO-）', '**Ph+**：t(9;22)、BCR-ABL1 p190'],
      choices: [{ label: '誘導前評估', next: 'pre' }]
    },
    pre: {
      text: '除了 echo、HLA typing、TLS 預防，ALL 還有什麼一定要做？',
      choices: [
        { label: '**Lumbar puncture + intrathecal chemotherapy**（CNS 是 sanctuary site）', next: 'induction' },
        { label: '沒有神經症狀就不用 LP', next: 'p_nolp' }
      ]
    },
    p_nolp: {
      text: '主治醫師搖頭。',
      feedback: '所有 ALL 都要做 LP 與 IT chemo，因為 CNS 是化療難以到達的 sanctuary site。AML 才是有症狀再做。',
      choices: [{ label: '重新決定', next: 'pre' }]
    },
    induction: {
      text: 'LP：CSF 無 blasts（CNS1），IT MTX 已給。Ph+ B-ALL 的誘導？',
      choices: [
        { label: '**TKI（如 dasatinib 或 ponatinib）+ steroids + blinatumomab**', next: 'mrd' },
        { label: 'Pediatric-inspired 化療（PEG-asparaginase），不用 TKI', next: 'i_peds' },
        { label: 'Imatinib 單藥', next: 'i_ima' }
      ]
    },
    i_peds: {
      text: '主治醫師搖頭。',
      feedback: 'Pediatric-inspired regimen 是給 Ph- 的 AYA（< 40 歲）。Ph+ 一定要用 TKI，目前搭配 steroids 與 blinatumomab。',
      choices: [{ label: '重新決定', next: 'induction' }]
    },
    i_ima: {
      text: '主治醫師搖頭。',
      feedback: 'TKI 單藥不夠，緩解不持久。Ph+ ALL 要 TKI + steroids + blinatumomab（或化療）。',
      choices: [{ label: '重新決定', next: 'induction' }]
    },
    mrd: {
      text: '第 2 個月 BM：CR，**BCR-ABL1 MRD 陽性（0.05%）**。下一步？',
      clue: 'CR，**MRD (+) 0.05%**',
      choices: [
        { label: 'Ph+ 為高風險，持續 TKI + blinatumomab 追求 MRD 陰性，考慮 **CR1 allo-HSCT**', next: 'end_good' },
        { label: 'CR 了，停藥觀察', next: 'end_stop',
          why: 'MRD 陽性代表殘存疾病，ALL 的目標是 MRD 陰性（< 0.01%）。Ph+ 屬高風險，要持續治療並考慮 CR1 allo-HSCT。' }
      ]
    },
    end_stop: {
      text: '停藥三個月後 blasts 回來了，而且出現 **T315I** 突變。',
      ending: {
        grade: 'bad',
        title: 'Ph+ ALL 復發',
        pearls: [
          '目標是 MRD 陰性',
          'Ph+、Ph-like、t(4;11)、complex、hypodiploid、ETP 是高風險 -> 考慮 CR1 allo-HSCT',
          'T315I：ponatinib 或 asciminib'
        ]
      }
    },
    end_good: {
      text: 'Blinatumomab 兩個 cycle 後 MRD 轉陰。黃先生接受妹妹的幹細胞移植，之後繼續 TKI 維持。',
      ending: {
        grade: 'good',
        title: 'Ph+ B-ALL',
        pearls: [
          'ALL：無 granules、TdT+、MPO-',
          '所有 ALL 做 LP + IT chemo',
          'Ph+：TKI + steroids + blinatumomab',
          'MRD 陰性是目標；高風險考慮 CR1 allo-HSCT',
          'R/R B-ALL：blinatumomab、inotuzumab、CD19 CAR-T'
        ]
      }
    }
  }
});
