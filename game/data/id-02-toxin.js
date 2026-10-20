// ID 02 Toxin-mediated infections: C. difficile, tetanus, toxic shock syndrome.
// Source: Washington Manual Ch 14 (source/Washington ID.txt, lines 52-128).

RPG.registerCards('ID2', [
  {
    id: 'id-cdi-path',
    title: 'C. difficile 致病機轉',
    points: [
      '抗生素破壞**大腸正常菌叢**（colonization resistance 喪失，次級膽酸減少）-> 攝入的 **spores** 發芽、增生',
      '**Toxin A（TcdA）、toxin B（TcdB）**：glucosylate Rho GTPases -> 細胞骨架瓦解、tight junction 打開 -> 分泌性腹瀉、發炎',
      '黏膜壞死、纖維蛋白與白血球形成 **pseudomembranes**；重症 -> **ileus、toxic megacolon、穿孔**',
      '最常見誘因：**clindamycin、FQ、廣效 penicillins、cephalosporins**',
      'Spores 耐酒精 -> 洗手要用肥皂與水；環境用含氯消毒',
      '可**無症狀帶菌**（toxigenic carrier）-> 只驗有腹瀉的人；治好後不需驗 clearance',
      '**Bezlotoxumab**：抗 toxin B 單株抗體，減少復發；**FMT** 重建菌叢'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-cdi',
    title: 'Clostridioides difficile infection',
    points: [
      '**>= 3 次不成形便 / 24 h**，到嚴重致命的 pseudomembranous colitis；腹痛、絞痛、低燒、**白血球上升**',
      '**Fulminant**：ileus、toxic megacolon、穿孔、低血壓、休克',
      'DDx：抗生素相關的 **osmotic diarrhea**，停藥就好',
      'Dx：糞便驗 **GDH antigen、toxin、toxigenic gene**（PCR 或 EIA）；gold standard cytotoxin neutralization（慢）；多數實驗室合併使用',
      '**GDH (+)、toxin/toxigenic gene (-) = indeterminate**：nontoxigenic、無症狀帶菌、或 toxin 偽陰性的真 CDI',
      '**終點是不再腹瀉；不要驗 clearance**',
      '**重症避免止瀉藥**'
    ],
    table: {
      head: ['情境', '治療'],
      rows: [
        ['**初次**（嚴重或非嚴重）', '**Fidaxomicin 200 mg PO q12h x 10 d** 或 **vancomycin 125 mg PO q6h x 10 d**；盡量**停掉誘發的抗生素**'],
        ['**Fulminant**（ileus、megacolon、低血壓、休克）', '**會診外科** + **vancomycin 500 mg PO/NG q6h + metronidazole 500 mg IV q8h**；ileus 加 **rectal vancomycin**；可能需要 **colectomy**'],
        ['**復發**', 'Fidaxomicin（標準或 **extended-pulsed**）或 oral vancomycin **pulsed-tapered**；6 個月內復發可加 **bezlotoxumab**'],
        ['**多次復發**', '**Fecal microbiota transplantation**']
      ]
    },
    note: 'IV vancomycin 不會進入腸腔，CDI 一定要口服（或 NG、灌腸）。',
    refs: ['CID 2021;73:755（IDSA/SHEA CDI 2021 focused update）']
  },
  {
    id: 'id-tetanus-path',
    title: 'Tetanus 致病機轉',
    points: [
      '**C. tetani spores** 污染傷口（深、壞死、缺氧的傷口最適合發芽）',
      '細菌本身留在局部，釋出 **tetanospasmin** -> 經運動神經**逆行運輸**到脊髓與腦幹',
      'Toxin 切斷 synaptobrevin，阻斷抑制性 interneuron 釋放 **GABA、glycine** -> 運動神經失去煞車 -> **強直、痙攣**',
      '最短的神經最早受影響 -> **trismus、risus sardonicus**、頸部；之後全身痙攣、**自主神經失調**',
      'Toxin 結合後**無法被中和**：TIG 只中和尚未結合的 toxin；恢復要等新的神經末梢長出（數週）',
      '患病**不會產生免疫**（toxin 量太少）-> 痊癒後仍要打完疫苗'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-tetanus',
    title: 'Tetanus',
    points: [
      '最好的處理是**預防接種**',
      '**臨床診斷**：劇痛的肌肉痙攣與強直，之後自主神經失調；從臉部（**trismus、risus sardonicus**）與頸部開始；**通常沒有譫妄、高燒**',
      '**Human tetanus immunoglobulin 500 U IM**，部分**浸潤在傷口周圍**中和未結合的 toxin',
      '**Tetanus toxoid** 主動免疫，打在**另一個部位**（對側肢體）',
      '**傷口清創**非常重要',
      '抗生素：**metronidazole 500 mg IV q6-8h** 或 **penicillin G 2-4 MU IV q4-6h**，**7-10 天**',
      '痙攣：**benzodiazepines** 或神經肌肉阻斷劑'
    ],
    refs: ['MMWR Recomm Rep 2018;67(2):1（ACIP Tdap）']
  },
  {
    id: 'id-tss-path',
    title: 'Toxic shock syndrome 致病機轉',
    points: [
      'S. aureus（**TSST-1**、enterotoxins）與 **GAS**（SpeA、SpeC 等）產生 **superantigen**',
      'Superantigen 不經抗原處理，直接把 **MHC II 與 T cell receptor Vβ** 綁在一起 -> 活化多達 **20% 的 T cells**（一般抗原 < 0.01%）',
      '大量 **IL-2、TNF、IFN-γ** -> 微血管滲漏、休克、多重器官衰竭；皮膚 **erythroderma**、之後**手掌腳掌脫皮**',
      '**Clindamycin** 抑制 ribosome，**減少 toxin 產生**（不受 inoculum effect 影響）-> 合併 β-lactam',
      '**IVIG** 含中和 superantigen 的抗體',
      '沒有 **TSST-1 抗體**的人易感；棉條等異物提供細菌增生與產毒的環境'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-tss',
    title: 'Toxic shock syndrome（Table 14-1）',
    table: {
      head: ['', 'Staphylococcal TSS', 'Streptococcal TSS'],
      rows: [
        ['情境', '手術傷口、燒傷、陰道炎、**棉條**、**鼻腔填塞**', '侵襲性 GAS，**80% 合併 necrotizing fasciitis 或 myositis**'],
        ['表現', '發燒、低血壓、**手掌腳掌脫皮的 erythroderma**；嘔吐、腹瀉、肌痛、意識改變', '**突然劇痛**（局部或全身）；erythroderma 較少'],
        ['血液培養', '**通常陰性**（仍要抽，排除其他病原）', '**通常陽性**；ASO 上升'],
        ['死亡率', '月經相關 < 3%', '**30-70%**'],
        ['抗生素', '**Oxacillin 2 g IV q4h**（或 vancomycin 1 g q12h）**+ clindamycin 900 mg IV q8h**，10-14 d', '**Penicillin G 4 MU IV q4h + clindamycin 900 mg IV q8h**，10-14 d'],
        ['輔助', 'IVIG 重症可能有用（劑量可能需更高）', '**IVIG 1 g/kg day 1，0.5 g/kg day 2-3**'],
        ['處置', '移除**棉條**與異物；傷口清創；**TSST-1 抗體陰性者以後避免棉條**', '壞死性感染**幾乎都要手術清創**']
      ]
    },
    points: [
      'Clindamycin 加上去是為了**減少 toxin 產生**',
      '鑑別：**RMSF、leptospirosis** 等要用適當檢查排除'
    ]
  }
]);

RPG.registerCase({
  id: 'id2-cdi',
  chapter: 'ID2',
  title: '肺炎治療第六天的腹瀉',
  patient: '76 歲女性 · 肺炎住院中',
  summary: 'Ceftriaxone 打到第六天，開始一天拉七八次水便。',
  cards: ['id-cdi-path', 'id-cdi', 'id-deesc'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般病房。陳奶奶因為社區型肺炎住院，**ceftriaxone + azithromycin** 第 6 天，肺炎已經改善、退燒三天。',
        '昨天開始**一天 7-8 次水便**，下腹絞痛，T 37.9°C。'
      ],
      clue: ['76F；CAP，ceftriaxone + azithro 第 6 天，肺炎已改善', '**水便 7-8 次/日**、腹絞痛、低燒'],
      choices: [{ label: '評估腹瀉', next: 'workup' }]
    },
    workup: {
      text: '你懷疑 CDI。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'stop',
        options: [
          { id: 'stool', group: '檢驗', label: '糞便 C. difficile（GDH + toxin，必要時 PCR）', key: true, reveal: true,
            result: '**GDH (+)、toxin EIA (+)**', clue: '**C. difficile：GDH (+)、toxin (+)**',
            miss: '有症狀的腹瀉才驗 C. difficile，而且要送。' },
          { id: 'sev', group: '檢驗', label: 'CBC、Cr、albumin', key: true, reveal: true,
            result: 'WBC **13,800**；Cr 0.9（baseline 0.8）', clue: 'WBC 13,800；Cr 正常',
            miss: '白血球和 Cr 用來評估嚴重度。' },
          { id: 'abd', group: '理學', label: '腹部檢查（腹脹、腸音、腹膜徵象）', key: true, reveal: true,
            result: '輕度壓痛，腸音增加，無腹脹、無腹膜徵象', clue: '無 ileus、無腹膜徵象',
            miss: '要先排除 fulminant colitis（ileus、megacolon）。' },
          { id: 'iso', group: '感控', label: 'Contact precautions；肥皂洗手', key: true, reveal: true,
            result: '已執行', clue: '接觸隔離',
            miss: 'C. difficile spores 酒精殺不死，要隔離、用肥皂與水洗手。' },
          { id: 'lop', group: '治療', label: 'Loperamide 止瀉', result: '已撤回',
            waste: 'CDI 避免止瀉藥，會讓毒素滯留、增加 megacolon 風險。' },
          { id: 'ct', group: '影像', label: '腹部 CT', result: '已撤回',
            waste: '沒有腹脹、ileus、腹膜徵象，不需要常規 CT。' }
        ]
      }
    },
    stop: {
      text: 'CDI 確診。肺炎抗生素怎麼處理？',
      choices: [
        { label: '肺炎已經改善、療程夠了，**停掉 ceftriaxone、azithromycin**', next: 'tx' },
        { label: '肺炎療程還沒滿 14 天，繼續打', next: 's_cont' }
      ]
    },
    s_cont: {
      text: '主治醫師搖頭。',
      feedback: '**盡量停掉誘發的抗生素**。CAP 治療 5 天以上、退燒 48 h 已經足夠，繼續用只會讓 CDI 更難治、更容易復發。',
      choices: [{ label: '重新決定', next: 'stop' }]
    },
    tx: {
      text: 'CDI 初次發作，非 fulminant。治療？',
      choices: [
        { label: '**Fidaxomicin 200 mg PO q12h x 10 天**（或 **vancomycin 125 mg PO q6h x 10 天**）', next: 'clear' },
        { label: 'Metronidazole 500 mg PO q8h x 10 天', next: 't_metro' },
        { label: 'Vancomycin 1 g **IV** q12h', next: 't_iv' }
      ]
    },
    t_metro: {
      text: '主治醫師搖頭。',
      feedback: '初次 CDI 的第一線是 **fidaxomicin** 或 **oral vancomycin**。Metronidazole 已經不是第一線。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_iv: {
      text: '主治醫師搖頭。',
      feedback: '**IV vancomycin 不會分泌到腸腔**，對 CDI 無效。要口服。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    clear: {
      text: '三天後腹瀉減少到一天一次成形便。護理師問：出院前要不要再驗一次糞便確認 C. difficile 陰性？',
      choices: [
        { label: '**不需要**，終點是腹瀉停止', next: 'recur' },
        { label: '要，確定 toxin 陰性再出院', next: 'c_test' }
      ]
    },
    c_test: {
      text: '主治醫師搖頭。',
      feedback: '**不要驗 clearance**。很多人治療後仍會帶菌、驗出陽性，只會導致不必要的重複治療。',
      choices: [{ label: '重新決定', next: 'clear' }]
    },
    recur: {
      text: '出院六週後，陳奶奶又開始每天水便 6 次，糞便 toxin 陽性。這是 6 個月內第一次復發。',
      clue: ['6 週後**復發**'],
      choices: [
        { label: '**Fidaxomicin**（標準或 extended-pulsed）或 **vancomycin pulsed-tapered**；可考慮加 **bezlotoxumab**', next: 'end_good' },
        { label: '重複一模一樣的 vancomycin 125 mg q6h x 10 天', next: 'r_same' },
        { label: '直接安排 FMT', next: 'r_fmt' }
      ]
    },
    r_same: {
      text: '主治醫師搖頭。',
      feedback: '復發要用 **fidaxomicin** 或 vancomycin **pulsed-tapered**；6 個月內復發可加 bezlotoxumab 減少再復發。',
      choices: [{ label: '重新決定', next: 'recur' }]
    },
    r_fmt: {
      text: '主治醫師搖頭。',
      feedback: 'FMT 用在**多次復發**、且已經接受適當抗生素治療之後。第一次復發先用抗生素方案。',
      choices: [{ label: '重新決定', next: 'recur' }]
    },
    end_good: {
      text: '用 fidaxomicin extended-pulsed 後沒有再復發。',
      ending: {
        grade: 'good',
        title: 'CDI 初次發作與復發',
        pearls: [
          '盡量停掉誘發的抗生素；避免止瀉藥',
          '初次：fidaxomicin 200 mg q12h 或 PO vancomycin 125 mg q6h，10 天',
          'IV vancomycin 無效；不驗 clearance',
          '復發：fidaxomicin 或 vanco pulsed-tapered ± bezlotoxumab；多次復發 -> FMT'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id2-fulminant',
  chapter: 'ID2',
  title: '肚子越來越脹',
  patient: '69 歲男性 · 骨髓炎術後',
  summary: '打 clindamycin 治療骨髓炎兩週，現在肚子脹得像鼓，血壓也掉了。',
  cards: ['id-cdi-path', 'id-cdi'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '骨科病房會診。黃先生糖尿病足骨髓炎術後，用 **clindamycin** 第 14 天。三天前開始腹瀉，今天反而**沒有排便**，**肚子越來越脹**。',
        'T 39.2°C、**BP 86/50**、HR 124。腹部**明顯脹大、腸音消失**、全腹壓痛。',
        'WBC **32,000**，lactate 4.1，Cr 2.3（baseline 1.0）。'
      ],
      clue: ['69M；**clindamycin** 14 天', '腹瀉後**無排便、腹脹、腸音消失**', '**BP 86/50**；WBC 32k；lactate 4.1；AKI'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: '你懷疑 fulminant CDI。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'axr', group: '影像', label: '腹部 X 光或 CT', key: true, reveal: true,
            result: '**橫結腸擴張 9 cm**，結腸壁增厚；無 free air', clue: '**Toxic megacolon**（橫結腸 9 cm）',
            miss: '要確認有沒有 megacolon、穿孔。' },
          { id: 'stool', group: '檢驗', label: 'C. difficile（直腸拭子或先前糞便）', key: true, reveal: true,
            result: '**Toxin (+)**', clue: 'C. difficile toxin (+)',
            miss: '還是要確認診斷。' },
          { id: 'surg', group: '會診', label: '**會診外科**', key: true, reveal: true,
            result: '外科醫師到床邊評估', clue: '外科已會診',
            miss: 'Fulminant CDI 一定要會診外科，可能需要 colectomy。' },
          { id: 'stopc', group: '用藥', label: '停 clindamycin', key: true, reveal: true,
            result: '已停；骨髓炎抗生素改由感染科重新評估', clue: '已停 clindamycin',
            miss: '盡量停掉誘發的抗生素。' },
          { id: 'fluid', group: '治療', label: '輸液、升壓劑', key: true, reveal: true,
            result: '輸液 2 L 後加 norepinephrine', clue: '休克處理中',
            miss: 'Septic shock 要同步復甦。' },
          { id: 'colono', group: '檢查', label: '大腸鏡確認 pseudomembranes', result: '已撤回',
            waste: 'Megacolon 時做大腸鏡有穿孔風險，診斷也已經足夠。' }
        ]
      }
    },
    tx: {
      text: 'Fulminant CDI 合併 ileus 與 toxic megacolon。藥物？',
      choices: [
        { label: '**Vancomycin 500 mg PO/NG q6h + metronidazole 500 mg IV q8h + rectal vancomycin**', next: 'end_good' },
        { label: 'Fidaxomicin 200 mg PO q12h', next: 't_fdx' },
        { label: 'Vancomycin 125 mg PO q6h', next: 't_low' },
        { label: 'Vancomycin IV + metronidazole IV', next: 't_iv' }
      ]
    },
    t_fdx: {
      text: '主治醫師搖頭。',
      feedback: 'Fulminant CDI 用**高劑量 vancomycin 500 mg PO/NG q6h + IV metronidazole**；有 ileus 時口服藥到不了大腸，加 **rectal vancomycin**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_low: {
      text: '主治醫師搖頭。',
      feedback: 'Fulminant 要 **500 mg q6h**，加 IV metronidazole；ileus 再加 rectal vancomycin。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_iv: {
      text: '主治醫師搖頭。',
      feedback: '**IV vancomycin 不會進入腸腔**。Vancomycin 要從口、NG 或直腸給；metronidazole 才用 IV（它會經膽汁與腸壁進入腸腔）。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '24 小時後血壓仍需升壓劑、lactate 上升，外科做了 **subtotal colectomy**。術後逐漸恢復。',
      ending: {
        grade: 'good',
        title: 'Fulminant CDI',
        pearls: [
          'Fulminant：ileus、toxic megacolon、低血壓、休克',
          '會診外科 + vanco 500 mg PO/NG q6h + metronidazole 500 mg IV q8h；ileus 加 rectal vanco',
          '有時需要 colectomy',
          'Clindamycin、FQ、廣效 penicillins、cephalosporins 是最常見誘因'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id2-tetanus',
  chapter: 'ID2',
  title: '嘴巴張不開',
  patient: '64 歲男性 · 菜農',
  summary: '十天前被生鏽的鐵釘刺到腳，這兩天嘴巴張不開，脖子和背一陣一陣地抽。',
  cards: ['id-tetanus-path', 'id-tetanus'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。鄭伯伯種菜，十天前在田裡被生鏽鐵釘刺穿左腳底，自己擦藥。兩天前開始**嘴巴張不開**、吞嚥困難，今天脖子和背**一陣一陣劇痛地抽緊**，碰到或有聲音就發作。',
        '意識清楚，T 37.4°C。臉部表情僵硬像在苦笑（**risus sardonicus**）。左腳底傷口紅腫、有黑色壞死組織。',
        '他不記得以前有沒有打過破傷風疫苗。'
      ],
      clue: ['64M；**生鏽鐵釘刺傷** 10 天前', '**Trismus**、risus sardonicus、陣發性痙攣', '意識清楚、**沒有高燒**', '左腳底傷口壞死；疫苗史不明'],
      choices: [{ label: '處置', next: 'tx' }]
    },
    tx: {
      text: '臨床診斷 tetanus。',
      checklist: {
        prompt: '醫囑：勾選你要的項目',
        submit: '送出醫囑',
        next: 'abx',
        options: [
          { id: 'tig', group: '免疫', label: '**Human tetanus immunoglobulin 500 U IM**，部分浸潤在傷口周圍', key: true, reveal: true,
            result: '已給', clue: 'TIG 500 U（部分傷口浸潤）',
            miss: 'TIG 中和還沒結合神經的 toxin，部分要浸潤傷口周圍。' },
          { id: 'toxoid', group: '免疫', label: '**Tetanus toxoid**（另一側肢體）', key: true, reveal: true,
            result: '已打在右上臂', clue: 'Toxoid 打在對側',
            miss: '得過破傷風不會產生免疫，要同時開始主動免疫，而且打在和 TIG 不同的部位。' },
          { id: 'debr', group: '處置', label: '傷口**清創**', key: true, reveal: true,
            result: '外科清除壞死組織', clue: '傷口已清創',
            miss: '清創移除產毒的細菌和缺氧環境，非常重要。' },
          { id: 'bzd', group: '治療', label: 'Benzodiazepine 控制痙攣；安靜、暗的房間；評估呼吸道', key: true, reveal: true,
            result: 'Diazepam IV；轉 ICU 監測', clue: 'Benzodiazepine；ICU',
            miss: '痙攣用 benzodiazepine，嚴重時神經肌肉阻斷劑，要監測呼吸道。' },
          { id: 'lp', group: '檢查', label: 'LP', result: '已撤回',
            waste: 'Tetanus 是臨床診斷，CSF 正常；意識清楚、沒有發燒，不需要 LP。' },
          { id: 'wait', group: '檢查', label: '傷口培養確認 C. tetani 再治療', result: '已撤回',
            waste: '診斷是臨床的，培養常常陰性，不能等。' }
        ]
      }
    },
    abx: {
      text: '抗生素？',
      choices: [
        { label: '**Metronidazole 500 mg IV q6-8h**（或 penicillin G），**7-10 天**', next: 'end_good' },
        { label: '不需要抗生素，TIG 就夠了', next: 'a_none' },
        { label: 'Cefazolin，蓋傷口的 S. aureus', next: 'a_cef' }
      ]
    },
    a_none: {
      text: '主治醫師搖頭。',
      feedback: '傷口裡的 C. tetani 還在持續產毒。抗生素加清創才能移除來源：**metronidazole 或 penicillin G，7-10 天**。',
      choices: [{ label: '重新決定', next: 'abx' }]
    },
    a_cef: {
      text: '主治醫師搖頭。',
      feedback: '要涵蓋 **C. tetani** 這個厭氧菌：metronidazole 500 mg IV q6-8h 或 penicillin G 2-4 MU IV q4-6h。',
      choices: [{ label: '重新決定', next: 'abx' }]
    },
    end_good: {
      text: '鄭伯伯在 ICU 待了三週，一度氣切。四週後痙攣緩解，出院前完成第二劑 toxoid。',
      ending: {
        grade: 'good',
        title: 'Generalized tetanus',
        pearls: [
          '臨床診斷：trismus、risus sardonicus、痙攣；意識清楚、通常無高燒',
          'TIG 500 U IM（部分浸潤傷口）+ toxoid 打在另一處',
          '清創 + metronidazole 或 penicillin G 7-10 天',
          'Benzodiazepine 控制痙攣；得過不會免疫，要打完疫苗'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id2-tss-staph',
  chapter: 'ID2',
  title: '月經第三天的休克',
  patient: '19 歲女性 · 大學生',
  summary: '高燒、嘔吐、腹瀉，全身像曬傷一樣紅，血壓 80。',
  cards: ['id-tss-path', 'id-tss'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。小魏月經第 3 天，昨晚開始高燒 39.8°C、嘔吐、水瀉、全身肌肉痠痛，今天頭昏站不起來。',
        '**BP 82/48**、HR 132。全身**彌漫性紅疹像曬傷**，結膜充血。',
        '她說一直用**棉條**，這次因為考試，一條放了超過 12 小時。'
      ],
      clue: ['19F；月經第 3 天，**棉條**放 > 12 h', '高燒、嘔吐、腹瀉、肌痛', '**BP 82/48**；**diffuse erythroderma**'],
      choices: [{ label: '處置', next: 'workup' }]
    },
    workup: {
      text: '你懷疑 staphylococcal TSS。',
      checklist: {
        prompt: '醫囑：勾選你要的項目',
        submit: '送出醫囑',
        next: 'tx',
        options: [
          { id: 'remove', group: '處置', label: '**移除棉條**、骨盆檢查', key: true, reveal: true,
            result: '取出棉條；陰道黏膜充血', clue: '已移除棉條',
            miss: '最重要的感染源控制：移除棉條與任何異物。' },
          { id: 'bcx', group: '培養', label: '血液培養 x 2', key: true, reveal: true,
            result: '（之後）**陰性**', clue: '血液培養陰性',
            miss: 'Staph TSS 血液培養通常陰性，但仍要抽，排除其他病原。' },
          { id: 'vag', group: '培養', label: '陰道與棉條培養', key: true, reveal: true,
            result: '（之後）**MSSA**', clue: '陰道：**MSSA**',
            miss: '找產毒的 S. aureus。' },
          { id: 'fluid', group: '治療', label: '大量輸液', key: true, reveal: true,
            result: '3 L 後 BP 96/58', clue: '輸液後 BP 96/58',
            miss: 'TSS 有嚴重的微血管滲漏，需要大量輸液。' },
          { id: 'lab', group: '檢驗', label: 'Cr、CK、肝功能、PLT', result: 'Cr 2.1；CK 3,400；AST 180；PLT 92k', clue: '多重器官受損（腎、肌肉、肝、PLT）' },
          { id: 'lepto', group: '檢驗', label: 'Leptospira 檢驗（有沒有接觸污水、鼠類）', result: '無暴露；檢驗陰性' }
        ]
      }
    },
    tx: {
      text: '經驗性抗生素？',
      choices: [
        { label: '**Vancomycin + clindamycin 900 mg IV q8h**（藥敏前先蓋 MRSA）', next: 'report' },
        { label: 'Vancomycin 單用', next: 't_noclinda' },
        { label: 'Clindamycin 單用', next: 't_clinda' }
      ]
    },
    t_noclinda: {
      text: '主治醫師搖頭。',
      feedback: 'TSS 要加 **clindamycin 減少 toxin 產生**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_clinda: {
      text: '主治醫師搖頭。',
      feedback: 'Clindamycin 是用來減少 toxin，要合併一個殺菌的藥（oxacillin 或 vancomycin）。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    report: {
      text: '陰道培養長出 **MSSA**。血壓穩定了。',
      clue: ['MSSA'],
      choices: [
        { label: '改 **oxacillin 2 g IV q4h + clindamycin**，共 **10-14 天**', next: 'future' },
        { label: '維持 vancomycin + clindamycin', next: 'r_vanco' }
      ]
    },
    r_vanco: {
      text: '主治醫師搖頭。',
      feedback: 'MSSA 用 **oxacillin** 殺菌效果比 vancomycin 好。確認 MSSA 就換。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    future: {
      text: '一週後她手掌和腳掌開始大片**脫皮**。出院前她問：「以後還能用棉條嗎？」',
      choices: [
        { label: '驗 **TSST-1 抗體**；陰性就**避免棉條**等陰道異物', next: 'end_good' },
        { label: '可以，記得 8 小時內換就好', next: 'f_ok' }
      ]
    },
    f_ok: {
      text: '主治醫師搖頭。',
      feedback: 'TSST-1 抗體陰性的人復發風險高，**以後要避免棉條**。',
      choices: [{ label: '重新回答', next: 'future' }]
    },
    end_good: {
      text: 'TSST-1 抗體陰性。她改用衛生棉，之後沒有再發作。',
      ending: {
        grade: 'good',
        title: 'Menstrual staphylococcal TSS',
        pearls: [
          '發燒 + 低血壓 + erythroderma -> 手掌腳掌脫皮',
          '移除棉條與異物；血液培養通常陰性',
          'Oxacillin（或 vancomycin）+ clindamycin，10-14 天；clindamycin 減少 toxin',
          'TSST-1 抗體陰性 -> 避免棉條'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id2-tss-strep',
  chapter: 'ID2',
  title: '撞了一下的大腿',
  patient: '45 歲男性 · 搬家工人',
  summary: '三天前大腿撞到桌角，今天痛到受不了，發燒，血壓掉了。',
  cards: ['id-tss-path', 'id-tss', 'id-nf'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。邱先生三天前搬家時右大腿撞到桌角，只有瘀青。今天突然**劇痛**，痛到不能走，發燒 39.5°C。',
        '**BP 84/50**、HR 136。右大腿腫脹、皮膚只有淡紅，但**輕碰就痛到大叫**，痛的範圍比紅腫大得多。',
        'Cr 2.4，CK **8,600**，PLT 76k。一週前小孩得了鏈球菌咽炎。'
      ],
      clue: ['45M；大腿鈍挫傷 3 天', '**疼痛與外觀不成比例**', '**BP 84/50**；Cr 2.4；**CK 8,600**；PLT 76k', '小孩一週前 strep 咽炎'],
      choices: [{ label: '處置', next: 'tx' }]
    },
    tx: {
      text: '你懷疑 GAS 壞死性筋膜炎或肌炎合併 streptococcal TSS。',
      checklist: {
        prompt: '醫囑：勾選你要的項目',
        submit: '送出醫囑',
        next: 'report',
        options: [
          { id: 'surg', group: '會診', label: '**緊急外科探查清創**', key: true, reveal: true,
            result: '進開刀房：筋膜灰色壞死，手指探查**無阻力**，肌肉部分壞死', clue: '**Necrotizing fasciitis + myositis**',
            miss: '壞死性感染的 STSS 幾乎都要手術清創，越快越好。' },
          { id: 'bcx', group: '培養', label: '血液培養、術中組織培養', key: true, reveal: true,
            result: '血液與組織：**Group A Streptococcus**', clue: '**GAS 菌血症**',
            miss: 'Strep TSS 血液培養通常陽性。' },
          { id: 'abx', group: '用藥', label: '**Penicillin G 4 MU IV q4h + clindamycin 900 mg IV q8h**（加 vancomycin 直到排除 MRSA）', key: true, reveal: true,
            result: '已給', clue: 'PCN G + clindamycin（+ vanco）',
            miss: 'β-lactam 殺菌 + clindamycin 減少 toxin。' },
          { id: 'ivig', group: '用藥', label: '**IVIG 1 g/kg day 1，0.5 g/kg day 2-3**', key: true, reveal: true,
            result: '已給', clue: 'IVIG',
            miss: 'Streptococcal TSS 建議加 IVIG。' },
          { id: 'fluid', group: '治療', label: '輸液、升壓劑', key: true, reveal: true,
            result: '進行中', clue: '休克處理中',
            miss: '休克要同步處理。' },
          { id: 'mri', group: '影像', label: '先做 MRI 確認筋膜炎再決定開刀', result: '已撤回',
            waste: '臨床高度懷疑時要立即手術探查，影像只會延誤。' },
          { id: 'aso', group: '檢驗', label: 'ASO', result: '上升' }
        ]
      }
    },
    report: {
      text: '清創後第三天，血液與組織確認 **GAS**，沒有 S. aureus。血壓已經不用升壓劑。',
      choices: [
        { label: '停 vancomycin；**penicillin G + clindamycin** 繼續，共 **10-14 天**；需要時再清創', next: 'end_good' },
        { label: 'Penicillin G 單用就好，停 clindamycin', next: 'r_noclinda' },
        { label: '三種藥都打滿療程', next: 'end_vanco',
          why: '培養只有 GAS，沒有 MRSA 就停 vancomycin。' }
      ]
    },
    r_noclinda: {
      text: '主治醫師搖頭。',
      feedback: 'Strep TSS 的療程中 **clindamycin 一起用**，減少 toxin 產生。',
      choices: [{ label: '重新決定', next: 'report' }]
    },
    end_vanco: {
      text: '邱先生保住了腿，但 vancomycin 讓已經受損的腎功能更差，洗了兩次腎。',
      ending: {
        grade: 'ok',
        title: 'STSS 治療成功，但沒有降階',
        pearls: ['培養排除 MRSA -> 停 vancomycin']
      }
    },
    end_good: {
      text: '經過三次清創，邱先生保住了腿，腎功能恢復。家人也接受了評估。',
      ending: {
        grade: 'good',
        title: 'Streptococcal TSS with necrotizing fasciitis',
        pearls: [
          '突然劇痛、疼痛與外觀不成比例 -> 壞死性感染',
          'Strep TSS：80% 合併 NF/myositis；血液培養通常陽性；死亡率 30-70%',
          '緊急清創 + PCN G + clindamycin + IVIG',
          '壞死性感染先加 vancomycin，排除 MRSA 後停'
        ]
      }
    }
  }
});
