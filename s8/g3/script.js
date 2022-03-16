var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Calcolo = /** @class */ (function () {
    function Calcolo(redditoAnnuoLordo, tasseInps, tasseIrpef) {
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    Calcolo.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo;
    };
    Calcolo.prototype.getTasseInps = function () {
        return this.tasseInps -= this.redditoAnnuoLordo;
    };
    Calcolo.prototype.getTasseIrpef = function () {
        return this.tasseIrpef;
    };
    Calcolo.prototype.getRedditoAnnuoNetto = function () {
        return this.tasseIrpef += this.tasseInps -= this.redditoAnnuoLordo;
    };
    return Calcolo;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(redditoAnnuoLordo, tasseInps, tasseIrpef) {
        return _super.call(this, redditoAnnuoLordo, tasseInps, tasseIrpef) || this;
    }
    return Lavoratore;
}(Calcolo));
var stipendio = new Lavoratore(30000, 24, 10);
console.log(stipendio.getRedditoAnnuoNetto());
