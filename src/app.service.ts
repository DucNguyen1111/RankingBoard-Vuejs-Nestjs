import { UserInfo } from './interfaces/user_info';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  countingSolvedProb(HTMLuser: any, userInfo: UserInfo): Promise<number> {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          const regex = /((.|\n)*)Danh sách các bài đã làm nhưng chưa đạt yêu cầu/igm;
          const htmlUserTemplate: string = HTMLuser.data;
          const htmlSolvedUserTemplate: Array<string> = htmlUserTemplate.match(regex);
          const solvedRegex = new RegExp(`/PTIT/status/.+,${userInfo.userId}`, 'igm');
          const solvedProblems = htmlSolvedUserTemplate[0].match(solvedRegex).length;
          resolve(solvedProblems);
        } catch (error) {
          reject(error);
        }
      }, 10)
    });
  }
}
