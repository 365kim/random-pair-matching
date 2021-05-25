/* 하브루타 스터디 페어매칭용 상수 */

export const crewObj = {
  곤이: {
    isActive: true,
    studyTrioCount: 1,
    prevMissionPairs: ['체프', '카일', '썬', '유조', '심바', '디토', '엘라', '크리스'],
    prevStudyPairs: ['그루밍', '도비', '디토 피터', '브랜', '지그', '체프', '하루', '유조'],
    img: 'https://avatars.githubusercontent.com/u/59409762?v=4',
  },
  그루밍: {
    isActive: false,
    studyTrioCount: 1,
    prevMissionPairs: ['엘라', '파노', '인치', '브랜', '심바', '피터', '인치', '카일'],
    prevStudyPairs: ['디토', '곤이', '그루밍', '체프', '크리스', '썬', '카일', '유조'],
    img: 'https://avatars.githubusercontent.com/u/26598561?v=4',
  },
  도비: {
    isActive: false,
    studyTrioCount: 1,
    prevMissionPairs: ['주모', '콜린', '서니', '카일', '브콜', '체프', '엘라'],
    prevStudyPairs: ['디토', '곤이', '그루밍', '체프', '크리스', '썬', '카일', '유조', '피터'],
    img: 'https://avatars.githubusercontent.com/u/42544600?v=4',
  },
  동동: {
    isActive: false,
    studyTrioCount: 0,
    prevMissionPairs: ['심바', '브랜', '주모', '하루', '유조', '카일', '인치'],
    prevStudyPairs: [],
    img: 'https://avatars.githubusercontent.com/u/31029000?v=4',
  },
  디토: {
    isActive: true,
    studyTrioCount: 1,
    prevMissionPairs: ['인치', '크리스', '하루', '신세한탄', '썬', '곤이', '엘라', '주모'],
    prevStudyPairs: ['도비', '곤이', '피터', '유조', '체프', '지그', '콜린', '하루'],
    img: 'https://avatars.githubusercontent.com/u/64782636?v=4',
  },
  미키: {
    isActive: false,
    studyTrioCount: 1,
    prevMissionPairs: ['파노', '피터', '크리스', '주모', '카일', '브콜', '파노'],
    prevStudyPairs: [],
    img: 'https://avatars.githubusercontent.com/u/48755175?v=4',
  },
  브랜: {
    isActive: true,
    studyTrioCount: 1,
    prevMissionPairs: ['카일', '동동', '유조', '그루밍', '심바', '지그', '서니', '브콜'],
    prevStudyPairs: ['미키', '인치', '썬', '곤이', '피터', '하루', '그루밍', '체프', '콜린'],
    img: 'https://avatars.githubusercontent.com/u/52202474?v=4',
  },
  브콜: {
    isActive: false,
    studyTrioCount: 0,
    prevMissionPairs: ['크리스', '엘라', '티케', '썬', '도비', '미키', '브랜'],
    prevStudyPairs: [],
    img: 'https://avatars.githubusercontent.com/u/57767891?v=4',
  },
  서니: {
    isActive: true,
    studyTrioCount: 0,
    prevMissionPairs: ['티케', '체프', '도비', '지그', '신세한탄', '브랜', '콜린'],
    prevStudyPairs: ['크리스'],
    img: 'https://avatars.githubusercontent.com/u/67677561?v=4',
  },
  신세한탄: {
    isActive: false,
    studyTrioCount: 0,
    prevMissionPairs: ['다윗', '주모', '콜린', '디토', '서니', '하루', '티케'],
    prevStudyPairs: [],
    img: 'https://avatars.githubusercontent.com/u/67591151?v=4',
  },
  심바: {
    isActive: false,
    studyTrioCount: 0,
    prevMissionPairs: ['동동', '유조', '지그', '브랜', '그루밍', '곤이', '피터', '하루'],
    prevStudyPairs: [],
    img: 'https://avatars.githubusercontent.com/u/75007375?v=4',
  },
  썬: {
    isActive: true,
    studyTrioCount: 1,
    prevMissionPairs: ['콜린', '하루', '곤이', '브콜', '디토', '파노', '피터'],
    prevStudyPairs: ['유조', '미키', '브랜', '피터', '그루밍', '카일', '도비', '크리스', '지그'],
    img: 'https://avatars.githubusercontent.com/u/45230497?v=4',
  },
  엘라: {
    isActive: false,
    studyTrioCount: 0,
    prevMissionPairs: ['그루밍', '브콜', '파노', '카일', '티케', '체프', '곤이', '디토', '도비'],
    prevStudyPairs: [],
    img: 'https://avatars.githubusercontent.com/u/43339385?v=4',
  },
  유조: {
    isActive: true,
    studyTrioCount: 1,
    prevMissionPairs: ['하루', '심바', '브랜', '곤이', '동동', '티케', '체프', '지그'],
    prevStudyPairs: ['썬', '지그', '미키', '디토', '콜린', '하루', '도비', '곤이'],
    img: 'https://avatars.githubusercontent.com/u/61097373?v=4',
  },
  인치: {
    isActive: false,
    studyTrioCount: 0,
    prevMissionPairs: ['디토', '그루밍', '콜린', '파노', '크리스', '동동'],
    prevStudyPairs: [],
    img: 'https://avatars.githubusercontent.com/u/11311739?v=4',
  },
  주모: {
    isActive: false,
    studyTrioCount: 0,
    prevMissionPairs: ['도비', '신세한탄', '동동', '미키', '하루', '크리스', '디토'],
    prevStudyPairs: [],
    img: 'https://avatars.githubusercontent.com/u/40762111?v=4',
  },
  지그: {
    isActive: true,
    studyTrioCount: 1,
    prevMissionPairs: ['피터', '티케', '심바', '서니', '브랜', '콜린', '체프', '유조'],
    prevStudyPairs: ['인치', '체프', '유조', '콜린', '카일', '곤이', '디토', '썬'],
    img: 'https://avatars.githubusercontent.com/u/44080404?v=4',
  },
  체프: {
    isActive: false,
    studyTrioCount: 2,
    prevMissionPairs: ['곤이', '서니', '피터', '파노', '엘라', '도비', '지그', '유조'],
    prevStudyPairs: ['인치', '지그', '크리스', '도비', '디토', '곤이', '브랜, 그루밍'],
    img: 'https://avatars.githubusercontent.com/u/2542730?v=4"',
  },
  카일: {
    isActive: false,
    studyTrioCount: 1,
    prevMissionPairs: ['브랜', '곤이', '파노', '엘라', '도비', '미키', '동동', '그루밍'],
    prevStudyPairs: ['콜린', '크리스', '인치', '지그', '도비', '썬', '피터'],
    img: 'https://avatars.githubusercontent.com/u/57053577?v=4',
  },
  콜린: {
    isActive: false,
    studyTrioCount: 1,
    prevMissionPairs: ['썬', '도비', '신세한탄', '인치', '티케', '지그', '서니'],
    prevStudyPairs: ['카일', '지그', '그루밍', '하루', '유조', '피터', '디토', '브랜'],
    img: 'https://avatars.githubusercontent.com/u/46412689?v=4',
  },
  크리스: {
    isActive: true,
    studyTrioCount: 0,
    prevMissionPairs: ['브콜', '디토', '미키', '피터', '인치', '파노', '주모', '곤이'],
    prevStudyPairs: ['파노', '카일', '체프', '하루', '도비', '그루밍', '썬', '서니'],
    img: 'https://avatars.githubusercontent.com/u/32982670?v=4',
  },
  티케: {
    isActive: false,
    studyTrioCount: 0,
    prevMissionPairs: ['서니', '지그', '브콜', '엘라', '콜린', '유조', '신세한탄'],
    prevStudyPairs: ['파노', '카일', '체프', '하루', '도비', '그루밍', '썬'],
    img: 'https://avatars.githubusercontent.com/u/59258239?v=4',
  },
  파노: {
    isActive: false,
    studyTrioCount: 0,
    prevMissionPairs: ['미키', '그루밍', '엘라', '카일', '체프', '썬', '미키'],
    prevStudyPairs: ['크리스', '피터', '하루'],
    img: 'https://avatars.githubusercontent.com/u/44419181?v=4',
  },
  피터: {
    isActive: true,
    studyTrioCount: 2,
    prevMissionPairs: ['지그', '미키', '체프', '크리스', '그루밍', '심바', '썬'],
    prevStudyPairs: ['하루', '파노', '디토', '곤이', '썬', '브랜', '콜린', '카일', '도비'],
    img: 'https://avatars.githubusercontent.com/u/42052110?v=4',
  },
  하루: {
    isActive: true,
    studyTrioCount: false,
    prevMissionPairs: ['유조', '썬', '디토', '동동', '주모', '신세한탄', '심바'],
    prevStudyPairs: ['피터', '그루밍', '파노', '크리스', '유조, 콜린', '브랜', '곤이', '디토'],
    img: 'https://avatars.githubusercontent.com/u/60066472?v=4',
  },
};