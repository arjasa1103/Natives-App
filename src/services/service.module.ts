import {ModuleWithProviders, NgModule} from "@angular/core";
import {Observable} from "rxjs";
import {AuthService} from "./api/auth.service";
import {Api} from "./libraries/api";

@NgModule()
export class ServiceModule {
    public static toAll(): ModuleWithProviders {
        return {
            ngModule: ServiceModule,
            providers: [
                Api,
                AuthService
            ]
        };
    }
}
