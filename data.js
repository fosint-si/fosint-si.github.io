/**
 * FOSINT-SI 2026 — data.js
 */

const SITE = {

  conference: {
    shortName:   "FOSINT-SI 2026",
    fullName:    "Foundations of Open Source Intelligence and Security Informatics",
    edition:     "2026",
    location:    "Rabat, Morocco",
    dates:       "24–27 August 2026",
    format:      "In-Person",
    conjunction: {
      name: "ASONAM 2026",
      url:  "http://asonam.cpsc.ucalgary.ca/2026/",
    },
    contact:     "diaylosteiman@gmail.com",
    submitUrl:   "https://cmt3.research.microsoft.com/ASONAM2026",
    heroImage:   "images/Rabat.webp",
    heroEyebrow: "International Symposium",
    heroTitle:   "<em>F</em>oundations of <em>O</em>pen <em>S</em>ource <em>I</em>ntelligence &amp; <em>S</em>ecurity <em>I</em>nformatics",
  },

  callForPapers: [
    "Open source intelligence for cyber situational awareness related to concepts, models and methods for cyber threat intelligence in tactical, operational and strategic levels are central to the scope of this event. Cyberattacks are becoming increasingly complex and routine threats emerging from an evolving threat landscape. Security breaches frequently compromise sensitive information, exposing personal identities, intellectual property or financial assets. Things will get a lot worse when advanced attacks target public infrastructure on which we all depend. Besides temporal disruption of critical services, sophisticated attacks can cause physical damage to vital systems like the electric grid or intelligent transportation systems.",
    "Criminal networks and terrorist groups often operate globally, hiding their illicit activities by taking advantage of information and communications technology. Digital communication enables global communities that are hard to track. Open source intelligence can be a powerful tool for combating crime by linking global and local crime patterns to help understand how criminal activities are connected across crime spaces and emerging trends such as the inevitable shift of conventional organized crime to the cyber arena.",
    "Cyber threat information can be drawn from countless sources from the dark and surface web such as hacker forums, darknet markets, internet relay chats, and social media. This situation calls for radical advances in using cutting-edge data mining, machine learning and predictive analytics combined with social network analysis and natural language processing to detect, disrupt and neutralize cyber and physical threats. We invite submissions of original research papers describing solutions and systems for all aspects of open source intelligence and security informatics. Topics of interest include but are not limited to cyber threat intelligence, cybercrime analysis, web intelligence and security, big crime data mining algorithms and open source situational awareness.",
    "Papers will be thoroughly reviewed by experts in the field and will be selected based on their originality, timeliness, significance, relevance, and clarity of presentation. Further, authors should certify that their submissions contain substantially new and previously unpublished research. Accepted and presented papers will be included in the FAB 2026 Conference Proceedings and forwarded for inclusion in Springer LNCS. The conference proceedings will be submitted for EI indexing as part of Springer LNCS. The proceedings will be also covered by several other indexes, including DBLP, SCOPUS, etc. A selection of high-quality research papers from FOSINT-SI 2026 will be invited to submit an extended version for an edited book in the Lecture Notes in Social Networks (LNSN) series published by Springer.",
  ],

  submission: {
    springerUrl: "https://www.springernature.com/gp/authors/publish-a-book/step-by-step-conference-proceedings?srsltid=AfmBOorN2naasHxUOm-O4QpL2rIrpAlWFWAQqk0kTrVhRj3VeDbhouTI",
    asonamUrl:   "http://asonam.cpsc.ucalgary.ca/2026/",
    paragraphs: [
      "We welcome all submissions reporting original and unpublished research written in English and pertaining to the topics mentioned in the Call For Paper page.",
      "Three categories of submissions will be accepted: full papers up to 15 pages, short communications up to 8 pages, and abstracts up to 4 pages, all in <a href=\"https://www.springernature.com/gp/authors/publish-a-book/step-by-step-conference-proceedings?srsltid=AfmBOorN2naasHxUOm-O4QpL2rIrpAlWFWAQqk0kTrVhRj3VeDbhouTI\" target=\"_blank\" class=\"format\">Springer conference format.</a>",
      "Submissions should include the title, authors, affiliation, e-mail address, tel/fax numbers, abstract, and postal address on the first page. Papers should be submitted online using the symposium Online Submission System.",
      "Paper submission implies one of the authors must register and attend the symposium to present the paper. FOSINT-SI 2026 participants will also enjoy free access to the full program of <a href=\"http://asonam.cpsc.ucalgary.ca/2026/\" target=\"_blank\" class=\"format\">ASONAM 2026</a> and all the accompanying symposia and workshops.",
    ],
    submitLabel: "Submit via CMT",
  },

  deadlines: [
    {
      label:   "Full Paper Submission Deadline",
      isoDate: "2026-06-01T10:59:00Z",
      key:     false,
      dateOnly: false,
    },
    {
      label:   "Notification of Acceptance",
      isoDate: "2026-07-07T23:59:00Z",
      key:     false,
      dateOnly: true,
    },
    {
      label:   "Author Registration Due",
      isoDate: "2026-07-11T10:59:00Z",
      key:     false,
      dateOnly: false,
    },
    {
      label:   "Camera-Ready Papers Due",
      isoDate: "2026-07-21T10:59:00Z",
      key:     false,
      dateOnly: false,
    },
    {
      label:   "3-Days Conference — Rabat, Morocco",
      isoDate: "2026-08-24T08:00:00Z",
      key:     false,
      dateOnly: true,
    },
  ],

  chairs: [
    { role: "Steering Chair",          name: "Reda Alhajj",           affil: "University of Calgary, Canada" },
    { role: "General Chair",           name: "Lisa Kaati",             affil: "Stockholm University, Sweden" },
    { role: "Program co-Chair",           name: "Uwe Glässer",            affil: "Simon Fraser University, Canada" },
    { role: "Program co-Chair",           name: "Mohammad Tayebi",        affil: "Simon Fraser University, Canada" },
    { role: "Program Coordinator",     name: "Erfan Shafagh",            affil: "Simon Fraser University, Canada" },
    { role: "Local Arrangement Chair", name: "El Moukhtar Zemmouri",   affil: "ENSAM-Meknès, Morocco" },
  ],

  programCommittee: [
    { name: "Vahid Behzadan",     affil: "University of New Haven, USA" },
    { name: "Joel Brynielsson",   affil: "KTH Royal Institute of Technology, Sweden" },
    { name: "Sajedul Talukder",   affil: "Southern Illinois University, USA" },
    { name: "Panos Kostakos",     affil: "University of Oulu, Finland" },
    { name: "Stefanos Vrochidis", affil: "Information Technologies Institute, Greece" },
    { name: "Richard Frank",      affil: "Simon Fraser University, Canada" },
    { name: "Andrew Park",        affil: "Thompson Rivers University, Canada" },
    { name: "Nathan Clarke",      affil: "University of Plymouth, UK" },
    { name: "Ian McCulloh",       affil: "Johns Hopkins University, USA" },
    { name: "Mazaher Kianpour",   affil: "Norwegian University of Science and Technology, Norway" },
  ],

  editions: [
    { year: "2025", location: "Niagara Falls, Canada",  venue: "Embassy Suites Niagara Falls",             dates: "August 24–27",    image: "niagara.jpg" },
    { year: "2024", location: "Cosenza, Italy",          venue: "University of Calabria",                   dates: "September 2–5",   image: "italy.jpg" },
    { year: "2023", location: "Kusadasi, Turkey",        venue: "Pine Bay Holiday Resort",                  dates: "November 6–9",    image: "kusadasi.jpg" },
    { year: "2022", location: "Istanbul, Turkey",        venue: "Medipol University + Virtual",             dates: "November 10–13",  image: "istanbul.webp" },
    { year: "2021", location: "Virtual",                 venue: "",                                         dates: "November 10–13",  image: "zoom.jpg" },
    { year: "2020", location: "Virtual",                 venue: "",                                         dates: "December 7–10",   image: "zoom.jpg" },
    { year: "2019", location: "Vancouver, Canada",       venue: "Marriott Pinnacle Hotel",                  dates: "August 27–30",    image: "vancouver.jpg" },
    { year: "2018", location: "Barcelona, Spain",        venue: "Crowne Plaza Hotel",                       dates: "August 28–31",    image: "Barcelona.webp" },
    { year: "2017", location: "Sydney, Australia",       venue: "Mercure Hotel",                            dates: "August 1–2",      image: "sydney.jpg" },
    { year: "2016", location: "San Francisco, USA",      venue: "Sir Francis Drake Hotel",                  dates: "August 19–20",    image: "sanfrancisco.jpg" },
    { year: "2015", location: "Paris, France",           venue: "TELECOM ParisTech",                        dates: "August 26–27",    image: "paris.jpg" },
    { year: "2014", location: "Beijing, China",          venue: "Beijing International Convention Center",  dates: "August 18–19",    image: "beijing.jpg" },
    { year: "2013", location: "Niagara Falls, Canada",   venue: "Sheraton on the Falls Hotel",              dates: "August 26–27",    image: "niagara.jpg" },
    { year: "2012", location: "Istanbul, Turkey",        venue: "Kadir Has University",                     dates: "August 27–28",    image: "istanbul.webp" },
  ],

};
