import { Card, CardDescription, CardTitle } from "../ui/card";

type StatsCardProps = {
  title: string;
  count: number;
};
const StatsCard = ({ count, title }: StatsCardProps) => {
  return (
    <Card className="hover:-translate-y-1 duration-300">
      <div className="flex flex-row justify-between items-center p-6">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{count}</CardDescription>
      </div>
    </Card>
  );
};

export default StatsCard;
