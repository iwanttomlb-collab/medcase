// ID 16 Sexually transmitted infections: sexual history, prevention, genital ulcers, syphilis, Mpox, vaginitis, urethritis/cervicitis, PID.
// Source: Washington Manual Ch 16 (source/Washington ID.txt, lines 2755-3149, Table 16-1).

RPG.registerCards('ID16', [
  {
    id: 'id-sti-path',
    title: 'STI 致病機轉',
    points: [
      '**T. pallidum**：穿過黏膜微小傷口，局部增生 -> 無痛硬下疳；很快**血行散播** -> 二期（皮疹含手掌腳掌、黏膜病灶、淋巴結）；可**早期侵犯 CNS、眼睛、內耳**（任何分期都可能）；沒有治療則潛伏，部分進展為三期（心血管、gumma）',
      'T. pallidum 分裂很慢（約 30 h）且對 penicillin 從未產生抗藥 -> **長效 benzathine penicillin**；CNS 需要高濃度 -> **IV aqueous PCN G**',
      '**N. gonorrhoeae**：pili 黏附柱狀上皮，引發強烈 PMN 反應 -> 膿性分泌物；抗原變異大、**抗藥性快速增加** -> 只剩 ceftriaxone 可靠；可**血行散播**（DGI：關節炎、腱鞘炎、膿疱）',
      '**C. trachomatis**：細胞內寄生（elementary body -> reticulate body），常**無症狀** -> 上行造成 **PID**、輸卵管瘢痕 -> 不孕、子宮外孕',
      '潰瘍性 STI 破壞黏膜屏障 -> **大幅增加 HIV 傳染**；**BV** 也增加 STI 與 HIV 風險',
      '**BV** 不是單一病原：保護性 **lactobacilli** 被厭氧菌取代 -> pH 上升、clue cells、胺類魚腥味'
    ],
    note: '致病機轉為一般教科書內容補充，Washington Manual 原文未詳述。'
  },
  {
    id: 'id-sti-hx',
    title: '性史與 STI 預防',
    points: [
      '初診、複診、預防性檢查、有 STI 症狀時都要問性史',
      '內容：**伴侶**（人數、性別認同）、**性行為型態**、保護措施、STI 病史、懷孕意向',
      '用**包容性語言**、不預設：「你的性伴侶是什麼性別？」；先徵求同意再問、再檢查',
      '**跨性別者** HIV 盛行率高；提供友善環境、問代名詞，不要預設性別、性傾向或性行為',
      '預防：保險套、定期篩檢與治療、疫苗、藥物預防',
      '**DoxyPEP**：**doxycycline 200 mg PO**，性行為後**盡快（理想 24 h 內，最晚 72 h）**；細菌性 STI 降 66%，chlamydia 與 syphilis 降 70-80%',
      'DoxyPEP 目前證據只在 **cisgender 男性與跨性別女性（與 cisgender 男性發生性行為）**；抗藥與菌叢影響仍在研究'
    ],
    refs: ['MMWR Recomm Rep 2021;70(4):1（CDC STI treatment guidelines 2021）', 'NEJM 2023;388:1296（DoxyPEP）']
  },
  {
    id: 'id-ulcer',
    title: '生殖器潰瘍（Table 16-1）',
    table: {
      head: ['疾病', '表現', '治療'],
      rows: [
        ['**HSV**（HSV-2 為主，HSV-1 增加中）', '**疼痛的群聚水泡** -> 淺潰瘍；初發可有淋巴結、發燒、無菌性腦膜炎；無症狀排毒也會傳染；PCR 或培養', '初發：**acyclovir 400 mg tid、valacyclovir 1 g bid** 或 famciclovir 250 mg tid **7-10 天**；復發：短療程；常復發 -> **suppressive**（valacyclovir 500 mg-1 g qd）；HIV 劑量較高'],
        ['**Syphilis 一期**', '**無痛**、硬、表淺潰瘍（chancre）', '見 syphilis 卡'],
        ['**Chancroid**（H. ducreyi）', '**疼痛**潰瘍 + **疼痛化膿的腹股溝淋巴結**；需特殊培養', 'Azithromycin 1 g 單次或 ceftriaxone 250 mg IM 單次'],
        ['**LGV**（C. trachomatis L1-L3）', '**無痛**潰瘍 -> 堆疊糾結的腹股溝淋巴結；肛交 -> **直腸結腸炎**', '**Doxycycline 100 mg bid x 21 天**']
      ]
    },
    refs: ['MMWR Recomm Rep 2021;70(4):1']
  },
  {
    id: 'id-syphilis',
    title: 'Syphilis',
    points: [
      '**HIV 合併感染 40-70%**，一定要驗 HIV；HIV 病人治療失敗與神經梅毒較多',
      '**一期**：無痛 chancre；**二期**：chancre 消失後 2-10 週，**皮疹含手掌腳掌**、黏膜病灶、淋巴結、全身症狀；**三期**：1-20 年後，心血管、gumma',
      '**Neurosyphilis**（general paresis、tabes dorsalis、meningovascular、**眼、耳**）可在**任何分期**；**ocular syphilis** 增加中、可致盲；所有梅毒病人都要問視力、聽力、神經症狀',
      '**先天梅毒**：死產可達 40%；2018-2022 增加 183%',
      '診斷：**nontreponemal（RPR、VDRL）**用 **treponemal（FTA-ABS、TP-PA）**確認；reverse sequence 可抓到早期；一期可做暗視野',
      '**LP**：有神經症狀就做；**單純眼梅毒或耳梅毒且沒有其他腦神經或神經症狀 -> 不需要 LP**；CSF VDRL 敏感度低，陰性不能排除',
      '追蹤：RPR 在 **3、6、12 個月**（HIV 每 3 個月 x 1 年）；**12 個月內沒有下降 4 倍**（早期）或 24 個月（晚期/不明）= 反應不足'
    ],
    table: {
      head: ['分期', '治療', 'PCN 過敏'],
      rows: [
        ['**一期、二期、早期潛伏（< 1 年）**', '**Benzathine PCN G 2.4 MU IM 一次**', 'Doxycycline 100 mg bid x 14 天'],
        ['**晚期潛伏、時間不明、三期**', '**Benzathine PCN G 2.4 MU IM 每週一次 x 3 次**', 'Doxycycline x 28 天'],
        ['**Neurosyphilis（含眼、耳）**', '**Aqueous PCN G 18-24 MU/d**（3-4 MU q4h 或連續輸注）**x 10-14 天**', '替代資料有限'],
        ['**懷孕**', '**一定用 penicillin**；過敏要 **desensitization**', '']
      ]
    },
    refs: ['NEJM 2020;382:845（modern syphilis epidemic）', 'MMWR Recomm Rep 2021;70(4):1']
  },
  {
    id: 'id-vaginitis',
    title: 'Vaginitis 與 vaginosis',
    table: {
      head: ['', 'Trichomoniasis', 'Bacterial vaginosis', 'Vulvovaginal candidiasis'],
      rows: [
        ['表現', '惡臭膿性分泌物、**泡沫狀**、dysuria、**子宮頸點狀出血**；**男性常無症狀**', '**均質稀薄白色**分泌物、**魚腥味**', '**乳酪狀**分泌物、**外陰嚴重發炎搔癢**、dysuria'],
        ['pH', '**>= 4.5**', '**>= 4.5**', '**正常**'],
        ['診斷', '**NAAT**、抗原（優於 wet mount）', '**Amsel 4 項中 3 項**：分泌物、**clue cells**、pH >= 4.5、**whiff test**', '**KOH** 看到菌絲'],
        ['治療', '女性 **metronidazole 500 mg bid x 7 天**；男性 2 g 單次；替代 tinidazole 2 g', '**Metronidazole 500 mg bid x 7 天**、metronidazole gel 或 clindamycin cream', '陰道 azole 1-7 天或 **fluconazole 150 mg 單次**；嚴重 q72h x 2-3 劑；復發（>= 4 次/年）每 72 h x 7-14 天，之後每週 x 6 個月']
      ]
    },
    points: [
      'BV 不是 STI，但會**增加 STI 與 HIV 風險**',
      'VVC 常在**抗生素治療後**；反覆發作可能是未發現的 **HIV**；fluconazole 無效想 non-albicans'
    ]
  },
  {
    id: 'id-urethritis',
    title: 'Urethritis、cervicitis 與 DGI',
    points: [
      '常見 **N. gonorrhoeae、C. trachomatis**，偶有 **M. genitalium**、N. meningitidis、T. vaginalis；常合併、表現一樣；**多數無症狀**',
      '**NAAT**（子宮頸、陰道、尿道、尿液或**生殖器外**檢體）；淋病可用 Gram stain 看到細胞內 GNDC（N. meningitidis 也像，NAAT 陰性）',
      '**生殖器外檢測**（咽、直腸）依性行為做：MSM 與跨性別者**不驗就會漏掉多數感染**',
      '持續 urethritis/cervicitis（CT 已治療）-> 驗 **M. genitalium**',
      '**DGI**：發燒、**腱鞘炎**、**膿疱性皮膚病灶**、多關節痛，或單純膝、腕、踝**化膿性關節炎**；抽血液培養，關節液分析培養'
    ],
    table: {
      head: ['感染', '治療'],
      rows: [
        ['**淋病**', '**Ceftriaxone 500 mg IM 一次**（> 150 kg 給 1 g）；**chlamydia 未排除時加 doxycycline 100 mg bid x 7 天**；替代 gentamicin 240 mg IM + azithro 2 g、cefixime 800 mg（有 ceftriaxone 就不用口服 cephalosporin）'],
        ['**咽部淋病**', 'Ceftriaxone 500 mg IM；**10-14 天後 NAAT test of cure**'],
        ['**DGI**', '**Ceftriaxone 1 g IM/IV qd**，改善 24-48 h 後可改口服，**至少 7 天**'],
        ['**Chlamydia**', '**Doxycycline 100 mg bid x 7 天**；azithro 1 g（直腸感染效果差 20-25%）；**3 個月後重驗**'],
        ['**M. genitalium**', '無抗藥檢測：**doxycycline 7 天 -> moxifloxacin 400 mg x 7 天**；有檢測：macrolide 敏感 doxy -> azithro，抗藥 doxy -> moxifloxacin']
      ]
    },
    refs: ['MMWR Recomm Rep 2021;70(4):1']
  },
  {
    id: 'id-pid',
    title: 'Pelvic inflammatory disease',
    points: [
      '女性**上生殖道**感染，通常先有 cervicitis；未治療 -> **慢性骨盆痛、子宮外孕、不孕**',
      '輕微不適、性交痛，到嚴重腹痛發燒（**Fitz-Hugh-Curtis** 肝周圍炎、**tubo-ovarian abscess**）',
      '**子宮頸舉痛**、子宮或附屬器壓痛、分泌物或脆弱、陰道分泌物大量 WBC -> 符合',
      '子宮頸 **NAAT** 或培養找 CT、GC；**所有 PID 都篩檢 HIV**',
      '**住院**：重症、**懷孕**、**HIV**、無法口服'
    ],
    table: {
      head: ['', '處方'],
      rows: [
        ['**門診**', '**Ceftriaxone 500 mg IM 一次 + doxycycline 100 mg bid x 14 天 + metronidazole 500 mg bid x 14 天**'],
        ['**住院**', 'Ceftriaxone 1 g IV（或 cefoxitin、cefotetan）+ doxycycline + metronidazole x 14 天；替代 clindamycin + gentamicin、amp-sulb + doxycycline']
      ]
    },
    refs: ['MMWR Recomm Rep 2021;70(4):1']
  },
  {
    id: 'id-mpox',
    title: 'Mpox',
    points: [
      'Orthopoxvirus；**clade I**（中非，較重）、**clade II**（西非，> 99% 存活，2022 全球流行）',
      '密切接觸傳染；2022 流行主要經**性網絡**傳播，但也有非性接觸',
      '皮疹：**深而界線清楚、中央臍凹**，依序斑疹、丘疹、水泡、膿疱、結痂',
      '2022 年非典型：**只有肛門生殖器病灶**、病灶少、**直腸炎**（肛門痛、出血）；前驅：發燒、寒顫、淋巴結、倦怠',
      '重症風險：免疫低下（含 **HIV**）、懷孕、濕疹或嚴重皮膚病',
      '診斷：**直接擦拭病灶做 Orthopoxvirus PCR**',
      '免疫正常多只需**支持治療**，一定要**充分止痛**',
      '重症或高風險：**tecovirimat**、brincidofovir、cidofovir（擴大使用）',
      '**疫苗**：可能暴露者與重症高風險者'
    ]
  }
]);

