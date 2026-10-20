// HO 01 Anemia: microcytic, normocytic, macrocytic. Source: Pocket Medicine Ch 5, p1-4 of 書頁.txt

RPG.registerCards('HO1', [
  {
    id: 'ho-anemia-approach',
    title: 'Anemia 的初步評估',
    points: [
      '定義：男性 **Hct < 41%** 或 **Hb < 13.5 g/dL**；女性 **Hct < 36%** 或 **Hb < 12 g/dL**',
      '症狀：O2 delivery 下降 -> fatigue、exertional dyspnea、angina（有 CAD 時）',
      '線索：jaundice（hemolysis）、splenomegaly、petechiae、glossitis（Fe、folate、B12）、koilonychia（Fe）、神經學異常（B12）',
      '**Reticulocyte index (RI)** = retic count x (Pt Hct / 正常 Hct) / maturation factor',
      'Maturation factor：Hct 45% = 1；35% = 1.5；25% = 2；20% = 2.5',
      '**RI > 2%**：骨髓反應足夠（失血、hemolysis）；**RI < 2%**：hypoproliferation',
      '再依 **MCV** 分成 microcytic、normocytic、macrocytic；mixed disorder 可以讓 MCV 正常，要看 RDW'
    ],
    refs: ['Pocket Medicine Ch 5, Anemia（Figure 5-1）']
  },
  {
    id: 'ho-microcytic',
    title: 'Microcytic anemia 鑑別',
    table: {
      head: ['', 'Fe', 'TIBC', 'Ferritin', 'Fe/TIBC', '其他'],
      rows: [
        ['**Iron deficiency**', '下降', '**上升**', '**下降**（< 30 幾乎確定）', '< 18%', 'Mentzer > 13'],
        ['**Anemia of chronic inflammation**', '下降', '**下降**', '正常或上升', '> 18%', '可為 normocytic'],
        ['**Thalassemia**', '正常', '正常', '正常', '正常', '**MCV/RBC < 13**、basophilic stippling'],
        ['**Sideroblastic**', '上升', '正常', '上升', '上升', 'BM **ringed sideroblasts**']
      ]
    },
    note: 'Mentzer index（MCV/RBC）< 13 傾向 thalassemia（Se 60%、Sp 98%）。',
    refs: ['NEJM 2014;371:1324（approach to microcytic anemia）']
  },
  {
    id: 'ho-ida',
    title: 'Iron deficiency anemia',
    points: [
      '病因：**慢性出血**（GI 含癌症、月經、寄生蟲、NSAIDs）、攝取或吸收不足（celiac、Crohn’s、胃切除、胃酸不足）、需求上升（懷孕）',
      '症狀可早於貧血：mood change、掉髮、angular cheilosis、atrophic glossitis、**pica**（吃冰、土）、koilonychia',
      'Plummer-Vinson：IDA + esophageal web + atrophic glossitis',
      'Dx（最好在輸血前抽）：Fe 下降、TIBC 上升、TSAT 下降、**ferritin 下降（尤其 < 30）**、PLT 可上升',
      '**一定要考慮 GI bleeding 的檢查**，包含 H. pylori serology；可考慮 celiac（anti-TTG IgA）',
      '口服鐵：約 **6 週**矯正貧血、約 **6 個月**補足存量',
      '**IV iron**：嚴重貧血、持續流失、EPO 治療前、住院中',
      'IRIDA：hepcidin 失調的罕見遺傳病，口服鐵無效'
    ],
    note: 'Ferumoxytol 會讓 MRI 訊號變亮，影響判讀。',
    refs: ['Lancet 2021;397:233（iron deficiency）', 'Blood 2017;129:940（pregnancy）', 'Nat Genet 2008;40:569（IRIDA）']
  },
  {
    id: 'ho-thal',
    title: 'Thalassemia',
    points: [
      'Globin chain 合成下降 -> 鏈失衡 -> RBC 氧化與膜損傷 -> **hemolysis + ineffective erythropoiesis**',
      '**alpha-thal**（4 個 alpha gene；東南亞、地中海、非洲、中東）：3 個 = silent carrier；2 個 = alpha-thal minor（輕度貧血）；1 個 = **HbH (beta4)**（嚴重貧血、hemolysis、splenomegaly）；0 個 = **Hb Barts (gamma4)** -> **hydrops fetalis**',
      '**beta-thal**（2 個 beta gene）：1 個突變 = minor/trait（輕度貧血、不需輸血）；2 個突變 = TDT 或 NTDT',
      '重症：hemolytic jaundice、iron overload 多器官傷害、cardiomyopathy、PHT、骨質下降、extramedullary hematopoiesis（HSM）、膽結石',
      'Dx：先排除缺鐵；RBC 數可正常或偏高；**Mentzer < 13**；**Hb electrophoresis：alpha-thal minor 正常、beta-thal minor HbA2 上升**；genetic testing',
      'Rx：需要時輸血、folate、**iron chelation**；luspatercept；severe 可 splenectomy 或 HSCT；gene therapy：**exa-cel**、**beti-cel**'
    ],
    note: '已知 thal trait 不要經驗性給鐵：沒有缺鐵時只會增加 iron overload。',
    refs: ['Lancet 2022;399:2310（thalassemias）', 'NEJM 2014;371:1908（alpha-thalassemia）', 'NEJM 2020;382:1219（luspatercept）', 'NEJM 2024;390:1663（exa-cel）', 'Lancet 2024;404:2175（beti-cel）']
  },
  {
    id: 'ho-aci',
    title: 'Anemia of chronic inflammation 與其他 normocytic',
    points: [
      '**Hepcidin** 讓鐵無法利用（functional iron deficiency）；IL-6、TNF-alpha 降低 EPO 反應與分泌',
      '病因：autoimmune disease、慢性感染、HIV、惡性腫瘤',
      'Dx：Fe 下降、**TIBC 下降**、ferritin 正常或上升；約 70% normocytic，久了可 microcytic',
      '**常合併缺鐵**：ferritin 偏低、BM 無鐵染色、口服鐵有反應、soluble transferrin receptor/ferritin index 上升',
      'Rx：治療原病；**ferritin < 100 或 Fe/TIBC < 20% 補鐵**；**Epo < 500 可考慮 ESA**',
      '**癌症以治癒為目標時避免 ESA**',
      'Anemia of CKD：Epo 下降，給 Epo + iron；內分泌疾病（thyroid、pituitary、adrenal、parathyroid）也會貧血',
      '**Pure red cell aplasia**：retic 極低、BM 缺 erythroid precursor、其他系正常；病因含 thymoma、**parvovirus B19**、LGL、CLL、anti-ESA Ab；thymoma 切除、免疫抑制；parvovirus 合併免疫抑制給 IVIg'
    ],
    refs: ['NEJM 2012;366:4（ACI）', 'Am J Clin Pathol 2012;138:642（sTfR/ferritin index）', 'Lancet 2009;373:1532（ESA in cancer）', 'Clin Infect Dis 2013;56:968（parvovirus）', 'NEJM 2009;361:1848（anti-EPO Ab）']
  },
  {
    id: 'ho-megaloblastic',
    title: 'Megaloblastic anemia：B12 與 folate',
    table: {
      head: ['', 'Folate deficiency', 'B12 deficiency'],
      rows: [
        ['存量', '2-3 個月', '**2-3 年**'],
        ['來源', '綠葉蔬菜、水果', '只有**動物性食物**'],
        ['病因', '營養不良（酒精）、sprue、MTX、pyrimethamine、TMP、需求上升（hemolysis、懷孕、透析）', '**Pernicious anemia**、純素、胃切除、sprue、Crohn’s、**metformin**、細菌過度生長、魚絛蟲'],
        ['Homocysteine', '上升', '上升'],
        ['**MMA**', '**正常**', '**上升**'],
        ['神經學', '無', '**Subacute combined degeneration**'],
        ['治療', 'Folate 1-5 mg PO qd x 1-4 個月（**先排除 B12 缺乏**）', '**B12 1 mg IM qd x 7 d -> qwk x 4-8 wk -> qmo 終身**']
      ]
    },
    points: [
      'Smear：**hypersegmented neutrophils**、macro-ovalocytes；ineffective erythropoiesis 使 LDH、indirect bilirubin 上升',
      'B12 低正常也可能缺乏 -> 驗 MMA、homocysteine',
      'PA：anti-IF Ab、gastrin 上升；合併其他自體免疫內分泌病；**胃癌風險上升**',
      '神經症狀在 **6 個月內**治療才可逆',
      '**只給 folate 可改善血液學但不改善神經，還會加重神經症狀**',
      'Nonmegaloblastic macrocytosis：肝病、酒精、reticulocytosis、hypothyroid、MDS、藥物（hydroxyurea、zidovudine、5-FU、Ara-C）'
    ],
    refs: ['NEJM 2013;368:149（B12 deficiency）', 'NEJM 2015;373:1649（folate antagonists）']
  }
]);

