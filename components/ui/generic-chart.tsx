
import { Bar, BarChart, Line, LineChart } from "recharts"
 
import { ChartConfig, ChartContainer } from "@/components/ui/chart"


const chartData = [
    { month: "January", success_rate: 145},
    { month: "February", success_rate: 399},
    { month: "March", success_rate: 237},
    { month: "April", success_rate: 73},
    { month: "May", success_rate: 209},
    { month: "June", success_rate: 214},
    { month: "March", success_rate: 237},
    { month: "April", success_rate: 73},
    { month: "May", success_rate: 209},
    { month: "June", success_rate: 214}
  ]

  const chartConfig = {
    success_rate: {
      label: "Desktop",
      color: "#008F51",
    },
  } satisfies ChartConfig
   
  export function GenericChart() {
    return (
      <ChartContainer config={chartConfig} className="flex grow bg-accent rounded-xl p-4">
        <BarChart accessibilityLayer data={chartData}>
          <Bar dataKey="success_rate" fill="var(--color-success_rate)" radius={4} />
        </BarChart>
      </ChartContainer>
    )
  }

  export function GenericLineChart() {
    return (
      <ChartContainer config={chartConfig} className="flex grow bg-accent rounded-xl p-4">
        <LineChart accessibilityLayer data={chartData}>
          <Line dataKey="success_rate" fill="var(--color-success_rate)" radius={4} />
        </LineChart>
      </ChartContainer>
    )
  }