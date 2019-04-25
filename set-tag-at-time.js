var thermostat=<#The thermostat_[62]_1#>;
<@Set to sensor1 at@>.Task=function arm1() {
  try {
    thermostat.target=<#sensor1_[12|13|21|26|32|52|62|72|42]_1#>;
  } catch(e) {
    if (e.message=="TagDidNotRespondException") {
      KumoApp.setTimeout(function(){ arm1(); }, 8000);
    }
  }
};
<@Set to sensor2 at@>.Task=function arm2() {
  try {
    thermostat.target=<#sensor2_[12|13|21|26|32|52|62|72|42]_1#>;
  } catch(e) {
    if(e.message=="TagDidNotRespondException") {
      KumoApp.setTimeout(function(){ arm2(); }, 8000);
    }
  }
};
<@Set to sensor3 at@>.Task=function arm3() {
  try{
    thermostat.target=<#sensor3_[12|13|21|26|32|52|62|72|42]_1#>;
  } catch(e) {
    if(e.message=="TagDidNotRespondException") {
      KumoApp.setTimeout(function(){ arm3(); }, 8000);
    }
  }
};
<@Set to sensor4 at@>.Task=function arm4() {
  try {
    thermostat.target=<#sensor4_[12|13|21|26|32|52|62|72|42]_1#>;
  } catch(e) {
    if(e.message=="TagDidNotRespondException") {
      KumoApp.setTimeout(function(){ arm4(); }, 8000);
    }
  }
};