RPG.registerCase({
  id: 'ho1-ida',
  chapter: 'HO1',
  title: '爬不上三樓的會計師',
  patient: '62 歲男性 · 會計師',
  summary: '兩個月來越來越喘，爬樓梯要停下來休息。',
  cards: ['ho-anemia-approach', 'ho-microcytic', 'ho-ida'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般內科門診。林先生說：「以前爬三樓都不用停，這兩個月爬到二樓就要喘一下。人也很累，報稅季都撐不住。」',
        '健檢報告：**Hb 8.4 g/dL**，MCV 71 fL。一年前 Hb 14.2。'
      ],
      clue: ['62M；漸進性 exertional dyspnea、fatigue 2 個月', '**Hb 8.4**（一年前 14.2）；**MCV 71**'],
      choices: [{ label: '詳細問診', next: 'hx_hub' }]
    },
    hx_hub: {
      text: '你想把可能的原因問清楚。',
      choices: [
        { label: '問出血症狀（黑便、血便、血尿、流鼻血）', next: 'hx_bleed', once: true },
        { label: '問用藥', next: 'hx_med', once: true },
        { label: '問飲食與特殊嗜好', next: 'hx_diet', once: true },
        { label: '問家族史', next: 'hx_fhx', once: true },
        { label: '問有沒有胸痛', next: 'hx_cp', once: true },
        { label: '開始理學檢查', next: 'exam', pin: true }
      ]
    },
    hx_bleed: {
      text: '「沒有看到黑便或血便。不過大便最近比較不成形，有時候會便秘。」體重半年少了 4 公斤。',
      clue: ['無肉眼可見出血', '排便習慣改變；**半年體重減輕 4 kg**'],
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_med: {
      text: '「膝蓋退化，骨科開的止痛藥（naproxen）一天吃兩次，吃了快一年。」沒有吃抗凝劑或 aspirin。',
      clue: '長期 **NSAID**（naproxen）',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_diet: {
      text: '飲食正常，有吃肉。他不好意思地說：「最近很愛咬冰塊，一天要咬一大杯。」',
      clue: '**Pica**：嗜咬冰塊（pagophagia）',
      feedback: 'Pica，尤其吃冰，對缺鐵很有特異性。',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_fhx: {
      text: '父親 70 歲時因大腸癌過世。沒有家人有貧血或地中海型貧血。',
      clue: '**父親大腸癌**',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_cp: {
      text: '「沒有胸痛，就是喘。」',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    exam: {
      text: '林先生躺上檢查床。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'vitals', group: '一般', label: '生命徵象（含姿勢性血壓）', key: true, reveal: true,
            result: 'BP 124/72，HR 96；站起來 BP 118/70、HR 104', clue: '輕度 tachycardia，無明顯 orthostatic hypotension',
            miss: '貧血病人一定要先看血行動力學是否穩定，這決定要不要急著輸血。' },
          { id: 'conj', group: '頭頸', label: '結膜、口腔、舌頭', key: true, reveal: true,
            result: '結膜蒼白；**angular cheilosis**；舌乳頭萎縮（atrophic glossitis）', clue: 'Pallor、**angular cheilosis、atrophic glossitis**',
            miss: 'Pallor、angular cheilosis、glossitis 都是貧血與缺鐵的線索。' },
          { id: 'nail', group: '四肢', label: '指甲', key: true, reveal: true,
            result: '指甲變薄、中央凹陷（**koilonychia**）', clue: '**Koilonychia**',
            miss: 'Koilonychia 是缺鐵的經典表現。' },
          { id: 'abd', group: '胸腹', label: '腹部觸診（含肝脾）', key: true, reveal: true,
            result: '右下腹隱約有壓痛，無明顯腫塊；無肝脾腫大', clue: '右下腹輕壓痛；**無 splenomegaly**',
            miss: '要看有沒有 splenomegaly（hemolysis、thalassemia、腫瘤）和腹部腫塊。' },
          { id: 'dre', group: '胸腹', label: '肛門指診', key: true, reveal: true,
            result: '無腫塊；手套上為褐色便，**FOBT 陽性**', clue: '**FOBT (+)**',
            miss: '老年男性缺鐵要先想到 GI 出血，肛門指診很便宜。' },
          { id: 'heart', group: '胸腹', label: '心臟聽診', result: 'Grade 2/6 systolic flow murmur', clue: 'Flow murmur' },
          { id: 'ln', group: '頭頸', label: '淋巴結', result: '無腫大' },
          { id: 'skin', group: '四肢', label: '皮膚（黃疸、瘀斑）', result: '無黃疸、無 petechiae' },
          { id: 'neuro', group: '神經', label: '震動覺、位置覺、Romberg', result: '正常',
            waste: 'MCV 71 是小球性，不是 B12 缺乏的方向。' },
          { id: 'thyroid', group: '頭頸', label: '甲狀腺觸診', result: '正常' }
        ]
      }
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'ri',
        options: [
          { id: 'cbc', group: '血液', label: 'CBC/DC、RBC indices', key: true, reveal: true,
            result: 'Hb 8.4；Hct 26%；MCV 71；**RBC 4.1 M/uL**；**RDW 19%**；WBC 6,800；PLT **465k**', clue: ['Hct 26%；RBC 4.1 M；**RDW 19%**', 'PLT 465k（reactive）'],
            miss: 'CBC 與 RBC indices 是分類貧血的基本。' },
          { id: 'retic', group: '血液', label: 'Reticulocyte count', key: true, reveal: true,
            result: 'Reticulocyte **1.5%**', clue: 'Retic 1.5%',
            miss: '要算 reticulocyte index 才知道骨髓反應夠不夠。' },
          { id: 'smear', group: '血液', label: 'Peripheral blood smear', key: true, reveal: true,
            result: 'Microcytic hypochromic RBC，anisocytosis、pencil cells；無 schistocytes、無 target cells', clue: 'Smear：microcytic hypochromic、pencil cells',
            miss: 'Smear 可以看 RBC 大小、形狀和 inclusions。' },
          { id: 'iron', group: '鐵', label: 'Serum iron、TIBC、ferritin', key: true, reveal: true,
            result: 'Fe 18 ug/dL；**TIBC 452**；**TSAT 4%**；**ferritin 6 ng/mL**', clue: '**Ferritin 6**；TIBC 上升；**TSAT 4%**',
            miss: 'Microcytic anemia 的第一步就是 iron studies，而且最好在輸血前抽。' },
          { id: 'hp', group: '其他', label: 'H. pylori serology', result: '陰性', clue: 'H. pylori Ab (-)' },
          { id: 'ttg', group: '其他', label: 'Anti-TTG IgA', result: '陰性' },
          { id: 'renal', group: '其他', label: 'BUN、Cr、LFT', result: '正常' },
          { id: 'b12', group: '其他', label: 'Vitamin B12、folate', result: '正常',
            waste: 'MCV 71，B12/folate 不是現在的重點。' },
          { id: 'hbep', group: '其他', label: 'Hb electrophoresis', result: '待報告',
            waste: '鐵的檢查還沒回來前驗 Hb electrophoresis 太早；缺鐵本身也會讓 HbA2 偏低，干擾 beta-thal 判讀。' },
          { id: 'hemo', group: '其他', label: 'LDH、haptoglobin、indirect bilirubin', result: '正常',
            waste: '沒有黃疸、沒有 splenomegaly，hemolysis 的機率低；先算 RI 再決定。' },
          { id: 'cea', group: '其他', label: 'CEA', result: '6.8 ng/mL',
            waste: 'CEA 不是篩檢或診斷工具，術前 baseline 等確診再驗。' },
          { id: 'bm', group: '其他', label: 'Bone marrow biopsy', result: '（未執行）',
            waste: '單純小球性貧血，iron studies 就能診斷，不需要骨髓。' }
        ]
      }
    },
    ri: {
      text: 'Retic 1.5%、Hct 26%。主治醫師問：「Reticulocyte index 多少？骨髓反應夠嗎？」',
      choices: [
        { label: '1.5 x 26/45 / 2 ≈ **0.4%**，hypoproliferative', next: 'iron' },
        { label: 'Retic 1.5%，在正常範圍，骨髓反應正常', next: 'ri_raw' },
        { label: '1.5 x 26/45 ≈ **0.9%**，hypoproliferative', next: 'ri_noMF' }
      ]
    },
    ri_raw: {
      text: '主治醫師搖頭。',
      feedback: 'Retic 百分比要先用 Hct 校正，再除以 maturation factor（Hct 25% 時為 2）。貧血時原始百分比會高估骨髓反應。',
      choices: [{ label: '重新計算', next: 'ri' }]
    },
    ri_noMF: {
      text: '主治醫師點頭一半。',
      feedback: '方向對，但忘了 maturation factor。Hct 低時 retic 在周邊血停留較久，要除以 maturation factor（Hct 25% 約為 2）。',
      choices: [{ label: '重新計算', next: 'ri' }]
    },
    iron: {
      text: [
        'RI 約 0.4%，是 hypoproliferative。',
        'Ferritin 6、TIBC 上升、TSAT 4%；Mentzer index = 71 / 4.1 ≈ 17。'
      ],
      clue: '**Iron deficiency anemia**（ferritin 6、Mentzer 17）',
      choices: [{ label: '決定下一步', next: 'next' }]
    },
    next: {
      text: '缺鐵確定了。下一步是什麼？',
      choices: [
        { label: '安排 **colonoscopy + EGD** 找出血來源', next: 'scope' },
        { label: '先吃口服鐵，三個月後追蹤 Hb，有改善就不用再查', next: 'next_iron' },
        { label: '先輸兩袋 PRBC，把 Hb 拉到 10 再說', next: 'next_tx' },
        { label: '停掉 naproxen 就好，NSAID 是原因', next: 'next_nsaid' }
      ]
    },
    next_iron: {
      text: '主治醫師把處方停下來。',
      feedback: '男性或停經女性的缺鐵，在證明不是之前都要當作 GI blood loss。他有 FOBT 陽性、體重減輕、排便改變、父親大腸癌。補鐵讓 Hb 回升只會延誤診斷。',
      choices: [{ label: '重新決定', next: 'next' }]
    },
    next_tx: {
      text: '主治醫師搖頭。',
      feedback: '他休息時沒有胸痛、生命徵象穩定，慢性貧血已經代償，不需要急著輸血。缺鐵的根本處理是找原因加補鐵。',
      choices: [{ label: '重新決定', next: 'next' }]
    },
    next_nsaid: {
      text: '主治醫師挑眉。',
      feedback: 'NSAID 確實可能造成 GI 出血，停藥是對的。但他有體重減輕、排便改變、家族史，不能只歸因於 NSAID，還是要做內視鏡。',
      choices: [{ label: '重新決定', next: 'next' }]
    },
    scope: {
      text: [
        'EGD：輕度 gastritis，無潰瘍。',
        'Colonoscopy：**ascending colon** 一個 4 cm 潰瘍性腫塊，表面滲血。切片：**adenocarcinoma**。',
        '外科安排三週後手術。林先生問：「手術前要怎麼補血？」'
      ],
      clue: '**Ascending colon adenocarcinoma**（慢性滲血）',
      feedback: '右側大腸癌常以缺鐵性貧血表現，而不是肉眼血便。',
      choices: [
        { label: '**IV iron**，術前快速補足', next: 'end_good' },
        { label: '口服鐵一天一顆，到手術那天', next: 'pre_oral', why: '口服鐵約 6 週才矯正貧血、約 6 個月才補足存量；術前只有 3 週，而且腫瘤還在持續滲血。' },
        { label: '給 ESA（erythropoietin）加鐵', next: 'pre_esa' },
        { label: '術前輸 PRBC 到 Hb 12', next: 'pre_tx' }
      ]
    },
    pre_oral: {
      text: '三週後手術當天，Hb 8.9。術中出血 600 mL，術後 Hb 6.8，輸了三袋血。',
      ending: {
        grade: 'ok',
        title: '大腸癌，但術前貧血沒有矯正',
        pearls: [
          '口服鐵約 6 週矯正貧血、6 個月補足存量',
          '嚴重貧血、持續流失、時間緊迫 -> IV iron',
          '男性與停經女性的缺鐵 = GI blood loss，直到證明不是'
        ]
      }
    },
    pre_esa: {
      text: '主治醫師把 ESA 劃掉。',
      feedback: '癌症病人治療目標是治癒時要避免 ESA，與血栓與腫瘤進展有關。而且他是缺鐵，補鐵才是對因治療。',
      choices: [{ label: '重新決定', next: 'scope' }]
    },
    pre_tx: {
      text: '主治醫師搖頭。',
      feedback: '他穩定、沒有症狀性缺血，沒有理由把 Hb 輸到 12。輸血有 alloimmunization、TACO、感染風險，IV iron 就能在術前補上來。',
      choices: [{ label: '重新決定', next: 'scope' }]
    },
    end_good: {
      text: '給了 IV iron 後，兩週內 Hb 回到 10.6。林先生順利完成右側結腸切除，術後不需要輸血，也停掉了 naproxen。',
      ending: {
        grade: 'good',
        title: 'Iron deficiency anemia -> 右側大腸癌',
        pearls: [
          '先算 reticulocyte index：retic x (Hct/45) / maturation factor',
          'Ferritin < 30 幾乎可確定缺鐵；Mentzer > 13 傾向缺鐵',
          '男性與停經女性的缺鐵，要做 colonoscopy + EGD',
          '嚴重貧血、持續流失、時間緊迫 -> IV iron；癌症治癒目標下避免 ESA'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho1-thal',
  chapter: 'HO1',
  title: '吃了三個月鐵劑還是貧血',
  patient: '28 歲女性 · 懷孕 11 週',
  summary: '產檢發現小球性貧血，診所開了鐵劑，血紅素卻一點都沒動。',
  cards: ['ho-microcytic', 'ho-thal'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '產科轉介到血液科門診。陳小姐第一胎，懷孕 11 週。',
        '「懷孕前健檢就說我貧血，診所開了鐵劑，我乖乖吃了三個月。結果這次產檢還是一樣。」',
        '她拿出報告：三個月前與今天的 Hb 都是 **10.6**，MCV **64**。'
      ],
      clue: ['28F，G1，懷孕 11 週', '**Hb 10.6、MCV 64**；口服鐵 3 個月**無反應**'],
      choices: [{ label: '問診', next: 'hx_hub' }]
    },
    hx_hub: {
      text: '你想知道更多。',
      choices: [
        { label: '問月經量與出血', next: 'hx_bleed', once: true },
        { label: '問家族史與祖籍', next: 'hx_fhx', once: true },
        { label: '問鐵劑怎麼吃', next: 'hx_comp', once: true },
        { label: '看檢驗報告', next: 'labs', pin: true }
      ]
    },
    hx_bleed: {
      text: '月經量正常，沒有其他出血。飲食正常。',
      clue: '無出血、飲食正常',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_fhx: {
      text: '「我媽也說她一直有『貧血』，但身體很好。外婆是廣東人。先生是台灣南部人，他好像也被說過血球比較小。」',
      clue: ['母親長期「貧血」但無症狀', '**先生**健檢也是**小球性**'],
      feedback: '台灣與華南是 alpha-thal（--SEA 缺失）和 beta-thal 的高盛行區。',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_comp: {
      text: '「每天一顆，飯後配水吃，沒有配茶或牛奶。只有一點便秘。」',
      clue: '鐵劑順從性良好',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    labs: {
      text: '你打開今天抽的血。',
      checklist: {
        prompt: '要看哪些檢驗？',
        submit: '確認',
        next: 'mentzer',
        options: [
          { id: 'cbc', group: '血液', label: 'CBC、RBC indices', key: true, reveal: true,
            result: 'Hb 10.6；MCV 64；**RBC 5.6 M/uL**；RDW 13.8%（正常）；PLT 260k', clue: '**RBC 5.6 M**（偏高）；**RDW 正常**',
            miss: 'RBC 數和 RDW 是區分 thal 與缺鐵的關鍵。' },
          { id: 'iron', group: '鐵', label: 'Iron、TIBC、ferritin', key: true, reveal: true,
            result: 'Fe 98；TIBC 310；TSAT 32%；**ferritin 85**', clue: '**Ferritin 85**、TSAT 32%（無缺鐵）',
            miss: '先確定有沒有缺鐵，才能解讀其他檢查。' },
          { id: 'smear', group: '血液', label: 'Peripheral smear', key: true, reveal: true,
            result: 'Microcytosis、**target cells**、basophilic stippling', clue: 'Target cells、basophilic stippling',
            miss: 'Smear 上的 target cells 與 basophilic stippling 支持 thalassemia。' },
          { id: 'retic', group: '血液', label: 'Reticulocyte', result: '2.0%' },
          { id: 'tsh', group: '其他', label: 'TSH', result: '正常' },
          { id: 'b12', group: '其他', label: 'B12、folate', result: '正常' },
          { id: 'lead', group: '其他', label: '血中鉛濃度', result: '正常',
            waste: '沒有職業或環境暴露，鉛中毒機率很低。' },
          { id: 'bm', group: '其他', label: 'Bone marrow aspiration', result: '（未執行）',
            waste: '懷孕中、診斷方向明確，不需要骨髓。' }
        ]
      }
    },
    mentzer: {
      text: 'Ferritin 85，沒有缺鐵。Mentzer index 是多少？代表什麼？',
      choices: [
        { label: '64 / 5.6 ≈ **11.4**，< 13，傾向 **thalassemia trait**', next: 'hbep' },
        { label: '64 / 5.6 ≈ 11.4，< 13，傾向**缺鐵**', next: 'm_wrong' },
        { label: 'Ferritin 在懷孕時會假性上升，她其實還是缺鐵', next: 'm_ferr' }
      ]
    },
    m_wrong: {
      text: '主治醫師糾正。',
      feedback: 'Mentzer < 13 傾向 thalassemia：thal 的 RBC 數多但每顆很小；缺鐵是 RBC 數少，Mentzer 通常 > 13。',
      choices: [{ label: '重新判讀', next: 'mentzer' }]
    },
    m_ferr: {
      text: '主治醫師搖頭。',
      feedback: 'Ferritin 是 acute phase reactant，發炎時會上升，但她沒有發炎，TSAT 32% 也正常。加上吃鐵三個月完全沒反應，不支持缺鐵。',
      choices: [{ label: '重新判讀', next: 'mentzer' }]
    },
    hbep: {
      text: '你開了 Hb electrophoresis。',
      choices: [{ label: '看報告', next: 'hbep_res' }]
    },
    hbep_res: {
      text: 'HbA2 **2.4%**（正常），HbF 正常，**沒有 HbH**。',
      clue: 'Hb electrophoresis：**HbA2 正常**、無 HbH',
      choices: [
        { label: '傾向 **alpha-thal trait**，安排 alpha-globin gene 檢測', next: 'gene' },
        { label: 'Electrophoresis 正常，排除 thalassemia', next: 'hb_rule' },
        { label: 'HbA2 正常，是 beta-thal minor', next: 'hb_beta' }
      ]
    },
    hb_rule: {
      text: '主治醫師搖頭。',
      feedback: 'Alpha-thal minor 的 Hb electrophoresis 是正常的，只有 HbH disease 才會看到 HbH。要確診需要基因檢測。',
      choices: [{ label: '重新判讀', next: 'hbep_res' }]
    },
    hb_beta: {
      text: '主治醫師搖頭。',
      feedback: 'Beta-thal minor 的特徵是 **HbA2 上升**（通常 > 3.5%）。HbA2 正常加上 Mentzer < 13，要想 alpha-thal。',
      choices: [{ label: '重新判讀', next: 'hbep_res' }]
    },
    gene: {
      text: [
        '基因報告：**--SEA/αα**（兩個 alpha gene 缺失在同一條染色體）。',
        '你請先生來抽血：MCV 66、ferritin 正常、HbA2 正常。基因檢測：**也是 --SEA/αα**。'
      ],
      clue: ['**她：--SEA/αα**（alpha-thal trait）', '**先生：--SEA/αα**'],
      choices: [{ label: '和夫妻討論', next: 'counsel' }]
    },
    counsel: {
      text: '陳小姐問：「所以寶寶會怎樣？我還要繼續吃鐵嗎？」',
      choices: [
        { label: '寶寶有 **1/4 機會遺傳到兩條 --SEA（0 個 alpha gene）-> Hb Barts hydrops fetalis**，轉介**產前診斷**；**停止鐵劑**、補充 folate', next: 'end_good' },
        { label: '你們都只是帶因，不會影響寶寶；鐵劑繼續吃比較保險', next: 'end_bad',
          why: '兩個 --SEA 帶因者，胎兒有 1/4 機會沒有任何 alpha gene，會發生 Hb Barts hydrops fetalis；而且沒有缺鐵時繼續補鐵只會累積鐵。' },
        { label: '寶寶最多是 HbH disease，出生後再處理；鐵劑繼續吃', next: 'c_hbh' }
      ]
    },
    c_hbh: {
      text: '主治醫師畫了一張圖。',
      feedback: '兩個 cis 缺失（--）的帶因者，胎兒可能拿到 --/--，也就是 0 個 alpha gene，是 Hb Barts hydrops fetalis，不是 HbH。HbH 是只剩 1 個 alpha gene（--/-α）。沒有缺鐵也不需要繼續吃鐵。',
      choices: [{ label: '重新說明', next: 'counsel' }]
    },
    end_bad: {
      text: '22 週超音波發現胎兒全身水腫、心臟擴大、胎盤增厚。夫妻這才知道是 Hb Barts hydrops fetalis。',
      ending: {
        grade: 'bad',
        title: '錯過產前診斷的 Hb Barts',
        pearls: [
          '夫妻都是 --SEA 帶因：胎兒 1/4 為 --/--（Hb Barts hydrops fetalis）',
          '小球性貧血先驗 ferritin；鐵劑無效要想 thalassemia',
          '沒有缺鐵的 thal trait 不要經驗性給鐵'
        ]
      }
    },
    end_good: {
      text: '夫妻接受遺傳諮詢，安排 CVS。結果胎兒為 --SEA/αα，和媽媽一樣只是帶因。陳小姐停掉鐵劑，改吃 folate，順利足月生產。',
      ending: {
        grade: 'good',
        title: 'Alpha-thalassemia trait 合併伴侶篩檢',
        pearls: [
          '鐵劑無效的小球性貧血：先確認 ferritin，再想 thalassemia',
          'Mentzer（MCV/RBC）< 13 傾向 thal；RDW 通常正常',
          'Electrophoresis：alpha-thal minor 正常；beta-thal minor HbA2 上升',
          '懷孕帶因者要篩伴侶；雙方 --SEA -> 1/4 Hb Barts hydrops fetalis'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho1-b12',
  chapter: 'HO1',
  title: '走路像踩在棉花上',
  patient: '68 歲女性 · 退休國小老師',
  summary: '腳麻、走路不穩、晚上常跌倒，最近連記性都變差。',
  cards: ['ho-anemia-approach', 'ho-megaloblastic'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '神經科轉來的會診。黃老師三個月來雙腳麻，像踩在棉花上，晚上關燈後走路特別不穩，跌倒兩次。女兒說她最近常忘東忘西。',
        '神經科順便驗了 CBC：**Hb 9.1**、**MCV 112**。'
      ],
      clue: ['68F；雙腳麻、步態不穩（**黑暗中更差**）、記憶變差', '**Hb 9.1、MCV 112**'],
      choices: [{ label: '問診', next: 'hx_hub' }]
    },
    hx_hub: {
      text: '你翻開她的病歷。',
      choices: [
        { label: '問過去病史與用藥', next: 'hx_pmh', once: true },
        { label: '問飲食與喝酒', next: 'hx_diet', once: true },
        { label: '問腸胃手術史', next: 'hx_gi', once: true },
        { label: '理學檢查', next: 'exam', pin: true }
      ]
    },
    hx_pmh: {
      text: 'Hashimoto thyroiditis 吃 levothyroxine 十年，**白斑症（vitiligo）**。沒有糖尿病，沒有吃 metformin 或 PPI。',
      clue: '**Hashimoto、vitiligo**（其他自體免疫病）',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_diet: {
      text: '葷素都吃，不喝酒。',
      clue: '非素食、不喝酒',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_gi: {
      text: '沒有做過胃或腸道手術，沒有慢性腹瀉。',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    exam: {
      text: '黃老師坐在檢查床邊。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'tongue', group: '頭頸', label: '舌頭、結膜', key: true, reveal: true,
            result: '舌頭光滑、紅（**glossitis**）；結膜蒼白、鞏膜**輕度黃染**', clue: '**Glossitis**；輕度黃疸',
            miss: 'Glossitis 與輕度黃疸（ineffective erythropoiesis）都是 megaloblastic anemia 的線索。' },
          { id: 'vib', group: '神經', label: '震動覺、位置覺', key: true, reveal: true,
            result: '雙腳**震動覺消失**、腳趾**位置覺下降**', clue: '**Vibration、proprioception 下降**（posterior column）',
            miss: 'B12 缺乏影響 posterior column，震動覺與位置覺一定要檢查。' },
          { id: 'romberg', group: '神經', label: 'Romberg test', key: true, reveal: true,
            result: '**Romberg 陽性**', clue: '**Romberg (+)**（sensory ataxia）',
            miss: '黑暗中走不穩 = sensory ataxia，Romberg 會陽性。' },
          { id: 'reflex', group: '神經', label: '深部肌腱反射、Babinski', key: true, reveal: true,
            result: '膝反射增強、**ankle jerk 消失**、**Babinski 陽性**', clue: 'Babinski (+)、ankle jerk 消失（lateral column + 周邊神經）',
            miss: 'Lateral column 受損會有 UMN sign；合併周邊神經病變，所以 ankle jerk 可能消失。' },
          { id: 'mmse', group: '神經', label: '認知功能', result: 'MMSE 24/30', clue: '輕度認知下降' },
          { id: 'abd', group: '胸腹', label: '腹部', result: '無肝脾腫大' },
          { id: 'skin', group: '一般', label: '皮膚', result: '手背 vitiligo' },
          { id: 'thy', group: '頭頸', label: '甲狀腺', result: '無腫大' },
          { id: 'ln', group: '頭頸', label: '淋巴結', result: '無腫大' }
        ]
      }
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'interp',
        options: [
          { id: 'smear', group: '血液', label: 'Peripheral smear', key: true, reveal: true,
            result: '**Hypersegmented neutrophils**、macro-ovalocytes、anisocytosis', clue: '**Hypersegmented neutrophils**、macro-ovalocytes',
            miss: 'Macrocytosis 一定要看 smear，hypersegmented neutrophils 是 megaloblastic 的特徵。' },
          { id: 'retic', group: '血液', label: 'Reticulocyte', key: true, reveal: true,
            result: '0.8%（RI 低）', clue: 'RI 低（hypoproliferative）',
            miss: 'Retic 可以區分 hemolysis 造成的大球性與 megaloblastic。' },
          { id: 'b12', group: '維生素', label: 'Vitamin B12', key: true, reveal: true,
            result: '**230 pg/mL**（參考值 200-900，低正常）', clue: 'B12 230（**低正常**）',
            miss: '神經症狀加大球性貧血，B12 一定要驗。' },
          { id: 'fol', group: '維生素', label: 'Serum folate', key: true, reveal: true,
            result: '正常', clue: 'Folate 正常',
            miss: 'Folate 與 B12 要一起評估。' },
          { id: 'mma', group: '維生素', label: 'Methylmalonic acid、homocysteine', key: true, reveal: true,
            result: '**MMA 上升**、**homocysteine 上升**', clue: '**MMA、homocysteine 都上升**',
            miss: 'B12 低正常時要驗 MMA 與 homocysteine 才能確定。' },
          { id: 'hemo', group: '血液', label: 'LDH、bilirubin', result: '**LDH 1,450**、indirect bilirubin 2.1', clue: 'LDH 明顯上升、indirect bilirubin 上升（ineffective erythropoiesis）' },
          { id: 'tsh', group: '其他', label: 'TSH', result: '正常' },
          { id: 'mri', group: '影像', label: 'Spine MRI', result: 'T2 posterior column 高訊號（cervical-thoracic）', clue: 'MRI：dorsal column T2 hyperintensity' },
          { id: 'bm', group: '其他', label: 'Bone marrow biopsy', result: 'Megaloblastic changes',
            waste: '臨床、smear 與 MMA 就足以診斷，不需要骨髓。' },
          { id: 'spep', group: '其他', label: 'SPEP', result: '無 M protein' }
        ]
      }
    },
    interp: {
      text: 'B12 低正常，MMA 與 homocysteine 都上升，folate 正常。',
      choices: [
        { label: '**B12 deficiency**：B12 低正常也可能缺乏，MMA 上升是關鍵', next: 'cause' },
        { label: 'B12 在正常範圍，應該是 folate 代謝問題', next: 'i_fol' },
        { label: 'LDH 這麼高，是 hemolytic anemia', next: 'i_hemo' }
      ]
    },
    i_fol: {
      text: '主治醫師搖頭。',
      feedback: 'Folate 缺乏時 homocysteine 上升但 **MMA 正常**。MMA 上升是 B12 缺乏的特徵，B12 在低正常範圍不能排除。',
      choices: [{ label: '重新判讀', next: 'interp' }]
    },
    i_hemo: {
      text: '主治醫師搖頭。',
      feedback: 'Megaloblastic anemia 的 ineffective erythropoiesis（骨髓內溶血）會讓 LDH 和 indirect bilirubin 很高，但 retic 低。真正的 hemolysis 會有 RI > 2%。',
      choices: [{ label: '重新判讀', next: 'interp' }]
    },
    cause: {
      text: '要找 B12 缺乏的原因。她有 Hashimoto 與 vitiligo，不吃素，沒有手術。你驗了：',
      clue: ['**Anti-intrinsic factor Ab (+)**', '**Gastrin 上升**'],
      feedback: 'Pernicious anemia：抗胃壁細胞的自體免疫病，常合併其他自體免疫內分泌疾病。',
      choices: [{ label: '開始治療', next: 'tx' }]
    },
    tx: {
      text: '要怎麼治療？',
      choices: [
        { label: '**B12 1 mg IM qd x 7 天 -> 每週 x 4-8 週 -> 每月終身**', next: 'tx_ok' },
        { label: '先給 folic acid 5 mg qd，比較便宜', next: 'tx_fol' },
        { label: 'B12 1 mg IM 打一次，等症狀改善就停', next: 'tx_once' },
        { label: '輸 2 袋 PRBC 改善貧血', next: 'tx_prbc' }
      ]
    },
    tx_fol: {
      text: '主治醫師立刻制止。',
      feedback: 'B12 缺乏只給 folate，血液學會改善，但神經症狀不會好，甚至會「偷走」剩下的 B12 讓神經惡化。給 folate 前一定要先排除或治療 B12 缺乏。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_once: {
      text: '主治醫師搖頭。',
      feedback: 'Pernicious anemia 的 intrinsic factor 不會回來，吸收障礙是永久的，B12 要每月補充**終身**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_prbc: {
      text: '主治醫師搖頭。',
      feedback: '她生命徵象穩定、沒有心肺症狀。B12 補充後一週內 retic 就會上升。老年人輸血還要擔心 volume overload。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_ok: {
      text: [
        '一週後 reticulocyte 上升到 9%，兩個月後 Hb 12.8。腳麻逐漸改善。',
        '回診時她問：「還有什麼要注意的嗎？」'
      ],
      choices: [
        { label: '**安排 EGD**：pernicious anemia 胃癌風險上升；B12 每月補充終身', next: 'end_good' },
        { label: '血都好了，不用再追蹤', next: 'end_ok',
          why: 'Pernicious anemia 是 atrophic gastritis，胃癌（與 gastric carcinoid）風險上升，要做 EGD；而且 B12 需要終身補充。' }
      ]
    },
    end_ok: {
      text: '一年後她自行停打 B12，腳麻又出現。追蹤時才發現胃竇有一個 carcinoid tumor。',
      ending: {
        grade: 'ok',
        title: 'Pernicious anemia，後續追蹤不完整',
        pearls: [
          'PA 的 B12 要終身補充',
          'PA 胃癌風險上升，要做 EGD',
          '神經症狀 6 個月內治療才可逆'
        ]
      }
    },
    end_good: {
      text: 'EGD：atrophic gastritis，無腫瘤。黃老師每月回診打 B12，半年後已經可以自己晚上起床上廁所，不再跌倒。',
      ending: {
        grade: 'good',
        title: 'Pernicious anemia 合併 subacute combined degeneration',
        pearls: [
          'MCV > 100 + 神經症狀 -> B12；低正常也要驗 MMA、homocysteine',
          'MMA 上升 = B12 缺乏；folate 缺乏 MMA 正常',
          'B12 1 mg IM qd x 7d -> qwk x 4-8 wk -> qmo 終身',
          '不可只給 folate；PA 要做 EGD'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho1-aci',
  chapter: 'HO1',
  title: '類風濕病人的貧血',
  patient: '57 歲女性 · RA 10 年',
  summary: '關節控制得不太好，血紅素慢慢往下掉。',
  cards: ['ho-microcytic', 'ho-aci'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '風濕科轉來會診。張女士 RA 十年，目前用 MTX 與 prednisolone 5 mg，最近關節又腫起來，CRP 上升。長期吃 celecoxib。',
        '半年內 Hb 從 11.2 掉到 **9.4**，MCV **80**。'
      ],
      clue: ['57F；RA 活動中（CRP 上升）', '**Hb 9.4、MCV 80**'],
      choices: [{ label: '看檢驗', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'interp',
        options: [
          { id: 'iron', group: '鐵', label: 'Fe、TIBC、ferritin', key: true, reveal: true,
            result: 'Fe 32；**TIBC 240（偏低）**；**TSAT 13%**；**ferritin 72**', clue: 'Fe 低、**TIBC 低**、**TSAT 13%**、**ferritin 72**',
            miss: 'Normocytic 偏小的貧血，iron studies 一定要做。' },
          { id: 'retic', group: '血液', label: 'Reticulocyte', key: true, reveal: true,
            result: 'RI 0.6%', clue: 'RI 低（hypoproliferative）',
            miss: '要先知道是 hypoproliferative 還是 hemolysis/失血。' },
          { id: 'cr', group: '其他', label: 'Cr、eGFR', key: true, reveal: true,
            result: 'Cr 0.8，eGFR > 60', clue: '腎功能正常',
            miss: 'CKD 也會造成 normocytic anemia，要排除。' },
          { id: 'tsh', group: '其他', label: 'TSH', result: '正常' },
          { id: 'b12', group: '其他', label: 'B12、folate', key: true, reveal: true,
            result: 'B12 正常；**folate 偏低**', clue: 'Folate 偏低（MTX）',
            miss: '她在吃 MTX，folate 要評估；mixed deficiency 可以讓 MCV 看起來正常。' },
          { id: 'epo', group: '其他', label: 'Serum EPO', result: '68 mU/mL', clue: 'EPO 68（< 500）' },
          { id: 'smear', group: '血液', label: 'Peripheral smear', result: 'Dimorphic：小球與大球混合', clue: 'Smear **dimorphic**（mixed）' },
          { id: 'hemo', group: '血液', label: 'LDH、haptoglobin、DAT', result: '正常',
            waste: 'RI 低、沒有黃疸，hemolysis 機率低。' },
          { id: 'bm', group: '其他', label: 'Bone marrow biopsy', result: '（未執行）',
            waste: '目前資訊可以解釋貧血，不需要骨髓。' }
        ]
      }
    },
    interp: {
      text: 'TIBC 低、ferritin 72、TSAT 13%。主治醫師問：「這是什麼貧血？要補鐵嗎？」',
      choices: [
        { label: '**ACI 合併缺鐵**：ferritin < 100 且 TSAT < 20%，要補鐵；同時處理 folate 與 RA 活動度', next: 'gi' },
        { label: '單純 ACI：ferritin 正常，不需要補鐵，控制 RA 就好', next: 'i_pure' },
        { label: '單純缺鐵：TSAT 低就是缺鐵', next: 'i_iron' }
      ]
    },
    i_pure: {
      text: '主治醫師搖頭。',
      feedback: 'Ferritin 是 acute phase reactant，RA 活動時會被拉高。ACI 合併缺鐵很常見；ferritin < 100 或 Fe/TIBC < 20% 就應補鐵。',
      choices: [{ label: '重新判讀', next: 'interp' }]
    },
    i_iron: {
      text: '主治醫師搖頭。',
      feedback: '單純缺鐵 TIBC 會上升，她的 TIBC 是低的，代表有發炎成分。這是 ACI 合併缺鐵，兩邊都要處理。',
      choices: [{ label: '重新判讀', next: 'interp' }]
    },
    gi: {
      text: '她長期吃 celecoxib、類固醇。缺鐵還要做什麼？',
      choices: [
        { label: '安排 **EGD + colonoscopy**，驗 H. pylori', next: 'tx' },
        { label: 'RA 病人本來就會缺鐵，不用查', next: 'gi_skip' }
      ]
    },
    gi_skip: {
      text: '主治醫師搖頭。',
      feedback: '57 歲停經女性有缺鐵，又長期吃 NSAID 加類固醇，一樣要找 GI 出血。',
      choices: [{ label: '重新決定', next: 'gi' }]
    },
    tx: {
      text: 'EGD：胃竇有一個小的癒合中潰瘍，H. pylori 陰性。Colonoscopy 正常。接下來的治療？',
      clue: 'NSAID 相關胃潰瘍（癒合中）',
      choices: [
        { label: '停 celecoxib、加 PPI；**補鐵**、補 folate；和風濕科調整 RA 治療', next: 'tx_ok' },
        { label: '直接開 ESA，Epo < 500 就可以用', next: 'tx_esa' },
        { label: '輸 PRBC 把 Hb 拉到 12', next: 'tx_prbc' }
      ]
    },
    tx_esa: {
      text: '主治醫師搖頭。',
      feedback: 'Epo < 500 確實可考慮 ESA，但要先把鐵補足，否則 ESA 沒有鐵可用。先處理可逆因素（缺鐵、folate、RA 活動度）。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_prbc: {
      text: '主治醫師搖頭。',
      feedback: 'ACI 只有在有症狀且來不及等原病治療或 EPO 反應時才輸血。她穩定，沒有理由輸到 12。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_ok: {
      text: '補鐵與 folate 三個月，RA 改用 tocilizumab 後 CRP 恢復正常。Hb 回到 11.8。',
      ending: {
        grade: 'good',
        title: 'ACI 合併缺鐵與 folate 不足',
        pearls: [
          'ACI：Fe 低、**TIBC 低**、ferritin 正常或上升',
          'Ferritin 在發炎時被拉高：ferritin < 100 或 TSAT < 20% 仍應補鐵',
          'ESA 前先補足鐵；癌症以治癒為目標時避免 ESA',
          'Dimorphic smear、MCV 正常可能是 mixed deficiency'
        ]
      }
    }
  }
});
