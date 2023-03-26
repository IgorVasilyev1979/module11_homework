export function getPercents(percent, number) {
    return percent <= 100? number*percent/100 : "Invalid percent";
  }