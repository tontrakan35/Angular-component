import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorCodePipe'
})
export class ErrorCodePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // if (args == "TH"){
    //   if(value == "001") return "MaiDaiTerNet"
    //   if(value == "002") return "PeenTeeMaiPor" 
    // }else if(args == "EN"){
    //   if(value == "001") return "No Internet"
    //   if(value == "002") return "No Diskspace"
    // }   
  }
}
