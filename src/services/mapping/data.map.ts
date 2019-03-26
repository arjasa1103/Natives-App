import {HttpResponse} from "@angular/common/http";
import {Observable, pipe, UnaryFunction} from "rxjs";
import {map} from "rxjs/operators";

export function mapToData<T extends HttpResponse<any>>(): UnaryFunction<Observable<any>, Observable<any>> {
    return pipe(
        map((result: any) => {
            if(result.data) {
                return result.data;
            }

            throw new Error("No data transformed");
        }),
    );
}
