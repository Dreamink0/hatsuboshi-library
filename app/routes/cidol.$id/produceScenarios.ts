import { getAssetImgUrl, hajimeImg, hajimeLegendImg, hifImg, niaImg } from "~/assets/media";
import { ProduceType } from "~/types/proto/penum";

export const getProduceScenarioStrings = (
  produceId: string,
) => {
  switch (produceId) {
    case "produce-001": return {
      title: "Scenario: HAJIME",
      imgUrl: getAssetImgUrl(hajimeImg),
      produceType: ProduceType.FirstStar,
      difficulty: "Regular",
    }
    case "produce-002": return {
      title: "Scenario: HAJIME",
      imgUrl: getAssetImgUrl(hajimeImg),
      produceType: ProduceType.FirstStar,
      difficulty: "Pro",
    }
    case "produce-003": return {
      title: "Scenario: HAJIME",
      imgUrl: getAssetImgUrl(hajimeImg),
      produceType: ProduceType.FirstStar,
      difficulty: "Master",
    }
    case "produce-004": return {
      title: "Scenario: N.I.A",
      imgUrl: getAssetImgUrl(niaImg),
      produceType: ProduceType.NextIdolAudition,
      difficulty: "Pro",
    }
    case "produce-005": return {
      title: "Scenario: N.I.A",
      imgUrl: getAssetImgUrl(niaImg),
      produceType: ProduceType.NextIdolAudition,
      difficulty: "Master",
    }
    case "produce-006": return {
      title: "Scenario: HAJIME Legend",
      imgUrl: getAssetImgUrl(hajimeLegendImg),
      produceType: ProduceType.FirstStar,
      difficulty: "",
    }
    case "produce-007": return {
      title: "Scenario: H.I.F Selection",
      imgUrl: getAssetImgUrl(hifImg),
      produceType: ProduceType.HatsuboshiIdolFestival,
      difficulty: "",
    }
    case "produce-008": return {
      title: "Scenario: H.I.F Tournament",
      imgUrl: getAssetImgUrl(hifImg),
      produceType: ProduceType.HatsuboshiIdolFestival,
      difficulty: "",
    }
    default: return {
      title: "Unknown",
      imgUrl: "",
      produceType: ProduceType.Unknown,
      difficulty: "Unknown",
    }
  }
}
