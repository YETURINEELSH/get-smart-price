import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { formatPrice } from "@/lib/mock-data";

interface PriceHistoryChartProps {
  data: { date: string; price: number; store: string }[];
}

const PriceHistoryChart = ({ data }: PriceHistoryChartProps) => {
  return (
    <div className="surface-card p-5">
      <div className="mb-4">
        <h3 className="font-display text-sm text-foreground">Price History</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Last 6 months trend</p>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
            <CartesianGrid stroke="hsl(0 0% 12%)" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: "hsl(215 15% 55%)" }}
              axisLine={{ stroke: "hsl(0 0% 12%)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "hsl(215 15% 55%)" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(240 10% 6%)",
                border: "1px solid hsl(0 0% 12%)",
                borderRadius: "8px",
                fontSize: "12px",
                color: "hsl(0 0% 98%)",
              }}
              formatter={(value: number) => [formatPrice(value), "Price"]}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="hsl(142 70% 45%)"
              strokeWidth={2}
              dot={{ fill: "hsl(142 70% 45%)", r: 3, strokeWidth: 0 }}
              activeDot={{ r: 5, fill: "hsl(142 70% 45%)", strokeWidth: 2, stroke: "hsl(240 10% 3.9%)" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PriceHistoryChart;
