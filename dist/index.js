"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
const uri = "mongodb+srv://admin:admin123@hop-2.xrzll2f.mongodb.net/?retryWrites=true&w=majority";
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
    try {
        mongoose_1.default.connect(uri, {}).then(() => {
            console.log("Connected to DB");
        });
    }
    catch (error) {
        console.error("Could not connect to DB");
        process.exit(1);
    }
    (0, routes_1.default)(app);
});
//# sourceMappingURL=index.js.map