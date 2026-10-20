// Ch 378 Relapsing Polychondritis. Source notes: notes/378-rp.md

RPG.registerCards('378', [
  {
    id: 'rp-path',
    title: 'Relapsing polychondritis 與 VEXAS 致病機轉',
    points: [
      '機轉不明；推測為**對軟骨成分的 autoimmunity**',
      '動物模型：type II collagen、type IX collagen、**matrilin-1** 免疫可重現 RP',
      'Anti-type II collagen 抗體：敏感度、特異度不足以診斷',
      '**B-cell depletion 效果差** -> 抗體可能不是主角',
      '病理：急性期軟骨交界 myeloid + lymphoid 浸潤 -> 慢性 **lacunar breakdown、chondrocyte 流失 -> fibrosis**（cauliflower ear、saddle nose、tracheomalacia）',
      '**VEXAS**：造血幹細胞 **UBA1 somatic mutation**（X-linked，多為老年男性）-> E1 ubiquitin-activating enzyme 異常 -> **autoinflammation + 骨髓衰竭**；myeloid precursors **vacuoles**'
    ],
    refs: ['Harrison’s Ch 378（Pathogenesis）']
  },
  {
    id: 'rp',
    title: 'Relapsing polychondritis',
    points: [
      '**Ear 80-90%**：耳廓紅腫痛，**耳垂不受侵犯**；誘因：側睡、眼鏡、溫度',
      'Nose：鼻樑壓迫感、saddle nose（**通常無 septal perforation**，vs GPA）',
      '**Airway**：subglottic stenosis（stridor 可致命）、tracheobronchomalacia；**常被誤診為 asthma**',
      '**Costochondritis**：劇痛、壓痛可重現，常以為 ACS',
      'Nonerosive arthritis（膝最常見）；episcleritis；hearing loss、vestibular',
      'MAGIC syndrome：口腔生殖器潰瘍 + chondritis；可有 aortitis'
    ],
    note: 'ESR/CRP 不一定上升；沒有診斷性 biomarker'
  },
  {
    id: 'rp-workup',
    title: 'RP 評估與治療',
    points: [
      '**McAdam**：6 項中 >= 3（bilateral auricular、arthritis、nasal、ocular、respiratory、audiovestibular）',
      '所有疑似 RP：**audiometry** + **dynamic expiratory chest CT**',
      'Laryngoscopy 看上呼吸道；**bronchoscopy 謹慎（可惡化）**；echo；FDG-PET',
      '**切片非特異，只用來排除 mimics**（感染、lymphoma）',
      '區分 GPA：**ANCA、GN（RP 沒有）**',
      '**GC 為主**；airway 受侵犯 -> **prednisone 1 mg/kg 迅速給**',
      'DMARD：MTX、leflunomide、MMF、anti-IL-6、TNFi；B-cell depletion 效果差'
    ]
  },
  {
    id: 'vexas',
    title: 'VEXAS syndrome',
    points: [
      '**老年男性**；反覆耳鼻 chondritis + **嚴重全身發炎** + **進行性骨髓衰竭**',
      '**UBA1 somatic mutation**（Vacuoles、E1 enzyme、X-linked、Autoinflammatory、Somatic）',
      '線索：**macrocytosis、lymphopenia**、cytopenia',
      '-> **基因檢測 + bone marrow 評估**（vacuoles）'
    ]
  }
]);

