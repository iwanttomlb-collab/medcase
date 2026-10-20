// Ch 372 Systemic Sclerosis. Source notes: notes/372-ssc.md

RPG.registerCards('372', [
  {
    id: 'ssc-path',
    title: 'Systemic sclerosis 致病機轉',
    points: [
      '**三大機轉**：**microangiopathy**、**inflammation/autoimmunity**、**fibrosis**；血管與免疫在前，纖維化在後',
      '**Vascular（最早）**：endothelial injury -> NO、prostacyclin 下降，**endothelin-1** 上升；platelet 活化（serotonin、PDGF、**CXCL4**）；**EndoMT** -> 管腔閉塞；**capillary rarefaction**',
      'Raynaud：CGRP 減少、alpha-adrenergic 過度敏感（ADRA2A）',
      '**Immune**：type I IFN signature；pDC 分泌 **CXCL4**（預測進展）；**TH2**（IL-4、IL-13、IL-33、TSLP）活化 fibroblast；IFN-gamma 反而抗纖維化',
      'Autoantibodies 幾乎都有、彼此互斥；anti-RNA pol III：腫瘤 POLR3A 突變引發交叉免疫（paraneoplastic）',
      '**Fibrosis**：**TGF-beta 為核心**；IL-6、IL-11、CTGF、PDGF、Wnt、endothelin -> **myofibroblasts**（來源：resident fibroblast、EndoMT、adipocyte）逃避 apoptosis',
      '遺傳貢獻小（MZ 4.7%），環境重要：silica、solvents、bleomycin、ICI',
      '**Renal crisis**：腎動脈閉塞 + vasospasm -> **renin 上升** -> angiotensin II -> 惡性循環'
    ],
    refs: ['Harrison’s Ch 372（Pathogenesis）']
  },
  {
    id: 'ssc-subsets',
    title: 'lcSSc vs dcSSc',
    table: {
      head: ['', 'Limited (lcSSc)', 'Diffuse (dcSSc)'],
      rows: [
        ['Skin', '手指、肘以下、臉；**不侵犯軀幹**', '快速；近端肢體、**軀幹**'],
        ['Raynaud', '**先於皮膚數年**', '與皮膚同時'],
        ['ILD', '慢、輕', '**早期、可嚴重**'],
        ['PAH', '**晚期、可單獨出現**', '多合併 ILD'],
        ['Renal crisis', '極罕見', '**~15%，前 4 年**'],
        ['Antibody', '**Anti-centromere**', '**Scl-70、RNA pol III**']
      ]
    },
    note: 'CREST：calcinosis、Raynaud、esophageal dysmotility、sclerodactyly、telangiectasia'
  },
  {
    id: 'ssc-ab',
    title: 'SSc autoantibodies（互斥）',
    table: {
      head: ['Antibody', '關聯'],
      rows: [
        ['**Scl-70** (topo I)', 'dcSSc、**early ILD**、digital ulcers、friction rubs；預後差'],
        ['**Centromere**', 'lcSSc、**calcinosis**、**isolated PAH**；renal crisis 罕見'],
        ['**RNA pol III**', '快速進展皮膚、**renal crisis**、GAVE、**同時期 cancer**'],
        ['U3-RNP (fibrillarin)', 'PAH、ILD、renal crisis、myositis'],
        ['PM/Scl', 'Overlap：calcinosis、ILD、myositis'],
        ['**U1-RNP**', '**MCTD**：PAH、arthritis、myositis']
      ]
    },
    note: 'ESR 通常正常；上升要想 myositis 或 malignancy。CRP 高預後差'
  },
  {
    id: 'raynaud',
    title: 'Primary vs secondary Raynaud',
    table: {
      head: ['Primary', 'Secondary'],
      rows: [
        ['無潛在疾病、家族史', 'SSc、CTD、藥物（beta blocker、cisplatin、bleomycin）'],
        ['年輕', '年紀較大'],
        ['無 ulcer、necrosis', '**Digital ulcers**、pits、截指'],
        ['**ANA 陰性**', 'ANA 常陽性'],
        ['**Nailfold 正常**', '**Giant capillaries、hemorrhage、dropout**']
      ]
    },
    points: [
      '治療：保暖 -> **amlodipine** -> **losartan**（ACEi 無效）-> prazosin、**sildenafil**、topical nitrate、IV prostaglandin',
      '**Bosentan 減少新 digital ulcers**；botulinum toxin、sympathectomy'
    ]
  },
  {
    id: 'src',
    title: 'Scleroderma renal crisis',
    points: [
      '**< 15%**、幾乎都在 **發病 4 年內**',
      '危險：**dcSSc**、快速進展皮膚、**anti-RNA pol III**、tendon friction rubs、男性、African American、**glucocorticoids**；ACA 保護',
      '表現：**accelerated HTN** + oliguric AKI + **MAHA**（~10% normotensive，預後差）',
      'UA：mild proteinuria、granular casts、microhematuria；易誤診為 TTP',
      '治療：**short-acting ACEi（captopril）快速 titrate**；持續高血壓再加 ARB、CCB 等',
      '高風險者**每天量血壓**；GC 必要時 < 10 mg/day',
      '最多 2/3 需透析，30-50% 可停'
    ]
  },
  {
    id: 'ssc-ild',
    title: 'SSc-ILD',
    points: [
      'HRCT 最多 65%；clinically significant 16-43%；**NSIP 最常見**',
      '危險：男性、**dcSSc**、**anti-Scl-70**、severe GERD、初始 FVC/DLCO 低',
      '**前 3-5 年進展最快**',
      '新診斷 SSc 都要篩：**PFT + HRCT**；高風險 PFT 每 3-6 個月',
      '治療：**MMF 優先**（CYC 毒性較多）；tocilizumab（早期）',
      '治療下仍進展：**加 nintedanib**；refractory：HSCT、lung transplant'
    ]
  },
  {
    id: 'ssc-pah',
    title: 'SSc-PAH',
    points: [
      '8-12%；晚期；**lcSSc、ACA**、telangiectasia 多、老年發病',
      '定義：**mPAP > 20、PCWP <= 15、PVR > 2 WU**',
      '**初診與每年 echo 篩檢**；PASP > 40 或 TR velocity > 3 m/s',
      '**DLCO 不成比例下降**、NT-proBNP 上升',
      '**Right heart catheterization 確診**',
      '治療：**ERA（bosentan）或 PDE5i（sildenafil）**起始；riociguat、selexipag、prostacyclin；常需合併',
      '佔 SSc 死亡 30%；預後比 idiopathic PAH 差'
    ]
  }
]);

