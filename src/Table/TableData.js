export const data = [
  {
    id: "1",
    name: "Transport",
    Parent: "",
    Child: [
      {
        id: "1",
        name: "Train",
        Parent: "Transport",
        Child: [
          {
            id: "1",
            name: "Gujarat Express",
            Parent: "Train",
            Child: [],
          },
          {
            id: "2",
            name: "Gujarat Express",
            Parent: "Train",
            Child: [],
          },
          {
            id: "3",
            name: "Gujarat Express",
            Parent: "Train",
            Child: [],
          },
          {
            id: "4",
            name: "Gujarat Express",
            Parent: "Train",
            Child: [],
          },
        ],
      },
      {
        id: "2",
        name: "Train 1",
        Parent: "Transport",
        Child: [],
      },
    ],
  },
  {
    id: "2",
    name: "General",
    Parent: "",
    Child: [
      {
        id: "1",
        name: "Software",
        Parent: "General",
        Chlid: [
          {
            id: "1",
            name: "MS Office",
            Parent: "Software",
          },
        ],
      },
      {
        id: "2",
        name: "Hardware",
        Parent: "General",
        Chlid: [
          {
            id: "1",
            name: "CPU",
            Parent: "Hardware",
          },
        ],
      },
    ],
  },
];
