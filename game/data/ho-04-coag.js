// HO 04 Coagulopathies and hypercoagulable states. Source: Pocket Medicine Ch 5, p15-18 of 書頁.txt

RPG.registerCards('HO4', [
  {
    id: 'ho-coag-tests',
    title: 'PT、PTT 與 mixing study',
    table: {
      head: ['', 'PT 延長', 'PTT 延長', 'PT + PTT 延長'],
      rows: [
        ['因子', 'VII', 'VIII、IX、XI、XII', 'I、II、V、X'],
        ['遺傳', 'FVII deficiency', '**Hemophilias、VWD**', 'Fibrinogen、FII、FV deficiency'],
        ['後天', '**Vit K 缺乏**、肝病、factor inhibitor', '**Antiphospholipid Ab**、factor inhibitor', '**DIC**、肝病、factor inhibitor']
      ]
    },
    points: [
      '**Mixing study**：病人血漿與正常血漿 1:1 -> **矯正 = factor deficiency**；**不矯正 = inhibitor**',
      '**DIC**：所有因子消耗，**FV、FVIII 都低**',
      '**肝病**：除了 **FVIII**（內皮製造）以外都低 -> FV 低、FVIII 正常',
      '**Vit K 缺乏**：II、VII、IX、X（與 protein C、S）低；**V、VIII 正常**',
      'Vit K 缺乏原因：營養不良、抗生素抑制腸道菌、吸收不良、肝病、warfarin'
    ],
    refs: ['JAMA 2016;316:2146（coagulation tests）']
  },
  {
    id: 'ho-hemophilia',
    title: 'Hemophilia 與 factor inhibitor',
    points: [
      '**X-linked recessive**：FVIII（hemophilia A）或 FIX（hemophilia B）',
      '嚴重度：mild 5-25%、moderate 1-5%、**severe < 1%**',
      '表現：**hemarthroses**、hematomas、瘀青、黏膜/GI/GU 出血',
      'Dx：**PTT 延長、mixing 可矯正**、vWF 正常、FVIII/IX 低、基因檢測',
      '急性出血：輕微 -> TXA ± DDAVP（hem A）；其他 -> FVIII/IX；有 inhibitor -> bypassing agent（**rFVIIa**）',
      '預防：factor（含長效型）；**emicizumab**（橋接 FIX 與 FX，hem A 有無 inhibitor 皆可）；用 emicizumab 避免 FEIBA（TMA）；gene therapy',
      '**Acquired inhibitor**（多為 anti-FVIII）：產後、lymphoproliferative、自體免疫、癌症',
      'Inhibitor Dx：**PTT 延長、mixing 不矯正**；Bethesda assay 定量',
      'Inhibitor Rx：高效價 -> **rFVIIa**、porcine FVIII、aPCC；加**免疫抑制**；其他 -> 高純度 factor、plasmapheresis'
    ],
    refs: ['Lancet 2025;405:736（hemophilias）', 'NEJM 2023;388:310（extended half-life factor）', 'NEJM 2017;377:809 & 2018;379:811（emicizumab）', 'NEJM 2023;388:694 & 706；2024;391:1108（gene therapy）']
  },
  {
    id: 'ho-dic',
    title: 'Disseminated intravascular coagulation',
    points: [
      '病因：外傷、休克、**感染**、**惡性腫瘤（尤其 APL）**、**產科併發症**',
      '機轉：大量凝血活化 -> 微血管血栓（缺血 + MAHA）+ 因子與 PLT 消耗（出血）',
      'Chronic DIC（如癌症）：因子與 PLT 可代償 -> 以**血栓**為主',
      'Dx：**PT、PTT 延長**、**fibrinogen 下降**（急性期反應可能掩蓋）、FDP/D-dimer 上升、PLT 下降、schistocytes、LDH 上升、haptoglobin 下降',
      'Chronic DIC：FDP/D-dimer 上升，PLT 不定，其他可正常',
      'Rx：**治療原因**；支持：FFP、**cryo（目標 fibrinogen > 100 mg/dL）**、PLT'
    ],
    refs: ['NEJM 2014;370:847（DIC）']
  },
  {
    id: 'ho-reversal',
    title: '抗凝劑逆轉',
    table: {
      head: ['藥物', '監測', '嚴重出血的逆轉（+ 停藥）'],
      rows: [
        ['UFH', 'PTT、anti-Xa', '**Protamine** 1 mg/100 U（max 50 mg）；輸注時以每小時劑量 x 2 計算'],
        ['LMWH', 'anti-Xa', 'Protamine 1 mg/1 mg enoxaparin（只逆轉約 60%）'],
        ['Bivalirudin、argatroban', 'PTT', '停藥（半衰期短）；bivalirudin 可透析'],
        ['**Warfarin**', 'PT/INR', '**無出血**：INR > 9 給 vit K 2.5 mg PO；**出血：vit K 10 mg IV + 4F-PCC**（INR 2-4、4-6、> 6 分別 25、35、50 U/kg）或 FFP'],
        ['Dabigatran', 'PTT', '**Idarucizumab**；可透析'],
        ['Rivaroxaban、apixaban、edoxaban', 'anti-Xa', '**Andexanet**；沒有則 **4F-PCC**'],
        ['Fibrinolytics', 'Fibrinogen', 'Cryo、FFP ± TXA、aminocaproic acid']
      ]
    },
    note: 'INR 升高但沒出血，vit K 除了 INR > 9 以外沒有證據顯示臨床好處。4F-PCC 含 FII、VII、IX、X 與 protein C、S。',
    refs: ['Circ 2016;134:248（anticoagulant reversal）', 'Blood Adv 2019;3:789（vit K）', 'NEJM 2017;377:431（idarucizumab）', 'JACC 2020;76:594（4F-PCC）']
  },
  {
    id: 'ho-thrombophilia',
    title: 'Thrombophilia',
    table: {
      head: ['遺傳因子', '盛行率', 'VTE 相對風險', '備註'],
      rows: [
        ['**Factor V Leiden**', '約 5%', '約 5', 'APC resistance'],
        ['Prothrombin G20210A', '2%', '約 4', 'Prothrombin 上升'],
        ['Protein C deficiency', '0.02-0.05%', '> 20', '**Warfarin skin necrosis**'],
        ['Protein S deficiency', '0.01-1%', '> 20', ''],
        ['Antithrombin deficiency', '0.04%', '> 20', '可能 **heparin resistance**']
      ]
    },
    points: [
      '何時懷疑：年輕、特殊部位、反覆血栓、流產、家族史',
      '**Splanchnic 或 cerebral venous sinus thrombosis** -> 驗 **MPN（JAK2 V617F）**與 **PNH（flow CD55/CD59）**',
      '不明原因 arterial thrombosis -> APS',
      '癌症篩檢：年齡相符的篩檢即可（unprovoked VTE 約 4% 有 occult cancer）；**常規腹骨盆 CT 沒有好處**',
      '**診斷血栓時不要送 thrombophilia**：急性期消耗、抗凝干擾，且多不改變處置；完成 3-6 個月治療後再評估是否會改變長期抗凝',
      '懷孕：曾 VTE 或有兩個遺傳因子 -> 產前產後預防；AT、protein C、S 缺乏合併家族史 -> 產後預防'
    ],
    note: 'APS：warfarin（INR 2-3）優於 DOAC，尤其 triple positive；CAPS = >= 3 器官 < 1 週，steroids + 抗凝 + PEX/IVIg（詳見風濕免疫 Ch 369）。',
    refs: ['Blood Adv 2023;7:7101（thrombophilia testing）', 'NEJM 2015;373:697（occult cancer screening）', 'Blood Adv 2018;2:3317（pregnancy）', 'Blood 2018;132:1365（DOAC in APS）', 'Arth Rheum 2006;54:2568（CAPS）']
  }
]);