RPG.registerCase({
  id: 'rp-01',
  chapter: '378',
  title: '紅耳朵與「氣喘」',
  patient: '46 歲女性 · 補習班老師',
  summary: '耳朵反覆紅腫，最近說話沙啞、喘，被當成氣喘治療都沒用。',
  cards: ['rp-path', 'rp', 'rp-workup'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '張老師拿出手機給你看照片：兩邊耳朵紅得發亮、腫起來，**耳垂卻是正常的**。',
        '「這一年發作四、五次，皮膚科說是蜂窩性組織炎，吃抗生素一週會好。」',
        '「這兩個月聲音越來越沙啞，上課講話會喘，有時呼吸有咻咻聲。胸腔科給我吸入劑，完全沒用。」'
      ],
      clue: ['46F；反覆**雙側耳廓紅腫，耳垂正常**', '聲音沙啞、喘、wheezing 2 個月', '吸入劑無效'],
      choices: [{ label: '繼續問診', next: 'hx' }]
    },
    hx: {
      text: '鼻樑偶爾有壓迫感。前胸肋骨交界處痛到去過急診兩次，心電圖都正常。膝蓋偶爾腫。最近覺得右耳聽不太清楚。',
      clue: ['鼻樑壓迫感', '**Costochondral pain**（急診兩次）', '膝腫', '右耳聽力下降'],
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
          { id: 'ear', group: '頭頸', label: '耳廓、耳道', key: true, reveal: true,
            result: '左耳廓輕度紅腫壓痛，**耳垂不受侵犯**；耳道正常', clue: '**Auricular chondritis**（sparing lobule）',
            miss: '主訴就是耳朵，要看耳廓和耳垂。' },
          { id: 'nose', group: '頭頸', label: '鼻樑與鼻中隔', key: true, reveal: true,
            result: '鼻樑輕度壓痛；**鼻中隔完整，無穿孔**', clue: 'Nasal chondritis，**septum 完整**',
            miss: '要檢查鼻中隔，區分 RP 與 GPA。' },
          { id: 'neck', group: '頭頸', label: '前頸（thyroid cartilage）、聽診 stridor', key: true, reveal: true,
            result: 'Thyroid cartilage 壓痛；用力吸氣時輕度 **inspiratory stridor**', clue: '**Inspiratory stridor**',
            miss: '聲音沙啞 + 喘，一定要聽有沒有 stridor，這可能致命。' },
          { id: 'chest', group: '胸部', label: '肋軟骨', result: '雙側 costochondral junction 壓痛' },
          { id: 'eye', group: '其他', label: '眼睛', result: '右眼 episcleritis' },
          { id: 'joint', group: '其他', label: '關節', result: '右膝少量 effusion' },
          { id: 'hearing', group: '其他', label: 'Rinne / Weber', result: '右側 sensorineural pattern' }
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
          { id: 'ct', group: '影像', label: 'Dynamic expiratory chest CT', key: true, reveal: true,
            result: '**Subglottic stenosis**；吐氣時 trachea 管徑塌陷 > 50%（**tracheomalacia**）；氣管壁增厚', clue: '**Subglottic stenosis + tracheomalacia**',
            miss: '所有疑似 RP 都要做 dynamic expiratory CT 評估氣道。' },
          { id: 'audio', group: '耳', label: 'Audiometry', key: true, reveal: true,
            result: '右側 sensorineural hearing loss', clue: 'Right SNHL',
            miss: '所有 RP 病人都要做聽力檢查。' },
          { id: 'pft', group: '肺', label: 'PFT with flow-volume loop', result: 'Inspiratory 與 expiratory limb 皆平坦（fixed upper airway obstruction）', clue: 'Flow-volume loop：upper airway obstruction' },
          { id: 'anca', group: '血液', label: 'ANCA、UA、Cr', key: true, reveal: true,
            result: 'ANCA 陰性；UA 正常', clue: 'ANCA (-)、無 GN',
            miss: '要排除 GPA：ANCA 與 GN 是區分重點。' },
          { id: 'esr', group: '血液', label: 'ESR、CRP、CBC', result: 'CRP 1.1；CBC 正常' },
          { id: 'echo', group: '心臟', label: 'Echocardiography', result: '正常' },
          { id: 'bronch', group: '侵入', label: 'Bronchoscopy', result: '（未執行）', waste: 'RP 做 bronchoscopy 可能加重氣道發炎，需要非常謹慎；CT 已提供足夠資訊。' },
          { id: 'earbx', group: '侵入', label: 'Ear cartilage biopsy', result: '（未執行）', waste: '軟骨切片非特異且可能造成傷害，只在需要排除 mimics 時做。' }
        ]
      }
    },
    dx: {
      text: 'Bilateral auricular chondritis、nasal chondritis、airway chondritis、arthritis、episcleritis、SNHL：McAdam 6 項全中。氣道已經狹窄。治療？',
      choices: [
        { label: '**立即高劑量 prednisone（1 mg/kg）**；ENT 與胸腔科共同照護氣道；加 **MTX** 作為 steroid-sparing', next: 'end_good' },
        { label: '低劑量 prednisone 10 mg 慢慢觀察', next: 'tx_low' },
        { label: 'Rituximab', next: 'tx_rtx' }
      ]
    },
    tx_low: {
      text: '主治醫師語氣嚴肅。',
      feedback: '她已經有 stridor 和 subglottic stenosis，這是 life-threatening 的氣道侵犯，要迅速給高劑量 GC（prednisone 1 mg/kg）。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    tx_rtx: {
      text: '主治醫師搖頭。',
      feedback: '觀察性資料顯示 B-cell depletion 在 RP 效果不好。可用 MTX、leflunomide、MMF、anti-IL-6 或 TNFi。',
      choices: [{ label: '重新決定', next: 'dx' }]
    },
    end_good: {
      text: '兩週後 stridor 消失，聲音恢復。加上 MTX 後 prednisone 逐步減到 7.5 mg。半年後 dynamic CT 狹窄改善，tracheomalacia 穩定。',
      ending: {
        grade: 'good',
        title: 'Relapsing polychondritis with airway involvement',
        pearls: [
          '耳廓 chondritis 耳垂不受侵犯；常被當成蜂窩性組織炎',
          'Airway RP 常被誤診為 asthma；stridor 可致命',
          'Audiometry + dynamic expiratory CT；bronchoscopy 謹慎',
          'Airway：prednisone 1 mg/kg + steroid-sparing DMARD'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'rp-02',
  chapter: '378',
  title: '退休後的發燒與紅耳朵',
  patient: '69 歲男性 · 退休工程師',
  summary: '反覆發燒、耳朵鼻子紅腫，類固醇一減就復發。血球越來越低。',
  cards: ['rp-path', 'vexas', 'rp'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '王先生一年前開始反覆發燒、耳朵和鼻子紅腫，被診斷 relapsing polychondritis。',
        'Prednisone 只要減到 20 mg 以下就再發燒、耳朵再腫。皮膚還反覆出現紅色結節，兩次因為「不明原因肺浸潤」住院。',
        '這次血液科會診單寫著：「Hb 8.2、MCV 112、PLT 85k、lymphocyte 450。」'
      ],
      clue: ['69M；RP，**GC-dependent**', '反覆發燒、皮膚結節、肺浸潤', '**Macrocytic anemia（MCV 112）**、thrombocytopenia、**lymphopenia**'],
      choices: [{ label: '安排檢查', next: 'labs' }]
    },
    labs: {
      text: '老年男性、嚴重全身發炎、chondritis、cytopenia。要做什麼？',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'dx',
        options: [
          { id: 'uba1', group: '基因', label: '**UBA1** somatic mutation 檢測', key: true, reveal: true,
            result: '**UBA1 p.Met41Thr 陽性**', clue: '**UBA1 mutation (+)**',
            miss: '老年男性 RP + macrocytosis + lymphopenia，要想 VEXAS 做 UBA1 基因檢測。' },
          { id: 'bm', group: '骨髓', label: 'Bone marrow aspiration/biopsy', key: true, reveal: true,
            result: 'Myeloid 與 erythroid precursors **cytoplasmic vacuoles**；dysplasia', clue: '**Marrow vacuoles**',
            miss: '進行性骨髓衰竭要做骨髓評估。' },
          { id: 'b12', group: '血液', label: 'B12、folate', result: '正常', clue: 'B12、folate 正常' },
          { id: 'anca', group: '血液', label: 'ANCA', result: '陰性' },
          { id: 'crp', group: '血液', label: 'CRP', result: '**14** mg/dL' },
          { id: 'tsh', group: '血液', label: 'TSH、LFT', result: '正常' },
          { id: 'bc', group: '感染', label: 'Blood cultures', result: '陰性' },
          { id: 'ana', group: '血液', label: 'ANA、dsDNA', result: '陰性', waste: '對這個 presentation 幫助不大。' }
        ]
      }
    },
    dx: {
      text: 'UBA1 突變、骨髓 vacuoles。診斷？',
      choices: [
        { label: '**VEXAS syndrome**：與血液科共同照護骨髓衰竭；RP 樣表現與發炎一起處理', next: 'end_good' },
        { label: 'Myelodysplastic syndrome 合併巧合的 RP', next: 'dx_mds' }
      ]
    },
    dx_mds: {
      text: '主治醫師搖頭。',
      feedback: '這不是巧合。UBA1 somatic mutation 同時解釋了 chondritis、嚴重全身發炎與骨髓衰竭，這就是 VEXAS。及早辨識才能避免致命併發症。',
      choices: [{ label: '重新判斷', next: 'dx' }]
    },
    end_good: {
      text: '你們召開風濕科與血液科聯合討論，擬定整合發炎控制與骨髓衰竭的治療計畫。王先生的家人說：「終於知道為什麼了。」',
      ending: {
        grade: 'good',
        title: 'VEXAS syndrome',
        pearls: [
          '老年男性 + 反覆耳鼻 chondritis + 嚴重全身發炎 + 骨髓衰竭',
          'Macrocytosis、lymphopenia 是線索',
          'UBA1 somatic mutation；骨髓 vacuoles',
          '風濕科與血液科共同照護'
        ]
      }
    }
  }
});
