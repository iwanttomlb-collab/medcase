// Ch 367 Autoimmunity and Autoimmune Diseases. Source notes: notes/367-autoimmunity.md

RPG.registerCards('367', [
  {
    id: 'ad-overview',
    title: 'Autoimmune disease 概觀',
    points: [
      '**Autoimmunity 人人有**；**AD** = 失去耐受且致病',
      '~150 種；美國盛行率 **7.6-9.4%**；**女性為主**（女性前 10 大死因）',
      '一個 AD -> **容易再有其他 AD**、家人易有、**某些癌症**、**早發 CVD**',
      'MZ twin 15-30% vs DZ < 5%；**HLA 是最佳風險預測**；STAT4、PTPN22 共享',
      '環境：**吸菸（RA citrullination）**、**silica（SLE）**、**solvents（SSc）**、UV、vitamin D 缺乏',
      '女性：兩條 X -> **TLR7** -> type I IFN；complement 缺乏 -> SLE',
      '**AutoAbs 可早於臨床多年**（ACPA、AMA ~10 年；T1DM islet Abs）'
    ]
  },
  {
    id: 'ad-ab',
    title: 'Autoantibody-mediated diseases',
    table: {
      head: ['Disease', 'AutoAb', '機轉'],
      rows: [
        ['**Graves’**', 'Anti-TSHR', '**刺激** receptor'],
        ['Hashimoto’s', 'Anti-TPO、anti-Tg', 'Complement + T cell'],
        ['**Myasthenia gravis**', 'Anti-AChR（MuSK）', '**拮抗** receptor'],
        ['**Goodpasture’s**', 'Anti-type IV collagen', '腎、肺基底膜'],
        ['**Pernicious anemia**', 'Anti-parietal cell（70-90%）、anti-IF', '缺 intrinsic factor -> **B12**'],
        ['T1DM', 'Insulin、**GAD**、IA-2', '多重抗體 -> 高風險'],
        ['Sjögren’s/SLE', '**Anti-Ro**', '通過胎盤 -> congenital heart block'],
        ['PBC', '**AMA**', '早於發病 ~10 年']
      ]
    }
  },
  {
    id: 'ad-trigger',
    title: 'Autoimmunity 觸發機轉',
    points: [
      '**Molecular mimicry**：rheumatic fever（M protein -> myosin、neuron）',
      '**Epitope spreading**、bystander、adjuvant、**superantigens**',
      'EBV（SLE、MS、RA）、coxsackievirus（myocarditis、T1DM）、SARS-CoV-2（MIS-C）',
      '**Immune-privileged**：eye、brain、testis',
      '**Paraneoplastic**：LEMS、paraneoplastic pemphigus、DM、Sweet’s；**ovarian teratoma -> anti-NMDAR encephalitis**',
      '**ICI irAEs**：最多 85%、多輕微；**DM、arthritis、thyroiditis、colitis**；不影響整體存活',
      'Drug-induced lupus：**antihistone**；停藥改善'
    ]
  }
]);

