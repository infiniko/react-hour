import { calculatePopularLanguages } from "../../lib/utils";
import type { Repository } from "../../types";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

type UsedLangaugesRepo = {
  repositories: Repository[];
};
const UsedLangauges = ({ repositories }: UsedLangaugesRepo) => {
  const popularLangauges = calculatePopularLanguages(repositories);

  const chartConfig = {
    language: {
      label: "Language",
      color: "oklch(0.62 0.14 269);",
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">
        Used Languages
      </h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart accessibilityLayer data={popularLangauges}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="language" tickLine={false} tickMargin={10} />
          <YAxis dataKey="count" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-language)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default UsedLangauges;
