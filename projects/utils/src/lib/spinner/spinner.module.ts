import { NgModule } from "@angular/core";
import { SpinnerComponent } from "./spinner.component";
import { SpinnerService } from "./spinner.service";

@NgModule({
    declarations: [SpinnerComponent],
    imports: [],
    exports: [SpinnerComponent],
    providers: [SpinnerService]
})
export class SpinnerModule {}