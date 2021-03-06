import gql from 'graphql-tag';

export default gql`
  fragment SkillForceServerNameParts on SkillForceServer {
    strCode
    nClass
    nIconIDX
    nMastIndex
    strMastKorName
    strMastEngName
    strKorName
    strEngName
    nLv
    bActivate
    bEnable
    strUsableRace
    strActableDst
    strGradeLimit
    nNeedMastIndex
    strFixWeapon
    bFixshield
    nSpecialType
    nNeedSpecialType
    nNeedHP
    nNeedFP
    nNeedSP
    itmNeedItemCode__1_1
    nNeedItemCount__1_2
    itmNeedItemCode__2_1
    nNeedItemCount__2_2
    itmNeedItemCode__3_1
    nNeedItemCount__3_2
    fActDelay
    bCumulType
    nCumulCounter
    nNewEffCount
    strEffectCode
    nAttackable
    nAttType__1
    nAttType__2
    nAttType__3
    nAttType__4
    nAttType__5
    nAttType__6
    nAttType__7
    nAttConstant__1
    nAttConstant__2
    nAttConstant__3
    nAttConstant__4
    nAttConstant__5
    nAttConstant__6
    nAttConstant__7
    fAttFormulaConstant
    nAttNeedBt
    nBonusDistance
    strRangeEffCode
    nTempEffectType
    nTempParamCode
    fTempValue__1
    fTempValue__2
    fTempValue__3
    fTempValue__4
    fTempValue__5
    fTempValue__6
    fTempValue__7
    nContEffectType
    nEffLimType
    nEffLimType2
    nContAreaType
    nContParamCode__1_1
    nContParamIndex__1_2
    fContValue__1_3_1
    fContValue__1_3_2
    fContValue__1_3_3
    fContValue__1_3_4
    fContValue__1_3_5
    fContValue__1_3_6
    fContValue__1_3_7
    nContParamCode__2_1
    nContParamIndex__2_2
    fContValue__2_3_1
    fContValue__2_3_2
    fContValue__2_3_3
    fContValue__2_3_4
    fContValue__2_3_5
    fContValue__2_3_6
    fContValue__2_3_7
    nContParamCode__3_1
    nContParamIndex__3_2
    fContValue__3_3_1
    fContValue__3_3_2
    fContValue__3_3_3
    fContValue__3_3_4
    fContValue__3_3_5
    fContValue__3_3_6
    fContValue__3_3_7
    nContParamCode__4_1
    nContParamIndex__4_2
    fContValue__4_3_1
    fContValue__4_3_2
    fContValue__4_3_3
    fContValue__4_3_4
    fContValue__4_3_5
    fContValue__4_3_6
    fContValue__4_3_7
    nContParamCode__5_1
    nContParamIndex__5_2
    fContValue__5_3_1
    fContValue__5_3_2
    fContValue__5_3_3
    fContValue__5_3_4
    fContValue__5_3_5
    fContValue__5_3_6
    fContValue__5_3_7
    nContEffectSec__1
    nContEffectSec__2
    nContEffectSec__3
    nContEffectSec__4
    nContEffectSec__5
    nContEffectSec__6
    nContEffectSec__7
    nEtc
    f1s2speed
    f1s2distance
    f2s3speed
    f2s3distance
    nEffectClass
  }
`;
