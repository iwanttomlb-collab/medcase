// Ch 370 Rheumatoid Arthritis. Source notes: notes/370-ra.md

RPG.registerCards('370', [
  {
    id: 'ra-path',
    title: 'RA 致病機轉',
    points: [
      '遺傳：**HLA-DRB1 shared epitope**（aa 70-74）偏好結合 citrullinated peptides；1 個 SE 4 倍、2 個 8 倍；PTPN22、PADI4',
      '環境：**吸菸**（肺部 PAD -> **citrullination** -> ACPA；與 SE 協同可達 20-40 倍）、silica、**P. gingivalis**（唯一帶 PAD 的口腔菌）',
      '**Preclinical**：RF、ACPA 可早於關節炎 > 10 年；肺可能是自體免疫的起點',
      '**CD4+ T cells**：TCR-MHC II（signal 1）+ **CD28-CD80/86**（signal 2，abatacept 阻斷）-> TH1、TH17',
      'B cells：RF、ACPA immune complexes 活化 complement',
      '**Macrophage-driven**：**TNF**、IL-1、IL-6（TNFi、IL-6R 抑制有效）；JAK/STAT 訊號（JAKi）',
      '**Pannus**（fibroblast-like synoviocytes + granulation tissue）分泌 **MMPs** -> 軟骨破壞',
      '骨侵蝕：**RANKL** + M-CSF -> osteoclast（cathepsin K）；OPG 為 decoy；**TNF 上調 DKK-1 抑制 Wnt -> 骨形成下降**'
    ],
    refs: ['Harrison’s Ch 370（Pathogenesis）']
  },
  {
    id: 'ra-criteria',
    title: '2010 ACR/EULAR RA criteria',
    points: ['至少一關節 definite synovitis、無更好解釋；**>= 6/10 分**'],
    table: {
      head: ['項目', '分數'],
      rows: [
        ['1 large / 2-10 large joints', '0 / 1'],
        ['1-3 / 4-10 small joints', '2 / 3'],
        ['> 10 joints（至少 1 small）', '5'],
        ['RF、ACPA 皆陰性 / low-positive / high-positive (> 3x ULN)', '0 / 2 / 3'],
        ['CRP 或 ESR 異常', '1'],
        ['Duration >= 6 週', '1']
      ]
    },
    note: 'Small joints：MCP、PIP、thumb IP、MTP 2-5、wrists'
  },
  {
    id: 'ra-serology',
    title: 'RA serology 與影像',
    points: [
      '**IgM RF** ~75%；也見於 Sjögren’s、SLE、cryoglobulinemia、**SBE、HBV、HCV**，健康人 1-5%',
      '**Anti-CCP**：sensitivity 相近，**specificity ~95%**；最能預測 worse outcome',
      'HCV arthropathy：RF 常陽性，**ACPA 通常陰性**',
      'Synovial fluid WBC 5,000-50,000，neutrophil 為主（OA < 2,000）',
      'X-ray：periarticular osteopenia、symmetric joint space loss、marginal erosion；足部常先侵犯**第 5 MTP 外側**',
      'MRI **bone marrow edema** 預測 erosion；US + power Doppler 看 synovitis'
    ]
  },
  {
    id: 'ra-dmard',
    title: 'Conventional DMARDs',
    table: {
      head: ['藥物', '重點'],
      rows: [
        ['**Methotrexate**', '**每週一次** 10-25 mg + **folic acid**；anchor drug；肝、骨髓、**肺炎**；pregnancy X'],
        ['Leflunomide', '10-20 mg/day；肝、骨髓；pregnancy X'],
        ['Sulfasalazine', '先驗 **G6PD**；granulocytopenia'],
        ['Hydroxychloroquine', '<= 5 mg/kg；眼科追蹤；**不延緩 radiographic progression**']
      ]
    },
    points: [
      'MTX 前：CBC、LFT、Cr、**HBV/HCV**、CXR',
      '老年人 MTX 依腎功能減量',
      '起效 6-12 週 -> 可用低劑量 GC bridging'
    ]
  },
  {
    id: 'ra-biologic',
    title: 'Biologics 與 JAK inhibitors',
    table: {
      head: ['藥物', '注意'],
      rows: [
        ['**TNFi**', '前篩 **LTBI**（陽性先治療 >= 1 個月）；禁：active infection、**chronic HBV**、**NYHA III/IV CHF**'],
        ['Abatacept', '阻斷 CD28-CD80/86'],
        ['Rituximab', 'Seropositive 較有效；**HBV reactivation**'],
        ['Tocilizumab、sarilumab', '**LDL 上升**、cytopenia、**GI perforation**（diverticulitis 史避免）'],
        ['JAKi', 'Herpes zoster；tofacitinib：**thrombosis、MACE、malignancy**（老年最高）']
      ]
    }
  },
  {
    id: 'ra-t2t',
    title: 'Treat-to-target',
    points: [
      '目標：**low disease activity 或 remission**',
      '**MTX 起始** -> 3-6 個月未達標 -> **step up**',
      'Step up：oral triple therapy（MTX + SSZ + HCQ）、MTX + leflunomide、**MTX + TNFi**、non-TNF biologic',
      'TNFi 失敗：換另一 TNFi 或不同機轉',
      'Remission：TJC、SJC、CRP (mg/dL)、patient global 皆 <= 1，或 **SDAI <= 3.3**',
      '完全停 DMARD 幾乎必復發；避免長期 GC'
    ]
  },
  {
    id: 'ra-extra',
    title: 'RA extraarticular',
    points: [
      '危險因子：**吸菸**、RF/ACPA(+)、早期 disability',
      'Nodules 30-40%；**MTX 可加速 nodulosis**',
      'Pleuritis 最常見肺表現；**ILD** 最多 12%（UIP、NSIP）；Caplan’s = nodules + silica',
      '**Felty’s**：neutropenia + splenomegaly + nodular RA；T-LGL 類似但可早期出現',
      'Rheumatoid vasculitis：long-standing、seropositive、**低補體**；mononeuritis multiplex',
      '發燒 > 38.3 度：想 vasculitis 或 infection',
      '**Atlantoaxial subluxation**：術前插管要評估',
      '**最常見死因：cardiovascular**；osteoporosis 約 2 倍'
    ]
  }
]);

