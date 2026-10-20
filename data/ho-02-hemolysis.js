// HO 02 Pancytopenia, sickle cell disease, hemolytic anemia. Source: Pocket Medicine Ch 5, p4-8 of 書頁.txt

RPG.registerCards('HO2', [
  {
    id: 'ho-aa',
    title: 'Pancytopenia 與 aplastic anemia',
    points: [
      'Pancytopenia 三大類：**骨髓浸潤**（癌症、TB、fungus、storage disorder）、**骨髓衰竭**（AA、PNH、LGL leukemia、HLH、營養、酒精、病毒）、**破壞或分布**（DIC、splenomegaly）',
      'AA 發生率 2-5/百萬/年；雙峰：青少年與老年',
      'Dx：pancytopenia + **retic 低** + **BM hypocellular** + cytogenetics 通常正常',
      '病因：idiopathic（多數）；放射線、化療、benzene；藥物（chloramphenicol、NSAIDs、sulfa、carbamazepine、antithyroid）；病毒（HHV-6、HIV、EBV、parvovirus B19）；**病毒性肝炎後（非 A/B/C）**；SLE、GVHD、thymoma；PNH',
      '遺傳：Fanconi anemia（先天異常、MDS/AML/頭頸 SCC 風險）；telomerase 突變（TERT、TERC）、dyskeratosis congenita（合併 IPF、肝硬化）',
      'AA 病人約一半有 **PNH clone**',
      'Rx：支持性輸血與感染預防；**severe/very severe：年輕者 HSCT，否則 triple IST（ATG + cyclosporine + eltrombopag）**',
      'Moderate：可考慮 HSCT、triple IST、較低強度 IST 或 eltrombopag 單用'
    ],
    refs: ['NEJM 2015;373:35（aplastic anemia）', 'NEJM 2022;386:11（triple IST）', 'NEJM 2009;361:2353（telomeres）', 'Haematologica 2010;95:1075（PNH clones）']
  },
  {
    id: 'ho-pnh',
    title: 'Paroxysmal nocturnal hemoglobinuria',
    points: [
      'Acquired clonal stem cell 疾病：**PIG-A** 體細胞突變 -> 缺 **GPI anchor** -> 缺 **CD55、CD59**（補體抑制蛋白）',
      '-> complement-mediated **intravascular hemolysis**、血小板活化、**高凝**',
      '血栓：venous > arterial，好發 **腹腔內（Budd-Chiari、mesenteric）、腦部**',
      '其他：smooth muscle dystonia（吞嚥困難、腹痛、勃起障礙）、cytopenias；與 AA、MDS、AML 相關',
      'Dx：**flow cytometry（RBC 與 granulocyte 缺 CD55、CD59）**；urine hemosiderin',
      'Rx：支持（鐵、folate、輸血）；考慮抗凝；**C5 inhibitor（ravulizumab > eculizumab）**；alternative pathway inhibitor：iptacopan、danicopan、pegcetacoplan',
      '用補體抑制劑前要**接種 encapsulated organisms 疫苗**（meningococcus）；追蹤 LDH 看 breakthrough hemolysis',
      '嚴重骨髓衰竭：allogeneic HSCT'
    ],
    refs: ['Blood 2021;137:1304（PNH）', 'NEJM 2024;390:994（iptacopan）', 'Lancet Haematol 2023;10:e955（danicopan）']
  },
  {
    id: 'ho-scd',
    title: 'Sickle cell disease',
    points: [
      'beta-globin 隱性突變 -> HbS 在**低氧**下聚合 -> 膜傷害、脫水、變形能力下降 -> **hemolysis + microvascular occlusion**',
      '非裔美國人約 8% 為 trait（通常無症狀），約 1/400 為 SCD',
      'Dx：smear 上 sickle cells、**Howell-Jolly bodies**（功能性無脾）；Hb electrophoresis',
      '貧血：慢性 hemolysis（膽結石、iron overload）；**aplastic crisis（parvovirus B19）**；**splenic sequestration**（可休克）；hyperhemolysis（輸血或 VOC 誘發）',
      'VOC 誘因：脫水、感染、天氣變化、壓力、月經、酒精；可致 stroke、MI、ACS、VTE、papillary necrosis、AVN、dactylitis、priapism',
      'VOC 治療：個人化止痛、IVF、VTE 預防；**只有非典型或比平常嚴重才輸血**（alloimmunization、iron overload）',
      '感染：功能性無脾 -> encapsulated organisms；打 pneumococcus、meningococcus、H. flu、HBV 疫苗；骨梗塞 -> osteomyelitis（**Salmonella**、S. aureus）',
      '**Hydroxyurea**（HbF 上升）、L-glutamine；gene therapy：exa-cel、lovo-cel'
    ],
    refs: ['NEJM 2024;390:1649（lovo-cel）', 'Pocket Medicine Ch 5, Sickle Cell Disease']
  },
  {
    id: 'ho-acs',
    title: 'Acute chest syndrome 與輸血適應症',
    points: [
      '原因：vaso-occlusion、感染、atelectasis、血栓、fat embolism',
      'Dx：**新的肺部浸潤** + 任一：發燒、低血氧、呼吸症狀',
      'Rx：**CAP 抗生素**；**惡化或嚴重 -> RBC exchange**，否則 simple transfusion',
      '**SCD 主要輸血適應症**：ACS、stroke、多器官衰竭、症狀性貧血且 **Hb 比 baseline 低 2 g/dL**、手術預防、急性 sequestration、red cell aplasia'
    ],
    refs: ['Pocket Medicine Ch 5, Sickle Cell Disease']
  },
  {
    id: 'ho-hemolysis',
    title: 'Hemolytic anemia 的評估',
    table: {
      head: ['', '機轉', '例子', '模式'],
      rows: [
        ['Intrinsic', 'Enzyme deficiency', 'G6PD deficiency', '遺傳'],
        ['', 'Hemoglobinopathy', 'SCD、thalassemia', '遺傳'],
        ['', 'Membrane', 'Hereditary spherocytosis', '遺傳'],
        ['', 'Membrane', 'PNH、肝病 spur cell anemia', '後天'],
        ['Extrinsic', 'Immune', 'AIHA、drug-induced、輸血反應', '後天'],
        ['', 'Traumatic', 'MAHA、人工瓣膜、TIPS', '後天'],
        ['', '感染、毒素', 'Malaria、babesiosis、蛇毒、Wilson’s、低張輸液', '後天'],
        ['', 'Entrapment', 'Hypersplenism', '後天']
      ]
    },
    points: [
      '實驗室：**RI > 2%**、LDH 上升、**haptoglobin 下降**（Se 83%、Sp 96%）、indirect bilirubin 上升',
      '**DAT（Coombs）**：病人 RBC 加抗 IgG 或 C3 抗血清會凝集 -> immune',
      '**Intravascular**（機械瓣、DIC、毒素）：hemoglobinemia、hemoglobinuria、**hemosiderinuria**、LDH 很高、haptoglobin 很低',
      '**Extravascular**（較常見）：脾與 RES 清除 -> splenomegaly'
    ],
    refs: ['Lancet 2000;355:1169 & 1260（hemolytic anemia）']
  },
  {
    id: 'ho-rbc-defects',
    title: 'G6PD、PK deficiency、HS',
    points: [
      'Red cell enzyme disorder 多數 autosomal recessive；慢性 hemolysis、DAT 陰性',
      '**G6PD deficiency**：**X-linked**；非洲、地中海後裔常見；Heinz bodies（氧化 Hb）被脾臟咬掉 -> **bite cells**',
      'G6PD 誘因：**sulfonamides、dapsone、nitrofurantoin、rasburicase、primaquine、doxorubicin、methylene blue**；感染、DKA、**fava beans**',
      '**PK deficiency**：糖解障礙；Hb-O2 曲線右移，病人比預期耐受；PK activator（mitapivat）',
      '**Hereditary spherocytosis**：ankyrin、spectrin、band 3 等膜骨架缺陷；北歐 1/5000；75% 有家族史',
      'HS：貧血、黃疸、splenomegaly、色素性膽結石；**spherocytes**、osmotic fragility（約 80%）、**EMA binding（Se 93%、Sp 99%）**',
      'HS 治療：folate、輸血、中重度 splenectomy（權衡之後血栓與感染風險）'
    ],
    refs: ['Lancet 2008;371:64（red cell enzyme disorders）', 'NEJM 2018;378:60（favism）', 'NEJM 2022;386:1432（PK activator）', 'Lancet 2008;372:1411（HS）', 'Haematologica 2012;97:516（EMA）', 'J Thromb Haemost 2008;6:1289（splenectomy）']
  },
  {
    id: 'ho-aiha',
    title: 'Autoimmune hemolytic anemia',
    table: {
      head: ['', 'Warm AIHA', 'Cold agglutinin disease'],
      rows: [
        ['抗體', '**IgG**，體溫下結合 -> 脾臟清除（extravascular）', '**IgM**，< 37 度結合 -> **補體** -> intravascular'],
        ['病因', 'Idiopathic、**CLL/NHL**、**SLE**、藥物、HIV、babesiosis', 'Idiopathic、Waldenström’s（monoclonal）、**Mycoplasma**、**EBV**（polyclonal）'],
        ['DAT', '**IgG** (+)', '**C3** (+)'],
        ['其他', 'Spherocytes；panagglutinin', '**Acrocyanosis**；smear 上凝集；cold agglutinin titer、thermal amplitude'],
        ['治療', '**Steroids** ± splenectomy、IVIg、rituximab、cytotoxic', '**保暖**；sutimlimab；嚴重時 plasmapheresis；rituximab ± bendamustine；處理原發 LPD']
      ]
    },
    points: [
      'Drug-induced：抗生素（cephalosporins、sulfa、rifampin、ribavirin）、methyldopa、procainamide、quinidine、thiazides、TCA、NSAIDs、MTX、5-FU；停藥',
      '**MAHA**：Coombs 陰性、血管內紅血球破壞；TMA、DIC、癌症、惡性高血壓、子癲前症/HELLP、機械瓣'
    ],
    refs: ['NEJM 2017;376:939（babesiosis）', 'NEJM 2021;384:1323（sutimlimab）', 'NEJM 2014;371:654（MAHA）']
  },
  {
    id: 'ho-spleen',
    title: 'Splenomegaly 的原因',
    table: {
      head: ['機轉', '例子'],
      rows: [
        ['RES hyperplasia', 'Hemolytic anemia、SCD、**thalassemia major**'],
        ['Immune hyperplasia', '感染（HIV、EBV、CMV、TB、**malaria**、**kala azar**、MAC）、SLE、RA（Felty’s）、sarcoidosis、serum sickness'],
        ['Congestion', 'Cirrhosis、CHF、portal/splenic vein thrombosis、schistosomiasis'],
        ['Infiltration', 'Gaucher’s、Niemann-Pick、glycogen storage、histiocytosis X、splenic cysts'],
        ['Neoplasm', 'MPN（**CML、PMF**、PV、ET）、CMML、leukemia、lymphoma（**hairy cell**、CLL）、myeloma、amyloid']
      ]
    },
    note: '粗體為 massive splenomegaly 的常見原因。',
    refs: ['Pocket Medicine Ch 5, Hypersplenism']
  }
]);

