// Ch 371 Acute Rheumatic Fever. Source notes: notes/371-arf.md

RPG.registerCards('371', [
  {
    id: 'arf-path',
    title: 'Acute rheumatic fever 致病機轉',
    points: [
      '**Group A Streptococcus** 咽喉（也可能皮膚）感染後的 autoimmune reaction；latent period ~3 週',
      '**Molecular mimicry**：針對 **M protein** 的抗體與 T cells 交叉辨識人體組織',
      'Cross-reactive antibodies 結合 **valve endothelium** -> **VCAM-1** -> lymphocyte 浸潤、complement 溶解內皮',
      '釋出 laminin、keratin、tropomyosin -> cross-reactive T cells 侵入心臟 -> **epitope spreading**',
      '另一假說：M protein 結合 **type IV collagen** 使其具免疫原性（非 mimicry）',
      '與神經抗原交叉反應 -> **Sydenham chorea**',
      'Host：族群 3-6% 易感；MZ 44% vs DZ 12%；HLA class II、TNF、MBL、IGHV4-61',
      '反覆感染 -> 反覆 valvulitis -> 增厚、纖維化、鈣化 -> **stenosis（RHD）**'
    ],
    refs: ['Harrison’s Ch 371（Pathogenesis）']
  },
  {
    id: 'jones',
    title: 'Jones criteria（2015 AHA）',
    points: [
      'Initial：**2 major** 或 **1 major + 2 minor**；recurrent 另可 **3 minor**',
      '一定要有**前驅 GAS 證據**（ASO、anti-DNase B）；chorea、indolent carditis 例外',
      '先判斷是 low-risk 還是 moderate/high-risk population'
    ],
    table: {
      head: ['', 'Low-risk', 'Moderate/high-risk'],
      rows: [
        ['Major', 'Carditis、**polyarthritis only**、chorea、EM、nodules', '同左，加上 **monoarthritis、polyarthralgia**'],
        ['Minor', 'Polyarthralgia、fever >= 38.5、ESR >= 60', 'Monoarthralgia、fever >= 38.0、ESR >= 30'],
        ['Minor（共通）', 'CRP >= 3.0 mg/dL；prolonged PR', '同左']
      ]
    },
    note: 'Carditis 含 subclinical（echo valvulitis）；carditis 已為 major 時 PR 不再計分'
  },
  {
    id: 'arf-clinical',
    title: 'ARF 臨床表現',
    points: [
      'GAS pharyngitis（或 impetigo）後 **~3 週**；chorea 可達 **6 個月**',
      '**Polyarthritis 60-75%**：migratory、large joints、asymmetric、劇痛；NSAID 反應極佳',
      '**Carditis 50-75%**：**mitral 幾乎必侵犯**；早期 MR ± AR，晚期 stenosis；PR prolongation',
      '最多 75% 進展為 RHD',
      '**Erythema marginatum**：evanescent、serpiginous、**不在臉**',
      '**SC nodules**：骨突處、發病後 2-3 週、合併 carditis'
    ]
  },
  {
    id: 'arf-tx',
    title: 'ARF 治療',
    points: [
      '**沒有治療能改變 RHD 的發生或嚴重度**',
      '所有病人：**penicillin** 清除 GAS（benzathine 1.2 MU IM 單次；< 27 kg 600,000）',
      'Arthritis/fever：aspirin 50-60 mg/kg/day 或 **naproxen 10-20 mg/kg/day**（注意 tinnitus）',
      '**NSAID 對 carditis、chorea 無效**',
      'Severe carditis + HF：HF 治療；GC 有爭議（prednisone 1-2 mg/kg/day，最多 3 週）',
      '所有疑似病例：**ECG、echo**；1 個月後 repeat echo',
      '登錄 registry、衛教、開始 secondary prophylaxis'
    ]
  },
  {
    id: 'arf-prophylaxis',
    title: 'Secondary prophylaxis',
    points: [
      '**Benzathine penicillin G 1.2 MU IM q4w**（極高風險 q3w 或 q2w）',
      'Penicillin allergy：erythromycin 250 mg bid'
    ],
    table: {
      head: ['分類', '期間（取較長者）'],
      rows: [
        ['無 carditis', '5 年 或 到 21 歲'],
        ['有 carditis，無殘留瓣膜病', '10 年 或 到 21 歲'],
        ['**持續 valvular disease**', '**10 年 或 到 40 歲**，有時終身']
      ]
    },
    note: 'Primary prevention：GAS pharyngitis 發病 9 天內給 penicillin 幾乎可預防 ARF'
  },
  {
    id: 'chorea',
    title: 'Sydenham chorea',
    points: [
      '女性為主；常**單獨出現**、latent period 長；可無發燒',
      '頭（舌頭 darting）與上肢；可 hemichorea；合併 emotional lability、OCD traits',
      '**> 50% 有 carditis -> 一定要 echo**',
      '藥物不改變病程；輕症安靜環境',
      '重症：**carbamazepine 或 valproate 優於 haloperidol**；GC 用於 severe/refractory',
      'IVIG 僅 refractory severe chorea'
    ]
  }
]);

