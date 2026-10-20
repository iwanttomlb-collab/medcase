// HO 05 WBC disorders and transfusion therapy. Source: Pocket Medicine Ch 5, p18-21 of 書頁.txt

RPG.registerCards('HO5', [
  {
    id: 'ho-wbc',
    title: '白血球數量異常',
    table: {
      head: ['異常', '常見原因'],
      rows: [
        ['**Neutrophilia**（> 7,500-10,000）', '細菌感染（toxic granulation、Döhle bodies）；燒傷、組織壞死、MI、PE；**steroids、beta-agonists、lithium、G-CSF、抽菸**；壓力；溶血、ITP；無脾；MPN 或 paraneoplastic'],
        ['Leukemoid reaction', '> 50,000 + left shift，非白血病；**LAP 上升**（CML 則下降）'],
        ['**Neutropenia**（< 1,500）', '先天（Duffy-null、cyclic 等）；病毒（CMV、EBV、HIV）、Brucella、Rickettsia、TB、malaria；**B12 或 copper 缺乏**；**藥物：化療、clozapine、methimazole、TMP-SMX、NSAIDs、sulfasalazine、phenytoin**；酒精；MDS、白血病（hairy cell、LGL）'],
        ['Lymphocytosis（> 4,000-5,000）', '多為病毒（mono 的 atypical lymphocytes）；pertussis、toxoplasmosis；藥物、serum sickness；RA（LGL）、thymoma；CLL、hairy cell、mantle cell、follicular'],
        ['Monocytosis（> 500）', 'TB、SBE、Listeria、Brucella、fungi、syphilis；IBD、sarcoidosis；MI、splenectomy；HL、白血病、MPN、癌'],
        ['**Eosinophilia**（> 500）', '**寄生蟲（helminths）**；藥物、氣喘、ABPA；RA、**EGPA**、eosinophilic fasciitis、PAN；**adrenal insufficiency**；HL、CML、mycosis fungoides、systemic mastocytosis；**cholesterol emboli**；**HES**'],
        ['Basophilia（> 200）', 'MPN、**CML**、AML、HL；溶血、splenectomy；IBD；TB、寄生蟲']
      ]
    },
    points: [
      '**HES**：多器官（含心臟、CNS）；約 15% 有 **FIP1L1-PDGFRA**（男性為主），**常對類固醇抗性**，對 **imatinib** 有效'
    ],
    refs: ['NEJM 2003;348:1201（FIP1L1-PDGFRA）', 'Am J Hem 2009;84:428（drug-induced neutropenia）', 'Cytokine 2013;61:364（monocytosis）']
  },
  {
    id: 'ho-products',
    title: '血品與適應症',
    table: {
      head: ['血品', '適應症與重點'],
      rows: [
        ['**PRBC**', '急性失血或末端器官缺血；1 U 約升 Hb 1 g/dL；**Hb > 7 對 UGIB 與重症已足夠**；AMI 8 vs 10 資料不一'],
        ['**PLT**', '**化療後 < 10k**；**< 20k 合併發燒/感染**；**< 50k 合併出血**；CVC 前 < 50k 可考慮；神外 100k；1 U 約升 30-60k'],
        ['PLT 禁忌', '**TTP/HUS、HELLP、HIT**'],
        ['PLT refractory', '輸後 30-60 分鐘上升 < 5k -> ITP、DIC 或 alloimmunization；先試 **ABO-matched**，仍無效驗 PRA 考慮 **HLA-matched**'],
        ['**FFP**', '多種因子缺乏的出血（DIC、TTP、肝病、稀釋）；warfarin 逆轉首選 4F-PCC'],
        ['**Cryo**', 'Fibrinogen、vWF、VIII、XIII；**fibrinogen < 100 第一線**'],
        ['**Irradiated**', '預防 **TA-GVHD**：HSCT、血液惡性腫瘤、先天免疫缺乏'],
        ['CMV-negative', 'CMV 陰性孕婦、移植前後、SCID、AIDS'],
        ['**Leukoreduced**', '減少 HLA alloimmunization、發燒反應、CMV；長期輸血、移植候選、曾 FNHTR'],
        ['IVIg', 'Post-exposure（HAV）、ITP、GBS、MG、CIDP、低丙種球蛋白（CVID、CLL）'],
        ['Apheresis', 'Plasma：cryoglobulinemia、Goodpasture、GBS、hyperviscosity、TTP；cells：hyperleukocytosis、症狀性血小板增多；RBC exchange：SCD ACS、stroke'],
        ['Massive transfusion', 'Ca 下降、K 上升、PLT 與凝血因子稀釋；1:1:1 起始']
      ]
    },
    refs: ['Lancet 2013;381:1845', 'JAMA 2023;330:1892（transfusion thresholds）', 'NEJM 2013;368:11 & 2014;371:1381（restrictive）', 'NEJM 2023;389:2446（MINT）', 'Ann Intern Med 2015;162:205（PLT）', 'NEJM 2023;388:1956（PLT before CVC）', 'JAMA Surg 2017;152:574（massive transfusion）']
  },
  {
    id: 'ho-tfn-rxn',
    title: '輸血反應',
    table: {
      head: ['反應', '時間與表現', '機轉', '處置'],
      rows: [
        ['**Acute hemolytic**', '**24 h 內**：發燒、**低血壓**、腰痛、AKI', '**ABO 不合**', 'IVF、利尿維持尿量'],
        ['Delayed hemolytic', '**5-7 d** 後，較輕；可 hyperhemolysis', '次要抗原 alloAb 的回憶反應', '通常不需治療；記錄供日後輸血'],
        ['**Febrile nonhemolytic**', '輸血 0-6 h 發燒、寒顫', '抗 donor WBC、血品中 cytokines', 'Acetaminophen ± meperidine；排除感染與溶血'],
        ['Allergic', '蕁麻疹；罕見 anaphylaxis（**IgA 缺乏有 anti-IgA**）', '對血漿蛋白過敏', '蕁麻疹 diphenhydramine；anaphylaxis epinephrine；**washed** 血品'],
        ['**TACO**', '肺水腫、**血壓上升**', '容積過多', '減慢速度、**利尿**、O2'],
        ['**TRALI**', '非心因性肺水腫', '多產婦血漿中的 donor 抗白血球抗體', '支持；美國血漿只用男性 donor 後少見']
      ]
    },
    points: [
      '除輕微過敏外：**停止輸血**，剩餘血品 + 新抽血送血庫',
      '血品一次一袋（大量輸血除外）的原因：發生反應時能找出是哪一袋',
      '感染風險（每單位）：CMV 常見；HBV 1:220,000；HCV 1:1,600,000；HIV 1:1,800,000；細菌 PRBC 1:500,000、**PLT 1:12,000**（室溫保存）'
    ],
    refs: ['NEJM 2017;377:1261（transfusion complications）']
  }
]);

