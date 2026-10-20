// ID 07 Infective endocarditis, myocarditis, pericarditis.
// Source: Washington Manual Ch 14 (source/Washington ID.txt, lines 526-777, Tables 14-5 to 14-8).

RPG.registerCards('ID7', [
  {
    id: 'id-ie-path',
    title: '感染性心內膜炎 致病機轉',
    points: [
      '瓣膜內皮或心內膜**受傷**（亂流、導管、注射的顆粒）-> 暴露內皮下 collagen -> **血小板與 fibrin 沉積**（nonbacterial thrombotic vegetation）',
      '血中細菌黏附到這個病灶 -> 被 fibrin 包住、免疫細胞進不去 -> **感染性 vegetation**，細菌密度極高、代謝慢 -> 需要**殺菌性**抗生素、**長療程**',
      '黏附能力強的菌最常見：**S. aureus**、viridans streptococci（dextran）、enterococci',
      '**局部**：瓣膜破壞 -> 逆流、心衰竭；往周圍延伸 -> **瓣環膿瘍**、傳導阻滯',
      '**栓塞**：vegetation 碎片 -> 腦中風、腎、脾、肺（右心 IE）梗塞；微血管 -> splinter hemorrhage、**Janeway lesions**；**mycotic aneurysm**',
      '**免疫複合體**（亞急性多見）：**glomerulonephritis**、**Osler nodes**、**Roth spots**、**RF 陽性**、補體下降',
      '**注射藥物**：右心（三尖瓣）多、S. aureus 為主；**人工瓣膜**：早期術中污染（S. aureus、CoNS、GNB、Candida）'
    ],
    note: '致病機轉為一般教科書內容補充（原文有簡述 vegetation 形成）。'
  },
  {
    id: 'id-duke',
    title: '2023 Duke-ISCVID criteria（Table 14-5、14-6）',
    table: {
      head: ['類別', 'Major', 'Minor'],
      rows: [
        ['**微生物**', '常見 IE 菌（**S. aureus、S. lugdunensis、E. faecalis**、鏈球菌（除 S. pneumoniae、S. pyogenes）、HACEK、Granulicatella/Abiotrophia、Gemella）**>= 2 套**；少見菌 **>= 3 套**；**Coxiella** PCR 或 **phase I IgG > 1:800**；Bartonella、T. whipplei PCR', '血液培養陽性但不符合 major；其他無菌部位培養或 PCR 符合'],
        ['**影像**', '心臟超音波或 CT：**vegetation**、瓣膜穿孔或瘤、**膿瘍**、假性動脈瘤、廔管；**新的明顯逆流**；人工瓣膜**新的部分脫落**；**FDG PET/CT** 瓣膜或人工物代謝增加', '人工物植入 3 個月內的 PET 異常'],
        ['**手術**', '開心手術直接看到 IE 證據', ''],
        ['**其他 minor**', '', '**易感心臟病變、注射藥物、心內植入裝置**；**發燒 >= 38°C**；**血管現象**（栓塞、septic pulmonary infarcts、腦或脾膿瘍、mycotic aneurysm、顱內或結膜出血、Janeway lesions）；**免疫現象**（GN、Osler nodes、Roth spots、RF）；沒有心臟超音波時聽到新的逆流雜音']
      ]
    },
    points: [
      '**Definite**：病理證據，或臨床 **2 major**、**1 major + 3 minor**、**5 minor**',
      '**Possible**：**1 major + 1 minor**，或 **3 minor**',
      '**Rejected**：明確其他診斷；抗生素 <= 4 天後未復發；抗生素 <= 4 天後手術或解剖無病理證據'
    ],
    refs: ['CID 2023;77:518（2023 Duke-ISCVID criteria）']
  },
  {
    id: 'id-ie-dx',
    title: 'IE 的臨床表現與檢查',
    points: [
      '**急性**：sepsis、心衰竭、栓塞；**亞急性**：數週的低燒、倦怠、關節痛、體重減輕；**發燒 + 心雜音**是兩大特徵',
      '檢驗：ESR/CRP 上升、正球性貧血、**RF 陽性**、**補體下降**、梅毒血清偽陽性；UA 顯微血尿、蛋白尿、膿尿',
      '**抗生素前**至少兩套（最好**三套**），**不同部位、間隔 30 分鐘**；10-15% 培養陰性，多因為**先用了抗生素**',
      '**真正的培養陰性 IE** 少見：**Coxiella**（Q fever）、**Bartonella**、Brucella、T. whipplei、Legionella、黴菌',
      '所有疑似 IE 都做心臟超音波：先 **TTE**；**TTE 陰性不能排除**（敏感度 50-70%）',
      '**TEE**（敏感度 90%）：TTE 陰性但仍懷疑、懷疑**心內併發症**（EKG 傳導延遲、持續菌血症）、決定要不要開刀',
      '**FDG PET/CT**：懷疑 PVE、主動脈人工血管',
      '**S. gallolyticus** 與大腸病變（腫瘤）相關；PVE：瓣膜術後持續菌血症或新的脫落合併溶血'
    ],
    refs: ['Circulation 2015;132:1435（AHA IE in adults）']
  },
  {
    id: 'id-ie-tx',
    title: 'IE 依病原治療（Table 14-7）',
    table: {
      head: ['病原', '處方', '療程'],
      rows: [
        ['**VGS、S. gallolyticus** MIC < 0.12', '**PCN G 12-18 MU/d** 或 **ceftriaxone 2 g qd** ± gentamicin（前 2 週）；或 vancomycin', '**4 週**（PVE、大栓塞、症狀久 -> 6 週 + gent）'],
        ['VGS MIC 0.12-0.5', 'PCN G 4 MU q4h 或 ceftriaxone + **gentamicin**；真正 β-lactam 過敏才用 vancomycin + gent', '4 週（gent 2 週）'],
        ['VGS MIC > 0.5', '當作 enterococcus 治療', '6 週'],
        ['**Enterococcus** PCN 敏感', '**Ampicillin 2 g q4h + gentamicin** 或 **ampicillin + ceftriaxone 2 g q12h**；高度 gent 抗藥 -> streptomycin 或 ceftriaxone', '4-6 週'],
        ['Enterococcus PCN 抗藥', 'Vancomycin + gentamicin', '6 週'],
        ['VRE + amp 抗藥', 'Linezolid 或 **daptomycin >= 10-12 mg/kg**；會診感染科', '>= 6 週'],
        ['**MSSA NVE**', '**Oxacillin/nafcillin 2 g q4h**；PCN 過敏（非 anaphylaxis）-> **cefazolin 2 g q8h**', '**6 週**'],
        ['MSSA **右心 NVE**（注射藥物）', '同上', '**>= 2 週**（無心臟併發症、除了肺栓塞外無其他栓塞）'],
        ['**MRSA NVE**', 'Vancomycin 或 **daptomycin >= 8 mg/kg**', '6 週'],
        ['**PVE** MSSA/MSSE', '**Oxacillin + rifampin + gentamicin**（gent 前 2 週）', '>= 6 週'],
        ['PVE MRSA/MRSE', '**Vancomycin + rifampin + gentamicin**', '>= 6 週'],
        ['**HACEK**', '**Ceftriaxone 2 g qd**；替代 ampicillin、ciprofloxacin', 'NVE 4 週、PVE 6 週'],
        ['培養陰性', '會診感染科', '']
      ]
    },
    points: [
      'S. aureus 經驗性：vancomycin；**MSSA 用 oxacillin 優於 vancomycin**；PCN 過敏盡量做 desensitization',
      'MSSA 的 gentamicin synergy（3-5 天）**可能沒有好處**',
      '穩定的亞急性 IE 可以**等培養與藥敏**再開始治療',
      '標準：**IV 4-6 週，從感染源控制與血液培養轉陰那天起算**；部分病人可在 IV 後**口服降階**',
      '每 **24-72 h** 追血液培養直到清除；3-10 天內臨床改善；持續或復發發燒 -> 心內併發症、栓塞、藥物過敏、院內感染',
      'Aminoglycoside > 7 天要做 **audiometry**；監測 aminoglycoside 與 vancomycin 濃度'
    ],
    refs: ['Circulation 2015;132:1435（AHA IE in adults）']
  },
  {
    id: 'id-ie-surg',
    title: 'IE 的手術與預防（Table 14-8）',
    points: [
      '**NVIE 三大手術適應症**：',
      '1. **栓塞風險高**：主動脈或二尖瓣 **vegetation >= 10 mm**，尤其適當治療下仍有 **>= 1 次栓塞**',
      '2. **頑固心衰竭**（主動脈或二尖瓣功能異常）',
      '3. **感染無法控制**：瓣周併發症（膿瘍）、**黴菌或高度抗藥菌**、排除其他來源後**持續菌血症 > 5-7 天**',
      '**PVE** 另外加上：瓣膜脫落、心內廔管、嚴重人工瓣膜功能異常致心衰竭、復發性 PVE'
    ],
    table: {
      head: ['IE 預防（AHA）', '內容'],
      rows: [
        ['**誰需要**', '**人工瓣膜**、**曾得過 IE**、未修補的發紺型先天性心臟病、用人工材料修補後 6 個月內或殘存缺損、**心臟移植後瓣膜病變**'],
        ['**哪些處置**', '牙科（拔牙、牙周、根管、洗牙）、支氣管鏡切片、硬式支氣管鏡、呼吸道黏膜手術、扁桃腺切除'],
        ['標準', '**Amoxicillin 2 g PO** 處置前 1 h'],
        ['無法口服', 'Ampicillin 2 g IM/IV，或 cefazolin、ceftriaxone 1 g IM/IV（30 分鐘內）'],
        ['PCN 過敏', 'Clindamycin 600 mg PO、cephalexin 2 g、clarithromycin 或 azithromycin 500 mg'],
        ['**GI、GU 處置**', '**不需常規預防**'],
        ['感染的皮膚、肌肉骨骼處置', '只有上述心臟病變需要；用抗葡萄球菌 penicillin 或 cephalosporin']
      ]
    },
    refs: ['Circulation 2007;116:1736（AHA IE prevention）']
  },
  {
    id: 'id-myoperi-path',
    title: '心肌炎與心包膜炎 致病機轉',
    points: [
      '病毒（**coxsackie B**、adenovirus、HHV-6、**parvovirus B19**）直接感染心肌細胞 -> 細胞死亡；接著 T cell 免疫反應造成更多傷害（自體免疫成分）',
      '急性期後可能痊癒，或進展為 **dilated cardiomyopathy**',
      '**NSAIDs 在心肌炎動物模型會加重心肌損傷** -> 心肌炎避免 NSAIDs',
      '心包膜炎：心包膜發炎（多為病毒）-> 胸痛隨呼吸與姿勢改變（坐起前傾減輕）、摩擦音、ST 上升與 **PR depression**；**colchicine** 抑制 neutrophil，降低復發'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-myoperi',
    title: 'Myocarditis 與 pericarditis',
    points: [
      '**Myocarditis**：急性胸痛、**troponin 上升**、發燒、瀰漫性 ST 異常；病毒最常見',
      'Gold standard：**endomyocardial biopsy**（組織學、免疫組化、病毒 PCR）；心臟影像（**cardiac MRI**）新的心室功能異常 -> clinically suspected',
      '心肌炎治療以**支持治療**為主；**避免 NSAIDs**；IVIG、抗病毒藥證據不足',
      '**Pericarditis 診斷：4 項中 >= 2 項**：胸膜性胸痛、**pericardial rub**、新的**瀰漫性 ST 上升或 PR depression**、新的或增加的心包積液',
      '病毒最常見，**不需常規檢驗**；偶爾 staphylococci、**M. tuberculosis**',
      '第一線：**NSAID**（aspirin 750-1,000 mg q8h 或 ibuprofen 600-800 mg q8h，1-2 週）**+ colchicine**（0.5-0.6 mg **qd（< 70 kg）或 q12h（>= 70 kg）**，**3 個月**）治療並預防復發',
      '非病毒的感染原因 -> 特定治療'
    ],
    refs: ['Eur Heart J 2013;34:2636（ESC myocarditis）', 'Eur Heart J 2015;36:2921（ESC pericardial diseases 2015）']
  }
]);

RPG.registerCase({
  id: 'id7-vgs',
  chapter: 'ID7',
  title: '六週的低燒',
  patient: '54 歲男性 · 國中體育老師',
  summary: '斷斷續續發燒六週，瘦了五公斤，一直很累。兩個月前拔過牙。',
  cards: ['id-ie-path', 'id-duke', 'id-ie-dx', 'id-ie-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診轉入院。吳老師六週來**傍晚低燒** 38.2°C、盜汗、倦怠、**體重減輕 5 kg**、關節痠痛。兩個月前拔了兩顆牙。以前健檢說有 **mitral valve prolapse**。',
        'T 38.3°C、BP 126/72。心尖 **holosystolic murmur**（舊病歷是 late systolic click）。指甲下有 **splinter hemorrhages**，手指腹有兩顆會痛的紅色小結節。',
        '他還沒用任何抗生素。生命徵象穩定。'
      ],
      clue: ['54M；**亞急性**發燒 6 週、體重減輕', '**MVP**；兩個月前拔牙', '**新的逆流雜音**', '**Splinter hemorrhages、Osler nodes**', '穩定、未用抗生素'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '你高度懷疑亞急性 IE。他很穩定。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'duke',
        options: [
          { id: 'bcx', group: '培養', label: '**3 套血液培養**（不同部位、間隔 30 分鐘），**抗生素前**', key: true, reveal: true,
            result: '3/3 套：**viridans group streptococci**（S. mitis），**PCN MIC 0.06**', clue: '**VGS 3/3 套**；PCN MIC 0.06',
            miss: 'IE 的關鍵是抗生素前抽 2-3 套血液培養。' },
          { id: 'tte', group: '影像', label: '**TTE**', key: true, reveal: true,
            result: '二尖瓣後葉 **8 mm vegetation**，中度 MR', clue: '**TTE：mitral vegetation 8 mm**',
            miss: '所有疑似 IE 都要做心臟超音波，先 TTE。' },
          { id: 'ua', group: '檢驗', label: 'UA、RF、補體、ESR', result: '顯微血尿；**RF 陽性**；C3 偏低；ESR 88', clue: 'RF (+)、顯微血尿（免疫現象）' },
          { id: 'ekg', group: '檢查', label: 'EKG', result: '竇性心律，PR 正常', clue: 'PR 正常' },
          { id: 'empiric', group: '用藥', label: '抽完一套就馬上開 vancomycin + gentamicin', result: '已撤回',
            waste: '他穩定、亞急性。先抽完培養，等病原與藥敏再開始；太早用藥是培養陰性 IE 最常見的原因。' }
        ]
      }
    },
    duke: {
      text: '用 Duke 標準分類。',
      choices: [
        { label: '**Definite IE**：2 major（典型菌 >= 2 套、vegetation）+ minor（易感心臟、發燒、Osler/RF 免疫現象、splinter）', next: 'tx' },
        { label: 'Possible IE：只有 1 major', next: 'd_possible' }
      ]
    },
    d_possible: {
      text: '主治醫師搖頭。',
      feedback: 'VGS 是**典型 IE 菌**、>= 2 套是 microbiologic major；超音波 vegetation 是 imaging major。**2 major = definite**。',
      choices: [{ label: '重新判斷', next: 'duke' }]
    },
    tx: {
      text: 'Native mitral VGS IE，PCN MIC 0.06（< 0.12）。他想在家打針（OPAT）。',
      choices: [
        { label: '**Ceftriaxone 2 g IV qd x 4 週**（或 penicillin G）；從血液培養轉陰起算；追蹤血液培養', next: 'proph' },
        { label: 'Vancomycin 4 週', next: 't_vanco' },
        { label: 'Ceftriaxone 2 週就好', next: 't_short' }
      ]
    },
    t_vanco: {
      text: '主治醫師搖頭。',
      feedback: 'Vancomycin 保留給**真正 β-lactam 過敏**的病人。PCN 敏感的 VGS 用 penicillin G 或 ceftriaxone。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_short: {
      text: '主治醫師搖頭。',
      feedback: 'VGS MIC < 0.12 的 native valve IE 療程是 **4 週**（gentamicin 若使用只在前 2 週），從血液培養轉陰起算。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    proph: {
      text: '治療完成，vegetation 縮小。他問以後看牙要注意什麼。',
      choices: [
        { label: '**曾得過 IE** 屬高風險：以後拔牙、牙周、根管、洗牙前 **1 小時 amoxicillin 2 g**', next: 'end_good' },
        { label: 'MVP 本來就要預防，跟這次無關', next: 'p_mvp' },
        { label: '大腸鏡、膀胱鏡前也都要預防', next: 'p_gi' }
      ]
    },
    p_mvp: {
      text: '主治醫師搖頭。',
      feedback: '單純 MVP 不在預防名單內。現在需要預防，是因為他**曾經得過 IE**。',
      choices: [{ label: '重新回答', next: 'proph' }]
    },
    p_gi: {
      text: '主治醫師搖頭。',
      feedback: '**GI、GU 處置不需要常規預防**。預防只用在牙科與特定呼吸道處置。',
      choices: [{ label: '重新回答', next: 'proph' }]
    },
    end_good: {
      text: '吳老師回到學校教書，每半年看牙並在處置前服用 amoxicillin。',
      ending: {
        grade: 'good',
        title: 'Viridans streptococcal native valve IE',
        pearls: [
          '亞急性、穩定：抗生素前 3 套培養，可以等病原再治療',
          'TTE 先做；陰性但仍懷疑 -> TEE',
          'VGS MIC < 0.12：PCN G 或 ceftriaxone 4 週',
          '曾得過 IE -> 牙科處置前 amoxicillin 2 g'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id7-pwid',
  chapter: 'ID7',
  title: '咳血的年輕人',
  patient: '29 歲男性 · 注射藥物使用者',
  summary: '高燒、胸痛、咳血，胸部 X 光兩側都是一顆一顆的。',
  cards: ['id-ie-path', 'id-ie-tx', 'id-ie-dx', 'id-duke'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。阿傑注射 heroin 三年，五天來高燒 39.8°C、寒顫、**胸膜性胸痛**、**咳血絲**。',
        'BP 108/64、HR 118。左肘窩注射處紅腫。胸骨左下緣 holosystolic murmur，吸氣時變大。',
        'CXR/CT：**兩側多顆周邊結節，部分空洞**（septic emboli）。'
      ],
      clue: ['29M；**注射藥物**', '高燒、胸膜性胸痛、咳血', '**三尖瓣區雜音**（吸氣增強）', '**兩側 septic pulmonary emboli**'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: '右心 IE 合併肺栓塞。他不穩定，要開始經驗性治療。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'report',
        options: [
          { id: 'bcx', group: '培養', label: '血液培養 x 3（抗生素前）', key: true, reveal: true,
            result: '3/3：**MSSA**', clue: '**MSSA** 3/3',
            miss: '抗生素前抽血液培養。' },
          { id: 'vanco', group: '用藥', label: '**經驗性 vancomycin**', key: true, reveal: true,
            result: '已開始', clue: '經驗性 vancomycin',
            miss: 'S. aureus IE 的經驗性治療是 vancomycin，等藥敏。' },
          { id: 'echo', group: '影像', label: 'TTE（必要時 TEE）', key: true, reveal: true,
            result: '**三尖瓣 vegetation 18 mm**，左心瓣膜正常，無膿瘍', clue: '**Tricuspid vegetation**；左心正常、無膿瘍',
            miss: '一定要做心臟超音波，確認右心或左心、有沒有膿瘍。' },
          { id: 'hiv', group: '檢驗', label: 'HIV、HCV、HBV', key: true, reveal: true,
            result: 'HCV Ab (+)；HIV 陰性', clue: 'HCV (+)',
            miss: '注射藥物使用者要篩檢血液傳染病。' },
          { id: 'id', group: '會診', label: '會診感染科、成癮治療', result: '已會診' }
        ]
      }
    },
    report: {
      text: '確定 **MSSA**，**只有右心**，沒有心臟併發症，除了肺栓塞之外沒有其他栓塞。72 小時後退燒，血液培養轉陰。',
      clue: ['MSSA；**right-sided only**', '無心臟併發症；只有肺栓塞', '72 h 退燒轉陰'],
      choices: [
        { label: '改 **oxacillin 2 g IV q4h**（或 cefazolin），**至少 2 週**；同時處理成癮', next: 'end_good' },
        { label: '繼續 vancomycin，因為他可能會再用藥、要保險', next: 'r_vanco' },
        { label: 'Oxacillin + gentamicin', next: 'r_gent' }
      ]
    },
    r_vanco: {
      text: '主治醫師搖頭。',
      feedback: '**MSSA 用 oxacillin 優於 vancomycin**。確認 MSSA 就換。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    r_gent: {
      text: '主治醫師搖頭。',
      feedback: 'MSSA IE 加 gentamicin synergy **可能沒有好處**，反而增加腎毒性與耳毒性。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    end_good: {
      text: '阿傑完成療程，並開始 buprenorphine 替代治療，HCV 轉介治療。',
      ending: {
        grade: 'good',
        title: 'Right-sided MSSA IE in PWID',
        pearls: [
          '注射藥物：三尖瓣 IE、S. aureus、septic pulmonary emboli',
          'MSSA：oxacillin 優於 vancomycin；gent synergy 可能無益',
          '只有右心、無心臟併發症、只有肺栓塞 -> >= 2 週；否則 6 週',
          '同時處理成癮與 HIV/HCV/HBV'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id7-entero',
  chapter: 'ID7',
  title: '膀胱鏡之後',
  patient: '79 歲男性 · 慢性腎病',
  summary: '做完膀胱鏡兩週後開始發燒，血液培養長了 Enterococcus faecalis。',
  cards: ['id-ie-tx', 'id-ie-dx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。羅伯伯 CKD stage 4（**CrCl 25**），三週前做膀胱鏡切片。兩週來低燒、倦怠。',
        '血液培養 3/3：**Enterococcus faecalis**（ampicillin S、**gentamicin high-level 敏感**）。',
        'TEE：**主動脈瓣 9 mm vegetation**，中度 AR，無膿瘍。'
      ],
      clue: ['79M；**CKD（CrCl 25）**', '膀胱鏡後 **E. faecalis 3/3**（amp S）', '**Aortic valve vegetation 9 mm**'],
      choices: [{ label: '選擇處方', next: 'tx' }]
    },
    tx: {
      text: 'PCN 敏感 E. faecalis 主動脈瓣 IE，CrCl 25。',
      choices: [
        { label: '**Ampicillin 2 g IV q4h + ceftriaxone 2 g IV q12h**，6 週（避免 aminoglycoside）', next: 'end_good' },
        { label: 'Ampicillin + gentamicin 6 週', next: 't_gent' },
        { label: 'Ceftriaxone 單用', next: 't_cro' },
        { label: 'Vancomycin 單用', next: 't_vanco' }
      ]
    },
    t_gent: {
      text: '主治醫師搖頭。',
      feedback: '對腎功能正常的人是選項，但他 **CrCl 25、79 歲**，6 週 gentamicin 的腎毒性和耳毒性風險太高。**Ampicillin + ceftriaxone** 一樣有效、避免 aminoglycoside。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_cro: {
      text: '主治醫師搖頭。',
      feedback: '**Cephalosporins 單用對 enterococci 無效**。Ceftriaxone 要和 ampicillin 合併才有協同作用。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_vanco: {
      text: '主治醫師搖頭。',
      feedback: 'Vancomycin 對 enterococci 只是**抑菌**，用於 PCN 抗藥且要合併 gentamicin。這株 ampicillin 敏感。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '羅伯伯完成 6 週療程，腎功能沒有惡化，vegetation 消失。',
      ending: {
        grade: 'good',
        title: 'Enterococcus faecalis native valve IE',
        pearls: [
          'PCN 敏感 enterococcus：ampicillin + gentamicin 或 ampicillin + ceftriaxone，4-6 週',
          '腎功能差 -> ampicillin + ceftriaxone 避免 aminoglycoside',
          'Cephalosporins 單用對 enterococci 無效'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id7-surgery',
  chapter: 'ID7',
  title: '左上腹痛的第五天',
  patient: '47 歲女性 · 牙周病',
  summary: 'MSSA 心內膜炎治療第五天，突然左上腹劇痛，人越來越喘。',
  cards: ['id-ie-surg', 'id-ie-tx', 'id-ie-path'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '心臟內科病房。林小姐 **MSSA 二尖瓣 native valve IE**，第一天 TEE：前葉 **15 mm vegetation**，中重度 MR。用 **oxacillin** 第 5 天。',
        '今天突然**左上腹劇痛**，CT：**脾臟梗塞**。她晚上躺不平，BNP 1,800，CXR 肺水腫加重；利尿劑後仍喘。',
        '血液培養第 3 天已轉陰。'
      ],
      clue: ['47F；**MSSA mitral IE**，vegetation **15 mm**', '治療中**新的栓塞**（脾梗塞）', '**心衰竭**加重，利尿劑反應差', '血培養已轉陰'],
      choices: [{ label: '下一步', next: 'decide' }]
    },
    decide: {
      text: '她需要手術嗎？',
      choices: [
        { label: '**會診心臟外科，盡早手術**：vegetation >= 10 mm 合併治療中栓塞、加上頑固心衰竭', next: 'abx' },
        { label: '血液培養已經轉陰，繼續抗生素就好', next: 'd_wait' },
        { label: '加 gentamicin 加強殺菌', next: 'd_gent' }
      ]
    },
    d_wait: {
      text: '主治醫師搖頭。',
      feedback: '血液培養轉陰不代表沒事。她有**兩個手術適應症**：二尖瓣 vegetation >= 10 mm 且適當治療下仍有栓塞、**頑固心衰竭**。',
      choices: [{ label: '重新決定', next: 'decide' }]
    },
    d_gent: {
      text: '主治醫師搖頭。',
      feedback: 'MSSA 加 gentamicin 可能沒有好處。問題是**手術適應症**，不是抗生素不夠。',
      choices: [{ label: '重新決定', next: 'decide' }]
    },
    abx: {
      text: '她做了二尖瓣修補。術後抗生素？她說以前吃 amoxicillin 起過蕁麻疹。',
      choices: [
        { label: '續 **oxacillin**（或 PCN 過敏非 anaphylaxis -> **cefazolin 2 g q8h**），NVE MSSA 總共 **6 週**', next: 'end_good' },
        { label: '因為過敏史改 vancomycin', next: 'a_vanco' }
      ]
    },
    a_vanco: {
      text: '主治醫師搖頭。',
      feedback: 'PCN 過敏但**不是 anaphylaxis**，可以用 **cefazolin**；β-lactam 對 MSSA 優於 vancomycin。真正嚴重過敏也盡量做 desensitization。',
      choices: [{ label: '重新決定', next: 'abx' }]
    },
    end_good: {
      text: '林小姐術後恢復良好，完成 6 週 cefazolin，心臟功能穩定。',
      ending: {
        grade: 'good',
        title: 'MSSA mitral IE 的手術適應症',
        pearls: [
          '手術：vegetation >= 10 mm（尤其治療中仍栓塞）、頑固心衰竭、無法控制的感染',
          '無法控制：膿瘍、黴菌或高度抗藥菌、持續菌血症 > 5-7 天',
          'MSSA NVE：oxacillin 或 cefazolin（非 anaphylaxis 過敏）6 週'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id7-pve',
  chapter: 'ID7',
  title: '換瓣膜後的第三個月',
  patient: '68 歲男性 · 機械主動脈瓣',
  summary: '三個月前換了機械瓣，最近發燒，血液培養三套都是 Staphylococcus epidermidis。',
  cards: ['id-ie-tx', 'id-ie-surg', 'id-ie-dx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '心臟外科病房。蔡先生三個月前**機械主動脈瓣**置換。兩週來發燒。',
        '血液培養 **3/3 套：S. epidermidis**（**oxacillin R**）。EKG：新的 **first-degree AV block**（PR 260 ms）。',
        'TEE：人工瓣膜旁 **paravalvular abscess**，瓣膜輕微搖晃。'
      ],
      clue: ['68M；**機械主動脈瓣 3 個月**（early PVE）', '**MRSE 3/3 套**', '**新的 AV block**', '**Paravalvular abscess**'],
      choices: [{ label: '治療', next: 'tx' }]
    },
    tx: {
      text: 'Early PVE，MRSE，瓣周膿瘍。',
      choices: [
        { label: '**Vancomycin + rifampin + gentamicin**（gent 前 2 週），**>= 6 週** + **會診心臟外科手術**', next: 'end_good' },
        { label: 'Vancomycin 單用 6 週', next: 't_mono' },
        { label: '3 套都是 CoNS，應該是污染', next: 't_cont' }
      ]
    },
    t_mono: {
      text: '主治醫師搖頭。',
      feedback: 'PVE 要**積極合併治療**：vancomycin + **rifampin**（穿透人工物 biofilm）+ gentamicin（前 2 週）。而且瓣周膿瘍是**手術適應症**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_cont: {
      text: '主治醫師搖頭。',
      feedback: '單一套 CoNS 可能是污染，但 **3/3 套**加上**人工瓣膜**，CoNS 就是 IE 的 major criterion。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '蔡先生接受瓣膜再置換與膿瘍清創，完成 6 週以上的三合一治療。',
      ending: {
        grade: 'good',
        title: 'Early MRSE prosthetic valve endocarditis',
        pearls: [
          'Early PVE（1 年內）：S. aureus、CoNS、GNB、Candida',
          'PVE：oxacillin（或 vanco）+ rifampin + gentamicin（前 2 週），>= 6 週',
          'PVE 常需手術：脫落、廔管、嚴重功能異常、瓣周膿瘍、復發',
          '新的傳導阻滯 -> 想瓣周膿瘍 -> TEE'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id7-peri',
  chapter: 'ID7',
  title: '躺下會更痛的胸痛',
  patient: '26 歲男性 · 研究生',
  summary: '感冒一週後胸痛，吸氣和躺下時更痛，坐起來往前傾比較好。',
  cards: ['id-myoperi-path', 'id-myoperi'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。小黃一週前感冒，昨天開始**胸痛**，吸氣和躺平時更痛，**坐起來往前傾比較舒服**。',
        'T 37.8°C，生命徵象穩定。胸骨左緣聽到**刮擦音（rub）**。體重 **75 kg**。'
      ],
      clue: ['26M；URI 後 1 週', '**胸膜性胸痛**，前傾緩解', '**Pericardial rub**', '75 kg'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '勾選你要做的檢查。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'ekg', group: '檢查', label: 'EKG', key: true, reveal: true,
            result: '**瀰漫性 ST 上升 + PR depression**', clue: '**Diffuse STE + PR depression**',
            miss: 'EKG 是 pericarditis 診斷標準之一，也要排除 STEMI。' },
          { id: 'echo', group: '影像', label: '心臟超音波', key: true, reveal: true,
            result: '少量心包積液；**LVEF 60%**，無局部運動異常', clue: '少量積液；**EF 正常**',
            miss: '看積液，也看心室功能有沒有受影響（心肌炎）。' },
          { id: 'trop', group: '檢驗', label: 'Troponin', key: true, reveal: true,
            result: '正常', clue: 'Troponin 正常',
            miss: 'Troponin 上升 + 心室功能異常要想到心肌炎，治療不同。' },
          { id: 'viral', group: '檢驗', label: '病毒血清抗體 panel', result: '已撤回',
            waste: '病毒性 pericarditis **不需要常規找病毒**，不會改變治療。' },
          { id: 'crp', group: '檢驗', label: 'CRP', result: '4.2' }
        ]
      }
    },
    tx: {
      text: '急性 pericarditis（胸痛、rub、ST/PR、積液，4 項都有）；troponin、EF 正常。治療？',
      choices: [
        { label: '**Ibuprofen 600-800 mg q8h（1-2 週）+ colchicine 0.5-0.6 mg q12h（>= 70 kg）x 3 個月**', next: 'twist' },
        { label: 'Ibuprofen 單用 2 週', next: 't_nocol' },
        { label: 'Prednisone 1 mg/kg', next: 't_ster' }
      ]
    },
    t_nocol: {
      text: '主治醫師搖頭。',
      feedback: '第一線是 **NSAID + colchicine**；colchicine **3 個月**能減少復發。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_ster: {
      text: '主治醫師搖頭。',
      feedback: '第一線是 NSAID + colchicine。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    twist: {
      text: '同一晚，他的室友也因胸痛來急診：troponin **8.6**、超音波 **LVEF 35%**、心臟 MRI 心肌水腫。室友也想吃 ibuprofen 止痛。',
      clue: ['室友：troponin 8.6、**EF 35%** -> **myocarditis**'],
      choices: [
        { label: '室友是 **myocarditis**：**支持治療**、心衰竭治療，**避免 NSAIDs**', next: 'end_good' },
        { label: '一樣 ibuprofen + colchicine', next: 'w_nsaid' },
        { label: '給 IVIG 和抗病毒藥', next: 'w_ivig' }
      ]
    },
    w_nsaid: {
      text: '主治醫師搖頭。',
      feedback: '**心肌炎要避免 NSAIDs**。',
      choices: [{ label: '重新決定', next: 'twist' }]
    },
    w_ivig: {
      text: '主治醫師搖頭。',
      feedback: '常規使用 IVIG 和抗病毒藥的**證據不足**。以支持治療為主。',
      choices: [{ label: '重新決定', next: 'twist' }]
    },
    end_good: {
      text: '小黃兩天後胸痛改善。室友住院觀察，三個月後 EF 回到 55%。',
      ending: {
        grade: 'good',
        title: 'Viral pericarditis 與 myocarditis',
        pearls: [
          'Pericarditis：4 項中 >= 2（胸膜性胸痛、rub、diffuse STE/PR depression、積液）',
          'NSAID 1-2 週 + colchicine 3 個月（< 70 kg qd、>= 70 kg q12h）',
          'Myocarditis：troponin 上升、心室功能異常；支持治療、避免 NSAIDs',
          '病毒不需要常規檢驗'
        ]
      }
    }
  }
});
