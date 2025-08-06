import { useMemo } from "react";
import type { ChartOptions } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Evolução das Transações no Tempo",
    },
  },
};
interface Transaction {
  accountId: string;
  date: string;
  id: string;
  type: string;
  value: number;
}

interface DashboardProps {
  transactions: Transaction[];
}

function Dashboard({ transactions } : DashboardProps) {
  const chartData = useMemo(() => {
    if (!transactions || transactions.length === 0) {
      return { labels: [], datasets: [] };
    }

    const sorted = [...transactions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    return {
      labels: sorted.map((t) =>
        new Date(t.date).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
        })
      ),

      datasets: [
        {
          label: "Depósitos",
          data: sorted.map((t) => (t.type === "DEPOSIT" ? t.value : 0)),
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.5)",
        },
        {
          label: "Transferências",
          data: sorted.map((t) => (t.type === "TRANSFER" ? t.value : 0)),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
  }, [transactions]);

  return (
    <div
      style={{
        padding: "20px",
        width: "100%",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <Line options={chartOptions} data={chartData} />
    </div>
  );
}

export default Dashboard;
