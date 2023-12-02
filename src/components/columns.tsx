export const COLUMNS = [
  {
    Header: "Nazwa",
    accessor: "ItemName" as const,
  },
  {
    Header: "STR1",
    id: "Feps",
    accessor: (data: { Feps: any[] }) => {
      var item1 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Strength +1") {
            item1 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item1}</p>;
    },
  },
  {
    Header: "STR2",
    id: "Fepss",
    accessor: (data: { Feps: any[] }) => {
      var item2 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Strength +2") {
            item2 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item2}</p>;
    },
  },
  {
    Header: "AGI1",
    id: "Feps2",
    accessor: (data: { Feps: any[] }) => {
      var item1 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Agility +1") {
            item1 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item1}</p>;
    },
  },
  {
    Header: "AGI2",
    id: "Feps22",
    accessor: (data: { Feps: any[] }) => {
      var item2 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Agility +2") {
            item2 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item2}</p>;
    },
  },
  {
    Header: "INT1",
    id: "Feps3",
    accessor: (data: { Feps: any[] }) => {
      var item1 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Intelligence +1") {
            item1 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item1}</p>;
    },
  },
  {
    Header: "INT2",
    id: "Feps33",
    accessor: (data: { Feps: any[] }) => {
      var item2 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Intelligence +2") {
            item2 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item2}</p>;
    },
  },
  {
    Header: "CON1",
    id: "Feps4",
    accessor: (data: { Feps: any[] }) => {
      var item1 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Constitution +1") {
            item1 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item1}</p>;
    },
  },
  {
    Header: "CON2",
    id: "Feps44",
    accessor: (data: { Feps: any[] }) => {
      var item2 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Constitution +2") {
            item2 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item2}</p>;
    },
  },
  {
    Header: "PER1",
    id: "Feps5",
    accessor: (data: { Feps: any[] }) => {
      var item1 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Perception +1") {
            item1 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item1}</p>;
    },
  },
  {
    Header: "PER2",
    id: "Feps55",
    accessor: (data: { Feps: any[] }) => {
      var item2 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Perception +2") {
            item2 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item2}</p>;
    },
  },
  {
    Header: "CHA1",
    id: "Feps6",
    accessor: (data: { Feps: any[] }) => {
      var item1 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Charisma +1") {
            item1 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item1}</p>;
    },
  },
  {
    Header: "CHA2",
    id: "Feps66",
    accessor: (data: { Feps: any[] }) => {
      var item2 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Charisma +2") {
            item2 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item2}</p>;
    },
  },
  {
    Header: "DEX1",
    id: "Feps7",
    accessor: (data: { Feps: any[] }) => {
      var item1 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Dexterity +1") {
            item1 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item1}</p>;
    },
  },
  {
    Header: "DEX2",
    id: "Feps77",
    accessor: (data: { Feps: any[] }) => {
      var item2 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Dexterity +2") {
            item2 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item2}</p>;
    },
  },
  {
    Header: "WIL1",
    id: "Feps8",
    accessor: (data: { Feps: any[] }) => {
      var item1 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Will +1") {
            item1 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item1}</p>;
    },
  },
  {
    Header: "WIL2",
    id: "Feps88",
    accessor: (data: { Feps: any[] }) => {
      var item2 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "will +2") {
            item2 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item2}</p>;
    },
  },
  {
    Header: "PSY1",
    id: "Feps9",
    accessor: (data: { Feps: any[] }) => {
      var item1 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Psyche +1") {
            item1 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item1}</p>;
    },
  },
  {
    Header: "PSY2",
    id: "Feps99",
    accessor: (data: { Feps: any[] }) => {
      var item2 = "0";
      if (data.Feps) {
        data.Feps.forEach((fep) => {
          if (fep.Name == "Psyche +2") {
            item2 = fep.Value;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item2}</p>;
    },
  },
  {
    Header: "Składniki",
    id: "Ingredients9",
    accessor: (data: { Ingredients: any[] }) => {
      var item = "";
      if (data.Ingredients) {
        data.Ingredients.forEach((ing) => {
          if (item != "") {
            item = [item, ing.Name + ":" + ing.Percentage].join(",");
          } else {
            item = ing.Name + ":" + ing.Percentage;
          }
        });
      }
      return <p style={{ textAlign: "center" }}>{item}</p>;
    },
  },
];
