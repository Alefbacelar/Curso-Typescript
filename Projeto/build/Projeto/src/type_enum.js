"use strict";
//Enumerar tipos de dados
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFFFFF";
    DesignColors["black"] = "000000";
})(DesignColors || (DesignColors = {}));
console.log(DesignColors.black);
console.log(DesignColors.white);
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["Admin"] = 0] = "Admin";
    StatusPermission[StatusPermission["User"] = 1] = "User";
    StatusPermission[StatusPermission["Suport"] = 2] = "Suport";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.Admin);
console.log(StatusPermission.User);
console.log(StatusPermission.Suport);
