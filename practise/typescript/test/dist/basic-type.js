var tp = ["string", 1];
var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus[DeliveryStatus["Ready"] = 1] = "Ready";
    DeliveryStatus[DeliveryStatus["End"] = 2] = "End";
})(DeliveryStatus || (DeliveryStatus = {}));
var End = DeliveryStatus.End;
// End = '123'
var str = "string";
var strLength = str.length;
str = 123;
var tom = {
    name: "tom",
    gender: 'man'
};
// type IPerson = { name: string; } | { setName(name:string): void };
var CMan = /** @class */ (function () {
    function CMan() {
    }
    CMan.prototype.setName = function (name) {
        // todo
    };
    CMan.prototype.PersonEat = function (food, num) {
        return !!food && !!num;
    };
    return CMan;
}());
var props;
var data = { title: "订单页面" };
var data1 = { title: "订单页面" };
props = data;
// Error:类型“dataType1”不可分配给类型“propType”; 类型“dataType1”中缺少索引签名
// props = data1
//# sourceMappingURL=basic-type.js.map