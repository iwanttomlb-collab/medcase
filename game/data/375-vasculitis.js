// Ch 375 Vasculitis Syndromes. Source notes: notes/375-vasculitis.md

RPG.registerCards('375', [
  {
    id: 'aav-path',
    title: 'ANCA vasculitis 致病機轉',
    points: [
      '**ANCA**：**PR3**（cANCA，GPA）、**MPO**（pANCA，MPA、EGPA），位於 neutrophil 顆粒',
      '**TNF、IL-1 priming** 或 alternative complement -> PR3/MPO 轉移到細胞膜 -> 與 ANCA 結合 -> **degranulation、ROS**、殺傷內皮；釋出 IL-1、IL-8；**NETs**',
      'Complement **C5a** 放大 neutrophil 活化 -> avacopan（C5aR inhibitor）的依據',
      '反證：ANCA 陰性仍可 active；效價與活性相關差；緩解後可持續陽性 -> **不可單憑 ANCA 調藥**',
      '**Pauci-immune**：腎沒有 immune complex 沉積',
      '**GPA**：上呼吸道 granulomatous inflammation，推測為對吸入抗原的異常 cell-mediated 反應；**Th1 偏向**（IFN-gamma、TNF、IL-12）；**S. aureus 鼻帶菌** 與復發相關',
      '**EGPA**：asthma、eosinophilia、granuloma -> **IL-5**（mepolizumab、benralizumab）',
      '藥物誘發：**hydralazine、PTU**'
    ],
    refs: ['Harrison’s Ch 375（Pathogenesis）']
  },
  {
    id: 'lvv-path',
    title: 'GCA 與 Takayasu 致病機轉',
    points: [
      '**GCA** 為 antigen-driven：**adventitia** 的 **dendritic cells** 活化，**CD4+ T 經 vasa vasorum 進入**並 clonal 擴增（抗原在動脈壁）',
      '**Th1（IFN-gamma、IL-2）** 與 **Th17（IL-17）**兩群 CD4+ T；對 GC 反應不同',
      'Macrophages 分化 -> **giant cells**；panarteritis、**internal elastic lamina 斷裂**、intimal proliferation -> 管腔狹窄 -> ischemia（失明、jaw claudication）',
      '**IL-6** 驅動全身發炎（CRP、ESR）-> tocilizumab 有效',
      'HLA-DR4、DRB1*04；**immunosenescence**（幾乎都 > 50 歲）',
      '**Takayasu**：panarteritis ± giant cells；intimal proliferation、media scarring、elastic lamina 退化；**vasa vasorum 受侵犯**；分支起始處最明顯 -> stenosis、aneurysm',
      'Takayasu 確切機轉不明；可見 circulating immune complexes，意義不明'
    ],
    refs: ['Harrison’s Ch 375（Pathogenesis）']
  },
  {
    id: 'pan-path',
    title: 'PAN 與 cryoglobulinemic vasculitis 致病機轉',
    points: [
      '**Immune complex 模型**（類 serum sickness）：antigen excess 形成複合體 -> 沉積於通透性增加的血管壁 -> **complement（C5a）** 吸引 neutrophils -> 酵素損傷 -> 慢性期 mononuclear cells -> 管腔閉塞',
      '**HBV-PAN**：循環中 HBsAg-Ig 複合體，血管壁可見 HBV antigen、IgM、complement',
      'PAN：小中型 muscular arteries 的 **fibrinoid necrosis**，**bifurcation** 處 segmental；癒合時 collagen 沉積 -> 閉塞；**aneurysms <= 1 cm**',
      '侵犯 venules 不屬 PAN（想 MPA）；腎為 arteritis without GN',
      '**DADA2**（adenosine deaminase 2 缺乏）：兒童 PAN-like，TNF 驅動',
      '**Cryoglobulinemic**：**HCV antigen + polyclonal anti-HCV IgG + monoclonal IgM RF** 形成 immune complex 沉積 -> 發炎；腎為 **MPGN**',
      '抗病毒治療使 cryoglobulin、IgM、RF 下降 -> 支持 HCV 因果'
    ],
    refs: ['Harrison’s Ch 375（Pathogenesis）']
  },
  {
    id: 'igav-path',
    title: 'IgA vasculitis 致病機轉',
    points: [
      '**IgA immune complexes** 沉積於小血管：皮膚 postcapillary venules、腸壁、腎 mesangium',
      '誘因：**URI**、藥物、食物、昆蟲叮咬、疫苗；influenza A 被提出',
      'Skin：**leukocytoclastic vasculitis**（neutrophil nuclear debris）+ IgA、C3 沉積；RBC 外滲 -> palpable purpura（重力處）',
      '腸壁 vasculitis、水腫 -> colicky pain、出血、intussusception',
      '腎：mesangial IgA -> GN（與 IgA nephropathy 類似）',
      '**Complement 正常**；約半數 serum IgA 上升'
    ],
    refs: ['Harrison’s Ch 375（Pathogenesis）']
  },
  {
    id: 'vas-approach',
    title: 'Vasculitis：診斷思路',
    points: [
      '線索：**palpable purpura**、**肺浸潤 + 顯微血尿**、chronic sinusitis、**mononeuritis multiplex**、不明缺血、GN + 多系統',
      '**第一步排除 mimics**：endocarditis、disseminated GC、**cocaine/levamisole**、**atrial myxoma**、atheroembolism、APS、TTP、lymphoma、anti-GBM、RCVS',
      '確診靠**受侵犯組織切片**；避免 blind biopsy',
      '懷疑 PAN、Takayasu、primary CNS vasculitis -> **arteriogram**'
    ],
    table: {
      head: ['機轉', '疾病'],
      rows: [
        ['Immune complex', 'IgAV、cryoglobulinemic（HCV）、HBV-PAN、serum sickness'],
        ['ANCA', 'GPA（PR3）、MPA、EGPA（MPO）'],
        ['T cell / granuloma', 'GCA、Takayasu、GPA、EGPA']
      ]
    }
  },
  {
    id: 'aav',
    title: 'GPA vs MPA vs EGPA',
    table: {
      head: ['', 'GPA', 'MPA', 'EGPA'],
      rows: [
        ['ANCA', '**PR3** ~90%（active）', '**MPO** ~75%', 'MPO ~48%'],
        ['Granuloma', '有', '**無**', '有'],
        ['上呼吸道', '**95%**：sinusitis、saddle nose、subglottic stenosis', '少見', 'Allergic rhinitis、sinusitis'],
        ['肺', 'Nodules、**cavities**', '**Alveolar hemorrhage**', '**Asthma**、浸潤'],
        ['腎', 'Pauci-immune GN 77%', 'GN >= 79%', '較少'],
        ['其他', 'Eye、proptosis', 'Mononeuritis', '**Eosinophilia > 1000**、mononeuritis、**cardiac（主要死因）**']
      ]
    },
    note: 'ANCA PPV：active GN 時 90%，只有 sinus/lung 時 30-60% -> 切片排除感染、腫瘤'
  },
  {
    id: 'aav-tx',
    title: 'GPA/MPA 治療',
    points: [
      '**Active GN 一律算 severe**（即使 Cr 正常）',
      'Severe induction：**rituximab 或 CYC + GC**，考慮 **avacopan**（C5aR inhibitor）；reduced-dose GC 非劣、感染少',
      'Relapsing：rituximab 優於 CYC；**生育考量 -> rituximab**',
      'RPGN Cr > 4 或呼吸器 alveolar hemorrhage：偏好 daily CYC',
      '**PLEX 不常規**；**anti-GBM 陽性要做**；與 RTX 間隔 >= 48 h',
      '**TMP-SMX 預防 PJP**',
      'Maintenance：**rituximab 優於 AZA**；至少 **2 年**',
      '**ANCA 上升 ≠ 復發**，不可單憑 ANCA 調藥；etanercept 無效',
      'Nonsevere：MTX 或 MMF + GC'
    ]
  },
  {
    id: 'pan',
    title: 'Polyarteritis nodosa',
    points: [
      '**小中型 muscular arteries**（renal、visceral）；segmental、bifurcations；aneurysms <= 1 cm',
      '**不侵犯肺動脈；無 GN、無 granuloma**；侵犯 venules -> 想 MPA',
      '表現：HTN、renal insufficiency、**mononeuritis multiplex**、**GI（bowel infarction）**、**testicular pain**、livedo',
      '**ANCA 罕見**；eosinophilia 罕見；**所有病人篩 HBV、HCV**',
      '診斷：切片（皮膚結節、睪丸、神經肌肉）或 **catheter arteriogram：microaneurysms**',
      '治療：prednisone + CYC（輕症 GC 單用）；**HBV/HCV -> antiviral 必要** + 短期 immunosuppression ± PLEX',
      'DADA2：兒童發病，對 TNF inhibitor 有效'
    ]
  },
  {
    id: 'gca',
    title: 'Giant cell arteritis / PMR',
    points: [
      '**> 50 歲**；headache、temporal artery 壓痛、**jaw claudication**、scalp pain',
      '**Ischemic optic neuropathy -> 失明**',
      'Large-vessel 最多 1/3：arm claudication、**thoracic aortic aneurysm（18 倍）**',
      '**不要等切片：立刻 prednisone 40-60 mg/day**；眼部症狀 **IV MP 1 g x 3 天**',
      'Temporal artery biopsy **3-5 cm**、serial sections；治療 ~14 天內仍可陽性；**US halo sign**',
      '**Tocilizumab** GC-sparing（IL-6 阻斷會讓 CRP/ESR 失去監測價值）；**aspirin 81 mg**',
      'PMR：肩髖帶痛僵、ESR 高、**prednisone 10-20 mg 快速反應**、CK 正常、RF/CCP 陰性'
    ]
  },
  {
    id: 'takayasu',
    title: 'Takayasu arteritis',
    points: [
      '**年輕女性**；aortic arch 與分支',
      '**Pulse 減弱、兩臂 BP 差、bruits**；subclavian 93%（arm claudication）',
      'HTN（renal artery）、AR、TIA/stroke、visual changes',
      '診斷：**MRA/CTA** 或 arteriography',
      '治療：prednisone；refractory MTX、anti-TNF；**手術在發炎控制後**'
    ]
  },
  {
    id: 'igav',
    title: 'IgA vasculitis / cryoglobulinemia',
    points: [
      '**IgAV**：兒童 4-7 歲、春季；**palpable purpura（臀、下肢）**、polyarthralgia、**colicky abdominal pain（± 血便、intussusception）**、GN',
      'IgAV：skin biopsy IgA + C3；**complement 正常**；GC 改善水腫、關節、腹痛，**不改善皮膚或腎**；1-5% 兒童 ESRD',
      '**Cryoglobulinemic**：多與 **HCV**；purpura、arthralgia、neuropathy、**MPGN**',
      'Cryo：**RF 幾乎都陽性**、**hypocomplementemia 90%**；**antiviral first-line**；rituximab'
    ]
  }
]);

