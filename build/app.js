"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
exports.app = express_1.default();
const index_1 = require("./routes/index");
// view engine setup
exports.app.set('views', path_1.default.join(__dirname, 'views'));
exports.app.set('view engine', 'ejs');
exports.app.use(morgan_1.default('dev'));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
exports.app.use('/', index_1.router);
