import React from "react";
import "./RankTimeline.css";

const RankTimeline = () => {
  const colorClasses = [
    "bg-teal-300",
    "bg-indigo-300",
    "bg-blue",
    "bg-violet-300",
    "bg-purple-300",
  ];

  return (
    <div className="ranktimeline">
      <div className="ranktimeline-wrap">
        <div className="ranktimeline-year-lines">
          {[...Array(15)].map((_, index) => (
            <div
              className="ranktimeline-year-line"
              style={{ left: `calc(var(--col-width) * ${index * 12})` }}
              key={index}
            ></div>
          ))}
        </div>
        <div className="ranktimeline-years">
          {[...Array(15)].map((_, index) => (
            <div
              className="ranktimeline-year"
              style={{ width: `calc(var(--col-width) * 12)` }}
              key={index}
            >
              <span>{2010 + index}</span>
            </div>
          ))}
        </div>
        <div
          className="ranktimeline-chart"
          style={{ height: "calc(var(--row-height) * 15)" }}
        >
          {calculateRowPositions(timelineData).map((item, itemIndex) => (
            <div
              className="ranktimeline-item-wrap"
              style={{
                left: `calc(var(--col-width) * ${(parseInt(item.duration.split("-")[0]) - 2010) * 12})`,
                width: `calc(var(--col-width) * ${(parseInt(item.duration.split("-")[1]) - parseInt(item.duration.split("-")[0])) * 12})`,
                height: "var(--row-height)",
                top: `calc(var(--row-height) * ${item.adjustedRowIndex})`,
              }}
              key={itemIndex}
            >
              <div
                className={`ranktimeline-item text-black ${
                  colorClasses[itemIndex % colorClasses.length]
                }`}
                data-id={item.id}
              >
                <span>
                  {item.icon && <img src={item.icon} alt={item.name} />}
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const calculateRowPositions = (items) => {
  let occupied = [];
  return items.map((item) => {
    let start = parseInt(item.duration.split("-")[0]) - 2010;
    let end = parseInt(item.duration.split("-")[1]) - 2010;
    let adjustedRowIndex = 0;

    while (
      occupied.some(
        ([s, e, r]) => start < e && end > s && adjustedRowIndex === r
      )
    ) {
      adjustedRowIndex++;
    }

    occupied.push([start, end, adjustedRowIndex]);
    return { ...item, adjustedRowIndex };
  });
};

const timelineData = [
  {
    id: 0,
    name: "Photoshop",
    icon: "https://icon-widget.codersrank.io/api/photoshop",
    duration: "2010-2019",
  },
  {
    id: 1,
    name: "HTML & CSS",
    icon: "https://icon-widget.codersrank.io/api/HTML",
    duration: "2010-2025",
  },
  {
    id: 2,
    name: "Javascript",
    icon: "https://icon-widget.codersrank.io/api/javascript",
    duration: "2010-2025",
  },
  {
    id: 4,
    name: "PHP",
    icon: "https://icon-widget.codersrank.io/api/php",
    duration: "2012-2020",
  },
  {
    id: 5,
    name: "jQuery",
    icon: "https://icon-widget.codersrank.io/api/jquery",
    duration: "2012-2015",
  },
  {
    id: 6,
    name: "Wordpress",
    icon: "https://icon-widget.codersrank.io/api/wordpress",
    duration: "2013-2020",
  },
  {
    id: 7,
    name: "Python",
    icon: "https://icon-widget.codersrank.io/api/python",
    duration: "2013-2014",
  },
  {
    id: 8,
    name: "MySQL",
    icon: "https://icon-widget.codersrank.io/api/mysql",
    duration: "2013-2017",
  },
  {
    id: 8,
    name: "NoSQL",
    icon: "https://icon-widget.codersrank.io/api/nosql",
    duration: "2017-2018",
  },
  {
    id: 27,
    name: "Webpack",
    icon: "https://icon-widget.codersrank.io/api/webpack",
    duration: "2018-2025",
  },
  {
    id: 27,
    name: "Redux",
    icon: "https://icon-widget.codersrank.io/api/redux",
    duration: "2014-2025",
  },
  {
    id: 9,
    name: "Drupal",
    icon: "https://icon-widget.codersrank.io/api/drupal",
    duration: "2014-2018",
  },
  {
    id: 24,
    name: "Laravel",
    icon: "https://icon-widget.codersrank.io/api/laravel",
    duration: "2014-2017",
  },
  {
    id: 10,
    name: "Angular",
    icon: "https://icon-widget.codersrank.io/api/angular",
    duration: "2015-2016",
  },
  {
    id: 32,
    name: "UX Design",
    icon: "https://icon-widget.codersrank.io/api/ux-design",
    duration: "2016-2025",
  },
  {
    id: 23,
    name: "Node.js",
    icon: "https://icon-widget.codersrank.io/api/nodejs",
    duration: "2016-2025",
  },
  {
    id: 25,
    name: "AWS",
    icon: "https://icon-widget.codersrank.io/api/aws",
    duration: "2017-2018",
  },
  {
    id: 26,
    name: "ExpressJS",
    icon: "https://icon-widget.codersrank.io/api/express",
    duration: "2018-2019",
  },
  {
    id: 11,
    name: "ReactJS",
    icon: "https://icon-widget.codersrank.io/api/ReactJS",
    duration: "2018-2025",
  },
  {
    id: 12,
    name: "Adobe XD",
    icon: "https://icon-widget.codersrank.io/api/adobexd",
    duration: "2019-2022",
  },
  {
    id: 13,
    name: "Ruby on Rails",
    icon: "https://icon-widget.codersrank.io/api/ruby%20on%20rails",
    duration: "2020-2022",
  },
  {
    id: 14,
    name: "GraphQL",
    icon: "https://icon-widget.codersrank.io/api/graphql",
    duration: "2020-2022",
  },
  {
    id: 15,
    name: "Gatsby",
    icon: "https://icon-widget.codersrank.io/api/gatsby",
    duration: "2020-2023",
  },
  {
    id: 31,
    name: "Cypress",
    icon: "https://icon-widget.codersrank.io/api/cypress",
    duration: "2020-2023",
  },
  {
    id: 28,
    name: "VueJS",
    icon: "https://icon-widget.codersrank.io/api/vue",
    duration: "2020-2021",
  },
  {
    id: 16,
    name: "Figma",
    icon: "https://icon-widget.codersrank.io/api/figma",
    duration: "2021-2025",
  },
  {
    id: 17,
    name: "PostgreSQL",
    icon: "https://icon-widget.codersrank.io/api/postgresql",
    duration: "2021-2022",
  },
  {
    id: 18,
    name: "Next.js",
    icon: "https://icon-widget.codersrank.io/api/nextjs",
    duration: "2021-2023",
  },
  {
    id: 30,
    name: "Jenkins",
    icon: "https://icon-widget.codersrank.io/api/jenkins",
    duration: "2022-2025",
  },
  {
    id: 19,
    name: "Tailwind",
    icon: "https://icon-widget.codersrank.io/api/tailwind",
    duration: "2022-2025",
  },
  {
    id: 20,
    name: "TypeScript",
    icon: "https://icon-widget.codersrank.io/api/typescript",
    duration: "2022-2025",
  },
  {
    id: 21,
    name: "Electron JS",
    icon: "https://icon-widget.codersrank.io/api/electron",
    duration: "2022-2025",
  },
  {
    id: 29,
    name: "Zustand",
    icon: "https://icon-widget.codersrank.io/api/zustand",
    duration: "2024-2025",
  },
  {
    id: 22,
    name: "Astro",
    icon: "https://icon-widget.codersrank.io/api/astro",
    duration: "2024-2025",
  },
];

export default RankTimeline;
