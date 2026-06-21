import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "./ui/input";
import { Field, FieldError, FieldLabel } from "./ui/field";

type CustomFormFieldProps = {
  name: string;
  control: any;
};

export function CustomFormField({ name, control }: CustomFormFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name} className="capitalize">
            {name}
          </FieldLabel>
          <Input
            {...field}
            aria-invalid={fieldState.invalid}
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}

type CustomFormSelectProps = {
  name: string;
  control: any;
  items: string[];
  labelText?: string;
};

export function CustomFormSelect({
  name,
  control,
  items,
  labelText,
}: CustomFormSelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel className="capitalize">{labelText || name}</FieldLabel>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          <Select
            name={field.name}
            value={field.value}
            onValueChange={field.onChange}
          >
            <SelectTrigger
              id="form-rhf-select-language"
              aria-invalid={fieldState.invalid}
            >
              <SelectValue className="capitalize" />
            </SelectTrigger>
            <SelectContent position="item-aligned" className="py-3">
              {items.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      )}
    />
  );
}
