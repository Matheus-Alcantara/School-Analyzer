using System.Collections.Generic;
using AutoFixture;
using Microsoft.AspNetCore.Mvc;

namespace School_Analyzer.Controllers
{
	[Produces("application/json")]
	[Route("api/RadarChart")]
	public class RadarChartController : Controller
	{
		[HttpGet("[action]")]
		public Data GetRadarChartData()
		{
			//var fixture = new Fixture();

			//var RadarChartData = fixture.Create<RadarChartData>();

			//return RadarChartData;

			Data test = new Data
			{
				RadarChartData = new List<RadarChartData>
				{
					new RadarChartData
					{
						ChartData = new List<ChartData>
						{
							new ChartData
							{
								Data = new List<double> { 91, 88, 81, 80, 85, 77, 64, 93, 70 },
								Label = "John",
							},
						},
						ChartLabels = new List<string>
						{
							 "1ºgrade", "2ºgrade", "3ºgrade", "4ºgrade", "5ºgrade", "6ºgrade", "7ºgrade", "8ºgrade", "9ºgrade"
						}
					},
					new RadarChartData
					{
						ChartData = new List<ChartData>
						{
							new ChartData
							{
								Data = new List<double> { 93, 98, 100, 85, 89, 96, 70, 95, 90 },
								Label = "Batholomeo",
							},
						},
						ChartLabels = new List<string>
						{
							 "1ºgrade", "2ºgrade", "3ºgrade", "4ºgrade", "5ºgrade", "6ºgrade", "7ºgrade", "8ºgrade", "9ºgrade"
						}
					},
					new RadarChartData
					{
						ChartData = new List<ChartData>
						{
							new ChartData
							{
								Data = new List<double> { 97, 89, 91, 92, 87, 90, 80, 88, 100 },
								Label = "Benjamin",
							},
						},
						ChartLabels = new List<string>
						{
							 "1ºgrade", "2ºgrade", "3ºgrade", "4ºgrade", "5ºgrade", "6ºgrade", "7ºgrade", "8ºgrade", "9ºgrade"
						}
					},
					new RadarChartData
					{
						ChartData = new List<ChartData>
						{
							new ChartData
							{
								Data = new List<double> { 95, 100, 94, 87, 73, 97, 86, 90, 88 },
								Label = "Horace",
							},
						},
						ChartLabels = new List<string>
						{
							 "1ºgrade", "2ºgrade", "3ºgrade", "4ºgrade", "5ºgrade", "6ºgrade", "7ºgrade", "8ºgrade", "9ºgrade"
						}
					},
					new RadarChartData
					{
						ChartData = new List<ChartData>
						{
							new ChartData
							{
								Data = new List<double> { 100, 90, 85, 81, 92, 70, 86, 100, 67 },
								Label = "Matthew",
							},
						},
						ChartLabels = new List<string>
						{
							 "1ºgrade", "2ºgrade", "3ºgrade", "4ºgrade", "5ºgrade", "6ºgrade", "7ºgrade", "8ºgrade", "9ºgrade"
						}
					}
				}
			};
			return test;
		}
	}

	public class Data
	{
		public List<RadarChartData> RadarChartData { get; set; }
	}

	public class ChartData
	{
		public List<double> Data { get; set; }
		public string Label { get; set; }
	}

	public class RadarChartData
	{
		public List<ChartData> ChartData { get; set; }
		public List<string> ChartLabels { get; set; }
	}
}