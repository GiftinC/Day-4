//1. My Own resume in JSON Format
//Ans:
var Res = {
  Profile: [
    {
      Name: "Giftin C",
      Age: "22",
      Email: "cgiftin@gmail.com",
      "Mobile Number": "9751316948",
      Portfolio: "https://www.artstation.com/giftinc",
      "Linked-In": "www.linkedin.com/in/giftin-c",
    },
  ],
  Skills: [
    "Premier Pro",
    "After Effects",
    "Nuke",
    "Maya",
    "Photoshop",
    "Davinci Resolve",
    "Avid Media Composer",
    "Final Cut Pro",
  ],
  Education: [
    {
      Course: "10th & 12th Standard",
      Institution: "St Pauls School",
      Location: "Vellore",
      Duration: "2016 - 2019",
    },
    {
      Course: "Film Editing",
      Institution: "Live ,Loyola College",
      Location: "Chennai",
      Duration: "2019 - 2020",
    },
    {
      Course: "Bsc Visual Effects",
      Institution: "Icat College",
      Location: "Chennai",
      Duration: "2020 - 2023",
    },
  ],
  Experience: [
    {
      Role: "Video Editor - Internship",
      Company: "VVT Solutions Pvt Ltd",
      Location: "Chennai",
      Duration: "April 2023 - May 2024",
    },
    {
      Role: "Junior Video Editor",
      Company: "A-Z Sports Lens LLP",
      Location: "Chennai",
      Duration: "June 2023 - April 2024",
    },
  ],
};

//2. For the above JSON Iterate Over all for Loops (for,for in,for of)
//Ans:
//for Loop:
for (var i = 0; i < Res.Education.length; i++) {
  console.log(
    Res.Education[i].Course,
    Res.Education[i].Institution,
    Res.Education[i].Location,
    Res.Education[i].Duration
  );
}
//for in loop
for (var i in Res.Education) {
  console.log(
    Res.Education[i].Course,
    Res.Education[i].Institution,
    Res.Education[i].Location,
    Res.Education[i].Duration
  );
}
//for of loop
for (var i of Res.Education) {
  console.log(i.Course, i.Institution, i.Location, i.Duration);
}
//forEach loop
Res.Education.forEach(function (i) {
  console.log(i.Course, i.Institution, i.Location, i.Duration);
});
