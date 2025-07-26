const hierarchyData = {
  BH1: {
    amount: 65,
    children: {
      BL1: {
        amount: 67.5,
        children: {
          BM1: {
            amount: 75,
            children: {
              BE1: { amount: 40 },
              BE2: { amount: 80 },
              BE3: { amount: 90 },
              BE4: { amount: 90 }
            }
          },
          BM2: {
            amount: 85,
            children: {
              BE1: { amount: 95 },
              BE2: { amount: 75 },
              BE3: { amount: 100 },
              BE4: { amount: 70 }
            }
          },
          BM3: {
            amount: 65,
            children: {
              BE1: { amount: 55 },
              BE2: { amount: 75 },
              BE3: { amount: 45 },
              BE4: { amount: 85 }
            }
          },
          BM4: {
            amount: 45,
            children: {
              BE1: { amount: 85 },
              BE2: { amount: 25 },
              BE3: { amount: 55 },
              BE4: { amount: 15 }
            }
          }
        }
      },
      BL2: { amount: 72.5, children: {} },
      BL3: { amount: 80, children: {} },
      BL4: { amount: 40, children: {} }
    }
  },
  BH2: { amount: 90, children: {} },
  BH3: { amount: 40, children: {} },
  BH4: { amount: 70, children: {} }
};

export default hierarchyData;
