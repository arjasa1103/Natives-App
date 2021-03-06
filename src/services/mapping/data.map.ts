import {HttpResponse} from "@angular/common/http";
import {Observable, pipe, UnaryFunction} from "rxjs";
import {map} from "rxjs/operators";

// Class to filter the returned output from backend so only the data is return
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
