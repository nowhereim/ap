import { Injectable } from '@nestjs/common';
import { logToSlackOnly, logger } from 'src/config/logconfig'; // logToSlackOnly import

@Injectable()
export class CustomLogger {
  logError(message: any) {
    const logMessage = `:bug: Concert 에서 에러가 발생했습니다. :pill:
    \`\`\` 
    ERROR : 
    ${JSON.stringify(message.message)}

    STACK : 
    ${JSON.stringify(message.stack)} 
    \`\`\`
   `;
    logToSlackOnly('error', logMessage); // 슬랙으로 로그 전송
    logger.error(message); // 로컬 로그
  }

  HttpError(message: any) {
    const logMessage = `:closed_lock_with_key: Concert 에서 HTTP 에러가 발생했습니다. :computer:
    \`\`\` 
    HTTP ERROR : 
    ${JSON.stringify(message)}
    \`\`\`
   `;

    logToSlackOnly('error', logMessage); // 슬랙으로 로그 전송
    logger.error(message); // 로컬 로그
  }

  delayHttpWarn(message: any) {
    const logMessage = `:warning: Concert 에서 딜레이가 발생했습니다. :pill:
    \`\`\` 
    DELAY : 
    ${JSON.stringify(message)}
    \`\`\`
   `;

    logToSlackOnly('warn', logMessage); // 슬랙으로 로그 전송
    logger.warn(message); // 로컬 로그
  }
}