RPG.registerCase({
  id: 'ho5-tfn',
  chapter: 'HO5',
  title: '值班夜的四袋血',
  patient: '內科病房 · 夜班',
  summary: '今晚有四個病人在輸血，護理站的電話一直響。',
  cards: ['ho-tfn-rxn', 'ho-products'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '晚上十點，你接了內科病房的值班。交班單上有四個病人今晚輸血。',
        '第一通電話：「12 床吳先生，MDS 長期輸血，第二袋 PRBC 輸了一小時，**體溫 38.4**，有點發抖。血壓 132/78，跟之前一樣。」'
      ],
      clue: ['12 床：MDS，長期輸血；輸 PRBC 1 h 後**發燒 38.4、寒顫**；BP 穩定'],
      choices: [{ label: '處理 12 床', next: 'b12' }]
    },
    b12: {
      text: '你怎麼處理？',
      choices: [
        { label: '**停止輸血**，剩餘血品與新抽血送血庫（排除溶血、細菌污染）；給 acetaminophen；之後用 **leukoreduced** 血品', next: 'b12_ok' },
        { label: '給 acetaminophen，繼續輸完', next: 'b12_cont' },
        { label: '給 epinephrine', next: 'b12_epi' }
      ]
    },
    b12_cont: {
      text: '主治醫師在電話那頭說：「不行。」',
      feedback: '發燒最可能是 FNHTR，但在排除 acute hemolytic reaction 與細菌污染之前，都要先停止輸血、送檢體到血庫。',
      choices: [{ label: '重新決定', next: 'b12' }]
    },
    b12_epi: {
      text: '主治醫師嘆了口氣。',
      feedback: '沒有低血壓、喘鳴、喉頭水腫，不是 anaphylaxis。這是發燒型反應，先停止輸血評估。',
      choices: [{ label: '重新決定', next: 'b12' }]
    },
    b12_ok: {
      text: [
        '血庫回報：DAT 陰性、無溶血、血品 Gram stain 陰性。**FNHTR**。',
        '第二通：「8 床高小姐，輸 FFP 二十分鐘，**手臂和胸口起蕁麻疹**，會癢。血壓、呼吸都正常，沒有喘。」'
      ],
      clue: ['12 床：**FNHTR**', '8 床：FFP 20 分鐘後**蕁麻疹**，生命徵象正常'],
      choices: [
        { label: '暫停輸血，**diphenhydramine**；症狀緩解後可**以較慢速度繼續**同一袋', next: 'b8_ok' },
        { label: '停止輸血，整袋退回血庫做完整溶血檢查', next: 'b8_full' },
        { label: '給 IM epinephrine', next: 'b8_epi' }
      ]
    },
    b8_full: {
      text: '血庫的技術員打來問：「只有蕁麻疹？」',
      feedback: '單純蕁麻疹、無其他症狀的輕微過敏，是唯一不需要完整輸血反應檢查的情況。暫停、給抗組織胺，緩解後可慢速繼續。',
      choices: [{ label: '重新決定', next: 'b12_ok' }]
    },
    b8_epi: {
      text: '主治醫師搖頭。',
      feedback: '沒有低血壓或呼吸道症狀，不是 anaphylaxis，不需要 epinephrine。',
      choices: [{ label: '重新決定', next: 'b12_ok' }]
    },
    b8_ok: {
      text: [
        '蕁麻疹消退，慢速輸完。',
        '第三通：「22 床李阿公，88 歲，心衰竭 EF 30%，**今天下午到現在輸了 3 袋 PRBC**。現在很喘，**SpO2 86%**，**血壓 178/96**，頸靜脈怒張，兩側肺底 crackles。」'
      ],
      clue: ['22 床：88 歲 HFrEF；**3 袋 PRBC** 後喘、**SpO2 86%**、**BP 178/96**、JVP 上升、crackles'],
      choices: [
        { label: '**TACO**：停止輸血、坐起、**O2**、**IV furosemide**', next: 'b22_ok' },
        { label: 'TRALI，給類固醇', next: 'b22_trali' },
        { label: '輸血太慢，加快第 4 袋', next: 'b22_fast' }
      ]
    },
    b22_trali: {
      text: '主治醫師搖頭。',
      feedback: 'TRALI 是非心因性肺水腫，常伴低血壓。他血壓上升、JVP 高、心衰竭病史、短時間輸 3 袋，是 TACO，要利尿。',
      choices: [{ label: '重新決定', next: 'b8_ok' }]
    },
    b22_fast: {
      text: '護理師愣住了。',
      feedback: '這是容積過多。要停止輸血並利尿；心衰竭病人之後要放慢速度、每袋之間給利尿劑。',
      choices: [{ label: '重新決定', next: 'b8_ok' }]
    },
    b22_ok: {
      text: [
        '利尿後尿量 800 mL，SpO2 回到 95%。',
        '凌晨兩點，第四通電話，護理師很急：「5 床陳太太，PRBC 才輸 15 分鐘，**突然發燒 39 度、發抖、說腰很痛**，**血壓 82/45**，尿袋裡的尿是**紅色**的！」',
        '你衝過去，看到床頭的血袋標籤上寫的是「**陳淑芬**」，病人手圈上是「**陳淑芳**」。'
      ],
      clue: ['5 床：輸血 15 分鐘後**發燒、腰痛、低血壓、血紅素尿**', '**血袋與病人姓名不符**'],
      choices: [
        { label: '**立即停止輸血**、保留管路換 NS、**積極 IVF 並維持尿量**；血袋 + 新抽血送血庫（DAT、溶血、DIC）；通報', next: 'end_good' },
        { label: '先給 acetaminophen 和 diphenhydramine，觀察看看', next: 'b5_wait' },
        { label: '減慢輸血速度', next: 'b5_slow' }
      ]
    },
    b5_wait: {
      text: '主治醫師的聲音變得很急。',
      feedback: '發燒 + 低血壓 + 腰痛 + 血紅素尿，又是輸錯人，這是 **ABO 不合的 acute hemolytic reaction**，可致命（休克、AKI、DIC）。立即停止輸血。',
      choices: [{ label: '重新決定', next: 'b22_ok' }]
    },
    b5_slow: {
      text: '主治醫師的聲音變得很急。',
      feedback: 'ABO 不合的溶血與輸入量成正比，每多一毫升都更危險。立即停止，不是減慢。',
      choices: [{ label: '重新決定', next: 'b22_ok' }]
    },
    end_good: {
      text: '血庫確認：病人 O 型，血袋 A 型。陳太太在積極輸液下維持尿量，Cr 只輕度上升。另一位「陳淑芬」的血袋還在冰箱裡。醫院啟動了病人辨識流程的檢討。',
      ending: {
        grade: 'good',
        title: '一夜四種輸血反應',
        pearls: [
          '除輕微蕁麻疹外，所有反應都先停輸血、血品 + 新抽血送血庫',
          'FNHTR：發燒寒顫；之後用 leukoreduced',
          'TACO：血壓上升、JVP 高 -> 利尿；TRALI：非心因性、常低血壓',
          'Acute hemolytic：ABO 不合，發燒、低血壓、腰痛、血紅素尿 -> 停止、IVF、維持尿量'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho5-support',
  chapter: 'HO5',
  title: '誘導化療的第十天',
  patient: '45 歲男性 · AML 誘導化療中',
  summary: '7+3 化療後第十天，血球都到底了。今天的問題是：要輸什麼、輸多少。',
  cards: ['ho-products'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '血液科病房。邱先生 AML 接受 7+3 誘導化療，今天第 10 天。',
        '今天 CBC：Hb **7.4**、PLT **8,000**、ANC 0。沒有發燒，沒有出血。他有點累，但可以下床走動。'
      ],
      clue: ['45M；AML，7+3 第 10 天', '**Hb 7.4、PLT 8k**、ANC 0', '無發燒、無出血'],
      choices: [{ label: '決定今天的血品', next: 'q1' }]
    },
    q1: {
      text: '今天要輸什麼？',
      choices: [
        { label: '**預防性 PLT**（化療後 < 10k）；Hb 7.4 無症狀暫不輸 PRBC；血品要 **irradiated、leukoreduced**', next: 'q1_ok' },
        { label: 'PLT 與 PRBC 都輸，把 Hb 拉到 10', next: 'q1_both' },
        { label: '沒出血就不用輸 PLT', next: 'q1_none' }
      ]
    },
    q1_both: {
      text: '主治醫師搖頭。',
      feedback: 'Restrictive strategy（Hb > 7）對大多數住院病人已經足夠。PLT < 10k 才是今天的預防性輸注指標。',
      choices: [{ label: '重新決定', next: 'q1' }]
    },
    q1_none: {
      text: '主治醫師搖頭。',
      feedback: '化療後 PLT < 10k 就要預防性輸注，避免自發性致命出血；不用等出血。',
      choices: [{ label: '重新決定', next: 'q1' }]
    },
    q1_ok: {
      text: '主治醫師問：「為什麼要 irradiated？」',
      choices: [
        { label: '血液惡性腫瘤與 HSCT 候選人，**預防 transfusion-associated GVHD**（殺死 donor T cells）', next: 'refr' },
        { label: '為了殺死血品中的 CMV', next: 'irr_cmv' },
        { label: '為了減少發燒反應', next: 'irr_fever' }
      ]
    },
    irr_cmv: {
      text: '主治醫師搖頭。',
      feedback: 'CMV 是用 **leukoreduction** 或 CMV-negative donor 來降低。照射是讓 donor T cells 無法增殖，預防 TA-GVHD。',
      choices: [{ label: '重新回答', next: 'q1_ok' }]
    },
    irr_fever: {
      text: '主治醫師搖頭。',
      feedback: '減少 FNHTR 與 HLA alloimmunization 靠的是 leukoreduction。照射是為了 TA-GVHD。',
      choices: [{ label: '重新回答', next: 'q1_ok' }]
    },
    refr: {
      text: [
        '第 14 天，他已經輸了 8 次血小板。今天輸完 1 小時的 PLT 是 **9k**（輸前 6k）。沒有發燒、沒有 DIC、沒有 splenomegaly。',
        '下一步？'
      ],
      clue: '輸後 1 h PLT 只上升 3k（**PLT refractoriness**）',
      choices: [
        { label: '先試 **ABO-matched** PLT；仍無效驗 **PRA/HLA antibody**，改 **HLA-matched** PLT', next: 'line' },
        { label: '加倍劑量隨機血小板', next: 'r_double' },
        { label: '停止輸血小板，反正沒用', next: 'r_stop' }
      ]
    },
    r_double: {
      text: '主治醫師搖頭。',
      feedback: '沒有消耗原因（發燒、DIC、脾大）的 refractoriness，最常是 HLA alloimmunization，加倍隨機 PLT 一樣會被破壞。先 ABO-matched，再 HLA-matched。',
      choices: [{ label: '重新決定', next: 'refr' }]
    },
    r_stop: {
      text: '主治醫師搖頭。',
      feedback: 'PLT 6k 的 AML 病人出血風險很高，要找出原因並換成相合的血小板。',
      choices: [{ label: '重新決定', next: 'refr' }]
    },
    line: {
      text: [
        'HLA antibody 陽性，改 HLA-matched PLT 後 1 小時 PLT 升到 42k。',
        '今天要換新的 CVC，PLT 42k。'
      ],
      choices: [
        { label: 'PLT < 50k 可考慮放 CVC 前輸 PLT（超音波導引）', next: 'end_good' },
        { label: '要輸到 100k 才能放 CVC', next: 'end_ok',
          why: '100k 是神經外科的目標。CVC 在 PLT < 50k 時可考慮預防性輸注，超音波導引下出血風險低。' }
      ]
    },
    end_ok: {
      text: '為了衝到 100k，他多用了三袋 HLA-matched PLT，CVC 延後一天放。',
      ending: {
        grade: 'ok',
        title: '血品使用過度',
        pearls: [
          'PLT 目標：化療 < 10k、發燒 < 20k、出血 < 50k、CVC < 50k 可考慮、神外 100k',
          'Refractory：ABO-matched -> HLA-matched'
        ]
      }
    },
    end_good: {
      text: '第 28 天骨髓檢查：complete remission。邱先生這次住院一共輸了 6 袋 PRBC、14 劑 PLT，沒有出血、沒有 GVHD。',
      ending: {
        grade: 'good',
        title: '化療期間的血品支持',
        pearls: [
          'PRBC：Hb > 7 通常足夠',
          'PLT：化療 < 10k、發燒 < 20k、出血 < 50k',
          'Irradiated -> TA-GVHD；leukoreduced -> alloimmunization、FNHTR、CMV',
          'Refractory（輸後上升 < 5k）：ABO-matched -> HLA-matched'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho5-hes',
  chapter: 'HO5',
  title: '嗜酸性球八千',
  patient: '46 歲男性 · 工程師',
  summary: '喘、疲倦、皮疹，健檢發現嗜酸性球非常高。',
  cards: ['ho-wbc'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '血液科門診。方先生三個月來疲倦、活動時喘、腿上發癢的皮疹，體重少了 3 公斤。',
        'CBC：WBC 15,200，**eosinophils 54%（AEC 8,200/uL）**。三個月前就已經 > 5,000。'
      ],
      clue: ['46M；疲倦、DOE、搔癢皮疹', '**AEC 8,200**，持續 > 3 個月'],
      choices: [{ label: '問診', next: 'hx' }]
    },
    hx: {
      text: '你要先排除常見的次發原因。',
      choices: [
        { label: '問旅遊、飲食、寄生蟲暴露', next: 'hx_para', once: true },
        { label: '問用藥', next: 'hx_drug', once: true },
        { label: '問氣喘、鼻竇炎、神經症狀', next: 'hx_egpa', once: true },
        { label: '開始檢查', next: 'labs', pin: true }
      ]
    },
    hx_para: {
      text: '沒有出國，不吃生食，住在都市。',
      choices: [{ label: '回到問診', next: 'hx' }]
    },
    hx_drug: {
      text: '沒有新藥，沒有吃保健食品。',
      clue: '無新藥',
      choices: [{ label: '回到問診', next: 'hx' }]
    },
    hx_egpa: {
      text: '沒有氣喘、沒有鼻竇炎、沒有手腳麻。',
      clue: '無氣喘、鼻竇炎、神經病變（不像 EGPA）',
      choices: [{ label: '回到問診', next: 'hx' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'stool', group: '次發原因', label: '糞便寄生蟲、**Strongyloides serology**', key: true, reveal: true,
            result: '陰性', clue: '寄生蟲（含 Strongyloides）陰性',
            miss: '嗜酸性球增多最常見是寄生蟲；而且 Strongyloides 在使用類固醇前一定要排除（hyperinfection）。' },
          { id: 'trop', group: '器官', label: 'Troponin、BNP、心臟超音波', key: true, reveal: true,
            result: 'Troponin 輕度上升；**心尖部血栓、心內膜增厚**', clue: '**心臟侵犯**（心內膜纖維化、心尖血栓）',
            miss: 'HES 最致命的是心臟侵犯，一定要評估。' },
          { id: 'smear', group: '血液', label: 'Smear', key: true, reveal: true,
            result: '成熟嗜酸性球；無 blasts', clue: '無 blasts',
            miss: '要排除白血病。' },
          { id: 'fish', group: '血液', label: '**FIP1L1-PDGFRA**（FISH 或 PCR）、BCR-ABL', key: true, reveal: true,
            result: '**FIP1L1-PDGFRA 陽性**；BCR-ABL 陰性', clue: '**FIP1L1-PDGFRA (+)**',
            miss: '持續嚴重嗜酸性球增多，要找 myeloid neoplasm 的驅動突變。' },
          { id: 'tryp', group: '血液', label: 'Serum tryptase、B12', result: 'Tryptase 上升；**B12 上升**', clue: 'Tryptase、B12 上升（myeloid 特徵）' },
          { id: 'cort', group: '其他', label: 'AM cortisol', result: '正常', clue: '排除 adrenal insufficiency' },
          { id: 'anca', group: '其他', label: 'ANCA', result: '陰性' },
          { id: 'ige', group: '其他', label: 'Total IgE', result: '輕度上升' }
        ]
      }
    },
    dx: {
      text: 'FIP1L1-PDGFRA 陽性，合併心臟侵犯。治療？',
      choices: [
        { label: '**Imatinib**（對 PDGFRA 融合非常敏感）；心尖血栓抗凝', next: 'end_good' },
        { label: '高劑量 prednisone', next: 'dx_ster' },
        { label: 'Ivermectin 經驗性驅蟲', next: 'dx_iver' }
      ]
    },
    dx_ster: {
      text: '主治醫師搖頭。',
      feedback: 'FIP1L1-PDGFRA 陽性的 HES **常對類固醇抗性**，但對 imatinib 反應極好。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    dx_iver: {
      text: '主治醫師搖頭。',
      feedback: '寄生蟲檢查陰性、又找到 clonal driver，這不是寄生蟲。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '低劑量 imatinib 兩週後嗜酸性球降到正常。三個月後心尖血栓消失，FIP1L1-PDGFRA 轉陰。',
      ending: {
        grade: 'good',
        title: 'FIP1L1-PDGFRA 陽性 HES',
        pearls: [
          '嗜酸性球增多先排除寄生蟲（Strongyloides）、藥物、過敏、EGPA、adrenal insufficiency',
          'HES 多器官侵犯，心臟最危險',
          'FIP1L1-PDGFRA：男性為主、類固醇抗性、imatinib 有效'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho5-agran',
  chapter: 'HO5',
  title: '喉嚨痛的甲亢病人',
  patient: '29 歲女性 · Graves disease',
  summary: '吃 methimazole 第六週，喉嚨痛、發燒 39 度。',
  cards: ['ho-wbc'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。蘇小姐 Graves disease，六週前開始 **methimazole 30 mg/d**。兩天前喉嚨痛，今天發燒 **39.2 度**。',
        'CBC：WBC **900**，**ANC 40**；Hb 12.6；PLT 230k。'
      ],
      clue: ['29F；**methimazole** 第 6 週', '喉嚨痛、**發燒 39.2**', '**ANC 40**（agranulocytosis）；Hb、PLT 正常'],
      choices: [{ label: '處理', next: 'tx' }]
    },
    tx: {
      text: '第一步？',
      choices: [
        { label: '**立即停 methimazole**；抽血液培養後**立即 broad-spectrum 抗生素**（cefepime）；隔離', next: 'next' },
        { label: '減半 methimazole，先觀察', next: 'tx_half' },
        { label: '喉嚨痛是病毒感染，給症狀治療就好', next: 'tx_viral' }
      ]
    },
    tx_half: {
      text: '主治醫師搖頭。',
      feedback: 'Methimazole 引起的 agranulocytosis 要**永久停藥**，減量沒用。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_viral: {
      text: '主治醫師搖頭。',
      feedback: 'ANC 40 + 發燒 = neutropenic fever，必須立即用 broad-spectrum 抗生素，並停掉可疑藥物。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    next: {
      text: '抗生素上了。甲狀腺毒症還在。內分泌科問：「換 PTU 可以嗎？」',
      choices: [
        { label: '**不可以**：thionamides 有交叉反應；改 beta-blocker 控制症狀，待恢復後安排 **RAI 或甲狀腺切除**', next: 'end_good' },
        { label: '可以，PTU 是不同的藥', next: 'end_bad',
          why: 'Methimazole 與 PTU 同屬 thionamides，agranulocytosis 有交叉反應，兩者都禁用。' }
      ]
    },
    end_bad: {
      text: '換 PTU 一週後，ANC 又掉到 0，她因 Pseudomonas 敗血症進 ICU。',
      ending: {
        grade: 'bad',
        title: 'Thionamide 交叉反應',
        pearls: [
          'Methimazole 與 PTU 交叉反應，agranulocytosis 後兩者都禁用',
          '藥物性 neutropenia：化療、clozapine、methimazole、TMP-SMX、NSAIDs、sulfasalazine、phenytoin'
        ]
      }
    },
    end_good: {
      text: '五天後 ANC 回到 1,800，喉嚨培養 S. pyogenes。她用 propranolol 與 SSKI 準備，兩個月後接受甲狀腺全切除。',
      ending: {
        grade: 'good',
        title: 'Methimazole-induced agranulocytosis',
        pearls: [
          '發燒 + ANC < 500 -> 立即 broad-spectrum 抗生素',
          '找可疑藥物並永久停用；thionamides 交叉反應',
          '藥物性 neutropenia 的常見藥物要背'
        ]
      }
    }
  }
});
