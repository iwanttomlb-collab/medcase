// Ch 373 Sjögren’s Disease. Source notes: notes/373-sjogren.md

RPG.registerCards('373', [
  {
    id: 'sjo-path',
    title: 'Sjögren’s disease 致病機轉',
    points: [
      '**Autoimmune epithelitis**：ductal 與 acinar epithelial cells 是主角',
      'Epithelial cells 表現 costimulatory molecules 與 **Ro/La**、表現 **TLR3、7、9**、分泌 chemokines -> **ectopic germinal centers**',
      'Epithelial cells 產生 **BAFF**（type I/II IFN 誘導）-> B cell 存活；epithelial cells 本身 apoptosis 增加',
      '外分泌腺 lymphocytic infiltration：activated T 為主；廣泛浸潤時 **B cells 為主**',
      '**B-cell hyperactivity**：hypergammaglobulinemia、RF、anti-Ro52/Ro60/La',
      '誘因：病毒、荷爾蒙、**重大壓力事件**；遺傳：HLA-DQA1*0501、IRF5、STAT4、BLK',
      '**Lymphoma**：慢性 B cell 刺激（germinal centers）+ macrophage inflammasome；產生 cryoglobulin 的 B cells 帶有 B-cell malignancy 常見突變 -> MALT lymphoma',
      'Periepithelial：interstitial nephritis -> distal RTA；immune complex -> vasculitis、MPGN'
    ],
    refs: ['Harrison’s Ch 373（Pathogenesis）']
  },
  {
    id: 'sjo-criteria',
    title: 'Sjögren’s：2016 ACR/EULAR',
    points: ['**>= 4 分**；先排除：head-neck radiation、**active HCV**、**AIDS**、**sarcoidosis**、amyloidosis、GVHD、**IgG4-RD**'],
    table: {
      head: ['項目', '分數'],
      rows: [
        ['**Labial biopsy focus score >= 1**', '3'],
        ['**Anti-Ro (SSA)**', '3'],
        ['Ocular staining score >= 5', '1'],
        ['**Schirmer <= 5 mm/5 min**', '1'],
        ['Unstimulated saliva <= 0.1 mL/min', '1']
      ]
    },
    note: '另驗：HCV、HIV、CXR（sarcoid）、SPEP、IgG4、thyroid Ab；問用藥（anticholinergic、PD-1 inhibitor）'
  },
  {
    id: 'sjo-extra',
    title: 'Sjögren’s extraglandular',
    points: [
      '約 1/3 有 extraglandular 表現',
      'Nonspecific：fatigue、Raynaud、**nonerosive arthritis**',
      '**Periepithelial**：lymphocytic interstitial pneumonitis、**interstitial nephritis -> distal RTA**、autoimmune cholangitis',
      '**Immune complex**：**palpable purpura**、mononeuritis multiplex、**MPGN**、cryoglobulinemia',
      'Myelitis 與 anti-aquaporin 4（少數）'
    ]
  },
  {
    id: 'sjo-lymphoma',
    title: 'Sjögren’s 與 lymphoma',
    points: [
      '**所有 autoimmune disease 中 lymphoma 風險最高**',
      '多為 **extranodal、low-grade MALT lymphoma**',
      '危險因子：**parotid enlargement**、**palpable purpura**、**low C4**、**cryoglobulins**、**monoclonal gammopathy**、leukopenia、**germinal centers**',
      '預後差：B symptoms、mass > 7 cm、high grade',
      'FDG-PET/CT 排除 lymphoma'
    ]
  },
  {
    id: 'sjo-tx',
    title: 'Sjögren’s 治療',
    points: [
      '眼：人工淚液；角膜潰瘍 -> **cyclosporine eye drops**、boric acid ointment',
      '口：最好的替代是**水**；**pilocarpine 5 mg tid** 或 **cevimeline 30 mg tid**',
      '**避免**：diuretics、antihypertensives、**anticholinergics**、**antidepressants**',
      'Arthralgia：**HCQ 200-400 mg/day** 或 MTX',
      'RTA：**sodium bicarbonate 0.5-2 mmol/kg/day，分 4 次**',
      'Systemic（purpura、持續 arthritis）：**GC、rituximab**'
    ]
  }
]);

