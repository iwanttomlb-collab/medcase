// Ch 374 Spondyloarthritis. Source notes: notes/374-spa.md

RPG.registerCards('374', [
  {
    id: 'spa-path',
    title: 'Spondyloarthritis 致病機轉',
    points: [
      '**HLA-B27**（MHC class I）最強遺傳因子；B*2704、B*2705 有風險，B*2706、B*2709 沒有',
      'B27 三種理論：(1) **arthritogenic peptide** 呈現給 CD8+ T（mimicry）；(2) **B27 homodimers** 結合 KIR3DL2 -> IL-17；(3) **unfolded protein response** -> IL-23',
      '其他基因：**IL23R**（各型共享）、**ERAP1**（與 B27 epistasis）、HLA-Cw6（PsA）',
      'B27(+) 者只有少數發病 -> 需要誘因：**腸道屏障破壞 + dysbiosis**（ReA、IBD；germ-free B27 rat 不發病）、urogenital（Chlamydia）、皮膚微生物（PsA）',
      '**Mechanical stress** 造成 enthesis 微損傷 -> 發炎（enthesitis 多在下肢）',
      '核心 cytokines：**TNF**（所有 domain 有效）、**IL-17**（axSpA、PsA 有效，**IBD 禁用**）、**IL-23**（IBD、PsA 有效，**axSpA 無效**）',
      '**骨流失與病理性新骨並存**：PGE2、IL-17、IL-22 -> BMP、Wnt -> syndesmophytes、ankylosis（bamboo spine）'
    ],
    refs: ['Harrison’s Ch 374（Pathogenesis）']
  },
  {
    id: 'ibp',
    title: 'Inflammatory vs mechanical back pain',
    table: {
      head: ['', 'Inflammatory', 'Mechanical'],
      rows: [
        ['發病年齡', '**< 40-45 歲**', '20-65 歲'],
        ['Onset', 'Insidious', 'Acute 或 insidious'],
        ['晨僵', '**> 30 分鐘**', '< 30 分鐘'],
        ['夜間痛', '**有，午夜後**', '無'],
        ['運動', '**改善**', '加重'],
        ['休息', '**加重**', '改善'],
        ['全劑量 NSAID', '**48 h 內緩解 > 50%**', '有限']
      ]
    },
    note: '只有 15% IBP 真的有 axial inflammation；axSpA 只佔 chronic back pain 4-5%'
  },
  {
    id: 'axspa-dx',
    title: 'axSpA 診斷與影像',
    points: [
      '**HLA-B27**：r-axSpA 85-90%、一般人 ~5%；B27(+) 一般人風險 5%、B27(+) 親屬 20%',
      'ESR/CRP 只在 **30-40%** active axSpA 上升',
      '**AP pelvis**（或 Ferguson）看 SI；**避免 spine X-ray**',
      'r-axSpA：雙側 grade >= 2 或 grade 3-4；否則 nr-axSpA',
      'X-ray 陰性 -> **MRI SI**（bone marrow edema、fat metaplasia、erosion）；運動員、產後也可有 edema，避免過度診斷',
      'Syndesmophytes **垂直**（vs OA osteophytes 水平）；Romanus lesions、squaring',
      '**DISH**：flowing osteophytes、**SI 正常**；**OCI**：經產婦 iliac 側三角形硬化、無 erosion'
    ]
  },
  {
    id: 'axspa-extra',
    title: 'axSpA 關節外表現與併發症',
    points: [
      '**Acute anterior uveitis 40%**：unilateral、episodic、photophobia',
      'IBD 10%（subclinical 最多 50%）；psoriasis 10%',
      'Osteoporosis；**vertebral fracture ~10%，下頸椎**；背痛性質改變要想 fracture',
      'Aortic regurgitation、conduction block；apical fibrosis',
      'IgA nephropathy、AA amyloidosis；cauda equina syndrome',
      'Peripheral arthritis 30-40%（hip 最常見）；enthesitis'
    ]
  },
  {
    id: 'axspa-tx',
    title: 'axSpA 治療',
    points: [
      '**運動、PT**；戒菸',
      '**NSAID 最高耐受劑量持續**；**4 週**仍 active -> **TNFi 或 IL-17i**',
      'csDMARD（SSZ、MTX）只對周邊關節、enthesis 有效，**對 axial 無效**',
      '**Systemic GC 無效**；下肢承重 enthesis 不打 GC',
      '**Uveitis 或 IBD -> TNF monoclonal antibody**（不用 etanercept）',
      'TNFi primary failure -> IL-17i 或 JAKi；secondary failure -> 換另一 TNFi',
      '開 biologic 前篩 **LTBI、HBV、HCV**',
      'IL-17i：Candida、**IBD 新發/惡化**；JAKi：zoster、MACE（TNFi 失敗後）'
    ]
  },
  {
    id: 'psa',
    title: 'Psoriatic arthritis',
    points: [
      'Psoriasis 病人 ~30%；**80% 皮膚先發**、10% 關節先發',
      '**DIP**、**dactylitis**、enthesitis（heel）、**nail 近 90%**（pitting、onycholysis）',
      '隱藏 psoriasis：scalp、umbilicus、natal cleft、乳房下、只有指甲',
      'X-ray：**pencil-in-cup**、erosion + **fluffy new bone**、ray 分布、無 periarticular osteopenia',
      'RF 通常陰性；HLA-B27 20%（axial 50%）',
      '**CASPAR >= 3**：current psoriasis 2、history/family 1、nail 1、**RF(-) 1**、dactylitis 1、new bone 1',
      'CVD 風險如糖尿病；metabolic syndrome'
    ]
  },
  {
    id: 'psa-tx',
    title: 'PsA 治療選擇',
    points: [
      'Systemic GC 避免；local GC 可（下肢承重 enthesis 除外）',
      '**明顯 psoriasis -> MTX** 優先（csDMARD）；apremilast、deucravacitinib 可作初始（非 axial）',
      '**Axial 為主：不用 csDMARD**，直接 bDMARD 或 JAKi',
      '**皮膚為主 -> IL-17、IL-12/23、IL-23 inhibitors** 優於 TNFi',
      '**IBD -> TNF mAb、IL-23、JAKi；避免 IL-17i**',
      '**Uveitis -> TNF mAb**',
      'Abatacept：對皮膚、指甲、axial 無效'
    ]
  },
  {
    id: 'rea',
    title: 'Reactive arthritis',
    points: [
      'GU（**Chlamydia**）或 GI（Salmonella、Shigella、Yersinia、Campylobacter）感染後 **1 天-4 週**',
      'Asymmetric 下肢 oligoarthritis、enthesitis、dactylitis',
      'Conjunctivitis/uveitis、**circinate balanitis**、**keratoderma blennorrhagica**、oral ulcers',
      '**HLA-B27 50-80%**；與 chronicity 相關',
      '**所有病人篩 Chlamydia**；抽關節液排除 septic、crystal',
      '治療：**NSAIDs、IA GC**；**不常規長期抗生素**；chronic -> SSZ、MTX、TNFi'
    ]
  }
]);

