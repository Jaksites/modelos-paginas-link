import type { BusinessHoursConfig, DaySchedule } from "../types";

const DAYS_MAP: (keyof NonNullable<BusinessHoursConfig["schedule"]>)[] = [
  "domingo", // 0
  "segunda", // 1
  "terca", // 2
  "quarta", // 3
  "quinta", // 4
  "sexta", // 5
  "sabado", // 6
];

export interface StoreStatus {
  isOpen: boolean;
  message: string;
  todaySchedule?: string;
}

export function checkStoreStatus(config?: BusinessHoursConfig): StoreStatus {
  // Se o controle de horário não estiver ativo, fica aberto 24h direto
  if (!config || config.enabled === false || !config.schedule) {
    return {
      isOpen: true,
      message: "Aberto 24 horas",
    };
  }

  const now = new Date();
  const dayIndex = now.getDay();
  const dayKey = DAYS_MAP[dayIndex];
  const todaySchedule: DaySchedule | undefined = config.schedule[dayKey];

  // Se o dia estiver marcado como fechado/folga
  if (!todaySchedule || todaySchedule.closed) {
    return {
      isOpen: false,
      message: config.closedMessage || "Fechado hoje",
      todaySchedule: "Fechado",
    };
  }

  // Converte "HH:MM" para minutos do dia
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const [openHour, openMin] = todaySchedule.open.split(":").map(Number);
  const [closeHour, closeMin] = todaySchedule.close.split(":").map(Number);

  const startMinutes = openHour * 60 + openMin;
  const endMinutes = closeHour * 60 + closeMin;

  let isOpen = false;

  // Caso normal (ex: 10:00 às 19:00)
  if (startMinutes <= endMinutes) {
    isOpen = currentMinutes >= startMinutes && currentMinutes <= endMinutes;
  } else {
    // Caso vira a madrugada (ex: 18:00 às 01:30)
    isOpen = currentMinutes >= startMinutes || currentMinutes <= endMinutes;
  }

  if (isOpen) {
    return {
      isOpen: true,
      message: `Aberto agora • Fecha às ${todaySchedule.close}`,
      todaySchedule: `${todaySchedule.open} às ${todaySchedule.close}`,
    };
  } else {
    return {
      isOpen: false,
      message:
        config.closedMessage ||
        `Fechado no momento • Abre às ${todaySchedule.open}`,
      todaySchedule: `${todaySchedule.open} às ${todaySchedule.close}`,
    };
  }
}
