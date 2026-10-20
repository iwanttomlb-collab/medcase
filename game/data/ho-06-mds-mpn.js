// HO 06 MDS and myeloproliferative neoplasms. Source: Pocket Medicine Ch 5, p21-25 of 書頁.txt

RPG.registerCards('HO6', [
  {
    id: 'ho-myeloid',
    title: 'WHO 2022 myeloid neoplasms',
    table: {
      head: ['類別', '特徵'],
      rows: [
        ['AML', 'Clonal myeloid SC 疾病，**>= 20% blasts** 或有 defining genetic abnormality'],
        ['**MDS**', 'Dysplastic clonal 疾病 -> cytopenias；**< 20% blasts**；可轉白血病'],
        ['**MPN**', '無 dysplasia 的 clonal 擴增（ET、PV、MF、CML）'],
        ['MDS/MPN', '兩者特徵（CMML、atypical CML）'],
        ['Mastocytosis', 'Clonal mast cell，KIT 突變'],
        ['Germline predisposition', 'DDX41 等 germline 突變'],
        ['Precursor', '**CHIP**、**CCUS**']
      ]
    },
    refs: ['Leukemia 2022;36:1703（WHO 2022）']
  },
  {
    id: 'ho-mds',
    title: 'Myelodysplastic syndromes',
    points: [
      'Ineffective hematopoiesis -> cytopenias、dysmorphic 細胞、**< 20% blasts**；中位年齡約 70、男性 1.8 倍',
      'Idiopathic 或 **alkylating agent 化療後**；放射線、benzene',
      '貧血 85%（**MCV、RDW 上升**）、neutropenia 50%、thrombocytopenia 40-65%',
      'Dx：smear 與 BM **dysplasia**（oval macrocytes、**pseudo-Pelger-Huët**）；cytogenetics（**del(5q)**、mono 7、del(7q)、+8、del(20q)）與突變（TP53、TET2、SF3B1 等）',
      '**先排除**：AML（>= 20% 或 t(15;17)、t(8;21)、inv16 等）、CMML（monocyte > 1 x 10^9/L 且 > 10%）、**B12、folate、copper 缺乏**、HIV、酒精、鉛、砷'
    ],
    table: {
      head: ['WHO 2022', '特徵', 'Blasts'],
      rows: [
        ['**MDS-5q**', 'del(5q)', 'BM < 5%、PB < 2%'],
        ['**MDS-SF3B1**', 'SF3B1 突變', 'BM < 5%、PB < 2%'],
        ['MDS-biTP53', 'Biallelic TP53', '< 20%'],
        ['MDS-IB1', 'Blasts 輕度增加', 'BM 5-9% 或 PB 2-4%'],
        ['MDS-IB2', 'Blasts 中度增加', 'BM 10-19% 或 PB 5-19% 或 Auer rods'],
        ['MDS-f', 'Reticulin 纖維化', 'BM 5-19%']
      ]
    },
    note: '預後：IPSS-M（年齡、blast %、cytopenias、cytogenetics、個別突變）。',
    refs: ['JAMA 2022;328:872（MDS）', 'NEJM Evid 2022;1:EVIDoa2200008（IPSS-M）']
  },
  {
    id: 'ho-mds-tx',
    title: 'MDS 治療',
    table: {
      head: ['風險', '治療'],
      rows: [
        ['PS 差（任何風險）', '支持：輸血、G-CSF、ESA、TPO-mimetics'],
        ['**Very low / low**', '**ESA（Epo < 500）**；TPO-mimetics；輸血（ferritin 監測 iron overload）；**lenalidomide（MDS-5q）**；**luspatercept（SF3B1 尤佳）**；imetelstat（ESA 無效或不適用）'],
        ['**Intermediate / high**', '**Hypomethylating agent（azacitidine、decitabine、oral decitabine/cedazuridine）**；venetoclax 研究中；**體能可行 -> allogeneic HSCT**']
      ]
    },
    refs: ['Lancet Haematol 2024;11:e646（luspatercept）', 'Lancet 2024;403:249（imetelstat）', 'JCO 2021;39:3328（HSCT in MDS）']
  },
  {
    id: 'ho-mpn',
    title: 'MPN 總論與驅動突變',
    points: [
      '分類：**PV、ET、PMF、CML（BCR-ABL1）**、aCML、CNL、systemic mastocytosis、HES、MPN-NOS',
      '**JAK2 V617F**：PV 約 95%、ET 約 50%、PMF 約 50%',
      '**CALR** exon 9：無 JAK2/MPL 的 MPN（ET 約 25%、MF 約 35%）；type 1 預後較好',
      '**MPL**：ET 5-10%、MF 7-10%',
      '**BCR-ABL1**：所有 CML；CSF3R：CNL 約 60%；KIT D816V：SM 95%；FIP1L1-PDGFRA：HES 約 15%',
      'PV、ET 共同表現：hyperviscosity（頭痛、頭暈、耳鳴、視力模糊）、**血栓**（DVT、MI、stroke、**Budd-Chiari**、**erythromelalgia**）、出血（acquired VWD）、**aquagenic pruritus**、消化性潰瘍、痛風'
    ],
    refs: ['NEJM 2017;376:2168（MPN）']
  },
  {
    id: 'ho-pv',
    title: 'Polycythemia vera',
    points: [
      'Dx：男 **Hb > 16.5 或 Hct > 49%**；女 **Hb > 16 或 Hct > 48%**；± WBC、PLT、basophils 上升；uric acid、LAP、B12 上升',
      '先驗 **EPO**：低 -> PV 可能；高 -> 次發（SaO2、COHb、腎/肝腫瘤、Cushing）',
      '次發原因：COHb、**低氧（OSA、COPD）**、EPO 分泌腫瘤（腎、肝）；mimic：脫水、Gaisböck',
      'BM：hypercellular、三系增生；**JAK2 V617F 約 95%**，其餘多為 JAK2 exon 12',
      '**Phlebotomy 到 Hct < 45%**（目標是缺鐵，**不要補鐵**）；**所有人 low-dose ASA**',
      '**高風險（>= 60 歲或曾血栓）或放血不夠 -> hydroxyurea**；年輕、懷孕 -> **ropeg-IFN**；HU 無效 -> ruxolitinib',
      '支持：allopurinol（痛風）、抗組織胺（搔癢）',
      '中位存活約 13.5 年；10-20% 轉 post-PV MF（約 10 年後）；AML < 2-5%'
    ],
    refs: ['JAMA 2025;333:153（PV）', 'NEJM 2013;368:22（Hct < 45%）', 'NEJM 2004;350:114（ASA）', 'NEJM 2015;372:426（ruxolitinib）', 'NEJM 2024;390:723（rusfertide）', 'Blood 2014;124:2507（survival）']
  },
  {
    id: 'ho-et',
    title: 'Essential thrombocythemia',
    points: [
      '**PLT > 450k** 持續；先排除 **reactive**（發炎、感染、外傷、急性出血、**缺鐵**、脾切除、腫瘤）；PLT > 1,000k 的人 < 1/6 是 ET',
      '血栓（白血球高者風險最高）、erythromelalgia、出血（**acquired VWD**）、搔癢、輕度脾腫大、偏頭痛、TIA、早期流產',
      'Smear：大型低顆粒 PLT；BM：megakaryocyte 增生；Ph 陰性；atypical megakaryocytes 或 reticulin 上升要想 **pre-PMF**',
      '突變：**JAK2 約 50%、CALR 約 45%、MPL 5-10%**、triple negative < 5%',
      '**PLT > 1,000k 驗 vWF；有 acquired VWD 停 ASA**',
      'Very low/low（< 60 歲、無血栓）：ASA（very low 有 CV 危險因子才考慮）；**high（>= 60 或曾血栓）-> hydroxyurea**；年輕或懷孕 -> **IFN-alpha**',
      'Low-risk 存活接近一般人；AML < 2-3%、MF 約 10%'
    ],
    refs: ['JAMA 2025;333:701（ET）', 'Blood Cancer J 2015;5:e369（ET risk）']
  },
  {
    id: 'ho-mf',
    title: 'Myelofibrosis',
    points: [
      'Clonal 增生 + 反應性骨髓纖維化 + **extramedullary hematopoiesis**',
      '次發：post-PV/ET MF、其他血液或實體癌、SLE、benzene、放射線、肉芽腫、Gaucher',
      '表現：貧血；**巨脾**（腹痛、早飽）± 肝腫大；體重下降、發燒、盜汗',
      'Smear：**leukoerythroblastic（teardrop cells、nucleated RBC、immature WBC）**；BM：**dry tap**、reticulin/collagen 纖維化',
      'JAK2 45-50%、CALR 45-50%、MPL 7-10%；無 BCR-ABL',
      '預後：MIPSS70+ v2.0（WBC > 25k、Hb < 10、PLT < 100k、PB blasts >= 2%、全身症狀、突變、cytogenetics）',
      '無不良因子 -> 不需治療；**allogeneic HSCT 是唯一治癒**（年輕高風險）',
      '**Ruxolitinib**（JAK1/2）：改善症狀、脾臟、存活；**fedratinib**（先驗 **thiamine**，Wernicke 風險）；**pacritinib（PLT < 50k）**；**momelotinib（貧血）**',
      'ESA（Epo < 500，可能讓脾變大）；中位存活約 6 年'
    ],
    refs: ['Am J Hematol 2021;96:145（MF treatment）', 'NEJM 2012;366:787 & 799（ruxolitinib）', 'JAMA Oncol 2015;1:643（fedratinib）', 'JAMA Oncol 2018;4:652（pacritinib）', 'Lancet 2023;401:269（momelotinib）', 'JCO 2012;30:2981（survival）']
  }
]);