RPG.registerCase({
  id: 'ra-01',
  chapter: '370',
  title: '扣不上的鈕扣',
  patient: '45 歲女性 · 會計師',
  summary: '三個月來早上雙手僵硬，要一個多小時才能扣鈕扣。',
  cards: ['ra-path', 'ra-criteria', 'ra-serology', 'ra-dmard', 'ra-biologic', 'ra-t2t'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '黃小姐把手放在桌上，手指關節看起來有點腫。',
        '「三個月了。早上起來手很僵，要一個多小時才能扣鈕扣，動一動才比較好。最近連拿杯子都會痛。」'
      ],
      clue: '45F；雙手痛 3 個月；**morning stiffness > 1 小時**，活動後改善',
      choices: [{ label: '繼續問診', next: 'hx_hub' }]
    },
    hx_hub: {
      text: '你繼續問。',
      choices: [
        { label: '問其他關節與分布', next: 'hx_joint', once: true },
        { label: '問皮膚、眼睛、口乾、腸胃、背痛', next: 'hx_ros', once: true },
        { label: '問抽菸、家族史、感染史', next: 'hx_social', once: true },
        { label: '開始理學檢查', next: 'exam', pin: true }
      ]
    },
    hx_joint: {
      text: '「兩隻手都會，左右差不多。腳掌前面走路也會痛。膝蓋還好，背不痛。」',
      clue: '**Symmetric**；手 + 前足；無背痛',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_ros: {
      text: '沒有皮疹或乾癬，沒有眼睛紅痛，沒有明顯口乾眼乾，沒有腹瀉或血便，沒有發燒。最近容易累。',
      clue: '無 psoriasis、IBD、sicca、發燒',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_social: {
      text: '抽菸 20 年，一天半包。阿姨有「類風濕」。最近沒有感冒或腸胃炎。',
      clue: '**Smoker** 10 pack-years；家族史 RA',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    exam: {
      text: '你請她把雙手放在檢查桌上。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'hand', group: '關節', label: '雙手 MCP、PIP、DIP', key: true, reveal: true,
            result: '雙側 MCP 2-4、PIP 2-3 **腫脹壓痛**（共 10 個）；**DIP 正常**', clue: '**10 small joints** synovitis；DIP 正常',
            miss: '主訴手痛，手部關節要一個一個檢查，數清楚幾個。' },
          { id: 'wrist', group: '關節', label: '手腕', result: '雙側輕度腫脹', clue: '雙腕 synovitis' },
          { id: 'mtp', group: '關節', label: 'MTP squeeze test', key: true, reveal: true,
            result: '雙側 **squeeze test 陽性**', clue: 'MTP squeeze test (+)',
            miss: '她說腳掌前面痛，RA 常早期侵犯 MTP，要做 squeeze test。' },
          { id: 'knee', group: '關節', label: '膝、肩、肘', result: '無腫脹' },
          { id: 'spine', group: '關節', label: '腰椎與薦腸關節', result: '無壓痛，活動正常' },
          { id: 'skin', group: '皮膚', label: '皮膚、指甲、頭皮', key: true, reveal: true,
            result: '無 psoriasis、無 nail pitting', clue: '無 psoriasis、nail pitting',
            miss: '多關節炎要看有沒有乾癬或指甲凹陷，排除 PsA。' },
          { id: 'nodule', group: '皮膚', label: '前臂伸側、手肘（nodules）', result: '無 nodules' },
          { id: 'eye', group: '其他', label: '眼睛', result: '正常' },
          { id: 'lung', group: '其他', label: '肺部聽診', result: '清晰' },
          { id: 'dre', group: '其他', label: '肛門指診', result: '無異常', waste: '這不是需要肛門指診的情境。' }
        ]
      }
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'score',
        options: [
          { id: 'rf', group: '免疫', label: 'Rheumatoid factor', key: true, reveal: true,
            result: '45 IU/mL（ULN 14）', clue: 'RF 45（> 3x ULN）',
            miss: 'RF 是 RA 分類標準的一部分。' },
          { id: 'ccp', group: '免疫', label: 'Anti-CCP', key: true, reveal: true,
            result: '**> 200** U/mL（高陽性）', clue: '**Anti-CCP 高陽性**',
            miss: 'Anti-CCP specificity ~95%，還能預測 erosion，一定要驗。' },
          { id: 'ana', group: '免疫', label: 'ANA', result: '1:80 speckled' },
          { id: 'b27', group: '免疫', label: 'HLA-B27', result: '陰性',
            waste: '沒有背痛、enthesitis、uveitis，對稱小關節炎不需要驗 HLA-B27。' },
          { id: 'uric', group: '血液', label: 'Uric acid', result: '5.2 mg/dL' },
          { id: 'esr', group: '血液', label: 'ESR、CRP', key: true, reveal: true,
            result: 'ESR 48；CRP **2.4** mg/dL', clue: 'CRP 2.4、ESR 48',
            miss: 'Acute-phase reactants 是分類標準與疾病活性的一部分。' },
          { id: 'cbc', group: '血液', label: 'CBC', key: true, reveal: true,
            result: 'Hb 11.2（normocytic）；WBC 7,800；PLT 420k', clue: 'Normocytic anemia；thrombocytosis',
            miss: '準備開 DMARD，baseline CBC 必要。' },
          { id: 'lftcr', group: '血液', label: 'AST、ALT、Cr', key: true, reveal: true,
            result: '正常', clue: '肝腎功能正常',
            miss: 'MTX 前一定要知道肝腎功能。' },
          { id: 'hep', group: '血液', label: 'HBsAg、anti-HBc、anti-HCV', key: true, reveal: true,
            result: '皆陰性', clue: 'HBV、HCV 陰性',
            miss: 'MTX 前要篩病毒性肝炎；HCV 也可造成 RF 陽性的關節炎。' },
          { id: 'xr', group: '影像', label: 'Hands and feet X-ray', key: true, reveal: true,
            result: 'Periarticular osteopenia；**右側第 5 MTP 外側小 erosion**', clue: '**Erosion：右第 5 MTP**',
            miss: 'Baseline X-ray 用來評估已有的 damage，之後追蹤進展。' },
          { id: 'cxr', group: '影像', label: 'Chest X-ray', result: '正常', clue: 'CXR 正常（MTX baseline）' },
          { id: 'mri', group: '影像', label: 'Hand MRI', result: 'Synovitis；bone marrow edema',
            waste: '診斷已經很清楚，MRI 不會改變處置。' }
        ]
      }
    },
    score: {
      text: '算一下 2010 ACR/EULAR criteria：10 個 small joints 加雙腕（> 10 joints）5 分、anti-CCP 高陽性 3 分、CRP 異常 1 分、>= 6 週 1 分，共 **10 分**。已經有 erosion，anti-CCP 高陽性，又抽菸。',
      clue: '2010 criteria **10/10**；預後不良因子多',
      choices: [{ label: '決定初始治療', next: 'tx' }]
    },
    tx: {
      text: '初始治療？',
      choices: [
        { label: '**MTX** 每週一次（逐步加量到 20-25 mg）+ folic acid；短期低劑量 prednisone bridging；建議戒菸', next: 'tx_ok' },
        { label: 'NSAID 止痛，三個月後再看', next: 'tx_nsaid' },
        { label: 'Prednisone 10 mg/day 長期維持', next: 'tx_gc' },
        { label: 'MTX 每天 15 mg', next: 'tx_daily' }
      ]
    },
    tx_nsaid: {
      text: '主治醫師搖頭。',
      feedback: 'NSAID 只是輔助止痛，不會阻止 damage。她已經有 erosion，要早期、積極地開始 DMARD。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_gc: {
      text: '主治醫師搖頭。',
      feedback: 'GC 可以在 DMARD 起效前短期 bridging，但長期使用要盡量避免：osteoporosis、感染、CV risk、prednisone 長期使用也是死亡率增加的因子。核心是 DMARD。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_daily: {
      text: '藥師立刻打電話來。',
      feedback: 'MTX 治療 RA 是**每週一次**。每天給是常見而且致命的錯誤（骨髓抑制、黏膜炎）。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_ok: {
      text: [
        '三個月後，MTX 已加到每週 25 mg。黃小姐說好一些，但仍有 6 個關節腫，CRP 1.2，CDAI 仍在 moderate activity。她已經戒菸了。',
        '接下來呢？'
      ],
      clue: 'MTX 25 mg/week x 3 個月：仍 **moderate activity**',
      choices: [
        { label: '**Step up**：加上 TNF inhibitor（或改 oral triple therapy）', next: 'prebio' },
        { label: 'MTX 才用三個月，再等半年看看', next: 'stepup_wait' },
        { label: '加 prednisone 10 mg 長期控制', next: 'stepup_gc' }
      ]
    },
    stepup_wait: {
      text: '主治醫師搖頭。',
      feedback: 'Treat-to-target：3-6 個月未達標就要調整。持續 moderate activity 會持續造成 damage。',
      choices: [{ label: '重新決定', next: 'tx_ok' }]
    },
    stepup_gc: {
      text: '主治醫師搖頭。',
      feedback: '應該升級 DMARD，而不是用長期類固醇補。',
      choices: [{ label: '重新決定', next: 'tx_ok' }]
    },
    prebio: {
      text: '決定加上 adalimumab。開始前要做哪些篩檢？',
      checklist: {
        prompt: 'Biologic 前篩檢：勾選你要的項目',
        submit: '送出',
        next: 'ltbi',
        options: [
          { id: 'igra', group: '感染', label: 'IGRA（或 PPD）', key: true, reveal: true,
            result: '**陽性**', clue: '**IGRA (+)**（latent TB）',
            miss: 'TNFi 會讓 latent TB 再活化，開始前一定要篩。' },
          { id: 'cxr', group: '感染', label: 'Chest X-ray', key: true, reveal: true,
            result: '無活動性病灶', clue: 'CXR 無 active TB',
            miss: 'IGRA 陽性時要用 CXR 排除 active TB。' },
          { id: 'hbv', group: '感染', label: 'HBsAg、anti-HBc（重驗）', key: true, reveal: true,
            result: '陰性', clue: 'HBV 陰性',
            miss: 'Chronic HBV 是 TNFi 的禁忌，biologic 前要確認。' },
          { id: 'hiv', group: '感染', label: 'Anti-HIV', result: '陰性' },
          { id: 'echo', group: '心臟', label: 'Echocardiography', result: 'LVEF 65%',
            waste: '她沒有心衰竭的症狀或病史，不需要常規 echo。' },
          { id: 'lipid', group: '其他', label: 'Lipid panel', result: 'LDL 118' },
          { id: 'pet', group: '其他', label: 'PET-CT 篩檢腫瘤', result: '無異常',
            waste: 'Biologic 前不需要 PET-CT。' }
        ]
      }
    },
    ltbi: {
      text: 'IGRA 陽性，CXR 沒有 active TB。下一步？',
      choices: [
        { label: '先治療 **latent TB**，至少 1 個月後再開始 adalimumab', next: 'end_good' },
        { label: 'CXR 正常就沒事，直接開始 adalimumab', next: 'end_tb' },
        { label: 'IGRA 陽性就永遠不能用 biologic', next: 'ltbi_never' }
      ]
    },
    ltbi_never: {
      text: '主治醫師笑了。',
      feedback: '沒那麼絕對。Latent TB 先治療至少 1 個月，之後就可以開始 TNFi。',
      choices: [{ label: '重新決定', next: 'ltbi' }]
    },
    end_good: {
      text: '開始 isoniazid 一個月後加上 adalimumab。半年後黃小姐只剩 1 個關節輕微壓痛，CRP 正常，SDAI 2.8。X-ray 沒有新的 erosion。',
      ending: {
        grade: 'good',
        title: 'Seropositive erosive RA，達到 remission',
        pearls: [
          'Morning stiffness > 1 h + symmetric small joints；DIP 正常',
          'Anti-CCP 高陽性 + erosion + 吸菸 = 預後不良',
          'MTX 每週一次 + folic acid；3-6 個月未達標就 step up',
          'TNFi 前篩 LTBI 與 HBV；LTBI 先治療 >= 1 個月'
        ]
      }
    },
    end_tb: {
      text: '四個月後，黃小姐發燒、盜汗、體重減輕，胸部 CT 顯示瀰漫性小結節：**miliary TB**。',
      ending: {
        grade: 'bad',
        title: 'TNFi 後 TB 再活化',
        pearls: [
          'IGRA 陽性 = latent TB，CXR 正常不代表可以直接用 TNFi',
          'Latent TB 先治療至少 1 個月再開始 TNFi'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ra-02',
  chapter: '370',
  title: '越來越喘的老菸槍',
  patient: '63 歲男性 · RA 第 12 年',
  summary: 'RA 控制得還可以，但這半年爬樓梯越來越喘，一直乾咳。',
  cards: ['ra-path', 'ra-extra', 'ra-dmard'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '林先生 RA 十二年，目前用 MTX 每週 15 mg、prednisone 5 mg。關節還算穩定。',
        '「醫生，這半年爬兩層樓就喘，一直乾咳，沒有痰。」他抽菸四十年，最近才開始戒。'
      ],
      clue: ['63M；seropositive RA 12 年；MTX 15 mg/week', '6 個月漸進性 **exertional dyspnea + dry cough**；重度吸菸'],
      choices: [{ label: '繼續問診', next: 'hx' }]
    },
    hx: {
      text: '沒有發燒、沒有胸痛、沒有下肢水腫、沒有夜間端坐呼吸。MTX 已經用了八年，劑量最近沒有調整。沒有接觸粉塵或礦場工作史。',
      clue: '無發燒；無心衰竭症狀；MTX 劑量穩定 8 年',
      feedback: '慢性、漸進、無發燒，比較不像急性 MTX pneumonitis 或感染。',
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你拿起聽診器。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'vitals', group: '一般', label: '生命徵象與 SpO2（含行走後）', key: true, reveal: true,
            result: 'BT 36.8；SpO2 靜止 94%，**走路後降到 87%**', clue: '**Exertional desaturation** 94% -> 87%',
            miss: '喘的病人要量 SpO2，最好加上活動後。' },
          { id: 'lung', group: '胸部', label: '肺部聽診', key: true, reveal: true,
            result: '雙側下肺 **fine inspiratory crackles（velcro）**', clue: '**Bibasilar velcro crackles**',
            miss: '喘一定要聽肺。' },
          { id: 'clubbing', group: '胸部', label: '杵狀指', result: '輕度 clubbing', clue: 'Mild clubbing' },
          { id: 'heart', group: '胸部', label: '心臟聽診、JVP', key: true, reveal: true,
            result: 'Regular；JVP 不高；無 S3', clue: '無心衰竭徵象',
            miss: '喘要排除心臟原因。' },
          { id: 'edema', group: '四肢', label: '下肢水腫', result: '無' },
          { id: 'joint', group: '四肢', label: '關節', result: '雙手 ulnar deviation，僅 1 個 MCP 輕度腫脹', clue: 'RA 關節活性低' },
          { id: 'nodule', group: '四肢', label: '肘部 nodules', result: '右肘一顆 rheumatoid nodule' },
          { id: 'abd', group: '腹部', label: '腹部觸診', result: '無異常' }
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
          { id: 'hrct', group: '影像', label: 'HRCT chest', key: true, reveal: true,
            result: '下肺周邊 **reticulation + honeycombing**、traction bronchiectasis（**UIP pattern**）', clue: '**HRCT：UIP pattern**',
            miss: 'RA-ILD 要用 HRCT 診斷。' },
          { id: 'cxr', group: '影像', label: 'Chest X-ray', result: '雙下肺網狀陰影' },
          { id: 'pft', group: '肺功能', label: 'PFT + DLCO', key: true, reveal: true,
            result: 'FVC 68%（**restrictive**）；**DLCO 52%**', clue: 'Restrictive + **DLCO 下降**',
            miss: 'PFT 確認 restrictive pattern 與 DLCO，也是之後追蹤的 baseline。' },
          { id: 'cbc', group: '血液', label: 'CBC', result: '正常' },
          { id: 'crp', group: '血液', label: 'CRP', result: '0.6 mg/dL' },
          { id: 'bnp', group: '血液', label: 'NT-proBNP', result: '正常' },
          { id: 'pct', group: '感染', label: 'Procalcitonin', result: '< 0.05' },
          { id: 'sputum', group: '感染', label: 'Sputum culture', result: '無法咳出痰',
            waste: '乾咳、無發燒，痰培養意義不大。' },
          { id: 'echo', group: '心臟', label: 'Echocardiography', result: 'LVEF 60%；RVSP 32 mmHg' },
          { id: 'bx', group: '侵入性', label: 'Surgical lung biopsy', result: '（未執行）',
            waste: 'HRCT 已經是典型 UIP，不需要外科肺切片。' }
        ]
      }
    },
    dx: {
      text: '慢性漸進的喘、velcro crackles、HRCT UIP、restrictive + DLCO 下降。診斷是？',
      choices: [
        { label: '**RA-associated ILD**（UIP pattern）', next: 'tx' },
        { label: 'Acute MTX pneumonitis', next: 'dx_mtx' },
        { label: 'Caplan’s syndrome', next: 'dx_caplan' }
      ]
    },
    dx_mtx: {
      text: '主治醫師搖頭。',
      feedback: 'MTX pneumonitis 通常是急性或亞急性，常有發燒，影像比較像 hypersensitivity pneumonitis。他用 MTX 八年、劑量穩定、無發燒、HRCT 是 fibrotic UIP，比較符合 RA-ILD。',
      choices: [{ label: '重新判斷', next: 'dx' }]
    },
    dx_caplan: {
      text: '主治醫師搖頭。',
      feedback: 'Caplan’s 是 pneumoconiosis（silica 等）加上 pulmonary nodules。他沒有職業暴露，影像也是 UIP 而非結節。',
      choices: [{ label: '重新判斷', next: 'dx' }]
    },
    tx: {
      text: '和胸腔科討論治療。',
      choices: [
        { label: '徹底戒菸；GC 加上 **MMF 或 rituximab** 等 immunosuppressant；重新評估 MTX（有肺毒性疑慮）；胸腔科共同追蹤 PFT', next: 'end_good' },
        { label: 'ILD 跟 RA 無關，維持原本治療就好', next: 'tx_ignore' },
        { label: 'MTX 換成 leflunomide 就好', next: 'tx_lef' }
      ]
    },
    tx_ignore: {
      text: '主治醫師搖頭。',
      feedback: 'ILD 是 RA 的 extraarticular manifestation，而且預後不好。需要積極處理。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_lef: {
      text: '主治醫師搖頭。',
      feedback: 'Leflunomide 和 MTX 一樣有肺毒性的疑慮，換過去不能解決問題。RA-ILD 通常用 GC 加 AZA、MMF 或 rituximab。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '六個月後，林先生成功戒菸。FVC 穩定在 70%，行走後 SpO2 維持 91%。關節炎在 rituximab 下也控制住了。',
      ending: {
        grade: 'good',
        title: 'RA-associated ILD',
        pearls: [
          'RA-ILD：最多 12%；吸菸、高活性；可先於關節症狀',
          'HRCT：UIP（honeycomb、周邊下肺）或 NSIP（對稱 GGO）',
          'PFT：restrictive + DLCO 下降；預後差但比 IPF 好',
          '治療：GC + AZA、MMF 或 rituximab；MTX、leflunomide 有肺毒性'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ra-03',
  chapter: '370',
  title: '換膝關節之前',
  patient: '71 歲女性 · RA 第 30 年',
  summary: '下週要做全膝關節置換，麻醉科請你做術前評估。',
  cards: ['ra-path', 'ra-extra'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '陳奶奶 RA 三十年，早期沒有好好治療，雙手嚴重變形。下週要做右膝 total knee arthroplasty。',
        '麻醉科會診：「請評估 RA 相關的麻醉風險。」'
      ],
      clue: '71F；long-standing RA 30 年；預計 TKA',
      choices: [{ label: '問診', next: 'hx' }]
    },
    hx: {
      text: [
        '「最近半年後腦勺常常痛，脖子往前彎的時候，手會像觸電一樣麻。」',
        '「扣鈕扣越來越不靈活，以為是手變形的關係。」',
        '她長期吃 prednisone 7.5 mg，已經十幾年了。去年跌倒手腕骨折過一次。'
      ],
      clue: ['**Occipital headache**；頸部前屈時手部觸電感', '手部靈巧度下降', '長期 prednisone 7.5 mg；去年 **fragility fracture**'],
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你開始檢查。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'img',
        options: [
          { id: 'neuro', group: '神經', label: '上下肢神經學檢查（肌力、反射、Hoffmann、Babinski）', key: true, reveal: true,
            result: '四肢反射**亢進**；**Hoffmann sign 雙側陽性**；Babinski 右側陽性', clue: '**UMN signs**：hyperreflexia、Hoffmann (+)',
            miss: '頸部前屈手麻、手不靈巧，要找 cervical myelopathy 的上運動神經元徵象。' },
          { id: 'neck', group: '神經', label: '頸椎活動度', result: '旋轉受限' },
          { id: 'hand', group: '關節', label: '雙手', result: 'Ulnar deviation、swan-neck deformities' },
          { id: 'knee', group: '關節', label: '右膝', result: 'Valgus deformity，活動受限' },
          { id: 'skin', group: '其他', label: '皮膚', result: '薄、易瘀青（長期 steroid）' },
          { id: 'eye', group: '其他', label: '眼睛', result: '雙側 cataract' },
          { id: 'dre', group: '其他', label: '肛門指診', result: '無異常', waste: '跟這次評估無關。' }
        ]
      }
    },
    img: {
      text: '要安排什麼檢查？',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出',
        next: 'dx',
        options: [
          { id: 'cflex', group: '影像', label: 'Cervical spine X-ray（flexion/extension）', key: true, reveal: true,
            result: 'Atlantodental interval：**屈曲時 9 mm**', clue: '**Atlantoaxial subluxation**（ADI 9 mm）',
            miss: 'RA 病人插管前要評估 C1-C2，flexion/extension view 是基本。' },
          { id: 'cmri', group: '影像', label: 'Cervical spine MRI', key: true, reveal: true,
            result: 'C1-C2 pannus，**脊髓受壓**', clue: 'MRI：C1-C2 pannus + **cord compression**',
            miss: '有神經學徵象，要用 MRI 看脊髓。' },
          { id: 'dexa', group: '骨骼', label: 'DXA', key: true, reveal: true,
            result: 'Femoral neck T-score **-3.1**', clue: 'Osteoporosis（T -3.1）',
            miss: '長期 steroid + fragility fracture，一定要評估骨密度。' },
          { id: 'tl', group: '影像', label: 'Thoracolumbar spine MRI', result: '退化性變化',
            waste: 'RA 很少侵犯 thoracic、lumbar spine，症狀也指向頸椎。' },
          { id: 'cbc', group: '血液', label: 'CBC', result: 'Hb 11.0；WBC 6,100' },
          { id: 'crp', group: '血液', label: 'CRP', result: '0.8 mg/dL' }
        ]
      }
    },
    dx: {
      text: 'C1-C2 subluxation 合併 cord compression。手術怎麼辦？',
      choices: [
        { label: '先暫停 TKA；轉介脊椎外科評估 C1-C2 固定；告知麻醉科避免頸部過度伸展（考慮 fiberoptic intubation）', next: 'osteo' },
        { label: '照原計畫開刀，麻醉時小心一點就好', next: 'end_bad' }
      ]
    },
    osteo: {
      text: '另外，她的骨質疏鬆怎麼處理？',
      choices: [
        { label: '開始 **bisphosphonate**（或 denosumab），補充 calcium、vitamin D；盡量降低 prednisone', next: 'end_good' },
        { label: '補充鈣片就夠了', next: 'osteo_ca' }
      ]
    },
    osteo_ca: {
      text: '主治醫師搖頭。',
      feedback: '長期 steroid、已有 fragility fracture、T-score -3.1，需要藥物治療：bisphosphonate、denosumab 或 teriparatide。',
      choices: [{ label: '重新決定', next: 'osteo' }]
    },
    end_good: {
      text: '陳奶奶先接受 C1-C2 posterior fusion，三個月後順利完成 TKA，麻醉採 fiberoptic intubation。手麻改善了。',
      ending: {
        grade: 'good',
        title: 'Atlantoaxial subluxation',
        pearls: [
          'Long-standing RA：C1-C2 subluxation 可造成 compressive myelopathy',
          '神經症狀緩慢進展，常被誤以為是手部變形',
          '術前插管前評估頸椎（flexion/extension X-ray、MRI）',
          'RA osteoporosis 約 2 倍；長期 GC -> bisphosphonate 等治療'
        ]
      }
    },
    end_bad: {
      text: '術後陳奶奶醒來時四肢無力。MRI 顯示 C1-C2 脊髓壓迫加劇，插管時頸部過度伸展所致。',
      ending: {
        grade: 'bad',
        title: '插管後 cervical cord injury',
        pearls: [
          'RA 病人有 UMN signs 或頸部症狀，術前一定要評估 C1-C2',
          '已有 cord compression 應先處理頸椎，再做 elective surgery'
        ]
      }
    }
  }
});