RPG.registerCase({
  id: 'id16-ocular',
  chapter: 'ID16',
  title: '手掌的紅疹和模糊的視線',
  patient: '29 歲男性 · 設計師',
  summary: '手掌腳掌長了不癢的紅疹，這週右眼看東西霧霧的。',
  cards: ['id-sti-path', 'id-syphilis', 'id-sti-hx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '皮膚科轉介。小柯兩週前**手掌、腳掌**和軀幹長出**不癢的紅褐色斑丘疹**。這週**右眼視力模糊、飛蚊**。',
        '你徵求他同意後問性史：過去半年有 4 位男性伴侶，保險套不固定使用。兩個月前陰莖上有一個**不痛**的小潰瘍，自己好了。',
        '神經學檢查：除了右眼視力下降，其他腦神經與神經學檢查正常，聽力正常。'
      ],
      clue: ['29M；MSM、多位伴侶', '**手掌腳掌皮疹**（二期梅毒）', '兩個月前**無痛潰瘍**', '**右眼視力模糊**；其他神經學正常'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '你懷疑二期梅毒合併眼梅毒。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'rpr', group: '檢驗', label: '**RPR + TP-PA**', key: true, reveal: true,
            result: '**RPR 1:128**；TP-PA 陽性', clue: '**RPR 1:128**、TP-PA (+)',
            miss: 'Nontreponemal 測試用 treponemal 測試確認。' },
          { id: 'eye', group: '會診', label: '**眼科**', key: true, reveal: true,
            result: '右眼 **posterior uveitis**', clue: '**Ocular syphilis**（posterior uveitis）',
            miss: '梅毒病人有視力症狀要立即會診眼科。' },
          { id: 'hiv', group: '檢驗', label: '**HIV Ag/Ab**', key: true, reveal: true,
            result: '陰性', clue: 'HIV 陰性',
            miss: '梅毒 HIV 合併感染 40-70%，一定要驗。' },
          { id: 'ngct', group: '檢驗', label: '**GC/CT NAAT：尿液、咽、直腸**', key: true, reveal: true,
            result: '直腸 **chlamydia 陽性**', clue: '直腸 chlamydia (+)',
            miss: 'MSM 要依性行為做生殖器外檢測，不然會漏掉多數感染。' },
          { id: 'lp', group: '檢查', label: 'LP', result: '已撤回',
            waste: '**單純眼梅毒**，沒有其他腦神經或神經學異常，不需要 LP；直接當 neurosyphilis 治療。' }
        ]
      }
    },
    tx: {
      text: '二期梅毒合併 ocular syphilis。',
      choices: [
        { label: '**Aqueous PCN G 18-24 MU/d IV x 10-14 天**（neurosyphilis 方案）；chlamydia 用 doxycycline 7 天', next: 'follow' },
        { label: 'Benzathine PCN G 2.4 MU IM 一次', next: 't_bpg' },
        { label: 'Doxycycline 14 天', next: 't_doxy' }
      ]
    },
    t_bpg: {
      text: '主治醫師搖頭。',
      feedback: '一般二期梅毒是 benzathine 一次，但**眼梅毒要用 neurosyphilis 的方案**：IV aqueous PCN G 10-14 天。Benzathine 在眼睛和 CSF 的濃度不夠。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_doxy: {
      text: '主治醫師搖頭。',
      feedback: 'Doxycycline 是早期梅毒 PCN 過敏的替代；**neurosyphilis（含眼）用 IV aqueous PCN G**，替代藥資料有限。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    follow: {
      text: '治療後視力恢復。之後怎麼追蹤？',
      choices: [
        { label: '**RPR 在 3、6、12 個月**追蹤（12 個月要下降 >= 4 倍）；伴侶通知與治療；討論 **PrEP 與 doxyPEP**', next: 'end_good' },
        { label: '6 個月後重做 LP 確認 CSF 正常', next: 'f_lp' },
        { label: '追蹤 TP-PA 轉陰', next: 'f_tppa' }
      ]
    },
    f_lp: {
      text: '主治醫師搖頭。',
      feedback: 'RPR 反應適當、沒有神經學症狀，**不需要重複 CSF 檢查**。',
      choices: [{ label: '重新決定', next: 'follow' }]
    },
    f_tppa: {
      text: '主治醫師搖頭。',
      feedback: 'Treponemal 測試通常**終身陽性**，不能用來追蹤。追蹤用 **RPR 效價**。',
      choices: [{ label: '重新決定', next: 'follow' }]
    },
    end_good: {
      text: '一年後 RPR 降到 1:4。小柯開始 PrEP，並使用 doxyPEP。',
      ending: {
        grade: 'good',
        title: 'Secondary syphilis with ocular involvement',
        pearls: [
          '所有梅毒病人問視力、聽力、神經症狀；眼梅毒任何分期都可能',
          '單純眼或耳梅毒、無其他神經學異常 -> 不需 LP，直接用 IV aqueous PCN G 10-14 天',
          '驗 HIV 與生殖器外 GC/CT',
          'RPR 3、6、12 個月追蹤；treponemal 測試終身陽性'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id16-pregnant',
  chapter: 'ID16',
  title: '產檢的梅毒血清',
  patient: '26 歲女性 · 懷孕 14 週',
  summary: '第一次產檢梅毒血清陽性，她說對 penicillin 過敏。',
  cards: ['id-syphilis', 'id-sti-path'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '產科轉介。小許懷孕 14 週，第一次產檢：**RPR 1:16、TP-PA 陽性**。沒有任何症狀，不記得有過潰瘍或皮疹，**不知道何時感染**。以前沒驗過。',
        '她說小時候打 penicillin 起過**蕁麻疹、喘**。HIV 陰性。神經學、視力、聽力正常。'
      ],
      clue: ['26F；**懷孕 14 週**', 'RPR 1:16、TP-PA (+)，無症狀 -> **latent syphilis of unknown duration**', '**PCN 過敏**（蕁麻疹、喘）'],
      choices: [{ label: '治療', next: 'tx' }]
    },
    tx: {
      text: '時間不明的潛伏梅毒，懷孕，PCN 過敏。',
      choices: [
        { label: '**Penicillin desensitization**，之後 **benzathine PCN G 2.4 MU IM 每週一次 x 3 次**', next: 'end_good' },
        { label: 'Doxycycline 28 天', next: 't_doxy' },
        { label: 'Benzathine PCN G 一次', next: 't_once' },
        { label: '用 azithromycin 代替', next: 't_azi' }
      ]
    },
    t_doxy: {
      text: '主治醫師搖頭。',
      feedback: '**懷孕一定要用 penicillin**（只有 penicillin 能可靠治療胎兒），而且 tetracycline 懷孕禁忌。過敏就做 **desensitization**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_once: {
      text: '主治醫師搖頭。',
      feedback: '時間**不明**或 > 1 年的潛伏梅毒要**每週一次、共 3 次**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_azi: {
      text: '主治醫師搖頭。',
      feedback: '懷孕梅毒**只有 penicillin** 是建議用藥。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '在監測下完成 desensitization 與三劑 benzathine PCN。足月生下的寶寶評估沒有先天梅毒。',
      ending: {
        grade: 'good',
        title: 'Latent syphilis in pregnancy',
        pearls: [
          '懷孕一定用 penicillin；過敏做 desensitization',
          '晚期或時間不明的潛伏梅毒：benzathine PCN G 每週 x 3',
          '先天梅毒可導致死產（可達 40%），近年大幅增加'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id16-urethritis',
  chapter: 'ID16',
  title: '早上內褲上的膿',
  patient: '24 歲男性 · 研究生',
  summary: '小便痛三天，早上尿道口有黃色的膿。',
  cards: ['id-sti-path', 'id-urethritis', 'id-sti-hx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '門診。阿凱三天來**小便痛**、早上尿道口**黃色膿性分泌物**。你問性史：兩週前和一位男性伴侶有**口交與肛交（接受方）**，沒用保險套。'
      ],
      clue: ['24M；**膿性尿道分泌物**、dysuria', '男性伴侶；**口交、肛交（接受方）**'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '勾選檢查。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'urine', group: '檢驗', label: '**尿液 GC/CT NAAT**', key: true, reveal: true,
            result: '**GC 陽性**；CT 陰性', clue: '尿道 **GC (+)**',
            miss: 'NAAT 是診斷 GC、CT 的標準。' },
          { id: 'extra', group: '檢驗', label: '**咽部與直腸 GC/CT NAAT**', key: true, reveal: true,
            result: '**咽部 GC 陽性**；**直腸 CT 陽性**', clue: '**咽 GC (+)**、**直腸 CT (+)**',
            miss: '依性行為做**生殖器外檢測**，MSM 不驗會漏掉多數感染。' },
          { id: 'hiv', group: '檢驗', label: '**HIV、梅毒**', key: true, reveal: true,
            result: '陰性', clue: 'HIV、梅毒陰性',
            miss: '有 STI 就要篩其他 STI。' },
          { id: 'gram', group: '檢驗', label: '尿道分泌物 Gram stain', result: '細胞內 **Gram-negative diplococci**' }
        ]
      }
    },
    tx: {
      text: '尿道與咽部淋病、直腸 chlamydia。',
      choices: [
        { label: '**Ceftriaxone 500 mg IM 一次 + doxycycline 100 mg bid x 7 天**；咽部淋病 **10-14 天後 test of cure**；伴侶通知', next: 'persist' },
        { label: 'Ceftriaxone 500 mg IM + azithromycin 1 g', next: 't_azi' },
        { label: 'Cefixime 800 mg 口服 + doxycycline', next: 't_cfx' }
      ]
    },
    t_azi: {
      text: '主治醫師搖頭。',
      feedback: '**直腸 chlamydia** 用 azithromycin 效果差 20-25%，首選 **doxycycline 7 天**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_cfx: {
      text: '主治醫師搖頭。',
      feedback: '有 ceftriaxone 就不用口服 cephalosporin；而且其他替代方案對**咽部淋病**較不可靠。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    persist: {
      text: '四週後：咽部 test of cure 陰性，但**尿道刺痛和少量分泌物又出現**。他說這段時間沒有性行為，有按時吃完 doxycycline。GC/CT NAAT 都陰性。',
      clue: ['治療後**持續 urethritis**，GC/CT 陰性'],
      choices: [
        { label: '驗 **M. genitalium**；陽性且無法做抗藥檢測 -> doxycycline 7 天後接 **moxifloxacin 400 mg x 7 天**', next: 'prev' },
        { label: '再打一次 ceftriaxone', next: 'p_cro' }
      ]
    },
    p_cro: {
      text: '主治醫師搖頭。',
      feedback: '已經治療且 GC/CT 陰性的持續 urethritis -> 想 **M. genitalium**。',
      choices: [{ label: '重新決定', next: 'persist' }]
    },
    prev: {
      text: 'M. genitalium 陽性，治療後痊癒。他問以後怎麼預防。',
      choices: [
        { label: '保險套、定期篩檢、**HIV PrEP**；可考慮 **doxyPEP**（性行為後 72 h 內 doxycycline 200 mg 一次）', next: 'end_good' },
        { label: '每天吃 doxycycline 預防', next: 'v_daily' }
      ]
    },
    v_daily: {
      text: '主治醫師搖頭。',
      feedback: 'DoxyPEP 是**性行為後**（理想 24 h 內，最晚 72 h）吃 **200 mg 一次**，不是每天吃。',
      choices: [{ label: '重新回答', next: 'prev' }]
    },
    end_good: {
      text: '阿凱開始 PrEP 與 doxyPEP，每三個月回診篩檢。',
      ending: {
        grade: 'good',
        title: 'Gonococcal urethritis、pharyngeal GC、rectal chlamydia、M. genitalium',
        pearls: [
          '淋病：ceftriaxone 500 mg IM（> 150 kg 1 g）；CT 未排除加 doxy 7 天',
          '生殖器外檢測；咽部淋病 test of cure',
          '直腸 CT：doxy 優於 azithro',
          '持續 urethritis -> M. genitalium；doxyPEP 200 mg 性行為後'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id16-pid',
  chapter: 'ID16',
  title: '下腹痛的大學生',
  patient: '20 歲女性 · 大學生',
  summary: '下腹痛一週，最近分泌物變多，性交時會痛。',
  cards: ['id-sti-path', 'id-pid', 'id-urethritis'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '婦科門診。小林下腹痛一週，分泌物變多，**性交痛**。T 37.9°C。上個月換了新的男友，沒用保險套。',
        '內診：**子宮頸舉痛**、兩側附屬器壓痛，子宮頸**黏液膿性分泌物**、容易出血。Urine hCG 陰性。'
      ],
      clue: ['20F；新伴侶、未用保險套', '下腹痛、性交痛、分泌物', '**Cervical motion tenderness**、附屬器壓痛', 'hCG 陰性'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '臨床診斷 PID。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'naat', group: '檢驗', label: '**子宮頸 GC/CT NAAT**', key: true, reveal: true,
            result: '**C. trachomatis 陽性**', clue: '**CT (+)**',
            miss: 'PID 要驗 GC、CT。' },
          { id: 'hiv', group: '檢驗', label: '**HIV 篩檢**', key: true, reveal: true,
            result: '陰性', clue: 'HIV 陰性',
            miss: '**所有 PID 都要篩檢 HIV**。' },
          { id: 'us', group: '影像', label: '骨盆超音波（排除 tubo-ovarian abscess）', result: '無膿瘍' },
          { id: 'wet', group: '檢驗', label: '陰道分泌物 wet mount', result: '大量 WBC' }
        ]
      }
    },
    tx: {
      text: '沒有懷孕、可以口服、沒有 TOA、不是重症。',
      choices: [
        { label: '門診：**ceftriaxone 500 mg IM 一次 + doxycycline 100 mg bid x 14 天 + metronidazole 500 mg bid x 14 天**；伴侶治療', next: 'end_good' },
        { label: 'Azithromycin 1 g 一次（已確定 chlamydia）', next: 't_azi' },
        { label: '住院 IV 治療', next: 't_admit' }
      ]
    },
    t_azi: {
      text: '主治醫師搖頭。',
      feedback: 'PID 是**多菌**的上生殖道感染，不只是 chlamydia cervicitis。用三合一 14 天方案。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_admit: {
      text: '主治醫師搖頭。',
      feedback: '住院的條件：**重症、懷孕、HIV、無法口服**（或 TOA）。她都沒有，可以門診。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '三天後回診腹痛明顯改善。男友也接受治療。三個月後重驗 chlamydia 陰性。',
      ending: {
        grade: 'good',
        title: 'Pelvic inflammatory disease',
        pearls: [
          '子宮頸舉痛、子宮或附屬器壓痛 -> PID；驗 GC/CT、篩 HIV',
          '門診：ceftriaxone 500 IM + doxy 14 天 + metronidazole 14 天',
          '住院：重症、懷孕、HIV、無法口服',
          '後遺症：慢性骨盆痛、子宮外孕、不孕'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id16-vaginitis',
  chapter: 'ID16',
  title: '三種分泌物',
  patient: '三位女性 · 婦科門診',
  summary: '同一個早上，三位病人都說「分泌物變多」。',
  cards: ['id-sti-path', 'id-vaginitis'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '婦科門診。三位病人：',
        '**甲**：32 歲，**稀薄灰白**分泌物、**魚腥味**，性交後更明顯。不癢。',
        '**乙**：27 歲，**黃綠色泡沫狀**、惡臭分泌物、小便痛；子宮頸有**草莓狀點狀出血**。',
        '**丙**：35 歲，剛吃完一週 amox-clav，**外陰極癢紅腫**，**乳酪狀**白色分泌物。'
      ],
      clue: ['甲：稀薄、魚腥味', '乙：泡沫狀、子宮頸點狀出血', '丙：抗生素後、極癢、乳酪狀'],
      choices: [{ label: '檢查', next: 'workup' }]
    },
    workup: {
      text: '勾選你要做的檢查。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'ph', group: '檢查', label: '**陰道 pH**（三位）', key: true, reveal: true,
            result: '甲 5.0；乙 5.5；**丙 4.2（正常）**', clue: 'pH：甲、乙 >= 4.5；丙正常',
            miss: 'pH 是快速區分的關鍵：BV、trich 上升，candida 正常。' },
          { id: 'a_amsel', group: '甲', label: '甲：**wet mount + whiff test**', key: true, reveal: true,
            result: '**Clue cells**；**whiff test 陽性**', clue: '甲：clue cells、whiff (+) -> **BV**',
            miss: 'BV 用 Amsel 4 項中 3 項。' },
          { id: 'b_naat', group: '乙', label: '乙：**T. vaginalis NAAT**', key: true, reveal: true,
            result: '**陽性**', clue: '乙：**Trichomonas**',
            miss: 'NAAT 敏感度優於 wet mount。' },
          { id: 'c_koh', group: '丙', label: '丙：**KOH**', key: true, reveal: true,
            result: '**假菌絲與芽孢**', clue: '丙：**VVC**',
            miss: 'KOH 看到菌絲確診 candidiasis。' }
        ]
      }
    },
    tx: {
      text: '三位的治療？',
      choices: [
        { label: '甲：**metronidazole 500 mg bid x 7 天**；乙：**metronidazole 500 mg bid x 7 天**、男性伴侶 2 g 單次、篩檢其他 STI；丙：**fluconazole 150 mg 單次**', next: 'end_good' },
        { label: '三位都 fluconazole 150 mg', next: 't_fluc' },
        { label: '甲：fluconazole；乙：metronidazole 2 g 單次；丙：clindamycin cream', next: 't_mix' }
      ]
    },
    t_fluc: {
      text: '主治醫師搖頭。',
      feedback: '只有丙是 candidiasis（pH 正常、KOH 菌絲）。甲是 BV、乙是 trichomoniasis，都用 **metronidazole**。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_mix: {
      text: '主治醫師搖頭。',
      feedback: '甲是 BV（metronidazole 7 天）；**女性 trichomoniasis 用 metronidazole 500 mg bid x 7 天**（2 g 單次是給男性）；丙是 candida（fluconazole）。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '三位一週後症狀都改善。',
      ending: {
        grade: 'good',
        title: 'Vaginitis：BV、trichomoniasis、VVC',
        pearls: [
          'pH：BV、trich >= 4.5；candida 正常',
          'BV：Amsel 3/4（分泌物、clue cells、pH、whiff）；metronidazole 7 天',
          'Trich：NAAT；女性 metronidazole bid x 7 天，男性 2 g 單次',
          'VVC：KOH；fluconazole 150 mg 單次；反覆發作想 HIV'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id16-hsv',
  chapter: 'ID16',
  title: '一群會痛的小水泡',
  patient: '23 歲女性 · 研究助理',
  summary: '外陰長了一群很痛的水泡，小便時痛到哭，還有發燒和頭痛。',
  cards: ['id-sti-path', 'id-ulcer'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。小魏三天前外陰出現**一群很痛的小水泡**，很快破成淺潰瘍。小便時劇痛，伴隨發燒、頭痛、兩側**腹股溝淋巴結腫痛**。從來沒有這樣過。',
        '頸部輕微僵硬，意識清楚。'
      ],
      clue: ['23F；**疼痛群聚水泡** -> 淺潰瘍', '**第一次發作**', '發燒、頭痛、腹股溝淋巴結、輕微頸部僵硬'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '勾選檢查。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'pcr', group: '檢驗', label: '**潰瘍拭子 HSV PCR**', key: true, reveal: true,
            result: '**HSV-2 陽性**', clue: '**HSV-2**',
            miss: '用 PCR 或培養確認並分型。' },
          { id: 'rpr', group: '檢驗', label: '**梅毒血清、HIV**', key: true, reveal: true,
            result: '陰性', clue: '梅毒、HIV 陰性',
            miss: '生殖器潰瘍一定要排除梅毒，並篩檢 HIV。' },
          { id: 'naat', group: '檢驗', label: 'GC/CT NAAT', result: '陰性' }
        ]
      }
    },
    tx: {
      text: '初次發作 genital HSV-2（頭痛、輕微頸部僵硬可能是無菌性腦膜炎）。',
      choices: [
        { label: '**Valacyclovir 1 g bid x 7-10 天**（或 acyclovir 400 mg tid）；充分止痛；衛教無症狀排毒與伴侶', next: 'later' },
        { label: '初發症狀會自己好，不用治療', next: 't_none' },
        { label: 'Benzathine PCN G 一次', next: 't_pcn' }
      ]
    },
    t_none: {
      text: '主治醫師搖頭。',
      feedback: '**初次發作**一定要治療，可縮短病程、減少併發症。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_pcn: {
      text: '主治醫師搖頭。',
      feedback: '**疼痛的群聚水泡**是 HSV；梅毒的 chancre 是**無痛**的。PCR 已確認 HSV-2。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    later: {
      text: '一年後她回診：這一年復發了 7 次，很困擾，也擔心傳給新男友。',
      choices: [
        { label: '**Suppressive therapy**：valacyclovir 500 mg 或 1 g qd（或 acyclovir 400 mg bid）', next: 'end_good' },
        { label: '每次復發都吃 10 天藥', next: 'l_episodic' }
      ]
    },
    l_episodic: {
      text: '主治醫師搖頭。',
      feedback: '復發的單次療程是**短療程**（1-5 天）。她一年 7 次、擔心傳染，適合 **suppressive therapy**。',
      choices: [{ label: '重新決定', next: 'later' }]
    },
    end_good: {
      text: '開始每天 valacyclovir 後一年只復發一次。',
      ending: {
        grade: 'good',
        title: 'Genital HSV-2',
        pearls: [
          '疼痛群聚水泡 -> 淺潰瘍；PCR 確認',
          '初發：valacyclovir 1 g bid 或 acyclovir 400 tid，7-10 天',
          '復發：短療程；頻繁復發或想減少傳染：suppressive',
          '無症狀排毒也會傳染；HIV 病人劑量較高、療程較長'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'id16-mpox',
  chapter: 'ID16',
  title: '肛門痛到不敢上廁所',
  patient: '32 歲男性 · 業務',
  summary: '肛門周圍長了幾顆有凹陷的痘痘，排便劇痛、出血。',
  cards: ['id-mpox', 'id-sti-hx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '急診。阿傑一週前發燒、淋巴結腫，接著**肛門周圍**長出四顆**中央凹陷的膿疱**。這幾天**直腸劇痛**、排便出血，痛到不敢上廁所。',
        '兩週前和幾位新伴侶有性接觸。他有 HIV，ART 控制良好（CD4 620、病毒量測不到）。'
      ],
      clue: ['32M；新伴侶', '前驅發燒、淋巴結 -> **肛周臍凹膿疱**', '**Proctitis**', 'HIV 控制良好'],
      choices: [{ label: '評估', next: 'workup' }]
    },
    workup: {
      text: '勾選檢查。',
      checklist: {
        prompt: '勾選你要做的項目',
        submit: '送出',
        next: 'tx',
        options: [
          { id: 'pcr', group: '檢驗', label: '**擦拭病灶做 Orthopoxvirus PCR**', key: true, reveal: true,
            result: '**Mpox（clade II）陽性**', clue: '**Mpox clade II**',
            miss: '直接擦拭病灶做 PCR。' },
          { id: 'sti', group: '檢驗', label: '**梅毒、直腸 GC/CT、HSV PCR**', key: true, reveal: true,
            result: '直腸 GC 陽性', clue: '合併直腸 GC',
            miss: 'Proctitis 的鑑別包括 GC、CT（LGV）、HSV、梅毒，也常合併感染。' },
          { id: 'iso', group: '感控', label: '隔離，病灶覆蓋', result: '已執行' }
        ]
      }
    },
    tx: {
      text: 'Mpox 合併直腸淋病。HIV 控制良好、免疫正常。',
      choices: [
        { label: '**支持治療、充分止痛**（含軟便劑、坐浴）；淋病 ceftriaxone 500 mg IM；接觸者可接種疫苗', next: 'end_good' },
        { label: '一律給 tecovirimat', next: 't_teco' },
        { label: '只有止痛', next: 't_gc' }
      ]
    },
    t_teco: {
      text: '主治醫師搖頭。',
      feedback: '免疫正常的人多半**支持治療**就夠。Tecovirimat 等抗病毒藥用於**重症或高風險**（免疫低下、懷孕、嚴重皮膚病）。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    t_gc: {
      text: '主治醫師搖頭。',
      feedback: '別忘了**直腸淋病**也要治療。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '三週後病灶結痂脫落，疼痛消失。',
      ending: {
        grade: 'good',
        title: 'Mpox proctitis',
        pearls: [
          '臍凹病灶依序變化；2022 型常只有肛門生殖器病灶、proctitis',
          '病灶拭子 Orthopoxvirus PCR；合併 STI 篩檢',
          '免疫正常：支持治療、充分止痛；重症或高風險用 tecovirimat',
          '疫苗用於可能暴露與重症高風險者'
        ]
      }
    }
  }
});
