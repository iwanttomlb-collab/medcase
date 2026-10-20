// Ch 380 IgG4-Related Disease. Source notes: notes/380-igg4.md

RPG.registerCards('380', [
  {
    id: 'igg4-path',
    title: 'IgG4-RD 致病機轉',
    points: [
      '**IgG4 本身可能不致病**：**Fab-arm exchange**（抗原結合弱）、低 Fc receptor 與 C1q 親和力 -> 非發炎性抗體，可能是 counterregulatory',
      '**CD4+ cytotoxic T cells**（組織中 oligoclonal 擴增）分泌 **IFN-gamma、TGF-beta、IL-1** -> 細胞毒與 **profibrotic** -> 主要驅動者',
      '血中 oligoclonal **plasmablasts**；B cells、plasmablasts 持續呈現抗原 -> 支持 CD4+ CTL',
      '病理：dense **lymphoplasmacytic** 浸潤、**storiform fibrosis**、**obliterative phlebitis**、eosinophils、germinal centers',
      '晚期少細胞、fibrosis 為主 -> retroperitoneal fibrosis 的 IgG4 常正常',
      '**Rituximab**：阻止短命 plasma cells 補充（IgG4 下降）+ 影響 CD4+ CTL',
      '常見 allergy、eosinophilia；腎侵犯常有低補體'
    ],
    refs: ['Harrison’s Ch 380（Pathogenesis）']
  },
  {
    id: 'igg4-overview',
    title: 'IgG4-RD 概觀',
    points: [
      '**中老年男性**（男:女 ~2:1；頭頸部接近 1:1）',
      '**Tumefactive lesions** 模仿癌症；常被意外發現；可多器官、逐年累積',
      '常無發燒、CRP 不高；allergy（asthma、polyps）、輕度 eosinophilia',
      'Type 1 AIP（**sausage pancreas**、painless jaundice、**新發 DM 20-50%**）、sclerosing cholangitis（似 PSC、cholangiocarcinoma）',
      '**雙側 submandibular**、lacrimal（Mikulicz）、orbital pseudotumor',
      '**Retroperitoneal fibrosis**（hydronephrosis）、aortitis、TIN（**低補體**）、pachymeningitis、Riedel’s thyroiditis'
    ]
  },
  {
    id: 'igg4-dx',
    title: 'IgG4-RD 診斷',
    points: [
      '病理：**dense lymphoplasmacytic + storiform fibrosis + obliterative phlebitis** + eosinophils',
      '**不支持**：大量 neutrophils、leukocytoclasis、**granuloma**、giant cells、fibrinoid necrosis',
      '晚期：**IgG4:IgG ratio** 與 fibrosis pattern 比 cell count 重要',
      '**病理永遠不足以單獨診斷**；要整合臨床、血清、影像',
      '多數切片是為了**排除惡性腫瘤**',
      '**~30% IgG4 正常**；retroperitoneal fibrosis 常正常',
      '**Prozone effect**：IgG4 極高時 nephelometry 假性偏低 -> **稀釋重驗**'
    ]
  },
  {
    id: 'igg4-tx',
    title: 'IgG4-RD 治療',
    points: [
      '**Vital organ（膽、胰、腎、主動脈、後腹膜）要積極治療**',
      '無症狀 lymphadenopathy 可 watchful waiting（監測 IgG4）',
      '**Prednisone 40 mg/day**，2-3 個月內減到停或 5 mg 維持',
      '反應快，但**長期無類固醇緩解不常見**；胰臟侵犯者 steroid 併發症多',
      '**Relapsing 或 GC-resistant -> rituximab 1 g x 2**（間隔 ~15 天）',
      '治療後 IgG4 持續上升 -> flare 風險'
    ]
  }
]);