RPG.registerCase({
  id: 'ssc-01',
  chapter: '372',
  title: '頭痛的鋼琴老師',
  patient: '48 歲男性 · 鋼琴老師',
  summary: '半年來手越來越緊，診所給了類固醇。這兩天頭痛欲裂、看不清楚。',
  cards: ['ssc-path', 'ssc-subsets', 'ssc-ab', 'src'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診會診。蔡先生是鋼琴老師，半年前手指開始腫，接著手臂、胸口的皮膚變得又緊又硬。',
        '三週前因為關節痛，診所開了 **prednisone 30 mg/day**。',
        '這兩天頭痛欲裂、視線模糊，尿量變少。'
      ],
      clue: ['48M；6 個月內皮膚快速硬化（手指 -> 手臂 -> 胸口）', '**Prednisone 30 mg/day** x 3 週', '頭痛、視力模糊、少尿'],
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你到急診床邊。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'vitals', group: '一般', label: '生命徵象', key: true, reveal: true,
            result: 'BP **196/118** mmHg；HR 102', clue: '**BP 196/118**',
            miss: '頭痛、視力模糊，第一件事就是量血壓。' },
          { id: 'skin', group: '皮膚', label: '皮膚厚度（手、前臂、上臂、軀幹）', key: true, reveal: true,
            result: '手指、前臂、上臂、**前胸**皮膚緊繃增厚；手指無法完全伸直', clue: '**Diffuse skin thickening**（含軀幹）',
            miss: '皮膚分布決定 limited 還是 diffuse，這影響後面所有判斷。' },
          { id: 'tendon', group: '肌肉骨骼', label: '被動活動手腕、膝（tendon friction rubs）', key: true, reveal: true,
            result: '手腕、膝蓋可觸及粗糙的 **tendon friction rubs**', clue: '**Tendon friction rubs**',
            miss: 'Tendon friction rubs 是 renal crisis 與心臟併發症的警訊。' },
          { id: 'fundus', group: '頭頸', label: '眼底鏡', key: true, reveal: true,
            result: '火焰狀出血、cotton-wool spots', clue: 'Hypertensive retinopathy',
            miss: '視力模糊 + 高血壓，要看眼底。' },
          { id: 'heart', group: '胸腹', label: '心肺聽診', result: '雙下肺少許 crackles；心音正常' },
          { id: 'nailfold', group: '皮膚', label: 'Nailfold（放大鏡）', result: 'Giant capillaries、dropout' },
          { id: 'neuro', group: '神經', label: '神經學檢查', result: '無 focal deficit' },
          { id: 'dre', group: '其他', label: '肛門指診', result: '無異常', waste: '跟目前問題無關。' }
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
          { id: 'cr', group: '腎', label: 'BUN、Cr、electrolytes', key: true, reveal: true,
            result: 'Cr **3.4** mg/dL（2 個月前 0.9）', clue: '**AKI**：Cr 0.9 -> 3.4',
            miss: '少尿加高血壓，腎功能是第一要務。' },
          { id: 'ua', group: '腎', label: 'Urinalysis', key: true, reveal: true,
            result: 'Protein 1+；granular casts；少量 RBC', clue: 'UA：mild proteinuria、granular casts',
            miss: '尿沉渣幫助區分 GN 與 vascular 原因。' },
          { id: 'cbc', group: '血液', label: 'CBC、smear', key: true, reveal: true,
            result: 'Hb 9.6；PLT **88,000**；**schistocytes**', clue: '**MAHA**：schistocytes + PLT 88k',
            miss: '要找 MAHA，這是 renal crisis 的 hallmark。' },
          { id: 'ldh', group: '血液', label: 'LDH、haptoglobin', result: 'LDH 上升、haptoglobin 下降' },
          { id: 'adamts', group: '血液', label: 'ADAMTS13 activity', result: '62%', clue: 'ADAMTS13 正常（不支持 TTP）' },
          { id: 'rnap', group: '抗體', label: 'Anti-RNA polymerase III', key: true, reveal: true,
            result: '**陽性**', clue: '**Anti-RNA pol III (+)**',
            miss: '快速進展的 dcSSc 要驗 SSc-specific Ab，RNA pol III 和 renal crisis、cancer 有關。' },
          { id: 'scl', group: '抗體', label: 'Anti-Scl-70、anti-centromere', result: '皆陰性' },
          { id: 'ana', group: '抗體', label: 'ANA', result: '1:640 speckled' },
          { id: 'renin', group: '其他', label: 'Plasma renin', result: '明顯上升' },
          { id: 'bx', group: '其他', label: '急診腎臟切片', result: '（未執行）',
            waste: '血壓這麼高、血小板低，現在切片出血風險高；臨床已足以診斷。' }
        ]
      }
    },
    dx: {
      text: '快速進展的 dcSSc、anti-RNA pol III、近期類固醇、accelerated HTN、AKI、MAHA。',
      choices: [
        { label: '**Scleroderma renal crisis**', next: 'tx' },
        { label: 'TTP', next: 'dx_ttp' },
        { label: 'Rapidly progressive glomerulonephritis', next: 'dx_rpgn' }
      ]
    },
    dx_ttp: {
      text: '主治醫師指著報告。',
      feedback: 'SRC 常被誤診為 TTP，兩者都有 MAHA。但他 ADAMTS13 正常，而且在 dcSSc 早期、anti-RNA pol III 陽性、剛用了類固醇，又有 accelerated HTN，這是 SRC。',
      choices: [{ label: '重新判斷', next: 'dx' }]
    },
    dx_rpgn: {
      text: '主治醫師搖頭。',
      feedback: 'SRC 是血管病變，不是 GN：UA 通常只有 mild proteinuria、granular casts、少量血尿，沒有大量 RBC casts。',
      choices: [{ label: '重新判斷', next: 'dx' }]
    },
    tx: {
      text: '立即處置？',
      choices: [
        { label: '住院；**short-acting ACE inhibitor（captopril）快速加量**讓血壓盡快正常；prednisone 盡快減量', next: 'end_good' },
        { label: 'Plasma exchange，先當 TTP 處理', next: 'tx_plex' },
        { label: 'Methylprednisolone pulse 控制 SSc 活性', next: 'tx_gc' },
        { label: 'Amlodipine 降血壓，腎功能差先不用 ACEi', next: 'tx_ccb' }
      ]
    },
    tx_plex: {
      text: '主治醫師搖頭。',
      feedback: 'SRC 的核心是 renin-angiotensin 惡性循環，治療是 ACEi。ADAMTS13 也正常。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_gc: {
      text: '主治醫師的臉色變了。',
      feedback: '類固醇是 SRC 的危險因子，他就是在 prednisone 30 mg 之後發生的。SSc 高風險病人 GC 必要時才用，而且 < 10 mg/day。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_ccb: {
      text: '主治醫師搖頭。',
      feedback: '即使 Cr 上升，SRC 仍要用 ACEi，這是改變預後的藥（ACEi 前 1 年存活 < 10%，現在 3 年 > 70%）。CCB 是 ACEi 加到足量後血壓仍高才加。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: [
        'Captopril 每 8 小時逐步加量，72 小時內血壓降到 130/80。腎功能仍惡化，第五天開始透析。',
        '十四個月後，蔡先生的腎功能恢復到可以停止透析。你們同時安排了 cancer screening，因為 anti-RNA pol III 與同時期的惡性腫瘤相關。'
      ],
      ending: {
        grade: 'good',
        title: 'Scleroderma renal crisis',
        pearls: [
          'SRC：dcSSc 早期（< 4 年）、anti-RNA pol III、friction rubs、**glucocorticoids**',
          'Accelerated HTN + AKI + MAHA；ADAMTS13 正常可與 TTP 區分',
          'Captopril 快速 titrate；即使 Cr 上升也要用',
          '30-50% 透析病人可恢復；anti-RNA pol III 要想 cancer'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ssc-02',
  chapter: '372',
  title: '爬不上的樓梯',
  patient: '62 歲女性 · 退休教師',
  summary: '手指發白發紫十五年，最近半年爬一層樓就喘。',
  cards: ['ssc-path', 'ssc-pah', 'ssc-subsets', 'ssc-ab'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '蕭老師的手指從四十幾歲就會在冬天發白、發紫再變紅。十年前診斷 limited cutaneous SSc，anti-centromere 陽性。',
        '「這半年爬一層樓就喘，以前可以爬到五樓。前幾天走路走一走差點昏倒。」'
      ],
      clue: ['62F；**lcSSc**、**ACA (+)**；Raynaud 15 年', '6 個月漸進 **exertional dyspnea**；**near-syncope**'],
      choices: [{ label: '再多問一些', next: 'hx' }]
    },
    hx: {
      text: '沒有咳嗽、沒有發燒。最近腳踝有點腫。她說兩年前就該做的心臟超音波，因為疫情一直沒做。',
      clue: '下肢水腫；**2 年未做 echo 篩檢**',
      feedback: 'SSc 病人應在初診與每年做 echo 篩檢 PAH。',
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
          { id: 'vitals', group: '一般', label: '生命徵象與 SpO2', key: true, reveal: true,
            result: 'BP 112/70；HR 96；SpO2 93%', clue: 'SpO2 93%',
            miss: '喘的病人要量 SpO2。' },
          { id: 'heart', group: '胸部', label: '心臟聽診與觸診', key: true, reveal: true,
            result: '**Loud P2**；左下胸骨緣 holosystolic murmur；**RV heave**', clue: '**Loud P2**、TR murmur、RV heave',
            miss: '懷疑 PAH，要聽 P2 與 TR murmur、摸 RV heave。' },
          { id: 'jvp', group: '胸部', label: 'JVP', key: true, reveal: true,
            result: '**上升**', clue: 'JVP 上升',
            miss: 'Right heart failure 要看 JVP。' },
          { id: 'lung', group: '胸部', label: '肺部聽診', key: true, reveal: true,
            result: '清晰，**無 crackles**', clue: '肺部無 crackles',
            miss: '要區分 ILD 造成的 PH 和 PAH，肺部聽診很重要。' },
          { id: 'edema', group: '四肢', label: '下肢水腫', result: '雙側 1+ pitting edema' },
          { id: 'skin', group: '皮膚', label: '皮膚與手部', result: 'Sclerodactyly；臉與手掌大量 **telangiectasia**；指腹 calcinosis', clue: 'Sclerodactyly、多處 telangiectasia、calcinosis' },
          { id: 'dre', group: '其他', label: '肛門指診', result: '無異常', waste: '跟喘無關。' }
        ]
      }
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'next',
        options: [
          { id: 'echo', group: '心臟', label: 'Echocardiography', key: true, reveal: true,
            result: 'TR velocity **3.8 m/s**；PASP 估計 **68 mmHg**；RV 擴大；LVEF 65%', clue: '**Echo：PASP 68、TR 3.8 m/s**；LV 正常',
            miss: '懷疑 PAH，echo 是非侵入性的第一步。' },
          { id: 'bnp', group: '心臟', label: 'NT-proBNP', key: true, reveal: true,
            result: '**2,350** pg/mL', clue: 'NT-proBNP 2,350',
            miss: 'NT-proBNP 與 PAH 嚴重度和存活相關，也用來追蹤治療。' },
          { id: 'pft', group: '肺', label: 'PFT + DLCO', key: true, reveal: true,
            result: 'FVC **88%**；DLCO **38%**', clue: '**DLCO 38%**，FVC 88%（**不成比例**）',
            miss: 'PFT 用來分辨是 ILD 還是 pulmonary vascular disease。' },
          { id: 'hrct', group: '肺', label: 'HRCT chest', key: true, reveal: true,
            result: '僅極少量 subpleural reticulation；**無明顯 ILD**', clue: 'HRCT：無明顯 ILD',
            miss: '要排除 ILD 造成的 pulmonary hypertension。' },
          { id: 'vq', group: '肺', label: 'V/Q scan', result: '無 mismatched defect', clue: 'V/Q 正常（排除 CTEPH）' },
          { id: 'cbc', group: '血液', label: 'CBC', result: 'Hb 12.4' },
          { id: 'tsh', group: '血液', label: 'TSH', result: '正常' },
          { id: 'cxr', group: '肺', label: 'Chest X-ray', result: '肺動脈擴大' },
          { id: 'coro', group: '心臟', label: 'Coronary angiography', result: '（未執行）',
            waste: '沒有典型心絞痛，LV 功能正常，冠狀動脈攝影不是下一步。' }
        ]
      }
    },
    next: {
      text: 'Echo 強烈懷疑 PAH。接下來？',
      choices: [
        { label: '**Right heart catheterization** 確診，並排除 postcapillary PH', next: 'rhc' },
        { label: 'Echo 已經很明顯，直接開始 PAH 藥物', next: 'skip_rhc' }
      ]
    },
    skip_rhc: {
      text: '主治醫師搖頭。',
      feedback: 'Echo 可能高估或低估壓力。PAH 一定要 right heart catheterization 確診、評估 RV 功能，並排除 veno-occlusive disease 與 left heart（postcapillary）原因。',
      choices: [{ label: '安排 RHC', next: 'rhc' }]
    },
    rhc: {
      text: 'RHC：mPAP **42** mmHg；PCWP **9** mmHg；PVR **7.2** Wood units；cardiac index 2.1。',
      clue: '**RHC：mPAP 42、PCWP 9、PVR 7.2**（precapillary PAH）',
      feedback: 'mPAP > 20、PCWP <= 15、PVR > 2 WU，符合 PAH。',
      choices: [{ label: '決定治療', next: 'tx' }]
    },
    tx: {
      text: '治療？',
      choices: [
        { label: '**ERA（bosentan）和/或 PDE5 inhibitor（sildenafil）**，常需合併治療；氧氣；利尿劑', next: 'end_good' },
        { label: '高劑量 prednisone 加 cyclophosphamide 抑制 SSc', next: 'tx_immuno' },
        { label: '高劑量 calcium channel blocker', next: 'tx_ccb' }
      ]
    },
    tx_immuno: {
      text: '主治醫師搖頭。',
      feedback: 'SSc-PAH 是血管 remodeling，immunosuppression 沒有角色，GC 還會增加 renal crisis 風險。起始治療是 oral ERA 或 PDE5i。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_ccb: {
      text: '主治醫師搖頭。',
      feedback: 'SSc-PAH 的起始治療是 oral ERA（bosentan）或 PDE5i（sildenafil）；之後可加 riociguat、selexipag 或 prostacyclin。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '合併 bosentan 和 sildenafil 三個月後，蕭老師可以爬到三樓，NT-proBNP 降到 680。她把每年的 echo 寫進行事曆裡。',
      ending: {
        grade: 'good',
        title: 'SSc-associated PAH',
        pearls: [
          'lcSSc、ACA、多 telangiectasia、老年發病：PAH 高風險',
          'DLCO 不成比例下降、FVC 正常：想 pulmonary vascular disease',
          '初診與每年 echo 篩檢；RHC 確診',
          'ERA 或 PDE5i 起始，常需 combination'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ssc-03',
  chapter: '372',
  title: '指尖的傷口',
  patient: '35 歲女性 · 冷凍食品工廠員工',
  summary: '一年來手指遇冷發白，最近指尖破了一個洞一直不好。',
  cards: ['ssc-path', 'raynaud', 'ssc-ild', 'ssc-ab'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '游小姐在冷凍食品工廠上班。一年前開始手指遇冷就發白、發紫，回溫後變紅、刺痛。',
        '「最近右手食指尖破了一個洞，痛得要命，一個月了都沒好。手指好像也比以前腫。」'
      ],
      clue: ['35F；**Raynaud** 1 年（白 -> 紫 -> 紅）', '**Digital tip ulcer** 1 個月不癒', 'Puffy fingers'],
      choices: [{ label: '問診', next: 'hx' }]
    },
    hx: {
      text: '沒有家人有類似症狀。最近爬樓梯有點喘，偶爾乾咳，胃食道逆流很嚴重。不抽菸。沒有吃 beta blocker 或化療藥。',
      clue: ['輕微 exertional dyspnea、乾咳', '**Severe GERD**'],
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你仔細看她的手。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'nailfold', group: '手', label: 'Nailfold capillaroscopy（皮膚鏡）', key: true, reveal: true,
            result: '**Giant capillaries**、microhemorrhages、capillary **dropout**', clue: '**Abnormal nailfold**（giant capillaries、dropout）',
            miss: 'Raynaud 要分 primary 或 secondary，nailfold capillaroscopy 是關鍵。' },
          { id: 'skin', group: '手', label: '手指與前臂皮膚厚度', key: true, reveal: true,
            result: '手指 **puffy**、皮膚增厚**延伸到 MCP 近端**；前臂遠端輕度增厚', clue: '**皮膚增厚超過 MCP**',
            miss: '皮膚增厚的範圍是 SSc 分類最重要的一項。' },
          { id: 'ulcer', group: '手', label: '指尖潰瘍與指腹', result: '右食指尖 4 mm 潰瘍，無化膿；其他指腹有 pitting scars', clue: 'Pitting scars' },
          { id: 'lung', group: '胸部', label: '肺部聽診', key: true, reveal: true,
            result: '雙下肺 **fine crackles**', clue: '**Bibasilar crackles**',
            miss: '她說會喘、乾咳，肺部一定要聽。' },
          { id: 'heart', group: '胸部', label: '心臟聽診', result: '正常' },
          { id: 'face', group: '頭頸', label: '臉部與口腔', result: '少量 telangiectasia；口徑正常' },
          { id: 'tendon', group: '關節', label: 'Tendon friction rubs', result: '無' },
          { id: 'dre', group: '其他', label: '肛門指診', result: '無異常', waste: '跟這次問題無關。' }
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
          { id: 'ana', group: '抗體', label: 'ANA', key: true, reveal: true,
            result: '1:1280 speckled', clue: 'ANA 1:1280',
            miss: 'Raynaud 的第一個問題就是：ANA 陽性嗎？' },
          { id: 'ssc', group: '抗體', label: 'Anti-Scl-70、anti-centromere、anti-RNA pol III', key: true, reveal: true,
            result: '**Anti-Scl-70 陽性**；其餘陰性', clue: '**Anti-Scl-70 (+)**',
            miss: 'SSc-specific Ab 決定 subset 與風險（ILD、PAH、renal crisis）。' },
          { id: 'pft', group: '肺', label: 'PFT + DLCO', key: true, reveal: true,
            result: 'FVC **74%**；DLCO 61%', clue: 'FVC 74%、DLCO 61%',
            miss: '新診斷 SSc 都要篩 ILD：PFT。' },
          { id: 'hrct', group: '肺', label: 'HRCT chest', key: true, reveal: true,
            result: '雙下葉 subpleural **GGO + reticulation**，約 15% 肺容積（**NSIP pattern**）', clue: '**HRCT：NSIP pattern ILD**',
            miss: '新診斷 SSc 都要篩 ILD：HRCT。PFT 早期不敏感。' },
          { id: 'echo', group: '心臟', label: 'Echocardiography', result: 'PASP 28 mmHg；LVEF 正常', clue: 'Echo 正常（PAH baseline）' },
          { id: 'cr', group: '其他', label: 'Cr、UA、血壓紀錄', result: '正常' },
          { id: 'cbc', group: '其他', label: 'CBC', result: '正常' },
          { id: 'esr', group: '其他', label: 'ESR、CRP', result: 'ESR 18；CRP 0.4' },
          { id: 'angio', group: '其他', label: 'Hand angiography', result: '（未執行）',
            waste: 'Raynaud 合併 digital ulcer 的診斷不需要血管攝影。' }
        ]
      }
    },
    dx: {
      text: '皮膚增厚超過 MCP、abnormal nailfold、digital ulcer、anti-Scl-70。ILD 已經出現，且屬高風險（anti-Scl-70、diffuse 趨勢、severe GERD）。治療？',
      choices: [
        { label: 'ILD：**MMF**，PFT 每 3-6 個月追蹤，進展時加 nintedanib；Raynaud/ulcer：保暖、換部門、**amlodipine**，必要時加 sildenafil；GERD：高劑量 PPI', next: 'end_good' },
        { label: '高劑量 prednisone 控制發炎', next: 'tx_gc' },
        { label: 'ILD 還輕微，先觀察，一年後再照 HRCT', next: 'tx_wait' },
        { label: '用 propranolol 控制心跳，減少手指缺血', next: 'tx_bb' }
      ]
    },
    tx_gc: {
      text: '主治醫師搖頭。',
      feedback: 'GC 不會改變 SSc 的皮膚或內臟進展，還會增加 scleroderma renal crisis 風險，尤其早期 diffuse 病人。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    tx_wait: {
      text: '主治醫師搖頭。',
      feedback: 'SSc-ILD 前 3-5 年進展最快，她又是高風險（anti-Scl-70、FVC 已降）。應該開始治療，PFT 每 3-6 個月追蹤，不建議 serial HRCT。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    tx_bb: {
      text: '主治醫師搖頭。',
      feedback: 'Beta blocker 本身就是 secondary Raynaud 的誘發藥物。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '游小姐調到辦公室工作。Amlodipine 加上 sildenafil 後，指尖潰瘍六週癒合。MMF 一年後 FVC 穩定在 75%。',
      ending: {
        grade: 'good',
        title: 'Early dcSSc with ILD and digital ulcer',
        pearls: [
          'Secondary Raynaud：ulcer、ANA(+)、abnormal nailfold',
          '新診斷 SSc：PFT + HRCT 篩 ILD',
          'SSc-ILD：MMF 優先；進展加 nintedanib；PFT 每 3-6 個月',
          'Raynaud：保暖、amlodipine、losartan、sildenafil；避免 beta blocker'
        ]
      }
    }
  }
});
