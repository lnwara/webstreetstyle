;var smAVApiVersion='5.2.1.5',smloadEventSend=!1,smPlayer=null,playerDivContainer='sm_player',playerUrl='https://player.aniview.com/script/6.1/aniview.js',smWaterfallArr={data:{tags:[]}};var smAniAdConfig={publisherId:'58ff0b58073ef41af820a6ec',channelId:'58ff18ac073ef43d4f259eef',noifsnd:!0,HD:!1,position:playerDivContainer,soundButton:!0,pauseButton:!0,closeButton:!1,vastRetry:1};function waterfallFunc(e){e(smWaterfallArr,'56FDx98')};var smSReventsDictionary={'request':'AD_REQUEST','bid':'AD_PLAY','impression':'IMPRESSION','midpoint':'AD_VERIFY','complete':'COMPLETE','click':'AD_CLICK','AdError':'AD_ERROR','vpaidPlayError':'AD_CANCEL','aderror':'AD_ERROR'};function smConvertAVtoGeneral(e,t,i){var a=e;if(smSReventsDictionary[e]){a=smSReventsDictionary[e]};SMreportEvent(a,i,t)};function buildAniviewSetupObject(e){if(!document.getElementById(playerDivContainer)){var a=document.createElement('div');a.id=playerDivContainer;a.style.width=e.width.toString()+'px';a.style.height=e.height.toString()+'px';document.body.appendChild(a)};printLogs(JSON.stringify(e));smoperational.hftResponseType=e.responseType;smoperational.waterfallStr=e.waterfallId;smMembers.sessionTTL=e.hftRefresh*1000;smoperational.impressionPixel=e.impressionPixel;smoperational.clickPixel=e.clickPixel;smoperational.completePixel=e.completePixel;var g=Math.min(e.tagList.length,e.waterfallSize),n=0;for(var t=0;t<g;t++){var l=!0;try{l=advertiserKeyWordsFiltering(smMainResponse.tagList[t].advId)}catch(f){};if(e.tagList[t].tagUrl.indexOf('http')==0&&l){var i=0;if(e.tagList[t].type=='HTML'){i=i+100};i=i+100-n;var p={url:e.tagList[t].tagUrl,asid:e.tagList[t].id.toString(),tagTimeout:e.tagTimeout*1000,priority:e.tagList[t].order,price:i,type:'vast'};smWaterfallArr.data.tags[n]=p;smTagsObjects[e.tagList[t].id]=e.tagList[t];smTagsObjects[e.tagList[t].id].starttime=0;smTagsObjects[e.tagList[t].id].imptime=0;smTagsObjects[e.tagList[t].id].requests=0;smTagsObjects[e.tagList[t].id].errors=0;smTagsObjects[e.tagList[t].id].impressions=0;smTagsObjects[e.tagList[t].id].completes=0;smTagsObjects[e.tagList[t].id].verifys=0;smTagsObjects[e.tagList[t].id].dprice=((e.tagList[t].price*smoperational.cpmWeight)/100).toFixed(2);n++}};var o=smWaterfallArr.data.tags;o.sort(function(e,t){return parseFloat(t.price)-parseFloat(e.price)});var m=o.length;for(var t=0;t<m;t++){smWaterfallArr.data.tags[t].priority=t+1};var s=30;if(e.mid>0){s=Math.round(60/(e.mid))};var r=(e.loopNumber>0?!0:!1),d=((e.responseType=='STATIC')&&!r?!0:!1);smAniAdConfig.width=e.width;smAniAdConfig.height=e.height;smAniAdConfig.loop=r;smAniAdConfig.autoPlay=e.autostart;smAniAdConfig.startdelay=s;smAniAdConfig.startmidroll=s;smAniAdConfig.autoSound=e.sound;smAniAdConfig.ref1='';smAniAdConfig.mode=0;smAniAdConfig.logo=!1;smAniAdConfig.lastFrame=d;smAniAdConfig.waterfall=waterfallFunc;smAniAdConfig.preloader={type:'content',link:e.video,poster:'',clickthrough:smoperational.click+e.landing_page};smWaterfallArr.data.onEvent=function(e,t,i){if(e.indexOf('vpaid')==0||e.indexOf('vast')==0){e='aderror'};var a='';try{a=(i?JSON.stringify(i):'')}catch(s){};if(t||e=='impression'){smConvertAVtoGeneral(e,t,a)}};function c(t,a){if(smPlayer){smPlayer.close()};var i=document.getElementById(smAniAdConfig.position);if(i&&i.childNodes.length>0){while(i.childNodes.length>0){i.removeChild(i.childNodes[0])}};if(!document.getElementById(smAniAdConfig.position)){var s=document.createElement('div');s.id=smAniAdConfig.position;s.style.width=e.width.toString()+'px';s.style.height=e.height.toString()+'px';document.body.appendChild(s)};var r=new Date().getTime(),n=document.createElement('script');n.src=t;n.onload=function(){smPlayer=new avPlayer(a);if(!smloadEventSend&&!smoperational.isSentLoad){smoperational.clientVersion=smoperational.clientVersion+'_api_'+smAVApiVersion;var e=new Date().getTime(),i=e-r;reportUrlTiming(t,i);SMreportEvent('LOAD','');smoperational.isSentLoad=!0;smloadEventSend=!0};smPlayer.play(smAniAdConfig)};document.getElementsByTagName('head')[0].appendChild(n)};c(playerUrl,smAniAdConfig)};buildAniviewSetupObject(smMainResponse);