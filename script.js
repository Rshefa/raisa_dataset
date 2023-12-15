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
              const temp = parseFloat(row[1]); 
          

              years.push(year)
              temps.push(temp + 14)

             
            });

            return { years, temps};

          }
    //end of functions
    //call the function to test if you see the image on the left in the console


    async function getChart() {
        const ctx = document.getElementById('myChart');
        const data = await getData();
        const adjustedTemps = data.temps.map(temp => (temp)); // Convert temps to numbers
    
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.years,
                datasets: [{
                    label: 'Global Avg Temp',
                    data: adjustedTemps,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color of the line
                    borderColor: 'rgba(75, 192, 192, 1)', // Border color of the line
                    borderWidth: 2, // Width of the line
                    pointRadius: 4, // Radius of data points
                    pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Background color of data points
                    pointBorderColor: '#fff', // Border color of data points
                    pointHoverRadius: 6, // Hover radius of data points
                    pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)', // Hover background color of data points
                    pointHoverBorderColor: 'rgba(220, 220, 220, 1)', // Hover border color of data points
                    pointHitRadius: 10, // Hit radius of data points
                }]
            },
            options: {
                scales: {
                    y: {
                        
                        min: 13, // Set your desired minimum temperature
                        max: 15.2, // Set your desired maximum temperature
                         
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            fontSize: 16, // Set the font size for the label
                        }
                    }
                }
            }
        });
    }
  
    