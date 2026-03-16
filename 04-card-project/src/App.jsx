import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      id: 1,
      companyName: "Amazon",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkkQhwA-14yQus_rij6VonTP5UT7IrorBkg&s",
      postingDate: "5 days ago",
      jobTitle: "Senior UI/UX Designer",
      jobType: "Part-time",
      jobLevel: "Senior Level",
      hourlyCharge: "$120/hr",
      location: "Mumbai, India",
    },
    {
      id: 2,
      companyName: "Google",
      logo: "data:image/png;base64,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",
      postingDate: "2 days ago",
      jobTitle: "Frontend Developer",
      jobType: "Full-time",
      jobLevel: "Mid Level",
      hourlyCharge: "$100/hr",
      location: "Bangalore, India",
    },
    {
      id: 3,
      companyName: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      postingDate: "1 week ago",
      jobTitle: "React Developer",
      jobType: "Remote",
      jobLevel: "Junior Level",
      hourlyCharge: "$80/hr",
      location: "Delhi, India",
    },
    {
      id: 4,
      companyName: "Netflix",
      logo: "data:image/png;base64,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",
      postingDate: "3 days ago",
      jobTitle: "Product Designer",
      jobType: "Full-time",
      jobLevel: "Senior Level",
      hourlyCharge: "$130/hr",
      location: "Hyderabad, India",
    },
    {
      id: 5,
      companyName: "Adobe",
      logo: "https://imgs.search.brave.com/FWgNn9SxO0f19OkmzTLsdnQFVDGsSFUdcQq3hCtMWzE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNC8x/MC9hZG9iZS1sb2dv/LTIwMTctMzAweDMw/MC5wbmc",
      postingDate: "4 days ago",
      jobTitle: "UI Designer",
      jobType: "Contract",
      jobLevel: "Mid Level",
      hourlyCharge: "$95/hr",
      location: "Pune, India",
    },
    {
      id: 6,
      companyName: "Meta",
      logo: "https://imgs.search.brave.com/iBh_OGsj0zgMWV1FAEdm3u8tHMgHkaG9IMhoz-GaMro/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
      postingDate: "6 days ago",
      jobTitle: "Frontend Engineer",
      jobType: "Full-time",
      jobLevel: "Senior Level",
      hourlyCharge: "$140/hr",
      location: "Gurgaon, India",
    },
    {
      id: 7,
      companyName: "Spotify",
      logo: "https://imgs.search.brave.com/NqBGOqNucUSytAldKCJG2y5yBpeDWoLGM24JndJHNug/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvU3Bv/dGlmeS1Mb2dvLVBO/Ry1QaG90b3MucG5n",
      postingDate: "1 day ago",
      jobTitle: "UX Researcher",
      jobType: "Remote",
      jobLevel: "Mid Level",
      hourlyCharge: "$110/hr",
      location: "Remote",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      {jobs.map(function (ele) {
        return (
          <Card
            company={ele.companyName}
            logo={ele.logo}
            postingDate={ele.postingDate}
            jobTitle={ele.jobTitle}
            jobType={ele.jobType}
            jobLevel={ele.jobLevel}
            hourlyCharge={ele.hourlyCharge}
            location={ele.location}
          />
        );
      })}
    </div>
  );
};

export default App;
