"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_controller_1 = require("./user/user.controller");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const common_module_1 = require("./common/common.module");
const role_module_1 = require("./role/role.module");
const permission_module_1 = require("./permission/permission.module");
const product_module_1 = require("./product/product.module");
const order_module_1 = require("./order/order.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: parseInt(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DATABASE,
                autoLoadEntities: true,
                synchronize: true,
            }),
            auth_module_1.AuthModule,
            common_module_1.CommonModule,
            role_module_1.RoleModule,
            permission_module_1.PermissionModule,
            product_module_1.ProductModule,
            order_module_1.OrderModule,
        ],
        controllers: [app_controller_1.AppController, user_controller_1.UserController],
        providers: [app_service_1.AppService,],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map