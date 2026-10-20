// ID 19 Antimicrobial agents: class cards (spectrum, key toxicities, interactions) and toxicity/interaction cases.
// Source: Washington Manual Ch 15 (source/Washington ID.txt, lines 2249-2754).

RPG.registerCards('ID19', [
  {
    id: 'id-abx-path',
    title: '抗生素作用機轉總覽',
    table: {
      head: ['標的', '藥物', '殺菌/抑菌'],
      rows: [
        ['**細胞壁**（PBP）', 'Penicillins、cephalosporins、carbapenems、monobactam', '殺菌'],
        ['細胞壁（D-Ala-D-Ala）', '**Vancomycin**、lipoglycopeptides', '殺 staph、**抑制 enterococci**'],
        ['細胞膜', '**Daptomycin**（GP）、**polymyxins**（GN）', '殺菌'],
        ['**30S** ribosome', '**Aminoglycosides**（錯讀 mRNA）、**tetracyclines**', 'AG 殺菌；TCN 抑菌'],
        ['**50S** ribosome', '**Macrolides、clindamycin**、linezolid（阻止組裝）、lefamulin', '抑菌'],
        ['DNA gyrase / topo IV', '**Fluoroquinolones**', '殺菌'],
        ['葉酸代謝', '**TMP-SMX**', ''],
        ['有毒代謝物（厭氧環境活化）', '**Metronidazole**、nitrofurantoin', '殺菌']
      ]
    },
    points: [
      '**合併殺菌作用**：細胞壁藥讓 aminoglycoside 更容易進入 -> **synergy**（enterococcal IE）',
      '抑制蛋白合成的藥（**clindamycin、linezolid**）可以**減少 toxin 產生**（TSS、NF）',
      'Aminoglycoside 在**膿瘍的低 pH、低氧**環境活性下降；不涵蓋厭氧菌',
      '依培養與藥敏換成**最窄效**；短療程常常一樣有效；**高生體可用率**的藥盡早轉口服'
    ],
    note: '作用機轉為原文內容整理；殺菌/抑菌與 synergy 原理部分由一般教科書補充。'
  },
  {
    id: 'id-pcn',
    title: 'Penicillins',
    table: {
      head: ['藥物', '重點'],
      rows: [
        ['**PCN G**（IV）、benzathine（IM 長效）', 'PCN 敏感 strep、**梅毒**（神經梅毒用 aqueous IV）、Listeria、Pasteurella、Actinomyces'],
        ['**Ampicillin / amoxicillin**', '**Enterococcus、Listeria** 首選；amoxicillin 口服用於鼻竇、咽、中耳、CAP、UTI'],
        ['**Amp-sulb / amox-clav**', '加上 **MSSA、厭氧菌**、多數 Enterobacterales；頭頸、咬傷、腹腔骨盆、多菌軟組織；**sulbactam 治 Acinetobacter**（3 g q4h 或 9 g q8h）'],
        ['**Nafcillin、oxacillin、dicloxacillin**', '**MSSA 首選**；nafcillin/oxacillin 可能**肝炎**'],
        ['**Pip-tazo**', 'Enterobacterales、**Pseudomonas**、MSSA、amp 敏感 enterococci、**厭氧菌**；**合併 vancomycin 增加腎毒性**']
      ]
    },
    points: [
      '副作用：anaphylaxis、**間質性腎炎**、LFT 上升、血球低下、靜脈炎；**> 2 週高劑量每週 Cr 與 CBC**',
      '**嚴重 PCN 過敏（立即型）**：沒做皮膚測試或 desensitization 前不用'
    ]
  },
  {
    id: 'id-ceph',
    title: 'Cephalosporins',
    table: {
      head: ['世代', '代表藥', '重點'],
      rows: [
        ['1', '**Cefazolin**、cephalexin、cefadroxil', 'MSSA、strep、E. coli、Klebsiella、Proteus；**手術預防**'],
        ['2', 'Cefuroxime；**cefoxitin、cefotetan**', 'Cefoxitin/cefotetan 有 **B. fragilis** -> 腹腔、婦科'],
        ['3', '**Ceftriaxone**、cefotaxime、**ceftazidime**、cefpodoxime', '**Ceftazidime 唯一抗 PsA 的 3 代，但沒有 MSSA**；ceftriaxone、ceftazidime **進 CNS**；**AmpC hyperproducer 不可靠** -> carbapenem 或 cefepime；ceftriaxone + ampicillin 治 E. faecalis IE'],
        ['4', '**Cefepime**', 'PsA、**AmpC**；febrile neutropenia；無 B. fragilis；**高劑量 + 腎差 -> encephalopathy**'],
        ['5（anti-MRSA）', '**Ceftaroline**', '結合 **PBP2a**；GN 活性類似 ceftriaxone，PsA、AmpC、ESBL 不行']
      ]
    },
    points: [
      '**所有 cephalosporins 單用對 enterococci 無效**；對 Listeria 無效',
      'Ceftriaxone 經膽汁排泄 -> **biliary sludge**',
      'PCN 過敏者交叉過敏少見，但嚴重 PCN 過敏（anaphylaxis、蕁麻疹）要先皮膚測試或 desensitization',
      '新藥（ceftolozane-tazo、ceftazidime-avibactam、cefiderocol 等）見 Table 15-1'
    ]
  },
  {
    id: 'id-carba',
    title: 'Carbapenems 與 aztreonam',
    points: [
      'Imipenem、**meropenem**、**ertapenem**：多數 GP、GN、**厭氧菌**；**ESBL、AmpC 首選**',
      'Imipenem 對 amp 敏感 E. faecalis 最好，也用於 Nocardia、部分 NTM',
      '**不涵蓋**：amp 抗藥 enterococci、**MRSA**、**Stenotrophomonas**、**KPC/MBL** 產生菌',
      '**Ertapenem 不涵蓋 PsA、Acinetobacter、enterococci**；**meropenem 是 CNS 首選**',
      '**Seizure**：老人、腎功能差、癲癇或 CNS 病變',
      '**與 valproic acid 交互作用**：valproate 濃度**大幅下降** -> 癲癇發作 -> **避免併用**',
      '**Aztreonam**：只有需氧 GN（含 PsA）；**對 MBL 穩定**（合併 ceftazidime-avibactam）；**和其他 β-lactam 無交叉過敏** -> 嚴重 β-lactam 過敏可用'
    ]
  },
  {
    id: 'id-amg',
    title: 'Aminoglycosides',
    points: [
      '與細胞壁藥**協同**；**tobramycin** 偏好用於全身性 PsA；**amikacin** 用於 PsA UTI、分枝桿菌、Nocardia；**gentamicin 不再建議治 PsA**',
      '**無厭氧活性**；膿瘍低 pH/低氧下活性差',
      '**腎毒性**（早期可逆）與**耳毒性**（前庭或耳蝸；> 14 天每週聽力檢查）',
      '避免併用其他腎毒性藥：amphotericin、foscarnet、NSAIDs、pentamidine、polymyxins、cidofovir、cisplatin'
    ],
    table: {
      head: ['給藥', '方法'],
      rows: [
        ['**Extended-interval**', 'Gent/tobra **5 mg/kg**（amikacin 15 mg/kg）；給藥後 **6-14 h** 抽濃度，用 **nomogram** 決定間隔；每週濃度、每週三次 Cr'],
        ['**Traditional**', 'Gent/tobra loading 2 mg/kg（重症 2-3）-> 1-1.7 mg/kg q8-12h（peak 3-10、**trough < 1**）；第 3-4 劑測 peak/trough'],
        ['**一定用 traditional**', '**心內膜炎**、**燒傷 > 20%**、**全身水腫**、**CrCl < 30**'],
        ['**肥胖**（> IBW 20%）', '**Obese dosing weight = IBW + 0.4 x（ABW - IBW）**'],
        ['Plazomicin', '15 mg/kg q24h（cUTI，CRE 活性）；trough < 3；不用一般 nomogram']
      ]
    }
  },
  {
    id: 'id-gp-agents',
    title: '抗 Gram-positive 藥物',
    table: {
      head: ['藥物', '重點', '注意'],
      rows: [
        ['**Vancomycin**', 'MRSA、amp 抗藥 enterococci、β-lactam 過敏的 GP 感染、GP 腦膜炎經驗性、**PO 治 CDI**；trough 10-20；嚴重 MRSA 用 **AUC 400-600**', '腎毒性（**+ pip-tazo 更高**）、neutropenia、血小板低；**輸注太快 -> infusion reaction**（組織胺；**放慢**、抗組織胺），不是過敏'],
        ['**Daptomycin**', 'SSTI 4 mg/kg、BSI/右心 IE 6-12 mg/kg；快速殺菌', '**被肺表面張力素失活 -> 不能治肺炎**；**CK 每週**（rhabdomyolysis），避免 statin；**eosinophilic pneumonitis**；治療中可產生抗藥'],
        ['**Linezolid**', 'VRE、MRSA 替代、口服 MRSA；生體可用率高，腎肝不用調整', '**> 2 週 myelosuppression**（每週 CBC）、周邊與視神經病變、lactic acidosis；**MAOI -> serotonin syndrome**（SSRI、其他抗憂鬱藥、fentanyl、meperidine、cyclobenzaprine）；最好停抗憂鬱藥一週；CRBSI 一般避免'],
        ['Tedizolid', 'SSTI；涵蓋部分 linezolid 抗藥 enterococci', 'MAO 交互作用較少'],
        ['Telavancin', 'S. aureus HABP/VABP、SSTI', '腎毒性、QTc；**育齡女性要驗孕**'],
        ['Dalbavancin、oritavancin', '長效（單次或兩次）；SSTI', '輸注反應、ALT 上升']
      ]
    }
  },
  {
    id: 'id-fq',
    title: 'Fluoroquinolones',
    points: [
      '口服生體可用率接近 IV；**與鋁、鎂制酸劑、sucralfate、鉍、口服鐵、鈣、鋅、含金屬離子的灌食**併用會大幅降低吸收',
      '**Ciprofloxacin**：GN（含 AmpC、**PsA 最可靠**）；UTI、腸炎、前列腺炎、IAI（+ metronidazole）；**GP 與厭氧差 -> 不單用於 CAP、SSTI、IAI**',
      '**Levofloxacin、moxifloxacin**：strep 較好（呼吸道 FQ）；levofloxacin 涵蓋 PsA；**moxifloxacin 尿中濃度低 -> 不用於 UTI**；moxifloxacin 治 IAI 有 B. fragilis 抗藥；可用於抗藥 TB、NTM',
      'Delafloxacin：MRSA、PsA、厭氧；**不延長 QTc**'
    ],
    table: {
      head: ['副作用', ''],
      rows: [
        ['常見', '噁心、**CNS**（頭痛、躁動、頭暈，老人）、皮疹、**光敏感**'],
        ['**QTc 延長**', '避免與其他延長 QT 或造成心搏過緩的藥併用；老人小心'],
        ['**肌腱炎、肌腱斷裂**', '尤其 Achilles、老人'],
        ['罕見', '**周邊神經病變**、**重症肌無力惡化**、**主動脈瘤**'],
        ['Warfarin', '**INR 上升**'],
        ['族群', '< 18 歲、**懷孕**、哺乳要小心']
      ]
    }
  },
  {
    id: 'id-macro-sxt-tcn',
    title: 'Macrolides、clindamycin、TMP-SMX、tetracyclines',
    table: {
      head: ['藥物', '重點', '注意'],
      rows: [
        ['**Azithromycin**', 'Legionella、Chlamydia、Mycoplasma；門診 CAP；MAC 預防與治療；交互作用較少', 'QTc、重症肌無力惡化'],
        ['**Clarithromycin**', 'H. influenzae 較好；MAC、H. pylori', '**CYP3A 抑制，交互作用多**；QTc'],
        ['**Clindamycin**', 'Staph、strep、**厭氧菌**（**B. fragilis 不可靠** -> IAI 用 metronidazole）；口服 90%，進骨與膿瘍；部分 MRSA；**減少 toxin**', '**C. difficile** 風險高；皮疹'],
        ['**TMP-SMX**', '**PJP、Stenotrophomonas、Nocardia、T. whipplei**；MRSA SSTI；UTI；**不涵蓋 PsA、厭氧，GAS 不可靠**', '**高血鉀**、低血鈉、骨髓抑制、**SJS**、G6PD 溶血、**Cr 假性上升**（抑制分泌）'],
        ['**Doxycycline**', 'Chlamydia、立克次體、**leptospirosis**、Q fever、CAP、MRSA SSTI（不含 GAS）、瘧疾預防', '**光敏感**、食道潰瘍（要配水站著吞）；兒童與孕婦避免；**鈣鐵鎂鋁離子前 2 h 後 4 h 避免**'],
        ['**Minocycline**', 'Tetracyclines 中 **Acinetobacter 最好**；Nocardia、Stenotrophomonas', '前庭症狀'],
        ['**Tigecycline**', 'VRE、部分 MDR GN（含 CRE）；**不含 PsA**', '**血中濃度低 -> 不用於菌血症**；**全因死亡率上升**'],
        ['Omadacycline、eravacycline', 'CAP/SSTI；cIAI', 'Eravacycline 不用於 UTI']
      ]
    }
  },
  {
    id: 'id-misc-abx',
    title: 'Metronidazole、UTI 專用藥、polymyxins、其他',
    table: {
      head: ['藥物', '重點', '注意'],
      rows: [
        ['**Metronidazole**', '**只有厭氧菌**（GN 比 GP 好；含 C. perfringens）與原蟲（Giardia、E. histolytica、Trichomonas）；BV；穿透膿瘍、骨、CNS', '噁心、金屬味、**disulfiram-like 反應（酒精）**；罕見周邊神經病變、腦病變；肝病減量'],
        ['**Nitrofurantoin**', '**只用於單純 cystitis**（不含 Proteus、PsA、Morganella、Serratia）；VRE cystitis', '**CrCl < 30 避免**；長期使用肺纖維化、肝毒性、神經毒性；尿液變棕色'],
        ['**Fosfomycin**', '單純 cystitis（含 PsA、VRE、部分 MDR）', '腹瀉；避免 metoclopramide'],
        ['**Colistin、polymyxin B**', '最後防線（CRE、PsA）；Proteus、Providencia、Burkholderia、Serratia 天然抗藥', '**腎毒性約 30%**、**神經毒性約 10%**（麻、口齒不清）；每天 Cr；避免神經肌肉阻斷劑'],
        ['Lefamulin', 'CAP 替代（含 MRSA、非典型）', 'QT、交互作用']
      ]
    }
  },
  {
    id: 'id-antiviral',
    title: '抗病毒藥',
    table: {
      head: ['藥物', '適應症', '注意'],
      rows: [
        ['**Acyclovir**', 'HSV、VZV；HSV 腦炎 10 mg/kg q8h', '**IBW 給藥**（肥胖）；**crystalline nephropathy**（脫水、bolus）；腎差老人 CNS 毒性'],
        ['**Valacyclovir**', 'HSV、VZV；生體可用率為口服 acyclovir 3-5 倍；1 g PO ≈ 5 mg/kg IV acyclovir', '高劑量 8 g/d 在免疫低下 -> HUS/TTP'],
        ['**Ganciclovir / valganciclovir**', 'CMV；900 mg PO ≈ 5 mg/kg IV', '**Neutropenia**（G-CSF）、血小板低；每週 CBC、BMP'],
        ['**Foscarnet**', 'Acyclovir 抗藥 HSV/VZV、ganciclovir 抗藥 CMV', '**腎毒性**；**螯合二價離子 -> 低鈣抽搐**（併 pentamidine 嚴重低鈣）；前後輸 NS；每週兩次電解質'],
        ['**Cidofovir**', '其他無效的 CMV', '**腎毒性**；每劑前驗 Cr、尿蛋白；**probenecid + NS**'],
        ['Letermovir', 'HSCT、腎移植 CMV **預防**', '對其他 herpesvirus 無效；cyclosporine 併用減量'],
        ['Maribavir', '頑固或抗藥 CMV（移植後）', '**不可與 ganciclovir 併用**（拮抗）；與 tacrolimus 等交互作用'],
        ['Oseltamivir 等', '見 influenza 卡', ''],
        ['**Nirmatrelvir-ritonavir**、remdesivir', '見 COVID-19 卡', 'Ritonavir 交互作用多'],
        ['Tecovirimat、brincidofovir', '天花；Mpox（擴大使用）', 'Brincidofovir 延長用於 CMV 預防死亡率上升']
      ]
    }
  },
  {
    id: 'id-antifungal',
    title: '抗黴菌藥',
    table: {
      head: ['藥物', '涵蓋', '注意'],
      rows: [
        ['**Amphotericin B**（lipid 製劑優先）', '多數黴菌（含 **Mucorales**）；不含 P. boydii、C. lusitaniae、A. terreus；約 30% C. auris 抗藥', '**腎毒性**（前後 500 mL NS）、**低鉀低鎂**、輸注反應（acetaminophen、diphenhydramine 預防）'],
        ['**Fluconazole**', 'Candida（**C. krusei 抗藥、C. glabrata 要 MIC**、C. auris ~90% 抗藥）、Cryptococcus', '**沒有 Aspergillus、黴菌活性**'],
        ['**Itraconazole**', '雙相黴菌、sporotrichosis、Aspergillus 替代、甲癬', '膠囊要胃酸；液劑空腹；**TDM > 1**；**心衰竭**'],
        ['**Voriconazole**', '**Aspergillus 首選**、Fusarium、Scedosporium、多數 non-albicans', '**TDM 1-5.5**；CYP2C19 基因差異；**視覺異常、幻覺、光毒性**；禁 rifampin、rifabutin、carbamazepine、sirolimus'],
        ['**Posaconazole**', '高風險預防；Aspergillus、**Mucormycosis**', 'TDM > 1.25；懸浮液要隨餐；交互作用多'],
        ['**Isavuconazole**', 'Aspergillus、Mucormycosis', '**縮短 QTc**（其他 azole 延長）；口服 98% 不受食物影響'],
        ['**Echinocandins**', 'Candida（含 azole 抗藥、C. auris < 5% 抗藥）、Aspergillus（頑固）', '**沒有 Cryptococcus、雙相黴菌、Mucorales**；caspofungin 肝功能差減量；rezafungin 每週一次'],
        ['**Flucytosine**', '合併 AmB 治 Cryptococcus、嚴重 Candida', '**不可單用**（快速抗藥）；**骨髓抑制**；peak 50-100；腎差調整'],
        ['Terbinafine、ibrexafungerp', '甲癬；外陰陰道念珠菌', 'Ibrexafungerp **懷孕禁忌**']
      ]
    },
    note: '所有 azoles：肝炎、交互作用多、多數延長 QTc；voriconazole、posaconazole IV 在 CrCl < 50 小心（cyclodextrin 蓄積）。'
  }
]);

