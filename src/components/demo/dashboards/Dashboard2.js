import React from "react";
import {
  StatIconCard,
  StatBadgeCard,
  BarGuageChartCard,
  GradientLineChartCard,
  ActivityRingsCard,
} from "components/library";

const items = [
  {
    label: "Total",
    value: "1.14b",
  },
  {
    label: "Avg",
    value: "16.22",
  },
  {
    label: "Target",
    value: 15.44,
  },
];

const survival = [
  {
    name: "series1",
    data: [60, 0],
  },
  {
    name: "series2",
    data: [20, 0],
  },
  {
    name: "series2",
    data: [30, 0],
  },
];

const lineData = {
  series: [[0, 8, 4, 12, 7, 15, 11]],
};

const lineStats = [
  {
    label: "This week",
    value: "112k",
  },
  {
    label: "This month",
    value: "240k",
  },
  {
    label: "This year",
    value: "564k",
  },
];

const Wrapper = () => {
  return (
    <>
      <div className="col-6 col-lg-3">
        <StatIconCard label="Cases" value="161k" icon="bed" />
      </div>
      <div className="col-6 col-lg-3">
        <StatIconCard label="Healthy" value="988k" icon="heart" />
      </div>
      <div className="col-12 col-lg-6">
        <StatBadgeCard items={items} />
      </div>
      <div className="col-md-3">
        <BarGuageChartCard
          cardTitle="Survival"
          label="Current rate"
          value="99.8%"
          series={survival}
        />
      </div>
      <div className="col-md-6">
        <GradientLineChartCard
          cardTitle="Recovered"
          statList={lineStats}
          data={lineData}
        />
      </div>
      <div className="col-md-3">
        <ActivityRingsCard
          cardTitle="Earnings"
          label="Target"
          value="$53k"
          series={[30, 40, 45]}
        />
      </div>
    </>
  );
};

export default Wrapper;
