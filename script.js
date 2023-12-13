async function getData() {
    const response = await           
    fetch("ZonAnn.Ts+dSST.csv");

    const data = await response.text();
    const rows = data.split("\n").slice(1);
    const years = [];
    const temps = [];
    rows.forEach((elem) => {
              const row = elem.split(",");
              const year = row[0];
              const temp = row[1];

              years.push(year)
              temps.push(temp + 14)

              console.log(year, temp);
            });

          }
    //end of functions
    //call the function to test if you see the image on the left in the console
    const chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, ticks) {
                            return '$' + value;
                        }
                    }
                }
            }
        }
    });