RPG.registerCase({
  id: 'id19-linezolid',
  chapter: 'ID19',
  title: '在吃抗憂鬱藥的骨髓炎',
  patient: '66 歲女性 · 憂鬱症',
  summary: 'MRSA 骨髓炎要出院改口服，住院醫師打算開 linezolid 六週。',
  cards: ['id-abx-path', 'id-gp-agents', 'id-osteo'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '骨科病房。林女士 **MRSA 脛骨骨髓炎**清創後打了兩週 vancomycin，準備出院改口服完成 6 週。MRSA 藥敏：**TMP-SMX S、doxycycline S**、clindamycin R、linezolid S。',
        '她有憂鬱症，長期服用 **sertraline 100 mg**。',
        '住院醫師開了 **linezolid 600 mg bid x 4 週**。'
      ],
      clue: ['66F；**MRSA 骨髓炎**，要再口服 4 週', 'TMP-SMX S、doxy S', '**Sertraline**', '擬用 **linezolid 4 週**'],
      choices: [{ label: '審查處方', next: 'review' }]
    },
    review: {
      text: '這張處方有什麼問題？',
      choices: [
        { label: 'Linezolid 是弱 **MAOI**，與 sertraline 有 **serotonin syndrome** 風險；**> 2 週 myelosuppression**、神經病變 -> 改用骨頭濃度好的 **TMP-SMX**（或 doxycycline），追蹤 K 與 Cr', next: 'end_good' },
        { label: '沒問題，linezolid 口服生體可用率最好', next: 'r_fine' },
        { label: '照開 linezolid，同時把 sertraline 停一週', next: 'r_stopssri' }
      ]
    },
    r_fine: {
      text: '主治醫師搖頭。',
      feedback: 'Linezolid 有 **MAO 抑制**作用，與 **SSRI** 併用可能 serotonin syndrome；長期（> 2 週）會**骨髓抑制**、周邊與視神經病變。這株 TMP-SMX、doxycycline 都敏感，而且都能進骨頭。',
      choices: [{ label: '重新決定', next: 'review' }]
    },
    r_stopssri: {
      text: '主治醫師搖頭。',
      feedback: '停 sertraline 有憂鬱復發的代價，而且 4 週 linezolid 還有骨髓抑制與神經病變。有敏感、可以進骨頭的替代藥（TMP-SMX、doxycycline），就不用冒這個險。',
      choices: [{ label: '重新決定', next: 'review' }]
    },
    end_good: {
      text: '改 TMP-SMX 2 DS bid，每週驗 K、Cr、CBC。完成療程，骨髓炎沒有復發。',
      ending: {
        grade: 'good',
        title: 'Linezolid 的交互作用與長期毒性',
        pearls: [
          'Linezolid：MAOI -> 避免 SSRI、其他抗憂鬱藥、fentanyl、meperidine',
          '> 2 週：骨髓抑制（每週 CBC）、周邊與視神經病變、lactic acidosis',
          '口服骨頭濃度好的 MRSA 藥：TMP-SMX、clindamycin、doxycycline',
          'TMP-SMX：高血鉀、Cr 假性上升'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id19-valproate',
  chapter: 'ID19',
  title: '用了 meropenem 之後的抽搐',
  patient: '34 歲男性 · 癲癇',
  summary: '癲癇控制穩定多年，因為 ESBL 腎盂腎炎打了 meropenem，第三天全身抽搐。',
  cards: ['id-carba', 'id-pyelo'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。宋先生癲癇用 **valproic acid** 控制得很好，五年沒發作。這次 **ESBL E. coli** 腎盂腎炎，用 **meropenem** 第 3 天，今天**全身強直陣攣發作**。',
        'Valproate 濃度：入院時 78，今天 **9**（μg/mL）。腎功能正常。藥敏：TMP-SMX R、cipro R、**ertapenem S**、amikacin S、**fosfomycin S**。'
      ],
      clue: ['34M；**valproate** 控制的癲癇', 'ESBL pyelo，**meropenem** 第 3 天', '**Valproate 78 -> 9**；抽搐'],
      choices: [{ label: '處置', next: 'fix' }]
    },
    fix: {
      text: '原因與處置？',
      choices: [
        { label: '**Carbapenem 讓 valproate 濃度大幅下降**（加劑量也拉不回來）：**避免併用**；感染改用**非 carbapenem**的敏感藥（例如 amikacin），癲癇暫時加用其他抗癲癇藥', next: 'end_good' },
        { label: '把 valproate 劑量加倍', next: 'f_double' },
        { label: '改 ertapenem 就沒問題', next: 'f_erta' }
      ]
    },
    f_double: {
      text: '主治醫師搖頭。',
      feedback: 'Carbapenem 造成的 valproate 濃度下降**加劑量通常也追不上**。要**避免併用**。',
      choices: [{ label: '重新決定', next: 'fix' }]
    },
    f_erta: {
      text: '主治醫師搖頭。',
      feedback: '這是 **carbapenem 類**的交互作用，ertapenem 一樣會降低 valproate。',
      choices: [{ label: '重新決定', next: 'fix' }]
    },
    end_good: {
      text: '改 amikacin（監測濃度與 Cr）並暫時加 levetiracetam，valproate 濃度回升，沒有再發作。',
      ending: {
        grade: 'good',
        title: 'Carbapenem-valproate interaction',
        pearls: [
          'Carbapenem 讓 valproate 濃度大降 -> 癲癇發作；避免併用',
          'Carbapenem 本身也可誘發 seizure（老人、腎差、CNS 病變）',
          'ESBL 首選 carbapenem，有交互作用時依藥敏找替代'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id19-fq',
  chapter: 'ID19',
  title: '八十歲的 levofloxacin',
  patient: '82 歲男性 · 心房顫動',
  summary: '社區型肺炎要出院改口服，住院醫師開了 levofloxacin。藥師打電話來。',
  cards: ['id-fq', 'id-cap-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。潘伯伯 CAP 用 ceftriaxone + azithromycin 改善，準備出院改口服 **levofloxacin**。痰培養：**S. pneumoniae**（amoxicillin S）。',
        '用藥：**amiodarone**、**warfarin**、**鈣片**、**鐵劑**。EKG：**QTc 488 ms**。',
        '去年因為腹主動脈瘤 4.2 cm 在追蹤。'
      ],
      clue: ['82M；CAP，**S. pneumoniae（amoxicillin S）**', '**Amiodarone、warfarin、鈣、鐵**', '**QTc 488**', '**腹主動脈瘤**'],
      choices: [{ label: '審查', next: 'review' }]
    },
    review: {
      text: '藥師列出了疑慮。你怎麼處理？',
      choices: [
        { label: '**避免 FQ**：QTc 延長 + amiodarone、warfarin INR 上升、鈣鐵降低吸收、主動脈瘤、老人肌腱與 CNS 風險；依藥敏改 **amoxicillin**', next: 'end_good' },
        { label: 'Levofloxacin 和鈣、鐵間隔兩小時吃就好', next: 'r_sep' },
        { label: '改 moxifloxacin', next: 'r_moxi' }
      ]
    },
    r_sep: {
      text: '主治醫師搖頭。',
      feedback: '分開吃只解決吸收問題。**QTc 488 + amiodarone**、warfarin 交互作用、主動脈瘤、老人肌腱斷裂與 CNS 副作用都還在。藥敏 amoxicillin 敏感，就用 amoxicillin。',
      choices: [{ label: '重新決定', next: 'review' }]
    },
    r_moxi: {
      text: '主治醫師搖頭。',
      feedback: 'Moxifloxacin 一樣是 FQ，**QTc 延長**和其他問題都一樣。',
      choices: [{ label: '重新決定', next: 'review' }]
    },
    end_good: {
      text: '改 amoxicillin 完成療程，INR 穩定。',
      ending: {
        grade: 'good',
        title: 'FQ 的安全性',
        pearls: [
          'QTc 延長（除了 delafloxacin）；避免併用其他延長 QT 的藥',
          '肌腱炎與斷裂、主動脈瘤、周邊神經病變、MG 惡化、老人 CNS',
          'Warfarin INR 上升；鈣、鐵、鎂、鋁、鋅降低吸收',
          '有窄效敏感藥就不用 FQ'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id19-amg',
  chapter: 'ID19',
  title: 'Gentamicin 要打多少',
  patient: '45 歲男性 · 肥胖',
  summary: '需要 gentamicin，藥局問你劑量要用哪個體重算。',
  cards: ['id-amg', 'id-abx-path'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。周先生身高 170 cm、**體重 110 kg**（**IBW 66 kg**）。複雜性 UTI，培養 PsA 只對 aminoglycoside 敏感，決定用 **extended-interval** aminoglycoside（腎功能正常、沒有心內膜炎、燒傷或水腫）。'
      ],
      clue: ['45M；**ABW 110 kg、IBW 66 kg**（> 20%）', 'Extended-interval AG；腎功能正常'],
      choices: [{ label: '算劑量', next: 'dose' }]
    },
    dose: {
      text: 'Gentamicin 5 mg/kg 的「kg」用多少？',
      choices: [
        { label: '**Obese dosing weight = 66 + 0.4 x (110 - 66) ≈ 84 kg** -> 約 **420 mg**', next: 'level' },
        { label: '實際體重 110 kg -> 550 mg', next: 'd_abw' },
        { label: 'IBW 66 kg -> 330 mg', next: 'd_ibw' }
      ]
    },
    d_abw: {
      text: '主治醫師搖頭。',
      feedback: 'Aminoglycoside 是親水性，不太分布到脂肪。用實際體重會**過量**（腎毒性、耳毒性）。體重超過 IBW 20% 用 **obese dosing weight**。',
      choices: [{ label: '重新計算', next: 'dose' }]
    },
    d_ibw: {
      text: '主治醫師搖頭。',
      feedback: '用 IBW 會**劑量不足**。肥胖病人的分布體積仍比 IBW 大，用 **IBW + 0.4 x（ABW - IBW）**。',
      choices: [{ label: '重新計算', next: 'dose' }]
    },
    level: {
      text: '第一劑之後要怎麼監測？',
      choices: [
        { label: '給藥後 **6-14 h** 抽濃度，用 **nomogram** 決定間隔；之後**每週**濃度、**每週三次 Cr**；療程 > 14 天每週聽力', next: 'twist' },
        { label: '第 3 劑前抽 trough，目標 < 1', next: 'l_trad' }
      ]
    },
    l_trad: {
      text: '主治醫師搖頭。',
      feedback: '那是 **traditional dosing** 的監測。Extended-interval 是第一劑後 6-14 h 抽一個濃度，配合 nomogram。',
      choices: [{ label: '重新決定', next: 'level' }]
    },
    twist: {
      text: '隔壁床的病人是 **E. faecalis 心內膜炎**，主治醫師要用 ampicillin + gentamicin。可以也用 extended-interval 嗎？',
      choices: [
        { label: '**不行**：心內膜炎、燒傷 > 20%、全身水腫、CrCl < 30 都要用 **traditional dosing**', next: 'end_good' },
        { label: '可以，比較方便', next: 't_ie' }
      ]
    },
    t_ie: {
      text: '主治醫師搖頭。',
      feedback: '**心內膜炎**要用 traditional dosing（synergy 需要的是持續的濃度）。燒傷 > 20%、全身水腫、CrCl < 30 也一樣。',
      choices: [{ label: '重新回答', next: 'twist' }]
    },
    end_good: {
      text: '周先生依 nomogram 每 24 小時給藥，療程中腎功能穩定。',
      ending: {
        grade: 'good',
        title: 'Aminoglycoside dosing',
        pearls: [
          '肥胖：obese dosing weight = IBW + 0.4 x（ABW - IBW）',
          'Extended-interval：5 mg/kg（amikacin 15），6-14 h 濃度 + nomogram',
          'Traditional：心內膜炎、燒傷 > 20%、水腫、CrCl < 30',
          '腎毒性、耳毒性；避免其他腎毒性藥'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id19-vanco',
  chapter: 'ID19',
  title: '打 vancomycin 時整個人紅了',
  patient: '52 歲女性 · 蜂窩性組織炎',
  summary: 'Vancomycin 打到一半，臉和上半身突然變得通紅、發癢。',
  cards: ['id-gp-agents', 'id-pcn'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。黃女士複雜性軟組織感染，用 **vancomycin 1.5 g + pip-tazo**。Vancomycin 打了 30 分鐘（護理師加快了速度），她的**臉、頸部、上胸變得通紅**、發癢。',
        '**血壓穩定**、沒有喘鳴、沒有嘴唇或舌頭腫、沒有蕁麻疹。'
      ],
      clue: ['52F；vancomycin **輸注太快**', '**臉、頸、上胸潮紅**、癢', '血壓穩定、無呼吸道症狀'],
      choices: [{ label: '判斷', next: 'react' }]
    },
    react: {
      text: '這是什麼？',
      choices: [
        { label: '**Vancomycin infusion reaction**（組織胺釋放）：**放慢輸注**（>= 1 小時/g）、給抗組織胺；**不是過敏**，可以繼續用', next: 'aki' },
        { label: 'Vancomycin 過敏，病歷標註並改 daptomycin', next: 'r_allergy' }
      ]
    },
    r_allergy: {
      text: '主治醫師搖頭。',
      feedback: '這是**輸注速度太快**造成的組織胺反應，不是 IgE 過敏。放慢速度、抗組織胺預防即可，不要標成過敏。',
      choices: [{ label: '重新判斷', next: 'react' }]
    },
    aki: {
      text: '第 4 天：Cr 從 0.8 升到 **1.7**。培養：**MSSA**。',
      clue: ['Cr 0.8 -> 1.7（vanco + pip-tazo）', '**MSSA**'],
      choices: [
        { label: '**Vancomycin + pip-tazo 會增加腎毒性**；MSSA 就改 **cefazolin**（或 oxacillin），兩個都停', next: 'end_good' },
        { label: '停 pip-tazo，vancomycin 繼續', next: 'a_vanco' }
      ]
    },
    a_vanco: {
      text: '主治醫師搖頭。',
      feedback: 'MSSA 用 **β-lactam（cefazolin、oxacillin）**效果比 vancomycin 好，也沒有這種腎毒性。',
      choices: [{ label: '重新決定', next: 'aki' }]
    },
    end_good: {
      text: '改 cefazolin 後 Cr 三天內回到 0.9，傷口好轉。',
      ending: {
        grade: 'good',
        title: 'Vancomycin 的輸注反應與腎毒性',
        pearls: [
          'Infusion reaction：輸注 >= 1 h/g、抗組織胺；不是過敏',
          'Vanco + pip-tazo 腎毒性增加',
          'MSSA 換 β-lactam',
          '嚴重 MRSA：AUC 400-600 給藥'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id19-allergy',
  chapter: 'ID19',
  title: 'Penicillin 過敏性休克病史',
  patient: '61 歲男性 · COPD',
  summary: 'Pseudomonas 肺炎，但他以前打 penicillin 休克過。',
  cards: ['id-carba', 'id-ceph', 'id-pcn'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        'MICU。郭先生 COPD，這次 **P. aeruginosa** 肺炎（cefepime S、pip-tazo S、**aztreonam S**、cipro R、tobramycin S）。',
        '病歷記載：十年前打 penicillin 後**全身蕁麻疹、喉頭腫、血壓下降**，送 ICU。'
      ],
      clue: ['61M；**PsA 肺炎**（aztreonam S、cipro R）', '**PCN anaphylaxis 病史**'],
      choices: [{ label: '選藥', next: 'choose' }]
    },
    choose: {
      text: '嚴重的立即型 PCN 過敏。',
      choices: [
        { label: '**Aztreonam**：只涵蓋需氧 GN（含 PsA），**和其他 β-lactam 沒有交叉過敏**', next: 'end_good' },
        { label: 'Cefepime，cephalosporin 交叉過敏很少', next: 'c_fep' },
        { label: 'Meropenem', next: 'c_mero' }
      ]
    },
    c_fep: {
      text: '主治醫師搖頭。',
      feedback: '交叉過敏雖少，但**嚴重 PCN 過敏（anaphylaxis）**的人，沒做皮膚測試或 desensitization 前不要用 cephalosporins。',
      choices: [{ label: '重新決定', next: 'choose' }]
    },
    c_mero: {
      text: '主治醫師搖頭。',
      feedback: 'Carbapenem 也有少量交叉過敏，嚴重 PCN 過敏者沒做皮膚測試或 desensitization 前要避免；而且不需要用到這麼廣。',
      choices: [{ label: '重新決定', next: 'choose' }]
    },
    end_good: {
      text: '用 aztreonam 治療兩週，肺炎痊癒。轉介過敏科做 penicillin 過敏評估。',
      ending: {
        grade: 'good',
        title: 'Severe PCN allergy and Pseudomonas',
        pearls: [
          '嚴重立即型 PCN 過敏：cephalosporins、carbapenems 先皮膚測試或 desensitization',
          'Aztreonam 與其他 β-lactam 無交叉過敏；只涵蓋需氧 GN（含 PsA）',
          'Aztreonam 對 MBL 穩定'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id19-orders',
  chapter: 'ID19',
  title: '藥局的五通電話',
  patient: '感染科值班 · 處方審查',
  summary: '值班一晚，藥局打來問了好幾張抗生素處方。哪些真的有問題？',
  cards: ['id-misc-abx', 'id-gp-agents', 'id-macro-sxt-tcn', 'id-fq'],
  start: 'intro',
  nodes: {
    intro: {
      text: '夜班。藥局把今晚有疑問的抗生素處方整理給你。',
      choices: [{ label: '逐一審查', next: 'orders' }]
    },
    orders: {
      text: '勾選**有問題、需要更改**的處方。',
      checklist: {
        prompt: '勾選需要更改的處方',
        submit: '送出',
        next: 'end_check',
        options: [
          { id: 'nf', group: '處方', label: '86 歲女性 cystitis，**CrCl 22**，nitrofurantoin 100 mg bid', key: true, reveal: true,
            result: '改 fosfomycin 3 g 單次', clue: 'Nitrofurantoin：CrCl < 30 避免',
            miss: 'Nitrofurantoin 在 **CrCl < 30** 要避免（療效差、毒性增加）。' },
          { id: 'dapto', group: '處方', label: 'MRSA **肺炎**，daptomycin 6 mg/kg', key: true, reveal: true,
            result: '改 vancomycin 或 linezolid', clue: 'Daptomycin 不能治肺炎',
            miss: 'Daptomycin 被**肺表面張力素失活**，不能治肺炎。' },
          { id: 'tige', group: '處方', label: 'CRE **菌血症**，tigecycline 單用', key: true, reveal: true,
            result: '改新一代 β-lactam（依機轉）', clue: 'Tigecycline 不用於菌血症',
            miss: 'Tigecycline **血中濃度低**，不用於菌血症，且全因死亡率上升。' },
          { id: 'moxi', group: '處方', label: 'Pyelonephritis，**moxifloxacin**', key: true, reveal: true,
            result: '改 ciprofloxacin 或 levofloxacin（依藥敏）', clue: 'Moxifloxacin 不用於 UTI',
            miss: 'Moxifloxacin 幾乎不經尿排出，**不用於 UTI**。' },
          { id: 'metro', group: '處方', label: '肝膿瘍出院帶 metronidazole，病人說**每天都要喝兩瓶啤酒**', key: true, reveal: true,
            result: '衛教療程中與停藥後禁酒', clue: 'Metronidazole：disulfiram-like 反應',
            miss: 'Metronidazole 與酒精會有 **disulfiram-like** 反應，一定要衛教。' },
          { id: 'cefaz', group: '處方', label: 'MSSA 菌血症，cefazolin 2 g q8h', result: '沒問題',
            waste: '這張處方是對的：MSSA 菌血症首選 cefazolin 或 oxacillin。' },
          { id: 'doxy', group: '處方', label: '門診 CAP 無共病，doxycycline 100 mg bid', result: '沒問題',
            waste: '這張處方是對的：無共病門診 CAP 可以用 doxycycline。' },
          { id: 'fosfo', group: '處方', label: 'VRE cystitis，fosfomycin 3 g 單次', result: '沒問題',
            waste: '這張處方是對的：fosfomycin 涵蓋 VRE，可治單純 cystitis。' }
        ]
      }
    },
    end_check: {
      text: '天亮前所有有問題的處方都改好了。',
      ending: {
        grade: 'good',
        title: '抗生素處方審查',
        pearls: [
          'Nitrofurantoin：CrCl < 30 避免；只用於單純 cystitis',
          'Daptomycin：不能治肺炎；監測 CK',
          'Tigecycline：不用於菌血症',
          'Moxifloxacin：不用於 UTI',
          'Metronidazole：禁酒（disulfiram-like）'
        ]
      }
    }
  }
});