RPG.registerCase({
  id: 'ho6-mds',
  chapter: 'HO6',
  title: '每個月都要輸血的老先生',
  patient: '76 歲男性 · 退休教師',
  summary: '一年來大球性貧血越來越重，最近每個月都要輸兩袋血。',
  cards: ['ho-myeloid', 'ho-mds', 'ho-mds-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '血液科門診。洪老師一年前 Hb 11，現在每四週要輸 2 袋 PRBC，輸前 Hb 約 7.5。',
        'MCV **106**、RDW 18%；WBC 4,100（ANC 2,200）；PLT 165k。',
        '他十年前因為胃潰瘍做過**部分胃切除**，有吃鋅片保健。'
      ],
      clue: ['76M；**輸血依賴**（2 U/4 wk）', '**MCV 106**、RDW 上升；WBC、PLT 正常', '**部分胃切除**、**吃鋅片**'],
      choices: [{ label: '開檢查', next: 'labs' }]
    },
    labs: {
      text: '大球性貧血，開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'risk',
        options: [
          { id: 'b12', group: '先排除', label: 'B12、folate、MMA', key: true, reveal: true,
            result: '正常', clue: 'B12、folate 正常',
            miss: '胃切除病人一定要先排除 B12 缺乏。' },
          { id: 'cu', group: '先排除', label: '**Copper、ceruloplasmin**', key: true, reveal: true,
            result: '正常', clue: 'Copper 正常',
            miss: '胃切除與補鋅都會造成 copper 缺乏，會模仿 MDS（甚至有 ring sideroblasts），診斷 MDS 前要排除。' },
          { id: 'tsh', group: '先排除', label: 'TSH、LFT', result: '正常' },
          { id: 'smear', group: '血液', label: 'Peripheral smear', key: true, reveal: true,
            result: 'Oval macrocytes、**pseudo-Pelger-Huët** neutrophils', clue: '**Pseudo-Pelger-Huët**、oval macrocytes',
            miss: 'Smear 上的 dysplasia 是 MDS 的線索。' },
          { id: 'bm', group: '骨髓', label: 'BM aspiration + biopsy、cytogenetics、NGS', key: true, reveal: true,
            result: 'Hypercellular；erythroid dysplasia；**ring sideroblasts 32%**；**blasts 2%**；karyotype 正常；**SF3B1 突變**', clue: ['**BM blasts 2%、RS 32%**', '**SF3B1 突變**、karyotype 正常'],
            miss: 'MDS 的診斷與分類需要骨髓、cytogenetics 與基因檢測。' },
          { id: 'epo', group: '其他', label: 'Serum EPO', key: true, reveal: true,
            result: '**210 mU/mL**', clue: '**EPO 210**（< 500）',
            miss: 'EPO 決定 ESA 會不會有效。' },
          { id: 'ferr', group: '其他', label: 'Ferritin', result: '1,450', clue: 'Ferritin 1,450（輸血相關）' },
          { id: 'hla', group: '其他', label: 'HLA typing', result: '（暫緩）',
            waste: '76 歲、低風險 MDS，移植不是現在的選項。' }
        ]
      }
    },
    risk: {
      text: 'MDS，SF3B1 突變、blasts 2%、karyotype 正常。IPSS-M：**low**。分類與治療？',
      choices: [
        { label: '**MDS-SF3B1**、低風險：EPO < 500 -> 先用 **ESA**；無效再用 **luspatercept**', next: 'esa' },
        { label: '開始 azacitidine', next: 'r_aza' },
        { label: '轉介 allogeneic HSCT', next: 'r_hsct' },
        { label: '繼續每月輸血就好', next: 'r_tfn' }
      ]
    },
    r_aza: {
      text: '主治醫師搖頭。',
      feedback: 'Hypomethylating agents 是 intermediate/high risk 的治療。低風險 MDS 的目標是改善貧血與減少輸血。',
      choices: [{ label: '重新決定', next: 'risk' }]
    },
    r_hsct: {
      text: '主治醫師搖頭。',
      feedback: 'Allo-HSCT 給 intermediate/high risk 且體能可行的病人。低風險、76 歲，移植的風險大於好處。',
      choices: [{ label: '重新決定', next: 'risk' }]
    },
    r_tfn: {
      text: '主治醫師搖頭。',
      feedback: '他 EPO < 500，ESA 有機會減少輸血；而且長期輸血已經讓 ferritin 1,450。有藥可用就應該嘗試。',
      choices: [{ label: '重新決定', next: 'risk' }]
    },
    esa: {
      text: 'ESA 用了 12 週，仍然每月輸血。下一步？',
      choices: [
        { label: '**Luspatercept**（SF3B1 突變特別有效）', next: 'end_good' },
        { label: 'Lenalidomide', next: 'e_len' }
      ]
    },
    e_len: {
      text: '主治醫師搖頭。',
      feedback: 'Lenalidomide 對 **MDS-5q** 特別有效。他沒有 del(5q)，SF3B1 突變首選 luspatercept。',
      choices: [{ label: '重新決定', next: 'esa' }]
    },
    end_good: {
      text: '用了 luspatercept 四個月，洪老師已經連續 10 週不需要輸血。',
      ending: {
        grade: 'good',
        title: 'Lower-risk MDS-SF3B1',
        pearls: [
          '診斷 MDS 前排除 B12、folate、copper 缺乏（胃切除、補鋅）',
          '低風險：ESA（Epo < 500）-> luspatercept（SF3B1）；lenalidomide（5q）',
          '高風險：azacitidine/decitabine；體能可行 -> allo-HSCT',
          '長期輸血追蹤 ferritin'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho6-mdshigh',
  chapter: 'HO6',
  title: '乳癌治療後五年',
  patient: '61 歲女性 · 乳癌病史',
  summary: '五年前乳癌接受過含 cyclophosphamide 的化療，現在三系都低。',
  cards: ['ho-mds', 'ho-mds-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '腫瘤科轉來。鄭女士五年前乳癌接受 **AC（doxorubicin + cyclophosphamide）-> paclitaxel**，之後放射治療。乳癌一直沒有復發。',
        '這半年反覆口腔潰瘍、瘀青。CBC：Hb 8.6、**ANC 650**、**PLT 42k**。體能良好，還在上班。'
      ],
      clue: ['61F；5 年前 **alkylating agent** 化療 + RT', '**三系減少**（ANC 650、PLT 42k）', 'ECOG 0'],
      choices: [{ label: '骨髓檢查', next: 'bm' }]
    },
    bm: {
      text: [
        'BM：三系 dysplasia，**blasts 13%**，無 Auer rods。Karyotype：**monosomy 7**。',
        'IPSS-M：**high**。'
      ],
      clue: ['**BM blasts 13%**（MDS-IB2）', '**Monosomy 7**', 'IPSS-M high'],
      choices: [
        { label: '這是 **therapy-related MDS-IB2**，高風險', next: 'tx' },
        { label: 'Blasts > 10%，已經是 AML', next: 'b_aml' }
      ]
    },
    b_aml: {
      text: '主治醫師搖頭。',
      feedback: 'AML 是 >= 20% blasts（或有 defining genetic abnormality 如 t(15;17)、t(8;21)、inv16）。10-19% 是 MDS-IB2。',
      choices: [{ label: '重新判讀', next: 'bm' }]
    },
    tx: {
      text: '她 61 歲、體能好，有一個 HLA 全相合的弟弟。治療？',
      choices: [
        { label: '**Azacitidine**（bridge）-> **allogeneic HSCT**', next: 'end_good' },
        { label: 'ESA 與輸血支持', next: 't_esa' },
        { label: 'Luspatercept', next: 't_lusp' }
      ]
    },
    t_esa: {
      text: '主治醫師搖頭。',
      feedback: '高風險 MDS 的問題是轉成 AML 與感染出血，支持治療不會改變病程。體能可行就要以移植為目標。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_lusp: {
      text: '主治醫師搖頭。',
      feedback: 'Luspatercept 是低風險 MDS 改善貧血的藥。高風險要用 hypomethylating agent，並以 allo-HSCT 為目標。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '四個 cycle azacitidine 後 blasts 降到 4%，接受弟弟的幹細胞。一年後仍然 complete remission。',
      ending: {
        grade: 'good',
        title: 'Therapy-related higher-risk MDS',
        pearls: [
          'Alkylating agents、放射線是 MDS 危險因子',
          'Blasts 10-19% = MDS-IB2；>= 20% = AML',
          '高風險：HMA（azacitidine、decitabine）+ 體能可行 allo-HSCT'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho6-pv',
  chapter: 'HO6',
  title: '洗完澡就全身癢',
  patient: '55 歲男性 · 計程車司機',
  summary: '洗熱水澡後全身癢到受不了，最近常頭痛、手指腳趾發紅灼熱。',
  cards: ['ho-mpn', 'ho-pv'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般內科門診。周先生半年來每次洗熱水澡後全身奇癢，常頭痛、耳鳴。腳趾偶爾紅、熱、灼痛。',
        '臉色紅潤。**Hb 19.2**、**Hct 58%**、WBC 12,800、PLT 520k。脾臟可觸及。'
      ],
      clue: ['55M；**aquagenic pruritus**、頭痛耳鳴、**erythromelalgia**', '**Hb 19.2、Hct 58%**；WBC、PLT 上升', 'Plethora、splenomegaly'],
      choices: [{ label: '問診', next: 'hx' }]
    },
    hx: {
      text: '要排除次發性紅血球增多。',
      choices: [
        { label: '問抽菸與工作環境', next: 'hx_smoke', once: true },
        { label: '問打鼾與白天嗜睡', next: 'hx_osa', once: true },
        { label: '問用藥（睪固酮、利尿劑）', next: 'hx_drug', once: true },
        { label: '開檢查', next: 'labs', pin: true }
      ]
    },
    hx_smoke: {
      text: '不抽菸。車子是新車。',
      clue: '不抽菸',
      choices: [{ label: '回到問診', next: 'hx' }]
    },
    hx_osa: {
      text: '太太說他不太打鼾，白天精神還好。',
      clue: '無 OSA 症狀',
      choices: [{ label: '回到問診', next: 'hx' }]
    },
    hx_drug: {
      text: '沒有用睪固酮或利尿劑。',
      choices: [{ label: '回到問診', next: 'hx' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'epo', group: '關鍵', label: 'Serum EPO', key: true, reveal: true,
            result: '**1.8 mU/mL（低）**', clue: '**EPO 低**',
            miss: 'EPO 是區分 PV 與次發性紅血球增多的第一步。' },
          { id: 'jak2', group: '關鍵', label: 'JAK2 V617F', key: true, reveal: true,
            result: '**陽性**', clue: '**JAK2 V617F (+)**',
            miss: 'PV 約 95% 有 JAK2 V617F。' },
          { id: 'spo2', group: '次發', label: 'SpO2、COHb', result: 'SpO2 97%；COHb 正常', clue: 'SpO2、COHb 正常' },
          { id: 'ua', group: '次發', label: '腹部超音波（腎、肝）', result: '脾臟 15 cm；腎、肝無腫瘤', clue: '無 EPO 分泌腫瘤' },
          { id: 'uric', group: '其他', label: 'Uric acid', result: '8.9', clue: 'Uric acid 上升' },
          { id: 'ferr', group: '其他', label: 'Ferritin', result: '18（偏低）', clue: 'Ferritin 偏低（紅血球大量生成）' },
          { id: 'bcr', group: '其他', label: 'BCR-ABL', result: '陰性',
            waste: '紅血球增多為主、JAK2 陽性，CML 機率低。' },
          { id: 'psg', group: '其他', label: 'Polysomnography', result: '（未執行）',
            waste: 'EPO 低、無 OSA 症狀，不需要睡眠檢查。' }
        ]
      }
    },
    dx: {
      text: 'Hct 58%、EPO 低、JAK2 陽性：**polycythemia vera**。55 歲、無血栓史。治療？',
      choices: [
        { label: '**Phlebotomy 到 Hct < 45%** + **low-dose ASA**；低風險暫不需 hydroxyurea', next: 'iron' },
        { label: 'Phlebotomy 到 Hct < 50% 就好', next: 'd_50' },
        { label: '直接 hydroxyurea，不用放血', next: 'd_hu' }
      ]
    },
    d_50: {
      text: '主治醫師搖頭。',
      feedback: 'Hct < 45% 比 45-50% 的心血管死亡與血栓明顯少（CYTO-PV）。目標是 < 45%。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    d_hu: {
      text: '主治醫師搖頭。',
      feedback: 'Hydroxyurea 給高風險（>= 60 歲或曾血栓）或放血控制不了的病人。他 55 歲、無血栓，先放血 + ASA。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    iron: {
      text: '放血三個月後 Hct 44%。他的 ferritin 降到 6，MCV 76。診所醫師開了鐵劑給他。',
      choices: [
        { label: '**停鐵劑**：PV 放血的目標就是讓身體缺鐵、限制紅血球生成', next: 'end_good' },
        { label: '缺鐵就該補，繼續吃', next: 'end_iron',
          why: '補鐵會讓 JAK2 驅動的骨髓立刻製造更多紅血球，Hct 反彈、放血次數增加。PV 放血的目標就是缺鐵。' }
      ]
    },
    end_iron: {
      text: '補鐵一個月後 Hct 衝到 54%，他頭痛復發，放血頻率變成每週一次。',
      ending: {
        grade: 'ok',
        title: 'PV 補鐵後 Hct 反彈',
        pearls: [
          'PV 放血目標 Hct < 45%，目標是缺鐵，不要補鐵',
          '低風險：放血 + ASA；高風險加 hydroxyurea'
        ]
      }
    },
    end_good: {
      text: '一年來 Hct 維持在 42-44%，搔癢用抗組織胺改善，沒有血栓。',
      ending: {
        grade: 'good',
        title: 'Low-risk polycythemia vera',
        pearls: [
          '紅血球增多先驗 EPO：低 -> PV；高 -> 次發',
          'JAK2 V617F 約 95%',
          'Phlebotomy Hct < 45%、所有人 ASA；>= 60 或曾血栓 -> hydroxyurea',
          '不要補鐵'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho6-et',
  chapter: 'HO6',
  title: '血小板一百二十萬',
  patient: '33 歲女性 · 計畫懷孕',
  summary: '健檢發現血小板一百多萬。最近刷牙流血、流鼻血，她打算明年懷孕。',
  cards: ['ho-mpn', 'ho-et'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '血液科門診。呂小姐健檢 **PLT 1,240k**，半年前也是 1,100k。最近刷牙流血、流鼻血。',
        '朋友說血小板高要吃 aspirin 預防中風，她已經自己吃了兩週，流鼻血更多了。',
        'Hb 13.2、WBC 8,300。'
      ],
      clue: ['33F；**PLT 1,240k**（持續）', '**黏膜出血**；自行服用 **aspirin** 後加重', '計畫懷孕'],
      choices: [{ label: '開檢查', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'ferr', group: 'Reactive', label: 'Ferritin、CRP', key: true, reveal: true,
            result: 'Ferritin 62；CRP 正常', clue: '無缺鐵、無發炎',
            miss: '血小板增多最常見是 reactive：缺鐵、發炎、感染，要先排除。' },
          { id: 'vwf', group: '出血', label: '**vWF:Ag、ristocetin cofactor activity**', key: true, reveal: true,
            result: 'vWF:Ag 68%；**ristocetin cofactor 22%**（activity/Ag 比值 0.32）', clue: '**Acquired VWD**（activity 明顯下降）',
            miss: 'PLT > 1,000k 合併出血，要驗 vWF：大量血小板會吸附並破壞大型 vWF multimers。' },
          { id: 'jak2', group: '突變', label: 'JAK2 V617F、CALR、MPL', key: true, reveal: true,
            result: 'JAK2 陰性；**CALR type 1 陽性**', clue: '**CALR (+)**',
            miss: 'ET 的 driver mutation：JAK2 約 50%、CALR 約 45%、MPL 5-10%。' },
          { id: 'bcr', group: '突變', label: 'BCR-ABL', key: true, reveal: true,
            result: '陰性', clue: 'BCR-ABL (-)',
            miss: '診斷 ET 前要排除 CML，CML 也可以以血小板增多表現。' },
          { id: 'bm', group: '骨髓', label: 'Bone marrow biopsy', result: 'Megakaryocyte 增生，大而成熟；無明顯 reticulin', clue: 'BM 符合 ET（無 pre-PMF 特徵）' },
          { id: 'smear', group: '血液', label: 'Smear', result: '大型、低顆粒血小板' },
          { id: 'ct', group: '其他', label: 'Brain MRI', result: '（未執行）',
            waste: '沒有神經學症狀。' }
        ]
      }
    },
    dx: {
      text: 'CALR 陽性 ET，合併 **acquired VWD**。33 歲、無血栓。Aspirin 怎麼辦？',
      choices: [
        { label: '**停 aspirin**（acquired VWD 時 ASA 增加出血）', next: 'preg' },
        { label: '繼續 aspirin，血小板這麼高一定要預防血栓', next: 'd_asa' }
      ]
    },
    d_asa: {
      text: '主治醫師搖頭。',
      feedback: '她 < 60 歲、無血栓、JAK2 陰性，屬 very low risk，ASA 只有在有心血管危險因子時考慮。更重要的是有 acquired VWD 與出血，ASA 要停。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    preg: {
      text: '停 aspirin 後出血減少。但 PLT 仍 1,200k 合併 acquired VWD，主治醫師決定給 cytoreduction。她明年想懷孕，用什麼？',
      choices: [
        { label: '**Interferon-alpha（ropeg）**：年輕、懷孕中或計畫懷孕的首選', next: 'end_good' },
        { label: 'Hydroxyurea', next: 'p_hu' },
        { label: 'Anagrelide', next: 'p_ana' }
      ]
    },
    p_hu: {
      text: '主治醫師搖頭。',
      feedback: 'Hydroxyurea 有致畸性疑慮，年輕或計畫懷孕的病人首選 interferon。',
      choices: [{ label: '重新決定', next: 'preg' }]
    },
    p_ana: {
      text: '主治醫師搖頭。',
      feedback: 'Anagrelide 懷孕時也不建議。計畫懷孕首選 interferon-alpha。',
      choices: [{ label: '重新決定', next: 'preg' }]
    },
    end_good: {
      text: '用 ropeg-interferon 半年，PLT 降到 520k，vWF activity 恢復正常，不再流鼻血。一年半後她順利懷孕。',
      ending: {
        grade: 'good',
        title: 'ET 合併 acquired VWD',
        pearls: [
          '血小板增多先排除 reactive（缺鐵、發炎）與 CML',
          'ET：JAK2 50%、CALR 45%、MPL 5-10%',
          'PLT > 1,000k 驗 vWF；acquired VWD 停 ASA',
          '高風險（>= 60 或曾血栓）-> hydroxyurea；年輕、懷孕 -> IFN-alpha'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho6-mf',
  chapter: 'HO6',
  title: '吃兩口就飽',
  patient: '64 歲男性 · 退休技師',
  summary: '半年瘦了 8 公斤，吃兩口就飽，晚上盜汗，左邊肚子摸得到一大塊。',
  cards: ['ho-mf', 'ho-mpn'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診。何先生半年體重減輕 8 公斤、早飽、盜汗。',
        '理學檢查：脾臟延伸到**骨盆腔**（肋下 18 cm），肝腫大。',
        'CBC：Hb **8.8**、WBC 14,500、**PLT 38k**。'
      ],
      clue: ['64M；體重下降、早飽、盜汗', '**Massive splenomegaly**、肝腫大', 'Hb 8.8、**PLT 38k**'],
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
            result: '**Teardrop cells**、**nucleated RBCs**、myelocytes、metamyelocytes；PB blasts 1%', clue: '**Leukoerythroblastic smear**（teardrop cells）',
            miss: 'Smear 上的 teardrop 與 leukoerythroblastic 變化是 MF 的特徵。' },
          { id: 'bm', group: '骨髓', label: 'BM aspiration + biopsy', key: true, reveal: true,
            result: 'Aspiration **dry tap**；biopsy：reticulin/collagen **MF-3 纖維化**，atypical megakaryocytes', clue: '**Dry tap、MF-3 纖維化**',
            miss: 'MF 確診要骨髓切片。' },
          { id: 'jak2', group: '突變', label: 'JAK2、CALR、MPL', key: true, reveal: true,
            result: '**JAK2 V617F 陽性**', clue: 'JAK2 V617F (+)',
            miss: 'Driver mutation 支持 clonal MF。' },
          { id: 'bcr', group: '突變', label: 'BCR-ABL', key: true, reveal: true,
            result: '陰性', clue: 'BCR-ABL (-)',
            miss: 'CML 也會巨脾，要排除。' },
          { id: 'ngs', group: '突變', label: 'Myeloid NGS、karyotype', result: 'ASXL1 突變；karyotype 正常', clue: 'ASXL1 突變（高風險）' },
          { id: 'ldh', group: '其他', label: 'LDH', result: '上升' },
          { id: 'ct', group: '影像', label: 'CT 腹部', result: '脾臟 26 cm；無淋巴結腫大', clue: '脾臟 26 cm' },
          { id: 'egd', group: '其他', label: 'EGD', result: '（未執行）',
            waste: '早飽是巨脾壓迫胃，不需要先做內視鏡。' }
        ]
      }
    },
    dx: {
      text: 'Primary myelofibrosis，MIPSS70+ 高風險（貧血、全身症狀、ASXL1）。他 64 歲、體能尚可。主治醫師問：「唯一能治癒的是什麼？」',
      choices: [
        { label: '**Allogeneic HSCT**，評估 donor 與適合度', next: 'jak' },
        { label: 'Ruxolitinib', next: 'd_rux' },
        { label: 'Splenectomy', next: 'd_spl' }
      ]
    },
    d_rux: {
      text: '主治醫師搖頭。',
      feedback: 'JAK inhibitors 改善症狀、脾臟與存活，但不能治癒。唯一可能治癒的是 allogeneic HSCT。',
      choices: [{ label: '重新回答', next: 'dx' }]
    },
    d_spl: {
      text: '主治醫師搖頭。',
      feedback: '脾臟是 extramedullary hematopoiesis 的地方，切除風險高也無法治癒疾病。',
      choices: [{ label: '重新回答', next: 'dx' }]
    },
    jak: {
      text: '找 donor 期間要控制症狀與巨脾。PLT 38k，選哪個 JAK inhibitor？',
      choices: [
        { label: '**Pacritinib**（PLT < 50k 可用）', next: 'end_good' },
        { label: 'Ruxolitinib 足量', next: 'j_rux' },
        { label: 'Fedratinib，不用額外檢查', next: 'j_fed' }
      ]
    },
    j_rux: {
      text: '主治醫師搖頭。',
      feedback: 'Ruxolitinib 會造成血小板下降，PLT < 50k 時無法足量使用。Pacritinib 適合 PLT < 50k；以貧血為主可選 momelotinib。',
      choices: [{ label: '重新決定', next: 'jak' }]
    },
    j_fed: {
      text: '主治醫師搖頭。',
      feedback: 'Fedratinib 有 Wernicke encephalopathy 風險，用藥前與期間要檢查 thiamine。而且 PLT < 50k 時 pacritinib 更合適。',
      choices: [{ label: '重新決定', next: 'jak' }]
    },
    end_good: {
      text: '用 pacritinib 三個月，脾臟縮小 40%，盜汗消失，可以吃完一碗飯。妹妹 HLA 全相合，正安排移植。',
      ending: {
        grade: 'good',
        title: 'Higher-risk primary myelofibrosis',
        pearls: [
          '巨脾 + leukoerythroblastic smear + dry tap -> MF',
          'JAK2 45-50%、CALR 45-50%、MPL 7-10%',
          'Allo-HSCT 是唯一治癒',
          'Ruxolitinib；PLT < 50k -> pacritinib；貧血 -> momelotinib；fedratinib 驗 thiamine'
        ]
      }
    }
  }
});