RPG.registerCase({
  id: 'ho4-acqhemo',
  chapter: 'HO4',
  title: '一夜之間的大片瘀青',
  patient: '76 歲男性 · 退休公務員',
  summary: '從來沒有出血問題，這週手臂和大腿突然出現大片瘀青，今天右前臂腫得發硬。',
  cards: ['ho-coag-tests', 'ho-hemophilia'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。張伯伯這週身上出現好幾大片紫黑色瘀青，沒有撞到。今天抽血的右前臂腫脹變硬、手指麻。',
        '過去沒有出血史，年輕時拔牙、割盲腸都沒事。沒有吃抗凝劑或抗血小板藥。'
      ],
      clue: ['76M；**新發生**大片自發瘀青', '右前臂抽血處**大血腫**、手指麻', '**過去無出血史**；無抗凝藥'],
      choices: [{ label: '開檢查', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'mix',
        options: [
          { id: 'cbc', group: '基本', label: 'CBC', key: true, reveal: true,
            result: 'Hb **8.9**；PLT 230k', clue: 'Hb 8.9；**PLT 正常**',
            miss: '先看 PLT 和 Hb。' },
          { id: 'pt', group: '凝血', label: 'PT、aPTT', key: true, reveal: true,
            result: 'PT 正常；**aPTT 78 秒**', clue: '**單獨 aPTT 延長（78 秒）**',
            miss: '出血一定要驗 PT、aPTT。' },
          { id: 'fbg', group: '凝血', label: 'Fibrinogen、D-dimer', result: '正常', clue: 'Fibrinogen、D-dimer 正常（不像 DIC）' },
          { id: 'lft', group: '基本', label: 'LFT', result: '正常' },
          { id: 'cr', group: '基本', label: 'BUN、Cr', result: '正常' },
          { id: 'ct', group: '影像', label: '前臂超音波', key: true, reveal: true,
            result: '前臂屈肌群內大血腫，壓力上升', clue: '前臂肌肉內血腫（**compartment 風險**）',
            miss: '手指麻 = 可能 compartment syndrome，要評估。' },
          { id: 'bm', group: '其他', label: 'Bone marrow', result: '（未執行）',
            waste: 'PLT 正常，問題在凝血，不需要骨髓。' }
        ]
      }
    },
    mix: {
      text: '單獨 aPTT 延長。下一步？',
      choices: [
        { label: '**Mixing study**', next: 'mix_res' },
        { label: '直接驗 lupus anticoagulant，aPTT 延長最常見是 LA', next: 'mix_la' }
      ]
    },
    mix_la: {
      text: '主治醫師搖頭。',
      feedback: 'LA 很少出血（反而是血栓）。他有嚴重出血，先做 mixing study 分辨 deficiency 和 inhibitor。',
      choices: [{ label: '重新決定', next: 'mix' }]
    },
    mix_res: {
      text: 'Mixing study：立即混合後 aPTT 42 秒，**37 度培養 2 小時後回到 70 秒**。',
      clue: '**Mixing study 不矯正**（時間依賴型）',
      choices: [
        { label: 'Inhibitor：驗 **FVIII、IX、XI 活性**與 **Bethesda assay**', next: 'f8' },
        { label: 'Factor deficiency，給 FFP 補因子', next: 'mix_ffp' }
      ]
    },
    mix_ffp: {
      text: '主治醫師搖頭。',
      feedback: '不矯正 = inhibitor。FFP 補進去的因子會被抗體中和，對嚴重出血沒有用。',
      choices: [{ label: '重新判讀', next: 'mix_res' }]
    },
    f8: {
      text: 'FVIII activity **2%**；FIX、XI 正常；**Bethesda 28 BU**。',
      clue: '**FVIII 2%、Bethesda 28 BU** -> **acquired hemophilia A**',
      choices: [{ label: '處理出血', next: 'tx' }]
    },
    tx: {
      text: '前臂血腫在擴大，Hb 掉到 7.8。止血用什麼？',
      choices: [
        { label: '**Bypassing agent（rFVIIa 或 aPCC）**；同時開始**免疫抑制**（steroids ± rituximab 或 CYC）', next: 'cause' },
        { label: '高劑量 FVIII concentrate', next: 'tx_f8' },
        { label: 'DDAVP', next: 'tx_ddavp' },
        { label: '外科立刻做 fasciotomy，凝血之後再處理', next: 'tx_surg' }
      ]
    },
    tx_f8: {
      text: '主治醫師搖頭。',
      feedback: 'Bethesda 28 BU 是高效價抑制劑，人類 FVIII 會被中和。高效價要用 bypassing agent（rFVIIa、aPCC）或 porcine FVIII。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_ddavp: {
      text: '主治醫師搖頭。',
      feedback: 'DDAVP 只能讓 FVIII 小幅上升，對高效價抑制劑與嚴重出血無效。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_surg: {
      text: '主治醫師搖頭。',
      feedback: '沒有矯正凝血就開刀，出血會失控。先給 bypassing agent，盡量避免侵入性處置；若真的需要 fasciotomy 也要在止血治療保護下。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    cause: {
      text: '出血控制住了。Acquired hemophilia A 還要找什麼？',
      choices: [
        { label: '找相關疾病：**惡性腫瘤**（含 lymphoproliferative）、**自體免疫**疾病、藥物', next: 'end_good' },
        { label: '老年人特發性的，不用找', next: 'end_ok',
          why: 'Acquired inhibitor 常與惡性腫瘤、lymphoproliferative、自體免疫疾病相關（年輕女性則是產後），找到並治療原因也有助於清除抑制劑。' }
      ]
    },
    end_ok: {
      text: '抑制劑清除得很慢。半年後張伯伯因為血尿被發現膀胱癌。',
      ending: {
        grade: 'ok',
        title: 'Acquired hemophilia A，延遲發現相關癌症',
        pearls: [
          'Acquired inhibitor：產後、lymphoproliferative、自體免疫、癌症',
          '高效價 -> bypassing agent + 免疫抑制'
        ]
      }
    },
    end_good: {
      text: 'CT 發現一個早期攝護腺癌。在 prednisone + rituximab 下，八週後 Bethesda 轉陰，FVIII 回到 85%。',
      ending: {
        grade: 'good',
        title: 'Acquired hemophilia A',
        pearls: [
          '老年人新發生的嚴重出血 + 單獨 PTT 延長 -> 想 acquired inhibitor',
          'Mixing study 不矯正 = inhibitor；Bethesda 定量',
          '止血：rFVIIa、aPCC、porcine FVIII；不是 FFP 或人類 FVIII',
          '免疫抑制 + 找相關疾病'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho4-warf',
  chapter: 'HO4',
  title: '吃 warfarin 的阿嬤跌倒了',
  patient: '81 歲女性 · AF on warfarin',
  summary: '在浴室跌倒後越來越嗜睡，家人說最近她感冒有吃抗生素。',
  cards: ['ho-reversal', 'ho-coag-tests'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。林阿嬤有 AF，吃 warfarin 三年，INR 一向穩定在 2-3。',
        '一週前感冒，診所開了 **TMP-SMX**。今天早上在浴室跌倒撞到頭，中午開始越來越嗜睡。',
        'GCS **E3V4M6**。Brain CT：**左側 acute subdural hematoma**，midline shift 4 mm。**INR 7.8**。'
      ],
      clue: ['81F；AF on **warfarin**', '一週前開始 **TMP-SMX**（抑制 warfarin 代謝）', '**Acute SDH**；GCS 13', '**INR 7.8**'],
      choices: [{ label: '逆轉抗凝', next: 'rev' }]
    },
    rev: {
      text: 'INR 7.8 加顱內出血。要怎麼逆轉？',
      choices: [
        { label: '停 warfarin；**vitamin K 10 mg IV** + **4F-PCC 50 U/kg**（INR > 6）', next: 'rev_ok' },
        { label: '只給 vitamin K 10 mg IV', next: 'rev_k' },
        { label: '輸 FFP 4 單位就好', next: 'rev_ffp' },
        { label: '給 protamine', next: 'rev_prot' }
      ]
    },
    rev_k: {
      text: '主治醫師搖頭。',
      feedback: 'Vit K 要 12-24 小時才會讓肝臟重新製造因子。顱內出血要立刻補因子：vit K 10 mg IV **加** 4F-PCC。',
      choices: [{ label: '重新決定', next: 'rev' }]
    },
    rev_ffp: {
      text: '主治醫師搖頭。',
      feedback: 'FFP 也可以，但比較慢、量大（老人心臟負荷）、需要解凍配血。4F-PCC 量小、快速。而且仍需同時給 vit K，否則因子補完又掉回去。',
      choices: [{ label: '重新決定', next: 'rev' }]
    },
    rev_prot: {
      text: '主治醫師搖頭。',
      feedback: 'Protamine 是逆轉 heparin（UFH、部分 LMWH）的，對 warfarin 沒有作用。',
      choices: [{ label: '重新決定', next: 'rev' }]
    },
    rev_ok: {
      text: [
        '30 分鐘後 INR 1.3。神經外科評估後保守治療，血腫沒有擴大。',
        '隔壁床的陳伯伯也吃 warfarin，今天例行抽血 **INR 9.6**，**沒有任何出血**。護理師問要怎麼處理。'
      ],
      clue: '另一位病人：INR 9.6、**無出血**',
      choices: [
        { label: '暫停 warfarin，**vitamin K 2.5 mg PO**，找原因、追蹤 INR', next: 'next_pt' },
        { label: '一樣給 4F-PCC', next: 'n_pcc' },
        { label: 'INR > 4 都不用處理，下次減量就好', next: 'n_none' }
      ]
    },
    n_pcc: {
      text: '主治醫師搖頭。',
      feedback: '沒有出血不需要 4F-PCC，它有血栓風險又昂貴。INR > 9 無出血：停藥 + vit K 2.5 mg PO。',
      choices: [{ label: '重新決定', next: 'rev_ok' }]
    },
    n_none: {
      text: '主治醫師搖頭。',
      feedback: 'INR 在 4.5-9 之間沒出血，停藥一兩劑即可；但 **INR > 9** 要加口服 vit K 2.5 mg。',
      choices: [{ label: '重新決定', next: 'rev_ok' }]
    },
    next_pt: {
      text: '回到林阿嬤。家屬問：「她的心律不整，之後還要吃抗凝血藥嗎？如果改新藥，萬一又出血怎麼辦？」主治醫師請你講一下 DOAC 的逆轉。',
      choices: [
        { label: '**Dabigatran -> idarucizumab**；**Xa inhibitors（apixaban、rivaroxaban、edoxaban）-> andexanet，沒有則 4F-PCC**', next: 'end_good' },
        { label: 'DOAC 都沒有解藥，出血只能等', next: 'end_ok',
          why: 'Dabigatran 有 idarucizumab（也可透析）；Xa inhibitors 有 andexanet，沒有時用 4F-PCC。' }
      ]
    },
    end_ok: {
      text: '家屬擔心沒有解藥，決定完全不用抗凝。半年後阿嬤因為 cardioembolic stroke 入院。',
      ending: {
        grade: 'ok',
        title: '顱內出血逆轉成功，但衛教不正確',
        pearls: [
          'Dabigatran -> idarucizumab；Xa inhibitors -> andexanet 或 4F-PCC',
          'Warfarin 出血：vit K 10 mg IV + 4F-PCC'
        ]
      }
    },
    end_good: {
      text: '一個月後神經外科與心臟科討論，阿嬤改用 apixaban。家屬把逆轉劑的名字記在手機裡。',
      ending: {
        grade: 'good',
        title: 'Warfarin 相關 SDH 的逆轉',
        pearls: [
          'TMP-SMX 等藥物會讓 INR 飆高',
          '嚴重出血：vit K 10 mg IV + 4F-PCC（INR > 6 給 50 U/kg）或 FFP',
          '無出血 INR > 9：停藥 + vit K 2.5 mg PO',
          'Dabigatran -> idarucizumab；Xa inhibitors -> andexanet 或 4F-PCC'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho4-dic',
  chapter: 'HO4',
  title: '產房的電話',
  patient: '34 歲女性 · 懷孕 35 週',
  summary: '突然腹痛、陰道出血，打點滴的地方也開始滲血。',
  cards: ['ho-dic', 'ho-coag-tests'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '產房緊急會診。周女士懷孕 35 週，兩小時前突然劇烈腹痛、子宮硬得像木板，陰道出血。超音波：**placental abruption**，胎心音變慢。',
        '產科準備緊急剖腹產。護理師說：「她的 IV 注射點和抽血的地方一直在滲血。」'
      ],
      clue: ['34F，35 週；**placental abruption**', '**IV 注射點滲血**', '準備緊急剖腹產'],
      choices: [{ label: '開檢查', next: 'labs' }]
    },
    labs: {
      text: '開立 STAT 檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'cbc', group: '血液', label: 'CBC', key: true, reveal: true,
            result: 'Hb 8.1；**PLT 52k**', clue: 'Hb 8.1、**PLT 52k**',
            miss: 'DIC 的評估要有 PLT。' },
          { id: 'pt', group: '凝血', label: 'PT、aPTT', key: true, reveal: true,
            result: '**INR 2.1**；**aPTT 58 秒**', clue: '**INR 2.1、aPTT 58**',
            miss: 'PT、aPTT 延長是消耗性凝血病的關鍵。' },
          { id: 'fbg', group: '凝血', label: 'Fibrinogen', key: true, reveal: true,
            result: '**78 mg/dL**', clue: '**Fibrinogen 78**',
            miss: '產科出血最重要的指標是 fibrinogen（懷孕時本應偏高）。' },
          { id: 'dd', group: '凝血', label: 'D-dimer', key: true, reveal: true,
            result: '**> 20 ug/mL**', clue: 'D-dimer > 20',
            miss: 'D-dimer 反映纖溶，是 DIC 的一部分。' },
          { id: 'smear', group: '血液', label: 'Smear', result: '少量 schistocytes', clue: '少量 schistocytes' },
          { id: 'type', group: '備血', label: 'Type & crossmatch', key: true, reveal: true,
            result: '已備 PRBC、FFP、cryo、PLT', clue: '已備血品',
            miss: '大量出血要立刻備血。' },
          { id: 'adam', group: '其他', label: 'ADAMTS13', result: '（不需要）',
            waste: 'PT/aPTT 延長、fibrinogen 低，是 DIC 不是 TTP。' },
          { id: 'hit', group: '其他', label: 'HIT antibody', result: '（不需要）',
            waste: '沒有 heparin 暴露，也不是血栓表現。' }
        ]
      }
    },
    dx: {
      text: 'PT、aPTT 延長、fibrinogen 78、PLT 52k、D-dimer 極高，臨床有誘因（abruption）。',
      clue: '**Acute DIC**（placental abruption）',
      choices: [{ label: '處理', next: 'tx' }]
    },
    tx: {
      text: '要剖腹產了，她還在滲血。處置？',
      choices: [
        { label: '**移除原因（緊急分娩）**；輸 **cryo（目標 fibrinogen > 100，產科更高）**、FFP、PLT、PRBC', next: 'end_good' },
        { label: '先給 heparin 阻斷微血栓', next: 'tx_hep' },
        { label: '等凝血矯正到正常再剖腹', next: 'tx_wait' },
        { label: '只輸 PLT 到 100k', next: 'tx_plt' }
      ]
    },
    tx_hep: {
      text: '主治醫師立刻制止。',
      feedback: '急性 DIC 正在大出血，heparin 只會讓出血更糟。Heparin 只在以血栓為主的 chronic DIC 考慮。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_wait: {
      text: '產科主治回頭看你。',
      feedback: 'DIC 的核心是治療原因。胎盤還在，凝血活化就不會停，越等越糟。邊補血品邊分娩。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_plt: {
      text: '主治醫師搖頭。',
      feedback: 'Fibrinogen 78 才是最大問題，要用 cryo 補到 > 100（產科常更高）。FFP 補其他因子，PLT 只是其中一部分。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '輸了 cryo 10 單位、FFP 4 單位、PLT 1 劑後剖腹產。寶寶 Apgar 7/9。術後 12 小時 fibrinogen 210、PLT 88k，不再滲血。',
      ending: {
        grade: 'good',
        title: 'Placental abruption 引起的 acute DIC',
        pearls: [
          'DIC 病因：感染、外傷、休克、惡性腫瘤（APL）、產科',
          'PT/PTT 延長、fibrinogen 低、D-dimer 高、PLT 低 -> DIC（TTP 凝血正常）',
          '治療原因；cryo 目標 fibrinogen > 100、FFP、PLT',
          '急性出血型 DIC 不給 heparin'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho4-splanchnic',
  chapter: 'HO4',
  title: '肚子痛的年輕人',
  patient: '42 歲男性 · 業務',
  summary: '一週腹痛，CT 發現 portal vein 與 SMV 血栓。他要求「全套血栓基因檢查」。',
  cards: ['ho-thrombophilia'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '腸胃科轉來會診。王先生一週持續上腹痛，CT：**portal vein 與 superior mesenteric vein thrombosis**，沒有肝硬化、沒有腫瘤、沒有胰臟炎。',
        '已經開始 enoxaparin 治療劑量。',
        'CBC：Hb **16.9**、Hct **51%**、PLT **612k**、WBC 12,100。脾臟在肋下 2 指。',
        '他說：「我上網查了，可以把所有血栓的基因、蛋白質都驗一驗嗎？」'
      ],
      clue: ['42M；**portal + SMV thrombosis**（splanchnic）', '**Hb 16.9、Hct 51%、PLT 612k**、WBC 12.1k', '**Splenomegaly**', '已用 enoxaparin'],
      choices: [{ label: '決定要驗什麼', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'mpn',
        options: [
          { id: 'jak2', group: 'Splanchnic 必驗', label: '**JAK2 V617F**', key: true, reveal: true,
            result: '**陽性**（allele burden 18%）', clue: '**JAK2 V617F (+)**',
            miss: 'Splanchnic 或 cerebral venous thrombosis 一定要驗 MPN，JAK2 V617F 是第一步。他的 CBC 已經在提示 MPN。' },
          { id: 'pnh', group: 'Splanchnic 必驗', label: '**PNH flow cytometry（CD55/CD59）**', key: true, reveal: true,
            result: '陰性', clue: 'PNH flow 陰性',
            miss: 'Splanchnic thrombosis 也要排除 PNH。' },
          { id: 'epo', group: '其他', label: 'Serum EPO', result: '**低**（2.1 mU/mL）', clue: '**EPO 低**' },
          { id: 'pcs', group: '遺傳性', label: 'Protein C、protein S、antithrombin 活性', result: '（暫緩）',
            waste: '急性血栓期會被消耗、抗凝也會干擾，現在驗容易誤判，而且不改變處置。' },
          { id: 'fvl', group: '遺傳性', label: 'Factor V Leiden、prothrombin G20210A', result: '（暫緩）',
            waste: '基因檢測不受急性期影響，但通常不改變目前處置；等完成初期治療再評估。' },
          { id: 'apl', group: '其他', label: 'Antiphospholipid antibodies', result: '陰性' },
          { id: 'ctabd', group: '其他', label: '全身 PET-CT 找癌症', result: '（未執行）',
            waste: '已有 CT，沒有癌症線索；做年齡相符的篩檢即可，常規擴大影像沒有好處。' }
        ]
      }
    },
    mpn: {
      text: 'JAK2 V617F 陽性、Hct 51%、EPO 低、PLT 高、脾腫大。',
      choices: [
        { label: '**MPN（符合 polycythemia vera）** 是血栓的原因，轉血液科治療 MPN', next: 'tx' },
        { label: 'JAK2 只是偶然發現，不用處理', next: 'mpn_ignore' }
      ]
    },
    mpn_ignore: {
      text: '主治醫師搖頭。',
      feedback: '年輕人 splanchnic thrombosis 常是 MPN 的第一個表現。JAK2 陽性 + 紅血球增多 + EPO 低，符合 PV，要治療才能預防再發。',
      choices: [{ label: '重新判讀', next: 'mpn' }]
    },
    tx: {
      text: '長期計畫？',
      choices: [
        { label: '**長期抗凝** + **phlebotomy 到 Hct < 45%** + **hydroxyurea**（有血栓史屬高風險）；ASA 與抗凝併用要權衡出血', next: 'end_good' },
        { label: '抗凝 3 個月就停，因為有誘因', next: 'end_stop',
          why: 'MPN 是持續存在的血栓危險因子，splanchnic thrombosis 合併 MPN 通常需要長期抗凝，並控制 Hct 與 cytoreduction。' }
      ]
    },
    end_stop: {
      text: '停抗凝兩個月後，他因為 Budd-Chiari syndrome 住院。',
      ending: {
        grade: 'bad',
        title: 'MPN 相關血栓再發',
        pearls: [
          'MPN 是持續性危險因子',
          'Splanchnic/CVST -> 驗 JAK2、PNH'
        ]
      }
    },
    end_good: {
      text: '血液科確診 PV。一年後 Hct 維持 43%，portal vein 部分再通，沒有新血栓。',
      ending: {
        grade: 'good',
        title: 'Splanchnic vein thrombosis 揭露 polycythemia vera',
        pearls: [
          'Splanchnic 或 cerebral venous sinus thrombosis -> JAK2 V617F、PNH flow',
          '急性血栓時不送 protein C/S/AT；完成初期治療後再評估',
          '癌症篩檢：年齡相符即可，不做常規擴大影像',
          'PV：phlebotomy Hct < 45%、ASA、高風險加 hydroxyurea'
        ]
      }
    }
  }
});