RPG.registerCase({
  id: 'arf-01',
  chapter: '371',
  title: '會移動的關節痛',
  patient: '11 歲女孩 · 南太平洋醫療團',
  summary: '膝蓋痛完換腳踝，腳踝好了換手肘，還發燒。',
  cards: ['arf-path', 'jones', 'arf-clinical', 'arf-tx', 'arf-prophylaxis'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '你參加醫療團，在南太平洋一個島國的醫院支援。這裡 ARF 與 RHD 盛行率很高。',
        '11 歲的 Mere 由媽媽抱進診間。「她一個禮拜前右膝腫痛，兩天後換左腳踝，現在是右手肘。晚上發燒。」',
        '她痛得不敢動手臂。'
      ],
      clue: ['11F；**high-risk population**', '**Migratory polyarthritis**：右膝 -> 左踝 -> 右肘', '發燒'],
      choices: [{ label: '問診', next: 'hx_hub' }]
    },
    hx_hub: {
      text: '你請翻譯協助。',
      choices: [
        { label: '問最近有沒有喉嚨痛或皮膚感染', next: 'hx_throat', once: true },
        { label: '問吃過什麼藥', next: 'hx_med', once: true },
        { label: '問以前有沒有類似發作、心臟病', next: 'hx_past', once: true },
        { label: '開始理學檢查', next: 'exam', pin: true }
      ]
    },
    hx_throat: {
      text: '「大概三個禮拜前喉嚨痛、發燒，沒看醫生，自己好了。」家裡八個人住兩個房間。',
      clue: '**3 週前 sore throat**（未治療）；居住擁擠',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_med: {
      text: '只吃過一次 paracetamol，沒有用過 aspirin 或其他止痛消炎藥。',
      clue: '尚未使用 NSAID',
      feedback: '很好。太早給 NSAID 會讓 migratory pattern 還沒出現就被壓下來，變成像 monoarthritis。',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    hx_past: {
      text: '以前沒有類似發作，沒被說過心臟有問題。',
      clue: '首次發作',
      choices: [{ label: '回到問診', next: 'hx_hub' }]
    },
    exam: {
      text: 'Mere 躺在檢查床上。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'vitals', group: '一般', label: '生命徵象', key: true, reveal: true,
            result: 'BT **38.7** 度；HR 118；BP 100/62', clue: 'Fever 38.7；tachycardia',
            miss: '發燒的孩子一定要量生命徵象。' },
          { id: 'joint', group: '關節', label: '全身關節', key: true, reveal: true,
            result: '右肘紅腫熱痛；左踝輕度腫；右膝已消腫', clue: 'Large-joint arthritis，asymmetric',
            miss: '主訴是關節，要全部檢查並記錄分布。' },
          { id: 'heart', group: '胸部', label: '心臟聽診', key: true, reveal: true,
            result: '心尖 **pansystolic murmur** 向腋下傳導', clue: '**New apical pansystolic murmur**（MR）',
            miss: 'ARF 一定要聽心臟，carditis 決定預後與 prophylaxis 期間。' },
          { id: 'lung', group: '胸部', label: '肺部聽診', result: '清晰' },
          { id: 'skin', group: '皮膚', label: '軀幹皮膚', key: true, reveal: true,
            result: '無皮疹', clue: '無 erythema marginatum',
            miss: '要找 erythema marginatum，它很短暫，常出現在軀幹。' },
          { id: 'nodule', group: '皮膚', label: '骨突處（肘、膝、枕部）', result: '無 nodules' },
          { id: 'throat', group: '頭頸', label: '咽喉', result: '輕度充血，無扁桃腺膿' },
          { id: 'neuro', group: '神經', label: '神經學檢查（不自主動作）', result: '無 chorea' },
          { id: 'dre', group: '其他', label: '肛門指診', result: '無異常', waste: '跟這個孩子的問題無關。' }
        ]
      }
    },
    labs: {
      text: '醫院資源有限，但基本檢查都有。',
      checklist: {
        prompt: '開立檢查：勾選你要的項目',
        submit: '送出檢查單',
        next: 'jones',
        options: [
          { id: 'aso', group: '鏈球菌', label: 'ASO', key: true, reveal: true,
            result: '**800** IU/mL（上升）', clue: '**ASO 上升**',
            miss: '診斷 ARF 一定要有前驅 GAS 感染證據。' },
          { id: 'adb', group: '鏈球菌', label: 'Anti-DNase B', key: true, reveal: true,
            result: '**上升**', clue: 'Anti-DNase B 上升',
            miss: 'ASO 和 anti-DNase B 一起驗，敏感度較高。' },
          { id: 'swab', group: '鏈球菌', label: 'Throat swab culture', result: '陰性',
            clue: 'Throat culture 陰性（常見）' },
          { id: 'crp', group: '發炎', label: 'CRP、ESR', key: true, reveal: true,
            result: 'CRP **12** mg/dL；ESR **85** mm/h', clue: 'CRP 12；ESR 85',
            miss: 'Acute-phase reactants 是 minor criteria，也用來追蹤。' },
          { id: 'cbc', group: '發炎', label: 'CBC', result: 'WBC 13,500；Hb 10.9' },
          { id: 'ecg', group: '心臟', label: 'ECG', key: true, reveal: true,
            result: 'Sinus tachycardia；**PR 0.22 秒**', clue: 'PR prolongation',
            miss: '所有疑似 ARF 都要做 ECG。' },
          { id: 'echo', group: '心臟', label: 'Echocardiography', key: true, reveal: true,
            result: '**Moderate MR**，mitral leaflets 輕度增厚、annular dilatation；mild AR', clue: '**Echo：moderate MR + mild AR**（carditis）',
            miss: '所有疑似 ARF 都要做 echo，確認 carditis 與嚴重度。' },
          { id: 'bcx', group: '心臟', label: 'Blood cultures x 2', key: true, reveal: true,
            result: '無菌生長', clue: 'Blood culture 陰性',
            miss: '發燒加上心雜音，要排除 infective endocarditis。' },
          { id: 'cr', group: '其他', label: 'Urea、electrolytes、Cr', result: '正常', clue: '腎功能正常（可用 NSAID）' },
          { id: 'ana', group: '其他', label: 'ANA', result: '陰性' },
          { id: 'mri', group: '其他', label: 'Elbow MRI', result: 'Effusion、synovitis',
            waste: '診斷靠臨床與基本檢查，MRI 不需要也不實際。' }
        ]
      }
    },
    jones: {
      text: '用 Jones criteria（moderate/high-risk population）整理一下。',
      choices: [
        { label: '前驅 GAS 證據 + 2 major（**carditis、polyarthritis**）+ minor（fever、ESR/CRP）：**ARF 確診**', next: 'tx' },
        { label: '只有 1 個 major，還不能診斷', next: 'jones_wrong' }
      ]
    },
    jones_wrong: {
      text: '主治醫師搖頭。',
      feedback: 'Carditis（clinical + echo）和 polyarthritis 是兩個 major，加上 ASO 與 anti-DNase B 上升，已符合 initial ARF。PR prolongation 在 carditis 已計為 major 時不再算 minor。',
      choices: [{ label: '重新判斷', next: 'jones' }]
    },
    tx: {
      text: '急性期治療？',
      choices: [
        { label: '**Benzathine penicillin G** 清除 GAS；**naproxen** 控制關節炎與發燒；登錄 ARF registry；1 個月後 repeat echo', next: 'proph' },
        { label: '高劑量 prednisone 治療 carditis，可以預防 RHD', next: 'tx_gc' },
        { label: '關節炎用 NSAID，心臟沒有症狀就不用管', next: 'tx_noheart' }
      ]
    },
    tx_gc: {
      text: '主治醫師搖頭。',
      feedback: '沒有任何治療證實能改變 RHD 的發生或嚴重度。Glucocorticoids 在 ARF 有爭議，通常只用於 severe carditis 合併 heart failure。她沒有心衰竭。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_noheart: {
      text: '主治醫師搖頭。',
      feedback: '有 carditis 就要密切追蹤 echo，而且決定 secondary prophylaxis 的期間。另外別忘了 penicillin 清除 GAS。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    proph: {
      text: '兩週後關節炎完全消失，CRP 下降。1 個月後 echo 仍有 moderate MR。接下來的 secondary prophylaxis？',
      choices: [
        { label: 'Benzathine penicillin G 每 4 週 IM，持續**到 40 歲**（最後一次發作後至少 10 年，取較長）', next: 'end_good' },
        { label: '每 4 週 IM，持續 5 年', next: 'proph_short' },
        { label: '症狀都好了，不需要繼續打針', next: 'end_bad' }
      ]
    },
    proph_short: {
      text: '主治醫師搖頭。',
      feedback: '5 年或到 21 歲是給沒有 carditis 的病人。她有持續的 valvular disease：最後一次發作後 10 年或到 40 歲（取較長），有時終身。',
      choices: [{ label: '重新決定', next: 'proph' }]
    },
    end_good: {
      text: 'Mere 被登錄進國家 RHD registry。社區護理師每 4 週到學校幫她打針。三年後追蹤，MR 已減輕為 mild，沒有再發作。',
      ending: {
        grade: 'good',
        title: 'ARF with carditis',
        pearls: [
          'Migratory large-joint polyarthritis + 新雜音 + 前驅 sore throat',
          '所有疑似 ARF：ECG、echo、ASO + anti-DNase B',
          '治療不改變 RHD；secondary prophylaxis 才是控制主軸',
          '有持續 valvular disease：10 年或到 40 歲（取較長）'
        ]
      }
    },
    end_bad: {
      text: '十個月後 Mere 再次喉嚨痛、發燒、關節痛。這次 echo 顯示 severe MR 合併 mitral stenosis 的早期變化。',
      ending: {
        grade: 'bad',
        title: 'Recurrent ARF',
        pearls: [
          'ARF 病人再遇到 GAS 感染，復發風險比一般人高很多',
          '每次復發都加重瓣膜損傷，最後造成 stenosis',
          'Secondary prophylaxis 是 ARF/RHD 控制的核心'
        ]
      }
    }
  }
});

