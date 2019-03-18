sap.ui.define(      
    ["sap/ui/model/SimpleType"], 
    
    function(SimpleType){
        "use strict";
        
        return {
            PhoneNumber: SimpleType.extend("stonetest.phoneNumber", {
                // formatter
                formatValue: function(sValue){
                    sValue = sValue.replace(/-/g, "");
                    if (sValue.substr(0, 1) == "1") {// 第一个字符为1，手机号码
                        return sValue.substr(0,3) + "-" + sValue.substr(3,4)
                            + "-" + sValue.slice(7);
                    }
                },
                
                // parse value
                parseValue: function(oValue){
                    return oValue;
                },
                
                // validation
                validateValue:function(sValue){
                    sValue = sValue.replace(/-/g, "");
                    if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(sValue)){
                        throw new sap.ui.model.ValidateException("手机号码格式错误!");
                    }
                }
            })
        }
    }
);