RPG.registerCase({
  id: 'spa-01',
  chapter: '374',
  title: '半夜痛醒的工程師',
  patient: '27 歲男性 · 軟體工程師',
  summary: '兩年來下背痛，半夜會痛醒，起來走一走反而好。',
  cards: ['spa-path', 'ibp', 'axspa-dx', 'axspa-extra', 'axspa-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '王先生揉著屁股坐下。「下背和屁股痛兩年了，看過骨科、做過復健都沒用。」',
        '「奇怪的是，半夜三四點會痛醒，起床走一走反而比較好。早上要一個小時才鬆開。」'
      ],
      clue: ['27M；下背 + 臀部痛 **2 年**', '**午夜後痛醒**、活動改善；晨僵 ~1 小時'],
      choices: [{ label: '繼續問診', next: 'hx_hub' }]
    },
    hx_hub: {
      text: '你想把背痛的性質問清楚，也找找其他線索。',
      choices: [
        { label: '問止痛藥的效果', next: 'hx_nsaid', once: true },
        { label: '問眼睛、腸胃、皮膚', next: 'hx_extra', once: true },
        { label: '問腳跟、其他關節', next: 'hx_joint', once: true },
        { label: '問家族史', next: 'hx_fam', once: true },
        { label: '開始理學檢查', next: 'exam', pin: true }
      ]
    },
    hx_nsaid: {
      text: '「吃 naproxen 的那幾天，隔天就好很多，大概好一半以上。但我怕傷胃，都只吃一兩天。」',
      clue: '**NSAID 48 小時內明顯緩解**',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_extra: {
      text: '「去年右眼突然很紅、很痛、怕光，眼科說是**虹膜炎**，點藥水好了。」沒有腹瀉血便，沒有皮疹。',
      clue: '去年右眼 **acute anterior uveitis**',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_joint: {
      text: '「早上下床時左腳跟很痛，走幾步才好。其他關節還好。」',
      clue: 'Heel pain（**enthesitis**）',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_fam: {
      text: '「我叔叔駝背很嚴重，好像也是什麼脊椎炎。」',
      clue: '叔叔疑似 AS',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    exam: {
      text: '你請他站起來。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'schober', group: '脊椎', label: 'Modified Schober test、腰椎側彎', key: true, reveal: true,
            result: 'Schober **3.5 cm**（正常 >= 5 cm）；側彎受限', clue: '**Lumbar mobility 受限**',
            miss: 'axSpA 要評估脊椎活動度，這也是 modified New York 的 clinical criteria。' },
          { id: 'chest', group: '脊椎', label: 'Chest expansion', result: '4 cm（輕度下降）' },
          { id: 'si', group: '脊椎', label: 'SI joint 壓痛、FABER', key: true, reveal: true,
            result: '雙側 SI joint 壓痛；FABER 誘發臀部痛', clue: 'SI joint tenderness',
            miss: '臀部痛要檢查 SI joint。' },
          { id: 'heel', group: '周邊', label: 'Achilles 與 plantar fascia 附著處', key: true, reveal: true,
            result: '左側 **plantar fascia 跟骨附著處壓痛**', clue: '**Enthesitis**（plantar fascia）',
            miss: '他說腳跟痛，要檢查 enthesis。' },
          { id: 'joint', group: '周邊', label: '周邊關節', result: '無 synovitis' },
          { id: 'skin', group: '其他', label: '皮膚、指甲、頭皮、臍、臀溝', result: '無 psoriasis' },
          { id: 'eye', group: '其他', label: '眼睛', result: '目前無發紅' },
          { id: 'heart', group: '其他', label: '心臟聽診', result: '正常' },
          { id: 'neuro', group: '其他', label: '下肢神經學檢查', result: '正常' },
          { id: 'dre', group: '其他', label: '肛門指診', result: '無異常', waste: '沒有 cauda equina 或其他理由，不需要。' }
        ]
      }
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'mri_q',
        options: [
          { id: 'b27', group: '血液', label: 'HLA-B27', key: true, reveal: true,
            result: '**陽性**', clue: '**HLA-B27 (+)**',
            miss: '懷疑 axSpA，HLA-B27 在 X-ray 不明確時常是關鍵。' },
          { id: 'crp', group: '血液', label: 'ESR、CRP', key: true, reveal: true,
            result: 'ESR 18；CRP **1.4** mg/dL', clue: 'CRP 1.4（輕度上升）',
            miss: 'CRP 是 SpA feature 之一，也用於監測。' },
          { id: 'rf', group: '血液', label: 'RF、anti-CCP', result: '陰性' },
          { id: 'cbc', group: '血液', label: 'CBC、Cr、LFT', result: '正常' },
          { id: 'pelvis', group: '影像', label: 'AP pelvis X-ray（SI joints）', key: true, reveal: true,
            result: '雙側 SI 邊緣輕度模糊，**可疑（grade 1）**', clue: 'Pelvis X-ray：**sacroiliitis grade 1**（不確定）',
            miss: 'SI joint 的第一個影像就是一張 AP pelvis。' },
          { id: 'lspine', group: '影像', label: 'Lumbar spine X-ray（多角度）', result: '正常',
            waste: 'Chronic back pain 一般避免 spine X-ray，早期 axSpA 也看不到東西。' },
          { id: 'bone', group: '影像', label: 'Bone scan', result: 'SI 輕度攝取',
            waste: 'Bone scan 對 axSpA 不敏感也不特異。' }
        ]
      }
    },
    mri_q: {
      text: '典型 IBP、uveitis、enthesitis、HLA-B27、CRP 高、NSAID 反應好，但 X-ray 只有 grade 1。下一步？',
      choices: [
        { label: '**MRI SI joints**（STIR）', next: 'mri' },
        { label: 'X-ray 沒有確定 sacroiliitis，排除 axSpA', next: 'mri_no' }
      ]
    },
    mri_no: {
      text: '主治醫師搖頭。',
      feedback: '沒有 radiographic sacroiliitis 不代表沒有 axSpA，可能是 nr-axSpA。他有 >= 4 個 SpA features，MRI 能看到早期的 bone marrow edema。',
      choices: [{ label: '安排 MRI', next: 'mri' }]
    },
    mri: {
      text: 'MRI：雙側 SI joint 周圍 **bone marrow edema**（STIR 高訊號），左側小 erosions。',
      clue: '**MRI：bilateral SI osteitis + erosions**',
      feedback: '診斷 **nr-axSpA**。治療原則與 r-axSpA 相同。',
      choices: [{ label: '開始治療', next: 'tx1' }]
    },
    tx1: {
      text: '初始治療？',
      choices: [
        { label: '**全劑量 NSAID 持續使用** + 規律運動/PT；4 週後評估', next: 'week4' },
        { label: 'Sulfasalazine 治療脊椎發炎', next: 'tx1_ssz' },
        { label: 'Prednisone 20 mg/day', next: 'tx1_gc' }
      ]
    },
    tx1_ssz: {
      text: '主治醫師搖頭。',
      feedback: 'csDMARD（SSZ、MTX）只對周邊關節與 enthesis 有效，對 axial disease 無效。',
      choices: [{ label: '重新決定', next: 'tx1' }]
    },
    tx1_gc: {
      text: '主治醫師搖頭。',
      feedback: 'Systemic glucocorticoids 在 axSpA 沒有療效，應該避免。',
      choices: [{ label: '重新決定', next: 'tx1' }]
    },
    week4: {
      text: '四週全劑量 naproxen 後，夜間痛改善一些，但 BASDAI 仍 5.8、CRP 1.2。王先生也問：「我的眼睛會不會又發炎？」',
      clue: 'NSAID 4 週後仍 **active**（BASDAI 5.8）',
      choices: [
        { label: '篩 LTBI、HBV、HCV 後開始 **TNF monoclonal antibody（adalimumab）**', next: 'end_good' },
        { label: '開始 etanercept', next: 'eta' },
        { label: '開始 secukinumab', next: 'secu' }
      ]
    },
    eta: {
      text: '主治醫師提醒：',
      feedback: 'Etanercept 是 soluble receptor，對 uveitis 的預防效果不如 monoclonal antibodies。有 uveitis 或 IBD 病史時優先選 TNF mAb。',
      choices: [{ label: '重新決定', next: 'week4' }]
    },
    secu: {
      text: '主治醫師說：「也是合理選項，但⋯⋯」',
      feedback: 'IL-17i 對 axSpA 有效，但他有反覆 uveitis 的風險，TNF monoclonal antibody 對 uveitis 也有幫助，是更好的第一選擇。',
      choices: [{ label: '重新決定', next: 'week4' }]
    },
    end_good: {
      text: 'IGRA、HBV、HCV 都陰性。Adalimumab 三個月後 BASDAI 降到 2.1，他終於可以睡過夜，一年內眼睛沒再發炎。你提醒他戒菸，菸會加速脊椎骨化。',
      ending: {
        grade: 'good',
        title: 'Nonradiographic axial spondyloarthritis',
        pearls: [
          'IBP：< 45 歲、午夜後痛、活動改善、NSAID 48 h 內緩解',
          'X-ray 不確定時：SpA features + HLA-B27 + MRI SI',
          'NSAID 全劑量 4 週無效 -> TNFi 或 IL-17i；csDMARD、systemic GC 對 axial 無效',
          'Uveitis/IBD -> TNF monoclonal antibody'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'spa-02',
  chapter: '374',
  title: '香腸腳趾',
  patient: '44 歲男性 · 廚師',
  summary: '右腳第二趾腫得像香腸，手指末端關節也腫。痛風藥沒有用。',
  cards: ['spa-path', 'psa', 'psa-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '陳師傅脫下鞋子，右腳第二趾整根腫得像一條小香腸。',
        '「診所說是痛風，colchicine 吃了兩個禮拜都沒用。左手食指最末端那節也腫起來了。」'
      ],
      clue: ['44M；右第二趾**整根腫脹**', '左食指 **DIP** 腫', 'Colchicine 無效'],
      choices: [{ label: '問診', next: 'hx' }]
    },
    hx: {
      text: '「皮膚？我頭皮常常脫屑，以為是頭皮屑。爸爸有乾癬。」他身材壯碩，BMI 32，有高血壓、脂肪肝。',
      clue: ['頭皮脫屑；**父親 psoriasis**', 'Obesity、HTN、fatty liver（metabolic syndrome）'],
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
          { id: 'scalp', group: '皮膚', label: '頭皮、耳後', key: true, reveal: true,
            result: '頭皮與髮際線**邊界清楚的紅色鱗屑斑塊**', clue: '**Scalp psoriasis**',
            miss: 'Psoriasis 常藏在頭皮，要找。' },
          { id: 'hidden', group: '皮膚', label: '臍、臀溝、乳房下', result: '臀溝有一塊紅斑鱗屑', clue: 'Natal cleft psoriasis' },
          { id: 'nail', group: '皮膚', label: '指甲', key: true, reveal: true,
            result: '多指 **nail pitting**、**onycholysis**', clue: '**Nail pitting + onycholysis**',
            miss: 'PsA 近 90% 有 nail disease，而且和 DIP 受侵犯相關。' },
          { id: 'hand', group: '關節', label: '手部關節', key: true, reveal: true,
            result: '左食指、右中指 **DIP** 腫脹壓痛；MCP 正常', clue: 'DIP arthritis x 2',
            miss: '主訴有手指腫，要檢查並分辨是 DIP 還是 MCP/PIP。' },
          { id: 'toe', group: '關節', label: '腳趾', result: '右第二趾 **dactylitis**', clue: '**Dactylitis**' },
          { id: 'heel', group: '關節', label: 'Achilles、plantar fascia', result: '右 Achilles 附著處壓痛', clue: 'Achilles enthesitis' },
          { id: 'spine', group: '脊椎', label: '脊椎活動度', result: '正常' },
          { id: 'eye', group: '其他', label: '眼睛', result: '正常' },
          { id: 'tophi', group: '其他', label: '耳廓、肘（tophi）', result: '無 tophi' }
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
          { id: 'rf', group: '血液', label: 'RF、anti-CCP', key: true, reveal: true,
            result: '**皆陰性**', clue: 'RF (-)、anti-CCP (-)',
            miss: 'RF 陰性是 CASPAR 的一分，也幫助排除 RA。' },
          { id: 'ua', group: '血液', label: 'Uric acid', key: true, reveal: true,
            result: '7.4 mg/dL', clue: 'Uric acid 7.4（psoriasis 常見 hyperuricemia）',
            miss: '已經被當作痛風治療，要確認；psoriasis 本身也常有高尿酸。' },
          { id: 'crp', group: '血液', label: 'ESR、CRP', result: 'CRP 2.1 mg/dL' },
          { id: 'met', group: '血液', label: 'Lipid、HbA1c、LFT', result: 'LDL 152；HbA1c 6.3；ALT 68', clue: 'Dyslipidemia、prediabetes、ALT 上升' },
          { id: 'hep', group: '血液', label: 'HBV、HCV', result: '陰性' },
          { id: 'tap', group: '關節液', label: '關節液（若可抽）', result: '趾關節液量太少未抽', },
          { id: 'xr', group: '影像', label: 'Hands and feet X-ray', key: true, reveal: true,
            result: '右第二趾 proximal phalanx **periosteal new bone**；左食指 DIP **marginal erosion + fluffy new bone**，早期 **pencil-in-cup**', clue: '**Erosion + fluffy new bone、pencil-in-cup**',
            miss: 'X-ray 看 erosion 和 new bone formation，是 CASPAR 的一項，也評估嚴重度。' },
          { id: 'b27', group: '血液', label: 'HLA-B27', result: '陰性' },
          { id: 'pet', group: '影像', label: 'PET-CT', result: '多處關節攝取', waste: 'PET 評估 PsA 仍屬實驗性質。' }
        ]
      }
    },
    dx: {
      text: 'CASPAR：current psoriasis 2、nail 1、RF(-) 1、dactylitis 1、juxtaarticular new bone 1 = **6 分**。PsA 確立。皮膚 BSA 約 6%。初始治療？',
      choices: [
        { label: '**Methotrexate**（有明顯 psoriasis）；NSAID 短期；體重控制與 CV risk 管理；3 個月後未達 MDA 再升級', next: 'm3' },
        { label: 'Prednisone 30 mg/day 快速控制', next: 'tx_gc' },
        { label: '在 Achilles 附著處注射 triamcinolone', next: 'tx_inj' }
      ]
    },
    tx_gc: {
      text: '主治醫師搖頭。',
      feedback: 'PsA 應避免 systemic GC，停藥時還可能讓 psoriasis 惡化。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    tx_inj: {
      text: '主治醫師搖頭。',
      feedback: '下肢承重 enthesis（Achilles、plantar fascia）不建議注射 GC，有 tendon rupture 風險。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    m3: {
      text: '三個月後關節稍微好轉，但 dactylitis 仍在、皮膚 BSA 仍 5%，ALT 升到 92。下一步？',
      clue: 'MTX 3 個月：未達 MDA；ALT 92',
      choices: [
        { label: '改用 **IL-17A inhibitor（secukinumab）**：皮膚與關節都有效', next: 'end_good' },
        { label: '加 abatacept', next: 'm3_aba' },
        { label: '加 apremilast 就好', next: 'm3_apr' }
      ]
    },
    m3_aba: {
      text: '主治醫師搖頭。',
      feedback: 'Abatacept 對皮膚、指甲、axial 都沒效，對周邊關節也只有 modest 效果。',
      choices: [{ label: '重新決定', next: 'm3' }]
    },
    m3_apr: {
      text: '主治醫師搖頭。',
      feedback: 'Apremilast 是可以作為初始治療，但他已有 erosion 與持續 dactylitis（嚴重度指標），apremilast 沒有證實能減少 radiographic progression。皮膚為主合併 MSK，IL-17 或 IL-23 inhibitor 是更好的選擇。',
      choices: [{ label: '重新決定', next: 'm3' }]
    },
    end_good: {
      text: '換成 secukinumab 四個月後，腳趾消腫，頭皮幾乎乾淨，達到 minimal disease activity。他也開始在營養師協助下減重。',
      ending: {
        grade: 'good',
        title: 'Psoriatic arthritis',
        pearls: [
          'Dactylitis、DIP、nail disease；隱藏 psoriasis（頭皮、臀溝）',
          'CASPAR >= 3；X-ray erosion + fluffy new bone、pencil-in-cup',
          '明顯 psoriasis -> MTX；皮膚為主 -> IL-17/IL-23 優於 TNFi',
          '避免 systemic GC；下肢承重 enthesis 不注射',
          'PsA 的 CV/metabolic 風險要一起處理'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'spa-03',
  chapter: '374',
  title: '旅行回來的膝蓋',
  patient: '24 歲男性 · 研究生',
  summary: '東南亞自助旅行時拉肚子，回國兩週後膝蓋腫起來、眼睛也紅。',
  cards: ['spa-path', 'rea'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '李同學一跛一跛地走進來。「三週前在東南亞拉肚子一個禮拜，有發燒、有血絲。回國後好了。」',
        '「但這幾天左膝和右腳踝腫起來，眼睛也紅紅的。」'
      ],
      clue: ['24M；**3 週前血便腹瀉**（東南亞旅行）', '左膝 + 右踝腫（**asymmetric oligoarthritis**）', '眼紅'],
      choices: [{ label: '再問一些', next: 'hx' }]
    },
    hx: {
      text: '旅行時有一位新的性伴侶，沒有每次都用保險套。沒有排尿疼痛或分泌物。沒有發燒。',
      clue: '新性伴侶，無症狀',
      feedback: '就算沒有泌尿道症狀，所有 ReA 都應篩 Chlamydia。',
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
          { id: 'knee', group: '關節', label: '左膝', key: true, reveal: true,
            result: '大量 effusion、溫熱', clue: 'Left knee effusion（熱）',
            miss: '主訴關節腫，要檢查並評估 effusion。' },
          { id: 'heel', group: '關節', label: 'Achilles、plantar fascia', result: '右 Achilles 附著處腫痛', clue: 'Achilles enthesitis' },
          { id: 'eye', group: '其他', label: '眼睛', key: true, reveal: true,
            result: '雙側 **conjunctivitis**，無 photophobia、瞳孔正常', clue: 'Bilateral conjunctivitis',
            miss: '眼紅要分辨 conjunctivitis 還是 anterior uveitis（後者要轉眼科）。' },
          { id: 'skin', group: '皮膚', label: '手掌、腳底', result: '腳底數個角化膿疱性丘疹', clue: '**Keratoderma blennorrhagica**' },
          { id: 'gu', group: '皮膚', label: '生殖器', result: '龜頭邊緣無痛性環狀淺潰瘍', clue: '**Circinate balanitis**' },
          { id: 'oral', group: '其他', label: '口腔', result: '上顎無痛小潰瘍' },
          { id: 'vitals', group: '其他', label: '生命徵象', result: 'BT 37.4' }
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
          { id: 'tap', group: '關節液', label: '左膝 arthrocentesis：cell count、Gram stain、culture、crystals', key: true, reveal: true,
            result: 'WBC 18,000（neutrophil 75%）；**Gram stain、culture 陰性**；**無結晶**', clue: '關節液 inflammatory，**culture、crystal 陰性**',
            miss: '單一大關節積液一定要抽，排除 septic arthritis 和 crystal arthritis。' },
          { id: 'ct', group: '感染', label: 'Urine Chlamydia / gonorrhea NAAT', key: true, reveal: true,
            result: 'Chlamydia **陰性**；gonorrhea 陰性', clue: 'Chlamydia、GC NAAT 陰性',
            miss: '所有 ReA 都應篩 Chlamydia，也要排除 gonococcal arthritis。' },
          { id: 'stool', group: '感染', label: 'Stool culture', result: '陰性（腹瀉已停）', clue: 'Stool culture 陰性（常見）' },
          { id: 'b27', group: '血液', label: 'HLA-B27', result: '**陽性**', clue: '**HLA-B27 (+)**' },
          { id: 'crp', group: '血液', label: 'ESR、CRP', result: 'CRP 4.8 mg/dL' },
          { id: 'hiv', group: '感染', label: 'HIV、syphilis', result: '陰性' },
          { id: 'ana', group: '血液', label: 'ANA、RF', result: '陰性' },
          { id: 'mri', group: '影像', label: 'Knee MRI', result: 'Synovitis、effusion', waste: '關節液已經回答了問題，MRI 不需要。' }
        ]
      }
    },
    dx: {
      text: 'Enteric infection 後 2 週、asymmetric 下肢 oligoarthritis、enthesitis、conjunctivitis、keratoderma、circinate balanitis、HLA-B27(+)、關節液無菌無結晶。治療？',
      choices: [
        { label: '**Reactive arthritis**：NSAID + 左膝 **intraarticular GC**；追蹤；若 > 6 個月轉為 chronic 再考慮 SSZ 或 MTX', next: 'end_good' },
        { label: 'Ciprofloxacin + doxycycline 長期 6 個月', next: 'tx_abx' },
        { label: 'Septic arthritis 不能排除，IV vancomycin + ceftriaxone 四週', next: 'tx_septic' }
      ]
    },
    tx_abx: {
      text: '主治醫師搖頭。',
      feedback: '常規長期抗生素治療 ReA 不建議。腸道感染已經結束，Chlamydia 也陰性。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    tx_septic: {
      text: '主治醫師搖頭。',
      feedback: '關節液 Gram stain、culture 都陰性，加上整個 ReA 的臨床圖像，不是 septic arthritis。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '膝關節注射後兩天就可以正常走路。三個月後所有症狀消失。你提醒他：HLA-B27 陽性，之後若出現背痛或眼睛又紅又痛又怕光，要回診。',
      ending: {
        grade: 'good',
        title: 'Reactive arthritis',
        pearls: [
          'GU/GI 感染後 1 天-4 週；asymmetric 下肢 oligoarthritis',
          'Conjunctivitis、circinate balanitis、keratoderma blennorrhagica',
          '抽關節液排除 septic、crystal；所有病人篩 Chlamydia',
          'NSAID + IA GC；不常規長期抗生素；HLA-B27 與 chronicity 相關'
        ]
      }
    }
  }
});
