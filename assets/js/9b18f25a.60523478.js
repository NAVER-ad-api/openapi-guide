"use strict";(self.webpackChunkpa_openapi_docs=self.webpackChunkpa_openapi_docs||[]).push([[3105],{5089:e=>{e.exports=JSON.parse('{"url":"redocusaurus\\\\plugin-redoc-2.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.0","info":{"description":"description of your API","version":"v20230112","title":"GFA \uad11\uace0 API"},"tags":[{"name":"constants"},{"name":"targetings"},{"name":"\uad11\uace0\uadf8\ub8f9"},{"name":"\uc18c\uc7ac"},{"name":"\ucea0\ud398\uc778"}],"paths":{"/{version}/adAccounts/{adAccountNo}/adSets":{"get":{"tags":["\uad11\uace0\uadf8\ub8f9"],"summary":"\uad11\uace0\uadf8\ub8f9 \ub9ac\uc2a4\ud2b8 \uc870\ud68c","description":"","operationId":"getList","parameters":[{"name":"adAccountNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"$ref":"#/components/schemas/PageAdSetListView"}}}}}},"post":{"tags":["\uad11\uace0\uadf8\ub8f9"],"summary":"\uad11\uace0\uadf8\ub8f9 \uc0dd\uc131","description":"","operationId":"createAdSet","parameters":[{"name":"version","in":"path","required":true,"schema":{"type":"number","format":"float","default":1}},{"name":"adAccountNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/OpenAdSetCreationParam"}}}},"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"$ref":"#/components/schemas/OpenAdSetCreationParam"}}}}}},"delete":{"tags":["\uad11\uace0\uadf8\ub8f9"],"summary":"\uad11\uace0\uadf8\ub8f9 \ub2e4\uac74 \uc0ad\uc81c","description":"","operationId":"deleteAdSets","parameters":[{"name":"adAccountNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"adSetNos","in":"query","description":"\uad11\uace0\uadf8\ub8f9no \ubaa9\ub85d","required":true,"explode":true,"schema":{"type":"array","items":{"type":"integer","format":"int64"},"minItems":0,"maxItems":100}}],"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"boolean"}}}}}}},"/{version}/adAccounts/{adAccountNo}/adSets/activate":{"post":{"tags":["\uad11\uace0\uadf8\ub8f9"],"summary":"\uad11\uace0\uadf8\ub8f9 ON/OFF \ub2e4\uac74 \ubcc0\uacbd","description":"","operationId":"activateAdSets","parameters":[{"name":"adAccountNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"adSetNos","in":"query","description":"\uad11\uace0\uadf8\ub8f9no \ubaa9\ub85d","required":true,"explode":true,"schema":{"type":"array","items":{"type":"integer","format":"int64"},"minItems":0,"maxItems":100}},{"name":"activated","in":"query","description":"ON/OFF \uc124\uc815. (\uc608, true : ON)","required":true,"schema":{"type":"boolean"}}],"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"boolean"}}}}}}},"/{version}/adAccounts/{adAccountNo}/adSets/edit":{"post":{"tags":["\uad11\uace0\uadf8\ub8f9"],"summary":"\uad11\uace0\uadf8\ub8f9 \uc608\uc0b0/\uc785\ucc30\uac00/\ube44\uc6a9\uad00\ub9ac \ub2e4\uac74 \ubcc0\uacbd","description":"","operationId":"editAdSet","parameters":[{"name":"version","in":"path","required":true,"schema":{"type":"number","format":"float","default":1}},{"name":"adAccountNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AdSetEditParam"}}}},"responses":{"200":{"description":"\ubcc0\uacbd \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4.","content":{"*/*":{"schema":{"type":"boolean"}}}},"400":{"description":"\uc798\ubabb\ub41c \uc694\uccad\uc785\ub2c8\ub2e4.","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorResult"}}}},"422":{"description":"\ucc98\ub9ac\ud560 \uc218 \uc5c6\ub294 \uc0c1\ud0dc\uc785\ub2c8\ub2e4.","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorResult"}}}}}}},"/{version}/adAccounts/{adAccountNo}/adSets/sampleByCampaignNo":{"get":{"tags":["\uad11\uace0\uadf8\ub8f9"],"summary":"\uad11\uace0\uadf8\ub8f9 \uc0dd\uc131\uc2dc \uc0d8\ud50c","description":"\ucea0\ud398\uc778no \ud558\uc704 \uad11\uace0\uadf8\ub8f9 \uc0dd\uc131\uc744 \uc704\ud55c \uae30\ubcf8\uac12\uc73c\ub85c \ucc44\uc6cc\uc9c4 \uc0d8\ud50c","operationId":"sampleByCampaignNo","parameters":[{"name":"campaignNo","in":"query","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"$ref":"#/components/schemas/OpenAdSetCreationParam"}}}}}}},"/{version}/adAccounts/{adAccountNo}/adSets/typeInfoByCampaignNo":{"get":{"tags":["\uad11\uace0\uadf8\ub8f9"],"summary":"\uad11\uace0\uadf8\ub8f9 \uc0dd\uc131\uc2dc \ud0c0\uc785 \uc815\ubcf4","description":"\ucea0\ud398\uc778no \ud558\uc704 \uad11\uace0\uadf8\ub8f9 \uc0dd\uc131\uc744 \uc704\ud55c, \uc0ac\uc6a9\uac00\ub2a5\ud55c \ud0c0\uc785 \ubaa9\ub85d. \ub2e8, \ub2e4\ub978 \uc870\uac74\uc5d0 \ub530\ub77c \ubd88\uac00\ub2a5\ud55c \ucf00\uc774\uc2a4\uac00 \ubc1c\uc0dd\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.","operationId":"typeInfoByCampaignNo","parameters":[{"name":"campaignNo","in":"query","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"$ref":"#/components/schemas/AvailableTypesOfAdSet"}}}}}}},"/{version}/adAccounts/{adAccountNo}/adSets/{adSetNo}":{"get":{"tags":["\uad11\uace0\uadf8\ub8f9"],"summary":"\uad11\uace0\uadf8\ub8f9 \ub2e8\uac74 \uc870\ud68c","description":"","operationId":"getAdSet","parameters":[{"name":"adAccountNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"adSetNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"$ref":"#/components/schemas/OpenAdSetCreationParam"}}}}}},"delete":{"tags":["\uad11\uace0\uadf8\ub8f9"],"summary":"\uad11\uace0\uadf8\ub8f9 \uc0ad\uc81c","description":"","operationId":"deleteAdSet","parameters":[{"name":"version","in":"path","required":true,"schema":{"type":"number","format":"float","default":1}},{"name":"adAccountNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"adSetNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}},"/{version}/adAccounts/{adAccountNo}/campaigns/activate":{"post":{"tags":["\ucea0\ud398\uc778"],"summary":"\ucea0\ud398\uc778 ON/OFF \ub2e4\uac74 \ubcc0\uacbd","description":"","operationId":"activate","parameters":[{"name":"adAccountNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"campaignNos","in":"query","description":"\ucea0\ud398\uc778no \ubaa9\ub85d","required":true,"explode":true,"schema":{"type":"array","items":{"type":"integer","format":"int64"}}},{"name":"activated","in":"query","description":"ON/OFF \uc124\uc815. (\uc608, true : ON)","required":true,"schema":{"type":"boolean"}}],"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"boolean"}}}}}}},"/{version}/adAccounts/{adAccountNo}/campaigns/editBudget":{"post":{"tags":["\ucea0\ud398\uc778"],"summary":"\ucea0\ud398\uc778 \uc608\uc0b0 \ub2e4\uac74 \ubcc0\uacbd","description":"","operationId":"editBudget","parameters":[{"name":"adAccountNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"campaignNos","in":"query","description":"\ucea0\ud398\uc778no \ubaa9\ub85d","required":true,"explode":true,"schema":{"type":"array","items":{"type":"integer","format":"int64"}}},{"name":"campaignBudget","in":"query","description":"\ucea0\ud398\uc778 \uc608\uc0b0","required":true,"schema":{"type":"number"}}],"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"boolean"}}}}}}},"/{version}/adAccounts/{adAccountNo}/campaigns/{campaignNo}":{"delete":{"tags":["\ucea0\ud398\uc778"],"summary":"\ucea0\ud398\uc778 \uc0ad\uc81c","description":"","operationId":"delete","parameters":[{"name":"adAccountNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"campaignNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"boolean"}}}}}}},"/{version}/adAccounts/{adAccountNo}/creatives":{"get":{"tags":["\uc18c\uc7ac"],"summary":"\uc18c\uc7ac \ubaa9\ub85d \uc870\ud68c","description":"","operationId":"search","parameters":[{"name":"adAccountNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"campaignNo","in":"query","required":false,"schema":{"type":"integer","format":"int64"}},{"name":"adSetNo","in":"query","required":false,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"$ref":"#/components/schemas/PageOpenCreative"}}}}}},"delete":{"tags":["\uc18c\uc7ac"],"summary":"\uc18c\uc7ac \ub2e4\uac74 \uc0ad\uc81c","description":"http status code \uc5d0\ub7ec\ucf54\ub4dc\ubcc4 \uc124\uba85<br> - \uc5d0\ub7ec 400 \uc18c\uc7ac\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 or \uad11\uace0\uacc4\uc815 \ub0b4 \uc18c\uc7ac\uac00 \uc544\ub2d0 \uacbd\uc6b0 or \uae30\uc0ad\uc81c\ub418\uc5c8\uc744 \uacbd\uc6b0","operationId":"delete","parameters":[{"name":"version","in":"path","required":true,"schema":{"type":"number","format":"float"}},{"name":"adAccountNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"creativeNos","in":"query","required":true,"explode":true,"schema":{"type":"array","items":{"type":"integer","format":"int64"},"minItems":0,"maxItems":100}}],"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}},"/{version}/adAccounts/{adAccountNo}/creatives/activate":{"post":{"tags":["\uc18c\uc7ac"],"summary":"\uc18c\uc7ac ON/OFF \ub2e4\uac74 \ubcc0\uacbd.","description":"http status code \uc5d0\ub7ec\ucf54\ub4dc\ubcc4 \uc124\uba85<br> - \uc5d0\ub7ec 400 \uc18c\uc7ac\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0<br> - \uc5d0\ub7ec 400 draftCreativeNos\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0<br> - \uc5d0\ub7ec 422 & error.code=\'CONDITION_DOES_NOT_MEET\' : \uc18c\uc7ac\ub97c \uc218\uc815\ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0","operationId":"activate","parameters":[{"name":"version","in":"path","required":true,"schema":{"type":"number","format":"float"}},{"name":"adAccountNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"creativeNos","in":"query","required":true,"explode":true,"schema":{"type":"array","items":{"type":"integer","format":"int64"},"minItems":0,"maxItems":100}},{"name":"activated","in":"query","required":true,"schema":{"type":"boolean"}}],"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}},"/{version}/adAccounts/{adAccountNo}/creatives/image/upload":{"post":{"tags":["\uc18c\uc7ac"],"summary":"\uc18c\uc7ac \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc","description":"","operationId":"uploadImage","parameters":[{"name":"version","in":"path","required":true,"schema":{"type":"number","format":"float"}},{"name":"adAccountNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"sizeGroupNo","in":"query","description":"sizeGroupNo","required":true,"schema":{"type":"integer","format":"int32"}}],"requestBody":{"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"file":{"type":"string","format":"binary"}},"required":["file"]}}},"required":true},"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"$ref":"#/components/schemas/Image"}}}}}}},"/{version}/adAccounts/{adAccountNo}/creatives/{creativeNo}":{"delete":{"tags":["\uc18c\uc7ac"],"summary":"\uc18c\uc7ac \uc0ad\uc81c","description":"http status code \uc5d0\ub7ec\ucf54\ub4dc\ubcc4 \uc124\uba85<br> - \uc5d0\ub7ec 400 \uc18c\uc7ac\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 or \uad11\uace0\uacc4\uc815 \ub0b4 \uc18c\uc7ac\uac00 \uc544\ub2d0 \uacbd\uc6b0 or \uae30\uc0ad\uc81c\ub418\uc5c8\uc744 \uacbd\uc6b0","operationId":"delete","parameters":[{"name":"version","in":"path","required":true,"schema":{"type":"number","format":"float"}},{"name":"adAccountNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"creativeNo","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"$ref":"#/components/schemas/SuccessResponse"}}}}}}},"/{version}/constants/bidGoals":{"get":{"tags":["constants"],"operationId":"bidGoals","responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ConstantResponse"}}}}}}}},"/{version}/constants/bidStrategies":{"get":{"tags":["constants"],"operationId":"bidStrategies","responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ConstantResponse"}}}}}}}},"/{version}/constants/bidTypes":{"get":{"tags":["constants"],"operationId":"bidTypes","responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ConstantResponse"}}}}}}}},"/{version}/constants/budgetTypes":{"get":{"tags":["constants"],"operationId":"budgetTypes","responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ConstantResponse"}}}}}}}},"/{version}/constants/campaignObjectives":{"get":{"tags":["constants"],"operationId":"campaignObjectives","responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ConstantResponse"}}}}}}}},"/{version}/constants/creativeChooserTypes":{"get":{"tags":["constants"],"operationId":"creativeChooserTypes","responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ConstantResponse"}}}}}}}},"/{version}/constants/deviceTypes":{"get":{"tags":["constants"],"operationId":"deviceTypes","responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ConstantResponse"}}}}}}}},"/{version}/constants/frequencyAdUnits":{"get":{"tags":["constants"],"operationId":"frequencyAdUnits","responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ConstantResponse"}}}}}}}},"/{version}/constants/gender":{"get":{"tags":["constants"],"operationId":"genders","responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ConstantResponse"}}}}}}}},"/{version}/targetings/ageRanges":{"get":{"tags":["targetings"],"operationId":"ageRanges","responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/AgeRange"}}}}}}}},"/{version}/targetings/extendedDemo":{"get":{"tags":["targetings"],"operationId":"extendedDemoCodes","responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"object","additionalProperties":{"type":"array","items":{"$ref":"#/components/schemas/CodeKeywordResponse"}}}}}}}}},"/{version}/targetings/interests":{"get":{"tags":["targetings"],"operationId":"interests","responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/InterestKeywordResponse"},"uniqueItems":true}}}}}}},"/{version}/targetings/locations":{"get":{"tags":["targetings"],"operationId":"locations","responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/RegionCodeResponse"}}}}}}}},"/{version}/targetings/placementGroupCodes":{"get":{"tags":["targetings"],"operationId":"placementGroupCodes","responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ConstantResponse"}}}}}}}},"/{version}/targetings/purchaseIntent":{"get":{"tags":["targetings"],"operationId":"purchaseIntents","responses":{"200":{"description":"successful operation","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/InterestKeywordResponse"},"uniqueItems":true}}}}}}}},"servers":[{"url":"https://openapi.naver.com/v1/ad-api"}],"components":{"securitySchemes":{"basicAuth":{"type":"http","scheme":"basic"}},"schemas":{"AdSetEditBidPriceParam":{"allOf":[{"$ref":"#/components/schemas/AdSetEditParam"},{"type":"object","required":["bidPrice"],"properties":{"bidPrice":{"type":"number","example":10000,"description":"\uc785\ucc30\uac00"}}}]},"AdSetEditBidStrategyValueParam":{"allOf":[{"$ref":"#/components/schemas/AdSetEditParam"},{"type":"object","required":["bidStrategy","bidStrategyValue"],"properties":{"bidStrategy":{"type":"string","example":"BID_CAP","description":"\ube44\uc6a9 \uad00\ub9ac","enum":["BID_CAP","COST_CAP"]},"bidStrategyValue":{"type":"number","example":100000,"description":"\uc785\ucc30\uac00/\ube44\uc6a9 \ud55c\ub3c4"}}}]},"AdSetEditBudgetParam":{"allOf":[{"$ref":"#/components/schemas/AdSetEditParam"},{"type":"object","required":["budgetAmount"],"properties":{"budgetAmount":{"type":"number","example":100000,"description":"\uc608\uc0b0"}}}]},"AdSetEditParam":{"type":"object","required":["adSetNos","editType"],"discriminator":{"propertyName":"editType"},"properties":{"editType":{"type":"string","description":"\ubcc0\uacbd \ud30c\ub77c\ubbf8\ud130 \uad6c\ubd84"},"adSetNos":{"type":"array","description":"\uad11\uace0\uadf8\ub8f9no \ubaa9\ub85d","items":{"type":"integer","format":"int64"},"maxItems":100,"minItems":0}}},"AdSetListView":{"type":"object","properties":{"no":{"type":"integer","format":"int64"},"name":{"type":"string"},"campaignNo":{"type":"integer","format":"int64"},"campaignName":{"type":"string"},"activated":{"type":"boolean"},"bidGoal":{"type":"string","enum":["MAX_CLICK","MAX_CONV","NONE"]},"budgetType":{"type":"string","enum":["DAILY","TOTAL"]},"budgetAmount":{"type":"number"},"spentBudgetRatio":{"type":"number"},"bidType":{"type":"string","enum":["CPC","CPM","CPV"]},"bidPrice":{"type":"number"},"status":{"type":"string","enum":["RUNNABLE","BEFORE_STARTING","TERMINATED","DELETED","BUDGET_EXHAUSTED","LOW_TARGETED","TARGET_DISABLED","LEARNING","LEARNING_LIMITED"]},"timezoneOffset":{"type":"string"},"objective":{"type":"string","enum":["CONVERSION","WEB_SITE_TRAFFIC","INSTALL_APP","WATCH_VIDEO","CATALOG","SHOPPING"]},"startTime":{"type":"string","format":"date-time"},"endTime":{"type":"string","format":"date-time"},"placementGroups":{"type":"array","items":{"$ref":"#/components/schemas/PlacementGroup"}},"bidStrategy":{"type":"string","enum":["FIXED_BID","BID_CAP","COST_CAP","NO_CAP","TARGET_COST"]},"bidStrategyValue":{"type":"number"},"autoBidStatus":{"type":"string","enum":["LEARNING","RE_LEARNING","STABLE","LIMITED"]},"allPlacementGroup":{"type":"boolean"},"interestIntersection":{"type":"boolean"},"stats":{"$ref":"#/components/schemas/AdSetStats"}}},"AdSetStats":{"type":"object","properties":{"active":{"type":"boolean"},"status":{"type":"string"},"bidType":{"type":"string","enum":["CPC","CPM","CPV"]},"multiBidType":{"type":"boolean"},"impCount":{"type":"integer","format":"int64"},"clickCount":{"type":"integer","format":"int64"},"vplayCount":{"type":"integer","format":"int64"},"videoImpCount":{"type":"integer","format":"int64"},"autoPlayCount":{"type":"integer","format":"int64"},"clickPlayCount":{"type":"integer","format":"int64"},"prog25Count":{"type":"integer","format":"int64"},"prog50Count":{"type":"integer","format":"int64"},"prog75Count":{"type":"integer","format":"int64"},"prog95Count":{"type":"integer","format":"int64"},"sales":{"type":"number"},"cpc":{"type":"number"},"cpv":{"type":"number"},"ctr":{"type":"number"},"vtr":{"type":"number"},"cpm":{"type":"number"},"resultCount":{"type":"number"},"resultString":{"type":"string"},"salesPerResult":{"type":"number"},"salesPerResultString":{"type":"string"},"reachImp":{"type":"number"},"reachSales":{"type":"number"},"adSetName":{"type":"string"},"adSetNo":{"type":"integer","format":"int64"},"failedToLoad":{"type":"boolean"}}},"AgeRange":{"type":"object","properties":{"from":{"type":"integer","format":"int32"},"to":{"type":"integer","format":"int32"}}},"AvailableTypesOfAdSet":{"type":"object","properties":{"deviceTypes":{"type":"array","items":{"type":"string","enum":["DESKTOP","MOBILE","UNKNOWN"]}},"placementGroupCodes":{"type":"array","items":{"type":"string"}},"bidGoals":{"type":"array","items":{"type":"string","enum":["MAX_CLICK","MAX_CONV","NONE"]}},"bidStrategies":{"type":"array","items":{"type":"string","enum":["FIXED_BID","BID_CAP","COST_CAP","NO_CAP","TARGET_COST"]}},"bidTypes":{"type":"array","items":{"type":"string","enum":["CPC","CPM","CPV"]}},"budgetTypes":{"type":"array","items":{"type":"string","enum":["DAILY","TOTAL"]}}}},"CodeKeywordResponse":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"keyword":{"type":"string"}}},"ConstantResponse":{"type":"object","properties":{"value":{"type":"string"},"name":{"type":"string"},"extra":{"type":"string"}}},"Error":{"type":"object","properties":{"code":{"type":"string","enum":["CASE_1","CASE_2","CASE_3","CASE_4","CASE_5","CONDITION_DOES_NOT_MEET","DATA_NOT_EXIST","DATA_CONCURRENCY_PROBLEM","DUPLICATED_VALUE","ALREADY_DONE","NOT_ALLOWED_FILE_TYPE","INVALID_PARAMETER","INVALID_URL","INVALID_SHOPPING","BAD_REQUEST","AUTH_ERROR","UNDER_CONSTRUCTION","UNKNOWN_ERROR"]},"detailCode":{"type":"string"},"message":{"type":"string"},"description":{"type":"string"},"extra":{"type":"object"}}},"ErrorResult":{"type":"object","properties":{"error":{"$ref":"#/components/schemas/Error"}}},"Image":{"type":"object","properties":{"no":{"type":"integer","format":"int64"},"adAccountNo":{"type":"integer","format":"int64"},"sizeGroupNo":{"type":"integer","format":"int32"},"imageUrl":{"type":"string"},"width":{"type":"integer","format":"int32"},"height":{"type":"integer","format":"int32"},"fileSize":{"type":"integer","format":"int64"},"filename":{"type":"string"},"createdAt":{"type":"string","format":"date-time"}}},"InterestKeywordResponse":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"keyword":{"type":"string"},"depth":{"type":"integer","format":"int32"},"children":{"type":"array","uniqueItems":true,"items":{"$ref":"#/components/schemas/InterestKeywordResponse"}}}},"OpenAdSetCreationParam":{"type":"object","required":["campaignNo","name"],"properties":{"no":{"type":"integer","format":"int64"},"campaignNo":{"type":"integer","format":"int64"},"name":{"type":"string"},"genders":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["M","F","U"]}},"ageRanges":{"type":"array","uniqueItems":true,"items":{"$ref":"#/components/schemas/AgeRange"}},"locations":{"type":"array","uniqueItems":true,"items":{"type":"string"}},"extensionDemos":{"type":"array","uniqueItems":true,"items":{"type":"integer","format":"int32"}},"interestKeywordFirstCodes":{"type":"array","uniqueItems":true,"items":{"type":"integer","format":"int32"}},"interestKeywordSecondCodes":{"type":"array","uniqueItems":true,"items":{"type":"integer","format":"int32"}},"interestKeywordThirdCodes":{"type":"array","uniqueItems":true,"items":{"type":"integer","format":"int32"}},"interestKeywordFourthCodes":{"type":"array","uniqueItems":true,"items":{"type":"integer","format":"int32"}},"purchaseIntentCodes":{"type":"array","uniqueItems":true,"items":{"type":"integer","format":"int32"}},"devices":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["DESKTOP","MOBILE","UNKNOWN"]}},"platforms":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["UNKNOWN","ANDROID","IOS","WINDOWS","MACOS"]}},"allDevice":{"type":"boolean"},"placementGroupCodes":{"type":"array","uniqueItems":true,"items":{"type":"string"}},"allPlacementGroup":{"type":"boolean"},"bidGoal":{"type":"string","enum":["MAX_CLICK","MAX_CONV","NONE"]},"bidStrategy":{"type":"string","enum":["FIXED_BID","BID_CAP","COST_CAP","NO_CAP","TARGET_COST"]},"bidStrategyValue":{"type":"number"},"bidType":{"type":"string","enum":["CPC","CPM","CPV"]},"bidPrice":{"type":"number"},"budgetType":{"type":"string","enum":["DAILY","TOTAL"]},"budgetAmount":{"type":"number"},"startTime":{"type":"string","format":"date-time"},"endTime":{"type":"string","format":"date-time"},"ongoing":{"type":"boolean"},"scheduleTimeSlots":{"type":"array","uniqueItems":true,"items":{"$ref":"#/components/schemas/ScheduleTimeSlot"}},"accelerated":{"type":"boolean"},"creativeChooserType":{"type":"string","enum":["CTR_WEIGHTED_RANDOM","SIMPLE_RANDOM","THOMSON_SAMPLING"]},"frequencyAdUnit":{"type":"string","enum":["AD_SET","CREATIVE"]},"quota":{"type":"integer","format":"int32"},"status":{"type":"string","enum":["RUNNABLE","BEFORE_STARTING","TERMINATED","DELETED","BUDGET_EXHAUSTED","LOW_TARGETED","TARGET_DISABLED","LEARNING","LEARNING_LIMITED"]},"spentBudgetRatio":{"type":"number"}}},"OpenCreative":{"type":"object","properties":{"no":{"type":"integer","format":"int64"},"name":{"type":"string"},"status":{"type":"string"},"activated":{"type":"boolean"},"adSetNo":{"type":"integer","format":"int64"},"adSetName":{"type":"string"},"campaignNo":{"type":"integer","format":"int64"},"campaignName":{"type":"string"},"image":{"$ref":"#/components/schemas/Image"}}},"Page":{"type":"object","properties":{"totalElements":{"type":"integer","format":"int64"},"totalPages":{"type":"integer","format":"int32"},"size":{"type":"integer","format":"int32"},"content":{"type":"array","items":{"type":"object"}},"number":{"type":"integer","format":"int32"},"sort":{"$ref":"#/components/schemas/Sort"},"first":{"type":"boolean"},"numberOfElements":{"type":"integer","format":"int32"},"last":{"type":"boolean"},"pageable":{"$ref":"#/components/schemas/Pageable"},"empty":{"type":"boolean"}}},"PageAdSetListView":{"type":"object","properties":{"totalElements":{"type":"integer","format":"int64"},"totalPages":{"type":"integer","format":"int32"},"size":{"type":"integer","format":"int32"},"content":{"type":"array","items":{"$ref":"#/components/schemas/AdSetListView"}},"number":{"type":"integer","format":"int32"},"sort":{"$ref":"#/components/schemas/Sort"},"first":{"type":"boolean"},"numberOfElements":{"type":"integer","format":"int32"},"last":{"type":"boolean"},"pageable":{"$ref":"#/components/schemas/Pageable"},"empty":{"type":"boolean"}}},"PageOpenCreative":{"type":"object","properties":{"totalElements":{"type":"integer","format":"int64"},"totalPages":{"type":"integer","format":"int32"},"size":{"type":"integer","format":"int32"},"content":{"type":"array","items":{"$ref":"#/components/schemas/OpenCreative"}},"number":{"type":"integer","format":"int32"},"sort":{"$ref":"#/components/schemas/Sort"},"first":{"type":"boolean"},"numberOfElements":{"type":"integer","format":"int32"},"last":{"type":"boolean"},"pageable":{"$ref":"#/components/schemas/Pageable"},"empty":{"type":"boolean"}}},"Pageable":{"type":"object","properties":{"offset":{"type":"integer","format":"int64"},"sort":{"$ref":"#/components/schemas/Sort"},"pageNumber":{"type":"integer","format":"int32"},"unpaged":{"type":"boolean"},"paged":{"type":"boolean"},"pageSize":{"type":"integer","format":"int32"}}},"PlacementGroup":{"type":"object","properties":{"code":{"type":"string"},"name":{"type":"string"},"publisherGroupCode":{"type":"string"},"productType":{"type":"string","enum":["SMARTCHANNEL","BANNER","FEED","INSTREAM","SHOPPING"]},"managerId":{"type":"string"},"displayOrder":{"type":"integer","format":"int32"},"basisGrade":{"type":"integer","format":"int32"},"hidden":{"type":"boolean"},"betaExposable":{"type":"boolean"},"exposablePhases":{"type":"array","items":{"type":"string"}},"updatedAt":{"type":"string","format":"date-time"}}},"RegionCodeResponse":{"type":"object","properties":{"rcode":{"type":"string"},"location":{"type":"string"},"level":{"type":"integer","format":"int32"},"country":{"type":"string","enum":["KR","US"]},"childLocations":{"type":"array","items":{"$ref":"#/components/schemas/RegionCodeResponse"}}}},"ScheduleTimeSlot":{"type":"object","properties":{"no":{"type":"integer","format":"int64"},"adSetNo":{"type":"integer","format":"int64"},"dayOfWeek":{"type":"integer","format":"int32"},"startHour":{"type":"integer","format":"int32"},"endHour":{"type":"integer","format":"int32"},"updaterId":{"type":"string"}}},"Sort":{"type":"object","properties":{"sorted":{"type":"boolean"},"unsorted":{"type":"boolean"},"empty":{"type":"boolean"}}},"SuccessResponse":{"type":"object","properties":{"success":{"type":"boolean"},"message":{"type":"string"},"description":{"type":"string"}}}}}}}')}}]);