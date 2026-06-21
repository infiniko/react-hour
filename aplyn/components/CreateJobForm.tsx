"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  JobStatus,
  JobMode,
  createAndEditJobSchema,
  CreateAndEditJobType,
} from "@/utils/types";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FieldGroup } from "@/components/ui/field";

import { CustomFormField, CustomFormSelect } from "./FormComponents";

export default function CreateJobForm() {
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
    },
  });

  function onSubmit(data: CreateAndEditJobType) {
    console.log(data);
  }

  return (
    <Card className="w-full">
      <CardContent>
        <form id="jobForm" onSubmit={form.handleSubmit(onSubmit)}>
          <h2 className="capitalize font-semibold text-4xl mb-6">add job</h2>

          <FieldGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
            <CustomFormField control={form.control} name="position" />
            <CustomFormField control={form.control} name="company" />
            <CustomFormField control={form.control} name="location" />
            <CustomFormSelect
              name="status"
              control={form.control}
              labelText="job status"
              items={Object.values(JobStatus)}
            />
            <CustomFormSelect
              name="mode"
              control={form.control}
              labelText="job mode"
              items={Object.values(JobMode)}
            />
            <Button
              type="submit"
              form="jobForm"
              className="self-end capitalize"
            >
              create job
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
