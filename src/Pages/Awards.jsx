import React from "react";
import GenericPage from "./GenericPage";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";
import { Badge } from "../Components/ui/badge";

const awardsData = [
  {
    id: 1,
    title: "Master Bill Micro Systems LTD Prize",
    organization: "Obafemi Awolowo University, Ile-Ife, Nigeria",
    year: "2024",
    category: "Academic",
    description:
      "For the graduating student with the best average score in Computer Laboratory Workshop; Application of Quantity Surveying Software I and II (QTS 415 and QTS 517) with a CGPA not less than 3.50 in the Department of Quantity Surveying.",
    image_url: "/src/assets/awards/award1.jpg",
  },
  {
    id: 2,
    title: "Certificate of Membership - Baptist Student Fellowship",
    organization: "Mission Subgroup, Baptist Student Fellowship, OAU",
    year: "2024",
    category: "Leadership",
    description: "For the immense contribution to the subgroup.",
    image_url: "/src/assets/awards/award2.jpg",
  },
  {
    id: 3,
    title: "Certificate of Academic Excellence - Baptist Student Fellowship",
    organization: "Academic Unit, Baptist Student Fellowship, OAU",
    year: "2024",
    category: "Academic",
    description:
      "As the best graduating student in the Faculty of Environmental Design and Management, Baptist Student Fellowship, Obafemi Awolowo University, in the 2022/2023 academic session.",
    image_url: "/src/assets/awards/award3.jpg",
  },
  {
    id: 4,
    title: "Certificate of Appreciation - Baptist Student Fellowship",
    organization: "Baptist Student Fellowship, OAU",
    year: "2024",
    category: "Leadership",
    description:
      "Commendation for contributing assiduosly to the successful Final Year Brethren program in the Baptist Student Fellowship, Obafemi Awolowo University, Ile-Ife, having served as the Prayer Head.",
    image_url: "/src/assets/awards/award4.jpg",
  },
  {
    id: 5,
    title: "Certificate of Membership - Baptist Student Fellowship",
    organization: "Baptist Student Fellowship, OAU",
    year: "2024",
    category: "Leadership",
    description:
      "Has been a member of the fellowship and graduated during the 2022/2023 academic session.",
    image_url: "/src/assets/awards/award5.jpg",
  },
  {
    id: 6,
    title: "Consol Associates Prize.",
    organization: "Consol Associates - OAU",
    year: "2024",
    category: "Academic",
    description:
      "For the best graduating student with the best average score in the Professional Practice and Procedure I and II (QTS 417 and QTS 518) with a CGPA not less than 3.50 in the Department of Quantity Surveying.",
    image_url: "/src/assets/awards/award6.jpg",
  },
  {
    id: 7,
    title: "Mosobalaje A. Asupoto Prize",
    organization: "Obafemi Awolowo University, Ile-Ife, Nigeria",
    year: "2024",
    category: "Academic",
    description:
      "For the graduating student with the best average score in Measurement of Electrical Services Installation (QTS 511) and Measurement of Mechanical Services Installation (QTS 512) with a CGPA not less than 3.50 in the Department of Quantity Surveying.",
    image_url: "/src/assets/awards/award7.jpg",
  },
  {
    id: 8,
    title: "Master Bill Micro Systems LTD Prize",
    organization: "Obafemi Awolowo University, Ile-Ife, Nigeria",
    year: "2024",
    category: "Academic",
    description:
      "For the graduating student with the best average score in Computer Laboratory Workshop; Application of Quantity Surveying Software I and II (QTS 415 and QTS 517) with a CGPA not less than 3.50 in the Department of Quantity Surveying.",
    image_url: "/src/assets/awards/award8.jpg",
  },
  {
    id: 9,
    title: "Award of Excellence - Mr Lecturer",
    organization: "Imperials Dinner & Awards Night",
    year: "2024",
    category: "Scholarship",
    description: "For outstanding performance and excellence in academics.",
    image_url: "/src/assets/awards/award9.jpg",
  },
  {
    id: 10,
    title: "Mosobalaje A. Asupoto Prize",
    organization: "Obafemi Awolowo University, Ile-Ife, Nigeria",
    year: "2024",
    category: "Academic",
    description:
      "For the graduating student with the best average score in Measurement of Electrical Services Installation (QTS 511) and Measurement of Mechanical Services Installation (QTS 512) with a CGPA not less than 3.50 in the Department of Quantity Surveying.",
    image_url: "/src/assets/awards/award10.jpg",
  },
  {
    id: 11,
    title: "Consol Associates Prize.",
    organization: "Consol Associates - OAU",
    year: "2024",
    category: "Academic",
    description:
      "For the best graduating student with the best average score in the Professional Practice and Procedure I and II (QTS 417 and QTS 518) with a CGPA not less than 3.50 in the Department of Quantity Surveying.",
    image_url: "/src/assets/awards/award11.jpg",
  },
  {
    id: 12,
    title: "Top 100 Africa Future Leaders 2025",
    organization: "Africa Future Leaders Festival, Lagos, Nigeria",
    year: "2025",
    category: "Leadership",
    description: "Brief description of the award and its significance",
    image_url: "/src/assets/awards/award12.jpg",
  },
  {
    id: 13,
    title: "Certificate of Achievement - Top 100 Africa Future Leaders",
    organization: "Africa Future Leaders Festival, Lagos, Nigeria",
    year: "2025",
    category: "Leadership",
    description: "Brief description of the award and its significance",
    image_url: "/src/assets/awards/award13.jpg",
  },
];

const categoryColors = {
  Academic: "bg-blue-100 text-blue-800",
  Scholarship: "bg-green-100 text-green-800",
  Project: "bg-purple-100 text-purple-800",
  Competition: "bg-orange-100 text-orange-800",
  Leadership: "bg-red-100 text-red-800",
  Other: "bg-gray-100 text-gray-800",
};

function AwardCard({ award }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border-0 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="relative overflow-hidden bg-gray-200 h-48">
        <img
          src={award.image_url}
          alt={award.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <Badge
            className={categoryColors[award.category] || categoryColors.Other}
          >
            {award.category}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2 flex-1">
        <CardTitle className="text-lg leading-tight">{award.title}</CardTitle>
        <CardDescription className="text-slate-700 font-medium">
          {award.organization}
        </CardDescription>
        <p className="text-xs text-slate-500 mt-2">{award.year}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-slate-600 line-clamp-3">
          {award.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function Awards() {
  // Group awards by year
  const groupedAwards = awardsData.reduce((acc, award) => {
    if (!acc[award.year]) {
      acc[award.year] = [];
    }
    acc[award.year].push(award);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedAwards).sort((a, b) => b - a);

  return (
    <GenericPage title="Awards & Recognition">
      <div className="space-y-12">
        {sortedYears.map((year) => (
          <div key={year} className="space-y-6">
            <div className="flex items-center gap-4 pb-2 border-b-2 border-slate-200">
              <h2 className="text-3xl font-bold text-slate-800">{year}</h2>
              <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                {groupedAwards[year].length} award
                {groupedAwards[year].length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedAwards[year].map((award) => (
                <AwardCard key={award.id} award={award} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </GenericPage>
  );
}
