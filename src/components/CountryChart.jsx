import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function CountryChart({ data, valueField = "population", chartType = "bar" }) {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    let root = am5.Root.new(chartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    let chart;
    if (chartType === "pie") {
      chart = root.container.children.push(
        am5percent.PieChart.new(root, {})
      );

      let series = chart.series.push(
        am5percent.PieSeries.new(root, {
          valueField,
          categoryField: "country"
        })
      );
      series.data.setAll(data);
    } else {
      chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          layout: root.verticalLayout
        })
      );

      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: "country",
          renderer: am5xy.AxisRendererX.new(root, {}),
          tooltip: am5.Tooltip.new(root, {})
        })
      );

      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );

      let series;
      if (chartType === "line") {
        series = chart.series.push(
          am5xy.LineSeries.new(root, {
            name: valueField,
            xAxis,
            yAxis,
            valueYField: valueField,
            categoryXField: "country",
            tooltip: am5.Tooltip.new(root, {
              labelText: `{categoryX}: {valueY}`
            })
          })
        );
      } else {
        series = chart.series.push(
          am5xy.ColumnSeries.new(root, {
            name: valueField,
            xAxis,
            yAxis,
            valueYField: valueField,
            categoryXField: "country",
            tooltip: am5.Tooltip.new(root, {
              labelText: `{categoryX}: {valueY}`
            })
          })
        );
      }

      xAxis.data.setAll(data);
      series.data.setAll(data);
    }

    chart.appear(1000, 100);

    return () => root.dispose();
  }, [data, valueField, chartType]);

  return <div ref={chartRef} className="w-full h-[400px]" />;
}
