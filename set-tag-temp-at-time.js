var tag=<#The tag_[12|13|21|32|52|72]_1#>;
<@Set to setting 1 at@>.Task=function () {
  try {
    var lowDegF = (<%setting 1 turns on heat below (deg F)_N%>-32) * (5/9);
    var highDegF = (<%setting 1 turns on AC above (deg F)_N%>-32) * (5/9);
    tag.setTempSensorThresholds(lowDegF, highDegF);
  } catch(e) {
    if (e.message=="TagDidNotRespondException") {
      KumoApp.setTimeout(function(){ arm1(); }, 8000);
    }
  }
};
<@Set to setting 2 at@>.Task=function () {
  try {
    var lowDegF = (<%setting 2 turns on heat below (deg F)_N%>-32) * (5/9);
    var highDegF = (<%setting 2 turns on AC above (deg F)_N%>-32) * (5/9);
    tag.setTempSensorThresholds(lowDegF, highDegF);
  } catch(e) {
    if (e.message=="TagDidNotRespondException") {
      KumoApp.setTimeout(function(){ arm1(); }, 8000);
    }
  }
};
<@Set to setting 3 at@>.Task=function () {
  try {
    var lowDegF = (<%setting 3 turns on heat below (deg F)_N%>-32) * (5/9);
    var highDegF = (<%setting 3 turns on AC above (deg F)_N%>-32) * (5/9);
    tag.setTempSensorThresholds(lowDegF, highDegF);
  } catch(e) {
    if (e.message=="TagDidNotRespondException") {
      KumoApp.setTimeout(function(){ arm1(); }, 8000);
    }
  }
};