RPG.registerCase({
  id: 'auto-01',
  chapter: '367',
  title: '甲狀腺之後的貧血',
  patient: '54 歲女性 · 圖書館員',
  summary: 'Hashimoto 吃甲狀腺素多年，最近很累、腳麻、走路不穩。',
  cards: ['ad-overview', 'ad-ab'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '何女士 Hashimoto’s thyroiditis 十年，吃 levothyroxine 穩定。妹妹有 type 1 DM，女兒有 vitiligo。',
        '「這半年越來越累，腳底麻麻的像踩在棉花上，晚上走路會不穩。」'
      ],
      clue: ['54F；**Hashimoto’s** 10 年', '家族：妹妹 **T1DM**、女兒 **vitiligo**', 'Fatigue、**足部麻木**、夜間走路不穩'],
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你開始檢查。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'neuro', group: '神經', label: '本體覺、振動覺、Romberg', key: true, reveal: true,
            result: '雙足**振動覺與本體覺下降**；**Romberg 陽性**', clue: '**Dorsal column dysfunction**（Romberg +）',
            miss: '腳麻、夜間不穩要測後柱功能。' },
          { id: 'tongue', group: '頭頸', label: '舌頭', result: '舌乳頭萎縮、光滑紅舌', clue: 'Atrophic glossitis' },
          { id: 'skin', group: '皮膚', label: '皮膚', result: '手背幾塊 vitiligo', clue: 'Vitiligo' },
          { id: 'pallor', group: '一般', label: '結膜、膚色', result: '蒼白、輕度黃' },
          { id: 'thyroid', group: '頸部', label: '甲狀腺', result: '小、硬' }
        ]
      }
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'cbc', group: '血液', label: 'CBC、MCV', key: true, reveal: true,
            result: 'Hb **8.9**；**MCV 118**；hypersegmented neutrophils', clue: '**Macrocytic anemia**',
            miss: '疲倦要驗 CBC。' },
          { id: 'b12', group: '血液', label: 'B12、folate', key: true, reveal: true,
            result: '**B12 低**；folate 正常', clue: '**B12 deficiency**',
            miss: 'Macrocytosis + 後柱症狀要驗 B12。' },
          { id: 'ab', group: '抗體', label: 'Anti-parietal cell、anti-intrinsic factor', key: true, reveal: true,
            result: '**兩者皆陽性**', clue: '**Anti-parietal cell + anti-IF (+)**',
            miss: '要確認 B12 缺乏是否為 autoimmune gastritis（pernicious anemia）。' },
          { id: 'tsh', group: '內分泌', label: 'TSH', result: '正常（在藥物下）' },
          { id: 'gastrin', group: '其他', label: 'Gastrin', result: '明顯上升（achlorhydria）' },
          { id: 'egd', group: '其他', label: 'Upper endoscopy + biopsy', result: '**Corpus atrophic gastritis**', clue: 'Atrophic gastritis' },
          { id: 'mri', group: '影像', label: 'Brain MRI', result: '正常', waste: '症狀符合後柱（脊髓）病變，brain MRI 不是第一步。' }
        ]
      }
    },
    dx: {
      text: 'Pernicious anemia（autoimmune gastritis）合併 subacute combined degeneration。處置？',
      choices: [
        { label: '**B12 補充（初期肌肉注射）**；之後終身補充；因 autoimmune gastritis 與多重 AD 傾向，定期追蹤（含胃部病變）並提醒家人', next: 'end_good' },
        { label: '補 folate 就好', next: 'dx_folate' },
        { label: 'Prednisone 抑制自體免疫', next: 'dx_gc' }
      ]
    },
    dx_folate: {
      text: '主治醫師搖頭。',
      feedback: '只補 folate 可能改善貧血但讓神經損傷繼續惡化。問題是缺 intrinsic factor 造成 B12 吸收不良。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    dx_gc: {
      text: '主治醫師搖頭。',
      feedback: 'Pernicious anemia 是 parietal cell 已被破壞的末期，治療是補充 B12，不是免疫抑制。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: 'B12 注射兩個月後 Hb 回升到 12.5，腳麻慢慢改善。你提醒何女士和家人：一個 autoimmune disease 的病人與家屬，發生其他 autoimmune disease 的機會比較高。',
      ending: {
        grade: 'good',
        title: 'Pernicious anemia in a patient with Hashimoto’s',
        pearls: [
          '一個 AD 的病人容易有第二個 AD；家族聚集',
          'Pernicious anemia：anti-parietal cell（70-90%）、anti-IF；最常見 B12 缺乏原因',
          'Macrocytic anemia + 後柱症狀 -> B12',
          '只補 folate 會掩蓋貧血、神經繼續惡化'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'auto-02',
  chapter: '367',
  title: '免疫治療後的副作用',
  patient: '61 歲男性 · melanoma 第四期',
  summary: 'Pembrolizumab 加 ipilimumab 治療中，最近一直拉肚子、關節痛、很怕冷。',
  cards: ['ad-trigger', 'ad-overview'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '腫瘤科會診。鄒先生轉移性 melanoma，接受 **immune checkpoint inhibitors**（ipilimumab + nivolumab）三次後腫瘤明顯縮小。',
        '這兩週：一天拉 6-7 次水便、雙手腕與膝蓋痛腫、很疲倦怕冷、體重增加。',
        '他很擔心：「這些副作用是不是代表治療失敗？要不要停掉？」'
      ],
      clue: ['61M；metastatic melanoma；**ICIs**（腫瘤有反應）', '**Diarrhea** 6-7 次/天', '**Arthritis**（腕、膝）', 'Fatigue、怕冷、體重增加'],
      choices: [{ label: '評估', next: 'labs' }]
    },
    labs: {
      text: '開檢查：',
      checklist: {
        prompt: '勾選你要的項目',
        submit: '送出',
        next: 'dx',
        options: [
          { id: 'tsh', group: '內分泌', label: 'TSH、free T4', key: true, reveal: true,
            result: 'TSH **42**；free T4 低', clue: '**Hypothyroidism**（ICI thyroiditis）',
            miss: '怕冷、疲倦、體重增加，ICI thyroiditis 是常見 irAE。' },
          { id: 'stool', group: '腸胃', label: 'Stool C. difficile、culture', key: true, reveal: true,
            result: '陰性', clue: '感染性腹瀉排除',
            miss: 'ICI colitis 前要先排除感染。' },
          { id: 'colon', group: '腸胃', label: 'Colonoscopy + biopsy', result: '瀰漫性 colitis', clue: '**ICI colitis**' },
          { id: 'glu', group: '內分泌', label: 'Glucose、HbA1c', key: true, reveal: true,
            result: 'Glucose 168；HbA1c 6.9（新）', clue: 'New hyperglycemia（ICI-related DM?）',
            miss: 'ICI 可誘發 diabetes，要篩血糖。' },
          { id: 'rf', group: '關節', label: 'RF、anti-CCP、關節超音波', result: 'Seronegative；synovitis', clue: 'ICI inflammatory arthritis' },
          { id: 'cortisol', group: '內分泌', label: 'Morning cortisol、ACTH', result: '正常' },
          { id: 'pet', group: '影像', label: 'PET-CT 評估腫瘤', result: '持續 partial response' }
        ]
      }
    },
    dx: {
      text: '多重 irAEs：thyroiditis、colitis、arthritis、新發高血糖。鄒先生最在意：這代表治療失敗嗎？',
      choices: [
        { label: '說明 **irAEs 很常見（最多 85%）、多數輕微，不影響整體存活與腫瘤控制**；與腫瘤科共同處理：甲狀腺素補充、依嚴重度暫停 ICI 並用 GC 治療 colitis、arthritis', next: 'end_good' },
        { label: '這代表免疫系統失控，ICI 永遠不能再用，改化療', next: 'dx_stop' },
        { label: '副作用不重要，繼續原劑量 ICI、不處理', next: 'dx_ignore' }
      ]
    },
    dx_stop: {
      text: '腫瘤科醫師搖頭。',
      feedback: 'irAEs 大多可以處理，發生 irAE 並不代表治療失敗，整體存活和進展時間不受影響。是否、何時恢復 ICI 依嚴重度個別決定。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    dx_ignore: {
      text: '主治醫師搖頭。',
      feedback: '一天 6-7 次的 colitis 需要處理（暫停 ICI、GC），而且 irAEs 可能在停藥後持續，需要免疫調節治療。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '暫停 ICI 並給 prednisone 後，腹瀉與關節炎兩週內緩解。Levothyroxine 終身補充。三個月後 PET 仍持續 response。',
      ending: {
        grade: 'good',
        title: 'Immune checkpoint inhibitor irAEs',
        pearls: [
          'ICI 阻斷 T cell 抑制分子 -> 腫瘤破壞 + tissue-specific autoimmunity',
          'irAEs 最多 85%、多輕微；不影響整體存活',
          '常見：thyroiditis、colitis、arthritis、diabetes',
          'irAEs 停藥後可持續，需要免疫調節治療'
        ]
      }
    }
  }
});
