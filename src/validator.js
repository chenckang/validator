/**
 * @file 验证器
 * @author chenkang01@baidu.com
 */

/**
 * @module 校验器模块
 */
var validator = {
    /**
     * @private
     * @param  {string} id Element Selector
     * @return {string}    去除首尾空格的元素value值
     */
    trimVal: function(id, container) {
        var val;
        if (container) {
            val = $(container).find(id).val();
        } else {
            val = $(id).val();
        }
        return val ? val.trim() : '';
    },
    /**
     * 检验函数
     * @param  {Array} vreg  e.g. {selector: [{reg, msg, flag}]}
     * @return {Object}      校验结果 rst：校验是否通过 msg：校验信息
     */
    validate: function(vreg, container) {
        var me = this;
        for (var i in vreg) {
            for (var j in vreg[i]) {
                var item = vreg[i][j],
                    flag = item.flag;
                var reg = item.reg,
                    msg = item.msg;
                //如果要求匹配正则
                if (flag === 0) {
                    if (reg && reg.test(me.trimVal(i, container))) {
                        return {rst: false, msg: msg};
                    }
                } else {
                //如果要求不匹配正则
                    if (reg &&!(reg.test(me.trimVal(i, container)))) {
                        return {rst: false, msg: msg};
                    }
                }
            }
        }
        return {rst: true, msg: ''};
    }
};

module.exports = validator;