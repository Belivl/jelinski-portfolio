"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

function getTomorrowFormattedDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return tomorrow.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function DatePickerInput({
  value: externalValue,
  onChange: externalOnChange,
}: {
  value?: string;
  onChange?: (value: string) => void;
}) {
  const { t } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(
    externalValue
      ? new Date(externalValue)
      : new Date(getTomorrowFormattedDate()),
  );
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [value, setValue] = React.useState(externalValue || formatDate(date));

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return (
    <Field className="mx-auto w-full gap-1">
      <FieldLabel htmlFor="date">{t.contact.inquiry.form.date}</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="date"
          value={value}
          placeholder={getTomorrowFormattedDate()}
          onChange={(e) => {
            const date = new Date(e.target.value);
            const newValue = e.target.value;
            setValue(newValue);
            externalOnChange?.(newValue);
            if (isValidDate(date)) {
              setDate(date);
              setMonth(date);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setOpen(true);
            }
          }}
        />
        <InputGroupAddon align="inline-end">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <InputGroupButton
                id="date-picker"
                variant="ghost"
                size="icon-xs"
                aria-label="Select date"
              >
                <CalendarIcon />
                <span className="sr-only">Select date</span>
              </InputGroupButton>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="end"
              alignOffset={-8}
              sideOffset={10}
            >
              <Calendar
                mode="single"
                selected={date}
                month={month}
                onMonthChange={setMonth}
                onSelect={(date) => {
                  setDate(date);
                  const formattedDate = formatDate(date);
                  setValue(formattedDate);
                  externalOnChange?.(formattedDate);
                  setOpen(false);
                }}
                disabled={{ before: today }}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
