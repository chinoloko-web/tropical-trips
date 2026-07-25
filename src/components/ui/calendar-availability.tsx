"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const monthNames = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

// Simula días disponibles (en un sistema real esto vendría de una API/DB)
const getAvailableDays = (year: number, month: number) => {
  const available: number[] = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date >= today && date.getDay() !== 0) {
      available.push(day);
    }
  }
  return available;
};

interface CalendarAvailabilityProps {
  className?: string;
}

export function CalendarAvailability({ className }: CalendarAvailabilityProps) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const availableDays = getAvailableDays(year, month);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  const prevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
    setSelectedDay(null);
  };

  const nextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
    setSelectedDay(null);
  };

  const isAvailable = (day: number) => availableDays.includes(day);
  const isPast = (day: number) => {
    const date = new Date(year, month, day);
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    return date < todayDate;
  };

  return (
    <div className={cn("rounded-2xl border border-gray-100 bg-white p-6 shadow-sm", className)}>
      <h3 className="text-lg font-bold text-gray-900 font-heading mb-4">Disponibilidad</h3>

      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="rounded-full p-2 hover:bg-gray-100 transition-colors text-gray-500"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="text-sm font-semibold text-gray-700">
          {monthNames[month]} {year}
        </span>
        <button
          onClick={nextMonth}
          className="rounded-full p-2 hover:bg-gray-100 transition-colors text-gray-500"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div key={day} className="text-center text-xs font-semibold text-gray-400 py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const available = isAvailable(day);
          const past = isPast(day);
          const selected = selectedDay === day;

          return (
            <button
              key={day}
              disabled={!available || past}
              onClick={() => setSelectedDay(day)}
              className={cn(
                "h-9 w-full rounded-full text-sm font-medium transition-all",
                past && "text-gray-200 cursor-not-allowed",
                !past && !available && "text-gray-300 cursor-not-allowed",
                !past && available && !selected && "text-gray-700 hover:bg-tropical-green-50 hover:text-tropical-green-700 cursor-pointer",
                selected && "bg-tropical-green-600 text-white shadow-md"
              )}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <span className="inline-block h-3 w-3 rounded-full bg-tropical-green-600" /> Disponible
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-3 w-3 rounded-full bg-gray-200" /> No disponible
        </span>
      </div>

      {selectedDay && (
        <div className="mt-4 rounded-xl bg-tropical-green-50 p-3 text-center">
          <p className="text-sm font-semibold text-tropical-green-700">
            {selectedDay} de {monthNames[month]} del {year} — Disponible
          </p>
        </div>
      )}
    </div>
  );
}
