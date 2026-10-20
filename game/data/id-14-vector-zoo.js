// ID 14 Mosquito-borne infections (dengue, chikungunya, Zika, malaria) and zoonoses (cat scratch, leptospirosis, brucellosis, Q fever).
// Tick-borne infections and West Nile virus omitted as US-specific.
// Source: Washington Manual Ch 14 (source/Washington ID.txt, lines 1807-1984).

RPG.registerCards('ID14', [
  {
    id: 'id-mosq-path',
    title: '蚊媒感染 致病機轉',
    points: [
      '**Dengue**：4 種血清型（DENV 1-4）；感染一型**不保護**其他型。**第二次感染不同型**時，不完全中和的抗體反而幫病毒進入巨噬細胞（**antibody-dependent enhancement**）-> 更強的免疫反應',
      'Dengue 的危險期在**退燒前後**：內皮功能失調造成**血漿滲漏** -> 血比容上升、積水、休克；血小板低與凝血異常 -> 出血',
      '**Aspirin、NSAIDs** 抑制血小板功能、增加出血 -> 避免',
      '**Chikungunya**：病毒直接感染關節與肌肉組織 -> 劇烈多關節痛，可持續數月',
      '**Zika**：神經趨性；經胎盤感染胎兒神經前驅細胞 -> **小頭症**；也經性行為、輸血傳播；Guillain-Barré',
      '**Malaria**：sporozoites 進肝臟 -> 紅血球期（發燒週期）；**P. falciparum** 感染各年齡紅血球、黏附微血管（**cytoadherence**）-> 腦性瘧疾、多重器官衰竭；**P. vivax、P. ovale** 在肝臟留下休眠的 **hypnozoites** -> 數月後復發 -> 需要 **primaquine**',
      'Primaquine 是氧化劑 -> **G6PD 缺乏**者會溶血'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文有簡述 dengue 再感染與 Zika 傳播途徑。'
  },
  {
    id: 'id-arbo',
    title: 'Dengue、chikungunya、Zika',
    table: {
      head: ['', 'Dengue', 'Chikungunya', 'Zika'],
      rows: [
        ['病媒', '**Aedes**', 'Aedes', 'Aedes；另有**性行為、輸血、母胎**傳染'],
        ['潛伏期', '4-10 天', '', ''],
        ['表現', '發燒、頭痛、肌痛、**後眼窩痛**、**骨痛**、皮疹、**白血球低、血小板低**；嚴重：出血、休克', '發燒後 2-5 天出現**劇烈多關節痛**（多個遠端關節）；可復發數月', '多數無症狀；發燒、**癢的斑丘疹**、**結膜炎**、關節痛'],
        ['併發症', '**Dengue hemorrhagic fever**（血管通透性增加、血漿滲漏）、**dengue shock syndrome**；**不同血清型再感染較重**', '慢性關節痛', '**Guillain-Barré**；**小頭症**、流產'],
        ['診斷', '**第一週 PCR**；或急性與恢復期 IgM 明顯上升', '第一週 PCR；急性與恢復期血清', '第一週血液、尿液 PCR；IgM'],
        ['治療', '**維持血管內容積**、注意休克；**沒有抗病毒藥**；**避免 aspirin、NSAIDs**', '支持治療：休息、消炎止痛', '支持治療；**孕婦避免前往疫區**']
      ]
    },
    points: [
      '蚊媒防治是控制疾病的關鍵',
      'Dengvaxia 只用於疫區、曾經實驗室確認感染過的特定年齡兒童，**不適用旅行者**'
    ],
    refs: ['NEJM 2012;366:1423（dengue）']
  },
  {
    id: 'id-malaria',
    title: 'Malaria',
    points: [
      '**所有從疫區回來的發燒都要排除瘧疾**；5 種：P. falciparum、vivax、ovale、malariae、knowlesi',
      '非特異：發燒、寒顫、頭痛、肌痛；vivax、ovale **隔天燒**，malariae 每三天',
      '**Severe（complicated）falciparum**：**parasitemia > 5%**、**腦性瘧疾**、**低血糖**、乳酸中毒、腎衰竭、ARDS、凝血異常',
      '診斷：**Giemsa 厚薄抹片**（最好在發燒時）；rapid test 有幫助但要用顯微鏡確認',
      '**盡快治療**，可能致命；依種類、嚴重度、預防用藥、chloroquine 抗藥地區決定'
    ],
    table: {
      head: ['情境', '治療'],
      rows: [
        ['**Chloroquine 敏感地區**（各種非複雜性）', '**Chloroquine** 600 mg base，之後 300 mg base at 6、24、48 h'],
        ['**Chloroquine 抗藥地區 P. falciparum**；印尼/巴布亞紐幾內亞 P. vivax', '**Artemether-lumefantrine**（4 錠 0、8 h，之後 q12h x 2 天）；atovaquone-proguanil（4 錠 qd x 3 天）；quinine + doxycycline 或 clindamycin x 7 天'],
        ['**P. vivax、P. ovale**', '加 **primaquine 30 mg base qd x 14 天**（hypnozoites）；**先排除 G6PD 缺乏**'],
        ['**Severe malaria**', '**IV artesunate 2.4 mg/kg**（0、12、24 h，之後 qd x 3 天）；等藥時**先開始口服**；第三劑後 4 h 重驗 parasitemia，**<= 1% 改口服**']
      ]
    },
    refs: ['CDC Malaria Diagnosis & Treatment in the US（2024）']
  },
  {
    id: 'id-zoo-path',
    title: '人畜共通感染 致病機轉',
    points: [
      '**Bartonella henselae**：貓（尤其幼貓）帶菌，經抓傷、咬傷或跳蚤；在局部淋巴結形成**肉芽腫與微膿瘍**；免疫低下（HIV CD4 < 200）造成**血管增生**（bacillary angiomatosis、peliosis hepatis）',
      '**Leptospira**：鼠類等動物腎臟帶菌、**尿液污染水和土壤**；經皮膚傷口或黏膜（淹水、颱風後清理）進入；螺旋體直接傷害**血管內皮** -> 結膜充血、肝腎功能異常、**肺出血**；第二期是**免疫期**（腦膜炎、Weil disease）',
      '**Brucella**：喝**未殺菌乳品**、接觸牲畜體液或吸入；**巨噬細胞內**寄生 -> 網狀內皮系統（肝、脾、淋巴結、骨髓）與**骨關節（sacroiliitis、脊椎炎）** -> 波浪熱、慢性；細胞內 -> 要**長療程合併治療**',
      '**Coxiella burnetii（Q fever）**：牲畜（尤其**胎盤**、生產）大量排菌、**吸入**即可感染（1 隻菌就夠）；急性期表現 **phase II** 抗原，**慢性**感染（心內膜炎）表現 **phase I** -> 用 phase I IgG 判斷慢性',
      'Q fever 心內膜炎是**培養陰性 IE** 的重要原因，好發原有瓣膜病變'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文有簡述 phase I/II 抗原。'
  },
  {
    id: 'id-bartonella',
    title: 'Cat scratch disease（bartonellosis）',
    points: [
      '貓咬或抓傷後 **3-30 天**出現少數丘疹膿疱，接著**區域淋巴結炎**（頸部或腋下）+ 輕微全身症狀；多自限',
      '非典型：**Parinaud oculoglandular**、腦病、視網膜炎（**stellate exudates**）、關節炎、**FUO**、**培養陰性心內膜炎**',
      '免疫低下（HIV CD4 < 200）：**bacillary angiomatosis**、**peliosis hepatis**',
      '診斷：排除其他淋巴結炎原因 + **高 B. henselae 抗體**、組織 PCR、Warthin-Starry 染色',
      '局部淋巴結炎可治療以縮短病程（不治療 2-4 個月自癒）：**azithromycin 500 mg 單次，之後 250 mg qd x 4 天**；化膿的淋巴結可**針抽**緩解',
      '嚴重感染：含 **rifampin** 的合併治療'
    ],
    refs: ['Antimicrob Agents Chemother 2004;48:1921（Bartonella treatment）']
  },
  {
    id: 'id-lepto',
    title: 'Leptospirosis',
    points: [
      '**鼠類**為主要宿主；接觸動物或被其**尿液污染的水** 5-14 天後發病',
      '多數 **anicteric**、自限；部分**雙相**：類流感 + **結膜充血**（septicemic phase）-> 短暫退燒 -> **aseptic meningitis** 或 **Weil disease**（immune phase）',
      '**Weil disease**（icteric）：多重器官衰竭，**嚴重黃疸、尿毒、出血性肺炎**；**bilirubin 上升與轉胺酶不成比例**是線索',
      '診斷：血液或尿液 **PCR**；或 IgM/IgG 配對血清 **4 倍上升**；培養很少陽性',
      '輕症：**doxycycline 100 mg q12h** 或 amoxicillin 500 mg q6h x 7 天',
      '重症：**penicillin G 1.5 MU IV q6h**、IV doxycycline 或 **3 代 cephalosporin**；可能出現 **Jarisch-Herxheimer reaction**'
    ],
    refs: ['Curr Opin Infect Dis 2005;18:376（leptospirosis）']
  },
  {
    id: 'id-brucella-q',
    title: 'Brucellosis 與 Q fever',
    table: {
      head: ['', 'Brucellosis', 'Q fever'],
      rows: [
        ['病原', 'B. melitensis、abortus、suis（GN coccobacilli）', '**Coxiella burnetii**（GN coccobacilli）'],
        ['暴露', '牲畜體液、**未殺菌乳品**、吸入', '牲畜尿、糞、奶、**胎盤**；貓、兔'],
        ['表現', '發燒、**發霉味的汗**（幾乎特異）；**Malta fever** 波浪熱、盜汗、關節炎、背痛；年輕人 **sacroiliitis**、年長者脊椎椎間盤炎；肝脾腫大', '急性：**非典型肺炎 + 頭痛**、**round pneumonia**、肝炎、**FUO**；慢性：**心內膜炎**（培養陰性）'],
        ['診斷', '**血液或組織培養**（gold standard）；血清（Rose Bengal）可能與 F. tularensis 交叉', '**血清**（不長在一般培養）：急性 **phase II** 抗體 4 倍上升；**慢性 phase I IgG > 1:800**；病理 **donut granuloma**'],
        ['治療', '**Doxycycline 100 mg q12h x 6 週**（骨關節 **12 週**）+ **streptomycin 15 mg/kg IM 前 2-3 週**（或 gentamicin）；替代 rifampin、FQ、TMP-SMX', '急性：**doxycycline 100 mg q12h x 14 天**；慢性（含 IE）：**doxycycline + hydroxychloroquine 18-24 個月**，每 3 個月追血清，phase I IgG < 1:800 為治癒']
      ]
    },
    points: [
      '培養陰性心內膜炎 + 適當暴露 -> 一定要驗 Q fever'
    ],
    refs: ['NEJM 2005;352:2325（brucellosis）', 'Clin Microbiol Rev 2017;30:115（Q fever）']
  }
]);

RPG.registerCase({
  id: 'id14-dengue',
  chapter: 'ID14',
  title: '高雄夏天的高燒',
  patient: '27 歲女性 · 補習班老師',
  summary: '突然高燒、眼窩後面痛、全身骨頭痛，社區最近有登革熱群聚。',
  cards: ['id-mosq-path', 'id-arbo'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診（八月，高雄）。孫老師三天前突然**高燒 39.8°C**、**眼窩後方痛**、全身**骨頭痠痛**，今天四肢出現紅疹。社區最近有登革熱群聚。',
        '她三年前在東南亞旅遊時**得過一次登革熱**。',
        'WBC **2,800**、PLT **88k**、Hct 40%。'
      ],
      clue: ['27F；登革熱流行區、群聚', '高燒、**後眼窩痛**、骨痛、皮疹', '**白血球低、血小板低**', '**曾經感染過 dengue**'],
      choices: [{ label: '評估與處置', next: 'workup' }]
    },
    workup: {
      text: '你懷疑登革熱。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'pain',
        options: [
          { id: 'ns1', group: '檢驗', label: '**Dengue NS1 / PCR**（第一週）', key: true, reveal: true,
            result: '**NS1 陽性；PCR DENV-2**', clue: '**Dengue（DENV-2）**',
            miss: '第一週用 PCR（或 NS1）確診。' },
          { id: 'malaria', group: '檢驗', label: '瘧疾抹片', result: '陰性（三年內無疫區旅遊）' },
          { id: 'report', group: '公衛', label: '通報衛生單位（社區病媒防治）', key: true, reveal: true,
            result: '已通報', clue: '已通報',
            miss: '登革熱要通報，病媒防治是控制的關鍵。' },
          { id: 'warn', group: '理學', label: '評估警示徵象：腹痛、持續嘔吐、黏膜出血、肝腫大、積水、Hct 上升伴 PLT 下降', key: true, reveal: true,
            result: '目前沒有', clue: '目前無警示徵象',
            miss: '重症在退燒前後出現，要主動找警示徵象。' }
        ]
      }
    },
    pain: {
      text: '她全身痛，問可不可以吃 ibuprofen。',
      choices: [
        { label: '**避免 aspirin、NSAIDs**，用 **acetaminophen**；補充水分；衛教警示徵象', next: 'day5' },
        { label: 'Ibuprofen 400 mg q6h 止痛退燒', next: 'p_nsaid' }
      ]
    },
    p_nsaid: {
      text: '主治醫師搖頭。',
      feedback: 'Dengue **避免 aspirin 和 NSAIDs**：抑制血小板功能、增加出血風險，她血小板已經在下降。',
      choices: [{ label: '重新決定', next: 'pain' }]
    },
    day5: {
      text: '第 5 天她**退燒了**，但開始**腹痛、嘔吐**、牙齦出血。Hct **48%**（上升），PLT **18k**；超音波有腹水和肋膜積水。BP 100/82。',
      clue: ['**退燒時**惡化：腹痛、嘔吐、出血', '**Hct 40% -> 48%**、PLT 18k、積水', '**脈壓變窄**'],
      choices: [
        { label: '**血漿滲漏**：住院、**謹慎的 IV 輸液**維持血管內容積，密切監測 Hct、尿量、生命徵象', next: 'end_good' },
        { label: '退燒了表示好轉，讓她回家', next: 'd_home' },
        { label: '預防性輸注血小板', next: 'd_plt' }
      ]
    },
    d_home: {
      text: '主治醫師搖頭。',
      feedback: 'Dengue 的**危險期就在退燒前後**。Hct 上升、積水、脈壓窄是血漿滲漏，接下來可能休克。',
      choices: [{ label: '重新決定', next: 'day5' }]
    },
    d_plt: {
      text: '主治醫師搖頭。',
      feedback: '重點是**維持血管內容積**、注意休克。她的問題是血漿滲漏，不是血小板數字。',
      choices: [{ label: '重新決定', next: 'day5' }]
    },
    end_good: {
      text: '住院輸液兩天，Hct 回穩，第 8 天出院。',
      ending: {
        grade: 'good',
        title: 'Dengue with warning signs（secondary infection）',
        pearls: [
          '高燒、後眼窩痛、骨痛、皮疹、白血球與血小板低 -> dengue；第一週 PCR/NS1',
          '不同血清型再感染較嚴重',
          '避免 aspirin、NSAIDs',
          '危險期在退燒前後：血漿滲漏 -> 維持血管內容積、注意休克'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id14-falci',
  chapter: 'ID14',
  title: '從奈及利亞回來的工程師',
  patient: '36 歲男性 · 石油公司工程師',
  summary: '從奈及利亞回國十天，發燒三天，今天變得混亂。',
  cards: ['id-mosq-path', 'id-malaria'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。邵先生在**奈及利亞**工作半年，十天前回國，**沒有吃瘧疾預防藥**。三天前開始寒顫高燒，今天變得**混亂、嗜睡**。',
        'T 40.1°C、BP 96/58。黃疸。血糖 **52**。PLT 46k、Cr 2.4、lactate 5.2。'
      ],
      clue: ['36M；**奈及利亞**回國 10 天，**無預防用藥**', '高燒 + **意識改變**', '**低血糖**、AKI、乳酸中毒、黃疸'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: '疫區回來的發燒一定要排除瘧疾。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'smear', group: '檢驗', label: '**Giemsa 厚薄抹片**（+ rapid test）', key: true, reveal: true,
            result: '**P. falciparum**，**parasitemia 8%**', clue: '**P. falciparum 8%**',
            miss: '所有疫區回來的發燒都要做厚薄抹片。' },
          { id: 'glu', group: '治療', label: '**矯正低血糖**（D50、持續監測）', key: true, reveal: true,
            result: '已給，持續監測', clue: '低血糖矯正中',
            miss: '低血糖是嚴重瘧疾的表現，也會讓意識更差。' },
          { id: 'bcx', group: '培養', label: '血液培養', result: '陰性' },
          { id: 'lp', group: '檢查', label: 'LP', result: 'CSF 正常' }
        ]
      }
    },
    tx: {
      text: '**Severe falciparum malaria**（parasitemia > 5%、腦性、低血糖、乳酸中毒、腎衰竭）。',
      choices: [
        { label: '**IV artesunate 2.4 mg/kg**（0、12、24 h，之後 qd）；IV artesunate 到院前**先開始口服 artemether-lumefantrine**；ICU', next: 'after' },
        { label: 'Chloroquine', next: 't_cq' },
        { label: '口服 atovaquone-proguanil 3 天，門診追蹤', next: 't_po' }
      ]
    },
    t_cq: {
      text: '主治醫師搖頭。',
      feedback: '西非 P. falciparum 是 **chloroquine 抗藥**；而且這是**重症**，要 **IV artesunate**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_po: {
      text: '主治醫師搖頭。',
      feedback: 'Severe malaria 要 **IV artesunate**。口服藥只是在等 IV 藥時先開始的橋接。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    after: {
      text: '第三劑 artesunate 後 4 小時，parasitemia **0.6%**，意識清楚，可以進食。',
      choices: [
        { label: 'Parasitemia **<= 1%**：改**口服**（例如 artemether-lumefantrine）完成療程', next: 'end_good' },
        { label: '繼續 IV 直到抹片完全陰性', next: 'a_iv' }
      ]
    },
    a_iv: {
      text: '主治醫師搖頭。',
      feedback: '第三劑後重驗，parasitemia **<= 1%** 且能口服就改口服完成療程。',
      choices: [{ label: '重新決定', next: 'after' }]
    },
    end_good: {
      text: '邵先生完成療程，腎功能恢復。下次出國前到旅遊醫學門診拿預防藥。',
      ending: {
        grade: 'good',
        title: 'Severe falciparum malaria',
        pearls: [
          '疫區回來的發燒都要排除瘧疾：Giemsa 厚薄抹片',
          'Severe：parasitemia > 5%、腦性、低血糖、乳酸中毒、腎衰竭、ARDS、凝血異常',
          'IV artesunate；等藥時先口服；第三劑後 4 h <= 1% 改口服',
          'Chloroquine 抗藥地區不用 chloroquine'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id14-vivax',
  chapter: 'ID14',
  title: '隔天一次的發燒',
  patient: '31 歲男性 · 印度籍工程師',
  summary: '從印度回台灣三個月，每隔一天發燒寒顫一次。',
  cards: ['id-mosq-path', 'id-malaria'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診。Kumar 先生從印度回台灣**三個月**，最近一週**每隔一天**下午寒顫、高燒、大汗，之後退燒、精神還可以。',
        '生命徵象穩定，意識清楚。PLT 110k。抹片：**P. vivax**，parasitemia 0.5%。'
      ],
      clue: ['31M；印度回國 3 個月', '**隔天燒**', '**P. vivax**，0.5%，非重症'],
      choices: [{ label: '治療', next: 'tx' }]
    },
    tx: {
      text: '非複雜性 P. vivax（chloroquine 敏感地區）。',
      choices: [
        { label: '**Chloroquine**（血液期）+ **primaquine 30 mg base qd x 14 天**（hypnozoites）；**primaquine 前先驗 G6PD**', next: 'g6pd' },
        { label: 'Chloroquine 就好', next: 't_noprima' }
      ]
    },
    t_noprima: {
      text: '主治醫師搖頭。',
      feedback: 'P. vivax、P. ovale 在肝臟有**休眠的 hypnozoites**，只治血液期會在數月後復發。要加 **primaquine**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    g6pd: {
      text: 'G6PD 檢驗：**缺乏**。',
      clue: ['**G6PD deficiency**'],
      choices: [
        { label: '**不要給 primaquine**（會溶血）；會診感染科討論替代方案與復發監測', next: 'end_good' },
        { label: '照常給 primaquine，減半劑量', next: 'g_half' }
      ]
    },
    g_half: {
      text: '主治醫師搖頭。',
      feedback: 'Primaquine 是氧化劑，**G6PD 缺乏**會造成嚴重溶血。原文要求**先排除 G6PD 缺乏**再給。',
      choices: [{ label: '重新決定', next: 'g6pd' }]
    },
    end_good: {
      text: 'Chloroquine 後退燒。感染科安排定期追蹤，衛教再次發燒要立即就醫。',
      ending: {
        grade: 'good',
        title: 'P. vivax malaria with G6PD deficiency',
        pearls: [
          'Vivax、ovale：隔天燒；肝臟 hypnozoites -> 復發',
          'Chloroquine 敏感：chloroquine + primaquine 14 天',
          'Primaquine 前一定驗 G6PD'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id14-lepto',
  chapter: 'ID14',
  title: '颱風後的清淤',
  patient: '46 歲男性 · 里長',
  summary: '颱風淹水後幫忙清了三天淤泥，十天後高燒、小腿痛到走不動、眼睛紅、皮膚變黃。',
  cards: ['id-zoo-path', 'id-lepto'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。張里長颱風後赤腳在積水裡**清淤泥三天**，腳上有幾個小傷口。十天後突然高燒、頭痛、**小腿肌肉劇痛**。',
        'T 39.4°C。**雙眼結膜充血**（沒有分泌物）、**黃疸**。尿量變少。',
        'Bilirubin **12.6**、AST 88、ALT 76；**Cr 3.4**；PLT 62k；CK 1,800。CXR：兩側斑塊狀浸潤，偶咳血絲。'
      ],
      clue: ['46M；**颱風淹水清淤**、腳有傷口', '高燒、**小腿肌痛**、**結膜充血**', '**Bilirubin 12.6 但轉胺酶只輕微上升**', 'AKI、PLT 低、肺浸潤咳血'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: '你懷疑 Weil disease。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'pcr', group: '檢驗', label: '**血液與尿液 Leptospira PCR**；配對血清', key: true, reveal: true,
            result: '血液 PCR **陽性**', clue: '**Leptospira PCR (+)**',
            miss: '血液或尿液 PCR，或配對血清 4 倍上升確診。' },
          { id: 'report', group: '公衛', label: '通報衛生單位', result: '已通報（同一里還有兩位疑似）' },
          { id: 'bcx', group: '培養', label: '血液培養', result: '陰性' },
          { id: 'dengue', group: '檢驗', label: 'Dengue NS1', result: '陰性' }
        ]
      }
    },
    tx: {
      text: '嚴重 leptospirosis（Weil disease）。',
      choices: [
        { label: '**Penicillin G 1.5 MU IV q6h**（或 ceftriaxone、IV doxycycline）；支持治療（必要時透析）；**監測 Jarisch-Herxheimer reaction**', next: 'jh' },
        { label: '口服 doxycycline 門診追蹤', next: 't_po' },
        { label: 'Weil disease 是免疫期，不用抗生素，只給類固醇', next: 't_ster' }
      ]
    },
    t_po: {
      text: '主治醫師搖頭。',
      feedback: '口服 doxycycline 或 amoxicillin 是**輕症 anicteric** 的治療。他有黃疸、腎衰竭、肺出血，要 **IV penicillin G、doxycycline 或 3 代 cephalosporin**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_ster: {
      text: '主治醫師搖頭。',
      feedback: '嚴重 leptospirosis 要用 **IV 抗生素**加積極支持治療。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    jh: {
      text: '第一劑 penicillin 後 2 小時，他突然**寒顫、高燒 40.2°C、血壓下降**。',
      choices: [
        { label: '**Jarisch-Herxheimer reaction**（螺旋體死亡釋放物質）：支持治療，**繼續抗生素**', next: 'end_good' },
        { label: 'Penicillin 過敏，停藥換 doxycycline', next: 'j_allergy' }
      ]
    },
    j_allergy: {
      text: '主治醫師搖頭。',
      feedback: '治療螺旋體感染的第一劑後數小時出現寒顫高燒、低血壓，是 **Jarisch-Herxheimer reaction**，不是過敏。支持治療，抗生素繼續。',
      choices: [{ label: '重新決定', next: 'jh' }]
    },
    end_good: {
      text: '張里長洗了幾次腎，兩週後腎功能和黃疸都恢復。',
      ending: {
        grade: 'good',
        title: "Leptospirosis（Weil disease）",
        pearls: [
          '鼠尿污染的水、淹水後 5-14 天',
          '結膜充血、小腿肌痛；bilirubin 上升與轉胺酶不成比例',
          'Weil：黃疸、AKI、出血性肺炎',
          '輕症 doxy 或 amoxicillin 7 天；重症 PCN G、IV doxy、3 代 ceph；注意 Jarisch-Herxheimer'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id14-qfever',
  chapter: 'ID14',
  title: '羊舍裡的肺炎',
  patient: '39 歲男性 · 羊場工作',
  summary: '羊舍工作，最近母羊大量生產。高燒、劇烈頭痛、乾咳，肝指數上升。',
  cards: ['id-zoo-path', 'id-brucella-q'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。楊先生在羊場工作，上個月**母羊集中生產**，他負責處理**胎盤**。一週來高燒、**劇烈頭痛**、乾咳。',
        'CXR：右下葉**圓形浸潤（round pneumonia）**。AST 156、ALT 188。PLT 偏低。',
        '入院用 ceftriaxone 三天沒有效果。他小時候說有「心雜音」。'
      ],
      clue: ['39M；**羊場、處理胎盤**', '高燒、**劇烈頭痛**、乾咳、**round pneumonia**', '**肝炎**', 'Ceftriaxone 無效', '可能有瓣膜病變'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '你懷疑 acute Q fever。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'sero', group: '檢驗', label: '**C. burnetii phase I/II IgM、IgG**（急性與 3-6 週後恢復期）', key: true, reveal: true,
            result: '急性：phase II IgM 陽性；**3 週後 phase II IgG 4 倍上升**', clue: '**Phase II 抗體 4 倍上升** -> acute Q fever',
            miss: 'Coxiella 不長在一般培養，靠血清學；急性看 phase II 抗體 4 倍上升。' },
          { id: 'echo', group: '影像', label: '**心臟超音波**', key: true, reveal: true,
            result: '**Bicuspid aortic valve**，輕度 AR，無 vegetation', clue: '**Bicuspid AV**（慢性 Q fever 風險）',
            miss: '原有瓣膜病變的人容易發展成慢性 Q fever 心內膜炎，要評估。' },
          { id: 'uag', group: '檢驗', label: 'Legionella、pneumococcal 尿液抗原', result: '陰性' },
          { id: 'brucella', group: '檢驗', label: 'Brucella 血清與血液培養', result: '陰性' },
          { id: 'report', group: '公衛', label: '通報', result: '已通報' }
        ]
      }
    },
    tx: {
      text: 'Acute Q fever（肺炎 + 肝炎）。',
      choices: [
        { label: '**Doxycycline 100 mg q12h x 14 天**；因為有瓣膜病變，**每 3 個月追蹤 phase I IgG** 監測慢性化', next: 'end_good' },
        { label: '繼續 ceftriaxone 加 azithromycin', next: 't_cro' },
        { label: 'Doxycycline + hydroxychloroquine 18 個月', next: 't_chronic' }
      ]
    },
    t_cro: {
      text: '主治醫師搖頭。',
      feedback: 'Q fever 首選 **doxycycline**（macrolide、FQ、TMP-SMX 是替代）。β-lactam 無效。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_chronic: {
      text: '主治醫師搖頭。',
      feedback: '那是**慢性 Q fever**（包括心內膜炎）的治療。他目前是急性，用 doxycycline 14 天，並追蹤 phase I IgG。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '楊先生退燒、肝功能恢復。一年內追蹤 phase I IgG 都 < 1:800，沒有發展成慢性。',
      ending: {
        grade: 'good',
        title: 'Acute Q fever',
        pearls: [
          '牲畜（胎盤）、吸入；非典型肺炎 + 頭痛、round pneumonia、肝炎、FUO',
          '血清：急性 phase II 4 倍上升；慢性 phase I IgG > 1:800',
          '急性 doxycycline 14 天；慢性（IE）doxy + HCQ 18-24 個月',
          '培養陰性 IE + 暴露 -> 驗 Q fever'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id14-brucella',
  chapter: 'ID14',
  title: '一陣一陣的發燒',
  patient: '52 歲男性 · 中東工作返國',
  summary: '在中東工作時常喝現擠的羊奶。發燒斷斷續續兩個月，下背痛，汗有怪味。',
  cards: ['id-zoo-path', 'id-brucella-q'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '感染科門診。湯先生在中東工地工作一年，常喝當地牧民的**未殺菌羊奶**、吃自製起司。兩個月來**發燒一陣一陣**（幾天燒、幾天退）、盜汗，太太說他的**汗有發霉的味道**。',
        '最近**下背痛**、晚上痛醒。肝脾腫大。',
        'MRI：**L4-L5 spondylodiscitis**。'
      ],
      clue: ['52M；**未殺菌羊奶與起司**', '**波浪熱**、盜汗、**發霉味的汗**', '肝脾腫大', '**L4-L5 spondylodiscitis**'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '你懷疑 brucellosis。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'bcx', group: '培養', label: '**血液培養**（通知微生物室延長培養）', key: true, reveal: true,
            result: '第 6 天：**Brucella melitensis**', clue: '**B. melitensis**',
            miss: '培養是 gold standard；要告訴實驗室，避免實驗室感染。' },
          { id: 'sero', group: '檢驗', label: 'Brucella 血清（Rose Bengal）', result: '陽性' },
          { id: 'tb', group: '檢驗', label: 'IGRA', result: '陰性' }
        ]
      }
    },
    tx: {
      text: '骨關節 brucellosis（spondylodiscitis）。',
      choices: [
        { label: '**Doxycycline 100 mg q12h x 12 週** + **streptomycin 15 mg/kg IM 前 2-3 週**（或 gentamicin）', next: 'end_good' },
        { label: 'Doxycycline 6 週', next: 't_six' },
        { label: 'Doxycycline 單用 2 週', next: 't_short' }
      ]
    },
    t_six: {
      text: '主治醫師搖頭。',
      feedback: '6 週是**非局部化**的 brucellosis。**骨關節侵犯要 12 週**，並合併 aminoglycoside 前 2-3 週。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_short: {
      text: '主治醫師搖頭。',
      feedback: 'Brucella 是巨噬細胞內寄生菌，需要**長療程合併治療**，否則復發率很高。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '三個月療程後背痛消失，發燒沒有復發。',
      ending: {
        grade: 'good',
        title: 'Brucellar spondylodiscitis',
        pearls: [
          '未殺菌乳品、牲畜；波浪熱、發霉味的汗',
          '年輕人 sacroiliitis、年長者脊椎椎間盤炎',
          '血液培養是 gold standard（通知實驗室）',
          'Doxy 6 週（骨關節 12 週）+ streptomycin 或 gentamicin 前 2-3 週'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id14-csd',
  chapter: 'ID14',
  title: '新來的小貓',
  patient: '21 歲女性 · 大學生',
  summary: '領養小貓後被抓傷，三週後腋下腫了一大顆淋巴結。',
  cards: ['id-zoo-path', 'id-bartonella'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診。小鈺一個月前領養了一隻**小貓**，常被抓。三週前右前臂抓傷處長出幾顆小紅丘疹，現在**右腋下淋巴結腫到 4 cm**，壓痛、有點軟（**化膿**）。低燒、倦怠。',
        '沒有體重減輕、盜汗。其他部位淋巴結不大。'
      ],
      clue: ['21F；**幼貓抓傷**', '抓傷處丘疹 -> 3 週後**同側腋下淋巴結炎**（化膿）', '低燒'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '你懷疑 cat scratch disease。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'sero', group: '檢驗', label: '**B. henselae 抗體**', key: true, reveal: true,
            result: '**IgG 1:1,024**', clue: '**B. henselae 抗體高**',
            miss: '高 B. henselae 抗體支持診斷。' },
          { id: 'hiv', group: '檢驗', label: 'HIV', result: '陰性' },
          { id: 'eye', group: '理學', label: '眼睛檢查', result: '正常（無 Parinaud、無視網膜炎）' },
          { id: 'excise', group: '處置', label: '淋巴結切除', result: '已撤回',
            waste: '典型的 cat scratch disease 不需要切除；化膿的淋巴結用針抽緩解即可。' }
        ]
      }
    },
    tx: {
      text: '局部淋巴結炎型 cat scratch disease。',
      choices: [
        { label: '**Azithromycin 500 mg 單次，之後 250 mg qd x 4 天**；化膿的淋巴結**針抽**緩解', next: 'end_good' },
        { label: '切開引流', next: 't_id' },
        { label: 'Rifampin + doxycycline 6 週', next: 't_rif' }
      ]
    },
    t_id: {
      text: '主治醫師搖頭。',
      feedback: '化膿的淋巴結用**針抽**；切開可能造成慢性廔管。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_rif: {
      text: '主治醫師搖頭。',
      feedback: '含 rifampin 的合併治療是給**嚴重感染**（例如神經視網膜炎、肝脾侵犯、心內膜炎）。局部淋巴結炎 azithromycin 5 天即可。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '針抽後疼痛改善，一個月後淋巴結縮小。',
      ending: {
        grade: 'good',
        title: 'Cat scratch disease',
        pearls: [
          '貓抓 3-30 天後丘疹 + 區域淋巴結炎；多自限 2-4 個月',
          '非典型：Parinaud、視網膜炎、FUO、培養陰性 IE；HIV：bacillary angiomatosis',
          'Azithromycin 5 天；化膿針抽；嚴重用含 rifampin 的合併治療'
        ]
      }
    }
  }
});
