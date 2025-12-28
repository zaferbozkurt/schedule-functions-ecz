/**
 * Firebase Scheduled Functions - Basit Örnek
 */

import { setGlobalOptions } from "firebase-functions";
import { onSchedule } from "firebase-functions/v2/scheduler";
import * as logger from "firebase-functions/logger";

// Maliyet kontrolü için global ayar
setGlobalOptions({ maxInstances: 10 });

/**
 * Her gün saat 09:00'da (Türkiye saati) çalışan basit bir scheduled function
 */
export const dailyJob = onSchedule(
  {
    schedule: "0 7 * * *",
    timeZone: "Europe/Istanbul",
  },
  async (event) => {
    logger.info("Günlük görev çalıştı!", {
      scheduledTime: event.scheduleTime,
      message: "Bu fonksiyon her gün saat 07:00'da otomatik olarak tetiklenir.",
    });
  }
);