RPG.registerCase({
  id: 'igg4-01',
  chapter: '380',
  title: '差點被切掉的胰臟',
  patient: '67 歲男性 · 退休校長',
  summary: '無痛性黃疸、體重減輕，外科已經排了 Whipple 手術。',
  cards: ['igg4-path', 'igg4-overview', 'igg4-dx', 'igg4-tx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '一般外科會診：「67 歲男性，painless obstructive jaundice，CT 胰頭腫大，CA19-9 輕度上升，下週排 Whipple。術前請評估血糖。」',
        '你去看病人。黃先生兩個月瘦了 6 公斤，最近才被診斷糖尿病。他說：「這兩年下巴兩邊腫腫的，一直沒消。我有氣喘。」'
      ],
      clue: ['67M；**painless obstructive jaundice**、體重減輕', '**新發 DM**', '下顎兩側腫 2 年', 'Asthma'],
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你仔細檢查。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'smg', group: '頭頸', label: '頜下腺、腮腺', key: true, reveal: true,
            result: '**雙側頜下腺**腫大、硬、不痛', clue: '**Bilateral submandibular gland enlargement**',
            miss: '他說下巴腫，要摸唾液腺。' },
          { id: 'lacrimal', group: '頭頸', label: '淚腺、眼周', key: true, reveal: true,
            result: '雙側上眼瞼外側腫脹（**lacrimal gland**）', clue: 'Bilateral lacrimal gland enlargement',
            miss: '唾液腺腫大要一起看淚腺（Mikulicz）。' },
          { id: 'jaundice', group: '一般', label: '黃疸、肝臟', result: '鞏膜黃染；肝不大' },
          { id: 'lymph', group: '一般', label: '周邊淋巴結', result: '雙側腋下 1.5 cm 淋巴結，不痛' },
          { id: 'abd', group: '腹部', label: '腹部', result: '無壓痛、無腫塊' },
          { id: 'mouth', group: '頭頸', label: '口腔乾燥', result: '輕度' }
        ]
      }
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'prozone',
        options: [
          { id: 'igg4', group: '血清', label: 'Serum IgG4', key: true, reveal: true,
            result: '**正常**（120 mg/dL）', clue: 'IgG4 「正常」？',
            miss: '懷疑 IgG4-RD，一定要驗 IgG4。' },
          { id: 'igg', group: '血清', label: 'Total IgG、complement', result: 'IgG **3,800** mg/dL；C3、C4 低', clue: 'IgG 3,800；**低補體**' },
          { id: 'eos', group: '血液', label: 'CBC（eosinophil）', result: 'Eosinophil 9%', clue: 'Mild eosinophilia' },
          { id: 'ro', group: '抗體', label: 'Anti-Ro、anti-La、ANA', result: '陰性', clue: 'Anti-Ro/La 陰性（不像 Sjögren’s）' },
          { id: 'ct', group: '影像', label: 'CT chest/abdomen/pelvis', key: true, reveal: true,
            result: '**Sausage-shaped pancreas**（瀰漫腫大、失去 lobularity、周圍 halo）；**雙腎多發低密度病灶**；肝內外膽管壁增厚', clue: '**Sausage pancreas**、bilateral renal lesions、biliary wall thickening',
            miss: '要完整評估多器官侵犯。' },
          { id: 'eus', group: '病理', label: 'EUS-guided core biopsy of pancreas', key: true, reveal: true,
            result: 'Dense lymphoplasmacytic infiltrate、**storiform fibrosis**、**obliterative phlebitis**；IgG4+ plasma cells 多；**無惡性細胞**', clue: '**Biopsy：storiform fibrosis + obliterative phlebitis，無癌**',
            miss: '胰頭腫大一定要拿組織排除癌症，這也是避免不必要 Whipple 的關鍵。' },
          { id: 'cr', group: '腎', label: 'Cr、UA', result: 'Cr 1.4；UA 少量蛋白' },
          { id: 'pet', group: '影像', label: 'PET-CT', result: '胰、唾液腺、淚腺、腎攝取', clue: 'PET：多器官攝取' }
        ]
      }
    },
    prozone: {
      text: '多器官、典型病理、低補體、IgG 3,800，可是 IgG4 竟然「正常」？',
      choices: [
        { label: '懷疑 **prozone effect**：請實驗室**稀釋**後重驗 IgG4', next: 'prozone_res' },
        { label: 'IgG4 正常，排除 IgG4-RD', next: 'prozone_wrong' }
      ]
    },
    prozone_wrong: {
      text: '主治醫師搖頭。',
      feedback: '約 30% IgG4-RD 的 IgG4 是正常的，而且病理已經很典型。更重要的是，多器官 + total IgG 極高時要想到 prozone effect：IgG4 太高反而讓 nephelometry 讀出假性偏低。',
      choices: [{ label: '重新思考', next: 'prozone' }]
    },
    prozone_res: {
      text: '稀釋後重驗：IgG4 **2,140** mg/dL（> 15x ULN）。',
      clue: '**IgG4 2,140**（稀釋後）',
      feedback: '這群 IgG4 極高的病人，正是多器官侵犯與器官損傷風險最高的。',
      choices: [{ label: '決定處置', next: 'tx' }]
    },
    tx: {
      text: 'Type 1 AIP + sclerosing cholangitis + TIN + Mikulicz。外科還在等你的回覆。',
      choices: [
        { label: '**取消 Whipple**；**prednisone 40 mg/day**，2-3 個月減量；控制血糖；追蹤 IgG4 與影像', next: 'relapse' },
        { label: '還是開刀比較保險', next: 'tx_surgery' }
      ]
    },
    tx_surgery: {
      text: '主治醫師語氣堅定。',
      feedback: '切片已經排除惡性腫瘤，臨床與病理符合 IgG4-RD。這正是很多病人被做了不必要 Whipple 的情境。IgG4-RD 對 GC 反應迅速。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    relapse: {
      text: [
        '兩週內黃疸消退，頜下腺縮小。三個月後 prednisone 減到 5 mg。',
        '八個月後，IgG4 持續上升，黃疸再現。他的血糖在類固醇下很難控制。'
      ],
      clue: '減量後**復發**；steroid 造成血糖難控',
      choices: [
        { label: '**Rituximab 1 g x 2**（間隔約 15 天）', next: 'end_good' },
        { label: 'Prednisone 加回 40 mg 長期維持', next: 'relapse_gc' }
      ]
    },
    relapse_gc: {
      text: '主治醫師搖頭。',
      feedback: '長期 GC 在中老年、胰臟侵犯（DM）的病人 morbidity 很高。Relapsing 或 GC-resistant 用 rituximab 是很好的 second-line。',
      choices: [{ label: '重新決定', next: 'relapse' }]
    },
    end_good: {
      text: 'Rituximab 後 IgG4 迅速下降，黃疸消失，prednisone 停掉了。黃校長說：「還好當初沒開刀。」',
      ending: {
        grade: 'good',
        title: 'IgG4-related disease（type 1 AIP）',
        pearls: [
          'Painless jaundice + sausage pancreas + 新發 DM + 唾液腺/淚腺腫：想 IgG4-RD',
          '先拿組織排除癌症，避免不必要 Whipple',
          'Prozone effect：IgG4 極高時假性正常 -> 稀釋重驗',
          'Prednisone 40 mg -> 2-3 個月減量；復發 -> rituximab'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'igg4-02',
  chapter: '380',
  title: '腫起來的腳與腎水腫',
  patient: '61 歲男性 · 計程車司機',
  summary: '下背悶痛半年，最近雙腳水腫、腎功能變差。',
  cards: ['igg4-path', 'igg4-overview', 'igg4-dx'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '腎臟科會診：「61 歲男性，Cr 1.0 -> 2.8，雙側 hydronephrosis，CT 主動脈周圍軟組織包覆。」',
        '張先生說下背悶痛半年，以為是開車久坐，最近兩腳腫。沒有發燒。'
      ],
      clue: ['61M；**下背痛** 6 個月', '雙下肢水腫', '**Bilateral hydronephrosis**；Cr 1.0 -> 2.8', 'CT：**periaortic soft tissue**'],
      choices: [{ label: '安排檢查', next: 'labs' }]
    },
    labs: {
      text: 'Retroperitoneal fibrosis 的鑑別很廣。開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'igg4', group: '血清', label: 'Serum IgG4', key: true, reveal: true,
            result: '**正常**（稀釋後重驗仍正常）', clue: 'IgG4 正常（已稀釋排除 prozone）',
            miss: '還是要驗 IgG4，但 retroperitoneal fibrosis 常常正常。' },
          { id: 'ctu', group: '影像', label: 'CT urography、CTA', result: '腎下主動脈周圍軟組織向下延伸到 **iliac**，包覆雙側輸尿管；主動脈無擴張', clue: 'Periaortic tissue -> iliac；**ureteral entrapment**' },
          { id: 'pet', group: '影像', label: 'PET-CT', result: '後腹膜病灶輕度攝取；其他器官無', clue: '單一器官（retroperitoneum）' },
          { id: 'bx', group: '病理', label: 'CT-guided retroperitoneal biopsy', key: true, reveal: true,
            result: '**Storiform fibrosis**、lymphoplasmacytic infiltrate、obliterative phlebitis；**IgG4:IgG ratio 高**；無 lymphoma、無癌', clue: '**Biopsy：storiform fibrosis、IgG4:IgG ratio 高**；排除 lymphoma',
            miss: 'Retroperitoneal mass 一定要拿組織排除 lymphoma、轉移癌等。' },
          { id: 'esr', group: '血液', label: 'ESR、CRP', result: '輕度上升' },
          { id: 'ana', group: '血液', label: 'ANCA', result: '陰性' },
          { id: 'tb', group: '感染', label: 'IGRA', result: '陰性' },
          { id: 'drug', group: '其他', label: '用藥史（methysergide、ergot）', result: '無' }
        ]
      }
    },
    dx: {
      text: 'IgG4-related retroperitoneal fibrosis，雙側輸尿管受壓、AKI。處置？',
      choices: [
        { label: '**泌尿科放置雙側 ureteral stents** 解除阻塞 + **prednisone 40 mg/day** 後減量；追蹤影像', next: 'end_good' },
        { label: 'IgG4 正常，不是 IgG4-RD，觀察就好', next: 'dx_igg4' },
        { label: '只放 stent，不用藥', next: 'dx_stentonly' }
      ]
    },
    dx_igg4: {
      text: '主治醫師搖頭。',
      feedback: 'Retroperitoneal fibrosis 常在診斷時已進入 fibrotic stage，IgG4 經常正常。診斷靠臨床、影像、病理整合。而且這是 vital organ 受威脅，要積極治療。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    dx_stentonly: {
      text: '主治醫師搖頭。',
      feedback: 'Stent 只解決阻塞，發炎與纖維化會繼續進展，造成 renal atrophy。要加上 GC。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: 'Stent 放置後 Cr 降到 1.5。Prednisone 三個月後，後腹膜病灶縮小，六個月後 stent 移除。腎臟留下輕度萎縮。',
      ending: {
        grade: 'good',
        title: 'IgG4-related retroperitoneal fibrosis',
        pearls: [
          '背痛、下肢水腫、hydronephrosis；periaortic -> iliac',
          'IgG4 常正常（已纖維化）；病理整合診斷',
          '切片排除 lymphoma、癌症',
          '解除阻塞 + GC；即使治療也常留下 renal atrophy'
        ]
      }
    }
  }
});
