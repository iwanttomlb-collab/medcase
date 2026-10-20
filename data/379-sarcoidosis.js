// Ch 379 Sarcoidosis. Source notes: notes/379-sarcoidosis.md

RPG.registerCards('379', [
  {
    id: 'sarc-path',
    title: 'Sarcoidosis 致病機轉',
    points: [
      '**遺傳易感宿主**對**未知環境抗原**的過度免疫反應',
      '可傳遞：**Kveim-Siltzbach reagent**、器官移植後 sarcoid-like 反應',
      '候選抗原：**mycobacterial proteins**（mKatG、ESAT-6、SodA）、**Cutibacterium acnes**；暴露：消防員、WTC 粉塵、黴菌、養鳥；**吸菸降低風險**',
      'APC 經 MHC II 呈現難分解抗原 -> **CD4+ TH1 高度極化**（IFN-gamma；IL-2、IL-12、IL-18、CXCR3）-> oligoclonal T 擴增',
      'Macrophages -> **epithelioid cells** -> 融合成 **multinucleated giant cells** -> 緊密 **nonnecrotizing granuloma**，外圍 lymphocytes、fibroblasts',
      '**Treg、TH17 失衡** -> 無法消退 -> fibrosis',
      'Granuloma macrophage 的 **1-alpha-hydroxylase 不受 PTH 調控** -> 1,25-(OH)2 D 上升 -> hypercalcemia、hypercalciuria',
      '周邊 lymphopenia：T cells 重分布到病灶；BAL **CD4:CD8 > 3.5**'
    ],
    refs: ['Harrison’s Ch 379（Pathogenesis）']
  },
  {
    id: 'sarc-dx',
    title: 'Sarcoidosis 診斷',
    points: [
      '三要件：**相符臨床** + **nonnecrotizing granuloma** + **排除其他原因**',
      '排除：**TB**、fungi（histo、cocci）、**beryllium**、**hypersensitivity pneumonitis**、藥物（**ICI、TNFi、IFN、ART**）、ANCA vasculitis、IgG4-RD、CVID',
      '切片：皮膚、結膜、周邊淋巴結；肺/縱膈 -> **EBUS-TBNA**；BAL **CD4:CD8 > 3.5**',
      '**可不切片**：典型 **Löfgren**、**Heerfordt**、**lupus pernio**',
      '**ACE 敏感度低，不適合診斷**；sIL-2R 與活性相關'
    ],
    table: {
      head: ['Scadding stage', '緩解率'],
      rows: [
        ['1：BHL', '**55-90%**'],
        ['2：BHL + parenchyma', '40-70%'],
        ['3：Parenchyma only', '10-20%'],
        ['4：Fibrosis', '0%']
      ]
    }
  },
  {
    id: 'sarc-baseline',
    title: 'Sarcoidosis baseline 與急性症候群',
    points: [
      '**所有病人 baseline**：PFT、chest imaging、**eye exam**、**ECG**、Cr、ALP、**calcium**、CBC',
      '**Löfgren**：fever + **erythema nodosum** + **ankle arthralgia** + **BHL**；北歐白人 20-30%、亞洲非裔 < 5%',
      '**Heerfordt**：facial palsy + parotid enlargement + anterior uveitis + fever',
      '兩者最多 80% 自發緩解',
      '**無症狀 stage 1 不治療**',
      '前 2 年密集追蹤'
    ]
  },
  {
    id: 'sarc-cardiac',
    title: 'Cardiac sarcoidosis',
    points: [
      '臨床：美國 < 5%、**日本 23%**（日本主要死因）',
      '年輕人新發 **AV block**、cardiomyopathy、**VT** 要想到',
      '**Sudden death 最常見死因**，可為首發',
      '**肺部嚴重度不預測心臟侵犯** -> 每人都問心臟症狀、做 ECG',
      '**Cardiac MRI 首選**；cardiac PET/CT；心肌切片敏感度低',
      'Rhythm disturbance -> **電生理轉介（ICD、pacemaker）** + immunosuppression',
      'Infliximab **避免於 heart failure**'
    ]
  },
  {
    id: 'sarc-ca',
    title: 'Sarcoidosis 與 calcium',
    points: [
      'Hypercalcemia **10-20%**；hypercalciuria 最多 **50%**；男性較多',
      'Granuloma macrophage 不受調控產生 **1,25-(OH)2 D** -> **PTH 低**',
      '未治療 -> **nephrocalcinosis**、腎功能下降',
      '處置：**限制 vitamin D、避免日曬、補水**；嚴重 -> **corticosteroids**；**HCQ 也有效**',
      'Kidney：多因 hypercalcemia；也可 interstitial nephritis（sterile pyuria）'
    ]
  },
  {
    id: 'sarc-tx',
    title: 'Sarcoidosis 治療',
    points: [
      '**Prednisone 20-40 mg/day（0.5 mg/kg）x 4 週** -> 減到 **< 10 mg/day**；更高劑量多無益',
      'CNS、眼（失明風險）、廣泛心肌：較高劑量或合併',
      '**MTX：最推薦 second-line**（大量飲酒禁用）；AZA、leflunomide、MMF',
      '**HCQ**：皮膚、hypercalcemia 有效，**肺病不建議**',
      '**Infliximab**：refractory；TB 篩檢；**HF 避免**；adalimumab（眼）',
      '**Etanercept 無效**',
      '療程 ~1 年；太短易復發'
    ]
  }
]);