RPG.registerCase({
  id: 'arf-02',
  chapter: '371',
  title: '停不下來的手',
  patient: '13 歲女孩 · 國中生',
  summary: '老師說她上課一直扭來扭去，字也越寫越醜，脾氣變得很差。',
  cards: ['arf-path', 'chorea', 'jones', 'arf-prophylaxis'],
  start: 'intro',
  nodes: {
    intro: {
      text: [
        '醫療團的第二週。13 歲的 Ana 被媽媽帶來，坐在椅子上一直不自主地扭動，手指像在彈琴。',
        '「兩個月前開始，筷子拿不穩、字寫不好。她變得很愛哭，一點小事就發脾氣。老師以為她故意搗蛋。」'
      ],
      clue: ['13F；**不自主扭動**、手部動作笨拙 2 個月', '**Emotional lability**'],
      choices: [{ label: '問診', next: 'hx' }]
    },
    hx: {
      text: '大約四、五個月前喉嚨痛過一次。沒有發燒、沒有關節痛。沒有吃什麼藥，家族沒有神經疾病。',
      clue: '4-5 個月前 sore throat；**無發燒、無關節炎**',
      feedback: 'Chorea 的 latent period 可以長達 6 個月，而且常常單獨出現、沒有發燒。',
      choices: [{ label: '理學檢查', next: 'exam' }]
    },
    exam: {
      text: '你請 Ana 伸出舌頭、握住你的手。',
      checklist: {
        prompt: '理學檢查：勾選你要做的項目',
        submit: '完成理學檢查',
        revealLabel: '主治醫師補做',
        next: 'labs',
        options: [
          { id: 'neuro', group: '神經', label: '神經學檢查', key: true, reveal: true,
            result: '舌頭 **darting movements**（無法維持伸出）；握手時 **milkmaid grip**；雙側上肢為主', clue: '**Chorea**：darting tongue、milkmaid grip',
            miss: '主訴是不自主動作，要仔細做神經學檢查。' },
          { id: 'heart', group: '胸部', label: '心臟聽診', key: true, reveal: true,
            result: '無明顯雜音', clue: '聽診無雜音',
            miss: 'Chorea 病人一半以上有 carditis，一定要聽心臟。' },
          { id: 'joint', group: '關節', label: '關節', result: '正常' },
          { id: 'skin', group: '皮膚', label: '皮膚', result: '無皮疹' },
          { id: 'vitals', group: '一般', label: '生命徵象', result: 'BT 36.8；HR 88' },
          { id: 'thyroid', group: '頭頸', label: '甲狀腺', result: '無腫大' }
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
          { id: 'echo', group: '心臟', label: 'Echocardiography', key: true, reveal: true,
            result: '**Mild MR** 合併 anterior mitral leaflet 增厚（pathologic）', clue: '**Echo：subclinical carditis**（mild MR + leaflet thickening）',
            miss: '聽診沒雜音不代表沒有 carditis。Chorea 一半以上合併 carditis，一定要 echo。' },
          { id: 'ecg', group: '心臟', label: 'ECG', result: 'Normal sinus rhythm' },
          { id: 'aso', group: '鏈球菌', label: 'ASO、anti-DNase B', result: 'ASO 正常；anti-DNase B 輕度上升',
            clue: 'ASO 已回到正常', },
          { id: 'crp', group: '發炎', label: 'CRP、ESR', result: '正常' },
          { id: 'tsh', group: '其他', label: 'TSH', result: '正常' },
          { id: 'ana', group: '其他', label: 'ANA、aPL', result: '陰性', clue: 'ANA、aPL 陰性（排除 SLE、APS chorea）' },
          { id: 'cu', group: '其他', label: 'Ceruloplasmin', result: '正常' },
          { id: 'eeg', group: '其他', label: 'EEG', result: '正常',
            waste: '這是 chorea 不是 seizure，EEG 幫助不大。' }
        ]
      }
    },
    dx: {
      text: 'Chorea + echo 上的 subclinical carditis。ASO 已經正常了，還能診斷 ARF 嗎？',
      choices: [
        { label: '可以：chorea 和 indolent carditis 的 latent period 長，**不一定需要**前驅 GAS 證據；這是 ARF（Sydenham chorea + carditis）', next: 'tx' },
        { label: '不行：沒有 GAS 證據就不能診斷 ARF', next: 'dx_wrong' }
      ]
    },
    dx_wrong: {
      text: '主治醫師搖頭。',
      feedback: 'Chorea 和 low-grade carditis 是例外，它們可以在感染後好幾個月才出現，那時抗體可能已經下降。',
      choices: [{ label: '重新判斷', next: 'dx' }]
    },
    tx: {
      text: 'Ana 已經沒辦法自己吃飯、寫字。症狀治療？',
      choices: [
        { label: '**Carbamazepine 或 valproate**；必要時加 corticosteroid；同時開始 secondary prophylaxis', next: 'end_good' },
        { label: 'Haloperidol 第一線', next: 'tx_halo' },
        { label: 'Naproxen 消炎就好', next: 'tx_nsaid' },
        { label: 'IVIG 第一線', next: 'tx_ivig' }
      ]
    },
    tx_halo: {
      text: '主治醫師搖頭。',
      feedback: 'Severe chorea 優先選 carbamazepine 或 sodium valproate，而不是 haloperidol。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_nsaid: {
      text: '主治醫師搖頭。',
      feedback: 'Salicylates 和 NSAIDs 對 chorea 和 carditis 都沒有效，只用於 arthritis、arthralgia、fever。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    tx_ivig: {
      text: '主治醫師搖頭。',
      feedback: 'IVIG 只用於其他治療都無效的 severe refractory chorea。',
      choices: [{ label: '重新決定', next: 'tx' }]
    },
    end_good: {
      text: '開始 carbamazepine 兩週後，Ana 可以自己吃飯了。六週後 chorea 幾乎消失，但情緒起伏又持續了一陣子。她每 4 週打一次 benzathine penicillin。',
      ending: {
        grade: 'good',
        title: 'Sydenham chorea with subclinical carditis',
        pearls: [
          'Chorea：女性、latent period 長（可達 6 個月）、常單獨出現、可無發燒',
          '> 50% 合併 carditis：聽診正常也要 echo',
          'Chorea、indolent carditis 不一定需要前驅 GAS 證據',
          'Severe chorea：carbamazepine/valproate > haloperidol；NSAID 無效'
        ]
      }
    }
  }
});
