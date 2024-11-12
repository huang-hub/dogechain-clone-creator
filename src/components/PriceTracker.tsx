import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

const fetchDogePrice = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd&include_24hr_change=true');
  return response.json();
};

export const PriceTracker = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['dogePrice'],
    queryFn: fetchDogePrice,
    refetchInterval: 30000,
  });

  const price = data?.dogecoin?.usd || 0;
  const change24h = data?.dogecoin?.usd_24h_change || 0;
  const isPositive = change24h > 0;

  return (
    <div className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Real-Time <span className="text-gradient">Price Tracking</span>
        </h2>
        
        <Card className="w-full max-w-2xl mx-auto backdrop-blur-sm bg-white/10">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>DOGE/USD</span>
              <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {isPositive ? <ArrowUpIcon className="w-4 h-4 mr-1" /> : <ArrowDownIcon className="w-4 h-4 mr-1" />}
                {Math.abs(change24h).toFixed(2)}%
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-8">${price.toFixed(6)}</div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={[]} className="mt-4">
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#6366f1" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};