RPG.registerCase({
  id: 'sar-01',
  chapter: '379',
  title: '腳踝腫痛的瑞典研究員',
  patient: '31 歲女性 · 瑞典籍博士後研究員',
  summary: '春天發燒、雙腳踝腫痛，小腿冒出好幾塊紅色硬塊。',
  cards: ['sarc-path', 'sarc-baseline', 'sarc-dx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        'Linnea 從斯德哥爾摩來做研究。這兩週發燒、雙腳踝腫痛得走不了路，小腿前面冒出好幾塊紅色、按了會痛的硬塊。',
        '「我沒有咳嗽，也沒有喘。」'
      ],
      clue: ['31F；北歐人', '**Fever** 2 週', '**Bilateral ankle** 腫痛', '前小腿紅色壓痛結節'],
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
          { id: 'skin', group: '皮膚', label: '小腿皮膚', key: true, reveal: true,
            result: '雙前小腿數個 2-4 cm 紅色、壓痛、皮下結節', clue: '**Erythema nodosum**',
            miss: '要描述皮膚病灶，這是 Löfgren 的關鍵。' },
          { id: 'ankle', group: '關節', label: '踝關節', key: true, reveal: true,
            result: '雙踝 periarticular swelling、壓痛', clue: '**Bilateral ankle periarthritis**',
            miss: '主訴是腳踝，要檢查。' },
          { id: 'eye', group: '其他', label: '眼睛', result: '目前無紅眼' },
          { id: 'lymph', group: '其他', label: '周邊淋巴結', result: '未觸及' },
          { id: 'lung', group: '胸部', label: '肺部聽診', result: '清晰' },
          { id: 'vitals', group: '一般', label: '生命徵象', result: 'BT 38.2' }
        ]
      }
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'biopsy_q',
        options: [
          { id: 'cxr', group: '影像', label: 'Chest X-ray', key: true, reveal: true,
            result: '**Bilateral hilar lymphadenopathy**；肺實質正常', clue: '**BHL**（Scadding stage 1）',
            miss: 'EN + 踝關節炎 + 發燒，要照 CXR 找 BHL。' },
          { id: 'tb', group: '感染', label: 'IGRA', key: true, reveal: true,
            result: '陰性', clue: 'IGRA 陰性',
            miss: 'BHL + EN 要排除 TB。' },
          { id: 'aso', group: '感染', label: 'ASO', result: '正常', clue: 'ASO 正常（非 strep 相關 EN）' },
          { id: 'ca', group: '血液', label: 'Calcium、Cr、ALP、CBC', key: true, reveal: true,
            result: 'Ca 9.6；Cr、ALP 正常；CBC 正常', clue: 'Ca、Cr、ALP 正常',
            miss: '所有 sarcoidosis 都要 baseline 驗 calcium、Cr、ALP、CBC。' },
          { id: 'ecg', group: '心臟', label: 'ECG', key: true, reveal: true,
            result: '正常', clue: 'ECG 正常',
            miss: '所有 sarcoidosis 都要 baseline ECG。' },
          { id: 'pft', group: '肺', label: 'PFT', key: true, reveal: true,
            result: '正常', clue: 'PFT 正常',
            miss: 'PFT 是 baseline 之一。' },
          { id: 'eye', group: '眼', label: '眼科 slit lamp', key: true, reveal: true,
            result: '無 uveitis', clue: '無 uveitis',
            miss: '所有 sarcoidosis 都要 baseline 眼科檢查（可無症狀 uveitis）。' },
          { id: 'ace', group: '血液', label: 'Serum ACE', result: '輕度上升', waste: 'ACE 敏感度低，對診斷幫助不大。' },
          { id: 'ct', group: '影像', label: 'Chest CT', result: 'BHL、少量 perilymphatic nodules' }
        ]
      }
    },
    biopsy_q: {
      text: 'Fever + erythema nodosum + ankle periarthritis + BHL。需要 EBUS 切片嗎？',
      choices: [
        { label: '典型 **Löfgren syndrome**，臨床足以診斷，不需切片；密切追蹤', next: 'tx' },
        { label: '一定要 EBUS-TBNA 才能確診', next: 'bx_must' }
      ]
    },
    bx_must: {
      text: '主治醫師笑了笑。',
      feedback: '典型 Löfgren、Heerfordt、lupus pernio 可以不切片。但診斷永遠不是 100% 確定，要密切追蹤，若病程不典型再切片。',
      choices: [{ label: '重新決定', next: 'biopsy_q' }]
    },
    tx: {
      text: '治療？',
      choices: [
        { label: '**NSAIDs** 緩解關節痛與 EN；不需 immunosuppression；追蹤 CXR', next: 'end_good' },
        { label: 'Prednisone 40 mg 加 methotrexate', next: 'tx_heavy' }
      ]
    },
    tx_heavy: {
      text: '主治醫師搖頭。',
      feedback: 'Löfgren 預後極好，最多 80% 自發緩解，很少需要 immunosuppression。症狀治療就好。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '六週內發燒和 EN 消失，腳踝也不腫了。一年後 CXR 的 BHL 完全消退。',
      ending: {
        grade: 'good',
        title: 'Löfgren syndrome',
        pearls: [
          'Fever + EN + ankle arthritis + BHL；北歐白人常見',
          '典型者可不切片；仍要排除 TB',
          'Baseline：PFT、CXR、eye exam、ECG、Ca、Cr、ALP、CBC',
          '預後極好；NSAIDs 症狀治療'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'sar-02',
  chapter: '379',
  title: '昏倒的工程師',
  patient: '44 歲男性 · 半導體工程師',
  summary: '肺部 sarcoidosis 三年，最近心悸、今天上班時突然昏倒。',
  cards: ['sarc-path', 'sarc-cardiac', 'sarc-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '謝先生三年前因 BHL 與肺浸潤（stage 2）經 EBUS 確診 sarcoidosis，肺部症狀輕微，一直觀察沒治療。',
        '「這一個月常常心悸，今天開會時突然眼前一黑就倒下了，幾秒後醒來。」'
      ],
      clue: ['44M；pulmonary sarcoidosis stage 2（輕微）', '**Palpitations**', '**Syncope**'],
      choices: [{ label: '立刻檢查', next: 'labs' }]
    },
    labs: {
      text: '急診。你要做什麼？',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出',
        next: 'dx',
        options: [
          { id: 'ecg', group: '心臟', label: '12-lead ECG + telemetry', key: true, reveal: true,
            result: '**Mobitz II 2:1 AV block**；frequent multifocal PVCs；telemetry 一陣 **nonsustained VT**', clue: '**High-grade AV block + NSVT**',
            miss: 'Sarcoidosis + syncope，第一件事就是 ECG 與 telemetry。' },
          { id: 'echo', group: '心臟', label: 'Echocardiography', key: true, reveal: true,
            result: 'LVEF **40%**；basal septum 變薄', clue: 'LVEF 40%；**basal septal thinning**',
            miss: '要評估心室功能。' },
          { id: 'cmr', group: '心臟', label: 'Cardiac MRI', key: true, reveal: true,
            result: 'Basal septum 與側壁 **patchy LGE**（非冠狀分布）', clue: '**Cardiac MRI：patchy LGE**',
            miss: 'Cardiac MRI 是 cardiac sarcoidosis 的首選檢查。' },
          { id: 'trop', group: '血液', label: 'Troponin、electrolytes', result: 'Troponin 輕度上升；K、Mg 正常' },
          { id: 'cath', group: '心臟', label: 'Coronary angiography', result: '正常冠狀動脈', clue: '冠狀動脈正常' },
          { id: 'emb', group: '侵入', label: 'Endomyocardial biopsy', result: '（未執行）', waste: '心肌切片因為 patchy、多在基部，敏感度很低；cardiac MRI 已經足夠。' },
          { id: 'ace', group: '血液', label: 'Serum ACE', result: '上升', waste: 'ACE 不能診斷 cardiac sarcoidosis。' }
        ]
      }
    },
    dx: {
      text: 'Cardiac sarcoidosis：high-grade AV block、NSVT、LVEF 40%、patchy LGE。處置？',
      choices: [
        { label: '**轉介電生理**（暫時 pacing、評估 **ICD**）+ HF 治療 + **prednisone 加 methotrexate**', next: 'end_good' },
        { label: '肺部很輕微，心臟應該不是 sarcoidosis，先觀察', next: 'dx_mild' },
        { label: 'Prednisone + **infliximab** 最強效', next: 'dx_ifx' }
      ]
    },
    dx_mild: {
      text: '主治醫師搖頭。',
      feedback: '肺部的嚴重度不能預測心臟侵犯。Sudden death 是 cardiac sarcoidosis 最常見的死因，而且可能是首發表現。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    dx_ifx: {
      text: '主治醫師提醒：',
      feedback: '他 LVEF 40%，infliximab 在 heart failure 應該避免。Steroid-sparing 先用 MTX。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '電生理科植入 ICD（含 pacing 功能）。Prednisone 加 MTX 半年後 LVEF 回升到 48%，LGE 範圍縮小。一年內 ICD 放電一次，成功終止 VT。',
      ending: {
        grade: 'good',
        title: 'Cardiac sarcoidosis',
        pearls: [
          '肺部輕微也可能有嚴重心臟侵犯',
          'AV block、VT、cardiomyopathy；sudden death 最常見死因',
          'Cardiac MRI 首選；心肌切片敏感度低',
          'EP 轉介（ICD）+ immunosuppression；HF 避免 infliximab'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'sar-03',
  chapter: '379',
  title: '口渴的夏天',
  patient: '52 歲男性 · 戶外導遊',
  summary: '夏天帶團後一直口渴、頻尿、很累，腎功能突然變差。',
  cards: ['sarc-path', 'sarc-ca', 'sarc-dx', 'sarc-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '蘇先生是戶外導遊，這個夏天帶了很多團。最近一直口渴、半夜起來尿好幾次，非常疲倦，有點便秘。',
        '健檢報告：Cr **2.1**（去年 1.0），Ca **12.6** mg/dL。',
        '他說為了骨頭好，每天吃綜合維他命加維生素 D 2000 IU。'
      ],
      clue: ['52M；戶外工作（大量日曬）', '**Polyuria、polydipsia**、疲倦、便秘', '**Ca 12.6**、Cr 1.0 -> 2.1', '補充 **vitamin D**'],
      choices: [{ label: '安排檢查', next: 'labs' }]
    },
    labs: {
      text: '高血鈣的鑑別要從 PTH 開始。開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'pth', group: '鈣', label: 'Intact PTH', key: true, reveal: true,
            result: '**8 pg/mL（被抑制）**', clue: '**PTH 低**（PTH-independent hypercalcemia）',
            miss: '高血鈣第一步就是 PTH。' },
          { id: 'vitd', group: '鈣', label: '25-OH D 與 1,25-(OH)2 D', key: true, reveal: true,
            result: '25-OH D 正常；**1,25-(OH)2 D 明顯上升**', clue: '**1,25-(OH)2 D 上升**',
            miss: 'PTH 低時要看 vitamin D 代謝，sarcoidosis 是 1,25-D 上升。' },
          { id: 'pthrp', group: '鈣', label: 'PTHrP、SPEP', result: '正常', clue: 'PTHrP、SPEP 正常' },
          { id: 'cxr', group: '影像', label: 'Chest X-ray', key: true, reveal: true,
            result: '**Bilateral hilar lymphadenopathy** + 上肺網狀結節', clue: '**BHL + upper-lobe nodules**',
            miss: '1,25-D 上升要找 granulomatous disease，CXR 是第一步。' },
          { id: 'ua', group: '腎', label: 'UA、24h urine calcium', result: 'Bland sediment、少量 sterile pyuria；**hypercalciuria**', clue: 'Hypercalciuria；sterile pyuria' },
          { id: 'us', group: '腎', label: 'Renal ultrasound', result: '**Medullary nephrocalcinosis**', clue: '**Nephrocalcinosis**' },
          { id: 'ebus', group: '病理', label: 'EBUS-TBNA', key: true, reveal: true,
            result: '**Nonnecrotizing granulomas**；AFB、fungal stain/culture 陰性', clue: '**Nonnecrotizing granulomas**；AFB、fungi 陰性',
            miss: '需要組織證實並排除 TB、fungi。' },
          { id: 'ecg', group: '其他', label: 'ECG、eye exam', result: 'ECG 正常；無 uveitis' },
          { id: 'bone', group: '其他', label: 'Bone scan 找轉移', result: '正常', waste: 'PTH 低、1,25-D 高、BHL，臨床已指向 granulomatous disease。' }
        ]
      }
    },
    dx: {
      text: 'Sarcoidosis 合併 1,25-D 介導的 hypercalcemia、hypercalciuria、nephrocalcinosis、AKI。處置？',
      choices: [
        { label: '**IV 補水**；**停 vitamin D 補充、避免日曬**；**prednisone 20-40 mg/day** 後減量；追蹤 Ca、Cr', next: 'end_good' },
        { label: '補水 + 加大 vitamin D，因為骨頭需要', next: 'tx_vitd' },
        { label: '轉外科做 parathyroidectomy', next: 'tx_ptx' }
      ]
    },
    tx_vitd: {
      text: '主治醫師搖頭。',
      feedback: 'Granuloma 會把 vitamin D 不受控制地轉成 calcitriol，補 vitamin D 只會讓高血鈣更嚴重。要限制 vitamin D、避免過度日曬。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    tx_ptx: {
      text: '主治醫師搖頭。',
      feedback: 'PTH 是被抑制的，這不是 hyperparathyroidism。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '一週內 Ca 回到 10.1，Cr 降到 1.4。Prednisone 減到 7.5 mg 維持。蘇先生換成室內工作一段時間，也停了維他命 D。',
      ending: {
        grade: 'good',
        title: 'Sarcoidosis with hypercalcemia',
        pearls: [
          'Hypercalcemia 10-20%、hypercalciuria 最多 50%；男性較多',
          'PTH 低 + 1,25-(OH)2 D 高 -> granulomatous disease',
          '未治療 -> nephrocalcinosis、AKI',
          '限制 vitamin D、避免日曬、補水、GC；HCQ 也有效'
        ]
      }
    }
  }
});
