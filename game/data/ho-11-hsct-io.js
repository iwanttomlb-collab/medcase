// HO 11 HSCT, immune checkpoint inhibitors, CAR-T and bispecifics. Source: Pocket Medicine Ch 5, p36-41 of 書頁.txt

RPG.registerCards('HO11', [
  {
    id: 'ho-hsct',
    title: 'Autologous vs. allogeneic HSCT',
    table: {
      head: ['', 'Allogeneic', 'Autologous'],
      rows: [
        ['Donor', '免疫學上不同的人', '自己'],
        ['GVHD', '**有**', '無'],
        ['**Graft-vs-tumor**', '**有**', '無'],
        ['移植物含腫瘤', '無', '有風險'],
        ['復發風險', '較低', '較高'],
        ['Transplant-related mortality', '較高', '較低'],
        ['適應症', '**AML、ALL、MDS、CML blast crisis**、lymphoma；非惡性：免疫缺乏、**AA**、hemoglobinopathies', '化療敏感：**R/R DLBCL、MM**、睪丸生殖細胞瘤']
      ]
    },
    points: [
      'HLA（chr 6）：A、B、C、DR；**matched related（sibling 8/8）GVHD 最低、首選**；MUD 需 10 個 allele；**haploidentical 用 post-transplant cyclophosphamide**；cord blood 細胞少、免疫重建慢',
      'Conditioning：**myeloablative**（復發低、毒性高）vs **reduced-intensity**（靠 GVT、適合 > 60 歲或共病）；**PT-Cy** 成為首選 GVHD 預防',
      '來源：**PBSC**（常用、植入快、graft failure 少）vs **BM**（慢性 GVHD 少，非惡性疾病首選）',
      '**Engraftment**（ANC > 500）：PBSC 約 2 週、BM 2.5 週、cord 4 週；G-CSF 提早 3-5 天'
    ],
    refs: ['BBMT 2015;21:1863（indications）', 'NEJM 2014;371:339（donor match by ethnicity）', 'JCO 2024;42:28（PT-Cy）', 'Blood 2015;126:23（RIC）', 'NEJM 2012;367:1487（PBSC vs BM）']
  },
  {
    id: 'ho-hsct-cx',
    title: 'HSCT 併發症',
    points: [
      '**Engraftment syndrome**：發燒、皮疹、非心因性肺水腫、LFT 異常、AKI、體重增加；排除感染與 GVHD；**steroids 1 mg/kg 快速減量**',
      '**SOS（VOD）**：約 10%、死亡率約 30%；肝小靜脈內皮傷害（**busulfan**）；**壓痛性肝腫大、腹水、體重快速增加、黃疸**；Doppler 門靜脈逆流；**ursodiol 預防、defibrotide 治療**',
      '肺：**IPS**（5-25%，死亡 > 50%）；**COP**（2-6 個月，steroids）；**DAH**（支氣管鏡血性灌洗，高劑量 methylpred）',
      '**Acute GVHD**（多在 6 個月內）：**皮膚（maculopapular rash）、肝（bilirubin）、GI（腹瀉量）**分級；切片支持；預防：MTX + CsA 或 tacrolimus、T-cell depletion、PT-Cy',
      'Tacrolimus 毒性：**PRES、TMA、腎毒性** -> 每日監測濃度',
      'aGVHD 治療：grade I 局部；**grade II-IV 全身類固醇**等免疫抑制',
      '**Chronic GVHD**（> 3 個月）：malar rash、**sicca**、關節炎、**bronchiolitis obliterans**、膽管退化；PBSC 較多；steroids、rituximab、photopheresis、ibrutinib、ruxolitinib、belumosudil、axatilimab',
      'Graft failure：primary（從未植入）、secondary（植入後再下降：排斥或 CMV 等）'
    ],
    refs: ['Blood 2016;127:1656（defibrotide）', 'Blood 2003;102:2777（IPS）', 'NEJM 2017;377:2167（aGVHD）', 'NEJM 2017;377:2565（cGVHD）', 'NEJM 2021;385:228（ruxolitinib cGVHD）', 'NEJM 2024;391:1002（axatilimab）']
  },
  {
    id: 'ho-hsct-time',
    title: 'Allo-HSCT 併發症時間軸與預防用藥',
    table: {
      head: ['時間', '主要問題', '感染'],
      rows: [
        ['**Day 0-30**', 'Mucositis、器官毒性、**neutropenia**、SOS、primary graft failure', '**G+ cocci、GNR**、Candida、Aspergillus、HSV'],
        ['**Day 30-90**', '**Acute GVHD**、細胞免疫低下', '**CMV**、Aspergillus、PCP、toxoplasma'],
        ['**> Day 90**', '**Chronic GVHD**、體液免疫低下', '**Encapsulated bacteria**、VZV、EBV-PTLD']
      ]
    },
    points: [
      '預防：**fluconazole**（Candida，約 75 天）；**acyclovir**（HSV/VZV，365 天）；**letermovir** 或 (val)ganciclovir（CMV，約 100 天）；FQ（neutropenia 期間）；**TMP-SMX 或 atovaquone（PCP）**；allopurinol',
      '晚期：hypogonadism、hypothyroidism、白內障、AVN、第二癌症'
    ],
    refs: ['Pocket Medicine Ch 5, HSCT']
  },
  {
    id: 'ho-ici',
    title: 'Immune checkpoint inhibitors',
    table: {
      head: ['標的', '藥物', '常見 irAE'],
      rows: [
        ['**PD-1**', 'Nivolumab、pembrolizumab、cemiplimab、dostarlimab', 'Rash 12%、**hypothyroid 5%**、**pneumonitis 2%**、colitis、hepatitis、**type 1 DM**'],
        ['**PD-L1**', 'Atezolizumab、avelumab、durvalumab', 'Rash 5%、hypothyroid 2%、adrenal insufficiency'],
        ['**CTLA-4**', 'Ipilimumab', 'Rash 21%、**colitis 5%**、**hypophysitis 1%**']
      ]
    },
    points: [
      'ICI 可讓任何組織發炎；罕見但嚴重：**myocarditis（可猛爆）**、myositis、myelitis、uveitis',
      'Workup：喘 -> chest CT；腹瀉 -> colonoscopy + 感染評估；**TSH、FT4、AM cortisol、glucose**；治療中定期 CMP、TSH',
      '**Grade 1**：支持、多可繼續；**grade 2**：暫停 ICI，考慮 steroids；**grade 3-4**：住院、停 ICI、**IV steroids**，難治時 targeted therapy',
      '**內分泌 irAE（hypophysitis、hypothyroid）不可逆 -> 終身荷爾蒙補充**',
      '**用類固醇處理 irAE 可能不會降低 ICI 療效**'
    ],
    refs: ['Science 2018;359:1350（ICI）', 'Ann Oncol 2017;28:2377', 'Nat Rev Dis Primers 2020;6:38（irAE）', 'JCO 2019;37:1927（steroids and efficacy）']
  },
  {
    id: 'ho-cart',
    title: 'CAR-T 與 bispecific 的毒性',
    points: [
      '**CAR-T**：自體 T cell + chimeric receptor（抗體可變區 + T cell 共刺激訊號），**不需 MHC**；需先 lymphodepletion',
      '**Bispecific**：同時結合 T cell 的 TCR 與腫瘤抗原',
      '**CRS**：T cell 增殖 -> cytokine 風暴 -> 發燒、低血壓、休克',
      '**ICANS**：腦水腫 -> 頭痛、**失語**、譫妄、嗜睡；用 **ICE score** 分級',
      '其他：CD19 標的造成 **B-cell aplasia**；第二癌症（含 T-cell lymphoma）'
    ],
    table: {
      head: ['Grade', 'CRS', 'ICANS（ICE）', '治療'],
      rows: [
        ['1', '發燒 >= 38 度', '7-9', '支持'],
        ['2', '發燒 + 低血壓不需升壓劑，或鼻導管 O2', '3-6', 'CRS：**tocilizumab**（anti-IL-6）；ICANS：steroids'],
        ['3', '需 1 種升壓劑或高流量 O2', '0-2', 'Tocilizumab + **steroids**'],
        ['4', '> 1 種升壓劑或正壓通氣', '無法喚醒', '同上 + ICU；癲癇給抗癲癇藥']
      ]
    },
    note: 'ICE：定向 4 分、說出 3 物 3 分、遵從指令 1 分、寫句子 1 分、100 倒數每次減 10 1 分。',
    refs: ['Nat Rev Cancer 2021;21:145', 'Biol Blood Marrow Transplant 2019;25:625（ASTCT grading）', 'Blood 2024;143:2099（second malignancy）', 'NEJM 2024;391:1217（T-cell lymphoma after CAR-T）']
  }
]);

