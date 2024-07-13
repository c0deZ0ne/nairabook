import { ResponsivePie } from '@nivo/pie';
import AppLoading from '../appLoading';
import Empty from '../empty/empty';

const PieChart = ({
  data,
  colorPalate,
  loading,
  margin,
  translateY = 50,
  translateX = 20,
}: {
  data: any;
  colorPalate: any;
  loading: any;
  margin: { top: number; left: number; right: number; bottom: number };
  translateY?: number;
  translateX?: number;
}) => {
  let chartData;
  if (Array.isArray(data)) {
    chartData = data.map((d) => ({
      ...d,
      id: d.label,
    }));
  } else {
    chartData =
      Object.keys(data)?.map((key) => ({
        id: key,
        label: key?.charAt(0).toUpperCase() + key.slice(1), // Capitalize the label
        value: data[key],
      })) || [];
  }

  if (chartData?.length < 1) return <Empty message="No data" />;
  return (
    <>
      {loading ? (
        <div className="flex justify-center self-center align-middle">
          <AppLoading /> Loading...
        </div>
      ) : (
        <div className="w-[100%] h-[100%]  self-center flex mr-auto ml-auto">
          <ResponsivePie
            data={chartData}
            margin={margin}
            innerRadius={0.02}
            padAngle={3}
            cornerRadius={3}
            borderWidth={0}
            colors={colorPalate}
            borderColor={{ from: '#fff', modifiers: [['brighter', 100]] }}
            arcLabelsTextColor={{
              from: 'color',
              modifiers: [['brighter', 100]],
            }}
            startAngle={-342}
            arcLinkLabelsSkipAngle={6000}
            arcLabelsSkipAngle={10}
            arcLinkLabelsTextColor={'#fff'}
            animate={true}
            theme={{
              labels: {
                text: {
                  fill: '#fff',
                },
              },
            }}
            legends={[
              {
                anchor: 'left',
                direction: 'column',
                translateY: translateY,
                translateX: translateX,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#000',
                symbolSize: 10,
                symbolShape: 'square',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#000',
                    },
                  },
                ],
              },
            ]}
            enableArcLabels={true}
          />
        </div>
      )}
    </>
  );
};

export default PieChart;