RPG.registerCase({
  id: 'sjo-01',
  chapter: '373',
  title: '吞不下的餅乾',
  patient: '52 歲女性 · 銀行行員',
  summary: '眼睛像有沙子，吃餅乾要配水才吞得下去，牙齒一直蛀。',
  cards: ['sjo-path', 'sjo-criteria', 'sjo-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '「醫生，我眼睛整天像有沙子，一天點人工淚液五、六次。嘴巴乾到吃餅乾一定要配水，牙醫說我這一年蛀了四顆牙。」',
        '鄭小姐說這樣已經快一年了。'
      ],
      clue: ['52F；**眼乾**（沙粒感，人工淚液 > 3 次/天）', '**口乾**（需配水吞嚥）、dental caries 增加；~1 年'],
      choices: [{ label: '繼續問診', next: 'hx_hub' }]
    },
    hx_hub: {
      text: '你想再多知道一些。',
      choices: [
        { label: '問目前用藥', next: 'hx_drug', once: true },
        { label: '問臉頰腫脹、關節、皮膚、手指變色', next: 'hx_ros', once: true },
        { label: '問頭頸部放射治療、肝炎、輸血史', next: 'hx_exclude', once: true },
        { label: '開始理學檢查', next: 'exam', pin: true }
      ]
    },
    hx_drug: {
      text: '高血壓吃 **hydrochlorothiazide**；失眠吃 **amitriptyline 25 mg** 睡前。',
      clue: '用藥：**HCTZ**、**amitriptyline**（會加重乾燥）',
      feedback: 'Diuretics、antihypertensives、anticholinergics、antidepressants 都會減少分泌。',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_ros: {
      text: '兩側耳下偶爾會腫起來，過幾週又消。手指關節偶爾痠痛，沒有明顯腫。冬天手指會發白。沒有皮疹。',
      clue: ['間歇性雙側 **parotid swelling**', 'Arthralgia；**Raynaud**'],
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_exclude: {
      text: '沒有接受過頭頸部放射治療，沒有輸血，不知道有沒有肝炎。',
      clue: '無 head-neck radiation；HCV 狀態不明',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    exam: {
      text: '你請她張開嘴。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'oral', group: '頭頸', label: '口腔黏膜與舌頭', key: true, reveal: true,
            result: '黏膜乾、紅、黏；舌背 **filiform papillae 萎縮、深裂舌**；多處牙頸部齲齒', clue: '乾黏口腔、**fissured tongue**',
            miss: '口乾的病人要看口腔：黏膜、舌頭、牙齒。' },
          { id: 'parotid', group: '頭頸', label: '腮腺觸診與擠壓', key: true, reveal: true,
            result: '雙側腮腺輕度腫大、不痛；擠壓**無唾液流出**', clue: 'Bilateral parotid enlargement；唾液擠不出',
            miss: '要摸腮腺，大唾液腺腫大見於 2/3 病人，也是 lymphoma 危險因子。' },
          { id: 'schirmer', group: '眼', label: 'Schirmer’s I test', key: true, reveal: true,
            result: '右 **3 mm**、左 4 mm / 5 分鐘', clue: '**Schirmer 3/4 mm**（<= 5）',
            miss: 'Schirmer 是 classification 的一部分，在門診就能做。' },
          { id: 'eye', group: '眼', label: '外眼觀察', result: '結膜輕度充血；內眥濃稠分泌物' },
          { id: 'joint', group: '四肢', label: '關節', result: '無 synovitis' },
          { id: 'skin', group: '四肢', label: '下肢皮膚', result: '無 purpura' },
          { id: 'lymph', group: '頭頸', label: '頸部淋巴結', result: '未觸及' },
          { id: 'dre', group: '其他', label: '肛門指診', result: '無異常', waste: '跟乾燥症狀無關。' }
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
          { id: 'ro', group: '抗體', label: 'Anti-Ro (SSA)、anti-La (SSB)', key: true, reveal: true,
            result: '**Anti-Ro 陽性**；anti-La 陽性', clue: '**Anti-Ro (+)**、anti-La (+)',
            miss: 'Anti-Ro 是 classification 的 3 分項目。' },
          { id: 'ana', group: '抗體', label: 'ANA、RF', result: 'ANA 1:640 speckled；RF 陽性', clue: 'ANA、RF (+)' },
          { id: 'c4', group: '抗體', label: 'C3、C4', result: '正常' },
          { id: 'hcv', group: '排除', label: 'Anti-HCV、anti-HIV', key: true, reveal: true,
            result: '皆陰性', clue: 'HCV、HIV 陰性',
            miss: 'Active HCV 和 AIDS 是排除條件，HCV 也會造成 sicca 與 cryoglobulinemia。' },
          { id: 'igg4', group: '排除', label: 'Serum IgG4', key: true, reveal: true,
            result: '正常', clue: 'IgG4 正常',
            miss: '雙側腮腺腫大要排除 IgG4-related disease。' },
          { id: 'cxr', group: '排除', label: 'Chest X-ray', key: true, reveal: true,
            result: '無 hilar lymphadenopathy', clue: 'CXR 無 hilar LAP（不像 sarcoid）',
            miss: 'Sarcoidosis 也會造成腮腺腫大與乾燥，是排除條件。' },
          { id: 'spep', group: '血液', label: 'SPEP、IgG', result: '**Polyclonal hypergammaglobulinemia**，無 M-spike', clue: 'Polyclonal hypergammaglobulinemia' },
          { id: 'cbc', group: '血液', label: 'CBC、ESR', result: 'WBC 3,600；ESR 52', clue: 'Mild leukopenia；ESR 52' },
          { id: 'tsh', group: '血液', label: 'TSH、anti-TPO', result: '正常' },
          { id: 'sialo', group: '影像', label: 'Salivary gland ultrasound', result: '腮腺、頜下腺 hypoechoic 不均質', clue: 'Salivary US：不均質 hypoechoic' },
          { id: 'mri', group: '影像', label: 'Brain MRI', result: '正常', waste: '沒有神經症狀，不需要 brain MRI。' }
        ]
      }
    },
    biopsy_q: {
      text: 'Anti-Ro（3 分）+ Schirmer（1 分）= 4 分，已達分類標準。還需要做 labial minor salivary gland biopsy 嗎？',
      choices: [
        { label: '可以考慮：確認 focal lymphocytic infiltration，也看有無 germinal center 等 lymphoma 危險因子；但分類已成立', next: 'tx' },
        { label: '一定要切片才能診斷', next: 'bx_must' }
      ]
    },
    bx_must: {
      text: '主治醫師笑了笑。',
      feedback: '2016 criteria 是加總分數：anti-Ro 3 分 + Schirmer 1 分已經 4 分。切片不是必要的，但在 anti-Ro 陰性時是關鍵，也能幫忙評估 lymphoma 風險。',
      choices: [{ label: '重新思考', next: 'biopsy_q' }]
    },
    tx: {
      text: '治療？',
      choices: [
        { label: '人工淚液、多喝水；**pilocarpine 或 cevimeline**；換掉 HCTZ 與 amitriptyline；HCQ 治療 arthralgia；牙科密集追蹤', next: 'end_good' },
        { label: '高劑量 prednisone 抑制唾液腺發炎', next: 'tx_gc' },
        { label: '只開人工淚液，其他藥不用調', next: 'tx_partial' }
      ]
    },
    tx_gc: {
      text: '主治醫師搖頭。',
      feedback: 'Sicca 為主、沒有 systemic 表現時，治療目標是緩解症狀與保護眼睛牙齒。GC 和 rituximab 是給 systemic disease（purpura、持續 arthritis）的。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_partial: {
      text: '主治醫師指著用藥清單。',
      feedback: 'HCTZ 和 amitriptyline 都會讓乾燥更嚴重，應該換掉。另外可以用 pilocarpine 或 cevimeline 刺激分泌。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '三個月後，鄭小姐說吃飯不用一直配水了，人工淚液一天只用兩次。你提醒她如果腮腺持續腫大或腿上出現紫斑，要馬上回診。',
      ending: {
        grade: 'good',
        title: 'Primary Sjögren’s disease',
        pearls: [
          '2016 criteria：anti-Ro 3 分 + Schirmer 1 分 = 4 分',
          '先排除 HCV、HIV、sarcoidosis、IgG4-RD、radiation',
          '減少造成乾燥的藥物（diuretics、anticholinergics、antidepressants）',
          'Pilocarpine、cevimeline 刺激分泌；HCQ 治 arthralgia'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'sjo-02',
  chapter: '373',
  title: '站不起來的早晨',
  patient: '38 歲女性 · 幼教老師',
  summary: '早上醒來四肢軟到站不起來，抽血鉀只有 2.1。',
  cards: ['sjo-path', 'sjo-extra', 'sjo-criteria', 'sjo-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。張老師早上醒來四肢無力，連坐起來都很困難。',
        '急診學弟說：「K **2.1**，已經在補鉀了。學長，這是 periodic paralysis 嗎？」',
        '她提到這兩年眼睛常常很乾，以為是滑手機的關係。'
      ],
      clue: ['38F；急性四肢無力', '**K 2.1**', '眼乾 2 年'],
      choices: [{ label: '看血液與尿液檢查', next: 'labs' }]
    },
    labs: {
      text: '你要釐清低血鉀的原因。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'acid',
        options: [
          { id: 'abg', group: '酸鹼', label: 'Blood gas + electrolytes（含 Cl）', key: true, reveal: true,
            result: 'pH **7.28**；HCO3 **14**；Na 138、Cl **114**；**anion gap 正常**', clue: '**Normal anion gap metabolic acidosis**',
            miss: '低血鉀一定要看酸鹼狀態。' },
          { id: 'uph', group: '尿液', label: 'Urine pH', key: true, reveal: true,
            result: '**6.8**', clue: '**Urine pH 6.8**（酸血症下仍偏鹼）',
            miss: 'Normal AG acidosis 要看尿液能不能酸化。' },
          { id: 'uag', group: '尿液', label: 'Urine Na、K、Cl（urine anion gap）', key: true, reveal: true,
            result: 'Urine anion gap **正值**；urine K 偏高（renal K wasting）', clue: 'Urine AG 正值；**renal K wasting**',
            miss: 'Urine anion gap 區分腎臟與腸胃道的 bicarbonate 流失。' },
          { id: 'tsh', group: '其他', label: 'TSH、free T4', result: '正常', clue: '甲狀腺功能正常（不是 thyrotoxic periodic paralysis）' },
          { id: 'ck', group: '其他', label: 'CK', result: '480 U/L' },
          { id: 'kub', group: '影像', label: 'KUB / renal ultrasound', result: '雙側 **medullary nephrocalcinosis**', clue: '**Nephrocalcinosis**' },
          { id: 'ecg', group: '其他', label: 'ECG', result: 'U waves、QT 延長' },
          { id: 'ct', group: '影像', label: 'Brain CT', result: '正常', waste: '對稱的四肢無力 + 嚴重低血鉀，不需要先做 brain CT。' }
        ]
      }
    },
    acid: {
      text: 'Normal anion gap metabolic acidosis、尿液 pH 6.8、urine AG 正值、renal K wasting、nephrocalcinosis。',
      choices: [
        { label: '**Distal (type 1) RTA**；加上眼乾，要找 Sjögren’s', next: 'sjo_hub' },
        { label: '腹瀉造成的 bicarbonate 流失', next: 'acid_gi' }
      ]
    },
    acid_gi: {
      text: '主治醫師搖頭。',
      feedback: '腸胃道流失時腎臟會盡力酸化尿液，urine AG 會是負的，尿液 pH 通常 < 5.5。她 urine pH 6.8、urine AG 正值，是腎臟無法排酸。',
      choices: [{ label: '重新判斷', next: 'acid' }]
    },
    sjo_hub: {
      text: '你回頭找 Sjögren’s 的證據。',
      checklist: {
        prompt: '要做哪些檢查？',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'ro', group: '抗體', label: 'Anti-Ro、anti-La', key: true, reveal: true,
            result: '**Anti-Ro 陽性**', clue: '**Anti-Ro (+)**',
            miss: 'Anti-Ro 是 Sjögren’s 診斷的核心。' },
          { id: 'schirmer', group: '眼', label: 'Schirmer’s test', key: true, reveal: true,
            result: '右 2 mm、左 3 mm', clue: 'Schirmer 2/3 mm',
            miss: '她有眼乾，Schirmer 簡單又是 classification 的一項。' },
          { id: 'ana', group: '抗體', label: 'ANA、RF', result: 'ANA 1:320；RF 陽性' },
          { id: 'spep', group: '血液', label: 'SPEP', result: 'Polyclonal hypergammaglobulinemia' },
          { id: 'hcv', group: '排除', label: 'HCV、HIV', result: '陰性' },
          { id: 'bx', group: '侵入性', label: 'Kidney biopsy', result: '（未執行）',
            waste: '臨床上已能解釋，腎臟切片不是必要的第一步。' }
        ]
      }
    },
    tx: {
      text: 'Sjögren’s 合併 interstitial nephritis 造成 distal RTA。長期處置？',
      choices: [
        { label: '**口服 sodium bicarbonate（或 citrate）0.5-2 mmol/kg/day，分 4 次**，補鉀；處理 sicca；追蹤腎功能', next: 'end_good' },
        { label: '補鉀就好，酸血症不用處理', next: 'tx_konly' }
      ]
    },
    tx_konly: {
      text: '主治醫師搖頭。',
      feedback: '未治療的 acidosis 會造成 nephrocalcinosis 惡化、腎結石、骨質流失。RTA 要用口服 bicarbonate。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '張老師兩天後可以下床。半年後追蹤 HCO3 22、K 3.8，nephrocalcinosis 沒有惡化。',
      ending: {
        grade: 'good',
        title: 'Sjögren’s with distal RTA',
        pearls: [
          'Sjögren’s interstitial nephritis：hyposthenuria、**distal RTA**',
          '低血鉀麻痺 + normal AG acidosis + 尿液 pH > 5.5 -> 想 Sjögren’s',
          '未治療 -> nephrocalcinosis',
          '口服 sodium bicarbonate 0.5-2 mmol/kg/day，分 4 次'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'sjo-03',
  chapter: '373',
  title: '消不下去的腮腺',
  patient: '61 歲女性 · Sjögren’s 第 15 年',
  summary: '右邊腮腺腫了四個月都沒消，小腿最近又出現紫色小點。',
  cards: ['sjo-path', 'sjo-lymphoma', 'sjo-extra'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '林阿姨是你的老病人，primary Sjögren’s 十五年，一直只有乾燥症狀。',
        '「這次右邊耳朵下面腫了四個月，以前腫幾週就會消。最近小腿還冒出很多紫色小點點。」'
      ],
      clue: ['61F；Sjögren’s 15 年', '右側 **parotid 持續腫大 4 個月**', '小腿紫色小點'],
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
          { id: 'parotid', group: '頭頸', label: '腮腺', key: true, reveal: true,
            result: '右側腮腺 **4 cm、硬、不痛**、與周圍組織稍固定', clue: '**Persistent、firm unilateral parotid mass**',
            miss: '持續腫大的腮腺一定要仔細摸。' },
          { id: 'skin', group: '皮膚', label: '下肢皮膚', key: true, reveal: true,
            result: '雙小腿 **palpable purpura**', clue: '**Palpable purpura**',
            miss: '她說腿上有紫點，要確認是不是 palpable purpura（vasculitis）。' },
          { id: 'lymph', group: '頭頸', label: '頸部、腋下、鼠蹊淋巴結', key: true, reveal: true,
            result: '右頸 1.5 cm 淋巴結', clue: '右頸 lymphadenopathy',
            miss: '懷疑 lymphoma，要摸全身淋巴結。' },
          { id: 'spleen', group: '腹部', label: '脾臟', result: '未觸及' },
          { id: 'neuro', group: '神經', label: '下肢感覺', result: '雙足襪套型感覺減退' },
          { id: 'oral', group: '頭頸', label: '口腔', result: '嚴重舌萎縮' }
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
          { id: 'c4', group: '免疫', label: 'C3、C4', key: true, reveal: true,
            result: 'C3 正常；**C4 低**', clue: '**Low C4**',
            miss: 'Low C4 是 Sjögren’s lymphoma 的重要危險因子。' },
          { id: 'cryo', group: '免疫', label: 'Cryoglobulins', key: true, reveal: true,
            result: '**Mixed type II cryoglobulins 陽性**', clue: '**Type II cryoglobulinemia**',
            miss: 'Palpable purpura + Sjögren’s，要驗 cryoglobulins。' },
          { id: 'spep', group: '血液', label: 'SPEP、immunofixation', key: true, reveal: true,
            result: '**IgM-kappa monoclonal band**', clue: '**Monoclonal gammopathy**',
            miss: 'Monoclonal gammopathy 是 lymphoma 危險因子。' },
          { id: 'cbc', group: '血液', label: 'CBC', result: 'WBC 3,200', clue: 'Leukopenia' },
          { id: 'ldh', group: '血液', label: 'LDH', result: '輕度上升' },
          { id: 'hcv', group: '血液', label: 'Anti-HCV', result: '陰性' },
          { id: 'ua', group: '腎', label: 'UA、Cr', result: '正常' },
          { id: 'ana', group: '免疫', label: '重驗 ANA', result: '1:640',
            waste: '已知 Sjögren’s，ANA 重驗沒有幫助。' }
        ]
      }
    },
    dx: {
      text: '持續腮腺腫塊、palpable purpura、low C4、cryoglobulins、monoclonal gammopathy、leukopenia。最擔心什麼？下一步？',
      choices: [
        { label: '**MALT lymphoma**：腮腺切片（或 core biopsy）+ **FDG-PET/CT** 分期', next: 'end_good' },
        { label: 'Sjögren’s 腮腺發炎，加 prednisone 看會不會消', next: 'dx_gc' },
        { label: '細菌性腮腺炎，給抗生素', next: 'dx_abx' }
      ]
    },
    dx_gc: {
      text: '主治醫師搖頭。',
      feedback: '她集合了幾乎所有 lymphoma 危險因子。先給 GC 可能讓腫塊暫時縮小，延誤診斷。要先拿組織。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    dx_abx: {
      text: '主治醫師搖頭。',
      feedback: '不痛、硬、持續四個月、沒有發燒或化膿，不像細菌感染。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '腮腺切片：**extranodal marginal zone B-cell (MALT) lymphoma**。PET/CT 只侵犯右腮腺與右頸淋巴結。血液科安排 rituximab-based 治療，purpura 也一起改善了。',
      ending: {
        grade: 'good',
        title: 'Sjögren’s-associated MALT lymphoma',
        pearls: [
          'Sjögren’s 是所有 autoimmune disease 中 lymphoma 風險最高的',
          '危險因子：parotid enlargement、palpable purpura、low C4、cryoglobulins、monoclonal gammopathy',
          '多為 extranodal low-grade MALT lymphoma',
          '先切片再治療；FDG-PET/CT 分期'
        ]
      }
    }
  }
});
