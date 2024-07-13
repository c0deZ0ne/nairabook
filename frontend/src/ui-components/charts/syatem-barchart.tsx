import { ResponsiveBar } from '@nivo/bar';
import AppLoading from '../appLoading';

const AppBarChart = ({
  data,
  orientation,
  margin,
  loading,
  colors,
  rotation,
}: {
  data: Array<{ key: string; value: number }>;
  orientation: 'horizontal' | 'vertical';
  margin: { top: number; right: number; bottom: number; left: number };
  loading?: boolean;
  colors?: any;
  rotation?: number;
}) => {
  return (
    <>
      {loading && <AppLoading />}
      {data?.length > 0 ? (
        <ResponsiveBar
          data={data}
          keys={[`${Object.keys(data[0])[1]}`]}
          indexBy={`${Object.keys(data[0])[0]}`}
          margin={margin}
          padding={orientation == 'horizontal' ? 0.3 : 0.7}
          enableGridY={false}
          enableGridX={false}
          borderColor={colors}
          borderWidth={1}
          colors={colors}
          layout={orientation}
          axisBottom={{
            tickSize: 0,
            tickPadding: 15,
            tickRotation: rotation,
            // legend:
            //   orientation != 'horizontal'
            //     ? `${Object.keys(data[0])[0]}`
            //     : `${Object.keys(data[0])[1]}`,
            legendPosition: 'middle',
            legendOffset: margin.bottom - 20,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 0,
            tickRotation: 0,
            // legendPosition: 'middle',
            // legend:
            //   orientation != 'horizontal'
            //     ? `${Object.keys(data[0])[1]}`
            //     : `${Object.keys(data[0])[0]}`,

            // legendOffset: orientation != 'horizontal' ? 40 : -margin.left + 10,
          }}
          labelTextColor={{ from: 'color', modifiers: [['brighter', 50]] }}
          animate={true}
        />
      ) : (
        <div className="flex items-center self-center mr-auto ml-auto absolute top-[50%] left-[45%] right-[45%]">
          <span
            className=" font-Open Sans"
            style={{ fontFamily: 'Open Sans', fontSize: '10px' }}
          >
            {loading ? 'Loading...' : `No data`}
          </span>
        </div>
      )}
    </>
  );
};

export default AppBarChart;