RPG.registerCase({
  id: 'vas-01',
  chapter: '375',
  title: '流鼻血的木工',
  patient: '45 歲男性 · 木工師傅',
  summary: '鼻塞流血水三個月，最近咳血、尿變成茶色。',
  cards: ['aav-path', 'vas-approach', 'aav', 'aav-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '許師傅以為是木屑過敏。三個月來鼻塞、流帶血的鼻涕，耳鼻喉科給了抗生素、鼻噴劑都沒用。',
        '這兩週開始咳嗽、痰裡有血絲，尿變成茶色，膝蓋和手肘也痠痛。'
      ],
      clue: ['45M；3 個月 **bloody nasal discharge**、抗生素無效', '**Hemoptysis**；**茶色尿**', 'Arthralgia'],
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你仔細檢查。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'nose', group: '頭頸', label: '鼻腔與鼻樑', key: true, reveal: true,
            result: '鼻黏膜潰瘍、結痂；**鼻中隔穿孔**；鼻樑輕度塌陷', clue: '**Nasal septal perforation**、early saddle nose',
            miss: '主訴就是鼻子，要看鼻腔。' },
          { id: 'ear', group: '頭頸', label: '耳朵', result: '右側 serous otitis media' },
          { id: 'eye', group: '頭頸', label: '眼睛', result: '左眼 episcleritis' },
          { id: 'lung', group: '胸部', label: '肺部聽診', key: true, reveal: true,
            result: '右上肺 crackles', clue: '右上肺 crackles',
            miss: '有咳血，一定要聽肺。' },
          { id: 'skin', group: '皮膚', label: '下肢皮膚', key: true, reveal: true,
            result: '下肢 **palpable purpura**', clue: 'Palpable purpura',
            miss: '懷疑 vasculitis，要找 palpable purpura。' },
          { id: 'vitals', group: '一般', label: '生命徵象', result: 'BP 152/94；BT 37.8；SpO2 95%' },
          { id: 'heart', group: '胸部', label: '心臟聽診（雜音）', key: true, reveal: true,
            result: '無 murmur', clue: '無心雜音',
            miss: '發燒 + 多系統侵犯，要排除 endocarditis 這個 vasculitis mimic。' },
          { id: 'neuro', group: '神經', label: '周邊神經', result: '正常' }
        ]
      }
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'biopsy',
        options: [
          { id: 'cr', group: '腎', label: 'Cr、UA（含 sediment）', key: true, reveal: true,
            result: 'Cr **3.2** mg/dL（3 個月前 0.9）；**dysmorphic RBC + RBC casts**；protein 2+', clue: '**RPGN**：Cr 0.9 -> 3.2、RBC casts',
            miss: '茶色尿，腎功能和尿沉渣一定要看。' },
          { id: 'anca', group: '抗體', label: 'ANCA（IF + PR3、MPO）', key: true, reveal: true,
            result: '**cANCA；anti-PR3 陽性**', clue: '**PR3-ANCA (+)**',
            miss: 'ENT + 肺 + 腎，ANCA 是關鍵檢查。' },
          { id: 'gbm', group: '抗體', label: 'Anti-GBM antibody', key: true, reveal: true,
            result: '陰性', clue: 'Anti-GBM 陰性',
            miss: '肺腎症候群要排除 anti-GBM disease，陽性時需要 PLEX。' },
          { id: 'ct', group: '影像', label: 'Chest CT', key: true, reveal: true,
            result: '雙側多發 **nodules，其中兩顆 cavitary**', clue: '**Bilateral cavitary nodules**',
            miss: '咳血要看肺部影像。' },
          { id: 'bcx', group: '感染', label: 'Blood cultures x 2', key: true, reveal: true,
            result: '無菌生長', clue: 'Blood culture 陰性',
            miss: '發燒 + vasculitis 樣表現，要排除 endocarditis。' },
          { id: 'c3', group: '抗體', label: 'C3、C4', result: '正常' },
          { id: 'ana', group: '抗體', label: 'ANA、anti-dsDNA', result: '陰性' },
          { id: 'hbv', group: '感染', label: 'HBV、HCV、HIV', result: '陰性', clue: 'HBV、HCV 陰性（rituximab 前也需要）' },
          { id: 'tox', group: '其他', label: 'Urine toxicology（cocaine）', result: '陰性' },
          { id: 'cbc', group: '血液', label: 'CBC', result: 'Hb 9.8；WBC 12,400；PLT 480k' },
          { id: 'pet', group: '影像', label: 'PET-CT', result: '多處攝取', waste: 'PET-CT 對 GPA 的診斷沒有幫助。' }
        ]
      }
    },
    biopsy: {
      text: 'PR3-ANCA 陽性、RPGN、cavitary nodules、ENT 破壞。要做切片嗎？',
      choices: [
        { label: '做**腎臟切片**：確認 pauci-immune crescentic GN，也評估慢性化程度', next: 'bx_result' },
        { label: 'ANCA 陽性就確診，不用切片', next: 'bx_skip' }
      ]
    },
    bx_skip: {
      text: '主治醫師想了想。',
      feedback: '典型 GPA + active GN 時 PR3-ANCA 的 PPV 確實約 90%，但腎切片能確認診斷、排除其他 GN，並評估可逆程度。若病人狀況允許，仍建議切片。',
      choices: [{ label: '安排腎切片', next: 'bx_result' }]
    },
    bx_result: {
      text: '腎切片：focal necrotizing **crescentic GN**，immunofluorescence **pauci-immune**。',
      clue: '**Pauci-immune crescentic GN**',
      choices: [{ label: '決定 induction 治療', next: 'tx' }]
    },
    tx: {
      text: '許師傅 Cr 3.2、未上呼吸器。他說：「我們還想再生一個小孩。」Induction？',
      choices: [
        { label: '**Rituximab + GC**（可考慮 avacopan 減少 GC）；**TMP-SMX** 預防 PJP；先篩 HBV', next: 'maint' },
        { label: 'Prednisone 1 mg/kg 單用', next: 'tx_gc' },
        { label: 'Rituximab + GC + **常規 plasma exchange**', next: 'tx_plex' },
        { label: 'Etanercept + MTX', next: 'tx_eta' }
      ]
    },
    tx_gc: {
      text: '主治醫師搖頭。',
      feedback: 'GC 單用無法改變 GPA 的病程。Active GN 屬 severe disease，要 rituximab 或 CYC 加 GC。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_plex: {
      text: '主治醫師搖頭。',
      feedback: '大型 RCT 中 PLEX 沒有降低 ESRD 或死亡，還增加感染。Anti-GBM 陽性才一定要做。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_eta: {
      text: '主治醫師搖頭。',
      feedback: 'Etanercept 在 GPA 無效、不應使用。MTX 只用於 nonsevere disease，而且腎功能不全禁用。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    maint: {
      text: '四個月後達到緩解：Cr 1.6、尿沉渣乾淨、鼻腔癒合。但 PR3-ANCA 仍陽性，最近一次效價還上升了。接下來？',
      clue: '緩解；**PR3-ANCA 效價上升**',
      choices: [
        { label: '**Rituximab maintenance**（500 mg q6m），至少 2 年；ANCA 上升**不單獨**作為加藥依據，密切追蹤臨床', next: 'end_good' },
        { label: 'ANCA 上升代表要復發了，再給一輪 CYC', next: 'maint_anca' },
        { label: '已經緩解，停藥觀察', next: 'end_relapse' }
      ]
    },
    maint_anca: {
      text: '主治醫師搖頭。',
      feedback: 'ANCA 上升本身不是即將復發的指標（只有 43% 在一年內復發），不應單憑 ANCA 重新加強免疫抑制。',
      choices: [{ label: '重新決定', next: 'maint' }]
    },
    end_good: {
      text: '兩年 rituximab maintenance 期間沒有復發。Cr 穩定在 1.5。鼻樑的輕度塌陷留下來了，他笑說這是「木工的勳章」。',
      ending: {
        grade: 'good',
        title: 'Granulomatosis with polyangiitis',
        pearls: [
          'ENT + lung（cavitary nodules）+ pauci-immune GN；PR3-ANCA',
          '排除 anti-GBM、endocarditis、cocaine',
          'Active GN = severe：rituximab 或 CYC + GC；生育考量選 rituximab',
          'PLEX 不常規；TMP-SMX 預防 PJP',
          'Rituximab maintenance >= 2 年；ANCA 上升 ≠ 復發'
        ]
      }
    },
    end_relapse: {
      text: '停藥八個月後，許師傅再次血尿、Cr 升到 2.4。重新誘導雖然成功，但腎功能沒有回到之前的水準。',
      ending: {
        grade: 'ok',
        title: 'GPA 停藥後復發',
        pearls: [
          '50-70% GPA 緩解後會復發',
          'Maintenance 至少 2 年；停藥後復發風險上升',
          '每次復發都可能留下不可逆損傷'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'vas-02',
  chapter: '375',
  title: '咬不動的牛排',
  patient: '76 歲女性 · 退休會計',
  summary: '新的頭痛、吃東西下巴會痛，今天早上右眼看不見了十分鐘。',
  cards: ['lvv-path', 'gca', 'takayasu', 'vas-approach'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '吳奶奶一個月來右邊太陽穴持續痛，梳頭時頭皮也痛。',
        '「最近吃牛排嚼一嚼下巴就痠到要停下來。今天早上右眼突然像被黑幕遮住，十分鐘後才恢復。」',
        '她還說肩膀和屁股早上很僵，起床很困難。'
      ],
      clue: ['76F；新發右顳部頭痛、scalp tenderness', '**Jaw claudication**', '**Transient monocular vision loss**（amaurosis fugax）', '肩髖晨僵（PMR 症狀）'],
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你開始檢查。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'urgent',
        options: [
          { id: 'ta', group: '頭頸', label: '顳動脈觸診', key: true, reveal: true,
            result: '右側顳動脈**增厚、結節、壓痛、搏動減弱**', clue: '**Abnormal temporal artery**',
            miss: '懷疑 GCA，一定要摸顳動脈。' },
          { id: 'eye', group: '頭頸', label: '視力、瞳孔、眼底', key: true, reveal: true,
            result: '視力目前正常；眼底右側 optic disc 輕度蒼白水腫', clue: '右側 optic disc 輕度水腫',
            miss: '有暫時性失明，眼睛檢查是必要的。' },
          { id: 'pulse', group: '血管', label: '雙臂血壓與 pulses', key: true, reveal: true,
            result: '右臂 BP 152/80、左臂 **128/74**；左鎖骨下 bruit', clue: '**兩臂 BP 差 24 mmHg**、left subclavian bruit',
            miss: 'GCA 最多 1/3 有 large-vessel disease，要量雙臂血壓、聽 bruit。' },
          { id: 'shoulder', group: '關節', label: '肩、髖活動度', result: '主動活動受限，被動活動尚可' },
          { id: 'joint', group: '關節', label: '周邊關節', result: '無 synovitis' },
          { id: 'heart', group: '胸部', label: '心臟聽診', result: '無 AR murmur' },
          { id: 'neuro', group: '神經', label: '神經學檢查', result: '無 focal deficit' }
        ]
      }
    },
    urgent: {
      text: '高度懷疑 GCA，而且有視力症狀。ESR、CRP 剛抽，顳動脈切片要等到下週。現在要做什麼？',
      choices: [
        { label: '**立刻開始治療**：IV methylprednisolone 1 g/day x 3 天，之後 prednisone；同時安排切片', next: 'labs' },
        { label: '等切片結果確診再給類固醇，以免切片陰性', next: 'urgent_wait' },
        { label: '先給 prednisone 10 mg，看反應', next: 'urgent_low' }
      ]
    },
    urgent_wait: {
      text: '主治醫師語氣急迫。',
      feedback: '治療絕對不能延遲。她已經有 amaurosis fugax，隨時可能永久失明。GC 治療約 14 天內切片仍能看到 vasculitis。',
      choices: [{ label: '重新決定', next: 'urgent' }]
    },
    urgent_low: {
      text: '主治醫師搖頭。',
      feedback: '10-20 mg 是 isolated PMR 的劑量。GCA 要 prednisone 40-60 mg/day；有眼部症狀要 IV methylprednisolone 1 g x 3 天。',
      choices: [{ label: '重新決定', next: 'urgent' }]
    },
    labs: {
      text: '治療已經開始。接著安排檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出',
        next: 'longterm',
        options: [
          { id: 'esr', group: '血液', label: 'ESR、CRP', key: true, reveal: true,
            result: 'ESR **96**；CRP **8.4** mg/dL', clue: '**ESR 96、CRP 8.4**',
            miss: 'GCA 幾乎都有 ESR/CRP 上升，也是之後減藥的參考。' },
          { id: 'cbc', group: '血液', label: 'CBC、LFT', result: 'Hb 10.5（normochromic）；PLT 520k；**ALP 上升**', clue: 'Anemia、thrombocytosis、ALP 上升' },
          { id: 'bx', group: '診斷', label: 'Temporal artery biopsy（3-5 cm、serial sections）', key: true, reveal: true,
            result: '**Panarteritis、giant cells**、internal elastic lamina 斷裂', clue: '**TA biopsy：giant cell arteritis**',
            miss: 'Temporal artery biopsy 是確診方法；取 3-5 cm、連續切片提高陽性率。' },
          { id: 'us', group: '診斷', label: 'Temporal + axillary artery ultrasound', result: '右顳動脈與左腋動脈 **halo sign**', clue: 'US halo sign（temporal + axillary）' },
          { id: 'aorta', group: '影像', label: 'CTA 或 MRA（aorta 與分支）', key: true, reveal: true,
            result: '左 subclavian 狹窄；**thoracic aorta 輕度擴張 4.1 cm**', clue: 'Left subclavian stenosis；thoracic aorta 4.1 cm',
            miss: '有兩臂 BP 差與 bruit，要評估 large-vessel 與 aortic aneurysm。' },
          { id: 'ck', group: '血液', label: 'CK', result: '正常' },
          { id: 'rf', group: '血液', label: 'RF、anti-CCP', result: '陰性' },
          { id: 'mri', group: '影像', label: 'Brain MRI', result: '無梗塞' },
          { id: 'lp', group: '其他', label: 'Lumbar puncture', result: '（未執行）', waste: '沒有 meningitis 的臨床懷疑，不需要 LP。' }
        ]
      }
    },
    longterm: {
      text: '確診 GCA 合併 large-vessel involvement。長期治療？',
      choices: [
        { label: 'Prednisone taper（約 2 年）+ **tocilizumab** 減少 GC；**aspirin 81 mg**；骨質保護；定期追蹤 aorta', next: 'end_good' },
        { label: 'Prednisone 60 mg 一個月後直接停', next: 'lt_stop' },
        { label: '用 CRP 監測 tocilizumab 治療下的疾病活性', next: 'lt_crp' }
      ]
    },
    lt_stop: {
      text: '主治醫師搖頭。',
      feedback: 'GCA 多數需要約 2 年治療，60-85% 在減量時症狀復發。要逐步減量。',
      choices: [{ label: '重新決定', next: 'longterm' }]
    },
    lt_crp: {
      text: '主治醫師提醒：',
      feedback: 'IL-6 阻斷會讓肝臟不再製造 CRP、ESR 也會正常化，所以用 tocilizumab 時，CRP、ESR 不能用來判斷活性或感染。要靠症狀與影像。',
      choices: [{ label: '重新決定', next: 'longterm' }]
    },
    end_good: {
      text: '吳奶奶的視力保住了。一年後 prednisone 減到 5 mg，持續 tocilizumab。每年 CTA 追蹤，thoracic aorta 沒有再擴大。',
      ending: {
        grade: 'good',
        title: 'Giant cell arteritis with large-vessel involvement',
        pearls: [
          '> 50 歲新頭痛 + jaw claudication + 視力症狀 -> 立刻治療，不等切片',
          '眼部症狀：IV MP 1 g x 3 天；之後 prednisone 40-60 mg',
          'Biopsy 3-5 cm；US halo sign；評估 large vessels、aortic aneurysm',
          'Tocilizumab GC-sparing（CRP 失去監測價值）；aspirin 81 mg'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'vas-03',
  chapter: '375',
  title: '垂下的右腳',
  patient: '39 歲男性 · 貨運司機',
  summary: '右腳突然抬不起來，最近肚子吃飽就痛，右邊睪丸也痛。',
  cards: ['pan-path', 'pan', 'vas-approach'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '廖先生兩個月來發燒、體重掉了 7 公斤，全身痠痛。',
        '「上週右腳突然抬不起來，走路會拖。最近吃飽飯半小時肚子就絞痛，右邊睪丸也痛。」',
        '他說年輕時「肝不好」，沒有追蹤。'
      ],
      clue: ['39M；發燒、體重減輕 7 kg、myalgia', '**右 foot drop**（急性）', '**Postprandial abdominal pain**', '**Testicular pain**', '「肝不好」未追蹤'],
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你開始檢查。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'vitals', group: '一般', label: '生命徵象', key: true, reveal: true,
            result: 'BP **172/104**；BT 38.1', clue: '**New hypertension**；fever',
            miss: 'PAN 常有腎動脈侵犯造成的高血壓，生命徵象一定要量。' },
          { id: 'neuro', group: '神經', label: '下肢神經學檢查', key: true, reveal: true,
            result: '右 **peroneal nerve** 支配區無力（dorsiflexion 1/5）、感覺減退；左 ulnar 區感覺異常', clue: '**Mononeuritis multiplex**（右 peroneal、左 ulnar）',
            miss: '急性 foot drop，要做詳細神經學檢查分辨分布。' },
          { id: 'skin', group: '皮膚', label: '下肢皮膚', key: true, reveal: true,
            result: '**Livedo reticularis**；小腿兩顆壓痛皮下結節', clue: 'Livedo + **tender subcutaneous nodules**',
            miss: '要找皮膚病灶，結節是很好的切片位置。' },
          { id: 'testis', group: '腹部', label: '睪丸', result: '右側壓痛，無腫塊' },
          { id: 'abd', group: '腹部', label: '腹部', result: '輕度壓痛，無腹膜徵象' },
          { id: 'lung', group: '胸部', label: '肺部聽診', result: '清晰' },
          { id: 'nose', group: '頭頸', label: '鼻腔', result: '正常' }
        ]
      }
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'hbv', group: '感染', label: 'HBsAg、HBeAg、HBV DNA', key: true, reveal: true,
            result: '**HBsAg 陽性**、HBeAg 陽性、HBV DNA 高', clue: '**Active HBV**',
            miss: 'PAN 所有病人都要篩 HBV、HCV。' },
          { id: 'hcv', group: '感染', label: 'Anti-HCV', result: '陰性' },
          { id: 'anca', group: '抗體', label: 'ANCA', key: true, reveal: true,
            result: '**陰性**', clue: 'ANCA 陰性',
            miss: '要區分 ANCA vasculitis 與 PAN。' },
          { id: 'renal', group: '腎', label: 'Cr、UA', key: true, reveal: true,
            result: 'Cr 1.7；UA 少量蛋白、**無 RBC casts**', clue: 'Cr 1.7；**無 active sediment**（不像 GN）',
            miss: '要看腎功能和尿沉渣：PAN 是 arteritis 沒有 GN。' },
          { id: 'cbc', group: '血液', label: 'CBC、ESR、CRP', result: 'WBC 14,800（neutrophilia）；ESR 88', clue: 'Neutrophilic leukocytosis；ESR 88' },
          { id: 'eos', group: '血液', label: 'Eosinophil count', result: '正常' },
          { id: 'angio', group: '影像', label: 'Catheter mesenteric + renal angiography', key: true, reveal: true,
            result: '腎動脈與 mesenteric 分支**多發小動脈瘤**與狹窄', clue: '**Microaneurysms**（renal、mesenteric）',
            miss: '懷疑 PAN 而沒有現成組織時，catheter angiography 可以確診（CTA/MRA 解析度不夠）。' },
          { id: 'ncs', group: '神經', label: 'Nerve conduction study', result: 'Axonal mononeuropathy（右 peroneal、左 ulnar）' },
          { id: 'cxr', group: '影像', label: 'Chest X-ray', result: '正常' }
        ]
      }
    },
    dx: {
      text: 'HBV 陽性、mononeuritis multiplex、HTN、GI ischemia、testicular pain、microaneurysms、ANCA 陰性、沒有 GN。診斷與治療？',
      choices: [
        { label: '**HBV-associated PAN**：**antiviral（entecavir/tenofovir）** + 短期 GC 控制 vasculitis（± plasma exchange），控制後撤除免疫抑制；控制血壓', next: 'end_good' },
        { label: 'PAN：長期高劑量 prednisone + cyclophosphamide，HBV 之後再說', next: 'tx_noantiviral' },
        { label: 'MPA：rituximab', next: 'tx_mpa' }
      ]
    },
    tx_noantiviral: {
      text: '主治醫師搖頭。',
      feedback: 'HBV 相關 PAN 一定要 antiviral。長期強力免疫抑制會讓 HBV 大量複製，甚至猛爆性肝炎。免疫抑制只短期用於嚴重 vasculitis，控制後撤除。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    tx_mpa: {
      text: '主治醫師搖頭。',
      feedback: 'MPA 侵犯 capillaries、venules，常有 GN 與 MPO-ANCA。他 ANCA 陰性、沒有 GN、有 microaneurysms，是 PAN。Rituximab 還會讓 HBV 再活化。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '開始 tenofovir 加上兩週 prednisone 後快速減量。腹痛消失，血壓用藥控制。半年後 HBV DNA 測不到，foot drop 逐漸恢復到 4/5。',
      ending: {
        grade: 'good',
        title: 'HBV-associated polyarteritis nodosa',
        pearls: [
          'PAN：小中型動脈；mononeuritis、GI、testicular pain、HTN、livedo',
          '無 GN、不侵犯肺動脈、ANCA 罕見',
          '所有 PAN 篩 HBV、HCV',
          'Catheter angiography：microaneurysms',
          'HBV-PAN：antiviral 必要 + 短期 immunosuppression'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'vas-04',
  chapter: '375',
  title: '腿上的紫點與肚子痛',
  patient: '6 歲男孩 · 小學一年級',
  summary: '感冒一週後，屁股和小腿冒出紫色斑點，肚子一陣一陣地痛。',
  cards: ['igav-path', 'igav'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '你在兒科支援。小傑一週前感冒，三天前屁股和小腿出現很多紫紅色的點，摸起來凸凸的。',
        '昨天開始肚子一陣一陣絞痛，腳踝也痛，不太想走路。媽媽說今天大便有一點血絲。'
      ],
      clue: ['6M；URI 後 1 週', '臀部、小腿 **palpable purpura**', '**Colicky abdominal pain**、血便絲', '踝關節痛'],
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你蹲下來和小傑說話，然後開始檢查。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'skin', group: '皮膚', label: '皮膚分布', key: true, reveal: true,
            result: '臀部、雙下肢伸側 palpable purpura，**上半身沒有**', clue: 'Purpura 集中臀部與下肢',
            miss: 'Purpura 的分布是重要線索。' },
          { id: 'abd', group: '腹部', label: '腹部觸診', key: true, reveal: true,
            result: '臍周輕度壓痛；**無腫塊**、無腹膜徵象', clue: '腹部壓痛，無腫塊',
            miss: '腹痛加上血便，要摸有沒有 intussusception 的腫塊。' },
          { id: 'joint', group: '關節', label: '踝與膝', result: '雙踝輕度腫痛，無明顯 effusion', clue: 'Periarticular swelling（arthralgia）' },
          { id: 'vitals', group: '一般', label: '生命徵象（含血壓）', key: true, reveal: true,
            result: 'BT 37.4；**BP 98/60**（正常）', clue: 'BP 正常',
            miss: '兒童 IgAV 要量血壓，高血壓是腎臟侵犯的徵象。' },
          { id: 'scrotum', group: '其他', label: '陰囊', result: '正常' },
          { id: 'lymph', group: '其他', label: '淋巴結、肝脾', result: '正常' }
        ]
      }
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'cbc', group: '血液', label: 'CBC', key: true, reveal: true,
            result: 'WBC 11,200；**PLT 正常**（310k）', clue: '**PLT 正常**（不是 ITP）',
            miss: 'Purpura 一定要看血小板，排除 ITP 或白血病。' },
          { id: 'ua', group: '腎', label: 'Urinalysis', key: true, reveal: true,
            result: '顯微血尿、少量蛋白；**數個 RBC casts**', clue: 'Microscopic hematuria + RBC casts',
            miss: 'IgAV 的長期預後取決於腎臟，一定要驗尿。' },
          { id: 'cr', group: '腎', label: 'Cr', result: '正常' },
          { id: 'coag', group: '血液', label: 'PT、aPTT', result: '正常' },
          { id: 'c3', group: '免疫', label: 'C3、C4', result: '**正常**', clue: 'Complement 正常' },
          { id: 'iga', group: '免疫', label: 'Serum IgA', result: '輕度上升' },
          { id: 'us', group: '影像', label: 'Abdominal ultrasound', result: '小腸壁增厚，**無 intussusception**', clue: 'US：腸壁水腫、無 intussusception' },
          { id: 'anca', group: '免疫', label: 'ANCA', result: '陰性', waste: '典型兒童 IgAV 不需要 ANCA。' },
          { id: 'renalbx', group: '侵入', label: 'Renal biopsy', result: '（未執行）', waste: '輕度腎炎、腎功能正常，兒童 IgAV 很少需要腎切片。' }
        ]
      }
    },
    dx: {
      text: '典型 IgA vasculitis。小傑腹痛明顯、踝關節腫痛。處置？',
      choices: [
        { label: '支持治療；腹痛與關節痛明顯 -> **prednisone 1 mg/kg/day 短期**；**定期追蹤 UA 與血壓**數個月', next: 'end_good' },
        { label: 'Prednisone 可以預防腎臟惡化，所有病人都該給', next: 'dx_renal' },
        { label: 'Cyclophosphamide 治療腎炎', next: 'dx_cyc' }
      ]
    },
    dx_renal: {
      text: '主治醫師搖頭。',
      feedback: 'GC 能改善組織水腫、關節痛和腹痛，但對皮膚和腎臟沒有證實的益處，也不縮短病程或減少復發。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    dx_cyc: {
      text: '主治醫師搖頭。',
      feedback: '他是輕度腎炎、腎功能正常，大多會自行緩解。強力免疫抑制只在 RPGN 等少數情況考慮。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '三天 prednisone 後腹痛明顯改善。紫斑兩週內消退。三個月後尿液檢查恢復正常。媽媽被告知之後若復發（10-40%）要回診驗尿。',
      ending: {
        grade: 'good',
        title: 'IgA vasculitis (Henoch-Schönlein)',
        pearls: [
          '兒童 4-7 歲；URI 後；palpable purpura（臀、下肢）+ arthralgia + 腹痛 + GN',
          'PLT 正常、complement 正常；skin biopsy IgA + C3',
          'GC 改善水腫、關節、腹痛，不改善皮膚或腎',
          '追蹤 UA 與 BP；1-5% 兒童進展到 ESRD'
        ]
      }
    }
  }
});
