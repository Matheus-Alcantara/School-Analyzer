using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace School_Analyzer.Controllers
{
    [Produces("application/json")]
    [Route("api/BarChart")]
    public class BarChartController : Controller
    {
        [HttpGet("[action]")]
        public BarChartData GetBarChartData()
        {
            var chartData2List = new List<ChartData2>();
            chartData2List.Add(new ChartData2 {
                Label = "1ºgrade", Data = new int[] { 95 } 
            });
            chartData2List.Add(new ChartData2 {
                Label = "2ºgrade", Data = new int[] { 92 } 
            });
            chartData2List.Add(new ChartData2 {
                Label = "3ºgrade", Data = new int[] { 90 } 
            });
            chartData2List.Add(new ChartData2 {
                Label = "4ºgrade", Data = new int[] { 87 } 
            });
            chartData2List.Add(new ChartData2 {
                Label = "5ºgrade", Data = new int[] { 85 } 
            });
            chartData2List.Add(new ChartData2 {
                Label = "6ºgrade", Data = new int[] { 86 } 
            });
            chartData2List.Add(new ChartData2 {
                Label = "7ºgrade", Data = new int[] { 78 } 
            });
            chartData2List.Add(new ChartData2 {
                Label = "8ºgrade", Data = new int[] { 93 } 
            });
            chartData2List.Add(new ChartData2 {
                Label = "9ºgrade", Data = new int[] { 83 } 
            });

            List<string> barChartLabelsList = new List<string>();


            return new BarChartData {
                ChartData2List = chartData2List, BarChartLabels = barChartLabelsList.ToArray() 
            };
        }
    }

    public class ChartData2
    {
        public int[] Data { get; set; }
        public string Label { get; set; }
    }

    public class BarChartData
    {
        public List<ChartData2> ChartData2List { get; set; }
        public string[] BarChartLabels { get; set; }

    }

}