RPG.registerCase({
  id: 'ho11-hsct',
  chapter: 'HO11',
  title: '移植後的一百天',
  patient: '38 歲女性 · AML CR1 allo-HSCT',
  summary: '接受非親屬 donor 的幹細胞移植。你負責照顧她從 day 0 到 day 100。',
  cards: ['ho-hsct', 'ho-hsct-cx', 'ho-hsct-time'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '移植病房。鄧小姐 AML（intermediate risk）CR1，接受 **busulfan-based myeloablative conditioning**，10/10 MUD 的 PBSC。GVHD 預防：tacrolimus + MTX。',
        '今天 **day +12**。她說右上腹脹痛，三天胖了 **4 公斤**，眼白有點黃。'
      ],
      clue: ['38F；AML CR1，MUD **allo-HSCT**（busulfan MAC）', 'Day +12：**右上腹痛、體重 +4 kg、黃疸**'],
      choices: [{ label: '評估', next: 'sos' }]
    },
    sos: {
      text: '理學檢查：肝臟腫大有壓痛、腹水。Bilirubin 3.4。Doppler：**門靜脈血流逆流**。',
      clue: '**壓痛性肝腫大、腹水、bilirubin 3.4、門靜脈逆流**',
      choices: [
        { label: '**Sinusoidal obstruction syndrome（SOS/VOD）**：**defibrotide**、利尿與水分管理', next: 'day35' },
        { label: 'Acute GVHD of liver：開始高劑量類固醇', next: 's_gvhd' },
        { label: 'Engraftment syndrome', next: 's_eng' }
      ]
    },
    s_gvhd: {
      text: '主治醫師搖頭。',
      feedback: 'Day +12 還沒植入，肝 GVHD 很少這麼早；而且體重快速增加、腹水、壓痛性肝腫大、門靜脈逆流是 SOS 的典型表現（busulfan 是危險因子）。',
      choices: [{ label: '重新判讀', next: 'sos' }]
    },
    s_eng: {
      text: '主治醫師搖頭。',
      feedback: 'Engraftment syndrome 在植入時出現，以發燒、皮疹、非心因性肺水腫為主。她是壓痛性肝腫大 + 腹水 + 黃疸，是 SOS。',
      choices: [{ label: '重新判讀', next: 'sos' }]
    },
    day35: {
      text: [
        'Defibrotide 後 bilirubin 回落。Day +16 ANC > 500，植入成功。',
        '**Day +35**：手掌、腳底、軀幹出現紅疹（約 50% 體表），**腹瀉每天 1.6 L**，bilirubin 2.8。'
      ],
      clue: ['Day +35：**皮疹 50% BSA**、**腹瀉 1.6 L/d**、bilirubin 2.8'],
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出',
        next: 'gvhd',
        options: [
          { id: 'cdiff', group: '感染', label: 'C. difficile、糞便病原體', key: true, reveal: true,
            result: '陰性', clue: 'C. diff、腸道病原陰性',
            miss: '移植後腹瀉要先排除感染，尤其 C. difficile。' },
          { id: 'cmv', group: '感染', label: 'CMV PCR', key: true, reveal: true,
            result: '測不到（letermovir 預防中）', clue: 'CMV PCR 陰性',
            miss: 'CMV colitis 是 day 30-90 的重要鑑別。' },
          { id: 'bx', group: '切片', label: '皮膚切片、**sigmoidoscopy 切片**', key: true, reveal: true,
            result: '皮膚：basal vacuolization、apoptotic keratinocytes；腸：**crypt apoptosis**', clue: '切片符合 **acute GVHD**',
            miss: '切片支持 GVHD 診斷並排除感染。' },
          { id: 'tac', group: '藥物', label: '**Tacrolimus trough**', key: true, reveal: true,
            result: '4.1 ng/mL（偏低）', clue: 'Tacrolimus 濃度偏低',
            miss: 'Tacrolimus 要每天監測：太低易 GVHD，太高有 PRES、TMA、腎毒性。' },
          { id: 'ct', group: '其他', label: 'CT 腹部', result: '小腸壁增厚' }
        ]
      }
    },
    gvhd: {
      text: '皮膚 stage 3、GI stage 3（> 1.5 L）、肝 stage 2：**acute GVHD grade III**。治療？',
      choices: [
        { label: '**全身類固醇**（methylprednisolone 2 mg/kg）+ 調整 tacrolimus 到目標濃度', next: 'cmv' },
        { label: 'Topical steroid + loperamide', next: 'g_topical' },
        { label: '停掉 tacrolimus，讓 GVT 效果更好', next: 'g_stop' }
      ]
    },
    g_topical: {
      text: '主治醫師搖頭。',
      feedback: '局部治療只適用 grade I（只有皮膚）。Grade II-IV 要全身免疫抑制，首選類固醇。',
      choices: [{ label: '重新決定', next: 'gvhd' }]
    },
    g_stop: {
      text: '主治醫師搖頭。',
      feedback: '她正在發生嚴重 GVHD，停免疫抑制會讓 GVHD 失控。',
      choices: [{ label: '重新決定', next: 'gvhd' }]
    },
    cmv: {
      text: [
        '類固醇一週後腹瀉減到 300 mL/d，皮疹消退，開始減量。',
        '**Day +100**。她問：「letermovir、acyclovir、TMP-SMX 這些藥可以全部停了嗎？」'
      ],
      choices: [
        { label: '**Letermovir（CMV）約 day 100 可停**但她仍在類固醇下要評估延長；**acyclovir 與 TMP-SMX 至少一年或免疫抑制結束**', next: 'end_good' },
        { label: '一百天了，全部停掉', next: 'end_stop',
          why: 'Acyclovir（HSV/VZV）與 PCP 預防要持續約一年或直到不再免疫抑制；她還在用類固醇與 tacrolimus。' }
      ]
    },
    end_stop: {
      text: '停藥兩個月後，她出現胸背部帶狀分布的水泡，接著發燒、喘：PCP。',
      ending: {
        grade: 'bad',
        title: 'Allo-HSCT 後過早停止預防',
        pearls: [
          'Acyclovir、TMP-SMX：約一年或直到免疫抑制結束',
          '> Day 90：VZV、encapsulated bacteria、cGVHD'
        ]
      }
    },
    end_good: {
      text: '一年後鄧小姐停掉所有免疫抑制劑，仍維持 CR，只有輕微口乾（limited chronic GVHD）。',
      ending: {
        grade: 'good',
        title: 'Allo-HSCT 的前一百天',
        pearls: [
          'SOS：busulfan、壓痛肝腫大、腹水、體重增加、黃疸 -> defibrotide',
          'aGVHD：皮膚、肝、GI；排除感染；grade II-IV 全身類固醇',
          'Tacrolimus 每日濃度：PRES、TMA、腎毒性',
          '預防：fluconazole、acyclovir、letermovir、TMP-SMX'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho11-ici',
  chapter: 'HO11',
  title: '免疫治療第六週',
  patient: '59 歲男性 · 轉移性黑色素瘤',
  summary: 'Ipilimumab + nivolumab 第三劑後，一天腹瀉八次。',
  cards: ['ho-ici'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '腫瘤科病房。宋先生轉移性 melanoma，接受 **ipilimumab + nivolumab**，三週前打了第三劑。',
        '這五天一天腹瀉 **8 次**（平常 1 次），有腹痛、黏液便，昨晚有一點血。生命徵象穩定。'
      ],
      clue: ['59M；melanoma on **ipi + nivo**', '**腹瀉 8 次/日**（比平常 +7）、腹痛、血便'],
      choices: [{ label: '評估', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'inf', group: '感染', label: 'C. difficile、stool culture、CMV', key: true, reveal: true,
            result: '陰性', clue: '感染陰性',
            miss: 'ICI colitis 要先排除感染。' },
          { id: 'scope', group: '內視鏡', label: 'Colonoscopy/flex sig + 切片', key: true, reveal: true,
            result: '瀰漫性紅腫潰瘍；切片：活動性結腸炎', clue: '**ICI colitis**（內視鏡證實）',
            miss: 'ICI colitis 要內視鏡確認嚴重度。' },
          { id: 'tsh', group: '內分泌', label: 'TSH、FT4、AM cortisol、glucose', key: true, reveal: true,
            result: 'TSH 1.2；FT4 正常；cortisol 14；glucose 正常', clue: '內分泌正常（目前）',
            miss: '用 ICI 的病人出事時，都要順便檢查內分泌 irAE。' },
          { id: 'cmp', group: '基本', label: 'CMP、CBC、CRP', result: 'K 3.1；CRP 上升', clue: 'K 3.1' },
          { id: 'ct', group: '影像', label: 'CT 腹部', result: '結腸壁瀰漫增厚，無穿孔' },
          { id: 'trop', group: '其他', label: 'Troponin、CK', result: '正常', clue: '無 myocarditis/myositis 證據' }
        ]
      }
    },
    tx: {
      text: '腹瀉比平常多 >= 7 次 = **grade 3 colitis**。處置？',
      choices: [
        { label: '**住院、停 ICI、IV methylprednisolone 1-2 mg/kg**；補液電解質；無效 48-72 小時 -> targeted therapy（如 anti-TNF）', next: 'hypo' },
        { label: 'Loperamide 止瀉，繼續 ICI', next: 't_lop' },
        { label: '不敢用類固醇，怕降低免疫治療效果', next: 't_noster' }
      ]
    },
    t_lop: {
      text: '主治醫師搖頭。',
      feedback: 'Grade 3 要停 ICI 並給 IV 類固醇。單用止瀉藥會掩蓋症狀、延誤治療，甚至穿孔。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_noster: {
      text: '主治醫師搖頭。',
      feedback: '用類固醇處理 irAE 很可能不會降低 ICI 的療效。Grade 3 colitis 不治療才危險。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    hypo: {
      text: [
        '類固醇後腹瀉緩解，六週慢慢減量停掉。',
        '兩個月後，他很累、頭痛、食慾差、低血壓 92/58。**Na 128**。AM cortisol **2.1**、**ACTH 低**；TSH 0.3、**FT4 低**。MRI：腦下垂體腫大。'
      ],
      clue: ['**Hypophysitis**：cortisol 2.1、ACTH 低；central hypothyroidism'],
      choices: [
        { label: '**先補 hydrocortisone，再補 levothyroxine**；告知內分泌 irAE **通常不可逆，需終身補充**', next: 'end_good' },
        { label: '先補 levothyroxine，再補 hydrocortisone', next: 'h_t4' },
        { label: '短期高劑量類固醇，之後腦下垂體功能會恢復', next: 'h_recover' }
      ]
    },
    h_t4: {
      text: '主治醫師搖頭。',
      feedback: '腎上腺不足時先補甲狀腺素會加速 cortisol 代謝，可能誘發 adrenal crisis。一定要先補 hydrocortisone。',
      choices: [{ label: '重新決定', next: 'hypo' }]
    },
    h_recover: {
      text: '主治醫師搖頭。',
      feedback: 'ICI 造成的內分泌病變（hypophysitis、hypothyroid）多為永久性，需要終身荷爾蒙補充，不是靠高劑量類固醇恢復。',
      choices: [{ label: '重新決定', next: 'hypo' }]
    },
    end_good: {
      text: '補充荷爾蒙後精神恢復。腫瘤影像持續 partial response。宋先生隨身帶著「腎上腺不足」的卡片。',
      ending: {
        grade: 'good',
        title: 'ICI colitis 與 hypophysitis',
        pearls: [
          'CTLA-4：colitis、hypophysitis 較多；PD-1：hypothyroid、pneumonitis',
          'Grade 3-4：停 ICI、IV steroids；難治加 targeted therapy',
          '類固醇處理 irAE 可能不降低療效',
          '內分泌 irAE 不可逆；先補 hydrocortisone 再補 thyroxine'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho11-cart',
  chapter: 'HO11',
  title: 'CAR-T 後的第三天',
  patient: '61 歲男性 · 復發 DLBCL',
  summary: 'R-CHOP 後半年復發，昨天剛輸了 CD19 CAR-T。今天開始發燒。',
  cards: ['ho-cart'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '血液科病房。紀先生 DLBCL 早期復發，三天前輸 **CD19 CAR-T**。',
        '今天 **39.4 度**，BP **84/50**，輸液 1 L 後 90/55；昨晚需要 **norepinephrine** 才能維持 MAP > 65。SpO2 94%（鼻導管 2 L）。',
        '意識清楚，ICE 10/10。血液培養已送，已給 cefepime。'
      ],
      clue: ['61M；CD19 CAR-T **day +3**', '**發燒 39.4、低血壓需 1 種升壓劑**', 'O2 鼻導管；ICE 10'],
      choices: [{ label: '分級與處理', next: 'crs' }]
    },
    crs: {
      text: 'CRS 幾級？怎麼處理？',
      choices: [
        { label: '**CRS grade 3**（需 1 種升壓劑）：**tocilizumab** + **steroids**、支持；同時持續抗生素', next: 'icans' },
        { label: 'Grade 1，只要退燒藥', next: 'c_g1' },
        { label: '這是敗血症，只要抗生素與升壓劑', next: 'c_sepsis' }
      ]
    },
    c_g1: {
      text: '主治醫師搖頭。',
      feedback: 'Grade 1 只有發燒。發燒 + 需要升壓劑是 grade 3，要 tocilizumab 加類固醇。',
      choices: [{ label: '重新判讀', next: 'crs' }]
    },
    c_sepsis: {
      text: '主治醫師搖頭。',
      feedback: 'CAR-T 後的發燒低血壓要同時當成感染與 CRS 處理：抗生素繼續給，但 CRS 需要 tocilizumab（anti-IL-6）與類固醇，不能只當敗血症。',
      choices: [{ label: '重新判讀', next: 'crs' }]
    },
    icans: {
      text: [
        'Tocilizumab 後退燒，day +5 停升壓劑。',
        '**Day +6**：護理師說他寫不出自己的名字，講話找不到字。ICE：定向 2/4、命名 2/3、遵從指令 1/1、寫句子 0/1、倒數 0/1 = **5 分**。'
      ],
      clue: 'Day +6：**失語、無法寫字**；**ICE 5**',
      choices: [
        { label: '**ICANS grade 2**：**dexamethasone**；神經學監測、EEG、癲癇預防；注意 tocilizumab 對 ICANS 無效', next: 'end_good' },
        { label: '再給一劑 tocilizumab', next: 'i_toci' },
        { label: '中風，啟動 tPA 流程', next: 'i_stroke' }
      ]
    },
    i_toci: {
      text: '主治醫師搖頭。',
      feedback: 'Tocilizumab 是大分子，進不了中樞神經，對 ICANS 無效（甚至可能讓腦脊液 IL-6 上升）。ICANS 用類固醇。',
      choices: [{ label: '重新決定', next: 'icans' }]
    },
    i_stroke: {
      text: '主治醫師搖頭。',
      feedback: 'CAR-T 後第一週出現失語、書寫困難是 ICANS 的典型表現。可以做影像排除其他原因，但 tPA 不是選項（血小板低、非血管性）。',
      choices: [{ label: '重新決定', next: 'icans' }]
    },
    end_good: {
      text: 'Dexamethasone 兩天後 ICE 回到 10 分。一個月 PET 完全緩解。之後因 B-cell aplasia 定期補充 IVIg。',
      ending: {
        grade: 'good',
        title: 'CAR-T 後 CRS 與 ICANS',
        pearls: [
          'CRS：發燒 ± 低血壓 ± 低氧；grade 2 起 tocilizumab，grade 3 加 steroids',
          'ICANS：失語、譫妄、嗜睡；ICE score；用 steroids，不是 tocilizumab',
          'CD19 CAR-T：B-cell aplasia；第二癌症'
        ]
      }
    }
  }
});
