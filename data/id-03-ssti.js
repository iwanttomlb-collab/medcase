// ID 03 Skin & soft tissue infections and bite wounds.
// Source: Washington Manual Ch 14 (source/Washington ID.txt, lines 129-210, 1985-2012).

RPG.registerCards('ID3', [
  {
    id: 'id-ssti-path',
    title: '皮膚軟組織感染 致病機轉',
    points: [
      '皮膚屏障破損（傷口、**足癬**、水腫、靜脈功能不全、淋巴水腫）讓細菌進入',
      '**S. aureus**：在毛囊與皮下形成**局部化膿**（furuncle、carbuncle、abscess）；CA-MRSA 常帶 **PVL** toxin，殺死 neutrophil -> 壞死化膿',
      '**β-hemolytic streptococci**：產生 hyaluronidase、streptokinase 等 -> 沿組織**擴散**而不化膿 -> erysipelas（真皮淺層，邊界清楚，淋巴受侵）、cellulitis（真皮深層與皮下）',
      '所以「**有膿**」想 S. aureus、要引流；「**沒有膿**」想 streptococci',
      '水中病原：淡水 **Aeromonas**、海水 **Vibrio vulnificus**（**肝硬化、鐵過多**的人易致命）',
      '糖尿病足：神經病變（沒感覺）+ 缺血 + 免疫功能差 -> 慢性潰瘍 -> **多菌**感染，深入骨頭'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-purulent',
    title: '化膿性 SSTI（furuncle、carbuncle、abscess）',
    points: [
      '**MRSA、MSSA** 佔 25-50%',
      '**I&D 單獨通常就夠**，尤其膿瘍 **< 5 cm**',
      '需要抗生素：範圍廣、**全身症狀**、快速進展合併 cellulitis、**共病（DM）**、免疫低下、位於**臉、手、生殖器**、I&D 無效',
      '經驗性涵蓋 **CA-MRSA**：clindamycin 300-450 mg q8h、**TMP-SMX 1-2 DS q12h**、doxycycline 100 mg q12h、linezolid 600 mg q12h',
      '療程通常 **5-7 天**'
    ],
    refs: ['CID 2014;59:e10（IDSA SSTI 2014）']
  },
  {
    id: 'id-cellulitis',
    title: 'Erysipelas 與 cellulitis',
    points: [
      '**Erysipelas**：疼痛、表淺、紅、**邊界清楚**，多在下肢；正常宿主是 **GAS** -> **penicillin V 250-1,000 mg PO q6h** 或 penicillin G 1-2 MU IV q6h；PCN 過敏用 macrolide 或 clindamycin',
      '**Cellulitis**：β-hemolytic streptococci、S. aureus（MSSA、MRSA）',
      '懷疑 strep 或 MSSA：**cephalexin 或 dicloxacillin 500 mg PO q6h**，或 clindamycin',
      '強烈懷疑 CA-MRSA：clindamycin、doxycycline、linezolid；**TMP-SMX 要合併 β-lactam**（如 cephalexin）才涵蓋 strep',
      '淡水（**Aeromonas**）或海水（**Vibrio vulnificus**）：**ceftazidime 2 g IV q8h**、cefepime 2 g q8h 或 ciprofloxacin 750 mg PO q12h，**合併 doxycycline 100 mg q12h**',
      '**Complicated SSTI**（深部、手術或外傷傷口、大膿瘍、複雜 cellulitis、感染潰瘍與燒傷）：住院 **IV + MRSA 涵蓋** + 必要時手術；vancomycin、linezolid、daptomycin、clindamycin、ceftaroline；膿瘍與清創檢體要培養'
    ],
    refs: ['CID 2014;59:e10（IDSA SSTI 2014）']
  },
  {
    id: 'id-dfi',
    title: '褥瘡與糖尿病足感染',
    points: [
      '通常**多菌**；**表淺拭子不可靠** -> 清創後取**深部組織**培養',
      '常合併 **osteomyelitis**，要排除',
      '**傷口照護與清創**是第一線治療'
    ],
    table: {
      head: ['嚴重度', '常見菌', '治療'],
      rows: [
        ['**輕度**', 'S. aureus、streptococci', '**Cephalexin** 或 **amoxicillin-clavulanate 875/125 mg q12h**；懷疑 MRSA -> TMP-SMX 或 doxycycline'],
        ['**中重度**', 'S. aureus（含 **MRSA**）、**厭氧菌**、**腸道 GNB**', '**Vancomycin + β-lactam/BLI**；或 **carbapenem**；或 vancomycin + metronidazole + (cipro 或 3 代 cephalosporin)']
      ]
    },
    refs: ['CID 2012;54:e132（IDSA DFI 2012）']
  },
  {
    id: 'id-nf-path',
    title: '壞死性筋膜炎與氣性壞疽 致病機轉',
    points: [
      '細菌沿**筋膜平面**快速擴散；toxin 與發炎造成**微循環栓塞** -> 組織缺血壞死',
      '缺血讓抗生素到不了、免疫細胞進不去 -> **一定要手術清除壞死組織**',
      '早期皮膚還好，深部已壞死 -> **疼痛與外觀不成比例**；之後神經壞死 -> 皮膚**麻木、暗紫、水泡**',
      'Type I **多菌**（需氧 + 厭氧，糖尿病、會陰 -> **Fournier**）；type II **單一菌**（GAS、S. aureus 含 CA-MRSA）',
      '**Gas gangrene**：**C. perfringens** 的 α-toxin（phospholipase）破壞細胞膜與肌肉 -> 肌壞死、產氣、溶血、休克；常發生在深部外傷',
      '**Clindamycin** 抑制 toxin 產生，合併 β-lactam'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-nf',
    title: 'Necrotizing fasciitis 與 gas gangrene',
    points: [
      '**感染症急症**，死亡率高；可合併 sepsis 或 TSS；會陰部 = **Fournier gangrene**',
      '病原：**混合菌**（需氧 + 厭氧）或**單一菌**（GAS、S. aureus 含 CA-MRSA）',
      '一開始像單純 cellulitis，快速進展到壞死、**暗紫麻木**的皮膚與水泡、劇痛；**疼痛與外觀不成比例**',
      '**臨床診斷**；高度懷疑就**立即手術探查**：手指探查**沒有阻力**即可診斷',
      '術中組織與血液培養；**CK** 可上升；CT 與 X 光早期可見**氣體**與筋膜水腫',
      '**積極清創** + IV 抗生素 + 輸液',
      '經驗性：**β-lactam/BLI**、高劑量 penicillin、carbapenem 或 FQ，**合併 clindamycin**；**加 vancomycin** 直到排除 MRSA',
      '**Gas gangrene**（C. perfringens、C. septicum、S. aureus、GAS）：緊急清創 + **IV penicillin + clindamycin**；排除 GNB 前加 3 代 cephalosporin、cipro 或 aminoglycoside'
    ],
    refs: ['CID 2014;59:e10（IDSA SSTI 2014）']
  },
  {
    id: 'id-bite-path',
    title: '咬傷感染 致病機轉',
    points: [
      '把動物或人的**口腔菌叢**直接注射進組織；病原反映咬人者的口腔，不是被咬者的皮膚',
      '**貓**牙細長 -> **深穿刺傷**進入肌腱鞘、關節、骨頭，表面小、裡面深 -> **80% 以上感染**',
      '**狗**多為撕裂與壓碎傷，只有約 5% 感染',
      '**Pasteurella multocida**：數小時內快速發炎；**Capnocytophaga canimorsus**：無脾、酒精性肝病可致猛爆敗血症',
      '人咬（尤其**握拳打到牙齒**）：關節被穿透、伸直後傷口被肌腱蓋住 -> 厭氧菌與 **Eikenella corrodens** 在關節內感染',
      '**縫合**會把細菌關在裡面 -> 多數不縫（臉部例外）'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-bite',
    title: '動物與人咬傷',
    points: [
      '**大量沖洗**；感染傷口要培養；影像排除骨折、異物、關節受侵',
      '**多數不縫合**，除非在臉部且已徹底沖洗',
      '**Tetanus toxoid**：已接種但 **> 5 年**沒追加就要給',
      '高風險咬傷給預防性抗生素：中重度、**手**、生殖器、近關節、動物種類、免疫狀態（DM、無脾）、穿刺或壓碎傷',
      '預防：**amoxicillin-clavulanate 875/125 mg q12h x 3-5 天**',
      '**狗**：P. multocida、strep、staph、**Capnocytophaga**；感染時 amox-clav 或 clindamycin + ciprofloxacin',
      '**貓**：P. multocida、S. aureus；**> 80% 會感染** -> **常規預防**；**不要用 cephalosporins**；也可能得 bartonellosis',
      '野生動物：amox-clav；**macaque 猴咬 -> valacyclovir**（B virus）',
      '**狂犬病**：每次動物咬傷都要評估是否需要疫苗與免疫球蛋白；疑似狂犬病的動物 -> 立即給；與公衛單位討論',
      '**人咬**（尤其握拳傷）：viridans strep、staph、Bacteroides、Fusobacterium、peptostrep、**Eikenella corrodens**；未感染 -> amox-clav x 5 d；感染 -> **ampicillin-sulbactam 1.5 g IV q6h** 或 cefoxitin 1-2 週；骨髓炎 4-6 週'
    ]
  }
]);

RPG.registerCase({
  id: 'id3-abscess',
  chapter: 'ID3',
  title: '健身房的膿包',
  patient: '27 歲男性 · 健身教練',
  summary: '大腿上一顆紅腫熱痛的大包，越來越痛。',
  cards: ['id-ssti-path', 'id-purulent'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。阿凱是健身教練，三天前右大腿內側長了一顆痘痘，現在變成**3 cm 紅腫、有波動感**的包，中間有黃色膿頭。周圍只有一圈 1 cm 的紅。',
        'T 36.9°C、HR 78。沒有糖尿病。說健身房好幾個同事也長過類似的東西。'
      ],
      clue: ['27M；健身房同事也有類似病灶', '**3 cm 有波動感的膿瘍**，周圍紅 1 cm', '無發燒、無共病'],
      choices: [{ label: '處置', next: 'tx' }]
    },
    tx: {
      text: '單純皮膚膿瘍，< 5 cm，沒有全身症狀，不在臉、手、生殖器。',
      choices: [
        { label: '**I&D**，膿液送培養；**不需要抗生素**', next: 'report' },
        { label: 'I&D + cephalexin 7 天', next: 't_ceph' },
        { label: '不切開，TMP-SMX 10 天', next: 't_noid' },
        { label: '住院打 vancomycin', next: 't_vanco' }
      ]
    },
    t_ceph: {
      text: '主治醫師搖頭。',
      feedback: '< 5 cm 的單純膿瘍 **I&D 單獨就夠**。就算需要抗生素，cephalexin 也不涵蓋 CA-MRSA。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_noid: {
      text: '主治醫師搖頭。',
      feedback: '膿瘍的主要治療是**引流**。只吃抗生素不切開，膿不會自己消。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_vanco: {
      text: '主治醫師搖頭。',
      feedback: '沒有全身症狀、沒有共病的小膿瘍，不需要住院，也不需要 IV 抗生素。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    report: {
      text: [
        '膿液培養：**MRSA**（clindamycin S、TMP-SMX S、doxycycline S）。',
        '兩天後回診，傷口在癒合，不痛了。三個月後他又來：這次是**右手掌** 2 cm 膿瘍，周圍紅腫延伸到手腕，T 38.3°C。'
      ],
      clue: ['之前膿液：**CA-MRSA**', '這次：**手部**膿瘍 + cellulitis + 發燒'],
      choices: [
        { label: 'I&D + **口服 TMP-SMX 1-2 DS q12h**（或 doxycycline），5-7 天', next: 'end_good' },
        { label: '一樣 I&D 就好', next: 'r_id' }
      ]
    },
    r_id: {
      text: '主治醫師搖頭。',
      feedback: '這次有**全身症狀**、合併 **cellulitis**、位於**手部**：都是加抗生素的適應症，經驗性要涵蓋 CA-MRSA。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    end_good: {
      text: '一週後手部恢復。感控建議健身房加強器材消毒、毛巾不共用。',
      ending: {
        grade: 'good',
        title: 'CA-MRSA abscess',
        pearls: [
          '< 5 cm 單純膿瘍：I&D 就夠',
          '加抗生素：範圍大、全身症狀、合併 cellulitis、DM、免疫低下、臉手生殖器、I&D 無效',
          '口服 CA-MRSA：TMP-SMX、doxycycline、clindamycin、linezolid；5-7 天'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id3-cellulitis',
  chapter: 'ID3',
  title: '紅到膝蓋的小腿',
  patient: '67 歲女性 · 退休會計',
  summary: '左小腿紅腫熱痛兩天，紅的範圍往上爬。',
  cards: ['id-ssti-path', 'id-cellulitis'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診。江阿姨左小腿兩天來**紅、腫、熱、痛**，紅色範圍從腳踝往上延伸到小腿中段，邊界不太清楚。沒有膿、沒有傷口，但腳趾縫有**脫皮、癢**。',
        'T 37.8°C，其他生命徵象正常。沒有糖尿病，最近沒住院，沒有 MRSA 病史。'
      ],
      clue: ['67F；左小腿 **nonpurulent cellulitis**', '**趾縫足癬**（入口）', '低燒；生命徵象穩定；無 MRSA 危險因子'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '看起來是非化膿性 cellulitis。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'mark', group: '理學', label: '用筆標記紅腫邊界', key: true, reveal: true,
            result: '已標記，方便追蹤', clue: '已標記邊界',
            miss: '標記邊界才能客觀追蹤有沒有擴大。' },
          { id: 'pain', group: '理學', label: '檢查有無**疼痛與外觀不成比例**、水泡、麻木、捻髮音', key: true, reveal: true,
            result: '無；疼痛與外觀相符', clue: '無壞死性感染徵象',
            miss: '每個 cellulitis 都要想一下會不會是壞死性筋膜炎。' },
          { id: 'abs', group: '理學', label: '找有沒有膿瘍（觸診或床邊超音波）', key: true, reveal: true,
            result: '無膿瘍', clue: '無膿瘍',
            miss: '有膿要引流，而且會讓你往 S. aureus 方向想。' },
          { id: 'feet', group: '理學', label: '檢查足部入口', result: '**趾縫足癬**', clue: '足癬' },
          { id: 'bcx', group: '檢驗', label: '血液培養', result: '已撤回',
            waste: '單純 cellulitis 菌血症機率很低，不建議常規血液培養。' },
          { id: 'mri', group: '影像', label: 'MRI', result: '已撤回',
            waste: '沒有壞死性感染或骨髓炎的懷疑，不需要影像。' }
        ]
      }
    },
    tx: {
      text: '非化膿性 cellulitis，門診治療。',
      choices: [
        { label: '**Cephalexin 500 mg PO q6h**（或 dicloxacillin）；抬高患肢；治療**足癬**', next: 'end_good' },
        { label: 'TMP-SMX DS 單用', next: 't_sxt' },
        { label: '住院打 vancomycin + pip-tazo', next: 't_broad' }
      ]
    },
    t_sxt: {
      text: '主治醫師搖頭。',
      feedback: '非化膿性 cellulitis 主要是 **streptococci**。TMP-SMX 單用涵蓋 strep 不可靠，要合併 β-lactam。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_broad: {
      text: '主治醫師搖頭。',
      feedback: '生命徵象穩定、沒有 MRSA 或 GNB 危險因子的 cellulitis，口服 cephalexin 就夠。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '三天後紅腫退到標記線以內。足癬治療後，之後沒有再發作。',
      ending: {
        grade: 'good',
        title: 'Nonpurulent cellulitis',
        pearls: [
          '沒有膿 -> 想 streptococci；有膿 -> 想 S. aureus、要引流',
          'Cephalexin 或 dicloxacillin；強烈懷疑 MRSA -> clindamycin、doxycycline、linezolid，或 TMP-SMX + β-lactam',
          '單純 cellulitis 不需常規血液培養',
          '處理入口（足癬）預防復發'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id3-vibrio',
  chapter: 'ID3',
  title: '剝蚵仔後的腿',
  patient: '58 歲男性 · 漁民，肝硬化',
  summary: '昨天在海邊剝牡蠣割到腳，今天小腿腫成紫黑色，起了一顆顆血泡。',
  cards: ['id-ssti-path', 'id-cellulitis', 'id-nf'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。蔡先生 B 型肝炎肝硬化，在海邊養蚵。昨天赤腳踩在海水裡被**蚵殼割傷左小腿**，今天整條小腿**腫脹、暗紫色**，出現多顆**出血性水泡**，痛得很厲害。',
        'T 39.4°C、**BP 82/46**、HR 128。'
      ],
      clue: ['58M；**肝硬化**', '**海水 + 牡蠣殼**傷口，24 h 內', '**出血性水泡**、暗紫腫脹', '**BP 82/46**'],
      choices: [{ label: '處置', next: 'tx' }]
    },
    tx: {
      text: '肝硬化 + 海水傷口 + 出血性水泡 + 休克：你想到 **Vibrio vulnificus**。',
      checklist: {
        prompt: '醫囑：勾選你要的項目',
        submit: '送出醫囑',
        next: 'abx',
        options: [
          { id: 'bcx', group: '培養', label: '血液培養、水泡液培養', key: true, reveal: true,
            result: '（之後）血液與水泡液：**Vibrio vulnificus**', clue: '**V. vulnificus** 菌血症',
            miss: '抗生素前抽血液培養，水泡液也送。' },
          { id: 'surg', group: '會診', label: '**緊急骨科/整外會診清創**', key: true, reveal: true,
            result: '筋膜炎，緊急筋膜切開清創', clue: '**Necrotizing fasciitis**，已清創',
            miss: 'Vibrio 常造成壞死性筋膜炎，要緊急手術。' },
          { id: 'fluid', group: '治療', label: '輸液、升壓劑', key: true, reveal: true,
            result: '進行中', clue: '休克處理中',
            miss: '休克要同步處理。' },
          { id: 'wait', group: '其他', label: '等培養結果再開抗生素', result: '已撤回',
            waste: 'Vibrio 敗血症進展以小時計，不能等。' }
        ]
      }
    },
    abx: {
      text: '抗生素？',
      choices: [
        { label: '**Ceftazidime 2 g IV q8h + doxycycline 100 mg q12h**', next: 'end_good' },
        { label: 'Cefazolin', next: 'a_cefa' },
        { label: 'Vancomycin + pip-tazo', next: 'a_pt' }
      ]
    },
    a_cefa: {
      text: '主治醫師搖頭。',
      feedback: '海水傷口要涵蓋 **Vibrio**：ceftazidime 2 g q8h（或 cefepime、ciprofloxacin）**加 doxycycline**。',
      choices: [{ label: '重新決定', next: 'abx' }]
    },
    a_pt: {
      text: '主治醫師搖頭。',
      feedback: 'Vibrio 的標準組合是 **3/4 代 cephalosporin 或 FQ 加 doxycycline**。Doxycycline 不能省。',
      choices: [{ label: '重新決定', next: 'abx' }]
    },
    end_good: {
      text: '經過兩次清創和兩週抗生素，蔡先生保住了腿。衛教肝病患者避免生食海鮮、傷口避免接觸海水。',
      ending: {
        grade: 'good',
        title: 'Vibrio vulnificus necrotizing soft-tissue infection',
        pearls: [
          '海水傷口 + 肝硬化 + 出血性水泡 -> V. vulnificus',
          'Ceftazidime（或 cefepime、cipro）+ doxycycline',
          '淡水 -> Aeromonas，同樣組合',
          '壞死性感染要緊急清創'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id3-dfi',
  chapter: 'ID3',
  title: '有味道的腳',
  patient: '62 歲男性 · 糖尿病 20 年',
  summary: '右腳掌潰瘍半年，這週變紅腫、流出臭的分泌物。',
  cards: ['id-ssti-path', 'id-dfi', 'id-osteo'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。郭先生糖尿病 20 年，HbA1c 10.2%，有周邊神經病變。右第一蹠骨頭下方潰瘍半年，這週周圍**紅腫延伸 4 cm**、有**惡臭分泌物**，T 38.2°C。',
        '潰瘍 2.5 cm，底部可以看到深部組織。足背動脈摸得到但很弱。'
      ],
      clue: ['62M；DM、神經病變', '**蹠骨頭下潰瘍**，紅腫 4 cm、惡臭、發燒', '足背動脈弱'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '中重度糖尿病足感染。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'deep', group: '培養', label: '**清創後取深部組織**培養', key: true, reveal: true,
            result: '（之後）**MSSA**、**Bacteroides fragilis**、E. coli', clue: '深部組織：**MSSA、B. fragilis、E. coli**',
            miss: '要在清創後取深部組織培養，表淺拭子不可靠。' },
          { id: 'ptb', group: '理學', label: 'Probe-to-bone、X 光', key: true, reveal: true,
            result: 'Probe **碰到骨頭**；X 光第一蹠骨頭皮質破壞', clue: '**Probe-to-bone (+)**；X 光骨質破壞',
            miss: '糖尿病足感染常合併骨髓炎，一定要排除。' },
          { id: 'abi', group: '理學', label: 'ABI、會診血管外科', key: true, reveal: true,
            result: 'ABI 0.6；安排血管攝影', clue: 'ABI 0.6（周邊動脈疾病）',
            miss: '缺血會讓傷口和骨髓炎都很難好，常需要血管重建。' },
          { id: 'bcx', group: '培養', label: '血液培養', result: '陰性' },
          { id: 'swab', group: '培養', label: '潰瘍表面拭子培養', result: '已撤回',
            waste: '表淺拭子會長出一堆定植菌，不可靠。' }
        ]
      }
    },
    tx: {
      text: '中重度 DFI，懷疑骨髓炎。經驗性治療？',
      choices: [
        { label: '**清創** + **vancomycin + pip-tazo**（MRSA、厭氧菌、腸道 GNB）', next: 'report' },
        { label: '口服 cephalexin', next: 't_ceph' },
        { label: 'Vancomycin 單用', next: 't_vanco' }
      ]
    },
    t_ceph: {
      text: '主治醫師搖頭。',
      feedback: 'Cephalexin 是**輕度** DFI 的選擇。中重度要涵蓋 S. aureus（含 MRSA）、**厭氧菌**、**腸道 GNB**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_vanco: {
      text: '主治醫師搖頭。',
      feedback: '中重度 DFI 是多菌感染，vancomycin 不涵蓋厭氧菌和 GNB。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    report: {
      text: '深部組織培養：**MSSA、B. fragilis、E. coli**（ceftriaxone S）；沒有 MRSA。骨科切除第一蹠骨頭，骨頭培養同菌，切除邊緣仍有發炎。',
      clue: ['無 MRSA；E. coli ceftriaxone S', '骨髓炎，切除邊緣仍有發炎'],
      choices: [
        { label: '停 vancomycin；改 **ampicillin-sulbactam**（或 ceftriaxone + metronidazole）；依骨髓炎治療，並處理血管', next: 'end_good' },
        { label: '維持 vancomycin + pip-tazo 6 週', next: 'end_broad',
          why: '培養沒有 MRSA、沒有 Pseudomonas，要依培養縮窄。' }
      ]
    },
    end_broad: {
      text: '傷口好了，但第四週出現 vancomycin 相關 AKI，換藥後才恢復。',
      ending: {
        grade: 'ok',
        title: 'DFI 治好了，但沒有縮窄',
        pearls: ['依深部組織培養縮窄']
      }
    },
    end_good: {
      text: '血管外科做了氣球擴張，傷口逐漸癒合。完成骨髓炎療程後追蹤，沒有復發。',
      ending: {
        grade: 'good',
        title: 'Moderate-severe DFI with osteomyelitis',
        pearls: [
          '清創後取深部組織培養，表淺拭子不可靠',
          '一定要排除骨髓炎（probe-to-bone、X 光、MRI）',
          '中重度：vancomycin + BL/BLI 或 carbapenem 等，涵蓋 MRSA、厭氧、GNB',
          '糖尿病與 PAD 的骨髓炎很少只靠抗生素治好：血管重建、清創、截肢'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id3-fournier',
  chapter: 'ID3',
  title: '會陰部的劇痛',
  patient: '61 歲男性 · 糖尿病控制不良',
  summary: '肛門旁邊痛了三天，今天陰囊腫脹發黑，摸起來沙沙的。',
  cards: ['id-nf-path', 'id-nf'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。羅先生糖尿病，三天前肛門旁長了一顆痛的包，今天**陰囊與會陰腫脹、皮膚暗紫**，有幾處發黑，摸起來有**捻髮音（crepitus）**。痛得非常厲害。',
        'T 39.6°C、BP 88/52、HR 130。血糖 486。'
      ],
      clue: ['61M；DM 控制不良', '肛周膿瘍 -> **會陰陰囊暗紫、壞死、crepitus**', '休克；血糖 486'],
      choices: [{ label: '處置', next: 'tx' }]
    },
    tx: {
      text: 'Fournier gangrene。',
      checklist: {
        prompt: '醫囑：勾選你要的項目',
        submit: '送出醫囑',
        next: 'report',
        options: [
          { id: 'or', group: '會診', label: '**緊急手術清創**（泌尿科、大腸直腸外科）', key: true, reveal: true,
            result: '廣泛清除壞死組織；手指探查無阻力', clue: '已緊急清創',
            miss: '壞死性筋膜炎最重要的是**積極清創**，越快越好。' },
          { id: 'abx', group: '用藥', label: '**Pip-tazo + clindamycin + vancomycin**', key: true, reveal: true,
            result: '已給', clue: 'Pip-tazo + clindamycin + vancomycin',
            miss: '經驗性：β-lactam/BLI（或 carbapenem）+ clindamycin + vancomycin（直到排除 MRSA）。' },
          { id: 'cx', group: '培養', label: '術中組織、血液培養', key: true, reveal: true,
            result: '（之後）**E. coli、B. fragilis、Streptococcus anginosus**；無 S. aureus', clue: '多菌：E. coli、B. fragilis、S. anginosus；無 S. aureus',
            miss: '術中組織培養決定之後的用藥。' },
          { id: 'fluid', group: '治療', label: '輸液、升壓劑、胰島素', key: true, reveal: true,
            result: '進行中', clue: '休克與高血糖處理中',
            miss: '同步處理休克與高血糖。' },
          { id: 'ct', group: '影像', label: '先做 CT 確定範圍再決定開刀', result: '已撤回',
            waste: '臨床已經很明確（壞死、crepitus、休克），CT 只會延誤手術。' }
        ]
      }
    },
    report: {
      text: '第 3 天：培養是 E. coli（ceftriaxone S）、B. fragilis、S. anginosus，沒有 S. aureus。已經清創兩次，血壓穩定。',
      choices: [
        { label: '**停 vancomycin**；依培養改 **ceftriaxone + metronidazole**（或維持 pip-tazo），需要時再清創', next: 'end_good' },
        { label: '三種藥都繼續到傷口癒合', next: 'end_broad',
          why: '沒有 S. aureus 就停 vancomycin，依培養縮窄。' }
      ]
    },
    end_broad: {
      text: '傷口癒合，但住院中出現 C. difficile 腹瀉。',
      ending: {
        grade: 'ok',
        title: 'Fournier gangrene 治好了，但沒有縮窄',
        pearls: ['排除 MRSA 後停 vancomycin']
      }
    },
    end_good: {
      text: '經過四次清創與植皮，羅先生出院，糖尿病改用胰島素控制。',
      ending: {
        grade: 'good',
        title: 'Fournier gangrene',
        pearls: [
          '暗紫、麻木、水泡、crepitus、劇痛 -> 壞死性感染',
          '臨床診斷，立即手術；手指探查無阻力',
          'BL/BLI、carbapenem 或 FQ + clindamycin + vancomycin（排除 MRSA 前）',
          'Gas gangrene：PCN + clindamycin，排除 GNB 前加 3 代 ceph/cipro/aminoglycoside'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id3-bite',
  chapter: 'ID3',
  title: '貓咬一口',
  patient: '52 歲女性 · 中途之家志工',
  summary: '幫流浪貓剪指甲被咬了一口，手背有兩個小洞。',
  cards: ['id-bite-path', 'id-bite'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。方小姐在中途之家幫一隻新來的流浪貓剪指甲，被咬了**右手背**，兩個**深的小穿刺洞**，一小時前發生。',
        '目前沒有紅腫。她十年前打過一次破傷風。沒有糖尿病，脾臟正常。那隻貓還在中途之家，可以觀察。'
      ],
      clue: ['52F；**貓咬**右手背，**深穿刺傷**，1 h 前', '破傷風 10 年前', '咬人的貓可觀察'],
      choices: [{ label: '處置', next: 'tx' }]
    },
    tx: {
      text: '傷口處理。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'abx',
        options: [
          { id: 'irr', group: '處置', label: '大量生理食鹽水**沖洗**', key: true, reveal: true,
            result: '已沖洗', clue: '已沖洗',
            miss: '咬傷最重要的局部處理是大量沖洗。' },
          { id: 'td', group: '處置', label: '**Tetanus toxoid**（Tdap）', key: true, reveal: true,
            result: '已給', clue: '破傷風追加',
            miss: '上次超過 5 年，咬傷要追加。' },
          { id: 'rabies', group: '處置', label: '**狂犬病暴露評估**（動物狀態、地區、與衛生單位討論）', key: true, reveal: true,
            result: '貓可觀察 10 天，衛生局建議依觀察結果決定', clue: '狂犬病：觀察動物',
            miss: '每次動物咬傷都要評估狂犬病暴露。' },
          { id: 'xr', group: '影像', label: '手部 X 光', result: '無骨折、無異物' },
          { id: 'suture', group: '處置', label: '縫合傷口', result: '已撤回',
            waste: '咬傷多數不縫（臉部例外），縫合會把細菌關在裡面。' }
        ]
      }
    },
    abx: {
      text: '傷口現在沒有感染跡象。抗生素？',
      choices: [
        { label: '**預防性 amoxicillin-clavulanate 875/125 mg q12h x 3-5 天**', next: 'human' },
        { label: '還沒感染，不需要抗生素', next: 'a_none' },
        { label: 'Cephalexin x 5 天', next: 'a_ceph' }
      ]
    },
    a_none: {
      text: '主治醫師搖頭。',
      feedback: '**貓咬超過 80% 會感染**，而且是手部深穿刺傷：要**常規預防**。',
      choices: [{ label: '重新決定', next: 'abx' }]
    },
    a_ceph: {
      text: '主治醫師搖頭。',
      feedback: '貓咬**不要用 cephalosporins**：對 **Pasteurella multocida** 不可靠。用 amoxicillin-clavulanate。',
      choices: [{ label: '重新決定', next: 'abx' }]
    },
    human: {
      text: '同一晚，一位 24 歲男性在酒吧打架，右手**握拳打到對方嘴巴**，第三掌指關節上方有 5 mm 傷口，兩天後紅腫、流膿、關節活動痛。',
      clue: ['另一位：**clenched-fist injury**，已感染、MCP 關節痛'],
      choices: [
        { label: '會診手外科探查沖洗；**IV ampicillin-sulbactam 1.5 g q6h**（或 cefoxitin），1-2 週', next: 'end_good' },
        { label: '口服 amox-clav 5 天就好', next: 'h_po' },
        { label: 'Cephalexin + 縫合', next: 'h_ceph' }
      ]
    },
    h_po: {
      text: '主治醫師搖頭。',
      feedback: '那是**未感染**人咬傷的預防方案。已經感染、可能穿透關節，要 **IV 治療**、手外科探查；若有骨髓炎延長到 4-6 週。',
      choices: [{ label: '重新決定', next: 'human' }]
    },
    h_ceph: {
      text: '主治醫師搖頭。',
      feedback: '人咬要涵蓋厭氧菌與 **Eikenella corrodens**：ampicillin-sulbactam 或 cefoxitin。咬傷不縫合。',
      choices: [{ label: '重新決定', next: 'human' }]
    },
    end_good: {
      text: '方小姐沒有感染，貓觀察 10 天健康。酒吧那位手外科清創後，MCP 關節沒有留下後遺症。',
      ending: {
        grade: 'good',
        title: '貓咬與握拳傷',
        pearls: [
          '沖洗、不縫合（臉例外）、破傷風（> 5 年追加）、狂犬病評估',
          '貓咬 > 80% 感染 -> 常規 amox-clav；不要用 cephalosporins',
          '人咬：Eikenella、厭氧菌；感染 -> amp-sulb 或 cefoxitin IV',
          'Macaque 猴咬 -> valacyclovir'
        ]
      }
    }
  }
});