RPG.registerCase({
  id: 'ho2-aa',
  chapter: 'HO2',
  title: '肝炎好了之後',
  patient: '22 歲男性 · 大學生',
  summary: '三個月前不明原因肝炎住院，這次是牙齦流血和全身瘀青。',
  cards: ['ho-aa'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診會診。蔡同學刷牙時牙齦一直流血，小腿滿是紅點，今天開始發燒 38.6 度。',
        '三個月前他因為急性肝炎住院，A、B、C、E 型都是陰性，兩週後自己好了。',
        'CBC：**WBC 1,200**（**ANC 300**）、**Hb 7.2**、**PLT 8,000**。'
      ],
      clue: ['22M；牙齦出血、petechiae、**發燒 38.6**', '**Pancytopenia**：ANC 300、Hb 7.2、PLT 8k', '3 個月前**不明原因急性肝炎**（A/B/C/E 皆陰性）'],
      choices: [{ label: '先處理眼前的問題', next: 'fn' }]
    },
    fn: {
      text: 'ANC 300 又發燒。現在第一步？',
      choices: [
        { label: '抽血液培養後**立即給 broad-spectrum 抗生素**（如 cefepime）', next: 'fn_ok' },
        { label: '先等血液培養結果再決定抗生素', next: 'fn_wait' },
        { label: '先打 G-CSF 把白血球拉起來', next: 'fn_gcsf' }
      ]
    },
    fn_wait: {
      text: '主治醫師立刻打斷。',
      feedback: 'Neutropenic fever 是急症，抽完培養就要在一小時內給抗 Pseudomonas 的 broad-spectrum 抗生素，不能等報告。',
      choices: [{ label: '重新決定', next: 'fn' }]
    },
    fn_gcsf: {
      text: '主治醫師搖頭。',
      feedback: '骨髓沒有 stem cell 時 G-CSF 幫助有限，而且不能取代抗生素。發燒的 neutropenia 先給 broad-spectrum 抗生素。',
      choices: [{ label: '重新決定', next: 'fn' }]
    },
    fn_ok: {
      text: '抗生素上了，也輸了血小板。接下來找原因。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'smear', group: '血液', label: 'Peripheral smear', key: true, reveal: true,
            result: '三系減少，**無 blasts**、無 dysplasia、無 schistocytes', clue: 'Smear：**無 blasts**',
            miss: 'Pancytopenia 第一件事是看 smear 有沒有 blasts。' },
          { id: 'retic', group: '血液', label: 'Reticulocyte', key: true, reveal: true,
            result: '**0.1%**（絕對值 3,000/uL）', clue: '**Retic 極低**',
            miss: 'Retic 低代表生產不足，不是破壞。' },
          { id: 'bm', group: '骨髓', label: 'Bone marrow aspiration + biopsy + cytogenetics', key: true, reveal: true,
            result: '**Cellularity < 10%**，脂肪取代；無異常細胞浸潤；**cytogenetics 正常**', clue: '**BM cellularity < 10%**；cytogenetics 正常',
            miss: '要確診 aplastic anemia 一定要做骨髓切片，也要排除 hypocellular MDS 與浸潤性疾病。' },
          { id: 'pnh', group: '血液', label: 'PNH flow cytometry（CD55/CD59）', key: true, reveal: true,
            result: '**3% granulocytes 缺 CD55/CD59**（small PNH clone）', clue: 'Small PNH clone（3%）',
            miss: 'AA 約一半有 PNH clone，會影響之後的追蹤。' },
          { id: 'b12', group: '其他', label: 'B12、folate', key: true, reveal: true,
            result: '正常', clue: 'B12、folate 正常',
            miss: '嚴重的 megaloblastic anemia 也會 pancytopenia，要排除。' },
          { id: 'virus', group: '其他', label: 'HIV、EBV、CMV、parvovirus B19 PCR', result: '皆陰性' },
          { id: 'hla', group: '其他', label: '**HLA typing**（本人與兄弟姊妹）', key: true, reveal: true,
            result: '哥哥 **HLA 全相合**', clue: '**有 HLA-matched sibling**',
            miss: '年輕的 AA 一診斷就要做 HLA typing，HSCT 是否可行決定治療方向。' },
          { id: 'ana', group: '其他', label: 'ANA', result: '陰性' },
          { id: 'ct', group: '其他', label: 'Chest CT', result: '無肺炎、無縱膈腔腫瘤',
            clue: '無 thymoma' },
          { id: 'ldh', group: '其他', label: 'LDH、haptoglobin', result: 'LDH 輕度上升、haptoglobin 正常' },
          { id: 'pet', group: '其他', label: 'PET-CT', result: '（未執行）',
            waste: '沒有淋巴結或腫塊的線索，PET 對 aplastic anemia 沒有幫助。' }
        ]
      }
    },
    dx: {
      text: '骨髓幾乎是空的，cytogenetics 正常，沒有浸潤。這是什麼？',
      choices: [
        { label: '**Severe aplastic anemia**，病毒性肝炎後（hepatitis-associated AA）', next: 'tx' },
        { label: 'Hypocellular MDS', next: 'dx_mds' },
        { label: 'PNH，因為有 PNH clone', next: 'dx_pnh' }
      ]
    },
    dx_mds: {
      text: '主治醫師搖頭。',
      feedback: 'Hypocellular MDS 會有 dysplasia 或 cytogenetic 異常。他是年輕人、無 dysplasia、cytogenetics 正常，加上肝炎後發生，典型是 aplastic anemia。',
      choices: [{ label: '重新判讀', next: 'dx' }]
    },
    dx_pnh: {
      text: '主治醫師搖頭。',
      feedback: 'AA 約一半有小的 PNH clone，3% 且沒有溶血表現，主診斷仍是 AA。只要追蹤 clone 有沒有擴大。',
      choices: [{ label: '重新判讀', next: 'dx' }]
    },
    tx: {
      text: '蔡同學 22 歲，哥哥 HLA 全相合。決定性治療？',
      choices: [
        { label: '**Matched sibling allogeneic HSCT**', next: 'end_good' },
        { label: '高劑量 prednisolone', next: 'tx_ster' },
        { label: '先用 eltrombopag 單一藥物', next: 'tx_elt' },
        { label: '繼續輸血支持，等骨髓自己恢復', next: 'tx_wait' }
      ]
    },
    tx_ster: {
      text: '主治醫師搖頭。',
      feedback: '類固醇單用對 AA 沒有效，還增加感染風險。免疫抑制要用 ATG + cyclosporine（+ eltrombopag）。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_elt: {
      text: '主治醫師搖頭。',
      feedback: 'Eltrombopag 單用是 moderate AA 的選項之一。Severe AA 的年輕人有 matched sibling，首選 HSCT；不能移植時才用 triple IST。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_wait: {
      text: '主治醫師搖頭。',
      feedback: 'Severe AA 自發恢復很少，長期輸血會 alloimmunization 和 iron overload，感染與出血死亡率高，要盡快決定性治療。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '一個月後蔡同學接受哥哥的骨髓。Day +18 engraftment，半年後回學校上課。',
      ending: {
        grade: 'good',
        title: 'Hepatitis-associated severe aplastic anemia',
        pearls: [
          'Pancytopenia + retic 低 + BM hypocellular、cytogenetics 正常 -> AA',
          '病毒性肝炎（非 A/B/C）後可發生 AA',
          'Severe AA：年輕且有 donor -> HSCT；否則 ATG + cyclosporine + eltrombopag',
          '一診斷就做 HLA typing；neutropenic fever 立即給抗生素'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho2-pnh',
  chapter: 'HO2',
  title: '早上的可樂色尿',
  patient: '34 歲女性 · 護理師',
  summary: '早上第一泡尿像可樂，這次還多了右上腹痛和腹脹。',
  cards: ['ho-pnh', 'ho-hemolysis'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。劉小姐一週來右上腹痛、肚子越來越脹。',
        '「這一年常常早上起床尿是深褐色的，下午就變淡，我以為是水喝太少。最近吞東西也卡卡的。」',
        '理學檢查：輕度黃疸、**肝腫大**、**腹水**。'
      ],
      clue: ['34F；**早晨深色尿**、一年', '右上腹痛、**肝腫大、腹水**', '吞嚥困難'],
      choices: [{ label: '開檢查', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'interp',
        options: [
          { id: 'cbc', group: '血液', label: 'CBC、retic', key: true, reveal: true,
            result: 'Hb 8.6；WBC 3,100；PLT 98k；**retic 6%**', clue: 'Hb 8.6、輕度三系減少；**retic 6%**',
            miss: 'CBC 與 retic 是評估貧血的基本。' },
          { id: 'hemo', group: '溶血', label: 'LDH、haptoglobin、bilirubin', key: true, reveal: true,
            result: '**LDH 2,350**；**haptoglobin 測不到**；indirect bilirubin 2.8', clue: '**LDH 2,350、haptoglobin 測不到**',
            miss: '深色尿 + 黃疸，要確認 hemolysis。' },
          { id: 'dat', group: '溶血', label: 'DAT（Coombs test）', key: true, reveal: true,
            result: '**陰性**', clue: '**DAT (-)**',
            miss: 'DAT 區分 immune 與非 immune 溶血，一定要驗。' },
          { id: 'smear', group: '溶血', label: 'Peripheral smear', key: true, reveal: true,
            result: '無 schistocytes、無 spherocytes', clue: '無 schistocytes、無 spherocytes',
            miss: 'Smear 可以排除 MAHA 與 spherocytosis。' },
          { id: 'ua', group: '溶血', label: '尿液分析（含 hemosiderin）', key: true, reveal: true,
            result: '尿潛血強陽性但**沒有 RBC**；**urine hemosiderin (+)**', clue: '**Hemoglobinuria、hemosiderinuria**（intravascular）',
            miss: '早晨深色尿要分辨是 hematuria 還是 hemoglobinuria；hemosiderinuria 代表慢性血管內溶血。' },
          { id: 'doppler', group: '影像', label: '腹部 Doppler 超音波', key: true, reveal: true,
            result: '**Hepatic vein thrombosis**（Budd-Chiari）', clue: '**Budd-Chiari syndrome**',
            miss: '肝腫大 + 腹水 + 右上腹痛，要看肝靜脈。' },
          { id: 'ferr', group: '其他', label: 'Ferritin', result: '12', clue: 'Ferritin 12（尿中長期流失鐵）' },
          { id: 'g6pd', group: '其他', label: 'G6PD', result: '正常' },
          { id: 'ana', group: '其他', label: 'ANA', result: '陰性' },
          { id: 'fvl', group: '其他', label: 'Protein C/S、antithrombin', result: '輕度下降',
            waste: '急性血栓期 protein C/S、AT 會消耗，現在驗不準。' },
          { id: 'bm', group: '其他', label: 'Bone marrow biopsy', result: '（暫緩）',
            waste: '先做能確診的檢查。骨髓之後可評估合併的骨髓衰竭。' }
        ]
      }
    },
    interp: {
      text: 'DAT 陰性的血管內溶血、hemosiderinuria、輕度三系減少，加上年輕人的 Budd-Chiari。要做什麼確診？',
      choices: [
        { label: '**Flow cytometry：RBC 與 granulocyte 的 CD55、CD59**', next: 'flow' },
        { label: 'Osmotic fragility test', next: 'i_osm' },
        { label: 'Hb electrophoresis', next: 'i_hb' }
      ]
    },
    i_osm: {
      text: '主治醫師搖頭。',
      feedback: 'Osmotic fragility 是 hereditary spherocytosis 的檢查。她 smear 沒有 spherocytes，而且是血管內溶血加上血栓，要想 PNH。',
      choices: [{ label: '重新決定', next: 'interp' }]
    },
    i_hb: {
      text: '主治醫師搖頭。',
      feedback: 'Hemoglobinopathy 不會造成這種陣發性血管內溶血加腹腔內血栓。DAT 陰性溶血 + 血栓 + cytopenia 的組合是 PNH。',
      choices: [{ label: '重新決定', next: 'interp' }]
    },
    flow: {
      text: 'Flow：**72% granulocytes、41% RBC 缺 CD55、CD59**。',
      clue: '**PNH**：72% granulocyte clone',
      feedback: '晚上呼吸變慢、輕度酸血使補體活化，所以早晨尿最深。Smooth muscle dystonia 解釋了吞嚥困難。',
      choices: [{ label: '擬定治療', next: 'tx' }]
    },
    tx: {
      text: '她有 Budd-Chiari 與大量 PNH clone。治療計畫？',
      choices: [
        { label: '**抗凝** + **C5 inhibitor（ravulizumab）**；**開始前打 meningococcal 疫苗**（來不及就先給抗生素預防）', next: 'tx_ok' },
        { label: '抗凝 + ravulizumab，今天就打，疫苗之後再說', next: 'tx_novax' },
        { label: '高劑量類固醇控制溶血', next: 'tx_ster' },
        { label: '只用抗凝', next: 'tx_ac' }
      ]
    },
    tx_novax: {
      text: '藥師打電話來確認。',
      feedback: 'C5 inhibitor 阻斷 terminal complement，**Neisseria meningitidis** 感染風險大增。一定要先接種 encapsulated organisms 疫苗；緊急時給藥同時要用抗生素預防。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_ster: {
      text: '主治醫師搖頭。',
      feedback: 'PNH 是補體造成的溶血，不是自體抗體，類固醇不是標準治療。補體抑制劑才能同時降低溶血與血栓。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_ac: {
      text: '主治醫師搖頭。',
      feedback: '只抗凝擋不住補體造成的血小板活化與溶血，PNH 血栓常在抗凝下復發。大 clone 合併血栓要用 C5 inhibitor。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_ok: {
      text: '三個月後 LDH 降到 310，尿色正常。某天 LDH 又升到 1,100，她說最近感冒發燒。',
      choices: [
        { label: '**Breakthrough hemolysis**（感染誘發補體活化）：支持治療、評估是否需要調整補體抑制', next: 'end_good' },
        { label: 'C5 inhibitor 沒效，停藥', next: 'end_stop',
          why: '感染會短暫活化補體，造成 breakthrough hemolysis；這不是藥物失效，停藥會讓溶血與血栓全面復發。' }
      ]
    },
    end_stop: {
      text: '停藥兩週後她出現 mesenteric vein thrombosis，緊急送進開刀房。',
      ending: {
        grade: 'bad',
        title: 'PNH 停用補體抑制劑後血栓',
        pearls: [
          '追蹤 LDH 看 breakthrough hemolysis；感染是常見誘因',
          'PNH 血栓好發於腹腔內與腦部',
          'C5 inhibitor 前要打 meningococcal 疫苗'
        ]
      }
    },
    end_good: {
      text: '感冒好了以後 LDH 回到 320。劉小姐回到病房上班，記得每次發燒都要先回診。',
      ending: {
        grade: 'good',
        title: 'PNH 合併 Budd-Chiari syndrome',
        pearls: [
          'DAT 陰性血管內溶血 + 血栓 + cytopenia -> PNH',
          'Dx：flow cytometry，RBC 與 granulocyte 缺 CD55、CD59',
          'Rx：抗凝 + C5 inhibitor（ravulizumab > eculizumab）；新藥 iptacopan 等',
          '先打 encapsulated organisms 疫苗；追蹤 LDH'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho2-scd',
  chapter: 'HO2',
  title: '住院第二天開始喘',
  patient: '20 歲男性 · 交換學生',
  summary: '已知 sickle cell disease，因為背和腳痛住院，第二天發燒、胸痛、血氧掉。',
  cards: ['ho-scd', 'ho-acs'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '病房。Kwame 是從迦納來的交換學生，已知 **sickle cell disease（HbSS）**。昨天因為寒流後下背與大腿劇痛入院。',
        '他的 baseline Hb 約 8.5，今天 Hb 8.2。'
      ],
      clue: ['20M；**HbSS**；寒流後**下背、大腿劇痛**', 'Hb 8.2（baseline 8.5）'],
      choices: [{ label: '處理 vaso-occlusive episode', next: 'voc' }]
    },
    voc: {
      text: '他痛到 9/10。入院處置？',
      choices: [
        { label: '依他的照護計畫給 **opioid 止痛**、IVF、**VTE 預防**、incentive spirometry', next: 'day2' },
        { label: '直接輸 2 袋 PRBC 稀釋 HbS', next: 'voc_tx' },
        { label: '先給 acetaminophen，懷疑他是想要止痛藥', next: 'voc_pain' }
      ]
    },
    voc_tx: {
      text: '主治醫師搖頭。',
      feedback: '典型 VOC 不需要輸血，只有比平常嚴重或非典型時才輸。輸血會增加 alloimmunization 與 iron overload。',
      choices: [{ label: '重新決定', next: 'voc' }]
    },
    voc_pain: {
      text: '主治醫師嚴肅地看著你。',
      feedback: 'VOC 是真實的缺血疼痛，要給足夠的止痛（通常是 opioid），依照病人的照護計畫。低估疼痛是 SCD 照護最常見的問題之一。',
      choices: [{ label: '重新決定', next: 'voc' }]
    },
    day2: {
      text: [
        '第二天下午，Kwame 開始發燒 38.9 度，右側胸痛、喘。**SpO2 89%**（室內空氣）。',
        '你要確認發生了什麼。'
      ],
      clue: ['Day 2：**發燒 38.9、胸痛、SpO2 89%**'],
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'acs',
        options: [
          { id: 'cxr', group: '影像', label: 'Chest X-ray', key: true, reveal: true,
            result: '**右下肺新的浸潤**', clue: '**新的右下肺浸潤**',
            miss: '發燒、胸痛、低血氧的 SCD 病人，要照 CXR 看有沒有新浸潤。' },
          { id: 'cbc', group: '血液', label: 'CBC、retic', key: true, reveal: true,
            result: '**Hb 6.4**；WBC 18,500；PLT 190k；retic 9%', clue: '**Hb 6.4**（比 baseline 低 2 g/dL）',
            miss: 'Hb 掉多少決定輸血策略。' },
          { id: 'bcx', group: '感染', label: '血液培養', key: true, reveal: true,
            result: '採檢中', clue: '已送血液培養',
            miss: '功能性無脾，發燒要抽血液培養。' },
          { id: 'abg', group: '其他', label: 'ABG', result: 'PaO2 58 mmHg', clue: 'PaO2 58' },
          { id: 'type', group: '血液', label: 'Type & screen（extended phenotype）', key: true, reveal: true,
            result: 'O+，antibody screen 陰性；已做 extended phenotype', clue: '可備血（extended phenotype-matched）',
            miss: '可能要輸血或 exchange，要先備血，SCD 最好用 phenotype-matched 血。' },
          { id: 'ctpa', group: '影像', label: 'CT pulmonary angiography', result: '無 PE；右下葉 consolidation',
            clue: 'CTPA：無 PE' },
          { id: 'trop', group: '其他', label: 'Troponin', result: '正常' },
          { id: 'echo', group: '其他', label: 'Echocardiography', result: '（未執行）',
            waste: '目前沒有心衰竭或 PHT 急性表現，不會改變今天的處置。' }
        ]
      }
    },
    acs: {
      text: '新的肺部浸潤 + 發燒 + 低血氧。這是 **acute chest syndrome**。處置？',
      choices: [
        { label: '**CAP 抗生素**（ceftriaxone + azithromycin）+ O2；**低氧加重且 Hb 掉 2 g/dL -> 輸血，若持續惡化改 RBC exchange**', next: 'acs_ok' },
        { label: '只給抗生素，ACS 不需要輸血', next: 'acs_abx' },
        { label: '利尿劑，這是 fluid overload', next: 'acs_diur' }
      ]
    },
    acs_abx: {
      text: '主治醫師搖頭。',
      feedback: 'ACS 是 SCD 的主要輸血適應症。低血氧惡化或嚴重時要做 RBC exchange，否則 simple transfusion。',
      choices: [{ label: '重新決定', next: 'acs' }]
    },
    acs_diur: {
      text: '主治醫師搖頭。',
      feedback: 'ACS 由 vaso-occlusion、感染、atelectasis、血栓或 fat embolism 引起，不是 fluid overload。脫水反而會加重 sickling。',
      choices: [{ label: '重新決定', next: 'acs' }]
    },
    acs_ok: {
      text: [
        '輸了一袋血後隔天 SpO2 掉到 85%、雙側浸潤，轉 ICU 做 **RBC exchange**，HbS 降到 28%。三天後脫離氧氣。',
        '出院前他問：「我一年痛好幾次，有什麼可以預防的？」'
      ],
      choices: [
        { label: '開始 **hydroxyurea**（提高 HbF）；確認 pneumococcal、meningococcal、H. flu、HBV 疫苗', next: 'end_good' },
        { label: '每個月固定輸血就好', next: 'end_ok',
          why: '長期輸血會造成 alloimmunization 與 iron overload，不是第一線；hydroxyurea 提高 HbF，可減少 VOC 與 ACS。' }
      ]
    },
    end_ok: {
      text: '一年後 Kwame 出現抗 E、抗 C 抗體，ferritin 2,800，需要 chelation。',
      ending: {
        grade: 'ok',
        title: 'ACS 救回來了，但長期策略不理想',
        pearls: [
          '長期輸血的代價：alloimmunization、iron overload',
          'Hydroxyurea 是 disease-modifying 的第一線',
          'SCD 輸血適應症：ACS、stroke、多器官衰竭、Hb 低於 baseline 2 g/dL 且有症狀、手術前'
        ]
      }
    },
    end_good: {
      text: 'Kwame 開始吃 hydroxyurea，一年內只因 VOC 住院一次。',
      ending: {
        grade: 'good',
        title: 'Acute chest syndrome',
        pearls: [
          'VOC：足夠止痛、IVF、VTE 預防；典型 VOC 不輸血',
          'ACS = 新肺浸潤 + 發燒/低氧/呼吸症狀',
          'ACS：CAP 抗生素；惡化或嚴重 -> RBC exchange',
          'Hydroxyurea 提高 HbF；功能性無脾要打疫苗'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho2-g6pd',
  chapter: 'HO2',
  title: '瘧疾治好了，尿卻變黑',
  patient: '31 歲男性 · 工程師',
  summary: '從印尼出差回來得了 vivax 瘧疾，吃了第二種藥後第三天尿變成醬油色。',
  cards: ['ho-rbc-defects', 'ho-hemolysis'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '感染科病房會診。王先生在印尼出差回國後確診 **P. vivax malaria**，chloroquine 治療後退燒。',
        '為了清除肝臟的 hypnozoites，昨天開始吃 **primaquine**。今天尿變成醬油色，眼白變黃，很喘。',
        'Hb 從 13.1 掉到 **8.0**。'
      ],
      clue: ['31M；P. vivax 治療中', '**Primaquine** 第 2 天', '**醬油色尿**、黃疸；Hb 13.1 -> **8.0**'],
      choices: [{ label: '問診', next: 'hx' }]
    },
    hx: {
      text: '「我小時候好像被說過是『蠶豆症』，但我從來沒有發作過，也沒放在心上。」他媽媽和舅舅也是。',
      clue: '自述「蠶豆症」；**母系家族**史（舅舅）',
      feedback: '母親帶因、舅舅發病，符合 X-linked。',
      choices: [{ label: '安排檢查', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'mgmt',
        options: [
          { id: 'smear', group: '血液', label: 'Peripheral smear（含 supravital stain）', key: true, reveal: true,
            result: '**Bite cells**、blister cells；supravital stain 見 **Heinz bodies**；無瘧原蟲', clue: '**Bite cells、Heinz bodies**',
            miss: 'Smear 上的 bite cells 與 Heinz bodies 是 G6PD 溶血的特徵。' },
          { id: 'hemo', group: '溶血', label: 'LDH、haptoglobin、bilirubin', key: true, reveal: true,
            result: 'LDH 1,680；haptoglobin 測不到；indirect bilirubin 4.2', clue: 'Hemolysis（LDH 上升、haptoglobin 測不到）',
            miss: '先確認溶血。' },
          { id: 'dat', group: '溶血', label: 'DAT', key: true, reveal: true,
            result: '陰性', clue: 'DAT (-)',
            miss: '要排除藥物造成的 immune hemolysis。' },
          { id: 'ua', group: '溶血', label: '尿液分析', key: true, reveal: true,
            result: '潛血強陽性，RBC 0-2/HPF（**hemoglobinuria**）', clue: 'Hemoglobinuria',
            miss: '醬油色尿要分辨 hemoglobinuria 與 hematuria，也要注意腎功能。' },
          { id: 'cr', group: '其他', label: 'BUN、Cr', key: true, reveal: true,
            result: 'Cr 1.4（baseline 0.9）', clue: '**Cr 1.4**（AKI）',
            miss: '大量 hemoglobinuria 會造成 AKI。' },
          { id: 'g6pd', group: '其他', label: 'G6PD 定量', result: '**正常偏低**', clue: 'G6PD 活性「正常偏低」（急性期）' },
          { id: 'retic', group: '血液', label: 'Reticulocyte', result: '8%' },
          { id: 'bm', group: '其他', label: 'Bone marrow', result: '（未執行）',
            waste: '溶血原因很清楚，不需要骨髓。' },
          { id: 'osm', group: '其他', label: 'Osmotic fragility', result: '正常',
            waste: '沒有 spherocytes，這不是 HS 的方向。' }
        ]
      }
    },
    mgmt: {
      text: 'G6PD 活性報告「正常偏低」。主治醫師問：「所以不是 G6PD deficiency？接下來怎麼做？」',
      choices: [
        { label: '急性溶血時老的 RBC 已被破壞、年輕 RBC 酵素較高，**可能假性正常**，**2-3 個月後重驗**；**停 primaquine**、補液保護腎臟、必要時輸血', next: 'g_ok' },
        { label: 'G6PD 正常，繼續 primaquine 完成療程', next: 'g_cont' },
        { label: '停 primaquine，給高劑量類固醇', next: 'g_ster' }
      ]
    },
    g_cont: {
      text: '主治醫師立刻制止。',
      feedback: '急性溶血後，缺乏酵素的老 RBC 已經被破壞，剩下的 retic 與年輕 RBC 酵素活性較高，G6PD 可假性正常。臨床（primaquine 後溶血、bite cells、Heinz bodies、家族史）已經很明確，繼續吃只會更嚴重。',
      choices: [{ label: '重新決定', next: 'mgmt' }]
    },
    g_ster: {
      text: '主治醫師搖頭。',
      feedback: 'G6PD 溶血是氧化傷害，不是免疫，DAT 也陰性。類固醇沒有角色；停藥、支持治療就會自限。',
      choices: [{ label: '重新決定', next: 'mgmt' }]
    },
    g_ok: {
      text: [
        '停藥、IV hydration，Cr 回到 1.0。Hb 最低 7.4，沒有輸血，一週後回升。',
        '三個月後 G6PD 重驗：**活性 < 10%**。他問：「以後我要注意什麼？瘧疾的肝臟殘留怎麼辦？」'
      ],
      clue: '三個月後 **G6PD < 10%**',
      choices: [
        { label: '給他 **G6PD 禁忌藥物清單**（sulfonamides、dapsone、nitrofurantoin、rasburicase、primaquine、methylene blue）與避免蠶豆；hypnozoite 治療交給感染科討論替代方案', next: 'end_good' },
        { label: '只要避開蠶豆就好，藥物沒關係', next: 'end_bad',
          why: 'G6PD 溶血的誘因除了 fava beans，更常見的是氧化性藥物（sulfa、dapsone、nitrofurantoin、rasburicase、primaquine、methylene blue）、感染與 DKA。' }
      ]
    },
    end_bad: {
      text: '一年後他因膀胱炎在診所拿到 nitrofurantoin，再次溶血住院。',
      ending: {
        grade: 'bad',
        title: 'G6PD deficiency 再次藥物誘發溶血',
        pearls: [
          'G6PD 誘因：sulfa、dapsone、nitrofurantoin、rasburicase、primaquine、methylene blue、感染、DKA、fava beans',
          '急性溶血期 G6PD 活性可能假性正常'
        ]
      }
    },
    end_good: {
      text: '王先生把禁忌藥物清單拍照存在手機裡，也幫家人安排了檢測。',
      ending: {
        grade: 'good',
        title: 'Primaquine 誘發 G6PD 溶血',
        pearls: [
          'X-linked；氧化傷害 -> Heinz bodies -> bite cells',
          'DAT 陰性、hemoglobinuria，注意 AKI',
          '急性期 G6PD 可假性正常，2-3 個月後重驗',
          'Primaquine、rasburicase、dapsone 前要先驗 G6PD'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho2-aiha',
  chapter: 'HO2',
  title: '肺炎後手指發紫',
  patient: '21 歲女性 · 大學生',
  summary: '咳嗽兩週的 atypical pneumonia，冷氣房裡手指耳朵發紫，血紅素一直掉。',
  cards: ['ho-aiha', 'ho-hemolysis'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '病房。邱同學兩週前開始乾咳、低燒，CXR 雙側間質浸潤，**Mycoplasma IgM 陽性**，正在吃 azithromycin。',
        '今天她說在冷氣房裡手指和耳朵會發紫，回到溫暖的地方就好。Hb 從 12.5 掉到 **8.3**。',
        '檢驗科打電話來：「這管 CBC 有凝集，**MCV 128、MCHC 39**，數值可能不準。」'
      ],
      clue: ['21F；**Mycoplasma pneumonia**', '冷環境下**手指、耳朵發紫**（acrocyanosis）', 'Hb 12.5 -> **8.3**', '檢體**凝集**；MCV 128、MCHC 39（假性）'],
      choices: [{ label: '安排檢查', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'interp',
        options: [
          { id: 'warm', group: '血液', label: '檢體 37 度保溫後重測 CBC', key: true, reveal: true,
            result: 'Hb 8.3；**MCV 92**；MCHC 34', clue: '保溫後 **MCV 92**（原本是凝集造成假性大球）',
            miss: '凝集會讓自動分析儀把一團 RBC 當成一顆，MCV 假性上升，要保溫重測。' },
          { id: 'smear', group: '血液', label: 'Peripheral smear', key: true, reveal: true,
            result: '**RBC agglutination**；少量 spherocytes', clue: 'Smear：**RBC agglutination**',
            miss: 'Smear 可以直接看到凝集。' },
          { id: 'hemo', group: '溶血', label: 'LDH、haptoglobin、bilirubin、retic', key: true, reveal: true,
            result: 'LDH 920；haptoglobin 低；indirect bilirubin 2.4；retic 7%', clue: 'Hemolysis（retic 7%）',
            miss: '先確認溶血。' },
          { id: 'dat', group: '溶血', label: 'DAT（IgG 與 C3 分開）', key: true, reveal: true,
            result: '**anti-C3 陽性**；anti-IgG 陰性', clue: '**DAT：C3 (+)、IgG (-)**',
            miss: 'DAT 分 IgG 與 C3 是區分 warm 與 cold AIHA 的關鍵。' },
          { id: 'cat', group: '溶血', label: 'Cold agglutinin titer、thermal amplitude', key: true, reveal: true,
            result: 'Titer **1:2048**；thermal amplitude 到 30 度', clue: '**Cold agglutinin titer 1:2048**',
            miss: 'C3 陽性時要驗 cold agglutinin titer 與 thermal amplitude。' },
          { id: 'spep', group: '其他', label: 'SPEP、immunofixation', result: '無 M protein', clue: '無 monoclonal protein（polyclonal，感染相關）' },
          { id: 'ct', group: '影像', label: 'CT 胸腹骨盆找 lymphoma', result: '（未執行）',
            waste: '年輕人、有明確 Mycoplasma 感染、無 M protein，lymphoma 機率低。' },
          { id: 'g6pd', group: '其他', label: 'G6PD', result: '正常',
            waste: 'DAT 陽性已經指向 immune hemolysis。' }
        ]
      }
    },
    interp: {
      text: 'DAT C3 陽性、IgG 陰性，cold agglutinin titer 高。這是什麼？',
      choices: [
        { label: '**Cold agglutinin disease**，Mycoplasma 誘發（polyclonal IgM）', next: 'tx' },
        { label: 'Warm AIHA', next: 'i_warm' },
        { label: 'Drug-induced hemolysis（azithromycin）', next: 'i_drug' }
      ]
    },
    i_warm: {
      text: '主治醫師搖頭。',
      feedback: 'Warm AIHA 是 IgG、DAT IgG 陽性，在體溫下作用、脾臟清除。她是 C3 陽性、冷環境 acrocyanosis、檢體凝集，是 IgM 的 cold agglutinin。',
      choices: [{ label: '重新判讀', next: 'interp' }]
    },
    i_drug: {
      text: '主治醫師搖頭。',
      feedback: 'Macrolides 不是典型的溶血藥物。Mycoplasma 與 EBV 是 polyclonal cold agglutinin 的經典誘因。',
      choices: [{ label: '重新判讀', next: 'interp' }]
    },
    tx: {
      text: 'Hb 8.3，她有點喘但血行動力學穩定。處置？',
      choices: [
        { label: '**保暖**（室溫、保暖衣物、輸液與血品經 **blood warmer**）；治療 Mycoplasma；必要時輸血', next: 'end_good' },
        { label: '高劑量 prednisolone', next: 'tx_ster' },
        { label: '安排 splenectomy', next: 'tx_spl' }
      ]
    },
    tx_ster: {
      text: '主治醫師搖頭。',
      feedback: '類固醇對 cold agglutinin disease 效果差（不像 warm AIHA）。感染後的 polyclonal cold agglutinin 通常數週內自限；嚴重時才考慮 sutimlimab、plasmapheresis。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_spl: {
      text: '主治醫師搖頭。',
      feedback: 'IgM + 補體造成的溶血主要在血管內與肝臟，不是脾臟。Splenectomy 是 warm AIHA 或 HS 的選項，對 CAD 沒有幫助。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '病房冷氣調高，輸液走 blood warmer。Hb 最低 7.6，沒有輸血。三週後回診 Hb 11.9，cold agglutinin titer 下降。',
      ending: {
        grade: 'good',
        title: 'Mycoplasma 相關 cold agglutinin disease',
        pearls: [
          'IgM、< 37 度結合、補體 -> DAT C3 (+)',
          '檢體凝集 -> MCV、MCHC 假性上升，保溫後重測',
          'Mycoplasma、EBV -> polyclonal，通常自限',
          '保暖、blood warmer；類固醇與 splenectomy 效果差',
          'Warm AIHA：IgG、spherocytes -> steroids、rituximab、splenectomy'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'ho2-warm',
  chapter: 'HO2',
  title: 'CLL 追蹤中的黃疸',
  patient: '71 歲男性 · CLL watch & wait',
  summary: 'CLL 追蹤三年都很穩定，這兩週突然很喘、眼睛黃。',
  cards: ['ho-aiha', 'ho-spleen'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '血液科門診。李伯伯 CLL Rai stage I 追蹤三年，沒有治療。上個月 Hb 13.0。',
        '這兩週走路很喘，家人說他眼睛變黃。今天 **Hb 7.1**、**retic 11%**、**ALC 28,000**。脾臟在肋下 3 指。'
      ],
      clue: ['71M；CLL（watch & wait）', '**Hb 13.0 -> 7.1**（1 個月）、**retic 11%**', '黃疸、splenomegaly'],
      choices: [{ label: '開檢查', next: 'labs' }]
    },
    labs: {
      text: '開立檢查。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'interp',
        options: [
          { id: 'dat', group: '溶血', label: 'DAT（IgG 與 C3）', key: true, reveal: true,
            result: '**anti-IgG 強陽性**；anti-C3 弱陽性', clue: '**DAT IgG (+)**',
            miss: 'CLL 病人突然溶血，第一個要想 AIHA，DAT 一定要驗。' },
          { id: 'smear', group: '血液', label: 'Peripheral smear', key: true, reveal: true,
            result: '大量 **spherocytes**、polychromasia；smudge cells', clue: '**Spherocytes**',
            miss: 'Spherocytes 是 warm AIHA 的特徵。' },
          { id: 'hemo', group: '溶血', label: 'LDH、haptoglobin、bilirubin', key: true, reveal: true,
            result: 'LDH 780；haptoglobin 測不到；indirect bilirubin 3.6', clue: 'Hemolysis',
            miss: '先確認溶血。' },
          { id: 'type', group: '血液', label: 'Type & screen、crossmatch', key: true, reveal: true,
            result: '**Panagglutinin**：所有 donor 都不相合', clue: 'Panagglutinin（crossmatch 皆不相合）',
            miss: '可能需要輸血，要先知道血庫的配血狀況。Warm autoantibody 常造成 panagglutination。' },
          { id: 'drug', group: '其他', label: '用藥史確認', result: '最近沒有新藥' },
          { id: 'ct', group: '影像', label: 'CT 評估 CLL 疾病範圍', result: '輕度腹腔淋巴結、splenomegaly 15 cm' },
          { id: 'g6pd', group: '其他', label: 'G6PD', result: '正常',
            waste: 'DAT IgG 強陽性已經解釋溶血。' },
          { id: 'cat', group: '其他', label: 'Cold agglutinin titer', result: '陰性' }
        ]
      }
    },
    interp: {
      text: 'DAT IgG 強陽性、spherocytes，CLL 背景。治療？',
      choices: [
        { label: '**Warm AIHA**：**prednisone 1 mg/kg**；有症狀就輸血（血庫給最相容的血，不要因 crossmatch 不合而不輸）；評估 CLL 治療與 **rituximab**', next: 'end_good' },
        { label: 'Crossmatch 都不合，所以絕對不能輸血', next: 'w_notx' },
        { label: '先做 splenectomy', next: 'w_spl' },
        { label: '保暖、避免冷，等它自己好', next: 'w_cold' }
      ]
    },
    w_notx: {
      text: '主治醫師搖頭。',
      feedback: 'Warm autoantibody 造成 panagglutinin，crossmatch 自然不合。與血庫討論排除 alloantibody 後，有症狀的嚴重貧血仍要輸「最相容」的血，不能因此讓病人缺氧。',
      choices: [{ label: '重新決定', next: 'interp' }]
    },
    w_spl: {
      text: '主治醫師搖頭。',
      feedback: 'Splenectomy 是 warm AIHA 的後線選項。第一線是類固醇，CLL 相關的再加 rituximab 或 CLL 治療。',
      choices: [{ label: '重新決定', next: 'interp' }]
    },
    w_cold: {
      text: '主治醫師搖頭。',
      feedback: '保暖是 cold agglutinin disease 的處置。他是 IgG 的 warm AIHA，要類固醇。',
      choices: [{ label: '重新決定', next: 'interp' }]
    },
    end_good: {
      text: '輸了一袋最相容的血，開始 prednisone。兩週後 Hb 10.2。因為 AIHA 合併 CLL，血液科之後啟動 CLL 治療並加上 rituximab，類固醇逐步減量。',
      ending: {
        grade: 'good',
        title: 'CLL 相關 warm AIHA',
        pearls: [
          'CLL 合併 AIHA（約 10%）或 ITP',
          'Warm AIHA：IgG、spherocytes、extravascular',
          'Rx：steroids；rituximab；後線 splenectomy、IVIg、cytotoxic',
          'Panagglutinin 不是拒絕輸血的理由'
        ]
      }
    }
  }
});
